---
title: 2.55.14
description: 
date: 2026-05-02T05:54:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.14/2.55.14-linux.tar.gz
    name: 2.55.14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.14/2.55.14-mac.dmg
    name: 2.55.14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.14/2.55.14-windows-x64.zip
    name: 2.55.14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.14/2.55.14-windows-x86.zip
    name: 2.55.14-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 316657997
tag_name: '2.55.14'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Player

- press B to backspace in name entry grid mode [`744499aaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/744499aaf2830da67d5de9e99aa1976e4d5ae823)
- improve grid name entry mode [`1f51cc913`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f51cc913541f5a09ea3c77d9948bbc4ab8823e2)
   &nbsp;
   >* Show on-screen controls for insert, backspace, confirm
   >* Press 'Tab' to use keyboard to type name
   >
- gzip compress uploaded replays [`6153fb25f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6153fb25f853dfe34a0b95a121593395b8ed441c)
- update replay versions on save load [`c730b0ee7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c730b0ee7c44ace95d380e2b559746c9cb643f61)
   &nbsp;
   >Previously, save files associated with replay file were permanently pinned to their initial replay version. This prevented older saves from benefiting from subsequent engine bug fixes. The replay version now dynamically updates when a save file is continued, seamlessly bringing new fixes to ongoing playthroughs without breaking existing replays. 
   >

### Editor

- add 'Open Tile Page' to Combo Pages right-click menu [`419fdbfc3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/419fdbfc3167dc66663ea481214be179737aa326)
- Add 'Select' to combo page right-click menu [`2e0e6f780`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e0e6f7808e43fee3197582e3c6f8352120cbf4a)
   &nbsp;
   >On using "Select":  
   >
   >- Your current Combo + CSet you are drawing with are changed to the
   >  right-clicked combo.
   >- Your current Drawing Mode is changed to Normal.
   >- The active Combo Column will scroll to the selected combo.
   >- The combo page dialog closes itself (so you can go use the selected
   >  combo quickly). Useful to quickly start using a combo / section of
   >  combos via the pages interface.
   >
- "DMap Levels" quest report, lists which DMaps are tied to each level [`0af2a6d7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0af2a6d7fc59f43a7bda355c2d711bb0613b3d9c)
- show screen state carryovers in 'What Links Here' tool [`e7992a256`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7992a256add23192ce49aa5ec78758fd8e6e78f)
- improve quest auto-backup and timed auto-saves [`fda90c526`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fda90c526d27d078584662bc8954a5bfbf4fdc2a)
   &nbsp;
   >* Enable auto-backup by default.
   >* Save all backups and auto-saves to a `YourQuest.qst.backups/` folder.
   >* Include timestamps and ZC version numbers in backup filenames for
   >  easier identification and recovery.
   >* Implement read-only protection to prevent accidentally saving over
   >  files loaded from a backup folder.
   >
- typable searchbar in some old lister dialogs (ex. level palettes) [`8dd17177b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8dd17177bbc76f7ab9f6057e7b2b719a4ab71a5e)

# Bug Fixes

- prevent crash from listers using too much memory [`8ffe102bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ffe102bb03ddde7ef175beb0f2af87c3cfe5cd7)
- prevent crash when loading music with non-ASCII filenames [`782cbb596`](https://github.com/ZQuestClassic/ZQuestClassic/commit/782cbb596a07899624cd189fb728f079aae6141c)
- [mac] prevent crash from deeply nested dialogs [`a6aa14dd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6aa14dd06ddaf00292bbd941dbd3cf905d35e86)
- prevent rare crash by checking if time mutex exists [`344d442b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/344d442b6948492e9fd0d3f7ef2d4216eacc182f)
- compat issues with quests before 2.53 related to owning mcguffin items [`5e87baedf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e87baedf535653f01fadf5f41ce6755a82f76e8)

### Player

- check water correctly when scrolling down [`a277612ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a277612ff4c2a9ad604174382d5da6c1083b765d)
   &nbsp;
   >When scrolling down while swimming, the player could sometimes incorrectly use a walking animation rather than swimming.  
   >
   >This regressed in 2.55.12. 
   >
- minor index logic error related to subscreens [`69d4ce5e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69d4ce5e194912da12b1bccb8156892e50ea5321)
- 'Show Hitbox' cheat hitboxes being slightly misaligned [`6ab87bf89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ab87bf89d63b2ee7afa20923c6c442945d63d7b)
- show cheat hitboxes for invisible enemies [`fb0983d34`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb0983d348c04ea2bbaa83834750eb8105190f02)
- prevent crash when combos trigger [`dface2a9a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dface2a9acb015af83a8275249fa540359853679)
   &nbsp;
   >Regressed in 2.55.13. 
   >
