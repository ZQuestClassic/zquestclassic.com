---
title: 3.0 Prerelease 88 2025-02-12
description: 
date: 2025-02-12T07:35:03Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.88%2B2025-02-12/3.0.0-prerelease.88%2B2025-02-12-linux.tar.gz
    name: 3.0.0-prerelease.88+2025-02-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.88%2B2025-02-12/3.0.0-prerelease.88%2B2025-02-12-mac.dmg
    name: 3.0.0-prerelease.88+2025-02-12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.88%2B2025-02-12/3.0.0-prerelease.88%2B2025-02-12-windows-x64.zip
    name: 3.0.0-prerelease.88+2025-02-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.88%2B2025-02-12/3.0.0-prerelease.88%2B2025-02-12-windows-x86.zip
    name: 3.0.0-prerelease.88+2025-02-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 199797852
tag_name: '3.0.0-prerelease.88+2025-02-12'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- 'Reference Tiles' [`782ac109a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/782ac109ae612b53c9c23e8b9eb4f7346e1ffc32)
   &nbsp;
   >In the tile pages, 'RClick->Set as Reference'. This tile will now display on the left-hand side while editing any other tile, as a reference. 
   >

### ZScript

- support internal vars outside classes [`6fa039e16`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fa039e16f90c32f95fae71444d623dca8c7ab8a)
   &nbsp;
   >`MAX_FFC` is now an internal variable (needed for z3). 
   >
- add `Game->HeroScreen` [`80f87e325`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80f87e325c1803137003a1d1d000b142317faff0)
   &nbsp;
   >In 2.55, this is always equal to `Game->CurScreen`. In 3.0, this updates as the player moves around. Added to 2.55 for script compatability. 
   >
- add `sprite::SpawnScreen` [`c9fbd48d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9fbd48d7b72d69ff8e48ae5b28b872b13365c91)
   &nbsp;
   >This is the screen that the sprite spawned on. In a non-scrolling region, this is the same as `Game->CurScreen`. 
   >
- add `Viewport` [`bc51c3a4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc51c3a4b789567d974dc51e6058008773c3d0a9)
   &nbsp;
   >This global represents the currently visible playing field. In 2.55, this is all read-only and only changes during scroll transitions. In 3.0, the visible viewport can be modified by scripts, and updates as the player moves around a scrolling region. 
   >
- add `Screen->Index` [`b2436129f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b2436129f0753c0150e9d17e3c6854494fc757e1)
   &nbsp;
   >In 2.55, this is always equal to `Game->CurScreen`. In 3.0 scrolling regions, the value of this varies depending on the context (for example, an npc script will have this set to the screen the enemy spawned on). 
   >
- add `Screen->DrawOrigin` [`f2211a3ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2211a3ac7effc3254f0318a0fd60c9f02a78148)
   &nbsp;
   >Determines how coordinates given to Screen drawing functions are interpreted. For more, see: https://docs.zquestclassic.com/zscript/globals/screen#globals-screen-var-draworigin 
   >

### Visual Studio Code Extension

- if in zc repo, use resources folder as cwd [`adc41634c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/adc41634c66787ba435d352d6206428b9ef25985)

### Web

- playground ?url accepts manifest files [`e96fa3a29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e96fa3a295d2b3343daef43953edf14e8f325973)
- in playground, add all folders in manifest to includepaths [`2cf001cba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cf001cbada1c3be07c337d13f87fa6125180933)

# Bug Fixes

### Player

- broken 'Z_Eventlog` output related to ExStates [`01b66de11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01b66de111ec5e3b96bf9863fe2c64c74e67fdde)

### Web

- correctly apply NO_ERROR_HALT in playground - was not working on first compile [`1f3219587`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f32195872c608a95cb2b6b3760f2c6658cb0177)

# Documentation

- improve comment parsing for lists. add support for headers [`28da49eb4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28da49eb431e2f7a4576e6d52f7a70a3ecd5cf1b)
- fix rst generation issue for monospace text with no whitespace padding [`bc4f40227`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc4f402273889bdd7a01b6556d55f558d328213c)
   &nbsp;
   >For example, the doc comment for `bitmap::Write` was problematic. 
   >
- improve support for multi-record tags [`7ae890620`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ae890620b45e06662ffb5d262fc2f30c6c4dca6)
- show alias annotations in doc site [`69fd7e21f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69fd7e21f342c5cbac07565a97f75e709f15d43d)
- fix sprintf doc comments [`98d7bbc98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98d7bbc987ddb87668111882ee8ae72f8e1403d8)
- add @version to some newer symbols [`4cfbcb663`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4cfbcb6630f454d171163ac566e9d189db5fa7da)
- add tutorials/z3_user_guide.rst [`1946e2dc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1946e2dc1053fcd77133415ebf2c504cfcab2a1e)

# Refactors

### ZScript

- remove @link [`1dd1ef5d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1dd1ef5d10456b13c4486517ef979ffa1f2e3902)
- remove HEADER_GUARD (allow and ignore duplicate imports) [`626c87772`](https://github.com/ZQuestClassic/ZQuestClassic/commit/626c8777243de1f3e49e09756cbfd31564af937c)
- prevent parsing same files multiple times [`20885219b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20885219b6043f5d1df8decfb50d6b5b75be659f)
   &nbsp;
   >Before, every import would parse the file it included. Now, a cache is used so every file is only parsed once. This reduces compiler times (for example: compiling the binding files went from ~300ms to ~200ms). 
   >
- remove old metadata output to stdout [`29ee8155a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29ee8155a0329f477c8e2b54559d462803b497f9)
- remove imports within bindings [`a310b2de2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a310b2de20a36a1cbef7ada89f9ccc12af06a6f3)
   &nbsp;
   >Just rely on the fact that binding files are all processed upfront, even when viewing a binding file directly with the extension. 
   >

# Tests

- sleep in testDiagnostics to avoid flaky failures [`498114da0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/498114da09c9c65bc5f0b0e2f2af1b67b2227e77)
- add freeform_shutters.zplay [`15fd7e5e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15fd7e5e096bb7be8eb55427807d1683520fe0fa)
- upgrade zscript database [`2c72590cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2c72590cc34cb74432b4d5745872a9e2fc8a2e00)

# CI

- checkout private zscript database [`9361eb356`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9361eb356f274411fbc311a9b3d218569edebccd)
- fix secret for downloading zscript database not working in forks [`bacc5313d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bacc5313da44a095cb107813c4198ac1e667eaa7)

# Misc.

- update command to regenerate all changelogs [`9117627f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9117627f31df80473c02010821a1d590678474f4)
- support numbered lists in changelog markdown [`4a5912fc7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a5912fc73704203694ac4b4ff2d20d6b246bb26)
- remove Co-authored-by lines from changelog [`36be1aaaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36be1aaaf7e069334846b29c98405f0e9a3a6536)
- generate cherrypicks-3.0.md override file [`82ac3c00b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82ac3c00b29354146143b8a251eeff4cec23ffa6)
- for last login date, fallback to last post date for private users [`445e935da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/445e935dae9a579233ce624a5a724fef21260646)
