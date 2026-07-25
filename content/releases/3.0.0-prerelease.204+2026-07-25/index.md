---
title: 3.0 Prerelease 204 2026-07-25
description: 
date: 2026-07-25T06:52:30Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.204%2B2026-07-25/3.0.0-prerelease.204%2B2026-07-25-linux.tar.gz
    name: 3.0.0-prerelease.204+2026-07-25-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.204%2B2026-07-25/3.0.0-prerelease.204%2B2026-07-25-mac.dmg
    name: 3.0.0-prerelease.204+2026-07-25-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.204%2B2026-07-25/3.0.0-prerelease.204%2B2026-07-25-windows-x64.zip
    name: 3.0.0-prerelease.204+2026-07-25-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.204%2B2026-07-25/3.0.0-prerelease.204%2B2026-07-25-windows-x86.zip
    name: 3.0.0-prerelease.204+2026-07-25-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 359706398
tag_name: '3.0.0-prerelease.204+2026-07-25'
channel: '3'
tags:
  - releases
---

# Bug Fixes

### Player

- Default triforce and ending fanfare NSF tunes never played [`00fd7ff0ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00fd7ff0ec4f35cdb723743b4e8988ed6bad55e2)
   &nbsp;
   >Since 2021, zelda.nsf has shipped in modules/classic/, but the music loader only searches the executable and quest directories (and their music/ subfolders), so it was never found and quests always fell back to the lower-quality MIDI versions of the classic triforce and ending tunes. Moved the file to music/, where the loader finds it - after any quest-provided replacement, which still takes priority.  
   >
   >Regressed in 2.55-alpha-97 ([d69aafa6ee](https://github.com/ZQuestClassic/ZQuestClassic/commit/d69aafa6ee)). 
   >
- Scrolling warp to another DMap charted a screen on the wrong map [`caaf58e928`](https://github.com/ZQuestClassic/ZQuestClassic/commit/caaf58e928bd3d67179c3f38fb3eed31a68ebd98)
   &nbsp;
   >When taking a scrolling warp to a different DMap, the destination screen was charted on the previous DMap's map instead of its own. This made a screen the player never visited show as explored on the map subscreen - noticed when returning to the previous DMap and viewing its map, or via the reverse warp marking a phantom screen on the destination DMap's map.  
   >
   >Regressed in 3.0.0-prerelease.83+2024-12-29 ([120211bd9c](https://github.com/ZQuestClassic/ZQuestClassic/commit/120211bd9c)). 
   >
- Effect flags in bottom/right 8px ignored with newer player movement [`2780e86674`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2780e86674cfdb3ae2ca579e48eec23ccc294282)
   &nbsp;
   >With "Newer Player Movement" enabled (and LTTP walk disabled), the player can stand in the bottom/right 8 pixels of the screen, but effect flag checks there still used the legacy shrunken screen bounds - so damage combos didn't hurt, slow combos didn't slow, and lock blocks, signs, armos/graves and other trigger combos didn't activate in that strip. Same class of bug as the recent solidity fix for this movement mode.  
   >
   >Regressed in 2.55-alpha-114 ([9933309604](https://github.com/ZQuestClassic/ZQuestClassic/commit/9933309604)). 
   >

### ZScript

- Filled `Screen->Arc` / `bitmap->Arc` pies escaping the wedge [`5b5a7306b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b5a7306b61ebf98f0b30b0a49f0bd3681cf85bb)
   &nbsp;
   >Filled arcs were drawn by outlining the pie (the arc plus two edge lines) and flood filling a probe point expected to be inside it. Whenever that probe landed outside the wedge - wrap-around angle spans, pies partially offscreen, tiny radii - the fill escaped and painted everything except the pie. This is the ancient breakage (since the command was added in the 2.50 days) that led scripters to guard Arc calls with parameter checks. Filled pies are now rasterized directly as polygons, which also removes the leftover debug logging that every filled arc printed to the console.  
   >
   >Additionally, filled draws went through a masked sprite blit, so opaque fills with color 0 never drew anything; they now write color 0, letting bitmap->Arc carve/clear regions.  
   >
   >The arc's angle convention is unchanged (and now covered by a test): degrees anticlockwise, 0 = east, as documented. 
   >
