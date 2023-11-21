---
title: Nightly 2023-11-21
description: 
date: 2023-11-21T00:22:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-21/nightly-2023-11-21-linux.tar.gz
    name: nightly-2023-11-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-21/nightly-2023-11-21-mac.dmg
    name: nightly-2023-11-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-21/nightly-2023-11-21-windows-x64.zip
    name: nightly-2023-11-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-21/nightly-2023-11-21-windows-x86.zip
    name: nightly-2023-11-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 130520679
tag_name: 'nightly-2023-11-21'
channel: '2.55'
tags:
  - releases
---



# Features

### ZLauncher

- add options for window size, and cap max default window size [`47b273d89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47b273d899b485b4da7aced613e09bf3ba15a7a1)
   &nbsp;
   >`[ZLAUNCH] window_width, window_height` in zcl.cfg  
   >
   >Cap max default size to 2x 
   >

# CI

- update vcpkg [`00f89c2c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00f89c2c7dbdfd2697a8c1db6cf7d4b65db693aa)
   &nbsp;
   >Apparently vcpkg has issues with retaining build assets long term. Being forced to update to latest as something we need expired.  
   >
   >https://github.com/microsoft/vcpkg/pull/30546#issuecomment-1819985146 
   >

