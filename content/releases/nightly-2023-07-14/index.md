---
title: Nightly 2023-07-14
description: 
date: 2023-07-14T09:45:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-14/nightly-2023-07-14-linux.tar.gz
    name: nightly-2023-07-14-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-14/nightly-2023-07-14-mac.dmg
    name: nightly-2023-07-14-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-14/nightly-2023-07-14-windows-x64.zip
    name: nightly-2023-07-14-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-14/nightly-2023-07-14-windows-x86.zip
    name: nightly-2023-07-14-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 112233759
tag_name: nightly-2023-07-14
tags:
  - releases
---

# Bug Fixes

### Player

- memory leak in read_one_subscreen [`17f5ecc64`](https://github.com/ArmageddonGames/ZQuestClassic/commit/17f5ecc64cec8d98ea7fb5e0d848221b576038ba)
- more reproducible fairy hearts, for replay in Debug mode [`901a3e05d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/901a3e05ded5e1e803ad35a3331e52f4e2b3c1a5)

### ZScript

- fix for-each loops on non-const arrays. [`9c6e31bca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9c6e31bca7e4ee06478f9445be3e1bb717251431)
- free jit script handles on engine shutdown [`52db50c21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/52db50c2165cffae2eb781fd1ed9d3dc46b72a8d)

# Refactors

- un-inline zc_math functions [`eba451962`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eba45196202f4e80ee5f73c727060df120fc92cc)
```
  This allows for us to always optimize these functions, even for Debug builds. Good for replay
  determinism.
```

# Tests

- only check exit code for replay tests under Asan [`acd61977e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/acd61977e491af61610bbfeb0db83b30ca728312)
- add download_artifacts.py [`dca122f8e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dca122f8e86fee82d15dbd3755124ff251bba47c)
- add asserts for group_arg logic [`bdfbe948d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bdfbe948d3074e26bd9f06294ac3ec49b0316d45)
- condense --snapshot args generated for failing run [`b8048b986`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b8048b9862eae98c3204a1101a3274a551ef6f87)
- refactor compare report to use ReplayTestResults [`aa282f96e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aa282f96e05048711fa1ac5ff617e78b29d3d198)

# CI

- pass build type to replay tests script [`c59f68b10`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c59f68b108e3ef62e15fcccca79192d621574cda)
- when updating artifacts, only upload the updated/ folder [`bc1be95c6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bc1be95c699db807d725f914075783d7911048b6)
- do better job of reducing size of compare report [`7ed7b02d8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7ed7b02d86814e95ebd3702e7f3e9b584fd71ad3)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-12...nightly-2023-07-14
