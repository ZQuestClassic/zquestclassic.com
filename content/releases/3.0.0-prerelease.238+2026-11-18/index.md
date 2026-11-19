---
title: 3.0 Prerelease 238 2026-11-18
description: 
date: 2026-11-19T01:55:04Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.238%2B2026-11-18/3.0.0-prerelease.238%2B2026-11-18-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.238+2026-11-18-linux-aarch64.tar.gz
    platform: linux-aarch64
    size: 34133701

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.238%2B2026-11-18/3.0.0-prerelease.238%2B2026-11-18-linux-x64.tar.gz
    name: 3.0.0-prerelease.238+2026-11-18-linux-x64.tar.gz
    platform: linux
    size: 34799970

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.238%2B2026-11-18/3.0.0-prerelease.238%2B2026-11-18-mac-universal.dmg
    name: 3.0.0-prerelease.238+2026-11-18-mac-universal.dmg
    platform: mac
    size: 40919451

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.238%2B2026-11-18/3.0.0-prerelease.238%2B2026-11-18-windows-arm64.zip
    name: 3.0.0-prerelease.238+2026-11-18-windows-arm64.zip
    platform: windows-arm64
    size: 37012975

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.238%2B2026-11-18/3.0.0-prerelease.238%2B2026-11-18-windows-x64.zip
    name: 3.0.0-prerelease.238+2026-11-18-windows-x64.zip
    platform: windows-x64
    size: 36561909

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.238%2B2026-11-18/3.0.0-prerelease.238%2B2026-11-18-windows-x86.zip
    name: 3.0.0-prerelease.238+2026-11-18-windows-x86.zip
    platform: windows-win32
    size: 34596539
prerelease: true
id: 450836324
tag_name: '3.0.0-prerelease.238+2026-11-18'
channel: '3'
tags:
  - releases
---

# Bug Fixes

- Only open `http(s)` links from info popups and the launcher [`f82a541a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f82a541a8675a8b20a1e768950a72502a270f9a2)
   &nbsp;
   >Links in info popups can come from a quest (script metadata, ZInfo help), and on Windows they were handed to the command shell, so a quest opened in the editor could offer a button that runs any command. Links are now only opened if they are plain http:// or https:// URLs, and never through a shell.  
   >
   >Bug introduced when URL buttons in info popups were added in 3.0.0-prerelease.217+2026-09-02 ([450339cac2](https://github.com/ZQuestClassic/ZQuestClassic/commit/450339cac2)). 
   >
- Stop long log messages from writing past their buffer [`9ffaa8178`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ffaa8178736b2f497e1376cdf007ad38b23fa91)
   &nbsp;
   >A message longer than 1024 characters overflowed the buffer it is formatted into. 
   >
- Stop save and quest files from resizing fixed size data [`d13bec132`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d13bec132e25fe7a0d2b0ebe2501929262502db3)
   &nbsp;
   >Saves and quests store lists with their size. Loading took that size as the list's new size, so a bad file could shrink a list the game expects to be full size, and an entry past the end aborted loading. Now the lists keep their size, and entries past it are skipped.  
   >
   >Regressed in 3.0.0-prerelease.1+2023-11-11 ([3558020ccd](https://github.com/ZQuestClassic/ZQuestClassic/commit/3558020ccd)). 
   >
- Keep old 6-bit palette values within the color scale table [`dd6bf2883`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd6bf2883f196af159a350fe685a88fb7ebb8283)
   &nbsp;
   >Old quests and saves store 6-bit colors, which get scaled to 8-bit with a table of 64 entries. A value over 63 read past the table. This includes combo trigger tints.  
   >
   >Regressed in 3.0.0-prerelease.59+2024-07-21 ([4fccd75658](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fccd75658)). 
   >
- Terminate door combo set names read from quests [`5e35363fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e35363fdf2a08a96c2436a87ea21c6c25d179ca)
   &nbsp;
   >Regressed in 3.0.0-prerelease.77+2024-10-27 ([6ba9923ed7](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ba9923ed7)). 
   >
