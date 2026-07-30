---
title: 3.0 Prerelease 205 2026-07-30
description: 
date: 2026-07-30T06:51:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.205%2B2026-07-30/3.0.0-prerelease.205%2B2026-07-30-linux.tar.gz
    name: 3.0.0-prerelease.205+2026-07-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.205%2B2026-07-30/3.0.0-prerelease.205%2B2026-07-30-mac.dmg
    name: 3.0.0-prerelease.205+2026-07-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.205%2B2026-07-30/3.0.0-prerelease.205%2B2026-07-30-windows-x64.zip
    name: 3.0.0-prerelease.205+2026-07-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.205%2B2026-07-30/3.0.0-prerelease.205%2B2026-07-30-windows-x86.zip
    name: 3.0.0-prerelease.205+2026-07-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 362262691
tag_name: '3.0.0-prerelease.205+2026-07-30'
channel: '3'
tags:
  - releases
---

# Features

### Editor

- Improve misalign arrows [`64e84f625e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/64e84f625eb45e60f318cff28c20f5f7edca903b)
   &nbsp;
   >The arrows drawn by 'Show Misaligns' now act smarter; they will no longer show misaligns within regions, or for screen edges with a non-scrolling type sidewarp set. Scrolling-type sidewarps will show arrows based on the warp destination screen. Invalid (blued-out) screens now act as "fully solid" for misalign arrows- so solid boundaries preventing you from entering invalid screens no longer draw arrows, and open walkways into invalid sceens now draw arrows. 
   >

### ZScript

- Script instance variables ('static' / 'nonstatic') [`86fbc65139`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86fbc65139371be9e237baba57ee19d78de79c1a)
   &nbsp;
   >Script-scope variables can now be per-instance: every running copy of a script (each ffc, npc, item, ...) gets its own value. A `static` variable instead holds a single value shared by all instances.  
   >
   >Also, `static` now works on class variables, not just class functions.  
   >
   >```
   >ffc script Counter
   >{
   >    static int spawns;    // static variable - one value shared by every ffc
   >    nonstatic int frames; // script instance variable - separate value for each ffc
   >
   >    void run()
   >    {
   >        spawns++;
   >        while (true) { update(); Waitframe(); }
   >    }
   >
   >    nonstatic void update()
   >    {
   >        // Instance variables and `this` now work in any non-static
   >        // script function, not only `run()`.
   >        this->Data = ++frames;
   >    }
   >}
   >```
   >
   > `void run()` is special: it is always an instance function (marking it `static` is an error), so it can call `update()` and use instance variables without needing the `nonstatic` keyword.  
   >
   >Instance members are private to their script: other scripts cannot call a non-static function or read a non-static variable. Static members remain reachable from anywhere as `Counter.spawns`. Instance variable initializers must be compile-time constants.  
   >
   >Nothing changes for existing scripts. Whether script members default to static is controlled by the new `DEFAULT_STATIC_SCRIPT_MEMBERS` compiler option, whose default (`auto`) currently resolves to `on`. Script-scoped variables default to static (unless explicitly marked `nonstatic`), exactly as before. In a future version of the language, `auto` will flip to `off`, making per-instance the default. To opt into that behavior today, set `#option DEFAULT_STATIC_SCRIPT_MEMBERS off` in a script (or file). For example:  
   >
   >```
   >ffc script Counter
   >{
   >    #option DEFAULT_STATIC_SCRIPT_MEMBERS off
   >
   >    static int spawns; // static variable - one value shared by every ffc
   >    int frames;        // script instance variable (not static)
   >
   >    void run()
   >    {
   >        // ...
   >    }
   >
   >    void update()
   >    {
   >        // ...
   >    }
   >}
   >```
   >
- `@Export` script variables, editable in the editor [`76b97b95ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76b97b95ee0fcb03cfcf8f2937994fb6037eb8e5) [Discord](https://discord.com/channels/876899628556091432/1518829685310623806)
   &nbsp;
   >Annotate a script instance variable with `@Export` and its starting value becomes editable in the editor, on a new "Exports" tab beside `InitD[]` wherever the script is assigned (ffc, item, enemy, weapon, screen, DMap, ...). The variable's initializer is the default value; edited values get a reset button. This effectively lifts the 8-slot `InitD[]` limit.  
   >
   >```
   >ffc script Spinner
   >{
   >    @Export("Speed", "Rotation speed, in degrees per frame"),
   >    @ExportRange(1, 90)
   >    nonstatic int speed = 5;
   >
   >    @Export("Clockwise?")
   >    nonstatic bool clockwise = true; // bools show as a checkbox
   >
   >    void run()
   >    {
   >        // ...
   >    }
   >}
   >```
   >
   > `@Export` takes a required label, plus optional help text (shown behind the field's '?' button) and input field type. `@ExportRange` keeps the field within a min/max. 
   >

# Bug Fixes

- [mac] prevent crash when window is resized [`ce6bbcd096`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce6bbcd096b643b73125f9edc4bdf3594d26ac2c) [Discord](https://discord.com/channels/876899628556091432/1098964099989250098)
   &nbsp;
   >Resizing the window while the game was drawing could crash inside the system's OpenGL driver. 
   >
- Keep the window painted while it is being resized [`1309c31a07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1309c31a071a85f0636f146555051bab2cf1c596)
   &nbsp;
   >Dragging the window edge blanked the game until the next frame was due, because resizing the display throws away what was drawn. 
   >
- TextField bounds clamping against a half-set bounds pair [`c6ca585830`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6ca585830540e851eb9de44662d00b4fc61172f)
   &nbsp;
   >TextField encodes 'no bounds' as ubound <= lbound (defaults 0/-1), but setLowBound/setHighBound clamped the current value after setting only one side. Calling setLowBound first with a negative bound made the pair look like a valid range against the default ubound of -1, clamping the stored value to -1 - displayed as -0.0001 in zfix fields. Bounds now only apply once both sides have been explicitly set.  
   >
   >Manifested in the script Exports tab for variables with a negative '@ExportRange' minimum (the dialog sets the value at construction and bounds afterward); existing dialogs set bounds before values and were unaffected. 
   >
- Game music (SPC, NSF, VGM, GBS, GYM) playing at half volume [`fc64e03d6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc64e03d6a423a90a4002efa93068ce2f07e1331)
   &nbsp;
   >Music played through the game-music emulator library was routed through a legacy software mixer whose default per-voice volume reserves 6dB of headroom for panning, halving the amplitude of a centered stream. Every other kind of audio (sound effects, OGG/MP3, tracker music, MIDI) plays at full gain, so emulated console music sounded noticeably quieter than everything else. The mixer now plays its single centered music voice at full volume, matching the rest.  
   >
   >This also means all of these formats were equally affected - perceived loudness differences between them come from the source files themselves.  
   >
   >Regressed in 2.55-alpha-112 ([7c6712d810](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c6712d810)). 
   >

### Player

- Play the correct secret SFX when a weapon triggers an FFC combo [`0ea8470529`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ea84705295d250ac3b9da096dcb763322acf272)
   &nbsp;
   >When a weapon triggered a generic combo placed on an FFC, the wrong combo attribute was read for the secret/change sound effect, so the configured SFX did not play (or an unrelated one did). The FFC path now reads the same attribute as the combo path.  
   >
   >Regressed in 3.0.0-prerelease.157+2026-01-20 ([88ca703a](https://github.com/ZQuestClassic/ZQuestClassic/commit/88ca703a)). 
   >
- Prevent crash when a camera cutscene spans a screen load [`0fc6c6fc39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fc6c6fc39c120c708745ca0ccab43eab75d3ba8)
   &nbsp;
   >An active (non-frozen) camera cutscene effect kept references into the current screen's combos. Loading a new screen or region freed those combos, so the effect dereferenced freed memory on the next frame, crashing the game. The camera effect is now always cleared on screen load.  
   >
   >Bug introduced when the Camera cutscene effect was added in 3.0.0-prerelease.192+2026-05-29 ([3f488fd0](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f488fd0)). 
   >
- Prevent crash drawing a Button Item subscreen widget [`1167cd6316`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1167cd6316ae909444a3ced826732ab3a42de639)
   &nbsp;
   >A Button Item widget whose button index is out of range - as can happen with a corrupt quest file - read (and wrote) past the ends of fixed-size arrays while drawing, crashing the game.  
   >
   >Bug introduced when the button-item subscreen widget was added in 2.55-alpha-117 ([e935320e](https://github.com/ZQuestClassic/ZQuestClassic/commit/e935320e)). 
   >
- Prevent crash drawing a Button Counter subscreen widget [`e4bbacae07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4bbacae078af02ac35259ad20c098c5c443bec2)
   &nbsp;
   >A Button Counter widget whose cost index is out of range - as can happen with a corrupt quest file - read past the end of a fixed-size array while drawing, crashing the game.  
   >
   >Bug introduced when the Button Counter subscreen widget was added in 2.55-alpha-117 ([09a871e0](https://github.com/ZQuestClassic/ZQuestClassic/commit/09a871e0)). 
   >
- Prevent divide by zero drawing Gauge Piece subscreen widgets [`c5abbb66a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5abbb66a10deeea2bf8d4f73dbb8d16a54ec628)
   &nbsp;
   >Gauge Piece widgets divided by zero while drawing when their "per container" value was 0 (possible with a corrupt quest file), or when using the percentage-based animation flags with a counter whose maximum is 0, crashing the game.  
   >
   >Bug introduced when Gauge Piece subscreen widgets were added in 2.55-alpha-117 ([7d54ca59](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d54ca59)). 
   >
- Prevent crash swapping subscreen pages with no active subscreen [`7579285c6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7579285c6b9fdb77840e08d30ee44a8ae22e94f2)
   &nbsp;
   >Swapping to a map subscreen page when no active subscreen existed dereferenced a null pointer, crashing the game.  
   >
   >Bug introduced when per-page subscreen page-change buttons were added in 3.0.0-prerelease.141+2025-11-18 ([2cee82f2](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee82f2)). 
   >
- Treat a Cooldown Ring 'Divide' of 0 as 1 [`8597256a29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8597256a290897db7b2abc236babbfac6e57c6e3)
   &nbsp;
   >A Cooldown Ring item with its Divide value set to 0 collapsed the computed cooldown to 0 instead of leaving it unchanged, contradicting the item editor, which documents a Divide of 0 as being treated as 1. The division is now skipped when the value is 0.  
   >
   >Bug introduced when the Cooldown Ring item type was added in 3.0.0-prerelease.130+2025-08-23 ([67dbdacc](https://github.com/ZQuestClassic/ZQuestClassic/commit/67dbdacc)). 
   >
- Don't waste magic using 'Kill All Enemies' on ignored enemies [`04a1d44f4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/04a1d44f4b4c20aea58b3d46f300965aa25da199)
   &nbsp;
   >Using a Kill All Enemies item on a screen whose only remaining enemies have the "Ignored by Kill All Enemies" flag spent magic without killing anything, because the check that gates the item did not skip those enemies even though the kill routine does.  
   >
   >Bug introduced when the "Ignored by Kill All Enemies" flag was added in 3.0.0-prerelease.2+2024-07-24 ([396c87a6](https://github.com/ZQuestClassic/ZQuestClassic/commit/396c87a6)). 
   >
- End blank message strings instead of softlocking [`8293f57479`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8293f57479c7106e7da7c11f207e4d1a6aec8527)
   &nbsp;
   >A message string with no printable text (empty, or only spaces) never finished playing, freezing the hero forever - for example, when talking to a Guy whose string is blank.  
   >
   >Regressed in 3.0.0-prerelease.104+2025-05-14 ([71b272aee9](https://github.com/ZQuestClassic/ZQuestClassic/commit/71b272aee9)). 
   >
- Show the Save Indicator setting in the Settings menu again [`0b6f3e3311`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b6f3e33111403d865b138675c047973da5c997b)
   &nbsp;
   >The Settings menu was truncated one entry too early when debug mode is off, hiding the "Save Indicator" toggle. The menu is now truncated based on where the Debug entry actually is, so inserting entries above it can't hide the wrong ones again.  
   >
   >Regressed in 3.0.0-prerelease.28+2024-01-18 ([9d50c56879](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d50c56879)). 
   >
- Dialog dimming not covering the whole screen in fullscreen [`96f2a67169`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96f2a671698f1844172b0c9d04d210c5c3cde9ec)
   &nbsp;
   >When the window's aspect ratio did not match the 4:3 GUI, the translucent overlay drawn behind a dialog (like the "End current game?" prompt) stopped short of the right edge of the screen, leaving part of the game undimmed.  
   >
   >Regressed in 2.55.0 ([fad67d9622](https://github.com/ZQuestClassic/ZQuestClassic/commit/fad67d9622)). 
   >
- Scripted Wind LWeapons infinitely looping wind sfx [`3291fa2e7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3291fa2e7e05fc15de70815230815e30ab00821f)
   &nbsp;
   >Wind LWeapons with valid Parent Item IDs that are non-whistle itemclass items were improperly stopping the item editor sfx of that item instead of the hardcoded wind sfx, causing the wind sfx to loop infinitely. 
   >
- Coyote time jumps eating an 'extra jump' [`f155a24ce1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f155a24ce1ab71fa2a52f5be0d134ae6d8553c26)
   &nbsp;
   >roc items with both coyote time and 'extra jumps' would lose one 'extra jump' when executing a coyote time jump. 
   >
- Stuck at screen edge over walkable water that can't drown you [`e778e4e4b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e778e4e4b760c38660cd05be3c0c77522ce69209) [Discord](https://discord.com/channels/876899628556091432/1293495220284952628)
   &nbsp;
   >The fix preventing screen scrolling from beating out drowning checked for water without checking whether the hero can actually drown in it. In quests without the 'Hero Drowns in Walkable Water' rule (and not sideview swimming), walkable water tiles at a screen edge would block scrolling entirely, softlocking the player against the edge, even though the water could never drown them.  
   >
   >Now the pre-scroll water check uses the same "can drown" conditions as the actual drowning logic.  
   >
   >Regressed in 3.0.0-prerelease.118+2025-07-11 ([7f5820d591](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f5820d591)) 
   >
- Position-preserving warps misplace the hero near screen edges in regions [`9cdffa41c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9cdffa41c32a8beecd2860d5b8106cca903024e7) [Discord](https://discord.com/channels/876899628556091432/1531219397245403156)
   &nbsp;
   >Warps that preserve the hero's position (direct auto/sensitive warps, Direct Warp combos, Hero->PitWarp, and Hero->WarpEx's pit mode) stored that position relative to whichever screen contained the hero's top-left pixel. When standing across a screen boundary inside a region, that is the wrong screen - the warp destination corresponds to the screen whose warp was taken - so the hero arrived a full screen away from the correct spot.  
   >
   >The position is now stored relative to the screen whose warp is taken, and the arrival position is kept within the destination's bounds.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >

### Editor

- Prevent crash summarizing combo triggers with out-of-range fields [`b5c98fc4bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5c98fc4bd6ece55ea10d916e06a06b7d3053437)
   &nbsp;
   >The combo trigger summary could read past the end of lookup tables (direction names, sound names, counter names) when a trigger held an out-of-range field value, crashing the editor. This can happen when a trigger is pasted from the clipboard as JSON or read from a hand-edited quest. The summary now shows "?" for any out-of-range value instead.  
   >
   >Bug introduced when the trigger 'Summarize' button was added in 3.0.0-prerelease.131+2025-08-31 ([1c1e7860](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c1e7860)). 
   >
- Prevent corruption when deleting quest music [`65d59c679b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65d59c679b1af1683483498f9e0207b4fc0ab93a)
   &nbsp;
   >Bug introduced when the new music system was added in 3.0.0-prerelease.157+2026-01-20 ([25814a1e](https://github.com/ZQuestClassic/ZQuestClassic/commit/25814a1e)). 
   >
- MIDI memory leak when editing or pasting tunes [`c99dc22f85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c99dc22f85815f15ce78ae49bb43c9149781e736)
   &nbsp;
   >Assigning one music/MIDI slot to another (via the MIDI editor or paste) leaked the MIDI the destination slot already held. The zctune assignment operators now free any MIDI the slot owns before taking the new one.  
   >
   >Bug introduced when the max-MIDI limit was raised (zctune rewrite) in 3.0.0-prerelease.157+2026-01-20 ([b48e524b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b48e524b)). 
   >
- Clamp combo trigger 'DMap Level' to a valid level [`0fcfd0ca7c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fcfd0ca7c7d16d116a1228451ce8009f6af70af)
   &nbsp;
   >The combo trigger editor let "Trig DMap Level" be set one past the last valid level, which crashed the game when that trigger was evaluated. The field is now capped at the highest valid level.  
   >
   >Bug introduced when the LItem trigger flags were added in 3.0.0-prerelease.2+2024-07-24 ([42b83578](https://github.com/ZQuestClassic/ZQuestClassic/commit/42b83578)). 
   >
- Clamp item pickup 'For Level' to a valid level [`320f290c77`](https://github.com/ZQuestClassic/ZQuestClassic/commit/320f290c77f9305bcb7dda928e867ae42217a166)
   &nbsp;
   >The item editor let the "grant Level Item For Level" field be set one past the last valid level, which crashed the game when that item was picked up. The field is now capped at the highest valid level.  
   >
   >Bug introduced when granting LItems on item pickup was added in 3.0.0-prerelease.109+2025-06-03 ([2ee9dac5](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ee9dac5)). 
   >
- Prevent crash and blank pages in the Screen Data / Init Data value editor [`8b8bc2bb71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b8bc2bb71fbf7432c66b620de86713eab29704d) [Discord](https://discord.com/channels/876899628556091432/1502718806517223546)
   &nbsp;
   >The "Edit Starting Data" editor (Screen Data dialog, also used for generic script data in Init Data) crashed when adding a value with an out-of-range index: with a data size of 1, the "Add at what index?" prompt has equal min/max bounds, which disabled all input clamping, and entering any index above 0 threw an unhandled error.  
   >
   >Also fixes the value list showing a blank page (with a nonsense page range label) after removing enough values while on a later page.  
   >
   >Regressed in 3.0.0-prerelease.1+2023-11-11 ([b84aded881](https://github.com/ZQuestClassic/ZQuestClassic/commit/b84aded881)). 
   >

### ZScript

- Prevent out-of-bounds read when setting a negative combo tint [`c07bf71bbd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c07bf71bbdd182295a6f089924f7e4f6a0a978a6)
   &nbsp;
   >Setting a combo trigger's tint to a negative value while the 6-bit script color compatibility rule was active read past the start of the color scaling table, producing a wrong tint (and a memory-access trap on web builds). Negative tints are now scaled by magnitude and re-signed.  
   >
   >Bug introduced when the palette was expanded from 6-bit to 8-bit color in 3.0.0-prerelease.2+2024-07-24 ([4fccd756](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fccd756)). 
   >
- Keep a live comparison result the ZASM optimizer could drop [`fe8ae0c359`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe8ae0c359c323a281902b05a5a6948d294a83b5)
   &nbsp;
   >The comparison-reduction optimizer pass could remove a block's write to the comparison register while a later block still read it, if the result folded to a constant, leaving the successor to read a stale value. The pass now leaves such blocks unoptimized instead of dropping the write.  
   >
   >Bug introduced when the comparison-reduction D2-reuse handling was added in 3.0.0-prerelease.2+2024-07-24 ([cac709f3](https://github.com/ZQuestClassic/ZQuestClassic/commit/cac709f3)). 
   >
- Reading a message string no longer re-encodes it in place [`3e3a47f866`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e3a47f86696d35f8a6537f60253695ef487009a)
   &nbsp;
   >Game->GetMessage and messagedata->Get() converted the stored string to the requested encoding as a side effect of reading it. Notably, with the compat rule making scripts use the old binary encoding for message data, reading a string permanently downgraded it to the legacy encoding - clamping large SCC arguments and dropping decimal precision - which could change how the string displays afterwards.  
   >
   >Regressed in 3.0.0-prerelease.140+2025-11-05 ([8c038be724](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c038be724)) 
   >
- Npc `Flags[]` writes to index 31 and above hit the wrong bits [`1b4fba8780`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b4fba8780206fb018a8df385cb1fe3649aec2e1)
   &nbsp;
   >Setting NPCF_ONLY_LENS (31) on npc->Flags[] or npcdata->Flags[] also set every flag above it - making the enemy translucent, flickering, flashing, and more. Writes to indexes 32 and up (NPCF_FLASHING through NPCF_KILL_SUMMONED_ENEMIES) changed an unrelated low flag instead of the intended one. Reads were unaffected.  
   >
   >Regressed in 3.0.0-prerelease.100+2025-04-18 ([ec60344a6b](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec60344a6b)). 
   >
- Hide class variables in debugger inside static functions [`591566cedc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/591566cedc0ff506a0e349dd6cb5fbdbec74f42c)
   &nbsp;
   >When paused inside a static class function, the debugger listed the class's instance variables in the Variables panel and resolved them in expressions. Static functions have no instance, so the values shown came from whatever object was last used by an instance method (or nothing at all), and assigning to one silently modified that unrelated object.  
   >
   >Class instance variables are now hidden and unresolvable while paused in a static function. Class constants and explicit member access on real objects are unaffected. 
   >
- Default exported field type based on variable type [`eebec78ff0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eebec78ff0a06562bd61c350b8b3b1508e5bc1c6)
   &nbsp;
   >Default the exported field's input type from the variable's type, as documented: long -> LD (raw value), rgb -> LH (raw hex), bool -> B, everything else -> D. Previously only bool was handled and long/rgb exports displayed as scaled decimal. Also adds the documented rgb -> LH default for InitD run parameter metadata, and covers the defaults in parser_test. 
   >

# Documentation

- Update docs re: static + exports [`c719ea0f70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c719ea0f70d05e2e3b958aba815d3f8d0a601195)

# Build

- Require bison 3.0 or newer [`2c95b1bbfc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2c95b1bbfc2cd147eda4d783964c4831a74231a3)
   &nbsp;
   >macOS ships bison 2.3, which is too old to build the ZScript parser: it predates `%code` (2.4) and `%define api.token.prefix` (3.0). 
   >

# Chores

- Cleanup packfile/zscrdata io code [`59f4a1ff54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/59f4a1ff5489d8b5f3aac02be89bc0632d00611f)
- Properly initialize all initdata values [`69a70ef918`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69a70ef918cb56c14b224dcc0ee3c905b7fe1053)
- Update .git-blame-ignore-revs [`c3915fdd7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3915fdd7d82d9d330190826b2a14a6f1cac9781)

# Refactors

### ZScript

- RegBaseVisitor parser class [`1075c516f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1075c516f268f6c028e425905f60a2658585072e)

# Tests

- Add unit tests for the message string iterator [`fce849c3d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fce849c3d85307b48f3d1d85a05fd2de2c05c612)
   &nbsp;
   >Covers MsgStr::iterator's state machine: blank strings (the recent softlock regression), legacy space-padded strings, word grouping for wrap, commands at every position, buffer injection, post-segment delays, and peek - including pinning peek's current off-by-one at word boundaries, which repeats the last word character instead of reading past it (a fix would need a replay version gate). 
   >

### Web

- Fix the local webserver failing to start [`e9417470cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9417470cb45e7db1a8f067ed952b303ca05ce20)
   &nbsp;
   >It imported mime-types, which was never actually resolvable: the package only exists under web/node_modules as a transitive dependency, and node resolves imports by walking up from the importing file, so a sibling directory is never searched. There is no root package.json, so the import could only ever have worked via a stray install outside the repo.  
   >
   >Inline a small extension to MIME type map instead, since a lookup was the only thing the package was used for. This keeps the script runnable with no install step. 
   >

# Misc.

### Editor

- Improve global_frame tick rate [`ed5abf073e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed5abf073e9f725b411c12dd09266af510e009c3)
   &nbsp;
   >This notably makes the 'Show Misalign' arrows continue blinking while you hold click to draw on the screen. 
   >
