---
title: Nightly 2023-10-19
description: 
date: 2023-10-19T15:08:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-19/nightly-2023-10-19-linux.tar.gz
    name: nightly-2023-10-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-19/nightly-2023-10-19-mac.dmg
    name: nightly-2023-10-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-19/nightly-2023-10-19-windows-x64.zip
    name: nightly-2023-10-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-19/nightly-2023-10-19-windows-x86.zip
    name: nightly-2023-10-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 125850833
tag_name: 'nightly-2023-10-19'
channel: '2.55'
tags:
  - releases
---



# Features

- `Init Data` dither pattern picker/previewer [`ef1e3e5f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef1e3e5f62a416ae96f325cb884652b1abba93ce)
- fade out the background behind dialog windows [`ba6344865`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba6344865b68153cf717990b17a83b957d21a5bc)
- 3 new dithering styles [`8b7aa8ed7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b7aa8ed7d012d5916159ea66f55037d60626690)
- customizable 'ShoveOffset', add zfix round-direction handling [`809119087`](https://github.com/ZQuestClassic/ZQuestClassic/commit/809119087b589e46efa144d357e7a68776544d09)

# Bug Fixes

- 'Newer Player Movement' corner-shove works better with off-grid solids [`1695530d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1695530d3e14d3a6939330b72cf46fcba5cf936a)

### Player

- 1-pixel gap in 'show walkability' cheat draw [`ee0eda1e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee0eda1e23ec7602b3aeac081b0a8f9c1f3ed1c7)
- 'Newer Player Movement' corner-shove being far too lenient [`d0e2908b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0e2908b1ed1c954d6ac83d84a3f47fee0a8d513)
- fix manhandla step speed calculations [`60e9d9f41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60e9d9f4173dddcf177b5c7f766406e282aefed4)

### Editor

- qrs having wrong category name in search menu [`5391348e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5391348e4426a02de0ae684a79c14dc5d0356bac)
- import maps was unhelpfully clearing everything [`50c6377e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50c6377e1f9d757eceb5ba35260a94d591890409)
   &nbsp;
   >The map import tool was checking if the first screen's `valid` field was a special value denoting it was "cleared" by the user. It's unclear why `valid` holds this information, but presently it's not useful and breaks map imports randomly. 
   >

### ZScript Standard Library (std.zh)

- update ffrules.zh to include all new quest rules [`cc67be852`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc67be852c537a6f0f1b290af848639f90d267d3)

# Chores

- remove outdated or unnecessary docs and ZScript headers [`81b871ade`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81b871ade273adf860e4ff46b339fb8dde5c83da)

# Refactors

- use safe cstr reading functions [`b1a7b8d43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1a7b8d438c805c18d133172bba09ae5970c8aa2)
- add `bounded_vec` container type [`9edaa62a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9edaa62a23b931111280cade794003fa6b2cd21b)
- render a4->a5 bitmaps in first pass [`8ef8665a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef8665a790f262187da6e7be59c1cdece3abfa3)

### Editor

- only draw tooltip bitmap when in use [`ef146dede`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef146dede0b1606f2aedacb0df7b3fc172a92900)
- remove rests and use smarter fps throttle [`3ca0a1208`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ca0a1208ee62b7a59097c4f3e7416994d44181b)
   &nbsp;
   >Use the same smart FPS throttle that the player uses in the editor too.  
   >
   >This doubled the FPS in the Web version. 
   >
- draw minimap to smaller bitmap [`df2602f85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df2602f852f7eb2821b70522f2061b98f1b94175)
   &nbsp;
   >Also add a callback to RenderTreeItem, which allows the main drawing code to directly render the minimap as needed. 
   >
- only rerender minimap when dirty [`66d882141`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66d882141a102b4f08ff862643fa587e0c14e3b4)
- draw tooltips to smaller bitmap [`50f1344a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50f1344a37281dde5b17977b0047b1dced7b53f9)

### Web

- stop excluding some slow-to-build dialogs in debug builds [`452efb90a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/452efb90a38bbd9249bc0e1ca1466ae2d1f72404)

# Tests

- re-enable classic_1st.qst resave test [`9065169e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9065169e6370a2e76f234fdc91ba7113ae2e40a9)
- expand resave test to include ss_jenny.qst [`a92664884`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a926648840305e2551f80b350e036b12539ab3f4)

# Misc.

- collect quest ratings [`e3ef8f63a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3ef8f63a6c6cfdf02982c09ed2f518ab32090c9)

### Web

- support default open URL for tilesets [`b1e6584dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1e6584ddf2b8ea7a46c913e9d2dd919de142ada)

