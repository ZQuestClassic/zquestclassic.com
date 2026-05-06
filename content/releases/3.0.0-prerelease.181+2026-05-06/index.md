---
title: 3.0 Prerelease 181 2026-05-06
description: 
date: 2026-05-06T09:26:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.181%2B2026-05-06/3.0.0-prerelease.181%2B2026-05-06-linux.tar.gz
    name: 3.0.0-prerelease.181+2026-05-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.181%2B2026-05-06/3.0.0-prerelease.181%2B2026-05-06-mac.dmg
    name: 3.0.0-prerelease.181+2026-05-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.181%2B2026-05-06/3.0.0-prerelease.181%2B2026-05-06-windows-x64.zip
    name: 3.0.0-prerelease.181+2026-05-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.181%2B2026-05-06/3.0.0-prerelease.181%2B2026-05-06-windows-x86.zip
    name: 3.0.0-prerelease.181+2026-05-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 318324038
tag_name: '3.0.0-prerelease.181+2026-05-06'
channel: '3'
tags:
  - releases
---


# Features

- Light Offsets [`7f0cdccd8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f0cdccd8cf5681f819e77dea1c95c0adf095c6c)
   &nbsp;
   >Anything that casts light in new darkrooms can now have an offset applied. Offsets can be positive or negative, with positive moving the source of the light that many pixels in the direction the light is "facing". Offsets perpendicular to the facing direction are not currently supported. 
   >

### Editor

- Improve some tile editor shortcuts [`2d680874b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d680874b8f9320a0a5a1897c2e604db5af18ad9)
   &nbsp;
   >- Ctrl+Arrows will no longer wrongly prevent changing pages
   >- Holding Shift makes the Alt+Arrows shortcut move in increments of 8px instead of 1px
   >

# Bug Fixes

- Prevent new copy button from showing in invalid places [`f1ec53450`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1ec5345092e612345afc649f4de71c906b4d0af)

### Player

- Bottom 8px bad collision using 4-way newer hero movement [`f511cdb31`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f511cdb316b3d6c238ae9009a9b78b316623d7c9)
- New/Newer Hero Movement inconsistencies [`1c1bd4493`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c1bd44938a6b3a2dc76f532a3b7967011b588bb)
   &nbsp;
   >Some spots were only checking for New movement which should've checked for EITHER, causing inconsistencies between enabling both and just enabling newer movement. 
   >
- Exstate carryover checking wrong state [`57b2514af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57b2514afd7d92882afa50be3ac7eeefb2d66780)
   &nbsp;
   >a normal state being set could prevent the exstate from carrying over. 
   >
- Wizzrobes properly teleport within their spawn screen [`80d2c31eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80d2c31eb6a9a23a98d7fc79d29c8e7f3bd0337b)
- Ffc spotlights not working in some cases [`dd375848a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd375848ad7df51f6fff49ed8df652d95a145c06)
- Various z3 issues re: Dithering / Dark Rooms [`6b18fd37e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b18fd37eb386ad6a1d59a05af5c82e441348ccb)
   &nbsp;
   >* Dithering via `bitmap->Dither()` in scripts was using a bad 56-pixel
   >  offset, breaking dither patterns.
   >* Dithering in dark rooms was incorrectly tied to viewport-space rather
   >  than world-space, causing the dither pattern to 'stick' to the
   >  viewport rather than the screen itself.
   >* Dithering and Transparency screen flags were improperly applying to
   >  entire regions, rather than being separate per-screen like the Dark
   >  Room flag is.
   >
- Pushblocks not properly counting towards trigger groups [`eb9080087`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb908008737ff2a44aebf1fd6ecf73683bba5af6)

### ZScript

- Direct warp coordinates to region for WarpEx [`2b09d3083`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b09d308333fd59d295d58238bb72f265bb2436e)
- Prevent crash from out-of-bounds sprite script IDs [`d6afd03c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6afd03c570c58e3c4a9f6653261056e51414d3c)
- Return correct value for sprite draw offsets [`d22c0e993`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d22c0e9932b0a553239b7b24f1a4ae9690d0260f)
- Ensure script is valid before running it [`5eb239fad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5eb239faddf1247460a8340d8475416b57c3443a)

# Refactors

### Player

- Extract common warp state and dir facing logic [`80c3ee112`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80c3ee112980e631a994c5751272f5fcfe3c4d2f)
- Extract sword repositioning logic into HeroClass::reposition_sword [`2d99a4c0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d99a4c0d87dcd2575e765b85df6da689e39796f)
- Consolidate post-warp initialization logic [`bdab87b9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bdab87b9e68829c8c76b396d885b7c917870f37e)
- Unify warp exit/entry last entrance state update [`8d1d20b30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d1d20b30a31f18604df87aff7614cf2faf61fb8)
- Move new warp functions to hero.cpp [`b1b505135`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1b505135e4c8660ef7711f49c4c72e1bcec9425)

### ZScript

- Remove extra call to get_script_engine_data [`2d94a5485`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d94a5485a646fa2fd9053f8647bfe184eac3f7a)

# Tests

- Add dither testing [`d17462015`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d17462015c5e7f5ec0fc565bd4d634bb3bc5e2f6)

# CI

- Run headfull in parallel in CI [`170651742`](https://github.com/ZQuestClassic/ZQuestClassic/commit/170651742c4265233dda8f9c63ab2e62ee3f8cd2)
- Upgrade actions due to node 20 deprecation [`ebf0c0d9a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ebf0c0d9a748af7c081b8978093f549b482b3608)
- Fix extra-args param [`6f5704a35`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f5704a350b5e8dcdf00fdf624431abdba5cdf77)
- Fix package step for coverage build [`fa09c8551`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa09c855142fa9e0e16ca0ff65c1ca57666182c7)
- Fix coverage step [`70c7292f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/70c7292f997a913141ce9eeb3812c0092b76d19e)

# Misc.

- Support pretty urls in self-hosted docs site [`2f68f1fac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f68f1fac42d2c898d0b3a1cd3e4a937b6c7b1cc)
