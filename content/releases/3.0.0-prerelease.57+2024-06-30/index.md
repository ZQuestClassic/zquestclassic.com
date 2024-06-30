---
title: 3.0 Prerelease 57 2024-06-30
description: 
date: 2024-06-30T04:35:51Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.57%2B2024-06-30/3.0.0-prerelease.57%2B2024-06-30-linux.tar.gz
    name: 3.0.0-prerelease.57+2024-06-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.57%2B2024-06-30/3.0.0-prerelease.57%2B2024-06-30-mac.dmg
    name: 3.0.0-prerelease.57+2024-06-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.57%2B2024-06-30/3.0.0-prerelease.57%2B2024-06-30-windows-x64.zip
    name: 3.0.0-prerelease.57+2024-06-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.57%2B2024-06-30/3.0.0-prerelease.57%2B2024-06-30-windows-x86.zip
    name: 3.0.0-prerelease.57+2024-06-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 163182461
tag_name: '3.0.0-prerelease.57+2024-06-30'
channel: '3'
tags:
  - releases
---




# Features

- add Cure Shield Jinx to bottles [`184674728`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18467472898eb42541f151a9f5928ae07b6424cd)
- add shield effect for jinxes, update Whisp Ring [`97688da50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97688da502b7f469c8c030916398dd053abfd3c5)
   &nbsp;
   >Jinx enemies (aka Bubbles) can now impact shields, and whisp rings now correctly apply to temporary jinxes.  
   >
   >See `docs/enemies.txt` for how to configure Jinx enemies. 
   >
- add shield jinx removal as refill effect (#938) [`977e72321`](https://github.com/ZQuestClassic/ZQuestClassic/commit/977e72321f86c5523439dbc84989c5e7369d3e62)

# Bug Fixes

- initial path not being set for file dialog [`1d08708c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d08708c9cc262ce57f17ceb92afd953d919893a)

### Player

- passageways can have their own midi music (#934) [`97a0c0130`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97a0c0130aedb17ea47951d500981ff7ce97435a)
- npc scripts for many enemies ending after one frame [`733263500`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73326350090b9235e60362b86790168be3468c51)
   &nbsp;
   >Enemies larger than one tile use a different code path than other enemies, and that path was mistakenly only allowing scripts to run for a single frame. 
   >

### Editor

- prevent invalid string access resulting in crash [`aaa65c22c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aaa65c22c44a3619a9cf329bd3b7e9552cff0ab3)
- buffer overflow in info editor dialog [`63b6cb23f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/63b6cb23f3b5966d8869877842f07de63d01a5b8)

### ZLauncher

- hide update tab on linux [`39cb605e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39cb605e593328c72fca841739ae4fe7f34ed00a)

# Build

- update building.md for Linux [`f00d2f0ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f00d2f0acec2cdf5e060c166c05097c562423e2f)
- pin poolSTL dependency to specific commit [`1a347f264`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a347f264b7f370dcf6c0e3d1567b2334dc38474)
- update websocketpp to newer develop branch [`d00a94dfb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d00a94dfb186dd0fb49d9cf68d6776cfca482ed3)
- fix gcc compilation issues [`7cfee7439`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cfee7439ccd5a92d248c14ca6286861a01a2549)
- only depend on .git/refs/tags if present [`bd8e3c8f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd8e3c8f539c26960ee5137099fcebcff79d6be4)
- add cmake install commands for linux [`a800c0e2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a800c0e2fc08dbe1a4951b62a6c6209e5c8ab3c3)
- set default install folder on linux to ~/zquestclassic [`6869facd9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6869facd9cf1a6bf648b8000664448f11365909a)

# Refactors

### Player

- clean up jinx handling (#939) [`cfe48cd7b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfe48cd7b02bd2ed9941de16d2904010ee77cbc8)
