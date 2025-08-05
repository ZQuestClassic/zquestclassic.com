---
title: 3.0 Prerelease 124 2025-08-05
description: 
date: 2025-08-05T03:37:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.124%2B2025-08-05/3.0.0-prerelease.124%2B2025-08-05-linux.tar.gz
    name: 3.0.0-prerelease.124+2025-08-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.124%2B2025-08-05/3.0.0-prerelease.124%2B2025-08-05-mac.dmg
    name: 3.0.0-prerelease.124+2025-08-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.124%2B2025-08-05/3.0.0-prerelease.124%2B2025-08-05-windows-x64.zip
    name: 3.0.0-prerelease.124+2025-08-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.124%2B2025-08-05/3.0.0-prerelease.124%2B2025-08-05-windows-x86.zip
    name: 3.0.0-prerelease.124+2025-08-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 237748978
tag_name: '3.0.0-prerelease.124+2025-08-05'
channel: '3'
tags:
  - releases
---




# Features

- 'Enemies->Stay Dead' screen flag [`3b12dcca9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b12dcca93df3a631b3898f26f4bae4950c478ed)
- expand 'noreset'/'nocarryover' to all screen states [`aa38836b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa38836b1fd9fcb931923fc970f7c95671b16b60)
- exstate carryover/reset options [`e95b860ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e95b860ec6f14317153283256335bbef5de7e4eb)
- expand mirror capabilities with reflect flags [`0ce825dc2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ce825dc2eb1e929e9a536f0906631eb02f379e5)
   &nbsp;
   >Mirrors can now reflect many more weapon types. Player shields can also now reflect LW and EW wind. 
   >

# Bug Fixes

- typo in prior commit [`daa47e0ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/daa47e0ed886d851ea422772f76122bec0060521)
- refuse large string allocation when loading qst [`5e65a9547`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e65a9547bec6c27f59cc643aff6ae7108951584)
   &nbsp;
   >Corrupt or newer qst files should never crash (just show an error), but in some cases the loading code can try to allocate huge strings from bad data. Now, refuse to allocate large strings to avoid a potential crash. 
   >

### Editor

- prevent possible corruption when saving quest w/o scripts [`ff3ea3505`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff3ea350599634da07975ddb853c803a1e51b670)
   &nbsp;
   >Regressed in 51ec0e0 (3.0.0-prerelease.102+2025-05-04) 
   >

### ZScript

- do not add null objects to autorelease pool [`3ac287809`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ac287809c18058c6783ecf1e60c0d25f3dfad0e)

# Build

- fix sometimes needing sudo to build on mac [`1b2f69304`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b2f693046b246eedc82052db0e58bf0c52eb2a5)
- add WANT_NFD cmake option [`4b75a51c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b75a51c00ce61e7e04b364e36769607ae1d3e3c)

# Tests

- fix jit precompile not being set for playground replays [`daec34a6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/daec34a6c55fb1eab71055b24ea6cc91ed29c6b0)

# Misc.

### Player

- tweak output for jit compilation log [`428358899`](https://github.com/ZQuestClassic/ZQuestClassic/commit/428358899e811755c0b9a6540f36fde81675f22d)
