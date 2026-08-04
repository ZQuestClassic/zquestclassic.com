---
title: 3.0 Prerelease 207 2026-08-04
description: 
date: 2026-08-04T06:09:45Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.207%2B2026-08-04/3.0.0-prerelease.207%2B2026-08-04-linux.tar.gz
    name: 3.0.0-prerelease.207+2026-08-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.207%2B2026-08-04/3.0.0-prerelease.207%2B2026-08-04-mac.dmg
    name: 3.0.0-prerelease.207+2026-08-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.207%2B2026-08-04/3.0.0-prerelease.207%2B2026-08-04-windows-x64.zip
    name: 3.0.0-prerelease.207+2026-08-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.207%2B2026-08-04/3.0.0-prerelease.207%2B2026-08-04-windows-x86.zip
    name: 3.0.0-prerelease.207+2026-08-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 364706261
tag_name: '3.0.0-prerelease.207+2026-08-04'
channel: '3'
tags:
  - releases
---

# Features

- Save Menus now support Shadows for text options [`03d939655e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03d939655e9de975424d54a9fb7e1c728fa10cf9)
   &nbsp;
   >A single shadow type can be set per-option. Two shadow colors can be set per-option; one for normal display, and one when the option is 'selected' (matching the two text colors) 
   >
- Save Menus now have 'Selected X/Y Offset' [`f3456217a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3456217a87cad8199de3f1f6a0dd9664deb06d7)
   &nbsp;
   >The option the cursor is on can be offset by a specified X/Y. This allows ex. indenting the selected option. 
   >
- Save Menus now have 'Misc Texts' [`14d156444e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14d156444e7ec2e8f429db8e0ec0ce348315d388)
   &nbsp;
   >This allows drawing arbitrary non-option text to the menu. This can be used for things like menu titles ('Game Over'), or flavor text ('You failed to save the land...') 
   >

### Editor

- Ctrl+Click Color Swatches uses previous color [`d076e3e217`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d076e3e217d35860e8eda92ea2d337ac5c0f5d87)
   &nbsp;
   >This mimics how Ctrl+Click works for Tile/Combo swatches, but now for colors. Should be especially useful when setting up the same color repeatedly in places such as Save Menus. 
   >
- Try each recent quest at startup until one loads [`065e21f813`](https://github.com/ZQuestClassic/ZQuestClassic/commit/065e21f813d0a7ba4cbaade359f9e4c5fddfe0e5) [Discord](https://discord.com/channels/876899628556091432/1533872851738820688)
   &nbsp;
   >When "Open Last Quest" is enabled and the most recent quest is missing or fails to load, the editor now silently tries the next quest in the recent list, and so on. Only when none of them can be loaded does it fall back to creating a new quest, without showing any error. Previously it gave up after the first entry, which was annoying when using ZC from an external drive that gets assigned a different path on each computer. 
   >

### ZScript

- @ScriptInfo and @ScriptSetup annotations [`c7f6da771b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7f6da771b2f57c470a479d13c55f17b0e762588)
   &nbsp;
   >Specify an info/description string and a setup instruction string for your scripts! These can be read in the Editor in the script setup dialog. 
   >

# Bug Fixes

