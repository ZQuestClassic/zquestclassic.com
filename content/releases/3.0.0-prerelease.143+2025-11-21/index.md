---
title: 3.0 Prerelease 143 2025-11-21
description: 
date: 2025-11-21T11:02:30Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.143%2B2025-11-21/3.0.0-prerelease.143%2B2025-11-21-linux.tar.gz
    name: 3.0.0-prerelease.143+2025-11-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.143%2B2025-11-21/3.0.0-prerelease.143%2B2025-11-21-mac.dmg
    name: 3.0.0-prerelease.143+2025-11-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.143%2B2025-11-21/3.0.0-prerelease.143%2B2025-11-21-windows-x64.zip
    name: 3.0.0-prerelease.143+2025-11-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.143%2B2025-11-21/3.0.0-prerelease.143%2B2025-11-21-windows-x86.zip
    name: 3.0.0-prerelease.143+2025-11-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 264305600
tag_name: '3.0.0-prerelease.143+2025-11-21'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- improve map view with mouse zoom/drag [`3503f9837`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3503f983761d56fb4d99ddf68f295024003babbd)

# Bug Fixes

### Editor

- combo page not opening [`3fa22cf71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fa22cf718b9cd3ac8629af8bdf55f4a5b434957)
   &nbsp;
   >regressed recently in 92971ff 
   >
- lag in tile/combo/alias/etc pages dialogs [`b61147607`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b611476073e2658b13e3604f1c6650425fb61794)
- 'View->View Map' appearing behind gui layers [`d79d2c223`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d79d2c2235744c844490eaf150b98f20afe8f31a)

### ZScript

- correct some issues with bitflags checks [`5e6d46503`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e6d465036a6bbcba377fb39cf8d4688338a369d)
   &nbsp;
   >The left-hand side type was not being checked correctly, and also there were some issues with const enums not being identified as enums. 
   >

# CI

- update to macos-15-intel [`a2f178680`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2f17868061fd87f4c2eb53a9c00932eef865661)
