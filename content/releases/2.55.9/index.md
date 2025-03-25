---
title: 2.55.9
description: 
date: 2025-03-16T22:18:04Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.9/2.55.9-linux.tar.gz
    name: 2.55.9-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.9/2.55.9-mac.dmg
    name: 2.55.9-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.9/2.55.9-windows-x64.zip
    name: 2.55.9-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.9/2.55.9-windows-x86.zip
    name: 2.55.9-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 206126463
tag_name: '2.55.9'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

- show bottom 8 pixels [`acd97ba42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/acd97ba42a4dd993d8ca46c7d79260963ad6372c)
   &nbsp;
   >The bottom 8 pixels of the screen has always been hidden. This was considered to be a universally bad thing, so they are now visible. A compat quest rule is added to control this behavior.  
   >
   >When the bottom 8 pixels are enabled, active subscreens are still just 168 pixels tall. Instead, active subscreens travel an extra 8 pixels when opened.  
   >
   >ZC Player has a setting to configure this too. By default, it defers to the QR as defined in the quest, but users can override this. 
   >

### Player

- option to disable transparent darkrooms stacking multiple transparent layers [`d188ece0e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d188ece0e85762c8238e4081951da877a0b458e9)

### Editor

- 'Reference Tiles' [`42197305c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42197305c0489bd75412608733e7904ef805a94d)
   &nbsp;
   >In the tile pages, 'RClick->Set as Reference'. This tile will now display on the left-hand side while editing any other tile, as a reference. 
   >

### ZScript

- Allow '_' to be used as a spacer in numbers [`71a1233f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71a1233f932d3462ca645cf79ab870135dca5301)
   &nbsp;
   >Ex. 100_000 == 100000, 2_147_483_647L = 2147483647L, 0b10_10_10_10 == 0b10101010 
   >
- add `Game->HeroScreen` [`cfdfc4f76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfdfc4f7620340f89a63793c08abeacf97f1ff96)
   &nbsp;
   >In 2.55, this is always equal to `Game->CurScreen`. In 3.0, this updates as the player moves around. Added to 2.55 for script compatability. 
   >
- add `Screen->Index` [`136e14652`](https://github.com/ZQuestClassic/ZQuestClassic/commit/136e14652211dee026fe7c1d5eb05182abe382e7)
   &nbsp;
   >In 2.55, this is always equal to `Game->CurScreen`. In 3.0 scrolling regions, the value of this varies depending on the context (for example, an npc script will have this set to the screen the enemy spawned on). 
   >
- add `itemdata::FlashCSet`, improve `itemdata::CSet` [`7b9ed5505`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b9ed55059c09609ef7a4fbcf24a7e1f694e8eb7)
   &nbsp;
   >`itemdata::CSet` contained both the normal and flash csets, and required bitwise operations to access. It also didn't allow for setting the flash cset. Now, `itemdata::CSet` is only for the normal cset, and the flash cset uses the new `itemdata::FlashCSet`. 
   >
- add `Viewport` [`4f709c1a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f709c1a7440d6821e397accff26f27c0f3a3985)
   &nbsp;
   >This global represents the currently visible playing field. In 2.55, this is all read-only and only changes during scroll transitions. In 3.0, the visible viewport can be modified by scripts, and updates as the player moves around a scrolling region. 
   >
