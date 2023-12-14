---
title: Nightly 2023-12-14
description: 
date: 2023-12-14T08:16:00Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-14/nightly-2023-12-14-linux.tar.gz
    name: nightly-2023-12-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-14/nightly-2023-12-14-mac.dmg
    name: nightly-2023-12-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-14/nightly-2023-12-14-windows-x64.zip
    name: nightly-2023-12-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-14/nightly-2023-12-14-windows-x86.zip
    name: nightly-2023-12-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 133903663
tag_name: 'nightly-2023-12-14'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

- default bs patra has broken animation [`e846caa2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e846caa2fd4fbe0db14b7a24facfc2884e056013)
- newer hero movement ladder polish [`172c7a5ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/172c7a5ef8223e28619e53c497ec4740fca3e74c)

### Player

- spotlights with color setting '0,0,0' or tile setting '0,0' now function [`8da01272a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8da01272a984af520ab49f9e5b105af03363d42b)
- Allow throwing lifted object without validating cost [`498f70f46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/498f70f468ede4e3cc5ffddd94369bfac350aee4)
- thrown weapons now should hit enemies that they land on [`b11265992`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b112659922b3f05c0762cdd654137c4b16a9368c)
- all 'break on landing' weapons should hit enemies/the player that they land on [`fed7aab0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fed7aab0b975b764669ebcf680c0da7526990985)
- correctly make qstpath relative to quests dir in "custom_game" dialog [`019c880c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/019c880c6169d5ad1486b442524d9d6990a80d81)
- use correct sav path for -standalone mode [`9346ac6a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9346ac6a84e178119b4e7b23014f8753cd6897ae)

### Editor

- timeout of 0 for parser timeout now acts as "no timeout" [`975602f22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/975602f22fc4ac453bd61cc8c1c959d37c54f405)

### ZScript

- al_rest crashing when using debug feature [`6058be2ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6058be2ba7566ce9918314f64c5ee614428008b3)
- parser configs not working [`74a81247e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74a81247e06e0ac62260094d09cd36cdaed4ef2e)
- issues running destructors [`7d0dc5299`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d0dc529926a64c13a020183361badd88d47edef)

# Documentation

- fix typo [`9dc086113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9dc086113ed1b005d004bd95be4c43be52ca2369)

# Build

- fix missing libogg for web build [`a5254efa0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5254efa02e0533cd375b1bd8da60c41f3ce6af2)

# Refactors

- remove unsupported color_depth option [`f827b35bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f827b35bbf2f87febb529c32c64cd72ae6b74917)
- load text files more efficiently [`663e4dacf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/663e4dacf1e94fed56d4970930fff61ed274600f)

### ZScript

- copy script entry to tempfile quicker [`267bd5af2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/267bd5af20658100278850b659b17d790a7bdfe1)
- manually parse config file, drop al_init [`28fe49bc6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28fe49bc6fd1dc6387edb0c3f2b37a82f177d07a)

# Tests

- add nargads_trail_crystal_crusades.zplay [`08c75565d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08c75565df7dd48e53592c8444781f59b75dbf25)

# Misc.

- Remove '(Experimental)' label from FFC solidity [`5a4663794`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a46637948043932272b824eeaee6ff169240e4f)

