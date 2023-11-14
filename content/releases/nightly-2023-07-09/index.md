---
title: Nightly 2023-07-09
description: 
date: 2023-07-09T08:55:32Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09/nightly-2023-07-09-linux.tar.gz
    name: nightly-2023-07-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09/nightly-2023-07-09-mac.dmg
    name: nightly-2023-07-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09/nightly-2023-07-09-windows-x64.zip
    name: nightly-2023-07-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09/nightly-2023-07-09-windows-x86.zip
    name: nightly-2023-07-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 111540255
tag_name: 'nightly-2023-07-09'
channel: '2.55'
tags:
  - releases
---

# Bug Fixes

- set dirty flag for more dialogs needing redraw, missed some [`d5c5f0d41`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d5c5f0d419851a4388feca6dcebdb8328d88533c)
- properly handle mp3 unloading to avoid crash [`8a33b68b9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8a33b68b93b81bcfa69c0d4d09a92a2d5f6f5d71)

### ZScript

- setting input buttons to false correctly prevents button press [`656bb7628`](https://github.com/ArmageddonGames/ZQuestClassic/commit/656bb7628288673b0514d6ed6e691fc34826fd03)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-08...nightly-2023-07-09
