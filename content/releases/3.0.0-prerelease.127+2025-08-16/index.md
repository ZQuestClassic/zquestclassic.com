---
title: 3.0 Prerelease 127 2025-08-16
description: 
date: 2025-08-16T05:04:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.127%2B2025-08-16/3.0.0-prerelease.127%2B2025-08-16-linux.tar.gz
    name: 3.0.0-prerelease.127+2025-08-16-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.127%2B2025-08-16/3.0.0-prerelease.127%2B2025-08-16-mac.dmg
    name: 3.0.0-prerelease.127+2025-08-16-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.127%2B2025-08-16/3.0.0-prerelease.127%2B2025-08-16-windows-x64.zip
    name: 3.0.0-prerelease.127+2025-08-16-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.127%2B2025-08-16/3.0.0-prerelease.127%2B2025-08-16-windows-x86.zip
    name: 3.0.0-prerelease.127+2025-08-16-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 240353170
tag_name: '3.0.0-prerelease.127+2025-08-16'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- change item pickup sound to use Dropdown for selection [`5948838db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5948838dba599f93e80214e7c158462a3e229c2b)

# Bug Fixes

### Player

- correctly handle COMPAREV2 in zasm optimizer [`ddaadcd52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ddaadcd526f08bf872a1670cd484aa712ddc60bf)
   &nbsp;
   >This was accidentally inverting conditions where the left-hand-side uses a constant. 
   >
- prevent crash in inline_functions zasm optimize pass [`00ad98b33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00ad98b33330ba7507d164918a7b187902f53d46)
- avoid "invalid save slot index" when creating new save [`acad5780a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/acad5780adc581a1ddb148a3c93d020371368c11)
   &nbsp;
   >Creating a new save slot could sometimes invalidate all existing save slots (until the program was restarted). 
   >
- prevent crash when warping and enemies stay alive [`0831755d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0831755d518dd914c37e2b6a24a36e18290fa772)
   &nbsp;
   >regressed 6b5e98d (z3) 
   >

### ZScript

- correctly handle COMPAREV2 in jit [`6234795f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6234795f6284a940acc34a39e414a264afd2f7d1)
- mapdata->State[] / mapdata->ExState[] arrays not accessing correct data [`773eb71d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/773eb71d8e477b02c0d84a4c75ccc87e203cfe13)

# Chores

- update replay_uploads_known_good_replays.json [`7d00a310c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d00a310ce5a27d29ef8d7cf9a5cae2fbc8c0eb5)

# Tests

- remove ZC_PACKAGE_REPLAYS [`496d2ca00`](https://github.com/ZQuestClassic/ZQuestClassic/commit/496d2ca0080fd9302f5f06c1e2eac05ef4a78d46)
   &nbsp;
   >The web build no longer packages test replays and quests in the build directly for the replay test runner. Instead, it can now load files from the local machine. Now, any replay or quest can be loaded in the web build for local development (does not have to be inside the tests folder). 
   >
