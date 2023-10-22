---
title: Nightly 2023-10-22
description: 
date: 2023-10-22T05:08:26Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-22/nightly-2023-10-22-linux.tar.gz
    name: nightly-2023-10-22-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-22/nightly-2023-10-22-mac.dmg
    name: nightly-2023-10-22-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-22/nightly-2023-10-22-windows-x64.zip
    name: nightly-2023-10-22-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-22/nightly-2023-10-22-windows-x86.zip
    name: nightly-2023-10-22-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 126139639
tag_name: nightly-2023-10-22
tags:
  - releases
---



# Bug Fixes

- Init Data dialog sometimes being too tall [`ed36204f0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed36204f0690583d18a84f7d398414a2bf77f77c)
- use cross platform clock for text edit proc [`e6bdfb99d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6bdfb99d1373b781c871f9893a97402e34ce610)
- issue more vsync in old gui proc as needed to catch up [`5add82df0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5add82df0307770a39fad1e1f6f516fabcd4db08)
- [mac] only check for `.app` to allow for app bundle to be renamed [`b393e5875`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b393e5875075bebce15d5405e8beb529a82d6fd0)

### Player

- show previous changes in player data menu when used multiple times without unpausing [`325834d44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/325834d443c558389130742d84a3384a69402806)

### Editor

- use cross platform clock for timing to fix combo editor animation [`163f9a91f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/163f9a91f832446aeb179611374dd8e5d5df8e8f)
- use cross platform clock for zscript compile timing [`cde9a4688`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cde9a4688acfcd6c12fa6395c1f1a42fda02a171)

### ZScript

- fix slowdown caused by draw commands during frozen message strings [`48511cdd5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48511cdd549628e91243a6f8abc0649ff746c5fb)

### Web

- support both landscape orientations [`8206a3008`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8206a3008920522043655bd75bff6c09b7524e0a)

# Documentation

- specify what OS versions we support [`080b61e10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/080b61e10fab35fd3710a626445864484f93e9f0)

# Refactors

- reorder field initializer list to fix compiler warnings [`8d64f8374`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d64f837479b3665916aeccf9f3d2057b84a10eb)
- simplify render tree drawing [`b52d7eaea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b52d7eaea3e605aaf1bbcf1230e9d484489ac548)
   &nbsp;
   >This adds `prepare` and `render` functions to the RenderTreeItem class. Also makes them virtual so that new classes can be made to represent a render item. The minimap drawing code was moved to this.  
   >
   >Consolidates the logic for when a render item is dirty, and moves allegro 4 bitmap handling into a new derived class. 
   >
- use a single bitmap for dialog tint [`8a8ef4667`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a8ef46679deb0e472894a4f31f3a59cc6257712)
- add bitmap_flags to rti [`6af0dcc23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6af0dcc23f77422fe16faa7a9441384fc69ebe90)

### Editor

- move minimap drawing to render_minimap.cpp [`042728610`](https://github.com/ZQuestClassic/ZQuestClassic/commit/042728610ff3b4820e3c474c43b08fbe634b85bc)
- remove dialogs for deprecated modules and quest templates [`0ebbc8450`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ebbc8450d5ba317a76d5b2cc45adeba94b774de)
- move tooltip rendering to render_tooltip.cpp [`911019c55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/911019c55b30410561d05f8c4fa9f7790e2fb863)

# Misc.

- change log of website to new domain [`9d8e9239a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d8e9239a85d3a46c8c4d812f0c9ca92ed65410a)
- remove ag.cfg [`f0f80f38d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0f80f38dfe3bc52a2d3cb7c9363a2cbf968e43c)

### Player

- set cont. heart beep default to off [`9919433e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9919433e698af51d4507966ad12132a7debf608f)

### Editor

- make checkerboard bg in the tile editor align with the tile grid [`2b681111a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b681111a9b5d6dad3539df9bb03372ca19efcda)

