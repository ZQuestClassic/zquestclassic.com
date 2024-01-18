---
title: Nightly 2024-01-18
description: 
date: 2024-01-18T07:44:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-18/nightly-2024-01-18-linux.tar.gz
    name: nightly-2024-01-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-18/nightly-2024-01-18-mac.dmg
    name: nightly-2024-01-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-18/nightly-2024-01-18-windows-x64.zip
    name: nightly-2024-01-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-18/nightly-2024-01-18-windows-x86.zip
    name: nightly-2024-01-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 137518946
tag_name: 'nightly-2024-01-18'
channel: '2.55'
tags:
  - releases
---



# Features

### Player

- option to show game time in the corner, for all those speedrunners out there [`05449497b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05449497b92904732a2ee074bba4d9c9f9bd897c)

# Bug Fixes

- retain monitor resolution for fullscreen mode [`981c6c1f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/981c6c1f93551d07d71c0210a33052344205efc4)
   &nbsp;
   >Previously, the maximum monitor resolution would be used when using fullscreen mode. That was bad because it messes up the window layout of anything else on that monitor. Now we create fullscreen displays without changing the resolution.  
   >
   >Also, no longer destroy and recreate the display to change fullscreen/windowed mode. Switching between is much smoother now, and the code got a bit simpler and safer. 
   >

# Refactors

- remove scary and now pointless warnings when toggling fullscreen [`cf9942aca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf9942aca7d3bde7ee7f2baf8e911e53d31011b2)

