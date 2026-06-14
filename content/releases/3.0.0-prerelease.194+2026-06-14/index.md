---
title: 3.0 Prerelease 194 2026-06-14
description: 
date: 2026-06-14T19:00:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.194%2B2026-06-14/3.0.0-prerelease.194%2B2026-06-14-linux.tar.gz
    name: 3.0.0-prerelease.194+2026-06-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.194%2B2026-06-14/3.0.0-prerelease.194%2B2026-06-14-mac.dmg
    name: 3.0.0-prerelease.194+2026-06-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.194%2B2026-06-14/3.0.0-prerelease.194%2B2026-06-14-windows-x64.zip
    name: 3.0.0-prerelease.194+2026-06-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.194%2B2026-06-14/3.0.0-prerelease.194%2B2026-06-14-windows-x86.zip
    name: 3.0.0-prerelease.194+2026-06-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 339240812
tag_name: '3.0.0-prerelease.194+2026-06-14'
channel: '3'
tags:
  - releases
---


# Features

- Per-position states [`3643d5c261`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3643d5c2619e08b457c0540297a1a2333b06373c)
   &nbsp;
   >This allows specific combo positions to remember change between screen transitions. Each combo position and each ffc gets 8 states (0-7). The memory usage of this feature may add up if used excessively. 
   >
- FFC Flag for solidity based on the combo being solid or not [`d460b968dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d460b968dd4833de21fb8d627ab85286a5d5c5c6)
   &nbsp;
   >The whole ffc will be either solid or not, based on if the combo has at least some soldiity. Useful for FFCs changing via triggers. 
   >

### ZScript

- `itemsprite->PickupExState` + `npc->DeathExState` [`6584696e49`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6584696e4982d2f05ba58f65f437731e9b0bfdc0)
   &nbsp;
   >These features already existed for combo trigger use, now they have script access as well; setting an exstate when an item is collected or an npc dies. 
   >
- Open debugger window in background [`51d15daeb8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51d15daeb810e7dc6f5db378137c72acef0b70dd)

# Bug Fixes

### Player

- Fix ePatra firing too early when ENEMY_FLAG7 is set [`5e458ccbf7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e458ccbf75f1dd0f35a32243dc50010e5a2b937)
   &nbsp;
   >When the "don't fire while looping" flag was set, ePatra could still fire in certain attack modes (dmisc20==4 and default) regardless of whether it was mid-loop. Now all modes correctly wait until the loop finishes before allowing fire. 
   >
- Absolute combo/cset trigger change not working for combo/cset 0 [`ecc6406c03`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ecc6406c03e98f99b0ce6e96c2cb747963ea5eed)
   &nbsp;
   >0 was being wrongly ignored as an empty value, rather than being used directly to mean combo 0 / CSet 0. 
   >
- Set proper screen's item-related states in regions [`716f1a466b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/716f1a466b79d4ca2c48b552064a721a86527038)
   &nbsp;
   >If an item was moved to a different screen than it spawned in, the new screen's states were being set instead of the spawn screen, but only when picking up an item by hitting it with a melee weapon!  
   >
   >Now it properly sets for the spawn screen of the item in all cases. 
   >
- Item sounds sometimes being wrongly killed [`00df15948b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00df15948b847c0dcbfa4042d4fde32a249e2bf6)
   &nbsp;
   >The hookshot resetting code was killing the sound of the currently in-use item, without regard for if that item was a hookshot or not. 
   >
- Exstate reset carryover checking wrong state [`a802934d93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a802934d93bae74b3e0059aa622681dfa6156f15)
   &nbsp;
   >same error as fixed in 57b2514 but for unsetting the state 
   >

### Editor

- Crash on Show Misalignments [`a4c9cb8848`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4c9cb88481063c0e8107ac3f889310ca5c6d0b2)
- Water/shallow water combo wizard not setting levels properly [`c50251cf98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c50251cf981f6e253b4a6d9a3ae38e0d99af635d)
   &nbsp;
   >If you didn't edit the `Req Item Level`/`Flippers Level` fields, they would stay at value 0, despite showing as value 1 in the GUI. For req item level, this could completely disable the passive hp mod. 
   >
- Don't show confirmation on exit in new quest wizard [`a94d6a7f64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a94d6a7f64b5c623afa786ece7b781b755645f8a)

### ZScript

- Reset scripting engine earlier in init_game [`ca5c19f68b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca5c19f68b4a566c6b7fb1c23e2b9c59ea89af26)
   &nbsp;
   >This prevents strange error messages about unknown script objects when retrying via the F6 menu.  
   >
   >Regressed recently in 48df2ca. 
   >

# Build

- Resolve -Wlogical-op-parentheses [`7d2396bc26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d2396bc26e73782fc2dc1b5e5da66ae5b683741)
   &nbsp;
   >Add explicit parentheses around all && sub-expressions inside || to clarify precedence without changing logic, in Scope.cpp, sprite.cpp, guys.cpp, hero.cpp, maps.cpp, saves.cpp, weapons.cpp, and zc_sprite.cpp. 
   >
- Enable many compiler errors [`a73e6d203b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a73e6d203b64432e8f35e6a6aa50eb87340e5536)
- Delete unused variables [`42eb3b68dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42eb3b68dd36ab458865cc64434bfcbedc303cbd)
- Fix building without SSL [`218cc6be3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/218cc6be3dddc25d9b75ca55b7a2d8443105bf39)

# Tests

- Add replay to test positional-state and combo-based ffc solidity [`3fb2a3cd8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fb2a3cd8d990a8fe5dc0184423d263b52a3cd11)
