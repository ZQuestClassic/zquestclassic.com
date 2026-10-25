---
title: 3.0 Prerelease 228 2026-10-11
description: 
date: 2026-10-11T20:03:57Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.228%2B2026-10-11/3.0.0-prerelease.228%2B2026-10-11-linux.tar.gz
    name: 3.0.0-prerelease.228+2026-10-11-linux.tar.gz
    platform: linux
    size: 36635200

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.228%2B2026-10-11/3.0.0-prerelease.228%2B2026-10-11-mac-universal.dmg
    name: 3.0.0-prerelease.228+2026-10-11-mac-universal.dmg
    platform: mac
    size: 52324639

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.228%2B2026-10-11/3.0.0-prerelease.228%2B2026-10-11-windows-x64.zip
    name: 3.0.0-prerelease.228+2026-10-11-windows-x64.zip
    platform: windows-x64
    size: 36455663

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.228%2B2026-10-11/3.0.0-prerelease.228%2B2026-10-11-windows-x86.zip
    name: 3.0.0-prerelease.228+2026-10-11-windows-x86.zip
    platform: windows-win32
    size: 34524834
prerelease: true
id: 410115652
tag_name: '3.0.0-prerelease.228+2026-10-11'
channel: '3'
tags:
  - releases
---

# Features

### Editor

