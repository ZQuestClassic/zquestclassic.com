---
title: 3.0 Prerelease 21 2024-01-06
description: 
date: 2024-01-06T08:12:12Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.21%2B2024-01-06/3.0.0-prerelease.21%2B2024-01-06-linux.tar.gz
    name: 3.0.0-prerelease.21+2024-01-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.21%2B2024-01-06/3.0.0-prerelease.21%2B2024-01-06-mac.dmg
    name: 3.0.0-prerelease.21+2024-01-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.21%2B2024-01-06/3.0.0-prerelease.21%2B2024-01-06-windows-x64.zip
    name: 3.0.0-prerelease.21+2024-01-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.21%2B2024-01-06/3.0.0-prerelease.21%2B2024-01-06-windows-x86.zip
    name: 3.0.0-prerelease.21+2024-01-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136052457
tag_name: '3.0.0-prerelease.21+2024-01-06'
channel: '3'
tags:
  - releases
---




# Features

### Player

- optimize comparison commands in ZASM [`419aac804`](https://github.com/ZQuestClassic/ZQuestClassic/commit/419aac8040e6b2a57859e30dddcb30b3bd76e3f8)
- optimize scripts just before use, instead of all upfront [`bf32e9105`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf32e9105ed01c28beb53192c90e9caef2af6392)
- in optimizer, consider the null D5 register when combining commands like POP [`0c5bc072b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c5bc072b3e8c90ea609262d1bae58108052f302)
- optimize old scripts LOADI to LOADD [`1d7fa6a48`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d7fa6a48d6b8343a1ce86476b2822677ccb5872)
   &nbsp;
   >This removes ~8% of commands from Yuurand, ~12% from Nargad, and ~14% from Stellar Seas. 
   >

# Bug Fixes

- swords not updating properly, sometimes [`2986883e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2986883e6cc725c95d676cd6632dd928ea87e18e)
- old quest subscreen minimap titles overlapping [`aedf6f0bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aedf6f0bb8094b087a03d2764da94957ba1b9d9b)

### Player

- lift glove 'disable item use' not stopping sword SFX from playing [`34a26817d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34a26817d879fb63c45726f6cc0c17ae94d0a40e)
- disable scripts that start with an unknown command [`4aa4acd94`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4aa4acd94305b3f224875cdcb240147af1b86bbb)
- check for null when printing ZASM command string arg [`6c4d774c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c4d774c56b8630d4afa36bfb17eac256140313c)
- improve function breakdown in structured zasm [`68259bbf4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68259bbf46ba0e56f3da4b31aa9c7bfc16f05aec)
- handle first command being function call for structured zasm [`69bbf846a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69bbf846a21ba1cae2fc14e65f937541ca16a67c)

### ZScript

- a couple of small errors in recent optimizations [`02bc0f4ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02bc0f4ffba35b6bd81fbdc3e783f2574b543885)
   &nbsp;
   >Should fix issues with 'while(!false)', and variables declared in loops. 
   >

# Documentation

- fix some issues with the webdocs [`0fd60cc13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fd60cc1369f9cc6617d6b4a5378c9b629fe8af9)

# Refactors

### ZScript

- label opcode register args as R/W/RW/unused [`40e805b55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40e805b55982499dc1f7d95c49aadcc485aeefa0)
- label some opcode properties with flags [`c11ec7172`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c11ec7172394139a88f7b60041e5941eccf416d1)

# Tests

- add test_optimize_zasm.py and update_snapshots.py [`6b8053c89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b8053c89f9cd2a70bb4ee40fb55f5e159b1e69e)
- move snapshot files to common folder [`47eb8e745`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47eb8e7451dcab340e336ed5649c340c43f34fe2)
- hash jit output for all but playground.qst [`8a28eff6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a28eff6bbc3a4c607c075701b4c5100b5ae3089)
- add scripts/run_for_every_qst.py, for running a command against every qst in the database [`0eb93f48d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0eb93f48d25e6c58dd491b48301edcb50468baae)

# Misc.

- help text to indicate use of A1/A2 values on ffc/item editors [`cc3c71b19`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc3c71b19288a72c25ee622499ad2c7bf3c71ef6)
- remove noisy allocation logs [`6319e54ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6319e54acc0841de586327b2644165685be0ec95)

### Editor

- Add hotkey for rebinding hotkeys [`298b54e9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/298b54e9d07460feef2accc64160c3187e9b4217)

### ZScript

- compare related optimizations [`3a0d346dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a0d346dc7f32dd856ad57d9c445307051c2f5ec)
- allow 3-arg opcodes, move zasm tables to remove duplication [`0c3e0823b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c3e0823b28a03ceaa87d3d5600774ae5a2a7b35)
- optimize comparisons to run when used, add CMP_BOOL flag for boolean-equality comparisons [`aa9bf8ebb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa9bf8ebbacd01dd940ef2750ffa1b8e07c7c026)
- support CMP_BOOL in x64 jit [`accf84bf0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/accf84bf077dd002b8b815ca96be3f2cc4f6e3e1)
