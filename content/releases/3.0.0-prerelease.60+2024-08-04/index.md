---
title: 3.0 Prerelease 60 2024-08-04
description: 
date: 2024-08-03T23:37:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.60%2B2024-08-04/3.0.0-prerelease.60%2B2024-08-04-linux.tar.gz
    name: 3.0.0-prerelease.60+2024-08-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.60%2B2024-08-04/3.0.0-prerelease.60%2B2024-08-04-mac.dmg
    name: 3.0.0-prerelease.60+2024-08-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.60%2B2024-08-04/3.0.0-prerelease.60%2B2024-08-04-windows-x64.zip
    name: 3.0.0-prerelease.60+2024-08-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.60%2B2024-08-04/3.0.0-prerelease.60%2B2024-08-04-windows-x86.zip
    name: 3.0.0-prerelease.60+2024-08-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 168573250
tag_name: '3.0.0-prerelease.60+2024-08-04'
channel: '3'
tags:
  - releases
---




# Features

- configurable charge step for enemy rope walk style (#953) [`3fcbd09c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fcbd09c6e4040f901f40c256f097fc4302197f4)
   &nbsp;
   >If "Walk Attr." (aka misc attribute 10) is >0, enemies with the "Rope" walk style will use that custom value for the charging step. 
   >

# Bug Fixes

- capture allegro 5 systems logging in allegro.log [`fb0b53f23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb0b53f23cae44bfdce99d5361e19378bd9755ac)
- sprite drawing not deleting all bitmaps it created [`471351e03`](https://github.com/ZQuestClassic/ZQuestClassic/commit/471351e03efa51e34b4baa6597b2566cbf497d6d)
- crash in native file picker from bad string [`a23f8ff68`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a23f8ff6850c7aa9b73d6eb51db9ff992e2ce54b)

### Player

- shadows for rocks and boulders not drawing (#951) [`dc7454ec5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc7454ec5d6f6a280ef463dd38f10cb6e7c0f340)
- side shield flags on npcs being flipped when facing left/right [`04063b574`](https://github.com/ZQuestClassic/ZQuestClassic/commit/04063b574b4fe8653208c82a5df5779c5e526f7e)

### Editor

- some number entries (using SWAP_ZSINT_NO_DEC) being broken. [`277c541d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/277c541d5e59f05a18f4369e519ee4df1fb9c411)
   &nbsp;
   >Notably fixes many spots in the "Insert SCC" dialog, and some in combo wizards. 
   >

### ZScript

- code blocks sometimes not removing object references [`2413e5ed8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2413e5ed842c64f4b775eb27c5de1b85f20afb1c)
- crash from metadata of var inside if statement [`54cb5c3ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54cb5c3ac694eb2e3b7a834f0fa9a09fc5a829a4)

# Build

- upgrade allegro [`785d20c7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/785d20c7f0d7028b0858f014f3b6101a2f2d4aea)
   &nbsp;
   >https://github.com/liballeg/allegro5/compare/549f189df3408bba27524763289545f20771c3b0...c6b10fff225a0c94e2785e2e2d6d99a2f068ccf4 
   >

### Web

- upgrade to emscripten 3.1.64 [`171d5ce81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/171d5ce81123596df34ef38d5c45d87c25bda58a)

# Refactors

- combine misc attributes for guys into array (#955) [`4e949df18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e949df1814b61c1bd8b385824f5bc332739689e)
   &nbsp;
   >Co-authored-by: Emily <35015090+EmilyV99@users.noreply.github.com> 
   >

### Player

- deduplicate enemy code reading of SIZEflags [`92bb2cc6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92bb2cc6adb68a2ae33490bee9ee0d3bc49652be)

### ZScript

- remove option to configure run function name [`31c10d7d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31c10d7d93640c2c416319c3676657d9dc92f789)

# CI

- fix replay report generation for forks [`bbb53680f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbb53680f956136f2c1417b4b1d5aff042ccd58b)
