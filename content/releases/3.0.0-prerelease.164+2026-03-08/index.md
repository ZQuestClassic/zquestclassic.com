---
title: 3.0 Prerelease 164 2026-03-08
description: 
date: 2026-03-08T00:13:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.164%2B2026-03-08/3.0.0-prerelease.164%2B2026-03-08-linux.tar.gz
    name: 3.0.0-prerelease.164+2026-03-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.164%2B2026-03-08/3.0.0-prerelease.164%2B2026-03-08-mac.dmg
    name: 3.0.0-prerelease.164+2026-03-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.164%2B2026-03-08/3.0.0-prerelease.164%2B2026-03-08-windows-x64.zip
    name: 3.0.0-prerelease.164+2026-03-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.164%2B2026-03-08/3.0.0-prerelease.164%2B2026-03-08-windows-x86.zip
    name: 3.0.0-prerelease.164+2026-03-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 294326900
tag_name: '3.0.0-prerelease.164+2026-03-08'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- add info buttons to cheat dialog [`e5806b4ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5806b4ea345a837b0da5317f569360685a506d6)
- update 'Help' dialog [`ece0ae1c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ece0ae1c6aa0db0024a3a1a6065e7ea9b66a3763)

### Visual Studio Code Extension

- scan all zscript files in workspace [`1418595b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1418595b9ba9a2c32b60244b2c96e1c94d39fb8f)
   &nbsp;
   >This collects all code completion suggestions at start by eagerly processing every zscript file found in the current workspace. 
   >

# Bug Fixes

- load music using case insensitive file lookup [`2b1c25bf5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b1c25bf5ade59dfa27739083582d227c847fd82)
   &nbsp;
   >When loading music, ZC looks for a folder named `music` (among others). If a quest places its music in `Music`, the music will still be loaded but only on case-insensitive filesystems (such as Windows). But on Linux and the web, it likely didn't work. Now, when loading music ZC ignores casing. 
   >
- classic / cambria tilesets having a 'pop' in the 'Jump' sfx [`7c81dd136`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c81dd136be6d2e54ac0db9ccef40ad589e0ea14)

### Player

- music resetting between dmaps despite being the same song [`c60cfcbe9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c60cfcbe982d34503066ef4b73a15f7c5455a042)
- pushed torches not shining [`9991720a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9991720a057f575c73857ddc4cf4a32195f556ca)
- enemy script movement functions wrongly over-accounting for screen edges [`6ee809827`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ee80982727bed815cb0a7abaf3d41800ab5da41)

### Editor

- shooter combo wizard not setting 'Aimed 360' properly [`fbff03607`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbff036077688cbf6b6cbd8bebcbfe8899cd142d)
- 'Problematic QRs' NES Fix broken check [`11b7e0da2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11b7e0da210cc999acb696aec9359c8363bbd2d5)
   &nbsp;
   >The 'Subscreen Appears Above Sprites' QR should be on to prevent issues with scrolling regions w/ extended height viewports - but the dialog got the logic backwards. 
   >

### ZScript

- use RETURNFUNC instead of QUIT for run functions [`5f776560b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f776560b9db8fae0456f973d46bc3b7af38577e)
   &nbsp;
   >A recent change (f16c9694) broke init scripts because I didn't realize run functions used QUIT instead of RETURNFUNC, resulting in only a single `@InitScript` working. 
   >
- don't repeat division [`a97e0e04b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a97e0e04b9a6b58cf32c746c3178b8750b0c43be)
   &nbsp;
   >When the left-hand side is constant (ex: `10 / x`), the compiler was emitting inefficient ZASM that repeated the same division twice. The result was still correct, but it was doing extra work. 
   >
- use correct offset for MOUSE_Y in extended height mode [`a66743dd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a66743dd24b7e8d923d63efbb3366508ec4af8cc)

### Visual Studio Code Extension

- init code completions at start [`003cf2992`](https://github.com/ZQuestClassic/ZQuestClassic/commit/003cf2992f21bf99912deab3877e810598df5f80)
- show code completions for enums defined in open file [`e1bc219ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1bc219ec71cee4627bbc95ba4330863ea3c5a1d)

# Chores

- update replay_uploads_known_good_replays.json [`baa2c7b24`](https://github.com/ZQuestClassic/ZQuestClassic/commit/baa2c7b24e5cc60c5450e82c5f11b175134c29d7)

# Refactors

- add up/down double/triple arrow icons for consistency [`694cdc5f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/694cdc5f369939cc947c10f951cf802f1ab3f1f3)

### Editor

- cleanup unnecessary `unsigned` from gui text functions [`c6b04b1ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6b04b1ba90f686f07ef3e975b9b9b035714aa68)

### ZScript Standard Library (std.zh)

- remove some deprecated string functions [`3c51b762c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c51b762c37a18fe594ae24fd5aadbb9dc2d7620)
   &nbsp;
   >They've been replaced by internal bindings. 
   >

### ZScript

- deprecate QuitNoKill [`32dbbc501`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32dbbc501b8a65481c160f71e57a201cac6ca74a)

### Visual Studio Code Extension

- move common stuff to SymbolResolver [`24349e50a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24349e50a0ff997b21e5fb5a2dcdeb6cf52a934f)

# Misc.

### Visual Studio Code Extension

- publish 1.0.14 [`883e1553d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/883e1553d4646be011d3e934dfd813c90eac8620)
