---
title: 2.55.18
description: 
date: 2026-11-19T22:30:10Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.18/2.55.18-linux.tar.gz
    name: 2.55.18-linux.tar.gz
    platform: linux
    size: 29272667

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.18/2.55.18-mac.dmg
    name: 2.55.18-mac.dmg
    platform: mac
    size: 29153106

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.18/2.55.18-windows-x64.zip
    name: 2.55.18-windows-x64.zip
    platform: windows-x64
    size: 28046098

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.18/2.55.18-windows-x86.zip
    name: 2.55.18-windows-x86.zip
    platform: windows-win32
    size: 26735485
prerelease: false
id: 452160656
tag_name: '2.55.18'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

- `Once Per Weapon` combo trigger weapon effect [`6182f132ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6182f132acc9be0fbf735ee7080873ff7d68f163)
   &nbsp;
   >Combo triggers have a new `Once Per Weapon` weapon effect: once a weapon has triggered the combo, that weapon doesn't trigger it again. Until now only triggers with certain effects (secrets, a combo change, a copycat, ...) worked that way, and any other trigger, like one that only plays a sound, fired again every frame the weapon touched the combo. 
   >

# Bug Fixes

- prevent crash when closing the program [`bb61e7da9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb61e7da9eae13d63151c4d20d52f6dd67d8a037)
   &nbsp;
   >Fixed a crash that could happen when closing the player, editor or launcher, most often on Windows.  
   >
   >Bug introduced when Allegro 5 replaced Allegro 4 in 2.55-alpha-108 ([a7fccd1f21](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7fccd1f21)). 
   >
- [linux] prevent crash on startup when there is no ALSA MIDI sequencer [`501b19485c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/501b19485cc713bb99ca6050c8baaed5c017c5f6)
   &nbsp;
   >Bug introduced when Linux support was added in 2.55-alpha-112 ([75d202a5af](https://github.com/ZQuestClassic/ZQuestClassic/commit/75d202a5af)). 
   >
- [win] support file paths with non-ASCII characters [`4537fe9799`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4537fe979950ad693d0a7c0add1cd9044f76ed26) [Discord](https://discord.com/channels/876899628556091432/1563898092930072667)
   &nbsp;
   >On Windows, a quest in a folder with an accented name (like "Créateur") could be opened in the editor, but launching test mode failed with "-test invalid parameter: 'quest_file_path' ... but that file does not exist!". Other file loads had the same problem.  
   >
   >Bug introduced when test mode was added in 2.55-alpha-103 ([77fc0e7ffc](https://github.com/ZQuestClassic/ZQuestClassic/commit/77fc0e7ffc)). 
   >
- prevent out-of-bounds read when loading certain NSF music files [`586a86d30e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/586a86d30eee30b651f783b629bc86093665a8a2)
   &nbsp;
   >An NSF file that enables every expansion sound chip could make the music player read past the end of an internal table as the file loaded. 
   >
- stop long log messages from writing past their buffer [`0672b60931`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0672b60931a6d6cd2576812b20a94237edf72178)
   &nbsp;
   >A message longer than 1024 characters overflowed the buffer it is formatted into. 
   >
- terminate door combo set names read from quests [`6e0d214ed5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e0d214ed5cd0ae48e229830e0623cfd98b1e0a5)
   &nbsp;
   >Regressed in 2.55.8 ([1a8794c713](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a8794c713)). 
   >
- read the string count of a 1.92 quest as unsigned [`0c31ed70d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c31ed70d3eb629c239e9a6a5522884e1ac4758a)
   &nbsp;
   >A 1.92 quest with more than 127 strings could crash the editor on platforms where a char is signed, and let scripts use string ids past the last string.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- stop reading past the end of a MIDI when showing its info [`7c980b15c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c980b15c5d287dd974178093d9ece3ecccc97a0)
   &nbsp;
   >A MIDI track that ends in the middle of an event (a truncated or corrupt file) made the MIDI info dialogs read memory past the track, which could show garbage text or crash.  
   >
   >Bug has been present since the initial commit ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- keep SPC, GBS and VGM music playback within memory [`78cc8ee45f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78cc8ee45f2f18f72a6a8cafcc02fd0c3cb609c7)
   &nbsp;
   >Bugs in the game-music-emu library, found by fuzzing, are now patched:  
   >
   >* SPC: a sample directory at the top of memory read past the emulated
   >  RAM.
   >* GBS: a program counter that ran past $FFFF read past the CPU's memory
   >  map.
   >* VGM: a PCM seek, a data block's size, or the data or loop offset in
   >  the header could point the reader anywhere in memory.
   >* VGM: a file that ends in the middle of a command read past its end.
   >* VGM: a write to a YM2612 chip that the header never set up used
   >  uninitialized memory.
   >
