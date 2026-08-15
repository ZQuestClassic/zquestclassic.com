---
title: 2.55.16
description: 
date: 2026-08-15T02:40:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.16/2.55.16-linux.tar.gz
    name: 2.55.16-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.16/2.55.16-mac.dmg
    name: 2.55.16-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.16/2.55.16-windows-x64.zip
    name: 2.55.16-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.16/2.55.16-windows-x86.zip
    name: 2.55.16-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 370945701
tag_name: '2.55.16'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

- dropdown lists open when clicked anywhere, instead of just the arrow [`69608e7cf3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69608e7cf3f8cbe350667886d5ae6ab6f275e19c)
- find enhanced music inside a subfolder next to the quest [`1b280e722c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b280e722cb0b2c4d9d6ad1e00b600646330b714)
   &nbsp;
   >Music packs are sometimes distributed as a zip of loose files, and most archive tools extract those into a new folder named after the zip. ZC only looked next to the quest file or in a folder named "music", so that common layout would result in no music being fond.  
   >
   >Now, the quest folder's immediate subfolders are now searched as a last resort (existing locations still take priority, and hidden folders are skipped).  
   >
   >Also, when a music file cannot be found, the log now lists every folder that was searched.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1534711166469931180 
   >

### Editor

- try each recent quest at startup until one loads [`44b20659a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44b20659a4e8dcf7daba4ec5cee4fdeb60edae01)
   &nbsp;
   >When "Open Last Quest" is enabled and the most recent quest is missing or fails to load, the editor now tries the next quest in the recent list, and so on. Only when none of them can be loaded does it fall back to creating a new quest, without showing any error. Previously it gave up after the first entry, which was annoying when using ZC from an external drive that gets assigned a different path on each computer.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1533872851738820688 
   >

### ZScript

- support passing string / boolean to `Trace` [`6706b116ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6706b116cea1a2731ccfa9936cc88d31bfe6962c)
   &nbsp;
   >`Trace(some_string)` now prints a trailing newline after the string (unlike `TraceS`), and `Trace(some_bool)` prints "true"/"false" instead of a number.  
   >
   >Also repairs a corrupted `scriptWarp`/`forceWarp` error message in the deprecated theRandomHeader.zh, which had left that header uncompilable.  
   >
   >This matches behavior in 3.0. 
   >

# Bug Fixes

