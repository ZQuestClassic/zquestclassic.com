---
title: 3.0 Prerelease 101 2025-04-20
description: 
date: 2025-04-20T02:34:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.101%2B2025-04-20/3.0.0-prerelease.101%2B2025-04-20-linux.tar.gz
    name: 3.0.0-prerelease.101+2025-04-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.101%2B2025-04-20/3.0.0-prerelease.101%2B2025-04-20-mac.dmg
    name: 3.0.0-prerelease.101+2025-04-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.101%2B2025-04-20/3.0.0-prerelease.101%2B2025-04-20-windows-x64.zip
    name: 3.0.0-prerelease.101+2025-04-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.101%2B2025-04-20/3.0.0-prerelease.101%2B2025-04-20-windows-x86.zip
    name: 3.0.0-prerelease.101+2025-04-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 213540507
tag_name: '3.0.0-prerelease.101+2025-04-20'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### ZScript

- `Screen->DrawLight` functions now respect `Screen->DrawOrigin` [`ae5a36c6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae5a36c6a7bc1f20dda2d9660829c1f53ae419a1)
   &nbsp;
   >These functions did not add the playing field offset, like other draw functions do. Now they respect `Screen->DrawOrigin`, and use `SPLAYER_DARKROOM_UNDER` for the draw timing.  
   >
   >Old behavior is behind the compat QR `Scripts Screen->DrawLight Functions Have No Offset`. 
   >

# CI

- update to mymindstorm/setup-emsdk@v14 [`2d3094959`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d309495948390e463e4e5de716923b1267ee1d7)
