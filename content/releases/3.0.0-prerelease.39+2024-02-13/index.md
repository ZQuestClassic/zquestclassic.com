---
title: 3.0 Prerelease 39 2024-02-13
description: 
date: 2024-02-13T06:49:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.39%2B2024-02-13/3.0.0-prerelease.39%2B2024-02-13-linux.tar.gz
    name: 3.0.0-prerelease.39+2024-02-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.39%2B2024-02-13/3.0.0-prerelease.39%2B2024-02-13-mac.dmg
    name: 3.0.0-prerelease.39+2024-02-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.39%2B2024-02-13/3.0.0-prerelease.39%2B2024-02-13-windows-x64.zip
    name: 3.0.0-prerelease.39+2024-02-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.39%2B2024-02-13/3.0.0-prerelease.39%2B2024-02-13-windows-x86.zip
    name: 3.0.0-prerelease.39+2024-02-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 141759976
tag_name: '3.0.0-prerelease.39+2024-02-13'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- inline function optimization handles PEEK correctly [`a3d768e8f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3d768e8f335093bd7a025761fd8c3b0edb63475)
- various fixes to optimizer that broke crucible quest [`47ca63d08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47ca63d081ae4509f45d80497fc5292a6cd058d5)
   &nbsp;
   >- ignore QUIT in inline opt
   >- handle POPARGS in inline opt
   >- add missing register dependencies for multiple commands
   >
- inline function optimization handles PUSHARGSR correctly [`ffd3fe1fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffd3fe1fec0ad60cecf5e33076801826665dd251)
- various slope improvements, like fixing ffc slopes [`a93568375`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a93568375aeb1340cd58ac2be855d565d06a39c0)
- fix mirror shield not resetting the last used mirror combo position [`255151b81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/255151b81ffcf9a0ebc7310baa30176d8963c866)
- save select screen not showing new hp after save->reset [`e91c347a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e91c347a89746c7a3aaf546efb22909c212c0f32)
- load default quest for sfx when loading replay [`0586712df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0586712dffad38c01d5dad5ab2ca8876082e470f)
   &nbsp;
   >Quests before custom sfx rely on the default quest providing sfx, but that wasn't being loaded when playing back a replay. So it would either use whatever the last quest loaded, or have nothing, which was the case for the replay test script. 
   >
- use correct graphic when holding up purchase from bottle shop [`00fae2c4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00fae2c4cec68f677eb2d32fde723c0eea7d8212)

### Editor

- weapon type names drop down being empty [`ccdd2c9e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ccdd2c9e14b3f45881243f3f1c6b3bccef6290ef)
   &nbsp;
   >This broke from recent addition of reflected arrows/fire (e3b23aa) 
   >

### ZScript

- handle WAITX not actually yielding in JIT compilers [`6e95932c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e95932c2fba4fef4bfa10e59450ef0b0763e68e)
   &nbsp;
   >`WAITFRAMESR D2` does nothing when D2 is 0, but the JIT compilers assume all wait commands should yield. Now they check if waiting actually occurs. 
   >
- x64 jit compiles STACKWRITEAT correctly [`5f8f9d124`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f8f9d1246030f4212e1ec33ccfa5f651cc90412)
- invalid compiler output from removing unused variables [`d8123f886`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8123f886f6c689316006a14ab6898be2b0edd78)
   &nbsp;
   >The compiler has a pass to remove unused variables from taking up a position on the stack. However, a logic error made it so the wrong scopes would have their stack variables repositioned, which resulted in multiple variables sharing the same stack position, and breaking the script. 
   >

### Web

- disable broken parallel processing for zasm opt [`cc0518ae6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc0518ae6d05df6f769f622afd4e8ea7acbec49d)

# Build

- update GME, which should resolve the final gcc build issue [`27384fe4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27384fe4c4262fb5ac2177eb34c1af0ff482e267)
- add default file for compiler "signature" [`d53db7b6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d53db7b6f147ad31228c8cd0f1b5e70a3756909b)
   &nbsp;
   >This is to make the build _just work_ in a clean checkout until I get around to removing this pointless thing altogether. 
   >
- fix typo in building.md for cmake version [`aa460db5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa460db5ab6fe78e14c7fe218e0972ae636f9ece)

# Tests

- add crucible_quest.zplay [`5dd7d4c23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dd7d4c23108047d6c7642d4fbfd61999ee17ac4)
- add combo_rotator.zplay [`543bcfb5f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/543bcfb5ffcb0e90431f47978749df4180dbde12)
   &nbsp;
   >This is the first of more planned script replay tests, which along with the playground.qst replays will be re-compiled with the latest zscript in CI and their replays re-verified. Should result in better test coverage for newer compiler features. 
   >
- fix crucible_quest.zplay from recent slope refactor [`3a3dba0d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a3dba0d0053e070680fca180e00fa4a3aa9fc96)
- make the editor File->New test do what it says it does [`3314b4ef0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3314b4ef0b0c3fa889cd86df3836a5cedd06272d)
- add goriya_moblin_war.zplay [`c6c9c0403`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6c9c04035bacb33ee1e4f22f10700160b824fd0)
- add 100_rooms_of_wisdom.zplay [`05c193337`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05c1933372573fa63e29e2079d4b77ae22e8b9b5)
- add dragon_ball_z.zplay [`e3ac9dd62`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3ac9dd62e58b2549e76414de477733330bb99ff)
- add new_beginnings.zplay [`bb2304e08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb2304e08e03dc06fc870fa5b87bd77996f28cbe)
- add kriztles_3.zplay [`c45defff6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c45defff66c76db884d160bc170467049f9a313e)
- add final_fantasy.zplay [`d025e77ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d025e77ea07aa67970e58beeee769e5ee168a76c)
- add zelda_3000.zplay [`b4a2b4c88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4a2b4c882e488878eb2b8970eacc3c943cea499)

# Misc.

### ZScript

- use faster LOAD/STORE instead of LOADD/STORED in compiler [`e8b3be6fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8b3be6fd84023b2e95e4a75a54687ab3f747d96)
