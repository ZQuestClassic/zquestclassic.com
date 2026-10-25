---
title: 3.0 Prerelease 232 2026-10-24
description: 
date: 2026-10-25T06:30:25Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.232%2B2026-10-24/3.0.0-prerelease.232%2B2026-10-24-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.232+2026-10-24-linux-aarch64.tar.gz
    platform: linux-aarch64
    size: 33576507

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.232%2B2026-10-24/3.0.0-prerelease.232%2B2026-10-24-linux-x64.tar.gz
    name: 3.0.0-prerelease.232+2026-10-24-linux-x64.tar.gz
    platform: linux
    size: 34175692

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.232%2B2026-10-24/3.0.0-prerelease.232%2B2026-10-24-mac-universal.dmg
    name: 3.0.0-prerelease.232+2026-10-24-mac-universal.dmg
    platform: mac
    size: 40540474

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.232%2B2026-10-24/3.0.0-prerelease.232%2B2026-10-24-windows-arm64.zip
    name: 3.0.0-prerelease.232+2026-10-24-windows-arm64.zip
    platform: windows-arm64
    size: 36871385

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.232%2B2026-10-24/3.0.0-prerelease.232%2B2026-10-24-windows-x64.zip
    name: 3.0.0-prerelease.232+2026-10-24-windows-x64.zip
    platform: windows-x64
    size: 36299256

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.232%2B2026-10-24/3.0.0-prerelease.232%2B2026-10-24-windows-x86.zip
    name: 3.0.0-prerelease.232+2026-10-24-windows-x86.zip
    platform: windows-win32
    size: 34376061
prerelease: true
id: 423217176
tag_name: '3.0.0-prerelease.232+2026-10-24'
channel: '3'
tags:
  - releases
---

# Features

