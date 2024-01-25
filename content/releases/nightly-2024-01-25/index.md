---
title: Nightly 2024-01-25
description: 
date: 2024-01-24T23:04:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-25/nightly-2024-01-25-linux.tar.gz
    name: nightly-2024-01-25-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-25/nightly-2024-01-25-mac.dmg
    name: nightly-2024-01-25-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-25/nightly-2024-01-25-windows-x64.zip
    name: nightly-2024-01-25-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-25/nightly-2024-01-25-windows-x86.zip
    name: nightly-2024-01-25-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 138447964
tag_name: 'nightly-2024-01-25'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- tall grass on layers not applying its sfx/sprite [`76f952fc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76f952fc995ba63205743df4a419586f6766ce08)
- fix snapshot with NOSUBSCR not supplying a palette and not accounting for NOSUBSCROFFSET [`45bf325cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45bf325cb7da34b59a64959280d9195eb6f163a6)
- set default volume to 100% instead of 25% [`8a4f7cf2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a4f7cf2eba993436cb610ac4a5b6f68cdb0cf0e)
- prevent grid aligning while jumping, which broke jumping for some old quests [`2d8a18875`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d8a188758c5b6676537c893a00378adf6b71a46)

### Editor

- transparent tiles not drawing correctly in map preview [`80f94a9ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80f94a9ea39b7aa671c93d95e9be273f7f2ca8b7)

### ZScript

- fix paldata->CopyCSet() referencing the wrong pointer [`2a305c182`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a305c1823de27e830b914a10f7659eb3522633c)

# Build

- upgrade to latest asmjit [`65ae72c6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65ae72c6de7770f86ae93504514c66bdf02f11d5)
   &nbsp;
   >Resolves MSVC release mode bug: https://github.com/asmjit/asmjit/issues/427 
   >

# Misc.

### Editor

- upgrade combo 'advanced paste' dialog, add 'Adv. Paste' to rclick menu [`7ac1da426`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ac1da4262e2d18b32f50d2a6e6f4c646fee7af6)

