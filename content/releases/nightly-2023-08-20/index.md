---
title: Nightly 2023-08-20
description: 
date: 2023-08-20T23:20:09Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-20/nightly-2023-08-20-linux.tar.gz
    name: nightly-2023-08-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-20/nightly-2023-08-20-mac.dmg
    name: nightly-2023-08-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-20/nightly-2023-08-20-windows-x64.zip
    name: nightly-2023-08-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-20/nightly-2023-08-20-windows-x86.zip
    name: nightly-2023-08-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 117931565
tag_name: 'nightly-2023-08-20'
channel: '2.55'
tags:
  - releases
---



# Features


- Add 'Game->OverrideItems[]' to allow forcing an item id to be "highest level owned" of its' class. [`bc232375d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bc232375d93e89e271d1df48b40e93d24f88d502)

# Bug Fixes

- Allow exiting zc when test mode gets stuck in error [`f18c48097`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f18c480973f580ae1cd942880690105a020d467c)
- some bad dialog 'default's resulting in windows closing [`2a4fd7097`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a4fd709738096dc9af121271d50a05f007f76b7)
- event crash due to bad weapon access [`82b9954f3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82b9954f334727344db5a38f5d6aff2669a756a3)
- checkbox odd alignment issues [`0a39e13ea`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0a39e13ea40d9b1a1df3864e5238e517c152315f)
- test quest dlg wrong button focus [`eae4f8082`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eae4f8082ed54dae9eaf9079e705760be9c2a372)

### Editor

- dmap midi dropdown [`01a98d5be`](https://github.com/ArmageddonGames/ZQuestClassic/commit/01a98d5beb8b5355741ae6bc0fa7dbf6d973b3de)

# Documentation

- specify that linux builds should use clang [`e742d5a4d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e742d5a4d656432dec48545b97dfd2dc12f695ce)
- changelog overrides for subscreen rework [`237156aa8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/237156aa818dfd0a1b69d33d3ec45ef69a3f5c22)

# Refactors

- update dmap editor to new GUI [`833660a15`](https://github.com/ArmageddonGames/ZQuestClassic/commit/833660a155ad58d85e7a5ca8e82659d265b7c1ef)
- Fix hardcoded icons, no longer using custom codepoint strings. [`2193c4671`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2193c46710aac512f6abccb65984bbbeeb206c1a)
- Merge New Subscreens (#879) [`7441956cd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7441956cdd021b5b7f9c88e73925ef0d70c60616)

# Tests

