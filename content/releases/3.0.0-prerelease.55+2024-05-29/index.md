---
title: 3.0 Prerelease 55 2024-05-29
description: 
date: 2024-05-28T01:53:19Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.55%2B2024-05-29/3.0.0-prerelease.55%2B2024-05-29-linux.tar.gz
    name: 3.0.0-prerelease.55+2024-05-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.55%2B2024-05-29/3.0.0-prerelease.55%2B2024-05-29-mac.dmg
    name: 3.0.0-prerelease.55+2024-05-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.55%2B2024-05-29/3.0.0-prerelease.55%2B2024-05-29-windows-x64.zip
    name: 3.0.0-prerelease.55+2024-05-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.55%2B2024-05-29/3.0.0-prerelease.55%2B2024-05-29-windows-x86.zip
    name: 3.0.0-prerelease.55+2024-05-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 157931736
tag_name: '3.0.0-prerelease.55+2024-05-29'
channel: '3'
tags:
  - releases
---




# Refactors

- remove expensive busy loop in render throttler [`6d36424bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d36424bb990b52c7bf2fa560974807aef81a5a4)
   &nbsp;
   >Replaces a busy loop with a much cheaper mutex condition variable to control FPS.  
   >
   >The `maxfps` option now works for values less than 60 fps. 
   >

### Player

- add cache to generation of translucency tables [`c38897790`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c388977909644f52613dfb3f157f24ab38bcaf7f)
   &nbsp;
   >This took up a lot of CPU time during the titlescreen and during animations such as screen wipes / triforce pickup / etc. 
   >
