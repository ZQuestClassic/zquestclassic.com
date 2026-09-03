---
title: 3.0 Prerelease 217 2026-09-02
description: 
date: 2026-09-03T05:20:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.217%2B2026-09-02/3.0.0-prerelease.217%2B2026-09-02-linux.tar.gz
    name: 3.0.0-prerelease.217+2026-09-02-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.217%2B2026-09-02/3.0.0-prerelease.217%2B2026-09-02-mac-universal.dmg
    name: 3.0.0-prerelease.217+2026-09-02-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.217%2B2026-09-02/3.0.0-prerelease.217%2B2026-09-02-windows-x64.zip
    name: 3.0.0-prerelease.217+2026-09-02-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.217%2B2026-09-02/3.0.0-prerelease.217%2B2026-09-02-windows-x86.zip
    name: 3.0.0-prerelease.217+2026-09-02-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 381808105
tag_name: '3.0.0-prerelease.217+2026-09-02'
channel: '3'
tags:
  - releases
---

# Features

- Enemies can have a 'Secondary Fire Sound' [`d8e8ec18f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8e8ec18f75da023e97810933e8a573bd6ddd5ed)
   &nbsp;
   >The 'Fire Octo' death effect fires a weapon other than the enemy's own - the one set by 'Weapon Offset' - and used to play that weapon's hardcoded sound. Ever since enemies got a configurable 'Fire Sound' it has reused that one instead, so the death burst could only ever sound like the enemy's normal attack, or be silent.  
   >
   >The enemy editor now has a separate 'Secondary Fire Sound' for it.  
   >
   >Broken when added in 3.0.0-prerelease.66+2024-09-01 ([e71f8dc99e](https://github.com/ZQuestClassic/ZQuestClassic/commit/e71f8dc99e)). 
   >

### Editor

- Support URL buttons in info popups [`450339cac2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/450339cac20b8cc7c8c197b2289629a436aaba55)
   &nbsp;
   >This allows us to easily put buttons that open URLs in browser directly in help text, useful for ex. linking to web docs. 
   >

### ZScript

