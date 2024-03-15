---
title: 2.55.1
description: 
date: 2024-03-14T07:02:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.1/2.55.1-linux.tar.gz
    name: 2.55.1-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.1/2.55.1-mac.dmg
    name: 2.55.1-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.1/2.55.1-windows-x64.zip
    name: 2.55.1-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.1/2.55.1-windows-x86.zip
    name: 2.55.1-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 146715090
tag_name: '2.55.1'
channel: '2.55'
tags:
  - releases
---

# Features

- include The Deep quest in release package [`db28a4c7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db28a4c7fc3bc5d8896fda3907e042796d7526e6)

# Bug Fixes

- generic script InitD[] not working at all [`cf430d9ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf430d9ea4a87c3ab0d0d2e455defd18a23c61a5)
- increase sfx buffer to prevent "Out of buffers" log spam [`96833f2d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96833f2d886c25b43bfee36e8479fa4d624da0e1)

### Player

- improve replay stop process for update mode [`3a97716b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a97716b4eff81682020cd0e667ae7b02d5a2d71)
- check if save slot is valid before loading [`d6cefc9da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6cefc9da4b39a1a8522fb06300d25fedc5c2895)
- fix crash in Options>Snapshot Format [`b41a7134d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b41a7134d0378ed64f4f433bf5cae9af00f76d53)

### Editor

- minor typo in Export DMaps title [`99f775c1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99f775c1f9a18ad656b5204efd7ae6425f9e8863)
- correctly handle variable length title in all dmap reading/writing [`c9f4ab06b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9f4ab06b54223b2378c28a1480d171b8b34dfa7)
   &nbsp;
   >6bd8a9a added support for variable length dmap titles, but only for the main dmap reading/writing code. This functionality is duplicated across dmap import/export and other places, but wasn't updated. 
   >

### ZScript

- verify first index for screen_d [`9edf63b54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9edf63b545a0663b3d5c693cf4ecafc6ece9b247)
   &nbsp;
   >This fixes a crash in Titan's Gate. 
   >

### ZLauncher

- "Static for invalid data" option not working in zlauncher [`0e11d6c12`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e11d6c123835292fa7d3462f3ff4f5b63eb428a)

# Tests

- include palette in gfx frame hash [`dd1c45ffd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd1c45ffde891158e604723c6c4c0716bd789a74)
- fix hash for compare replay image dedupe [`e5b86f3c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5b86f3c3ad57160bbb220bedb23de88cdd0ec03)
   &nbsp;
   >The previous hash did not take into account the image format's color palette, so hash collisions prevented some failing frames from showing. 
   >
- fix --split-threshold cli arg for split_replay.py [`71f99233d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71f99233dece4c49162cb1e65242aec3ee712591)
- add the_deep.zplay [`d2d5c9138`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2d5c9138286f4d518a4027a4e7fc0e1276a9bff)
- add enigma_of_basilischi_island_basilse.zplay [`a48f508e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a48f508e381ac6ee93c4ebbf79d93671e3756267)

# CI

- upload releases to s3 bucket [`86707c7d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86707c7d638f34c919fe5b372cc6c33c63b73cba)

# Misc.

- add min replay size threshold when splitting replays [`3b76d7982`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b76d7982199340064285f93f31876e45b6023dd)
