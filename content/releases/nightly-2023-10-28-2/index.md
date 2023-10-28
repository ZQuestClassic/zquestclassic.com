---
title: Nightly 2023-10-28 (2)
description: 
date: 2023-10-28T07:32:00Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-28-2/nightly-2023-10-28-2-linux.tar.gz
    name: nightly-2023-10-28-2-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-28-2/nightly-2023-10-28-2-mac.dmg
    name: nightly-2023-10-28-2-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-28-2/nightly-2023-10-28-2-windows-x64.zip
    name: nightly-2023-10-28-2-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-28-2/nightly-2023-10-28-2-windows-x86.zip
    name: nightly-2023-10-28-2-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 127044123
tag_name: nightly-2023-10-28-2
tags:
  - releases
---



# Bug Fixes

- use steady_clock instead of system_lock to measure replay duration [`d3e8e7fcc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3e8e7fcc44b48ddeb1847407355aa4dbf26c389)
- [mac] handle CMD key press and allow CMD for all places CTRL is [`e45016fb2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e45016fb27319dc0f86dd0042471755c5285e0f3)

### ZScript

- persist compiled jit functions when reloading the same quest [`2bd7e877d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bd7e877de75af389c51660973dfe51eb916d00c)

# Build

- move some src/*.cpp files to appropriate static lib [`e3038f133`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3038f133beb87e57b1444dfcc43be290b0295d8)
- remove unused font.cpp [`3bda28548`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bda28548cd78b430851fbbbe1ea1d395dabbc58)
- upgrade to latest asmjit [`2ede55147`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ede55147210f41882a5654dd3285eeb5eab733b)

### Web

- fix missing zscript compiler caused by 7dbb75d [`bbdb9be63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbdb9be6329f3948a63f63f0932f4ecccc91b9cc)

# Refactors

- cache zasm script size [`be7c81d3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be7c81d3c5e909ed6d205b1468cec16fe7fa9b53)
- move zcsound source files to src/sound [`09dfea4eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09dfea4ebcbffcb6137df331ad6ec2756cda3f17)
- remove zcmusicd.cpp [`15628e6f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15628e6f3a3f80d6c8fd356588815a8af0a80b79)
- move ffc set data / changer out of ffc.cpp and to src/zc [`3a6d2d394`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a6d2d394c2bbb37a9755b05d5cca87c0b587ff5)
   &nbsp;
   >This is the first step to moving `ffc.cpp` to zcbase. 
   >

### ZScript

- replace script debug_id with composite id (type, index) [`8e6c48a21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e6c48a219bef66e78b36d588ba4e8e86530f849)
   &nbsp;
   >The previous hack of using a global variable incremented in the constructor had strange behavior, and would result in different ids given when reloading a quest. 
   >
- use .contains instead of .find in jit.cpp [`02dbb040c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02dbb040cb15ea2a8dd59429dfc4481614ee8c88)

# Tests

- run replay tests concurrently [`762ac2db5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/762ac2db55d21e30cd315b69b14d2faefd1ee0c1)

# Misc.

### ZScript

- never compile scripts larger than 20,000 ZASM instructions [`5986e6021`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5986e602176ae9be6ba8d1272b42b6c8fae8bf6d)
- print jit_log stuff to allegro log instead of stdout [`3e720b62d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e720b62d3f51d8e6297de37563a9875927ed815)
- highly priortize only frame-1 global scripts for JIT compiler [`e8f60b40e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8f60b40e37fd33e314681e973f99888207e117c)

