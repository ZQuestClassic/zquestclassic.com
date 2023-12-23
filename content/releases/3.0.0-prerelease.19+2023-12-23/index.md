---
title: 3.0 Prerelease 19 2023-12-23
description: 
date: 2023-12-23T08:55:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.19%2B2023-12-23/3.0.0-prerelease.19%2B2023-12-23-linux.tar.gz
    name: 3.0.0-prerelease.19+2023-12-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.19%2B2023-12-23/3.0.0-prerelease.19%2B2023-12-23-mac.dmg
    name: 3.0.0-prerelease.19+2023-12-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.19%2B2023-12-23/3.0.0-prerelease.19%2B2023-12-23-windows-x64.zip
    name: 3.0.0-prerelease.19+2023-12-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.19%2B2023-12-23/3.0.0-prerelease.19%2B2023-12-23-windows-x86.zip
    name: 3.0.0-prerelease.19+2023-12-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134971470
tag_name: '3.0.0-prerelease.19+2023-12-23'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### ZScript

- global var initializers not erroring when non-constant [`15bc0daf5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15bc0daf5813d4a19335fe9874fa08c2d936cca4)
- issue with global variables sometimes not initializing properly [`872162115`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8721621154b44903003c90b1ea1bf1a4f718d1e0)
- label error bug with 'while(true)' and 'break;' [`bfef7fd44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bfef7fd4456308e0c301bf0b7443546aaf0a18db)
- escape character \" not working properly in string literals [`9ad696e10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ad696e105d7d776b5789e96901c5869e4875ba0)

# Misc.

### ZScript

- internal label errors now prevent compile [`beb767112`](https://github.com/ZQuestClassic/ZQuestClassic/commit/beb76711296148efd5fba5760a2930fabec24003)
