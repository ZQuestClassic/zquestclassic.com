---
title: 3.0 Prerelease 231 2026-10-23
description: 
date: 2026-10-24T01:38:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.231%2B2026-10-23/3.0.0-prerelease.231%2B2026-10-23-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.231+2026-10-23-linux-aarch64.tar.gz
    platform: linux-aarch64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.231%2B2026-10-23/3.0.0-prerelease.231%2B2026-10-23-linux-x64.tar.gz
    name: 3.0.0-prerelease.231+2026-10-23-linux-x64.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.231%2B2026-10-23/3.0.0-prerelease.231%2B2026-10-23-mac-universal.dmg
    name: 3.0.0-prerelease.231+2026-10-23-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.231%2B2026-10-23/3.0.0-prerelease.231%2B2026-10-23-windows-arm64.zip
    name: 3.0.0-prerelease.231+2026-10-23-windows-arm64.zip
    platform: windows-arm64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.231%2B2026-10-23/3.0.0-prerelease.231%2B2026-10-23-windows-x64.zip
    name: 3.0.0-prerelease.231+2026-10-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.231%2B2026-10-23/3.0.0-prerelease.231%2B2026-10-23-windows-x86.zip
    name: 3.0.0-prerelease.231+2026-10-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 422465401
tag_name: '3.0.0-prerelease.231+2026-10-23'
channel: '3'
tags:
  - releases
---

# Features

