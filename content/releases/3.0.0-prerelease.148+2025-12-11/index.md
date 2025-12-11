---
title: 3.0 Prerelease 148 2025-12-11
description: 
date: 2025-12-11T02:44:47Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.148%2B2025-12-11/3.0.0-prerelease.148%2B2025-12-11-linux.tar.gz
    name: 3.0.0-prerelease.148+2025-12-11-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.148%2B2025-12-11/3.0.0-prerelease.148%2B2025-12-11-mac.dmg
    name: 3.0.0-prerelease.148+2025-12-11-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.148%2B2025-12-11/3.0.0-prerelease.148%2B2025-12-11-windows-x64.zip
    name: 3.0.0-prerelease.148+2025-12-11-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.148%2B2025-12-11/3.0.0-prerelease.148%2B2025-12-11-windows-x86.zip
    name: 3.0.0-prerelease.148+2025-12-11-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 269361930
tag_name: '3.0.0-prerelease.148+2025-12-11'
channel: '3'
tags:
  - releases
---


# Bug Fixes

### Editor

- subscreen widget item conditional arrow buttons being inverted [`98cd32d52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98cd32d5218360231ebf8b49b3529d05efd32903)
- prevent rare crash in subscreen Counter Block wizard [`c08528030`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c08528030415af165b195eccf303db1d7f9f94f6)
   &nbsp;
   >If the "Inf Char" field was empty when the dialog closes, the program could possibly crash. 
   >

# Documentation

- clear html build folder in update script [`9570dc6d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9570dc6d9369fab09da25f6567cf2b732088a1a2)

# Build

- add EXCLUDE_FROM_ALL for third_party installs [`81615e245`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81615e24549a054e56ebd9bdf4cf357a8d02cbe0)
- fix sentry sometimes not linking statically [`28c6e77a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28c6e77a332dc347c8e37c5ffc3d6cc53c3a038c)
- do not include third-party build-only artifacts in package [`83426603a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83426603a510c7c6b84a21b1a8c4c5747d5375a8)
- fix some probably invalid cmake when configuring allegro build [`27d051893`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27d0518933e59170e44e5ea034cf9c35c2974e06)
- improve allegro5 cmake targets [`aea6a1803`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aea6a1803842de514c91fcc1fcc054d049eaaaf3)
- upgrade allegro [`df5cba6f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df5cba6f37eb2e930657cdda65872796a1f047d2)
   &nbsp;
   >https://github.com/connorjclark/allegro5/compare/my-fork-13...my-fork-14 
   >

# Tests

- use actual project dir in webserver.mjs example [`c568be2f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c568be2f9b78a043f2c2732d77beabe6e7faaefd)
