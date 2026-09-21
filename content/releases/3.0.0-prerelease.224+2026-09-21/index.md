---
title: 3.0 Prerelease 224 2026-09-21
description: 
date: 2026-09-21T20:40:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.224%2B2026-09-21/3.0.0-prerelease.224%2B2026-09-21-linux.tar.gz
    name: 3.0.0-prerelease.224+2026-09-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.224%2B2026-09-21/3.0.0-prerelease.224%2B2026-09-21-mac-universal.dmg
    name: 3.0.0-prerelease.224+2026-09-21-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.224%2B2026-09-21/3.0.0-prerelease.224%2B2026-09-21-windows-x64.zip
    name: 3.0.0-prerelease.224+2026-09-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.224%2B2026-09-21/3.0.0-prerelease.224%2B2026-09-21-windows-x86.zip
    name: 3.0.0-prerelease.224+2026-09-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 393318175
tag_name: '3.0.0-prerelease.224+2026-09-21'
channel: '3'
tags:
  - releases
---

# Features

### Editor

- Set tile dialog title when "hide" option is active [`de460e3621`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de460e36213dc01818f67c71eeee4e4c4292743c) [Discord](https://discord.com/channels/876899628556091432/1537296861461872800)
   &nbsp;
   >The tile page's "Hide Used" and "Hide Unused" view options draw hidden tiles as X'd-out boxes, which looks like lost tiles to anyone who toggled one by accident (Ctrl/Cmd+U cycles them).  
   >
   >The title bar now names the active mode, the two options are mutually exclusive (hiding both hid every tile on the page)  
   >
   >Also: the tile dialog now has a "?" help button that lists the hotkeys. 
   >

# Bug Fixes

- Prevent crash when quitting from a nested dialog [`7487beae22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7487beae2283d5e0ef62d2e808d07c2392ef94af) [Discord](https://discord.com/channels/876899628556091432/1394182196105056359)
   &nbsp;
   >Confirming the quit prompt from a dialog opened from a nested menu (or from another dialog) could crash on the way out, with a "heap use after free" in a menu's mouse handling. The dialog runner ended the popup dialog itself when the program was exiting, and every caller then ended it again, which tore down the parent menu's or dialog's render layer while it was still in use.  
   >
   >Regressed in 3.0.0-prerelease.2+2023-11-15 ([3da82ef189](https://github.com/ZQuestClassic/ZQuestClassic/commit/3da82ef189)). 
   >
- [mac] prevent crash on exit from the sound driver [`93688f1320`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93688f1320a5823f19852dc66f721c0c0b235c42)
   &nbsp;
   >Bug introduced when Allegro 5 audio was adopted in 2.55-alpha-108 ([a7fccd1f21](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7fccd1f21)). 
   >
- [mac] show "Cmd" instead of "Ctrl" in help dialog hotkeys [`418aed982f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/418aed982f0d70c95310ba3f3c2ceae66377ba42)
   &nbsp;
   >Help text across the editor and player lists shortcuts with the Ctrl key, but on macOS those shortcuts are bound to Cmd. Now they show Cmd on Mac. 
   >
- Database script crashed instead of going offline [`55295d33b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55295d33b7e3aba7f0a03b89be99ff36a68e4de8)
   &nbsp;
   >The handler that catches a failed bucket listing had its operands swapped, so losing access to the bucket raised a NameError from the handler itself rather than falling back to offline mode.  
   >
   >Bug introduced when the Database class was added in 3.0.0-prerelease.35+2024-12-20 ([3af230f63f](https://github.com/ZQuestClassic/ZQuestClassic/commit/3af230f63f)). 
   >
- Loose-file upload script crashed on an invalid directory [`1da2a264c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1da2a264c0c02f6eb2c1fb274583d7c8554cc200)
   &nbsp;
   >The --dir validator raised ArgumentTypeError without importing it, so passing a file instead of a directory produced a NameError rather than the intended argparse error message.  
   >
   >Bug introduced when the script was added in 3.0.0-prerelease.105+2025-05-19 ([25eefd033d](https://github.com/ZQuestClassic/ZQuestClassic/commit/25eefd033d)). 
   >

### Player

- Playing field jumping down when opening the subscreen w/ extended viewport [`970127f93c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/970127f93cdc09a6e3ca4a1871a31347a395de4d) [Discord](https://discord.com/channels/876899628556091432/1440472041374351401)
   &nbsp;
   >With every opening/closing wipe rule off, opening the active subscreen crawls the playing field down off the screen. On a DMap with the "extended viewport" flag the playing field fills the whole screen, but the crawl still started from under the passive subscreen, so the playing field jumped down by the passive subscreen's height on the first frame. The same offset made the field pop while the subscreen was fully open and when it closed.  
   >
   >Bug introduced when the extended viewport DMap flag was added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Standalone mode crashed on the second quit, and now closes instead of reloading [`be4a87dcd8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be4a87dcd8afd739a5ca0c3283cf51313b98debf)
   &nbsp;
   >`-standalone` runs a quest with a single save slot and no file select screen. Quitting the game (save and quit, or quit without saving) reloaded the quest instead of closing the program, and the second quit died with "Failed to load save: init_game".  
   >
   >Quitting in standalone mode now closes the program. Dying in a quest with the continue screen disabled still reloads the last save, and that path no longer crashes either.  
   >
   >Regressed in 3.0.0-prerelease.18+2023-12-23 ([17ba9ef42e](https://github.com/ZQuestClassic/ZQuestClassic/commit/17ba9ef42e)), which left the third load with no save slot selected and started a blank game; since 3.0.0-prerelease.73+2024-10-11 ([dc46c0c41b](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc46c0c41b)) that is a fatal error. 
   >

### Editor

- Spurious 'failed to load' log for empty enhanced music [`b3db171462`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3db171462e379edd113a7e4de9ab8cb8d356217)
   &nbsp;
   >Opening the music editor on a slot with no enhanced music logged a warning about an empty filename being found but failing to load.  
   >
   >Regressed in 3.0.0-prerelease.209+2026-08-05 ([c7c09812b3](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7c09812b3)). 
   >
- Digdogger Kids vulnerable to whistle in pre-2.55 quests [`5404977e8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5404977e8da336c5b3750741e48065b7855ecbfa) [Discord](https://discord.com/channels/876899628556091432/1217745472530284605)
   &nbsp;
   >The rule that marks every enemy in a quest older than the whistle defense as ignoring the whistle exempted every `eeDIG` enemy. Only the big Digdogger needs that; the Digdogger Kids use the generic hit path, so once such a quest was saved in a newer editor they took whistle damage whenever the whistle item had 'Has Damage' set, while every other enemy ignored it.  
   >
   >Now only big Digdoggers (`attributes[9]==0`) keep a 'Normal' whistle defense, in both the per-enemy file read and the built-in default path used by 1.9x/2.10 quests. Follow-up to [148d8e108d](https://github.com/ZQuestClassic/ZQuestClassic/commit/148d8e108d). 
   >

### ZScript

- Player move functions no longer advance pit state [`fdc12b510d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fdc12b510d4e48bd7e9d5ce79febcd3c65b1669c)
   &nbsp;
   >This caused using functions like `Hero->Move()` many times to cause you to rapidly fall into pits, causing you to take rapid damage in some instances. 
   >
- Verify server certificates for secure websocket connections [`df8b59947f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df8b59947f99a23edeef8cce382ce470f44ea455)
   &nbsp;
   >Secure (wss://) connections made by the websocket class accepted any certificate, including self-signed, expired, and wrong-host ones. The certificate is now checked against the system CA store and the host name, and a failed check closes the connection with an error that says why (readable via GetError).  
   >
   >Bug introduced when websockets were added in 3.0.0-prerelease.35+2024-02-05 ([41c3622a43](https://github.com/ZQuestClassic/ZQuestClassic/commit/41c3622a43)). 
   >

### ZUpdater

- A failed update could leave the install unrecoverable [`12b991f8d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12b991f8d735df6b17d61ee62f3c1903afbb0bf5)
   &nbsp;
   >If anything went wrong partway through installing an update (such as a file locked by another program, a full disk, or a corrupt download), the updater left the install in a bad state. The files it had set aside were deleted the next time any ZQuest Classic app started, so the only way back was to download a release by hand. An update now puts everything back the way it was when it cannot finish, and alerts if any file could not be restored.  
   >
   >A download that broke off partway, returned an error page, or contained a damaged file was also kept and reused by every later attempt, so once an update failed this way it kept failing. A download is now only kept once it has completed and extracted cleanly. Old downloads are cleaned up after a successful update instead of piling up.  
   >
   >The updater could also crash instead of reporting an error when the release listing came back empty or in an unexpected form. 
   >

# Documentation

- Update logo [`fc0d56b153`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc0d56b153cd050ad5390b5f8705be6b6f9bc450)

# Chores

- Require a blank line before the cherry-pick annotation [`78d1b70af3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78d1b70af3385080a6dc8aac1554624d18df7f2f)
   &nbsp;
   >git's `-x` flag does not add one, so the annotation would otherwise be lumped in with a preceding trailer like `Discord:`. 
   >
- Move CLAUDE.md to AGENTS.md [`2ba33cedbc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ba33cedbc0615189444b61806be14d27002bc27)
- Update replay_uploads_known_good_replays.json [`d2beb099b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2beb099b0fdf93c1dbf8efffbf99245dca52167)

# Refactors

- Share the render-tree frame shell across the player, editor and launcher [`ec7e83b46a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec7e83b46af01c42553ed1e8f33a41bd19000362)
   &nbsp;
   >The three apps carried near-identical copies of the per-frame render shell (save allegro state, swap the real `screen` back in under an open dialog, configure the tree, draw and present, restore), the GUI mouse hook wrappers, and the letterbox fit-and-center math (six copies). All of that now lives in one place, and each app's render file describes only what differs: its layers, and how they are configured each frame.  
   >
   >The launcher's shell gains the debug-overlay path and the headless guard the other two apps already had. 
   >
- Stop relying on `freeze` to protect externally supplied render-tree bitmaps [`6d68e18352`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d68e18352e541438a29e7cc6cc5b4a11f82d091)
   &nbsp;
   >The draw pass destroyed and recreated an item's bitmap whenever its size disagreed with the item's width/height. Items handed a bitmap from outside (the title logo, drawn at its own resolution and never sized) survived only because `freeze` skipped that whole block - so unfreezing the logo would have destroyed its bitmap, and nothing said so.  
   >
   >The framework now manages (resizes, creates, renders into) only the bitmaps of items that asked for a size. An unsized item is display-only and its bitmap is left exactly as given, frozen or not; `freeze` is purely a "skip the redraw" switch. The logo and sword no longer need to be frozen. 
   >
- Pick the render pass an item belongs to virtually instead of by dynamic_cast [`5534bec4ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5534bec4ff520594d9e4c3516f250188df314f65)
   &nbsp;
   >The draw pass asked every node twice per frame, via RTTI, whether it was a legacy-bitmap item, to split the a4-conversion pass from the on-screen pass. A virtual `wants_a4_pass` says the same thing directly. The comment describing the two-pass structure as a possible GL micro-optimization is replaced with the actual reason it exists: the frame-skipping presenter needs the conversions to have run before it can decide whether anything changed. 
   >
- Make a render item's `type` a real enum [`166c13a430`](https://github.com/ZQuestClassic/ZQuestClassic/commit/166c13a430db5c19714f3c13f00ba336c6eab899)
   &nbsp;
   >`type` was a bare `uint` that mixed the layer-kind enum with arbitrary "tag ids" handed to popup_zqdialog_start, a distinction nothing used once the tag lookup was removed. It is now a scoped enum, so the field can only hold one of the kinds the player's dialog layout actually switches on. 
   >
- Split zalleg/render.cpp by module [`2abcd2a1fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2abcd2a1fccddef99dc9e6e9c38e6811289ab9a2)
   &nbsp;
   >One 1700-line file held the render tree, the popup dialog stack and its tint, the mouse sprites, the palette/backend helpers, text drawing and the render timers. It is now three files - render_tree.cpp (the tree: items, passes, frame skipping, verification), zqdialog.cpp (the dialog stack and tint) and render.cpp (everything else) - so each can be read as one system. Pure move; nothing changes behavior. 
   >

### Player

- Remove the player's never-shown screen layer [`b30f2bae28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b30f2bae2898eab998594b148ad83accacd64009)
   &nbsp;
   >The render tree carried a `rti_screen` layer that has been forced invisible since the a5 rendering rework, leaving a texture that was allocated and configured every frame but never drawn. Legacy `screen` content in the player reaches the display through the GUI and dialog layers instead. 
   >
- Remove many per-frame heap allocations [`2b3510c4ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b3510c4ee8d0b442eb587e32ab240c99e388a0b)
   &nbsp;
   >Profiling a script-heavy replay showed ~5% of busy time inside the memory allocator, all from a handful of per-frame temporaries. Removing them cuts that to under 1% and makes those replays 2-4% faster. 
   >

# Tests

### Player

- Cover the title screen's reload path in-process [`120f31f76d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/120f31f76d41e3da9a957e00a7225f107f25be29) [Discord](https://discord.com/channels/876899628556091432/1312918212802777109)
   &nbsp;
   >Replays run in test mode and never enter the title screen, so the crash fixed in [4272d5d1f8](https://github.com/ZQuestClassic/ZQuestClassic/commit/4272d5d1f8) (a reload unloading the selected save slot before starting the game) had no guard: the auto replay added in a14152f6ea keeps passing with that fix removed.  
   >
   >Add a `-test-ZC` test that selects a played save slot, diverges the running game from it, and reloads through the title screen. With the fix removed it dies with "Failed to load save: init_game". 
   >
- Fix crash in title screen's reload test on some platforms [`1d22e9f0b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d22e9f0b6b6716e9dc9def28e84625bdb2d7d24)
