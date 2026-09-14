---
title: 3.0 Prerelease 223 2026-09-14
description: 
date: 2026-09-14T20:53:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.223%2B2026-09-14/3.0.0-prerelease.223%2B2026-09-14-linux.tar.gz
    name: 3.0.0-prerelease.223+2026-09-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.223%2B2026-09-14/3.0.0-prerelease.223%2B2026-09-14-mac-universal.dmg
    name: 3.0.0-prerelease.223+2026-09-14-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.223%2B2026-09-14/3.0.0-prerelease.223%2B2026-09-14-windows-x64.zip
    name: 3.0.0-prerelease.223+2026-09-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.223%2B2026-09-14/3.0.0-prerelease.223%2B2026-09-14-windows-x86.zip
    name: 3.0.0-prerelease.223+2026-09-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 388757372
tag_name: '3.0.0-prerelease.223+2026-09-14'
channel: '3'
tags:
  - releases
---

# Features

- Add -dump-screen, -dump-qrs and -dump-dmaps commands to zplayer [`6ce6b7fff8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ce6b7fff88a3e16bba1a784bbfa42e72e441e39)
   &nbsp;
   >`-dump-screen <qst> <map> <screen>` prints a screen as JSON: every non-empty position with its combo, combo type, screen flag, and the combo's own inherent flag (with names from zinfo), plus screen flags, the secret combo table, layers and FFCs (with script id, InitD and velocity, so a script's placements can be found by scanning screens).  
   >
   >`-dump-qrs <qst>` prints every quest rule as "qr_NAME 0|1".  
   >
   >`-dump-dmaps <qst>` prints one line per DMap (map, level, type, xoffset, name). 
   >

### ZScript

- Resize arrays automatically when writing more than fits [`c47c0410f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c47c0410f7894f260f9c1cefe2cc602bd49a0da9)
   &nbsp;
   >Internal functions that fill a script array now grow the array to fit instead of truncating the result and logging an "array not large enough" error. Example internal functions that now resize the given array:  
   >
   >- `itemdata->GetName`, `itemdata->GetShownName`
   >- `dmapdata->GetName`, `dmapdata->GetTitle`, `dmapdata->GetIntro`
   >- `Game->GetMessage`
   >- `Graphics->ConvertFromRGB`
   >- `file->ReadString`
   >- `file->ReadBytes`, `file->ReadChars`, `file->ReadInts` (with an
   >  explicit count)
   >- `strcat`
   >- `strcpy`
   >- `itoa`
   >- `xtoa`
   >- `itoacat`
   >
   >
   >&nbsp;
   >
   >Arrays are never shrunk, and plain out-of-bounds writes still do not resize.  
   >
   >Internal arrays (like `websocket->URL` and `Game->MiscSprites[]`) are backed by engine data and can't grow; those still get a truncated result and log an error. 
   >

# Bug Fixes

