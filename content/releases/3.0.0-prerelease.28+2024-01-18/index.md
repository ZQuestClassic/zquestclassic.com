---
title: 3.0 Prerelease 28 2024-01-18
description: 
date: 2024-01-18T06:01:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.28%2B2024-01-18/3.0.0-prerelease.28%2B2024-01-18-linux.tar.gz
    name: 3.0.0-prerelease.28+2024-01-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.28%2B2024-01-18/3.0.0-prerelease.28%2B2024-01-18-mac.dmg
    name: 3.0.0-prerelease.28+2024-01-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.28%2B2024-01-18/3.0.0-prerelease.28%2B2024-01-18-windows-x64.zip
    name: 3.0.0-prerelease.28+2024-01-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.28%2B2024-01-18/3.0.0-prerelease.28%2B2024-01-18-windows-x86.zip
    name: 3.0.0-prerelease.28+2024-01-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 137514069
tag_name: '3.0.0-prerelease.28+2024-01-18'
channel: '3'
tags:
  - releases
---




# Features

### Player

- optimize old scripts STOREI to STORED [`da7113489`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da7113489f23a32670ed78156f245a5672d1e0bf)
- option to show game time in the corner, for all those speedrunners out there [`9d50c5687`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d50c5687969fa0574eee77ac2e8a20994ca919a)

# Bug Fixes

- retain monitor resolution for fullscreen mode [`9b103f078`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b103f07805325bea61ca3dddcad8807d5565f6d)
   &nbsp;
   >Previously, the maximum monitor resolution would be used when using fullscreen mode. That was bad because it messes up the window layout of anything else on that monitor. Now we create fullscreen displays without changing the resolution.  
   >
   >Also, no longer destroy and recreate the display to change fullscreen/windowed mode. Switching between is much smoother now, and the code got a bit simpler and safer. 
   >

# Refactors

- remove scary and now pointless warnings when toggling fullscreen [`75f9d356a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75f9d356a19b9335950536561ff985ff99efb02c)
