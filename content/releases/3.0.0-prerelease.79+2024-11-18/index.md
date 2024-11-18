---
title: 3.0 Prerelease 79 2024-11-18
description: 
date: 2024-11-18T01:40:33Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.79%2B2024-11-18/3.0.0-prerelease.79%2B2024-11-18-linux.tar.gz
    name: 3.0.0-prerelease.79+2024-11-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.79%2B2024-11-18/3.0.0-prerelease.79%2B2024-11-18-mac.dmg
    name: 3.0.0-prerelease.79+2024-11-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.79%2B2024-11-18/3.0.0-prerelease.79%2B2024-11-18-windows-x64.zip
    name: 3.0.0-prerelease.79+2024-11-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.79%2B2024-11-18/3.0.0-prerelease.79%2B2024-11-18-windows-x86.zip
    name: 3.0.0-prerelease.79+2024-11-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 185856530
tag_name: '3.0.0-prerelease.79+2024-11-18'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- add `RepairShield` function to npc [`ef15f9019`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef15f9019c35b143aef20a9756948949de008709)
- support setting `Hero->ScriptTile` to draw larger than 1x1 [`7b8530979`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b8530979b033b2721576e56794569e7164311b8)
   &nbsp;
   >Internally, the Hero sprite resets its `Extend` property every frame, which prevented using `ScriptTile` in combination with `TileWidth` and `TileHeight`. Now, `Extend` is only reset if `ScriptTile` is not in use. 
   >

# Bug Fixes

- correctly identify version from older quests [`eddb3c164`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eddb3c164fb32282d41e85b8461836973cc85b8b)
- correct bad version number used in 2.55 Alpha 86 [`80d5e4935`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80d5e49359db3d1bbe362f8150b1343622ccfd07)

### Player