- Annotations can use constants [`fa0d835656`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa0d835656b585fa57bbd4feaa0bad4105039ced)
- `@ExportEngineValue` to use special GUI for exports [`165f0c40d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/165f0c40d5e748c7259336a6aae93e7d612ccbf3)
   &nbsp;
   >Allows using tile selectors, combo selectors, color selectors, and numerous specific engine drop-down lists for script export variables. 
   >
- @ExportDropdown / @ExportBitflags / @ExportLongBitflags [`eceb426040`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eceb4260403bf2788d589a183c6607b1bb08d06f)
   &nbsp;
   >Allows export variables to use *custom* dropdown lists and bitwise checkbox sets (either standard or long bitwise). 
   >
- `@ExportEnum` [`dbb700b292`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dbb700b292b3d374c0209327fd884565b0980f92)
   &nbsp;
   >Allow exporting an enum as a dropdown/bitflags export, without needing to individually name every value yourself. 
   >
- Npc and npcdata 'WeaponSecondarySFX' [`488183e049`](https://github.com/ZQuestClassic/ZQuestClassic/commit/488183e0491eb5aae200ecfc199eb7eebb33c59f)
   &nbsp;
   >Reads and writes an enemy's new 'Secondary Fire Sound' - the sound played when it fires a weapon other than its own, which today only the 'Fire Octo' death effect does. 
   >

# Bug Fixes

- Minor dialog window / grid size miscalculations [`7fefc2e753`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fefc2e753a39f2befca98f90a43fe13f81d4115)
   &nbsp;
   >This should fix certain things in some GUIs appearing slightly squished. 
   >

### Player

- Enemy 'Fire Sound' now plays for every weapon type [`88691fe0f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88691fe0f5fdf5c4b44e01198bf2b7f25af62f3c)
   &nbsp;
   >The enemy editor's 'Fire Sound' only actually played for flame, wind, magic, ice, and script-type weapons - and for fireballs and rocks only with 'More Sound Effects' enabled. Every other projectile (arrows, swords, boomerangs, bombs, etc.) fired silently no matter what sound was set. It now plays for every weapon type.  
   >
   >Quests saved before this change are normalized on load: fire sounds that never played (including values auto-seeded by an old upgrade path) are cleared, so existing quests sound exactly the same. Set the sound again in the enemy editor to opt in.  
   >
   >Broken when added in 3.0.0-prerelease.66+2024-09-01 ([e71f8dc99e](https://github.com/ZQuestClassic/ZQuestClassic/commit/e71f8dc99e)). 
   >
- Bomb blasts ignored 'No Collision When Still' [`c79dfffed5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c79dfffed545abe1c732816bd0e51e23dca45f6f) [Discord](https://discord.com/channels/876899628556091432/1532025037287198821)
   &nbsp;
   >A lit bomb with the 'No Collision When Still' weapon flag exploded harmlessly: the blast kept the flag, and a blast never moves. The flag now only applies while the bomb is still a lit bomb, so a bomb can lie around safely and still hurt when it detonates. Affects both player and enemy bombs.  
   >
   >Bug introduced when the flag was added in 3.0.0-prerelease.120+2025-07-19 ([edb610c735](https://github.com/ZQuestClassic/ZQuestClassic/commit/edb610c735)). 
   >

### Editor

- Hotkey cheatsheet overflowing off screen instead of fitting the window [`6876c3f24b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6876c3f24bdf7f89bf72287e1b069c583dbcfba4)
   &nbsp;
   >The Shift+/ hotkey cheatsheet drew a fixed three-column layout over the whole window, so with a small window or many bound hotkeys the columns ran past the edge and were cut off. The panel now sizes itself to its content, centers over a dimmed backdrop, and uniformly scales itself down when the content is too wide to fit.  
   >
   >Bug introduced when the hotkey cheatsheet was added in 3.0.0-prerelease.11+2023-12-10 ([a491736232](https://github.com/ZQuestClassic/ZQuestClassic/commit/a491736232)). 
   >
- Hotkeys grouped under the wrong heading in the cheatsheet [`9fdb9907c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fdb9907c6d05dc4ff8944818ee1f237fbe54e2f)
   &nbsp;
   >Several hotkeys sat under a heading that did not describe them - the screen info / combo info / CSet / type toggles and "Stop Tunes" under Dialogs, "Video Mode" under Actions - and "Go Back"/"Go Forward", "Screen Notes", "Browse Notes" and "Show Hotkeys" fell through to "Misc.". The two large catch-all groups are also split up: the drawing modes and the layer / palette / CSet / flag selection get their own headings, and the 74 dialogs are split by what they edit.  
   >
   >Layers and screen palettes are drawn as one row per run of keys ("Edit Layer 0-6") rather than only showing layer 0 and palette 0 - palettes A-F, on Ctrl+Shift, were not documented anywhere at all. A group that spills into the next column now repeats its heading there.  
   >
   >Bug introduced when the hotkey cheatsheet was added in 3.0.0-prerelease.11+2023-12-10 ([a491736232](https://github.com/ZQuestClassic/ZQuestClassic/commit/a491736232)). 
   >
- Wrong help text shown for eight hotkeys when rebinding [`12754c08af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12754c08afc86265326046f74a4722053da0b707)
   &nbsp;
   >The Rebind Hotkeys dialog showed MIDIs, Misc Colors, New, Options, Default Palettes, Maze Path, Play Music and Apply Template to All the help text belonging to the next hotkey in the list - "Options" read "Create a new .qst" - and the last had no text of its own at all.  
   >
   >Bug introduced when the hotkey and favorite command systems were merged in 3.0.0-prerelease.2+2023-11-15 ([47617f7ad4](https://github.com/ZQuestClassic/ZQuestClassic/commit/47617f7ad4)). 
   >
- Typo in combo move warning [`6265ce41d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6265ce41d417acf08e1ae3eb6bf2f2d103cc1b8f)
   &nbsp;
   >when warning about a Door Combo Set, the warning said "the following screens", when it should say "the following door combo sets" 
   >

### ZScript

- Ensure instance variable order [`5762d9f4cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5762d9f4cfec68ac5f58a1b6e3d60bcaf2731c1c)
   &nbsp;
   >Instance variables will now always be ordered in the same order they are declared. 
   >

# Documentation

- Add 'added in 3.0' markers to relevant parts of `Scripts` page [`462d92de4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/462d92de4b522bd682e3f1cee2c4d37a3b331c4a)

### ZScript

- Add notes for how to get instances of each class [`305e17e928`](https://github.com/ZQuestClassic/ZQuestClassic/commit/305e17e9288f8389484ce23c390a9319e489ddd3)

# Build

- Make checklist constant `constexpr` [`f5f1235562`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5f1235562da7f45d41a73379cca2de0862392a9)

# Chores

- Include packfile.h less [`35ab4da800`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35ab4da8004fd5029a9daf818f84869dcf95c48c)

# Refactors

- Move a bunch of packfile code from .h to .cpp [`bbeaf3f37c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbeaf3f37c41a81260b6c9dbe3cf1eec01b4673e)

### Editor

- Hotkey cheatsheet group tables [`5ca34dd851`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ca34dd85142ad5481248ac970f3fe1c31db8e43)
- Move `Exports` tab left of `InitD[]` tab [`11bf4a741f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11bf4a741fb506a516a917e5e3b0df9fd17a17cd)

# Tests

### ZScript

- Add coverage for the custom export annotations [`db73cc5e2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db73cc5e2ae2f4ec224d9a2b1701e8c6eec79cc2)

# Misc.

- Improve checklist dialog per-column calculation [`bc4c0bafad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc4c0bafad436d6507bf08f22f8d562411fdf44d)
   &nbsp;
   >When no number per-column has been manually specified, the default now attempts to create columns as evenly sized as possible, up to a max of 10 entries per column. 
   >
