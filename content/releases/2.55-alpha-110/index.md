---
title: 2.55 Alpha 110
description: 
date: 2022-10-13T01:32:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-110/2.55-alpha-110-mac.dmg
    name: 2.55-alpha-110-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-110/2.55-alpha-110-windows-x64.zip
    name: 2.55-alpha-110-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-110/2.55-alpha-110-windows-x86.zip
    name: 2.55-alpha-110-windows-x86.zip
    channel: windows-win32
prerelease: false
id: 79708101
tag_name: 2.55-alpha-110
tags:
  - releases
---

**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/2.55-alpha-109...2.55-alpha-110


<details>
  <summary>Detailed Changelog</summary>

```
// Alpha 110

Actually fix string margin issues, for real this time, I swear.
	( EmilyV, 12th Oct, 2022 )

Enhanced music fixes for dmap music
	( Deedee, 10th Oct, 2022 )

Fix zc save file name config not working
	( connorjclark, 10th Oct, 2022 )

Fix computer-specific cursed bug relating to screen flag script access
Fix version-info related issues
ZScript Debug Console now clears on loading quest, and prints
	version info for the current build and the quest on clear.
Fix string compat issues
Fix combo editor missing labels
Fix cheats 'Player Data' window off-center
	( EmilyV, 10th Oct, 2022 )

Fix sprite data editor not saving changes to sprite name
	( EmilyV, 8th Oct, 2022 )

Reduce excess code generation (reduce .exe file size)
	( connorjclark, 7th+8th Oct, 2022 )

Attempt fix 'Windows scaling issues' bug
	( Deedee, 6th Oct, 2022 )

Fix ZScript 'Pow()' crashing
Fix weird issue with bush combos on FFCs and script-spawned weapons
	( EmilyV, 6th Oct, 2022 )

Add script access to more lifting/trigger related
	combodata variables.
	( EmilyV, 4th Oct, 2022 )

New replay/recording system. See `docs/replays.md` for instructions.
	( connorjclark, 3rd Oct, 2022 )

Fix string right margin
	( connorjclark, 2nd Oct, 2022 )

All textfields now support system clipboard copy+paste
	with Ctrl+C, Ctrl+V
All textfields now can be cleared with Ctrl+Del, Ctrl+Backspace
Insert SCC dialog copy/paste to clipboard buttons
	( EmilyV, 2nd Oct, 2022 )

Blank tiles take up less space in quest file
Upgrade sprite data editor
	( EmilyV, 1st Oct, 2022 )

Fix lift glove crash
Fix compiler settings not saving properly
Fix player sprite dialog issues
	( EmilyV, 30th Sept, 2022 )

// 30th Sept nightly

Fix scripts not finding the correct folder to create files in
Fix ZScript Compile related crashes
Fix GUI/Scrollbar related crashes
	( EmilyV, 30th Sept, 2022 )

// 29th Sept nightly

Fix default quest
Add 'Insert' and 'Remove' ('I' + 'Shift+I') to tile editor
Fix sfx on 'Direct Warp' combos sticking
	( EmilyV, 29th Sept, 2022 )

// 28th Sept nightly

Add 'Lifting' and 'Lift+Walk' player sprites
Update default quest
Fix scrolling warp palette oddities
	( EmilyV, 28th Sept, 2022 )

// 27th Sept nightly

Fix menu-related SCCs
Fix save point menu cursor moving when holding buttons
Save Point combos now support 'ComboType Effects' triggers,
	and have flags/attributes to allow healing the player's
	life and magic when activating the save point.
Fix script writing 'weapon->DeadState' not properly resetting
	'dying frame' to keep weapon alive.
	( EmilyV, 27th Sept, 2022 )

Quest MIDI Info now always allows listening
	( EmilyV, 25th Sept, 2022 )

Fix L/R quickswap eating inputs even when disabled by QR
Fix jumping twice in one frame with feather button option
Add 'Alt+Click' on 'Favorite Combos' to 'Scroll to Combo'
	( EmilyV, 24th Sept, 2022 )

Fix floodfill crash on layers
	( connorjclark, 24th Sept, 2022 )

Fix combo pools/lifting being offset when inserting/moving combos
Fix favorite combos menu
	( EmilyV, 21st Sept, 2022 )

Fix softlock when click+dragging on dropdowns
	( EmilyV, 20th Sept, 2022 )

Add hex value box to palette editor
Fix crash when using both '->Secrets' and 'Triggers Secrets' on
	the same combo
Add button-based option to feathers
	( EmilyV, 19th Sept, 2022 )

Fix 'Flags' button on screen enemy dialog going to wrong
	tab of screen data
Fix lockblock-related bug
Fix string margins
	( EmilyV, 18th Sept, 2022 )

Add 'Thrown' weapon combo trigger
Add 'lift height'/'lift time' combo options
	( EmilyV, 17th Sept, 2022 )

Add advanced 'jinx' related options to items
	( EmilyV, 16th Sept, 2022 )

Add 'Lift Glove', combo lifting
Fix crash related to having a 0 bomb ratio
	( EmilyV, 13th Sept, 2022 )

Compress screen data, greatly reducing quest file sizes
Fix 'flip' for large-sprite enemies
Add 'Combo Pools', similar to combo aliases, used to place
	a random combo from a weighted pool of combos. Intended to be useful
	for decorative purposes, ex. random varying grass/flowers
	( EmilyV, 10th-11th Sept, 2022 )

Add multiple-undo/redo to screen editing
	( connorjclark, 10th Sept, 2022 )

Fix 'ResizeArray()'
Compress combodata, reducing quest file sizes.
	( EmilyV, 9th Sept, 2022 )

Optimize ZScript array initializers
	( EmilyV, 8th Sept, 2022 )

Add new enemy movement flags
	( EmilyV, 7th Sept, 2022 )

Allegro 5 / image loading fixes (bmp)
	( connorjclark, 5th-7th Sept, 2022 )

Fix ZLauncher missing window frame
	( connorjclark, 3rd Sept, 2022 )

Add 'Shooter' combo type- a custom turret combo
Add 'Cooldown' timer for combo triggers
	( EmilyV, 2nd Sept, 2022 )

Fix dragging items
More combo triggers tab options
	( EmilyV, 31st Aug, 2022 )

Fix 'bitmap->GetPixel()' not being *10000
Add 'bitmap->CountColor()'
	( EmilyV, 29th Aug, 2022 )

Add global and timed states for Switch combos
Update 'Video Mode' dialog to allow custom resizing of the window
	( EmilyV, 21st Aug, 2022 )

Fix auto-warps repeating infinitely
Fix cheat code editing dialog
	( EmilyV, 20th Aug, 2022 )

Fix program not exiting correctly
	( connorjclark, 19th Aug, 2022 )

Try to fix mouse cursor lingering at edge of screen
	( EmilyV, 19th Aug, 2022 )

Fix 'Progressive Item' showing incorrect tile on hold up
	( EmilyV, 18th Aug, 2022 )
```
</details>


