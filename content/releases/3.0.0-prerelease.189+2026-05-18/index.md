---
title: 3.0 Prerelease 189 2026-05-18
description: 
date: 2026-05-19T06:23:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.189%2B2026-05-18/3.0.0-prerelease.189%2B2026-05-18-linux.tar.gz
    name: 3.0.0-prerelease.189+2026-05-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.189%2B2026-05-18/3.0.0-prerelease.189%2B2026-05-18-mac.dmg
    name: 3.0.0-prerelease.189+2026-05-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.189%2B2026-05-18/3.0.0-prerelease.189%2B2026-05-18-windows-x64.zip
    name: 3.0.0-prerelease.189+2026-05-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.189%2B2026-05-18/3.0.0-prerelease.189%2B2026-05-18-windows-x86.zip
    name: 3.0.0-prerelease.189+2026-05-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 324782123
tag_name: '3.0.0-prerelease.189+2026-05-18'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- Show combo label on favorite combo tooltip [`48079312a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48079312a45a2628e4866f9447961028f11fb683)

### ZScript

- `Hero->TempStepBoost` [`6f673c01e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f673c01ed87fdcbc03ae4c5efd3402456378e48)
   &nbsp;
   >An additive boost to the Hero's step speed, which resets every frame. 
   >
- `->DrawMiniTile()` [`f3f39a23d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3f39a23dd370c3c8cd2074539cd6a109de0964f)
   &nbsp;
   >Allows drawing a quarter-tile directly to the screen or a bitmap. 
   >
- Add `Hero->RespawnDMapScreen` [`08a84e777`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08a84e777b0a15eb6116cb0a553ee3305a26d84a)
   &nbsp;
   >Same as 'Hero->RespawnScreen', but accounting for DMap offset. 
   >
- `sprite->InvisibleTimer` [`2b1c4fe7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b1c4fe7f3150d0d9489e7f51101b8bd2a61c10e)
   &nbsp;
   >Deprecates 'Hero->Invisible'. Acts as an invisibility timer, allowing setting *any sprite* to be invisible for a specific number of frames. 
   >
- `sprite->NoCollisionTimer` [`95d1df53e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95d1df53e32dbdf821d4fca8afd3c906e0503ccd)
   &nbsp;
   >Replaces ->CollDetection, acts similar to existing timer variables. 
   >

# Bug Fixes

### Player

- Resolve performance regression in trig_trigger_groups [`60e417fa3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60e417fa3ba0bc4b4d64b482c7135c82026e07fa)
   &nbsp;
   >Recently regressed in 9d742ea.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1506121429874376704 
   >

### ZScript

- Prevent DMap and hero scripts running twice on init [`7d7fcf524`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d7fcf52463d5174eeb24535d77ec2ef155b01c5)
   &nbsp;
   >The first frame of these scripts were incorrectly running twice. The exact behavior depended on whether these QRs are enabled:  
   >
   >- "Scripts Draw During Warps"
   >- "Passive Subscreen Script runs during wipes/refills"
   >
   >
   >&nbsp;
   >
   >This bug only occurred if one of these QRs was enabled.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1494501078564339911 
   >

# Tests

- Optimize snapshot updating script [`ef6c0c996`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef6c0c9968ed50ed2801a8dd28b5bf10e7f87ace)

# Misc.

### Editor

- Remove darkness dithered corner by default [`e4f195016`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4f19501618e368049d9ace81a5815ab4c7dfc58)
   &nbsp;
   >Etc->Options->Toggles->Show Darkness Corner Dither toggles this Darkness now shows a line in Screen Info, to less obtrusively indicate dark screens. 
   >