- remove ladder during warp (#1017) [`77b0da70e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/77b0da70e22e8a08a93233660d9727fd5a74440e)
- when charging duration of Charge Ring is 0, use default time instead (#1023) [`b0e228edb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b0e228edb313d7ffb697db99c8ca9834005078a3)

### Editor

- fix tile protection for darknut, gleeok, ganon, and patra enemies (#1016) [`74e0347de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74e0347de2f9ff73d638a5b2f51e2abb992ab8f0)
- enemy editor defense tab disables when it should, has correct defenses aligned with each label [`aab56590d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aab56590d1eb98857f25c37b8074ddd8e1ea43d6)

### ZScript

- set correct internal variables for `Hero->ScriptFlip`, `Hero->ScriptTile` [`b0b1074a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b0b1074a8ff5e2bdd3ad8e221304cf87222ad05e)
- fix codegen for long integer `^^^` constant 0 [`6ae53cd3f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ae53cd3f74ce570a93b88a0c609e36ccef350c4)
   &nbsp;
   >This was accidentally producing `10000` instead of `1`. 
   >

# Documentation

- add SCC tutorial [`a731f1d2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a731f1d2c05eab96b075d4d3be130fa8ee69677c)
- remove ghost, tango doc sites from release package [`5fd2ed7ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5fd2ed7ce1a0c0b9be02b708a1495f91aa66e0b5)
- remove zasm_registers.txt from release package [`63984595c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/63984595c8ca9f533abedd936f9a624d198d0b9b)

# Build

- move extra resources to resources-extra/ [`52c290d4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52c290d4b65c3784a93eb8af1067ec51b1a8227b)
   &nbsp;
   >Just to make it very clear what is not included in the release package. 
   >

# Refactors

- read weapon names from zinfo, not the deprecated module system (#1022) [`ba5a5045c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba5a5045c193ed85af44cd58f9c064e0e637fd63)
- consistently use "Hero" instead of "Player" to refer to the playable character [`3e3989cdb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e3989cdb558afb8626fdc022492b0b5c1f46e42)

### Editor

- in enemy editor, read defense names from zinfo [`8cde41f2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cde41f2ecec4fc1341550e536425dc01e7d0a25)

### ZScript

- move breakshield to npc.cpp [`38fe06f02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/38fe06f0277ee14e6f156e361595b865b2a9ea62)
- remove unnecessary `Debug->` "typecast" functions [`18c2b4c49`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18c2b4c49e66b0661fab5e1538bf956dece0b22d)
- remove many unused `Game->` functions [`7948da864`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7948da864cd743361ab55ebfdce1e231b20e5410)
   &nbsp;
   >All of the following functions were found to not be used in any published quests or scripts. Since they have all been deprecated (via `Screen->` or `mapadata`), they have been removed.  
   >
   >* `GetScreenEnemy`
   >* `SetScreenEnemy`
   >* `GetScreenDoor`
   >* `SetScreenDoor`
   >* `SetScreenGuy`
   >* `GetScreenGuy`
   >* `SetScreenString`
   >* `GetScreenString`
   >* `SetScreenRoomType`
   >* `GetScreenRoomType`
   >* `SetScreenEntryX`
   >* `GetScreenEntryX`
   >* `SetScreenEntryY`
   >* `GetScreenEntryY`
   >* `SetScreenItem`
   >* `GetScreenItem`
   >* `SetScreenUndercombo`
   >* `GetScreenUndercombo`
   >* `SetScreenUnderCSet`
   >* `GetScreenUnderCSet`
   >* `SetScreenCatchall`
   >* `GetScreenCatchall`
   >* `SetScreenLayerOpacity`
   >* `GetScreenLayerOpacity`
   >* `SetScreenSecretCombo`
   >* `GetScreenSecretCombo`
   >* `SetScreenSecretCSet`
   >* `GetScreenSecretCSet`
   >* `SetScreenSecretFlag`
   >* `GetScreenSecretFlag`
   >* `SetScreenLayerMap`
   >* `GetScreenLayerMap`
   >* `SetScreenLayerScreen`
   >* `GetScreenLayerScreen`
   >* `SetScreenPath`
   >* `GetScreenPath`
   >* `SetScreenWarpReturnX`
   >* `GetScreenWarpReturnX`
   >* `SetScreenWarpReturnY`
   >* `GetScreenWarpReturnY`
   >* `GetScreenEFlags`
   >
- rename player binding class to hero [`4d944b2f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d944b2f4735d3af0d11b1cc1eb5191efe652d72)
- improve placement of errors/warnings on function calls [`9eedc1911`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9eedc191103727733b12cc07b57c17b33aa86696)
   &nbsp;
   >Errors/warnings from using unknown or deprecated functions now attach to the function name, rather than the entire call expression. 
   >
- minor improvement to MetadataVisitor getComment [`b1266bbb0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1266bbb023e30c0c3cea6148bc6743a3f53fb7a)
- remove A registers [`2c8e6a1ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2c8e6a1ecd3e8c10e084aec363e7344b410c6747)
   &nbsp;
   >The "A" registers are two old registers that were never used in any quests. The only way to access them in recent builds has been the FFC `GetFFCInitA` / `SetFFCInitA`, but no published quest has ever used them.  
   >
   >Now the ffc and item editors no longer display these two "A" register fields, and internally many other things handling these registers have been deleted. 
   >

# Tests

- fix run_replay.js not fetching snapshots for replays in subfolders (like playground/) [`a328499ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a328499ae0b25b083e2b90277b99b2d9cc22f833)

# Misc.

- add scripts/check_zasm.py for printing zasm usage numbers [`c5dc714cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5dc714cf43d7d4a4d27e9ba73ac32b65bcc2f50)
- scrape lordcronic.tripod.com for quest database [`4315f4aa2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4315f4aa211ecb27fbcad73ae427bd74b71ff516)

### Editor

- add help text for conveyors about positive/negative values [`a95c14442`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a95c14442f35b67db61c031dd4bea30fdffaf1b4)
