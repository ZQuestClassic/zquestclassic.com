---
title: 3.0 Prerelease 11 2023-12-10
description: 
date: 2023-12-10T02:42:44Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.11%2B2023-12-10/3.0.0-prerelease.11%2B2023-12-10-linux.tar.gz
    name: 3.0.0-prerelease.11+2023-12-10-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.11%2B2023-12-10/3.0.0-prerelease.11%2B2023-12-10-mac.dmg
    name: 3.0.0-prerelease.11+2023-12-10-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.11%2B2023-12-10/3.0.0-prerelease.11%2B2023-12-10-windows-x64.zip
    name: 3.0.0-prerelease.11+2023-12-10-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.11%2B2023-12-10/3.0.0-prerelease.11%2B2023-12-10-windows-x86.zip
    name: 3.0.0-prerelease.11+2023-12-10-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 133305471
tag_name: '3.0.0-prerelease.11+2023-12-10'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- Hotkey cheatsheet, open with Shift+? [`a49173623`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a491736232afcf92bc3f44965011a152653d92c9)

# Bug Fixes

- use correct app id in zalleg_setup_allegro [`41139dde1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41139dde14d5cfa964c555695f478feb320c9dd0)
- default bs patra has broken animation [`38d90c960`](https://github.com/ZQuestClassic/ZQuestClassic/commit/38d90c960d7b7ba0448a342ed4b668979bf9f45d)
- newer hero movement ladder polish [`09cc6c5eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09cc6c5eb256e412b8414b9b01d825f264a8c636)

### Player

- spotlights with color setting '0,0,0' or tile setting '0,0' now function [`5b6052c39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b6052c39800ccce88f9934a5da3a9bf3c571c54)
- Allow throwing lifted object without validating cost [`9085badf6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9085badf63d7bdd59280ef8ed1dda3a1912b0d54)
- system menu not closing on reset/quit/etc [`926608eab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/926608eab8dda913674590865558a348a3fa3efb)
- thrown weapons now should hit enemies that they land on [`0d64e0240`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d64e02400637bf10e6b541ff535515a92d2216c)
- all 'break on landing' weapons should hit enemies/the player that they land on [`7442707be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7442707beef59506d89fc67b97166242d2b45568)
- correctly make qstpath relative to quests dir in "custom_game" dialog [`2e9e1302b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e9e1302bdb869ee95350588bf130f048011341f)
- use correct sav path for -standalone mode [`742115e11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/742115e11333df188997ce1dcf962246d1047d36)

# Documentation

- fix typo [`d4ff09563`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4ff095634805dc43b9bb4eafe3bf23de2506b5b)

# Build

- fix missing libogg for web build [`8debab7da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8debab7daf559df21b52ea5c4db5fc887964c839)

# Refactors

- share common allegro app setup [`05eb72d5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05eb72d5b6d872db2538d49edbb55c6c59663df3)
- remove unsupported color_depth option [`c9fad269b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9fad269b5b1a0767669d916a98d1a1fdf46eff6)
- load text files more efficiently [`0964f7481`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0964f74814cc42fb26e8e995180ded7ee2a94efe)

### Player

- move x64 backend jit code to separate file [`9ff9a9a70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ff9a9a70357a859e037975e82fdf21c34911c1a)
- add null jit backend [`ec0a84ab4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec0a84ab43e2d231f8065593309e49a8b6dcf675)

### ZScript

- manually parse config file, drop al_init [`74bfb6f82`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74bfb6f823cdcad33134d830db8496a9525b28b5)
- copy script entry to tempfile quicker [`97b01d5d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97b01d5d7c9e40d5092f75284fc0e1e050518dde)

# Tests

- extract snapshot testing code to base class [`d9d839b21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9d839b21e695398b53ba433b07f225bca092b48)
- add snapshot tests for x64 jit [`07a6ef713`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07a6ef7137ebc51d6618ec34e84e16c3b51984b0)

# Misc.

- Remove '(Experimental)' label from FFC solidity [`c98b5f0a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c98b5f0a901dcf60fe4414f1b2c06507ed3b3238)
