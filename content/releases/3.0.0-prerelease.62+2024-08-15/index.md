---
title: 3.0 Prerelease 62 2024-08-15
description: 
date: 2024-08-15T04:49:23Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.62%2B2024-08-15/3.0.0-prerelease.62%2B2024-08-15-linux.tar.gz
    name: 3.0.0-prerelease.62+2024-08-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.62%2B2024-08-15/3.0.0-prerelease.62%2B2024-08-15-mac.dmg
    name: 3.0.0-prerelease.62+2024-08-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.62%2B2024-08-15/3.0.0-prerelease.62%2B2024-08-15-windows-x64.zip
    name: 3.0.0-prerelease.62+2024-08-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.62%2B2024-08-15/3.0.0-prerelease.62%2B2024-08-15-windows-x86.zip
    name: 3.0.0-prerelease.62+2024-08-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 170297157
tag_name: '3.0.0-prerelease.62+2024-08-15'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- webapp for exploring and sharing ZScript [`ae2a67e77`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae2a67e77a9d54ab8eef156ba05365806b30ef76)
   &nbsp;
   >https://web.zquestclassic.com/zscript 
   >

### Visual Studio Code Extension

- support Go To Definition for includes/imports [`dffa4cf41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dffa4cf41a43baf2c8f4a1b0731dcdabd5c4114d)
- support Go-To-Definition for enums [`c3ae6346b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3ae6346b1064fc7bd4888846e3d496700fccb82)

# Bug Fixes

### ZScript

- continue generating editor metadata after (most) compile errors [`3d5912f15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3d5912f157235ee210658281b5876d9f2b3bb8cb)
- generate metadata for code even if optimized away [`8defe2955`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8defe2955b2fbe690ce56ade344e32f81981fa82)
- scope error when using `for (...){} else {}` [`f43e46907`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f43e4690737fe92a828da6a911a372a83f94f7cc)

### Visual Studio Code Extension

- increase max buffer size for zscript process, which was breaking editor for large scripts [`2169c67a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2169c67a36c11f35387c52c9c1b7b386fbab956d)

# Refactors

### Player

- remove old movement functions [`c5b8a0e17`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5b8a0e17d165380f44ddf7950a73b6aa216d3ad)

### ZScript Standard Library (std.zh)

- make every std file compile individually [`6de1bb98b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6de1bb98b4189bf7a45f41b61c590bf4974055dc)
- move some constants from std to bindings, and add more doc comments [`45d9718e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45d9718e1e4542f16de62e4eee5aa61de3f3ae46)

# Misc.

- Revert "ci!: use pull_request_target for ci.yml workflow" [`fab9eefc0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fab9eefc0b66faec82c3530fa50917e01876e19e)
   &nbsp;
   >This reverts commit 40d18af060793860c7757fd69f8e5defd15e59c2. 
   >
- Revert "refactor(zc): remove old movement functions" [`87b073771`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87b0737717ecfd99fc037f37e94ebdc24c4453dd)
   &nbsp;
   >This reverts commit c5b8a0e17d165380f44ddf7950a73b6aa216d3ad. 
   >

### Visual Studio Code Extension

- publish 1.0.10 [`790dc584f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/790dc584ff36aac6390de58d79410ae2bc85c307)
