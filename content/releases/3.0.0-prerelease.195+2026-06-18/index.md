---
title: 3.0 Prerelease 195 2026-06-18
description: 
date: 2026-06-18T05:17:40Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.195%2B2026-06-18/3.0.0-prerelease.195%2B2026-06-18-linux.tar.gz
    name: 3.0.0-prerelease.195+2026-06-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.195%2B2026-06-18/3.0.0-prerelease.195%2B2026-06-18-windows-x64.zip
    name: 3.0.0-prerelease.195+2026-06-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.195%2B2026-06-18/3.0.0-prerelease.195%2B2026-06-18-windows-x86.zip
    name: 3.0.0-prerelease.195+2026-06-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 341231896
tag_name: '3.0.0-prerelease.195+2026-06-18'
channel: '3'
tags:
  - releases
---


# Features

- Summoner Improvements [`a959db9840`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a959db9840b491d89eb8c1f4e029e622094e3ac6)
   &nbsp;
   >Enemies that Summon: - now have consistent configurations for summon count between Walking and Wizzrobe types - now allows configuring max enemy count - now count specifically enemies that they have summoned when checking against max enemy count - have a new flag to kill summoned enemies when they die (targetted ringleader effect)  
   >
   >Scripts now have '->SummonMinion()' and '->SummonMinionFromLayer()' to make an enemy summon other enemies. Scripts also have '->ParentSummoner' to set which enemy is considered the summoner of other enemies. 
   >
- Support passing args to RunFrozenGenericScript SCC [`57591e2966`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57591e296608494dac975337ebfa3135217865a1)
   &nbsp;
   >The "Run Frozen Generic Script" SCC can now pass up to 8 optional InitD arguments to the script it runs. The string editor exposes these on a new "Args" tab, labelled using the selected script's metadata. 
   >

### Editor

