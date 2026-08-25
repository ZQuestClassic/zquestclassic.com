---
title: 3.0 Prerelease 215 2026-08-24
description: 
date: 2026-08-25T01:45:36Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.215%2B2026-08-24/3.0.0-prerelease.215%2B2026-08-24-linux.tar.gz
    name: 3.0.0-prerelease.215+2026-08-24-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.215%2B2026-08-24/3.0.0-prerelease.215%2B2026-08-24-mac-universal.dmg
    name: 3.0.0-prerelease.215+2026-08-24-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.215%2B2026-08-24/3.0.0-prerelease.215%2B2026-08-24-windows-x64.zip
    name: 3.0.0-prerelease.215+2026-08-24-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.215%2B2026-08-24/3.0.0-prerelease.215%2B2026-08-24-windows-x86.zip
    name: 3.0.0-prerelease.215+2026-08-24-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 376173614
tag_name: '3.0.0-prerelease.215+2026-08-24'
channel: '3'
tags:
  - releases
---

# Features

### Player

- Make save files more portable [`112289cc58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/112289cc5847c2afe88c511c5db796992bdefb01)
   &nbsp;
   >- Save files now remember where their quest was actually found: when the
   >  recorded quest path is stale and the fallback search locates the
   >  quest elsewhere, the corrected location is stored the next time the
   >  game saves, so the search isn't needed again.
   >- The qst search can now find a quest by file name anywhere under the
   >  quests directory, not just by dropping leading folders from the
   >  recorded path.
   >- Save files now always record quest paths relative to the quests
   >  directory when the .qst file is in that folder; and it's stored with
   >  forward slashes. This should help keep .sav files working even when
   >  moved between different installations and platforms.
   >
- Find a save file's quest by its contents when the path fails [`3386fefa9a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3386fefa9afb57d531759419237e77cbd3114742)
   &nbsp;
   >Save files now record a fingerprint of their quest file. If the recorded path no longer resolves - even after searching by file name - the quest directory is searched for a file with the same contents, so the quest can be found even after being renamed. A content match is preferred over a file name match, since a different quest file could share the name. 
   >

### ZScript

- Dispatch switch statements without walking a compare ladder [`3ebe18df63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ebe18df63d30860372f0e02d9168c23328d6f58)
   &nbsp;
   >Speeds up scripts built around large switch statements. Quests must be recompiled to benefit.  
   >
   >After recompiling, a switch-heavy benchmark ran about 24% faster interpreted; the JITs already dispatched switches well, so they see little change. 
   >

# Bug Fixes

### Player

- Find the quest for a save file made on a different computer [`f5cebcd5e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5cebcd5e5ab04c813804560e221d8d66819dbc2)
   &nbsp;
   >Save files record the path of their quest file as it was when the save was created. If that was an absolute path from another computer - such as a Windows path in a save file opened on a Mac - the player failed to load the quest even when it was sitting in the quest directory: the foreign path was mistaken for a relative one, and the fallback search never looked in the quest directory at all. Absolute paths from either platform are now recognized everywhere, and the search tries each path suffix in the quest directory too.  
   >
   >Bug present since the quest-path fallback search was added, prior to the initial repo commit ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >

### ZScript

- lweapon scripts lifting themselves not stopping the engine loop [`0b8c59253f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b8c59253f3f5430b811afc76cdc5eb414b93865)
   &nbsp;
   >When an lweapon script called Hero->LiftWeapon() on itself, the script engine was meant to report a "self remove" so the engine stops processing the now-lifted weapon that frame. Instead it returned a meaningless value (the early-return code was reset before being returned), so the weapon kept animating after being removed from the weapon list. With the JIT the signal was dropped entirely and the script also kept running past the call, diverging from the interpreter. Now both stop the script at the call and the engine skips the rest of that weapon's frame, as intended.  
   >
   >Bug introduced when script access to lifting was added in 2.55-alpha-114 ([530f7c6898](https://github.com/ZQuestClassic/ZQuestClassic/commit/530f7c6898)). 
   >

# Refactors

### ZScript

- Cache script object lookups instead of walking a map [`30974734aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/30974734aaad849eb5b4eb64abbb18ad8f2224c2)
   &nbsp;
   >Speeds up scripts that make heavy use of objects - classes, arrays, and other script-created values.  
   >
   >An object-heavy benchmark ran 39% faster with the JIT and 7% faster interpreted. 
   >
