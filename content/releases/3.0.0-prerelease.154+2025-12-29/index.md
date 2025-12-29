---
title: 3.0 Prerelease 154 2025-12-29
description: 
date: 2025-12-29T08:57:23Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.154%2B2025-12-29/3.0.0-prerelease.154%2B2025-12-29-linux.tar.gz
    name: 3.0.0-prerelease.154+2025-12-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.154%2B2025-12-29/3.0.0-prerelease.154%2B2025-12-29-mac.dmg
    name: 3.0.0-prerelease.154+2025-12-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.154%2B2025-12-29/3.0.0-prerelease.154%2B2025-12-29-windows-x64.zip
    name: 3.0.0-prerelease.154+2025-12-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.154%2B2025-12-29/3.0.0-prerelease.154%2B2025-12-29-windows-x86.zip
    name: 3.0.0-prerelease.154+2025-12-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 273162393
tag_name: '3.0.0-prerelease.154+2025-12-29'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- subscreen editor grid can now draw lines instead of dots [`646aa2b7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/646aa2b7d6a584ed5d5613cd13c24d58726a2ff7)
   &nbsp;
   >also upgraded the dialog for editing the subscreen grid 
   >

### ZScript

- untyped arrays may retain objects [`868b796b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/868b796b993bddc032f6f20b300f7c42d4f59d1d)
   &nbsp;
   >Both user and internal untyped arrays can now retain object references. At runtime, the engine tracks whether each element in an untyped array is an object or not, and retains references accordingly.  
   >
   >Note that this does not happen for untyped variables (just arrays), nor for int arrays. 
   >

# Bug Fixes

### Player

- long control scheme names breaking control scheme dialog [`903fa8f01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/903fa8f01d9d89d7da144d515553b155f8fcd4a0)
   &nbsp;
   >entering long names would cause the dropdowns to get really big, squishing the rest of the dialog. 
   >
- prevent rare case where sprite deletion is delayed a frame [`b727715fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b727715fd4cfec3e5d1d0516f51391e7869d2c79)

### ZScript

- correctly delete references to internal arrays for sprite variables [`23dce531a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23dce531a3d4cc47a11d3ad7eeac41ba7d924896)
- avoid leaks when unreachable objects are deleted [`481f7c566`](https://github.com/ZQuestClassic/ZQuestClassic/commit/481f7c566c2a9d88f58862eec1367ae57a26339f)
   &nbsp;
   >When the garbage collector deletes unreachable objects, it failed to remove any references they retained to reachable objects. 
   >

# Build

- retry more aggressively when hdiutil fails [`e9a3d4197`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9a3d4197141b2de9c2d70a90bf3b3b57307dae1)

# Misc.

- minor changes to build_historical.py backfill [`cc928ffc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc928ffc15a16b7813cdc92f6393776867db859f)
