---
title: Nightly 2024-02-04
description: 
date: 2024-02-04T21:55:38Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-04/nightly-2024-02-04-linux.tar.gz
    name: nightly-2024-02-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-04/nightly-2024-02-04-mac.dmg
    name: nightly-2024-02-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-04/nightly-2024-02-04-windows-x64.zip
    name: nightly-2024-02-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-04/nightly-2024-02-04-windows-x86.zip
    name: nightly-2024-02-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 139830117
tag_name: 'nightly-2024-02-04'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- set test_mode_record option in test dialog directly [`356066ed5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/356066ed56f2ee7f52659299194b4e6d7f2b0816)

# Bug Fixes

### Player

- defer deletion of sprites to end of animate logic [`548c3e15d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/548c3e15d053eba5b5d144e5e97fa0e3c6bafc3b)
   &nbsp;
   >This fixes a crash caused when a sprite deletes itself in middle of its animate logic. 
   >
- prevent OOB access for darkroom ditherrectfill [`07dfbbe3f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07dfbbe3fb830c54b100991a7302f71a6ced3d91)
   &nbsp;
   >When scrolling, this function could be told to grab a line of the bitmap memory outside its bounds, which resulted in a crash. 
   >

### ZScript

- handle out of bounds for Game->LItems[] [`6d260c7f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d260c7f33aded54dd675d0ad23f475ad4c76ec7)
   &nbsp;
   >This fixes a crash in Panolpy when reading a specific sign. 
   >

# Refactors

### ZScript

- clean up ScriptEngineData for all script types [`ce8062e19`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce8062e192085bddbd9f434d5bc84325a9db3e39)

