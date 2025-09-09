---
title: 3.0 Prerelease 132 2025-09-09
description: 
date: 2025-09-09T03:46:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.132%2B2025-09-09/3.0.0-prerelease.132%2B2025-09-09-linux.tar.gz
    name: 3.0.0-prerelease.132+2025-09-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.132%2B2025-09-09/3.0.0-prerelease.132%2B2025-09-09-mac.dmg
    name: 3.0.0-prerelease.132+2025-09-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.132%2B2025-09-09/3.0.0-prerelease.132%2B2025-09-09-windows-x64.zip
    name: 3.0.0-prerelease.132+2025-09-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.132%2B2025-09-09/3.0.0-prerelease.132%2B2025-09-09-windows-x86.zip
    name: 3.0.0-prerelease.132+2025-09-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 245715918
tag_name: '3.0.0-prerelease.132+2025-09-09'
channel: '3'
tags:
  - releases
---




# Features

- allow "dive under" solids, qr for player to draw under layer 1 while diving [`d80084a4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d80084a4de49dba3ebb2af0f4b2f2126db0ce6b2)

### Player

- Revamp drawing code [`3ee61b001`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ee61b001cc3cfd4a1a487a7661856f9a2652ac7)
   &nbsp;
   >- ffcs and script draws can be negative-layered
   >- sprite Z-sort and optional Y-sort
   >- z-thresholds for each layer, allowing sprites to "jump through" layers as their Z increases
   >- weapon animation code is no longer done during weapon drawing (also fixes weapon shadow draw timing)
   >- generally cleaner code
   >- some minor graphical fixes
   >
- optimize ORR/ORV/ORR32/ORV32 in x64 jit [`34ead2e3b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34ead2e3b2e4ece09d8499cada89f2c5a6fb8315)

### Web

- add zasm output to zscript playground [`f7a7e2a82`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7a7e2a825ae5927a7ed3cb8b64c945da49b77de)

# Bug Fixes

### Player

- mark new functions after seeing a RETURNFUNC [`ef8c3f977`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef8c3f977aaa71552049477c36e18976b089b7b2)
   &nbsp;
   >zasm_construct_structured missed an edge case related to Init global scripts where GOTO is used to call the initial function, rather than CALLFUNC. 
   >
- ensure is_in_current_region returns true for the current screen [`6b353d055`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b353d055550b284a7256c8c6bfc217d7138c667)
   &nbsp;
   >0x80+ screens were accidentally never considered to be in the "current region", even when they are the current screen. That prevented many engine features from working correctly. 
   >
- armos/graves not activating properly from Large Hitbox player [`1b4fd9b50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b4fd9b5077b6970da14f11fe594f9edfa7e8674)
- some more things that were expecting a water combo ID were getting the combo type [`abb716bec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/abb716becaac3a51f77d55144e11a594e9a1cf6a)
   &nbsp;
   >clean up the player's water checks to all use a central function 
   >
- held-up items treated 'Only Held' pickup string flag as 'Always' [`82f2b3105`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82f2b310593e5b07d1d7f9fa4ac957a166095eed)

### Editor

- Map Settings dialog `?` button closing whole dialog [`50e8e72b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50e8e72b8a81eacfae4a7756f4842a4460b78517)
- subscreen editor color selectors not showing cset 12/13 properly [`491824681`](https://github.com/ZQuestClassic/ZQuestClassic/commit/491824681dcdb2b95048f8be787f77e12c11a457)
- trigger summary exstate cause broken [`fa8ca1f7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa8ca1f7db783886feb794b56def236404a44d8d)
- Tile anim preview frames using wrong width [`45c130b34`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45c130b348e3d9f4b4493c7454f2d156ca0efc43)

### Web

- WasmModuleBuilder::internFuncType no longer totally broken [`6a71aa75e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a71aa75e4586acd7ac946ca70c91685e3cdc455)
- correctly create wasm for new quests with no Wait instructions [`6c2700f16`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c2700f168e786b711151a84d94e0cf8d9ff666a)

# Build

- remove qrs.zh from context_strings.cpp dependency [`b58ab69e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b58ab69e4db6f952acaf5dd68ccfba791ce8dfbd)

# Chores

- update replay_uploads_known_good_replays.json [`25ce313ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25ce313ab27572c47334c37a557438eff511e8b2)

# Refactors

### Player

- add p99 and p99.9 to frame timings [`cf3037df9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf3037df9e78517b1f02fbcaf1a6def7ff39a2f4)
- use unique_ptr instead of shared_ptr for ReplayStep logs [`3a0d1647f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a0d1647f2539bf3d605757e997e15133a4c751f)
- clean up optimizer/jit management [`a3e48bba8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3e48bba8d7f576d98bdfd43a6450378c45499fe)
   &nbsp;
   >Adds a "zasm pipeline" system to manage when the optimizer or jit runs.  
   >
   >Also implements running the optimizer in the background as the game runs, which mostly works but I've decided to remove it in the next commit because it greatly complicated the code, and I think the optimizer runs fast enough to just run on quest load. 
   >
- simplify zasm pipeline by running optimizer on load [`e9861cf62`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9861cf6295e6f9b5216aac1cd29915596749689)
- remove manual replay update mode (never used it) [`f65c5a4e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f65c5a4e07beded075dcf45afb4d3cef3eff6be5)

### ZScript

- for x64 jit, compile each function separately [`daa116161`](https://github.com/ZQuestClassic/ZQuestClassic/commit/daa11616185d254700797ee887ba5fd09abe5080)
   &nbsp;
   >Instead of compiling the entire ZASM chunk at once, compile only one function at a time, and only the "hot" ones. This greatly reduces the amount of memory needed to compile scripts, and does not waste any time compiling unused code. 
   >
- more efficient assembly for PUSHARGSR/V [`1c5745909`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c5745909e3f9f8dbef4ad3f9fb997a8311e9f9e)
- use c-array instead of bounded_vec for return stack [`171741ed7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/171741ed74f8336e28c00323afaa5cd715e5fc5b)
- use c-array instead of map for ZasmArrayManager [`cf475daea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf475daeae367b53e4122180f9d99a035abaf11b)
- add zasm optimization bool to jit cache key [`e12ccc910`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e12ccc9103f8551a31de8f81484cf0e1a3efcb6a)

# Tests

- skip asking to make compare report for --not_interactive [`01ba38109`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01ba381092d880b0cccf35492f26ab7cb019ec41)
- make sure test folder is created for replay_uploads.py [`6310394c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6310394c6457c591bba8a4a22c9147ba8b34b1b2)
- add test_jit_runtime_debug_test [`09592b546`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09592b5462739a8f4e612b59a3ceac16c101cf78)
- organize replays folder a bit more [`3bb2a8be2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bb2a8be23c0a27d90aac0a1da1fe3cfcd62d30d)

# Misc.

- update AUTHORS [`c3b45ae72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3b45ae72f93f62535185f20bc8ce5a13d59f4fe)
- tweak database collect script [`c79bf5aef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c79bf5aef52ef3890d1570664d3bafd02430099e)
- fix possible encoding errors when loading database manifest.json [`a47af919f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a47af919f74b4feb28efade1aab0bba549114258)
- auto-generate 'include/bindings/qrs.zh' from source code [`93f82434e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93f82434ea0784a225ecd5c72fff2484e2dc6b0d)

### Player

- print output path when writing zasm to file [`850c93244`](https://github.com/ZQuestClassic/ZQuestClassic/commit/850c93244d25e661d293d71503c3e8a61c2cb7ec)
