---
title: 3.0 Prerelease 123 2025-08-01
description: 
date: 2025-08-01T08:23:04Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.123%2B2025-08-01/3.0.0-prerelease.123%2B2025-08-01-linux.tar.gz
    name: 3.0.0-prerelease.123+2025-08-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.123%2B2025-08-01/3.0.0-prerelease.123%2B2025-08-01-mac.dmg
    name: 3.0.0-prerelease.123+2025-08-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.123%2B2025-08-01/3.0.0-prerelease.123%2B2025-08-01-windows-x64.zip
    name: 3.0.0-prerelease.123+2025-08-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.123%2B2025-08-01/3.0.0-prerelease.123%2B2025-08-01-windows-x86.zip
    name: 3.0.0-prerelease.123+2025-08-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 236819699
tag_name: '3.0.0-prerelease.123+2025-08-01'
channel: '3'
tags:
  - releases
---




# Features

- allow 'walk on top'  for all combos, not just Switch Block combos [`e92a4899f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e92a4899f8f5ff8d93639f9a31c4c70de3638ae0)
- Combo Trigger force ice physics / set player facing dir effects [`eb4dd3928`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb4dd3928d9fba5ced9e1126f2334116e0bda763)
- unignite trigger flag [`409566718`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4095667188e582a4b05b79de418e218bb6deac8b)
- 'Cancel Trigger' combo trigger [`2e03541c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e03541c869bc9111d2dd56a1748d6e6677629dd)
   &nbsp;
   >As a trigger effect, prevents triggers lower on the list from triggering from the same cause. 
   >

### ZScript

- enable jit script compilation by default [`9f80b3d30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f80b3d303aa45ec1501f2b81943352930985250)
   &nbsp;
   >This makes scripts much more efficient: between 2 - 10x.  
   >
   >Note: windows 32-bit is not supported. 
   >

# Bug Fixes

### Player

- pitfalls + Block Hole flag on same layer as block using wrong next combo [`3ec74f434`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ec74f434f4e356469b4fa9a303af2919bdb2c35)
- handle when save no longer exists with "Reload Last Quest" on [`c87f283c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c87f283c28a585cc621c32e442b779b4c2c318f4)
   &nbsp;
   >Instead of closing the program when the last quest save file cannot be loaded, load the title screen instead.  
   >
   >Also, store the save path instead of the slot index, since the latter can change when manually adding or deleting save files. 
   >
- 'custom' and 'ice' weapons ignoring step speed from weapon data [`e825332a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e825332a4af0b8bc8b36814f6420b49c02062220)
- custom and ice weapons ignoring tile width/height [`c01734369`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c01734369fc56211fd52d8478149d13f57768d1e)
- disable inline_functions zasm optimize pass for now [`347d78a92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/347d78a9298f74bec1af079da7a28c32434e850e)
   &nbsp;
   >Got a sentry crash here, gotta investigate. 
   >

### ZScript

- use correct macro for global register size [`ba314132a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba314132ac5237b1c94f76e9120c8d13d26f661c)
- Game->LevelStates[] being broken [`98c32ffb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98c32ffb3b85bb247e48b7366fd14038bb55fd67)

# Chores

- remove extraneous debug code from example quest script buffer [`692036d66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/692036d667ac31ead7e296b2b3c765439f9bc43e)
- rename log_call_limit_error [`1b4188aed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b4188aed577c520a0b249cb2b77d153bb78b1df)

### Editor

- note qr requirement for player-sliding ice [`31e42f6c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31e42f6c7ba4898d9b0bc865c47d76fbf38793d1)

# Refactors

- add helper function to check -flag, -no-flag, then the config value [`ac5744f5f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac5744f5f618173fa85832baf2e97b89f23cbf9d)
- store triggerflags as bitstring, change internal constants to indexes [`54f61d302`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54f61d302959acb149c1de2a8797281b91b73bf3)
- standardize most combo trigger loops [`7c866ab00`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c866ab002f50af769035c1f02b2ca1052e64abe)

### Player

- remove jit precompile config option [`90b1dc097`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90b1dc0977caa901b11fc7c2e4b2a74887f4a371)
- log zasm optimize results to allegro.log, not stdout [`32478f822`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32478f82274f7a2f90cb846613fce158a6345c23)

### ZScript

- improve stack overflow error behavior [`dcac26d53`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dcac26d531ece607453a34b77befc395c2c8fa20)
   &nbsp;
   >Previously, if a script used too many stack variables (typically by doing lots of recursion), the engine would (sometimes) emit a warning, "wrap around" the stack pointer, and continue executing the script. However, that results in very buggy and random behavior, and is never recoverable.  
   >
   >Now when the stack overflows, the script is stopped. 
   >
- increase stack from 1 KB to 5 KB [`b118e9fc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b118e9fc1a056ace4312283ef54c7dbeaaeae36e)
- limit max nested function calls to 1024 [`37a0a4f13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37a0a4f13cfd390862d5b7e1f679ca213e5c779d)
- upgrade to jitted script without stalling game [`4be7097b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4be7097b035eff3e44a75370f25a9587f2d5b28b)
   &nbsp;
   >Previously, with jit enabled the game would stall if a script tried to run before a background thread could compile it. Now the engine runs the script as normal (via the interpreter) until jit compiler is done compiling. Then, the script will be "upgraded" to use the compiled code. 
   >
- check for stack overflow / call limit in jit [`df36bad3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df36bad3e8944cf4e73e480702eaac7900d1b7ca)

# CI

- add compiler to test workflow artifact name [`ae0412313`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae04123133e724a397d84beedaaf120ca9cff7d9)
- fix bad yml workflow from previous commit [`f604567cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f604567cc033dd27652f1e85f7987273a9d893c1)
- fix bad yml workflow from previous commit (again, I hate github actions) [`66bc72724`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66bc72724dbf19022e5534ad43c2618f0cf91500)

# Misc.

- update trigger_example.qst [`08bbbc1bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08bbbc1bd2fc16163495014b8a5f6a153c0b7f44)
