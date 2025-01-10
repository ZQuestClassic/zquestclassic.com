---
title: 2.55.8
description: 
date: 2025-01-05T02:07:09Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.8/2.55.8-linux.tar.gz
    name: 2.55.8-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.8/2.55.8-mac.dmg
    name: 2.55.8-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.8/2.55.8-windows-x64.zip
    name: 2.55.8-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.8/2.55.8-windows-x86.zip
    name: 2.55.8-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 193226030
tag_name: '2.55.8'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

- trigger flag 'Only Grounded Weapons' [`20e29e5d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20e29e5d64aafcf12d89833f962e0b511020f7eb)
   &nbsp;
   >Makes weapons that are in the air NOT trigger the combo (until they land) 
   >
- subscreen counters can have separate color when "full" [`d815cfb3a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d815cfb3abebb0a39bb2ebaa1965ae4c2fa8dc2a)

### Editor

- 'Whistle' item editor help text [`87733ac41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87733ac4100424d291b024926c0d3812b403d2f0)
- large corner option for dungeon carving autocombo mode [`99e126345`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99e126345d45940825a3d2b38194857cb52b38e2)
- -smart-assign CLI switch to compile + assign [`88d94ba3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88d94ba3c1917b36a3801e2d93a00f5f80554ec4)
   &nbsp;
   >Example usage:  
   >
   >./zeditor.exe -smart-assign your_quest.qst 
   >
- Item animation previews now preview 'flash' [`03f304cc3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03f304cc33deb4165523fc16f9eecf13d593e1ab)
- add Cambria as tileset option [`7d41dad8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d41dad8b0327e5fb1fa778076d8ac74cbd261a7)
- hotkey for 'Show FFCs' (no default keybind) [`28f57197c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28f57197cb88c16e7182eecc71b3f70d6c6a4a19)

### ZScript

- allow trailing commas in enum/array body declarations [`fefc046a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fefc046a63cda0ef7f40ee1a6b61f2c5a17c98f5)

# Bug Fixes

- correct bad version number used in 2.55 Alpha 86 [`fa022f93b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa022f93bc15dd6f9a1af0e58ababcee990a82d2)
- number picker dialog not using proper starting value [`8c1b7066b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c1b7066bb5283c4e0a1ce9ab7f12898dadb9368)
   &nbsp;
   >fixes some dialogs in Init Data 
   >
- prevent crash when there are too many door combo sets [`1a8794c71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a8794c713ef6ff70ee835cbd9de9bc0c26288d1)
- Lift gloves with specific settings not allowing throwing [`e2c6edf6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2c6edf6d10f086f33eb1dc428a2a707e367959b)
   &nbsp;
   >Gloves with Button=0 and 'Disable Item Use' set were unable to throw objects once picked up. 
   >

### Player

- Push (Generic) 'Opposites Cancel' flag not working properly with 0-push directions [`41abab9b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41abab9b6b82253b2ee53118f2a2e443b6b83752)
- Add limit to `genericdata->RunFrozen()` recursion to prevent crashing [`fcfa741ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fcfa741ba9aacdfc1efb2d3083181ae23d6e1661)
   &nbsp;
   >Running too many frozen scripts at once caused a stack overflow crash, now it causes a script error message. 
   >
