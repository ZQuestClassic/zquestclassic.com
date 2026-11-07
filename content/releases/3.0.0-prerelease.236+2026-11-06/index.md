---
title: 3.0 Prerelease 236 2026-11-06
description: 
date: 2026-11-07T01:14:41Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.236%2B2026-11-06/3.0.0-prerelease.236%2B2026-11-06-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.236+2026-11-06-linux-aarch64.tar.gz
    platform: linux-aarch64
    size: 33678622

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.236%2B2026-11-06/3.0.0-prerelease.236%2B2026-11-06-linux-x64.tar.gz
    name: 3.0.0-prerelease.236+2026-11-06-linux-x64.tar.gz
    platform: linux
    size: 34271033

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.236%2B2026-11-06/3.0.0-prerelease.236%2B2026-11-06-windows-arm64.zip
    name: 3.0.0-prerelease.236+2026-11-06-windows-arm64.zip
    platform: windows-arm64
    size: 36925871

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.236%2B2026-11-06/3.0.0-prerelease.236%2B2026-11-06-windows-x64.zip
    name: 3.0.0-prerelease.236+2026-11-06-windows-x64.zip
    platform: windows-x64
    size: 36352958

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.236%2B2026-11-06/3.0.0-prerelease.236%2B2026-11-06-windows-x86.zip
    name: 3.0.0-prerelease.236+2026-11-06-windows-x86.zip
    platform: windows-win32
    size: 34414743
prerelease: true
id: 437257371
tag_name: '3.0.0-prerelease.236+2026-11-06'
channel: '3'
tags:
  - releases
---

# Features

- Combo 'A. Delay' [`1f761d531`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f761d5312ed13433198524c6cd38eec1bdc5907)
   &nbsp;
   >Delay a combo's animation on it's first frame for a specified number of frames; similar to how item delay works, but not using the same math. Item delay is in *multiples of animation frames*, so a 4-speed 15-delay item will delay for 60 frames total. Combo delay is already in frames, so a 15-delay combo will delay for 15 frames, regardless of the speed. Combo delay, however, can range from 0 to 65535 to compensate for this. 
   >
- Combo 'CSet2 Flash Duration' [`b14475f7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b14475f7fc0b40cac2586c44a6a6ba96e1e78148)
   &nbsp;
   >Allows the combo's CSet2 to flash on and off to create flashing CSet effects. 
   >

### Player

- Show FFC sizes, FFC flags and combo triggers in -dump-screen [`44d4f19a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44d4f19a529dae463c686d9dfa68e44c960110eb)
- Save the replay when the player crashes while recording [`93ad8f630`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93ad8f63052db36bc5e6547a26b5a1fc17397288)
   &nbsp;
   >If the player crashes while a replay is being recorded, the replay is now saved with the crash in it, ending as if the program was closed on the frame that crashed. Before, everything since the last save was lost. A save file's replay continues as usual the next time the save is loaded.  
   >
   >Replays are also written to a temporary file first, so a crash while writing one doesn't leave it truncated. 
   >
- Tag crash reports with whether the JIT and optimizer are on [`3c4c54541`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c4c54541ed905cca9f7ff10636389955f598dfe)

### Editor

- Label player weapons "L" in weapon type lists [`ef7dd27dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef7dd27dd7d4f047bd8227cf928f5ebc9883de22) [Discord](https://discord.com/channels/876899628556091432/1566325806127517756)
   &nbsp;
   >Player weapons in weapon type dropdowns are now prefixed with "L" (e.g. "L Arrow"), matching the existing "E" prefix on enemy weapons. The Weapon Type dropdown in the Shooter and Step Effects combo wizards also has a tooltip explaining whether the chosen weapon can hit the Hero or only enemies. 
   >

### ZScript

- Report the running script when a CHECK fails [`589745c4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/589745c4ce5f915823a109f748f82ee219289f8b)
   &nbsp;
   >When a CHECK fails while a script is running, the crash report now says which script it was: its type, name and index, the register it was accessing, its pc and screen, and its ZScript stack trace. The same text goes to allegro.log. 
   >
- Tag crash reports with the running script [`a52efc3f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a52efc3f2b3497f1425bb1edfede094f94b52991)
   &nbsp;
   >A crash (a segfault, etc.) while a script is running now tags the report with the script's type, number and index, the register it was accessing, and whether the screen was scrolling. 
   >
- Keep a frame pointer in jitted code, for crash stacks [`9d8b9eb4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d8b9eb4ad5e7b47cc34cdb3f4614f784ba51267)

# Bug Fixes

- Loose-file upload script's replay uploads were rejected [`1d58f64f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d58f64f524b422cab6cb65efde5ce28f0684816)

### Player

