---
title: 3.0 Prerelease 161 2026-02-16
description: 
date: 2026-02-16T03:44:17Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.161%2B2026-02-16/3.0.0-prerelease.161%2B2026-02-16-linux.tar.gz
    name: 3.0.0-prerelease.161+2026-02-16-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.161%2B2026-02-16/3.0.0-prerelease.161%2B2026-02-16-mac.dmg
    name: 3.0.0-prerelease.161+2026-02-16-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.161%2B2026-02-16/3.0.0-prerelease.161%2B2026-02-16-windows-x64.zip
    name: 3.0.0-prerelease.161+2026-02-16-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.161%2B2026-02-16/3.0.0-prerelease.161%2B2026-02-16-windows-x86.zip
    name: 3.0.0-prerelease.161+2026-02-16-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 286677773
tag_name: '3.0.0-prerelease.161+2026-02-16'
channel: '3'
tags:
  - releases
---


# Features

- Increase Max Items (256 -> 1024) [`1f397dc20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f397dc208914a9828a9818768b3330ac5279bda)
   &nbsp;
   >Items can be added / deleted / re-ordered via the item editor list. Currently nothing will be updated for you when re-ordering (including deleting from the middle of the list), so take care when doing so. 
   >

### ZScript

- add debug data line mappings to compiler output [`9b2cfd68e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b2cfd68e4381a016268099be2cedab468007fe0)
   &nbsp;
   >With this, any trace or error from a script is now printed with a stack trace, showing what script file and line of code caused it. 
   >
- add scope info to debug data (variables, functions, classes) [`b3f408e08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3f408e08be9e323353f0231bb49eff8d19b399a)
- add script contents to debug data [`4023fa457`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4023fa457c0ef7c04c9f8983856ad741a7097002)
- add expression parser / evaluator for debugging [`92689a56e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92689a56e0ca3636819b8a4b46b11eb0efbc409f)
- add rich debugger [`c7a2ccbb8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb8421928e313370350e71c3ab6d72c420)
   &nbsp;
   >See https://docs.zquestclassic.com/zscript/lang/debugger/ for details. 
   >
- support assignment in debugger expressions [`ef4820fa6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef4820fa6d8ad0e94bea8fbe0cd85622263191d6)

### Visual Studio Code Extension

- skip compiler codegen, not needed for extension [`02786b32b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02786b32b55161903a4acdbdb5c0770f543b4a01)

# Bug Fixes

### Player

- DCounter[] not working for counters >= 32 (the new custom counters) [`482de35f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/482de35f3dca045c658d21709bdfafb321fd9dd1)
- looping sfx broken by recent sfx upgrades [`9a098701c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a098701cd30826f12fe56b51e360f077a89a00b)

### Editor

- 'Move' using bad tile count for weapon sprites' tile usage [`4523cbe91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4523cbe918b8cf1fa3e4908c166f93799df38940)

### ZScript Standard Library (std.zh)

- DCounterAdd() changing MCounter[] instead of DCounter[] [`82138fc9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82138fc9e1bf15e93dcf4b3debb805a316d030c4)

# Build

- fix some issues with building zscript playground [`b1dd83fbd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1dd83fbdd6bd1f4f17417106f7c0bfddcb913a4)

# Refactors

- remove extra print in CHECK [`1eb02c774`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1eb02c774fe4bf3f390568e221fec6c7a3700e12)
- move src/tab_ctl.cpp to src/gui/tab_ctl.cpp [`3c3bf78c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c3bf78c956b398daeb5599f1d856eb4bba49e34)
- move src/zscriptversion.cpp to src/zc/zscriptversion.cpp [`97df9f401`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97df9f401be9e1b2e8f6e248af7e9dda694b964a)
- move src/midi.cpp to src/sound/midi.cpp [`e5ea553fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5ea553fc5e369e0d480fb3a47f0325c31d7dda4)

### ZScript

- speed up write_script [`c65a24cd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c65a24cd1116d38d9c65e86bd7f9ff18e569a09a)
- emit separate function for each init script [`f16c96941`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f16c9694198a0d2f8be119ed47e7ce825252218e)

# Tests

- update snapshots after debug data [`85b313a8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85b313a8ef433e64a95090bd1cd634cfdbd4c393)
- print more details if test_compile_and_quick_assign fails [`8207a3d9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8207a3d9dd776474ea4767f79362ab2a6c29492e)

# Misc.

- generate csv for replay coverage [`cec760872`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cec760872305cb09cf84fdbf86c1e75a21cc6004)