- Item Wizard for Stomp Boots [`648a2c4d83`](https://github.com/ZQuestClassic/ZQuestClassic/commit/648a2c4d83935cd4194368ff7c3494f3cdf20cb3)

### ZScript

- Add some new special draw layers [`78e3e79647`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78e3e7964726a2bccfff1a98ade16d04fd082a9c)
   &nbsp;
   >- under player draw for draws below the player
   >- over lift weapon, for above both the player and their held object
   >- over prompt combo, for above the player, their held object, AND any
   >prompt displaying above their head.
   >
- Add comment toggle shortcut to the web playground [`bc49a7e9d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc49a7e9d8203f654e7e7f3945b0cdc0e384ca8e)
   &nbsp;
   >`Ctrl/Cmd` + `Shift + /` now toggles line comments on the current selection in the ZScript web playground. 
   >

# Bug Fixes

- Auto-restart the API server after a crash [`de2d1f7cc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de2d1f7cc95a71ffaa1d731fabb6e7e3628f3d97)
   &nbsp;
   >The api_server systemd unit had no Restart= policy, so once uwsgi was killed (e.g. by the OOM killer) the service stayed down indefinitely. The daily safety-net cron used `systemctl try-restart`, which is a no-op on a stopped/failed unit, so it could never bring a dead service back.  
   >
   >Add Restart=on-failure to the unit and switch the cron to `restart`. 
   >
- Bound replay-upload gzip decompression to avoid OOM [`15c98cbf87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15c98cbf87471034e1e1a2a75bc54b5a8802a567)
   &nbsp;
   >gzip.decompress() on the uploaded replay was unbounded, so a small "gzip bomb" payload could decompress to gigabytes and exhaust memory before the 300 MB size check ran. Decompress incrementally with a cap so memory never exceeds the allowed replay size. 
   >
- Log replay-upload attempt size [`326a4089fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/326a4089feccbd43e66eee62981b6ff6f287063f)
- Prevent out-of-bounds write when loading a quest with an invalid combo count [`8a8aad8053`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a8aad80536e62418778985c76ef399db24c814b)
   &nbsp;
   >A crafted quest file could declare a combo count larger than the maximum number of combos, causing writes past the end of the combo buffer. 
   >
- Prevent out-of-bounds write when loading a quest with too many counters [`9f2e9a23fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f2e9a23fde3f3707b498566adac0a44f5282e21)
   &nbsp;
   >A crafted quest file could declare a counter count larger than the maximum, causing writes past the end of the counter arrays in the init data. 
   >
- Prevent out-of-bounds read from invalid DMap subscreen script index [`53e286745d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53e286745dff5719f505de6d7789a3d5461d2c64)
   &nbsp;
   >A crafted quest file could set a DMap's active/passive subscreen script index beyond the script table, causing an out-of-bounds read and dereference of an invalid script pointer when the quest is loaded or run. 
   >
- Avoid out-of-bounds read on unterminated enemy name in quest file [`7181a5d740`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7181a5d740d70ee3d47cd0399b98af826a65560c)
   &nbsp;
   >A crafted quest file could supply a 64-byte enemy name with no terminator, causing a string length scan to read past the end of the buffer. 
   >
- Avoid out-of-bounds read from invalid FFC combo index during quest load [`75d82a2132`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75d82a2132dbc9614a58bf11efe495d1cc3b242f)
   &nbsp;
   >A crafted quest file could give a freeform combo a combo index past the end of the combo buffer, causing an out-of-bounds read while fixing up old quests. 
   >
- Avoid out-of-bounds read from legacy secret-combo template index [`96dfec8251`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96dfec8251a5154df76e92e6c5498e355ff10fcb)
   &nbsp;
   >Loading a crafted old-format quest could use a secret-combo value as an index past the end of the template screen's combo arrays, reading out of bounds. 
   >
- Prevent out-of-bounds write from invalid combo pool/autocombo counts [`11238e724e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11238e724ec644e80912ca1b0520af3e2d85d4b6)
   &nbsp;
   >A crafted quest file could declare more combo pools or autocombos than the engine supports, causing writes past the end of those fixed arrays. 
   >
- Prevent out-of-bounds write from invalid favorite combo data [`d4e96aab88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4e96aab88d2d513a8d9c9171bbfeb8a9722ed5e)
   &nbsp;
   >A crafted quest file could declare too many favorite combos or an invalid per-row value, causing writes past the favorite-combo arrays (or a divide by zero from a zero per-row value). 
   >
- Prevent out-of-bounds write from invalid save menu count [`9d50f2f92f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d50f2f92f34391f4cc4f1bd517a8205beaf2fa1)
   &nbsp;
   >A crafted quest file could declare more save menus than the engine supports, causing writes past the end of the save-menu array. 
   >

### Player

- Tan truncated its angle to a whole radian outside replays [`57ddc6eb50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57ddc6eb507810c4afe941f9b8ed01f88cd18de1)
   &nbsp;
   >The non-replay Tan path cast its radian argument to int16_t before calling std::tan, so the fractional part of every angle was discarded (and angles outside +/-32767 wrapped): Tan(0.5) returned tan(0) == 0, and Tan(1.7) returned tan(1) ~= 1.56 instead of ~= -7.70. Sin and Cos were unaffected.  
   >
   >Regressed recently in 582c719656. 
   >
- Deterministic high-precision math for gameplay and replays [`03a999ccb4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03a999ccb46c84a7a8ec2b0fc3f763dc67bfad31)
   &nbsp;
   >While recording a replay, trig (Sin/Cos/Tan) switched to a low-precision lookup table, so simply having a replay enabled could change gameplay. Separately, ArcSin/ArcCos/ArcTan and Ln/Log10/Pow always used the system math library, whose results vary across platforms and compilers - a source of cross-platform replay desyncs. All of this math is now both high-precision and bit-identical on every platform and compiler: recording a replay never changes behavior, and replays cannot desync across machines due to math differences.  
   >
   >As an example of how the old trig error presented: in Stellar Seas, a boss laser derives its collision geometry from trig, and the recording- mode error (up to ~0.001) was amplified by the script into "phantom hitboxes" - hits landing tens of pixels away from the visible attack, only while a replay was recording.  
   >
   >Other user-facing effects:  
   >
   >- Pow(2, n) and Pow(10, n) are exact, and Log10 of a power of ten
   >  returns an exact integer, so digit-counting scripts behave reliably.
   >- Replays recorded before this version still play back with the old
   >  math, bit for bit.
   >
- Prevent rng desync when manually ending replay [`36b6c483fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36b6c483faaee30ea649a5b871420c83f6cca069)
   &nbsp;
   >When playing a replay file, selecting Quit in the menu caused an rng desync dialog to appear. Now, the program actually closes. 
   >
- 1-wide gaps being hard to fall through in sideview [`863bf0ddfe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/863bf0ddfe59513108e4b1c4d363463f0e173466)
- Validate parsed replay files with CHECK instead of ASSERT [`e07b32257e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e07b32257ec56a72233c9aa6f04349df43dffabb)
- Handle replay load failures gracefully with a GUI error [`9bc9862462`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9bc986246288712dba4cd052e818aca2bdd9de30)
   &nbsp;
   >Loading an invalid replay could crash the program. Now, an error dialog is displayed when a replay fails to load. 
   >
- Harden replay assert against source dimension changes [`9ea87637b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ea87637b022559078de9b42e0a4f1222e4ebc05)
   &nbsp;
   >hash_bitmap reused a static scratch bitmap sized on first use; if the source dimensions ever changed (via the bottom-8-pixels QR), replay assert would produce incorrect hashes. Now, the buffer is recreated when the dimensions change. 
   >
- Stomp boots not working on weapons [`a68f32fd1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a68f32fd1f5e7a81cc1d6d3dcb5378f0f189fb6e)
   &nbsp;
   >regressed in `1f397dc2089` 
   >
- Stomp Boots block flags being backwards [`991d3b9831`](https://github.com/ZQuestClassic/ZQuestClassic/commit/991d3b983170be31115ce937b88df4a831e4c749)
   &nbsp;
   >regressed in `b9e6136eb21` 
   >
- Frozen scripts wrongly having draws stopped by running strings [`f1406a442a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1406a442aa1a88010311be437fe165263a466f3)
- Prevent previous qst misc data leaking to next [`939542852b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/939542852b23c7ac8dc0f193e73155a9d6acf501)
- Avoid out-of-bounds access merging pushes at a block start [`d0bce9bb02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0bce9bb02a9e54f873d4f5fe48079bb07f51be3)
   &nbsp;
   >In the conseq_additive optimizer pass, merging consecutive identical pushes walked one instruction before the block start, reading C(-1) when the block begins at pc 0, and the unsigned loop counter could wrap when the merge reached pc 0. Confine the merge to the block.  
   >
   >This is only reachable with synthetic ZASM: a real script's entry function begins with frame setup, never consecutive identical pushes, so the merge never reaches pc 0 in compiler output. Added a regression test. 
   >
- Skip building A5 fonts in headless mode [`58e4202a32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58e4202a320ef0067b94c87de54160d611132547)
   &nbsp;
   >In headless mode no display is created, so the Allegro 5 screen palette is never populated and every 8-bit to A5 bitmap conversion comes out blank. al_grab_font_from_bitmap then fails to locate any glyph and logged "Unable to find character 0" once per font (~100 lines) on every startup. A5 fonts are not rendered in headless anyway, so skip building them. 
   >

### ZScript

- Prevent stale source in web playground error context [`bb11e5c043`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb11e5c043e744879d5b6b8fd907ab885931de3b)
   &nbsp;
   >The web playground worker is long-lived, so its source-contents cache (used to render the offending line in compile error messages) held the source from the first compile and was never refreshed. Later recompiles showed the wrong source preview even though the error location was correct. 
   >
- Free resolved playground worker promises [`080e71c704`](https://github.com/ZQuestClassic/ZQuestClassic/commit/080e71c704182f07210d6906742948addd81a2a6)
   &nbsp;
   >Delete each pending-command entry once settled, and ignore messages with unknown ids, in the web playground worker bridge. 
   >
- Avoid double compile on web playground load [`4b551f2c76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b551f2c76fc076268a4660734a6e238465cccd8)
   &nbsp;
   >openModel already compiles via onContentUpdated; drop the redundant recompile. 
   >
- Dispose closed tabs in the web playground [`4b064e3c74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b064e3c74d04bf8916b62279ac58d72a3e8cff9)
   &nbsp;
   >Closing a tab now disposes its editor model and drops its state, so closed files stop recompiling on change. 
   >
- Avoid duplicate gist fetch in the web playground [`cdc5d49ab5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cdc5d49ab5e046b49b7b00fe094a815a8a1b6b18)
   &nbsp;
   >Reuse the gist data already fetched on load instead of refetching it to check ownership. 
   >
- Don't elide push/pop around a stack-pointer-relative access [`11ffc40dab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11ffc40dab41c3316f1673bcccdad80ea4b34a78)
   &nbsp;
   >The optimize_stack pass removes a PUSHR/POP pair that preserves an unchanged register. If an instruction between them reads or writes the stack relative to the stack pointer (PEEK, PEEKATV, STACKWRITEAT*), removing the push shifts the stack pointer and makes that access touch the wrong slot. Keep the push/pop in that case.  
   >
   >This is only reachable with synthetic ZASM; the compiler does not currently emit a register-preservation push/pop straddling such an access. Added a regression test. 
   >
- Avoid out-of-bounds access when building ZASM for an empty script [`19fcce7adb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19fcce7adbfcd7ceabbddaea1468e9fbb5cc0c0a)
   &nbsp;
   >zasm_construct_structured computed the last function's final pc as size - 2, which underflowed to a huge value for an empty script (just the 0xFFFF terminator), causing zasm_to_string/zasm_construct_cfg to read far past the instruction array. Guard the empty case.  
   >
   >Also bail early in the -test-optimize-ZASM file runner when the input parses to nothing (e.g. a missing or empty file) instead of feeding an empty script through the optimizer. 
   >
- Support the debugger when JIT is enabled [`e18907eb0f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e18907eb0fe1eaa0c42f2f4c667b7cabd4e5d265)
   &nbsp;
   >Opening the script debugger with JIT compilation on previously blocked with a "not supported" message because breakpoints and line stepping did not trigger reliably. Now, the debugger works normally with JIT enabled. 
   >

### ZConsole

- [win] prevent debug console from freezing [`12a3676f38`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12a3676f383500f779c96df3ff3cd83f9e7c803d)
   &nbsp;
   >The named-pipe connection was treated as a hard failure when it didn't complete instantly, popping a modal dialog that could hide behind the game window (appearing as a frozen black screen) and orphaning the helper console in an endless retry loop. Connect now waits with a bounded timeout so a slow-to-start console attaches normally, and any setup failure quietly disables the console instead of blocking the app.  
   >
   > Discord: https://discord.com/channels/876899628556091432/1466588316492234815 
   >

# Documentation

- Resolve Sphinx warnings [`857d971862`](https://github.com/ZQuestClassic/ZQuestClassic/commit/857d971862e2509f4c0b49d43a786ae040be2544)

# Build

- Speed up compilation [`7ff43d0562`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ff43d0562405bf79559aa940e58d8799edc925b)
   &nbsp;
   >The build was dominated by src/dialog/*.cpp: ~2000s of the ~5700s total CPU time. Profiling the worst file (subscr_props.cpp, ~83s) with -ftime-trace showed two costs: frontend template instantiation of the GUI builder DSL, and -O3 backend inlining of the giant widget trees. The single biggest frontend cost was libc++'s std::function, which the DSL constructs from a unique lambda at nearly every widget call site.  
   >
   >Changes:  
   >
   >- Replace std::function storage in widget callbacks with GUI::function
   >  (src/gui/function.h): a minimal move-only, owning, type-erased
   >  callable with no small-buffer optimization. Widget callbacks are set
   >  once and only invoked, so this suffices, and it instantiates just two
   >  captureless thunks plus a heap allocation per callable instead of
   >  libc++'s __value_func / __func / __alloc_func / allocator /
   >  __compressed_pair machinery. All widget callback members and setters
   >  are converted (button, checkbox, text_field, list, window, etc. and
   >  src/zq/gui/*); inline setters use std::move.
   >- Compile src/dialog/*.cpp at -O1 in Release/RelWithDebInfo. This is UI
   >  glue with no perf-sensitive code; -O3 spent most of its time inlining
   >  widget trees for no benefit.
   >- Rewrite GUI::Internal::applyArgs as a fold expression instead of a
   >  recursive per-widget instantiation chain. Its stricter
   >  duplicate-property check surfaced (and this commit fixes) real
   >  duplicate props passed to widgets in screen_enemies, midieditor,
   >  theme_editor, and launcher_dialog. BREAKING: passing the same property
   >  twice to a widget is now a hard error.
   >- Add a WANT_CCACHE option (default on) that uses ccache as a compiler
   >  launcher when installed, so unchanged TUs hit cache on rebuild.
   >- Fix and modernize the USE_PCH precompiled-header set: it referenced
   >  the no-longer-existing base/zc_alleg.h. Now a std-header-only PCH,
   >  skipped for the Objective-C++ file, with -fno-pch-timestamp so ccache
   >  can cache PCH users.
   >
   >
   >&nbsp;
   >
   >Measured (worst file, src/dialog/subscr_props.cpp, isolated):  
   >
   >  frontend (-fsyntax-only): 22s  -> 3.7s   full compile:             ~83s -> 16s  
   >
   >Clean Release build, wall clock: 426s -> 280s. src/dialog total CPU: ~2050s -> ~1360s. 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`75dd2e580d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75dd2e580d2a5fe45c09ece656a0beb21260acbe)

# Refactors

### Player

- Remove unused replay_set_frame_arg [`2182948957`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21829489577aab86dc28df67c681a96a4a839e70)
- Use a vector for per-frame rng seed counts [`cd4f96217b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd4f96217b1b12e2ab38b0551ef560a0100de5eb)
   &nbsp;
   >rng_seed_count_this_frame was a std::map<int,int> cleared every frame. Replace it with a std::vector<int> indexed by rng index (0 == not seeded this frame), reset via std::fill so it stays allocation-free across frames. Also cleared in replay_start so leftover counts from a previous in-process replay can't corrupt frame-0 seed offsets. 
   >
- Consolidate per-replay state into a ReplayState struct [`0d9508a3df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d9508a3df0c616e49c14a480831ac4eef7be890)
   &nbsp;
   >Group the ~46 per-replay mutable statics into one ReplayState instance so resetting is a single `rs = ReplayState{}`, replacing the duplicated, asymmetric manual resets in replay_start/stop/continue. 
   >

### ZScript

- Update @versionadded for `Game->Exit()` [`bb5ff1ebb5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb5ff1ebb5ff21e2db62c2f418976a99acdcc9eb)
- Skip ZASM pipeline init when no non-trivial scripts [`175c0fbe12`](https://github.com/ZQuestClassic/ZQuestClassic/commit/175c0fbe122abd241f3b2952b4f1d22f8f4259a1)
   &nbsp;
   >Early-out of zasm_pipeline_init when there are no scripts with size >= 10, avoiding worker pool and JIT startup for quests with trivial scripts. 
   >
- Remove unused version variables from Game [`ff9afa989e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff9afa989ecccc7c8c9f41d9f48e91b6709e6c42)

# Tests

- Enable non-interactive mode for run_replays_tests.py if agent [`10121d0be3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10121d0be3b0125f7bbcc62ebf766d1a4ab74227)
- Log error when vscode test throws [`d38910f970`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d38910f970cc60f55894d2d14f4ee0fda838a6d2)
- Print full path, not just name, when replay fails [`112b84d152`](https://github.com/ZQuestClassic/ZQuestClassic/commit/112b84d1521e27154d5b1db2299ee0a6e15d947f)

### Player

- Auto-extend grown auto replays in update_auto_script_tests.py [`bd62b500d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd62b500d2fdb5a21721319a836adb478e01ac28)
   &nbsp;
   >Running tests/update_auto_script_tests.py after extending an auto test script no longer requires manually editing the replay file. 
   >

### ZScript

- Move ZASM optimizer unit tests to their own file [`96e63593ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96e63593ed45a6f78847fac9f9e6701153888cef)
   &nbsp;
   >Move the ZASM optimizer unit tests and helpers out of zasm_optimize.cpp into zasm_optimize_test.cpp, exposing the few optimizer internals the tests need through a new zasm_optimize_internal.h header. The tests now report each case to the test runner individually instead of collapsing into a single pass/fail. 
   >
- Reuse shared assert helpers in ZASM optimizer tests [`30daf821e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/30daf821e7626026b46a61ea47a22d980aabac6a)
   &nbsp;
   >Drop the bespoke generic comparison helper in favor of assertEqual from test_runner/assert.h for the plain scalar and string checks. The SimulationValue and zasm_script comparisons keep their custom helpers, since the shared ones can't format those types or reproduce the ZASM diff output. The test harness now catches the throwing assertions. 
   >

# CI

- Run base_test_runner for mac [`4f285eef88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f285eef88169af84dda489ba80af82e0960a5f3)

# Misc.

### Editor

- Editor-only combos no longer show by default in `View Map` [`80976f3199`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80976f31997691bbf9eb49e192e9dee81ac80816)
   &nbsp;
   >There's now a (default unchecked) checkbox in `View->View Map` for if 'Only Visible In Editor' combos should be drawn. 
   >
- Improve infotext for string editor 'Layer' [`624a236d28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/624a236d28c60faf73e65f1ca406149890761ed8)
