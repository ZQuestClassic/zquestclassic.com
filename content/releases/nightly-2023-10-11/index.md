---
title: Nightly 2023-10-11
description: 
date: 2023-10-11T06:30:23Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11/nightly-2023-10-11-linux.tar.gz
    name: nightly-2023-10-11-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11/nightly-2023-10-11-mac.dmg
    name: nightly-2023-10-11-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11/nightly-2023-10-11-windows-x64.zip
    name: nightly-2023-10-11-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11/nightly-2023-10-11-windows-x86.zip
    name: nightly-2023-10-11-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 124551032
tag_name: nightly-2023-10-11
tags:
  - releases
---



# Features

### ZScript Standard Library (std.zh)

- `memcpy` version that only takes 2 args (auto-determines size) [`3bb11dda8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bb11dda8a310c47daa93362ab1d172afcbb577b)

# Bug Fixes

### Web

- remove unnecessary bitmap backup [`9c309afab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c309afab0d99f5e0fb0a8424f61bed71a1ae22b)
   &nbsp;
   >This pretty much doubles FPS across the board. huzzah 
   >

# Misc.

### Editor

- add `-uncompress-qst` CLI command [`696657428`](https://github.com/ZQuestClassic/ZQuestClassic/commit/696657428488dd3497836f527a6ce0b6255ab1db)

