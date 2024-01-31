---
title: 3.0 Prerelease 33 2024-01-31
description: 
date: 2024-01-31T03:36:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.33%2B2024-01-31/3.0.0-prerelease.33%2B2024-01-31-linux.tar.gz
    name: 3.0.0-prerelease.33+2024-01-31-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.33%2B2024-01-31/3.0.0-prerelease.33%2B2024-01-31-mac.dmg
    name: 3.0.0-prerelease.33+2024-01-31-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.33%2B2024-01-31/3.0.0-prerelease.33%2B2024-01-31-windows-x64.zip
    name: 3.0.0-prerelease.33+2024-01-31-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.33%2B2024-01-31/3.0.0-prerelease.33%2B2024-01-31-windows-x86.zip
    name: 3.0.0-prerelease.33+2024-01-31-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 139272352
tag_name: '3.0.0-prerelease.33+2024-01-31'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- various updates to default.qst (File->New) [`e166b7a88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e166b7a88c6f96560929ce4da06aa99adb85d873)
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

- zscript docs were not being generated for release package [`a5a9bc81d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5a9bc81d1b232b14ddf223ae0fb30626fb7e92f)

### Player

- tall grass on layers not applying its sfx/sprite [`70d9abedf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/70d9abedfeca13e46d16bdc6f1187ed20906b6b9)
- fix snapshot with NOSUBSCR not supplying a palette and not accounting for NOSUBSCROFFSET [`a9b90ffea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9b90ffeac4d07b34b54efd0e3283d5fe76bf502)
- prevent grid aligning while jumping, which broke jumping for some old quests [`53db0b855`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53db0b85517b5ffbb1f40319bd60071567ef13c6)
- for replay mode, whistle sfx pauses game for number of frames proportional to sfx length instead of 0 frames [`ed5921c9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed5921c9c34fbf1a8df2a81c8ac091b530a1dac6)
- hero action "swimhit" incorrectly unset due to broken isSwimming() check [`192a9fa64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/192a9fa649a4503cfe25acef4cb587c9fdea73b9)
- combo cycling reset too early for animations with frame skips [`61fc1edcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61fc1edcf35115f5585d5b7d6d161526e1caa3f1)
   &nbsp;
   >Turns out this never worked properly! 
   >

### Editor

- transparent tiles not drawing correctly in map preview [`b9ebc75d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9ebc75d9f656757589db00ddbfda49ae0b9cf80)
- error message on failure to load enhanced music in the dmap editor [`26e448194`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26e448194bc7322111d6898731d8a83db21ada91)
- skipy broken in combo preview animation [`43b2058e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43b2058e24e7e566aa5662811263d78400df8189)

# Misc.

### ZScript

- add Region in anticipation of z3 scrolling [`f87c20d08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f87c20d08af0f81e417d97ad6e2b10f2a46ce0a9)
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
- mark combo->CSet deprecated, in favor for the better named ->CSet2 [`691450338`](https://github.com/ZQuestClassic/ZQuestClassic/commit/691450338c29aa7dcf16be6e4913b888c46f1a15)
