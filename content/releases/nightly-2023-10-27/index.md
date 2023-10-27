---
title: Nightly 2023-10-27
description: 
date: 2023-10-27T10:30:44Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-27/nightly-2023-10-27-mac.dmg
    name: nightly-2023-10-27-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-27/nightly-2023-10-27-windows-x64.zip
    name: nightly-2023-10-27-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-27/nightly-2023-10-27-windows-x86.zip
    name: nightly-2023-10-27-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 126999198
tag_name: nightly-2023-10-27
tags:
  - releases
---



# Features

### Editor

- 'Insert SCC' button in the string editor now respects the caret position [`c706b3af3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c706b3af3c796832fd723a0e1d7f38822f8da0ed)
- made enemy editor InitD compatible with script metadata [`8c0e4b37b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c0e4b37b722614684aecc4f3b1e10d0cf1cd897)

### ZScript

- GetTilePixel(), SetTilePixel(), and Is8BitTile[] [`b9b290a14`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9b290a144bf2d212eb3fa1ee0cde9182e742d60)

# Bug Fixes

### Player

- fix corner shove solidity [`7c5c7c992`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c5c7c992fa82b35b6c1f351d1c1ed7f2c171a8c)
- set size when making info layer to avoid crash [`5163053b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5163053b57caec8bdd57df2270086ac2a028af2e)

### Editor

- fix crash with passive and overlay subscreen settings [`1c9b81f57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c9b81f5721a3b9c298b0733e18b95bdff8bea36)

# Build

- use zlib as a shared library [`d388d1a6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d388d1a6cd100c3ea5c26ffb01abb8274d279e3f)

# Refactors

- Init Data / Gamedata [`acb7c8481`](https://github.com/ZQuestClassic/ZQuestClassic/commit/acb7c848170c77210c385586d38bd2b0d2e8fd0b)
   &nbsp;
   >Change how Init Data is stored and saved to the quest file (and rearrange the dialog slightly)     - Allow setting mcguffin level state for all levels in init data/cheats instead of just levels 1-8     - Init data health can be in HP instead of just in Hearts     - Can set init values for script counters 26-100 (was missing before)  - Change how data is stored and saved to the save file 
   >

# CI

- use clang 17.0.2 for linux [`1d3ebb548`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d3ebb5487a866f1cb4595b712a2271f649f7cbf)