- Stale JIT code could run after reloading a changed quest [`547aa233ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/547aa233ac3f36e91f9569ba97d652525aeffe51)
   &nbsp;
   >The JIT cache that lets an F9 reset reuse compiled scripts decided "quest unchanged" from the qst file's modification time. That check can falsely pass - coarse filesystem timestamp granularity (exFAT/FAT and some network drives round to 2 seconds), or the file changing between the quest load and the timestamp read - and since the single ZASM script's cache id is identical every load, a false pass silently runs the previous quest load's compiled code against the newly loaded scripts. In test mode that surfaces as recompiled scripts not taking effect after a reset until the player is fully restarted.  
   >
   >The cache is now keyed on a hash of the loaded ZASM itself, so compiled code can never outlive the scripts it was built from, and resets of a truly unchanged quest still reuse it. 
   >
- Sprite draw origin logged an error when the sprite despawned [`660b9cfc86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/660b9cfc86b4fd6971e9ce87e5c3e19b79a70d2d) [Discord](https://discord.com/channels/876899628556091432/1530144181274542211)
   &nbsp;
   >A script drawing with DRAW_ORIGIN_SPRITE queues its draw commands while the sprite is alive, but the sprite can despawn later that same frame - a weapon flying off the edge of the screen, for example. When the command rendered, the missing sprite logged "Ignoring draw command using DRAW_ORIGIN_SPRITE with non-existent sprite uid" even though the script did nothing wrong and has no way to avoid it. That case now skips the draw silently.  
   >
   >The warning still fires when a script draws relative to a sprite that is already gone - it is now checked when the command is issued, which also attributes the log to the right script.  
   >
   >Regressed in 3.0.0-prerelease.100+2025-04-18 ([f2211a3ac7](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2211a3ac7)) 
   >

### Visual Studio Code Extension

- Hover/definition/references returned nothing while a compile was in flight [`5057f060b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5057f060b7f1fd6b220678ce47a3e8e1851e805c)

# Documentation

### ZScript

- Document the Arc angle convention and pie slice behavior [`ca0bf03028`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca0bf03028448e28529ced488662f280be722e14) [Discord](https://discord.com/channels/876899628556091432/1523348144497365134)
   &nbsp;
   >Screen->Arc and bitmap->Arc had no doc comment at all; the angle convention (degrees anticlockwise, 0 = east) was only documented in the legacy zscript.txt, and only as "counterclockwise from standard position". Spell it out explicitly, along with the sweep direction, wrap-around behavior, closed/fill semantics, and a versionchanged note for the recent fill fixes. 
   >

# Build

- Fix using system libraries instead of vendored ones [`412291c02f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/412291c02f1c626fb02dfff0c10c36fd664709a4)
   &nbsp;
   >The options for opting out of the vendored third_party libraries and linking OS/package-manager provided ones instead had bit-rotted to the point that none of them could configure. Fix them all, document them in docs/building.md, and remove the imgui opt-out entirely - imgui has no stable API and other vendored code is pinned to our exact copy, so a system imgui can never work. 
   >

# Tests

- Skip the lldb wrapper for fan-out snapshot tests [`26e9eb15e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26e9eb15e90dc81ca774722e030966cbf32371b9)
   &nbsp;
   >On macOS, run_target.py wraps every invocation in an lldb wrapper so crashes print a backtrace, but lldb re-indexes the target's debug symbols on every launch - seconds of overhead per run. Tests that fan out many short-lived runs through submit_all (test_optimize_zasm, test_optimize_zasm_unit, test_zscript) paid that cost per input: test_optimize_zasm_unit spent 61s wall / 716s CPU where the actual work takes 2s.  
   >
   >submit_all now sets ZC_FAST_RUN_TARGET, which run_target.py honors by skipping crash handling. Rerun without the env var to get a backtrace from a crashing input. 
   >
- Properly escape command printed when making compare report [`81a36fa176`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81a36fa176eb38ef683932b9716b5ee0879c1c15)
