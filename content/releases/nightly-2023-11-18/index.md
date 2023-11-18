---
title: Nightly 2023-11-18
description: 
date: 2023-11-18T01:29:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-18/nightly-2023-11-18-linux.tar.gz
    name: nightly-2023-11-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-18/nightly-2023-11-18-mac.dmg
    name: nightly-2023-11-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-18/nightly-2023-11-18-windows-x64.zip
    name: nightly-2023-11-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-18/nightly-2023-11-18-windows-x86.zip
    name: nightly-2023-11-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 130052361
tag_name: 'nightly-2023-11-18'
channel: '2.55'
tags:
  - releases
---



# Features

### ZLauncher

- set save folder [`0269d0102`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0269d01022daac9d4a85ca09f2d75dea68924ec0)

# Bug Fixes

- prevent clock shifts from hanging the program [`b379a0ed9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b379a0ed9f22bc9dda28fc6597ce6e19abccad0c)
   &nbsp;
   >Allegro 5 doesn't use a monotonic clock that ignores suspended time, so day light saving shifts or even hibernating your computer can result in Allegro trying to do so much work to "catch up" that it hangs the program. See https://github.com/liballeg/allegro5/pull/1511 for more. 
   >

### Editor

- disabling tooltips works again [`409abe1ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/409abe1ff09ab57144418ceb0aee25528f7a645b)

### ZScript

- 'subscreenwidget->PerContainer' not working [`9d7c222dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d7c222dcd87c77d89bbcf71565b1b4bcda072a1)

# Tests

- suppress timeout check on frame 0 [`487351025`](https://github.com/ZQuestClassic/ZQuestClassic/commit/487351025193a27e4f66da887bc7b757be1d74cd)

