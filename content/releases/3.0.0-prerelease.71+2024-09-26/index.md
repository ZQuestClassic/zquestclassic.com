---
title: 3.0 Prerelease 71 2024-09-26
description: 
date: 2024-09-26T02:55:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.71%2B2024-09-26/3.0.0-prerelease.71%2B2024-09-26-linux.tar.gz
    name: 3.0.0-prerelease.71+2024-09-26-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.71%2B2024-09-26/3.0.0-prerelease.71%2B2024-09-26-mac.dmg
    name: 3.0.0-prerelease.71+2024-09-26-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.71%2B2024-09-26/3.0.0-prerelease.71%2B2024-09-26-windows-x64.zip
    name: 3.0.0-prerelease.71+2024-09-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.71%2B2024-09-26/3.0.0-prerelease.71%2B2024-09-26-windows-x86.zip
    name: 3.0.0-prerelease.71+2024-09-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 176973880
tag_name: '3.0.0-prerelease.71+2024-09-26'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- zoom out to edit many screens at the same time [`6fd217ecb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fd217ecb04dc0eb90baecb91274794d48cc9a3e)
   &nbsp;
   >It is now possible to zoom out when editing map screens, up to the size of the entire map (although 4x4 screens is roughly the last usable zoom level).  
   >
   >`Ctrl/Cmd + -/+` is the shortcut to zoom out and in. Note that this replaces an existing shortcut for modifying the screen palette by 16 - that is now `Shift + Ctrl/Cmd + -/+`.  
   >
   >Arrow keys change the current screen as usual (and so updates all the screen-specific UI, like enemies/warps/the Screen menu). If you move beyond the current viewport, the viewport moves along with you.  
   >
   >Clicking on any visible screen will also set the current screen.  
   >
   >Should be able to perform any action as expected on screens when zoomed out: copying, pasting, ffcs, moving items, warp squares, all drawing modes, flood fill, editing layers, etc.  
   >
   >The undo/redo system works as well.  
   >
   >There are a few new options related to this feature, under the View menu. 
   >

# Bug Fixes

### Editor

- delete the initial screen from default.qst [`3b7ed5186`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b7ed5186db8235ff29f6a48062ca62562acedd9)
