---
title: 3.0 Prerelease 237 2026-11-13
description: 
date: 2026-11-14T02:53:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.237%2B2026-11-13/3.0.0-prerelease.237%2B2026-11-13-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.237+2026-11-13-linux-aarch64.tar.gz
    platform: linux-aarch64
    size: 33878556

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.237%2B2026-11-13/3.0.0-prerelease.237%2B2026-11-13-linux-x64.tar.gz
    name: 3.0.0-prerelease.237+2026-11-13-linux-x64.tar.gz
    platform: linux
    size: 34489321

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.237%2B2026-11-13/3.0.0-prerelease.237%2B2026-11-13-mac-universal.dmg
    name: 3.0.0-prerelease.237+2026-11-13-mac-universal.dmg
    platform: mac
    size: 40866699

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.237%2B2026-11-13/3.0.0-prerelease.237%2B2026-11-13-windows-arm64.zip
    name: 3.0.0-prerelease.237+2026-11-13-windows-arm64.zip
    platform: windows-arm64
    size: 37107834

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.237%2B2026-11-13/3.0.0-prerelease.237%2B2026-11-13-windows-x64.zip
    name: 3.0.0-prerelease.237+2026-11-13-windows-x64.zip
    platform: windows-x64
    size: 36544512

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.237%2B2026-11-13/3.0.0-prerelease.237%2B2026-11-13-windows-x86.zip
    name: 3.0.0-prerelease.237+2026-11-13-windows-x86.zip
    platform: windows-win32
    size: 34581836
prerelease: true
id: 444996640
tag_name: '3.0.0-prerelease.237+2026-11-13'
channel: '3'
tags:
  - releases
---

# Features

- Support selecting more than one item in GUI lists [`69f9f459c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69f9f459cc15ecb4a1769ffbb48ce366da45107d)
   &nbsp;
   >Lists built with the GUI builder can set multiSelect, and then read every selected item with getSelectedValues. Shift+click selects a range, and ctrl+click adds one item or removes a selected one.  
   >
   >The jwin list procs already had partial support for this through dp2, which nothing used. Only the items besides the current one are flagged there, so ctrl+click and ctrl+arrow keys dropped the previously current item from the selection; they now flag it. ctrl+click on a selected item now deselects it. 
   >
- Get the exit code of a launched process [`79f5097f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79f5097f524d62f5905ca309b354be205e8063d7)
   &nbsp;
   >process_killer::exit_code returns the code a process exited with, or nothing if it's still running, was killed, or never started. 
   >
- `Once Per Weapon` combo trigger weapon effect [`b7b4b1f14`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7b4b1f14d112aca431ca596b0ceea51af9e0ef9)
   &nbsp;
   >Combo triggers have a new `Once Per Weapon` weapon effect: once a weapon has triggered the combo, that weapon doesn't trigger it again. Until now only triggers with certain effects (secrets, a combo change, a copycat, ...) worked that way, and any other trigger, like one that only plays a sound, fired again every frame the weapon touched the combo. 
   >
- Trigger summaries name labeled combos [`28ce61009`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28ce61009fb366ec589014d58d86e9622a2ac299)
   &nbsp;
   >A trigger summary (Summarize in the editor, the Combo Triggers diagram, and the trigger log) now names a combo by its label, as `Label (ID)`, when it has one: the combo an absolute combo change leads to, the forced ice combo and button prompt combos. A relative combo change also names the combo it changes into when that combo has a label. 
   >

### Player

- Say when a replay assert passes [`a6cce371e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6cce371ef957dbacb6def7740cccf05176ae28b)
   &nbsp;
   >A replay loaded in assert mode said when the assert failed, but nothing when it passed, so there was no way to tell it had been checked. 
   >
- Stopping a replay by hand no longer exits with -replay-exit-when-done [`8eb4b845f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8eb4b845fb5c6a1d2b269a4db993b30f5b87cfa7)
   &nbsp;
   >Halting a replay from the player's window (from its menu, or by taking back control) now leaves the player open to keep playing, even when it was launched with -replay-exit-when-done. The player exits once that game is quit, rather than starting the replay again. Headless runs still exit right away. 
   >
