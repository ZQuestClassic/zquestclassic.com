---
title: Nightly 2023-07-17
description: 
date: 2023-07-17T07:24:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-17/nightly-2023-07-17-linux.tar.gz
    name: nightly-2023-07-17-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-17/nightly-2023-07-17-mac.dmg
    name: nightly-2023-07-17-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-17/nightly-2023-07-17-windows-x64.zip
    name: nightly-2023-07-17-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-17/nightly-2023-07-17-windows-x86.zip
    name: nightly-2023-07-17-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 112462680
tag_name: nightly-2023-07-17
tags:
  - releases
---

# Features

### ZScript

- JIT compile scripts with background threads [`e0a845b53`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e0a845b53192034c814c427100a0349ce9204fe4)

   Control how many threads are used with `[ZSCRIPT] jit_threads`.
   
   ```ini
   # Number of background threads for compiling scripts.
   # -1 to set to number of available CPU threads
   # -x to set to x/(number of available CPU threads)
   # 0 to only compile on the main thread
   jit_threads = -2
   ```

### Visual Studio Code Extension

- create VS Code extension [`dabe7c091`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dabe7c091b89fa2e09217dfb63c652184b78f65e)

   This adds support to VS Code for displaying error/warning messages,
   syntax highlighting, and code formatting. You can install it by
   searching for "zscript" in the extensions Marketplace. See the extension
   homepage for more:
   
   https://marketplace.visualstudio.com/items?itemName=cjamcl.zquest-lsp
- update vscode extension keywords [`6ecf0775a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6ecf0775afeac108bb4f806b76f9c1835c0a98d1)

# Bug Fixes

### Player

- check for invalid screen index in subscreen map draw [`f327193e1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f327193e1c6574956ac1187cb3bc2bebdfcfbbb9)

### ZScript

- QUOTEDSTRINGs not merging for all use cases (ex. annotations) [`c9caaafa5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c9caaafa5e3eb75a73070b8c3dcd2e7c075f831b)

### Visual Studio Code Extension

- support missing edge case for parsing error [`8b70ca3d0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8b70ca3d0e0c2127ae7e5895c9217c43e3319065)

# Build

- upgrade to latest allegro [`845acc646`](https://github.com/ArmageddonGames/ZQuestClassic/commit/845acc646a489b2b6922a679f4fe9675384226fc)

   https://github.com/liballeg/allegro5/compare/68946485f315c5a6df753250ec5979ab291c60a9...c2bf1e11bed0b63539267115baf190741e0a437a
   
   https://github.com/connorjclark/allegro5/compare/my-fork-2..my-fork-3

# Refactors

### Player

- remove windows midi_patch; improve switch out/in [`dc48c2763`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dc48c276395fc554bb038a58c788483eb1659354)

   This code was pausing/restarting MIDIs and resetting the volume in a
   convulted manner, likely to workaround some old bug with MIDIs seen on
   windows only. We've since upgraded to allegro 5, which gives a different
   backend for playing MIDIs, so this bug is likely ancient history now.
   
   There was some issue with blurring window focus losing percussion,
   sometimes. Not sure if this change will have an impact, but let's see.
   
   Replaced the midi_patch UI toggle with pause_in_background.
   
   https://discord.com/channels/876899628556091432/1114306020848717904

# Misc.

- set failing_frame in replays for rng desync, even in replay mode [`6bbe3a0e9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6bbe3a0e92edb16076b9987335fd7f4c61d3e45f)
- add new commit scope for the extension: vscode [`57d2c1930`](https://github.com/ArmageddonGames/ZQuestClassic/commit/57d2c19301c4b4e8d1639358715d920f5fd92cd9)

### Visual Studio Code Extension

- publish 1.0.5 [`6092d4483`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6092d448398f0ba9cef5c787b3eebe6850e8a528)
