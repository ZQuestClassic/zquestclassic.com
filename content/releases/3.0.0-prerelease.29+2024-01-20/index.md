---
title: 3.0 Prerelease 29 2024-01-20
description: 
date: 2024-01-20T21:07:15Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.29%2B2024-01-20/3.0.0-prerelease.29%2B2024-01-20-linux.tar.gz
    name: 3.0.0-prerelease.29+2024-01-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.29%2B2024-01-20/3.0.0-prerelease.29%2B2024-01-20-mac.dmg
    name: 3.0.0-prerelease.29+2024-01-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.29%2B2024-01-20/3.0.0-prerelease.29%2B2024-01-20-windows-x64.zip
    name: 3.0.0-prerelease.29+2024-01-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.29%2B2024-01-20/3.0.0-prerelease.29%2B2024-01-20-windows-x86.zip
    name: 3.0.0-prerelease.29+2024-01-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 137861157
tag_name: '3.0.0-prerelease.29+2024-01-20'
channel: '3'
tags:
  - releases
---




# Features

### Player

- optimize LOADD/STORED to new LOAD/STORE to remove divisions [`d8a7872c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8a7872c8bff8747b42076ac6b42f4b8512756c2)

# Bug Fixes

- zfix modulo operator being entirely wrong [`efe612523`](https://github.com/ZQuestClassic/ZQuestClassic/commit/efe6125234813ea0759a43b5fb22c75da59753b6)
- changer ffcs counting for trigger groups and similar effects (they shouldn't) [`7ce5862b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ce5862b67d76b8544530488a64aefa15eebd574)

### Player

- lens unintentionally making enemies sometimes invisible [`c81d068a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c81d068a69b93be8aca671071f8629530afb3e56)
- crash when running replay without any real saves [`a9d6f4c44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9d6f4c447895de63c3012c352669b326dd1f17a)
- Divine Escape particles sometimes flying in wrong directions [`1ea90d59b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1ea90d59b989029c7916784468167287f0c974db)

### ZScript

- stale data in destructors [`99133fa5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99133fa5e550bc058ce2d81d2d85ff2d04dbf2a7)
   &nbsp;
   >scripted objects weren't clearing data used by the destructor when being cleared, leading to future objects referencing the stale data if they didn't have a destructor of their own to overwrite it. 
   >
- clear jit-compiled scripts as intended when loading new quest [`b84c8d827`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b84c8d82723040ca7897b6de38fcf9d7352a3065)
- generic script item collect event fix [`5d07768c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d07768c7c8b1983af7a20e9534fd4a8e5158954)
   &nbsp;
   >Item Collect event will no longer be fired for items such as timeout items when they are *not* actually able to be collected. Due to timing changes, the "Combine when collected twice" now also occurs BEFORE the event. 
   >

# Misc.

### Editor

- fix some text, add divine escape help text for warp types [`ea92590b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea92590b9040097cb0cb5207f7a90198f30244bd)
- clean up 'Door Combo Set' dialog/hotkeys and document them [`a1a169eb5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a1a169eb5ce50f0ca56b9e1104338c6e2bc8225a)
