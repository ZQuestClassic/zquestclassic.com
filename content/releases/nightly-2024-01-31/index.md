---
title: Nightly 2024-01-31
description: 
date: 2024-01-31T06:15:20Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-31/nightly-2024-01-31-linux.tar.gz
    name: nightly-2024-01-31-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-31/nightly-2024-01-31-mac.dmg
    name: nightly-2024-01-31-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-31/nightly-2024-01-31-windows-x64.zip
    name: nightly-2024-01-31-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-31/nightly-2024-01-31-windows-x86.zip
    name: nightly-2024-01-31-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 139267405
tag_name: 'nightly-2024-01-31'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- hero action "swimhit" incorrectly unset due to broken isSwimming() check [`8b10722d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b10722d8567566d65850a7b7a15d691549dfc74)
- combo cycling reset too early for animations with frame skips [`601cba74f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/601cba74fc45b445a22516e21ec706947fdb9382)
   &nbsp;
   >Turns out this never worked properly! 
   >

### Editor

- skipy broken in combo preview animation [`590e9f59c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/590e9f59ce58650522fee3118535b015898a3315)

# Misc.

### ZScript

- mark combo->CSet deprecated, in favor for the better named ->CSet2 [`81cd99579`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81cd99579d4ee79bc9c61f6d33387bc92567b198)

