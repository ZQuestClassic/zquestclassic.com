---
title: 3.0 Prerelease 145 2025-11-27
description: 
date: 2025-11-27T07:27:28Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.145%2B2025-11-27/3.0.0-prerelease.145%2B2025-11-27-linux.tar.gz
    name: 3.0.0-prerelease.145+2025-11-27-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.145%2B2025-11-27/3.0.0-prerelease.145%2B2025-11-27-mac.dmg
    name: 3.0.0-prerelease.145+2025-11-27-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.145%2B2025-11-27/3.0.0-prerelease.145%2B2025-11-27-windows-x64.zip
    name: 3.0.0-prerelease.145+2025-11-27-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.145%2B2025-11-27/3.0.0-prerelease.145%2B2025-11-27-windows-x86.zip
    name: 3.0.0-prerelease.145+2025-11-27-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 265679526
tag_name: '3.0.0-prerelease.145+2025-11-27'
channel: '3'
tags:
  - releases
---


# Features

- allow mirrors/prisms to work on FFCs. [`4076d9923`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4076d9923902e6d0c333faaa8fc1a17921acaf86)
   &nbsp;
   >NOTE: Does NOT work for light beams! 
   >

### Editor

- smart autosave [`725e1bc86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/725e1bc8656a2b3cb9249f1f1c3447de352c8d33)
   &nbsp;
   >Autosave will no longer save if no changes have occurred since last save, similar to normal saves. This should stop the window from popping up repeatedly if zq is idle. 
   >
- subscreen editor option for "Duplicate In-Place" [`8ad909177`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ad909177b81aa4b20a2808a059fba11fd5e7cfd)
   &nbsp;
   >If enabled, duplicating a widget will place the duplicate at the same x,y as the original, instead of shifting it down-right by 1 grid unit. 
   >

# Bug Fixes

### Player

- "respawning" to another screen using wrong dmap's xoffset [`f917ce713`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f917ce713e57b42a089ae6fb48138b859cf07c4e)
- warp SCC sometimes broke [`cbaf201a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbaf201a2118da795ba67137e9b3b0da9d5bfe72)
   &nbsp;
   >Regressed recently in 8c038be. 
   >
- prevent crash when switch targets layer that doesn't exist [`678b94a3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/678b94a3ee376a19acf19fe60378b6847defe790)
   &nbsp;
   >This regressed in 6b5e98d (z3) 
   >

### Editor

- prevent crash from static drawing [`8f8e9dd73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f8e9dd73eb4c020232ab9800e0f8399192e56eb)
   &nbsp;
   >Closing the Map View with static background drawing enabled resulted in drawing to a bitmap out-of-bounds, resulting in a crash. I added a common function for drawing static noise and added some bounds checking.  
   >
   >Regressed recently in d7438d4. 
   >
- correctly draw color 0 [`2b00e87ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b00e87efb3a0baf4b945d362ae77c9d8da50009)
   &nbsp;
   >With "High Quality Rendering" enabled, color 0 would flash when hovering over the minimap or when a tooltip appears. Even when that is off, recent changes caused color 0 to draw as black instead of the proper color when on layer 0.  
   >
   >Regressed recently in d7438d4. 
   >
- correctly show cset/combo type for selected layer [`da66fdfdf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da66fdfdf90023d5af9cbe10144afada1d98425d)
   &nbsp;
   >The "Show CSets/Types" feature is meant to only show the currently selected layer, but instead it was showing the highest layer (except for when "Show Flags" was also enabled, which prevented the bug). 
   >
- correctly draw color 0 in combo selector [`d8e5a2b1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8e5a2b1c22db5dac251edc62574162fd7f6330c)
   &nbsp;
   >Regressed recently in d7438d4. 
   >

# Refactors

- keep precision for combo/ffc related coordinates [`c0ba1d0fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0ba1d0fb696e3e453040ffdb16164981816e4c8)

### Player

- use screen_handle base_scr more [`a292c7244`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a292c7244804072b72010bb5efed633e0dee1fce)
