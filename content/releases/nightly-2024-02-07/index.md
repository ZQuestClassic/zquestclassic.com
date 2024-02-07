---
title: Nightly 2024-02-07
description: 
date: 2024-02-07T08:12:49Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-07/nightly-2024-02-07-linux.tar.gz
    name: nightly-2024-02-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-07/nightly-2024-02-07-mac.dmg
    name: nightly-2024-02-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-07/nightly-2024-02-07-windows-x64.zip
    name: nightly-2024-02-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-07/nightly-2024-02-07-windows-x86.zip
    name: nightly-2024-02-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 140260185
tag_name: 'nightly-2024-02-07'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### ZScript

- return enemy x,y when getting fairy item x,y [`6e60fe889`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e60fe889c2361884f4e53a4e1ec33c5f4fa1311)
   &nbsp;
   >Setting `item->X,Y` on fairy items additionally sets the position of the corresponding fairy enemy sprite. However, the getter returns the item coordinate. This resulted in unexpected behavior from something harmless like `item->X = item->X` causing the engine fairy movement to halt. 
   >

