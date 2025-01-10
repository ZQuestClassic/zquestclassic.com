---
title: 3.0 Prerelease 85 2025-01-10
description: 
date: 2025-01-10T05:59:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.85%2B2025-01-10/3.0.0-prerelease.85%2B2025-01-10-linux.tar.gz
    name: 3.0.0-prerelease.85+2025-01-10-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.85%2B2025-01-10/3.0.0-prerelease.85%2B2025-01-10-windows-x64.zip
    name: 3.0.0-prerelease.85+2025-01-10-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.85%2B2025-01-10/3.0.0-prerelease.85%2B2025-01-10-windows-x86.zip
    name: 3.0.0-prerelease.85+2025-01-10-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 194197741
tag_name: '3.0.0-prerelease.85+2025-01-10'
channel: '3'
tags:
  - releases
---




# Features

### Web

- playground accepts '?data=' and '?fname=' [`999f99d79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/999f99d79bb159e85b3c9c70a4889093b70a2d29)

# Bug Fixes

### Player

- fix bad memory access when checking for sword tap [`983afbd89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/983afbd8993fdb0e43457879a47dbca80c5258ac)
- prevent OOB related to bridges in `HeroClass::checkchest` [`4d7c0bcd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d7c0bcd7fa4568a97aa20c78b4bfea4461b702f)
- prevent many crashes related to sprite list being full [`f3af6d839`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3af6d839bc1aad9d10d26bbf5bd808296135e23)

### Editor

- Mixed weapon listers now show 'E ' before enemy weapons [`3350d34d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3350d34d90a2f2013e9d7e7cf896498f4356e99f)
   &nbsp;
   >Previously, they would, ex., list 'Magic' twice, once for the lweapon and once for the eweapon. This changes it to list 'Magic' and 'E Magic' separately. This does NOT change listers showing only eweapons, such as the enemy editor's attack field. 
   >

### ZScript

- deprecation warnings for functions not giving 'INFO:' text [`4a89897b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a89897b67196d9d39e4cfc2d8fb67a7db225be7)
- possible use of nullptr as FILE* when outputing `-zasm` [`8eaa13fca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8eaa13fca721860be4215ed022a419f828d0f845)
- prevent crash when processing for-loop metadata [`235ad808b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/235ad808bfd12dcb49fa8e59c708e6aaf5a39a71)
- properly revert scope when processing class [`e9d8e0509`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9d8e05098a9e4d36d0759bbaea993f8e04d2a8a)
- set zc_cfg_defaulted in parser config reading [`a6dc1a9c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6dc1a9c6391fc4c710772c223bc89f30b695a33)
- refactor most scope changes to use ScopeReverter [`b6404b4fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6404b4fa7cad4bc52ac4ecf6c78a9e96912f26d)
   &nbsp;
   >Most of these usages were fine, but some weren't. 
   >
- avoid crash when printing context for error on last line [`19ae256b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19ae256b5c9c5ffd207974baaac7eb90e0c17c21)
- resolve a few bad bindings and name every parameter [`b34772036`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b34772036c12cfd3fc3a42908f0a838d5189bbfc)

# Documentation

- update python script to stop using deprecated syntax [`44e3be566`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44e3be5669f5e5f4b811c021efe8e7c8ea449a91)

### ZScript

- generate zscript docs to make use of new playground args [`8faac3bae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8faac3baea8099d1b6925e3024b78de13be5a8af)

# Build

- use batch file when generating docs if make is not present [`a7ad5b0c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7ad5b0c8468b4d78de72700a92f81b47a22010e)

# Refactors

### Player

- reduce bitmap allocation in sprite::draw [`379f5e090`](https://github.com/ZQuestClassic/ZQuestClassic/commit/379f5e0901fd195b9668252032e16378094008e0)
- show play time even when recording a replay [`0e36687f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e36687f76f8033d59c15c02c019a2719892ba6a)

### ZScript Standard Library (std.zh)

- move ffcscript.zh content into std.zh [`e14129314`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e141293149dec8e3d76094fa64f3504313d42a2a)
   &nbsp;
   >std.zh was already importing this, so nothing changes std users. 
   >

# Tests

- upgrade puppeteer to 23.11.1 [`de0e89624`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de0e89624f98fddc7278b857694bbb6701adcc0f)
- ignore user zscript.cfg for test_zscript.py [`dda9a3f41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dda9a3f413d3376ace8c2ed5fe2b3323e54af28b)
   &nbsp;
   >Also use a separate base config for testing only, to enable deprecation warnings and `NO_ERROR_HALT` by default without impacting zeditor users. 
   >
- fix mistake in dda9a3 [`fb6e03f61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb6e03f61d5ef29ca8ac7892c18757cbc82076ce)
   &nbsp;
   >Wrapping the test config loading code in `assert` was a mistake, since assert is removed in Release builds with no care of side-effects. 
   >

### ZScript

- update snapshots [`d25f7bf02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d25f7bf02996b1ac4f22ecb4f6bf749ae9dcc1f4)

# CI

- fix database cron by disabling new ubuntu security feature [`c434ebe57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c434ebe57bd889b892c0705fbe10cc4b1584fbc6)
- [win] update vcpkg to 2024.12.16 [`18ebf3433`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18ebf34330124bc001a9180344722a89e39be711)

# Misc.

- ensure directory exists in database/collect.ts setReleaseResourceHashes [`1384a4a9b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1384a4a9bd2de0f524ddb95006a266ae710e9b3c)
- add 2.55.8 changelog [`c8fdd74db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c8fdd74dbd7c6e3574e4b6f863a97bd00910184c)
- fix mistake in 2.55.8 changelog [`441bd7be7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/441bd7be706fa0776553d87f08ad0b68aa71d339)
