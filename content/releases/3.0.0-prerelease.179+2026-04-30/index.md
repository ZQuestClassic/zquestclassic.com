---
title: 3.0 Prerelease 179 2026-04-30
description: 
date: 2026-04-30T15:00:40Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.179%2B2026-04-30/3.0.0-prerelease.179%2B2026-04-30-linux.tar.gz
    name: 3.0.0-prerelease.179+2026-04-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.179%2B2026-04-30/3.0.0-prerelease.179%2B2026-04-30-mac.dmg
    name: 3.0.0-prerelease.179+2026-04-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.179%2B2026-04-30/3.0.0-prerelease.179%2B2026-04-30-windows-x64.zip
    name: 3.0.0-prerelease.179+2026-04-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.179%2B2026-04-30/3.0.0-prerelease.179%2B2026-04-30-windows-x86.zip
    name: 3.0.0-prerelease.179+2026-04-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 316199454
tag_name: '3.0.0-prerelease.179+2026-04-30'
channel: '3'
tags:
  - releases
---


# Features

- Weapons can ride conveyors (new flag) [`d4e81a410`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4e81a410fa348615c5f3df8830509dc7cd03a03)
   &nbsp;
   >Weapons will move along conveyors similarly to items. 'Stunned While Moving' conveyors will zero the step speed of weapons. 
   >
- Add copy-to-clipboard button to window title bar [`4cce0baab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4cce0baab4ad6cddbeb0f89af9cd7e39eb113129)

# Bug Fixes

- Render depressed button in window title bar on mouse down [`9724ffbd6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9724ffbd64791be96618fc871a9a22d7e0679cba)

### Player

- Conveyor "Affects Sprites In Air" not applying to items [`a420b0fc7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a420b0fc7854393ac28cb51529f55e59c56e477e)
- Fix item-conveyor hitboxes and solid sideview conveyors [`ce0e2a9dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce0e2a9ddf07c31d8ef4f5756da842505778ca3a)
- Walk-through-walls cheat now makes player immune to conveyors [`f3114fd01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3114fd01d980b7e45ca5176658a6c1311048431)
- Items using hardcoded hitbox for landing on the ground in sideview [`294f11981`](https://github.com/ZQuestClassic/ZQuestClassic/commit/294f11981a0e501e270cda76f2909b28f06c3659)
- Items that don't obey gravity still counting as on the ground for conveyors [`97cda6df9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97cda6df94cf4a14fb2706e718b4896b1f5bcb1f)
- Weapons using hardcoded hitbox for landing on the ground in sideview [`81f2a996f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81f2a996f8036a4949bcc74c42548c0a97cb6b3c)

### ZScript

- `Region->OriginScreenIndex` being `long` instead of `int` [`44b0af48f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44b0af48f2992a0bb126585017ac6753760dc8f3)

# Build

- Add third_party/update_dependency.py [`95e366365`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95e36636591850202473afeacecce03aa6c299f2)
- Vendor nlohmann/json [`bb0ff5761`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb0ff5761c782f12b48081d9c9cdb9bdacdc251e)
- Vendor libvorbis and libogg [`16aac4601`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16aac4601e0ba57bcb99407fcf9c61e45f43aa08)

# Refactors

- InfoDialog construction [`0ea9ecc39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ea9ecc390c87cc8701eba19eebb096b31f5b2eb)

# CI

- Move most logic from .yml to ci.py [`0231327ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0231327ab37efcb169e33eb26621b452b7ba3bba)
- Create website workflow dispatch before sentry finalize [`e8cdac2e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8cdac2e79d150dfb55921ccf68248078b5234ae)

# Fixup

- Platform check move [`86a598375`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86a598375c7adb4d58304a8ee66a620007e8b357)
