---
title: 3.0 Prerelease 147 2025-12-08
description: 
date: 2025-12-08T06:33:27Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.147%2B2025-12-08/3.0.0-prerelease.147%2B2025-12-08-linux.tar.gz
    name: 3.0.0-prerelease.147+2025-12-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.147%2B2025-12-08/3.0.0-prerelease.147%2B2025-12-08-windows-x64.zip
    name: 3.0.0-prerelease.147+2025-12-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.147%2B2025-12-08/3.0.0-prerelease.147%2B2025-12-08-windows-x86.zip
    name: 3.0.0-prerelease.147+2025-12-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 268222563
tag_name: '3.0.0-prerelease.147+2025-12-08'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- Subscreen Map Wizard: add more conditions / 'invert' + 'any' toggles [`7e29c5077`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e29c50772c8b2d3f1e70ff6526845b7efce8edd)
   &nbsp;
   >Map wizard will also now remember all field values, until the editor closes. 
   >

# Bug Fixes

### Player

- subscreen 'screen' related conditionals now use hero's current screen in regions instead of top-left [`dc834fdf8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc834fdf8ae1a1cd092cbb040444f76317eecc0d)
- f6 save menu opening itself recursively when using generic script option [`5db33f605`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5db33f6057dd4aa0c3686302f7d49dc130cee7ba)

### Editor

- crash in subscreen conditions related to bad list indexes [`87ba49d31`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87ba49d310ba3282af4d9723556ba5a4f2de8679)

### ZScript

- for x64 jit, check CPU supports SSE4.1 [`bbf82a97d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbf82a97d08212d08543ea3ce5d57e6a3d53fc36)
   &nbsp;
   >This prevents a crash when the jit is enabled on CPUs that don't support SSE4.1 (~2007 for Intel, ~2013 for AMD). 
   >
- add CLASS_THISKEY to REF_INC/DEC implicit dependencies [`abd3d8751`](https://github.com/ZQuestClassic/ZQuestClassic/commit/abd3d8751a30ca8d542e7808d4174213023c8030)
   &nbsp;
   >Follow-up to 66c158 
   >

# Build

- improve packaging, lean on CMake more [`6383509d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6383509d5efe9d281c4104d7acf6e30b952d7cdf)
   &nbsp;
   >The `cmake --install` command should now work on all platforms to install ZC locally.  
   >
   >* Updated docs/building.md
   >* Use CMake's install and cpack features to coordinate what resources
   >  and shared libraries are needed at runtime, and for creating
   >  distributable packages. This replaces package.py and package_mac.sh
   >* On Linux, follow conventions: shared libaries go into lib/, binaries
   >  go into bin/, and resources go into share/zquestclassic
   >* For the generated Mac .dmg, add custom background saying "Take this!"
   >* For Mac app bundles, .dylib files now go into Contents/Frameworks
   >  instead of Contents/libs
   >
- vendor libdumb and link statically [`647877672`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6478776720aaeb8cc5c4181b9ba06c5bc352eb96)
- switch to libjpeg_turbo [`0c5429eff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c5429eff4a794ced969851e741a1dfe8bf1afb5)
- move fmt lib to third_party cmake [`db5bc5aff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db5bc5aff60f4854356fceb40b8dae29027bde33)
- fix release build wrt base_test_runner [`d4c0fc28e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4c0fc28e50cd4dffd20cfa949911f00b5f26069)

# CI

- pin cmake to 3.31.10 [`8b074adb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b074adb32f888e66fd58e89a0ecaa9178ac328f)
