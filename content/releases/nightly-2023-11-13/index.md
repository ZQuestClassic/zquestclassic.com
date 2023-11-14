---
title: Nightly 2023-11-13
description: 
date: 2023-11-13T20:02:35Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-13/nightly-2023-11-13-linux.tar.gz
    name: nightly-2023-11-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-13/nightly-2023-11-13-mac.dmg
    name: nightly-2023-11-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-13/nightly-2023-11-13-windows-x64.zip
    name: nightly-2023-11-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-13/nightly-2023-11-13-windows-x86.zip
    name: nightly-2023-11-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 129230606
tag_name: 'nightly-2023-11-13'
channel: '2.55'
tags:
  - releases
---



# Features

- Allow disabling resizability of windows (setting in launcher only) [`90085dd84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90085dd848478dcd49ec8ee4cc0816fe8101de20)

# Bug Fixes

### Player

- Music not properly changing when using some warp types (ex. SCC warp) [`0aef5384b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0aef5384b0925a9aab759e013c2f03b90328b422)

### Editor

- prevent flickering for minimap tooltip [`69948f334`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69948f334fc2323f3408bf2b2dcc7fd0db1a6eeb)
- Tile editor checkboxes not clicking [`983a17add`](https://github.com/ZQuestClassic/ZQuestClassic/commit/983a17add27502b54fc7c52d6b7dd81243e94be8)

# Refactors

- remove unused 'VSync' option (it didn't do anything) [`74bbc05b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74bbc05b773ac8504f3a03475f7652d5bc2aa409)
