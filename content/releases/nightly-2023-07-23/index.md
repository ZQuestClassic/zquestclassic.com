---
title: Nightly 2023-07-23
description: 
date: 2023-07-23T12:02:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-23/nightly-2023-07-23-linux.tar.gz
    name: nightly-2023-07-23-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-23/nightly-2023-07-23-mac.dmg
    name: nightly-2023-07-23-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-23/nightly-2023-07-23-windows-x64.zip
    name: nightly-2023-07-23-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-23/nightly-2023-07-23-windows-x86.zip
    name: nightly-2023-07-23-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 113221179
tag_name: nightly-2023-07-23
tags:
  - releases
---

# Features

- add solid damage combo QRs [`ab146e65f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ab146e65f5a83774061cb077cdb4b15cb89a9d4f)
   &nbsp;
   >also fixed "No Solid Damage Combos" QR and fixed more issues with Newer Hero Movement
- Customize 'Guy' per-room (compat ruled) [`00302d51e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/00302d51e3843eef79ea2bd5e4e5b5e32f5b5c0e)
- multiple new options related to subscreen item selection [`6ff6a775f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6ff6a775fa4d6d364d9ddbbd660c7ccc3e8d041e)
   &nbsp;
   >- Cursor can be allowed to select empty slots (Freeform Subscreen
   >Cursor)
   >- Can be set to require pressing B to equip (Always Press To Equip)
   >- Items have 'Non-equippable' flag, allowing them to be cursor-selected
   >without allowing them on buttons.

# Bug Fixes

- set dirty flag for vedit text field components [`e21e66f69`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e21e66f69264d9b14090acdeafe8cd03a09da754)

### Player

- reduce some data races [`8c2dda32e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c2dda32ed50eadea95ed7465b18e17a6228dcf1)
- smart conveyors snapping you to the grid [`337727343`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3377273439dcb2fd2df2398c8ed85b7cb5ba6245)
- Crash related to reflected magic having invalid parent [`c3f9d7d48`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c3f9d7d4860e2793a6ef28f1b123bc695ea7ad44)

# Chores

- bump dmap section version to reserve for z3 [`05bb58363`](https://github.com/ArmageddonGames/ZQuestClassic/commit/05bb583631bf7bca0d27ec57f222e628e5b5272e)

# Refactors

- add 'qrs.h','qrs.cpp' and move 'box_' related functions [`b0a55a23e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b0a55a23e894b7a3ebe58a19a56c7424b6494cc3)
- optimize some more headers/zdefs stuff [`9b309630c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9b309630c64a6ea2709f74fbb402f11e902bfc53)

# Tests

- add -headless switch for disabling display and sound [`4d17ccf7f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4d17ccf7f731ebcd654a805bd4c27f66dc909c1e)



## What's Changed
* feat: Customize 'Guy' per-room (compat ruled) by @EmilyV99 in https://github.com/ArmageddonGames/ZQuestClassic/pull/864
* feat: multiple new options related to subscreen item selection by @EmilyV99 in https://github.com/ArmageddonGames/ZQuestClassic/pull/865


**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-19...nightly-2023-07-23
