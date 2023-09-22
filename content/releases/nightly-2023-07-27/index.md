---
title: Nightly 2023-07-27
description: 
date: 2023-07-27T05:43:12Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-27/nightly-2023-07-27-linux.tar.gz
    name: nightly-2023-07-27-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-27/nightly-2023-07-27-mac.dmg
    name: nightly-2023-07-27-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-27/nightly-2023-07-27-windows-x64.zip
    name: nightly-2023-07-27-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-27/nightly-2023-07-27-windows-x86.zip
    name: nightly-2023-07-27-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 113773462
tag_name: nightly-2023-07-27
tags:
  - releases
---

# Bug Fixes

- ZQ doesn't lock up if parser crashes [windows only] [`51eaa167d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51eaa167d8d517b7d9cc6f4c32c9ee101c529b42)

### ZScript

- screen script run function arguments [`52b34fb60`](https://github.com/ArmageddonGames/ZQuestClassic/commit/52b34fb608d2e40646fbc64bf6629a2bf340aa2d)
- shutdown jit thread pool before resetting scripts [`bb213c146`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bb213c146a4040ee227358e0867060ee2f0ebd3f)
   &nbsp;
   >This prevents a segfault when a thread is compiling some old script
   >after a new quest has loaded.
- Broken labels and stack size in global init scripts [`1a0707e41`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1a0707e415a4e37e682bc8e24f2caf8260b4a96d)

# Chores

- add include [`7dbcfc0fd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7dbcfc0fd647ab798fc4f4906db5bdb75b441217)
- try fix linux compile [`123e7a21c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/123e7a21cd4754a38aab83a0bc47c50a8d4af0ae)

# Refactors

- move Hotkey struct to 'hotkey.h'/'hotkey.cpp' [`629fd8d9f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/629fd8d9fa7ccd1c6d16c56f7f234ce974e948bd)
- move dmap struct/flags to 'dmap.h', various constants to 'sizes.h' [`ab539b694`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ab539b69492a889cc4af02b71473e86a7bca07ad)
- move packfile-related functions to 'packfile.h' [`3387b9ea8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3387b9ea8daf5865d378a06b8c63889500d47d2f)
- move combo pool/alias data to 'cpool.h'/'cpool.cpp' [`65cd926a2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/65cd926a2db9441a40bcfcbd3e1204246788024e)
- move font enum to 'fonts.h' [`436d3f270`](https://github.com/ArmageddonGames/ZQuestClassic/commit/436d3f270f076cce443b9e995dcb3c9a66f8e2b9)
- move MsgStr stuff to 'msgstr.h'/'msgstr.cpp' [`4007bb471`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4007bb4714624d4a41706ed59dff5aadf0603658)
- move newcombo stuff to 'combo.h'/'combo.cpp' [`2c3fe05c7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2c3fe05c762983aa28f59406a4cdc1fa79d3be40)
- move combo 'advanced paste' to 'combo.cpp', use enum flags, rename 'sizes.h' to 'general.h' [`a4afbd4a3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a4afbd4a38de2b8cedf5e4603972a5846bf55cb1)
- move triggerflags to combo.h [`e37432d49`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e37432d498ced99747897a0ddb5a09ff64d299ce)
- move misc data stuff to 'misctypes.h'/'misctypes.cpp' [`abac74960`](https://github.com/ArmageddonGames/ZQuestClassic/commit/abac749605e7f9594106a4ba54841f78040fadc4)
- only use 'QMisc' as a single global 'miscQdata' for all programs [`03522af1b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/03522af1b076627126db92beb1ec418faeb9af3a)
- remove keepdata boolean from packfile reading [`ef3faef68`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef3faef68624584eab39574021b97ec16a925653)

### Player

- do not recreate script_data when resetting [`4bbe968da`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4bbe968daa285d0693b2501a15f62de3f1b307ec)

# Tests

- update expected zasm, changed by 52b34 [`62de6e7d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/62de6e7d32a40125f7023c0b72ef6db50fa13a43)
- print backtrace on crash [`92d6b3237`](https://github.com/ArmageddonGames/ZQuestClassic/commit/92d6b3237c6f628e0d04cab3a13efb6465f67cda)
   &nbsp;
   >Every Python test and invocation of our programs in CI is now called
   >via `run_target.py`, which will attempt to print a backtrace if the
   >program crashes.
- fix sharding for replays with sub-second durations [`e12e09605`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e12e0960529c8d77599c907b7437431177477766)

# CI

- enable jit_threads [`86d162ea5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/86d162ea5188886094afedd97090fddb3a02158e)
- limit yuurand.zplay for coverage because of rng desync [`8f12f54c4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8f12f54c4ce30c9c826f8da1e39e1043bc60459f)
- fix previous commit 8f12f54 [`54c1b9c2b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/54c1b9c2b73155823190d1385c102162ec558b45)

# Misc.

- remove commit body after "end changelog" [`a30bbd8aa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a30bbd8aa6f5535d488aca5b9461956022cd7dad)
- add sentry tags for qst/screen [`14e9d8791`](https://github.com/ArmageddonGames/ZQuestClassic/commit/14e9d8791b1e4400f349aaa0d9c06add6b2c4a9b)
