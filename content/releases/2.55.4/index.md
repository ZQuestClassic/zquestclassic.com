---
title: 2.55.4
description: 
date: 2024-06-27T03:25:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.4/2.55.4-linux.tar.gz
    name: 2.55.4-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.4/2.55.4-mac.dmg
    name: 2.55.4-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.4/2.55.4-windows-x64.zip
    name: 2.55.4-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.4/2.55.4-windows-x86.zip
    name: 2.55.4-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 162688831
tag_name: '2.55.4'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

- add 'Note' item wizard, notes can play relative strings now [`b55a47b39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b55a47b39a9eff4c2ad08413e94a9dcc12f989cd)
- add enemy flag to control if affected by "Kill All Enemies" [`b102f3fb0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b102f3fb01137b80e94f369d36ffa02f4280105e)
- add option to use the native OS dialog to select/create files [`5953252f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5953252f5bb9dd4115c177c42a5d8623ba911b22)
   &nbsp;
   >A new button allows using the OS dialog to select/create a file. This can be used directly by setting the `Native File Dialog` option in the launcher. 
   >

### Editor

- show CSet in combo pages [`b6b0f0365`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6b0f0365eccf41e8dbdfb3bb91984b4b171158b)
- hex entry for string control code dialog [`6d5b46655`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d5b466559462634ec4d1a75d66d8dac4d122e29)

### ZScript

- allow function return and parameter types to use `[]` [`9a797f67c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a797f67cfcac5702d0ec4107dc002b0b14c43e3)
   &nbsp;
   >This doesn't enforce array types, but allows 3.0 scripts to be backwards-compatabile with 2.55 
   >

# Bug Fixes

### Player

- npc scripts for many enemies ending after one frame [`5c44cb6ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c44cb6ba59db03f44ce08d77ba2c4c2a5cace2f)
   &nbsp;
   >Enemies larger than one tile use a different code path than other enemies, and that path was mistakenly only allowing scripts to run for a single frame. 
   >

### Editor

- prevent invalid string access resulting in crash [`a29a80185`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a29a8018521ab4e2bcd194c221582362e0cdc88b)

### ZLauncher

- hide update tab on linux [`843167862`](https://github.com/ZQuestClassic/ZQuestClassic/commit/843167862e9caf5514c412173dbd9b3135c86b34)

# Build

- add cmake install commands for linux [`139839098`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1398390986bccb38d6b8805e7653ac2beb3876c3)
- update GME, which should resolve the final gcc build issue [`154ac73e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/154ac73e7ae72518ef72f954aeebd466d9a81c7d)
- set default install folder on linux to ~/zquestclassic [`b982a1f5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b982a1f5a1fb5e8647e1975ab1adef5b1829342e)
- generate changelog when doing linux install [`592236643`](https://github.com/ZQuestClassic/ZQuestClassic/commit/592236643c69cf83e54a1392b98c5241ca3dad34)

# Refactors

- remove expensive busy loop in render throttler [`218b38ec0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/218b38ec0e24b3abbd0ecce8dd821d4f5991ee62)
   &nbsp;
   >Replaces a busy loop with a much cheaper mutex condition variable to control FPS.  
   >
   >The `maxfps` option now works for values less than 60 fps. 
   >

### Player

- add cache to generation of translucency tables [`10d8b84c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10d8b84c0491bc1acc55b4b97a8d649792706602)
   &nbsp;
   >This took up a lot of CPU time during the titlescreen and during animations such as screen wipes / triforce pickup / etc. 
   >

### ZScript Standard Library (std.zh)

- delete unused and unwanted stuff [`5291c4cd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5291c4cd2891dc2dc9e2e1c0b22a1d77def1a233)
   &nbsp;
   >These files have been deleted from the `std` library:  
   >
   >* std_zh/assert.zh
   >* std_zh/astar.zh
   >* std_zh/infostring.zh
   >* std_zh/math.zh
   >* std_zh/std_legacy.zh
   >* std_zh/std_meta.zh
   >* std_zh/std_update.zh
   >* std_zh/std_user_defs.zh
   >* std_zh/std_vars.zh
   >* std_zh/weapon.zh
   >
   >
   >&nbsp;
   >
   >These files either do not belong in a standard library (too specific), are not finished, or otherwise provide little to no value so are just a maintenance burden. 
   >

### ZScript

- reduce the scripts included by default [`0891e663c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0891e663c3ebb5c089ca469a1075f66d0cdbf674)
   &nbsp;
   >This removes some scripts that aren't useful, or aren't a good fit for default inclusion.  
   >
   >* delete `gameover_menus.zh`
   >* delete `LISP.zh`
   >* delete `Music.zh`
   >* delete `sprites.zh`
   >* delete `styles.zh`
   >* delete `theRandomHeader_v2.zh`
   >* delete `ZVersion.zh`
   >* delete `tango/1.0` and `tango/1.2` (keeping just 1.3)
   >* move `sram.zh` to `deprecated/sram.zh`
   >* move `theRandomHeader_v3.zh` to `deprecated/theRandomHeader.zh`
   >* move `time.zh` to `deprecated/time.zh`
   >* move example scripts to `headers/examples`
   >* remove `std` including `EmilyMisc.zh` - include yourself as needed
   >

# Tests

- add newbie_boss.zplay and recompile test [`094702d13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/094702d13edaea522312dcd98b9f43676c9ee78f)

# Misc.

### ZLauncher

- remove tounge-in-cheek tooltip from Fullscreen checkbox [`d672593ca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d672593ca06e2c76ea50b0fc6f3c5ebd8b1df5ce)
