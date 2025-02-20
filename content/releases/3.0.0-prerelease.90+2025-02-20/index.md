---
title: 3.0 Prerelease 90 2025-02-20
description: 
date: 2025-02-20T08:19:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.90%2B2025-02-20/3.0.0-prerelease.90%2B2025-02-20-linux.tar.gz
    name: 3.0.0-prerelease.90+2025-02-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.90%2B2025-02-20/3.0.0-prerelease.90%2B2025-02-20-mac.dmg
    name: 3.0.0-prerelease.90+2025-02-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.90%2B2025-02-20/3.0.0-prerelease.90%2B2025-02-20-windows-x64.zip
    name: 3.0.0-prerelease.90+2025-02-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.90%2B2025-02-20/3.0.0-prerelease.90%2B2025-02-20-windows-x86.zip
    name: 3.0.0-prerelease.90+2025-02-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 201379041
tag_name: '3.0.0-prerelease.90+2025-02-20'
channel: '3'
tags:
  - releases
---




# Features

- include The Deep quest in release package [`c47b6f2db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c47b6f2dbbb4e7a510c7cf1fc7f4fc3d16e44da3)

# Bug Fixes

- actually fix loading tile data for old 1.90 quests [`21499cc8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21499cc8e7ea7e602880f90ff49b38b50c893c75)
   &nbsp;
   >Commit be55516 attempted to fix this, but used the wrong path to the classic quest. This commit fixes the path, but uses a new qst file with only the tile data (since classic_1st.qst is going to be removed).  
   >
   >See: https://discord.com/channels/876899628556091432/1289597114594103378 
   >

### Player

- mark ffc as "loaded" when first allocated [`c21eaf389`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c21eaf38997fe5802263f9d513861dcec80e9a66)
   &nbsp;
   >This caused a bug where spawning an FFC via scripting was not updating its impact on solidity.  
   >
   >See https://discord.com/channels/876899628556091432/1341280721511125062 
   >
- adjust hero position in region after restarts [`f18f41243`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f18f41243474ba7c408b3a7e1a1c1ca818670ed3)
   &nbsp;
   >Via restart_level, Hero.init is called when continuing using the mirror, warp whistle, wallmaster, etc. 
   >
- update viewport everytime when adjusting hero position for region [`1b80c4bbe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b80c4bbe53d2d2f4947930dfc2cb985139a7e84)

### ZScript

- handle LOAD_FFC when compiled on 2.55.8 [`24f6c7c96`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24f6c7c96e77ac520726cc9c99fc56343be9fe22)
   &nbsp;
   >See https://discord.com/channels/876899628556091432/1341601918757240883 
   >

# Documentation

### ZScript

- use .. version*:: admonitions for '@version' docs [`f17fa5f6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f17fa5f6a1b5eae327e003b0e44bef0aac767c83)

# Refactors

- remove classic NES quests from release package [`6388cd75a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6388cd75a09c15f6f7a4cf598631038907b2cad3)
- remove dev signoff [`d555d47af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d555d47af1c84b8a3a257322b069d503f73e7fb6)

# CI

- upgrade crazy-max/ghaction-chocolatey action [`9b9c91bbb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b9c91bbb3675543ff6851e7799c7f59bcc5ba22)
- run flaky quick compile up to 3 times [`4ddfeb038`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ddfeb0385da76d95b05fe98f2bbbda6c618ae32)
- fix coverage job by passing GH_PAT_ZSCRIPT_DATABASE secret [`cfee350ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfee350ed7024e9dc6e00e6a04e778b419452630)
