---
title: 3.0 Prerelease 48 2024-04-05
description: 
date: 2024-04-05T16:59:09Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.48%2B2024-04-05/3.0.0-prerelease.48%2B2024-04-05-linux.tar.gz
    name: 3.0.0-prerelease.48+2024-04-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.48%2B2024-04-05/3.0.0-prerelease.48%2B2024-04-05-mac.dmg
    name: 3.0.0-prerelease.48+2024-04-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.48%2B2024-04-05/3.0.0-prerelease.48%2B2024-04-05-windows-x64.zip
    name: 3.0.0-prerelease.48+2024-04-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.48%2B2024-04-05/3.0.0-prerelease.48%2B2024-04-05-windows-x86.zip
    name: 3.0.0-prerelease.48+2024-04-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 149991172
tag_name: '3.0.0-prerelease.48+2024-04-05'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- bug in dead code optimizer when register is both read and written to [`2ed2cd56d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ed2cd56dc507f6a2186071547a3fdc910b670b2)

### Editor

- upgrade tile 'move' code, more things now update on moving tiles (#916) [`5c29d6f4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c29d6f4e66fd7a918338bbd82abaedbcdb57884)

### ZScript

- allow simple types to match a template array type, for now [`08756b8cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08756b8cb16576d985678188a9eeb782d7c31c4d)

# Build

- update fmtlib to 10.2.1 [`11b834b35`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11b834b35e40b8d0ce5ec09e37b7357ca13d346e)

# Misc.

-  fix(zq): upgrade combo 'move' code, more things now update on moving combos, add Combo overwrite warnings (#917) [`e8d903186`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8d903186f7c5aac3fd2ec83dbf2115fba40a782)
