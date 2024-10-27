---
title: 3.0 Prerelease 77 2024-10-27
description: 
date: 2024-10-27T07:25:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.77%2B2024-10-27/3.0.0-prerelease.77%2B2024-10-27-linux.tar.gz
    name: 3.0.0-prerelease.77+2024-10-27-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.77%2B2024-10-27/3.0.0-prerelease.77%2B2024-10-27-mac.dmg
    name: 3.0.0-prerelease.77+2024-10-27-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.77%2B2024-10-27/3.0.0-prerelease.77%2B2024-10-27-windows-x64.zip
    name: 3.0.0-prerelease.77+2024-10-27-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.77%2B2024-10-27/3.0.0-prerelease.77%2B2024-10-27-windows-x86.zip
    name: 3.0.0-prerelease.77+2024-10-27-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 182116031
tag_name: '3.0.0-prerelease.77+2024-10-27'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- large corner option for dungeon carving autocombo mode [`66cc6f15a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66cc6f15ab577fbf8cf37780a6255dbb940fd71c)
- -smart-assign CLI switch to compile + assign [`e44ca29bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e44ca29bd95b112a51288490ac79745bee5f2d80)
   &nbsp;
   >Example usage:  
   >
   >./zquest.exe -smart-assign your_quest.qst 
   >

### ZScript

- add base `sprite` class [`930485928`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93048592847a1e63bae27339b0731df35229290a)
   &nbsp;
   >The following classes now all share a common base class:  
   >
   >* eweapon
   >* lweapon
   >* ffc
   >* itemsprite
   >* npc
   >* player
   >
   >
   >&nbsp;
   >
   >All of these classes can now be assigned to variables of the type `sprite`. The `sprite` class contains 40 properties that were duplicated across these classes. Some properties do not work for all classes (like `ffc` and `player`), but more support may come later. 
   >

# Bug Fixes

- prevent crash when there are too many door combo sets [`6ba9923ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ba9923ed7c0cfc21a47719b8d8434a70ce374a8)
- number picker dialog not using proper starting value [`4ace215f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ace215f4bcda49bb3b1060c7cedd752e18b476d)
   &nbsp;
   >fixes some dialogs in Init Data 
   >

### Player

- prevent potential crash from show walkability cheat [`99fae5552`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99fae5552715b70613dc5629439c62a81920e458)

### Editor

- add latest fields to .znpc for enemy save/load (#1003) [`0f15969f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f15969f6c605a5199a6d7c428421f3ed753d819)
- preview in screen enemy dialog not updating (#1007) [`6e8d9bb2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e8d9bb2d8f3ea68c646abec1f6d9d79f4228fd9)
- prevent crash in screen ffc dialog [`06299f128`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06299f1285379e6ae12e9f597159ce218e0c7405)
- re-fix persisting compiled zscript version on save [`6ee510298`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ee5102984a1026b4cb8ac19b91044ca6269fb0e)
   &nbsp;
   >Regressed in 75f981f 
   >

### ZScript

- fix many internal functions [`2f845b504`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f845b504556032a00ac0c0a181a04a210f39b7f)
   &nbsp;
   >Various internal functions were not popping the correct number of elements from the stack, and so their usage could produce unexpected behavior:  
   >
   >* `Game->CurrentItemID`
   >* `Game->GetDMapIntro`
   >* `Game->GetDMapName`
   >* `Game->GetDMapTitle`
   >* `Game->GetMessage`
   >* `Game->SaveAndContinue`
   >* `Game->SaveAndQuit`
   >* `Game->SetDMapIntro`
   >* `Game->SetDMapName`
   >* `Game->SetDMapTitle`
   >* `Game->SetMessage`
   >* `Game->SwapActiveSubscreens`
   >* `Game->SwapOverlaySubscreens`
   >* `Game->SwapPassiveSubscreens`
   >* `Module->GetItemClass`
   >* `Player->PitWarp`
   >* `Player->Warp`
   >
   >
   >&nbsp;
   >
   >Also fixed `eweapon->MakeAngular` being completely broken and `eweapon->MakeDirectional` being missing. 
   >
- pop parameters for internal functions in fewer commands [`2ea65eef2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ea65eef2d24cec33e4de314f560f0182c9832d3)

# Documentation

- add logo to README [`3607d111b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3607d111b293af159061daa41a7e807533a37e81)

# Refactors

- make ffcdata extend sprite instead of solid_object [`3e0f1f6cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e0f1f6cc006aba87bde6811b371049c52607532)
- move o_tile and o_cset to sprite class [`6caac315a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6caac315aac8982dca6f295e3bca894785879f68)

### Player

- remove unused id property from slope_object [`9a3b78a13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a3b78a136da73d5f7b83d79aee1aa82d84bf98c)
- remove ffmisc, use sprite miscellaneous [`507324651`](https://github.com/ZQuestClassic/ZQuestClassic/commit/507324651d67e02e28265f6ba80ca3e52277b4e1)

### ZScript

- log errors in ghost_zh when creating an enemy fails [`1991fe54b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1991fe54b76d23f340c87fc536bd4f12046da5f7)

# Tests

- fix bad error printing in update_auto_script_tests.py validate [`b0e8fa17e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b0e8fa17eec79f2ee1abaa897aba3975f8e4fc42)

# CI

- skip tests/update_auto_script_tests.py for coverage jobs [`8623f237f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8623f237f301e433f63a470f8c1e047e5fbf7aab)

# Misc.

- add 2.55.7 changelog [`2898812c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2898812c55df1e395ec4dbcadd70d520a5e70a61)
