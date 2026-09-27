---
title: 3.0 Prerelease 225 2026-09-26
description: 
date: 2026-09-27T02:40:15Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.225%2B2026-09-26/3.0.0-prerelease.225%2B2026-09-26-linux.tar.gz
    name: 3.0.0-prerelease.225+2026-09-26-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.225%2B2026-09-26/3.0.0-prerelease.225%2B2026-09-26-mac-universal.dmg
    name: 3.0.0-prerelease.225+2026-09-26-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.225%2B2026-09-26/3.0.0-prerelease.225%2B2026-09-26-windows-x64.zip
    name: 3.0.0-prerelease.225+2026-09-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.225%2B2026-09-26/3.0.0-prerelease.225%2B2026-09-26-windows-x86.zip
    name: 3.0.0-prerelease.225+2026-09-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 397495164
tag_name: '3.0.0-prerelease.225+2026-09-26'
channel: '3'
tags:
  - releases
---

# Features

- Allegro.log shows when each app was launched [`84af429c69`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84af429c69f37edbb92c1ee88111dbce2313482b)
   &nbsp;
   >The launcher, editor and player all write to the same allegro.log, one run after another, with nothing marking where each run starts. Now each app writes a line with the date, time, app name and version when it launches. 
   >

### Player

- Show PlayStation button names in the controls dialog [`ca7219491e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca7219491e41d35afd29a757b12ea6f0d222a0bc) [Discord](https://discord.com/channels/876899628556091432/1552139234817605722)
   &nbsp;
   >With a PlayStation controller, the Gamepad tab of the control scheme dialog now names each button the way the controller does (Cross, Circle, Square, Triangle, Share, Options, PS Button, ...) instead of by its Xbox name, so it reads "A: Circle" rather than the confusing "A: B". 
   >
- One-click face button layouts in the controls dialog [`dd1441235a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd1441235ae893ba8343ba1868f03a2a84bcef2a) [Discord](https://discord.com/channels/876899628556091432/1552139234817605722)
   &nbsp;
   >The Gamepad tab of the control scheme dialog gains a "Face Buttons Standard Layout" row with Nintendo and Xbox buttons. Each option puts those four actions on the face buttons in that arrangement: A right and B bottom as on a SNES controller, or A bottom and B right as on an Xbox controller.  
   >
   >Moving a PlayStation controller's A to Cross, or an Xbox controller's A back to the SNES position, no longer takes four separate rebinds. 
   >
- Show a Nintendo-labeled gamepad's printed names in the controls dialog [`f7e09c8291`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7e09c82917e69b6554d4b2c7eecd86d9113fa3a)
   &nbsp;
   >With a Switch Pro Controller or another Nintendo-labeled pad, the Gamepad tab of the control scheme dialog now names the face buttons by the letters printed on them rather than by the driver's Xbox-position letters, so a pad the driver numbers by position reads "A: A" instead of "A: B". A Switch Pro Controller's other buttons get their own names too: L, R, ZL, ZR, Minus, Plus and Home. 
   >
- Standalone mode asks to quit to desktop or load the last save [`2ab91ca967`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ab91ca9670b73da4a669e20fd90511b29d613be)
   &nbsp;
   >Standalone mode has no file select screen, so quitting the game ("Save and quit" or "Quit without saving" on the continue screen, a quest's save menu, or a quest script ending the game) now shows a screen with two options: "Quit to desktop" closes the program, and "Load last save" loads the save again without restarting the program. Like the continue screen, it can be used with a controller.  
   >
   >Dying in a quest with the continue screen disabled still loads the last save right away. 
   >

### ZScript

- Collapse repeated script errors in the log and console [`0c73deb5e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c73deb5e6e5a8508197fd2d9f61e0e941110ca0)
   &nbsp;
   >A script that errors the same way every frame used to write the same error message and stack trace to allegro.log and the ZScript console 60 times a second, which buried everything else.  
   >
   >Now an error identical to one already shown (same script, message and stack trace) is shown at most once every 300 frames (5 seconds). Repeats in between are counted: the count is shown the next time the error is shown, or on its own line once the error stops happening.  
   >
   >This is configurable in zc.cfg via `[ZScript] repeated_error_interval` (in frames); 0 shows every error, as before.  
   >
   >The debugger console still receives every error. 
   >

# Bug Fixes

- Per-quest settings were forgotten for quests in paths with # or = [`4950d98535`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4950d9853539b593d8b20904b576947eece45536)
   &nbsp;
   >Settings saved per quest were lost on restart when the quest's path contained "#" or "=", such as a quest kept in a folder named "#Quests".  
   >
   >This affected the quest's control scheme in the player, its script debugger state, and the editor's test init data, ZScript buffer, and zoom level. Choosing the quest's control scheme again also added another line to zc.cfg each time.  
   >
   >Bug introduced when test init data started saving per quest in 2.55-alpha-117 ([c7a9d6a2cf](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a9d6a2cf)). 
   >
- Discord thread script crashed on emoji in Windows consoles [`db557a8a3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db557a8a3cc319a618ca40bcd140bcb498a6bc5c)

### Player

- 'Can Turn While Charging Quake Hammer' never applying to 2.50.0/2.50.1 quests [`d44a73baf7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d44a73baf737a6f400a626d3c9641ff002e5d107) [Discord](https://discord.com/channels/876899628556091432/1462638974609915995)
   &nbsp;
   >The compat rule added for these quests was set in readrules before the pass that zeroes junk quest rules in quests saved before compat-rule version 27. Every quest it targets predates that version, so the rule was cleared again on every load and the fix had no effect: loading Panoply of Calatia (or any 2.50.0/2.50.1 quest) still forbade turning while charging the hammer.  
   >
   >The rule is now set after that pass, next to the other compat rule that had to be placed there for the same reason.  
   >
   >Regressed in [73a90c0738](https://github.com/ZQuestClassic/ZQuestClassic/commit/73a90c0738). 
   >
- Nintendo-labeled gamepads through a generic driver defaulted to A and B swapped [`7fa2eb5d21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fa2eb5d21d29e639b66e2fbba586a806d6f0c0a)
   &nbsp;
   >A Switch Pro Controller, Joy-Con or most 8BitDo pads connected through a generic driver (evdev on Linux without hidraw permission, DirectInput on Windows, IOKit on macOS) got a default scheme with A on the button printed B and B on the one printed A, and the controls dialog read "A: B". The auto-created scheme now puts each action on the button printed with its letter for these pads too, and the layout buttons in the controls dialog follow suit.  
   >
   >Bug introduced when per-controller control schemes were added in 3.0.0-prerelease.221+2026-09-12 ([6afd40e7d8](https://github.com/ZQuestClassic/ZQuestClassic/commit/6afd40e7d8)). 
   >
- 8BitDo pads were misjudged for Nintendo lettering [`fb29777d1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb29777d1a9ee5879a00ee53ff4530509d379730)
   &nbsp;
   >The 8BitDo Ultimate Wired, Ultimate Wireless, Ultimate 2C and Ultimate 2 Wireless have Xbox lettering, but a newly seen one got the SNES arrangement like 8BitDo's Nintendo-styled pads, putting A on the button printed B. They now start with the Xbox layout like any other Xbox-lettered pad.  
   >
   >On macOS, an 8BitDo pad connected through Apple's GameController framework (the default there), such as an 8BitDo Micro in D-input mode, was not recognized as Nintendo-lettered at all. Its default happened to come out right, but the controls dialog's Nintendo Layout button bound A to the button printed B and B to the one printed A, though the dialog read "A: A" before the click. Both layout buttons now land where their help text says.  
   >
   >Bug introduced when per-controller control schemes were added in 3.0.0-prerelease.221+2026-09-12 ([6afd40e7d8](https://github.com/ZQuestClassic/ZQuestClassic/commit/6afd40e7d8)). 
   >
- Rebinding a gamepad button in the controls dialog took two presses [`deed335ea8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/deed335ea84d080a19736fc2890a7cf2f1f261ab)
- Region screens not yet seen on a previous visit spawned no enemies [`4ff5d8616f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ff5d8616f375a87e00325aee7022065ffddd0b5) [Discord](https://discord.com/channels/876899628556091432/1552135801352093726)
   &nbsp;
   >When returning to a recently visited scrolling region, screens that never came into view during the previous visit spawned no enemies, as if they had all been killed, and their enemies->secrets triggered immediately.  
   >
   >Bug introduced when scrolling regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Whirlwind over damaging shallow liquid made the player invisible [`558779cf95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/558779cf953936f94db42ce7f1fe7351076ac76f) [Discord](https://discord.com/channels/876899628556091432/1551691909120917616)
   &nbsp;
   >Shallow liquid set to modify HP hurt the player while a whistle whirlwind carried them over it. If "Damage causes hit anim" was enabled, the player was knocked out of the whirlwind but stayed invisible, even after drowning and respawning, until they died and continued.  
   >
   >The whirlwind now carries the player above shallow liquid.  
   >
   >Bug introduced when passive HP modification for shallow liquid was added in 2.55-alpha-97 ([985b345d73](https://github.com/ZQuestClassic/ZQuestClassic/commit/985b345d73)). 
   >
- Smart scrolling read out of bounds when leaving a region from a screen seam [`7f841803fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f841803fc77993965b807509063e63c4335dfdb)
   &nbsp;
   >When the Hero stood across the seam between two screens of a region and scrolled sideways into a region that doesn't line up with both, the smart scroll solidity check looked at combos outside the next screen.  
   >
   >Regressed in 3.0.0-prerelease.178+2026-04-28 ([1eafac2d99](https://github.com/ZQuestClassic/ZQuestClassic/commit/1eafac2d99)). 
   >
- Default control schemes moved with the dpad instead of the left stick [`e1b68e5115`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1b68e51156bc779152abbd739991fe831a94c8e)
   &nbsp;
   >The Default scheme, and any new scheme copied from it, read analog movement from the dpad rather than the left thumb stick, so the stick did nothing. The second stick's up and down also followed its left and right.  
   >
   >Existing schemes with the second problem are now repaired when loaded.  
   >
   >Regressed in 3.0.0-prerelease.148+2025-12-11 ([df5cba6f37](https://github.com/ZQuestClassic/ZQuestClassic/commit/df5cba6f37)) for XInput pads on Windows, whose Allegro driver has listed the dpad as the first stick since then, and for every gamepad with the SDL driver in 3.0.0-prerelease.221+2026-09-12 ([62568e4f79](https://github.com/ZQuestClassic/ZQuestClassic/commit/62568e4f79)); the second stick's vertical axis since 3.0.0-prerelease.152+2025-12-24 ([157e0bbff4](https://github.com/ZQuestClassic/ZQuestClassic/commit/157e0bbff4)). 
   >
- A gamepad input stuck on blocked binding any button [`d60b7240f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d60b7240f3cc806202823e05cf5a5fa4faeb0609) [Discord](https://discord.com/channels/876899628556091432/1549235589407051869)
   &nbsp;
   >The "Press a button" popup in the controls dialog waited for every button, trigger and dpad direction to be released before accepting a press. If a controller had a broken button that never read as released, the player could not bind anything.  
   >
   >Inputs held when the popup opens are now ignored until they are released, so the other buttons can still be bound. 
   >
- [win] prevent rare crash in a background thread while playing [`a27605aed0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a27605aed08c27a88dd1bd5bb8baf543b4f59b33)
   &nbsp;
   >Fixed a rare crash on Windows in the threads that compile scripts in the background.  
   >
   >Bug introduced when the script compiler's worker pool was added in 3.0.0-prerelease.131+2025-08-31 ([a3c40ce363](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3c40ce363)). 
   >
- Prevent crash when a replay is aborted from the System menu [`ceb44f982a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ceb44f982a008c968970134688162102844d58c5)

### ZScript

- Prevent crash saving debugger breakpoints [`d76fe26215`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d76fe2621514f5a36520c93807557f764a2f7911)
   &nbsp;
   >When done after a quest load outside init_game, it can crash.  
   >
   >The debugger keeps pointers into the loaded quest's debug data (its breakpoints' source files, the selected file). init_game saved and cleared them before loading a quest, but two other paths load a quest too: creating a new save file, and the ending sequence. After either, the debugger still pointed at the freed debug data, and the next init_game wrote the breakpoints back through those pointers.  
   >
   >With the debugger open, starting a new save file (or the file-select step of standalone mode's first launch) followed by any return to the title screen could crash. load_quest now saves and clears the debugger itself, so every load path is covered.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- ZASM optimizer assert aborted Debug builds on string switches [`2313862a2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2313862a2de03e5c7d6d6f0370c9f1d11bdf4b60)
   &nbsp;
   >Debug and Asan builds aborted while optimizing any quest with a switch on a string. Since the string switch JIT test was added, that is every playground replay. Release builds were not affected.  
   >
   >Bug introduced when the assert was added in 3.0.0-prerelease.21+2024-01-06 ([419aac8040](https://github.com/ZQuestClassic/ZQuestClassic/commit/419aac8040)). 
   >
- ZASM optimizer assert aborted Debug builds on some switches [`a07a7c915d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a07a7c915dabce4fcef85fb542923696c5ab35eb)
   &nbsp;
   >Debug and Asan builds aborted while optimizing a switch whose cases all jump to the same place apart from the default, like `case 1: case 2: case 3: case 4:` next to a `default:`. Release builds were not affected.  
   >
   >Regressed in 3.0.0-prerelease.215+2026-08-24 ([3ebe18df63](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ebe18df63)). 
   >
- ZASM text garbled string operands and jump table annotations [`82a55c6ef7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82a55c6ef75ade8d6f88eb9e440c1f2b23fa6817)
   &nbsp;
   >In ZASM dumps (-extract-ZASM, JIT asm dumps, script debug traces) a string operand was padded inside its quotes and its newlines, quotes and backslashes were printed raw, and a long op like a jump table ran into the annotation after it.  
   >
   >Bug introduced when string operands were added to ZASM dumps in 3.0.0-prerelease.79+2024-11-18 ([c5dc714cf4](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5dc714cf4)), and to the ZASM text parser in 3.0.0-prerelease.131+2025-08-31 ([c7de1a172f](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7de1a172f)). 
   >
- `ClearTrace()` could garble other apps' allegro.log output [`9e6c4cadee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e6c4cadeea46a2451633ad6c6c640afd8262373)
   &nbsp;
   >When the editor or launcher was open alongside the player, a script calling ClearTrace() made the player write over whatever those apps logged to allegro.log afterwards. 
   >

# Refactors

- Skip transparent runs 8 pixels at a time in 8-bit masked blits [`8f7fd320f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f7fd320f55378d569eeb4fcd7ccb7c5d707a8df)
   &nbsp;
   >While a message string is up, its background, portrait and text layers are each masked-blitted across the whole screen every frame, though they are almost entirely transparent. The masked blit checked one pixel at a time, which made it the single biggest cost in string-heavy quests (18% of nargads_trail_crystal_crusades replay time).  
   >
   >The 8-bit masked blit now looks at 8 pixels at a time, skipping them when all are transparent and copying them whole when none are. Rows where source and destination overlap still take the pixel-by-pixel path, so the result is identical in every case.  
   >
   >nargads_trail_crystal_crusades_04, first 150k frames: 13.3s -> 11.1s (-16%).  
   >
   >Full suite (365 replays, -c 14, M-series 18 cores): 193.9s -> 183.1s wall (-11s, -6%); user CPU 2511s -> 2375s. 
   >
- Keep macOS from App Napping headless runs [`a8327e2d5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a8327e2d5cb45812d3e38767f8327d7744fb3b07)
   &nbsp;
   >A headless zplayer/zeditor has no visible window, so after about half a minute macOS App Naps it and moves its threads to the efficiency cores for the rest of the run. Every replay longer than that ran ~40% slower from then on, and most of all when little else was running, which made a single long replay far slower than the same replay inside the full suite.  
   >
   >Headless runs now hold an NSProcessInfo "user initiated" activity for the life of the process, which opts them out of App Nap.  
   >
   >yuurand.zplay on its own (run_replay_tests.py --filter): 209.8s -> 73.8s (-65%). The replay's first 330k frames alone: 61.5s -> 38.1s.  
   >
   >Full suite (365 replays, -c 14, M-series 18 cores): 171.9s -> 168.2s wall (-2%). The suite gains little since it keeps every core busy, but yuurand, the longest replay, went from 147s to 122s inside it. 
   >
- Don't install the mouse in headless mode [`95e48170bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95e48170bc0aaa9648fa1cd1d7508d8c3dc33848)
   &nbsp;
   >On macOS, installing the mouse scans IOKit for pointing devices and talks to the window server, costing ~130ms of system time - more than the rest of startup combined, and paid by every replay run. A headless app has no window for mouse events to come from, and replays play back recorded mouse state, so the mouse is no longer installed there. All the legacy mouse functions already do nothing without a driver; the debugger window now only listens for mouse events if there is one.  
   >
   >Short playground replay: 0.34s -> 0.25s wall, 0.23s -> 0.11s sys.  
   >
   >Full suite (365 replays, -c 14, M-series 18 cores): 165.3s -> 159.6s wall (-4%); system CPU 116s -> 56s. 
   >

### Player

- Hash replay frames from the first changed scanline [`9f4fe0afad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f4fe0afad1d618b48313cd75f8e360bb1fc1f53)
   &nbsp;
   >Each frame of a replay is hashed so it can be checked against the recording. Hashing was 15-43% of replay CPU time in the longest quests (lands_of_serenity 43%, link_to_the_heavens 34%, nargads 25%). Most frames change only below some row - the subscreen and the top of the playfield often sit still - and in the heaviest quests about half of each frame's hashed bytes were a prefix identical to the previous frame's.  
   >
   >XXH32's state after a scanline depends only on the bytes before it, so the state before each scanline is now kept, along with the frame and conversion table it came from, and hashing resumes at the first scanline that differs. The hash itself is unchanged.  
   >
   >Single replay, first 100k frames: link_to_the_heavens_09 6.85s -> 5.56s (-19%), lands_of_serenity_2 5.79s -> 4.72s (-18%), terror_of_ necromancy_demo6_21 19.8s -> 18.6s (-6%).  
   >
   >Full suite (365 replays, -c 14, M-series 18 cores): 220.6s -> 193.9s wall (-27s, -12%); user CPU 2837s -> 2511s. 
   >
- Convert replay frames to 24bpp inside the hash loop [`ecd1ffbaaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ecd1ffbaaff20c0a7871e7029aa7f21b92c51f3e)
   &nbsp;
   >A replay frame's hash is XXH32 over the frame converted to 24bpp. The conversion wrote each scanline to a buffer, then XXH32 read it back, and the two passes cost about the same. XXH32 is bound by the latency of its four lanes' multiply chains, so the conversion now happens inside the hash loop, where it mostly fills otherwise idle cycles: every 4 pixels become 3 input words, and each 16 pixels are exactly three of XXH32's 16-byte stripes. The hash is unchanged.  
   >
   >First 150k frames: lands_of_serenity_2 6.68s -> 5.80s (-13%), link_to_the_heavens_09 8.2-8.7s -> 7.47s (-9% to -14%).  
   >
   >Full suite (365 replays, -c 14, M-series 18 cores): 183.1s -> 171.9s wall (-11s, -6%); user CPU 2375s -> 2234s. 
   >
- Only clear the sprite rotation scratch bitmap when used [`e304844b4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e304844b4e18453bded1cb8e99ff15a2fff6b40a)
   &nbsp;
   >Every sprite drawn cleared a 256x256 scratch bitmap, though it is only drawn to when the sprite is rotated or scaled. Across all sprites every frame that was about 1% of replay CPU time.  
   >
   >terror_of_necromancy_demo6_21, first 100k frames: 17.4s -> 17.0s (-2%).  
   >
   >Full suite (365 replays, -c 14, M-series 18 cores): 168.2s -> 165.3s wall; user CPU 2222s -> 2180s (-2%). 
   >

# Tests

- Update most z3 replays to "latest" version [`17ff1c92fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17ff1c92fdc1cecac367411326b5fb4af2f5eb60)
- Start the next replay as soon as one finishes [`f8c57d65d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8c57d65d27e4e9778d09367f49e6d7d16c48c91)
   &nbsp;
   >run_replay_tests.py checked on its replays once a second, so a finished replay left its slot idle for up to two ticks before the next one started. 141 of the 365 replays run in under half a second, so the scheduler spent more time waiting than they did playing.  
   >
   >The scheduler now wakes the moment any replay process exits and refills the slot right away; otherwise it still checks progress once a second.  
   >
   >The result file is now polled directly instead of watched with watchdog: FSEvents delivers change events late, which once ticks are fast could make an already-exited replay look like it never started. watchdog is no longer a dependency.  
   >
   >Full suite (365 replays, -c 14, M-series 18 cores, non-interactive): 249.9s -> 220.6s wall (-29s, -12%). Slots now stay fully busy until the last replay finishes (was ~12.8/14 busy, plus a ~35s tail at 5). 
   >
- Stop the progress display from stalling replay runs [`4ec65d9930`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ec65d9930d2dcdadf21d447d6e947fc12584328)
   &nbsp;
   >In an interactive terminal, the progress display animated its spinner by redrawing four times with a quarter-second sleep in between. The scheduler waits on the display, so every check on the running replays took an extra second, and a finished replay's slot sat idle for it.  
   >
   >The display now draws once per update.  
   >
   >Full suite, interactive terminal (365 replays, -c 14, M-series 18 cores): 247.8s -> 218.4s wall (-29s, -12%). 
   >
- Print failed CHECKs to stderr in the player, editor, and launcher [`2a570f426b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a570f426bb7d38890aadce0bc00909528147a64)

# Misc.

- Keep Discord links placed after "end changelog" [`cebdeb4e6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cebdeb4e6de3d94e5191206ed3d5be92f02065f0)
- Remove stray OK traces [`d8d410ae90`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8d410ae90a9d26595fe8f8c9944956aa4705c89)

### Player

- Log the joystick driver and detected controllers [`a277f5389e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a277f5389e15b7fdec991d6f68dc177e6840e34a)
   &nbsp;
   >Controller bug reports are hard to diagnose without knowing which driver is in use and what it detected. The player now logs the driver and each joystick's name, GUID, type and stick/button counts, and logs them again whenever a controller is connected or removed. 
   >
