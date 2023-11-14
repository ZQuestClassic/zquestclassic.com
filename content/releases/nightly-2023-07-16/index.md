---
title: Nightly 2023-07-16
description: 
date: 2023-07-16T02:54:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-16/nightly-2023-07-16-linux.tar.gz
    name: nightly-2023-07-16-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-16/nightly-2023-07-16-mac.dmg
    name: nightly-2023-07-16-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-16/nightly-2023-07-16-windows-x64.zip
    name: nightly-2023-07-16-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-16/nightly-2023-07-16-windows-x86.zip
    name: nightly-2023-07-16-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 112399000
tag_name: 'nightly-2023-07-16'
channel: '2.55'
tags:
  - releases
---

# Features

- Add general SFX/Sprites to combos (no zscript access yet) [`4d55a2a74`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4d55a2a7497fe9e1e532b7bd83d7f922e92f7c7e)

### Editor

- save autolayer info to reapply to blue void screens as a default [`d955ace97`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d955ace97325238c9076d7525aa80fe9b63b5b01)

### ZScript

- jit compile MULTV [`02cb588d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/02cb588d37c1a42189a2c4160fd7399147b005a1)

# Bug Fixes

### Player

- various newer hero movement [`9762141db`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9762141dbe1bd7461b5dee03a627f290c6ed322a)
- new respawn points with ladder [`5641cf8c1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5641cf8c1a9e76ed8fca68e7189f71c5efd20e1e)

### Editor

- some pasting/blue void screen related issues [`cf1dfbbc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cf1dfbbc3981304550a7ff84338117cad9a80cf6)
- blue void issues related to F4 (screen palette) dialog [`33ee353c3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/33ee353c36a1d9a5b8823b1163af7feb55e002a5)

### ZScript

- compile crash [`3cadfecb3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3cadfecb3b9c7ab9a031980c49bc641be99570db)
- several class related bugs [`9024587f5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9024587f54a2543417522d471cb2ec00623fc432)

# Build

- fix compiling zcbase for msvc debug [`84ef4d15e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/84ef4d15e2059f26ab93cd8f6b462d7304a9503f)

# Refactors

- actually skip reading qst sections when requested [`142485948`](https://github.com/ArmageddonGames/ZQuestClassic/commit/142485948a4517f8b978f6839a245e2f1bb18538)
```
  Only the tile importer for qst files uses the feature of skipping sections when loading a qst file.
  This would still read and process every section, it just wouldn't persist anything. So it wasn't
  really any quicker.  This paves the way for removing `keepdata` from all of our loading code.
```

# Tests

- fix argument passing to run_replay_tests.py [`e6ea4e1a9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e6ea4e1a92fce6cc70c2b3f291a75535ef0792e8)
- update expected zasm, changed by 8402c4 [`39f685f44`](https://github.com/ArmageddonGames/ZQuestClassic/commit/39f685f4456e6dca7e9c7cb921c03835e2604c35)

# Misc.

- add changelog overrides [`3991c9e31`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3991c9e3151e7d2f9ced71f4aa561fa7f36693f9)

### ZScript

- add missing asm debug for first uncompiled command [`c19830c04`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c19830c04f8037c33fb3ca6c3d6aad58c57b0f7d)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-15...nightly-2023-07-16