- Show walkability and flags on the combo pages [`2cd3634267`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cd3634267f3ade9bc6698dd5bffa9bd8a7c1daa) [Discord](https://discord.com/channels/876899628556091432/1557103742447525960)
   &nbsp;
   >Press W or F in the combo pages (and the combo selector) to toggle showing each combo's walkability or inherent flag, the same as the "Show Walkability" and "Show Flags" view options. 
   >

### ZScript

- `@ExportEngineValue("Level Item")` [`75ee64a0fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75ee64a0fe5aca65a3b9f3c65b9789667396da88)
   &nbsp;
   >New ExportEngineValue option for exporting a set of Level Item flags. Exports as a bitflags, so more than one level item can be selected. 
   >

# Bug Fixes

- Memory leak when loading sound effects of older quests [`5c6d195f1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c6d195f1db77116acf1d721ca60c44cfcc90284) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Loading a quest saved in an older version kept an extra copy of all of its sound effects in memory that was never freed, about 21 MB for yuurand. It leaked again every time such a quest was loaded.  
   >
   >Regressed in 3.0.0-prerelease.160+2026-02-08 ([58486c3f4a](https://github.com/ZQuestClassic/ZQuestClassic/commit/58486c3f4a)). 
   >
- Prevent crashes from long file names and paths [`85a84fd6c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85a84fd6c4f0f9b7e7f39d5bf2eed58fbd6704b8) [Discord](https://discord.com/channels/876899628556091432/1557949663615909998)
   &nbsp;
   >Grabbing colors from an image whose file name was longer than 64 characters crashed the editor. Fixed several similar crashes from long file names or paths:  
   >
   >* Grabbing tiles from a file with a very long name and no extension
   >* Changing the file type filter in the built-in file picker when the
   >  current file has a very long name
   >* Opening a quest with a very long path (Recent quests menu)
   >* File and music names with many non-English characters
   >* Very long paths for quests, images, MIDIs and music in the editor
   >
   >
   >&nbsp;
   >
   >The palette grab crash regressed in 2.55-alpha-113 ([bc22503603](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc22503603)), and the Recent quests crash was introduced when that menu was added in 2.55-alpha-103 ([d530a2fba3](https://github.com/ZQuestClassic/ZQuestClassic/commit/d530a2fba3)). The rest are long-standing. 
   >
- Api server read oversized replay uploads into memory [`a5c6204189`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5c62041899872bf35e079165a5ced470c21040a)
   &nbsp;
   >Bug introduced when replay uploading was added in 3.0.0-prerelease.58+2024-07-07 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >
- Api server errored on malformed replay uploads [`d39f2b352e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d39f2b352e4f0beda35f0047bc83eaa26dae87ee)
   &nbsp;
   >Bug introduced when replay uploading was added in 3.0.0-prerelease.58+2024-07-07 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >

### Player

- Keep palette mixing and slopes identical across cpu architectures [`55a86482b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55a86482b4cc46c57581b86fc1808a28ed0087dd)
   &nbsp;
   >Script palette mixing could produce colors one step off on arm64 compared to x86, and slope collision used the same calculation, desyncing replays recorded on the other architecture.  
   >
   >Bug introduced when AArch64 support was added in 3.0.0-prerelease.201+2026-07-19 ([a720c27f87](https://github.com/ZQuestClassic/ZQuestClassic/commit/a720c27f87)). 
   >
- Replays were never re-uploaded on Windows and Linux [`f3c558544f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3c558544f97d804abb3d0f619b97357fa7d4270)
   &nbsp;
   >A replay that grows after being uploaded (the player keeps playing that save) is meant to be uploaded again, but checking whether the file changed only worked on macOS. This also meant a save that was first seen before it had been played was never uploaded at all.  
   >
   >Bug introduced when replay uploading was added in 3.0.0-prerelease.58+2024-07-07 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >
- Replay never uploaded after an unexpected server response [`148b1608b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/148b1608b18493ecfb1299fced17b3a23a5c4ef0)
   &nbsp;
   >Any error response other than a server error made the client give up on that replay forever - including ones that have nothing to do with the replay, like a 404 or 429 from a proxy or a bad server deploy. Now the replay is only given up on when the server rejects the replay itself, and is otherwise tried again later.  
   >
   >Bug introduced when replay uploading was added in 3.0.0-prerelease.58+2024-07-07 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >
- Replay of a copied save never uploaded [`7d095864f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d095864f77171cca6a3165def5eaf3cc3d93a89)
   &nbsp;
   >Copying a save file gives its replay a new identity the first time the copy is played. If replays were uploaded before then, the copy's replay was mistaken for one too old to upload, and was never uploaded - even after being played.  
   >
   >Bug introduced when replay uploading was added in 3.0.0-prerelease.58+2024-07-07 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >
- Leaked curl handle when a replay upload request failed [`739b0763b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/739b0763b15195d2d6a4c9cc2082d798c1c61287)
   &nbsp;
   >Bug introduced when replay uploading was added in 3.0.0-prerelease.58+2024-07-07 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >

### Editor

- Every combo was saved with a lift weapon data block [`578cf12b3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/578cf12b3d5c30ee89f1e188d57a538bd6796005)
   &nbsp;
   >A combo's lift weapon data was compared against the wrong default when deciding whether the combo was untouched, so no combo ever counted as blank. Every combo written to a quest file carried a full block of default lift weapon data, making quest files a few percent larger than needed. The editor also treated every combo as in use: importing a combo file with overwrite protection never replaced anything, and "Effect Square Fix" skipped every combo.  
   >
   >Bug introduced when standardized weapon data settings were added in 3.0.0-prerelease.120+2025-07-19 ([b43e006d74](https://github.com/ZQuestClassic/ZQuestClassic/commit/b43e006d74)). 
   >
- Wrong error message for an invalid ZASM string or array [`ac0684880f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac0684880f89af61b44f16eb286c58086bfb8c4d)
   &nbsp;
   >When assembling ZASM, an invalid string was reported as an invalid third parameter, and an invalid array as an invalid string.  
   >
   >Regressed in 3.0.0-prerelease.102+2025-05-04 ([51ec0e0a51](https://github.com/ZQuestClassic/ZQuestClassic/commit/51ec0e0a51)). 
   >

### ZScript

- Stop JIT losing register values around function calls [`09d7852b67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09d7852b67c7b7698ba6b7cfefa489de377ff4c5)
   &nbsp;
   >Under the JIT, a value a script kept in a register could be lost when it was still needed after a function call or return - for example a value written before two calls and read after them, or one a function set before returning to a caller that reads it.  
   >
   >Seen in The Darkness Within, where a bridge put back the wrong combos as it retracted.  
   >
   >In practice only quests compiled by old versions hit this: 2.50's compiler kept a value in a register across function calls, a pattern the JIT did not anticipate. The generated ZASM was unsafe: it sometimes overwrote registers before they could be used (though it worked in the common case).  
   >
   >Regressed in 3.0.0-prerelease.135+2025-10-08 ([68087da593](https://github.com/ZQuestClassic/ZQuestClassic/commit/68087da593)). 
   >
- Debugger shows wrong locals with experimental optimizer [`debeb75ee2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/debeb75ee20fc3f18a66e28d30a342094a8697da)
   &nbsp;
   >With -optimize-ZASM-experimental, the debugger could show the wrong value for a function's local variables, or fail to evaluate them.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger crash when a console expression errors [`7b618b6481`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b618b6481de3399e1e4063b937889f259a5aba1)
   &nbsp;
   >With "Break on error" enabled, evaluating a console expression that raised a script error (such as reading a member of an invalid ffc) crashed the player.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger window corruption when calling functions [`913917112e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/913917112e7ff4773582557adc629a086923be77)
   &nbsp;
   >Calling a script function from the debugger (in the console, a watch, or a value-change breakpoint) could redraw the debugger window from inside the call. That could corrupt the window, or crash if a breakpoint was removed or the window closed at that moment.  
   >
   >Regressed in 3.0.0-prerelease.180+2026-05-02 ([1663c510c6](https://github.com/ZQuestClassic/ZQuestClassic/commit/1663c510c6)). 
   >
- Debugger assignment can free the assigned object [`2c72cc2769`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2c72cc2769fe743b56af255a7a0a87728d3f14a2)
   &nbsp;
   >Assigning an object to a variable in the debugger console could free that object when the variable held its only reference, as in `x = x` or `node = node->next`, leaving the variable pointing at nothing.  
   >
   >Bug introduced when assignment in debugger expressions was added in 3.0.0-prerelease.161+2026-02-16 ([ef4820fa6d](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef4820fa6d)). 
   >
- Debugger shows wrong call stack for other scripts [`dc2d4e146e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc2d4e146e276666f71826dbb566da0e824a7b1b)
   &nbsp;
   >Selecting a script other than the paused one in the debugger's Scripts panel showed the wrong call stack for it: every frame after the first was a "?" frame. Selecting one of those frames showed the wrong variables.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger shows wrong variables for recursive calls [`d21617a531`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d21617a5318395115bf64e5faf97027028323f0a)
   &nbsp;
   >In a recursive function, selecting a call stack frame below the collapsed "... (xN)" row showed another frame's variables. Clicking that row itself also showed nonsense variables; it now does nothing.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger watch list stale after unwatching [`42aae92d57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42aae92d576c65155dbb7468d1316b632c5f7475)
   &nbsp;
   >Removing a watch with the "Unwatch" context menu item left its row in the Watch panel until something else refreshed it, and double-clicking a row to edit it could then edit a different watch.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger "Enable All" skips value-change breakpoints [`f2d8e7b65f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2d8e7b65f7b6271d1e5a4c3b5f3f08b3ce5ab75)
   &nbsp;
   >The Breakpoints panel's "Enable All" and "Disable All" buttons did not affect breakpoints that pause when a value changes, though "Clear All" removes them.  
   >
   >Bug introduced when value-change breakpoints were added in 3.0.0-prerelease.216+2026-08-30 ([f47b67abe4](https://github.com/ZQuestClassic/ZQuestClassic/commit/f47b67abe4)). 
   >
- Debugger watches can read a destroyed script [`55caf48e1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55caf48e1db040bc54a2db3a635b53a8fb528dd9)
   &nbsp;
   >After resuming from a pause, the debugger kept referring to the script it had paused in. Watches that call a function still evaluate every second while the game runs, and read that script's data even after its sprite (and so its script data) was gone, which could crash.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger crash dividing the minimum long by -1 [`56dd042d19`](https://github.com/ZQuestClassic/ZQuestClassic/commit/56dd042d19e629946e2440fdab75f1f86a7c1c77)
   &nbsp;
   >Evaluating a long division whose result doesn't fit in a long, such as the minimum long value divided by -1L, crashed the player on x86.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger assignment to members miscounts references [`89b9089a7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89b9089a7e4269daf15e743e47c4bd01d4d93230)
   &nbsp;
   >Assigning an object or array to a class member in the debugger console (`obj->arr = other`), or a class instance to an element of an untyped array, didn't track the reference. The assigned value could later be freed while still in use, and the replaced value was never freed.  
   >
   >Bug introduced when assignment in debugger expressions was added in 3.0.0-prerelease.161+2026-02-16 ([ef4820fa6d](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef4820fa6d)). 
   >
- Debugger crash after a quest fails to load [`a9c8161a58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9c8161a5886d53b76f3ebaa9fae90a429fe5ad2)
   &nbsp;
   >If a quest failed to load partway through while the debugger was open with breakpoints set, the Breakpoints panel could read the previous quest's freed script data and crash.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger hover tooltip shows outdated array contents [`7fef56a3c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fef56a3c974a7c32b908a633e6dcae40b5dd8f9)
   &nbsp;
   >Hovering an array or object in the debugger's source view kept showing its contents from the first time it was hovered, even after stepping changed them, as long as it was still the same array or object.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Prevent crash on exit with the debugger window open [`d16b242cd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d16b242cd0a0ac2087477d4edee77c262aff44ba)
   &nbsp;
   >Quitting the player, or a replay finishing, while the debugger window was open crashed on macOS.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Script state leaked when a scripted eweapon reflected into an lweapon [`fe1e594f8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe1e594f8b239bd7ee82db1f2136d4730b9d1d0e)
   &nbsp;
   >A scripted enemy weapon that bounced off a mirror combo or a mirror shield became a player weapon in place. The state of the script it had been running, and every object and array that script owned, stayed filed under the enemy weapon type and was never released when the weapon was removed. They lingered until the game was restarted, as did any objects stored in the weapon's enemy weapon arrays, like InitD[].  
   >
   >Regressed in 3.0.0-prerelease.20+2024-01-01 ([e3b23aa7da](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3b23aa7da)). 
   >
- JIT on arm64 could corrupt the caller of a huge function [`7a6d0f5561`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a6d0f5561143509a14585563822f96e388153c5)
   &nbsp;
   >On arm64, a script function compiled with the JIT whose spilled values take more than 16 KB of stack returned with a register the caller relies on overwritten. It went unnoticed only because the code calling into JIT-compiled functions happened not to keep anything there across the call.  
   >
   >Bug introduced when the native arm64 JIT was added in 3.0.0-prerelease.201+2026-07-19 ([489060ad94](https://github.com/ZQuestClassic/ZQuestClassic/commit/489060ad94)). 
   >
- Reflected scripted eweapons ran an lweapon script [`5cdd3436d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5cdd3436d54676a4607ff8eb2e5e3762e5c17db6)
   &nbsp;
   >A scripted enemy weapon that bounced off the hero's mirror shield kept its script number after becoming a player weapon, so it started running whichever lweapon script happened to have the same number.  
   >
   >Regressed in 3.0.0-prerelease.20+2024-01-01 ([e3b23aa7da](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3b23aa7da)). 
   >
- -no-JIT-print-asm and -no-JIT-fatal-compile-errors were ignored [`96870399e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96870399e9bf1ed94b1f205535e73790375aa79b)
   &nbsp;
   >These two flags could only turn their config option on: the negated form did nothing, so a config that enabled one couldn't be overridden from the command line. They now work like the other JIT flags. 
   >

# Documentation

### ZScript

- Reorganize jit.md [`9f04e745c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f04e745c2d645d5715679e787596ef879a3e22b)
   &nbsp;
   >Group the JIT doc by audience: using the JIT, how the interpreter and the JIT work, then per-backend details, debugging, and a flags reference. Add a backend comparison table, split up the longest paragraphs, drop history asides, and fix x64-only wording that applies to both native backends.  
   >
   >Also correct -JIT-a64-max-vregs, which is now off by default. 
   >
- Fix stale and missing details in jit.md [`aec2ff00a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aec2ff00a472d7fe7da9cc0feb262d439bdad109)

# Build

- Initial support for FreeBSD and the other BSDs [`aee91bfcc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aee91bfcc9e396a9f0a09d9e28274d715568ec46)
   &nbsp;
   >ZQuest Classic now builds and runs on FreeBSD (other BSDs untested). 
   >

# Chores

- Add Panoply of Calatia to the memory and performance scripts [`6f1b270144`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f1b27014451b9278772a99568d6b00eb7eb3a25)
   &nbsp;
   >Its decompiled 2.50-era global script puts ~12.7k call sites in one 149k-instruction function, the worst case seen for JIT compilation. measure_performance.py now accepts default replays relative to the repo root (under .tmp/, skipped when missing), like measure_memory.py's replay uploads. 
   >
- Update replay_uploads_known_good_replays.json [`98ab49e2fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98ab49e2fba73e98d58042f0f9def53d33bee0ef)

# Refactors

- Use CheckList typedef for vector<CheckListInfo> [`8c2d8a1cbb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c2d8a1cbbdcec58b1edd5c75c74782e88dc5707)
- Only allocate combo weapon data and script metadata when used [`433ebb351c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/433ebb351c43a90535a703020afb944533259707) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Every script slot reserved memory for its metadata (such as names and help text for its InitD and attributes), even though most slots are unused. It is now only allocated when set, which saves about 11 MB of memory. 
   >
- Stop copying sound effects when moving them [`86a18e175c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86a18e175ce1d0741226253877ba9aab1f8cdb2b) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Loading a quest briefly kept extra copies of its sound effects in memory, which raised the peak memory usage of both the player and the editor by up to about 20 MB.  
   >
   >Regressed in 3.0.0-prerelease.160+2026-02-08 ([58486c3f4a](https://github.com/ZQuestClassic/ZQuestClassic/commit/58486c3f4a)). 
   >

### Player

- Share one buffer between all blank tiles [`19db464e5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19db464e5e1c9187106b308ef10959152e17a4f8) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Every one of the 214500 tile slots had its own memory allocated, even though most are blank. Blank tiles now share a single buffer in the player, which saves about 50-60 MB of memory for most quests. 
   >

### ZScript

- Reading mapdata FFCs no longer allocates them [`1e94d42973`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e94d42973a80b012af9ac1746536ba71e42df34) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Screens only allocate memory for as many FFCs as they use, but reading any FFC property of a screen through mapdata allocated all FFCs up to the one read. A script that reads every FFC of every screen (as Crucible Crest's does on startup) made every screen allocate all 128, which used about 437 MB of memory. 
   >
- Keep less JIT analysis data in memory [`d6cffc8ae5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6cffc8ae542f114a018672a9cae63569c4bd2ec) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >The JIT compiles a script's functions as they become hot, and kept an analysis of each script's control flow in memory for as long as the quest was loaded, so that any function could be compiled later. It now builds that for each function just before compiling it, which lowers memory usage by about 100 MB for yuurand. 
   >
- Correct a stale comment about JIT yielding functions [`81e8b3c36d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81e8b3c36d0e102e591117fa91e0077a0a13d48e)
- Explain the ZASM liveness analysis [`6cb2acfbe2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6cb2acfbe2f6ddccf94469a1418eecf187a3d7ba)
   &nbsp;
   >A comment above zasm_run_liveness_analysis covering what it computes, who consumes it (optimizer and JIT register cache), the dataflow equations, how calls, returns and suspends are modeled, and the implicit reads. 
   >
- Faster JIT calls in functions with many call sites [`5e55db05e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e55db05e409b4f2908251fed69c7a6bb12936d2)
   &nbsp;
   >Script functions with thousands of function calls in them, like the global scripts of quests decompiled from 2.50, previously called other script functions through the slower path under the JIT. Those calls are now as fast as everywhere else: the global script of "The Adventure of Link and Zelda: Panoply of Calatia" spends 3.3x less time running scripts. 
   >
- Halve the memory used to hold compiled scripts [`3c2cc3af83`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c2cc3af83ec10066241d8535778238cbee72f18) [Discord](https://discord.com/channels/876899628556091432/1556484930635042917)
   &nbsp;
   >Every instruction of a compiled script took 32 bytes, half of which were for the string or array that a few instructions carry. They now take 16 bytes, which lowers memory usage by about 200 MB for yuurand and 40 MB for Stellar Seas, in both the player and the editor.  
   >
   >The code of a script can now have at most 65535 strings and arrays, and compiling one with more shows an error. 
   >
- Use much less memory to JIT compile very large scripts [`e649140be6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e649140be6b131204ab099a3aa9895a96979d3b2)
   &nbsp;
   >Compiling a very large script function with the JIT could briefly take over a gigabyte of memory - the global script of "The Adventure of Link and Zelda: Panoply of Calatia" needed 1.4 GB. Such functions are now compiled in parts of a bounded size, so no single compile needs more than a few tens of MB. Panoply of Calatia's peak memory drops from 1.6 GB to 450 MB (260 MB with 2 compile threads), and its scripts compile 8x faster, with no change in how fast they run. 
   >
- Also split very long blocks when JIT compiling in pieces [`9d4c7f9a33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d4c7f9a33ee65cb0f01a9632ceffb913e188ff4)
- Remove far branches from the arm64 JIT [`2059454ed8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2059454ed87262931a54e72bad7a47417ec53817)
- Always resume compiled code with an indirect branch on arm64 [`eb704d60ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb704d60ac3c6c4f3cad50a2fab7ae34daa5ceab)
- Remove JIT size limits made redundant by pieces [`0e51cdcc8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e51cdcc8a6779158e44d4888c71ac79426b68d6)

# Tests

- Cover re-uploading a replay in test_upload [`c95c286f21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c95c286f21baaaeb9c966b9688b562e1eda2644d)
   &nbsp;
   >Uploads half of a replay, then appends the rest (as if the player kept playing the same save) and uploads again, checking that the server replaces its copy with the longer replay. 
   >
- Fetch re-uploaded replays and pin known good ones in replay_uploads.py [`f2b4c42a54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2b4c42a5411ccd89d11e44502444a3c80f3fd98)
   &nbsp;
   >A replay can be re-uploaded under the same key with more frames appended, but replay_uploads.py never re-fetched a replay it already had locally. Now a local copy whose size differs from the bucket's is re-downloaded (and logged).  
   >
   >Re-downloading alone would reset the local copy that gets updated/asserted, so an --assert run could fail for reasons unrelated to the change being tested, and different people could end up validating different versions of the same replay. So the known good list now also records how much of each replay was validated (steps and frames). Since uploads are append-only, cutting the latest upload to that length recreates the validated replay exactly, so --only_known_good runs the same replays for everyone. Each local copy remembers what it was made from and is only recreated in --update mode when that changes; --assert warns instead. --update_known_good records new pins.  
   >
   >The existing list was converted using the local copies it was made from, which still match the bucket. 
   >

### ZScript

- Report debugger test failures instead of aborting [`02d89ec6f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02d89ec6f3464edbb6263de4f2b6b0b6caefdd80)
   &nbsp;
   >A failed assertion inside a debugger test coroutine escaped it and terminated the whole test process, so nothing said which check failed, and no later test ran. Now the failure is recorded on the task (and passed up to any task awaiting it), reported, and the debugger is set playing with its breakpoints removed so the replay can finish.  
   >
   >The four replay tests share one driver. 
   >

# CI

- Pull requests from forks no longer fail on the private ZScript database [`93d4fad8e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93d4fad8e334ec6431449976fda7fb0d7ece1bc6)
- Use the runner's cached Python 3.12 instead of downloading 3.12.8 [`e6b2b4ae6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6b2b4ae6dddf8e160999fdf6ce7d4a264e17a4d)
   &nbsp;
   >The runner images no longer carry 3.12.8 in their toolcache, so every job downloaded it and then let pip upgrade itself from PyPI. A PyPI blip during that upgrade killed two replay jobs in one run (a third died in the requirements install). With a '3.12' pin, setup-python uses the cached 3.12.x (3.12.14 on Ubuntu, 3.12.10 on Windows and macOS) and skips that download entirely.  
   >
   >release.yml keeps the exact pin for now. 
   >