- add (crude) RNG debugging option [`97acebb06`](https://github.com/ArmageddonGames/ZQuestClassic/commit/97acebb06ecba31da71011c991f4f13b8dadef85)
- run_replay_tests now forwards more args when collecting local baseline results [`a3513f63d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a3513f63d27a17c3c54aeebbed646506a325ca86)
- move zquest save classic_1st.qst test to python [`7c8a5625c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7c8a5625c582a12b7d779cf6173f670543d25214)
- move zquest save classic_1st.qst test to python [`593beae65`](https://github.com/ArmageddonGames/ZQuestClassic/commit/593beae6594ff734d535b3664dd867b06bbb6305)
- make copy of playground.qst for quick assign test [`d200356d7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d200356d7a3ffc500be556f1919a71fb0450bfe2)
- move recording test to python [`770a6fe39`](https://github.com/ArmageddonGames/ZQuestClassic/commit/770a6fe39da7a37de303def9e96856adf330fac5)
- move File->New test to python [`4440846b2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4440846b2a76ef4962d44875ba07c8844b4c6408)
- disable save test [`931b20261`](https://github.com/ArmageddonGames/ZQuestClassic/commit/931b2026122bbb03df2c5e0b61cfc99f1dfdf34b)

# CI

- run python unittest module instead of calling each test file individually [`bee03b3bf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bee03b3bf8b3f50c2b99b8a72132bf0b279a41a3)

# Misc.

- add '-no_console' switch to prevent debug console opening [`020fb0382`](https://github.com/ArmageddonGames/ZQuestClassic/commit/020fb0382a1db473d5022ab21a31d6f350cb6204)
- Merge branch 'main' into newsubscr2 [`7aac40d6b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7aac40d6bfa06159fdb3713e70bd7a9ebf99fc95)
- support dropping commits in changelog [`1078cec21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1078cec21f1f734d2cec0dbc497f58e2f3d87822)
- allow for squash commit subjects to be changed too [`23529bfc7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/23529bfc7a21b3084a9bc404d3f70cd1eac42c3e)

# Full Subscreen Rewrite
The entire code behind how the subscreen functions has been entirely reworked to be less janky and more manageable. This makes editing the subscreen further a LOT easier of a task for us, and makes everything just a lot nicer in general.

## General mechanics tweaks
Several mechanics have been generally tweaked, including basic things like how the selector behaves and how items are equipped. These changes are mostly spread across a variety of quest rules, but for easy swapping, there are now "New Subscreen" and "Old Subscreen" Rule Templates available [see Quest->Options->Pick Rule Templates]. These change almost every new rule related to the subscreen - the only important one that they leave alone is `Old Gauge Tile Layout`, which changes the tile layout used by Gauge Piece widgets.

These new QRs, as well as many existing QRs that relate to the subscreen, have been moved to the new "Subscreen" tab. These are searchable as usual via the QR Search feature.

TL;DR New QRs, check the new Rule Templates or the Subscreen tab.

## Button Equipment Stuff
* QR 'No Button Verification'- if enabled, the engine will no longer auto-equip things to buttons for you.
* Also allows UNEQUIPPING items (try to equip it to the slot it's already equipped to)
* Problem: With this enabled, even if you start with items, now the engine won't equip any of them for you!
* Solution: Now you can set "Default Equipment" for each button slot! Just check the box in the ItemSlot widget, for the Active Subscreen that is set on the Starting DMap, and these items will begin pre-equipped to the buttons you set them to.

## Brand New Features
### Overlay Subscreens
These subscreens draw over the screen at all times, both during play and the active subscreen.
As usual, widgets can have the 'Display' settings on widgets to change their visibility while the active subscreen is up, down, and scrolling.
This can be used for various things, such as:
* Displaying your current keys over the corner of the game screen, either using a 'Counter' for a number of keys or a 'Gauge Piece: Counter' to actually physically display each key.
* Displaying button items or other similar widgets transparently over the game screen, similar to LTTP

### Active Subscreen: Pages
You can now add multiple PAGES to Active Subscreens! You can either set buttons (like L and R) to cycle pages, or trigger page transitions by pressing a button on an appropriately configured widget. Changing between pages will use one of currently 3 animation styles:
* Instant (It just jumps right to the other page)
* Slide (Both pages slide in the same direction, the current page going offscreen as the new page comes onscreen)
  * Direction and Speed (in px/frame, with 4 decimal places) are configurable for this transition type.
* Pixellate (Seemingly-but-not-actually random pixels from across the screen change bit by bit from the old page to the new page)
  * Duration is configurable for this type, in frames, as well as the "Invert", "XOffset", and "YOffset" parameters. These parameters only change the pattern of pixellation by altering the formula used to create the pixellation pattern.

By default, the Selector is not drawn during transitions- but this can be toggled as a checkbox on each transition.

### Select Any Widget
Instead of only being able to move the cursor to "Current Item" objects (now renamed to "Item Slot"), the cursor can now be set to move to ANY widget you want it to! This has some nice interactions with other new features....

### New Selector Features
The selected widget can now be set to:
* Have overridden selection text, which will be displayed in the "Selected Text" widget (formerly "Selected Item Name")
* Start a page transition animation on button press
* Run a generic frozen script on button press

Yes, you heard right, there is now SOME level of scripting on the engine subscreen, even if not much.

### Gauge Piece Rework
Life and Magic gauge pieces received a MASSIVE overhaul, and the "Gauge Piece: Counter" has been added to allow gauges for ANY counter! All of these behave identically to each other, except for these differences:
* Magic gauge still has the "Show Drain" property, which is used to make a gauge piece display conditionally based on your magic drain rate (ex. show the half magic symbol when you have half magic)
* Counter gauge lets you configure which counter to use, and how many per container to use for that gauge.
Aside from these differences, they ALL can:
* Specify a Gauge Wid/Hei, making a single widget draw _**more than one gauge piece**_, instead drawing an entire GRID of gauge pieces for you!
  * Specify an XOffset/YOffset to be applied to each row/column to create an offset-grid
  * Specify an HSpace/VSpace to space out the grid
  * Flags to specify which direction the grid "moves" in (Right to Left? Top to Bottom? Move in columns first, then rows? Snake back and forth?)
* Hide the gauge (Or only show the gauge) when you have the Infinite Item for this gauge (works the same way as counter infinite items)
* Specify a "Units per Frame" to reduce tile page usage. For instance, if "Units per Frame" is "2", then it uses half as many tiles for the gauge, as it uses the same tile for "1" as it would for "0", and the same for "2" as it would for "3", etc.
* Specify frames/speed/delay for an animated gauge
* Specify an animation CONDITION, wherein the gauge will only animate if it is above or below a certain value (either as a hard value, or as a percentage of being full). Additionally, you can specify it so that it skips the first frame of the animation when the condition is true.
  * A good example of how you can use this, is to have your life gauge only animate when your health is critically low, and use the skip first frame feature. This way, normally, your life gauge uses a single still tile- but when you reach critical life, it starts using the second tile in the animation instead (as well as any more if you supply more of an animation). This would allow for, say, cracked heart containers, blood dripping from heart containers, etc, as low-health visual effects.
* Specify "Full Tile" mode, which causes the gauge to use full tiles instead of mini-tiles, becoming twice as wide and twice as tall in the process.

### Counter Addition
Counters can now have a "Max Digits" specified, and if the counter has too large a value to fit in that many digits, it will instead display that many digits as all 9s.

## GUI Work
#### The Subscreen Lister
The dialog where you select which subscreen to edit is now upgraded to the new dialog system. This dialog now shows you _**3 separate lists**_ for the 3 different types of subscreen!

### The Subscreen Editor
* Now somewhat auto-resizes itself situationally. This means it will be smaller for passive subscreens, larger for overlay subscreens, and will adjust to font changes.
* Now has text displaying information about the currently copied widget
* When editing an Active Subscreen, a whole new set of buttons for adding/removing/changing Pages is present.
* R-Click menu has been entirely revamped, with many new options added.
* R-Click menu now also exists if r-clicking in a spot that has no widget, which previously would give no r-click menu at all.
* Slight tweaks to the existing menus
* New Menu: Options.
  * Options->Mouse Settings allows you to change how the mouse behaves in the subscreen editor. You can choose between "Classic" (for the old behavior), or "Modern" (the new default, reworked behavior). Notably, in the Modern behavior, you are able to click-and-drag widgets around the subscreen editor.
  * Subscreen Settings dialog, allows you to specify settings specific to the subscreen. Currently only has settings for Active Subscreens, where some settings related to swapping pages are housed.
* Several new "View" menu options, such as previewing what it would look like if every counter were full, or if every max counter was 65535, or if you had the "Infinite Item" for every counter, etc. Also includes an option to toggle "Show Unowned Items". If off, the editor display will show only the items as you have in Init Data.

### The Widget Properties Dialog
Slight spacing tweaks, every widget now has an additional tab for selection-related settings. More widgets will use tabs for formatting now, giving the dialog a bit more breathing room overall.

   >&nbsp;
   >Relevant changes:
   > - refactor: Rewrite the entire engine subscreen backend (WIP) [`872925132`](https://github.com/ArmageddonGames/ZQuestClassic/commit/872925132a58f1e893481e9ed747a4a5f99fe374)
   > - feat: some subscreen GUI work, new buttons for page editing [`7e155ec83`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7e155ec83d6652f1e21c4da0a7853f4adcd2591e)
   > - feat: major subscreen editor gui additions [`f8a673431`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f8a67343127ee9f5e799eeaccefce10835890baf)
   > - feat: More subscreen work, generic scripts on buttonpress and custom selectiontext [`ac5f25f18`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ac5f25f186294d2cc8059ce80b2cd51549f7c7f3)
   > - feat: ton more subscreen work [`e935320e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e935320e4f2ecbfba267438aa19b1b75376a7f70)
   > - feat: new life gauge settings [`99462bf6b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/99462bf6b013c453280f9c1e932197a2711d80f7)
   > - feat: new subscreen features relating to counters, gauge pieces, and the 'View' menu [`7d54ca59b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7d54ca59b3e777de1f3681dd5b341a4cfb07ba43)
   > - feat: subscreen settings dialog, buttons to change pages [`9b60dc98b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9b60dc98bcc4adc1b25db2764dc6a0373e8fe560)
   > - feat: allow selectable subscreen widgets to go to another page on btnpress [`82aee4b29`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82aee4b293d4905368b0fc83bef12fc6955070c7)
   > - feat: subscreen page transition animations [`d8b22db8a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d8b22db8a7a991f04936e245ba89cb0ca7bd8325)
   > - feat: Add 'Overlay Subscreens' [`82a7b0000`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82a7b0000f2646ae11c4b21b850c95b3a1df8df0)
   > - feat: Overlay Subscreen settable in dmap editor [`e7b77dab0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e7b77dab05934ab86058e5df36f4b02234d47718)
   > - feat: Copy/Paste/Save/Load rclick menu for subscreens [`c3a23dbdb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c3a23dbdbda1d9b5790a05eb952f1c0009894259)
   > - fix: subscreen rng offset [`dfbcaa3ff`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dfbcaa3fffedcc16bd6cf0b41d68f7d81f7b195f)
   > - fix: null dereference [`f9d950fe6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f9d950fe6140742e30555b9cd5792e3d5bb0d870)
   > - fix: cursor selector offset [`536748569`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5367485691d2ea2ea4d57fa4063acfd04079da28)
   > - fix: subscreen save/load errors [`e806cae7f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e806cae7f5ddf030af0642da983357f81a8cefcd)
   > - fix: some oddities with item slots [`47e634138`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47e6341380dfe9b799ff726f2090cd0144492fb5)
   > - fix: more oddities with item slots [`064395320`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0643953209cff830019cd5d31d1a9b68dd216701)
   > - fix: magic meter x offset [`06e578791`](https://github.com/ArmageddonGames/ZQuestClassic/commit/06e57879125f68944e04e4ce85bdbed1493fdb29)
   > - fix: itemcache/override related fixes [`9ca4eb0ec`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9ca4eb0ec52051f943a73093b4460a364e7115b9)
   > - fix: button item misalignment [`bc9f8abf7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bc9f8abf7e93455a8746fef4ccbae0464da50a26)
   > - fix: some more subscreen related replay errors [`b25433e8f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b25433e8f952380be74b3732ec14e39dd9366e8a)
   > - fix: subscreen related button item stuff [`ad997e2b9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ad997e2b9d2ab8253cb38e01d3569a3807402a77)
   > - fix: more subscreen related replay errors [`f13ef43ca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f13ef43cad26faf26220f9bd16e68f8cef1dc983)
   > - fix: compat qr item 0 being visible on buttons [`47c7a6d3a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47c7a6d3a4634b94033b28a9d2f37c81c11661a5)
   > - fix: typo in previous commit [`7a8ae5e27`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7a8ae5e27ecc80faafd3ea8b42c687b749576691)
   > - fix: more subscreen fixes [`e646db354`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e646db35475f60d03d7166023e33339afb35b766)
   > - fix: itemcache bullshit errors [`23d96075f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/23d96075f80c1e8160fa09dbfdef857d92b4abde)
   > - fix: selector stuff [`0ea092e6d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0ea092e6dd39ca416bbb91685a613bb14f374958)
   > - fix: some item animation offsets [`aee731bd8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aee731bd8b1197474821211fed7a0a5b3e9856e3)
   > - fix: selector offset errors [`20f343644`](https://github.com/ArmageddonGames/ZQuestClassic/commit/20f343644494c8e90d2777edfdc440efef7b880e)
   > - fix: minor counter fixes [`2db1741ed`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2db1741ed3a2a15b15913fabd8fc2fa34ba3bfa3)
   > - chore: clean up some subscreen item animation code/replay errors [`97be172fa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/97be172fa33162acb2f6c12b18d781a65961ca0a)
   > - refactor: convert subscreen widgets to new constant system [`2a7bc9778`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a7bc9778892e137e94f3fa0aee0c4ba71fb471f)
   > - refactor: more subscreen replay/type fixes [`fd5a735b0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fd5a735b03f968df55e530fa7c5fd04c9e68a4c4)
   > - refactor: work on subscreen cursor selection [`1283ce09d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1283ce09d936a82f3ffa5c4cf4d36d8531e7c4c3)
   > - refactor: split subscrwidget flags into two vars, trim gridflags [`a3db000a2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a3db000a236ea5bf19c40ed9e864885b500d9658)
   > - refactor: improve subscr_props dialog arrangements [`2162adf82`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2162adf82d2dbc951232f9b704ad127b87b5e2ed)
   > - test: update 'nes-remastered.zplay', item flash animation offset [`93c563aa2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/93c563aa2e6e7f91627aae4fa3e75fdfc9a1fde2)
   > - test: Update/Rerecord 3 playground replays to fix quick-assign tests [`2c8906b5d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2c8906b5d7d63af792f505ba31fd1a808f063ac7)
