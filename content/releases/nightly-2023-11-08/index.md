---
title: Nightly 2023-11-08
description: 
date: 2023-11-08T08:39:19Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-08/nightly-2023-11-08-linux.tar.gz
    name: nightly-2023-11-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-08/nightly-2023-11-08-mac.dmg
    name: nightly-2023-11-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-08/nightly-2023-11-08-windows-x64.zip
    name: nightly-2023-11-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-08/nightly-2023-11-08-windows-x86.zip
    name: nightly-2023-11-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 128555696
tag_name: 'nightly-2023-11-08'
channel: '2.55'
tags:
  - releases
---



# Features

- Add 'ExDoors', similar to 'ExStates', but directional. Carries over to adjacent screen.
   >&nbsp;
   >Relevant changes:
   > - feat(zscript)(zscript): ZScript access for ExDoor related features [`a00570f67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a00570f6745985dd87b97dd1707aa15a0a32f195)
   > - fix: typo in previous commit [`b499e2c3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b499e2c3ea1c4e165f74acb5775ca33d32bc6ae2)

### Editor

- view script slots dialog [`4cd827e73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4cd827e73f320c6618b443bdf03772ac8cccf5a9)

# Bug Fixes

### Editor

- dmap editor remembering wrong tab [`1a264a262`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a264a262f0e8f44a5b949493ab3357f4e7a9009)

# Build

- auto generate changelog for alpha release [`36085a914`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36085a914ed69070d92e7e4e647a7ae30533e71d)

# Refactors

- remove unused single_instance [`618d9986f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/618d9986f846c1f56b5b1f8a907ea931d7e624e8)

### ZLauncher

- remove changing zmod in launcher [`85ea325db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85ea325db4f51b58365fca0910b4923206c9a6cd)

