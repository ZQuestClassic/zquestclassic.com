---
title: 2.55.12
description: 
date: 2026-01-19T07:44:13Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.12/2.55.12-linux.tar.gz
    name: 2.55.12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.12/2.55.12-mac.dmg
    name: 2.55.12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.12/2.55.12-windows-x64.zip
    name: 2.55.12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.12/2.55.12-windows-x86.zip
    name: 2.55.12-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 277841667
tag_name: '2.55.12'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Player

- multiple control schemes [`9a0182f38`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a0182f3825929d657773a4ef954ee84b75c3cac)
   &nbsp;
   >You can now configure different schemes for keyboard/gamepad controls, and configure quests to use a specific scheme.  
   >
   >The dialog for binding controls has also been improved. 
   >

### Editor

- new boxes to enter timed warp time in minutes/seconds [`ceb6695ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ceb6695ae7eb6da107852a7e558e3c6851b53b3b)
- improve map view with mouse zoom/drag [`2a349cae4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a349cae4ea3f5d7a9fdc77e5b230152463bdbab)
- added 'Combo Pools' / 'Auto Combos' to 'Quest->Graphics' menu [`06f1f7f1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06f1f7f1dfdf6c1ec889109b2feee4209ab1b075)
- add 'Open Combo Page' to screen right-click menu [`dbe015ec5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dbe015ec50636f2051e8024d1af777543e25e6ce)
- subscreen editor option for "Duplicate In-Place" [`1931e10fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1931e10fc5774863a09c0fb6a8f43c093d201c42)
   &nbsp;
   >If enabled, duplicating a widget will place the new one at the same x,y as the original, instead of shifting it down-right by 1 grid unit. 
   >
- right-click the map/screen bookmarks to clear [`fd7fc9967`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd7fc99679873092e258554e0eb29d6e1245af02)

### ZScript Standard Library (std.zh)

- add a few functions [`dc935961e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc935961e03bd3a30f5b62c5acaa96c9e216a146)
   &nbsp;
   >* `GetLayerComboE`: green effect square
   >* `DrainedCounter`: counter's current value, accounting for DCounter
   >* `InputToDir` / `PressToDir`: get direction based on held/pressed inputs
   >* `DirToInput` / `DirToPress`: sets input based on a direction
   >

# Bug Fixes

- scrolling ui panes sometimes blanking out contents [`4f8ef4898`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f8ef4898be75d861d1f2e820316f5f1206c94f3)
- [win] correctly position drive selector in file dialog [`f7a8c5bcd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7a8c5bcd819506176523d9939e64c68d6975ac4)
   &nbsp;
   >When the tileset dialog wizard opens the file dialog, it could sometimes incorrectly position some elements, mostly the drive selector. 
   >
- build with PulseAudio support; fixes sound in many Linux distros [`3965d994f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3965d994fface457c3c40470f630a426ec2d0c99)
- improve keyboard driver [`e030ca6d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e030ca6d29a1f3686bab423b6be179b113f40e51)
- missing 8 pixels in active subscreen [`2f80e5f3b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f80e5f3b3a881d939d6106da243e827ffa55240)
   &nbsp;
   >compat qr for old behavior 
   >
- allegro5 render layers having uninitialized transforms [`52492d4bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52492d4bfe1e5def8a4a58ab3dac8803b7d0d88f)

### Player

- prevent drowning when walk-through-walls cheat is enabled [`cfada59fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfada59fc5e1f092a6ce2c0f47e24862846fe351)
- lift glove action script clearing owned script objects after first frame [`3fc7bd3bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fc7bd3bd2c568b9167c0f30629c585067992d87)
- hookshot wedging the player into walls sometimes [`43565e06d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43565e06d37dbd70e2ec7d4c6abdaadb131ecfc4)
   &nbsp;
   >This bug has apparently been present since 2.50.2, and already HAD a fix implemented, the fix was just very slightly broken. 
   >
- only force grab one held-up item at a time [`948012a89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/948012a89949f27fda500bc43ac8aaccd972ee40)
   &nbsp;
   >If the player collects multiple items at or around the same time, and those items run the "hold up" animation, only the first item would show the holding animation while the others would silently be collected.  
   >
   >Now, the items are collected and held up one at a time. Note that this only applies to "force grabbed" items (ex: settable in scripts via `itemsprite::ForceGrab`, or as the result of some triggers). 
   >
- draw transparency correctly during death [`2971b6aed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2971b6aed03243f8a0dc0929000a85f344ca70ae)
   &nbsp;
   >During the death animation, the first frame of the redshift did not correctly update the transparency table, so transparent colors appeared darker than they should. 
   >
