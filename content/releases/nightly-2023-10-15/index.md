---
title: Nightly 2023-10-15
description: 
date: 2023-10-15T00:30:25Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-15/nightly-2023-10-15-linux.tar.gz
    name: nightly-2023-10-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-15/nightly-2023-10-15-mac.dmg
    name: nightly-2023-10-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-15/nightly-2023-10-15-windows-x64.zip
    name: nightly-2023-10-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-15/nightly-2023-10-15-windows-x86.zip
    name: nightly-2023-10-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 125108368
tag_name: 'nightly-2023-10-15'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- Pressing 'esc' while zoomed in on the minimap now unzooms (instead of trying to quit zq) [`918cdafca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/918cdafca1c7bbb7789842d52226a9e3a62f1b42)

### ZScript

- script access for extended dmap titles and new dmap intro string IDs [`21c168a1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21c168a1b5d51fd671dec0c6a83662102fe58f46)

### Web

- include cambria tileset [`34580b86f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34580b86fc5aa19011f1fcafab8571ed8264d69b)

# Bug Fixes

### Editor

- made autocombos respect moving, adding, and removing combos [`f8d89f5ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8d89f5ad91c7b10926217a92862627a5813123e)
- prevent crash when changing font [`640378df8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/640378df82c06c3aa786c5c5b8736200e8c53a0a)
- prevent data loss when grabbing tile from old quests [`f8fdd7bb7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8fdd7bb7489beaccd44ce6d62594a35fe7d02f9)

### ZScript

- 'subdata->TransClock' was not returning -1 properly when not transitioning [`95edf1e5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95edf1e5ea9e9dc0d80ef7758a41d0933d87b215)

# Build

- simplify packaging script [`ee5e02a1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee5e02a1ca26ecc16d59296d9f58ac0ec37786f8)

### Web

- remove post-processing by python script [`f8b2af856`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8b2af856c163b85cae415e98efbc2b549e9e25d)
- include function names in release build, separate dwarf for debug build [`fb44b2a78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb44b2a789f787ccbe0dfe5373cd0cea8564c1da)
- integrate web build into cmake [`7dbb75dee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7dbb75dee0b2581491c1f26f01274251f1edc894)

# Chores

- fix many many typos of `it's` -> `its` [`a7e3cf4ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7e3cf4ec85f16ba02866d17c85082204711092a)

# Refactors

- memcpy the buffer in PACKFILE fread [`8f547f8f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f547f8f5e1f4e92e37cee1116daeea7ab102e06)
   &nbsp;
   >This saves ~500ms on my Mac when loading Yuurand.qst 
   >
- speed up copy_tile / tilesize [`01e13ec0a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01e13ec0a382b03cc9d0b87ca3fe83c2ec2247c9)

### Player

- do far less work in platform_fallthrough [`8861f51f1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8861f51f1e60ab5f7d929d37a7ae6f96c8989589)

### Web

- prevent script trace unless debugger is enabled [`cf3ce065b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf3ce065ba2cce71d7465e8842e9cc991c4f4948)

# Misc.

### Web

- better indicate download progress for compressed assets [`3fb07895d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fb07895d98b8ef34e9c5d2817ccbd0d07c17a7b)

