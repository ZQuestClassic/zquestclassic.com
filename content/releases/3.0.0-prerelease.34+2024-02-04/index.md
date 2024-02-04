---
title: 3.0 Prerelease 34 2024-02-04
description: 
date: 2024-02-04T21:21:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.34%2B2024-02-04/3.0.0-prerelease.34%2B2024-02-04-linux.tar.gz
    name: 3.0.0-prerelease.34+2024-02-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.34%2B2024-02-04/3.0.0-prerelease.34%2B2024-02-04-mac.dmg
    name: 3.0.0-prerelease.34+2024-02-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.34%2B2024-02-04/3.0.0-prerelease.34%2B2024-02-04-windows-x64.zip
    name: 3.0.0-prerelease.34+2024-02-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.34%2B2024-02-04/3.0.0-prerelease.34%2B2024-02-04-windows-x86.zip
    name: 3.0.0-prerelease.34+2024-02-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 139829211
tag_name: '3.0.0-prerelease.34+2024-02-04'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- set test_mode_record option in test dialog directly [`cfc107738`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfc107738ee848fcc2980ffd2971c6a09de1a3d1)

# Bug Fixes

### Player

- defer deletion of sprites to end of animate logic [`7a9cb4a11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a9cb4a118bd536bd6c1d96754cf1abea548a99a)
   &nbsp;
   >This fixes a crash caused when a sprite deletes itself in middle of its animate logic. 
   >
- prevent OOB access for darkroom ditherrectfill [`a5f01cd25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5f01cd25ebc0aafda132df665f2a65a27cd3b8e)
   &nbsp;
   >When scrolling, this function could be told to grab a line of the bitmap memory outside its bounds, which resulted in a crash. 
   >

### ZScript

- handle out of bounds for Game->LItems[] [`89ca47723`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89ca477234db96f350664b56b9aa7a799c886798)
   &nbsp;
   >This fixes a crash in Panolpy when reading a specific sign. 
   >

# Refactors

### ZScript

- use common UserDataContainer for most user data [`ba6e421d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba6e421d92e6a654b2809f096df173eff601160f)