- getting stuck on solid FFCs w/ new movement disabled [`2e6e7ad07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e6e7ad0708fc17ba2fff956d9d8ec15e7a60985)
- "respawning" to another screen using wrong dmap's xoffset [`167bb6409`](https://github.com/ZQuestClassic/ZQuestClassic/commit/167bb6409e6c4a1d1a38ba6851598ed30dc57c89)
- properly load files saved as .QST [`87bd2424c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87bd2424c13d91f70252f02c35bdc915c9c2829a)
   &nbsp;
   >The qst file selector when creating a save was always making the file extension lowercased. On Windows and Mac that doesn't matter because the filesystem is case insensitive, but on Linux / web it prevents loading files saved as .QST rather than .qst 
   >
- Active shields and Passive Button Roc Items not running scripts [`32739ce1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32739ce1c831d556be7358ff240f1033ba33a597)
   &nbsp;
   >Active shields (either standard or set on a passive button), and Roc Items (set on a passive button) were not running their Action Script when used. 
   >
- prevent exploding bombs falling into pits not near them [`6239f1bb4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6239f1bb4082887a339ab767521a269e4a59beeb)
   &nbsp;
   >This was caused by bombs having a large hit offset when exploding, and a check was bounding the coordinates back into the valid screen area. This caused the bomb to fall into pits along the right edge of the screen. 
   >
- prevent player getting hit by some sources during pitfalls [`0f11f6771`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f11f6771ec3dc97e6ef6cfe1d9676d336098a8e)
- Whistle defense not respecting 'Ignore' behavior [`816c2ab2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/816c2ab2ca77a41eaaecdf515911dc415afcb061)
- 'Menu' gamepad button not activating the menu [`f128fc2ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f128fc2ac51800f9bc66691fa81187f68fb66a7e)
- use configured `Halt Duration`, `Acceleration Factor` for peahats [`660dce5e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/660dce5e237373e8d6517001e80983739c8e59c6)

### Editor

- don't incorrectly show '-->' in the String list [`45a99ca3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45a99ca3e2f99cb036936af35a1c8678b279879b)
   &nbsp;
   >Now it appears when it is the 'Next String' of the string visibly above it in the list, regardless of the base index number. 
   >
- quest report `Save` button not working [`01d727dc4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01d727dc42132c89d8973ab89be0f602b8cad577)
- enemy defense list missing 'Switch w/ Player' [`9034ff4c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9034ff4c60238463ad287f5355a1621440642792)
- correctly show cset/combo type for selected layer [`bd242a752`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd242a75269cacbd2554c8d28999254ace993e05)
   &nbsp;
   >The "Show CSets/Types" feature is meant to only show the currently selected layer, but instead it was showing the highest layer (except for when "Show Flags" was also enabled, which prevented the bug). 
   >
- prevent rare crash in subscreen Counter Block wizard [`33a1c7bfb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33a1c7bfbc516ce83e647b82dfc4e2279d0240de)
   &nbsp;
   >If the "Inf Char" field was empty when the dialog closes, the program could possibly crash. 
   >
- improve usability of number input fields [`04a904c1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/04a904c1ad1ae01535352a7821e1655bbd75b86e)
   &nbsp;
   >Some number input fields limit the number of characters based on the max value; but these required deleting the "0" before it would allow typing the full value, which was clunky.  
   >
   >Now these fields have an additional character space to account for the leading 0. 
   >
- remove frame of lag when opening tiles dialog [`19d527be7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19d527be7484172edb4f155de99c8f40977449fb)
- lag in tile/combo/alias/etc pages dialogs [`3bf07b571`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bf07b571ddcd6fe753204b4eb7dc50a372fab27)
- skip timed autosave when there are no changes [`8f632c095`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f632c095a3b4ba03e2fb1a048b800d37a4d9e84)
   &nbsp;
   >Autosave no longer saves if there are no changes since the last save, just like normal saves. This prevents the window from popping up repeatedly when the editor is idle. 
   >
- dmap import/export [`36a122f1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36a122f1f48dd852ee752b37a0a92a2396aa491e)

### ZScript Standard Library (std.zh)