- prevent potential crash from show walkability cheat [`96267d91f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96267d91f17f1e90a094dcc34cc53579fb2470c5)
- remove ladder during warp (#1017) [`9d668a66b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d668a66b8ba62b7eca8eb026ca8a9cbcbe8b942)
- when charging duration of Charge Ring is 0, use default time instead (#1023) [`4923c5af3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4923c5af3b044afca4d5f605f2440a246be257b4)
- remove jittery 1px gap when pushing blocks right/down [`2a39e4d89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a39e4d89303727831c158d3e3ce3d8c3db83b99)
- step triggers ignoring z-axis [`4f0026223`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f00262230fb2375d68f053652590ca8cf29b951)
- triggered autowarp combos now use sidewarps [`eccc64d66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eccc64d6656c7179fc3ce202df667eb5c0642065)
   &nbsp;
   >autowarps triggered by combotriggers use sidewarps. instead of tilewarps screenflags that make autowarp and sidewarp direct work with triggers now (as they should) 
   >
- Custom Bush/Slash combo sprites not spawning centered on the combo [`a59f93106`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a59f931065a09df677c9e4a1f6691282275187a9)
- incorrect dungeon check in map view [`170d9237d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/170d9237db54475dc688c16e8a38e25706201d9c)
   &nbsp;
   >This resulted in drawing doors incorrectly. 
   >
- bombed walls drawn incorrectly during scrolling [`e1cff3508`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1cff3508f943069656e93d88e20c3952a3435d0)

### Editor

- add more ? buttons to combo editor about weapon triggers [`65e989e30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65e989e30f7cffd22353d405cf55282b3dcd48af)
   &nbsp;
   >Clarified how the fire triggers work Renamed 'Any Fire' to 'Normal Fire' to better reflect how it actually works 
   >
- some lists closing dialogs randomly when rclicked [`33096f847`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33096f847b31952657ed4641fb0420924adec9de)
- changing some options in options dlg wasn't updating rclick menu [`e5ed7a6b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5ed7a6b7fe38e0088fc90daa5132125cbebdf77)
- show tile 0's actual graphic for gauge widget tile selectors [`0e6f66d50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e6f66d500cbbc20a72e93ad5957f6906d8b071f)
- `Mouse Scroll` setting not working on 4th combo column [`29916995b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29916995b783b8fbc619a79e13ddc890494fb86d)
- typo in subscreen gauge piece 'Units per Frame' help text [`09e7c5e08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09e7c5e08bdecab147d42a6330b28a7a342f95ee)
- set explicit width for combo lifting drop-down lists [`3ea9aac26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ea9aac26d7bc62dd33b5fc11da1851e41eb1c5a)
- typo in push flag help text [`8409561af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8409561afb4a4ae4c760710081e5402049766fd9)
- crash on importing combo aliases [`888a5ec24`](https://github.com/ZQuestClassic/ZQuestClassic/commit/888a5ec249f5226e9d25c09af8fb2646599fb95b)
- 'delay' animation preview was calculated wrong [`775850d14`](https://github.com/ZQuestClassic/ZQuestClassic/commit/775850d148d2345c4f445aaed80846425071d66a)
- remove hidden combo selection mode toggled with spacebar (#1051) [`46503dc88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46503dc88aa1fa56c91e64ebf191a0756277ffba)
   &nbsp;
   >Pressing space changed how combo selection worked in a way that often confused users. There was also no visible indication of this, so it was extra bad. This mode was perhaps useful for something in the combo selector dialog, but outside that it was seemingly not useful at all - and is now removed. 
   >
- item 'flash' not previewing on main screen [`97042f4f1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97042f4f1140968e0de7ae49a711540eb1196b4f)
- remove extraneous `String, but guy is (none)` warning [`066fb4e6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/066fb4e6ff9c5aa055fce74778d5fa7a96ac3219)
   &nbsp;
   >Due to various new features, this warning is no longer valid,	as there are reasons to have a string with no guy, ex. Signposts 
   >

### ZScript

- prevent potential crash while compiling ternary expressions [`52d4ef7f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52d4ef7f64358c2ed0ad28361320ccdab4bf57b1)
   &nbsp;
   >Regressed 2 years ago in dd975320. 
   >
- fix codegen for long integer `^^^` constant 0 [`fd4d8ae25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd4d8ae25ae990639b766d78ded7561dcf84da23)
   &nbsp;
   >This was accidentally producing `10000` instead of `1`. 
   >
- correct broken clipping of draw commands in some cases [`37b9ded29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37b9ded295976ac82588c0a10c0eb5c0874ee3f9)
   &nbsp;
   >Some draw commands clip their contents based on whether the render target is the screen or a custom bitmap. However, the way this was tracked was broken, and resulted in all draw commands in the same batch following a single custom bitmap draw command incorrectly using the clipping bounds meant for just custom bitmaps. 
   >
- properly allocate file list to prevent `FileSystem->LoadDirectory()` crash [`346d46d03`](https://github.com/ZQuestClassic/ZQuestClassic/commit/346d46d0372aef0de122619c43fae762555894df)

# Documentation

- link to docs.zquestclassic.com/zscript in zscript.txt, ZScript_Additions.txt [`72284f478`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72284f478bb468269bbdb36e0c9f8a5590ae70ba)

# Refactors

### Editor

- rename boomerang range attribute to duration (#1048) [`1657d1072`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1657d1072863488efe0847b0e73d3d9fd379793f)
- in Load Tileset wizard, enable all clear options by default [`82819fab6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82819fab63f8a306bd7ce588ad02f110bb0b8234)

### ZScript Standard Library (std.zh)

- remove DMFS_SIDEVIEW since it was never implemented [`29689de17`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29689de177a3b107cd5b9ba1ef9dbf9bc696ab26)

### ZScript

- log errors in ghost_zh when creating an enemy fails [`445c75322`](https://github.com/ZQuestClassic/ZQuestClassic/commit/445c753222afa83a14903c3e9eb2d323f8bd9bf0)
- rename `Game->LevelStates[]`/`Game->GlobalStates[]` [`440d29feb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/440d29feb34cd9380f270755df39458bf3ad9175)
   &nbsp;
   >previous names `Game->LSwitches[]`/`Game->GSwitch[]` are deprecated 
   >
- add a few functions in preparation for z3 regions [`e5ac9267f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5ac9267f6b4aab354dbbaf63b746ce98c6b99bd)
   &nbsp;
   >While 2.55 won't support scrolling regions, it will still have these following functions so that scripts may be written to be compatible with 2.55 and 3.0.  
   >
   >Game:  
   >
   >- `mapdata LoadTempScreen(int layer, int screen)`
   >- `mapdata LoadTempScreenForComboPos(int layer, int pos)`
   >- `mapdata LoadScrollingScreen(int layer, int screen)`
   >
   >
   >&nbsp;
   >
   >Screen:  
   >
   >- `ffc LoadFFC(int screen, int index)`
   >- `void TriggerSecrets(int screen)`
   >

# Tests

- correctly emit error when compiling unsupported ZASM [`956953974`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95695397482b70b0573a6c4e953b9fe3ba1268dc)
   &nbsp;
   >The `-quick-compile` and `-smart-compile` CLI switches were not correctly failing the program or printing an error message when encountering a bad ZASM command. 
   >

# CI

- use macos-13 for newer clang [`cd7d682dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd7d682dd85488b9ea11938ab49994db7b98c0e8)

# Misc.

### Editor

- add help text for conveyors about positive/negative values [`240967771`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2409677712f66aaf48b561801442ae117c585c8f)
