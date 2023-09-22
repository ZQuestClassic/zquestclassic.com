---
title: Nightly 2023-09-21
description: 
date: 2023-09-21T02:07:18Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-21/nightly-2023-09-21-linux.tar.gz
    name: nightly-2023-09-21-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-21/nightly-2023-09-21-mac.dmg
    name: nightly-2023-09-21-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-21/nightly-2023-09-21-windows-x64.zip
    name: nightly-2023-09-21-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-21/nightly-2023-09-21-windows-x86.zip
    name: nightly-2023-09-21-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 121967239
tag_name: nightly-2023-09-21
tags:
  - releases
---



# Features

### ZScript Standard Library (std.zh)

- add 'SF_LAST', convert SF_ constants to enum [`053b63911`](https://github.com/ZQuestClassic/ZQuestClassic/commit/053b639119b0269fe52aadd7773b6e295f4d7789)

# Bug Fixes

- wrong 'maxdigits' on old subscreen counters [`8c4b2b9b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c4b2b9b74442f38feb5ea31d8a4081d40cfc288)
- fixed memory leak when changing enhanced music tracks [`c9bcdb22a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9bcdb22aafff7f9a7db8105c595e9db6d8febde)
- favorite combos corruption when loading 1.92 or older quests [`cca598afc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cca598afc9e6e90691c26646a5d9653de4c395c2)
- some small errors related to subscreens/subscreen scripting [`d2721853c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2721853c482d4ad05031bcf7e529187e71a313d)

### Player

- oddities with pushblocks and pits/water [`54f0de9a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54f0de9a7bee2511809c67763fb586ad459fe6d8)
- sidewarps at edge of map not working with walk-through-walls cheat active [`b4cc7cbb6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4cc7cbb6a44718aa8e0d97b47a1ba8895863960)

### Editor

- fixed crash in combo wizard for signposts [`dd826371d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd826371d1acee30cfa375bef538191e6894e85b)

### ZScript

- fixed paldata mix() not flagging changed colors as used [`7cb103ba6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cb103ba65d324a980315a94dd7de0e10ed6e857)

# Build

- include licenses in package [`c7a2a13a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2a13a3e5e6d86fe1bb752a9cc3c29c29f372f)

# Refactors

- removed leftover references to favorite combo aliases [`8a122dd40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a122dd40e3d3bdd9db14149c98e9683687a599b)

# CI

- disable sound for linux replays [`0c6b1c77e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c6b1c77e000a835e1662ea9b0f173cf9a417597)
   &nbsp;
   >`install_sound` randomly starting failing in CI. 
   >
- create web.zip and upload to GitHub release [`ffb2f56cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffb2f56cf8581229c48922bb50279d107e1dcd93)
- set concurrency for release workflow [`335bc90c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/335bc90c1b51ef74fa725ad42d5b6cb1bbae4075)

# Sectioned Changes
<details>
<summary>Relational Combos Update</summary>

# Relational Combos Update
The old "Relational" and "Dungeon Carving" modes have been replaced by a new drawing mode that can handle various relational drawing behaviors. Alongside this, favorite combos list has been expanded and improved to make designing screens faster than ever before.

## Autocombos
The Autocombo, similar to the "Alias" and "Combo Pool" drawing modes before it, adds a list of user defined patterns which are used for relational drawing. Each autocombo has a set of combos used for the pattern, a combo for erasing from the pattern with right click, and a display combo which affects how it will appear in the editor for user convenience. They can also auto generate a pattern from a default arrangement of combos like how the older drawing modes worked, but do not need use combos placed in that order.

Unlike most other features, autocombos can read and modify combos on adjacent screens with the "Cross Screens" flag.

Autocombo behavior can be selected from the following 9 types:
* The "Basic Relational" type is a standard relational mode with 4-directional tile awareness.
* The "Relational" type works like the old relational drawing mode with 8-directional tile awareness. It also has a flag to use the old combo layout when generating.
* The "Flat Mountain" type is the simplest of the set, with only 6 tiles representing the corners, sides, and top.
* The "Pancake Mountain" type is for drawing flat topped mountains, formed by drawing the edges and then extruding the side faces downwards.
* The "Fence" type is similar to "Pancake Mountain" but without the combos for extruding sides.
* The "Dungeon Carving" type works like the old dungeon carving drawing mode, drawing 2 tile high dungeon walls. It also has a flag to use the old combo layout when generating.
* The "Complex Mountain" type has you fill in the top layer of a mountain and then fills out the bottoms, backs, and sides with a 3/4 perspective. Unlike the other sets, this one is imperfect and may require some manual correction, but it makes using the hardest mountain sets in common usage far easier.
* The "Positional Tiling" type lets you form a rectangular pattern that it then tiles based on X/Y position within the map. With shift + click you can set where the top-left corner of the pattern is located.
* The "Replace" type lets you set an arbitrary set of before and after combos to replace when drawing. Instead of erasing, right click will reverse the process.

## Favorite Combos Expansion
The favorite combos list has also been greatly expanded. It now allows for 9 pages of combos. Right clicking the page selector buttons will create a drop-down allowing you to jump to any page.

It can also now hold entries from any of the four drawing modes. When selecting an entry from a different drawing mode, the current mode will automatically update to match. This should make switching from relationally drawing a screen's layout to placing down large objects as aliases to adding finer details a breeze. Each of the three special drawing modes will have icons drawn over their favorite combo entries, which can be disabled with the "Show Favorite Combo Modes" option in `Ect->Options...`.

Lastly, adding favorite combos now respects the AutoBrush setting, making adding large blocks of single combos to the page far quicker.

</details>