- Mark the result of a replay that was stopped partway [`ae990e8c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae990e8c594158ad415c6700f2096ad633823c63)
   &nbsp;
   >Stopping a replay partway, like by quitting the player from its menu, now writes an "aborted: true" line in the .result.txt. It otherwise reads the same as an assert that failed, or an update that stopped itself for a non-graphical change. 
   >
- Record the name of a test mode replay's init data [`29dd7908a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29dd7908a76bf42d411544aba1b9cbf4aaff7283)
   &nbsp;
   >The editor can now pass -test-init-data-name with -test-init-data, which is saved in the replay, so the editor can show which of its test init data a replay used even after that init data is edited. 
   >
- Add a trigger log to the Cheat menu [`752f5d5ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/752f5d5ea49a6c7b6cb05a68ccdb99386f86057e)
   &nbsp;
   >`Cheat > Show/Hide Layer > Trigger Log` reports what combo triggers do as the game runs: which trigger fired, where, and by which weapon, or why it didn't fire (the condition that failed, a cooldown, ...). It opens the console window, and also writes to allegro.log. The latest lines are also shown in the top left of the screen for a few seconds.  
   >
   >While it's on, combos whose triggers just fired are outlined in yellow, and ones that failed a condition in red. The outlines fade out over half a second.  
   >
   >Something that happens every frame is only reported when it starts, and a trigger that fails the same way at many positions is one line. 
   >
- Show how a screen's combo triggers link up in -dump-screen [`3595a4345`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3595a43458f26905dc74c916649b425d8e5cbe8c)
   &nbsp;
   >-dump-screen has a new "trigger_graph": every combo with triggers on the
   >screen, its layers and FFCs, the combos their combo changes lead to, and
   >the copycats, trigger groups, ExStates, ExDoors, Level/GlobalStates and
   >secrets that link them. Setups that only differ in those numbers (eight
   >floor switches with copycats 1-8) are folded into one.
   >
- Combo trigger graph of a whole scrolling region [`c94479081`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c944790817c139eddc5a9706218359f8705d2772)
   &nbsp;
   >-dump-screen's "trigger_graph" now notes, on its copycats and trigger
   >groups, the combos on the other screens of its scrolling region that use
   >them, and the new -dump-region prints the graph of every screen in the
   >region.
   >

### Editor

- Warn about combo triggers that repeat every frame [`a7450a376`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7450a37648efef20a956a38eebc86ca8522cad0)
   &nbsp;
   >The trigger editor's `Warnings` button now also points out:  
   >
   >* a trigger with a cause that fires every frame (like `Always Triggered`
   >  or `Step->`) and an effect that shouldn't repeat (a sound, secrets,
   >  spawning, ...), when nothing stops it from firing again
   >* a weapon-triggered sound, spawn or counter change, which happens every
   >  frame a weapon touches the combo unless 'Once Per Weapon' is checked
   >* `Light On->` or `Light Off->` in a quest with no Spotlight combos,
   >  where `Light Off->` fires every frame
   >* `Weapon Separate Triggers` on a trigger whose only causes are weapons,
   >  so its other effects never happen
   >
- Diagram of a screen's combo triggers [`7d03f8f02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d03f8f026db08b275e5472085322a493711d997)
   &nbsp;
   >`Screen > Combo Triggers` presents the current screen's combo triggers in a visual diagram: each combo with triggers (on any layer, or an FFC) is a card listing its triggers' causes, conditions and effects; combo changes are arrows to the combos they lead to, even ones not placed on the screen; and the copycats, trigger groups, ExStates, ExDoors, Level/GlobalStates and secrets that link triggers are boxes they connect to. Setups that only differ in those numbers, like eight floor switches each with their own copycat, are shown once.  
   >
   >A picture of the screen and a list of its combos are on the left. Hovering a combo, or its row in the list, outlines where it's placed in the picture, and hovering the picture finds the combos placed there. Clicking the picture or a row scrolls to that combo. Clicking a combo opens it in the Combo Editor's Triggers tab, and clicking one of its triggers opens that trigger. The Fullscreen button gives the diagram the whole window.  
   >
   >Right-clicking the diagram opens a menu:  
   >
   >- Edit Combo and Edit Trigger, like clicking.
   >- Copy Trigger, for the Combo Editor's trigger Paste buttons.
   >- Use Combo for Drawing, which makes the combo the one being drawn
   >  with and scrolls the combo list to it.
   >- Show Only What Links Here, on a copycat, trigger group, state or
   >  secrets box: everything else fades until Show All.
   >- Save as PNG, the whole diagram with its legend.
   >
