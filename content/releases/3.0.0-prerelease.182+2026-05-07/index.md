---
title: 3.0 Prerelease 182 2026-05-07
description: 
date: 2026-05-08T06:36:01Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.182%2B2026-05-07/3.0.0-prerelease.182%2B2026-05-07-linux.tar.gz
    name: 3.0.0-prerelease.182+2026-05-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.182%2B2026-05-07/3.0.0-prerelease.182%2B2026-05-07-mac.dmg
    name: 3.0.0-prerelease.182+2026-05-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.182%2B2026-05-07/3.0.0-prerelease.182%2B2026-05-07-windows-x64.zip
    name: 3.0.0-prerelease.182+2026-05-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.182%2B2026-05-07/3.0.0-prerelease.182%2B2026-05-07-windows-x86.zip
    name: 3.0.0-prerelease.182+2026-05-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 319364809
tag_name: '3.0.0-prerelease.182+2026-05-07'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- Improve tile editor quarter-tile draw modes [`8081f0507`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8081f05074cda5aa4276d03c8ff774201d54b837)
   &nbsp;
   >"Diag Flip" was implemented wrong, acting exactly the same as 180 rotation- it has been replaced with "+Diag Flip" and "-Diag Flip" which properly flip across the positive and negative diagonal lines respectively.  
   >
   >"Translate" has also been added, drawing at the same position in each of the 4 quarters of the tile, useful for minitile-drawing ex. for life meters. 
   >

### ZScript

- DrawMapdata [`ecfab983e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ecfab983e4c04b4a6fa52c68d943aab6b59206c6)
   &nbsp;
   >Both Screen-> and bitmap-> versions available. Draws a mapdata pointer. Kind of like DrawLayer, but you can use a temporary mapdata to have it use temp changes from the current screen. Using a temp mapdata pointer that corresponds to an entire region will draw the entire region. 
   >

# Bug Fixes

### Player

- Titlescreen was never showing [`88da6513c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88da6513c0219683b856367de4d81760e04ff5ce)

# Chores

- Update replay_uploads_known_good_replays.json [`a817ef1dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a817ef1dda69f92aef16b03c51b0cd0a7b92422d)

# CI

- Run subset of replays for mac [`3f86eb508`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f86eb508c031ad99f1b86825e44a885821e5677)

# Misc.

- Add code for removing key presses, if needed later [`2f6a5e793`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f6a5e7930fa02e41442ab35503f31d37a4d4783)
