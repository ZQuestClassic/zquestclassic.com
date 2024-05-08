---
title: 3.0 Prerelease 53 2024-05-08
description: 
date: 2024-05-08T01:41:18Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.53%2B2024-05-08/3.0.0-prerelease.53%2B2024-05-08-linux.tar.gz
    name: 3.0.0-prerelease.53+2024-05-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.53%2B2024-05-08/3.0.0-prerelease.53%2B2024-05-08-mac.dmg
    name: 3.0.0-prerelease.53+2024-05-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.53%2B2024-05-08/3.0.0-prerelease.53%2B2024-05-08-windows-x64.zip
    name: 3.0.0-prerelease.53+2024-05-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.53%2B2024-05-08/3.0.0-prerelease.53%2B2024-05-08-windows-x86.zip
    name: 3.0.0-prerelease.53+2024-05-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 154717055
tag_name: '3.0.0-prerelease.53+2024-05-08'
channel: '3'
tags:
  - releases
---




# Features

- ZScript arrays now are separately typed from non-arrays. [`cf2769fe9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf2769fe95ae01ba07d2a028c803e284fdecc6a8)
   &nbsp;
   >Array types can be declared by adding `[]`. 
   >

### ZScript

- option 'OLD_ARRAY_TYPECASTING' to use old array type handling [`d7555bf9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7555bf9e844d7783334d4251f392d9695997ace)

# Bug Fixes

- correct the version string for 2.55.x releases [`7d9ceee14`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d9ceee14105369d84bee7702677e40fe2df6033)
- incorrect default right string margin [`1428ca004`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1428ca004130adacc808fe17e7f909fdbf1717e9)

### Player

- visual text bug in sound panel [`5f16c4d04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f16c4d0493687fd1ccd41c7807c7c397e544d92)
- active shields interacting with light beams while inactive [`96aeccbc5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96aeccbc588323a89a6098b1364f2d6bd98a5fa3)

### Editor

- arrow buttons above combo columns sometimes not working properly [`1af434da4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1af434da4aa487ae832268fe934fac4c197eb294)
- "Used Tiles" completely failing to calculate [`009d59164`](https://github.com/ZQuestClassic/ZQuestClassic/commit/009d59164c23b9d287557e50c102609f40b22b28)

### ZScript

- object fields not being available in dtor [`7feb9afdd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7feb9afdda39fe7e8ef6a7713eade772c4171ccc)
   &nbsp;
   >This regressed because of the recent GC changes. 
   >
- compiler crashing on for-each loops [`b00f59aad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b00f59aadb09ab987829d549b71c5bf9e032d8ee)
   &nbsp;
   >This regressed because of the recent error locations refactor. 
   >
- some bindings ZASM using wrong literal values [`975cf9c60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/975cf9c6048c42e24e14780f2c0d79e6c1d8e683)
- 'loop()'s not having location metadata associated with their identifier [`68a5f70c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68a5f70c82dd870ee7813e9e971f182751040803)
- 'hero' and 'link' script types not compiling [`4ce3a2186`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ce3a218621e6d125b1c5251ec3ddc5c3e994b99)
- code gen for range loop using wrong op [`213361564`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21336156492fd46a2222476f379e45935eac45d7)
- handle engine subscreen in ScriptTypeToString [`19edaac07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19edaac073b08871e05478c4b13d8f9374d13b08)

# Documentation

### Editor

- touch up attack/whimsical ring help text ('damage' -> 'power') [`c5da0a5c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5da0a5c6d708e08f9f6b74577b4ee46b4973d2b)

# Refactors

### Player

- rename the "ZScript Debugger" to "ZC Console" [`d44b13ffa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d44b13ffacbddee22e6a8ee40985a9d55f8828e4)

### ZScript

- array literals better deduce their element types [`3717da293`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3717da2936c0b47d98f1bd3f3a8532c92142fdb9)
- use faster register allocation in jit [`50b8b0bf2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50b8b0bf2bc874724b43b6cb3d57bebfdc5b2bd9)
   &nbsp;
   >asmjit's register allocation was using a bin-packing algorithm. This turns out to be very slow for the assembly that our jit compiler emits, since the vast majority of variables exist for only a single basic block. Instead of bin-packing, the much faster and simpler linear scan register allocation algorithm is now used.  
   >
   >For a very large 200k-instruction script, compilation went from 19.5s to 2.8s (a 85% decrease).  
   >
   >With this improvement, the 20k-instruction limit for jit has been removed. One example of the impact of this is that `yuurand.zplay`, which the jit compiler was previously mostly disabled for since most of its scripts are huge, now has all its scripts compiled. This increased the average FPS for `yuurand.zplay` from ~320 to ~2000, while still reducing the total time spent compiling.  
   >
   >Theoretically this change in register allocation may produce slower runtime code, but there was no drop in FPS realized in the `maths.zs` stress test. 
   >
- remove ZASM debugger [`bb5404c8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb5404c8d645294b2c509a4e22217257eeb7cee5)
   &nbsp;
   >This was already made inaccessible from the GUI in 1da2d02, but now it is removed entirely. Work on a real debugger will begin soon. 
   >
- type-safe opcode classes and use zasm table for stringification [`75dc4d745`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75dc4d745e96d0619b6b7a68046d63ebd7abf925)
- separate zasm code from script data [`75f981f57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75f981f5714272855b87139544fdf8c395b77158)

# Tests

- add eiyuu.zplay [`982031f5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/982031f5cf281a01a523f08c701fabcd68551f6d)
- make some test scripts emit no warnings [`6720fc50e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6720fc50e9011cfc722ddff0824fb8a8436a8875)
- update test scripts for new array syntax [`873e7ecd6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/873e7ecd645b893123079634a73d1b369d62e07a)
- add item_spawns_cloud.zplay [`0ab66ae79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ab66ae79bf19a322b5b8d725cabeb0b5da88520)
- add crucible_quest_short_1.zplay [`f7650745d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7650745d91a2afb767c186c1791f8cd87009e45)

# Misc.

### ZScript Standard Library (std.zh)

- update headers and bindings with array typing [`b23b23484`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b23b23484edcac67256c4230f7e080ac275a806b)