- Let GUI widgets be marked as having an invalid value [`7e00a24f61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e00a24f6125e66edd3d586db24cae0fb153de5d)
   &nbsp;
   >A widget marked invalid gets a red border, and its tooltip shows even when tooltips are turned off, so it can say what's wrong. Also, a text field can now show a starting value outside of its bounds as is, rather than clamping it. 
   >

### Editor

- Show script setup values that are invalid for their field [`2619fc4c64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2619fc4c64ad8f1b36ba61b5ddbb5059d7f37948) [Discord](https://discord.com/channels/876899628556091432/1560132624796880956)
   &nbsp;
   >In a script's setup, an exported variable whose value isn't one of its dropdown's options, is outside its range, or has unlisted flags set was shown as the closest valid value instead, which looked like the value had been changed. Such fields now show the value as is, with a red border, and hovering them explains what's wrong. 
   >
- Copy InitD values when converting a script to exported values [`97e6fe2155`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97e6fe21556b46487af9bb68c2aa1dd05a02471a) [Discord](https://discord.com/channels/876899628556091432/1560132624796880956)
   &nbsp;
   >A script that takes its setup values as `run()` parameters (InitD) can now be converted to exported variables without setting every placement up again: replace the parameters with exported variables of the same names and remove all of the `run()` parameters. When compiled, each placement's InitD values are copied to the variables of the same name, unless one already has a value set there. InitD itself is left as is. 
   >

# Bug Fixes

- Fix gauges from old subscreens sometimes drawing as a grid [`85268151ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85268151ffb3a69602f03342badbbcdf94b267b9)
   &nbsp;
   >Life and magic gauges converted from a quest's old-format subscreens got random values for settings the old format doesn't have, such as the gauge's grid size and spacing, so a gauge could draw as a grid of pieces. Other converted subscreen widgets had the same problem with a few of their settings. Saving the quest in the editor also stored the random values.  
   >
   >Bug introduced when new life gauge settings were added in 2.55-alpha-117 ([99462bf6b0](https://github.com/ZQuestClassic/ZQuestClassic/commit/99462bf6b0)). 
   >
- Initialize two values that could be read before being set [`ab6df5e5d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab6df5e5d667b5159893ba6ddbb3e56ed0961a8b)
   &nbsp;
   >Neither one changes behavior. 
   >

### Player

- Fix portals sometimes warping the Hero on arrival [`a1422fcc6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a1422fcc6f5a12bc711373427f7a66ed93e90d3b)
   &nbsp;
   >Entering a screen with a portal on it, such as the one left by the Magic Mirror, could warp the Hero as soon as they were standing on the portal, instead of waiting for them to step off of it first. Whether it happened depended on leftover memory. Portals created by scripts could also start animating from a random frame and draw the wrong tile.  
   >
   >Bug introduced when user created portals were added in 2.55-alpha-114 ([ca30be23d1](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca30be23d1)). 
   >
- Stop writing random bytes for a used-up portal into saves [`8730313ad4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8730313ad445acc60073b40106157790dbebcc76)
   &nbsp;
   >Doesn't change gameplay: a cleared portal is never loaded.  
   >
   >Bug introduced when user created portals were added in 2.55-alpha-114 ([ca30be23d1](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca30be23d1)). 
   >

### Editor

- Keep exported script variable values when variables move [`b5d675f7cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5d675f7cb5330edaa25412c697262db1af387ee) [Discord](https://discord.com/channels/876899628556091432/1560132624796880956)
   &nbsp;
   >Values set in the editor for a script's exported variables were stored by the variable's position in the script, so adding, removing or reordering the script's variables scrambled the values of every placed copy of the script (FFCs, combos, items, enemies, ...). Now, when slots are assigned after compiling, the values follow their variables by name, keeping their numbers if a variable changed between int and long. If a variable with values set is gone and others were added, the editor asks which one it was renamed to, or whether to discard its values.  
   >
   >Bug introduced when exported variables were added in 3.0.0-prerelease.205+2026-07-30 ([76b97b95ee](https://github.com/ZQuestClassic/ZQuestClassic/commit/76b97b95ee)). 
   >
- Fix see-through transparent pixel marks in the tile editor [`22cb4f2c15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22cb4f2c15b855350e3e3ba389ed459dbf4873e0) [Discord](https://discord.com/channels/876899628556091432/1563790874016485417)
   &nbsp;
   >The X marks drawn over transparent pixels in the tile editor could turn see-through, showing whatever was behind the editor, for some choices of color 0 (for example a dark gray). They are now always drawn with one of the standard editor colors.  
   >
   >Regressed in 2.55-alpha-113 ([93f18c3ef0](https://github.com/ZQuestClassic/ZQuestClassic/commit/93f18c3ef0)). 
   >

### ZScript

- Stop leaving imported script files open [`7d47087768`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d47087768b14d7c0dd1e2a19a22829514cd7fed)
   &nbsp;
   >Each file a script imports (including the script itself) was opened to check that it exists, and never closed. On Windows, those files couldn't be deleted or renamed until the compiler exited.  
   >
   >Regressed in 3.0.0-prerelease.45+2025-02-14 ([20885219b6](https://github.com/ZQuestClassic/ZQuestClassic/commit/20885219b6)). 
   >
- Keep `Distance()` identical across cpu architectures [`0393f1ec5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0393f1ec5ca2fd2236ea0541346d9dbb5aca02b5)
   &nbsp;
   >Distance() and LongDistance() could return a value 0.0001 lower on arm64 than on x86, desyncing replays recorded on the other architecture. 
   >
- Fix crash when reading script variables from debug info [`c4be21b655`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4be21b655e66df4066151f304a7c5e48c67c8b8)
   &nbsp;
   >Script debug info could think its variable and scope lookups were already built when they weren't, and then crash. Whether it happened depended on leftover memory, so it only showed up in some builds (the parser tests crashed on gcc and Windows builds).  
   >
   >Bug introduced when scope info was added to debug data in 3.0.0-prerelease.161+2026-02-16 ([b3f408e08b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3f408e08b)). 
   >
- Fix crash from a comment after a one-line enum [`2be08e7197`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2be08e71977a12b85036eb7ccdeeeab02a811f82)
   &nbsp;
   >A comment at the end of a line holding a whole enum, like `enum { A, B }; // ...`, was written into memory that had already been freed, which could crash the compiler. It now documents the enum.  
   >
   >Regressed in 3.0.0-prerelease.185+2026-05-10 ([ed22cfa753](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed22cfa753)). 
   >
- Fix the debugger's source view background on open [`18b38dae5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18b38dae5b570f9462fa4f232c5b2595757f4f55)
   &nbsp;
   >The first frame of the script debugger's source view drew its background with a random color.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >

### ZLauncher

- Fix cursor and alternate text colors for built-in themes [`2bc928ffa3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bc928ffa35580b369c571bcc5bdd326265016c5)
   &nbsp;
   >The built-in themes left the cursor, read-only text and disabled colors unset (or set to the wrong value), instead of using their defaults.  
   >
   >Regressed in 3.0.0-prerelease.49+2024-04-06 ([cb05cf84df](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb05cf84df)). 
   >

### Web

- Show modified dates in the browser files list [`ef0fed8464`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef0fed8464495fc792332eae6094239d075974c9)
   &nbsp;
   >The files list in the settings panel showed "Invalid Date" for every file.  
   >
   >Regressed in 3.0.0-prerelease.105+2025-05-19 ([10b4684be3](https://github.com/ZQuestClassic/ZQuestClassic/commit/10b4684be3)). 
   >
- Compile every script with the JIT when loading a quest [`37ccb7bc95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37ccb7bc95590899937c2118af7f392e558b7baf)
   &nbsp;
   >With the JIT on in the web version, loading a quest could leave some of its scripts uncompiled, so they ran slower, with "error compiling ..." in the log.  
   >
   >Regressed in 3.0.0-prerelease.197+2026-07-06 ([9ae8b8ed98](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ae8b8ed98)). 
   >
- Log a failed file fetch instead of a ReferenceError [`ab77c4fc32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab77c4fc32a9c4a3244fef111f787288ef871ba2)
   &nbsp;
   >When fetching a quest file failed, the web version logged "error fetching <path> ReferenceError: e is not defined" rather than the failure itself.  
   >
   >Regressed in 3.0.0-prerelease.127+2025-08-16 ([496d2ca008](https://github.com/ZQuestClassic/ZQuestClassic/commit/496d2ca008)). 
   >

# Documentation

- Add compatibility notes to the message strings page [`4514f780d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4514f780d66b117206399071ec2ff8c4b2c5a63e)
   &nbsp;
   >Covers how strings from older quests are converted, the compat rules that change how strings behave, and known 2.55 bugs with screen state SCCs. Also fixes the 2.55 format listed for TriggerComboCopycat, which 2.55 does not support. 
   >

# Build

- Compress the mac .dmg with LZMA [`4304a8b8dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4304a8b8ddc8bb2477f778b0ef5982ec3a972eb6)
   &nbsp;
   >The mac download is about 18% smaller (52 MB -> 43 MB for 3.0.0-prerelease.231). LZMA disk images need macOS 10.15, and the minimum supported version is already 12.0. 
   >
- Strip symbol tables from mac and linux binaries [`1d5c49f1d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d5c49f1d46209a91577ee6ace4f20bef0cae722)
   &nbsp;
   >Shrinks the mac download by about 5 MB and the linux download by about 1.3 MB. Debug info was already kept out of the packages, but the symbol tables were not. 
   >
- Make the editor about 20% smaller [`f34198f9d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f34198f9d52cf3714c571e1747cd4e0621365a7c)
   &nbsp;
   >Dialog code is now built for size, which shrinks zeditor by about 20% (11% compressed) with no effect on gameplay. 
   >
- Upgrade sentry-native from 0.6.6 to 0.17.4 [`d2e7f31720`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2e7f31720a4a3c46c97dba2699f488b6e37f70f)
- Enable Sentry in the Windows arm64 release [`6b1ae049d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b1ae049d049e81fd1e69573c786204b8c582355)

### Web

- Stop using emscripten APIs removed after 6.0.6 [`d2f9e8f1c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2f9e8f1c5d9040878cb2e53dc30b978a3ac1091)
- Make the ZScript compiler smaller and faster [`4a1eaf028e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a1eaf028e25c64416ef20c4810f648889d18876)
   &nbsp;
   >The ZScript compiler is now about a third smaller (3.3 MB instead of 5 MB), and compiles scripts about 13% faster. 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`32c8deb0b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32c8deb0b00369f12febe32597a20c7309b02f1d)

# Refactors

- Move widget pointers in the GUI builder instead of copying [`0141830e28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0141830e284c804b799eaf477de16ee6a0ee9adc)
   &nbsp;
   >Each widget's shared_ptr was copied into its builder, copied again out of it, and copied once more into its parent, inlining a refcount pair and its cleanup paths per copy. Under -Oz this saves ~130 KB of zeditor. 
   >

### Web

- Run JIT scripts without an asyncify round-trip [`7715e9b405`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7715e9b405dd8a6c04b7162693897556266c7097)
- Drop the JIT's check for stale compiled scripts [`2fdf800b3a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fdf800b3a9686b0adf75db6d0dd36b6f78ed457)
- Stop logging every compiled script module [`0e2a5f4d82`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e2a5f4d8278fb856ce001634af5f0d3a2b407ce)

# Tests

- Always report a crashing target, and exit 128+signal [`ed028604a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed028604a628dad955447ef505aba246dc7a0f35)
- Don't warn about missing backtraces after reporting a crash [`4cef68d4ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4cef68d4ed12d5267735d2e7f3f915a8b3ef0aa4)

### Player

- Skip the title screen tests on web [`5d35234785`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d352347852530b71339252271b7a81e5e313eeb)

### ZScript

- Cover a script running a frozen generic script [`41ba670213`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41ba670213ccf769593a4b5f13e44735d7eee259)

# CI

- Retry the Windows Chocolatey install when the package feed is down [`dcb86edd32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dcb86edd325d3d37edbfadd63f2193444f32c522)
   &nbsp;
   >The community Chocolatey feed intermittently answers 503/504, which choco then reports as "package not found" and fails the whole build job before anything is compiled. Retry the install a few times with a pause between attempts; already-installed packages are skipped on the next try, so only the fetches that failed are repeated. 
   >
- Only save ccache from main and release branches [`b25877cdf2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b25877cdf2efe9f058f5158c851c1ff9645fa64d)
- Run web replay tests concurrently [`af0941aace`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af0941aace14aa63264e3b911b11b24f3c28e21b)

# Misc.

- Update `trigger_example.qst` with spinner setup [`b4949f307a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4949f307a69af191cbe9172efedf4321ce331f5)

### Editor

- Mention in InitD tab that it is the old way [`def10377a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/def10377a25140c2d115baaa34cc1f44a387d6d4)
