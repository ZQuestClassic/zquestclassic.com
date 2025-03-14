---
title: 3.0 Prerelease 93 2025-03-13
description: 
date: 2025-03-13T02:10:32Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.93%2B2025-03-13/3.0.0-prerelease.93%2B2025-03-13-linux.tar.gz
    name: 3.0.0-prerelease.93+2025-03-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.93%2B2025-03-13/3.0.0-prerelease.93%2B2025-03-13-mac.dmg
    name: 3.0.0-prerelease.93+2025-03-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.93%2B2025-03-13/3.0.0-prerelease.93%2B2025-03-13-windows-x64.zip
    name: 3.0.0-prerelease.93+2025-03-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.93%2B2025-03-13/3.0.0-prerelease.93%2B2025-03-13-windows-x86.zip
    name: 3.0.0-prerelease.93+2025-03-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 205485332
tag_name: '3.0.0-prerelease.93+2025-03-13'
channel: '3'
tags:
  - releases
---




# Features

- show bottom 8 pixels [`3bec0750e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bec0750efe2b17f3a3f7a4182a8a47a73ca2035)
   &nbsp;
   >The bottom 8 pixels of the screen has always been hidden. This was considered to be a universally bad thing, so they are now visible. A QR rule is added to control this behavior, and by default all existing quests have been opted into it, except for those known to have issues related to script drawing.  
   >
   >Active subscreens are still just 168 pixels tall. When the bottom 8 pixels are show, active subscreens travel an extra 8 pixels when opened.  
   >
   >ZC Player has a setting to configure this too. By default, it defers to the QR as defined in the quest, but users can override this. 
   >

# Bug Fixes

### Player

- screens sometimes not drawing when scrolling between regions [`6cd7fb0a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6cd7fb0a42defe9dc14539d06571bcbd5390991a)
   &nbsp;
   >Consider viewport alignment when determining which screens to draw when scrolling between regions. 
   >
- correct some issues with previous commit re bottom 8 pixels [`cd5be2cd3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd5be2cd3ec8e34260a245604718c8ef16d1ac68)

### Editor

- typo in File>New dialog for "Cambria" [`7e68b5089`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e68b50894d38dc944ab4bd4627d028ecb8576a6)

# Tests

- add z3.qst to test_compile_and_quick_assign [`1fdbdf227`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1fdbdf2276b7cc034b051900b1dd36884cb0937e)