## Bug fixes!

Too many. See detailed changelog.

## Better undo/redo

Better undo/redo history for screens editing. Before `U` would only remember one change. Now, it remembers all the changes like a proper undo/redo system.

New shortcuts: CTRL+Z to undo, and CTRL+SHIFT+Z/CTRL+Y to redo. (CMD for Mac people)

## Recording/replay system

To prepare for the upcoming z3 scrolling update, we need many recordings of games to add to a test database. If you want to help with that, please send us your .zplay files! Read on to see how:

NOTE: use the latest nightly to record a game, as there is a critical bug for recording in Alpha 110.

_the following is from `docs/replay.md`_

Replays are .zplay text files that ZC can create and play back to replay a game session. All button inputs and RNG seeds are recorded so that ZC can recreate the same playthrough frame-by-frame. [Here is a demo](https://www.youtube.com/watch?v=47sbYAa9RJk&ab_channel=ConnorClark).

This system was created primarily as a way to create automated tests. For more on that, see tests/run_replay_tests.py.

A new save file can be recorded by selecting the ZC > Replay > Enable recording new saves menu option. This will make any new save file also be recorded. You'll see an alert box telling you where the file will be saved. You can save and continue whenever without harming the recording process.

At any time, you can playback a replay in the ZC > Replay menu to watch it again, and can even take manual control whenever you want. This will not modify any exiting saved games. Note that you currently aren't be able to persist a save file when replaying a .zplay from this menu.

Later work on this system may introduce more user-facing features, such as savestates, rewinding, or creating a new game file from a replay.

In the meantime, **a great way to contribute to ZC development** is to enable the recording feature for your new games, and provide us your .zplay files. You don't have to finish the game, any amount of playthroughs could be helpful. The more we have, the better coverage our testing system will have, and the fewer regressions/compatibility bugs there will be!
