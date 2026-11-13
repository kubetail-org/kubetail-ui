# Figma

How the [kubetail-ui Figma library](https://www.figma.com/design/KoHFVSSKfENrqPidIkJfpO/kubetail-ui) maps to the code in this repo. The library is a port of `src/elements/` (components) and `src/index.css` (tokens). Files that use the library, such as Kstack's, document their own side: [Kstack's `docs/figma.md`](https://github.com/kstackhq/kstack/blob/main/docs/figma.md).

## Source links and sync lines

- **Each component links to its source file on `main`**, such as `https://github.com/kubetail-org/kubetail-ui/blob/main/src/elements/button.tsx`.
- **Its description ends with the commit the design last matched:**

  ```
  Synced with src/elements/button.tsx @ 0ebc0bb
  ```

  The SHA is the last commit that changed that file when the component was synced, not the commit the sync happened at.

- **The Cover names the commit the whole library was synced from** (`0ebc0bb`).
- **`git log <sha>..main -- <path>` lists the changes since.** Any output means the design may be behind the code. Re-syncing a component updates its line; re-syncing the whole library updates the Cover too.
- **A component changed by a pull request gets its new sync line once the pull request merges.** The merged commit does not exist before then.

## Tokens

- **The library's `Theme` collection mirrors `src/index.css`**: its _Light_ mode is `:root`, its _Dark_ mode is `.dark`. Kubetail's files use these two modes.
- **No `Theme` variable carries alpha.** A translucent color in the code is a paint at reduced opacity; see [Translucent colors](#translucent-colors).
- **A color changed in `src/index.css` is changed by hand** in the matching mode.

## Translucent colors

Each Tailwind form has one Figma encoding:

| Tailwind                                                                     | Figma                                                             |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `<token>/NN` on a theme token, such as `ring-foreground/10` or `bg-muted/50` | The paint is bound to the token's variable, at NN% paint opacity. |
| `opacity-NN`                                                                 | Layer opacity.                                                    |

Back to code:

- A paint bound to a variable, below 100%, is the variable's class with `/NN`: `color/muted` at 50% is `bg-muted/50`.
- Layer opacity is `opacity-NN`.

The plugin API reports a bound variable's own alpha as the paint's opacity. Read the variable's value to tell the two apart: since no `Theme` variable carries alpha, opacity on a paint bound to one is the `/NN`.

## Icons

**The library's icons are Lucide**, synced from the `lucide-react` version in `pnpm-lock.yaml` (1.70.0). An icon's description names that version instead of a source file. When the lockfile moves to a new version, the icons are re-synced from it.

## Descriptions

- **Write a description through `descriptionMarkdown`.** Writing `description` stores `'` and `<` as HTML entities.
- **Put JSX in backticks** (`` `<Button variant="ghost">` ``), or Markdown reads it as HTML.

## Kstack's modes

- **`Theme`'s _Kstack Light_ and _Kstack Dark_ modes are Kstack's**, as is the `font/sans` variable the library's sans text styles are bound to. `font/sans` is Inter in _Light_ and _Dark_, and Roboto Flex in Kstack's.
- **Kubetail's files use _Light_ and _Dark_.**
- **An edit to `Theme` keeps the Kstack modes.** Don't delete or rename them, and give a new variable a value in them too. Kstack's own side is in [its `docs/figma.md`](https://github.com/kstackhq/kstack/blob/main/docs/figma.md#tokens).

## Syncing

**An agent never decides which side wins; it asks the user.** The sync line shows when the code moved, but nothing shows when a Figma component was edited. Before overwriting a Figma component from code, or code from a design, the agent names the components it will change and the direction, and waits for an answer.

An edit to the library reaches other files only once a person publishes it.

## Code Connect

Code Connect needs Figma's Organization or Enterprise plan; the team is on Professional. The source links and sync lines stand in for it.
