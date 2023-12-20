---
title: 3.0 Prerelease 16 2023-12-20
description: 
date: 2023-12-20T04:50:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.16%2B2023-12-20/3.0.0-prerelease.16%2B2023-12-20-linux.tar.gz
    name: 3.0.0-prerelease.16+2023-12-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.16%2B2023-12-20/3.0.0-prerelease.16%2B2023-12-20-mac.dmg
    name: 3.0.0-prerelease.16+2023-12-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.16%2B2023-12-20/3.0.0-prerelease.16%2B2023-12-20-windows-x64.zip
    name: 3.0.0-prerelease.16+2023-12-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.16%2B2023-12-20/3.0.0-prerelease.16%2B2023-12-20-windows-x86.zip
    name: 3.0.0-prerelease.16+2023-12-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134572563
tag_name: '3.0.0-prerelease.16+2023-12-20'
channel: '3'
tags:
  - releases
---




# Features

### Web

- first pass on wasm JIT backend for web [`08254299c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08254299cb5cd3d5e3a4a1ad35846db75cca1835)
   &nbsp;
   >Adds a new backend to convert ZASM to WebAssembly. This also includes some utility methods for analyzing the structure (finding the functions) and control flow of a ZASM script, which was necessary to split ZASM scripts into multiple WebAssembly functions and implement the control flow of a ZASM script into WebAssembly structure control ops.  
   >
   >Although `prime.zs` is ~10x faster, scripts from real quests aren't any faster than the normal ZASM interpreter, since a very naive and poorly performing method was used to transform the ZASM control flow graph.  
   >
   >The utility methods for analyzing ZASM should be useful for improving the x64 backend too, for example, to similarly compile only one function at a time. 
   >
- support more ZASM ops for wasm jit [`53d5bc9a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53d5bc9a7775cf251438b69720abbd25c3446642)

# Bug Fixes

- deleting subscreens resulting in invalid/crashy data [`f0d8830a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0d8830a09245def61446e4519fadc789714b344)

### Player

- remove accidental double compilation for global scripts [`1648daea9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1648daea972edf071e68c2aac86c6f7dd07a23ab)
- draw to correct bitmap when showing button clear prompt [`44bf4b63d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44bf4b63d3bb37a79e56270950f48eb6c01e1675)

### ZScript

- 'Screen->SetExDoor()'/'mapdata->SetExDoor()' not opening matching doors [`886f44ed1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/886f44ed184f31fe18d411d43c28249d3bc79b6c)
- grab correct value from stack for POPARGS JIT x64 [`6f0b3e2a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f0b3e2a0d44516aee3cea7ee07de6727a2cb7ed)
   &nbsp;
   >This didn't seem to break anything, but it showed up as a difference when comparing registers from JIT w/ non-JIT. 
   >
- Hero->WarpEx not using dmap xoff when setting continue screen [`419a8ddde`](https://github.com/ZQuestClassic/ZQuestClassic/commit/419a8ddde7d43f41b2ace775546282270bff6415)

# Tests

- fix local webserver when offline [`e9d7846d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9d7846d4c7c119d03897256830f49c93e0b5418)
- include js script in web replay test stdout/stderr [`2790c4fe8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2790c4fe8545652b1d9b02f32791446b11385ff2)

# Misc.

- add jit_runtime_debug.py for debugging jit bugs [`781ffbc00`](https://github.com/ZQuestClassic/ZQuestClassic/commit/781ffbc0089e8448ef14ac3ba65c65c4308e232d)

