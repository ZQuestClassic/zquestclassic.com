---
title: Nightly 2023-06-28
description: 
date: 2023-06-28T21:28:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-28/nightly-2023-06-28-linux.tar.gz
    name: nightly-2023-06-28-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-28/nightly-2023-06-28-mac.dmg
    name: nightly-2023-06-28-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-28/nightly-2023-06-28-windows-x64.zip
    name: nightly-2023-06-28-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-28/nightly-2023-06-28-windows-x86.zip
    name: nightly-2023-06-28-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 110289077
tag_name: 'nightly-2023-06-28'
channel: '2.55'
tags:
  - releases
---

# Bug Fixes

- waitdraw not working for ffcs over 32 [`ae823474a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ae823474a24261e92266df611c62a5f6007c33d3)
- npc scripts not running on screen load [`c8e2c861e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c8e2c861edc73de3ff851d3cbc9bc8d07037d007)
- enemies not running scripts on first frame with scriptloadenemies [`935757d42`](https://github.com/ArmageddonGames/ZQuestClassic/commit/935757d42efb0f999d7a5a1b0d2e893cac962614)

### Player

- signpost prompts take priority over triggers tab prompts [`347bc58fb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/347bc58fb0cfe3ecc801313557ace28d8a0812d6)
- Newer Player Movement issues with fitting in half-tall gaps [`1210ef14a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1210ef14a756311e3c6f686be90e8d55cc0af8b9)
- do not stop at first ffc for lens trigger [`90eff0ba4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/90eff0ba41f336e6eb091199bc11f7d64866f4ff)
- Fix writing to shopdata->Price[] [`7094e8d8c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7094e8d8c41917b1b9878035ac73ef11513ea21c)
- fixed new (non-classic) respawn points being unsafe in sideview [`c41729262`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c41729262c578300821dff1390d582a5acdd1fa4)
- off-by-one error with ffc link delay [`996dc964d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/996dc964dce997c6f65ab47a87f171d09263e157)

### Editor

- undo history for "Paste FFC as ..." [`023f81c00`](https://github.com/ArmageddonGames/ZQuestClassic/commit/023f81c003dc1433866e5d22c2bd9e122a9061c6)
- undo history for "Paste FFC Data" [`d77c8b93f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d77c8b93f0dc5de757ca1a5223a7b1bb91ede446)

# Chores

### Editor

- update default quest file (fix dmap 0 flags) [`837c65979`](https://github.com/ArmageddonGames/ZQuestClassic/commit/837c65979aa9f23d801de8d1e7a2d35de8e46489)

# Refactors

- rename solid_object hxsz, hysz to hit_width, hit_height [`0fccb318c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0fccb318c25c22d3cccb0e0d9b36dfe9e2d9a25e)

### Player

- add interface for combo cpos_infos [`cc2c6aa8a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cc2c6aa8a343467fd3c18fa993c4eac54fbd8ea1)

### ZScript

- common interface for script engine data [`afd10f7e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/afd10f7e4221d318e20f73be4a56bb48b77e9292)
- use ScriptEngineData for item scripts [`3d13a4422`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3d13a44227eff4449ddf0268ba093a7ed3e526e4)
- use enum for script type [`970aafd77`](https://github.com/ArmageddonGames/ZQuestClassic/commit/970aafd77643ef559ef81e99088d9733f28f25be)
- add interface to encode combopos ref [`91b4eac1d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/91b4eac1d2132aa0c4b0bbe3256c634d13bfe929)

# Tests

- add zscript compiler expected zasm tests [`2afd78063`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2afd78063299b7029dc7a8a30758985d3a90e702)

# CI

- skip solid.zplay until it is re-recorded [`38e4ec35e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/38e4ec35e4544088a522dc1a2ceceaec99150435)
- fix release tag for branches [`5f647e9dd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5f647e9dd3dff9dcd0f15cfc2d1475984fff389a)
- fix release tag for branches (really) [`465dd9c71`](https://github.com/ArmageddonGames/ZQuestClassic/commit/465dd9c71bdfffd2dd667ce6ddb5f307c79445d5)

# Misc.

- fix git hook script when core.commentchar config not set [`d35712951`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d357129518160b98ac86efb79c16add627d69082)

## New Contributors
* @ShinjiniGuha07 made their first contribution in https://github.com/ArmageddonGames/ZQuestClassic/pull/862

**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-06-15...nightly-2023-06-28