- File dialogs opening on a folder that does not exist [`ea5ec359e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea5ec359e1653ee75aa550a156e64963d03f1393)
   &nbsp;
   >Exporting a tile page could open the file dialog on a bogus folder, so it listed nothing at all - not even a ".." to navigate out of. Any file dialog whose starting folder no longer exists now falls back to the closest folder that does.  
   >
   >The bogus folder came from a stale export path saved in the config by versions before 2.55.10 ([9df104fd95](https://github.com/ZQuestClassic/ZQuestClassic/commit/9df104fd95)), which was never cleaned up. That value is now repaired on the next launch. 
   >
- checkPath misreporting special files [`a2fdd56776`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2fdd5677640e0d23625ff74c817407a1900ce94)

### Player

- Big 4-directional enemy fire/attack frames overlapping walk tiles [`95dd9b2eaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95dd9b2eaf24c49ff3232a0cefbb67f6262396bc)
   &nbsp;
   >The 'Big + Firing' enemy animation styles placed their firing frames too close to the walking frames, so a big enemy's attack animation displayed walking tiles from the wrong direction instead of its own attack frames. The fire frame offset now clears the full block of walking tiles.  
   >
   >Broken when added in 2.55-alpha-100 ([9753e33c](https://github.com/ZQuestClassic/ZQuestClassic/commit/9753e33c)). 
   >

### ZScript

- npcdata and messagedata arrays used the wrong object [`848bc89dd5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/848bc89dd5a8c93a6ed1c9cefc9fef79e6fc011a) [Discord](https://discord.com/channels/876899628556091432/1533266319401681006)
   &nbsp;
   >Every array on an npcdata read and wrote enemy 0 instead of the npcdata the script loaded, so `npcdata->Flags[]`, `->Attributes[]`, `->Defense[]`, `->InitD[]`, `->Shield[]`, `->BFlags[]`, `->MoveFlags[]` and the two weapon arrays all reported the "(None)" enemy's values - usually zero. Scalar members like `->Anim` were unaffected. `messagedata->Flags[]` and `->Margins[]` had the same problem, always acting on message 0.  
   >
   >Regressed in 3.0.0-prerelease.115+2025-06-30 ([df3ce2079c](https://github.com/ZQuestClassic/ZQuestClassic/commit/df3ce2079c)); messagedata in 3.0.0-prerelease.172+2026-04-14 ([d7523f4f81](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7523f4f81)). 
   >
- `save_menu->Flags[]` bad index bound [`e521e3dc49`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e521e3dc493e4856e87b9a878c671f19bc62503e)
- Bad results from an overly long number in a ZASM tag [`93215b2d26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93215b2d26be469b8c88931f6e2662fd52a347ee)
- Backslashes lost from script metadata help text [`eec081f811`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eec081f811131a1bd5cbf1d72601c4ed55484397)
   &nbsp;
   >Help text on a script's attributes, flags or InitD - anything written in a doc comment - lost its backslashes when the quest was reloaded, mangling the text after them. "C:\new" came back as "C:" followed by a newline and "ew". 
   >
- Restore `lweapon->Max()` and `itemsprite->Max()` [`39a038d6eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39a038d6ebe3d38069ab728dff63f26a5cfe5ed8)
   &nbsp;
   >Both lost their deprecated function form when it was converted to `@deprecated_getter`: `itemsprite` never got the name, and `lweapon` was given the name of a ZASM register rather than the function.  
   >
   >Regressed in 3.0.0-prerelease.139+2025-10-24 ([c2a70e4d5c](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2a70e4d5c)). 
   >
- Deprecated getters were not callable on most classes [`5c24245adc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c24245adc0f3e990ec292a12e3e31e20b6684d5)
   &nbsp;
   >Calling the `@deprecated_getter` form of a variable failed to compile with "has not been declared" for every class that uses a ref variable - `npc`, `eweapon`, `lweapon`, `itemsprite`, `combodata` and `messagedata`. So `npc->Max()`, `combodata->PosX()` and friends could not be used at all, despite being documented and warned about as merely deprecated.  
   >
   >Regressed in 3.0.0-prerelease.139+2025-10-24 ([c2a70e4d5c](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2a70e4d5c)). 
   >
- Backslashes eaten from annotation strings [`b36567cb55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b36567cb55cffb43f4b926c4d008e83b70b1386f)
   &nbsp;
   >A string in an annotation lost any backslash it contained, along with the character after it: "C:\new\table" was stored as "C:ewable". 
   >
- Strings longer than 65535 chars no longer broken [`3210067f3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3210067f3e0ee2dc134276d152d643fcaa40b110)
   &nbsp;
   >Internal string and array helpers used 16-bit loop indices, so operating on an array with more than 65535 elements would wrap the index back to zero. For example, `strcmp()` compared only the first 65536 chars (and never reached the null terminator), and writing such an array could hang the game. Arrays can hold up to 214748 elements.  
   >
   >This bug has existed since ZScript arrays were added (2.50-era). 
   >
- Call-heavy scripts ran far slower than the interpreter on Apple Silicon [`adb0a5e4f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/adb0a5e4f7a5a8aaad23fff368d9ea4baf81ff2b)
   &nbsp;
   >The AArch64 JIT resumed execution after a script function call or wait by comparing against every resume point in the function, one at a time, on every entry. Scripts with many function calls in one big function - common in decompiled 2.50-era quests - re-walked that chain on every return from a call, making the JIT up to 30x slower than the interpreter (one quest's replay: 10+ minutes, now 15 seconds), and getting worse the deeper into the function the game's active call sites sit.  
   >
   >Functions with more than 32 resume points now resume via an indirect branch like the x64 backend. The comparison dispatch is kept for small functions, where its per-edge register fixups win.  
   >
   >Regressed recently in 3.0.0-prerelease.201+2026-07-19 ([489060ad94](https://github.com/ZQuestClassic/ZQuestClassic/commit/489060ad94)). 
   >

# Documentation

- Update jit.md for hybrid a64 resume dispatch and direct calls [`d645501fd9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d645501fd920320e81d27ed31d0df49c5ef35d17)

### ZScript

- Explain @deprecated_getter with a note [`1d03f22bd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d03f22bd09a634b99410d5eb8b0fdad8fec8c3d) [Discord](https://discord.com/channels/876899628556091432/1501818446344618047)
   &nbsp;
   >Variables that also have an older function form printed a bare "deprecated_getter Foo" line, which didn't explain what it meant. They now get a note that names the function, with the parentheses, and says to prefer the variable. 
   >
- Explain alias and future-deprecation annotations [`458edd42cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/458edd42cb90c0221973f3ff99eee7c36f1ae3a8) [Discord](https://discord.com/channels/876899628556091432/1501818446344618047)
   &nbsp;
   >Following the same fix for deprecated getters, the remaining alias annotations printed a bare tag line that didn't explain what it meant. Aliases now get a note after the description that names them, with parentheses for functions, and says whether the name is deprecated. Symbols planned to be deprecated later get a "Deprecated in a future version" callout instead of a bare tag.  
   >
   >Also documents the future-deprecation annotation in the binding files, which was missing. 
   >

# Chores

- Remove unused path validation helpers [`4e56792d6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e56792d6b82588ebf94aeafe187c6131e3936b1)
- Fix manage_commits.py reporting wrong conflict-free cherry-picks [`021f3f1e90`](https://github.com/ZQuestClassic/ZQuestClassic/commit/021f3f1e9043f0170a5092e382f7cf80b449ffef)
   &nbsp;
   >The conflict dry-run based its temporary worktree on the current HEAD, so running the script from the main checkout tested picks against main instead of releases/2.55 - reporting 16 of 21 candidates as clean when a real cherry-pick onto 2.55 found 5, including two that would have misapplied (one silently recreating a file 2.55 doesn't have, one patching a function 2.55 doesn't have). The worktree is now always based on releases/2.55, matching the rest of the script.  
   >
   >Clean picks whose touched paths don't exist on 2.55 now print a warning (a pick can create the file or remap it via rename detection), and the output notes that applying cleanly is not the same as compiling - a pick can land on lookalike context that references identifiers 2.55 lacks. 
   >

# Refactors

### Player

- Levels with palette cycling ran much slower than necessary [`ffeed52ace`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffeed52acef5b81e19be690942d305d4fca06ee6)
   &nbsp;
   >Palette cycling advances up to three cycles at independent speeds, so a single level can produce a few hundred distinct palettes. The color lookup tables rebuilt on every palette change (~1ms each) were cached, but the cache only held 64 palettes - and cycling revisits palettes in order, which is the worst case for an undersized cache: entries were evicted right before they were needed again. One tested quest rebuilt tables 42,000 times for only 385 distinct palettes, eating ~40% of frame time.  
   >
   >Now only the expensive RGB lookup table is cached per palette (5x smaller entries, so ~640 palettes fit in 20MB), and the cheap translucency tables are derived from it when the active palette changes. Replaying a palette-cycling-heavy quest went from 158s to 96s.  
   >
   >Palette cycling has always had this cost; the cache added in 2.55.4 / 3.0.0-prerelease.55 ([c3889779](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3889779)) was too small to help it. 
   >

### ZScript

- Derive scripting array ref registers from the object type [`b262acee18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b262acee1800d6177841caddcde325b897d14800)
- Call directly between JIT-compiled script functions [`48fc5b7218`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48fc5b7218024633fbdb1f1f0400cc4adca3a67f)
   &nbsp;
   >Script function calls under the JIT previously round-tripped through the C++ driver on every call and return - a function lookup, a resume lookup, and a full function re-entry each time. Scripts making many small function calls (std.zh-heavy quests reach thousands per frame) spent more time in that overhead than in the scripts themselves.  
   >
   >Calls to functions that can never yield now call the compiled code directly on the machine stack. Yielding callees, not-yet-compiled callees, and calls past a native depth cap keep the driver path. Across the benchmark set, total script time drops ~30% (yuurand_riviere -62%, freedom_in_chains -35%, 100_rooms_of_wisdom -29%). 
   >
- Reduce per-call and per-array-access script engine overhead [`60deb04a95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60deb04a950a07c1c77828d024ad03b6c3f23b71)
   &nbsp;
   >Script engine time on a call- and array-heavy replay (Yuurand) drops about 6%. 
   >
- Fast paths for the hottest script registers [`01776fc9d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01776fc9d6cea30f22ba1a0712113502b0e084eb)
   &nbsp;
   >Script engine time on Yuurand dropped by 10%. 
   >

# Tests

- Unit tests for the util string and path helpers [`166deb0c99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/166deb0c9980a086965cca3c04905128767c4019)
   &nbsp;
   >Covers everything fixed in the recent util.cpp work: the two fixed-size buffers that could be overrun (ffparse2 and unstringify_vector), the escape round-trips that ate backslashes (unescape_characters, disallow_escapes), escape_string leaving quotes and backslashes unescaped, checkPath treating special files as regular ones, and nearest_existing_directory. 
   >
- Fix replay_uploads.py failing on Windows with too many replays [`c22ea5d8e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c22ea5d8e6cf7131d5d22cd1540b085ccf205cf5)
   &nbsp;
   >Running the uploaded replays passed every replay path as its own command line argument. At a few hundred replays that exceeds the ~32k character command line limit on Windows, and the run died before starting with "[WinError 206] The filename or extension is too long".  
   >
   >Pass the arguments via a file instead. 
   >

# CI

- Vscode extension tests failed to launch VS Code on mac [`797afd4bd9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/797afd4bd93c8768ee533b613a12072c5bec26ed)

# Misc.

- Fix measure_performance.py timings on Windows [`3267b80569`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3267b80569ec441664cd04f43bbf4658f182a465)
