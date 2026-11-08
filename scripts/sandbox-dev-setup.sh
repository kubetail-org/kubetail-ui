#!/usr/bin/env bash
# Set up a Linux-native dev environment for kubetail-ui inside an sbx sandbox,
# without letting its build artifacts collide with the macOS host's.
#
# In direct mode the repo is bind-mounted from the macOS host, so every build
# output path is shared. Two mechanisms keep the two platforms apart:
#
#   1. Configurable paths (the pnpm store) are pointed at Linux-only
#      directories via environment variables.
#   2. Fixed paths that tooling can't relocate (node_modules, dist,
#      storybook-static) get a sandbox-only bind mount on top of them. A bind
#      mount is invisible to the host: macOS keeps its own copy underneath,
#      untouched, while the sandbox sees the Linux one.
#
# node_modules and the pnpm store live on the sandbox's own overlay
# ($OVERLAY_ROOT): node_modules is read thousands of times per Vitest/ESLint
# run, and the host mount makes every read slow.
#
# Every worktree shares the one pnpm store, in its global virtual store layout:
# package files live once inside the store, and each worktree's node_modules
# under $OVERLAY_ROOT/worktrees holds only symlinks into it. The store's hard
# links stay on one mount; link(2) fails across the node_modules bind mount
# even within one filesystem. Never edit a file under node_modules: it is the
# store's copy, shared by every worktree.
#
# The overlay is capped at 20G and wiped on sandbox recreate, so dist and
# storybook-static, small and rarely read, stay on the host's disk under
# $BUILD_ROOT (gitignored).
#
# Idempotent — safe to re-run. Run it once per sandbox boot: bind mounts do not
# survive a restart, the env vars (in /etc/sandbox-persistent.sh) do.

set -euo pipefail

# No-op outside the sandbox. This runs from a SessionStart hook, and the repo is
# shared with the macOS host, so the host's own agents fire this same hook —
# where every redirection here would be wrong. $SANDBOX_VM_ID is set only inside
# the sandbox; the Linux check guards against a stray export.
if [ -z "${SANDBOX_VM_ID:-}" ] || [ "$(uname -s)" != "Linux" ]; then
  exit 0
fi

REPO="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_ROOT="${KUBETAIL_UI_SANDBOX_BUILD_ROOT:-$REPO/.sandbox-linux}"
OVERLAY_ROOT="${KUBETAIL_UI_SANDBOX_OVERLAY_ROOT:-/home/agent/kubetail-ui-build}"
NODE_MODULES="$OVERLAY_ROOT/worktrees$REPO/node_modules"
PNPM_STORE="$OVERLAY_ROOT/pnpm-store"
PERSIST="/etc/sandbox-persistent.sh"
MIN_FREE_MB=2048

echo "→ build root: $BUILD_ROOT"
echo "→ overlay root: $OVERLAY_ROOT"
mkdir -p "$BUILD_ROOT/dist" "$BUILD_ROOT/storybook-static" "$PNPM_STORE" "$NODE_MODULES"

free_mb="$(df --output=avail -BM "$OVERLAY_ROOT" | tail -1 | tr -dc 0-9)"
if [ "$free_mb" -lt "$MIN_FREE_MB" ]; then
  echo "⚠ only ${free_mb}M free on the overlay; installs and builds may fail."
  echo "  Reclaim space with 'pnpm store prune', or by deleting removed"
  echo "  worktrees' node_modules under $OVERLAY_ROOT/worktrees."
fi

# --- 1. bind mounts for paths the tooling can't relocate -------------------
# The sandbox image ships without mount(8); it comes from Debian's mount
# package, and the install persists until the sandbox is recreated.
if ! command -v mount >/dev/null; then
  echo "→ installing mount(8)"
  sudo apt-get update -qq >/dev/null
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y -qq mount >/dev/null
fi

# A mount from any other source (an older layout) is replaced. Comparing
# device and inode tells whether $target already shows $src.
bind() {
  local src="$1" target="$2"
  mkdir -p "$target"
  if [ "$(stat -c %d:%i "$src")" = "$(stat -c %d:%i "$target")" ]; then
    echo "✓ $target already bind-mounted"
    return
  fi
  if mountpoint -q "$target"; then
    sudo umount "$target"
  fi
  sudo mount --bind "$src" "$target"
  echo "✓ $target bind-mounted from $src"
}
bind "$NODE_MODULES" "$REPO/node_modules"
bind "$BUILD_ROOT/dist" "$REPO/dist"
bind "$BUILD_ROOT/storybook-static" "$REPO/storybook-static"

# --- 2. env vars for the paths that are configurable -----------------------
# Written to the persistent env file, which is sourced before every command.
# Every line this script owns is dropped first, so a re-run rewrites the values
# rather than leaving an older copy above them.
#
# pnpm takes settings from PNPM_CONFIG_* or pnpm-workspace.yaml, and the yaml is
# committed — shared with the host and CI, which keep pnpm's default layout. The
# env file is shared by every worktree in the sandbox, so the store path must not
# depend on $REPO. Unset PNPM_CONFIG_ENABLE_GLOBAL_VIRTUAL_STORE and reinstall to
# rule out the layout when something fails only in the sandbox.
sudo touch "$PERSIST"
sudo sed -i \
  -e '/KUBETAIL_UI_SANDBOX_ENV/d' \
  -e '/^export PNPM_CONFIG_STORE_DIR=/d' \
  -e '/^export PNPM_CONFIG_ENABLE_GLOBAL_VIRTUAL_STORE=/d' \
  "$PERSIST"
sudo tee -a "$PERSIST" >/dev/null <<EOF
# KUBETAIL_UI_SANDBOX_ENV — Linux build outputs kept out of the macOS host's paths.
export PNPM_CONFIG_STORE_DIR="$PNPM_STORE"
export PNPM_CONFIG_ENABLE_GLOBAL_VIRTUAL_STORE=true
EOF
echo "✓ env vars written to $PERSIST"

# --- 3. toolchain check against CI -----------------------------------------
# CI pins Node's major in ci.yaml. pnpm itself switches to the packageManager
# pin in package.json (manage-package-manager-versions, on by default), so any
# pnpm on PATH runs the pinned version.
ci_node="$(awk '/node-version:/ { gsub(/[^0-9]/, "", $2); print $2; exit }' "$REPO/.github/workflows/ci.yaml")"
if ! command -v node >/dev/null; then
  echo "⚠ node not found; install Node $ci_node (e.g. 'sudo apt-get install -y nodejs-$ci_node')."
else
  node_major="$(node -p 'process.versions.node.split(".")[0]')"
  if [ "$node_major" != "$ci_node" ]; then
    echo "⚠ node $(node -v) here, CI uses Node $ci_node."
  else
    echo "✓ node $(node -v) matches CI (Node $ci_node)"
  fi
fi
if ! command -v pnpm >/dev/null; then
  echo "⚠ pnpm not found; install it (https://pnpm.io/installation)."
else
  want_pnpm="$(node -p 'require(process.argv[1]).packageManager.split("@")[1].split("+")[0]' "$REPO/package.json")"
  have_pnpm="$(cd "$REPO" && pnpm -v)"
  if [ "$have_pnpm" != "$want_pnpm" ]; then
    echo "⚠ pnpm $have_pnpm runs here, package.json pins $want_pnpm."
  else
    echo "✓ pnpm $have_pnpm matches packageManager"
  fi
fi

echo
echo "Done. Open a new shell (or 'source $PERSIST') to pick up the env vars,"
echo "then run 'pnpm install'."
