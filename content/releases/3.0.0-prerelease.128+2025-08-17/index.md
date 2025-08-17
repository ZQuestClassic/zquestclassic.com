---
title: 3.0 Prerelease 128 2025-08-17
description: 
date: 2025-08-17T06:05:58Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.128%2B2025-08-17/3.0.0-prerelease.128%2B2025-08-17-linux.tar.gz
    name: 3.0.0-prerelease.128+2025-08-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.128%2B2025-08-17/3.0.0-prerelease.128%2B2025-08-17-mac.dmg
    name: 3.0.0-prerelease.128+2025-08-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.128%2B2025-08-17/3.0.0-prerelease.128%2B2025-08-17-windows-x64.zip
    name: 3.0.0-prerelease.128+2025-08-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.128%2B2025-08-17/3.0.0-prerelease.128%2B2025-08-17-windows-x86.zip
    name: 3.0.0-prerelease.128+2025-08-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 240429885
tag_name: '3.0.0-prerelease.128+2025-08-17'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### ZScript

- make owned objects live as long as the sprite owner [`104fc490e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/104fc490ea9abae5ef9f987bf66890b524b40437)
   &nbsp;
   >The `Own` functions on sprite objects (npc, ffc, itemsprite, weapons) are documented as assigning the object's owner to the sprite. However, they were actually being "owned" by the sprite's script, so in the case where a script ends before a sprite is destroyed, the object lost its owner a little earlier than expected. 
   >
- mark screen enemies loaded on `Screen->SpawnScreenEnemies()` [`85eabd569`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85eabd569e904e364064342d94a12783d4035808)
   &nbsp;
   >The script spawning function did not mark enemies as loaded, so if called on the first frame of a screen the normal enemy spawning code would run right after, which spawned enemies twice.  
   >
   >regressed 6b5e98d (z3) 
   >