- Dispatch interpreter commands through a single switch [`32735ccc41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32735ccc41dd41905b46aed1be96e3d1e0f7ad19)
   &nbsp;
   >Speeds up all scripts on platforms where the JIT is unavailable, or when it is disabled.  
   >
   >Script-heavy benchmarks ran 13-17% faster interpreted; JIT performance is unchanged. 
   >
- Resolve switch/class/stack registers on the fast path [`fd5aac89b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd5aac89b70a7b86007f0e7fd5b43b23ab0fdda8)
   &nbsp;
   >Speeds up scripts that lean on switch statements and class method calls.  
   >
   >A benchmark heavy in both ran 10-12% faster, interpreted and with the JIT. 
   >
- Resolve D registers inline at register access sites [`6fc4cd93ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fc4cd93ad9da768eb2f87b98ef7cb0c2ccf99ca)
   &nbsp;
   >Speeds up something every script does constantly: reading and writing local variables.  
   >
   >Script-heavy benchmarks ran 4-8% faster interpreted; JIT performance is unchanged. 
   >
- Inline script stack reads and writes [`34e5265650`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34e5265650c42c3918547cd265154c11ca06a947)
   &nbsp;
   >Speeds up scripts that call functions frequently.  
   >
   >Script-heavy interpreter benchmarks ran about 3% faster. 
   >
- Inline the interpreter's comparison checks [`2065e65832`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2065e65832085ff7ad2414e3455e431c88371230)
   &nbsp;
   >Speeds up scripts with lots of conditionals - if statements, loops, and comparisons.  
   >
   >Comparison-heavy interpreted scripts ran about 4% faster. 
   >
- Screen rare interpreter loop-exit checks behind one branch [`c6fa3ea74d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6fa3ea74d1be41efdd70e99e51478dda13c7614)
   &nbsp;
   >Speeds up every script when running interpreted.  
   >
   >Script-heavy benchmarks ran 4-5% faster. 
   >
- Fast-path plain array element access in the pod opcodes [`988b3e9d22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/988b3e9d22d1ba054c23da16775bd532c59b3f13)
   &nbsp;
   >Speeds up scripts that read and write arrays heavily.  
   >
   >An array-heavy benchmark ran about 8% faster under the JIT and about 1% faster interpreted. 
   >
- Resolve script debug checks inline on engine entry [`eaf13045df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eaf13045df784da9b81d8e66aaeea26d72f90fd7)
   &nbsp;
   >Script-heavy benchmarks ran about 3% faster, both interpreted and with the JIT. 
   >
- Compile class member reads and writes in the JITs [`4685ecd825`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4685ecd825a6e606f551a245bdb9c992996ddcdb)
   &nbsp;
   >Speeds up scripts that use classes, when running under the JIT.  
   >
   >A class-heavy benchmark ran about 30% faster under the JIT, native and web alike. 
   >

# Tests

- Let web replay runs preload host files into the page [`f731d29a7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f731d29a7e79bb1661c2abdc0579648451c75594)
   &nbsp;
   >Replays for quests that read from their "Files" directory (like the ZC-emu NES emulator loading a ROM) could not run on the web build: the files exist only on the host filesystem, outside what the page can reach. ZC_WEB_PRELOAD_FILES ("src:dest,...") now copies local files into the page's in-memory filesystem after the replay engine starts, before the quest's scripts run. 
   >
