---
title: 3.0 Prerelease 42 2024-02-20
description: 
date: 2024-02-19T23:16:23Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.42%2B2024-02-20/3.0.0-prerelease.42%2B2024-02-20-linux.tar.gz
    name: 3.0.0-prerelease.42+2024-02-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.42%2B2024-02-20/3.0.0-prerelease.42%2B2024-02-20-mac.dmg
    name: 3.0.0-prerelease.42+2024-02-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.42%2B2024-02-20/3.0.0-prerelease.42%2B2024-02-20-windows-x64.zip
    name: 3.0.0-prerelease.42+2024-02-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.42%2B2024-02-20/3.0.0-prerelease.42%2B2024-02-20-windows-x86.zip
    name: 3.0.0-prerelease.42+2024-02-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 142721874
tag_name: '3.0.0-prerelease.42+2024-02-20'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- ZC menu options render/get disabled correctly [`db63ab1f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db63ab1f86df8baaae381b67aacb86e6314b28a8)

### Editor

- handle error instead of crashing if package export fails [`e26e02c9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e26e02c9e6cfd161b4fbff6e2da89e4d64f964bf)
- 'Load Tileset' not applying compat fixes [`9d7dedaee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d7dedaee072c70147eb95b741139910a8caba76)

# Documentation

- fix 'subscreendata->PosDirs[]' being misdocumented as '->Poses[]' [`dfe9d12a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dfe9d12a4c07f2e5bbfda221404bf9581ccd2cc8)

# CI

- upgrade actions due to node 16 deprecation [`fb3744bdd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb3744bdde830c85000a62c62d3d7d0fe0340a27)
