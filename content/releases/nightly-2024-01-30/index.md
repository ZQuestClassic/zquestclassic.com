---
title: Nightly 2024-01-30
description: 
date: 2024-01-30T07:52:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-30/nightly-2024-01-30-linux.tar.gz
    name: nightly-2024-01-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-30/nightly-2024-01-30-mac.dmg
    name: nightly-2024-01-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-30/nightly-2024-01-30-windows-x64.zip
    name: nightly-2024-01-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-30/nightly-2024-01-30-windows-x86.zip
    name: nightly-2024-01-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 139075511
tag_name: 'nightly-2024-01-30'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- various updates to default.qst (File->New) [`0a53ec393`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a53ec393fbff49ec745a48ea071c1f796b64fe9)
   &nbsp;
   >- Add sideview swimming tiles
   >- Add charge-swimming sprites
   >- Add Bunny Link - this required expanding the pages per LTM from 1 to 2
   >- Add BS/Z3 swimming tiles
   >- Add the missing enemy tiles from Outlands
   >- Magic Pols Voice now uses CSet 10, to make room for ...
   >- Add Whistle Pols Voice: blocks arrows like a Magic Pols Voice, but is
   >  a One-Hit Kill via the whistle. Uses CSet 7
   >- Improve the lifting and holding sprites
   >- Improve Z3 Octorok tiles (Slow Fire and Bomb Octorok)
   >- Update credits on page 109
   >- Convert Bug Net to use 4-bit colour
   >- Fix enemy bombs using CSet 6
   >- Delete unused scripts in the tiles
   >- Delete unimplemented Sprite 088 (Firework)
   >

# Bug Fixes

### Player

- for replay mode, whistle sfx pauses game for number of frames proportional to sfx length instead of 0 frames [`1f38de5b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f38de5b0f02464606850ea4352369a96d1775c2)

### Editor

- error message on failure to load enhanced music in the dmap editor [`06cee90fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06cee90fa2a31165a25f0bee00426e145e258011)

# Misc.

### ZScript

- add Region in anticipation of z3 scrolling [`403c19750`](https://github.com/ZQuestClassic/ZQuestClassic/commit/403c19750d456cb3542251cbebb62575cb504e3f)
   &nbsp;
   >To enable scripts to work in 2.55 and in a future release with z3 scrolling, we are adding a non-functional `Region`:  
   >
   >- `Region->Width`: width in pixels (today, always 256)
   >- `Region->Height`: height in pixels (176)
   >- `Region->ScreenWidth`: width in screens (1)
   >- `Region->ScreenHeight`: height in screens (1)
   >- `Region->NumCombos`: number of combo positions (176)
   >- `Region->ID`: region id (0 - meaning just a normal 1x1 area)
   >- `Region->OriginScreen`: top-left screen in the region
   >- `Region->GetScreenForComboPos(int pos)`: given a combo position, returns the screen index associated with it
   >- `Region->TriggerSecrets(int screen_index)`: trigger secrets for given screen. The screen must be in the region
   >
   >
   >&nbsp;
   >
   >For example, if a script uses `Region->NumCombos` instead of `176` to iterate all the combos in the current area, it will work in both regions and non-regions. Additionally you should use `ComboAt(x, y)` rather than anything else to translate between pixel coordinates and a combo position. 
   >