- add `Screen->DrawOrigin` [`4a1cf781c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a1cf781cf181eb012d9f47b9a79219385a510fa)
   &nbsp;
   >Determines how coordinates given to Screen drawing functions are interpreted. For more, see: https://docs.zquestclassic.com/zscript/globals/screen#globals-screen-var-draworigin 
   >
- more value range types (.., =.., ..=, =..=) [`7caa8a09a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7caa8a09ad5c3a555fcd46a5ba4e4d8c057ce022)
- add `ComboAdjust` for getting combo position offset by some pixels [`799c50086`](https://github.com/ZQuestClassic/ZQuestClassic/commit/799c50086a1dac67d32617de6dfcdd11c33a949f)

# Bug Fixes

- System menu mouse responsiveness [`c87cc947f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c87cc947f1b880efef68f850cb04a598a8fe5606)
   &nbsp;
   >Holding left-click and dragging across menus now allows going through multiple 'submenus' at once, including going back up to clicked-on parent menus. These were features of the old menu system, which were lost during the system upgrade. 
   >
- prevent crash when loading midi with 32 tracks [`b1094de6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1094de6d66dc889618412b35ce0d2fe6ee0dc0f)
- actually fix loading tile data for old 1.90 quests [`17d5fb84c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17d5fb84c8ddde33587f818edaa332103f81d30b)
   &nbsp;
   >2.55.7 (commit be55516) attempted to fix this, but used the wrong path to the classic quest. This commit fixes the path, but uses a new qst file with only the tile data (since classic_1st.qst is going to be removed).  
   >
   >See: https://discord.com/channels/876899628556091432/1289597114594103378 
   >

### Player

- 'Platform' ffcs teleporting the player as the screen loads [`93a5429a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93a5429a8061a61451846796411cc622d616f165)
- Game time shows in-game, even when you've 'cheated' [`0578ac021`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0578ac021265b9f1dcea83497cf8ebef78545537)
- show hero position in minimap for most special screens [`08f27d9c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08f27d9c937063e910770f87795959961c030a5b)
   &nbsp;
   >In the original Zelda, the dot in the minimap rendered even in special screens, except for dungeon passageways. ZC was never rendering for any special screens. Now, even item cellar / guy special rooms will render the dot on the screen the player came from. 
   >
- update dmap charted state more reliably [`7ee836aed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ee836aedc74a685da549315e20d30261ee0dce7)
- fix bad memory access when checking for sword tap [`2895858aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2895858aa7cd5133b9cf61b010c7c0c3ef9c9ef1)
- prevent OOB related to bridges in `HeroClass::checkchest` [`79b897537`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79b897537f0ed490fa6cfecf8ad84e70c6db46f3)
- prevent many crashes related to sprite list being full [`e4cd9b3af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4cd9b3afff3acea9c2d71aca63ff15e095765a4)
- off-by-one error in y-position world bounds for a few hero attacks
   >&nbsp;
   >Relevant changes:
   > - fix(zc): more off-by-one errors [`73d8493c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73d8493c7f203937ada62ee43cd3858af139b1df)
- F5 map snapshot works again [`00824cc75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00824cc758de686d675372bbd3a9890309dd1544)
- some collision issues related to 4-way movement with no-gridlock enabled. [`acc401cc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/acc401cc9b8be535c0e62545dfe70377a91023a7)
- broken 'Z_Eventlog` output related to ExStates [`13f619b80`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13f619b80794145aa36ddfeacb9cbf9eeef5cd0f)
- prevent crash when loading save files from 3.0 [`b9f3f3184`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9f3f3184df5af01486e55e9ce6182c80568e60d)

### Editor

- lockblock/chest combo wizard bad field for counter amount [`52a0b3d9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52a0b3d9dfd3af5aaa526da28c8ff0004d53a8d5)
- Mixed weapon listers now show 'E ' before enemy weapons [`12a65f01f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12a65f01f167567126acc619e1f101cd5fba5bc8)
   &nbsp;
   >Previously, they would, ex., list 'Magic' twice, once for the lweapon and once for the eweapon. This changes it to list 'Magic' and 'E Magic' separately. This does NOT change listers showing only eweapons, such as the enemy editor's attack field. 
   >
- 'BtnCounter' subscreen widget ui was crunched [`535f42a6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/535f42a6c4ed9eafec91f967b70178d67d8f1c1d)

### ZScript Standard Library (std.zh)

- wrap angle in `AngleDir4` and `AngleDir8` [`679ac99f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/679ac99f4aa83ed753fc100a932717bb92838154)

### ZScript

- keep modifications made during last frames before scrolling [`b481d37f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b481d37f21b83437010034b629f3721ee5eb7eb1)
   &nbsp;
   >When scrolling between screens, scripts can run for a few frames just before scrolling begins, but modifications to the temporary screen were not persisting during the actual scroll. 
   >
- prevent many out-of-bounds reads/writes [`d249a6bc3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d249a6bc333fae954b6c7196afe7749b04aa6d5d)
- use correct upper limit when setting itemdata Tile [`5a1f6d425`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a1f6d425f50fbf6b8fa63cc3a81b167ed3cb05b)
- properly revert scope when processing class [`f2ec202d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2ec202d7158f1c2c7bacd826563142b5a7cdb96)

# Refactors

- remove classic NES quests from release package [`978bc85b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/978bc85b3bc42cec4174c6f4de56eca7c28e7d1e)

### Player

- show play time even when recording a replay [`3cb36f31d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3cb36f31d7fd35c76a529ed4d59404662a1e61ec)

### Editor

- better error messages related to loading enhanced music files [`199c902a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/199c902a511d9e0900ed0ac11e871560dce621e6)
- drop "Load Tileset" and consolidate loading tilesets via File>New [`8f83d0370`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f83d0370b796325da7894f4f4e0bb55391067b1)

# Tests

- add nargads_trail_crystal_crusades/ffc_carryover.zplay [`bfc0ee182`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bfc0ee182b3cd83a511ea1a5c4bf2658a54a797e)
- add freeform_shutters.zplay [`e6ddc2633`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6ddc2633b9d17a9b0b74fcb78982e65bd6f2633)

# CI

- [win] update vcpkg to 2024.12.16 [`5df1a1a37`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5df1a1a37b5d212b9ae348d38a093e84ca24b6ae)
- upgrade actions due to node 16 deprecation [`beb78a0cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/beb78a0cc86e5ca06d88b0e22aa621a867ff7e9c)
