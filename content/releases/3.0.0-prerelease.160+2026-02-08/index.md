---
title: 3.0 Prerelease 160 2026-02-08
description: 
date: 2026-02-08T07:16:55Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.160%2B2026-02-08/3.0.0-prerelease.160%2B2026-02-08-linux.tar.gz
    name: 3.0.0-prerelease.160+2026-02-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.160%2B2026-02-08/3.0.0-prerelease.160%2B2026-02-08-mac.dmg
    name: 3.0.0-prerelease.160+2026-02-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.160%2B2026-02-08/3.0.0-prerelease.160%2B2026-02-08-windows-x64.zip
    name: 3.0.0-prerelease.160+2026-02-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.160%2B2026-02-08/3.0.0-prerelease.160%2B2026-02-08-windows-x86.zip
    name: 3.0.0-prerelease.160+2026-02-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 284128010
tag_name: '3.0.0-prerelease.160+2026-02-08'
channel: '3'
tags:
  - releases
---


# Features

- Upgrade to Allegro5 audio for sfx, bump max sfx to 1024 [`58486c3f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58486c3f4ab0aa739e65e30d72abb58d758e6471)
   &nbsp;
   >This changes the entire system for sfx playing on the backend; most importantly, this allows loading OGG sound effects. 
   >

### Editor

- 'Open Tile Page' directly from combos/ffcs onscreen [`f386d05ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f386d05ead3d82b54157549b95c181e21ed4af82)
- 'Copy Info' button [`1debd3b39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1debd3b39e9dc6a915cbbc4de2e1753811384c60)
   &nbsp;
   >Copy Info from any info popup directly to your clipboard 
   >
- 'Compare QR String' button [`6d820c175`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d820c1757a1e8178af85d2baed78cf2d09acf99)
   &nbsp;
   >Using a QR string copied from a quest, easily see what QRs your quest has set differently. 
   >

# Bug Fixes

- gui label wrapping [`f0cefef6e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0cefef6e2c115e2f5c6093cae396da55c938525)
- remove visual delay when click+dragging on a list [`c19417f8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c19417f8de653c608f9a956c08efcc7f57aae9d7)

### Player

- set current_screen when creating any sprite [`3457ca838`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3457ca83859a4c3e35a4c57f3a42a4f009df7c48)
   &nbsp;
   >More of 08410497. 
   >
- combo triggers triggering themselves extra times [`725a5ad98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/725a5ad988a8c61cb5e3413ddecccd43867a5ffa)
- Auto Sidewarp combos on layers using wrong screen's warp [`2ce2da44f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ce2da44f61f9f48a136562d75cbc8c4e16415a4)
- control scheme using wrong value for quest-specific scheme [`faf3d98f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/faf3d98f3abce59a57a46e8df56967696a7f1b79)

### Editor

- scc editor using wrong value for 'goto string' dropdowns [`5d9fd8395`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d9fd83954f25f585a59b7bbf9185d5012c1b2d3)
   &nbsp;
   >if strings were re-ordered, the list position was being used instead of the string number. 
   >
- disable re-ordering of sfx/music while list is alphabetized [`82e034c5f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82e034c5fe7e0f95c25b14a45bb28f6a4ce6ba42)

### ZScript

- correctly resolve ffc for Screen->FFCs[] [`6e62f36bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e62f36bb93edcdff1e67d2498c39ae87744d38a)
- return invalid mapdata when Game->LoadTempScreen, etc. fail [`2d76d115c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d76d115cd1666e238ed4cdf45b527be10fcf808)
   &nbsp;
   >These methods were actually returning the first canonical (id 0) when the input is out-of-bounds. Now, they return an invalid mapdata. 
   >

# Chores

- update replay_uploads_known_good_replays.json [`fb3d293c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb3d293c143b9b52c81c10594fd2ebca2c85242a)
- trim unused function [`53b6d706b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53b6d706bdbf52167041299c08fc9b07731427ee)

# Refactors

- whitespace/formatting [`15b13ff53`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15b13ff537aa6ea197ffeb51660eea33afca8028)

### ZScript

- create function for default ctors [`a24d699bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a24d699bb586d84ccdbb2664ea4c5e733accd03b)
   &nbsp;
   >Previously, defaulted constructors always generated inlined ZASM rather than having a dedicated function in the bytecode. Instead, generate an actual function for them.  
   >
   >This will help the new debugger feature. 
   >
