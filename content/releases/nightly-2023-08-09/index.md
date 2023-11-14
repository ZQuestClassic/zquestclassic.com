---
title: Nightly 2023-08-09
description: 
date: 2023-08-09T02:41:57Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-09/nightly-2023-08-09-linux.tar.gz
    name: nightly-2023-08-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-09/nightly-2023-08-09-mac.dmg
    name: nightly-2023-08-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-09/nightly-2023-08-09-windows-x64.zip
    name: nightly-2023-08-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-09/nightly-2023-08-09-windows-x86.zip
    name: nightly-2023-08-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 115701013
tag_name: 'nightly-2023-08-09'
channel: '2.55'
tags:
  - releases
---

# Features

- Can now disable pushblock draw layer [QR `Pushable Block Sprite Layer`] [`dd365e844`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd365e844116873b0d6bf73ba93dee803c308bfe)

# Bug Fixes

- pushable blocks not respecting lens layer hiding/revealing [`c4f332289`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c4f332289166ce3aed100063a930cdc5c5c05ec9)

### Player

- Conveyor oddities related to `Force Dir` flag [`db349d14f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/db349d14fa628b4b093d6f94d9608d10b13c0844)
- Triggers tab state issues [`d1cbad2f8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d1cbad2f8d5ba03dcd344e3c10499e428be1548c)
   &nbsp;
   >- "->LevelState" not setting the state properly
   >- "->LevelState" and "->GlobalState" not working on ffcs
   >

# Misc.

### Visual Studio Code Extension

- publish 1.0.6 [`9c70b4882`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9c70b4882f846fbbc10cbfe6367c051f1c3c5768)
