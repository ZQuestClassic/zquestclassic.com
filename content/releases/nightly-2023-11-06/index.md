---
title: Nightly 2023-11-06
description: 
date: 2023-11-06T08:25:25Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-06/nightly-2023-11-06-linux.tar.gz
    name: nightly-2023-11-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-06/nightly-2023-11-06-mac.dmg
    name: nightly-2023-11-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-06/nightly-2023-11-06-windows-x64.zip
    name: nightly-2023-11-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-06/nightly-2023-11-06-windows-x86.zip
    name: nightly-2023-11-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 128090061
tag_name: 'nightly-2023-11-06'
channel: '2.55'
tags:
  - releases
---



# Features

### ZUpdater

- add release channel to builds to specify where zupdater looks for updates [`bb9023ea8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb9023ea89f834e63e86c6cff5d65c99c8d9f388)
   &nbsp;
   >This adds a "channel" configuration to releases that limits what releases the updater will consider when looking for new versions. This allows us to configure a "2.55" release channel, and prevents the from updating into 3.0 releases while still allowing it to grab new releases from 2.55.  
   >
   >This is necessary long term as it allows 2.55 users getting easy bug fix updates without moving them to 3.0, which should only be done explicitly. 
   >

# Bug Fixes

- use simpler temp file creation for all platforms [`5018d9e54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5018d9e54f6da538dbb012bf4bfa22392fb885cc)
   &nbsp;
   >This should resolve problems with making save files observed on some Linux setups. 
   >

# Refactors

### Player

- show dialog when saving fails [`2a571d392`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a571d3925a8809c4dc061d8ff3a6212ecd1fcf8)

### ZLauncher

- group current version info in updater tab [`986b27145`](https://github.com/ZQuestClassic/ZQuestClassic/commit/986b27145cc487b5c8349aa8b30011d3de32a641)
- open new website for release note buttons [`1c8149e0f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c8149e0fa82ff9962130988ac785af39fd96201)

# Tests

- clear test result folders in python tests [`d0147e77e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0147e77efd1334e5731f7f87db3c346fa3265eb)

# CI

- fetch all git history for compare job [`c5f2a5b1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5f2a5b1a5a79295764a3753cf78870c7195bbeb)
- explictly ask for python tests in ci.yml, which stopped running b/c of f589ada [`36666a369`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36666a3698f3cf892c189f4616016fa0a322082f)
- use all cores for replay tests on windows [`3e2554782`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e2554782adb5803c85fd6d9617685d8becc43d2)
- fix archive test results on windows [`33be44347`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33be443471da563a27d68c3877ae956e0584f84f)

# Misc.

### Player

- use more user friendly strings for creating save file / continue screen [`f2084a1a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2084a1a08e117ba6872889b3928df5d9d0465c1)

