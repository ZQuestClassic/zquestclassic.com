---
title: 3.0 Prerelease 227 2026-10-06
description: 
date: 2026-10-06T04:19:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.227%2B2026-10-06/3.0.0-prerelease.227%2B2026-10-06-linux.tar.gz
    name: 3.0.0-prerelease.227+2026-10-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.227%2B2026-10-06/3.0.0-prerelease.227%2B2026-10-06-mac-universal.dmg
    name: 3.0.0-prerelease.227+2026-10-06-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.227%2B2026-10-06/3.0.0-prerelease.227%2B2026-10-06-windows-x64.zip
    name: 3.0.0-prerelease.227+2026-10-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.227%2B2026-10-06/3.0.0-prerelease.227%2B2026-10-06-windows-x86.zip
    name: 3.0.0-prerelease.227+2026-10-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 404517677
tag_name: '3.0.0-prerelease.227+2026-10-06'
channel: '3'
tags:
  - releases
---

# Bug Fixes

### Player

- Slopes past a region's edge used the wrong scrolling sidewarp [`798700eb8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/798700eb8c77d9138d4909958e2a1ee0120f7054) [Discord](https://discord.com/channels/876899628556091432/1556688796995559475)
   &nbsp;
   >In sideview, the slopes just past each edge of a scrolling region were taken from the screen that the sidewarp of the Hero's current screen leads to, rather than the sidewarp of the screen on that edge.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Large Hitbox Hero could not walk up a slope off the top of the screen [`b879022223`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b879022223ae6135dbfce36e5c6b33d5ad634d21) [Discord](https://discord.com/channels/876899628556091432/1556688796995559475)
   &nbsp;
   >In sideview, with the Large Hitbox quest rule on, walking up a slope that continues onto the screen above made the Hero stop at the top edge and fall back down, instead of scrolling to the next screen.  
   >
   >Regressed in 3.0.0-prerelease.76+2024-10-19 ([a4fc925491](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4fc925491)). 
   >

### ZScript

