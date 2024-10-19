---
title: 2.55.7
description: 
date: 2024-10-19T05:40:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.7/2.55.7-linux.tar.gz
    name: 2.55.7-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.7/2.55.7-mac.dmg
    name: 2.55.7-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.7/2.55.7-windows-x64.zip
    name: 2.55.7-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.7/2.55.7-windows-x86.zip
    name: 2.55.7-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 180790262
tag_name: '2.55.7'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Player

- show save path in game details view [`213a7da40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/213a7da40dcce3423450e182e6e0c23064862b96)

### Editor

- add "Auto-Save" and "Auto-Restart" options to test dialog [`947bf60c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/947bf60c3ea09661954ae00e1711e5cda7e34a2c)
   &nbsp;
   >The test dialog no longer prompts you about unsaved changes. Instead, a new option in the dialog "Auto-Save" will save for you just before launching test mode. This defaults to on, but can be disabled.  
   >
   >Additionally, the existing "Auto-Restart" option was moved from the launcher to the test dialog, where it belongs. 
   >
- show error reason when failing to load quest [`d722f60f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d722f60f3eaac9b53ae9cab00d393d04df47ff4e)
- dense forest autocombo mode [`bf032786e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf032786e72522331bc41890d91aa653b1287dd2)
- extension autocombo mode, for resizing things along one axis [`0cd0fdd0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0cd0fdd0b8ddcfed3df6036489434982bc1f6df3)

# Bug Fixes

- mapscr::numFFC() no longer returns 1 when there are 0 ffcs [`8219f9537`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8219f95375ea9653e57756ca6b55b76fa6710d06)
- issue where double clicking could stop working in lists [`7ceba6735`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ceba673555ae85cf440c20ccff44f734ae5db81)
- load NES tiles for old quests without tile data [`197b5d43b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/197b5d43b44c43c7dd068f5a5db900850075b542)
   &nbsp;
   >Some 1.90 and older quests save no tile data if they just used the default NES graphics. That broke sometime around 2.50, resulting in crashes or random behavior when loading these rare old quests. 
   >
- [mac] Change all CTRL shortcuts to CMD, and allow CTRL in hotkeys [`c01ae362a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c01ae362a3e5ec237fa19cb0c6036a639d568e62)
   &nbsp;
   >The hotkey system already used CMD instead of CTRL, but many old allegro shortcuts were still checking CTRL on Mac (like copy/pasting text). Now they use CMD.  
   >
   >Also, can now use CTRL when configuring hotkeys on Mac. 
   >

### Player

- for old quests, darknut shields no longer incorrectly break when hit with hammer [`19a3a2ea5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19a3a2ea571933bde6604ceef98a7b3f39c27754)
- supress Z_eventlog when game is not active [`fbadf441c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbadf441c42ee545a1b1d6b01980bbd9baa68275)
- improve error handling for saves in titlescreen [`471691cd8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/471691cd8fd92077e4036e428e8311916c6910b9)
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
- New mirrors hanging the game when using their 'Block' feature [`f7d89849f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7d89849f035be80265890463b6fd7d90163d1cb)
- avoid crash on magic relections when sprite list is full [`fe45f6764`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe45f676470d2cea5df4694465e5700b5a367386)
- handle screen transitions on slopes in sideview mode [`4e4531354`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e45313545b2b24e64696cf29581c3de6ca78087)
   &nbsp;
   >Slopes bugged out big time when moving between screens in sideview mode, shooting players across the screen. That is now fixed, but one should avoid starting upwards-stairs on the edge of a screen, as the player still does not traverse up it when entering from the other side. 
   >

### Editor

- reenable floating selection for dense forest [`287e74d84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/287e74d84200c3abdd7f1750207a28200531a09d)
- lifted duplicate combo and combo 0 restrictions from autocombo types that did not need them. [`2f2dc2015`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f2dc201549e082d6696fc2ed9862df2604fda5b)
- reset animation in item dialog on selection change [`a89fe8cae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a89fe8caefce97d5602532f4bc2af216a2b7bb48)
- set track to 0 when updating dmap music [`279fcd2fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/279fcd2fadb857903e4dc7d069cf88970a8fa8d7)
   &nbsp;
   >This prevents a bug where an invalid track could be selected when changing the tracker music file in the dmap editor. 
   >
- fix Preview mode not working when opened from top menu [`c5190ea0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5190ea0bc3ee587a653f69086cb8421eea3047e)
- prevent crash when saving test init data [`2469c962e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2469c962e48df452408aecafebb0bdb401e949ad)

### ZScript

- remove a bunch of unnecessary logging [`5b9d5a992`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b9d5a9926ac493146ffdb7f84200054cf384f5d)
- constants at script or namespace scope counting against the global variable limit [`5f58b5423`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f58b5423aed8e03fc2ee065017553784b124e42)
- properly handle optional params not being compile time values [`748697ca7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/748697ca73ec7f0c9664578532ac9829df47347d)
   &nbsp;
   >If an optional parameter was not a defaulted to a compile time value, the compiler inserted a random value instead. Now it will emit an error. 
   >
- fix off-by-one error in shopdata [`27f4c5e8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27f4c5e8b3ef3377564c439a36b6ae478fecbb9d)
- show useful error message when single-quote char string is too long [`ec93dabfe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec93dabfe031c0b781fbb86d3a2f42755b77a053)
- fix `combodata` Flag, NextData and NextCSet [`1aec2f4c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1aec2f4c655620d202ae4b993b829d4aa9476fa5)
   &nbsp;
   >These were never correctly implemented. 
   >
- remove bogus error log when using `ArrayCopy` [`f5afaae9b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5afaae9bc69954ea491cb6e367b6bf62348ccee)

# Documentation

### ZScript

- fix order of arguments in DrawString on webdocs [`11c589a84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11c589a842057607fd479e571815c7fb211709cc)

# Refactors

### Player

- improve how title screen assets are loaded [`7b0e780a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b0e780a7db841fad610fc1ca4fd77f8d425f7b7)
   &nbsp;
   >* Use `title_gfx.dat` instead of `default.qst`. This file is smaller and
   >  so is quicker to load (200ms -> 100ms on my machine)
   >* Don't reload the assets if they are already currently loaded.
   >  Previously this file was unnecessarily loaded multiple times while
   >  simply navigating the save select screens
   >

### ZScript

- remove unused ->ScriptEntry, ->ScriptOccupancy, ->ExitScript [`a7f06c78a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7f06c78a9d673ab406cb5fcbd7dd90a32a332a6)
- always show script context when logging errors [`48f515d04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48f515d042f0642ee0afaf5295ea8ec49e670a81)
   &nbsp;
   >Previously the "Print Script Metadata on Traces" QR had to be enabled to show what script caused an error. However, this context is always useful for debugging and so should always be displayed. 
   >
