---
title: 3.0 Prerelease 66 2024-09-01
description: 
date: 2024-09-01T19:47:13Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.66%2B2024-09-01/3.0.0-prerelease.66%2B2024-09-01-linux.tar.gz
    name: 3.0.0-prerelease.66+2024-09-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.66%2B2024-09-01/3.0.0-prerelease.66%2B2024-09-01-mac.dmg
    name: 3.0.0-prerelease.66+2024-09-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.66%2B2024-09-01/3.0.0-prerelease.66%2B2024-09-01-windows-x64.zip
    name: 3.0.0-prerelease.66+2024-09-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.66%2B2024-09-01/3.0.0-prerelease.66%2B2024-09-01-windows-x86.zip
    name: 3.0.0-prerelease.66+2024-09-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 172953562
tag_name: '3.0.0-prerelease.66+2024-09-01'
channel: '3'
tags:
  - releases
---




# Features

- add configurable weapon sfx to enemies (#977) [`e71f8dc99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e71f8dc99e7eb92ef89285694452088b520a92e7)
   &nbsp;
   >This can also be configured in ZScript with `npc->WeaponSFX` and `npcdata->WeaponSFX`. 
   >
- support delete keyboard shortcuts for most text controls [`757c19430`](https://github.com/ZQuestClassic/ZQuestClassic/commit/757c194305a8fde8288a87efdec7be48dcab76dd)
   &nbsp;
   >* Ctrl+Backspace (Mac: Opt+Backspace) - deletes from cursor to next word
   >  boundrary
   >* Alt+Backspace (Mac: Cmd+Backspace) - deletes from cursor to beginning
   >  of the line
   >

# Bug Fixes

- generate correct version string for 1.92 quests [`52dc20365`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52dc203655b9cd7b38cbdcb83b6ac14b85fd78c8)

### Player

- lockblocks on layer 0 no longer ignored in cave dmaps if locked door present [`05c7e0053`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05c7e005343e5ae656da6632ed89497705f1b12d)
   &nbsp;
   >Context: https://discord.com/channels/876899628556091432/1278165595321405554 
   >
- pause music when opening player data with cheat shortcut [`8810f9a16`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8810f9a16fc8159508dc38713d764c9ad9eb5c7d)
- avoid crash in Go To cheat by checking destination is valid [`edcda9e7c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/edcda9e7c8cbe3098c79445020442239898468b2)
   &nbsp;
   >This cheat dialog expects you to input the screen number before any DMap xoff is applied, which can result in directing the game to load an invalid screen and crash. Now the screen is validated, and the xoff is displayed next to each DMap in the dropdown. 
   >
- fire trail weapons glow in dark rooms, just like flames [`5c3785599`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c3785599c965d9a583146a0c2180c280c4289ea)

### ZScript

- scripts no longer use wrong context after many sprites created [`d88333f92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d88333f9294f60610be284b1abc693befe52e8b4)
   &nbsp;
   >After 65536 sprites have been created without closing the player, the ID of subsequent sprites was too high for how the internal script engine stored the state for each script. This resulted in randomly using some other script's state, causing general mayhem. 
   >
