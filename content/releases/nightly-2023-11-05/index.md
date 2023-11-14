---
title: Nightly 2023-11-05
description: 
date: 2023-11-05T06:49:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-05/nightly-2023-11-05-linux.tar.gz
    name: nightly-2023-11-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-05/nightly-2023-11-05-mac.dmg
    name: nightly-2023-11-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-05/nightly-2023-11-05-windows-x64.zip
    name: nightly-2023-11-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-05/nightly-2023-11-05-windows-x86.zip
    name: nightly-2023-11-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 128018434
tag_name: 'nightly-2023-11-05'
channel: '2.55'
tags:
  - releases
---



# Features

- add configuration for snapshot image scale [`d4a3aa3b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4a3aa3b8bf49adfa91854fbfe49340b8bd00cb8)
- set default snapshot scale to 2x [`a57ecc4dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a57ecc4dd1b8f5e6691681e816762018614f7ed4)

### Editor

- add zooming when grabbing from image [`26019c058`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26019c0587602953a7406ec1ef7fb15e70fb54f7)

# Bug Fixes

### Player

- snapshot entire player screen for gui snapshot, which was missing a5 layers [`8f416879e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f416879ed01c192ee29c483b17724c264d289c5)

### Editor

- snapshot entire editor screen to include a5 layers [`8cd737c5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cd737c5ac186e95d9e48b9bbcfcb449f572c9b6)

# CI

- only consider ancestors when searching for baseline commit [`69c4cf890`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69c4cf8906c615974a566708abeea93580734fd1)
   &nbsp;
   >Previously it would only look at the main branch, but that does not support long-living branches nor multiple release branches. 
   >

