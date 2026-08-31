---
title: 3.0 Prerelease 216 2026-08-30
description: 
date: 2026-08-31T06:40:59Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.216%2B2026-08-30/3.0.0-prerelease.216%2B2026-08-30-linux.tar.gz
    name: 3.0.0-prerelease.216+2026-08-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.216%2B2026-08-30/3.0.0-prerelease.216%2B2026-08-30-mac-universal.dmg
    name: 3.0.0-prerelease.216+2026-08-30-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.216%2B2026-08-30/3.0.0-prerelease.216%2B2026-08-30-windows-x64.zip
    name: 3.0.0-prerelease.216+2026-08-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.216%2B2026-08-30/3.0.0-prerelease.216%2B2026-08-30-windows-x86.zip
    name: 3.0.0-prerelease.216+2026-08-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 379578056
tag_name: '3.0.0-prerelease.216+2026-08-30'
channel: '3'
tags:
  - releases
---

# Features

- -render-timings and -no-render-hash flags for measuring render work [`e10cd410ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e10cd410eefeb1176f011a3b13b8ed5272e91353)
   &nbsp;
   >-render-timings: once a second, prints per render item how long the a4
   >content hashing took, how many a4->a5 conversions ran, and how many the
   >hash skipped.
   >
   >
   >&nbsp;
   >
   >-no-render-hash: restores the old behavior of converting every frame
   >without content hashing, for A/B comparisons (and as an escape hatch if
   >the hash skip is ever suspected of causing a rendering anomaly).
   >
   >
   >&nbsp;
   >
   >Both work in the player, editor, and launcher; they require a display (the hash/convert path never runs headless). 
   >

### ZScript

- Debugger breakpoints that pause when a value changes [`f47b67abe4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f47b67abe4422e87cebf90845dffc4f9da594c94)
   &nbsp;
   >Right-click a variable in the debugger's Variables or Watch panel to add a breakpoint that pauses the game whenever that expression's value changes. Arrays and class instances are compared by their contents, so changing a single element triggers a pause. If the expression can't be resolved (e.g. a local variable that is out of scope), it is skipped until it resolves again - the last known value is still remembered.  
   >
   >When one triggers, the Breakpoints panel flashes it (line breakpoints flash too) and hovering it shows the old and new values. 
   >

# Bug Fixes

- Skip converting unchanged 8-bit screen bitmaps to textures every frame [`7b423c3734`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b423c3734e177181ad00ee43ebaa405cd84f8e1)
   &nbsp;
   >Every frame, each legacy 8-bit screen bitmap was converted to a 32-bit texture and uploaded to the GPU, even when its pixels had not changed. Now the conversion inputs (pixels, palette, transparency) are hashed and the conversion is skipped when the result would be identical to what the texture already holds. This removes most of the render work for anything that isn't animating: the launcher, an idle editor, and static player screens (pause, menus, title screen). 
   >
- Skip compositing and presenting unchanged frames [`3cb924e0cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3cb924e0ccc48597af8df54a9c9e902b60992851)
   &nbsp;
   >On top of the conversion skip, the launcher, editor and player now also skip compositing and presenting entirely while nothing on screen is changing, dropping an idle launcher from ~20% to ~4% of a core (and its GPU usage to nearly nothing), with similar savings for an idle editor and for the player's static screens - the save screen, a paused game, a still title screen.  
   >
   >Gameplay is mostly unaffected, since the screen usually changes every frame there. 
   >

### Player

- Keep music in sync with the game across pauses [`7134711cb5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7134711cb57f2416ca183d4f82cb9aa7979b59b5)
   &nbsp;
   >Pausing music (via the system menu, or when losing window focus with that setting on) threw away the chunk of audio that was already decoded and queued for playback, so each pause made the music audibly skip ahead about a fifth of a second, drifting it a little further out of sync with the game every time. Now unpausing rewinds the music to where the frame count says it should be, which also corrects any drift the music picked up from lag.  
   >
   >Bug introduced as music formats moved to Allegro 5 audio streams, starting with mp3 in 2.55-alpha-112 ([7c6712d810](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c6712d810)). 
   >
