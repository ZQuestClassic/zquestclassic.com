---
title: 3.0 Prerelease 3 2023-11-17
description: 
date: 2023-11-17T01:30:26Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.3%2B2023-11-17/3.0.0-prerelease.3%2B2023-11-17-linux.tar.gz
    name: 3.0.0-prerelease.3+2023-11-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.3%2B2023-11-17/3.0.0-prerelease.3%2B2023-11-17-mac.dmg
    name: 3.0.0-prerelease.3+2023-11-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.3%2B2023-11-17/3.0.0-prerelease.3%2B2023-11-17-windows-x64.zip
    name: 3.0.0-prerelease.3+2023-11-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.3%2B2023-11-17/3.0.0-prerelease.3%2B2023-11-17-windows-x86.zip
    name: 3.0.0-prerelease.3+2023-11-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 129873764
tag_name: '3.0.0-prerelease.3+2023-11-17'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- save backup when qst was last saved in a different version of zc [`d9a81183a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9a81183a4868c9b7b332a6fa111c8c3b5fa1a41)

### ZLauncher

- set save folder [`303e3a643`](https://github.com/ZQuestClassic/ZQuestClassic/commit/303e3a64397f54d484fb48d34b1dcd8ee103fb7d)

# Bug Fixes

### Editor

- disable unpack cache to fix tile rotate/flip [`64f42deb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/64f42deb336f010e82bc5066057bb61dc5589060)
- tile page rclick "insert", "delete" was swapped [`d84746490`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8474649075d942bdb5975dba736d8c30487aafd)
- disabling tooltips works again [`7e3738d44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e3738d4481f55401b3c7b76699b49f1d268b3ed)

# Build

- fix missing libpng for web build [`c774fc7f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c774fc7f6ea8c6289e9a06513a062a1c3800b9c4)
- include logo and title assets in web data file [`9e4f5313f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e4f5313f59801ba9b0b1b08d54084e552d9773e)

# Tests

- save replay result file when starting replay [`cb2e4b0d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb2e4b0d3731209a912c0fc6be51aa669e20a47e)
- suppress timeout check on frame 0 [`9f94de5ca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f94de5ca02ea6dd79a1ca73a00a0e43b80c8734)

# CI

- for web tests, build for RelWithDebInfo [`16ce632d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16ce632d59cc0e38f7ee2e6a397ddbb95a56a2c1)
- include coverage for all apps, not just zplayer [`c0e0151c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0e0151c499e52c41af50a84f2c517971a1ddc4b)
