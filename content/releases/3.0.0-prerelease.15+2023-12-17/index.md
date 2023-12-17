---
title: 3.0 Prerelease 15 2023-12-17
description: 
date: 2023-12-17T21:06:32Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.15%2B2023-12-17/3.0.0-prerelease.15%2B2023-12-17-linux.tar.gz
    name: 3.0.0-prerelease.15+2023-12-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.15%2B2023-12-17/3.0.0-prerelease.15%2B2023-12-17-mac.dmg
    name: 3.0.0-prerelease.15+2023-12-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.15%2B2023-12-17/3.0.0-prerelease.15%2B2023-12-17-windows-x64.zip
    name: 3.0.0-prerelease.15+2023-12-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.15%2B2023-12-17/3.0.0-prerelease.15%2B2023-12-17-windows-x86.zip
    name: 3.0.0-prerelease.15+2023-12-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134236161
tag_name: '3.0.0-prerelease.15+2023-12-17'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- allow mathematical range expressions [A,B) etc [`61c5ccc92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61c5ccc92370582503aa8478a9763dcb075a5929)
- range loops (`loop(int q : 0=..10)`)
   >&nbsp;
   >Relevant changes:
   > - feat(zscript): range loops can contain variables in ranges/increment, and negative increments [`cb583e1c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb583e1c41ecd68b0db46ad47d889e91d7084019)
   > - feat(zscript): range loops have '@NoOverflow()' annoation, docs [`ded10db59`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ded10db593addd24f95fd8d8b0b3696fe52da658)
- allow multiple comma-delimited increment statements in for loops [`ab8232c78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab8232c783f86389bd0c74957e09f7db95d13e38)

# Bug Fixes

### ZScript

- handle rare COMPAREV2 for x64 jit [`fa4a23e65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa4a23e6574e282ba749358b4737aa95fe982aae)
- sprintf giving a wrong error message on %c [`d17e8aa85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d17e8aa856ff26108cf8681e8551adeffba09e28)

# Documentation

- update zstrings.txt to mention the "Insert SCC" button [`fef251974`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fef251974ceb9bc12ffc278316c322b92e4314fd)

# Refactors

### Player

- move debug zasm writing to new -extract-zasm command [`847ab88e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/847ab88e9674e3393291add66bf205b93def4b16)
   &nbsp;
   >This allows for all scripts in a qst to be written to disk, instead of only the ones that happen to execute. 
   >

### ZScript

- optimize bool ops a lot [`c8fae535d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c8fae535d2e0810e6017bb959943614cdd309960)
- clean up getStackOffset(Datum) code [`3cdf73853`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3cdf73853f851f870a79ecc0c85bf2c3b1e4d180)

# Tests

- fail replay test if jit cannot compile a script [`1bf248ab2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bf248ab2ae0c44f1744d1eb5453d8240790be78)

# Misc.

### Player

- improve error message when qst title does not match save file [`33b36ed95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33b36ed950e1f19c3eb5b0526c8a2c56e55fbf24)

### ZScript

- make some more internal functions `constexpr` [`21cdf3c04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21cdf3c04b2fe24fd557ce4dc1c86463e130ca20)
- re-number zasm comment numberings [`3ea93b743`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ea93b743739fb402ff4c3524d61d74e74bd596d)
- Optimize 'STORED' followed by 'LOADD', and add 'STOREDV' [`6fce11564`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fce115646fd7b24c8026c2442896b175961f63e)
- Optimize standing-statement x++,x-- to ++x,--x [`5b62f2f5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b62f2f5c4c13cc8963cf06138d9694f40d7a3a7)
- optimize sections of zasm that are run only for their side-efffects [`d253cbb84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d253cbb843b7652810c69b3e9d7044c1c136fef2)
- Optimizations related to function call parameters, unused function params [`d79b131ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d79b131ab7e22d548710d51345290cb10bbf6e10)
- range loop cleanup [`9841db7d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9841db7d5516c3f13eba67834a785548d58fa2dc)
- Optimize variables initialized to 0 [`f20abd31d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f20abd31d0e979085b3c0de25ff14781614d9365)
- clean up unused variables [`f3a0991d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3a0991d62921f96c24c5f77c66d759e433625d5)
