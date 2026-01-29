---
title: 3.0 Prerelease 158 2026-01-29
description: 
date: 2026-01-26T15:40:05Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.158%2B2026-01-29/3.0.0-prerelease.158%2B2026-01-29-linux.tar.gz
    name: 3.0.0-prerelease.158+2026-01-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.158%2B2026-01-29/3.0.0-prerelease.158%2B2026-01-29-mac.dmg
    name: 3.0.0-prerelease.158+2026-01-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.158%2B2026-01-29/3.0.0-prerelease.158%2B2026-01-29-windows-x64.zip
    name: 3.0.0-prerelease.158+2026-01-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.158%2B2026-01-29/3.0.0-prerelease.158%2B2026-01-29-windows-x86.zip
    name: 3.0.0-prerelease.158+2026-01-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 280923705
tag_name: '3.0.0-prerelease.158+2026-01-29'
channel: '3'
tags:
  - releases
---


# Bug Fixes

### Player

- music wrongly resetting on warps when song is same [`5f3500951`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f3500951ef082c86a760c1d1ea893c9e060833d)

### Editor

- typo in subscreen condition help text [`143de61e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/143de61e210996ecbdc2d4e3d30d74f01af34b7f)

### ZScript

- Screen->Quad() being unable to use tiles >65519 [`b5742a28c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5742a28ca8556f3b51ece4a24b12f82ecda17fc)
- dmapdata->MapInitD[] and ->SubInitD[] being off by *10000 [`1af00fc8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1af00fc8b860373fb55e02da282d5cad3996089e)
- dmapdata->InitD[] sometimes giving wrong results [`bf09e4c28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf09e4c28a7363574ffe40288b9f3635d61830ee)

# Tests

- update terror_of_necromancy_demo5_1_of_5.zplay [`9f3f9b869`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f3f9b8691a359f70a7d4fec1da1dcca2d549293)
