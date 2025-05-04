---
title: 3.0 Prerelease 102 2025-05-04
description: 
date: 2025-05-04T07:51:59Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.102%2B2025-05-04/3.0.0-prerelease.102%2B2025-05-04-linux.tar.gz
    name: 3.0.0-prerelease.102+2025-05-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.102%2B2025-05-04/3.0.0-prerelease.102%2B2025-05-04-mac.dmg
    name: 3.0.0-prerelease.102+2025-05-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.102%2B2025-05-04/3.0.0-prerelease.102%2B2025-05-04-windows-x64.zip
    name: 3.0.0-prerelease.102+2025-05-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.102%2B2025-05-04/3.0.0-prerelease.102%2B2025-05-04-windows-x86.zip
    name: 3.0.0-prerelease.102+2025-05-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 216341655
tag_name: '3.0.0-prerelease.102+2025-05-04'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- use qst filename for replay file prefix if title is empty [`08475809a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08475809a2c084bb27e11c7ad6267bd5e8ded696)

### Editor

- Update cambria tileset
   &nbsp;
   >Fixed the falling / drowning animation for enemies Made bomb flower combos interact w/ weapon triggers Added shatter animations for pots when you slash them Fixed solidity for combos 3916 and 3917 Made fairies catchable with the Bug Net Gave the Bug Net and use sound 
   >
   >&nbsp;
   >Relevant changes:
   > - fix(zq): Update cambria tileset [`99fedb984`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99fedb984d3bbb1b2e49bdd968e873712e78285d)
- `Step->Effects` combo wizard 'Damage' off by *10000 [`0b051c760`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b051c760f29a0502fd3edb38c81430bfca73fa1)

### ZScript

- stop corrupting stack offsets during unused variable removal [`e09feee70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e09feee70e9c8e2fffb6bc9ab397dc6f057439a6)
   &nbsp;
   >The compiler removes unused variables from the output, but in doing so it would sometimes mess up the variable locations for nearby child scopes.  
   >
   >This bug was introduced in 3.0.0-prerelease.15+2023-12-17.  
   >
   >https://discord.com/channels/876899628556091432/1353617529310019708 
   >
- add missing DMFS_EXTENDEDVIEWPORT dmap flag [`f794ffc8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f794ffc8a4181605c57b5174da5f99a5f959eb62)

# Documentation

- indicate that the Bug Net does use it's UseSound as a 'Swing Sound' [`f01832a98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f01832a9864affbb2ffaab6e3c251ff2c2c178b9)

# Refactors

### Player

- standardize resolving sprites by uid; simplify sprite_list [`4af509196`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4af509196564055a6f704d3893d01734ef3bd102)

### ZScript

- emit shared zasm for scripts [`51ec0e0a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51ec0e0a51fda37e66e87b3800f5537b74e44764)
   &nbsp;
   >Previously each compiled script resulted in a separate chunk of zasm for just the code it used. This resulted in large amounts of duplicated zasm instructions across all scripts. Now, the zscript compiler uses the same chunk of zasm for all scripts.  
   >
   >Compiling Yuurand's scripts went from 4m zasm commands to 1.87m. 
   >

# Tests

- update how latest stable version is found for run_replay_tests.py report option [`fa2a49597`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa2a4959728c809088af27305ecdfc7de249aa21)
- add pkmn.zplay for advanced SCC usage [`93e24694a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93e24694ace8bc530fb6abd18001fa83e14f7c8d)
- upgrade puppeteer to 24.7.2 [`a59bd6972`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a59bd69724d8c0afe2954d919d40e4088c18aedb)
- support compare report generation for replays outside tests folder [`b6c950691`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6c950691417a41f07d4cc6a5e5a91e6891374bf)
- improve script for testing uploaded replays [`a5dadcc15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5dadcc1566a8f6abcb12ecf271c6ebbefabed43)
- add --root_replays_folder to run_replay_tests.py [`d774e014f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d774e014fe74a9522f7eee15a9b25556605cbca0)
