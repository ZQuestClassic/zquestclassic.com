---
title: 3.0 Prerelease 142 2025-11-20
description: 
date: 2025-11-20T02:39:09Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.142%2B2025-11-20/3.0.0-prerelease.142%2B2025-11-20-linux.tar.gz
    name: 3.0.0-prerelease.142+2025-11-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.142%2B2025-11-20/3.0.0-prerelease.142%2B2025-11-20-mac.dmg
    name: 3.0.0-prerelease.142+2025-11-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.142%2B2025-11-20/3.0.0-prerelease.142%2B2025-11-20-windows-x64.zip
    name: 3.0.0-prerelease.142+2025-11-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.142%2B2025-11-20/3.0.0-prerelease.142%2B2025-11-20-windows-x86.zip
    name: 3.0.0-prerelease.142+2025-11-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 263882354
tag_name: '3.0.0-prerelease.142+2025-11-20'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- render screen editor in multiple palettes, higher resolution [`d7438d4f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7438d4f3b1c69586b9c9509662815126c120172)
   &nbsp;
   >The screen editor can now render multiple screens in different palettes at the same time. It also renders at a much higher resolution. This makes the zoom out feature much better.  
   >
   >In case there are any regressions, this can be disabled via in the View menu: just uncheck "High Quality Screen Rendering". 
   >
- add history navigation for viewed screens [`7b0e5333d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b0e5333d2776053d3766081fccabaf54eb4938a)
   &nbsp;
   >You can now navigate recently viewed screens by using the side buttons on the mouse, or configuring the "Go back/forward" hotkeys. 
   >

# Bug Fixes

### Editor

- remove frame of lag when opening tiles dialog [`92971ff29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92971ff29d1c2f93ad08e74bd63b2876cf3d25a9)

# Build

- disable more warnings in third party code [`a47d09046`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a47d0904606390fb7b8b9a3ca4728264a3f13780)

# Refactors

- remove old go/combeback gui code [`63955eb41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/63955eb41096c56e4ddef3cc16cffff2a7350dcd)
- greatly improve refresh_rgb_tables cache [`1fc2a0490`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1fc2a04908ecd164bf46336b4305ff06816f32d6)
   &nbsp;
   >Also moved this code to base, so not just zplayer can take advantage of the caching. 
   >
- speed up bitmap rendering by removing branch [`414723096`](https://github.com/ZQuestClassic/ZQuestClassic/commit/414723096c66a79d9211f840991e16952c4bd131)
- speed up draw_tile16_unified [`afc3b2ca0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/afc3b2ca086bdb951ee3c2495ab93e6e201a9394)
- simplify overtile16 [`a70962ee3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a70962ee3a2a621c81bb73447159158e94c7db59)
- speed up puttile16 [`2cfde4579`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cfde45796f607c5559d3ab7e0f91a8d0097e3af)
- speed up drawtile16_cs2 [`0fd5749b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fd5749b7e623cb25690e05bca6c150208ba6266)
- speed up overtile8 [`1709eef08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1709eef089d76dbd107d196f6a2ccc035d136c50)
- cache bitmap used in overtile16_scale [`d0cb70c42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0cb70c4282ddda47cc56e932ef9fa430d43a1c1)
- use vsnprintf instead of uvszprintf for text rendering [`16771d9f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16771d9f472f3c4c5bade3c1062e0ddfb2bf040f)
   &nbsp;
   >The Unicode-aware allegro function makes text rendering ~40% slower, but we don't need Unicode here. 
   >
- move most CLI commands to separate files, improve switch parsing [`197ad760e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/197ad760ed94082b24435c42acc610403ee74667)

### Player

- speed up getFFCAt [`0621ee781`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0621ee781dce0a06b59c546326f27312ee63bca9)
- speed up iswaterex by iterating ffcs half as much [`715055d3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/715055d3eef28461d2003f5fc5d9c11131493370)
- split directory stuff out of ffscript.cpp [`b33c82673`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b33c826737e7f4ffa28df5a803c1d7d77c45ab2a)
- split file stuff out of ffscript.cpp [`9c8e7a12b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c8e7a12be207d4e21799e4cb8e96b3bce701c25)
- split sram stuff out of ffscript.cpp [`b131192e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b131192e590ed8d63a8878f2e0dc3f2ff2b772ed)
- split string formatting out of ffscript.cpp [`b78b0c4ca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b78b0c4ca0b43c515279d51ea887928907fc2604)
- split ArrayManager out of ffscript.cpp [`f1c184aeb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1c184aebe24f76f0787df5e0fbd64e5ef560e60)

### Editor

- simplify some things around hotkeys, minimap rtis [`522ec9aa9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/522ec9aa9977a1c94bf0a1ef133156e4b45737a1)
- remove SCRFIX [`8cedcd224`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cedcd2248d2f7ce3bf0440a772a0eafcbd0cf6f)
- speed up zmap::draw [`0c869ae11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c869ae11ac5d35049c692823928c575f704b83e)

### ZScript

- remove idEnd to get rid of noisy compiler warning [`0fd05985c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fd05985c7a35c38ff96c679c9df32784b559042)

# Tests

- make new cpp test runner more modular [`fe8ddbe73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe8ddbe7382f152558e51962e34673ac1abb94ab)

# CI

- remove broken nightly behavior in changelog script [`49a4bed9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49a4bed9db8efbbd54250d493c824a27ce217476)
   &nbsp;
   >The changelog script attempted to make a changelog since last stable for nightly releases, but it was broken and caused retried publish jobs to fail. Remove it. Besides, this exact same behavior is implemented correctly in package.py for nightlies, and it hasn't been needed in the changelog script. 
   >

# Misc.

- add missing new SCCs in c4ff8de1 [`2fa3241c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fa3241c97e687b48c581ad8741f938a0de80bdc)