- Combo Triggers diagram of a scrolling region [`5c48dc730`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c48dc7308d9ef183848124d75f729e6a1f075f5)
   &nbsp;
   >In a scrolling region, `Screen > Combo Triggers` shows the whole region with `Whole Region` checked: every screen's combos, the copycats and trigger groups they share, and each screen's own secrets, ExStates and ExDoors. Unchecked, it shows one screen, and its copycats and trigger groups note the combos on the region's other screens that use them; clicking the note shows the whole region, with only what links to that copycat or group.  
   >
   >The picture on the left is now of the whole region, and zooms with the mouse wheel and pans with a drag. Double-click resets it. With one screen shown, the others are dimmed, and clicking one moves to it. 
   >
- New combo triggers start with `Once Per Weapon` on [`e56b47981`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e56b4798122b50a5d47897b930fda0b6ee8144ee)
   &nbsp;
   >A trigger added in the combo editor starts with `Once Per Weapon` checked, since a weapon should usually trigger a combo once rather than every frame it touches it. Pasted triggers keep their own flags.  
   >
   >The trigger summary only lists `Once Per Weapon` when a weapon can set the trigger off, and the flag no longer counts toward the "weapon-specific Effect(s), but no weapon-based causes" warning, since without a weapon it does nothing. 
   >

# Bug Fixes

- [mac] headless runs stole keyboard and mouse focus [`117f4cf26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/117f4cf26de0a5f2a09026ee5febfb28c2a0c7c2)
   &nbsp;
   >Running replays or tests (anything launched with -headless) outside an app bundle made each process a foreground app and activated it, pulling focus away from whatever the user was doing.  
   >
   >Regressed in 2.55-alpha-118 ([507efb9643](https://github.com/ZQuestClassic/ZQuestClassic/commit/507efb9643)). 
   >
- Horizontal mouse wheel was never passed on [`ef321f8d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef321f8d3eadcee438075357e482c99496dd875f)
   &nbsp;
   >The legacy Allegro mouse driver dropped the horizontal wheel (event.mouse.w), so mouse_w never changed for a horizontal mouse wheel, a trackpad's sideways swipe, or Shift + mouse wheel on macOS. 
   >
- Message string lost the character after an unescaped `}` [`0d5240eb1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d5240eb1afff0dc5ea5d752044131121b6e9f3c)
   &nbsp;
   >Text following an unescaped `{...}` in a message string lost its first character, and a command placed there was broken. Each time the string was saved, another character was lost.  
   >
   >Bug introduced when the new message string syntax was added in 3.0.0-prerelease.140+2025-11-05 ([8c038be724](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c038be724)). 
   >
- Out-of-range string command numbers ran a different command [`4dd4ee0f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4dd4ee0f725d2477cd3d0411c0902afada552a2d)
   &nbsp;
   >A string command written with a number too big or small to be a command, like `\257\1\2\`, was treated as a different, valid command instead of being reported as unknown.  
   >
   >Bug introduced when the new message string syntax was added in 3.0.0-prerelease.140+2025-11-05 ([8c038be724](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c038be724)). 
   >
- Escaped brace in a message string unescaped by a later bad command [`80059dd7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80059dd7db11b9c6a6c30fa633a3ec254437de6a)
   &nbsp;
   >An escaped `\{` or `\}` followed by an invalid string command lost its escaping slash when the string was saved, which then made the brace itself an error.  
   >
   >Bug introduced when the new message string syntax was added in 3.0.0-prerelease.140+2025-11-05 ([8c038be724](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c038be724)). 
   >
- Newline character in a message string had no source position [`c73141971`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c73141971409ac681b42a9cecf7ae168635b5899)
   &nbsp;
   >A newline character in a message string is treated as the Newline command, but its position within the string was reported as starting at 0 with a length of 0.  
   >
   >Bug introduced when the new message string syntax was added in 3.0.0-prerelease.140+2025-11-05 ([8c038be724](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c038be724)). 
   >