- Publish a Linux build for aarch64 (arm64) devices [`2458595531`](https://github.com/ZQuestClassic/ZQuestClassic/commit/245859553198909bb3b766e5bdce47b34c9fdb71)
   &nbsp;
   >Releases now include "{version}-linux-aarch64.tar.gz" alongside the x86-64 Linux package, which is renamed from "{version}-linux.tar.gz" to "{version}-linux-x64.tar.gz". 
   >
- Publish a Windows build for arm64 devices [`c033e2576c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c033e2576c1c631de14f571daaf25d50c5c228bc)
   &nbsp;
   >Releases now include "{version}-windows-arm64.zip", a native build for Windows on arm64. 
   >

# Bug Fixes

- [linux] prevent crash on startup when there is no ALSA MIDI sequencer [`2b5816b200`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b5816b2006145906974151a97f3104a2fc40044)
   &nbsp;
   >Bug introduced when Linux support was added in 2.55-alpha-112 ([75d202a5af](https://github.com/ZQuestClassic/ZQuestClassic/commit/75d202a5af)). 
   >
- Prevent crash on startup with some gamepads, like some 8BitDo controllers [`d764d9baa7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d764d9baa702ccb379150471b993c9f081905122)
   &nbsp;
   >Controllers that report more than 32 buttons, such as some 8BitDo controllers on Windows, corrupted memory when detected, which crashed the program at startup or soon after. Extra buttons and sticks beyond what the engine supports are now ignored.  
   >
   >Also fixes a rarer crash when a controller was connected or disconnected while controllers were being detected.  
   >
   >Bug introduced when the SDL gamepad driver was added in 3.0.0-prerelease.221+2026-09-12 ([62568e4f79](https://github.com/ZQuestClassic/ZQuestClassic/commit/62568e4f79)). 
   >
- Fall back to the built-in file dialog when the native one fails [`f43b346015`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f43b346015a5755fa48ca008b242ca81a5e64300)
   &nbsp;
   >On Linux systems without xdg-desktop-portal (such as Batocera or minimal window manager setups), the native file dialog cannot open, so picking a quest or any other file silently did nothing. Now the built-in file dialog is used instead, and its "File Explorer" button is hidden for the rest of the session.  
   >
   >Regressed in 3.0.0-prerelease.209+2026-08-05 ([362608918f](https://github.com/ZQuestClassic/ZQuestClassic/commit/362608918f)). 
   >

### Player

- Death red tint could still differ between arm64 and x86 [`683866ab4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/683866ab4adf7c59c9ad5f728e9aa794a172cc4a)
   &nbsp;
   >The death animation's red tint could still come out slightly different on arm64 than on x86, causing replays recorded on one architecture to fail their graphics checks on the other. 
   >
- Replays that restart the game could fail to update or assert [`687f2ef881`](https://github.com/ZQuestClassic/ZQuestClassic/commit/687f2ef881ab519c713dc6db7ab65b310f08e76e)
   &nbsp;
   >When the game restarted (for example, after Save/Quit from the game over menu, or an F6 reset) while the "show bottom 8 pixels" option was set, updating a replay recorded the option change twice more each time, and asserting the result then failed.  
   >
   >Bug introduced when the option was added in 3.0.0-prerelease.93+2025-03-13 ([3bec0750ef](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bec0750ef)). 
   >
- Continuing could leave the hero with no life [`e9abc2b940`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9abc2b9405bf7b83c5dd74aa4277e9896571e73)
   &nbsp;
   >When continuing, the hero could be given 0 life and so die again immediately, over and over. This happened when the continue health is a percentage that rounds down to less than one heart (for example, 3% of 3 hearts), or when it is set to 0. Continuing now always gives at least one heart when rounding to whole hearts, and never less than 1 HP.  
   >
   >Context: https://www.purezc.net/index.php?page=comments&t=comments&id=6777 
   >
- A single unreadable save file prevented the program from starting [`c44dde7d01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c44dde7d0146da78bf8b541af457d5ff4e67a830)
   &nbsp;
   >Now the save file is just skipped, and shows up as a broken save slot on the title screen.  
   >
   >Bug introduced when saves were split into individual files in 2.55-alpha-117 ([b6b151149c](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6b151149c)). 
   >

### ZScript

- `Hero->SetItemSlot` could act on the wrong arguments [`a2aad72187`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2aad72187ecfa5286bdabe2abb080e9bd58b39d)
   &nbsp;
   >With the ZASM optimizer or the JIT enabled, Hero->SetItemSlot() (and Input->SimulateKeyPress) could act on stale arguments, e.g. giving the wrong item or slot.  
   >
   >Regressed in 3.0.0-prerelease.122+2025-07-28 ([119445961b](https://github.com/ZQuestClassic/ZQuestClassic/commit/119445961b)). 
   >
- Remove `Hero->GetOriginalFlip()`, which crashed the player [`780ac3baf7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/780ac3baf73d855a19b83cc754c7b09ed8c2d59f)
   &nbsp;
   >Calling Hero->GetOriginalFlip() crashed the player. It never actually worked (it always returned 0), so it is now removed. Quests already compiled with it no longer crash, and get 0 like they did before.  
   >
   >Regressed in 3.0.0-prerelease.172+2026-04-14 ([32dede9d77](https://github.com/ZQuestClassic/ZQuestClassic/commit/32dede9d77)). 
   >
- Npc and npcdata 'WeaponSecondarySFX' crashing the player [`7ddd37eaf3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ddd37eaf378f9f652f60e54eac3bf7557ca1d3d)
   &nbsp;
   >Reading or writing npc->WeaponSecondarySFX or npcdata->WeaponSecondarySFX crashed the player.  
   >
   >Bug introduced when 'WeaponSecondarySFX' was added in 3.0.0-prerelease.217+2026-09-02 ([488183e049](https://github.com/ZQuestClassic/ZQuestClassic/commit/488183e049)). 
   >
- Combotrigger GetReqExDoor/GetUnreqExDoor crashing [`7ae394ff8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ae394ff8acfd15a5ee9aaa47004fdf15b22f3b5)
   &nbsp;
   >Calling GetReqExDoor() or GetUnreqExDoor() on an invalid combotrigger crashed the player instead of just logging an error.  
   >
   >Bug introduced when exdoor trigger conditions were added in 3.0.0-prerelease.193+2026-06-06 ([616a0a2797](https://github.com/ZQuestClassic/ZQuestClassic/commit/616a0a2797)). 
   >
- Make -debug-print-register-deps catch setter dependencies [`75dbabedd8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75dbabedd898a2467c6570dd0221068b19c9d8bf)
   &nbsp;
   >The generator for the register dependency tables only ran getters, so a register whose setter reads D registers (SETITEMSLOT) was missing from _get_register_dependencies, and the JIT didn't flush them before calling the setter. Also run every setter, letting NOTREACHED throw in this mode to skip read-only registers.  
   >
   >The generator had also stopped running to completion:  
   >
   >* musicdata_run_command read REFMUSIC for every command it was asked
   >  about, so each weapondata command after it looked like it read two
   >  refs. Read the ref only in the cases that use it.
   >* MARK_TYPE_VARG needs a varargs stack.
   >
   >
   >&nbsp;
   >
   >Make DEBUG_REGISTER_DEPS a compile flag, since base/check.h needs it too, and move the hand-edited entries (REF_INC/REF_DEC, SAVEMENU_OPEN) into the generator, so its output now matches table.cpp exactly. The only new entries are setter ref dependencies for SCREENDATANUMFF and WAVY. 
   >
- lweapon scripts lifting themselves crashing or not resuming [`9788853bec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9788853bece5ee0c1198c4a88073f4948ae51a7e)
   &nbsp;
   >An lweapon script that lifts itself stops there for the frame, like a Waitframe. Lifting by setting Hero->LiftedWeapon to itself instead aborted the program. With the JIT, lifting with Hero->LiftWeapon() restarted the script from the top on every later frame instead of continuing after the call, and on the web it restarted from its last Waitframe.  
   >
   >Regressed in 3.0.0-prerelease.215+2026-08-24 ([0b8c59253f](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b8c59253f)). 
   >

# Documentation

- List supported platforms and Linux system requirements in the readme [`36b286437e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36b286437ef7c4331889cef643bffc5795730c1e)

# Build

- Stop requiring GLU on Linux [`74c6245dc5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74c6245dc5d671aa2cf2a807d4d6b336a86d8a32)
   &nbsp;
   >Allegro never called GLU (its one use has been commented out since 2008), but it required and linked libGLU anyway, so the Linux builds could not start on systems without libGLU.so.1, such as minimal or GLES-only images. The Allegro fork no longer links it. 
   >
- Package the MSVC runtime when built with a Visual Studio newer than CMake [`b943127033`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b94312703396b0ac139bcc5ba3bc9a2369cac263)
   &nbsp;
   >CMake 3.31's InstallRequiredSystemLibraries doesn't know Visual Studio 2026's redist folder (Microsoft.VC145.CRT), which the windows-11-arm runner image ships, so no runtime DLLs were found. Fall back to the active toolset's VCToolsRedistDir. 
   >
- Fix build of arm64 JIT with MSVC [`41e6a37f23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41e6a37f23c7660e2a7c4579835ec1774269744d)

# Chores

- Update replay_uploads_known_good_replays.json [`1731ca0492`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1731ca0492a3eacd56914bb74f1d73e97fddd575)

# Refactors

### ZScript

- Delete unused ZASM registers [`d8c72afd5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8c72afd5c5d05614666fde5859b349d8eef88f7)
   &nbsp;
   >These 36 registers have no runtime handler, and no compiler emits them: GAMESUBSCHEIGHT and PASSSUBOFS were last emitted by 2.55-alpha-99, and the rest never were. Only hand-written ZASM could reference them, and a script that did would hit NOTREACHED. Rename them to DELETED_* so their ids aren't reused, and drop their names so ZASM can't reference them. None of the ~1000 quests in the ZC-database archive use them. 
   >
- Derive ZASM command predicates from the command table [`78ace41d09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78ace41d09b0e28ab4a6a294abe2b785a34b11f1)
- Keep a script's object refs in one array [`abf9bac76e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/abf9bac76e166b3b9afc8fd84565b6ba28983a78)
- Remove the unreachable "combo script was replaced" check [`6a9cb990ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a9cb990ae5584af63e29c8adc043abc2820586b)
- Save nested script state in one struct [`4c624baf4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c624baf4daf496f4ae8e1ca6508770c04c574a5)
- Let the JIT read and write REF registers directly [`5ef3fc58c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ef3fc58c92d9fe743baec202fb06a477fc21f72)
- Track a script's object slots in bitsets [`fb813df173`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb813df1732f8a13952dab4a8a9de3e0ee4c0f0c)
- Compile REF_INC, REF_DEC, MARK_TYPE_STACK and ARRAYSIZE in JIT [`3242a67c2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3242a67c2c7a51bfd4450ce71bf64f54fc15e634)

# Tests

- Drop node ids from ZASM snapshots [`32757cc480`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32757cc480c12ce48f41079e8e4c1844379e7040)
   &nbsp;
   >The `if() #390`-style ids in ZASM comments are per-statement-type counters that run across every file the compiler parses, so editing a shared header such as the playground tests' test_runner.zs renumbered them in every snapshot without changing any ZASM. The snapshot test now strips them, and the existing snapshots are rewritten to match. 
   >
- Add auto tests for gameplay features no replay covered [`562f41eefd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/562f41eefd15cccd9e4aa6503a58b27deb014927)
   &nbsp;
   >Coverage showed these had no replay exercising them at all:  
   >
   >- camera_effect: the Camera cutscene effect (every subtype, easing
   >  curve and causes mode, freezing, returning, chaining, cancelling) and
   >  the Player Walk effect
   >- mirrors_and_light: mirror and prism combos/FFCs reflecting and
   >  splitting each weapon type, and combo/FFC light beams through mirrors,
   >  prisms, glass and blocks into light targets and triggers
   >- defense_outcomes: the Hero's defenses, and enemy defenses including
   >  split, summon, transform (into each enemy type), explosions, trigger
   >  secrets and switch
   >- switches_and_step_effects: global/level switches and blocks (timers,
   >  across screens, GlobalState triggers), timed triggers, Step->Effects
   >  and step combos
   >
- Record replay_uploads.py baselines without the JIT or optimizer [`8dff94c3c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8dff94c3c8062816e51eeb42fe7e95f46841580d)
   &nbsp;
   >--update now runs with the JIT and ZASM optimizer disabled by default,
   >so baselines come from the plain interpreter, while --assert still
   >enables both. --update_known_good then asserts the updated replays with
   >both enabled and only adds the ones that pass to the known good set;
   >replays that fail only there are listed as likely JIT or optimizer
   >bugs.
   >
   >
   >&nbsp;
   >
   >Also adds --JIT/--optimize-ZASM overrides and --build_folder. 
   >
- Re-assert JIT failures without the JIT in replay_uploads.py [`224da99ee4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/224da99ee4c3ba9bb396f223f6a10d6ce23d157a)
   &nbsp;
   >When --update_known_good finds replays that fail with the JIT and ZASM optimizer enabled, assert them again with both disabled. Those that pass are listed as likely JIT or optimizer bugs, and those that still fail as likely replay bugs, rather than labeling every failure a JIT bug. 
   >
- Skip the updater test for Windows arm64 builds until a release has one [`edf569fdf1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/edf569fdf119c87c7a9f2df71d068790512ed1e9)

# CI

- Upgrade sentry-cli to 2.58.6 and setup-sentry-cli to v3 [`68e73a39f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68e73a39f671a6090659ebecd3e51852bf5c0022)
- Test Windows arm64 [`3209bf5263`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3209bf52634e3e445d6adc386258dac30b4e427d)
   &nbsp;
   >Builds with MSVC on the windows-11-arm runner and runs the replay suite there with the native arm64 build (5 shards, like x64). vcpkg uses the arm64-windows triplet; RELEASE_PLATFORM is "windows-arm64", which zupdater's substring match can't confuse with windows-x64/x86.  
   >
   >CI's Python is x64 there, since many pinned packages have no win_arm64 wheels. Local runs on ARM64 Windows are labeled windows-11-arm even from such an emulated python. 
   >
- Build the Windows arm64 release without Sentry [`69d1dd6bad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69d1dd6badfdd12365c65f03856acbe5b4b68088)
   &nbsp;
   >sentry-native 0.6.6's bundled crashpad can't be built for Windows arm64 with MSVC: its zlib is compiled with x86 SSE4.2 intrinsics whenever the compiler is MSVC, and its context-capture sources are x86 MASM, so the first arm64 release build failed. sentry-native fixed both in 0.7.0; until it is upgraded, the arm64 release ships without crash reporting. The CI matrix was unaffected because it never enables Sentry. 
   >

# Misc.

- Add War Lord credit to AUTHORS [`bc29274c2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc29274c2e7f2f7b272b3ef5adfc25b2b4a3b162)
