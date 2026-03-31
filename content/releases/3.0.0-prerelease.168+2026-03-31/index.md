---
title: 3.0 Prerelease 168 2026-03-31
description: 
date: 2026-03-31T05:40:07Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.168%2B2026-03-31/3.0.0-prerelease.168%2B2026-03-31-linux.tar.gz
    name: 3.0.0-prerelease.168+2026-03-31-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.168%2B2026-03-31/3.0.0-prerelease.168%2B2026-03-31-mac.dmg
    name: 3.0.0-prerelease.168+2026-03-31-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.168%2B2026-03-31/3.0.0-prerelease.168%2B2026-03-31-windows-x64.zip
    name: 3.0.0-prerelease.168+2026-03-31-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.168%2B2026-03-31/3.0.0-prerelease.168%2B2026-03-31-windows-x86.zip
    name: 3.0.0-prerelease.168+2026-03-31-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 303561272
tag_name: '3.0.0-prerelease.168+2026-03-31'
channel: '3'
tags:
  - releases
---


# Features

### ZScript

- Add `FileSystem->LoadFile`, document "mode" [`11a3b8e3f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11a3b8e3f177cf2dba2333082b4bc66c791e3193)

# Bug Fixes

- [mac] prevent crash from deeply nested dialogs [`10e215978`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10e215978f085c0a60a6055ed7c3f0ae230d05c9)
- Prevent crash from listers using too much memory [`853a67481`](https://github.com/ZQuestClassic/ZQuestClassic/commit/853a6748107a4c1817bc1e4456db8456ee0fa953)

### Player

- Item cooldowns instantly ticking down to 0 [`7767474e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7767474e96c8fea5eb557b265240b79b37636ec4)

### ZScript

- Prevent random crash when compiling `repeat` [`6aa9a87a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6aa9a87a3e3b395da65f0cb864cd49b0dba56236)
   &nbsp;
   >Regressed in 17ae5ad31f. 
   >
- Log error if file fails to open [`15c711a2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15c711a2cfcc4fd7286c0e422e50ce2e783137bb)
- Prevent compiler crash when parsing long decimals [`ab1287351`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab128735140decc4e634aef7fd0732c9fd837bbc)
   &nbsp;
   >In some places, the compiler would crash if parsing a number with more than 4 decimal positions. 
   >
- Prevent potential crash from modifying prvalue [`8f7241dc0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f7241dc0c8b62f531d1c00b6d75aa26aac32c4a)
- Use CMP_SETI in caseExprOr [`f0b4d7791`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0b4d77914383b7229af81228be567efa506bd78)

### Web

- Simplify touch controls. prevent vibration on touch [`b14123bbe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b14123bbee49cbaf31c162a36f974b2be5ffbf2b)
- Correctly open the file dialog [`f5fdb22ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5fdb22ffb91a8a2a810fd016c138fba5b861ff7)
- Use data.zquestclassic.com [`9c596b3f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c596b3f77bd205c9855238a2c2982532f438d36)
- Prevent title screen flashing before/after quick-open [`a9f5d7d85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9f5d7d852e3d3e85340d598e8d8e5ce9a17f358)
- Use data.zquestclassic.com in network hints [`4090ea2d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4090ea2d9dca51b80c23102a315b1a3cbe968763)
- Editor not loading on most mobile devices [`6dfe5ec9f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6dfe5ec9ff8983fc704c1b897f82629b05b46bed)

# Chores

- Update replay_uploads_known_good_replays.json [`162860fe1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/162860fe1b534c3fafff35ed3182e7f685ca2cb1)

# Refactors

- Create display window in consistent manner for every app [`ec4f1e097`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec4f1e097348bdc6f51c540ad7f9a72c9c11df38)

### ZScript

- Remove multiple compat compiler settings [`725b3f3a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/725b3f3a339fd6b7a22b98c079aa3ac261f3c581)
   &nbsp;
   >The following compat compiler settings have been removed in order to simplify the compiler. They don't seem to be necessary to support any popular scripts, and sometimes resulted in bugs when users inadvertently had them enabled.  
   >
   >* 2.50 division truncation
   >* 2.50 value for 'true' is 0.0001
   >* Binary operations use true 32-bit int
   >* True MAX_INT sizing (smaller max int sizes no longer supported)
   >* Short-circuit boolean operations (non-short circuiting no longer
   >  supported)
   >

# CI

- Remove web build from release job [`eccc7b5d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eccc7b5d284e25c480909278634d7637cd4cdec2)
   &nbsp;
   >I prefer to manage this manually / locally now. 
   >
- Update gha action action-cached-lfs-checkout [`c66e4e1c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c66e4e1c04f0f72b499f5a97fdf401f5049c6d51)

# Misc.

- Remove scripts/database [`bcc5d2d7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcc5d2d7d7eddb1620c681695e686f7359c0907c)
- Tweak some early logs [`afc88e2e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/afc88e2e590a47c9f0cbe9fd85830df387136471)
