# kubetail-ui

Kubetail-UI is a project for developing and sharing React components and other UI elements for Kubetail

<a href="https://discord.gg/pXHXaUqt"><img src="https://img.shields.io/discord/1212031524216770650?logo=Discord&style=flat-square&logoColor=FFFFFF&labelColor=5B65F0&label=Discord&color=64B73A"></a>
[![slack](https://img.shields.io/badge/Slack-kubetail-364954?logo=slack&labelColor=4D1C51)](https://join.slack.com/t/kubetail/shared_invite/zt-2cq01cbm8-e1kbLT3EmcLPpHSeoFYm1w)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## Getting started

First, install the dependencies:

```console
pnpm install
```

Next, run storybook:

```console
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006) in your browser to see Storybook.

## Getting started in Docker

Instead of running the project on your local machine you can also run it in a container using `docker compose`:

```console
docker compose up
```

Open [http://localhost:6006](http://localhost:6006) in your browser to see Storybook.

## Scripts

* build - Run the build script (`$ pnpm build`)
* lint - Run the linter (`$ pnpm lint`)
* test - Run the unit tests (`$ pnpm test`)
* storybook - Run the storybook development server (`$ pnpm storybook`)
* build-storybook - Run the storybook build script (`$ pnpm build-storybook`)

## Integrate kubetail-ui into your Tailwind CSS project

1. Install the `@kubetail/ui` package

```console
pnpm add @kubetail/ui
```

2. Modify your Tailwind css file

```css
@import 'tailwindcss';


@import '@kubetail/ui';
@source '../node_modules/@kubetail/ui/**/*.js';

@custom-variant dark (&:where(.dark, .dark *));
```
