---
title: 3.0 Prerelease 20 2024-01-01
description: 
date: 2024-01-01T10:40:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.20%2B2024-01-01/3.0.0-prerelease.20%2B2024-01-01-linux.tar.gz
    name: 3.0.0-prerelease.20+2024-01-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.20%2B2024-01-01/3.0.0-prerelease.20%2B2024-01-01-mac.dmg
    name: 3.0.0-prerelease.20+2024-01-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.20%2B2024-01-01/3.0.0-prerelease.20%2B2024-01-01-windows-x64.zip
    name: 3.0.0-prerelease.20+2024-01-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.20%2B2024-01-01/3.0.0-prerelease.20%2B2024-01-01-windows-x86.zip
    name: 3.0.0-prerelease.20+2024-01-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 135464589
tag_name: '3.0.0-prerelease.20+2024-01-01'
channel: '3'
tags:
  - releases
---




# Features

- add 'Script1'-'Script10' shield blockflags, to block *specific* scripted weapons. [`b9e6136eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9e6136eb210dda93ddc186443d72081447b965a)
- LW_REFARROW, LW_REFFIRE, LW_REFFIRE2 (reflected arrows, fire, fire2) [`e3b23aa7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3b23aa7da01ff25a100fa10b99201f903bc6810)

### Player

- optimize zasm scripts [`16da940b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16da940b1f94ef67c7867bf2611e6335ae82f5cf)
   &nbsp;
   >First thing when loading a quest the ZASM scripts will undergo optimizations. Most optimization passes apply improvements similar to that which have been implemented in the zscript compiler, but are not present in older quest scripts. Others are novel and improve even modern zscript compiler output.  
   >
   >Savings for a few quests:  
   >
   >- Stellar Seas - 163762 ops (5%)
   >- Yuurad       - 604668 ops (4%)
   >- Umbral Cloud - 105994 ops (8%)
   >
   >
   >&nbsp;
   >
   >The optimizations done currently are:  
   >
   >- Removing unreachable blocks of code
   >- Replace many PUSH/POP with equivalent single PUSHARGSR/POPARGS
   >- Reduce ops used for conditionals (COMPARER)
   >
   >
   >&nbsp;
   >
   >This is on by default, but can be disabled with `[ZSCRIPT] optimize_zasm = 0` in `zc.cfg`. 
   >
- add zasm optimize_setv_pushr [`f2dd0314e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2dd0314e7d226770f2967b4a74ad22e6c1d8a77)
- Custom mirrors can 'block' instead of reflect per-direction [`d3f813f6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3f813f6f1943d74257b784a738afacaeaaca52f)

### Editor

- Item Wizard (Shields) [`f30dd7095`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f30dd709545450b49320aaea071bcba9490acf8f)

# Bug Fixes

- implement set volume for GME music (spc,gbs,vgm,gym,nsf) [`74d24c557`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74d24c557a74d874d8fa3dc5b50c8e32daff213a)
- Enemy Flames not reflecting off of shields, even with reflect flag set [`3ea00017a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ea00017aa0b41ffd83050a54eaa89829b17ef10)
- issues with numbers between 0 and -1 [`489b85ea7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/489b85ea7fb8ad2de3b7b739015d851e992ce4e6)

### Player

- not showing error dialogs in title screen, and unbreak -only switch [`949bb6abe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/949bb6abeecff5ea7c45a2f270613f5249427462)
- clear spin state during screen scroll [`23a9466d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23a9466d405fab0119a2f4e8c7d14a6ffc4a9c7c)
   &nbsp;
   >This avoid a ghost sword visible during scrolling, and also prevents a nasty bug where the player's action state would be frozen until hit. 
   >
- prevent crash in save creation by resetting global vars [`9d9ea42c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d9ea42c2744c306209121dd827f5f085083e375)
   &nbsp;
   >When a game is loaded, many global variables are initialized to a known state. These variables were not reset when the game ends and returns to the title screen. However, save creation happens to call code that checks the active subscreen pointer, which was invalidated. Accessing this could randomly crash or corrupt the program.  
   >
   >Now, these global variables are reset also just before loading the title screen. 
   >
- prevent failing to save after continue [`e2922a7d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2922a7d3b00e7087791f15233f8facd98b27c25)

### Editor

- undefined memory write when applying modern quest ruleset [`faeaa94a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/faeaa94a3fc37a01fcb8726d4e7b830c09e4f9fd)
- lockblock/chest combo wizards not saving 'Use ExState' flag [`bb1899ec8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb1899ec8a2d744fb1c232492077101b18c1712c)
- some more issues with warp dialogs [`2afa91eec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2afa91eec8d5ff30382e34d1852b61deb4d57868)

### ZScript Standard Library (std.zh)

- DMFS_ constants being off-by-one [`c0144e90d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0144e90d00b8fd420c3792f8dedf47e9df3c259)

### ZScript

- case-range backwards check [`b3fb9bc30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3fb9bc30868cae9c3e518d738c8c478df1d1a3f)
- missed handling arrays for unused var trimming [`8d2ddc6f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d2ddc6f90aefb09846da5c15c6447aa08fc4ef7)

# Refactors

### Player

- use common structured zasm utilities in jit_x64.cpp [`c40c79a06`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c40c79a0671833229fa2bd6f33093f57777c9557)

# Misc.

### Player

- add -analyze-zasm-duplication for finding duplicated functions [`aa467263c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa467263cdf9d92eaaf7ab6e2ca4a8fee54ccf17)
   &nbsp;
   >Not fully finished, just a start. 
   >
- temporarily disable compare zasm opt as I improve in a branch [`52d0aa35a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52d0aa35ad1087803e2250ed80d7ebf3a88ebdf5)

### ZScript

- add 'itemdata->LAttributes[]' to access attributes as a full 32-bit long value [`136e7fa2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/136e7fa2a5c20bc595b7256a1d53a668177a0ce2)
