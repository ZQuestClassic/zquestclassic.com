---
title: 3.0 Prerelease 95 2025-03-25
description: 
date: 2025-03-25T01:01:01Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.95%2B2025-03-25/3.0.0-prerelease.95%2B2025-03-25-linux.tar.gz
    name: 3.0.0-prerelease.95+2025-03-25-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.95%2B2025-03-25/3.0.0-prerelease.95%2B2025-03-25-mac.dmg
    name: 3.0.0-prerelease.95+2025-03-25-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.95%2B2025-03-25/3.0.0-prerelease.95%2B2025-03-25-windows-x64.zip
    name: 3.0.0-prerelease.95+2025-03-25-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.95%2B2025-03-25/3.0.0-prerelease.95%2B2025-03-25-windows-x86.zip
    name: 3.0.0-prerelease.95+2025-03-25-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 208033028
tag_name: '3.0.0-prerelease.95+2025-03-25'
channel: '3'
tags:
  - releases
---




# Features

### Player

- show bottom 8 pixels by default for most quests made prior to 2.55.9 [`86b88dff9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86b88dff9c410348fc888a312d68745bda857b2e)

### ZScript

- add `ComboAdjust` for getting combo position offset by some pixels [`39b64e053`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39b64e053404cf383e4417ba560fab7d2143d7db)

# Bug Fixes

### Player

- set correct value for default bottom 8 pixels on first load [`898d60ceb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/898d60ceb795cba2cd5a2a6126059fa7116ff84f)
- apply switch state when checking bordering screens [`3967f0ebf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3967f0ebfc80c010c5df8b2bd11368ba672e97a1)
   &nbsp;
   >For example, the smart scrolling feature which prevents scrolling when detecting solid combos on the next screen was not considering the state of level or global switches. 
   >
- consider non-active screens in xstatecombos/xdoors [`8dc3f5e7c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8dc3f5e7c0756326f8c93c7332f1c8155d21e2ff)
   &nbsp;
   >Regressed in 3967f0eb 
   >
- check world bounds in checksoliddamage [`3050151e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3050151e082f159acb0c5adf5c07ec03eacc850c)

### ZScript Standard Library (std.zh)

- `AdjacentCombo` now returns -1 for invalid combo position [`c6173806f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6173806fb830551c45e44989c7c1c59c9bf9687)

### ZScript

- doc comments not working for annotated enums [`a9ce98256`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9ce98256b29b1e2c2b5308539d82c95b4100b06)

### ZLauncher

- use correct config key for Show Bottom 8px [`fa74b0adc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa74b0adc22f6176f2306688b3db4e3c42b589a4)

# Documentation

- remove old line about bottom 8 pixels in z3 user guide [`670a187cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/670a187cf32cc9345b042f20f5a3523c0b157f40)
- add comments for `EnemyPattern` [`ea4676473`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea4676473ed2655736d8a47fe6ef24a058b0a695)
- minor tweak to intro of mapdata [`3b85e2420`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b85e24205e2589ce3a72fe28450ada2e27c0809)

# Refactors

- move hash function to zquestheader [`b076602c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b076602c480c96f6168829cfd70e82362510c3b1)

# Tests

- fix accidental regression of auto_viewport.zplay in c61738 [`a2c0be4f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2c0be4f7508c25bae43722a91081c8a9427e652)

# Misc.

- add changelog entry re: bottom 8 pixels [`64d9b1f8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/64d9b1f8bca1d649104e7a5e71fe959728ff1588)
- add 2.55.9 changelog [`9dfd04a55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9dfd04a559b316734ef871c88e18739d9a2b2b88)
- add %zs for zscript to archives/bisect command parser [`c38083ab7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c38083ab7206dde18dac0a2a49f1867078987b08)
