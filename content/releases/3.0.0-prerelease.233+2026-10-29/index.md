---
title: 3.0 Prerelease 233 2026-10-29
description: 
date: 2026-10-30T01:12:29Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.233%2B2026-10-29/3.0.0-prerelease.233%2B2026-10-29-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.233+2026-10-29-linux-aarch64.tar.gz
    platform: linux-aarch64
    size: 33631957

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.233%2B2026-10-29/3.0.0-prerelease.233%2B2026-10-29-linux-x64.tar.gz
    name: 3.0.0-prerelease.233+2026-10-29-linux-x64.tar.gz
    platform: linux
    size: 34221321

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.233%2B2026-10-29/3.0.0-prerelease.233%2B2026-10-29-mac-universal.dmg
    name: 3.0.0-prerelease.233+2026-10-29-mac-universal.dmg
    platform: mac
    size: 40470506

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.233%2B2026-10-29/3.0.0-prerelease.233%2B2026-10-29-windows-arm64.zip
    name: 3.0.0-prerelease.233+2026-10-29-windows-arm64.zip
    platform: windows-arm64
    size: 36882207

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.233%2B2026-10-29/3.0.0-prerelease.233%2B2026-10-29-windows-x64.zip
    name: 3.0.0-prerelease.233+2026-10-29-windows-x64.zip
    platform: windows-x64
    size: 36303216

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.233%2B2026-10-29/3.0.0-prerelease.233%2B2026-10-29-windows-x86.zip
    name: 3.0.0-prerelease.233+2026-10-29-windows-x86.zip
    platform: windows-win32
    size: 34370021
prerelease: true
id: 428606700
tag_name: '3.0.0-prerelease.233+2026-10-29'
channel: '3'
tags:
  - releases
---

# Features

- Viewport deadzone for scrolling regions [`7a7f1131fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a7f1131fd6426da388a0850fe4b4d418c565e08) [Discord](https://discord.com/channels/876899628556091432/1436138561605730417)
   &nbsp;
   >Adds a viewport deadzone: a box centered on the viewport within which the player (or other viewport target) can move freely without the viewport following. Once the target pushes past the box's edge, the viewport moves just enough to keep them on it, making region scrolling feel less locked to the player's every step.  
   >
   >Configure the box size in Init Data's Vars > Regions tab. Existing quests load with no deadzone (0), which keeps the viewport locked to the target, exactly as before.  
   >
   >Scripts can read and change it at runtime via the new `Viewport->DeadzoneWidth` and `Viewport->DeadzoneHeight`.  
   >
   >Unlike `Viewport->Mode` and `Viewport->Target`, the deadzone is not reset when scrolling between regions; the existing scroll alignment animation smoothly absorbs any viewport offset held when a transition starts. 
   >
- Viewport lookahead, idle recentering and per-DMap follow settings [`2872c0af49`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2872c0af49a5bf9b65e9cd18f99d83fc479085f2) [Discord](https://discord.com/channels/876899628556091432/1436138561605730417)
   &nbsp;
   >The viewport can now gradually aim ahead of (advance) or behind (decay) the direction the player is moving, giving more frontal or rearward view while moving around scrolling regions. Separate signed 'Viewport Lookahead X/Y' distances control each axis — positive leads, negative trails — and 'Viewport Lookahead Speed' controls how many pixels per frame (fractional) the offset shifts, so the viewport glides rather than snaps when the player turns around.  
   >
   >Idle recentering complements the deadzone: once the player has stood still for 'Viewport Recenter Delay' frames, the viewport eases back toward them at 'Viewport Recenter Speed' pixels per frame until they are centered again (default speed 0: off). With a lookahead, it only moves toward the player as far as the deadzone allows, and never further ahead.  
   >
   >Together with the deadzone these are the viewport's "follow settings". Configure them in Init Data's Vars > Regions tab (lookahead and recentering default to off, and existing quests have no deadzone, so nothing changes unless you set them), or give a DMap its own set with 'Customize Viewport Follow Settings' in the DMap editor's Mechanics tab (also via `dmapdata->Flagset[DMFS_CUSTOM_VIEWPORT_FOLLOW]` and `dmapdata->Viewport*`). Scripts can read and change the effective values at runtime via `Viewport->LookaheadX/LookaheadY/LookaheadSpeed/ RecenterSpeed/RecenterDelay` (and the existing deadzone properties), and restore the configured values with `Viewport->ResetFollowSettings()`.  
   >
   >The lookahead offset composes with the deadzone (the box centers on the shifted aim point), is capped so the viewport can always reach the region edges, holds while the player stands still, ignores movement against the direction they face (knockback, conveyors), and is dropped — rebuilding gradually — by warps, camera cutscene effects and scripts handing the viewport back from script control; scroll transitions carry it. 
   >

### Player

- "Viewport Follow" debug overlay in Cheats > Show/Hide Layer [`8bb913e92c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8bb913e92cf7feb5f5bcf5f245f512f407aeb6ad) [Discord](https://discord.com/channels/876899628556091432/1436138561605730417)
   &nbsp;
   >Draws the viewport follow state so quest makers can see the deadzone box and watch the lookahead vary as the player moves:  
   >
   >- cyan box: the deadzone, centered on the viewport's focus (white
   >  cross). The viewport only moves once the aim point pushes past an
   >  edge.
   >- yellow line from the player's center to a filled dot: the current
   >  lookahead offset, ending at the aim point. A hollow dot marks where
   >  it is easing toward.
   >
   >
   >&nbsp;
   >
   >Hidden while a script or a camera cutscene effect controls the viewport. 
   >

