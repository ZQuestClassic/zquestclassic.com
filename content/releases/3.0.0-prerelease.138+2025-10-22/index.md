---
title: 3.0 Prerelease 138 2025-10-22
description: 
date: 2025-10-22T05:24:28Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.138%2B2025-10-22/3.0.0-prerelease.138%2B2025-10-22-linux.tar.gz
    name: 3.0.0-prerelease.138+2025-10-22-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.138%2B2025-10-22/3.0.0-prerelease.138%2B2025-10-22-mac.dmg
    name: 3.0.0-prerelease.138+2025-10-22-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.138%2B2025-10-22/3.0.0-prerelease.138%2B2025-10-22-windows-x64.zip
    name: 3.0.0-prerelease.138+2025-10-22-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.138%2B2025-10-22/3.0.0-prerelease.138%2B2025-10-22-windows-x86.zip
    name: 3.0.0-prerelease.138+2025-10-22-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 256247487
tag_name: '3.0.0-prerelease.138+2025-10-22'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### ZScript

- use correct layer screens for `mapdata::isSolid()` [`193071c6e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/193071c6e178cbcd5167683a569b60f88d473f3b)
   &nbsp;
   >This regressed in 6b5e98d (z3) 
   >
- minor issue with return code sometimes being wrong [`1f1bb8672`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f1bb8672c370a589478c33e02fb901b11af449b)
- in jit, handle registers that read from stack [`3b718cdfa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b718cdfa14a52fbfb6d180d8af7927fa63f533b)
- improve zasm register/command dependencies [`48731e838`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48731e83886903e8a324b87bcac89dd2d3001f04)
- prevent rare crash from reading config in jit [`43d18082b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43d18082bfbaa2edb724999c7a893cbc41a82a53)
   &nbsp;
   >The jit reads the config for hot function thresholds. This was happening on a background thread, which was bad because the config reading code is not thread-safe. Instead, now the config is read at start up on the main thread. 
   >

# Refactors

### ZScript

- removed many unused commands (npcdata, combodata, spritedata) [`74e3b2dd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74e3b2dd2b4c1bf717525b41f695147bc73cd796)

# Tests

- add terror_of_necromancy_demo5.qst replays [`4d652888b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d652888b6485e7b861bc1973852c143cea43993)

# Misc.

- add 2.55.11 changelog [`1fec680e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1fec680e461f81e6ca8d055e87443578bceb9e09)
