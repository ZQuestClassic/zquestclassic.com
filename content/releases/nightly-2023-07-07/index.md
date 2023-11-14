---
title: Nightly 2023-07-07
description: 
date: 2023-07-07T09:59:29Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-07/nightly-2023-07-07-linux.tar.gz
    name: nightly-2023-07-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-07/nightly-2023-07-07-mac.dmg
    name: nightly-2023-07-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-07/nightly-2023-07-07-windows-x64.zip
    name: nightly-2023-07-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-07/nightly-2023-07-07-windows-x86.zip
    name: nightly-2023-07-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 111465627
tag_name: 'nightly-2023-07-07'
channel: '2.55'
tags:
  - releases
---

# Features

### ZScript

- Graphics->ConvertRGBTo() and Graphics->ConvertRGBFrom() [`a37a156f2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a37a156f2d7e58033e01ecf215bc5bd9935f4bc5)

# Bug Fixes

- prevent over-allocation in quest load from bad script bindings [`3240f577b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3240f577bd553328476fb791b3b2c8101e5b76b4)
- memory corruption in quest load from bad subscreen strcpy [`f30cc94ff`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f30cc94ffe9889d88d19f279a4d6e97e4a95b63d)
- memory corruption in quest load from bad sfx length [`fe8a0e887`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fe8a0e8873e0baa15fb066cff8f6bae491b11177)
- memory corruption in quest load from bad warp count (old) [`da70b79fe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/da70b79fe71d1d3222a0d8d5e23991bd1f614b01)
- memory corruption in quest load from bad genscript count [`8bf716bdc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8bf716bdc6f789fec06cc03f48c014ccbe933632)
- memory corruption in quest load from bad dropset count [`8d5d7f8f9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8d5d7f8f99daa51da6baf21d069228b10ade15d3)
- use-after-free bug in widget label [`84539eff0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/84539eff0530a52638f58fdbdf4c295fa86aaa11)

### Editor

- bad pointer alias crashing QR search dialog [`f63fbaa0a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f63fbaa0a1e69242bff17988498206e4add563ca)

### ZScript

- backwards byte order of the rgb type used by paldata [`79fa156a5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/79fa156a5902ecbef70bc46528ea55424e5b00eb)

# Documentation

- type help for Slope combo type [`80b4c5acd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/80b4c5acd2ded8f163bf47707b2a8229372e70b0)

# Build

- set zquest as default startup target in VS [`19d7ea741`](https://github.com/ArmageddonGames/ZQuestClassic/commit/19d7ea741b213ad932e7beacdfab13ce3dc72e76)
- add Asan build type [`33ecea2aa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/33ecea2aaad56bc0387229152c33e388dcb0eebe)
- support Asan build type for zelda target [`dd924d048`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd924d04873c9bda7ed7c2be17dd7c506cd30114)

# Tests

- remove replay comment when jit fails to compile [`6289180bf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6289180bf8c1a0964903be738fa8821d6b55930d)

# Misc.

- automate fuzzing process [`fd3e64168`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fd3e6416836c86f2b034331f27d5a7b3e817b55c)
- remove unneeded init code for fuzzing quest loading [`d85c83770`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d85c83770563ba67e41144147eb92cf19094b882)
- update used QRs in quest database [`d4bb90020`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d4bb9002049a61c373a02fa0321063c0ff57157e)
- include deprecated_rules in qr analysis [`999523839`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9995238393b6a03628991e8441a872dd675d9756)

### Editor

- do less setup for -copy-qst command [`4c4e37a6a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4c4e37a6a0c73c1033bba036f5fcd69b333413ed)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-05...nightly-2023-07-07
