---
title: 3.0 Prerelease 17 2023-12-21
description: 
date: 2023-12-21T09:39:25Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.17%2B2023-12-21/3.0.0-prerelease.17%2B2023-12-21-linux.tar.gz
    name: 3.0.0-prerelease.17+2023-12-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.17%2B2023-12-21/3.0.0-prerelease.17%2B2023-12-21-mac.dmg
    name: 3.0.0-prerelease.17+2023-12-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.17%2B2023-12-21/3.0.0-prerelease.17%2B2023-12-21-windows-x64.zip
    name: 3.0.0-prerelease.17+2023-12-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.17%2B2023-12-21/3.0.0-prerelease.17%2B2023-12-21-windows-x86.zip
    name: 3.0.0-prerelease.17+2023-12-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134749403
tag_name: '3.0.0-prerelease.17+2023-12-21'
channel: '3'
tags:
  - releases
---




# Features

### Player

- add option to disable title music [`9256d13d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9256d13d97f6c39d3b234f501fb8853e05c5bad0)

### Editor

- 'Adv. Paste' string editor rclick option [`bd40c292c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd40c292c6f747cd56461baef66140348072e1a8)

# Bug Fixes

- arrow key navigation in menus not resepecting hidden items [`5046e239f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5046e239fcb45f6078d9404829527a164c30c5e8)
- prevent 1.90 qst load compat from setting first dmap cont/compass to bad value [`81cd619e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81cd619e9b851c53f88c0b0578531857bee94e20)
- ZScript access to subscreen elements was missing a 'transparent' color option [`f415f53ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f415f53edcea47c5f7dc53dcb23dd18b073d64fb)

### Player

- minor replay determinism bug for subscr_item_clk (selector animation) [`0044365b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0044365b35a2306a74a716dc6f486a42ebf2a536)

### Editor

- create test init data relative to qst init, not base init [`5563f5cd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5563f5cd02378402e4fa5d27899b6d420c5d0dc2)
   &nbsp;
   >This was originally done this way to avoid changing test init data when the quest's actual init data changed, but that maybe is not as useful as the other approach.  
   >
   >Also very simply fixes the problem of screen data (and other init values) not being properly set. 
   >
- autocombo/combo pool/combo alias pages RClick menus being offset [`0e01b8d78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e01b8d7808873cd4ad641e9fccadcf80c70c1df)

# Tests

- fix --split-threshold cli arg for split_replay.py [`886ab0507`](https://github.com/ZQuestClassic/ZQuestClassic/commit/886ab05070f0442f2d433a3b1f9c10feff556811)
- add umbral_cloud.zplay [`3f56dc889`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f56dc889a466b1aaa51ce28a47f46411b27a83b)

# Misc.

### Editor

- upgrade combo 'advanced paste' dialog, add 'Adv. Paste' to rclick menu [`d69805ccd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d69805ccde09df1712a959bed4e3bff8c56dadd3)