### Editor

- New quests default to a 32x32 viewport deadzone [`c459f29c4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c459f29c4cdce8df8ba5c63709605ee2ccd0216c) [Discord](https://discord.com/channels/876899628556091432/1436138561605730417)
   &nbsp;
   >New quests now start with a 32x32 viewport deadzone (one tile each way from the center), so scrolling regions feel less locked to the player's every step out of the box. Existing quests keep their setting, and lookahead and idle recentering stay off by default. 
   >

### Web

- Show which browser features work in the About panel [`eb92a37523`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb92a37523addaba6ea77c3f58641e540ab54546)
   &nbsp;
   >The About panel lists the browser features the web version uses - threads, attaching a local folder, keyboard layouts, gamepads, fullscreen, persistent storage and offline play - and says whether this browser supports all of them or only some. 
   >

# Bug Fixes

- [win] support file paths with non-ASCII characters [`c01ebb4d8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c01ebb4d8babee81b469f163812ec50443ca89fd) [Discord](https://discord.com/channels/876899628556091432/1563898092930072667)
   &nbsp;
   >On Windows, a quest in a folder with an accented name (like "Créateur") could be opened in the editor, but launching test mode failed with "-test invalid parameter: 'quest_file_path' ... but that file does not exist!". Other file loads had the same problem.  
   >
   >Bug introduced when test mode was added in 2.55-alpha-103 ([77fc0e7ffc](https://github.com/ZQuestClassic/ZQuestClassic/commit/77fc0e7ffc)). 
   >
- [win] fix crash playing music with non-ASCII file names [`39fb7fd2a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39fb7fd2a5149faf347fa30edefd105ef329344a)
   &nbsp;
   >On Windows 10 1903 and newer, a quest's music file name with characters outside ASCII could crash the player when entering its DMap (or when a script played it), and the editor when previewing it. Older editors saved such names in the system's code page, and some quests have stray bytes left in the name, like the night DMap of Nyroxland. The music now plays as before, or is skipped if the file doesn't exist.  
   >
   >Regressed recently in [c01ebb4d8b](https://github.com/ZQuestClassic/ZQuestClassic/commit/c01ebb4d8b). 
   >
- Snapshots taken from the menu showing the menu itself [`24540c1b4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24540c1b4a58beba2425ff4f1f21271f684a32cd) [Discord](https://discord.com/channels/876899628556091432/1564728448864362616)
   &nbsp;
   >Taking a snapshot from the editor's Etc menu captured the open menu again, and snapshots in both apps could show an out-of-date frame.  
   >
   >Regressed in 3.0.0-prerelease.216+2026-08-30 ([3cb924e0cc](https://github.com/ZQuestClassic/ZQuestClassic/commit/3cb924e0cc)). 
   >
- Draw accented letters and symbols in older quests' text again [`5a6f7ada73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a6f7ada73abd8d46da536b8ddf1e9e740467cd4) [Discord](https://discord.com/channels/876899628556091432/1564839184978542693)
   &nbsp;
   >Text with characters that weren't stored as UTF-8 drew each of them as "^" (or as the wrong character) in DMap titles, DMap intros, item names, script-drawn strings and the editor. Quests made before 2.55 store accented letters this way (such as "Générique" in a French quest), and some use the 128-255 range of the Zelda NES font for symbols like hearts and arrows. These draw as they did in 2.53 again.  
   >
   >Regressed in 2.55-alpha-117 ([134c2fd7af](https://github.com/ZQuestClassic/ZQuestClassic/commit/134c2fd7af)). 
   >
- Explain a missing X11 display on Linux instead of crashing [`31eada4959`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31eada4959c4d389728ae7944fc52bf7d1a51bb3) [Discord](https://discord.com/channels/876899628556091432/1565488192013082767)
   &nbsp;
   >On Linux, starting the player, editor or launcher without a reachable X11 display (for example from a remote shell with DISPLAY unset, or on a system with no X server or XWayland) crashed immediately. It now exits with a message saying an X11 display is required and how to set DISPLAY (or to pass -headless for commands that need no window). 
   >

### Player

- Multiple "button" triggers on the same combo improperly eating inputs [`6bbb22ee46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6bbb22ee462f6fe178d44ab9b4a0fa770ef75e81)
   &nbsp;
   >This caused only the first trigger checking for a particular input to see that input, even if that trigger fails a condition and a subsequent trigger checks for the same input.  
   >
   >Bug introduced when multiple triggers per combo were added in 3.0.0-prerelease.110+2025-06-14 ([56e9081285](https://github.com/ZQuestClassic/ZQuestClassic/commit/56e9081285)). 
   >
- Reloading in test mode restored stale generic script state [`78d8bbdd2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78d8bbdd2dab73c68f9e0faba275e75574bf7b2b)
   &nbsp;
   >When playing a quest in test mode (or in a replay), saving left out the generic scripts' state - whether each one is running, its Data[], and so on - so reloading that save restored their state from before it, unlike when playing normally.  
   >
   >Bug introduced when generic script state began being saved in 2.55-alpha-107 ([e66e359835](https://github.com/ZQuestClassic/ZQuestClassic/commit/e66e359835)). 
   >

### Editor

- Keep non-ASCII characters in quest package names [`0779039a35`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0779039a355e4757eb9f7b2f80ff49224c570b2d)
   &nbsp;
   >Packaging a quest whose title has characters outside ASCII, like "Créateur", named the package folder and exe "Cr-ateur". Those characters are now kept; only ones not allowed in file names are replaced with "-".  
   >
   >Regressed in 2.55-alpha-119 ([e64f888d24](https://github.com/ZQuestClassic/ZQuestClassic/commit/e64f888d24)). 
   >
- [mac/linux] fix the editor sometimes closing after a compile [`5977c59b4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5977c59b4fed1537e8c003dfd77618c317770c6e)
   &nbsp;
   >On macOS and Linux, the editor could close right after compiling scripts, most often on a slow or busy computer.  
   >
   >Regressed in 2.55-alpha-108 ([c05576d9da](https://github.com/ZQuestClassic/ZQuestClassic/commit/c05576d9da)). 
   >
- Report how the compiler ended when it crashes [`5775362eef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5775362eef9bd397146f470914121e83b4b167bc)
   &nbsp;
   >If the script compiler crashed or quit partway through compiling, the editor closed without any message on macOS and Linux, and showed a timeout error on Windows. It now shows an error saying how the compiler process ended (for example, which signal killed it).  
   >
   >Bug introduced when the compiler was moved into its own process on Linux in 2.55-alpha-103 ([7667238ef9](https://github.com/ZQuestClassic/ZQuestClassic/commit/7667238ef9)). 
   >

### ZScript

- Allow non-ASCII characters in script file names [`e4f21b1c78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4f21b1c784ef8ec9cecb9698a977200719d012c)
   &nbsp;
   >Script file and directory functions rejected any name with characters outside ASCII as an "invalid control character" on Windows, macOS and x86 Linux, but allowed it on ARM Linux. Such names are now allowed everywhere.  
   >
   >Regressed in 3.0.0-prerelease.67+2024-09-07 ([0480ad0349](https://github.com/ZQuestClassic/ZQuestClassic/commit/0480ad0349)). 
   >
- Give non-ASCII string characters the same value everywhere [`cd18c9376e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd18c9376eaf74be5ff67ae0a6dd5bc997830914)
   &nbsp;
   >Characters outside ASCII (such as the two bytes of "é") in script strings were negative numbers on Windows, macOS and x86 Linux, but positive on ARM Linux, so scripts and replays could behave differently across platforms. They are now always 0-255, matching File->ReadBytes. This covers string literals and strings the engine gives to scripts (item and DMap names, File->ReadString, ...).  
   >
   >File->ReadChars also stopped at the first such character on those platforms, as if it were the end of the file. It now reads them.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). File->ReadChars bug introduced when file functions were added in 2.55-alpha-75 ([ef54b03d25](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef54b03d25)). 
   >
- Make `stricmp()` give the same result on every platform [`59c55fe3f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/59c55fe3f205ab767c2b9712e2e05760d820a5c0)
   &nbsp;
   >stricmp() compared characters outside ASCII differently per platform: stricmp("é", "a") was -1 on macOS and x86 Linux but 1 on Windows and ARM Linux, and only some platforms treated "É" and "é" as equal. It now matches strnicmp(), which already behaved the same everywhere and ignores the case of letters like "É".  
   >
   >Bug introduced when stricmp() was added in 2.55-alpha-75 ([db4eb36a6c](https://github.com/ZQuestClassic/ZQuestClassic/commit/db4eb36a6c)). 
   >
- Destructors of saved objects could freeze the game after a quest update [`805b4a9b52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/805b4a9b52fadb0ca866890ea28e88d4c624a740)
   &nbsp;
   >When an object loaded from a save file was destroyed after the quest's scripts had been recompiled (ex. the player updated to a new version of the quest), finding its destructor could loop forever, freezing the game - or, depending on the compiler the player was built with, skip the destructor entirely.  
   >
   >Bug introduced when objects began being saved to the save file in 2.55-alpha-112 ([e9bc106b91](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9bc106b91)). 
   >
- Object deleted when its destructor stores `this` [`b211011b88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b211011b88cdcb84d409589c1a2bd69cb49cb96a)
   &nbsp;
   >A class destructor that stores `this` somewhere (ex. in a global variable) keeps the object alive, but the object was deleted anyway. The variable was left referring to a deleted object, and the next new object reused its id - so the variable silently referred to that unrelated object instead, and clearing it could delete it while it was still in use.  
   >
   >Bug introduced when the garbage collector was added in 3.0.0-prerelease.2+2024-07-24 ([d4bc547f8e](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4bc547f8e)). 
   >
- Old global init timing released non-object globals [`45b3af9e9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45b3af9e9d85efbdd84b63a93dafe53cbc382492)
   &nbsp;
   >With the "Use Old Global Init and SaveLoad Timing" compat rule on (the default for quests made before 2.55), a script running before the global init script (ex. the Hero's init script) that set a number global would log an "Invalid object pointer" error when the game started - or, if the number happened to match an object, release a reference to that unrelated object.  
   >
   >Bug introduced when object references were handled for the old init timing in 3.0.0-prerelease.117+2025-07-07 ([b571257c21](https://github.com/ZQuestClassic/ZQuestClassic/commit/b571257c21)). 
   >
- Screen `D[]` errors showed the wrong values [`6bf9a6ebda`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6bf9a6ebdac1ca199f94669215f55c3b025a8d9b)
   &nbsp;
   >The error for an invalid Screen->D[] register (or Game->GetScreenD / SetScreenD) showed the screen instead of the register, and the error for an invalid screen showed a literal "%u" instead of the largest valid index.  
   >
   >The wrong value has been shown since at least 2.50; the "%u" regressed in 3.0.0-prerelease.119+2025-07-14 ([b809aa2aa2](https://github.com/ZQuestClassic/ZQuestClassic/commit/b809aa2aa2)). 
   >
- `Screen->D[]` in a scrolling region always used the origin screen [`09e61231c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09e61231c994e2c67a77d4c8dd35d935ba3b5a85)
   &nbsp;
   >Like the other Screen variables, Screen->D[] now refers to the script's screen - for example, the screen an ffc is on - instead of always the region's origin screen.  
   >
   >Bug introduced when scrolling regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Keep objects stored in `Screen->D[]` and other saved engine arrays [`e5a7a963ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5a7a963ee9f682012b6e2178c25f92b3e771d1d)
   &nbsp;
   >Objects stored in Screen->D[], Screen->Data[] / mapdata->Data[] or genericdata->Data[] now work like objects in global variables: they are kept alive, and saved to the save file.  
   >
   >Before, an object in Screen->D[] was deleted soon after the player left the screen. And none of these objects were saved, so after loading a save these arrays held stale object pointers - which new objects could reuse, making the array refer to an unrelated object.  
   >
   >Bug introduced when untyped arrays began retaining objects in 3.0.0-prerelease.154+2025-12-29 ([868b796b99](https://github.com/ZQuestClassic/ZQuestClassic/commit/868b796b99)). 
   >
- Storing an object in `mapdata->D[]` is now an error [`6855ce455a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6855ce455a7faab952377bb7e8a061b6699b6203)
   &nbsp;
   >mapdata->D[] (deprecated) can only hold numbers, so an object stored in it was silently lost. Doing so is now a compile error. Storing one through an array pointer, which the compiler can't check, logs an error instead. 
   >

### Web

- Show quests' ZC version in the quest list [`0850a7a97a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0850a7a97af549262100b6fa6edbeb6ee36c7060)
   &nbsp;
   >The quest list's "ZC Version" row was always hidden. 
   >
- Support ?quest= links to quests from any source [`a16dca46dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a16dca46dd641d09ad85ab637bb2c6b9d1d350d5)
   &nbsp;
   >`?quest=` links now work for every quest in the database, not just ones from PureZC. Linking to a quest that isn't in the quest list no longer breaks the page. 
   >
- Name the right site in quest project page links [`7d736683b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d736683b70c35227e4673268d55de535cda75ff)
   &nbsp;
   >The quest list said "View on PureZC" for quests from other sites too. 
   >
- Sanitize quest descriptions [`921a94dd0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/921a94dd0d2badee2e8b3a7b69914afa9a4a3d0b)
   &nbsp;
   >Quest descriptions are scraped from other sites, so they are now limited to basic formatting and http(s)/mailto links before being shown. 
   >
- Sort the quest list by rating, and unrated quests last [`d26030c687`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d26030c68712f15de5f938efc5c985219b6320c7)
   &nbsp;
   >The quest list is now sorted by rating by default, instead of by which site a quest came from. Unrated quests go last and ties are broken by name, and quests without any votes no longer show a rating of 0. 
   >
- Pressing up at the top of the quest list no longer errors [`797a9281f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/797a9281f62f089596045dacb806e94793f3e729)
- Make spoilers in quest descriptions collapsible [`6e8398af91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e8398af91d938305547a992e989e231cf1851dc)
   &nbsp;
   >Spoilers from PureZC quest pages were always shown expanded, with a "Show" button that did nothing. They are now collapsed until clicked, keeping their titles (like "Changelog"), and spoilers inside spoilers work too. 
   >

# Documentation

- List code that only exists for older Windows versions [`bad2325967`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bad232596755fc3c5189cd9ac9036665e1cf86e1)
   &nbsp;
   >docs/windows_support.md groups each workaround by the minimum Windows version that makes it unnecessary (8, 10 1607, 10 1903, 11), and each workaround's comment points back to it. 
   >

### ZScript

- Explain which DMaps share a screen's `D[]` and `Data[]` [`76429ab663`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76429ab66397bcca44c4fd7b3b6e9de365403583)
   &nbsp;
   >Screen->D[] has values for each screen of each DMap, so DMaps showing the same map screen each have their own; Screen->Data[] and mapdata->Data[] belong to the map screen, shared by every DMap. Also document Game->GetScreenD / SetScreenD / GetDMapScreenD / SetDMapScreenD, whose screen is the index within the DMap (the map screen minus the DMap's offset, for DMaps that aren't overworlds). 
   >

# Build

- Force the dmg detach when the volume stays busy [`1da2410b47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1da2410b4776d55123ea918c3405a0560d96b00f)
   &nbsp;
   >A release build failed when the temporary disk image stayed busy for all 30 detach retries. After 5 failed tries, detach with -force. 
   >

# Chores

- Regenerate ZASM context strings [`4c549eb640`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c549eb6403d5f9553fef75022b88e1aff28058b) [Discord](https://discord.com/channels/876899628556091432/1436138561605730417)
   &nbsp;
   >The checked-in file had drifted from the bindings: several variables added since the last regeneration were missing, and entries for the removed Game version variables ([ff9afa989e](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff9afa989e)) and Hero->GetOriginalFlip() ([780ac3baf7](https://github.com/ZQuestClassic/ZQuestClassic/commit/780ac3baf7)) were still present. 
   >

# Refactors

- Reusable 'TriggerData' replacing '`trig_each_combo_trigger()`' functions [`0567f7f268`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0567f7f268e135160309eab2f79d01fec0b865ac)

### Player

- Give the viewport follow logic persistent state [`4e280beca6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e280beca6420c5e36a5ec065448c81762e7f397) [Discord](https://discord.com/channels/876899628556091432/1436138561605730417)
   &nbsp;
   >Groundwork for viewport follow behaviors (deadzone, lookahead, smoothing) requested for scrolling regions. No behavior change: the viewport focus is still locked to the target sprite, and update_viewport remains idempotent.  
   >
   >- New ViewportFollowState holds the viewport focus point in world
   >  coordinates; update_viewport derives the viewport from it instead of
   >  reading the target sprite directly.
   >- tick_viewport_follow advances the follow logic once per frame from
   >  the game loop (mirroring tick_camera_effect); future follow easing
   >  happens only there.
   >- reset_viewport_follow snaps the focus to the target; called at every
   >  discontinuous reposition (warps, screen entry, script teleports,
   >  scroll start/end, Viewport->Target changes) so a future smoothed
   >  viewport never eases across a jump. The door walk-in/out animation
   >  nudges intentionally keep plain update_viewport calls, as they are
   >  continuous movement.
   >
   >
   >&nbsp;
   >
   >"Viewport" rather than "camera" naming throughout, since "camera" is reserved for the cutscene camera effects.  
   >
   >Verified bit-identical via the playground/z3/misc replay suites (the viewport is part of the replay state hash). 
   >

### ZScript

- Route every engine object slot write through one function [`a30f2ae6d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a30f2ae6d51983990f57dceaf12782416ba23882)
   &nbsp;
   >Engine storage that can hold script objects (screen_d, screen_data, generic script data) had two sources of truth - the raw storage and the registry of slots holding objects - and every writer had to remember to tell the registry, via write lambdas or separate notify calls.  
   >
   >engine_object_slot_set now does the write itself, so callers pass only the slot and value; it keeps the read-previous, write, retain, release order (destructor timing is script-observable). FFScript::set_screen_d is the one validated screen_d writer (SetScreenD, string control codes, mapdata->D[]), and engine_object_storage_clear replaces the clear-then-notify pairs. Slot reads no longer insert default bounded_map entries.  
   >
   >A DCHECK at the start of run_gc verifies every registered slot still holds a live object of its recorded type, catching a write that bypassed these functions. 
   >

### Web

- Remove twitter link. add discord link for reporting issues [`93dd3fc0df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93dd3fc0df0c0a6d0ae444ebb7a224eb7f2f4594)

# Tests

- Cover quest paths and process arguments with non-ASCII characters [`a9f74def61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9f74def613412ca18517441fb3f06cde85caf3c)
   &nbsp;
   >Loads a quest with zplayer from folders named "Créateur" and "クエスト". On Windows the second fails without the UTF-8 code page manifest, since "クエスト" isn't in any Western code page.  
   >
   >Also checks that a child process launched with run_and_get_output gets a non-ASCII argument byte for byte (this catches launching without the manifest), and covers the Windows encoding helpers. 
   >
- Print a backtrace when SIGPIPE kills a target in the lldb wrapper [`9d8fdd50b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d8fdd50b907ae467d9e60f320d3fdae68e14647)
- Cover DMap titles and intros with characters that aren't UTF-8 [`16506c4334`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16506c4334d2a0c522659f83ba29b2e07ad6a60e)
   &nbsp;
   >The replay's screen checksums cover a DMap title with Zelda NES font hearts (0x83) and an old-style DMap intro with arrows and symbols (0x82-0x85, 0xA3, 0xA8). These draw through the subscreen and through "%c" one character at a time, which bug_text_latin1_bytes (script DrawString to a bitmap, with assertions) doesn't reach. It checks pixels rather than any Allegro function, so it keeps covering this if the text backend changes. It fails without the fix that draws accented letters and symbols in older quests' text again. 
   >
- Report Windows crashes from run_target.py as crashes [`93edfc9ece`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93edfc9ece6c14b16f6e28906dae211d205e3c74)
   &nbsp;
   >On Windows a crash exits with an exception code like 0xC0000005, which is too big for sys.exit: run_target.py exited with -1 instead, and said nothing about a crash. Now it passes the code on unchanged and prints which exception it was. 
   >
