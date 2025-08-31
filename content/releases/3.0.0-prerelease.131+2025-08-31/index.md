---
title: 3.0 Prerelease 131 2025-08-31
description: 
date: 2025-08-31T22:23:12Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.131%2B2025-08-31/3.0.0-prerelease.131%2B2025-08-31-linux.tar.gz
    name: 3.0.0-prerelease.131+2025-08-31-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.131%2B2025-08-31/3.0.0-prerelease.131%2B2025-08-31-mac.dmg
    name: 3.0.0-prerelease.131+2025-08-31-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.131%2B2025-08-31/3.0.0-prerelease.131%2B2025-08-31-windows-x64.zip
    name: 3.0.0-prerelease.131+2025-08-31-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.131%2B2025-08-31/3.0.0-prerelease.131%2B2025-08-31-windows-x86.zip
    name: 3.0.0-prerelease.131+2025-08-31-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 243750346
tag_name: '3.0.0-prerelease.131+2025-08-31'
channel: '3'
tags:
  - releases
---




# Features

- per-screen and per-dmap custom gravity [`e2f856083`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2f856083aae31abd7017fc059579db6bec6d832)
- combo trigger to change screen's gravity [`fbf9b65af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbf9b65af81d5c90d1a25eaa8f56d3cb6abb3e7b)
- qr for armos/grave combos working on layers > 0 [`ffb8b9275`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffb8b92752265743d188f51ef7541c607082fb58)
- expand litems from 8 to 16, add zinfo for litems [`3bc63dabc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bc63dabcfc79d2a888bc56af77fc47103edfb06)
- set LevelStates in Init Data [`4e356be6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e356be6f51fc6c23ea93d3f81c813b9c23b83aa)
- combo flag "Step 'in front' in sideview" [`198768b29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/198768b290d26a350f1e451ee326ad036e9e6bb9)
   &nbsp;
   >Allows 'walking'/'standing'/'landing on' effects to occur when *behind* the player instead of *under* the player in sideview. Useful for, ex., a stream of running water (as background combos behind you) having walking/landing sfx for splashes. 
   >
- add some customizable values related to timeout items [`234085a7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/234085a7da052a32d92a6f2bef1bb0554e4f30ce)
   &nbsp;
   >can customize the timeout duration, flicker duration on spawning, and the speed. can also customize a new feature, the duration it flickers *before disappearing*. 
   >

### Player

- support more functions in zasm optimizer inline pass [`55ea0ff7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55ea0ff7e6e3449c764147a9e90b29dce95fbd09)
- add -frame-timings CLI switch to log expensive frames [`543415d80`](https://github.com/ZQuestClassic/ZQuestClassic/commit/543415d80c97cbe69ba4e07dd056cc6009e2f6a4)

### Editor

- 'default level palette' for each map / 'Quest->Map Settings' [`2aaeb0186`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2aaeb01862f32f525ea0a8f66eba37d5dd6d56f8)
- combo trigger 'Summarize' button [`1c1e78608`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c1e78608bea912e975dfc66bd57f815d97a53cd)
   &nbsp;
   >Describes the details of a combo trigger in a short summary, so you don't need to look through every tab just to figure out what it does. 
   >

# Bug Fixes

- restore map is_valid() to check valid bit [`4aec59d20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4aec59d205c3e6b73da1fff2cea0a6547dd270ca)
   &nbsp;
   >This reverts a185a13c.  
   >
   >Instead, now setting all layer screens to be valid when loaded. See this for more: https://discord.com/channels/876899628556091432/1384237036663476234 
   >
- set NUMVARIABLES to correct value [`4f609d824`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f609d8243715993c501d6eca78c5eb34d503d18)
- 'custom' counter max increases given by starting items will apply properly [`2b1b0b388`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b1b0b3889c39fdf25f35122690e8e2e37074d4f)

### Player