- Scripted weapons imitating a bomb blast now open bomb doors [`82cc1a95ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82cc1a95acb4a9735432e4f1267613a837410556) [Discord](https://discord.com/channels/876899628556091432/1551521592209576036)
   &nbsp;
   >An lweapon such as `LW_SCRIPT1` with its `Weapon` attribute set to a bomb blast would trigger bomb secret flags and combo triggers, but left NES bomb doors shut. Only the engine's own blast opened them, on a detonation timer that scripted weapons never run.  
   >
   >Bug introduced when weapon imitation via the `Weapon` attribute was added in 2.55-alpha-44 ([2ab35aaba1](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ab35aaba1)). 
   >
- `bitmap->Write()` rejected bare filenames [`00dd41e551`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00dd41e55110f3a5b126452fd7986033cde1d3f1) [Discord](https://discord.com/channels/876899628556091432/1556012804719382601)
   &nbsp;
   >With the quest rule "All bitmap-> and FileSystem-> paths relative to quest 'Files' folder" off, writing to a path with no directory component (like "test.png") failed with "the directory does not exist, and could not be created", because the code tried to create the empty parent directory.  
   >
   >Such paths now write to the ZC folder as before.  
   >
   >Regressed in 3.0.0-prerelease.24+2024-09-20 ([0480ad0349](https://github.com/ZQuestClassic/ZQuestClassic/commit/0480ad0349)). 
   >
- `ClearTrace()` could hang or crash during JIT compilation [`0d29750226`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d297502266902089e943bb0336c8121c7adebe8)
   &nbsp;
   >A script calling ClearTrace() while the JIT was compiling scripts in the background could hang or crash the player, most often with JIT logging enabled.  
   >
   >Regressed in 2.55-alpha-120 ([3e720b62d3](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e720b62d3)). 
   >

# Chores

- Add script to measure memory usage of zplayer and zeditor [`f9584cdbb6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9584cdbb6ba7141a67ff38bfb6a18e8e66ba802) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >scripts/measure_memory.py measures the peak memory of zplayer (playing each quest's replay when there is one, otherwise loading the quest) and zeditor (loading the quest) for a set of large quests, and prints a summary table. Results can be saved with --json and compared later with --baseline. Reports peak footprint on macOS and peak RSS on Linux. 
   >
- Update replay_uploads_known_good_replays.json [`a370e3ab7c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a370e3ab7c18ae98e92a0a40726298c851986d4e)

# Refactors

- Reduce memory usage of fixed-point values [`dc6be1e885`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc6be1e88573716ba73c8637f13199bcac63ab44) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Every fixed-point number (positions, speeds, and other fractional values) used 16 bytes of memory instead of 4. Shrinking them reduces peak memory usage by roughly 20-210 MB in the player, and 55-85 MB in the editor, depending on the quest. 
   >

### ZScript

- Use far less memory for JIT compilation [`0172bf3350`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0172bf335039f94a0699c0f9471a2e6158aeb92c) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Compiling a very large script function with the JIT could take gigabytes of memory, because the register allocator tracked the liveness of every temporary value in every basic block of the function. Only the few values that can live across blocks are tracked now. For quests with very large scripts, this lowers the player's peak memory by up to 2 GB (and by up to 9 GB when precompiling all scripts), and makes compiling scripts 20-66% faster.  
   >
   >Bug introduced when the JIT's script size limit was removed in 3.0.0-prerelease.53+2024-05-08 ([50b8b0bf2b](https://github.com/ZQuestClassic/ZQuestClassic/commit/50b8b0bf2b)). 
   >

# Tests

- Add a replay flag that corrupts one frame [`be6f750c02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be6f750c02a04c7431cb0e1fdd27a85a6cae9965)
   &nbsp;
   >The -replay-debug-corrupt-frame <frame> flag inverts the top-left corner of that frame before it is hashed and snapshotted, so a replay fails with a visible graphical difference. It exists to exercise the replay failure tooling, such as compare reports. 
   >

# CI

- Compare report failed for release branch replay failures [`dd6e748c71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd6e748c717602e6a4ac049b30f670566a941177)
   &nbsp;
   >The compare report flow assumed every CI failure was on main: the baseline was always taken from main's latest passing run, and whether a failing replay belongs to the test suite was decided by looking at the compare job's checkout (always main). For a releases/2.55 failure that dispatched a main-code baseline run with 2.55's replay list, and since main had moved classic_1st.zplay and ganon.zplay into a subfolder, those two were passed as positional paths next to --filter args, which run_replay_tests.py cannot combine ("unknown test ...").  
   >
   >The baseline branch is now derived from the failing CI run: a PR uses its base branch, a push to main or a releases/* branch is its own baseline, and anything else falls back to main. Test suite replays are recognized by their recorded path rather than by probing the checkout. Mixing suite replays with external ones now raises a clear error instead of producing an invocation that fails later.  
   >
   >Regressed in 3.0.0-prerelease.110+2025-06-14 ([f41d583748](https://github.com/ZQuestClassic/ZQuestClassic/commit/f41d583748)). 
   >
- Add a self-test for compare report generation [`691494beed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/691494beed43a5dd47f87febcc5741634800c862)
   &nbsp;
   >tests/run_compare_selftest.py dispatches a Test workflow run of a single replay with -replay-debug-corrupt-frame, waits for it to fail, then runs the compare workflow's command (ci.py compare-replays) against it locally, which collects a baseline run and builds the report. With --run-id it skips the dispatch and reports on an existing failed run. Nothing is published unless --publish is given.  
   >
   >Also ignore the test-results folder that compare-replays downloads artifacts into. 
   >
- Compare report showed context frames as failures [`f572d9c7f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f572d9c7f954d23fb65c47f3d154c4e103d24c34)
   &nbsp;
   >A failing replay also saves snapshots of frames that matched, such as the last frames that changed before a failure. On a static screen those can be long before the failure, outside what the baseline run captures. The report treated any frame without a baseline image as unexpected: "Show only unexpected frames" listed those frames as their own failing segment, with red markers, though nothing failed there.  
   >
   >Now only frames a run actually flagged as unexpected count, and red markers only show a run's own failures. 
   >
- Download bison from several GNU mirrors, verifying its checksum [`9f60f11c42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f60f11c4232b1a7f7a292c44870eaea960a3cff)
   &nbsp;
   >The Intel macOS build still failed to fetch bison after switching to ftpmirror.gnu.org: that redirector runs on the same FSF host as ftp.gnu.org (209.51.188.x), so when FSF is unreachable both time out. Try a list of independent mirrors (kernel.org, Berkeley, Waterloo, dotsrc) before falling back to the FSF hosts, and pin the tarball's sha256 so any mirror is as trustworthy as the origin. 
   >