- update ghost.zh to use 128 ffcs instead of 32 [`35f334d07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35f334d074a1ea28e033949473e2c338cb0ce724)

### ZScript

- using `[]` on some types crashing the parser [`eba6c7b1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eba6c7b1d859c7695f610a55639fee1588a042c2)
- support changing BS-Zelda animation, many scrolling related QRs [`bb17908bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb17908bb9658e9552bae2ffc912efb91584b445)
- prevent crash in `Game->GetItem()` [`a37ae067e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a37ae067ed56b21ff61602734367bb943cc2745a)
- prevent crash when using empty string with some file functions [`b9087daaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9087daaf75aebe4e5e217d02b92a5d2e78e56f3)
- for x64 jit, check CPU supports SSE4.1 [`2bbee11b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bbee11b7cb239fa97dd64ca677ed4c08e17c5b9)
   &nbsp;
   >This prevents a crash when the jit is enabled on CPUs that don't support SSE4.1 (~2007 for Intel, ~2013 for AMD). 
   >
- printf/sprintf '%f' improperly ending in `.` instead of `.0` for integers [`d39af768c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d39af768c1e127cbea96d48486243047846773f9)

### Web

- resolve issues with non-US standard keyboard layouts [`562efd3ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/562efd3edcfef86d879cb135d1976be6f127c9c7)

# Build

- improve packaging, lean on CMake more [`4706ad025`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4706ad025fa60f3d19aebf094af0ff22f910f654)
   &nbsp;
   >The `cmake --install` command should now work on all platforms to install ZC locally.  
   >
   >* Updated docs/building.md
   >* Use CMake's install and cpack features to coordinate what resources
   >  and shared libraries are needed at runtime, and for creating
   >  distributable packages. This replaces package.py and package_mac.sh
   >* On Linux, follow conventions: shared libraries go into lib/, binaries
   >  go into bin/, and resources go into share/zquestclassic
   >* For the generated Mac .dmg, add custom background saying "Take this!"
   >* For Mac app bundles, .dylib files now go into Contents/Frameworks
   >  instead of Contents/libs
   >
- vendor libdumb and link statically [`d44f0a0f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d44f0a0f397b42d3e418faf353bbfbfac685349c)
- switch to libjpeg_turbo [`c05b743a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c05b743a3f957f2d6706b5a87727e5f3d3717591)
- upgrade allegro [`c2299147b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2299147b54e9385faea47dce5924e14ffcfd303)
   &nbsp;
   >https://github.com/connorjclark/allegro5/compare/my-fork-13...my-fork-14 
   >
- vendor zlib [`1e3e2dad9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e3e2dad9cc055379bf81cacca06343cfaccf57e)
- vendor libpng [`b87420dfa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b87420dfa3df66e756642257b5985e96327ffca5)
- update nativefiledialog [`f0d5a9fed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0d5a9fed6a6f46a50ab6e185c2553984a7b151c)
   &nbsp;
   >This fixes an issue where on Windows the native file dialog always opened at the most recently viewed folder, instead of using whatever folder ZC requested to open. 
   >

# Refactors

- speed up bitmap rendering by removing branch [`3da9eb561`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3da9eb56193f6a29c126f4f39d5eb56f2faceff7)
- speed up draw_tile16_unified [`bd469e6f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd469e6f41306a641b6e031cc5df43bc061c1ac5)
- simplify overtile16 [`138d6de4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/138d6de4d12600cfa0355120926af7043b0e4d8e)
- speed up puttile16 [`ba9da39a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba9da39a0da2fb52637488c6ae2000fb840d943f)
- speed up drawtile16_cs2 [`509b54ba9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/509b54ba9b01e939bd790ef5f176e296d558699a)
- speed up overtile8 [`ad919af18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ad919af183d92adffe8c55eecf6f7f5cdb0cde7b)
- cache bitmap used in overtile16_scale [`eeb3cc0d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eeb3cc0d602054573d0f5d0d1fb93ec86f1bc52f)
- use vsnprintf instead of uvszprintf for text rendering [`9acde4ca5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9acde4ca52ca192a40f9da96ed9727525074ad4e)
   &nbsp;
   >The Unicode-aware allegro function makes text rendering ~40% slower, but we don't need Unicode here. 
   >
- log error reason when failing to open file [`f1bf667e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1bf667e2e7cd751c98d55883e7c652a749b6bfa)
- log all al_trace output to stdout (except on Windows) [`daee43d7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/daee43d7a8dbb42f9fb80f78caffeff12a910a8a)

### Player

- stop printing include paths in zplayer [`20e2f715a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20e2f715afd73c91a644f004276fcdbdecae5326)

### Editor

- upgrade Under Combo dialog to new gui [`ad71fafae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ad71fafae587ce0db17711cd86e67559a6361c2a)
