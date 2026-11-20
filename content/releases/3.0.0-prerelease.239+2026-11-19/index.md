---
title: "3.0 Prerelease 239 2026-11-19"
description: ""
date: 2026-11-20T01:58:36Z
assets: 
  - url: "https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.239%2B2026-11-19/3.0.0-prerelease.239%2B2026-11-19-linux-aarch64.tar.gz"
    name: "3.0.0-prerelease.239+2026-11-19-linux-aarch64.tar.gz"
    platform: linux-aarch64
    size: 34139738

  - url: "https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.239%2B2026-11-19/3.0.0-prerelease.239%2B2026-11-19-linux-x64.tar.gz"
    name: "3.0.0-prerelease.239+2026-11-19-linux-x64.tar.gz"
    platform: linux
    size: 34805822

  - url: "https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.239%2B2026-11-19/3.0.0-prerelease.239%2B2026-11-19-mac-universal.dmg"
    name: "3.0.0-prerelease.239+2026-11-19-mac-universal.dmg"
    platform: mac
    size: 40917915

  - url: "https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.239%2B2026-11-19/3.0.0-prerelease.239%2B2026-11-19-windows-arm64.zip"
    name: "3.0.0-prerelease.239+2026-11-19-windows-arm64.zip"
    platform: windows-arm64
    size: 37015569

  - url: "https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.239%2B2026-11-19/3.0.0-prerelease.239%2B2026-11-19-windows-x64.zip"
    name: "3.0.0-prerelease.239+2026-11-19-windows-x64.zip"
    platform: windows-x64
    size: 36563576

  - url: "https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.239%2B2026-11-19/3.0.0-prerelease.239%2B2026-11-19-windows-x86.zip"
    name: "3.0.0-prerelease.239+2026-11-19-windows-x86.zip"
    platform: windows-win32
    size: 34598869
prerelease: true
id: 452211249
tag_name: "3.0.0-prerelease.239+2026-11-19"
channel: '3'
tags:
  - releases
---

# Bug Fixes

- Invalid palette numbers loaded colors from outside the palettes [`1dfd38554`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1dfd38554194e0f7e3a8c99d40a824427997e68c)
   &nbsp;
   >npc->FrozenCSet, an enemy's boss palette, and a combo trigger's level and sprite palettes were used to load palettes without checking them. A number past the last palette copied whatever memory followed the palette data into the screen's colors, where a script could read it back. Such palettes are now ignored.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Dropping an item from an invalid dropset read past the dropsets [`5b027d7f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b027d7f73a4641d79eb4e5cd295d0bbbc2d99a1)
   &nbsp;
   >An enemy's npc->ItemSet, a combo's dropset attribute, and the dropset given by a generic script's item drop event were not checked before being used to pick a dropped item. A number past the last dropset picked an item from the memory after them. Now nothing drops.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Magic mirror read past the DMaps with an invalid mirror DMap [`9dd2319e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9dd2319e66adb8ce1adf026ed9679414839b3279)
   &nbsp;
   >dmapdata->MirrorDMap accepted the number of DMaps, one past the last one, and the mirror DMap in a quest file was never checked. Using a magic mirror on such a DMap read its offset from past the DMaps. Now the mirror does nothing.  
   >
   >Bug introduced when magic mirrors were added in 2.55-alpha-100 ([fa8db52d6d](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa8db52d6d)). 
   >
