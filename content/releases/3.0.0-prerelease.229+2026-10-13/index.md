---
title: 3.0 Prerelease 229 2026-10-13
description: 
date: 2026-10-13T06:33:03Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.229%2B2026-10-13/3.0.0-prerelease.229%2B2026-10-13-linux.tar.gz
    name: 3.0.0-prerelease.229+2026-10-13-linux.tar.gz
    platform: linux
    size: 36649545

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.229%2B2026-10-13/3.0.0-prerelease.229%2B2026-10-13-mac-universal.dmg
    name: 3.0.0-prerelease.229+2026-10-13-mac-universal.dmg
    platform: mac
    size: 52340925

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.229%2B2026-10-13/3.0.0-prerelease.229%2B2026-10-13-windows-x64.zip
    name: 3.0.0-prerelease.229+2026-10-13-windows-x64.zip
    platform: windows-x64
    size: 36460172

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.229%2B2026-10-13/3.0.0-prerelease.229%2B2026-10-13-windows-x86.zip
    name: 3.0.0-prerelease.229+2026-10-13-windows-x86.zip
    platform: windows-win32
    size: 34527826
prerelease: true
id: 411446199
tag_name: '3.0.0-prerelease.229+2026-10-13'
channel: '3'
tags:
  - releases
---

# Bug Fixes

