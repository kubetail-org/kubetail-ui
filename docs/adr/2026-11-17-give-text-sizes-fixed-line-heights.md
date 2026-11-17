---
title: Give text sizes fixed line heights
date: 2026-11-17
scope: styling
status: Accepted
---

# Give text sizes fixed line heights

## Context

`src/index.css` sets each `--text-*--line-height` token. The `--text-heading-*` tokens already used `rem` lengths, but the plain text sizes used unitless ratios written as `calc(<line rem> / <font rem>)`, Tailwind's own style. Four of those ratios repeat (`text-xs` 1.333…, `text-sm` 1.428571…, `text-lg` 1.666…, `text-2xl` 1.58333…), so the computed line height lands a hair under the intended whole pixel, e.g. 15.999…px instead of 16px.

WebKit lays out in 1/64px steps, so each such line came out 1/64px short and the shortfall added up down the page. In Kstack's desktop app (WebKitGTK, device pixel ratio 2), a textarea under a `text-sm` heading and a `text-xs` description started at `y = 181.96875` instead of `182` and drew its bottom border one device pixel thinner than the others (#171).

## Decision

Every `--text-*--line-height` token in `src/index.css` is a `rem` length: `text-xs` 1rem, `text-sm` 1.25rem, `text-base`/`text-md` 1.5rem, `text-lg` 1.875rem, `text-xl` 2rem, `text-2xl` 2.375rem. These are the same pixel values the ratios aimed for, so nothing moves where layout was already exact.

## Alternatives considered

**Change only the four inexact tokens.** `text-base` (`1.5 / 1`) and `text-xl` (`2 / 1.25`) compute exactly and could have stayed ratios. Rejected: a length and a ratio inherit differently (see below), so a mixed set would make a child's line height depend on which size its parent happened to use.

**Round the ratios to a few decimals.** Rejected: a rounded ratio is still a non-integer pixel value for some font sizes, and it would land slightly over or under instead of exact.

## Consequences

Line heights land on whole pixels, matching the `--text-heading-*` tokens and the Figma library's fixed line heights.

A length inherits as a fixed size, not a ratio. A child that sets only a font size (e.g. `text-[13px]` inside `text-sm`) keeps the parent's 20px line rather than scaling it. Set a line height on such a child (`text-[13px]/5`, `leading-*`) when it needs one.

## Revisit when

Browsers stop accumulating sub-pixel error from repeating ratios, or we need text that scales its line height with arbitrary font sizes by default.
