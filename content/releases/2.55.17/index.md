---
title: 2.55.17
description: 
date: 2026-09-27T21:47:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.17/2.55.17-linux.tar.gz
    name: 2.55.17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.17/2.55.17-mac.dmg
    name: 2.55.17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.17/2.55.17-windows-x64.zip
    name: 2.55.17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.17/2.55.17-windows-x86.zip
    name: 2.55.17-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 397860208
tag_name: '2.55.17'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Player

- make save files more portable [`0861d600a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0861d600a4993078d686405a05cacc381e6d9f0e)
   &nbsp;
   >- Save files now remember where their quest was actually found: when the
   >  recorded quest path is stale and the fallback search locates the
   >  quest elsewhere, the corrected location is stored the next time the
   >  game saves, so the search isn't needed again.
   >- The qst search can now find a quest by file name anywhere under the
   >  quests directory, not just by dropping leading folders from the
   >  recorded path.
   >- Save files now always record quest paths relative to the quests
   >  directory when the .qst file is in that folder, using forward slashes.
   >  This should help keep .sav files working even when moved between
   >  different installations and platforms.
   >
- use SDL for gamepads for better controller support [`3f58ea5b73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f58ea5b73157d975c96a41f7457c03a25515fff) [Discord](https://discord.com/channels/876899628556091432/1536486417071476777)
   &nbsp;
   >Joystick input now goes through an SDL2-based joystick driver on Windows, macOS, and Linux (the web version already used SDL). Compared to the OS-native drivers, this fixes several long-standing problems:  
   >
   >- Xbox, PlayStation, Switch, 8BitDo, Stadia, and similar controllers
   >  are recognized with correct layouts, over USB or Bluetooth, and
   >  lesser-known controllers that went undetected or had buttons missing
   >  should now work.
   >- On Windows, Xbox triggers didn't register when a pad was serviced by
   >  DirectInput, which merges both triggers onto one shared axis. SDL
   >  reads triggers independently on every backend.
   >- On Linux, controllers silently stopped working whenever Steam was
   >  open: Steam Input takes an exclusive grab on the controller's evdev
   >  device. SDL reads controllers the same way Steam itself does and
   >  keeps working alongside it.
   >
   >
   >&nbsp;
   >
   >The previous OS-native drivers remain available via the launcher (Player -> Joystick Driver) or by setting `driver = native` (or `directinput`/`xinput` on Windows) under `[joystick]` in zc.cfg. 
   >
- recognize hundreds more controllers out of the box [`d30cec0854`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d30cec0854855888f80572be541cce6ab5d5b20b) [Discord](https://discord.com/channels/876899628556091432/1447766826540077116)
   &nbsp;
   >Ships gamecontrollerdb.txt and loads it at startup. Together with the database built into SDL, recognized controllers - Xbox, PlayStation, Switch, 8BitDo, Stadia, and hundreds more - just work when plugged in: every button, stick, dpad, and trigger is identified correctly, and works the same on every platform, over USB or Bluetooth. The controls dialog shows readable names ("Left Shoulder", "Dpad Up") instead of raw button numbers.  
   >
   >You can update the gamecontrollerdb.txt file next to the program to teach ZC about brand-new controllers without waiting for a release. You can get the latest version of this file here: https://github.com/mdqinc/SDL_GameControllerDB 
   >
- per-controller control schemes with sensible gamepad defaults [`c9765545a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9765545a2a8635b144f73055b739a2e7a68da0d)
   &nbsp;
   >A recognized gamepad now gets its own control scheme, selected automatically and remembered per controller, so different controllers keep their own bindings. Priority is quest-specific, then per-controller, then global.  
   >
   >A controller seen for the first time gets a scheme named after it with gamepad defaults: dpad and left stick both move, A/B/X/Y go on the buttons with those labels (PlayStation pads use the SNES physical layout instead), L/R on the shoulders, triggers on Ex3/Ex4, Start opens the menu and Back the map.  
   >
   >The dpad is now bindable as four buttons, and directional buttons work even when analog movement is enabled. 
   >
- simpler controller binding UI [`0e779f68cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e779f68cdbe6042445a96b6aa352b69cd0bac39)
   &nbsp;
   >The Control Schemes dialog gains a "Connected Gamepads" section showing each controller and which scheme it is assigned to, with a dropdown to reassign or set back to '(Auto)'.  
   >
   >In the binding dialog, the movement sticks are now picked from a dropdown listing the connected controller's actual sticks (Dpad, Left Stick, Right Stick, ...) instead of a press-to-bind flow. 
   >
- add 'Trigger Proximity' option to the Show menu [`78aef09574`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78aef095743a0aaa92acc98d473d48082cf4b16e)
   &nbsp;
   >Draws the proximity requirement of every combo trigger on the current screen as a circle around the combo, centered where the trigger check measures from. Normal proximity requirements draw in cyan, inverted ones in orange. 
   >
- one-click face button layouts in the controls dialog [`9926ec5dde`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9926ec5dde6602b8e826af064c0952fead0974f2) [Discord](https://discord.com/channels/876899628556091432/1552139234817605722)
   &nbsp;
   >The Gamepad tab of the control scheme dialog gains a "Face Buttons Standard Layout" row with Nintendo and Xbox buttons. Each option puts those four actions on the face buttons in that arrangement: A right and B bottom as on a SNES controller, or A bottom and B right as on an Xbox controller.  
   >
   >Moving a PlayStation controller's A to Cross, or an Xbox controller's A back to the SNES position, no longer takes four separate rebinds. 
   >
- standalone mode asks to quit to desktop or load the last save [`86aae6ae32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86aae6ae32fed2fc1dc8096b8af0acaa74678af7)
   &nbsp;
   >Standalone mode has no file select screen, so quitting the game ("Save and quit" or "Quit without saving" on the continue screen, a quest's save menu, or a quest script ending the game) now shows a screen with two options: "Quit to desktop" closes the program, and "Load last save" loads the save again without restarting the program. Like the continue screen, it can be used with a controller.  
   >
   >Dying in a quest with the continue screen disabled still loads the last save right away. 
   >

### Editor

- quest browser startup dialog [`c5ca0a1a30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5ca0a1a3067ebbcc548cf6aecd0d1ce410bec8d) [Discord](https://discord.com/channels/876899628556091432/1538719609723551805)
   &nbsp;
   >The editor now opens with a quest browser instead of immediately creating a new quest: a listing of known quests with each quest's icon, title, author, ZC version, and last-edited date. The listing includes recent quests, everything in the quests folder, and any files or folders added with the new Browse for File / Scan Folder buttons. Quests can be filtered and sorted (recently opened, last edited, ZC version), and new quests are created via the existing tileset wizard.  
   >
   >The footer shows the current version and when an update is available.  
   >
   >Automatically opening the most recent quest at startup is now off by default. To enable that behavior, check the box in the new dialog. 
   >
- set tile dialog title when "hide" option is active [`4f4030093f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f4030093f0d66a02938ed5c8c8f4ff7ca0bb694) [Discord](https://discord.com/channels/876899628556091432/1537296861461872800)
   &nbsp;
   >The tile page's "Hide Used" and "Hide Unused" view options draw hidden tiles as X'd-out boxes. Nothing in the dialog indicated that tiles were being hidden, which could seem like a bug if someone accidentally toggled them (Ctrl/Cmd+U cycles them).  
   >
   >The title bar now names the active mode.  
   >
   >Also:  
   >
   >- the two options are now mutually exclusive.
   >- the tile dialog now has a "?" help button that lists the hotkeys.
   >

### ZScript

- automatically resize arrays for internal functions [`3eaea70201`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3eaea7020148fe4f970f447963cc39ea7830a85d) [Discord](https://discord.com/channels/876899628556091432/1484109453132562592)
   &nbsp;
   >Internal functions that fill a script array now grow the array to fit instead of truncating the result and logging an "array not large enough" error.  
   >
   >Internal functions that now resize the given array include:  
   >
   >- `itemdata->GetName`, `itemdata->GetShownName`
   >- `dmapdata->GetName`, `dmapdata->GetTitle`, `dmapdata->GetIntro`
   >- `Game->GetMessage`
   >- `Graphics->ConvertFromRGB`
   >- `file->ReadString`
   >- `file->ReadBytes`, `file->ReadChars`, `file->ReadInts` (with an
   >  explicit count)
   >- `strcat`
   >- `strcpy`
   >- `itoa`
   >- `xtoa`
   >- `itoacat`
   >
   >
   >&nbsp;
   >
   >Arrays are never shrunk, and plain out-of-bounds writes still do not resize.  
   >
   >Internal arrays (like `Game->MiscSprites[]`) are backed by engine data and can't grow; those still get a truncated result and log an error. 
   >

# Bug Fixes

- palette cycles longer than 8 frames not continuing into the next level palette [`a0b47cae81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0b47cae81459ff1c6beb948dfdd0d3526e6ac0d) [Discord](https://discord.com/channels/876899628556091432/1400979610572820520)
   &nbsp;
   >A palette cycle can be up to 15 frames long, but a level palette only has 8 CSets dedicated to cycling. In 1.90 through 2.53, frames past the eighth read from the start of the next level palette, and some quests rely on that. The extra CSets added to level palettes in 2.55 landed in that spot, so those frames took their colors from the current level's replacement CSets for 1, 5, 7 and 8 instead.  
   >
   >Both the player and the editor's preview now skip past those CSets, matching the old behavior.  
   >
   >Regressed in 2.55-alpha-101 ([8b0613ff59](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b0613ff59)). 
   >
- some NSF files using FDS expansion audio playing as silence [`10f3cd26f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10f3cd26f30b5a58bb40cf97731fbb5a57d34c13) [Discord](https://discord.com/channels/876899628556091432/1359832548666245130)
   &nbsp;
   >NSFs using the Famicom Disk System expansion chip would play only some tracks, or nothing at all, because the FDS bankswitching scheme and its RAM area were not emulated.  
   >
   >This bug has existed since NSF playback was added. 
   >
- folder pickers had to be cancelled or confirmed twice [`40cafff3b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40cafff3b51ab13a874036e0cafa38941129d862)
   &nbsp;
   >With native file dialogs turned off, picking a folder (ex: the player's Quest File Directory setting, the launcher's save folder) showed the folder picker twice: Cancel reopened it, and a chosen folder had to be picked again. The prompt called the picker a second time instead of checking the first call's result.  
   >
   >Regressed in 2.55.4 ([5953252f5b](https://github.com/ZQuestClassic/ZQuestClassic/commit/5953252f5b)). 
   >
- [mac] prevent crash on exit from the sound driver [`0059fa6f4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0059fa6f4ede74db1be4e4fcdf28179300880074) [Discord](https://discord.com/channels/876899628556091432/1394182196105056359)
   &nbsp;
   >Bug introduced when Allegro 5 audio was adopted in 2.55-alpha-108 ([a7fccd1f21](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7fccd1f21)). 
   >
- [mac] show "Cmd" instead of "Ctrl" in help dialog hotkeys [`f05b5e878d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f05b5e878dacc8336cabd60d07577b01c7742b22)
   &nbsp;
   >Help text across the editor and player describes shortcuts with the Ctrl key, but on macOS those shortcuts are bound to Cmd. Now they show Cmd on Mac. 
   >
- missing secrets in quests made in 2.53 [`8d86807d31`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d86807d31c681703e1499a7129464f5b3e1775e) [Discord](https://discord.com/channels/876899628556091432/1500952954528727281)
   &nbsp;
   >The compat QR that preserves the old behavior of slash combos that have a secret flag on top of them was applied to every quest made in 2.54 or earlier - except for those made in 2.53.0 or 2.53.1. Quests saved in those versions lost secrets their authors had set up, which could make them unbeatable.  
   >
   >Bug introduced when the rule was added in 2.55-alpha-75 ([350ecca1ca](https://github.com/ZQuestClassic/ZQuestClassic/commit/350ecca1ca)). 
   >
- minor dialog window / grid size miscalculations [`cd07d4d93a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd07d4d93a4591ac42c1dff1d107b21ec725309f)
   &nbsp;
   >This should fix certain things in some GUIs appearing slightly squished. 
   >

### Player

- replay uploading ran for users who never opted in [`d40182e60f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d40182e60f4d72f13f033b7ca2cd340688f29a39) [Discord](https://discord.com/channels/876899628556091432/1540186118774071407)
   &nbsp;
   >The weekly automatic replay upload had its consent check inverted: it ran for everyone who had NOT enabled the "Upload replays" option, and never for those who had. Any .zplay files in the replays folder were uploaded without consent (replay recording is also off by default, so most installs had nothing to upload), and enabling the option silently disabled uploading.  
   >
   >All replays uploaded to date have been deleted, since consent could not be established for them.  
   >
   >Bug introduced when opt-in replay uploading was added in 2.55.5 ([2cee0ae2a7](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee0ae2a7)). 
   >
- prevent rare case where sprite deletion is delayed a frame [`1590407697`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1590407697f93ce08a4ff2724f7446ef3304960a) [Discord](https://discord.com/channels/876899628556091432/1541534214434984058)
   &nbsp;
   >Also fixes a rare crash when a deleted sprite is drawn again. 
   >
- find the quest for a save file made on a different computer [`f7267d962c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7267d962c3f5807068adf390f278b03e698ce51)
   &nbsp;
   >Save files record the path of their quest file as it was when the save was created. If that was an absolute path from another computer - such as a Windows path in a save file opened on a Mac - the player failed to load the quest even when it was sitting in the quest directory: the foreign path was mistaken for a relative one, and the fallback search never looked in the quest directory at all. Absolute paths from either platform are now recognized everywhere, and the search tries each path suffix in the quest directory too.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- keep music in sync with the game across pauses [`f4521f9865`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f4521f9865e4ac1953d38d41dfdce0ee278c416f) [Discord](https://discord.com/channels/876899628556091432/1541486961179631687)
   &nbsp;
   >Pausing music (via the system menu, or when losing window focus with the related setting on) threw away the chunk of audio that was already decoded and queued for playback, so each pause made the music audibly skip ahead about a fifth of a second, drifting it a little further out of sync with the game every time. Now unpausing rewinds the music to where the frame count says it should be, which also corrects any drift the music picked up from lag.  
   >
   >Bug introduced as music formats moved to Allegro 5 audio streams, starting with mp3 in 2.55-alpha-112 ([7c6712d810](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c6712d810)). 
   >
- make music seeks take effect immediately [`9747dadde5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9747dadde570e5e6be814873026d2591586ae758) [Discord](https://discord.com/channels/876899628556091432/1541486961179631687)
   &nbsp;
   >Seeking music (Audio->SetMusicPos, or a music start position) left about a fifth of a second of already-decoded audio queued up, so the old music kept playing that long before the jump was heard - and music a script repositioned ran audibly behind where the engine believed it was until the next pause realigned it. Seeking now discards that queued audio, so the jump is heard right away.  
   >
   >Bug introduced as music formats moved to Allegro 5 audio streams, starting with mp3 in 2.55-alpha-112 ([7c6712d810](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c6712d810)). 
   >
- screen sliding away during fades and wipes on no-subscreen screens [`0355054a13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0355054a132c04ecf23b2e8778f3ef0896abd984) [Discord](https://discord.com/channels/876899628556091432/1541362480557723678)
   &nbsp;
   >Screens that hide the subscreen ("No Subscreen" + no offset flag) are displayed recentered, by shifting the image up half the subscreen height. The shifted image was written back into the game's internal frame buffer. Blocking animations that present frames without redrawing the screen - palette fades, screen wipes - then re-applied the shift every frame, sliding the picture off the top of the screen in a fraction of a second.  
   >
   >Most notably this broke the palette fade of scrolling warps between DMaps with different palettes, which Lost Isle's intro cutscene uses to fade its text in and out: instead of fading in place, the screen slid away at high speed and the fade was never seen.  
   >
   >The recentering (and the wavy effect) is now applied to a separate bitmap used only for presenting to the display, leaving the frame buffer untouched.  
   >
   >Regressed in 2.55-alpha-112 ([6cf0f2eef8](https://github.com/ZQuestClassic/ZQuestClassic/commit/6cf0f2eef8)). 
   >
- screen snapping into place after palette-faded scrolling warps [`1c5a4c85db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c5a4c85dbea239b3c32793d65f7395249e13f15) [Discord](https://discord.com/channels/876899628556091432/1541362480557723678)
   &nbsp;
   >Scrolling warps between DMaps of different palettes darken the level colors, scroll in the dark, and fade back in. The fade-in reveals the scroll's final frame - but the scroll loop composes that frame one step short of the settled position (for classic vertical scrolling: an 8px step plus its 3px NES offset). Normally that snap into place hides inside the visible motion of scrolling; here the screen is otherwise still, so the picture visibly popped into place when the engine resumed.  
   >
   >Now the final frame is composed at the settled position, so the fade-in reveals the screen exactly where it will rest.  
   >
   >Bug introduced when the scrolling loop was reworked in 2.50.0. 
   >
- lens of truth blacking out the screen when magic runs out mid-use [`7cca894c4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cca894c4a9b34904b37539534e5c4618c7fd9ba) [Discord](https://discord.com/channels/876899628556091432/1395078616412459202)
   &nbsp;
   >Once the lens's magic cost could no longer be paid, the lens overlay looked up the lens item with a magic check, found none, and drew its cut-out circle with a radius of 0 - blacking out the whole screen for the remaining frames of the effect. It now uses the lens that is actually active.  
   >
   >Bug has existed since the lens of truth's magic cost was added (2.50-era). 
   >
- wrapping FFCs hitting changers across the whole screen [`6c3fec9d76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c3fec9d76f8c0e614d8b592d956118f12db0243) [Discord](https://discord.com/channels/876899628556091432/1392570971805716592)
   &nbsp;
   >On the frame after an FFC wrapped around the screen, its changer check ran along the line from where it left the screen to where it re-entered, so it hit - and jumped to - the lowest-numbered changer anywhere along that line, usually the one it had just left. FFCs on such screens looped between the wrong changers in-game while the editor preview looked right. The check now starts from where the FFC re-entered the screen, in both the player and the editor preview.  
   >
   >Old quests keep the old behavior via the new compat rule "Wrapping FFCs check for changers across the whole screen".  
   >
   >Bug has existed since FFC wrap-around was added (2.50-era). 
   >
- dummy items blocking pickup of a real item at the same spot [`6bf04b31fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6bf04b31fc7d7eef4c325d22006049349d7ecbc9) [Discord](https://discord.com/channels/876899628556091432/1474494288070185022)
   &nbsp;
   >Only one item is checked for pickup each frame. A dummy item (such as a leftover item in a shop after buying one or the dust pile Ganon leaves behind) counted as that one item whenever it came earlier in the item list. But since a dummy item can never be picked up, a real item at the same spot could not be collected while the player was touching the dummy.  
   >
   >Dummy items are now skipped when choosing the item to check. 
   >
- weapons that bypass 'block' defenses also bypassing enemy shields [`ba85ed6cfc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba85ed6cfc0290c8ab55106ab0b7ab1bab85695d) [Discord](https://discord.com/channels/876899628556091432/1468202385762685028)
   &nbsp;
   >A weapon whose Unblockable flags bypass the 'block' defense types was also let straight through an enemy's shield flags, as if it had the 'shields' unblockable flag as well. The shield check now only looks at the shield flag.  
   >
   >Bug introduced when weapon->Unblockable was added in 2.55-alpha-97 ([fb5a184626](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb5a184626)). 
   >
- slopes not working when a switch block combo changes into one [`3efa24e8ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3efa24e8ed5d82dd51374ff4cb92202f34c96098) [Discord](https://discord.com/channels/876899628556091432/1524503663186542864)
   &nbsp;
   >Switch and Switch Block combos changed their combo directly when their switch state toggled (or when a switch block was stood on or triggered), skipping the post-processing every other combo change gets. A slope that appeared this way did nothing until the screen was reloaded, and spinning tiles or statue shooters appearing this way would not wake up either.  
   >
   >Bug introduced when slopes were overhauled in 2.55-alpha-112 ([b5de618aa2](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5de618aa2)). 
   >
- can't turn while charging the quake hammer in 2.50.0/2.50.1 quests [`9dd50abfee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9dd50abfee741329fe4415a43582faed150bb5de) [Discord](https://discord.com/channels/876899628556091432/1462638974609915995)
   &nbsp;
   >2.50.2 stopped the player from changing direction while charging the quake hammer, but quests made before then expected to be able to (Panoply of Calatia's item text even says so).  
   >
   >Those quests get the old behavior back through the new compat rule 'Can Turn While Charging Quake Hammer'.  
   >
   >Regressed in 2.50.2. 
   >
- ladder letting the player cross two liquid tiles in a row [`80944e3e46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80944e3e460b7a776a4b6241317c8242909a3341) [Discord](https://discord.com/channels/876899628556091432/1479565358686797916)
   &nbsp;
   >With 'Newer Player Movement', walking on a ladder towards a second water tile sometimes did not drown the player, who then walked across the whole thing. The player's water check only counted them as fully in water when their bottom edge was inside the tile, and with subpixel steps the frame where that is true after the ladder ends could be skipped entirely, depending on the player's subpixel position.  
   >
   >The bottom edge of the water check is now inset by one pixel, like its top edge already was (and like pitfalls have been since 2.55.11), so the check can no longer step over that spot. This applies to all quests, and shifts when swimming and drowning start by up to a pixel when entering or leaving water vertically.  
   >
   >Bug introduced when 'Newer Player Movement' was added in 2.55-alpha-51 ([91b931b86f](https://github.com/ZQuestClassic/ZQuestClassic/commit/91b931b86f)). 
   >
- hammers in 1.92/2.10 quests reach one tile further when facing up [`01ca081315`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01ca0813153d501ae60154bede885eca41f6be61) [Discord](https://discord.com/channels/876899628556091432/1436871556763619501)
   &nbsp;
   >In 1.92 and 2.10, the combos affected by a hammer pound were found at fixed offsets from the player. Later versions derive them from the hammer sprite, which sits lower when facing up, and 2 pixels lower still in dungeons. When the player is standing halfway between two tiles vertically, such as after walking up against a solid combo, the old versions pound the tile beyond the adjacent one while newer versions do not reach as far.  
   >
   >End of Time DX (Level 6) and Link's Birthday Deluxe (Super Bomb Dungeon) both have pound puzzles that require this extra reach.  
   >
   >A new compat rule controls this behavior: when enabled, the 2.10 pound positions are used when facing up. It is enabled for quests made before 2.11.  
   >
   >Regressed in 2.50.0. 
   >
- cellar enemies beyond the fourth spawning at garbage positions [`a918ac167d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a918ac167dbe1c51149dce5bf7347eeb6d21e536)
   &nbsp;
   >When a DMap uses 'Use Enemy List for Cellar Enemies', item cellar and passageway screens can spawn up to 10 enemies, but only 4 spawn positions exist - enemies 5 through 10 read positions from out-of-bounds memory. They now cycle through the same 4 columns.  
   >
   >Bug introduced when custom cellar enemies were added in 2.55-alpha-83 ([a7a416007e](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7a416007e)). 
   >
- standalone mode crashed on the second quit, and now closes instead of reloading [`96093af1a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96093af1a0307b72300279d7fda3a2da92fe4eb9)
   &nbsp;
   >`-standalone` runs a quest with a single save slot and no file select screen. Quitting the game (save and quit, or quit without saving) reloaded the quest instead of closing the program, and the second quit died with "Failed to load save: init_game".  
   >
   >Quitting in standalone mode now closes the program. Dying in a quest with the continue screen disabled still reloads the last save, and that path no longer crashes either.  
   >
   >Regressed in 2.55.0 ([603e96444f](https://github.com/ZQuestClassic/ZQuestClassic/commit/603e96444f)), which left the third load with no save slot selected and started a blank game; since 2.55.7 ([471691cd8f](https://github.com/ZQuestClassic/ZQuestClassic/commit/471691cd8f)) that is a fatal error. 
   >
- rebinding a gamepad button in the controls dialog took two presses [`58bf5fe1eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58bf5fe1eb0662754f420e79590c23fc98935725)
- whirlwind over damaging shallow liquid made the player invisible [`e446b6787c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e446b6787cd80662cc86f661e2c7d8b0dd47e186) [Discord](https://discord.com/channels/876899628556091432/1551691909120917616)
   &nbsp;
   >Shallow liquid set to modify HP hurt the player while a whistle whirlwind carried them over it. If "Damage causes hit anim" was enabled, the player was knocked out of the whirlwind but stayed invisible, even after drowning and respawning, until they died and continued.  
   >
   >The whirlwind now carries the player above shallow liquid.  
   >
   >Bug introduced when passive HP modification for shallow liquid was added in 2.55-alpha-97 ([985b345d73](https://github.com/ZQuestClassic/ZQuestClassic/commit/985b345d73)). 
   >
- prevent crash when -load-and-quit or -create-save had no quest path [`40df6acc40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40df6acc40aef5b069501253e8b999f1412fca3a)
   &nbsp;
   >These command line options now report an error when the quest path is missing, instead of crashing. 
   >
- a gamepad input stuck on blocked binding any button [`912fd4c39d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/912fd4c39da19a371612454b30b9741dd70f876c) [Discord](https://discord.com/channels/876899628556091432/1549235589407051869)
   &nbsp;
   >The "Press a button" popup in the controls dialog waited for every button, trigger and dpad direction to be released before accepting a press. If a controller had a broken button that never read as released, the player could not bind anything.  
   >
   >Inputs held when the popup opens are now ignored until they are released, so the other buttons can still be bound. 
   >

### Editor

- resolve qst-relative script include paths before ever reloading the qst [`5a94cb483d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a94cb483d7f6f9cdcaed268e87d1d3a7e97a03e)
   &nbsp;
   >The compiler resolves the implicit `<qst dir>/scripts` include path from the quest's recorded file location, which was only updated when loading a quest but not when saving one. So for a newly created quest (or after Save As to a new folder), compiling could not find scripts in the "scripts" folder next to the qst until the file was reloaded.  
   >
   >Bug introduced when implicit qst-relative include paths were added in 2.55.13 ([1c837533ea](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c837533ea)). 
   >
- don't try next recent quest when cancelling a password prompt [`537247d129`](https://github.com/ZQuestClassic/ZQuestClassic/commit/537247d1298e6bc15f2f42e0535ffcfba0db7c9b) [Discord](https://discord.com/channels/876899628556091432/1538347161731993622)
   &nbsp;
   >At startup with "Open Last Quest" enabled, cancelling the password prompt for a passworded recent quest made the editor move on to the next quest in the recent list, prompting for each passworded quest in turn.  
   >
   >Now only a missing quest file advances the search: any other failure falls through to the new-quest dialog.  
   >
   >Regressed in 2.55.16 ([44b20659a4](https://github.com/ZQuestClassic/ZQuestClassic/commit/44b20659a4)). 
   >
- hotkey cheatsheet overflowing off screen instead of fitting the window [`6d0c73000c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d0c73000c633bf9bbb5b27bee38900c1ae1ed66)
   &nbsp;
   >The Shift+/ hotkey cheatsheet drew a fixed three-column layout over the whole window, so with a small window or many bound hotkeys the columns ran past the edge and were cut off. The panel now sizes itself to its content, centers over a dimmed backdrop, and uniformly scales itself down when the content is too wide to fit.  
   >
   >Bug introduced when the hotkey cheatsheet was added in 2.55.0 ([2f0f07d438](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f0f07d438)). 
   >
- hotkeys grouped under the wrong heading in the cheatsheet [`f74f555eb1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f74f555eb15668c92a2e783ccc1fafd542afbb25)
   &nbsp;
   >Several hotkeys sat under a heading that did not describe them - the screen info / combo info / CSet / type toggles and "Stop Tunes" under Dialogs, "Video Mode" under Actions - and "Go Back"/"Go Forward", "Screen Notes", "Browse Notes" and "Show Hotkeys" fell through to "Misc.". The two large catch-all groups are also split up: the drawing modes and the layer / palette / cset / flag selection get their own headings, and the 74 dialogs are split by what they edit.  
   >
   >Layers and screen palettes are drawn as one row per run of keys ("Edit Layer 0-6") rather than only showing layer 0 and palette 0 - palettes A-F, on Ctrl+Shift, were not documented anywhere at all. A group that spills into the next column now repeats its heading there.  
   >
   >Bug introduced when the hotkey cheatsheet was added in 2.55.0 ([2f0f07d438](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f0f07d438)). 
   >
- wrong help text shown for eight hotkeys when rebinding [`7b3fb89069`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b3fb89069a616f18a7c6a23ea9c153c5b8cffd8)
   &nbsp;
   >In the Rebind Hotkeys dialog, many hotkeys (MIDIs, Misc Colors, New, Options, Default Palettes, Maze Path, Play Music and Apply Template to All) showed the help text belonging to the previous hotkey in the list.  
   >
   >Bug introduced when the hotkey and favorite command systems were merged in 2.55.0 ([cbb1ee9914](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbb1ee9914)). 
   >
- all enemies vulnerable to whistle when resaving pre-2.50 quests [`ee84d12b6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee84d12b6c7bdae454d3eb3b9f3184f4282443a9) [Discord](https://discord.com/channels/876899628556091432/1217745472530284605)
   &nbsp;
   >Quests from 1.90, 1.92 and 2.10 have no per-enemy data saved, so their enemies come entirely from the built-in defaults. That path skipped the rule that marks every enemy other than Digdoggers as ignoring the whistle in quests that predate the whistle defense. So every enemy in such a quest showed a 'Normal' whistle defense in the enemy editor and, once the quest was saved in a newer editor, would take whistle damage in-game if the whistle item was given damage.  
   >
   >Quests already saved in 2.50 were unaffected, since their enemies are read from the file and go through the version upgrade code.  
   >
   >Bug introduced when whistle defense was added in 2.55-alpha-1 ([5d32e96f6c](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d32e96f6c)). 
   >
- palette editor showing the wrong colors while palette cycling is on [`fd7abcd231`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd7abcd23195007e06e88b96c9e01587d416b2ed) [Discord](https://discord.com/channels/876899628556091432/1495954886427148529)
   &nbsp;
   >With palette cycling enabled on the current screen, the editor kept cycling that screen's palette while a palette was being edited, writing the screen's colors over the ones on display whenever a cycle stepped - most visibly while holding the mouse on a color, or right after copying one. Palette cycling is now paused while the palette editor is open.  
   >
   >Bug has existed since palette cycling was added to the editor (2.50-era). 
   >
- partial quest file reads corrupting the open quest's version info [`a6679d90b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6679d90b1e0cc47dda6a655c78873c53e64179e)
   &nbsp;
   >Grabbing tiles from another quest file (and similar partial reads, like loading a tileset in the new quest dialog) only restored part of the current quest's internal version info afterward, leaving values read from the other file in place for the rest of the session.  
   >
   >Most partially loaded sections happened to be in the restored part, but the rest could subtly misbehave - e.g. the compile dialog reporting the other file's ZScript version, and later partial reads taking wrong compatibility branches.  
   >
   >Regressed in 2.55.10 ([b8bc72ae9b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8bc72ae9b)). 
   >
- `Quest > Defaults` could not find any section [`890e3d8bf9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/890e3d8bf9ab366aa39c4ce97a18254d12d502b2)
   &nbsp;
   >Resetting tiles, combos, palettes, items, or weapons to the template's defaults failed with "Can't find section!". The rules section's header gained a field in front of its size, and the section finder still read the old layout, so it lost its place at the rules section and never reached anything after it.  
   >
   >Regressed in 2.55-alpha-114 ([9caad33632](https://github.com/ZQuestClassic/ZQuestClassic/commit/9caad33632)). 
   >
- resetting to defaults leaked the template's quest rules [`150a95f092`](https://github.com/ZQuestClassic/ZQuestClassic/commit/150a95f0927379a89f8c96c1f09ea10f442d1777)
   &nbsp;
   >`Quest > Defaults` and importing a graphics pack read the template quest's header and left its quest rules, format version, and midi flags in place of the open quest's.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- typo in combo move warning [`794a166473`](https://github.com/ZQuestClassic/ZQuestClassic/commit/794a1664732b7791b7bdeea8b29ea102cb313ff8)
   &nbsp;
   >When warning about a Door Combo Set, the warning said "the following screens" when it should say "the following door combo sets". 
   >
- Digdogger Kids vulnerable to whistle in pre-2.55 quests [`1d7c38f3d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d7c38f3d419a42d314d3e1c36fad401f57f745c) [Discord](https://discord.com/channels/876899628556091432/1217745472530284605)
   &nbsp;
   >The rule that marks every enemy in a quest older than the whistle defense as ignoring the whistle exempted every `eeDIG` enemy. Only the big Digdogger needs that; the Digdogger Kids use the generic hit path, so once such a quest was saved in a newer editor they took whistle damage whenever the whistle item had 'Has Damage' set, while every other enemy ignored it.  
   >
   >Now only big Digdoggers (`attributes[9]==0`) keep a 'Normal' whistle defense, in both the per-enemy file read and the built-in default path used by 1.9x/2.10 quests. Follow-up to [148d8e108d](https://github.com/ZQuestClassic/ZQuestClassic/commit/148d8e108d). 
   >

### ZScript

- stop scripts on stack overflow and raise the stack limit [`b76b607d53`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b76b607d538cf44d2cb5735dc556728dcd2f1548) [Discord](https://discord.com/channels/876899628556091432/1516608620110938142)
   &nbsp;
   >Scripts needing more than the stack limit of 1024 would wrap the stack pointer around and keep running on a corrupted stack, usually crashing the game on a garbage return address. Sometimes this logged "Stack over or underflow", but nothing stopped the script.  
   >
   >Now the stack is 5120 (same as 3.0), and overflowing it logs "Stack overflow!" and stops the script, matching 3.0.  
   >
   >Also fixes the JIT corrupting memory on scripts with more than 100 nested function calls (its native call stack was too small and unchecked). 
   >
- correct Game->LoadTempScreenForComboPos [`ec9a3e3f66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec9a3e3f667fc02b3418d3028b572b5b77b7c701) [Discord](https://discord.com/channels/876899628556091432/1502842909974728845)
   &nbsp;
   >`Game->LoadTempScreenForComboPos` was just totally broken in 2.55.  
   >
   >Bug introduced when the function was added in 2.55.10 ([e5ac9267f6](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5ac9267f6)). 
   >
- reuse stack slots for string/array literals [`5f806cdbc7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f806cdbc71f98c79bb0e22bde949ed882889855) [Discord](https://discord.com/channels/876899628556091432/1516608620110938142)
   &nbsp;
   >Every string/array literal permanently took up a slot in the enclosing function's stack frame, even though a literal is only alive until the end of the statement using it. Functions with hundreds of literals could easily exceed the script stack.  
   >
   >Literal slots are now recycled between statements, so such functions use far fewer stack slots. 
   >
- bitmap->Blit crashing when the source rect goes out of bounds [`84d363ab2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84d363ab2f69104807bdf8a117536ab8fcdc2fb2) [Discord](https://discord.com/channels/876899628556091432/1462065371342180518)
   &nbsp;
   >A source rect that started above or to the left of the source bitmap read out of bounds and crashed the player (a rect past the right or bottom edge was already handled). A negative source width or height crashed as well. `bitmap->Blit` and `bitmap->BlitTo` now only read the in-bounds part of the source rect, keeping its position within the rect so the result is not shifted or stretched, and draw nothing for an empty rect.  
   >
   >Bug introduced when bitmap commands were added in 2.55-alpha-1 ([d4ac10bda2](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4ac10bda2)). 
   >
- npc->Shield[] writes being ignored [`05066bb320`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05066bb32049342f7496b2e40cbba60d6693b3d0)
   &nbsp;
   >Setting an entry of npc->Shield[] never changed the enemy's shield flags, so scripts could only read them.  
   >
   >Bug introduced when npc->Shield[] was added in 2.55-alpha-21 ([f55ab47e7b](https://github.com/ZQuestClassic/ZQuestClassic/commit/f55ab47e7b)). 
   >
- generic scripts not seeing LA_SCROLLING at most timings while scrolling [`e6f4a163d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6f4a163d46f6a861c132a71868031683d00c99c) [Discord](https://discord.com/channels/876899628556091432/1349896812055498804)
   &nbsp;
   >While the screen scrolls, generic scripts only saw `Hero->Action` set to `LA_SCROLLING` when run from the scrolling script timings (`SCR_TIMING_WAITDRAW` and `SCR_TIMING_POST_POLL_INPUT`). At every other timing during the scroll the action was whatever the player was doing before the scroll began, so such scripts could not tell they were scrolling.  
   >
   >Every generic script timing run during a scroll now reports LA_SCROLLING.  
   >
   >Bug introduced when generic scripts got passive timings in 2.55-alpha-107 ([e83fde07aa](https://github.com/ZQuestClassic/ZQuestClassic/commit/e83fde07aa)). 
   >
- printf printed garbage decimal digits for -214748.3648 [`c81bf05e3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c81bf05e3ed457c14d90e3d1ebb32da593fe1c2b)
   &nbsp;
   >Formatting the most negative number with %d or %f produced non-digit characters after the decimal point on some platforms, since the fractional digits were taken from the absolute value of a number that has no positive counterpart.  
   >
   >Regressed in 2.55-alpha-112 ([626db20707](https://github.com/ZQuestClassic/ZQuestClassic/commit/626db20707)). 
   >
- xtoa wrote a stray null character, and nothing for 0 [`2849ba499d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2849ba499d4cf252b69a251c56176cc354ce312f)
   &nbsp;
   >`xtoa(buf, 0)` wrote two null characters before the '0', so the buffer read back as an empty string. Every other value got an extra null character after the digits, which caused a spurious "Invalid index" error when the buffer was exactly the right size. The return value now also counts the '-' sign of a negative number.  
   >
   >Bug introduced when xtoa was reworked in 2.55-alpha-92 ([db3c6a9cc5](https://github.com/ZQuestClassic/ZQuestClassic/commit/db3c6a9cc5)). 
   >
- sprintf returned character count as a long (decimal) [`3525aa8918`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3525aa891846271b7654b8af67cb50e4ebdcddc0)
   &nbsp;
   >`sprintf(buf, "%d", 42)` returned 0.0002 instead of 2, since the result was never scaled to a script value. Same for sprintfa.  
   >
   >Bug introduced when sprintf was added in 2.55-alpha-75 ([fb25d06770](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb25d06770)). 
   >
- file->ReadChars put back the wrong character when full [`ac4647cb97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac4647cb970cd571e0389e5f6fc668852e7a87c6)
   &nbsp;
   >When ReadChars ran out of room it pushed the last character back into the file as its script value (the character times 10000), so the next read from the file started with a garbage character instead of the one that didn't fit.  
   >
   >Bug introduced when `file->ReadChars` was added in 2.55-alpha-75 ([ef54b03d25](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef54b03d25)). 
   >
- array literals mixing element types failed to compile [`5c58a73001`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c58a7300198772e0e62ea8bccf474813e9881b0) [Discord](https://discord.com/channels/876899628556091432/1466460159458152569)
   &nbsp;
   >An array literal without an explicit type infers its element type from its elements, falling back to untyped when they disagree. The inference loop mistakenly kept only the last element's type and never compared it against the others, so a literal like `{'A', SOME_ENUM_VALUE}` was typed as an enum array and then failed with "Cannot cast from char32 to const SomeEnum" - even when assigned to an untyped array.  
   >
   >Regressed in 2.55.2 ([8a48221a99](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a48221a99)). 
   >
- lweapon scripts lifting themselves not stopping the engine loop [`a136c8ccce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a136c8ccce72d25408453fc28cd84c0c71cf423c)
   &nbsp;
   >When an lweapon script called Hero->LiftWeapon() on itself, the script engine was meant to report a "self remove" so the engine stops processing the now-lifted weapon that frame. Instead it returned a meaningless value (the early-return code was reset before being returned), so the weapon kept animating after being removed from the weapon list. With the JIT the signal was dropped entirely and the script also kept running past the call, diverging from the interpreter. Now both stop the script at the call and the engine skips the rest of that weapon's frame, as intended.  
   >
   >Bug introduced when script access to lifting was added in 2.55-alpha-114 ([530f7c6898](https://github.com/ZQuestClassic/ZQuestClassic/commit/530f7c6898)). 
   >
- player move functions no longer advance pit state [`ea74fd3fb4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea74fd3fb4798faff840e7298ad95910b2ecf999)
   &nbsp;
   >Calling functions like `Hero->Move()` many times advanced the pit state on every call, so the player rapidly fell into pits and could take rapid damage in some instances. 
   >
- ClearTrace() could garble other apps' allegro.log output [`5930f99270`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5930f99270737149efcf1086afd23603646bc536)
   &nbsp;
   >When the editor or launcher was open alongside the player, a script calling ClearTrace() made the player write over whatever those apps logged to allegro.log afterwards. 
   >

### ZUpdater

- a failed update could leave the install unrecoverable [`c15105a6bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c15105a6bcecab5e9712425de49a1da6f2d6f176)
   &nbsp;
   >If anything went wrong partway through installing an update (such as a file locked by another program, a full disk, or a corrupt download), the updater left the install in a bad state. The files it had set aside were deleted the next time any ZQuest Classic app started, so the only way back was to download a release by hand. An update now puts everything back the way it was when it cannot finish, and alerts if any file could not be restored.  
   >
   >A download that broke off partway, returned an error page, or contained a damaged file was also kept and reused by every later attempt, so once an update failed this way it kept failing. A download is now only kept once it has completed and extracted cleanly. Old downloads are cleaned up after a successful update instead of piling up.  
   >
   >The updater could also crash instead of reporting an error when the release listing came back empty or in an unexpected form. 
   >

# Refactors

- skip converting unchanged 8-bit screen bitmaps to textures every frame [`b557e62b8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b557e62b8a96c92ea2b6fe88fb69eb649cc7324d) [Discord](https://discord.com/channels/876899628556091432/1318435737498161222)
   &nbsp;
   >Every frame, each legacy 8-bit screen bitmap was converted to a 32-bit texture and uploaded to the GPU, even when its pixels had not changed.  
   >
   >Now the conversion inputs (pixels, palette, transparency) are hashed and the conversion is skipped when the result would be identical to what the texture already holds. This removes most of the render work for anything that isn't animating. 
   >
- skip compositing and presenting unchanged frames [`a4ce9a3bb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4ce9a3bb37b549348771853254aec57122cd467) [Discord](https://discord.com/channels/876899628556091432/1318435737498161222)
   &nbsp;
   >On top of the conversion skip, the launcher, editor and player now also skip compositing and presenting entirely while nothing on screen is changing, dropping an idle launcher from ~20% to ~4% of a core (and its GPU usage to nearly nothing), with similar savings for an idle editor and for the player's static screens (such as the save screen, a paused game, or the title screen).  
   >
   >Gameplay is mostly unaffected, since the screen usually changes every frame there. 
   >
- load legacy-encoded quests faster [`f41e3191f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f41e3191f73242f90ca84cca9de576d6fafac547)
   &nbsp;
   >Loading legacy quests is now 1.7x faster for small ones and up to 3.4x for 30 MB+ ones. Quests saved in recent versions are unaffected.  
   >
   >Quests saved before 2.55-alpha-114 carry an extra encryption layer, and the only way through it was to decrypt the entire file into a temp file and read that back, before a single section could be read. These older files could use many slightly different encoding methods, and the quest loader tried each until one worked. If the first guess was wrong, the whole file was read and decrypted again with the next one.  
   >
   >Full loads now decode that layer into memory in one pass, verify the checksum before any section is parsed, and read the sections from memory; no temp file, and a wrong method is caught the same way but without a second read of the file. 
   >

### ZScript

- dispatch interpreter commands through a single switch [`e4125ef6e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4125ef6e457a0727d916dca4fa4c4646914e51a)
   &nbsp;
   >Speeds up all scripts on platforms where the JIT is unavailable, or when it is disabled.  
   >
   >Script-heavy benchmarks ran 13-17% faster interpreted; JIT performance is unchanged. 
   >
- resolve D registers inline at register access sites [`66be4ef683`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66be4ef68371ad9ff3f115b384eaa1fc68312bb4)
   &nbsp;
   >Speeds up something every script does constantly: reading and writing local variables.  
   >
   >Script-heavy benchmarks ran 4-8% faster interpreted; JIT performance is unchanged. 
   >
- screen rare interpreter loop-exit checks behind one branch [`58d7fe0e94`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58d7fe0e9431eb11c10d9ca7a93ca1ec35b1116e)
   &nbsp;
   >Speeds up every script when running interpreted.  
   >
   >Script-heavy benchmarks ran 4-5% faster. 
   >

# Misc.

- improve checklist dialog per-column calculation [`fff8427df0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fff8427df0c029e1a7809073a536eff5238e7808)
   &nbsp;
   >The dialog now attempts to create columns as evenly sized as possible, up to a max of 10 entries per column. 
   >
