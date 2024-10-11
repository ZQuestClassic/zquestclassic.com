---
title: 3.0 Prerelease 73 2024-10-11
description: 
date: 2024-10-11T06:04:58Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.73%2B2024-10-11/3.0.0-prerelease.73%2B2024-10-11-linux.tar.gz
    name: 3.0.0-prerelease.73+2024-10-11-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.73%2B2024-10-11/3.0.0-prerelease.73%2B2024-10-11-mac.dmg
    name: 3.0.0-prerelease.73+2024-10-11-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.73%2B2024-10-11/3.0.0-prerelease.73%2B2024-10-11-windows-x64.zip
    name: 3.0.0-prerelease.73+2024-10-11-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.73%2B2024-10-11/3.0.0-prerelease.73%2B2024-10-11-windows-x86.zip
    name: 3.0.0-prerelease.73+2024-10-11-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 179485892
tag_name: '3.0.0-prerelease.73+2024-10-11'
channel: '3'
tags:
  - releases
---




# Features

### Player

- show save path in game details view [`cb99ff9e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb99ff9e390a79a39eff4ac313d13dd9f4ee3385)

### Editor

- show error reason when failing to load quest [`9d977ec52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d977ec52cb680a47f4a696ebb5fd91f689fa42d)
- dense forest autocombo mode [`b9c8dc5a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9c8dc5a30168478998f5a9c9b65d1b0e8667e8d)
- extension autocombo mode, for resizing things along one axis [`276be5e61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/276be5e6169bc02ada31248fd0b06f62b04508d7)

### ZScript

- add bottle cure shield jinx flag (`BTF_CURESHIELDJINX`) [`63d0dba0c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/63d0dba0c5f7994928fe8519f8e6abf24619a106)
- add `Game->Exit()`, which closes the program [`af9076695`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af9076695243e0e785c6b60ccc874d46a7346415)

# Bug Fixes

- load NES tiles for old quests without tile data [`be5551658`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be555165839a34b726356b958b92eed060fcdce8)
   &nbsp;
   >Some 1.90 and older quests save no tile data if they just used the default NES graphics. That broke sometime around 2.50, resulting in crashes or random behavior when loading these rare old quests. 
   >
- [mac] Change all CTRL shortcuts to CMD, and allow CTRL in hotkeys [`504deef7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/504deef7fe305a0a8829c72f3cc8ddf628ae321d)
   &nbsp;
   >The hotkey system already used CMD instead of CTRL, but many old allegro shortcuts were still checking CTRL on Mac (like copy/pasting text). Now they use CMD.  
   >
   >Also, can now use CTRL when configuring hotkeys on Mac. 
   >

### Player

- supress Z_eventlog when game is not active [`0a298ae88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a298ae88ff9525fd91ae0c3ff851995ec589cf9)
- improve error handling for saves in titlescreen [`dc46c0c41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc46c0c41bdd09f4af7fa0fff3e8ca8530a27895)
   &nbsp;
   >* When loading a save file failed, the program would exit. Now an error
   >  message is displayed
   >* Previous places that showed a generic save-related error message are
   >  now more specific
   >* Fixed a few things that were causing errors related to saves when
   >  canceling during save slot creation
   >* Canceling the dialog that pops up after creating a new save slot now
   >  deletes the save, rather than it defaulting to classic_1st.qst
   >

### Editor

- draw eyeball combos correctly in compact mode and when zoomed out [`3f8e849e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f8e849e8dfa3fdbdd9367d116bc7a1b887bd682)
- lifted duplicate combo and combo 0 restrictions from autocombo types that did not need them. [`1c5e02814`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c5e02814e802c30b6f0fb0df70b3ad6eb0f1913)

### ZScript

- make `npcdata->Flags` a bool array, `remove ->Flags2` [`ec60344a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec60344a6bbe40e152d15bd316d35c0426da1315)
   &nbsp;
   >`npcdata->Flags` and `npcdata->Flags2` are undocumented and broken tools for accessing the internal flag of npcdata. They tried to split 64 possible flags over two integer values, but since they aren't "long" ints it didn't work. It is now a bool array. 
   >
- properly handle optional params not being compile time values [`2820df67e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2820df67e8e9574cfb5409dd664445f6d35ad856)
   &nbsp;
   >If an optional parameter was not a defaulted to a compile time value, the compiler inserted a random value instead. Now it will emit an error. 
   >

# Refactors

### Player

- improve how title screen assets are loaded [`bf9375842`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf9375842414899418b833cb8d4634e2154cfd5f)
   &nbsp;
   >* Use `title_gfx.dat` instead of `default.qst`. This file is smaller and
   >  so is quicker to load (200ms -> 100ms on my machine)
   >* Don't reload the assets if they are already currently loaded.
   >  Previously this file was unnecessarily loaded multiple times while
   >  simply navigating the save select screens
   >

# Tests

- add "auto" script tests; reorganize and document playground quest [`99a867ad3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99a867ad328188705c529898d70166dad9b1c6e5)
