---
title: Nightly 2023-09-09
description: 
date: 2023-09-09T06:01:09Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-09/nightly-2023-09-09-linux.tar.gz
    name: nightly-2023-09-09-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-09/nightly-2023-09-09-mac.dmg
    name: nightly-2023-09-09-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-09/nightly-2023-09-09-windows-x64.zip
    name: nightly-2023-09-09-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-09/nightly-2023-09-09-windows-x86.zip
    name: nightly-2023-09-09-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 120510378
tag_name: nightly-2023-09-09
tags:
  - releases
---



# Features

- 'subscreendata' datatype implementation [`64026507c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/64026507c399a4735fc811f2eba017c78eb50ab3)
- 'subscreenpage' datatype implementation [`0d049c655`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0d049c6554e4f40ff88cd866b2e4580f45ddc302)
- 'subscreenwidget' datatype implementation for shared vars [`5e8e6dcc8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5e8e6dcc878d0512cbb7163aa867994ba796b4c3)
- start 'subscreenwidget' datatype implementation for type vars [`57649a824`](https://github.com/ArmageddonGames/ZQuestClassic/commit/57649a824287507ef1fa7cc400999d6895c1791f)
- more 'subscreenwidget' datatype implementation for type vars [`9a8334236`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9a833423609f7e7fcca0b2c7a36c95ca7f30ca41)
- more 'subscreenwidget' datatype implementation for type vars [`5c0c1a9ef`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5c0c1a9ef8c2f43bcb8813593f895fa5ba1e055b)
- finish 'subscreenwidget' datatype implementation for type vars [`252033a21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/252033a215609e9901a814f12e35c09f53a45e15)
- finalize subscreen script related features [`cb2d6b521`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cb2d6b5217b4a9cab29612af5514032401bad031)

# Bug Fixes

- active global script double-running due to warp script check [`28d9aaf3d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/28d9aaf3d31aa8ffd489a3a46da167c5ec79fb87)

### Player

- fix a couple subscreen drawing issues [`e82b08532`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e82b08532124278bf3838ab1e935befd344d233b)

# Refactors

- start implementing subscreen scripts [`e19d0fda1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e19d0fda1e6189a864d215d63dbf1ee008e99f10)

# Misc.

- add script for expanding ZASM opcodes/registers en masse [`6f8ca315a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6f8ca315aba8606467c100d9d7ffc1eab4a230b5)
- update zasm expansion script to handle name lists from file [`820a5978f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/820a5978f0e0d653f1a28600470502c1f6f63f21)
