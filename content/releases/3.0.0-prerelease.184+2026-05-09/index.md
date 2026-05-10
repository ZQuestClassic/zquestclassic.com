---
title: 3.0 Prerelease 184 2026-05-09
description: 
date: 2026-05-10T03:20:27Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.184%2B2026-05-09/3.0.0-prerelease.184%2B2026-05-09-linux.tar.gz
    name: 3.0.0-prerelease.184+2026-05-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.184%2B2026-05-09/3.0.0-prerelease.184%2B2026-05-09-mac.dmg
    name: 3.0.0-prerelease.184+2026-05-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.184%2B2026-05-09/3.0.0-prerelease.184%2B2026-05-09-windows-x64.zip
    name: 3.0.0-prerelease.184+2026-05-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.184%2B2026-05-09/3.0.0-prerelease.184%2B2026-05-09-windows-x86.zip
    name: 3.0.0-prerelease.184+2026-05-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 320058751
tag_name: '3.0.0-prerelease.184+2026-05-09'
channel: '3'
tags:
  - releases
---


# Bug Fixes

- Ditherblit ignoring clipping rectangles [`7146001eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7146001ebd7ee62425bcbd3190820178e1bbfa12)

### Player

- Bad transparency table for dark rooms on spacebar map [`4c7f695e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c7f695e3c2b99d2964a1f185292aa15b5700d30)
- Viewport not properly resetting in time on scrolling [`ff8baae0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff8baae0b8d1c817db5e8568a19e472f9cc15f66)
- Properly display dark room regions on the map [`158d8dec5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/158d8dec5f255bbf25cede86b7cbcda4ea2d9c24)
   &nbsp;
   >Lights were previously limited to their own screen on the map, now they properly show on other nearby screens *in the same region*. 
   >