- prevent possible crash in ZCSubscreen::get_item_pos [`4011485c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4011485c23cddd583ee73c888f37023bf52293f8)
- consider implicit register deps in stack optimizer pass [`c7de1a172`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7de1a172f90e988675ab053d2d24f48f344dba3)
- remove unreachable code in compile_conditional [`5b4da01f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b4da01f8f339fa749dade9c55d29bb6dd55f793)
- minor improvement to optimize_load_store to handle unexpected code [`f2efc09f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2efc09f9a1ac3abac66dc27f35c300eba8ac542)
- avoid some bad optimizations in optimize_reduce_comparisons [`65b8b9fe4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65b8b9fe41a27707f514c4488940b5309db9079f)
- use liveness analysis to make optimize_reduce_comparisons safer [`5af70ca33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5af70ca332baeace4b64e6b5588cc6a30132af9f)
- ignore external goto when making zasm cfg for optimizer/wasm [`ffbc1706d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffbc1706d17d49a585741933e9aec4651189ddec)
- issues with sideview "gravity falling" pushblocks [`b300fcd82`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b300fcd8212cafa82a3e4215e578fbfd0689be77)
- walk-through-walls not being respected by "Sometimes scroll over pits/water" fix [`288cfdb6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/288cfdb6db84a861a259ed5baaf28d2ede2fd510)
- some things that were expecting a water combo ID were getting the combo type [`160c7726a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/160c7726abd853686f534cb2fdf55e4a9cb89244)
- save slot 0 always being loaded from title screen [`c11658d7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c11658d7dc4a9ff5ec0672b16adc4d362986385d)

### Editor

- improve test mode screen matching [`238a9eeff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/238a9eeffaffa6ec2c446808d0d0baf7986e44ed)
- prevent test mode from using screens >= 0x80 [`a7532ac6e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7532ac6e6228d7dbe1700eae5bb36614cd5138c)
- nullpo error in editor item anim code [`d786a9128`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d786a91280e358d3942b60dd47b8f84e50027f09)
- re-organize item editor "Pickup" tab to fit better [`92c921404`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92c921404c438d81f50273a0788b68ac03e0ddf6)

### ZScript

- use correct sprite for step in weapon MakeAngular [`f5b3a2d09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5b3a2d09d78050c6791cda0cb07f91ee308bca4)
   &nbsp;
   >The wrong variable was being referenced to access the weapon's step value. Instead of using the weapon, it used whatever was last set to a global `sprite` variable in the scripting engine (which could possibly result in a crash). 
   >
- Game->LevelStates[] and Game->GlobalStates[] actually toggle switches on-screen [`c0df8c0d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0df8c0d900ea1858a342c802fd4b9d4ae7525b3)

# Documentation

- correct docs for `sprite::SpawnScreen` re: Hero [`870e24341`](https://github.com/ZQuestClassic/ZQuestClassic/commit/870e24341f4bc1c85efc9365e9e4a0a5dfdf909f)

# Build

- add npm_install_web target to avoid race condition [`40842a97f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40842a97f4a53cacdcb0449493f10cf88ea85cbb)

# Chores

- rename internal 'walk_through_walls' variable [`3f1cb6058`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f1cb60589f995a669a521b48d1afd7ba41083fa)

# Refactors

- clean up a lot of duplicated code between combos/ffcs related to triggers [`c52b1d6bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c52b1d6bb66a656035fd7e1d4499d0fc6f5e3a34)
- fix typo in shrinkToFitFFCs function name [`4e36323c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e36323c7fed69de54809895d70114bfcc0f253a)
- centralize CheckListInfos to reduce duplication [`40801995b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40801995ba7638a0c24b5044e75eec28bff1109b)

### Player

- move liveness analysis to reusable add_context_liveness [`89ae9f134`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89ae9f13462803856d7272e564aa6a34488a8c76)
- improve how liveness analysis worklist is initialized [`fabaa63d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fabaa63d5dba8f5de4226bfa09502efefd879f10)
- use better data structures for liveness analysis [`a59725006`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5972500679ea21b53e7bf7d56c36b64cdcafc25)
- speed up liveness analysis by caching command metadata [`7ae596a1e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ae596a1efb4780ea9639549d60af660430ff4a5)
- speed up zasm optimizer by register metadata [`1ee9fb304`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1ee9fb3041a0b4489464ea1cabd4ed2623c22286)
- use faster data structures for zasm cfg [`49e208e8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49e208e8dcb2dccd9906f9691f6986aa01bb116b)
- speed up zasm optimizer conseq_additive pass [`aefb65c23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aefb65c2375aa8777b09bd21fb9aa896cded73e6)
- make silly "s" global variable static [`f381fa0a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f381fa0a438fc224ed1ae14ca82e13c17520fda7)
- create WorkerPool, simplify jit parallel compilation [`a3c40ce36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3c40ce363f90d611a3034b55f9d81bc213528b4)

# Tests

- add replay metadata check for script enemy loading bug [`5c3a0deaa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c3a0deaa5342cf987c22e518f4cc6a6fe560213)
- remove accidental test qst file [`5eac243d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5eac243d21659ee7b992422e944100b37164305b)

# Misc.

- add 'Script Bugfix' option (default on) to new file dialog [`24da1b973`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24da1b97309ecaa5b63762acdd00bc2f3b76b6fc)
