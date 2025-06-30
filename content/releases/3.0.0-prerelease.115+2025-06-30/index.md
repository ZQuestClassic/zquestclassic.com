---
title: 3.0 Prerelease 115 2025-06-30
description: 
date: 2025-06-30T02:32:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.115%2B2025-06-30/3.0.0-prerelease.115%2B2025-06-30-linux.tar.gz
    name: 3.0.0-prerelease.115+2025-06-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.115%2B2025-06-30/3.0.0-prerelease.115%2B2025-06-30-mac.dmg
    name: 3.0.0-prerelease.115+2025-06-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.115%2B2025-06-30/3.0.0-prerelease.115%2B2025-06-30-windows-x64.zip
    name: 3.0.0-prerelease.115+2025-06-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.115%2B2025-06-30/3.0.0-prerelease.115%2B2025-06-30-windows-x86.zip
    name: 3.0.0-prerelease.115+2025-06-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 228689377
tag_name: '3.0.0-prerelease.115+2025-06-30'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- support `Game->LoadBitmapID(RT_*)` [`134545e1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/134545e1bf62d7a0b5f39ee9ebb6399ca8b7f3d3)
   &nbsp;
   >The render target constants `RT_*` (except for `RT_CURRENT`) now work via `Game->LoadBitmapID()`. Also mostly all drawing functions now accept bitmaps loaded in this way as parameters. 
   >

# Bug Fixes

### Player

- prevent crash when using Kill All cheat on Patra [`9155f2e4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9155f2e4d1a1c1f3f63695792941f828868c783a)
- only freeze segmented enemies if no parts are in view [`27ef12b9b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27ef12b9b42a7bcbfc8a09dcc68f7589b56e0145)

### Editor

- preserve items on save when using test init data [`c9020d168`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9020d168d6692c28dc043ae24aeed3296df8728)

### ZScript

- fail compile when label is not found [`51bb33321`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51bb33321a3cc92a8ce90b6275c2a38ddaec9ebb)

# Documentation

### ZScript

- clean up docs for some global functions [`dc424156c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc424156c65998ec48c39d83768815c01d90331e)

# Chores

- add changelog override [`01097941a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01097941ae1a90207dee54e7d830b2cf3afd835d)

# Refactors

### ZScript

- remove almost all of `Debug->` [`418b016fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/418b016fab694a7c5d00979fa33d0821f5f136b8)
   &nbsp;
   >The only useful thing here is `Debug->Testing`, which is now deprecated in favor of the newly added `Game->Testing`. 
   >
- un-macro trash_op to make it debuggable [`948db8dd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/948db8dd7296d57d82bb5d6543173ad8421e405f)
- change read_array default to 0 [`f67e729b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f67e729b096136269c09001a95baaab5eada53e8)
- use common abstraction for arrays [`df3ce2079`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df3ce2079c6c7ad845d0676e529a60c439ec338f)
   &nbsp;
   >Built-in arrays (such as `Screen->State[]`) are now implemented using a new shared abstraction.  
   >
   >- improves maintainability of arrays
   >- consistent application of index/value bounds (this was often wrong
   >  and many issues are now resolved)
   >- enables new features in the future (such as iterating built-in arrays)
   >
   >
   >&nbsp;
   >
   >https://discord.com/channels/876899628556091432/1382495697907093574 
   >
