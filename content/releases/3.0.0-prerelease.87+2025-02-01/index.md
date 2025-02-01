---
title: 3.0 Prerelease 87 2025-02-01
description: 
date: 2025-02-01T02:09:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.87%2B2025-02-01/3.0.0-prerelease.87%2B2025-02-01-linux.tar.gz
    name: 3.0.0-prerelease.87+2025-02-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.87%2B2025-02-01/3.0.0-prerelease.87%2B2025-02-01-mac.dmg
    name: 3.0.0-prerelease.87+2025-02-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.87%2B2025-02-01/3.0.0-prerelease.87%2B2025-02-01-windows-x64.zip
    name: 3.0.0-prerelease.87+2025-02-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.87%2B2025-02-01/3.0.0-prerelease.87%2B2025-02-01-windows-x86.zip
    name: 3.0.0-prerelease.87+2025-02-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 197904415
tag_name: '3.0.0-prerelease.87+2025-02-01'
channel: '3'
tags:
  - releases
---




# Features

- Trigger flag 'Apply Discount', allows wealth medal discount to apply to trigger counter costs [`7ffb36113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ffb36113579a8f5c9a0d799124a65d74bc12b16)
- 'Light Wave' effect for dark room lights [`b46b96c18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b46b96c1836747a356ce69bc497743398881e53e)
   &nbsp;
   >Makes the lights increase and decrease radius in a sine wave pattern, with a specified rate and size. Lantern items have a checkbox to ignore this effect. 
   >

### ZScript

- add `@Bitflags` enum annotation (#1064) [`c089b2af1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c089b2af1595485527a6b3a32ed1213950924b5d)
   &nbsp;
   >This annotation turns an enum into a bitflags enum:  
   >
   >1. Auto-incrementing values starting at 1 and doubling the previous for    each new enum member 2. For type safety, bitwise operations on enum bitflags are only allowed    with the same type  
   >
   >For example:  
   >
   >```
   >@Bitflags("int") // "long" is also supported
   >enum SomeBitflags
   >{
   >	Fast,
   >	Big,
   >	Loud,
   >};
   >
   >@Bitflags("int")
   >enum OtherBitflags
   >{
   >	Combo,
   >	Enemy,
   >	Weapon,
   >};
   >
   >auto x = Fast | Big; // inferred type is SomeBitflags
   >if (x & Enemy) // Errors, scripter accidentally used the wrong enum.
   >	// ...
   >```
   >
   > Co-authored-by: Connor Clark <cjamcl@gmail.com> 
   >

### Visual Studio Code Extension

- support Go To Definition for function return type [`ea021739a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea021739ac7be00c9adf8e6b308c5b2fdbf10b71)
   &nbsp;
   >Also support tooltip showing up when hovering over declarations. 
   >
- support 'Find all references' [`e15861fc0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e15861fc0c43fd47e77dd59d1daaca8983db0ccd)
   &nbsp;
   >For now, this is only able to list all references within the current file. 
   >

# Bug Fixes

- System menu mouse responsiveness [`25027ba99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25027ba9988f1fe0c7c9d44f2da50b940b8b4c60)
   &nbsp;
   >Holding left-click and dragging across menus now allows going through multiple 'submenus' at once, including going back up to clicked-on parent menus. These were features of the old menu system, which were lost during the system upgrade. 
   >
- prevent crash when loading midi with 32 tracks [`45b09b94b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45b09b94b2970019a36a0696f158a9e5f64f31f4)

### Player

- some collision issues related to 4-way movement with no-gridlock enabled. [`95d63d727`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95d63d727323192f6ab113df8cb221f0f4e56f07)
- 'Platform' ffcs teleporting the player as the screen loads [`364a014f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/364a014f7f164c17d482c994acd69bb75d055ff3)
- Game time shows in-game, even when you've 'cheated' [`01614ff3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01614ff3cb14ec4005d999aab44f81c4151ba409)

### Editor

- lockblock/chest combo wizard bad field for counter amount [`5b2e5ccb2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b2e5ccb2ee020ed0a72a0cce69e3b3ed81811eb)
- description of 'Consume w/o trig' triggerflag was misleading [`6be636e6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6be636e6d7c83d294de1c73019c29b97670bd537)

### ZScript

- improve comment parser linkification by skipping when in backticks [`66b437106`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66b43710609a3c79199cffd187df4fa0f67a3cdc)
- prevent many out-of-bounds reads/writes [`e85392e65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e85392e6599d06e8770bcbeed92024858d84793a)

# Documentation

- add new zscript language documentation (#1061) [`e1cfeefd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1cfeefd1a13290bbb49cf8a5a6725a981eaee7c)
   &nbsp;
   >Co-authored-by: Connor Clark <cjamcl@gmail.com> 
   >
- remove zscript intro from tutorial toctree, broke prev/next order [`fab7b4a50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fab7b4a50aadee78b8999fd9a013519e6cb7a86e)

# Refactors

- move src/zc/zc_custom.cpp to src/hero_tiles.cpp [`5d9810165`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d981016585ca6b02b3cc63d6040e81821f83268)

### ZScript

- tidy up std, move many enum/constants to bindings (#1065) [`45b9f1794`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45b9f17949bd5ee1c7434036e0f176796a8cc15b)
   &nbsp;
   >Many constants are now named enums, and moved from `std` to binding files (which are imported automatically). This allows these values to be used with internal bindings (like `Game->`) without importing `std`; and improves documentation by giving everything a reference-able name.  
   >
   >Also did a large general clean up of documentation comments, and made sure every internal function/variable documents what enum applies to it.  
   >
   >Removed many unused or unimplemented features. 
   >
- add @deprecated_getter [`7a64c6ee3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a64c6ee315644fb8f54bf606451f813121ba220)
- minor comment fixes [`84e93831c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84e93831c6107874cef6e10440c6f0bdbc97a592)

### Visual Studio Code Extension

- add job pool, improve script processing [`6e70798b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e70798b298831e26298079bca26aaaf375114f2)

# Tests

### Visual Studio Code Extension

- add tests for 2.55 and 3.0 [`c9334a381`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9334a3811392c7cc30f73e03f67316e41916320)
   &nbsp;
   >Also:  
   >
   >* On Mac, can now use path to `.app` bundle as installation folder
   >* For 2.55, fix bug where parser errors underlined the entire line
   >

# CI

- move update_auto_script_tests.py after replays [`2319ae6a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2319ae6a3cf47f999d13cc311b42784436bd9efe)