- Missing secrets in quests made in 2.53 [`60e24cc784`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60e24cc784279382e04c2ea3406a1079f005d56f) [Discord](https://discord.com/channels/876899628556091432/1500952954528727281)
   &nbsp;
   >The compat QR that preserves the old behavior of slash combos that have a secret flag on top of them was applied to every quest made in 2.54 or earlier - except for those made in 2.53.0 or 2.53.1. Quests saved in those versions lost secrets their authors had set up, which could make them unbeatable.  
   >
   >Bug introduced when the rule was added in 2.55-alpha-75 ([350ecca1](https://github.com/ZQuestClassic/ZQuestClassic/commit/350ecca1)). 
   >
- [windows] prevent crash caused by outdated MSVC runtime [`e2972a68bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2972a68bbb1b47fbe8848d33921ded98212759b)
   &nbsp;
   >The Windows package now ships the MSVC runtime DLLs (msvcp140.dll, vcruntime140.dll, ...) next to the executables instead of relying on whatever copy is installed on the user's machine.  
   >
   >Our binaries are built with a recent Visual Studio, whose standard library needs msvcp140.dll 14.40 or newer. Users with an older copy crashed the moment a quest started. This affected Windows 7, 10 and 11.  
   >
   >Bug introduced when the ZASM optimizer started running at quest load in 3.0.0-prerelease.132+2025-09-09 ([e9861cf6](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9861cf6)). 
   >

### Editor

- `@ExportEngineValue` widgets showing wrong values on open [`d6a8560cc7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6a8560cc7789220696900f2a9d8d408632112fb)
   &nbsp;
   >The tile, combo, color, and dropdown widgets in the Exports tab (and the CSet on the tile and combo swatches) were initialized with the raw stored value, so a tile of 5 displayed as tile 50000 (and the color selector wrapped to a nonsense color) until the reset button was pressed. Picking a value already saved the right number; only the initial display was wrong.  
   >
   >Regressed in 3.0.0-prerelease.221+2026-09-12 ([21cd5d1d18](https://github.com/ZQuestClassic/ZQuestClassic/commit/21cd5d1d18)). 
   >

### ZScript

- Error when `@ExportEngineValue` is used on a non-int variable [`ef97958e43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef97958e43b0eaeface4515e4a4e168bf1cc67d7)
   &nbsp;
   >Engine values are whole-number ids that the editor stores as scaled `int` values. Using the annotation on a `long` (or any other non-int type) compiled fine but the editor showed the wrong value and saved a value 10000 times too large. This is now a compile error, like `bool` already was.  
   >
   >Bug introduced when `@ExportEngineValue` was added in 3.0.0-prerelease.217+2026-09-02 ([165f0c40d5](https://github.com/ZQuestClassic/ZQuestClassic/commit/165f0c40d5)). 
   >
- Error when export annotation values don't match the variable type [`d33245a034`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d33245a0343d721b56301c316f146fe6045eb3b8)
   &nbsp;
   >`int` and `long` values are stored differently, so giving an `int` variable `long` values (or vice versa) silently left the variable 10000 times off from what the annotation named. Mismatches between a variable and `@ExportRange`, `@ExportDropdown`, `@ExportBitflags`, `@ExportLongBitflags`, or `@ExportEnum` are now compile errors that say how to fix them.  
   >
   >A `long` dropdown's implicit numbering now steps by `long` units; it used to step by `int` units regardless of the values given.  
   >
   >Bug introduced when `@Export` was added in 3.0.0-prerelease.205+2026-07-30 ([76b97b95ee](https://github.com/ZQuestClassic/ZQuestClassic/commit/76b97b95ee)), and extended by the value-list annotations added in 3.0.0-prerelease.217+2026-09-02 ([eceb426040](https://github.com/ZQuestClassic/ZQuestClassic/commit/eceb426040)). 
   >
- GOTOLESS branched on the wrong comparison under the JIT [`133ba49ef8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/133ba49ef8a917c441b7956ddb1850b845b658a0)
   &nbsp;
   >The interpreter takes a GOTOLESS branch when the compared values are less than or equal, or strictly less than when the "GOTOLESS Not Equal" compat QR is set (as it is for quests from before build 411, such as Lost Isle). Every JIT backend had the two cases swapped, and the web JIT ignored the QR entirely. The ZASM optimizer's conversion of GOTOLESS to GOTOCMP had the same swap.  
   >
   >Scripts using GOTOLESS (only hand-written or 2016-2019 compiler ZASM) branched differently on equality, which sent Lost Isle's circular cave sparks on a different path than the interpreter.  
   >
   >Bug introduced when the JIT was added in 2.55-alpha-112 ([36fd73c209](https://github.com/ZQuestClassic/ZQuestClassic/commit/36fd73c209)). 
   >
- sprintf returned character count as a long (decimal) [`535070ecf4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/535070ecf4a91fb038f78a42a479e1a1fd06c78c)
   &nbsp;
   >`sprintf(buf, "%d", 42)` returned 0.0002 instead of 2, since the result was never scaled to a script value. Same for sprintfa.  
   >
   >Bug introduced when sprintf was added in 2.55-alpha-75 ([fb25d06770](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb25d06770)). 
   >
- `file->ReadChars` put back the wrong character when full [`2590d02bbe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2590d02bbef0a767e98345cfde6dfb455002107d)
   &nbsp;
   >When ReadChars ran out of room it pushed the last character back into the file as its script value (the character times 10000), so the next read from the file started with a garbage character instead of the one that didn't fit.  
   >
   >Bug introduced when `file->ReadChars` was added in 2.55-alpha-75 ([ef54b03d25](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef54b03d25)). 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`53a3572afc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53a3572afcc7aefc1785c8d9ac58e164c18b9784)
