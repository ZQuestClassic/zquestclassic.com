---
title: 3.0 Prerelease 2 2023-11-15
description: 
date: 2023-11-15T19:16:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.2%2B2023-11-15/3.0.0-prerelease.2%2B2023-11-15-linux.tar.gz
    name: 3.0.0-prerelease.2+2023-11-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.2%2B2023-11-15/3.0.0-prerelease.2%2B2023-11-15-mac.dmg
    name: 3.0.0-prerelease.2+2023-11-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.2%2B2023-11-15/3.0.0-prerelease.2%2B2023-11-15-windows-x64.zip
    name: 3.0.0-prerelease.2+2023-11-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.2%2B2023-11-15/3.0.0-prerelease.2%2B2023-11-15-windows-x86.zip
    name: 3.0.0-prerelease.2+2023-11-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 129617225
tag_name: '3.0.0-prerelease.2+2023-11-15'
channel: '3'
tags:
  - releases
---




# Features

- Allow disabling resizability of windows (setting in launcher only) [`6937ef2e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6937ef2e24cbe80f5938256f6334c7e5ed02c08a)

### Editor

- Merge 'Favorite Command' and 'Hotkey' systems [`47617f7ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47617f7ad488a44847b954d93cce56ac42f67063)
   &nbsp;
   >Any 'Hotkey' can now be set to a favorite command, and all old favorite commands now have 'Hotkey's. Favorite command buttons will clear upon this update, as the configs have changed. 
   >

# Bug Fixes

### Player

- Music not properly changing when using some warp types (ex. SCC warp) [`0a1d27ffa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a1d27ffab259c1593cf769363dd97bfd98985dd)

### Editor

- Tile editor checkboxes not clicking [`37179fef3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37179fef37197eafcb4cf2b433910389a8dc9f8c)

# Documentation

- add a couple missing subscreen widget script docs [`9b84f3802`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b84f38021b05de69dc4a2fb100d66cfeec7091a)

# Refactors

- remove unused 'VSync' option (it didn't do anything) [`505aff7ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/505aff7ff1fbdf4e050f0c9ddd0548e6d922d7cc)
- don't tint behind dropdown lists (allow skipping dlgs tint) [`3da82ef18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3da82ef189582f5e8ec6379402ee0dd7a90ae5a1)