- melee weapon hitboxes lingering forever based on 'Live One Extra Frame' rule [`3ebb28f73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ebb28f738edb5a3b6abbb815c1966c8c3675be0)
- graphical errors in older quests [`37475b9f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37475b9f2c7a9ccfb5def77923da66985cb117b3)
   &nbsp;
   >Many older quests were incorrectly drawing the player, held items, or some enemies and weapons over the subscreen.  
   >
   >Regressed in 2.55 alpha 120 (93f25b690). 
   >
- 'slashable' combos (tall grass, etc) wrongly 'cutting' via triggers tab [`d80ca68c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d80ca68c2efa2c54115dd3c0a94ffe125e9ae5cf)
   &nbsp;
   >Due to some old half-finished code, slashables were responding to all weapons set in their combo triggers tab, even with `->ComboType Effects` not checked. This behavior has been fixed, now requiring `->ComboType Effects` to trigger.  
   >
   >Old quests loaded will automatically update any affected combos to behave as they did previously. 
   >
- Hero sometimes drowning when drown QR is off [`1bfd4172e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bfd4172ed57ec8abe43bdf4110b640ccbf171ee)
- Newer Hero Movement buggy collision re: damage combos along the top of the screen [`85a2b22f0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85a2b22f0f1425a6219a96650a5f8efd24c90cda)
   &nbsp;
   >Hitting the corner of any solid horizontally was wrongly checking the TOP of the screen for damage combos. 
   >
- 0-damage brang/hshot items not obeying script-changed damage values [`278a0f17e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/278a0f17e1f6162fb35094a372966b3b32d06014)
   &nbsp;
   >If a script changed the damage of the weapon but not the item, enemies who don't have "Damaged by Power 0 Weapons" checked would take the ITEM's damage amount rather than the WEAPON's. This also affected generic scripts changing the damage in an enemy hit event. 
   >
- Spinning Tiles not becoming the next combo [`b5d6fe0f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5d6fe0f57a86a304debbcad100d017541486ab4)
   &nbsp;
   >No idea when this initially "broke", or if it *ever worked at all*, but the help text says it is supposed to, so fixed it with a compat rule. 
   >
- statue shooters / spintiles / etc not working properly with triggers [`fd6f3baa1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd6f3baa17c0b1923e415d06a5c8224e1a1b520f)
   &nbsp;
   >triggers changing combos wasn't calling `screen_combo_modify_preroutine()`/`postroutine()` 
   >
- Sprite light radius ignoring hit offsets [`e7cb154d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7cb154d7d43af6f024ba30a5f46b78442402f44)
- prevent soft-lock in whirlwind over water [`31acb4665`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31acb4665ceda411f192ee5b2b428a1c1342dacf)
   &nbsp;
   >This regressed in 2.55.13 (b27da2ea2). 
   >

### Editor

- prevent long label from visually breaking combo editor [`5f76b941b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f76b941b77b3bcf68e0b0cbff33a5b5839bdc98)
- delete invalid command history [`9e5205318`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e52053188e76440ca4196e1425a8781146b4346)
   &nbsp;
   >When reducing the map count, the command undo/redo history were retaining entries for old maps. If attempting to undo/redo a command from a deleted map, the editor would crash.  
   >
   >Now, those entries are deleted when the map count reduces. 
   >
- prevent screen palette truncating to byte (0xFF) [`2038dc8a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2038dc8a22fb42122b5139549e66994523616662)
- Rename `Under Combo` -> `Undercombo` in many places for consistency [`c4bffbd24`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4bffbd24dbf222832030ee687e5debf3a932893)
- don't show compat QR confirmation when creating new quest [`98b53c99a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98b53c99a5c780d788ca448a250f5d64ace0d4a4)
   &nbsp;
   >When creating a new quest from an older tileset, don't show a confusing confirmation dialog about disabling compat QRs. It won't hurt a new quest to disable these QRs, and this dialog is likely to confuse new users. 
   >
