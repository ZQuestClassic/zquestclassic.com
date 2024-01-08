---
title: 3.0 Prerelease 24 2024-01-08
description: 
date: 2024-01-08T02:03:51Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.24%2B2024-01-08/3.0.0-prerelease.24%2B2024-01-08-linux.tar.gz
    name: 3.0.0-prerelease.24+2024-01-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.24%2B2024-01-08/3.0.0-prerelease.24%2B2024-01-08-mac.dmg
    name: 3.0.0-prerelease.24+2024-01-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.24%2B2024-01-08/3.0.0-prerelease.24%2B2024-01-08-windows-x64.zip
    name: 3.0.0-prerelease.24+2024-01-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.24%2B2024-01-08/3.0.0-prerelease.24%2B2024-01-08-windows-x86.zip
    name: 3.0.0-prerelease.24+2024-01-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136125560
tag_name: '3.0.0-prerelease.24+2024-01-08'
channel: '3'
tags:
  - releases
---




# Features

### Player

- add simple titlescreen, and remove music from save select screen [`a593e7571`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a593e75715a3c3ffd7f919c2fd53d7438dba622f)
   &nbsp;
   >This also reintroduces the `skip_title` option in the launcher. 
   >

# Bug Fixes

### Player

- remember cheat on continue game [`c82beb899`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c82beb899067bfbeac9d5d9d0e8428679b8f90ea)

### Editor

- test init data not being applied correctly [`c599dfc30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c599dfc30d948228a5915e7c3b33f08b9489f90b)

# Tests

- fix different outputs for jit snapshots [`179f96858`](https://github.com/ZQuestClassic/ZQuestClassic/commit/179f968587366e58028d6d8377646e546b5e4e0f)

# CI

- use improved lfs cache [`c9d81ef25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9d81ef25aff69de99de6892ada343fa5424c4fa)
- use RelWithDebInfo for win32 tests [`d621d710a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d621d710aedb7bddcb50f6f5cf41ddd1856a00ad)
