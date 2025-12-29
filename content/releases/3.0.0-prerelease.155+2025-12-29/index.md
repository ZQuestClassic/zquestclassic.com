---
title: 3.0 Prerelease 155 2025-12-29
description: 
date: 2025-12-29T20:21:17Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.155%2B2025-12-29/3.0.0-prerelease.155%2B2025-12-29-linux.tar.gz
    name: 3.0.0-prerelease.155+2025-12-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.155%2B2025-12-29/3.0.0-prerelease.155%2B2025-12-29-mac.dmg
    name: 3.0.0-prerelease.155+2025-12-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.155%2B2025-12-29/3.0.0-prerelease.155%2B2025-12-29-windows-x64.zip
    name: 3.0.0-prerelease.155+2025-12-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.155%2B2025-12-29/3.0.0-prerelease.155%2B2025-12-29-windows-x86.zip
    name: 3.0.0-prerelease.155+2025-12-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 273287302
tag_name: '3.0.0-prerelease.155+2025-12-29'
channel: '3'
tags:
  - releases
---


# Bug Fixes

### ZScript

- store element types within untyped arrays [`8d2ca5e42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d2ca5e422d71768d7a94b1b9f226e478dbd3a07)
   &nbsp;
   >The recent change only tracked if each element in an untyped array is an object or not, but that wasn't enough. To correctly restore object references when loading a save, we need to also know the type of each element (since some types cannot be restored). 
   >
