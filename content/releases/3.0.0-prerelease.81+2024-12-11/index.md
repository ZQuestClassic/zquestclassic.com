---
title: 3.0 Prerelease 81 2024-12-11
description: 
date: 2024-12-11T17:58:39Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.81%2B2024-12-11/3.0.0-prerelease.81%2B2024-12-11-linux.tar.gz
    name: 3.0.0-prerelease.81+2024-12-11-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.81%2B2024-12-11/3.0.0-prerelease.81%2B2024-12-11-mac.dmg
    name: 3.0.0-prerelease.81+2024-12-11-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.81%2B2024-12-11/3.0.0-prerelease.81%2B2024-12-11-windows-x64.zip
    name: 3.0.0-prerelease.81+2024-12-11-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.81%2B2024-12-11/3.0.0-prerelease.81%2B2024-12-11-windows-x86.zip
    name: 3.0.0-prerelease.81+2024-12-11-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 190280205
tag_name: '3.0.0-prerelease.81+2024-12-11'
channel: '3'
tags:
  - releases
---




# Features

- attribute 10 now used for hop height for vires/polsvoice (#1043) [`6ffb11753`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ffb1175327243e2764c41330acaff6146c305e6)

# Bug Fixes

### Editor

- revert "(enemy editor) added descriptive labels ..." [`772b18eda`](https://github.com/ZQuestClassic/ZQuestClassic/commit/772b18edaa0947c54bfe5bfbf4a37da6b865b68a)
   &nbsp;
   >This commit prevented dropdowns from working for some reason.  
   >
   >Reverts e5cf4d4dab7aa57e7d0d91e7eecfa03ae604349d. 
   >

### ZScript

- correctly handle GAMEEXIT for jit [`3fe75f03d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fe75f03d333500e3c6c6be075070c6df240e8fc)

# Tests

- fix test_zscript.py output on windows [`8aa0b8d72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8aa0b8d72258c14bf256673842e1255bb22ba93b)