- Save file replays could desync after the game was closed [`d19b85a2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d19b85a2fcd27efd7608d5bc1ddf927372f05e51)
   &nbsp;
   >A save file's replay continues each time the save is loaded. If the previous session ended without a recorded quit - quitting while paused, or closing the program right after saving - playback carried on with the old session using the next session's inputs, which then went out of sync.  
   >
   >Quitting while paused, or from a menu that blocks the F6 script, now records the quit. Recording also continues only after the last save, since the save menu saves a while after its last input. For replays already recorded this way, playback ends the session itself where the next one begins (waiting for a pending save first), and updating the replay records that quit.  
   >
   >Bug introduced when save file replays were added in 2.55-alpha-110 ([923a1031c9](https://github.com/ZQuestClassic/ZQuestClassic/commit/923a1031c9)). 
   >
- Replay update mode allowed one screen load to be missed [`c670594fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c670594fd1f49387b35dce3c5476011a648f2f01)
   &nbsp;
   >Updating a replay stops when a screen is not loaded on the frame the replay expects, but the check looked one load ahead, so a single missed load went unnoticed. That is how a save file replay whose session ended without a recorded quit got past its first seam.  
   >
   >Regressed in 3.0.0-prerelease.35+2024-12-20 ([0dc4fce9e3](https://github.com/ZQuestClassic/ZQuestClassic/commit/0dc4fce9e3)). 
   >
- Old save file replays desynced after the game was reloaded [`4657a3192`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4657a3192cca37fee02a3bbefb54366fd8733e28)
   &nbsp;
   >Loading a save used to unequip the A button, until that was fixed in 2.55.11 and 3.0. Replays recorded before then expect the A button to be unequipped when a save was loaded after closing the program, so they went out of sync from then on.  
   >
   >Regressed in 3.0.0-prerelease.130+2025-08-23 ([9806fb8abd](https://github.com/ZQuestClassic/ZQuestClassic/commit/9806fb8abd)). 
   >
- Explain that a save from a newer version can't be opened [`d3ae40449`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3ae40449e5728be4ad4158d03ea916be6dfe6b6) [Discord](https://discord.com/channels/876899628556091432/1567569655860691054)
   &nbsp;
   >A save file made by a newer version of ZC now says that it was made by a newer version, instead of only saying it failed to read. 
   >

### Editor

- Swapped help text for the 'Block (Same/Any Layer)->' triggers [`3078b1ff2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3078b1ff2362e8220b8e369262086db727407608)
   &nbsp;
   >Bug introduced when these triggers were added in 3.0.0-prerelease.185+2026-05-10 ([27a04f1046](https://github.com/ZQuestClassic/ZQuestClassic/commit/27a04f1046)). 
   >

### ZScript

- Prevent crash after an insta-warp with a carried-over FFC [`3342053c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3342053c35160390910264f716fb5b2364f7157e) [Discord](https://discord.com/channels/876899628556091432/1567985004678750270)
   &nbsp;
   >Taking an insta-warp that keeps the enemies alive could move a carryover FFC onto a screen outside the new region, so a script on that FFC reading `Screen->` crashed. Seen in Yuurand when floating into the Lunar Tower portals.  
   >
   >Regressed in 3.0.0-prerelease.127+2025-08-16 ([0831755d51](https://github.com/ZQuestClassic/ZQuestClassic/commit/0831755d51)). 
   >
- Handles to carryover FFCs broke when the screen changed [`a6b587228`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6b5872285e10e968a076fe9445a23d85715269b)
   &nbsp;
   >A carryover FFC got a new identity every time the hero scrolled or warped to another screen, so a script holding a handle to it got "Invalid sprite" errors afterwards, and arrays and objects the FFC owned were released.  
   >
   >Bug introduced when FFC handles became sprite ids in 3.0.0-prerelease.77+2024-10-27 ([9304859284](https://github.com/ZQuestClassic/ZQuestClassic/commit/9304859284)). 
   >
- Prevent crash after scripted insta-warp that keeps sprites [`b05d60fc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b05d60fc9e11860d7531381756e24ec87fff80ca)
   &nbsp;
   >An insta-warp from `Hero->WarpEx` with `WARP_FLAG_DONT_CLEAR_SPRITES`, or a combo-triggered insta-warp from a screen with "Sprites Carry Over In Warps", left every kept sprite belonging to the screen it came from. Once that screen was gone, drawing a kept enemy crashed, as did a script on a kept sprite using `Screen->`.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Log an error instead of crashing when a sprite's screen is gone [`0bc58d061`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0bc58d061640e344c3dfc576e928883a4355f595)
   &nbsp;
   >If a sprite is left belonging to a screen that is no longer loaded, a script on it that uses `Screen->` now logs an error and uses the current screen, which is what `Screen->` always meant in 2.55. An enemy like that also draws normally instead of crashing.  
   >
   >This fixes the crashes reported in The Rosemaster, where a script setting `Screen->Quake` or `Screen->Wavy` crashed the game.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Sprites made while scrolling kept belonging to the old screen [`1f347304e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f347304e6aee484644d2eacedd3e9bd2550534f)
   &nbsp;
   >A sprite a script created while the screen was scrolling, before the new screen loaded, still belonged to the old screen once the scroll finished. A script on it then used the wrong screen for `Screen->`, which crashed before the previous commit.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >

### Web

- Title screen sword intro never played [`42f8a87fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42f8a87fe9efb2b4b9313af85a060ba16587f50c)
   &nbsp;
   >The web package left the sword logo images and woosh sound out of the preloaded data, so they were empty placeholders when the title screen tried to load them, and it fell back to the plain logo crawl.  
   >
   >Bug introduced when the sword intro was added in 3.0.0-prerelease.208+2026-08-04 ([ca9cc641aa](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca9cc641aa)). 
   >
- Audio crackled on Android [`4da2303fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4da2303fea8b66504faa8883b5ea881f8736a3e7)
   &nbsp;
   >On the web, Allegro played audio through SDL with a 512-sample buffer. SDL backs that with a ScriptProcessorNode, and Chrome on Android plays one that small with gaps (it pulls audio in larger chunks there, ~24ms on a Pixel), so the title music and sound effects crackled. The buffer is now 1024 samples, which plays cleanly. MIDI music was unaffected: SDL_mixer already used 1024.  
   >
   >Bug introduced when the web version was given its Allegro patches in 2.55-alpha-112 ([518bfc4ae9](https://github.com/ZQuestClassic/ZQuestClassic/commit/518bfc4ae9)). 
   >

# Documentation

- Remove leftover vsync config setting [`600997d8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/600997d8c58613bffa4779b53c1155991edcccc8)
   &nbsp;
   >The player still read "vsync" from zc.cfg, but nothing has used it since the FPS throttle stopped waiting on vsync ([3ca0a1208e](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ca0a1208e)). The editor's copy in zquest.cfg was never read after [505aff7ff1](https://github.com/ZQuestClassic/ZQuestClassic/commit/505aff7ff1). 
   >
- The player's menu is 'Cheat', not 'Cheats' [`15ed55cc3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15ed55cc31b9700453cdf8be64bb84b78cc0b6f0)

# Chores

- Update replay_uploads_known_good_replays.json [`24f5965be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24f5965be46ceba6a2b429f0795f10c3eca59ffa)

# Refactors

- Cleanup some combo animation code [`f9595c748`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9595c7487365545195c317fd1fd071091c4d5e1)
- The default theme is Moosh Mood, like on desktop [`fed810504`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fed8105040255aec0645760c3c0c7692529f504e)
   &nbsp;
   >This only changes the theme for new web users. Anyone who has opened ZC before keeps the theme they have. 
   >

# Tests

- Cover save file replay seams and missed screen loads [`749373068`](https://github.com/ZQuestClassic/ZQuestClassic/commit/749373068f09ecd6aa4ca19891924cf356589199)
   &nbsp;
   >test_session_ended_without_recorded_quit removes the recorded quit between two sessions of a save file replay, then checks that updating it ends the session itself, records the quit, and plays the next session exactly as recorded (just later).  
   >
   >test_update_stops_at_missed_screen_load moves a screen load a few frames earlier than it happens, and checks that updating stops right there. 
   >

# CI

- Skip file contents when cloning in the release workflow [`779bd5202`](https://github.com/ZQuestClassic/ZQuestClassic/commit/779bd5202ac77823d166eb0654a71758d12d8198)
- Print a backtrace when a program crashes on Windows CI [`39c3dd02e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39c3dd02ed7380c1a19cf3e52c58a6d79bedf669)
   &nbsp;
   >A crash on Windows CI only reported "process crashed with an access violation": there's no debugger for run_target.py to re-run the program under there, as it does on mac and Linux. On CI, the programs now catch unhandled exceptions and abort() themselves and print a backtrace using DbgHelp, to the file run_target.py names in ZC_CRASH_BACKTRACE_FILE (or to stderr). Windows packages built with debug info (CI's test packages) now include the .pdb files it reads symbols from.  
   >
   >The handler also flushes stdout, which the C runtime would otherwise drop on a crash - when stdout is a pipe, that's usually all of the program's output. 
   >
- Build the x64 and arm64 Windows CI jobs with debug info [`e209d8221`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e209d822148f24d508ab8e09682fdbf2dd8d695b)
   &nbsp;
   >They built Release, which writes no .pdb files, so a crash there could only show addresses in its backtrace. Every CI job now builds RelWithDebInfo, like the releases do. 
   >
- Wait out longer Chocolatey feed outages on Windows [`e4261a95a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4261a95abbbb2725bc12d16a9f71f7673d0e15b)
