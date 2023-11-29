---
title: 3.0 Prerelease 9 2023-11-29
description: 
date: 2023-11-29T05:07:57Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.9%2B2023-11-29/3.0.0-prerelease.9%2B2023-11-29-linux.tar.gz
    name: 3.0.0-prerelease.9+2023-11-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.9%2B2023-11-29/3.0.0-prerelease.9%2B2023-11-29-mac.dmg
    name: 3.0.0-prerelease.9+2023-11-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.9%2B2023-11-29/3.0.0-prerelease.9%2B2023-11-29-windows-x64.zip
    name: 3.0.0-prerelease.9+2023-11-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.9%2B2023-11-29/3.0.0-prerelease.9%2B2023-11-29-windows-x86.zip
    name: 3.0.0-prerelease.9+2023-11-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 131856955
tag_name: '3.0.0-prerelease.9+2023-11-29'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- new respawn points not accounting for dmap offset [`c6578d8a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6578d8a47439a9909a426b204b4fde1900b909a)
- initialize fadevolume to avoid undefined behavior [`61d038072`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61d038072fff15585db5e67f47cc952c212db6e4)
   &nbsp;
   >This fixes a bug where music would randomly be silent or extremely loud.  
   >
   >Also, cap the volume used to play music to 255, to avoid ever playing it so loud again. 
   >

# Refactors

### Editor

- Clean up Tile/Side/Ring warp dialogs [`2637fc6ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2637fc6aceb942f133878d20623428c4857003a0)

# Tests

- filter out expired test builds in bisect_builds.py [`f5ca9056d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5ca9056db4c5cb6532b037b371f68174b82cc8c)
- prevent infinite loop when zplayer exits before first frame [`64e2ddf52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/64e2ddf528e0f6115a754be599e92eb36bf6f687)

# Misc.

### Player

- show current frame count when recording and system menu is active [`346eec032`](https://github.com/ZQuestClassic/ZQuestClassic/commit/346eec0325abe94ed9612304896cb14e273fbda5)
