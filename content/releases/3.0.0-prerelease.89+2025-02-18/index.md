---
title: 3.0 Prerelease 89 2025-02-18
description: 
date: 2025-02-17T23:57:59Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.89%2B2025-02-18/3.0.0-prerelease.89%2B2025-02-18-linux.tar.gz
    name: 3.0.0-prerelease.89+2025-02-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.89%2B2025-02-18/3.0.0-prerelease.89%2B2025-02-18-mac.dmg
    name: 3.0.0-prerelease.89+2025-02-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.89%2B2025-02-18/3.0.0-prerelease.89%2B2025-02-18-windows-x64.zip
    name: 3.0.0-prerelease.89+2025-02-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.89%2B2025-02-18/3.0.0-prerelease.89%2B2025-02-18-windows-x86.zip
    name: 3.0.0-prerelease.89+2025-02-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 200808826
tag_name: '3.0.0-prerelease.89+2025-02-18'
channel: '3'
tags:
  - releases
---




# Features

- z3 scrolling regions (#1074) [`6b5e98dd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd706812c478504f6984b06f6111da5dcd)
   &nbsp;
   >Regions are a collection of screens that are stitched together to become one playing area that the player can move around in, with the viewport moving to track the player. All mechanics of ZC have been updated to support that there can now be multiple active screens. Additionally, there is a new DMap option to reclaim 160 more pixels in height for the visible playing field (making the passive subscreen draw over it). There is also scripting support for configuring regions and the viewport.  
   >
   >Here is a [guide](https://docs.zquestclassic.com/tutorials/z3_user_guide) covering what quest makers need to know about regions. 
   >

# Bug Fixes

### Editor

- avoid bad script_data/crash in do_compile_and_slots [`8b241af33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b241af33a7d291eb5af0d724eccadade52763bd)

# Documentation

- add Mazes section to z3_user_guide.rst [`bf2f5bda8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf2f5bda83730b5de4bc73f3f7f015230c782ccf)

# Refactors

### Player

- use transulency table cache for all fade/lighting [`284fc7567`](https://github.com/ZQuestClassic/ZQuestClassic/commit/284fc7567d8846ab3867235de14995dd5906a599)
