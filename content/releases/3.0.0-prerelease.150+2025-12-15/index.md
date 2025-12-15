---
title: 3.0 Prerelease 150 2025-12-15
description: 
date: 2025-12-15T17:00:20Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.150%2B2025-12-15/3.0.0-prerelease.150%2B2025-12-15-linux.tar.gz
    name: 3.0.0-prerelease.150+2025-12-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.150%2B2025-12-15/3.0.0-prerelease.150%2B2025-12-15-mac.dmg
    name: 3.0.0-prerelease.150+2025-12-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.150%2B2025-12-15/3.0.0-prerelease.150%2B2025-12-15-windows-x64.zip
    name: 3.0.0-prerelease.150+2025-12-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.150%2B2025-12-15/3.0.0-prerelease.150%2B2025-12-15-windows-x86.zip
    name: 3.0.0-prerelease.150+2025-12-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 270488001
tag_name: '3.0.0-prerelease.150+2025-12-15'
channel: '3'
tags:
  - releases
---


# Bug Fixes

- [win] correctly position drive selector in file dialog [`d16ecce9a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d16ecce9a921b196971ad0396a4217730e542910)
   &nbsp;
   >When the tileset dialog wizard opens the file dialog, it could sometimes incorrectly position some elements, mostly the drive selector. 
   >

### Player

- Step->Effects spawning weapons off-by-8px [`8c318d441`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c318d441a274950d23e5fb2f2eba24852000c8a)
   &nbsp;
   >regressed in 6b5e98d (z3) 
   >
- properly load files saved as .QST [`69818cb88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69818cb88c88040357be0bcc10fb302aa8522cd8)
   &nbsp;
   >The qst file selector when creating a save was always making the file extension lowercased. On Windows and Mac that doesn't matter because the filesystem is case insensitive, but on Linux / web it prevents loading files saved as .QST rather than .qst 
   >
- lweapon wind getting confused if more than 1 onscreen [`0f840cbbf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f840cbbf84399356efa42334d198495b6cc344f)
   &nbsp;
   >The player would teleport between winds when one died while another was on-screen. Now, the player remembers which wind they are in. 
   >

### Editor

- editing trigger '[Un]Req ExStates' setting Screen States instead [`6a88793de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a88793de4bdb1b12fb1c7a107dfba1cafeac7cf)

### Web

- ignore filename case in quest list [`1528d0288`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1528d02885ddc3749500cb242d70fbe1b77a987f)

# Build

- update nativefiledialog [`d4ee0a67b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4ee0a67b710af0da4cbd136db3dc559be51bb73)
   &nbsp;
   >This fixes an issue where on Windows the native file dialog always opened at the most recently viewed folder, instead of using whatever folder ZC requested to open. 
   >
- fix ASAN on windows [`5c3bd9e33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c3bd9e337b190f7bb8666b29e3642bdf1af0cbc)
- fix mac packaging randomly failing when making dmg [`60a009e68`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60a009e685d2962bf5e43747124193abf458e462)

# Refactors

- log error reason when failing to open file [`2ba36cbe3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ba36cbe31d01ffb629e646b3c06ea1d845e60c6)
- log all al_trace output to stdout (except on windows) [`0fd788e5d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fd788e5d308637544985121ba5273a90b5f2ff9)

### Player

- stop printing include paths in zplayer [`9d2c8c1fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d2c8c1fbabc44e679a7461032e226806a40cc81)

# Misc.

- fix run_zc_command [`cc585b731`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc585b7311b0d1adca0b53bba0ec8cbbc7212aac)
- fix build_historical.py, use git worktree [`e9dabec0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9dabec0da757211ed29c34912aedf151de7f4b0)
