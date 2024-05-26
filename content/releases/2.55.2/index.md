---
title: 2.55.2
description: 
date: 2024-04-22T02:33:56Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.2/2.55.2-linux.tar.gz
    name: 2.55.2-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.2/2.55.2-mac.dmg
    name: 2.55.2-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.2/2.55.2-windows-x64.zip
    name: 2.55.2-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.2/2.55.2-windows-x86.zip
    name: 2.55.2-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 152124988
tag_name: '2.55.2'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Editor

- 'Notes' per-screen for editor use [`4ed3e71bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ed3e71bca11fe2809c07c3aa0abe9d781c0d450)
- ffc editor now previews large ffcs [`20ba0bc09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20ba0bc097d227de3ed67211054f5f7b6d85db6e)

# Bug Fixes

- Improve dropdown numerical search [`e9e127f73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9e127f734dc0d98806ffcd3d4b9b36ec6442319)
- update 'default.qst' [`aa948b117`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa948b11759f6b480852453577448d01c1b2fc9a)
   &nbsp;
   >Several default subscreen fixes (some by P-Tux7, some by myself) 
   >
- reduce sfx buffer to decrease lag caused by e7c214e [`ef8ce36a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef8ce36a9580f533d53cffd5271672ab36b06340)
- removed flag that was breaking mod playback [`b7ac0c6a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7ac0c6a8465823ff2433f3527cb25975687e490)

### Player

- hardcode 120 for zscript alpha register [`80b70b43f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80b70b43f3047a230e3162e26b20cf65030e3002)
   &nbsp;
   >This fixes some quests that only look at the alpha version and, seeing it was now 0 presented an error message to the user. 
   >
- 'delete' within a destructor being buggy [`3c86a76b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c86a76b8d93c250bcf636ce19c3206be79b94c9)
- 'Spotlight' combos on changer/ethereal ffcs still shooting light [`c04ea1ba6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c04ea1ba67cbcfaa76bb553f9cb71cf21ac74628)
- fix buggy color flickering on big player sprites [`bb644e0c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb644e0c860a56fd81e17855a5442be6e2829cba)
- some variables being improperly reset on 'Continue' [`489e32212`](https://github.com/ZQuestClassic/ZQuestClassic/commit/489e322126cc3f23c9504e749acb4b52be90598e)

### Editor

- 'View Map' favorite command skipping menu [`0a21ba8ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a21ba8ff3ff8b5be4dae439d24afada08ef1745)
- avoid overwriting screen bookmarks on quest load [`d1386ba10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d1386ba10f4e4a4192c544a68cd16359a4065df6)
- 'Gen Flags' being missing from combo advanced paste [`a50934b68`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a50934b6868461e86e889c505d8c2b5252b87993)
- Crash in ZInfo menu if descriptions are long [`cef01b5c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cef01b5c10350ecfb8278b565f315bfaf10f9d47)
- crash on reducing map count [`ba8f2dfd5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba8f2dfd537ab3419481f6f247788f44202ad7a3)
- warp dialog selector mishandling negative dmap offsets [`19917e9f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19917e9f73bd712b2392e73f4d02e1accb217de7)
- upgrade tile+combo 'move' code, more things now update on moving tiles/combos [`6aae56ece`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6aae56ece89f44460206c31c66fc8f13e53fc6b2)
   &nbsp;
   >Also fixes some issues with 'undo'ing moves, and adds Combo Protection for in-use combos. 
   >

### ZScript Standard Library (std.zh)

- update to remove use of 'deprecated' functions/vars [`61cccce71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61cccce717ad6a9d8958ff27205d08e9d29fa1bf)
- 'TRIGFLAG_' constants were off-by-one at a certain point in the list [`f2fc4df01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2fc4df01751ff73b001ea557f8e57fc71c1593b)

### ZScript

- some array-related functions breaking for arrays >65535 in size [`9c5d9aed4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c5d9aed4dc34c132a0ecef631018a4c2a8f8b4e)
- class variables not shadowing global vars properly [`8d7658367`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d76583678f41274d4be17e2fd8a6afe89575fbc)
- some wrong error messages related to mapdata FFC access [`9909f5c1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9909f5c1b624d8ca574200b824270950585e3c61)
- disallow casting custom objects to unrelated types [`8a48221a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a48221a9986b31f8a631898b678896040b3b113)
   &nbsp;
   >A bug in type conversion allowed this code to compile:  
   >
   >```cpp
   >Object obj = new Object();
   >int number = obj;
   >int numbers[] = {obj};
   >```
   >
   > The above code now produces a compiler error. 
   >
- handful of zasm commands using wrong name [`960da1145`](https://github.com/ZQuestClassic/ZQuestClassic/commit/960da11459c6a229c289926f23b2611a88921b0a)
- handful of zasm commands using wrong name [`40537d3ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40537d3ab7437a8ce02433d744d38c955769bffc)
- Trace(string) using wrong register [`d845df6a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d845df6a84f2f66b68bb9815a7fd2fc058517862)
- wrong names for zasm npc InitD and item WeaponHitWidth [`324d86cac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/324d86cace557824c77bf37b2dbece66ea04a37f)
- various symbols with broken compiler output [`982ec4d75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/982ec4d75eec28d67554a474df43e1ea959b6747)
   &nbsp;
   >* npc->Attack()
   >* npc->CanSlide()
   >* npc->ConstantWalk(int[])
   >* npc->ConstantWalk8(int[])
   >* npc->FloatingWalk(int[])
   >* npc->HaltingWalk(int[])
   >* npc->HaltingWalk8(int[])
   >* npc->isDead()
   >* npc->NewDir8(int[])
   >* npc->Remove()
   >* npc->Slide()
   >* npc->StopBGSFX()
   >* npc->VariableWalk(int[])
   >* npc->VariableWalk8(int[])
   >* Trace(char32[])
   >
- remove some unimplemented symbols and correct some types [`fd4e4b434`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd4e4b434074df75511ddc2210cf5d54a6442830)

# Documentation

### ZScript

- add documentation regarding 'Hero->Warp()' and its return square [`b90683ccb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b90683ccb291c558605f8ad311abb7c48a8e11cc)

# Refactors

### ZScript

- better 'read-only' compile warnings [`a58cf4f05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a58cf4f05ad8f1bf0a6c4fe274d115fbc241b8c5)
- deprecate many getters/setters, replace with variables [`7a20dab49`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a20dab495832b0b323a4719fbd2314ef61907df)
   &nbsp;
   >~40 built-in methods exist in this style:  
   >
   >```cpp
   >int Max(); // Returns the max.
   >void Max(int value); // Sets the max.
   >int GetCurDMapScreen();
   >```
   >
   > These have been deprecated and replaced with a variable, like so:  
   >
   >```
   >int Max; // The max number.
   >int CurDMapScreen;
   >```
   >

# Tests

- add tests for read-only vars and deprecation [`d8d56745e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8d56745e3a265eebfa972a9b0e46030f4186f1d)

# Misc.

- update themes [`702396d7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/702396d7fd2724cc08969461b01375c130e7a871)
