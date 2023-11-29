---
title: Nightly 2023-11-29
description: 
date: 2023-11-29T05:45:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-29/nightly-2023-11-29-linux.tar.gz
    name: nightly-2023-11-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-29/nightly-2023-11-29-mac.dmg
    name: nightly-2023-11-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-29/nightly-2023-11-29-windows-x64.zip
    name: nightly-2023-11-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-29/nightly-2023-11-29-windows-x86.zip
    name: nightly-2023-11-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 131859344
tag_name: 'nightly-2023-11-29'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- new respawn points not accounting for dmap offset [`d90410dcd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d90410dcd28e15dbf9c348a3aa40700809fc86a5)
- initialize fadevolume to avoid undefined behavior [`437c27b25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/437c27b25c2812a9dc498db85afb867bf7321346)
   &nbsp;
   >This fixes a bug where music would randomly be silent or extremely loud.  
   >
   >Also, cap the volume used to play music to 255, to avoid ever playing it so loud again. 
   >

# Tests

- filter out expired test builds in bisect_builds.py [`2bdc2354a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bdc2354aa2d2337f23e3c62157ab94c51e8bf6b)
- prevent infinite loop when zplayer exits before first frame [`a56646b40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a56646b408b6f1df31dd38723349fc21108c79ef)

# Misc.

### Player

- show current frame count when recording and system menu is active [`0f4e8a00c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f4e8a00cbc989e0c6ec9e92a9c06756b10aa596)

