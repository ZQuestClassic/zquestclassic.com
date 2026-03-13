---
title: 3.0 Prerelease 165 2026-03-13
description: 
date: 2026-03-12T03:00:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.165%2B2026-03-13/3.0.0-prerelease.165%2B2026-03-13-linux.tar.gz
    name: 3.0.0-prerelease.165+2026-03-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.165%2B2026-03-13/3.0.0-prerelease.165%2B2026-03-13-mac.dmg
    name: 3.0.0-prerelease.165+2026-03-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.165%2B2026-03-13/3.0.0-prerelease.165%2B2026-03-13-windows-x64.zip
    name: 3.0.0-prerelease.165+2026-03-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.165%2B2026-03-13/3.0.0-prerelease.165%2B2026-03-13-windows-x86.zip
    name: 3.0.0-prerelease.165+2026-03-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 296481387
tag_name: '3.0.0-prerelease.165+2026-03-13'
channel: '3'
tags:
  - releases
---


# Features

- minimap can draw visited rooms [`6a8767682`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a8767682d50c4914b22a733869962d310acd05a)

# Bug Fixes

### Player

- random trigger bugs caused by recent change [`c092f490a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c092f490ae249496ac96867d588e29f6a9555c64)

### Editor

- shop type / item dropset editor dropdowns broken [`0c2436ac1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c2436ac12b2f2f5590d577e0bc0f4a981a67417)
- correctly draw background layer pattern [`fc18189da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc18189da2d07507a559b7858eb9a805c3db9aa7)
   &nbsp;
   >This regressed in the multiple-editor screens commit (6fd217). 
   >

### ZScript

- use correct location for annotation errors [`879df4500`](https://github.com/ZQuestClassic/ZQuestClassic/commit/879df45000ed98ad67cf026c1bbadc336b437df0)
- paginate debugger console messages [`63b990860`](https://github.com/ZQuestClassic/ZQuestClassic/commit/63b990860836e972ed26cc4c1bf5f64b31e33ae6)
   &nbsp;
   >This greatly improves rendering performance. 
   >

### Visual Studio Code Extension

- correctly highlight half-open ranges [`2d876df1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d876df1a2fa94d1cf26d148d3f874e3ade7e89e)

# Build

- check CURL_FOUND in vcpkg ASAN install code [`395694f75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/395694f7533585db38a0f06ed267e5e46dc76639)
- upgrade pillow [`650c15dbc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/650c15dbc856540d31a2e99eb735100f876306ed)
