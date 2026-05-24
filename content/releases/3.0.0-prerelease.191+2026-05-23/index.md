---
title: 3.0 Prerelease 191 2026-05-23
description: 
date: 2026-05-24T01:02:44Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.191%2B2026-05-23/3.0.0-prerelease.191%2B2026-05-23-linux.tar.gz
    name: 3.0.0-prerelease.191+2026-05-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.191%2B2026-05-23/3.0.0-prerelease.191%2B2026-05-23-mac.dmg
    name: 3.0.0-prerelease.191+2026-05-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.191%2B2026-05-23/3.0.0-prerelease.191%2B2026-05-23-windows-x64.zip
    name: 3.0.0-prerelease.191+2026-05-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.191%2B2026-05-23/3.0.0-prerelease.191%2B2026-05-23-windows-x86.zip
    name: 3.0.0-prerelease.191+2026-05-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 328432219
tag_name: '3.0.0-prerelease.191+2026-05-23'
channel: '3'
tags:
  - releases
---


# Features

### Player

- Mark each frame for OSX profiler [`6361fdb977`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6361fdb97708dd42cbbe2c0f7cc6dea2f9d9949a)
- Improve map view screen state and trigger handling [`d42ecd9653`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d42ecd9653e232a21cc0a2f94864b140156e7167)
   &nbsp;
   >- The map view now correctly applies all screen state changes, including
   >  switches and screen load triggers.
   >- Added new trigger conditions: "Map View Only" and "Map View Never",
   >  allowing triggers to run exclusively in the map view or be excluded
   >  from it.
   >
   >
   >&nbsp;
   >
   > Discord: https://discord.com/channels/876899628556091432/1503679477572571146 
   >

# Bug Fixes

### Player

- Enemy bombs disappearing due to negative fuse timer [`4f1aca1bcc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f1aca1bcc045e3246dd317d23e1d82ff09b2f2e)
- Bombs not resetting Timeout when exploding [`3ff41cb594`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ff41cb594caeac683f540b655f351deb08841c0)
   &nbsp;
   >Timeout is meant to function as an alternate fuse for these, but if it explodes before the timeout runs out, the timeout was leaking over to the explosion and killing it mid-boom. 
   >
- Heart Container / Magic Container cheats using outdated values [`a6d3ae9701`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6d3ae9701173dd3b046d381832735539d54939e)
   &nbsp;
   >These cheats have you pick a new max value, and then a new current value. The new current value was using the OLD max value as the highest usable value, due to the max value change being enqueued for replays. 
   >
- Recent added water/pit attributes conflicting [`68fafa3e09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68fafa3e099a5d6f1fda73ff9cf3a8ce6b235472)
   &nbsp;
   >The water hp mod was using the same attribute, so the new inv/stun timer attributes have been moved to different attribute numbers 
   >
- Add misc replay version checks for ToN [`da97aa2992`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da97aa299235e7e779660f829f1d52c4d377815d)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1494510219126898739 
   >
- Stop Goriya boomerang sfx looping forever when offscreen [`dc15341607`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc1534160792d2a3343b89daa363373fb264e1ca)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1497612937714471084 
   >

### ZScript

- Prevent potential JIT error for PUSHARGSR [`6d5741e74e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d5741e74ea5fe730eef901d920a9f1eec34642a)
- Add `@versionadded 3.0` to `->ComboData` [`8649bdaba0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8649bdaba006424642aa9632aaab3410a78fab7f)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1507703095021277184 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`e61924f3c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e61924f3c808c7f0df040d91d3b15d5dfb1c5655)

# Refactors

- Greatly speed up refresh_rgb_tables using last key cache [`6f5498d4f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f5498d4f4e75fa351fdd1b83235a2df597294c6)
   &nbsp;
   >This greatly speeds up the program within fade effects. For terror_of_necromancy_demo6_32_of_54.zplay it reduced the total CPU time being spent in `refresh_rgb_tables` from 60% to 0.3%.  
   >
   > Discord: https://discord.com/channels/876899628556091432/1507587209308409996 
   >

### Player

- Greatly speed up dithercircfill [`b8a56512ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8a56512ae6f2a38fd512de120318254b52e53be)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1498203179395842058 
   >
- Greatly speed up _c_item_id_internal [`26cc9cd698`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26cc9cd69805671176ca4fd42a5b855b4a9de93f)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1507608992916967464 
   >

# Tests

- Fix some timeout issues with replay tests [`0c8db2954b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c8db2954b76c52cda708fc995ea1b56436f3b84)
- Add failed replay ZC version as compare report option [`f85b4cdb3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f85b4cdb3e2a5ae470acb3675fa8472e29b3b579)
- Add terror_of_necromancy_demo6.qst replays [`6ba5e9d277`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ba5e9d277c0eb52743087f4fb33458cdb123c60)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1494510219126898739 
   >
- Only print last 50 lines of files on replay failure [`4392a48577`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4392a48577af62c377a1116b44c93338f27ef2aa)
- Add rng_desync to test_results.json [`41a221191d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41a221191db27b303cffdec9fcd2122c28b96a70)
- Add test_replay_harness.py [`2951d9229d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2951d9229d3e76f0263e1c433e21e8b5f49cdfde)
- Use correct tmp dir for test_ci.py [`892903393c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/892903393c5b72fcbfd824b1add293d017dbd621)

# Misc.

- Ensure uploaded replays run in debug mode [`959fd983ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/959fd983ab85da730683a0c57ce0518a81f2f5c1)
- Fix docs.zquestclassic.com not resolving URLs ending with slash [`52e8303f2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52e8303f2e299da1b6dbc8e55c7ca15d0015ee73)
