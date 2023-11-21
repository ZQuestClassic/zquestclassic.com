---
title: 3.0 Prerelease 6 2023-11-21
description: 
date: 2023-11-21T00:24:40Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.6%2B2023-11-21/3.0.0-prerelease.6%2B2023-11-21-linux.tar.gz
    name: 3.0.0-prerelease.6+2023-11-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.6%2B2023-11-21/3.0.0-prerelease.6%2B2023-11-21-mac.dmg
    name: 3.0.0-prerelease.6+2023-11-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.6%2B2023-11-21/3.0.0-prerelease.6%2B2023-11-21-windows-x64.zip
    name: 3.0.0-prerelease.6+2023-11-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.6%2B2023-11-21/3.0.0-prerelease.6%2B2023-11-21-windows-x86.zip
    name: 3.0.0-prerelease.6+2023-11-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 130838711
tag_name: '3.0.0-prerelease.6+2023-11-21'
channel: '3'
tags:
  - releases
---




# Features

### ZLauncher

- add options for window size, and cap max default window size [`919bda156`](https://github.com/ZQuestClassic/ZQuestClassic/commit/919bda1567879a5450a41445945da8dda0f766da)
   &nbsp;
   >`[ZLAUNCH] window_width, window_height` in zcl.cfg  
   >
   >Cap max default size to 2x 
   >

# Bug Fixes

### Player

- extra pushing allowed per screen [`cb1d50987`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb1d50987ef6e854f4b2da1918393f381e81854b)

# Refactors

- enable allegro DEBUGMODE in debug builds [`7edeafd15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7edeafd15d5e51c0139ecf65ab2c55c390434065)
   &nbsp;
   >This enables allegro asserts, among other things. zc_alleg.h attempted to enable for _every_ build type, but it actually had no effect since allegro is built as as separate target. 
   >
- Menus (new sleeker look, much cleaner backend) [`03339654b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03339654bbe98f3769a55b81960fa7fdc619681f)

# CI

- update vcpkg [`4d2fe65d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d2fe65d58cca43bbbe5fe9c97ea631f1202e9dc)
   &nbsp;
   >Apparently vcpkg has issues with retaining build assets long term. Being forced to update to latest as something we need expired.  
   >
   >https://github.com/microsoft/vcpkg/pull/30546#issuecomment-1819985146 
   >