- Text prompts returned their initial text, not what was typed [`30c5ca711`](https://github.com/ZQuestClassic/ZQuestClassic/commit/30c5ca71121d4572688415b7b5aba97cde26beb9)
   &nbsp;
   >Bug introduced when the text prompt dialog was added in 3.0.0-prerelease.152+2025-12-24 ([1f927eee93](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f927eee93)). 
   >
- Prevent crash when the program exits while a dialog or menu is open [`ce8b67b33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce8b67b33f7c43e373ebb8d3a1a2bbfebb3368a1)
   &nbsp;
   >Bug introduced when dialogs were given their own render tree items in 2.55-alpha-113 ([1aacd93b47](https://github.com/ZQuestClassic/ZQuestClassic/commit/1aacd93b47)). 
   >
- Prevent out-of-bounds read when loading certain NSF music files [`0ff9b458a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ff9b458a7e4bac8b4b939332d427b450e0d205a)
   &nbsp;
   >An NSF file that enables every expansion sound chip could make the music player read past the end of an internal table as the file loaded. 
   >

### Player

- A Quickload Slot that no longer exists stopped the program [`bcba95e33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcba95e331c114bbf38a1e8d61d83f44feb13444)
   &nbsp;
   >If the launcher's Quickload Slot setting (or -load) named a save slot that doesn't exist, for example because that save was deleted, the player showed a fatal "Cannot load slot" error on every launch. It now logs the error and shows the file select screen instead.  
   >
   >Bug introduced when invalid save slots were made an error in 3.0.0-prerelease.44+2024-03-12 ([9651948a2f](https://github.com/ZQuestClassic/ZQuestClassic/commit/9651948a2f)). 
   >
- Prevent crash warping off the edge of a small DMap's map [`001bfee44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/001bfee44e7860ee14b57d40c0e2e572f969e914)
   &nbsp;
   >Small DMaps can have a map offset as low as -7, which puts their left columns off the edge of the map. A warp to one of those screens crashed the player. Now the warp is cancelled and an error is logged, and WarpEx() gives a script error.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- [win] player closed when a replay upload couldn't connect [`32e6a651d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32e6a651dacbfead637e85504bd4d00579493024)
   &nbsp;
   >When uploading replays failed to reach the server, printing the error threw an exception, which closed the player at startup.  
   >
   >Bug introduced when replay uploads were added in 3.0.0-prerelease.58+2024-07-07 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >
- Results of a replay or update were overwritten when it ended [`8853283c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8853283c324862505edf2b0969647cc3a11a7f10)
   &nbsp;
   >A replay played back or updated without -replay-exit-when-done, such as all but the last in a -replay-batch, had its .result.txt replaced right after it ended by one saying the replay was off and not stopped.  
   >
   >Bug introduced when -replay-batch was added in 3.0.0-prerelease.198+2026-07-09 ([557fdc34cc](https://github.com/ZQuestClassic/ZQuestClassic/commit/557fdc34cc)). 
   >
- Weapons triggered a combo once per hitbox corner each frame [`96814c64c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96814c64c79b6f48c479a06d9417cb4ae24af1b6)
   &nbsp;
   >A weapon checked a combo's triggers once for each point of its hitbox that touched it, so a weapon sitting on one combo usually triggered it four times a frame. Now a weapon triggers each combo at most once a frame.  
   >
   >Bug introduced when weapon combo triggers were added in 2.55-alpha-44 ([014b580d5c](https://github.com/ZQuestClassic/ZQuestClassic/commit/014b580d5c)). 
   >

### Editor

- Wrong help text for two combo trigger options [`ef57e16e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef57e16e66db4f5c65f971d2bafa3be178c5d3f4)
   &nbsp;
   >- The help for 'Load Boss Palette' said it loads a level palette, but it
   >  loads an extra sprite palette (0-29) into the boss CSet.
   >- The help for the SFX 'Pan' said -1 pans by the combo's position
   >  relative to the player, but it pans by the combo's position on the
   >  screen.
   >
- Walk-through doors drawn with the selected screen's door set [`0af551c91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0af551c914ce4b0824735c079508cf14bee87fd3)
   &nbsp;
   >When zoomed out to see several screens at once, the walk-through doors on every screen were drawn with the selected screen's door combo set, rather than their own screen's. The other door types were already drawn right.  
   >
   >Bug introduced when zooming out to edit many screens was added in 3.0.0-prerelease.71+2024-09-26 ([6fd217ecb0](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fd217ecb0)). 
   >
- Combo trigger summary leaves out setting an ExState [`be3c7022d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be3c7022d5450733edbe187c1feebfabe3508f82)
   &nbsp;
   >A trigger with an ExState and `Trigger ExState after item pickup` or `Trigger ExState after enemy kill` checked, but no item or enemy to spawn, sets the ExState right away. Its summary didn't say so.  
   >
   >Bug introduced when the combo trigger `Summarize` button was added in 3.0.0-prerelease.131+2025-08-31 ([1c1e78608b](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c1e78608b)). 
   >
- Pasting a newline after an escaped backslash added a space [`92680e45c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92680e45cbd9ab7cc81770db504e2ed59e33db7f)
   &nbsp;
   >Pasting text into the string editor where a line ended with an escaped backslash (`\\`) added an unnecessary space before the Newline command.  
   >
   >Bug introduced when pasted newlines began converting to `\Newline\` in 3.0.0-prerelease.214+2026-08-21 ([c97712f911](https://github.com/ZQuestClassic/ZQuestClassic/commit/c97712f911)). 
   >
- Inserting a string command after an escaped backslash added a space [`2a8b0b083`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a8b0b083388e40cfbbf4096a353e62b41b44730)
   &nbsp;
   >Inserting a string command with the string editor's "Insert SCC" button right after an escaped backslash (`\\`) added an unnecessary space before the command.  
   >
   >Bug introduced when the new message string syntax was added in 3.0.0-prerelease.140+2025-11-05 ([8c038be724](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c038be724)). 
   >
- Wrong 'no Cause' and 'no Effect' combo trigger warnings [`6b6232bfb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b6232bfb7a632677f8e9fb754eaab78908fc34a)
   &nbsp;
   >The Combo Trigger Editor now decides whether a trigger has a cause or an effect from its summary, so the two always agree:  
   >
   >* A copycat with `No Copycat Cause` checked isn't a cause.
   >* A button prompt is an effect.
   >* A cooldown isn't an effect, and neither are `Consume Item`, a counter
   >  change or level item changes with no item, amount or level items set.
   >* A fail message is only an effect when there's a condition to fail.
   >
   >
   >&nbsp;
   >
   >Bug introduced when these warnings were added in 3.0.0-prerelease.110+2025-06-14 ([56e9081285](https://github.com/ZQuestClassic/ZQuestClassic/commit/56e9081285)). 
   >
- Combo trigger summary names the wrong generic script [`be5c41c79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be5c41c79d271bbe129fc6b8898c8494ad04e531)
   &nbsp;
   >The summary of a trigger that runs a generic script showed the name of the script in the next slot.  
   >
   >Bug introduced when the combo trigger `Summarize` button was added in 3.0.0-prerelease.131+2025-08-31 ([1c1e78608b](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c1e78608b)). 
   >
- Combo trigger summary lists other effects as pickup flags [`39bee2299`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39bee229940464668efc5a56d67d4a79a2f37c84)
   &nbsp;
   >The summary of a trigger that spawns an item with pickup flags listed the trigger's other effects, like `Clear all eweapons`, in place of the flags. With no other effects, it cut off the end of the line before.  
   >
   >Bug introduced when the combo trigger `Summarize` button was added in 3.0.0-prerelease.131+2025-08-31 ([1c1e78608b](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c1e78608b)). 
   >

### ZScript

- Prevent crash when a lifted weapon's script removes it [`e57181455`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e571814555c35d2470c0731c8adb4f26d4b2bf22)
   &nbsp;
   >With the "Lifted Weapons Run Scripts" QR on, the player crashed when the script of an lweapon the hero was holding removed that weapon, released it with `Hero->ReleaseLiftWeapon()`, or cleared `Hero->LiftedWeapon`.  
   >
   >Bug introduced when the rule was added in 3.0.0-prerelease.120+2025-07-19 ([cbceeae86c](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbceeae86c)). 
   >
- Mark `TRIGFLAG_ONCE_PER_WEAPON` as added in 2.55.18 [`7b6d1825b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b6d1825ba58f42420f04854e1fd64c1648c7abd)
   &nbsp;
   >The flag was also cherry-picked to 2.55, so the docs shouldn't say it is new in 3.0.  
   >
   >Bug introduced when the flag was added in [b7b4b1f14d](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7b4b1f14d). 
   >

### Web

- Key presses made with Ctrl held were lost in dialogs [`d6421f154`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6421f15446baf447b8d0f14e32f0536792d8368)
   &nbsp;
   >Shortcuts like Ctrl+A to select all the text in a field did nothing in the web version. On a Mac, the Command key now works as Ctrl there, as it does in the desktop version, and no longer triggers the browser's own shortcuts. 
   >
- Copying to the clipboard did nothing [`788c8bed2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/788c8bed29ca0180f5ebf757f2ac85df35b80c38)
   &nbsp;
   >Buttons that copy text, like the ones that copy quest rules or a replay's path, now work in the web version. 
   >

# Documentation

- Say that the dump commands' map and screen are 0-based decimals [`627ffd9b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/627ffd9b461e9942bd7093c152b03673547dfcbb)
- Add a guide to combo triggers [`f762b65eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f762b65eb9ce36145d9190381064a76064e8f423)
   &nbsp;
   >https://docs.zquestclassic.com/tutorials/combo_triggers 
   >

# Build

- Retry a failed dmg detach by its disk, not its mount point [`74b431196`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74b431196abbe0ce82faf7e87e7b95c01738a721)
- Update libpng to 1.6.59 [`3a5013434`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a5013434b798b19097f6a3a14adf09d112071fc)
   &nbsp;
   >Picks up upstream security fixes for loading malformed PNG images. 
   >
- Update game-music-emu [`89c782f4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89c782f4d0bb97c00ba12d63a6b57a0772fba30c)
   &nbsp;
   >Picks up upstream fixes for loading malformed music files. 
   >
- Update zlib to 1.4 [`dc9bf8504`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc9bf850483c851ebe4c7038ad23a6e7583f0b85)
   &nbsp;
   >Picks up upstream security fixes for compressed data handling. 
   >

### Visual Studio Code Extension

- Apply non-breaking npm security updates [`0c92f5007`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c92f5007cbdd41d9e7a3db058291a3042d0148e)
- Update glob to 14 [`55300bc36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55300bc36f83f8b658e23495d0420d8b440f8eb2)
- Update mocha to 12 [`6510ed84d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6510ed84d6ffb088314e15f0312d29c3e724efe0)
- Move the ESLint config to eslint.config.js [`92367790d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92367790db7f09b621ce8ae9c42c62de2b5047b3)
- Update ESLint to 10 [`f8fe998eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8fe998eb1ff94e4abe145dba48b9b21b3a6dd5f)

### Web

- Apply non-breaking npm security updates [`58b304b7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58b304b7e6b296672bca395af9b8d8df11c96cf9)
- Update esbuild to 0.28 [`89b41853f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89b41853f76d58a977fa81204d0603ba70a32765)
- Update mocha to 12 [`da0c1c548`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da0c1c54828bbb2442f4f4405507aafe75c64e65)
- Update firebase to 13 [`758d917dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/758d917dd4dc6de207e30b5f9e4219d99bd20d8d)

# Chores

- Update replay_uploads_known_good_replays.json [`be0bc2f64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be0bc2f64f236d0daaa171fec94130947ea2d21f)
- Update replay API server Python dependencies [`c5d0bd8c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5d0bd8c36e7fa22b2a4b3e1de3b807b3cc6821b)
- Update dev and CI Python dependencies [`dcbcbc662`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dcbcbc662dc413233cdf3d1cc38452a2bbd171e0)
- Replace PyGithub with a small client for the GitHub API [`536109e60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/536109e60462ac5f710258bb4745f4560481720b)

# Refactors

- Harden string command parsing [`fb936eb35`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb936eb3581aacb78dd59965c8fd46b002efefd1)
- Cast to unsigned char before calling ctype functions [`617ae1d92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/617ae1d920beee70b0f9984c71d82400505abcc2)
- One list of the weapons that can trigger a combo [`ac4c01a20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac4c01a205d21cbd5250964b6008a48567d576ac)
   &nbsp;
   >The trigger summaries, the Combo Trigger Editor's weapon checkboxes and its warnings each listed the weapon causes, with their names. They now share the lists in core/combo. 
   >

# Tests

- Add replays of the trigger example quest's rooms [`d50dd3d82`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d50dd3d8222a0ffab30c6fd4b088a1583c95b83a)
   &nbsp;
   >One short test-mode replay each for the rooms of trigger_example.qst that misc/triggers2.zplay doesn't visit: the spinners (04), the path puzzle (13), Lights Out (14), the proximity bridge (16) and spike maze (17), the spreading fire (18) and the Armos statues (26). Each one solves its room, so they also feed the gifs in the combo triggers guide. 
   >
- Add a replay of the trigger example quest's key rooms [`60456e271`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60456e2714979e4151a16784aa87059638b89fff)
   &nbsp;
   >Uses the red and blue keyholes in room 25, which removes the red barrier, then walks up into room 15, where all four colored torches light and its secrets open. Also feeds the room 25 and 15 animations in the combo triggers guide. 
   >
- Cover firing a combo trigger once per weapon [`510717047`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51071704755d2d3e459b7890b7ce50bc4b5a8ce6)
   &nbsp;
   >A weapon re-checks the triggers of a combo it overlaps every frame, and only skips it afterwards when the trigger has an effect like a copycat. 
   >
- Keep a known good replay's previous pin when its newer uploads fail [`26b6765c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26b6765c348e886d12268d88928e42a5c9c689e2)
   &nbsp;
   >--update_known_good used the whole uploaded replay, so a known good
   >replay whose newly uploaded part failed to update was dropped entirely,
   >along with the part that was validated before. Now such replays are
   >updated again at their previous pin, and kept if that passes.
   >
- Show the ZScript version lint's output when it fails [`87fdd91be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87fdd91be21a9a0987c7ac56a00c2b8eecec0b38)

# CI

- Add Dependabot config [`31e7eba6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31e7eba6f650c32d9f18191b1e126397430de5c2)
   &nbsp;
   >Security fixes only for the Python and npm dependencies, grouped into one pull request per ecosystem. GitHub Actions get a grouped monthly version update. 
   >
- Check native dependencies for security advisories weekly [`1bffa2cbe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bffa2cbe8fd02b126cb5110fff9cdb96b6c0b32)
   &nbsp;
   >Dependabot can't see the libraries pinned by commit in CMake or vendored into third_party/, so look those up in the OSV database instead. A weekly workflow keeps an issue open while any advisory is unaddressed.  
   >
   >Advisories that don't apply go in third_party/advisories_ignore.txt. 
   >
- Wait for a re-run baseline workflow to start before polling it [`98bc5302e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98bc5302efcdf45965a9c75ab5ba4a307f265dc8)
   &nbsp;
   >Right after a re-run is requested, the run still reports its previous failed conclusion, so the next poll could count it as another failure and use up a retry (or give up) without the re-run ever finishing.  
   >
   >Bug introduced when re-running the baseline workflow was added in 2.55-alpha-114 ([d87c772145](https://github.com/ZQuestClassic/ZQuestClassic/commit/d87c772145)). 
   >
- Drop redundant Node 18 setup from compare workflow [`80eb1513b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80eb1513ba51f37d91cddea27c95ca48c2c6b060)
- Call reusable workflows from the same commit [`2995381c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2995381c786f56939020488a88463cd9c3c62b94)
- Bump the actions group across 1 directory with 11 updates [`2f88ce77d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f88ce77d1fca32b6a69cf717d945b5b9ede4d7d)

# Misc.

- Fix the orange torch's trigger label in 'trigger_example.qst' [`521bcaf87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/521bcaf87c8371eed6be9ead61cfbc6b7c9b9bec)
   &nbsp;
   >The orange torch in the LevelState torch room was labelled "Blue Torch Trigger". 
   >