- Occasional crash when quitting on macOS [`f90f1ca20a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f90f1ca20af502ed24ec1806c4f6406f1bcc04de)
   &nbsp;
   >Closing the window on exit could crash, because the window's view was used after the window had already freed it.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Leaked memory when loading quests with custom type names [`1bd16af581`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bd16af581f0d808960f7c9e262441083f6d58ab)
   &nbsp;
   >Loading a quest that has custom names for item classes, combo types, map flags, etc. leaked those names every time it was loaded.  
   >
   >Regressed in 2.55-alpha-107 ([6b0abe1f8a](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b0abe1f8a)). 
   >

### Player

- Leaked memory every time the subscreen was opened [`d343169afd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d343169afdced10fba2c2bd13f57332ea897b97b)
   &nbsp;
   >Each time the subscreen opened, a copy of the screen it slides over was leaked (45-60 KB per open).  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Subscreen widgets randomly hidden in older quests [`ce9dcc2891`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce9dcc2891b9962db56a8ca2e2fb0b0f65ac254d)
   &nbsp;
   >Subscreen widgets loaded from older quests (old-style subscreens, or subscreens saved before widget conditions existed) could randomly fail their display conditions and not be drawn. For example, the DMap title in Yuurand or the item selector in Crucible Quest would sometimes be missing, depending on the platform and build.  
   >
   >Bug introduced when subscreen widget conditions were added in 3.0.0-prerelease.108+2025-05-30 ([474322fb17](https://github.com/ZQuestClassic/ZQuestClassic/commit/474322fb17)). 
   >
- Reflected weapons could randomly run their death effects [`67984dc363`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67984dc363cae07a93f81f1a6ba07839e564bdc7)
   &nbsp;
   >When a weapon was reflected as a copy (e.g. with the "Old Weapon Reflection" rule), the copy started with leftover memory for a few properties. It could then randomly spawn its death item/sprite/sound when it died, draw the wrong shadow tile, or use the wrong weapon/defense type for bomb-style weapons.  
   >
   >Bug introduced when lifted combos as bombs were added in 2.55-alpha-114 ([21447f7517](https://github.com/ZQuestClassic/ZQuestClassic/commit/21447f7517)). 
   >

### ZScript

- Passing `Game->AllocateBitmap()` twice in a row gave the same bitmap [`be638eba1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be638eba1b3e37ba1b4b0b0deaf739824695a1b6)
   &nbsp;
   >Calling a function with two Game->AllocateBitmap() arguments in a row, like `f(Game->AllocateBitmap(), Game->AllocateBitmap())` or the same in printf/sprintf arguments, allocated only one bitmap and passed it twice.  
   >
   >Regressed in 3.0.0-prerelease.15+2023-12-17 ([d79b131ab7](https://github.com/ZQuestClassic/ZQuestClassic/commit/d79b131ab7)). 
   >
- ZASM optimizer dropped global variable assignments [`1dfb9de1e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1dfb9de1e50308be514a71217e8cf983fc78732e)
   &nbsp;
   >Assigning a global variable and then passing it straight to a built-in function that takes its arguments on the stack (like `Distance`, `ArcTan` or `Game->GetDMapMusicFilename`) could lose the assignment, so the variable kept its old value. The common enhanced music script does exactly this with the current DMap. Found in 4 quests.  
   >
   >Regressed in 3.0.0-prerelease.25+2024-01-13 ([4429211711](https://github.com/ZQuestClassic/ZQuestClassic/commit/4429211711)). 
   >
- Comparing two known bools could be folded wrong by ZASM optimizer [`335f45edef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/335f45edefc4c7e810ed04383e1b3da46cffce73)
   &nbsp;
   >A comparison of two bools (`==` or `!=`) whose result is used as an int could get the wrong value once the optimizer already knew both sides. For example `<int>((<int>(x < y) != 2) == true) > 0.5` was always false, though `<int>(x < y) != 2` is always true.  
   >
   >Bug introduced when comparison reduction was added to the optimizer in 3.0.0-prerelease.21+2024-01-06 ([419aac8040](https://github.com/ZQuestClassic/ZQuestClassic/commit/419aac8040)). 
   >
- Experimental ZASM optimizer could repeat or skip creating things [`0293f09e4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0293f09e4a86756eb85e6e9b104a881dffba27be)
   &nbsp;
   >With -optimize-ZASM-experimental, storing `Game->AllocateBitmap()` into an array element allocated a second bitmap: the array got the second one and the first leaked. Calling `Game->AllocateBitmap()`, `Game->CreateBitmap()`, `Screen->CreateLWeaponDx()` or `Game->IncrementQuest()` without using the result did nothing. Stellar Seas hits the first case.  
   >
   >Regressed in 3.0.0-prerelease.30+2024-01-21 ([dddd96cf11](https://github.com/ZQuestClassic/ZQuestClassic/commit/dddd96cf11)). 
   >
- Script errors under the JIT could name an unrelated command [`a141d817ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a141d817bad5405e7504dc4723076e45fa335400)
   &nbsp;
   >With the JIT, a script error could start with the name of a command the script ran earlier, such as "Waitframe(), sprite::X | ..." instead of "sprite::X | ...". Errors recorded in replays then differed between the JIT and the interpreter.  
   >
   >Bug introduced when error context was added in 3.0.0-prerelease.104+2025-05-14 ([b7829c0f8e](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7829c0f8e)). 
   >
- Prevent crash running scripts with broken jumps [`fda7f8134b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fda7f8134b7bd804bc82bfb667808f236690ca69)
   &nbsp;
   >A bug in the 2.55 alphas' Export/Import ZASM feature made every jump in a script go to -1 (an invalid position). The only known quest with this is Rites of Lineage. The interpreter ends the script with an error when it reaches such a jump, but the JIT crashed the game.  
   >
   >Such scripts are now disabled when the quest loads, with a warning in the log. Nothing is lost: they never ran past their first jump.  
   >
   >Regressed in 3.0.0-prerelease.132+2025-09-09 ([daa1161618](https://github.com/ZQuestClassic/ZQuestClassic/commit/daa1161618)). 
   >
- Prevent crash analyzing scripts with broken conditional jumps [`2bacc6ecfb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bacc6ecfb0e07e481c2004c729e237791da3d8d)
   &nbsp;
   >A conditional jump to a pc outside of the script (which only malformed quests have) that sits right before a jump target gave the control flow graph an edge to a block past its end, which the ZASM optimizer and the JIT then read out of bounds.  
   >
   >Bug introduced when the ZASM control flow graph was added in 3.0.0-prerelease.10+2023-12-24.z3 ([08254299cb](https://github.com/ZQuestClassic/ZQuestClassic/commit/08254299cb)). 
   >

# Build

- Catch invalid bool loads in the Asan config [`926e658ed5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/926e658ed507f55be2350f7fc887e739dd9d32a8)
   &nbsp;
   >Add -fsanitize=bool (non-recoverable) to the non-MSVC Asan flags. ASan fills new heap memory with 0xbe, so reading an uninitialized bool member now aborts instead of silently reading garbage. 
   >

# Tests

- Print the stopped thread first in lldb wrapper backtraces [`8a17dacce1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a17dacce1c066737b38e5946a01fcd73147e4d6)
   &nbsp;
   >When a process stops under the lldb wrapper, print the threads that have a stop reason (signal, exception) before the idle ones, and repeat them at the end of the output. The replay test runner only shows the last 50 lines of stderr, so the faulting thread used to be cut off and only idle worker threads were visible. This hid the cause of the "failed w/ exit code 255" shutdown stops in the mac no-headless replay step. 
   >
- Give replay runs started in the same second their own results folder [`5dde5262ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dde5262ff5dd9c3ffe4d7f5e6cf9b41bff578ff)

# CI

- Fix gcc-only replay exclusion applying to every compiler [`3d2806dbc4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3d2806dbc42bb9acebecbe31c41381442c677e55)
   &nbsp;
   >The replay-tests steps never passed --compiler, so ci.py fell back to its "gcc" default on every runner and dropped yuurand_riviere and crucible_quest_short from the no-JIT and no-optimizer runs everywhere, not just under gcc. Pass the compiler through.  
   >
   >The gcc exclusion itself is still needed: both replays diverge under gcc without the JIT (frames 38 and 1062), same as the known gcc floating-point playback differences. 
   >
- Run yuurand and crucible replays w/o JIT/optimizer under gcc too [`adc7503b75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/adc7503b75c6dc0b580bb2b597612afcca1ece1b)
   &nbsp;
   >These were excluded under gcc because they failed there, which was assumed to be gcc's known floating-point playback difference. The real cause was uninitialized subscreen widget fields, fixed in the previous commit. 
   >
