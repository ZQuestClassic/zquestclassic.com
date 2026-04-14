---
title: 3.0 Prerelease 172 2026-04-14
description: 
date: 2026-04-14T03:43:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.172%2B2026-04-14/3.0.0-prerelease.172%2B2026-04-14-linux.tar.gz
    name: 3.0.0-prerelease.172+2026-04-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.172%2B2026-04-14/3.0.0-prerelease.172%2B2026-04-14-mac.dmg
    name: 3.0.0-prerelease.172+2026-04-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.172%2B2026-04-14/3.0.0-prerelease.172%2B2026-04-14-windows-x64.zip
    name: 3.0.0-prerelease.172+2026-04-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.172%2B2026-04-14/3.0.0-prerelease.172%2B2026-04-14-windows-x86.zip
    name: 3.0.0-prerelease.172+2026-04-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 308661224
tag_name: '3.0.0-prerelease.172+2026-04-14'
channel: '3'
tags:
  - releases
---


# Features

### Player

- Gzip compress uploaded replays [`f62d6f923`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f62d6f9231a1f44ae19eb240454bf48e2b02fbb1)

### Editor

- Use 'backups.*' for backup folder on windows [`4c455c935`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c455c935a8241e9c7dd6bd44a14d57c1c034d64)

# Bug Fixes

### Player

- Prevent string getting cut off in extended height mode [`076fb0d2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/076fb0d2c8bd4acd9c7c2fdd2a22211653505227)
- Prevent crash when combos trigger [`bbf9ecb0c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbf9ecb0cb58d9c241f05da86e3d3ac529cbc8bf)
   &nbsp;
   >Regressed in 2.55.13. 
   >

### Editor

- Prevent screen palette truncating to byte (0xFF) [`ab607a9fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab607a9fe2f61a79fcbcc75d17d6e9d2034256b6)
- Create backup folder correctly on windows [`ef5729312`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef572931248cf0eeb5950bec323ef56db3673fe4)

### ZScript

- Add some missing registers to get_register_ref_dependency [`24ab9ff34`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24ab9ff348916e051fca0bab1455634133ec087c)

# Refactors

### Player

- Turn off replay_debug by default [`8629e181d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8629e181d7708699b3227d97171f98f620313c80)
   &nbsp;
   >This makes replay files significantly smaller by disabling debug mode, which stores a hash for every graphics frame in the replay file. This is no longer needed for replays recorded by players so it's time to disable it. 
   >

### ZScript

- Use LUT for scripting_engine_get_register/set_register [`32dede9d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32dede9d77dbcef7e9ec4925faa679d6d7adbebc)
- Split-up get_register and set_register [`d7523f4f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7523f4f81688f4dd8167f61e559543944b7e8e2)
- Simplify much of the register get/set code [`a341cc6eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a341cc6eb6f7f258faeb90bdac675b7b9ecbb54a)
