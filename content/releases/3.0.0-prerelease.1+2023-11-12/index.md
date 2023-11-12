---
title: 3.0 Prerelease 1 2023-11-12
description: 
date: 2023-11-12T01:19:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.1%2B2023-11-12/3.0.0-prerelease.1%2B2023-11-12-linux.tar.gz
    name: 3.0.0-prerelease.1+2023-11-12-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.1%2B2023-11-12/3.0.0-prerelease.1%2B2023-11-12-mac.dmg
    name: 3.0.0-prerelease.1+2023-11-12-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.1%2B2023-11-12/3.0.0-prerelease.1%2B2023-11-12-windows-x64.zip
    name: 3.0.0-prerelease.1+2023-11-12-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.1%2B2023-11-12/3.0.0-prerelease.1%2B2023-11-12-windows-x86.zip
    name: 3.0.0-prerelease.1+2023-11-12-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 129038991
tag_name: 3.0.0-prerelease.1+2023-11-12
tags:
  - releases
---

To download this release, [visit the ZQuest Classic website](https://zquestclassic.com/releases/3.0.0-prerelease.1+2023-11-12/) or see the bottom of this page.



# Features

- new icons [`fbfcc87da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbfcc87da85d02034f1cd972b54b085068ffa7ad)
- custom logo for quest package export [`13030cb8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13030cb8a19570fbb32288157adbf68b81b10f33)
- custom title music for quest package export [`705d14b31`](https://github.com/ZQuestClassic/ZQuestClassic/commit/705d14b31d4cc9500c492546c9d45ff6f263413e)

### Player

- new logo and song to file select screen [`ee916ab45`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee916ab45b883bfb08426ecfdabe5406aeaf7391)

### Editor

- new song to ambient music menu [`47c8bf62a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47c8bf62ae63940addd9f8ea80c60eb0b34a0e5a)

# Bug Fixes

### Editor

- prevent flickering for minimap tooltip [`cb527141f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb527141f3f5dd5da9e58742cafc47cf390da83c)

# CI

- reset cache for web builds [`1a8cbf99d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a8cbf99daded2c578e1163a853831e0e92bbb9b)

# Misc.

- ignore fixup commits in git hook [`644798146`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6447981462e67f7b2da915c7ea907c49896d4410)
- use better examples for commit messages [`46af4f0af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46af4f0af85b9d16ea9769e647ea9f841db9e575)
- version refactor [`b49ae14d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b49ae14d62589c60188444601dd3fd5561328a3b)
   &nbsp;
   >Switch from "alpha/beta/gamma/final" to simpler "stable/nightly" versioning, and adopt a semver-like version string. See docs/versioning.md for more.  
   >
   >Also, greatly automate the version bumping process. Simply select stable or nightly in GitHub action, and release scripts handle selecting the next version number accordingly. 
   >
- link to website in generated changelog [`c72db7477`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c72db747772c8aa5ebf7ed23fd40caaa2ef45bd6)
