---
title: 3.0 Prerelease 135 2025-10-08
description: 
date: 2025-10-08T02:39:26Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.135%2B2025-10-08/3.0.0-prerelease.135%2B2025-10-08-linux.tar.gz
    name: 3.0.0-prerelease.135+2025-10-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.135%2B2025-10-08/3.0.0-prerelease.135%2B2025-10-08-mac.dmg
    name: 3.0.0-prerelease.135+2025-10-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.135%2B2025-10-08/3.0.0-prerelease.135%2B2025-10-08-windows-x64.zip
    name: 3.0.0-prerelease.135+2025-10-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.135%2B2025-10-08/3.0.0-prerelease.135%2B2025-10-08-windows-x86.zip
    name: 3.0.0-prerelease.135+2025-10-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 252903175
tag_name: '3.0.0-prerelease.135+2025-10-08'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- 'Move' missing from combo page rclick menu [`658b4f05e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/658b4f05e5eacf76b5b3db3735240e2aa14fa7b1)

### Player

- prevent memory leak from replay steps [`01ddc66af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01ddc66af9f0fa0840a584e5c35b116b96c1c31c)
- cutscene trigger combos that allow F6 softlocking on F6 [`84e0b19b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84e0b19b402fe201a3aaa35e43d2c62dd0ab171e)
- set block edge for final block [`822d74957`](https://github.com/ZQuestClassic/ZQuestClassic/commit/822d7495740554f302fd9744855ea6d519194e31)
- add missing register dependency for some GC commands [`13256f9f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13256f9f2a9e5c42db538f3f56c5954967cc9dad)
- 'Enemies->Stay Dead' permanently locking shutters closed [`05d6067a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05d6067a0da212d7ed7b261e6069e41e1ebc56df)
- pit/water corner cutting (newer movement only) [`f52deb041`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f52deb041786634614eafb87f5fe77013398f360)
- pitfall function checking wrong bit from slide function return [`c11d1f74b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c11d1f74b7498afd7ba4efba88bec106f8056a1c)
- walking over pits in some cases (made pits more sensitive) [`213e0f3dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/213e0f3dda62c5ed81f12d163c8648549de71adb)

### Editor

- item editor pickup LItems not editing properly [`e157a73fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e157a73fb9b95d68f0f11db62df76c170d5388d1)
- item advanced paste not pasting item name properly [`d82e80832`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d82e808320a33d6daa957231866383c23122118b)
- use create_directories for "replays/test" folder creation [`200da2386`](https://github.com/ZQuestClassic/ZQuestClassic/commit/200da23865c643748baf750939a5a0ff083d3997)

# Chores

- cleanup some menu-related code [`f25dcf950`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f25dcf950d567f9da13efe54561c464902fe2309)

# Refactors

### Player

- for some new replay checks, handle 2.55.11 [`33a6d74fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33a6d74fa041805e6fde66fc6deaaee13c93163a)

### ZScript

- for x64 jit, remove dispatch function [`e21e53697`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e21e536975b7d77fa5d4b48b51b055c9002e7367)
   &nbsp;
   >This removes the complex separate dispatch function used to enter the actual compiled function. 
   >
- for x64 jit, use smarter register allocation [`68087da59`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68087da5933a052a5b99c89b7afe3147b28ae9c5)
   &nbsp;
   >Instead of reading / writing to memory within every command, the x64 JIT compiler now attempts to keep values used across multiple commands cached in registers, only writing back to memory when necessary.  
   >
   >This makes the compiled code ~40% faster, and makes compilation take ~44% less time. 
   >
