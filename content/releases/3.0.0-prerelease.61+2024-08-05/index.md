---
title: 3.0 Prerelease 61 2024-08-05
description: 
date: 2024-08-05T03:56:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.61%2B2024-08-05/3.0.0-prerelease.61%2B2024-08-05-linux.tar.gz
    name: 3.0.0-prerelease.61+2024-08-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.61%2B2024-08-05/3.0.0-prerelease.61%2B2024-08-05-mac.dmg
    name: 3.0.0-prerelease.61+2024-08-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.61%2B2024-08-05/3.0.0-prerelease.61%2B2024-08-05-windows-x64.zip
    name: 3.0.0-prerelease.61+2024-08-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.61%2B2024-08-05/3.0.0-prerelease.61%2B2024-08-05-windows-x86.zip
    name: 3.0.0-prerelease.61+2024-08-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 168642755
tag_name: '3.0.0-prerelease.61+2024-08-05'
channel: '3'
tags:
  - releases
---




# Features

### Visual Studio Code Extension

- support Go To Definition for type of variable declaration [`32d372e64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32d372e64775a0f7c0b069a550b835014e8cf6dd)

# Bug Fixes

- crash when file prompt initial path has no slash [`9df104fd9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9df104fd951c876ad9a83702f4c2eab8cf98ab63)

### Editor

- mark ffc count dirty when using Paste Special > FFC [`0b0c47178`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b0c47178084a7ae6a34123e67144d14b41a7854)
   &nbsp;
   >This was preventing FFCs from being retained on a screen when using the special FFC paste mode. 
   >
- restore proper animation speed for combos in screen view [`3f5c7a036`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f5c7a036ff011a960770d88689a653d7a9de91d)

# Build

- enable type-limits diagnostic as error, fix many issues found [`828ffb4f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/828ffb4f3b477104ccc4f6f310dcca7016f11dc5)

# Refactors

### ZScript

- add -json switch to parser, use stderr for logging [`3be9b16e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3be9b16e8a36f9dcca3d7a2aa9095eb8e9f8143a)
- add errors and warnings to json output as diagnostics [`6ae06e15d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ae06e15d7b31ad66419587e1ce2a2310092810a)

### Visual Studio Code Extension

- use new -json zscript option for diagnostics [`1143e7480`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1143e74802b275c7b008ddb15817ce2987db410f)