- Check an FFC's combo id before checking its solidity [`7772e3984`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7772e3984866bf9e20ad98d61ac02c8235a5635b)
   &nbsp;
   >An FFC solid by its combo looked up a combo id past the last combo when loading a quest with a bad id.  
   >
   >Regressed in 3.0.0-prerelease.194+2026-06-14 ([d460b968dd](https://github.com/ZQuestClassic/ZQuestClassic/commit/d460b968dd)). 
   >
- Stop a combo alias larger than the maximum from aborting quest load [`2fa66ecd4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fa66ecd41e3bb09cbd3575b02d02c59fe4d3b11)
   &nbsp;
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Stop a damaged save or quest from reserving memory for a huge list [`c06bdcc29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c06bdcc29bc52b47566d78db78701c5d526216b9)
   &nbsp;
   >A list stored with its length made room for that many entries before reading any of them, so a file with a bad length could use up all memory. Only a modest amount is reserved up front now.  
   >
   >Bug introduced when generic script data was added in 2.55-alpha-112 ([f7901fa547](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7901fa547)). 
   >
- Handle an invalid DMap palette in a damaged quest file [`900da5ec1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/900da5ec1c66e7eda602e60c5035777819bae4f9)
   &nbsp;
   >A damaged quest file could give a DMap a level palette that doesn't exist, which made the game read colors from outside of the palette data. Such a DMap now uses the first level palette.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Read the string count of a 1.92 quest as unsigned [`818ecda4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/818ecda4b1ace310487a2ebab5954ac5ea8be450)
   &nbsp;
   >A 1.92 quest with more than 127 strings could crash while loading on platforms where a char is signed.  
   >
   >Bug introduced when the per-string "more" sprite was added in 3.0.0-prerelease.200+2026-07-18 ([07298c33d3](https://github.com/ZQuestClassic/ZQuestClassic/commit/07298c33d3)). 
   >
- Read the nightly flag of a quest header as a byte [`af26e8776`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af26e8776b0d800eab691fc54b9c6261372ce09c)
   &nbsp;
   >A quest header byte other than 0 or 1 left the "built with a nightly" flag in an undefined state.  
   >
   >Bug introduced when nightly build versioning was added in 2.55-alpha-104 ([e661d0d3dd](https://github.com/ZQuestClassic/ZQuestClassic/commit/e661d0d3dd)). 
   >
- Keep SPC, GBS and VGM music playback within memory [`1bdbbb049`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bdbbb049c7cdbb1178f77825bd34018202e56c6)
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
- Stop reading past the end of a MIDI when showing its info [`1cd34ddf2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1cd34ddf2819caf367730615cb9134052519e298)
   &nbsp;
   >A MIDI track that ends in the middle of an event (a truncated or corrupt file) made the MIDI info dialogs read memory past the track, which could show garbage text or crash.  
   >
   >Bug has been present since the initial commit ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Stop a damaged quest from reserving memory for a huge string [`ec67b20ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec67b20ba700c5f663f787e67001e06b04f549f3)
   &nbsp;
   >Loading a damaged quest could try to reserve gigabytes of memory for one string, because the string's stated length was used before it was checked.  
   >
   >Bug introduced when long strings were added in 3.0.0-prerelease.25+2024-01-13 ([4202d7d385](https://github.com/ZQuestClassic/ZQuestClassic/commit/4202d7d385)). 
   >
- Save strings longer than 65535 characters in full [`1487b0b0c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1487b0b0cc8f1d2ed609755697fcf757f60be790)
   &nbsp;
   >Saving a string longer than 65535 characters, such as long screen notes, cut it short.  
   >
   >Bug introduced when long strings were added in 3.0.0-prerelease.25+2024-01-13 ([4202d7d385](https://github.com/ZQuestClassic/ZQuestClassic/commit/4202d7d385)). 
   >
- Clear a damaged quest's invalid screen enemy on load [`6687d8ca7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6687d8ca70249bb4e2af4084e0cd520c26c9ea9b)
   &nbsp;
   >Loading a quest cleared screen enemies with an id over the number of enemies, but missed an id exactly equal to it, which could crash the player when the screen was entered. Only a damaged quest has such an id.  
   >
   >Bug introduced when invalid screen enemies were cleared on load in 2.55-alpha-83 ([68b5ec66fd](https://github.com/ZQuestClassic/ZQuestClassic/commit/68b5ec66fd)). 
   >
- Keep a DMap's level within the number of levels [`423c50136`](https://github.com/ZQuestClassic/ZQuestClassic/commit/423c50136fa492afd6c0123051ba1fa75c05b191)
   &nbsp;
   >A DMap's level is used to look up the level's items (map, compass, boss key, Triforce) and keys, but it could be set past the last level, by a damaged quest or by a script through dmapdata->Level or Game->DMapLevel[]. Entering such a DMap crashed the player. A damaged quest's level is now cleared to 0, and scripts get an error.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Keep a screen's warp DMaps within the number of DMaps [`080cce278`](https://github.com/ZQuestClassic/ZQuestClassic/commit/080cce278d79da283aeb0eae2deaa8ee185f4889)
   &nbsp;
   >A tile or side warp could have a DMap past the last one, from a damaged quest or a script setting Screen->TileWarpDMap[] or SideWarpDMap[] (or the mapdata versions), and warping with it could crash the player. A damaged quest's warp DMap is now cleared to 0, and scripts get an error, as SetSideWarp() and SetTileWarp() already did.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Don't load a layer from a map that doesn't exist [`ec2a1d611`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec2a1d6110d22f5f681649ec510c1596c28eea75)
   &nbsp;
   >A screen layer set to a map past the last one could crash the player when the screen loaded. This could come from a damaged quest, from a script setting Screen->LayerMap[] or mapdata->LayerMap[], or from lowering the map count in the editor, which fixes only the current screen's layers right away and the others only once they are viewed. Such layers are now turned off when the quest loads, and scripts get an error.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Keep warp rings within their warps and DMaps [`aa30a0f29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa30a0f29191966ea65bbfa770b2c2df9740b30c)
   &nbsp;
   >A warp room or whistle with a bad warp ring could crash the player. This happened with a warp room whose screen Catch All value isn't a valid ring, a whistle whose warp ring attribute isn't one, or a damaged quest whose ring lists too many warps or a DMap past the last one. Now such a warp room has no warps, such a whistle uses the last ring (as with no whistle), and a damaged quest's rings are kept in range.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Don't read garbage from a damaged quest's build details [`960a22cc3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/960a22cc34b117b7cff1a646669e966407cc5050)
   &nbsp;
   >A damaged quest's template path or build details (compiler, product, module, developer, build date, time and timezone) could read random memory when shown, because their text had no end marker. They are now cut off at their field size, as the title and author already were.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Keep sprites within the number of sprites [`4accb7ebc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4accb7ebc7acb6adfe1cc26de9dea9b88da655ee)
   &nbsp;
   >A weapon or misc sprite (falling, drowning, the switch hook's poof, ...) past the last sprite crashed the player. A script could set one through Game->MiscSprites[], an item's Sprites[] or BurnSprites[], a weapon data's BurnSprites[] or a weapon's MiscSprites[], and a damaged quest could have one as a misc or burning sprite. A damaged quest's sprite is now cleared to 0, and a script's is kept to the last sprite.  
   >
   >Regressed in 3.0.0-prerelease.166+2026-03-19 ([786f85b17c](https://github.com/ZQuestClassic/ZQuestClassic/commit/786f85b17c)). 
   >
- Handle a DMap on a map that doesn't exist [`593031d79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/593031d795ca851c1b3c4f25f1e4eb2ea43d335e)
   &nbsp;
   >A damaged quest could have a DMap on a map past the quest's last one, and loading or warping to that DMap could crash the player. That DMap now uses the first map.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >

### Player

- Fail to load a malformed replay instead of aborting [`58c65ada4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58c65ada402615876f89b8faf5ca5256d1fd9bcd)
   &nbsp;
   >Replays can come from anywhere (like uploads), but the parser aborted the whole program on many kinds of bad lines: a duplicate meta key, an unknown cheat, button, key or quest rule, a bad rng range, or key steps in the wrong order. Now these fail the load with a message. Some values were also read uninitialized when a line was cut short.  
   >
   >Regressed in 3.0.0-prerelease.195+2026-06-18 ([e07b32257e](https://github.com/ZQuestClassic/ZQuestClassic/commit/e07b32257e)). 
   >
- Fail to load a save file with an impossible amount of script data [`4cf133c70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4cf133c70019c3e0620c548ee061d172428745a0)
   &nbsp;
   >A damaged save could give a size for its script arrays, objects or stacks far beyond what a script can make, and loading it used up all memory before reading any of them. Such a file now fails to load.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Stop crashing when a sprite is removed while the hero swaps with it [`4ead8e2f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ead8e2f97ec8ac1eb842baa0678a0e37aa84896)
   &nbsp;
   >The switch hook kept pointing at the enemy, item or weapon the hero was swapping places with after it was removed (for example by a script clearing all weapons), then used it.  
   >
   >Bug introduced when the switch hook was added in 2.55-alpha-100 ([ffe999c23c](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffe999c23c)). 
   >
- Stop reading outside the next screen when the hero is off screen [`350e7cdfc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/350e7cdfc0e9602b0a0dc67c81b8ee2c87a83849)
   &nbsp;
   >Checking what is on the next screen in front of the hero used the hero's position as is. When a script had put the hero off the screen along the other axis too, this read outside of the screen's combos (for example when a script set the hero's action to rafting).  
   >
   >Bug has been present since the initial commit ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Check the right next screen when the hero straddles two screens [`6fc5c5906`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fc5c5906327ae2325525291a0f347c8ce8227ef)
   &nbsp;
   >When rafting or swimming toward the next screen, the combo checked on it was found from the screen under the hero's top-left corner, but the next screen is the one past the screen under the hero's center. Near where two screens of a region meet, this checked the wrong side of the next screen.  
   >
   >Regressed in 3.0.0-prerelease.131+2025-08-31 ([e2f856083a](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2f856083a)). 
   >
- Stop warp combos reading past the edge of the map [`e95ede2f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e95ede2f8d7f64767402c4cc106d61bd6931a2c9)
   &nbsp;
   >A warp combo read the return point of its destination before the warp checked that the destination exists. A small DMap's offset can put that off the edge of its map, which read outside the screens on the first or last map. The warp itself was already cancelled with an error.  
   >
   >Regressed in 2.55-alpha-112 ([1bf800867c](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bf800867c)). 
   >
- Stop carrying over screen state to a map that doesn't exist [`53e0c56d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53e0c56d200e4c689cd6ea08e6113082698fae4e)
   &nbsp;
   >A screen's carryover map can name a map past the last one (from a damaged quest, or a script setting Screen->NextMap), and carrying a screen state or secrets over read past the last map's screens. The carryover now stops there.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Show the right map in the event log for carried over states [`ae5323299`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae53232997cfdf02b8eef4db63e3c9510cb9b9a7)
   &nbsp;
   >A screen state or ExtraState carried over to another screen was logged with the map after the one it went to, and was marked as the current screen when the hero was on the screen with that number on the next map.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Keep changed combos within the number of combos [`e7fc7ef5d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7fc7ef5d272f04c9b19d469f78d9e38b3dcdd52)
   &nbsp;
   >A combo changed by a crystal switch's combo offset, or by a combo trigger's "Combo Change" going past the last combo, became one past the last combo instead of the last one, and the game read past the combos.  
   >
   >Bug introduced when crystal switches were added in 2.55-alpha-97 ([b22399d6d6](https://github.com/ZQuestClassic/ZQuestClassic/commit/b22399d6d6)). 
   >
- Shop and info rooms with a catchall past the last one [`81b95a243`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81b95a2434885059006211cdaaf4202849b5d32d)
   &nbsp;
   >A shop, take-one, info or bottle shop room picks its shop by the screen's catchall, which can be past the last shop (from a damaged quest, or a script setting Screen->Catchall or mapdata->Catchall). Entering or buying in such a room read past the shops. It is now an empty shop.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Prevent crash drawing a combo whose tile is past the last tile [`1ed26bb2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1ed26bb2bc79919957af236fd1514acd787d4925)
   &nbsp;
   >Drawing a combo with 2-color csets read the tile's format before checking the tile exists. A combo's tile can be past the end through its animation, or a script setting ComboData->Tile.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Prevent crash when an enemy fires an invalid weapon with no eweapons out [`8c6b476a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c6b476a54c3419f76836e6171fa4407170a9428)
   &nbsp;
   >Enemies change the weapon they just fired by taking the last eweapon. If the weapon was not created (an invalid weapon id, which scripts can set) and there were no other eweapons, that was null.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >

### ZScript

- Refuse more executable file types in script file access [`de2255c5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de2255c5e1113f120abcaf6e1c007649a0a1bb0e)
   &nbsp;
   >Scripts could create executable files by changing the case of the extension (like "game.EXE"), and some common types were missing from the list of banned extensions: libraries, installers, shortcuts and shell or Python scripts (.dll, .msi, .lnk, .url, .desktop, .sh, .py and more).  
   >
   >Regressed in 2.55-alpha-112 ([4148c7536d](https://github.com/ZQuestClassic/ZQuestClassic/commit/4148c7536d)). 
   >
- Refuse Windows device names in any case in script files [`dd83933b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd83933b096ef9d3837463a8268f43fb8cec8f94)
   &nbsp;
   >Script file access refused file names like "CON" or "NUL.txt" only in upper case, so "con.txt" or "Nul.png" got through. On Windows those name devices rather than files, in any case and with any extension.  
   >
   >Bug introduced when file name checks were added in 3.0.0-prerelease.67+2024-09-07 ([0480ad0349](https://github.com/ZQuestClassic/ZQuestClassic/commit/0480ad0349)). 
   >
- Keep bitmap and FileSystem paths inside the ZC folder [`5e47a6f87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e47a6f872343d8e718f39aef7bb10fbb2def267)
   &nbsp;
   >Quests without the QR "All bitmap-> and FileSystem-> paths relative to quest 'Files' folder" could use absolute paths or ".." with bitmap->Write(), bitmap->Read(), paldata->LoadBitmapPalette(), FileSystem->FileExists() and FileSystem->DirExists(), letting a quest write image files anywhere on the computer, read any image, and check whether any file exists. Paths for these quests are still relative to the ZC folder as before, but absolute paths, drive letters, network paths and paths that go above the ZC folder are now refused with a script error.  
   >
   >Bug introduced when bitmap->Write() was added in 2.55-Alpha-21 ([da74b7ad71](https://github.com/ZQuestClassic/ZQuestClassic/commit/da74b7ad71)). 
   >
- Return false from `FileSystem->Remove()` for a refused path [`1fd4d91bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1fd4d91bc1967e81ed18cc2db3bc4dd17597398e)
   &nbsp;
   >FileSystem->Remove() returned true when the path was refused (outside the quest's Files folder, a banned extension, and so on), though no file was removed.  
   >
   >Regressed in 3.0.0-prerelease.67+2024-09-07 ([0480ad0349](https://github.com/ZQuestClassic/ZQuestClassic/commit/0480ad0349)). 
   >
- Stop CopyTile and SwapTile from using invalid tile ids [`44889416c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44889416c228017e7f155f8c93a758b7d2087088)
   &nbsp;
   >Graphics->CopyTile and SwapTile didn't check their tile ids, so an id out of range read and wrote past the tiles. They now log an error and do nothing, like the other tile functions.  
   >
   >Bug introduced when CopyTile was added in 2.54-Alpha-1 ([0ecc4bf680](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecc4bf680)). 
   >
- Stop IsBlankTile and Is8BitTile from reading past the last tile [`848c0d61c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/848c0d61c277fbf5304a1b2bbaf08b9bba4f7417)
   &nbsp;
   >Graphics->IsBlankTile[] and Is8BitTile[] accepted an id one past the last tile. That id is now an error, like any other invalid one.  
   >
   >Bug introduced when IsBlankTile was added in 2.55-alpha-75 ([74b17339ed](https://github.com/ZQuestClassic/ZQuestClassic/commit/74b17339ed)). 
   >
- Don't crash exploding a sprite whose tile doesn't exist [`1c66db459`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c66db459f95d292790689c2176232c0f255c8cd)
   &nbsp;
   >Calling Explode() on the Hero, an enemy, item or weapon whose Tile a script had set past the last tile read outside of the tile data. Like drawing such a tile, exploding it now does nothing.  
   >
   >Bug introduced when Explode was added in 2.55-alpha-16 ([37097ce61b](https://github.com/ZQuestClassic/ZQuestClassic/commit/37097ce61b)). 
   >
- Stop with an error on a bitmap of an invalid size [`14db35b47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14db35b47aea99a2037bbab1fd0f4b956e1fb4c2)
   &nbsp;
   >Creating a bitmap with a negative size crashed the player, as did one so big its byte count overflowed (which instead wrote past the memory it got). Bitmaps are now limited to 32767 in either direction: past that, or with a negative size, creating one logs an error and leaves the bitmap invalid. A bitmap too big to allocate is left invalid too instead of crashing.  
   >
   >Bug introduced when user bitmaps were added in 2.55-alpha-1 ([8ef41de87c](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef41de87c)). 
   >
- Don't crash when bitmap->Read() can't load the image [`f7a44d7a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7a44d7a2f96d664e46498440f37d2d4636e9e36)
   &nbsp;
   >Reading a file that exists but isn't an image the player can load crashed instead of logging the error. As the error message says, it now makes a blank bitmap, the same as for a file that doesn't exist.  
   >
   >Regressed in 2.55-alpha-26 ([5ee0c64964](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ee0c64964)). 
   >
- Check the layer given to `Screen->TriggerCombo()` [`d5fc6ecd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5fc6ecd1ef3f8f15bce60155d0f879271f98ed6)
   &nbsp;
   >A layer outside of 0-6 was used as is, reading a screen layer that doesn't exist. It now logs an error and does nothing, like an invalid position does.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Check the level and page given to paldata functions [`144ac5dde`](https://github.com/ZQuestClassic/ZQuestClassic/commit/144ac5dde5993b7a3ec1239582d04c83a7471fac)
   &nbsp;
   >The paldata functions that load or write a level palette, a palette cycle or a sprite page used the number a script gave them as is, so one that doesn't exist read or wrote outside of the quest's palette data. They now log an error and do nothing.  
   >
   >Bug introduced when paldata was added in 2.55-alpha-112 ([b1b262ecc9](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1b262ecc9)). 
   >
- Check the DMap, palette and map used through dmapdata [`fa6cbdfd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa6cbdfd2db2563affbcf81d98af4e9777bc0ddd)
   &nbsp;
   >Reading or writing a dmapdata variable used its DMap number as is, and setting dmapdata->Palette on the current DMap loaded the new palette without checking it. One that doesn't exist read or wrote outside of the dmaps or the quest's palette data. Both now log an error.  
   >
   >Setting dmapdata->Map to a number that is not one of the quest's maps (0 included) was stored anyway, and could crash the next time the screen was drawn or the viewport updated. It is now ignored with an error.  
   >
   >Bug introduced when dmapdata was added in 2.54-Alpha-21 ([c31918250c](https://github.com/ZQuestClassic/ZQuestClassic/commit/c31918250c)). 
   >
- Check the index given to `Screen->Door[]` [`4eb5390c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4eb5390c9b931a281e5c15f42e6b509946ea7b01)
   &nbsp;
   >An index outside of 0-3 read or wrote memory outside of the screen's doors.  
   >
   >Bug introduced when Screen->Door[] was added in 2.55-Alpha-21 ([d9b16b1396](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9b16b1396)). 
   >
- Check the direction given to `Hero->GetOriginalTile()` [`5093f482d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5093f482dc80a652b591ddf8003b38c74befa7a5)
   &nbsp;
   >A direction outside of 0-3 read memory outside of the hero's sprites.  
   >
   >Bug introduced when Hero->GetOriginalTile() was added in 2.55-alpha-27 ([d084ee4f00](https://github.com/ZQuestClassic/ZQuestClassic/commit/d084ee4f00)). 
   >
- Check the map and screen given to `Game->SetComboSolid()` [`d937b4c65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d937b4c65e788d35afa71de5506d78fde4bb758b)
   &nbsp;
   >A map or screen past the last one in the quest wrote to memory outside of the quest's screens, which could crash.  
   >
   >Bug has been present since the initial commit ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Check the enemy id given to `npc->SummonMinion()` [`54c6333fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54c6333fdfc6fc38eaa16f3600bf0d0ca398dcaf)
   &nbsp;
   >An id past the last enemy read memory outside of the enemy data.  
   >
   >Bug introduced when npc->SummonMinion() was added in 3.0.0-prerelease.195+2026-06-18 ([a959db9840](https://github.com/ZQuestClassic/ZQuestClassic/commit/a959db9840)). 
   >
- Report a screendata that isn't a screen as invalid [`6b8c28264`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b8c28264ce1c0744c91800d75cf0fa4130ba810)
   &nbsp;
   >A number that isn't a screen, used as a screendata (ex: by a cast), could read memory outside of the map's screens.  
   >
   >Regressed in 3.0.0-prerelease.115+2025-06-30 ([df3ce2079c](https://github.com/ZQuestClassic/ZQuestClassic/commit/df3ce2079c)). 
   >
- Prevent crash after a script changes number of subscreens [`b44e8b395`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b44e8b3956d455ba5d3ec5187f40569c6a06e695)
   &nbsp;
   >Setting `Game->NumActiveSubscreens` (or the passive, overlay or map ones) could leave the engine using a subscreen that no longer exists, which could result in a crash.  
   >
   >Bug introduced when the number of subscreens became writable in 2.55-alpha-119 ([0d049c6554](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d049c6554)). 
   >
- Don't trigger secrets on a screen that doesn't exist [`33ede6a87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33ede6a8762419db2f7dec4b9bf1e146107ab1a2)
   &nbsp;
   >A region can include a screen that isn't valid. Triggering its secrets from a script did nothing useful, and failed a debug check. Found by fuzzing.  
   >
   >Bug introduced when Region was added in 3.0.0-prerelease.33+2024-01-31 ([f87c20d08a](https://github.com/ZQuestClassic/ZQuestClassic/commit/f87c20d08a)). 
   >
- `mapdata->isSolidLayer()` checks the wrong layer screen [`898ab76ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/898ab76ff6fb2109b3bbe050e99b993c94b8dbfe)
   &nbsp;
   >For mapdata from Game->LoadMapData(), it looked up the map and screen of the next layer up, and took the map number as one higher than it is. That gave the wrong answer for every layer, and could read past the last map's screens (or past the six layers, for layer 6).  
   >
   >For mapdata from Game->LoadTempScreen() or Game->LoadScrollingScreen() of a whole region, it ignored the layer, and checked the region's first screen for every position. For a single screen, it checked the layer as it was made in the editor, missing any changes made since. These now check the layer as Screen->isSolidLayer() does, so a layer the screen doesn't have is not solid.  
   >
   >Bug introduced when mapdata->isSolidLayer() was added in 2.55-alpha-44 ([f575e0ee6e](https://github.com/ZQuestClassic/ZQuestClassic/commit/f575e0ee6e)). Temporary mapdata regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Old scripts using layer arrays wrote past the last layer [`b6a9bcbb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6a9bcbb3f215daf20d33b34e387b1965d8f17d3)
   &nbsp;
   >Scripts in older quests count the layers of LayerMap[], LayerScreen[] and LayerOpacity[] from 0 when writing them on a screendata, or when reading or writing them on a mapdata. The index was moved to match after it was checked, so the last index went one past the end of the six layers, and layer 1 (index 0) couldn't be used at all. It is now moved first.  
   >
   >Regressed in 3.0.0-prerelease.115+2025-06-30 ([df3ce2079c](https://github.com/ZQuestClassic/ZQuestClassic/commit/df3ce2079c)). 
   >
- Prevent crash in `isSolid()` of a scrolling region's mapdata [`a023f3318`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a023f3318f68507d8f887a8a263f2189dc375214)
   &nbsp;
   >mapdata->isSolid() on the mapdata from Game->LoadScrollingScreen() crashed for a position off the scrolling region, or where a layer of the screen is missing. Now a position off the region is not solid, and a missing layer is skipped, as for other mapdata.  
   >
   >Bug introduced when scrolling regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Side and tile warp functions with a warp of -1 [`84e71a183`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84e71a1832327d30737ae6b873f6536309e236c6)
   &nbsp;
   >Screen->SetSideWarp() and SetTileWarp() accepted -1 for the warp, and wrote its screen, DMap and type before the first warp, over other screen data. GetSideWarpDMap(), GetSideWarpScreen(), GetSideWarpType() and the same for tile warps also accepted -1, and returned other screen data. A warp of -1 is now an error, like any other warp past the four.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Check register numbers before looking up array registers [`48ad5a9c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48ad5a9c22b4210a50b34b7c8ef59ab47683e5d8)
   &nbsp;
   >Reading or writing a register number outside the known ones (which only a quest's raw ZASM can do) indexed past the end of the table of array registers.  
   >
   >Regressed in 3.0.0-prerelease.132+2025-09-09 ([cf475daeae](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf475daeae)). 
   >
- Check object types and indices that come from ZASM [`7b9746164`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b974616436fa92ad82b83a09e93ac6f91df7553)
   &nbsp;
   >The type a quest's ZASM gives arrays, varargs arrays and class members was only checked by asserts (left out of release builds), and ZCLASS_MARK_TYPE used member indices from its list unchecked. Bad types and indices are now ignored with an error.  
   >
   >Regressed in 3.0.0-prerelease.47+2024-04-04 ([f93172d335](https://github.com/ZQuestClassic/ZQuestClassic/commit/f93172d335)). 
   >
- Check the destructor markers that come from ZASM [`850e13c79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/850e13c79dc351249d867ac784dce7f24d5bd4e7)
   &nbsp;
   >Only reachable with hand-written ZASM: STARTDESTRUCTOR required its literal array, then printed its string, which may be missing. And making an object read the command before its destructor's position without checking that the position is in the script; that is now a ZASM_CHECK.  
   >
   >Bug introduced when destructors were added in 2.55-alpha-112 ([af0f9e5949](https://github.com/ZQuestClassic/ZQuestClassic/commit/af0f9e5949)). 
   >
- Stop the script on an object stack slot outside the stack [`2565a2067`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2565a20673af759d76924c5e707f38529af32df4)
   &nbsp;
   >Only reachable with hand-written ZASM: marking a stack slot as holding an object, storing an object in one, or releasing the object in one, with a slot outside the stack, failed an assert in debug builds. Release builds ignored it, except for storing, which still changed the object's reference count and recorded the slot as holding it. It now stops the script with a stack overflow, as reading or writing that slot already did.  
   >
   >Bug introduced when the garbage collector was added in 3.0.0-prerelease.45+2024-04-02 ([d4bc547f8e](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4bc547f8e)). 
   >
- Stop on a write to the PC register outside of the script [`99c566f1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99c566f1fbd27a7ed723d70256d97bb07c565de6)
   &nbsp;
   >Only reachable with hand-written ZASM: writing the PC register moved the script to any position, in or out of its commands, and the next command was read from there.  
   >
   >Bug introduced when the PC register was added in 2.55-alpha-51 ([8f644fb1f3](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f644fb1f3)). 
   >
- Handle unknown ZASM commands and registers in script analysis [`ed721026d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed721026d4e3123a3b57eb22ff7b6299dc3bfd68)
   &nbsp;
   >A quest's ZASM can name any command and register, but the optimizer's and JIT's analysis indexed tables sized for the known ones with them, and a negative register wrote outside an 8 entry array on the stack.  
   >
   >Regressed in 3.0.0-prerelease.131+2025-08-31 ([7ae596a1ef](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ae596a1ef)). 
   >
- Ignore debug data that doesn't fit the quest's scripts [`c89549fab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c89549fabaac5a9b059bd6ff70d323cb02551346)
   &nbsp;
   >The JIT and optimizer find a script's functions from the quest's debug data when it has some. A function past the end of the scripts was read out of bounds, and a script that doesn't start at a function aborted. Such debug data is now ignored, and the functions are found from the ZASM as for quests without debug data.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([b3f408e08b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3f408e08b)). 
   >
- Leave stack offsets the optimizer can't convert alone [`f41be3748`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f41be3748e698c28c8139bb4137168ceb84deca4)
   &nbsp;
   >Only reachable with hand-written ZASM: LOADD, STORED and STOREDV take an offset in ten-thousandths, and the optimizer turned one that isn't whole into LOAD, STORE or STOREV with the fraction dropped (after an assert, in debug builds). Those commands are now kept as they are.  
   >
   >Regressed in 3.0.0-prerelease.29+2024-01-20 ([d8a7872c8b](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8a7872c8b)). 
   >
- Find the function a call is in when it starts the function [`30ff3a594`](https://github.com/ZQuestClassic/ZQuestClassic/commit/30ff3a594a8ffed07e4b438b0f015893bc156a03)
   &nbsp;
   >Only reachable with hand-written ZASM (the compiler always emits something before a call): for quests without debug data, a call that is the first command of a function was taken to be in the function before it, so the JIT and optimizer could get wrong which functions may wait. A call that is the first command of a script was in no function at all, and marking that function as one that may wait wrote out of bounds.  
   >
   >Regressed in 3.0.0-prerelease.16+2023-12-20 ([08254299cb](https://github.com/ZQuestClassic/ZQuestClassic/commit/08254299cb)). 
   >
- Don't optimize a comparison whose jump leaves the function [`a0acfcc11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0acfcc11d05b74c4c706259fc13e2c340d90727)
   &nbsp;
   >Only hand-written ZASM jumps into another function. The pass that reduces comparisons looked up the block the jump goes to, which isn't in the function's graph, and threw. Found by fuzzing. 
   >
- Stay within the JIT's function list when checking calls [`a846c1174`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a846c1174549a6824bd9d98194fd07d2675df751)
   &nbsp;
   >When a script's last function ended before its last block, the check for how control enters functions walked past the end of the list.  
   >
   >Regressed in 3.0.0-prerelease.228+2026-10-11 ([d6cffc8ae5](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6cffc8ae5)). 
   >
- Check stack bounds in JIT-compiled scripts [`1416e0622`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1416e0622c859e8479a72a2c32b16d84cbd780b4)
   &nbsp;
   >Only hand-written ZASM: JIT-compiled scripts didn't check where they read and wrote the script stack, so a script could read or write memory far outside it, and crash the player. Out of range stack accesses now stop the script with a stack overflow error, as they do without the JIT.  
   >
   >Bug introduced when the JIT was added in 2.55-alpha-112 ([36fd73c209](https://github.com/ZQuestClassic/ZQuestClassic/commit/36fd73c209)). 
   >
- Keep a push of many values within the stack [`a795a380c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a795a380c7dd469adaeb8f2e15ef5a59a98c2c85)
   &nbsp;
   >Only hand-written ZASM: a PUSHARGS with a negative count could hang the player or write past the stack. A count below 1 now pushes nothing.  
   >
   >Bug introduced when PUSHARGS was added in 3.0.0-prerelease.12+2023-12-13 ([dc6d9e49ef](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc6d9e49ef)). 
   >
- Recheck the stack when a jump lands among pushes [`ece31eb10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ece31eb10ff2b84012536cf4f320ffdc67b801d9)
   &nbsp;
   >JIT-compiled scripts check for a stack overflow once at the start of a run of pushes. A jump into the middle of a run skipped that check, so those pushes could write past the end of the stack.  
   >
   >Regressed in 3.0.0-prerelease.123+2025-08-01 ([df36bad3e8](https://github.com/ZQuestClassic/ZQuestClassic/commit/df36bad3e8)). 
   >
- Stop JIT-compiled scripts that hit a stack error [`a60ba3f11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a60ba3f11ab97237dc5003820a9f764f08d01bfc)
   &nbsp;
   >Only hand-written ZASM: when a JIT-compiled script hit an error that ends the script, such as a stack read out of range, the rest of the script kept running and could crash the player. It now stops there, as it does without the JIT.  
   >
   >Bug introduced when the JIT was added in 2.55-alpha-112 ([36fd73c209](https://github.com/ZQuestClassic/ZQuestClassic/commit/36fd73c209)). 
   >
- printf of a long string read past its buffer [`cc85aa405`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc85aa40550d751d37dd2f10d0c9037bd9c6fdb4)
   &nbsp;
   >printf() and sprintf() format text in chunks of 256 characters, and a chunk that filled all 256 was not terminated, so formatting a long string could add bytes from outside the buffer to the result.  
   >
   >Bug introduced when printf() was added in 2.55-alpha-75 ([fb25d06770](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb25d06770)). 
   >
- Stop a script that returns or jumps outside of itself [`f86780f08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f86780f08af86ffb5708f9ae744223e6e6c7ced0)
   &nbsp;
   >Only reachable with hand-written ZASM: GOTOR and RETURN, which the compiler uses to return from a function, jumped to whatever position was in a register or on the stack, and the next command was read from there, even if it was outside of the script. The script now stops with an error instead.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Debugger function calls can corrupt the running script [`b553dcd0a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b553dcd0ab4b8ba33f24525d5011be31ef56fd79)
   &nbsp;
   >Evaluating an expression that calls a function - from a watch, or the debugger console - while the game was running could make the script that was executing at that moment misbehave: one of its instructions ran with the wrong values. And if the function quit or called too deep, it stopped the script the debugger was paused in.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger cannot expand const arrays and objects [`2bfd97900`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bfd979007ec2f82a0dc0e2d6ae647b998aba703)
   &nbsp;
   >In the debugger's Variables and Watch panels, a member declared const - which includes most of the engine's arrays, like `Screen->ComboData` and `Screen->NPCs` - had an arrow to expand it, but expanding it showed nothing.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger expressions miscalculate with enums and untyped values [`d6e191a10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6e191a1044eb85f8137ac74305f6e9be43134fe)
   &nbsp;
   >In debugger expressions, `~` gave the wrong result for a bitflags or untyped value, so `flags & ~SOME_FLAG` did not clear the flag. Arithmetic between two enum or untyped values was also wrong: `SOME_ENUM + SOME_ENUM` gave a long like `20000L`.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger logs an error when hovering a null bitmap [`82af90cd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82af90cd7b0a8ac72939a9674b53a6e035458d8f)
   &nbsp;
   >Hovering a bitmap variable that is null or was already freed, in the debugger's source view or its Variables panel, logged an "Invalid bitmap" script error every frame. With "on error" breaking enabled, each one also reset the selected script and call stack frame.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Pausing the debugger can make the system menu unusable [`7aa864cf1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7aa864cf11de245467b1065dad903302f43037d5)
   &nbsp;
   >Pressing pause in the debugger takes effect when a script next runs. While no script was running - on a screen with no active scripts, for example - the system menu closed itself as soon as it was opened, and kept doing so until a script ran.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger shows "..." for values that appear twice [`1cedb3c60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1cedb3c60f775c11dd7a2c326459470823d58096)
   &nbsp;
   >When the debugger printed an array or object, anything inside it that had already been printed once was replaced with "...", even though only a value that contains itself needs that. An array held in two variables of an object showed its contents for the first only. Two unrelated values could also be mistaken for each other, such as an array and an npc that happen to share an id.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger keeps stepping after the script ends [`44239eb09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44239eb09cb3291640cd81cecf10739c189b9ee3)
   &nbsp;
   >Stepping in the debugger past the end of a script - stepping over its last line, or out of its outermost function - left the debugger stepping forever: the call stack kept showing where the step began, and the list of scripts stopped updating. Now it goes back to playing.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger value breakpoints pause when nothing changed [`f0c6d0958`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0c6d095821a1063de5bad6aa9842cbf93037c53)
   &nbsp;
   >A value-change breakpoint on an expression that uses a local variable or a member of the current object paused whenever execution moved to somewhere that expression has a different value, though nothing had changed: from one function to another that has a variable of the same name, from one call of a function to the next, or from one object's method to another object's. The value is now only compared against the last one from the same function call, script and object.  
   >
   >Bug introduced when value-change breakpoints were added in 3.0.0-prerelease.216+2026-08-30 ([f47b67abe4](https://github.com/ZQuestClassic/ZQuestClassic/commit/f47b67abe4)). 
   >
- Debugger expands same-named variables together [`e3704172e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3704172e461292264035e4d4b5472978d8d5f60)
   &nbsp;
   >In the debugger's Variables panel, two variables with the same name - a local that shadows a global, say - were treated as one: expanding or collapsing either did the same to the other.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Debugger expressions compute longs differently than scripts [`4fc0d9f71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fc0d9f717eef71fe7f976daec063a611e5b981f)
   &nbsp;
   >In debugger expressions, multiplying or dividing longs gave a different result than the same expression in a script: scripts always multiply and divide as fixed-point numbers, even longs, so `2L * 3L` is `0L` and `6L / 3L` is `20000L`. Mixing an int and a long also gave an int, rather than a long, and `&`, `|` and `^` then worked on the int part of the values rather than the whole of them.  
   >
   >Bug introduced when the rich debugger was added in 3.0.0-prerelease.161+2026-02-16 ([c7a2ccbb84](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2ccbb84)). 
   >
- Prevent crash when freeing a long chain of objects [`7e78b6d91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e78b6d91d3f153fc871ae7012bdac8f3fc28051)
   &nbsp;
   >Freeing an object that was the only holder of another object (ex. the head of a linked list) freed that one too, then the one after it, and so on, one nested call each. A chain of about 65000 objects ran past the end of the native stack and crashed the game. Destructors still run in the same order as before.  
   >
   >Bug introduced when the garbage collector was added in 3.0.0-prerelease.2+2024-07-24 ([d4bc547f8e](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4bc547f8e)). 
   >
- Prevent crash when a script sets an invalid combo type [`a142c7774`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a142c7774b4464bcf05740376bd57290b5623928)
   &nbsp;
   >ComboData->Type, Screen->ComboT[] and Game->SetComboType accepted types past the last valid one, which read past the end of the combo type table (for example when checking for water or pits).  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Prevent crash when a script sets an invalid combo id [`c3e5ca4c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3e5ca4c67af79791ca54a48fb099e18871a7966)
   &nbsp;
   >mapdata->FFCData[], Screen->SecretCombo[], Screen->UnderCombo, their mapdata versions and ComboData->NextData accepted combo ids past the last combo, and Game->SetComboData, ComboData->LiftCombo and ComboData->LiftUnderCombo accepted one past the last combo. Using such a combo (for a secret or Undercombo, by triggering the screen's secrets) read past the end of the combo list.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Prevent crash after `Hero->LiftWeapon` lifts an eweapon [`3476b49a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3476b49a8635ddb5e4685d1cc334a60f73aad0ce)
   &nbsp;
   >LiftWeapon accepted any weapon. An eweapon stayed in the list of eweapons while held, and was added to the list of lweapons when released, so freeing it from one list left it in the other. Now only lweapons can be lifted.  
   >
   >Bug introduced when lifting was added to scripting in 2.55-alpha-114 ([530f7c6898](https://github.com/ZQuestClassic/ZQuestClassic/commit/530f7c6898)). 
   >
- Prevent crash writing an object past the end of some engine arrays [`43b37dae3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43b37dae3dd8cfe33be633495ac3c3ea61f1bf01)
   &nbsp;
   >Some engine arrays (like mapdata->FFCData[]) can be written past their current size. Writing an object there stored its type before the start of the array's type list.  
   >
   >Regressed in 3.0.0-prerelease.155+2025-12-29 ([8d2ca5e422](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d2ca5e422)). 
   >
- Prevent crash when writing to an array frees the array [`76b5d368f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76b5d368fa2201065d55dee58103381ad8e64eb2)
   &nbsp;
   >Replacing or removing an array element releases the object it held. If that dropped the last reference to the array itself (directly, or through the object's destructor), the array was freed while still being written to - for example by itoa, or when resizing. The array now stays alive until the write is done.  
   >
   >Bug introduced when the garbage collector was added in 3.0.0-prerelease.2+2024-07-24 ([d4bc547f8e](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4bc547f8e)). 
   >
- Prevent crash when a script creates a sprite on an invalid screen [`11cc5e3e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11cc5e3e03cbb29a5a6c49a28b6a7e67e4e46861)
   &nbsp;
   >Sprites created by scripts (CreateNPC and friends) took their spawn screen from the script's screen reference, which hand-written ZASM can set to anything, and later looked that screen up. Now an invalid screen logs an error and uses the current screen, like Sprite->SpawnScreen.  
   >
   >Bug introduced when scrolling regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Prevent crash reading screen state for an invalid screen [`54064a59f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54064a59fc349fccf1b8693d42735d2effa7c738)
   &nbsp;
   >Screen->GuyCount and Screen->ExDoor checked the screen index wasn't negative, but not that it existed.  
   >
   >Bug introduced when scrolling regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Prevent crash after setting an item's ID to an invalid item [`e91344bb8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e91344bb87b818ada1849f2b6f6bf7f089f1b332)
   &nbsp;
   >item->ID accepted any value, and the item's data was then looked up by it (for example when moving the item).  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Quad3D and Triangle3D read past the end of their values [`8ae92d6df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ae92d6df08674711b23f547945e033113c24092)
   &nbsp;
   >Quad3D and Triangle3D made room for only as many values as their arrays held in total. Given arrays one value short of what they use, they wrote and drew one value past the end of that room.  
   >
   >Regressed in 2.55-alpha-26 ([15fe2ecf60](https://github.com/ZQuestClassic/ZQuestClassic/commit/15fe2ecf60)). 
   >
- Object freed while referenced after garbage collection in a destructor [`878ecc9e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/878ecc9e74aaeb3c7220668d561a07786d0f4955)
   &nbsp;
   >Freeing an object releases the objects it holds, then frees the ones only it held. If one of those ran a garbage collection in its destructor (ex. by allocating), the collection saw the object being freed as unreachable and released what it held a second time. An object that stored itself somewhere in its destructor was then freed anyway, leaving that reference pointing at a freed object.  
   >
   >Bug introduced when the garbage collector was added in 3.0.0-prerelease.2+2024-07-24 ([d4bc547f8e](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4bc547f8e)). 
   >

### ZUpdater

- Only download updates from the official GitHub releases [`fcde65464`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fcde654641185b67af9e4571f8d52293f08caefa)
   &nbsp;
   >The updater downloaded whatever file the release list on the website pointed to, from any server and over any protocol, so anyone able to change that list could make it install anything. Updates now are only considered valid if the URL is to the GitHub releases over https. 
   >

# Documentation

- Fix squished image in the combo triggers lightbox [`84b3de5af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84b3de5afa1ec7ef0f3c7f1ab8982b9a95e2124f)
   &nbsp;
   >The enlarged copy of an image took on the page image's layout classes, so the header image's max width clamped the enlarged width but not its height. Now only the theme class is copied. 
   >

# Build

- Fix building with clang 23 and its libc++ [`f82804280`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8280428081005adeee189239bcae91be7447acf)
   &nbsp;
   >Two files used std::chrono::steady_clock without including <chrono>, which the newer libc++ no longer pulls in transitively, and a web-only static is now flagged as set but never used on other platforms. 
   >
- [linux] stop on a stack buffer overflow instead of continuing [`4bc203c76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4bc203c7614711c74eea3570aa7609f30daee8e0)
   &nbsp;
   >Linux builds now have stack canaries and checked string functions, as the Windows and macOS builds already do, so writing past a fixed size buffer on the stack (for example, a long quest string in a log message) stops the program instead of overwriting what follows it. 
   >

# Chores

- Run the docs update cron as the ZC user instead of root [`b5aa3c7f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5aa3c7f800dd33b0398d2b8ef6d6d8716bb062c)
   &nbsp;
   >The docs cron resets the server's checkout to origin/main, installs its Python requirements and runs scripts from it every 10 minutes, all as root, so anything that landed on main (or in a dependency) ran as root on the server. Nothing in it needs root except writing the docs web root, so run it as ZC, which already runs the api server from the same checkout, and give ZC that folder. deploy.sh now also runs git as ZC so the checkout stays ZC's. 
   >
- Stop letting every local user talk to the api server socket [`d26d8751e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d26d8751e9f8efd2e1226b784e664fd6282eca13)
   &nbsp;
   >The uwsgi socket was world-writable (666), so any process on the server could send requests straight to the app, bypassing nginx. The service already runs with group www-data, nginx's user, so 660 is enough. 
   >
- Rate limit and cap replay uploads [`36e4e325e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36e4e325ed4ee45f8e03cd93aa281dfd843c2f1a)
   &nbsp;
   >Anyone could upload replays as fast as the server would take them, each new uuid adding a file of up to 300 MB to the disk and to S3.  
   >
   >nginx now limits replay uploads per IP (30 a minute with a burst of 60, at most 2 at once), and the server refuses uploads once the disk has less than 2 GB free (507), or once an IP (an IPv6 /64) has made 500 uploads or stored 3 GB that day (429). It also refuses a second upload from the same IP while one is still being handled, so one address can't tie up all the uwsgi processes. ZC treats both statuses as "try again later".  
   >
   >Decompression no longer briefly holds two copies of the replay when the gzip stream has a tail, and the decoded bytes are dropped once the text is decoded. 
   >
- Update replay_uploads_known_good_replays.json [`ccf787921`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ccf7879216d0d9241459876d74c7a30b1333c7a7)

# Refactors

### Player

- Share the lookup of a combo position within its screen [`cd5341d4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd5341d4e008c29b6ae3c858f5f58a61c39f6f49)
   &nbsp;
   >Many places found the combo at a world position by taking the position within its screen by hand. They now share one helper. 
   >
- Share the walk along a screen's carryover chain [`45c9e26c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45c9e26c6adb387ae2425186cf816c68fe00239c)
   &nbsp;
   >Setting or unsetting a screen state or an ExtraState, and triggering a screen's secrets, each had their own copy of the loop that follows the screen's carryover map and screen. They now share one helper. 
   >

### ZScript

- Mark the checks that only invalid ZASM can fail [`bd39886b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd39886b37f0ea1babc344525bcef3b279661be3)
   &nbsp;
   >Some checks can only fail for ZASM the compiler never emits: a register with no setter, an object type that doesn't exist, a variadic call with no arguments. A quest file can hold any ZASM, so these can be reached, and aborting is right for them.  
   >
   >They are now ZASM_CHECK, ZASM_DCHECK and ZASM_NOTREACHED, which are CHECK, DCHECK and NOTREACHED under another name. That sets them apart from checks that should never fail at all, and lets a fuzzing build treat them differently. 
   >
- Remove unused layer index macros [`3aa79772b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3aa79772bbe740a7a588ac9bd823ea2298d22008)
   &nbsp;
   >SET_MAPDATA_LAYER_INDEX, SET_MAPDATA_LAYERSCREEN_INDEX and SET_SCREENDATA_LAYERSCREEN_INDEX have had no users since the layer arrays moved to the array framework, and still carry the old zero-indexed compat shift, which now lives in the array class. 
   >
- Debugger makes all variables the same way [`519e817e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/519e817e13bf814abc3bc60eee45b7a8d816d430)
   &nbsp;
   >The Variables and Watch panels had their own copy of CreateVariableFromValue. 
   >

# Tests

- Replace AFL++ fuzzing with in-process libFuzzer targets [`69f2a961d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69f2a961d906c01c057bd1b83f2bcbb5771c9127)
   &nbsp;
   >The old setup ran AFL++ in Docker, starting a new zplayer for every input, and had stopped working. Now -DWANT_FUZZ=ON links libFuzzer into zplayer, and the ZC_FUZZ env var picks a target: qst, sav, zplay, music (Ogg, MP3, GME and MIDI), or ZASM. ZASM decodes each input into a ZASM script and runs it in a game of playground.qst through the interpreter, then the optimizer and JIT. Everything runs under ASan, in process.  
   >
   >scripts/fuzzing has scripts to build it, make seed corpora from the test files, run a target, and group the crashes by stack. See docs/fuzzing.md.  
   >
   >The ZASM target makes ZASM the compiler never emits, and the engine aborts on some of it on purpose (ZASM_CHECK, ZASM_DCHECK and ZASM_NOTREACHED). In a fuzzing build those end the script run and the target drops the input, rather than report each as a crash. 
   >
- Keep full crash reports from fork-mode fuzz runs [`4f4fa334e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f4fa334e055cbb64c8f3cd3d30d19fa0aac69c8)
   &nbsp;
   >In fork mode libFuzzer keeps only the first line of a crashing job's output, so crashes that depend on earlier inputs in the same process (and don't reproduce from the artifact) had no stack. run_fuzzer.sh now has ASan write each report to its own file, next to the run's log. Failed asserts and CHECKs also get a full ASan report now, rather than libFuzzer's one-line "deadly signal". 
   >
- Drop fuzz inputs that release object references they never took [`106cfac39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/106cfac39955eff45afc80a9925fc0480ddd2475)
   &nbsp;
   >ZASM can mark any value as an object reference, so releasing a script's references could decrement an object's count past zero. Engine code already logs and ignores that, but its assert reported it as a crash in the fuzzing build. It now drops the input instead, through a new ZASM_DCHECK_CONTINUE: it can't end the run like ZASM_DCHECK does, since this happens while resetting the script after the run is over. 
   >

# CI

- Stop pasting branch names into the compare workflow's shell [`260b0d161`](https://github.com/ZQuestClassic/ZQuestClassic/commit/260b0d1611b52d7ff44e63641cdabff2da6fac90)
   &nbsp;
   >The compare workflow runs with the repository's secrets after a CI run fails, including CI runs for pull requests from forks. It pasted the failing run's branch name straight into a shell command, so a fork branch with a crafted name could run arbitrary commands with those secrets.  
   >
   >The branch name and actor are now passed through environment variables. The release workflow's dispatch inputs get the same treatment. 
   >
- Refuse to unpack archive files outside the destination folder [`d30875e13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d30875e13dbe11ebf90c24ffb8856cdc94694542)
   &nbsp;
   >The compare workflow unpacks test result archives uploaded by the failing CI run, which may be a pull request from a fork. A crafted archive could write files anywhere on the runner, including over the compare tooling that then runs with the repository's secrets.  
   >
   >Archives are now unpacked with Python's 'data' extraction filter, which rejects members that would land outside the destination. The same goes for the developer scripts that download test results, and the docs server's release download. 
   >
- Only rerun real test suite replays when collecting a baseline [`f6005bcd6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6005bcd6c4e6485335220d3f315042c7f33496f)
   &nbsp;
   >To build the compare report, the compare workflow reruns the failing replays on the baseline commit. The replay names come from the failing run's test results, which a pull request from a fork controls, and were passed to the test runner with loose quoting. A crafted name could add arbitrary options to the test runner in a run started by the base repository.  
   >
   >Only names that look like a test suite replay are used now (a relative path to a .zplay file), and others are skipped with a warning. The arguments are quoted so they are split back up exactly as given. 
   >
- Limit what each workflow's token can do [`243b8e109`](https://github.com/ZQuestClassic/ZQuestClassic/commit/243b8e109fa77f746942ff47a6d65dbe9fcdc45d)
   &nbsp;
   >Only the dependency advisories workflow said what its GitHub token may do, so every other workflow got the repository's default, which can include write access to everything. A compromised step could have used that to push code, edit releases, or start other workflows.  
   >
   >Every workflow now has read-only access to the repository contents by default. Jobs that need more ask for it: publishing a release, pushing the coverage report, and the compare job, which reads other runs' artifacts, creates a ref for the baseline commit and starts a test run there. 
   >
- Pass the GitHub token to the compare scripts through the environment [`f1ff896e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1ff896e33c4d631f7e8f1e95b2dc1fae5ed9716)
   &nbsp;
   >The compare workflow passed its GitHub token to two scripts as a command-line argument. That didn't expose it: GitHub masks secrets in the logs, and the runner is used for this one job only. Reading it from the environment is just the more usual way to hand a script a secret, and it keeps the token out of the commands ci.py logs. 
   >
- Stop uploading coverage to Codecov [`4697f2a42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4697f2a426c330e3bb2ecbeb4a1797c53401f27f)
   &nbsp;
   >The Codecov action ran in the job that pushes to gh-pages, where the checkout leaves a token that can push in the git config for any later step to read. The HTML report on gh-pages covers the same ground, so drop the third-party upload. 
   >
- Pin the remaining third-party actions to commits [`62be39486`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62be39486b265192def914dff0cc22247699cefa)