- clear a damaged quest's invalid screen enemy on load [`32ee7b8ff0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32ee7b8ff08788a5afb56a2de4216fe552827d55)
   &nbsp;
   >Loading a quest cleared screen enemies with an id over the number of enemies, but missed an id exactly equal to it, which could crash the player when the screen was entered. Only a damaged quest has such an id. Screen->Enemy[] and mapdata->Enemy[] had the same gap, and now give an error for that id too.  
   >
   >Bug introduced when invalid screen enemies were cleared on load in 2.55-alpha-83 ([68b5ec66fd](https://github.com/ZQuestClassic/ZQuestClassic/commit/68b5ec66fd)). 
   >
- keep a DMap's level within the number of levels [`5fbe46bfea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5fbe46bfea35f3a34908b4892aa2edd7ea43f419)
   &nbsp;
   >A DMap's level is used to look up the level's items (map, compass, boss key, Triforce) and keys, but it could be set past the last level, by a damaged quest or by a script through dmapdata->Level or Game->DMapLevel[]. Entering such a DMap crashed the player. A damaged quest's level is now cleared to 0, and scripts get an error.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- keep a screen's warp DMaps within the number of DMaps [`8c94d593ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c94d593ba97741ba3e71aa43b4cf9664d0d3f7f)
   &nbsp;
   >A tile or side warp could have a DMap past the last one, from a damaged quest or a script setting Screen->TileWarpDMap[] or SideWarpDMap[] (or the mapdata versions), and warping with it could crash the player. A damaged quest's warp DMap is now cleared to 0, and scripts get an error, as SetSideWarp() and SetTileWarp() already did. The Screen versions also give an error for an index out of range, instead of writing outside the screen.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- don't load a layer from a map that doesn't exist [`c7c4b10d2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7c4b10d2bb2b975bf66126999be4cb11ab55b30)
   &nbsp;
   >A screen layer set to a map past the last one could crash the player when the screen loaded. This could come from a damaged quest, from a script setting Screen->LayerMap[] or mapdata->LayerMap[], or from lowering the map count in the editor, which fixes only the current screen's layers right away and the others only once they are viewed. Such layers are now turned off when the quest loads, and scripts get an error. Screen->LayerScreen[] and mapdata->LayerScreen[] also accepted one screen past the last, which now gives an error too.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- keep warp rings within their warps and DMaps [`e05e1a4b57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e05e1a4b578e1c61965103d3b2ee4db4696ce703)
   &nbsp;
   >A warp room or whistle with a bad warp ring could crash the player. This happened with a warp room whose screen Catch All value isn't a valid ring, a whistle whose warp ring attribute isn't one, or a damaged quest whose ring lists too many warps or a DMap past the last one. Now such a warp room has no warps, such a whistle uses the last ring (as with no whistle), and a damaged quest's rings are kept in range.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- don't read garbage from a damaged quest's build details [`ec276ed340`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec276ed340aa00481084646df2d9fac1a55577a6)
   &nbsp;
   >A damaged quest's template path or build details (compiler, product, module, developer, build date, time and timezone) could read random memory when shown, because their text had no end marker. They are now cut off at their field size, as the title and author already were.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- handle a DMap on a map that doesn't exist [`d7cd3fb620`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7cd3fb620c32e02d348f5ebd3f532726617f590)
   &nbsp;
   >A damaged quest could have a DMap on a map past the quest's last one, and loading or warping to that DMap could crash the player. That DMap now uses the first map.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- a combo type past the last one from the quest read past the combo type table [`7c239c5b2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c239c5b2d25c8297a81edc47780937ed4a3dae8)
   &nbsp;
   >A combo's type can be any number up to 255, from the quest or set by a script, but the table of combo type properties only had room for the valid types. Higher types read past the table wherever the game checks those properties, for example when checking for water or solid ground, and combodata's type properties wrote past it.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- dropping an item from an invalid dropset read past the dropsets [`c133fc75a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c133fc75a78870b0ff23737defe6c3f3cd2d8f30)
   &nbsp;
   >An enemy's npc->ItemSet, a combo's dropset attribute, and the dropset given by a generic script's item drop event were not checked before being used to pick a dropped item. A number past the last dropset picked an item from the memory after them. Now nothing drops.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- an invalid continue or entrance dmap read and wrote outside the dmaps [`514d2f0acf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/514d2f0acf5760f485d76c12430664681f3da483)
   &nbsp;
   >The dmap to continue at, from the save file, the quest's starting dmap or Game->ContinueDMap, and Game->LastEntranceDMap weren't checked. The game would start or continue on that dmap, reading past the dmaps and marking it visited in memory past the list of visited dmaps. An invalid continue dmap now acts as dmap 0, and both script variables log an error for an invalid dmap.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- drawing an invalid 8x8 tile read past the tiles [`7b96969fb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b96969fb32afead396ee6a1a5a4fd565a4cea1c)
   &nbsp;
   >The functions that draw a quarter of a tile didn't check the tile, the way the ones that draw whole tiles do. Subscreen widgets, frames and minimap tiles from the quest could pass one past the last tile, which read tile data from past the end of the tiles and drew from wherever it pointed. Such tiles are now not drawn.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- invalid palette numbers loaded colors from outside the palettes [`5449f9fd62`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5449f9fd62dcd78a07031bbca121f077eb2bd20f)
   &nbsp;
   >npc->FrozenCSet, an enemy's boss palette, and a combo trigger's level and sprite palettes were used to load palettes without checking them. A number past the last palette copied whatever memory followed the palette data into the screen's colors, where a script could read it back. Such palettes are now ignored.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >

### Player

- replays were never re-uploaded on Windows and Linux [`a2d9f88792`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2d9f88792cb02046394e8faea34bd8455ee505f)
   &nbsp;
   >A replay that grows after being uploaded (the player keeps playing that save) is meant to be uploaded again, but checking whether the file changed only worked on macOS. This also meant a save that was first seen before it had been played was never uploaded at all.  
   >
   >Bug introduced when replay uploading was added in 2.55.5 ([2cee0ae2a7](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee0ae2a7)). 
   >
- replay never uploaded after an unexpected server response [`65d5162032`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65d51620327bc37b186eac31382b23b74f0ffc86)
   &nbsp;
   >Any error response other than a server error made the client give up on that replay forever - including ones that have nothing to do with the replay, like a 404 or 429 from a proxy or a bad server deploy. Now the replay is only given up on when the server rejects the replay itself, and is otherwise tried again later.  
   >
   >Bug introduced when replay uploading was added in 2.55.5 ([2cee0ae2a7](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee0ae2a7)). 
   >
- replay of a copied save never uploaded [`86a5425700`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86a54257000fe59223783224b8051f8703ad326d)
   &nbsp;
   >Copying a save file gives its replay a new identity the first time the copy is played. If replays were uploaded before then, the copy's replay was mistaken for one too old to upload, and was never uploaded - even after being played.  
   >
   >Bug introduced when replay uploading was added in 2.55.5 ([2cee0ae2a7](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee0ae2a7)). 
   >
- a single unreadable save file prevented the program from starting [`fe637b8312`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe637b8312394efdeb6041db922d9bb22fcea76e)
   &nbsp;
   >Now the save file is just skipped, and shows up as a broken save slot on the title screen.  
   >
   >Bug introduced when saves were split into individual files in 2.55-alpha-117 ([b6b151149c](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6b151149c)). 
   >
- bad screen state SCC args leaking into the rest of the string [`d30314e0d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d30314e0d4ce06abf886e610d3e604586edafacf)
   &nbsp;
   >The SCCs that set a screen state (133 and 134) stopped reading their arguments as soon as one was invalid, such as a map number that doesn't exist. The arguments left over were then run as other commands or printed as stray characters - for example, SCC 134 with a bad map could take rupees away and swallow the next character of the string.  
   >
   >Bug introduced when these SCCs were added in 2.55-alpha-106 ([59cd55adb9](https://github.com/ZQuestClassic/ZQuestClassic/commit/59cd55adb9)). 
   >
- reloading in test mode restored stale generic script state [`b71b87b338`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b71b87b338ae6bca64a17fc08f70a00265f87f20)
   &nbsp;
   >When playing a quest in test mode (or in a replay), saving left out the generic scripts' state - whether each one is running, its Data[], and so on - so reloading that save restored their state from before it, unlike when playing normally.  
   >
   >Bug introduced when generic script state began being saved in 2.55-alpha-107 ([e66e359835](https://github.com/ZQuestClassic/ZQuestClassic/commit/e66e359835)). 
   >
- explain that a save from a newer version can't be opened [`f42f96a2e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f42f96a2e4d8f177479b289ec7bc93e2dca0f5b5) [Discord](https://discord.com/channels/876899628556091432/1567569655860691054)
   &nbsp;
   >A save file made by a newer version of ZC now says that it was made by a newer version, instead of only saying it failed to read. 
   >
- [win] player closed when a replay upload couldn't connect [`35f66f71b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35f66f71b0d7cedf5d1a2799580e1745507e4756)
   &nbsp;
   >When uploading replays failed to reach the server, printing the error threw an exception, which closed the player at startup.  
   >
   >Bug introduced when replay uploads were added in 2.55.5 ([2cee0ae2a7](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee0ae2a7)). 
   >
- splitting an old save file reset generic script state [`166055dc53`](https://github.com/ZQuestClassic/ZQuestClassic/commit/166055dc539ff7424fccc9195828e8320c515f63)
   &nbsp;
   >When a save file from before 2.55-alpha-117 (which held every save slot) was split into one file per save, each save lost the state of its generic scripts - whether each one is running, its InitD[] and Data[], and so on.  
   >
   >Bug introduced when saves were split into individual files in 2.55-alpha-117 ([b6b151149c](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6b151149c)). 
   >
- weapons triggered a combo once per hitbox corner each frame [`e204aa08e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e204aa08e50f14988b6ffaff93fdaa1667cf0633)
   &nbsp;
   >A weapon checked a combo's triggers once for each point of its hitbox that touched it, so a weapon sitting on one combo usually triggered it four times a frame. Now a weapon triggers each combo at most once a frame.  
   >
   >Bug introduced when weapon combo triggers were added in 2.55-alpha-44 ([014b580d5c](https://github.com/ZQuestClassic/ZQuestClassic/commit/014b580d5c)). 
   >
- stop crashing when a sprite is removed while the hero swaps with it [`c5cefbd9ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5cefbd9ab9215af74240decf1d5ac91b17b9bb0)
   &nbsp;
   >The switch hook kept pointing at the enemy, item or weapon the hero was swapping places with after it was removed (for example by a script clearing all weapons), then used it.  
   >
   >Bug introduced when the switch hook was added in 2.55-alpha-100 ([ffe999c23c](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffe999c23c)). 
   >
- stop reading outside the next screen when the hero is off screen [`d3d3c07b97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3d3c07b976491a0ea784a15635b3a34f52d3a40)
   &nbsp;
   >Checking what is on the next screen in front of the hero used the hero's position as is. When a script had put the hero off the screen along the other axis too, this read outside of the screen's combos (for example when a script set the hero's action to rafting).  
   >
   >Bug has been present since the initial commit ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- stop warp combos reading past the edge of the map [`d9af461437`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9af4614372615dcf8239576509c42a65f8c39b7)
   &nbsp;
   >A warp combo read the return point of its destination before the warp checked that the destination exists. A small DMap's offset can put that off the edge of its map, which read outside the screens on the first or last map. Past the last map, the warp itself was already cancelled with an error.  
   >
   >Regressed in 2.55-alpha-112 ([1bf800867c](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bf800867c)). 
   >
- stop carrying over screen state to a map that doesn't exist [`6c8b2f56e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c8b2f56e3464653a46e27470a8e83d9e6807167)
   &nbsp;
   >A screen's carryover map can name a map past the last one (from a damaged quest, or a script setting Screen->NextMap), and carrying a screen state or secrets over read past the last map's screens. The carryover now stops there.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- keep changed combos within the number of combos [`e692c0a60d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e692c0a60da8b4c3a942571176a22d321e560292)
   &nbsp;
   >A combo changed by a crystal switch's combo offset, or by a combo trigger's "Combo Change" going past the last combo, became one past the last combo instead of the last one, and the game read past the combos.  
   >
   >Bug introduced when crystal switches were added in 2.55-alpha-97 ([b22399d6d6](https://github.com/ZQuestClassic/ZQuestClassic/commit/b22399d6d6)). 
   >
- shop and info rooms with a catchall past the last one [`732aa40d69`](https://github.com/ZQuestClassic/ZQuestClassic/commit/732aa40d69a48865d855b7a819cbb8cf255c2328)
   &nbsp;
   >A shop, take-one, info or bottle shop room picks its shop by the screen's catchall, which can be past the last shop (from a damaged quest, or a script setting Screen->Catchall or mapdata->Catchall). Entering or buying in such a room read past the shops. It is now an empty shop.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- script without an end in a quest file read past it [`ddddf7a01b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ddddf7a01b2892e7a2459defcfd711b16049b306)
   &nbsp;
   >A quest file's script ends with a marker, and the engine finds the end of the script by looking for it. A quest file whose script filled its whole stated length without one led the engine to read past the script, and run what it found there as more of it.  
   >
   >Bug introduced when ZScript was added, before 2.50.0. 
   >
- read past the screen state names for a high Screen->State[] [`5fa3396a47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5fa3396a475a773ef0fcf731db25cde09094b24e)
   &nbsp;
   >Setting Screen->State[] at an index past the last screen state looked up a name for it past the end of the list of names, for the event log and replays.  
   >
   >This has been wrong since before 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- a quest string taking an invalid item read and wrote outside the items [`aa4e134679`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa4e134679ba87c8bcad6b61999f47fe13a1b00e)
   &nbsp;
   >The string control code that takes an item away didn't check the item number. An invalid one cleared a byte outside the list of owned items and read item data from past the end of the item list, which then changed counters.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- an enemy spawning an invalid child enemy read past the enemy list [`c220682405`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c22068240576bc227b4c46543c537810cda2d84f)
   &nbsp;
   >Enemies that spawn other enemies (for example when split or killed) took the enemy to spawn from one of their attributes without checking it, so a number past the last enemy read and built an enemy from memory past the end of the enemy list.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- an invalid script number from the quest ran a script from outside the script list [`e2d56a4b97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2d56a4b97b554b70c6ea1bc05ca342e548b6aac)
   &nbsp;
   >Scripts attached to ffcs, screens, dmaps, items, combos and other things are stored in the quest as numbers that aren't checked when it loads. A number past the last script read a script from past the end of the list of scripts, and ran it. Such a script now doesn't run.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- dropset items past the last item read outside the item data [`f3fabc3657`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3fabc365709040b33b21e584e716c6123057542)
   &nbsp;
   >The items in a dropset come from the quest without being checked, and one past the last item read its item data from past the end of the list when an enemy or combo dropped from that dropset, and could then be dropped. Such items are now never picked.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- damaged save could write a script object anywhere in memory [`74fdcf7c93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74fdcf7c93cd5ee7287ef7c2d59630eb61f43119)
   &nbsp;
   >Global script objects saved in a save file are restored to the slot number stored with them, which wasn't checked. A damaged or crafted save could give any number, and starting the game then copied the object to that place in memory, far outside the list of objects. Such saves now fail to load.  
   >
   >Bug introduced when global script objects started being saved in 2.55-alpha-112 ([e9bc106b91](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9bc106b91)). 
   >

### Editor

- SCC wizard labels the map field of SCC 134 as DMap [`2b2e749a13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b2e749a13007ffda208433d7ed1d4984395935e)
   &nbsp;
   >The "Set a state of any screen" SCC takes a map number, not a DMap.  
   >
   >Bug introduced when the SCC wizard was added in 2.55-alpha-110 ([fb95ba0a2c](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb95ba0a2c)). 
   >

### ZScript

- clear script render targets and bitmap->Create() bitmaps [`bf1d0cb449`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf1d0cb4493f0b044ff13e378f52f12776bdfd06)
   &nbsp;
   >The bitmaps behind `Screen->SetRenderTarget`, and those made with `bitmap->Create()`, were not cleared on creation, meaning that it contained random pixel data.  
   >
   >One quest that this bug is visible in is Destiny of the Oracles. It draws its scripted active subscreen into a render target and copies 176 rows of it to the screen, but only ever draws the first 168. With "Hide bottom 8 pixels" off the 8 undrawn rows are visible and contain random colors.  
   >
   >Bug introduced when `Screen->SetRenderTarget` was added in 2.50. 
   >
- clamp combo ids given as negative tiles to drawing functions [`6f15316291`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f15316291ee2fba5dbcb529cdddf8d1af7d1767)
   &nbsp;
   >The combo-as-tile forms of Quad, Triangle, Quad3D, Triangle3D and their bitmap variants clamped the id to 65535, but there are only 65280 combos, so ids past the end read outside the combo table. 
   >
- combodata->OriginalTile could be set one past the last tile [`0359de9f10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0359de9f1067b06600753706280e8c39f5488664)
   &nbsp;
   >Setting a combo's OriginalTile to the tile count or higher stored a tile just past the end of the tile sheet, so drawing that combo read outside the tiles.  
   >
   >Bug introduced when OriginalTile was bounded in 2.55-alpha-100 ([e895ad2d](https://github.com/ZQuestClassic/ZQuestClassic/commit/e895ad2d)). 
   >
- keep script file paths inside the Files folder [`0c3bca85a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c3bca85a2209d66aca35417a5397f6dd6fe2e23)
   &nbsp;
   >Scripts could reach files outside the quest's "Files" folder. FileSystem->Remove() could delete any file the user can write to with a path like "../../file", and bitmap->Write(), bitmap->Read(), paldata->LoadBitmapPalette(), FileSystem->FileExists() and FileSystem->DirExists() accepted ".." too - and, for quests without the QR "All bitmap-> and FileSystem-> paths relative to quest 'Files' folder", absolute paths. Script files could also be created with an executable extension in another case ("game.EXE"), with some common executable types (.dll, .lnk, .sh, .py and more), or with Windows device names like "nul.txt".  
   >
   >Paths for quests without that QR are still relative to the ZC folder as before, but absolute paths, drive letters, network paths and paths that go above the ZC folder are now refused with a script error. ".." is now allowed in file and directory paths, as long as the path stays inside the folder.  
   >
   >Bug introduced when FileSystem->Remove() was added in 2.55-alpha-75 ([c218bef69c](https://github.com/ZQuestClassic/ZQuestClassic/commit/c218bef69c)). 
   >
- stop CopyTile and SwapTile from using invalid tile ids [`238c660d05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/238c660d051eb084c58161e9df39f02136e4a9b3)
   &nbsp;
   >Graphics->CopyTile and SwapTile didn't check their tile ids, so an id out of range read and wrote past the tiles. They now log an error and do nothing, like the other tile functions.  
   >
   >Bug introduced when CopyTile was added in 2.54-Alpha-1 ([0ecc4bf680](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecc4bf680)). 
   >
- stop IsBlankTile and Is8BitTile from reading past the last tile [`eb9ed30a9b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb9ed30a9b16bb6ae95e14a71c0299c136199987)
   &nbsp;
   >Graphics->IsBlankTile[] and Is8BitTile[] accepted an id one past the last tile. That id is now an error, like any other invalid one.  
   >
   >Bug introduced when IsBlankTile was added in 2.55-alpha-75 ([74b17339ed](https://github.com/ZQuestClassic/ZQuestClassic/commit/74b17339ed)). 
   >
- don't crash exploding a sprite whose tile doesn't exist [`327deb3ef2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/327deb3ef27d71092e9a362f6fa50ae038e3eb1c)
   &nbsp;
   >Calling Explode() on the Hero or a weapon whose Tile a script had set past the last tile read outside of the tile data. Like drawing such a tile, exploding it now does nothing.  
   >
   >Bug introduced when Explode was added in 2.55-alpha-16 ([37097ce61b](https://github.com/ZQuestClassic/ZQuestClassic/commit/37097ce61b)). 
   >
- stop with an error on a bitmap of an invalid size [`28bee38ed1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28bee38ed1508dadb96f2146c51e17273f750590)
   &nbsp;
   >Creating a bitmap with a negative size crashed the player, as did one so big its byte count overflowed (which instead wrote past the memory it got). Bitmaps are now limited to 32767 in either direction: past that, or with a negative size, creating one logs an error and leaves the bitmap invalid. A bitmap too big to allocate is left invalid too instead of crashing.  
   >
   >Bug introduced when user bitmaps were added in 2.55-alpha-1 ([8ef41de87c](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef41de87c)). 
   >
- check the level and page given to paldata functions [`2d66e1d13a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d66e1d13a5cd506fe4fac3d3ea19da497e2c989)
   &nbsp;
   >The paldata functions that load or write a level palette, a palette cycle or a sprite page used the number a script gave them as is, so one that doesn't exist read or wrote outside of the quest's palette data. They now log an error and do nothing.  
   >
   >Bug introduced when paldata was added in 2.55-alpha-112 ([b1b262ecc9](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1b262ecc9)). 
   >
- check the dmap, palette and map used through dmapdata [`e2208e8749`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2208e8749760e46193fb6c496c172c7a562acec)
   &nbsp;
   >Reading or writing a dmapdata variable used its dmap number as is (for example, one from Game->LoadDMapData() given a dmap that doesn't exist), and setting dmapdata->Palette on the current dmap loaded the new palette without checking it. One that doesn't exist read or wrote outside of the dmaps or the quest's palette data. Both now log an error.  
   >
   >Setting dmapdata->Map to a number that is not one of the quest's maps (0 included) was stored anyway, and could later crash. It is now ignored with an error.  
   >
   >Bug introduced when dmapdata was added in 2.54-Alpha-21 ([c31918250c](https://github.com/ZQuestClassic/ZQuestClassic/commit/c31918250c)). 
   >
- check the index given to Screen->TileWarpType[] and others [`0c8b4a9c7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c8b4a9c7acfc58719d504d224351eb745017bc6)
   &nbsp;
   >Screen->TileWarpType[], TileWarpScreen[], SideWarpType[], SideWarpScreen[], WarpReturnX[], WarpReturnY[], MazePath[], SecretCSet[] and SecretFlags[] used the index a script gave them as is, so one out of range read or wrote memory outside of the screen. It now logs an error; reading one gives -1.  
   >
   >Bug introduced when these were added in 2.55-Alpha-21 ([d9b16b1396](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9b16b1396)). 
   >
- check the direction given to Hero->GetOriginalTile() [`89e7e8c835`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89e7e8c835289638c96e2ea9644ff710a28657a1)
   &nbsp;
   >A direction outside of 0-3 read memory outside of the hero's sprites.  
   >
   >Bug introduced when Hero->GetOriginalTile() was added in 2.55-alpha-27 ([d084ee4f00](https://github.com/ZQuestClassic/ZQuestClassic/commit/d084ee4f00)). 
   >
- check the map and screen given to Game->SetComboSolid() [`a8bcbd5ad2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a8bcbd5ad26a29b52094bf0c0cc261cdc199a0c8)
   &nbsp;
   >A map or screen past the last one in the quest wrote to memory outside of the quest's screens, which could crash.  
   >
   >Bug has been present since the initial commit ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- prevent crash after a script changes number of subscreens [`1d055cb57a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d055cb57aaee25deec092450f41fbc2226cf1bc)
   &nbsp;
   >Setting `Game->NumActiveSubscreens` (or the passive or overlay ones) could leave the engine using a subscreen that no longer exists, which could result in a crash.  
   >
   >Bug introduced when the number of subscreens became writable in 2.55-alpha-119 ([0d049c6554](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d049c6554)). 
   >
- mapdata->isSolidLayer() checks the wrong layer screen [`52592d97ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52592d97ec881a8809bd8d0eb981db416b0dcb1e)
   &nbsp;
   >For mapdata from Game->LoadMapData(), it looked up the map and screen of the next layer up, and took the map number as one higher than it is. That gave the wrong answer for every layer, and could read past the last map's screens (or past the six layers, for layer 6).  
   >
   >Bug introduced when mapdata->isSolidLayer() was added in 2.55-alpha-44 ([f575e0ee6e](https://github.com/ZQuestClassic/ZQuestClassic/commit/f575e0ee6e)). 
   >
- side and tile warp functions with a warp of -1 [`85bfad02a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85bfad02a801163a9e5d3052c071e6333a4ed69c)
   &nbsp;
   >Screen->SetSideWarp() and SetTileWarp() accepted -1 for the warp, and wrote its screen, dmap and type before the first warp, over other screen data. GetSideWarpDMap(), GetSideWarpScreen(), GetSideWarpType() and the same for tile warps also accepted -1, and returned other screen data. A warp of -1 is now an error, like any other warp past the four.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- check stack bounds in JIT-compiled scripts [`a850e7ea4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a850e7ea4f822b20e42e2d59cedd324326e5a744)
   &nbsp;
   >Only hand-written ZASM: JIT-compiled scripts didn't check where they read and wrote the script stack, so a script could read or write memory far outside it, and crash the player. Out of range stack accesses now stop the script with a stack overflow error, as they do without the JIT.  
   >
   >Bug introduced when the JIT was added in 2.55-alpha-112 ([36fd73c209](https://github.com/ZQuestClassic/ZQuestClassic/commit/36fd73c209)). 
   >
- stop JIT-compiled scripts that hit a stack error [`c6654a4997`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6654a49971179343f6f464d113d5d37e8c4e896)
   &nbsp;
   >Only hand-written ZASM: when a JIT-compiled script hit an error that ends the script, such as a stack read out of range, the rest of the script kept running and could crash the player. It now stops there, as it does without the JIT.  
   >
   >Bug introduced when the JIT was added in 2.55-alpha-112 ([36fd73c209](https://github.com/ZQuestClassic/ZQuestClassic/commit/36fd73c209)). 
   >
- check function calls and returns in JIT-compiled scripts [`7d6d9bf8b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d6d9bf8b0b236d94ec0f266cd62dc9725bb0945)
   &nbsp;
   >Only hand-written ZASM: a JIT-compiled script could return from a function it never called, or call functions too deeply, and could crash the player. A negative POPARGS count could also read just before the script stack. These now stop the script with an error, as a stack overflow does.  
   >
   >Bug introduced when the JIT was added in 2.55-alpha-112 ([36fd73c209](https://github.com/ZQuestClassic/ZQuestClassic/commit/36fd73c209)). 
   >
- printf of a long string read past its buffer [`5480120a5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5480120a5b9772ef04cd5dced9560e8ae8b304df)
   &nbsp;
   >printf() and sprintf() format text in chunks of 256 characters, and a chunk that filled all 256 was not terminated, so formatting a long string could add bytes from outside the buffer to the result.  
   >
   >Bug introduced when printf() was added in 2.55-alpha-75 ([fb25d06770](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb25d06770)). 
   >
- stop a script that returns or jumps outside of itself [`ea1146e893`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea1146e893ad04459e2585dbc80b4d8265d2cf99)
   &nbsp;
   >Only reachable with hand-written ZASM: GOTOR and RETURN, which the compiler uses to return from a function, jumped to whatever position was in a register or on the stack, and the next command was read from there, even if it was outside of the script. The script now stops with an error instead.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- prevent crash when a script sets an invalid combo id [`04c4d571b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/04c4d571b61f119054757eab62a37fb792a484fb)
   &nbsp;
   >mapdata->FFCData[], Screen->SecretCombo[], Screen->UnderCombo, their mapdata versions and ComboData->NextData accepted combo ids past the last combo, and Game->SetComboData, ComboData->LiftGFXCombo and ComboData->LiftUnderCombo accepted one past the last combo. Using such a combo (for a secret or under combo, by triggering the screen's secrets) read past the end of the combo list.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- prevent crash after setting an item's ID to an invalid item [`ab888ef911`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab888ef911ae8aab8bf92ad6b9274507255aa3ec)
   &nbsp;
   >item->ID accepted any value, and the item's data was then looked up by it (for example when moving the item).  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Quad3D and Triangle3D read past the end of their values [`cf23d456bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf23d456bb430f2d34312f53c99fe0d516eaa919)
   &nbsp;
   >Quad3D and Triangle3D made room for only as many values as their arrays held in total. Given arrays one value short of what they use, they wrote and drew one value past the end of that room.  
   >
   >Regressed in 2.55-alpha-26 ([15fe2ecf60](https://github.com/ZQuestClassic/ZQuestClassic/commit/15fe2ecf60)). 
   >
- check the index given to Screen->SecretCombo[] and others [`f12dff267e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f12dff267e4faec0d845ce9604d745200de88dcf)
   &nbsp;
   >Screen->SecretCombo[], Enemy[], TileWarpDMap[] and SideWarpDMap[] used their index without checking it, so a script could read past the ends of the screen's arrays, and write past the end with SecretCombo[]. An invalid index now logs an error, and reads give -1.  
   >
   >Bug introduced when these were added in 2.54-Alpha-21 ([d9b16b1396](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9b16b1396)). 
   >
- reading memory as text in some script error messages [`988584921b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/988584921bcf8a20e52b67978bb3f369aee9b908)
   &nbsp;
   >About a hundred error messages a script can trigger, like an invalid combodata ID or shopdata index, passed their values in the wrong order, so the number was read as the address of a string. A script could crash the game this way, or print the contents of memory to the log. A few others printed a number they were never given.  
   >
   >These have been wrong since the 2.55 alphas ([77301a965f](https://github.com/ZQuestClassic/ZQuestClassic/commit/77301a965f) or earlier). 
   >
- combo ID one past the last combo wrote past the combo list [`73bcdc60ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73bcdc60ec7160def1527b3a053dd5ff77df5f5c)
   &nbsp;
   >Some combodata functions and screen setters (like Screen->UnderCombo) took combo IDs up to and including the number of combos, one more than the last valid ID. Given that ID, they read or wrote just past the end of the combo list.  
   >
   >Bug introduced when combodata was added in 2.54-Alpha-1 ([0ecc4bf680](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecc4bf680)). 
   >
- wrote past the global arrays when every slot was in use [`68b7e07113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68b7e07113b366e26c0d3340ef574cdcbf4b437a)
   &nbsp;
   >Allocating an array looked for a free slot past the last one when every slot was taken. For a global array, it then went on to make the array there anyway, past the end of the global arrays. Now it gives back a null array, as it already did for a local array.  
   >
   >Bug introduced when script arrays were added, before 2.50.0. 
   >
- Game->SetScreen functions wrote outside the maps [`ef223228af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef223228af40f5a837827ce6f5dbf60eb0ef315b)
   &nbsp;
   >Game->GetScreenItem(), SetScreenItem() and the other Game->Screen functions that take a map and a screen never checked them, so a script could read or write memory anywhere near the maps. They now log an error for a map or screen that doesn't exist, and do nothing.  
   >
   >Bug introduced when these functions were added in 2.54-Alpha-1 ([0ecc4bf680](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecc4bf680)). 
   >
- npc->InitD[] read and wrote outside the npc [`7fd1e5c3cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fd1e5c3cf4df7fbd43381485664a4ec224ff8ad)
   &nbsp;
   >npc->InitD[] never checked its index, so a script could read or write memory anywhere near an npc. It now logs an error for an index outside 0-7. npc->Defense[], npcdata->Defense[], npcdata->InitD[] and npcdata->WeaponInitD[] each also took one index past their last.  
   >
   >Bug introduced when npc->InitD[] was added in 2.55-Alpha-21 ([fdd5391369](https://github.com/ZQuestClassic/ZQuestClassic/commit/fdd5391369)). 
   >
- bitmap functions read and wrote outside the bitmaps [`f567aeb76b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f567aeb76be66d218219462c4926d492c38135d5)
   &nbsp;
   >bitmap->Width, Height, Clear(), ClearToColor(), Create(), Read(), Write(), WriteBitmap(), Blit(), DrawPlane() and others only checked that a bitmap pointer was above 0, not that it named a bitmap. Given any other number, they read or wrote memory past the list of bitmaps. They now treat it as an invalid bitmap.  
   >
   >Bug introduced when script bitmaps were added in 2.55-Alpha-21 ([8ef41de87c](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef41de87c)). 
   >
- shopdata arrays wrote outside the shops [`c55a27838d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c55a27838db6ca48f0a5e876b077ec42aec0f350)
   &nbsp;
   >shopdata's Item[], HasItem[], Price[] and String[] checked the index given to them, but not the shopdata. A script can make a shopdata out of any number, and for one that is neither a shop nor an info shop they read and wrote memory past the shops. Now they log an error for such a shopdata, and do nothing.  
   >
   >Bug introduced when shopdata was added in 2.54-Alpha-21 ([0993538aeb](https://github.com/ZQuestClassic/ZQuestClassic/commit/0993538aeb)). 
   >
- mapdata read and wrote outside the maps [`037be0f414`](https://github.com/ZQuestClassic/ZQuestClassic/commit/037be0f414890c9a705dd166d081fa8520259022)
   &nbsp;
   >A script can make a mapdata out of any number, and for one past the last map, mapdata's functions and variables read and wrote memory past the maps. They now treat it as an invalid mapdata.  
   >
   >Bug introduced when mapdata was added in 2.54-Alpha-21 ([09820d8c79](https://github.com/ZQuestClassic/ZQuestClassic/commit/09820d8c79)). 
   >
- dmapdata->Script and InitD[] read and wrote outside the dmaps [`34a00ac69c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34a00ac69c6a371a3e2dd702807303663826e0f4)
   &nbsp;
   >dmapdata->Script and dmapdata->InitD[] used a dmapdata's dmap number as is, so one cast from any number, or loaded from a dmap that doesn't exist, read and wrote memory outside the dmaps. They now log an error, as the other dmapdata variables already do.  
   >
   >Bug introduced when dmapdata was added in 2.54-Alpha-21 ([c31918250c](https://github.com/ZQuestClassic/ZQuestClassic/commit/c31918250c)). 
   >
- npcdata->GetAttribute() read outside the enemy list [`41b64a7f36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41b64a7f36b49bbc9d357752a18c86ac48951981)
   &nbsp;
   >npcdata->GetAttribute() logged an error for an enemy or attribute number that doesn't exist, but then read it anyway, from memory outside the enemy list.  
   >
   >Bug introduced when npcdata->GetAttribute() was added in 2.54-Alpha-1 ([0ecc4bf680](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecc4bf680)). 
   >
- Debug->D[] read and wrote past the script's registers [`a002e13fbe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a002e13fbe0e8627f2be66471408098855632a99)
   &nbsp;
   >Debug->D[] took any index when read and up to 255 when written, but a script only has 8 D registers, so other indices read and wrote other memory. Indices outside 0-7 now log an error.  
   >
   >Bug introduced when Debug->D[] was added in 2.55-Alpha-21 ([bb08cafadd](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb08cafadd)). 
   >
- Input->ReadKey[] read past the key list [`7816041f6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7816041f6fe776c3cb74875dbf2ad73d1cc97c73)
   &nbsp;
   >Input->ReadKey[] didn't check the key number it was given, so any other number read memory past the list of keys. It now logs an error.  
   >
   >Bug introduced when Game->ReadKey() was added in 2.54-Alpha-1 ([0ecc4bf680](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecc4bf680)). 
   >
- dropsetdata one past the last dropset read and wrote past them [`cc285ddccb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc285ddccb44a048512b1d29b672aa17e78e8439)
   &nbsp;
   >Game->LoadDropset() and dropsetdata accepted the number of dropsets as a dropset, one past the last one. Its variables read and wrote memory just past the dropsets.  
   >
   >Bug introduced when dropsetdata was added in 2.55-alpha-44 ([7383b32fc0](https://github.com/ZQuestClassic/ZQuestClassic/commit/7383b32fc0)). 
   >
- Game->Item[] read and wrote outside the item list [`d0ef5a174f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0ef5a174f4ab97b8e5dd852527bfed265ab89e6)
   &nbsp;
   >An old item register, which ZScript no longer compiles to but a quest's ZASM can still use, didn't check the item number it was given. Reading it read memory around the list of owned items, and writing it wrote there. Game->DisableItem[] had the same problem when read. Both now log an error for an invalid item.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- a global variable one past the last read and wrote past them [`cf431aee97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf431aee978d9a96e6b34b6586c885a9d68f4491)
   &nbsp;
   >A quest's ZASM could use the register for global variable 1024, one past the last one. It read and wrote the memory just after the global variables, which holds the quest's global arrays.  
   >
   >Bug introduced when global variables were raised to 1024 in 2.55-alpha-16 ([e86b3fb5e4](https://github.com/ZQuestClassic/ZQuestClassic/commit/e86b3fb5e4)). 
   >
- an invalid item from the item collect event read and wrote outside the items [`ca1dbaffd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca1dbaffd72ec22a84db890a344cbd229cc682cf)
   &nbsp;
   >A generic script handling the item collect event could change the item being collected to any number. An invalid one read item data from past the end of the item list, ran a script from there, and marked a byte outside the list as "pickup message played". Such an item is now not collected.  
   >
   >Bug introduced when the item collect event was added in 2.55-alpha-109 ([49140ec38f](https://github.com/ZQuestClassic/ZQuestClassic/commit/49140ec38f)). 
   >
- an eweapon with an invalid ID read past the Hero's defenses [`570483b952`](https://github.com/ZQuestClassic/ZQuestClassic/commit/570483b952e34bd9118d9ee537a83d55a4ba7e4d)
   &nbsp;
   >A script can set a weapon's ID to any number, and when such an eweapon hit the Hero, the Hero's defense against it was read from past the end of the Hero's defenses. Unknown weapons now get the normal defense.  
   >
   >Bug introduced when the Hero's defenses were added in 2.55-alpha-86 ([4d3bbaf096](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d3bbaf096)). 
   >
- Hero->Defense[] read and wrote past the Hero's defenses [`70d2d042e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/70d2d042e43bdd915938083094042671963f8568)
   &nbsp;
   >Hero->Defense[] took indices up to 255, but the Hero has fewer defenses than that, so higher ones read and wrote other parts of the Hero.  
   >
   >Bug introduced when Hero->Defense[] was added in 2.54-Alpha-34 ([5f7fb261b7](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f7fb261b7)). 
   >
- an invalid defense from the enemy hit event read past the enemy's defenses [`15d52d7ebf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15d52d7ebf533527c7ffef026e1322d7fc95a5fd)
   &nbsp;
   >A generic script handling the enemy hit event could set the defense to use to any number, and higher ones than the enemy has read past its defenses. Such a hit is now ignored.  
   >
   >Bug introduced when the enemy hit event was added in 2.55-alpha-109 ([f42eaa3ee6](https://github.com/ZQuestClassic/ZQuestClassic/commit/f42eaa3ee6)). 
   >
- Hero->Dir accepted directions the Hero can't face [`49a88e5548`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49a88e5548e327068f31107a3520a0e5d4ac35e8)
   &nbsp;
   >Hero->Dir could be set to any number, but the Hero's sprites only have the four main directions, and drawing the Hero looked up its tile from memory past them. Hero->Dir now logs an error for any other direction, and leaves the direction alone.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- a script jumping outside of itself ran memory past its end [`7181f894a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7181f894a4ff61ee0d757086058699aad6be83b0)
   &nbsp;
   >A quest's scripts are loaded without checking where their jumps go, so a hand-made script could jump past its end and the game would run whatever memory followed it as script commands. Such a script is now disabled when the quest loads, with an error in the log.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >
- some npc variables wrote to a stale or missing npc [`79475408c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79475408c36b5b9048070bb569fb785a2a48a9c8)
   &nbsp;
   >npc->HitDir, SlideClock, Fading, Halt, Frame and MoveStatus wrote their value only when the npc pointer was invalid, and never when it was valid. With a null pointer they wrote into the last npc a script used, which may have been deleted since; with any other invalid pointer the game crashed. They now write to the npc when it is valid.  
   >
   >Bug introduced when these were added in 2.55-alpha-92 ([766c243d34](https://github.com/ZQuestClassic/ZQuestClassic/commit/766c243d34)). 
   >
- an invalid stack pointer read and wrote far outside the stacks [`aae3182276`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aae31822769466b2e6d8fcfcf4ea814d6b6b7a6b)
   &nbsp;
   >The check on a stack pointer compared it against the most values a stack can hold (about 2 billion), not the number of stacks (256). Any pointer past the last stack was taken as valid, and the stack functions read and wrote memory up to gigabytes past the stacks.  
   >
   >Bug introduced when the stack type was added in 2.55-alpha-108 ([d391060c52](https://github.com/ZQuestClassic/ZQuestClassic/commit/d391060c52)). 
   >
- a script running inside another one corrupted the outer script [`80a81d271f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80a81d271f25593da22b7aaae023e6639e474bfc)
   &nbsp;
   >Some commands run generic scripts from inside the command (like the zap and wavy effects, which run whole frames). The running script's state is global and wasn't put back afterwards, so scripts went on with another script's position, registers and stack, running the wrong code. The outer script's state is now restored.  
   >
   >Bug introduced when generic scripts started running during those frames in 2.55-alpha-107 ([28603ced76](https://github.com/ZQuestClassic/ZQuestClassic/commit/28603ced76)). 
   >
- turning around a sprite with an invalid direction read garbage [`7818059a45`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7818059a45ffa8577f88d8a5cebd9155db9ea503)
   &nbsp;
   >Scripts can give a weapon, enemy or item any direction. Reversing one whose direction wasn't one of the 8 (a reflected weapon, a bounced boomerang hitting a shield) read its new direction from past the end of a table. Now it gets no direction.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Quad and Triangle with a size of 0 read outside the texture [`12681a2fc7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12681a2fc76a9f3dedcb62bf99024c95fd92bbad)
   &nbsp;
   >Quad(), Triangle() and their 3D and bitmap versions require the tile width and height to be powers of two, but 0 passed that check. Drawing with an empty texture read pixels from outside it. A size of 0 is now rejected like the other invalid sizes.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >

### ZUpdater

- only download updates from the official GitHub releases [`6e134af264`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e134af264d84758c777e1b4d116aa24d3a11610)
   &nbsp;
   >The updater downloaded whatever file the release list on the website pointed to, from any server and over any protocol, so anyone able to change that list could make it install anything. Updates now are only considered valid if the URL is to the GitHub releases over https. 
   >

# Build

- update libpng to 1.6.59 [`a3278ab4d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3278ab4d1a2a61f687f698f7af5b9a3b79b6cbc)
   &nbsp;
   >Picks up upstream security fixes for loading malformed PNG images. 
   >
- update game-music-emu [`ba909f9891`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba909f98919ee9964e33d1d1a1cb381d2dfaaded)
   &nbsp;
   >Picks up upstream fixes for loading malformed music files. 
   >
- update zlib to 1.4 [`69a44cf728`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69a44cf72896a318bbbf1a08474ac29c169f10bf)
   &nbsp;
   >Picks up upstream security fixes for compressed data handling. 
   >
- [linux] stop on a stack buffer overflow instead of continuing [`caefbfd0d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/caefbfd0d0ac5325187392424cf972a4e8aa460e)
   &nbsp;
   >Linux builds now have stack canaries and checked string functions, as the Windows and macOS builds already do, so writing past a fixed size buffer on the stack (for example, a long quest string in a log message) stops the program instead of overwriting what follows it. 
   >