- Make music seeks take effect immediately [`29eced58f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29eced58f72dfc99ea9affb0a46bf730a1f2ea8d)
   &nbsp;
   >Seeking music (Audio->SetMusicPos, or a music start position) left about a fifth of a second of already-decoded audio queued up, so the old music kept playing that long before the jump was heard - and music a script repositioned ran audibly behind where the engine believed it was until the next pause realigned it. Seeking now discards that queued audio, so the jump is heard right away.  
   >
   >Bug introduced as music formats moved to Allegro 5 audio streams, starting with mp3 in 2.55-alpha-112 ([7c6712d810](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c6712d810)). 
   >
- Screen sliding away during fades and wipes on no-subscreen screens [`14fb8903a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14fb8903a3eb632ea767601bf11a5465fc768c84)
   &nbsp;
   >Screens that hide the subscreen ("No Subscreen" + no offset flag) are displayed recentered, by shifting the image up half the subscreen height. Since the rendering refactor, that shifted image was written back into the game's internal frame buffer. Blocking animations that present frames without redrawing the screen - palette fades, screen wipes - then re-applied the shift every frame, sliding the picture off the top of the screen in a fraction of a second.  
   >
   >Most notably this broke the palette fade of scrolling warps between DMaps with different palettes, which Lost Isle's intro cutscene uses to fade its text in and out: instead of fading in place, the screen slid away at high speed and the fade was never seen.  
   >
   >The recentering (and the wavy effect) is now applied to a separate bitmap used only for presenting to the display, leaving the frame buffer untouched.  
   >
   >Regressed in 2.55-alpha-112 ([6cf0f2eef8](https://github.com/ZQuestClassic/ZQuestClassic/commit/6cf0f2eef8)). 
   >
- Screen snapping into place after palette-faded scrolling warps [`fcbe109615`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fcbe1096156a2d489220b3fcdeb6bae47aa917b7)
   &nbsp;
   >Scrolling warps between DMaps of different palettes darken the level colors, scroll in the dark, and fade back in. The fade-in reveals the scroll's final frame - but the scroll loop composes that frame one step short of the settled position (for classic vertical scrolling: an 8px step plus its 3px NES offset). Normally that snap into place hides inside the visible motion of scrolling; here the screen is otherwise still, so the picture visibly popped into place when the engine resumed.  
   >
   >Now the final frame is composed at the settled position, so the fade-in reveals the screen exactly where it will rest.  
   >
   >Bug introduced when the scrolling loop was reworked in 2.50.0. 
   >
- Title screen crash when the logo is positioned before first render [`96d54323c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96d54323c7bfe43739818aaebcf2fafce1c16e0b)

### ZScript

- Keep combo scripts on the interpreter's fast path [`1535bcf30e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1535bcf30ea4ccb4ff4a4d88148d83fccf9177bd)
- Debugger watches not updating while game is paused [`e77323b9e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e77323b9e76d6cb60571fe679da64f0863139592)
   &nbsp;
   >Adding, editing, or removing a watch expression did nothing while the game was paused via the System menu or F3 - the change only showed up after unpausing.  
   >
   >Bug introduced when the debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger expression evaluator mistakes [`8e55f64343`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e55f64343a4b57b723cae8234d6be56c4e5bb7a)
   &nbsp;
   >Fixes several issues in the debugger's expression evaluator:  
   >
   >- Decimal number literals were silently truncated: "1.5" evaluated as 1.
   >- Text after a complete expression was silently ignored: "1 2" evaluated
   >  as 1.
   >- Bitwise &, |, ^ on plain (non-bitflags) values always returned 0.
   >- The % operator was not supported.
   >- Unary ! kept the operand's type instead of producing a bool.
   >- Unary ~ on fixed-point values operated on the raw value instead of the
   >  integer part.
   >- Number literals beyond the int range silently overflowed.
   >
   >
   >&nbsp;
   >
   >Bitwise, modulo, and bitwise-not now match the script engine's semantics (do_and, do_mod, do_bitwisenot and their 32-bit variants).  
   >
   >Bugs introduced when the debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger crash and persistence mistakes [`4fd2ebe916`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fd2ebe916ad1f79b585e96035260d1677a60706)
   &nbsp;
   >Fixes several issues found in the debugger:  
   >
   >- Selecting a script in the Scripts panel dereferenced the stack trace
   >  before checking it exists, and kept a stale stack-frame selection
   >  that could index past the end of the new script's shorter stack.
   >- Reading or writing a script-scoped variable with no script selected
   >  (e.g. a watch evaluated while no script is paused) dereferenced
   >  null.
   >- Closing the debugger after leaving a quest saved state through a
   >  dangling source-file pointer, because clearing the selected file was
   >  a no-op.
   >- Saving breakpoints read a GUI cache that goes stale while the
   >  Breakpoints panel is collapsed, losing recent breakpoint changes.
   >- Saving with no quest debug data loaded (e.g. the debugger was opened
   >  at the title screen) clobbered the stored breakpoints with an empty
   >  list, since none of them ever resolved.
   >- Watch expressions containing commas were dropped when loaded back from
   >  the config file.
   >- A hand-corrupted breakpoint line number in the config file crashed the
   >  player at startup.
   >- Hidden internal fields (like class 'this') showed in multiline value
   >  output such as tooltips and console results.
   >- Object-member reads copied a garbage scope-table entry indexed by a
   >  value that is not a scope index (the result was unused).
   >- The stepping controls restored the window font scale from an unrelated
   >  ImGui setting.
   >
   >
   >&nbsp;
   >
   >Bugs introduced when the debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >

# Refactors

- Render true-color GUI layers through the render tree [`97980e81d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97980e81d9290226ecc1f045e13fc0b3cb9efa27)
   &nbsp;
   >RenderTreeItem gains a render_cb, so owners of a plain layer can hand the framework a draw callback and mark `dirty` when their source data changes, instead of drawing imperatively into the layer's bitmap. The framework then schedules, targets, clears, and observes the redraw itself - no render_mark_dirty / zc_set_target_bitmap bookkeeping to remember.  
   >
   >Migrated: the DMap editor's minimap (drawxmap now draws to the current target), the quest browser's icon layer, and the spinner arc (which no longer needs its own full-screen a5 dialog layer or the erase-previous- arc trick). The zq_cset pickers keep their imperative drawing - their modal loops predate the render tree and are covered by custom_vsync's conservative mark.  
   >
   >add_dlg_layer now returns a plain RenderTreeItem instead of a LegacyBitmapRTI with a null a4_bitmap - the legacy render() override would swallow render_cb and the a4 pass would consume the dirty flag. Layers start non-dirty so the draw pass never clears content that imperative callers already drew. 
   >
