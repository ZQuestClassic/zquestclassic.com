---
title: 3.0 Prerelease 175 2026-04-25
description: 
date: 2026-04-25T03:16:40Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.175%2B2026-04-25/3.0.0-prerelease.175%2B2026-04-25-linux.tar.gz
    name: 3.0.0-prerelease.175+2026-04-25-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.175%2B2026-04-25/3.0.0-prerelease.175%2B2026-04-25-mac.dmg
    name: 3.0.0-prerelease.175+2026-04-25-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.175%2B2026-04-25/3.0.0-prerelease.175%2B2026-04-25-windows-x64.zip
    name: 3.0.0-prerelease.175+2026-04-25-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.175%2B2026-04-25/3.0.0-prerelease.175%2B2026-04-25-windows-x86.zip
    name: 3.0.0-prerelease.175+2026-04-25-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 313522447
tag_name: '3.0.0-prerelease.175+2026-04-25'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- Typable searchbar in some old lister dialogs (ex. level palettes) [`6faeae348`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6faeae348fe7fd9dfec464241dbb8447c05b2709)

# Bug Fixes

### Player

- Adjust scripted warp in middle of region [`53d9aab91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53d9aab911c66eb1f268427f7807577065b09618)
   &nbsp;
   >Scripted warps to a warp return square were not correctly adjusting the destination coordinates relative to the destination screen within the region. 
   >
- Use shorter text on click for layers/bookmarks [`ec25c1647`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec25c1647f4ae0e65ab54560c6cfec42cddc82b4)
   &nbsp;
   >Regressed recently in d653e72. 
   >
- Slope coordinate offsets in scrolling regions [`6dd81d606`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6dd81d6065268c2dbfe78c4e00b1a1a042c9907b)
- Set correct screen's shutter state in scrolling region [`82bc230ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82bc230ea09a1feff6cf20c9ee337fcf37d7cd04)

### Editor

- Restore access to 0x80+ screens [`10e0779c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10e0779c143e57aeb222feff27c633ba3e604901)
   &nbsp;
   >Regressed recently in e660a63e. 
   >

### ZScript

- Prevent debugger crash when accessing null object [`85179f9eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85179f9ebbe08943178cae0059e847dc355a1011)
- Update door combos when writing to `mapdata::Door` [`b6f369d2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6f369d2e78a3b8977517f0c3f3a7e6789abb8c5)

# Documentation

- Fix typo in SetRegion comment [`79f269823`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79f2698231761c1c097127754552f1206a0e498c)

# Misc.

- Add "spreading fire" to 'trigger_example.qst' [`a755adb08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a755adb086ffd0b1de6f2928b3c907029bf49190)
- Split replays based on frame count, not steps [`4c1013596`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c101359614d14af51c905d14175a8ab938d13ca)
