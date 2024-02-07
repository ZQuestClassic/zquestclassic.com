---
title: 3.0 Prerelease 38 2024-02-07
description: 
date: 2024-02-07T07:18:17Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.38%2B2024-02-07/3.0.0-prerelease.38%2B2024-02-07-linux.tar.gz
    name: 3.0.0-prerelease.38+2024-02-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.38%2B2024-02-07/3.0.0-prerelease.38%2B2024-02-07-mac.dmg
    name: 3.0.0-prerelease.38+2024-02-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.38%2B2024-02-07/3.0.0-prerelease.38%2B2024-02-07-windows-x64.zip
    name: 3.0.0-prerelease.38+2024-02-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.38%2B2024-02-07/3.0.0-prerelease.38%2B2024-02-07-windows-x86.zip
    name: 3.0.0-prerelease.38+2024-02-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 140253733
tag_name: '3.0.0-prerelease.38+2024-02-07'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### ZScript

- return enemy x,y when getting fairy item x,y [`38d6fb23d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/38d6fb23d149da9db08be5caecb248f9f0f048cd)
   &nbsp;
   >Setting `item->X,Y` on fairy items additionally sets the position of the corresponding fairy enemy sprite. However, the getter returns the item coordinate. This resulted in unexpected behavior from something harmless like `item->X = item->X` causing the engine fairy movement to halt. 
   >
- consider PEEK when finding function calls for structured zasm [`c45c5f5e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c45c5f5e7db4ad6896d429e6ee4694b3d779c9e4)
   &nbsp;
   >The structured zasm builder assumed all function calls are followed by `POP D4` in older scripts. However, if `POP D4` is followed by `PUSH D4` then the compiler replaces it with `PEEK D4`. This oversight missed these function calls, which broke the JIT compiler and ZASM optimizations for newer 2.55 compiled scripts. 
   >
- use correct config section for optimize_zasm [`694d589f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/694d589f6feb31bd29ce4269b38ed7e0ea01b676)
   &nbsp;
   >The base config was using the wrong value, so it was still always on. 
   >

# Build

- fix websocket cmake project from breaking CMAKE_CONFIGURATION_TYPES [`a2801b774`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2801b774c7ec896b83cd0a623ef4aafca9952df)

# Misc.

### ZScript

- optimize PEEK in x64 and wasm jit [`0ff7dee9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ff7dee9ef9ffbb073e4c1e583fd0705098c89c6)
