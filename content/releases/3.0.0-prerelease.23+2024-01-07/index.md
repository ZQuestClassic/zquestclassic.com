---
title: 3.0 Prerelease 23 2024-01-07
description: 
date: 2024-01-07T07:46:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.23%2B2024-01-07/3.0.0-prerelease.23%2B2024-01-07-linux.tar.gz
    name: 3.0.0-prerelease.23+2024-01-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.23%2B2024-01-07/3.0.0-prerelease.23%2B2024-01-07-mac.dmg
    name: 3.0.0-prerelease.23+2024-01-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.23%2B2024-01-07/3.0.0-prerelease.23%2B2024-01-07-windows-x64.zip
    name: 3.0.0-prerelease.23+2024-01-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.23%2B2024-01-07/3.0.0-prerelease.23%2B2024-01-07-windows-x86.zip
    name: 3.0.0-prerelease.23+2024-01-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136089813
tag_name: '3.0.0-prerelease.23+2024-01-07'
channel: '3'
tags:
  - releases
---




# Features

### Player

- optimize useless stack push/pops in old scripts [`a273d27c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a273d27c3a7a6c125728646c38c67a22702acdb8)
   &nbsp;
   >This saves 15% of instructions for Yuurand. 
   >

# Bug Fixes

- placing flags on layers not marking the layer screen as "valid" [`68fc92a3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68fc92a3c957fd8cf5f680ee521efc035ee51a69)
- ensure file is closed when qst fails to load [`621d6d1f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/621d6d1f84ddab7e7ebdc2b183858fdcf9d2c112)

### Player

- detect dtors as separate functions in structured zasm [`08e17d01d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08e17d01de2d6632f7824788faf7e3137a890e5c)
- remember last save slot position when returning to save select screen [`b05607e2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b05607e2e3cc872858ea4e5f5f158f4f51248353)
- [win32] invisible hero because of MSVC bug [`1c92f8d89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c92f8d8953a3850cf98a030dc54f9895924ae04)

### Editor

- warp dialogs not properly previewing negative xoffset dmap map-marked squares [`0dad039a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0dad039a4d73bc5cc29a5c07a35ffa9e622fdf7e)

### ZScript

- invalid character errors wrongly occurring for values 128-255 [`512d5b72c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/512d5b72c41300bf6caf76574598b894a2403581)
- subscreen widgets not allowing SUB_COLOR_TRANSPARENT to be used [`163b7406d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/163b7406d46c76c720fa9874c670e9b5fc970333)
- class function params with same-name as class member not shadowing properly [`bbc08487d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbc08487df626aada1b39f1bec9c7f3bc8e998ec)
- class/object destructors stack being offset wrongly [`56967f8d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/56967f8d8d45485a390614dde22a0d21fff2dcd6)
- clear script data when reassigning script [`03ce2a4f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03ce2a4f66b86a1e13b975f455626e0ac0fcf113)
   &nbsp;
   >Previously, only FFCs properly reset their state when changing their script. All others would retain their state, so would instantly do all the wrong things. 
   >

# Tests

- add replay test for class ctor/dtor [`57c8cc5e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57c8cc5e1a58fe03e8e5c271bd943cc6cac0f6e7)