- An invalid continue or entrance DMap read and wrote outside the dmaps [`4d34b2594`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d34b259405962d5e91d542fc2a6d3d14a128d46)
   &nbsp;
   >The DMap to continue at, from the save file, the quest's starting DMap or Game->ContinueDMap, and Game->LastEntranceDMap weren't checked. The game would start or continue on that DMap, reading past the dmaps and marking it visited in memory past the list of visited dmaps. An invalid continue DMap now acts as DMap 0, and both script variables log an error for an invalid DMap.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- A combo type past the last one from the quest read past the combo type table [`591622104`](https://github.com/ZQuestClassic/ZQuestClassic/commit/591622104c9ee260d4e2fc9249aefdd924391b1b)
   &nbsp;
   >A combo's type in a quest can be any number up to 255, but the table of combo type properties only had room for the valid types. Higher types read past the table wherever the game checks those properties, for example when checking for water or solid ground.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Drawing an invalid 8x8 tile read past the tiles [`eb506b1d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb506b1d04e779d571bce078dfbf3e89471d61ff)
   &nbsp;
   >The functions that draw a quarter of a tile didn't check the tile, the way the ones that draw whole tiles do. Subscreen widgets, frames and minimap tiles from the quest could pass one past the last tile, which read tile data from past the end of the tiles and drew from wherever it pointed. Such tiles are now not drawn.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- [win] paths with non-ASCII characters failed before Windows 10 1903 [`ff6801ae8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff6801ae80f468e396c9746e1f45106deaef680e)
   &nbsp;
   >On Windows versions older than 10 1903, a save whose quest has an accented file name (like "Légende.qst"), a saves or quests folder with one, and music and script file names with one were no longer found.  
   >
   >Regressed in 3.0.0-prerelease.233+2026-10-29 ([c01ebb4d8b](https://github.com/ZQuestClassic/ZQuestClassic/commit/c01ebb4d8b)). 
   >
- Prevent crash on some corrupt OGG files, and wrong gamepad mappings [`f5c6d2ee6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5c6d2ee60b16a69c4fb32a23957495d32f36ae5)
   &nbsp;
   >* Loading a corrupt OGG sound or music file could write outside of its
   >  buffer and crash.
   >* Some gamepad mappings (such as the "xinput" entries) could get mixed
   >  up with another device's mapping.
   >* On macOS, the window no longer goes blank while it is being resized.
   >

### Player

- Damaged save could write past a script object's variables [`bb86f9cf9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb86f9cf9a614a32f28fda93b726efb84d686e5d)
   &nbsp;
   >A save file says how many of a script object's values are its own variables, but that number was never checked against the number of values the object has. A crafted save made loading it read and clear memory past the object's values. Such a save now fails to load.  
   >
   >Bug introduced when global objects began saving to the save file in 2.55-alpha-112 ([e9bc106b91](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9bc106b91)). 
   >
- Damaged save with repeated script object ids corrupted memory [`5880955b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5880955b0a7687d29d46d8c2058b54d8922acae7)
   &nbsp;
   >A save file holding two script objects with the same id (say an array and a class object) replaced the first with the second, but kept listing the first under its own type. The engine then used the object as the wrong type, and could later write past its list of objects. Now an object whose id is already in use is dropped when the save loads.  
   >
   >Bug introduced when arrays began saving to the save file in 3.0.0-prerelease.118+2025-07-11 ([4b40449cc8](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b40449cc8)). 
   >
- Script without an end in a quest file read past it [`432d9699e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/432d9699e579c933de79ded59f3bff201c25599b)
   &nbsp;
   >A quest file's script ends with a marker, and the engine finds the end of the script by looking for it. A damaged or crafted quest file whose script had none led the engine to read past the script, and run what it found there as more of it. The marker is now added when it is missing.  
   >
   >Bug introduced when ZScript was added, before 2.50.0. 
   >
- Script positions from a quest file could point outside of its ZASM [`065bc478f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/065bc478f1185778f88a1d9513cebdcb56691c91)
   &nbsp;
   >A 3.0 quest file says where each script starts and ends in the quest's shared ZASM, and neither was checked. A crafted quest could start a script past the end of the ZASM, so running it read what followed in memory as script commands. Such a script is now disabled when the quest loads, with a warning.  
   >
   >Bug introduced when scripts began sharing their ZASM in 3.0.0-prerelease.102+2025-05-04 ([51ec0e0a51](https://github.com/ZQuestClassic/ZQuestClassic/commit/51ec0e0a51)). 
   >
- Damaged save could run an object's destructor from outside the script list [`172c3ed41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/172c3ed41ec15a1cf8d218c0f5de4fadc07839a6)
   &nbsp;
   >A script object in a save file records which script its destructor belongs to, and that number wasn't checked. A damaged or crafted save could give any number, and deleting the object then read a script from past the end of the list of scripts, and ran it. A destructor for an enemy, weapon or item that no longer exists crashed. Now neither runs.  
   >
   >Bug introduced when object destructors were added in 2.55-alpha-112 ([af0f9e5949](https://github.com/ZQuestClassic/ZQuestClassic/commit/af0f9e5949)). 
   >
- Invalid onMap script from a quest read outside the script list [`a72babcbf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a72babcbf066f8d41c3120dc60c67444ee63bd96)
   &nbsp;
   >A DMap's onMap script is stored in the quest as a number that wasn't checked when it loaded. A damaged or crafted quest could give one past the last DMap script, and opening the map then read a script from past the end of the list of scripts. Such a DMap now has no onMap script.  
   >
   >Bug introduced when onMap scripts were added in 2.55-alpha-92 ([9d6415a92b](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d6415a92b)). 
   >
- Invalid DMap script from a current quest read outside the script list [`ee4118af1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee4118af156752fe4c548247d013600e7ca5b162)
   &nbsp;
   >A DMap's scripts (active, onMap, and the scripted active and passive subscreens) are stored in the quest as numbers. They were only checked for quests saved before 3.0.0-prerelease.205, so a damaged or crafted quest in the current format could give one past the last DMap script, and opening the subscreen or the map then read a script from past the end of the list of scripts. Such a DMap now has no script there.  
   >
   >Bug introduced when the quest format for script settings changed in 3.0.0-prerelease.205+2026-07-30 ([76b97b95ee](https://github.com/ZQuestClassic/ZQuestClassic/commit/76b97b95ee)). 
   >

### Editor

- Quest with scripts could not be opened again after saving [`ad2521919`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ad25219192479434658f255130783d895152c14a)
   &nbsp;
   >Saving a quest wrote one more script command to its header than it saved, so opening the quest again failed with "Invalid quest file".  
   >
   >Regressed in [432d9699e5](https://github.com/ZQuestClassic/ZQuestClassic/commit/432d9699e5) (not yet in a release). 
   >

### ZScript

- Shopdata arrays wrote outside the shops [`f620df659`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f620df659efc40b55cab8e73bcd804b296f4bffe)
   &nbsp;
   >shopdata's Item[], HasItem[], Price[] and String[] checked the index given to them, but not the shopdata. A script can make a shopdata out of any number, and for one that is neither a shop nor an info shop they read and wrote memory past the shops. Now they log an error for such a shopdata, and do nothing.  
   >
   >Bug introduced when shopdata was added in 2.54-Alpha-21 ([0993538aeb](https://github.com/ZQuestClassic/ZQuestClassic/commit/0993538aeb)). 
   >
- Dropsetdata one past the last dropset read and wrote past them [`14c9dfc30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14c9dfc304e071294f3ec1473e16131226493319)
   &nbsp;
   >Game->LoadDropset() and dropsetdata accepted the number of dropsets as a dropset, one past the last one. Its variables read and wrote memory just past the dropsets.  
   >
   >Bug introduced when dropsetdata was added in 2.55-alpha-44 ([7383b32fc0](https://github.com/ZQuestClassic/ZQuestClassic/commit/7383b32fc0)). 
   >
- `Hero->Dir` accepted directions the Hero can't face [`2b3b6ab44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b3b6ab447210e8ad109905212ed315bf8a05a32)
   &nbsp;
   >Hero->Dir could be set to any number, but the Hero's sprites only have the four main directions, and drawing the Hero looked up its tile from memory past them. Hero->Dir now logs an error for any other direction, and leaves the direction alone.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Turning around a sprite with an invalid direction read garbage [`732010ef9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/732010ef9edeeb2f6717cc4bc96aea1e1bfe8932)
   &nbsp;
   >Scripts can give a weapon, enemy or item any direction. Reversing one whose direction wasn't one of the 8 (a reflected weapon, a bounced boomerang hitting a shield) read its new direction from past the end of a table. Now it gets no direction.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- Quad and Triangle with a size of 0 read outside the texture [`d7c69b082`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7c69b082ad71d4d8fd6839127a9eb8c58ebba4f)
   &nbsp;
   >Quad(), Triangle() and their 3D and bitmap versions require the tile width and height to be powers of two, but 0 passed that check. Drawing with an empty texture read pixels from outside it. A size of 0 is now rejected like the other invalid sizes.  
   >
   >Bug present since at least 2.53-Beta-11 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1)). 
   >
- An eweapon with an invalid ID read past the Hero's defenses [`6baee2a77`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6baee2a773c91340f29460fea83ae0c3b7db69ee)
   &nbsp;
   >A script can set a weapon's ID to any number, and when such an eweapon hit the Hero, the Hero's defense against it was read from past the end of the Hero's defenses. Unknown weapons now get the normal defense.  
   >
   >Bug introduced when the Hero's defenses were added in 2.55-alpha-86 ([4d3bbaf096](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d3bbaf096)). 
   >
- An invalid defense from the enemy hit event read past the enemy's defenses [`62bc9b5e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62bc9b5e0b70c400ef54bf28b1e756b8dd7aea7a)
   &nbsp;
   >A generic script handling the enemy hit event could set the defense to use to any number, and higher ones than the enemy has read past its defenses. Such a hit is now ignored.  
   >
   >Bug introduced when the enemy hit event was added in 2.55-alpha-109 ([f42eaa3ee6](https://github.com/ZQuestClassic/ZQuestClassic/commit/f42eaa3ee6)). 
   >
- A script running inside another one corrupted the outer script [`253f45428`](https://github.com/ZQuestClassic/ZQuestClassic/commit/253f454288bff6a5ea69f52b255ae2b2e3acc1a5)
   &nbsp;
   >Some commands run generic scripts from inside the command (like the zap and wavy effects, which run whole frames). The running script's state is global and wasn't put back afterwards, so scripts went on with another script's position, registers and stack, running the wrong code. The outer script's state is now restored.  
   >
   >Bug introduced when generic scripts started running during those frames in 2.55-alpha-107 ([28603ced76](https://github.com/ZQuestClassic/ZQuestClassic/commit/28603ced76)). 
   >
- `npc->Frame` set the npc's halt timer instead of its frame [`cadc24a4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cadc24a4c6c22717ee55a41aea6dd260e1687b4c)
   &nbsp;
   >Setting npc->Frame changed npc->Halt and left the animation frame alone. It now sets the frame, which is what npc->Frame reads.  
   >
   >Regressed in 3.0.0-prerelease.172+2026-04-14 ([a341cc6eb6](https://github.com/ZQuestClassic/ZQuestClassic/commit/a341cc6eb6)). 
   >
- Read past the local arrays when every one was in use [`91cbba0f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/91cbba0f3140cb6871703f52c93acf1d4f058d0d)
   &nbsp;
   >Only reachable with hand-written ZASM in a quest compiled before 3.0: making an array for a function's variadic arguments looked for a free array past the last one when all were taken.  
   >
   >Bug introduced when variadic parameters were added in 2.55-alpha-117 ([f8a4240293](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8a4240293)). 
   >

# Documentation

- Jump to anchor links instead of smooth scrolling [`6f3ff052d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f3ff052d44b2da0572e0dc483f49b6aecf8b26f)

# Refactors

### ZScript

- Remove an unused screendata macro [`70964d3c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/70964d3c075014582340e31904ca5905667f0dc5)
   &nbsp;
   >SET_SCREENDATA_BOOL_INDEX was never used, and its error message passed its arguments in the wrong order (a number for %s). 
   >

# Tests

- Trim idle tails off uploaded replays in replay_uploads.py [`8b8a82a04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b8a82a0421c1e9ad0474db8bd152e4e61abc357)
   &nbsp;
   >Some uploads end with hours of nothing: the player paused, walked away, and closed the program much later. One replay has 74 seconds of play followed by 7 hours idle, which made it the longest-running replay in the set. When a replay runs more than 5 minutes past its last step (not counting the final quit), it is now cut off at that step. Playback stops at the last step, so none of the idle frames run. 
   >
