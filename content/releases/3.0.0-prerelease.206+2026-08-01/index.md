---
title: 3.0 Prerelease 206 2026-08-01
description: 
date: 2026-08-01T06:01:40Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.206%2B2026-08-01/3.0.0-prerelease.206%2B2026-08-01-linux.tar.gz
    name: 3.0.0-prerelease.206+2026-08-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.206%2B2026-08-01/3.0.0-prerelease.206%2B2026-08-01-mac.dmg
    name: 3.0.0-prerelease.206+2026-08-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.206%2B2026-08-01/3.0.0-prerelease.206%2B2026-08-01-windows-x64.zip
    name: 3.0.0-prerelease.206+2026-08-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.206%2B2026-08-01/3.0.0-prerelease.206%2B2026-08-01-windows-x86.zip
    name: 3.0.0-prerelease.206+2026-08-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 363475404
tag_name: '3.0.0-prerelease.206+2026-08-01'
channel: '3'
tags:
  - releases
---

# Features

- QR to disable F6 entirely [`8292cc5ff5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8292cc5ff51ba1d524cf057e4bbf361bcfb9d551)
   &nbsp;
   >No popups, warnings, or anything else; F6 will just *do nothing* with this on. The 'End Game' menu option is also greyed out by this. 
   >

### Editor

- Warn in the enemy editor when "Hardcoded BS Patras" QR is enabled [`c525a0e74b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c525a0e74ba374cc82546e6181b1d81b5d483db6) [Discord](https://discord.com/channels/876899628556091432/1334906046921310208)
   &nbsp;
   >When editing a Patra with the 'Hardcoded BS Patras' compat QR enabled, the enemy editor now shows a warning that 2x2 Patras will be hardcoded, ignoring most editor settings (including all firing attributes and inner eye placement). 
   >

# Bug Fixes

- Allow configuring with CMake 4 without extra flags [`ef29f9b794`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef29f9b794aec2110816e79b629b58baafb3c0bd)
   &nbsp;
   >CMake 4 refuses to configure dependencies that declare a minimum version below 3.5 (allegro_legacy, gme, websocketpp), which required passing -DCMAKE_POLICY_VERSION_MINIMUM=3.5 manually. 
   >
- Number fields rejecting input when only a max bound was set [`b7242a5a84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7242a5a84ee087f2d76c625d3675d89f27ad75a)
   &nbsp;
   >Many dialog number fields set only an upper bound, relying on the lower bound defaulting to 0 - for example the item editor's counter 'But Not Above' field, and the size fields in the weapon data editor. A recent fix required both bounds to be explicitly set before applying them, so those fields lost their range clamping and no longer sized their input buffer from the bound's digit count, making it impossible to type more digits than the existing text.  
   >
   >Regressed recently in 3.0.0-prerelease.205+2026-07-30 ([c6ca585830](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6ca585830)). 
   >

### Player

- Prevent crash on continue for saves with bad generic script bounds [`31fe75adcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31fe75adcf40cc2b834fd697c23c4abfdd9b6d00)
   &nbsp;
   >Old builds could write save files whose generic script init data was sized below the expected 8 args: every save write stamped the runtime generic script state into the file, including writes of saves that weren't being played - worst was the save-file split migration, which ran before any game loaded and so wiped the stored generic script state of every migrated save with empty, wrongly-sized data. Loading such a save now throws an unhandled out_of_range at continue.  
   >
   >Loading is now tolerant of short init data, loaded files have their generic script bounds healed, and save writes only sync the runtime generic script state into the save actually being played.  
   >
   >Regressed recently in 3.0.0-prerelease.205+2026-07-30 ([76b97b95ee](https://github.com/ZQuestClassic/ZQuestClassic/commit/76b97b95ee)). 
   >
- Prevent crash entering a screen with an out-of-range FFC link [`2dcce88490`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2dcce884906fa57f4ff4613b096d9e36a0113394) [Discord](https://discord.com/channels/876899628556091432/1532611776775065630)
- Shooter combos not running scripts on custom lweapons [`9f513a751b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f513a751b35d68b7a80e0da432cc72b947326eb) [Discord](https://discord.com/channels/876899628556091432/1532973551282290849)
   &nbsp;
   >Shooter combos firing a 'Custom Weapon' id with 'Custom Weapons Are LWeapons' checked would assign the weapon script but never run it, because custom-weapon lweapons only ran scripts when fired by an item or created by a script. Custom eweapons were unaffected.  
   >
   >Regressed in 2.55-alpha-110 ([a90cd1b2e8](https://github.com/ZQuestClassic/ZQuestClassic/commit/a90cd1b2e8)). 
   >
- Cave exit animations only playing on top-left screen of region [`703651114b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/703651114b8f4858cc1e8e849526238aa3a1af5f)
   &nbsp;
   >When insta-warping into a scrolling region, the check for cave combos at the warp return square used screen-local coordinates, so it always sampled the region's top-left screen. Cave/Cave2 walk-out animations therefore only played when the return square was on that screen.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >

### Editor

- 'Edit New FFC' using garbage values [`00b5033c55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00b5033c55e4143a9409129823b13194aeb6311b)
- `InitD[]` args not showing checkbox for bools in editor [`294015b302`](https://github.com/ZQuestClassic/ZQuestClassic/commit/294015b302576280b639b410622def1babf30ba7)
- String .tsv import scrambling margins and list order [`68da80987b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68da80987b8663f007d3b728eaa531725de4d5f1) [Discord](https://discord.com/channels/876899628556091432/1531111795035607192)
   &nbsp;
   >Importing a strings .tsv file - even one exported unedited - broke the string data in two ways:  
   >
   >The margin column is written in top/right/bottom/left order, but the importer read it as top/bottom/left/right, permuting three of the four margins on every import.  
   >
   >The imported list positions were dropped entirely (the string copy intentionally skips them), forcing every string's list position to its numerical index - except the last imported string, which kept a stale position from before the import, corrupting the string list order.  
   >
   >Imported list positions are now applied by rank, so hand-edited files with duplicate or gapped position values normalize sensibly instead of breaking the list.  
   >
   >Regressed in 3.0.0-prerelease.40+2024-02-15 ([13e56e789f](https://github.com/ZQuestClassic/ZQuestClassic/commit/13e56e789f)) 
   >
- Undo doing nothing after 'Apply Template to All' [`2438b29958`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2438b299582f881f1bf48c355cc6614e6b618989)
   &nbsp;
   >Undoing (or redoing) this command restored all the screen snapshots onto a single wrong screen instead of each screen that was changed, so the map appeared unchanged after undo.  
   >
   >Regressed in 3.0.0-prerelease.71+2024-09-26 ([6fd217ecb0](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fd217ecb0)). 
   >

### ZScript

- Clarify FFC Link as same-screen and allow linking to ffc 128 [`657d596f4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/657d596f4c73c4cfff8f0ed86b573b6a3e9cf915)
   &nbsp;
   >An FFC's Link is the 1-indexed number of an FFC on its own screen, but in multi-screen regions the player resolved it as a region-wide FFC ID, so a linked FFC on any screen other than the region origin moved with the origin screen's FFC instead of its own screen's. Linked FFCs now always resolve against their own screen.  
   >
   >Also, scripts could not set ffc->Link (or mapdata FFCLink[]) to 128, even though the editor allows linking to the 128th FFC.  
   >
   >The ffc->Link docs now spell out the same-screen semantics; nothing could ever store a region-encoded ID (scripts were capped at 127 and quests store a single byte), so no existing content is affected. 
   >

### Visual Studio Code Extension

- Valid annotations and options flagged as syntax errors [`a239035035`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a23903503536bd629427ba0c34b9718062840fd8)
   &nbsp;
   >Annotation names extending a shorter known name were only partially highlighted, with the rest of the name marked as an error: @ExportRange matched as @Export plus a stray "Range", and @Flag10 through @Flag15 (and their Help variants) matched as @Flag1 plus a stray digit.  
   >
   >Several names the compiler accepts were flagged as unknown: the @ExportInitD0-7, @Increment, and @Bitflags annotations, two-digit @Attribute10-23 and @AttributeHelp10-23, and the option DEFAULT_STATIC_SCRIPT_MEMBERS. Conversely, FORCE_INLINE is no longer highlighted as a known option, matching its removal from the compiler.  
   >
   >Regressed in 2.55-alpha-116 ([6ecf0775af](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ecf0775af)); the @ExportRange case in 3.0.0-prerelease.205+2026-07-30 ([76b97b95ee](https://github.com/ZQuestClassic/ZQuestClassic/commit/76b97b95ee)). 
   >

# Documentation

- Fix indent issue with multi-paragraph comments on enums [`24dee83d50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24dee83d509f3baf975f8f85c2adcbfb97f17b76)

# Build

- Fix Xcode generator failing to configure due to per-source dialog flags [`8b16bc9b84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b16bc9b84bdd24bfd8b4d1acfc9fb523a8e480b)
   &nbsp;
   >The Xcode CMake generator rejects per-config per-source COMPILE_OPTIONS ("Xcode does not support..."), so the -O1 compile-speed flag on src/dialog/*.cpp made the generate step fail, which broke 'cmake --build build_Xcode'. Skip the flag under the Xcode generator; that build is used for profiling, so slower dialog compiles are fine.  
   >
   >Introduced in [7ff43d0562](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ff43d0562) (build!: speed up compilation). 
   >

# Chores

- Update .git-blame-ignore-revs [`1c2fad7b3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c2fad7b3eef2e962837fb2977745e2f39c4f9f3)
- Update replay_uploads_known_good_replays.json [`ec8e567fcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec8e567fcf776bba0f97ff5d25ae52e00368cad0)

# Refactors

- Set TextField bounds as a single {low, high} pair [`cf55ed2543`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf55ed2543d25ec11c5bb2d04aa01d3e0c410f07) [Discord](https://discord.com/channels/876899628556091432/1532881969720066149)
   &nbsp;
   >The separate setLowBound/setHighBound setters (and low/high DSL props) created a window where only half the range was set, which caused two regressions ([c6ca585830](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6ca585830), 3e7838b56e). Bounds are now given as a single pair - `bounds = {low, high}` - so a half-set range can no longer exist. High-only sites now state the previously-implicit low of 0 explicitly; the one lone `low = 0` (combo wizard proximity field) was always a no-op and is dropped. No behavior change. 
   >

### Player

- Speed up replay gfx hashing without changing the hash [`d1c325aa6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d1c325aa6c822e5a3587b2cfc20fdd9f25e034db)
   &nbsp;
   >The per-frame gfx hash converted the 8bpp frame to 24bpp through allegro's generic cross-format blit, which cost more than the hash itself (together ~13% of an assert-mode Yuurand replay). Replay wall time drops ~8%. 
   >

### Editor

- Construct undo commands via named params structs [`b17be8d488`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b17be8d48801d118eb4814540d8c2d7e23007087)
   &nbsp;
   >The undo command classes were filled in field-by-field at each call site, so adding a field to a command class could silently leave it uninitialized somewhere.  
   >
   >Each command now takes a params struct built with designated initializers: fields are bound by name (no transposition risk, and C++20 enforces declaration order), and the screen_index fields default to -1 with an ASSERT in the constructor so an omitted field trips in debug builds instead of corrupting screen 0. 
   >

# Tests

### Editor

- Add strings .tsv import command and round-trip test [`c4a64fb8a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4a64fb8a914fffa073a9b3ada1a1b66bf862a93)
   &nbsp;
   >Adds a headless '-import-strings <qst> <input.tsv>' CLI command (counterpart to '-export-strings'), and a test that exports a quest's strings, imports them into another quest, and verifies a re-export is identical. Guards the margin/list-order import fixes. 
   >

### ZScript

- Uncomment line previously broken on win32 [`bf33d4325d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf33d4325d09a344d28b5a2de2bd2fc8766a18fe)

# Misc.

- Add Discord threads reader script [`2551970470`](https://github.com/ZQuestClassic/ZQuestClassic/commit/255197047062fc1a619c9b3f27f54f2196d10a04)
   &nbsp;
   >scripts/threads.py reads bug/feature forum threads via a Discord bot token, taken from the ZC_DISCORD_API_KEY env var or a ~/.zc_discord_key file.  
   >
   >Also add CLAUDE.md / skills. 
   >

### ZScript

- Improve auto-generated QR constants file [`0a9ea27f21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a9ea27f216353aeb786a387753748e680890dd1)
   &nbsp;
   >Now 'related qrs' are mentioned in the comments, with a docs link to that QR's constant. 
   >