- dropdown selection off-by-one with non-default dialog font sizes [`70ce057e91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/70ce057e9125239b1a09cd8a78d5be7bd9f686af)
   &nbsp;
   >Selecting the last item of a dropdown list could revert to the previous item, and clicking or using arrow keys on a closed dropdown could silently change the selection. This mostly happened when the dialog font was changed to a non-default value. 
   >
- dropdown list popups not closing when clicking an item [`c46fe3fda4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c46fe3fda4d396d26130eb04dd2d6da17eb1ee06)
   &nbsp;
   >Since 2.55 Alpha 115, clicking an item in a dropdown list popup selected it but left the popup open - only a fast double click, or Enter, would commit the choice. Worse, clicking anywhere else afterwards (such as a dialog's OK button) dismissed the popup and silently reverted the selection. This made dropdown choices appear to not stick, e.g. picking a scheme in the Control Schemes dialog and clicking OK could leave the old scheme active. 
   >
- closed dropdowns drawing extra list rows with small dialog fonts [`3bd9a79f48`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bd9a79f488e9276f5d3df042f916e9f501fd862)
   &nbsp;
   >When the dialog font was small enough for two rows of text to fit in the widget, a closed dropdown drew the next list item below the selected one, as if the list were open. A closed dropdown now always draws only the selected item. 
   >
- game music (SPC, NSF, VGM, GBS, GYM) playing at half volume [`990b6d6783`](https://github.com/ZQuestClassic/ZQuestClassic/commit/990b6d67832ceac0c4e13faab08f1b780211bcf8)
   &nbsp;
   >Music played through the game-music emulator library is mixed at half amplitude: the legacy mixer reserves 6dB of per-voice headroom for panning, but this centered music stream never pans. OGG and MP3 music play through Allegro 5 at full gain, so emulated console music sounded noticeably quieter. The stream's samples are now doubled (saturating) to restore full volume.  
   >
   >Regressed in 2.55-alpha-112 (7c6712d810). 
   >
- MIDI songs sounding detuned or wrong after other songs played [`38cc69ef05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/38cc69ef059c610a88d37530322025e86ce8b111)
   &nbsp;
   >MIDIs can reconfigure durable synth state - most notably pitch bend range, but also channel tuning, instrument banks, and effect levels. The MIDI player never reset this state when starting a new song (the "reset all controllers" message it sent is defined by the MIDI spec to not cover it), so one song's setup corrupted every song played after it until the program was restarted.  
   >
   >This was noticed by users reporting that sometimes pitch bends became wildly wrong - bending an octave instead of a whole step.  
   >
   >Also, seeking (used when a song has a custom start position, and every time a song loops back to its loop point) would dropped all such controller messages in the skipped region, so affected songs sounded wrong even when played first. These are now restored after every seek. 
   >
- [win] ignore initial click when window is inactive [`403702f5b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/403702f5b2b87eb13a8018326a454b4071e45760)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1499572218256953424 
   >
- [linux] prevent crash when opening the native file dialog [`67a920f924`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67a920f9246dbf03db8804e1f2f312a1b4729745)
   &nbsp;
   >The native file dialog (off by default in 2.55) could crash the player and editor on some Linux distros. Two changes to prevent this:  
   >
   >- File dialogs now go through xdg-desktop-portal instead of in-process
   >  GTK3, so the desktop environment provides the dialog out-of-process.
   >  This also behaves better on Wayland.
   >- Our shared libraries no longer re-export symbols from vendored static
   >  libraries (libpng, libjpeg, zlib, ogg/vorbis). System libraries
   >  loaded into the process later - like GTK and gdk-pixbuf - could bind
   >  their image/compression calls to our vendored copies instead of the
   >  system ones and crash.
   >
   >
   >&nbsp;
   >
   >Regressed in 2.55.4 (5953252f5b). 
   >
- mac releases support macOS 12 and up again [`852e63cfeb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/852e63cfeb314ab08b4dcc043d203f8f251b2031)
   &nbsp;
   >Since the CI runners moved past macOS 12, the mac app has inherited the build machine's OS version as its minimum: recent releases refuse to launch on anything older than macOS 15. The deployment target is now pinned to macOS 12, matching the website's stated support.  
   >
   >Regressed in 2.55.8 (cd7d682dd8). 
   >
- [mac] prevent crash when window is resized [`aacf9c4ee9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aacf9c4ee975a7581de46164167ea6284de962b0)
   &nbsp;
   >Resizing the window while the game was drawing could crash inside the system's OpenGL driver.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1098964099989250098 
   >
- keep the window painted while it is being resized [`f181579bf3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f181579bf36c1363601adfd4c692dc5b748f18d3)
   &nbsp;
   >Dragging the window edge blanked the game until the next frame was due, because resizing the display throws away what was drawn. 
   >
- file dialogs opening on a folder that does not exist [`de31ea5071`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de31ea5071303297e0904f0464de35d937985d1d)
   &nbsp;
   >Exporting a tile page could open the file dialog on a bogus folder, so it listed nothing at all - not even a ".." to navigate out of. Any file dialog whose starting folder no longer exists now falls back to the closest folder that does.  
   >
   >The bogus folder came from a stale export path saved in the config by versions before 2.55.10 (9df104fd95), which was never cleaned up. That value is now repaired on the next launch. 
   >
- string shadows cut off at the text box margins [`0c34131b25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c34131b25ce0e8ed7c835c700e7a4bdc414ba5f)
   &nbsp;
   >Shadowed text draws its shadow 1px outside each glyph, but the string margin clipping copied exactly the text area, cutting shadows off of glyphs at the edges. The margin rect now has 1px of leeway.  
   >
   >Regressed in 2.55-alpha-52 (73acd7828f). 
   >

### Player

- stop music restarting on warp to same-music screen [`e7546edc11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7546edc111bc9facec97c380badb3dc3cbb40e6)
   &nbsp;
   >Warps that cut music to silence before replaying it (Entrance/Exit and Cave warps) restarted the screen music even when the destination screen used the same song, causing an audible reset during cutscene-style screen-to-screen warps. These warps now keep the music playing when the destination screen uses the track that's already playing. 
   >
- font scale option in ZPlayer Options dialog never saving [`6f076be8c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f076be8c4d079f51c7cf6bf0143281238953d50)
   &nbsp;
   >Setting a font's Scale in the ZPlayer Options dialog had no effect: it reverted to 1 on hitting OK. The font choice itself saved fine; only the scale was lost. Broken since the dialog was added in 2.55.0 (df3b5ab5b5). 
   >
- Ganon room music not playing for quests made in 1.90 [`270bc4fa93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/270bc4fa932c9bff83a2eee4db979e5240d88227)
   &nbsp;
   >The Ganon room plays the last MIDI in the quest's MIDI bank, but the number of MIDI slots grew from 32 to 252 in 1.92 build 178. The player always looked at the modern last slot, which doesn't exist in quests made before then, so their Ganon music never played.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1529206920379105291 
   >
- passive subscreen missing when playing some old quests [`61ca80e3a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61ca80e3a1bedcb2091463074f61dbf5482b9a2a)
   &nbsp;
   >Some old quests (pre-2.55 subscreen format) have dmaps whose subscreen index points past the end of the quest's subscreen list. The original engine silently fell back to displaying the last subscreen in the list, but since the new subscreen system arrived, such an index displayed nothing at all - leaving the passive subscreen area entirely empty. "Link's Grand Adventure 2" is the only quest known to be affected.  
   >
   >Now the old engine's index resolution is emulated when loading old quests, restoring the subscreens these quests always displayed.  
   >
   >Regressed in 2.55-alpha-117 (7441956cdd). 
   >
- default triforce and ending fanfare NSF tunes never played [`e975263d1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e975263d1d6aadbb5fcef12d9448802471349cce)
   &nbsp;
   >Since 2021, zelda.nsf has shipped in modules/classic/, but the music loader only searches the executable and quest directories (and their music/ subfolders), so it was never found and quests always fell back to the lower-quality MIDI versions of the classic triforce and ending tunes. The file now ships in music/, where the loader finds it - after any quest-provided replacement, which still takes priority.  
   >
   >Regressed in 2.55-alpha-97 (d69aafa6ee). 
   >
- scrolling warp to another dmap charted a screen on the wrong map [`541bcde816`](https://github.com/ZQuestClassic/ZQuestClassic/commit/541bcde8164256692d2d0d33e3d3cbe72922acf2)
   &nbsp;
   >When taking a scrolling warp to a different dmap, the destination screen was charted on the previous dmap's map instead of its own. This made a screen the player never visited show as explored - seen when returning to the previous dmap and viewing its map, or via the reverse warp charting a phantom screen on the destination dmap.  
   >
   >Regressed in 2.55.9 (7ee836aedc). 
   >
- effect flags in bottom/right 8px ignored with newer player movement [`b21853c304`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b21853c3046ee96f2dcf7e805034c48e4b354845)
   &nbsp;
   >With "Newer Player Movement" enabled (and LTTP walk disabled), the player can stand in the bottom/right 8 pixels of the screen, but effect flag checks there still used the legacy shrunken screen bounds - so damage combos didn't hurt, slow combos didn't slow, and lock blocks, signs, armos/graves and other trigger combos didn't activate in that strip. Same class of bug as the recent solidity fix for this movement mode.  
   >
   >Regressed in 2.55-alpha-114 (9933309604). 
   >
- prevent crash drawing a Button Item subscreen widget [`f8a006522e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8a006522e695b353d42636bf689294ea7362d3e)
   &nbsp;
   >A Button Item widget whose button index is out of range - as can happen with a corrupt quest file - read (and wrote) past the ends of fixed-size arrays while drawing, crashing the game.  
   >
   >Bug introduced when the button-item subscreen widget was added in 2.55-alpha-117 (e935320e). 
   >
- prevent crash drawing a Button Counter subscreen widget [`851d83be8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/851d83be8c67f2c67a3cb0db5b2116ae6463c7ee)
   &nbsp;
   >A Button Counter widget whose cost index is out of range - as can happen with a corrupt quest file - read past the end of a fixed-size array while drawing, crashing the game.  
   >
   >Bug introduced when the Button Counter subscreen widget was added in 2.55-alpha-117 (09a871e0). 
   >
- prevent divide by zero drawing Gauge Piece subscreen widgets [`0730a8ec6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0730a8ec6ba08940e02c07fd276b73f203e2d032)
   &nbsp;
   >Gauge Piece widgets divided by zero while drawing when their "per container" value was 0 (possible with a corrupt quest file), or when using the percentage-based animation flags with a counter whose maximum is 0, crashing the game.  
   >
   >Bug introduced when Gauge Piece subscreen widgets were added in 2.55-alpha-117 (7d54ca59). 
   >
- stuck at screen edge over walkable water that can't drown you [`47301d59d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47301d59d62ebf394dcd80849f1605dc90225c5b)
   &nbsp;
   >The fix preventing screen scrolling from beating out drowning checked for water without checking whether the hero can actually drown in it. In quests without the 'Hero Drowns in Walkable Water' rule (and not sideview swimming), walkable water tiles at a screen edge would block scrolling entirely, softlocking the player against the edge, even though the water could never drown them.  
   >
   >Now the pre-scroll water check uses the same "can drown" conditions as the actual drowning logic.  
   >
   >Regressed in 2.55.10 (b27da2ea23).  
   >
   >Discord: https://discord.com/channels/876899628556091432/1293495220284952628 
   >
- coyote time jumps eating an 'extra jump' [`9734b7d2cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9734b7d2cc51048837594dd5b8170583199c6352)
   &nbsp;
   >Roc items with both coyote time and 'extra jumps' would lose one 'extra jump' when executing a coyote time jump. 
   >
- show the Save Indicator setting in the Settings menu again [`88bad727c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88bad727c939ae159246aa432cb15d03e83a8370)
   &nbsp;
   >The Settings menu was truncated one entry too early when debug mode is off, hiding the "Save Indicator" toggle. The menu is now truncated based on where the Debug entry actually is, so inserting entries above it can't hide the wrong ones again.  
   >
   >Regressed in 2.55.0 (05449497b9). 
   >
- dialog dimming not covering the whole screen in fullscreen [`4f435de4fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f435de4fbaf537c43dee0d37883eedae264ec88)
   &nbsp;
   >When the window's aspect ratio did not match the 4:3 GUI, the translucent overlay drawn behind a dialog (like the "End current game?" prompt) stopped short of the right edge of the screen, leaving part of the game undimmed.  
   >
   >Regressed in 2.55.0 (fad67d9622). 
   >
- scripted Wind LWeapons infinitely looping wind sfx [`fcf4344712`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fcf4344712795b65e582d3ef051df4ffcd294efc)
   &nbsp;
   >Wind LWeapons with a valid Parent Item ID belonging to a non-whistle item class stopped that item's sound effect instead of the hardcoded wind sound, leaving the wind sfx looping forever. 
   >
- shooter combos not running scripts on custom lweapons [`2ae0b7c935`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ae0b7c9353c26baaef0ab223cd923e7c3252278)
   &nbsp;
   >Shooter combos firing a 'Custom Weapon' id with 'Custom Weapons Are LWeapons' checked would assign the weapon script but never run it, because custom-weapon lweapons only ran scripts when fired by an item or created by a script. Custom eweapons were unaffected.  
   >
   >Regressed in 2.55-alpha-110 (a90cd1b2e8).  
   >
   >Discord: https://discord.com/channels/876899628556091432/1532973551282290849 
   >
- big 4-directional enemy fire/attack frames overlapping walk tiles [`914162744c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/914162744c7a1eee95f94eb558b2c66396c50f13)
   &nbsp;
   >The 'Big + Firing' enemy animation styles placed their firing frames too close to the walking frames, so a big enemy's attack animation displayed walking tiles from the wrong direction instead of its own attack frames. The fire frame offset now clears the full block of walking tiles.  
   >
   >Broken when added in 2.55-alpha-100 (9753e33c). 
   >

### Editor

- prevent crash at startup when a recent quest path is inaccessible [`231d2ba81d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/231d2ba81d0b6c5029981a3d26470120c2372947)
   &nbsp;
   >Making a path relative for display (recent quest menu entries, per-quest config headers, etc.) threw an unhandled filesystem exception when the OS could not resolve the path - for example, a config file copied from another computer with quest paths in folders that don't exist or can't be accessed. In the editor this happened during startup, crashing before the window even appeared.  
   >
   >Such paths are now left unchanged instead of crashing.  
   >
   >Regressed in 2.55-alpha-108 (f79e7bd348). 
   >
- wrong npc IDs listed by tile move overwrite protection [`b78aef3233`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b78aef3233a002322813c3642b3344c466e94130)
   &nbsp;
   >When moving tiles onto tiles used by enemies, the overwrite protection warning listed each enemy by its position in the alphabetized enemy list instead of by its actual npc ID (the name shown next to it was correct).  
   >
   >Regressed in 2.55.2 (6aae56ece8). 
   >
- prevent crash and blank pages in the Screen Data / Init Data value editor [`fc61a8ec0c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc61a8ec0cb07b151e8feba2a76000ed62b0a3b2)
   &nbsp;
   >The "Edit Starting Data" editor (Screen Data dialog, also used for generic script data in Init Data) crashed when adding a value with an out-of-range index: with a data size of 1, the "Add at what index?" prompt had equal min/max bounds, which disabled all input clamping, and entering any index above 0 threw an unhandled error.  
   >
   >Also fixes the value list showing a blank page (with a nonsense page range label) after removing enough values while on a later page.  
   >
   >Regressed in 2.55-alpha-120 (b84aded881).  
   >
   >Discord: https://discord.com/channels/876899628556091432/1502718806517223546 
   >
- string .tsv import scrambling margins and list order [`a91664ea4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a91664ea4fb76382be316453d7bf68140fc4651b)
   &nbsp;
   >Importing a strings .tsv file - even one exported unedited - broke the string data in two ways:  
   >
   >The margin column is written in top/right/bottom/left order, but the importer read it as top/bottom/left/right, permuting three of the four margins on every import.  
   >
   >The imported list positions were dropped entirely (the string copy intentionally skips them), forcing every string's list position to its numerical index - except the last imported string, which kept a stale position from before the import, corrupting the string list order.  
   >
   >Imported list positions are now applied by rank, so hand-edited files with duplicate or gapped position values normalize sensibly instead of breaking the list.  
   >
   >Broken when added in 2.55.0 (1e1af9db17).  
   >
   >Discord: https://discord.com/channels/876899628556091432/1531111795035607192 
   >
- pressing Shift mid-drag not changing the snap mode of screen objects [`4b58c66824`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b58c668242510c0d78382e472819143ed5837f0)
   &nbsp;
   >Holding Shift while dragging an FFC, warp square, or other screen object switches to a finer snap mode - but the key was only picked up if it was already held when the drag began. Pressing or releasing Shift during the drag did nothing until the object was dropped. The key state is now re-read on every frame of the drag.  
   >
   >Broken since the Shift snap modes were added in 2.55-alpha-119 (c4f28895ed).  
   >
   >Discord: https://discord.com/channels/876899628556091432/1437241713830658238 
   >

### ZScript

- filled Screen->Arc / bitmap->Arc pies escaping the wedge [`947f86514f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/947f86514fb131ed63daf5bf4f0ddf8ffb3a522f)
   &nbsp;
   >Filled arcs were drawn by outlining the pie (the arc plus two edge lines) and flood filling a probe point expected to be inside it. Whenever that probe landed outside the wedge - wrap-around angle spans, pies partially offscreen, tiny radii - the fill escaped and painted everything except the pie. This is the ancient breakage (since the command was added in the 2.50 days) that led scripters to guard Arc calls with parameter checks. Filled pies are now rasterized directly as polygons, which also removes the leftover debug logging that every filled arc printed to the console.  
   >
   >Additionally, filled draws went through a masked sprite blit, so opaque fills with color 0 never drew anything; they now write color 0, letting bitmap->Arc carve/clear regions.  
   >
   >The arc's angle convention is unchanged (and now covered by a test): degrees anticlockwise, 0 = east, as documented. 
   >
- stale jit code could run after reloading a changed quest [`9b01be9557`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b01be9557b0ce0e682dcf157798498b8def03c2)
   &nbsp;
   >The jit cache that lets an F9 reset reuse compiled scripts decided "quest unchanged" from the qst file's modification time. That check can falsely pass - coarse filesystem timestamp granularity (exFAT/FAT and some network drives round to 2 seconds), or the file changing between the quest load and the timestamp read - and since a script's cache key (its type and slot index) is identical every load, a false pass silently runs the previous quest load's compiled code against the newly loaded scripts. In test mode that surfaces as recompiled scripts not taking effect after a reset until the player is fully restarted.  
   >
   >The cache is now keyed on a hash of the loaded zasm itself, so compiled code can never outlive the scripts it was built from, and resets of a truly unchanged quest still reuse it.  
   >
   >Regressed in 2.55-alpha-120 (2bd7e877de). 
   >
- script draws were discarded during the screen init of instant warps [`95c4213897`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95c42138977d84fb58067a6dfc35edd3cb05863c)
   &nbsp;
   >Scripts can run during the screen init frame of an 'Insta-Warp' or 'Insta-Warp with Blackout', but any draws they queued were silently discarded, since nothing executed them before the post-warp game loop restart cleared the drawing queue. This was especially harmful for draws to script bitmaps, as those have lasting consequences.  
   >
   >The other insta-warp types (Zap, Wave, Open) were unaffected, as their arrival animations execute queued script draws as a side effect - though 'Insta-Warp, Opening Wipe' was affected when the circle wipe is used. Scripted warps (Hero->WarpEx) with no warp effect had the same problem, and are fixed too.  
   >
   >This is longstanding behavior, not a recent regression. 
   >
- script draws vanished for one frame when closing the active subscreen [`effcd181b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/effcd181b5ee3dec7d7df4aa0c296976dd37e629)
   &nbsp;
   >The active subscreen blocks in the middle of a game frame, and its internal loops repeatedly clear the queue of pending script draws. When the subscreen closed, the interrupted frame resumed and rendered with an empty queue, so every script draw was missing from that one frame.  
   >
   >The interrupted frame's queued draws are now stashed while the subscreen is open and restored when it closes.  
   >
   >Regressed in 2.55-alpha-119 (cb2d6b5217). 
   >
- backslashes lost from script metadata help text [`2eb3387e62`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2eb3387e6222f909d5b2fcc7dda60952f211f98a)
   &nbsp;
   >Help text on a script's attributes, flags or InitD - anything written in a doc comment - lost its backslashes when the quest was reloaded, mangling the text after them. "C:\new" came back as "C:" followed by a newline and "ew". 
   >
- strings longer than 65535 chars compared and written incorrectly [`cd2d559559`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd2d55955976c9b87ad26ef602a130f56a6f9d07)
   &nbsp;
   >Internal string and array helpers used 16-bit loop indices, so operating on an array with more than 65535 elements would wrap the index back to zero. For example, `strcmp()` compared only the first 65536 chars (and never reached the null terminator), and writing such an array could hang the game. Arrays can hold up to 214748 elements.  
   >
   >This bug has existed since ZScript arrays were added (2.50-era). 
   >
- nested calls to vargs-using functions clobbering each other's varg params [`51c6dfe96c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51c6dfe96c55dc06c236f52692fcd5ae9325fd89)

# Build

- strip unreferenced code and data from the binaries [`d2eb2085e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2eb2085e66d9a3d84e9587bdd2ef442937f749e)
   &nbsp;
   >Every app links the same large engine libraries, and the linker kept whole object files whenever anything in them was used - the launcher carried most of the GUI framework without ever calling it. Binaries now shrink on every platform: roughly 10% for the player and editor, about half for the launcher, and over half for the Windows release builds, whose debug-info link had disabled dead-code removal entirely. 
   >

# Refactors

### Player

- levels with palette cycling ran much slower than necessary [`c7b02395bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7b02395bfac12fa85fc0e920b2adc90a668c085)
   &nbsp;
   >Palette cycling advances up to three cycles at independent speeds, so a single level can produce a few hundred distinct palettes. The color lookup tables rebuilt on every palette change (~1ms each) were cached, but the cache only held ~100 palettes - and cycling revisits palettes in order, which is the worst case for an undersized cache: entries were evicted right before they were needed again. One tested quest rebuilt tables 42,000 times for only 385 distinct palettes, eating ~40% of frame time.  
   >
   >Now only the expensive RGB lookup table is cached per palette (3x smaller entries, so ~640 palettes fit in 20MB), and the cheap translucency tables are derived from it when the active palette changes. Replaying a palette-cycling-heavy quest went from 158s to 96s.  
   >
   >Palette cycling has always had this cost; the cache added in 2.55.4 / 3.0.0-prerelease.55 (c3889779) was too small to help it. 
   >
