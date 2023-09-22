---
title: Nightly 2023-07-15
description: 
date: 2023-07-15T05:14:41Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-15/nightly-2023-07-15-linux.tar.gz
    name: nightly-2023-07-15-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-15/nightly-2023-07-15-mac.dmg
    name: nightly-2023-07-15-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-15/nightly-2023-07-15-windows-x64.zip
    name: nightly-2023-07-15-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-15/nightly-2023-07-15-windows-x86.zip
    name: nightly-2023-07-15-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 112355384
tag_name: nightly-2023-07-15
tags:
  - releases
---

# Features

### ZScript

- '@InitScript(int weight)' annotation allows multiple global init scripts (all merged into ~Init). [`dcaa46921`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dcaa46921153369b1dbd3e59a1bd27fcaef70c21)

# Bug Fixes

- Negative Array rule issues [`0da042ba3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0da042ba3b238bba1b468c753f24cce71cefc2a4)
```
  Fixed negative array rule not being respected on first load of game (either via test quest or when
  loading from file select); also fixed negative array rule not being turned on via compat.
```

### Editor

- set list position for strings of older quests [`9cd257e09`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9cd257e096c679e259993b88c8bc1200044dab3c)
```
  This resulted in the Strings GUI not correctly showing all the strings.
```
- use correct index when saving string editor "Next" [`52d8e4081`](https://github.com/ArmageddonGames/ZQuestClassic/commit/52d8e40813b5a7c2fb38de6de1999ce29711f804)

# Refactors

### ZScript

- optimize function code, add PEEK to allow combining POP/PUSH back-to-backs [`8402c406b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8402c406b1ec47d3981382f0575a1e43d8484324)
- optimize 'SETV reg,X - TRACER reg' to 'TRACEV X' [`41ca67ec7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/41ca67ec7a172bba2412f48e4a46ac7ceb4bdf22)

# Tests

- fix regression from refactor in aa282f [`3da06ae9a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3da06ae9a509b68db1090feb1062e77a16e9b2b8)
- fix silly lazy unit test [`0591e6a99`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0591e6a9996fdbf231c0d5f06a5724c17da03cb0)
- update test_replays with new unexpected gfx frames, changed in 7ed7b [`5e13ce424`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5e13ce4249596bfe74b2d8120b5277da1d5ed31a)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-14...nightly-2023-07-15
