---
title: 3.0 Prerelease 4 2023-11-18
description: 
date: 2023-11-18T01:27:16Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.4%2B2023-11-18/3.0.0-prerelease.4%2B2023-11-18-linux.tar.gz
    name: 3.0.0-prerelease.4+2023-11-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.4%2B2023-11-18/3.0.0-prerelease.4%2B2023-11-18-windows-x64.zip
    name: 3.0.0-prerelease.4+2023-11-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.4%2B2023-11-18/3.0.0-prerelease.4%2B2023-11-18-windows-x86.zip
    name: 3.0.0-prerelease.4+2023-11-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 130050814
tag_name: '3.0.0-prerelease.4+2023-11-18'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- prevent clock shifts from hanging the program [`bdb8a1819`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bdb8a18194d7d203267e2229101e0958815af3a2)
   &nbsp;
   >Allegro 5 doesn't use a monotonic clock that ignores suspended time, so day light saving shifts or even hibernating your computer can result in Allegro trying to do so much work to "catch up" that it hangs the program. See https://github.com/liballeg/allegro5/pull/1511 for more. 
   >

### ZScript

- 'subscreenwidget->PerContainer' not working [`79a9cd530`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79a9cd5305e27746a0bca0c110febcb738fe3a5b)