- show correct combos from adjacent screens [`7d4c4f88d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d4c4f88dd0f7913699a25944451cdd76b3cb5b1)
   &nbsp;
   >When the screen editor displays combos from adjacent screens, it was randomly showing the wrong combos.  
   >
   >Regressed in 2.55 alpha 109 (be515839b). 
   >

### ZScript Standard Library (std.zh)

- set `MAX_DEFENSE` to correct value [`69e12ea8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69e12ea8cc4547765132d5b8ad11f043521e1506)
   &nbsp;
   >It should be 41, but it was 42. 
   >

### ZScript

- broken bitmap draws [`99d851094`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99d851094b6972cf8df416845c6469be4a9ebb19)
   &nbsp;
   >Some bitmap drawing methods were broken, such as masked draws used in a boss fight in Nayru's Odyssey. For that quest, it caused the boss to always be invisible.  
   >
   >This regressed in 2.55.10.  
   >
   >https://discord.com/channels/876899628556091432/1490714916439593141 
   >
- npcdata->InitD[] / WeaponInitD[] being *10000 [`6d1d92a4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d1d92a4c02271dbb6cfc57527fe1e3f83df7bb2)
- class destructors ending prematurely [`470b5bf18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/470b5bf183573b9554d14c01a6abd4218af47293)
   &nbsp;
   >When a destructor calls a user function, the script engine incorrectly ended the destructor after that function call, skipping anything that came after. 
   >
- skip JIT compiler for larger scripts [`89061ed7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89061ed7aaae4239f869e060c7df217aa5ceee35)
   &nbsp;
   >If the experimental JIT feature is on, now really large scripts are not compiled. It takes too long to compile large scripts in 2.55 so now we don't bother. 
   >
- some included headers using bad DrawCombo frame parameter [`f91768189`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f917681895518c6a75e1c426ccecac2ccf8fdc40)
   &nbsp;
   >this fixes combo draws not animating properly in ghost, tango, and EmilyMisc.zh 
   >
- add newlines missing in some error messages [`1b67f37fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b67f37fbd468f51e1b97faae25c7a3e53f06f6b)
- change `Region->OriginScreenIndex` to `int` instead of `long` [`8fd165bc8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8fd165bc8f3cbe90e58995478234e4b8e3928c76)
- add getters for `ffc::LastChangerX` and `ffc::LastChangerY` [`e00fe7fd4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e00fe7fd4d983c268ff275361babacb38ddc390d)
   &nbsp;
   >These were never implemented. 
   >

# Refactors

- [mac] unify F-keys for reset/quit [`66102a674`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66102a674b9023617bf3fc3ea9936b16fe00ed62)
   &nbsp;
   >Previously on Mac, reset/quit were mapped to different keys than on other platforms because historically F9/10 were reserved by the OS. However, that is no longer the case on modern Macs.  
   >
   >These function keys on Mac now match other platforms:  
   >
   >* Reset is now F9 (was F7)
   >* Quit is now F10 (was F8)
   >* Screensaver and Palette Toggle have been moved back to F7 and F8,
   >  respectively
   >
- speed up subscreen draws by simplifying string operations [`f710001f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f710001f8b5bb67346add56d8f395c5bf9375ff5)

### Player

- turn off replay_debug by default [`45a023a99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45a023a99df7e7eb5cf39077e290966436f9d4e1)
   &nbsp;
   >This makes replay files significantly smaller by disabling debug mode, which stores a hash for every graphics frame in the replay file. This is no longer needed for replays recorded by players so it's time to disable it. 
   >

### Editor

- format map, screen locations more consistently [`dd0ceb26c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd0ceb26c39941b01b73c925b05e013f2d16a844)
   &nbsp;
   >* Format map + screen pairs using a common format: decimal for map, hex
   >  with a `0x` prefix for screen, and spaces for legibility. Example:
   >  `19 : 0x5A`.
   >* Fix an issue in quest report tools that incorrectly used hex to format
   >  the map component.
   >

### ZScript

- increase ZASM hang threshold [`19cdd25b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19cdd25b4a5840d8def434ae6a5ba04624aa8130)
   &nbsp;
   >Every set number of ZASM instructions, the scripting engine checks if the player hit F9 or F10 to allow them to quit during an infinite loop. The default was to check every 1000 instructions, but that is way too frequent. Now, the engine checks every 100k instructions. This reduces the amount of unnecessary overhead related to checking for key events. 
   >

### ZUpdater

- disable on Mac, Linux [`a2fbc9f44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2fbc9f4483c787844b3746337d37828f65434a6)
