---
title: 3.0 Prerelease 27 2024-01-17
description: 
date: 2024-01-17T06:22:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.27%2B2024-01-17/3.0.0-prerelease.27%2B2024-01-17-linux.tar.gz
    name: 3.0.0-prerelease.27+2024-01-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.27%2B2024-01-17/3.0.0-prerelease.27%2B2024-01-17-mac.dmg
    name: 3.0.0-prerelease.27+2024-01-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.27%2B2024-01-17/3.0.0-prerelease.27%2B2024-01-17-windows-x64.zip
    name: 3.0.0-prerelease.27+2024-01-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.27%2B2024-01-17/3.0.0-prerelease.27%2B2024-01-17-windows-x86.zip
    name: 3.0.0-prerelease.27+2024-01-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 137351508
tag_name: '3.0.0-prerelease.27+2024-01-17'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- support multiple palettes in map preview/image export [`7d9baa655`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d9baa655b53dc39fcc6f3819bdacb6b319b3c33)

# Bug Fixes

- changer ffcs counting for trigger groups and similar effects (they shouldn't) [`1a1bd37ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a1bd37ac769db838a390e88b6fef03288576b01)

### Player

- still allow for game area to be stretched, ignoring aspect ratio [`5a641ebce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a641ebce89699f6e069cb74dbc9fafd0bec9a7f)
- ignore gamepad input when window is not active [`b355cfed6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b355cfed6350661f159b79dc138f4ec0cedb4e53)
- weird newer movement edge-case [`1dcaa2a4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1dcaa2a4cc3e5facb634154cb663db9972f5903b)
- opening spacebar map triggering some secret effects on the current screen [`9baf8d694`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9baf8d69416e28a0a5e7265c956fe079325706ce)
- lens unintentionally making enemies sometimes invisible [`5de1f0c26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5de1f0c2620300c1a2aa06da39e2f84a81f94b7d)

### Editor

- handle quest path/title with spaces in package export [`11b09ef8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11b09ef8c7c6a1d1aa45f0908f5964a6a2b12d2c)

### ZScript

- sanity check for bitmap->isValid() and bitmap->isAllocated() [`b264073c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b264073c2ef61eea40535b4dfbe540f073ab1907)

# Tests

- define calling convention for jit regression tests [`03e3f0871`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03e3f087183fc868a1da6cc4b539f24fbc391a63)

# Misc.

- Revert "fix!: more lens/enemy stuff missed in prior commit" [`fbc664523`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbc664523bbab0c86587af13c1a5db04f79c28fe)
   &nbsp;
   >This reverts commit b9cafe07b073b7de07bb2f27207582bc8d435d62. 
   >
- Revert "fix: changer ffcs counting for trigger groups and similar effects (they shouldn't)" [`bf50df15b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf50df15beb60b36820961f3d3d123512dfd6981)
   &nbsp;
   >This reverts commit 1a1bd37ac769db838a390e88b6fef03288576b01. 
   >

