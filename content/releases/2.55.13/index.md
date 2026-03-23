---
title: 2.55.13
description: 
date: 2026-03-22T05:42:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.13/2.55.13-linux.tar.gz
    name: 2.55.13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.13/2.55.13-mac.dmg
    name: 2.55.13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.13/2.55.13-windows-x64.zip
    name: 2.55.13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.13/2.55.13-windows-x86.zip
    name: 2.55.13-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 300046691
tag_name: '2.55.13'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Player

- add option to manually upload single replay file [`8842ebd60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8842ebd60fd5b3b86493add6aceba690d2570c5a)
   &nbsp;
   >A new `Replay > Upload single replay` menu option allows users to manually upload individual replay files. 
   >

### Editor

- implicitly add `<qst dir>/scripts` to include paths [`1c837533e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c837533eaf0e929ca14d05f3052ceb1b398824a)
   &nbsp;
   >This introduces a new convention: place your scripts in a folder called `scripts` next to your `.qst` file, and you'll be able to compile your quest without ever modifying your include paths. 
   >

### ZScript Standard Library (std.zh)

- add `CheckItemDataScript()` to script_runners.zh [`a36568704`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a36568704316053352b71f82ebbe1282531f80a5)

# Bug Fixes

- gui label wrapping [`081f10d97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/081f10d9733e58ed01c119d351b8d62a6da04bb0)
- remove visual delay when click+dragging on a list [`314096ea9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/314096ea91a1bbb0260844203b4057f425914ab9)
- load music using case insensitive file lookup [`63d4cb2b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/63d4cb2b8589c45624147e8af73d132f0196e2e6)
   &nbsp;
   >When loading music, ZC looks for a folder named `music` (among others). If a quest places its music in `Music`, the music will still be loaded but only on case-insensitive filesystems (such as Windows). Previously, this would often fail on case-sensitive filesystems like Linux and the web. ZC now ignores casing when loading music files across all platforms. 
   >
- prevent grid widget from possibly hanging CPU [`277a5b5e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/277a5b5e03d8ad5fa3a22a5119f0e72b0128448e)

### Player

- pushed torches not shining [`0e395c9cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e395c9cbfcb610b40e1d9b90a7136449652c488)
- correctly check locked chest state for smart screen scrolling [`664344bce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/664344bcea3dd8e945b1a04c685b160a8989e9f3)
   &nbsp;
   >When combos on the next screen are checked for purposes of scrolling, the wrong state flag was being used for locked chests. 
   >
- save combos using the wrong attribyte for magic restore percentage [`5471281d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5471281d500aa5369f710f22cc7f322a45770080)
- control scheme using wrong value for quest-specific scheme [`e11d88987`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e11d889878155f264ec11015edab08016e9ed8d6)
- DCounter[] not working for counters >= 32 (the new custom counters) [`d3d9bd25d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3d9bd25d76ea236f04d4a551a20a3f303260b8a)
- reset cursor after canceling new file [`dcdfe3619`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dcdfe36196f5e0d20ccff9e0d87cbab8284610ff)
   &nbsp;
   >The heart cursor was sometimes displaying at an invalid position. 
   >
- control dialog crash [`aec0881ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aec0881ce08e2e2568ab30543568bef6ce0a2dc2)
- always cancel charging when scrolling [`99c60c1b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99c60c1b18b38d1bcb43b664a2a1d6096cd339f5)
   &nbsp;
   >The QR "Scrolling Cancels Charge" was introduced ~3 years ago as a compat QR, but it was accidentally implemented backwards.  
   >
   >Instead, the QR check is removed so this charging bug is now fixed for all quests. It is highly unlikely that any existing quests relied on this bugged behavior. 
   >
- resolve multiple out-of-bounds enemy ID accesses [`13216a826`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13216a826dcecdca5d8a7c8d0536a1a2093dc875)
   &nbsp;
   >This fixes a few potential crashes, including when Digdogger spawns Lanmolas.  
   >
   >* Prevent unmasked segment IDs from indexing `guysbuf` in `fix_coords`
   >  by using the local `SIZEflags` member.
   >* Fix off-by-one bounds check in `addenemy_z`.
   >* Prevent negative replacement IDs from bypassing bounds checks in
   >  `defendNew`.
   >
- `Disabled In Sideview Water` not working on some item types [`ce4121515`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce4121515130235d6988800dda500e9be0cd409c)
- make bombs explode instead of sometimes just deleting them [`5cd443b1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5cd443b1c82e2c77fa74b31eab6d4f8f9cbb9569)
   &nbsp;
   >The 'Break On Solid/Landing' and 'Timeout' weapon flags were simply deleting bombs; they now correctly trigger an explosion. 
   >
- for combo triggers, ensure bombs explode [`8819a5e76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8819a5e764b5b4c5601828d3b16b2d768bc663b0)
   &nbsp;
   >The 'Kill Triggering Weapon' weapon effect was simply deleting the bomb; it now correctly explodes. 
   >
- lweapon wind getting confused if more than 1 onscreen [`7746ecd34`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7746ecd3478315a73c729c7a1b2832df4da42317)
   &nbsp;
   >The player would teleport between winds when one died while another was on-screen. Now, the player remembers which wind they are in. 
   >
- cores of some enemy types not issuing generic script death events [`ffe47245b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffe47245b8121995ba329cee477a473c6a1ab9c4)
- 'copycat' trigger sometimes triggering the same combo again instantly [`ce6b681db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce6b681dbaea55165315955d359bbbf5bd8aa0b7)
- combo triggers triggering themselves extra times [`b1a26f9bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1a26f9bb1b04815dff39293c6f49539b61b162a)

### Editor

- classic / cambria tilesets having a 'pop' in the 'Jump' sfx [`ed256404f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed256404f79dc0b2adb611d100fbf71aafd8d574)
- 'Move' using bad tile count for weapon sprites' tile usage [`ce2781995`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce2781995c092267a88053c2d6912fa5133737fa)
- do not clear selected screen on `File > New` [`efeb9f4c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/efeb9f4c8d22102828612e07225c02a0e4234b92)
   &nbsp;
   >This dialog can be cancelled, but when doing that the selected screen (including all bookmark screen buttons) was being incorrectly cleared. 
   >
- 'Browse Notes' breaking gui on large notes [`c31e197cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c31e197cd086c6a1dee3967444dce9769c1d6663)
   &nbsp;
   >Now large notes will produce a scrollbar for the preview, rather than breaking the UI. 
   >
- use correct max widgets for subscreen pages [`9e2d8d0b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e2d8d0b16897f17a0f91da0e28f59e2342363a8)
   &nbsp;
   >The code incorrectly used 256 as the max in some places, but now all places use 8192. 
   >
- total subscreens not properly bounded [`73650b8a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73650b8a780d13f0280982b8fc905123af93d582)
   &nbsp;
   >Previously, you could create an unlimited number of subscreens, which could corrupt the quest file. The limit is now properly capped at 255 per subscreen type. 
   >
- scc editor using wrong value for 'goto string' dropdowns [`328d4536e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/328d4536eeea20a81dd0c955159048812ccbfd4d)
   &nbsp;
   >If strings were re-ordered, the list position was being used instead of the string number. 
   >
- Under Combo dialog broken for layers [`7934637ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7934637ab1502350647fb743bcb0a504c120dd35)
   &nbsp;
   >The 'map' being used for each layer was off-by-1, causing the dialog to edit the wrong screens when editing layers 
   >

### ZScript Standard Library (std.zh)

- add std_time.zh back [`304455776`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3044557761d6698c958e630d961536078b6fd7cc)
   &nbsp;
   >This file was deprecated in 2.55.4; however, a few things should have been preserved. 
   >
- update the correct counter array in `DCounterAdd()` [`fe4fc4ea3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe4fc4ea343bb8846d0e879b05a8259980cd72b0)
- rename misleading parameter for `NumNPCsOf` [`aeb16b7c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aeb16b7c2c481d7f2d03a1805dad7f2ac0370dd5)
   &nbsp;
   >`NumNPCsOf` requires the `NPC_` ID constants, but the function comment wrongly said it expects `NPCT_` type constants. 
   >

### ZScript

- enemy script movement functions wrongly over-accounting for screen edges [`4cc1982d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4cc1982d2909801688808f50f97529a598f671f5)
- Screen->Quad() being unable to use tiles >65519 [`14364b21e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14364b21e2ae2ad70d402336228431d4009737b3)
- don't repeat division [`2ea8b4bdf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ea8b4bdfbeefd0c934656858f465575bcb17002)
   &nbsp;
   >When the left-hand side is constant (ex: `10 / x`), the compiler was emitting inefficient ZASM that repeated the same division twice. The result was still correct, but it was doing extra work. 
   >
- bad weapon ID bounds check [`373b3ba82`](https://github.com/ZQuestClassic/ZQuestClassic/commit/373b3ba82cb6e4d4b3b57af2aebcfb704ab4598d)
- make the `DrawCombo` "frame" parameter useful [`3c2341623`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c2341623329e2c88db285e924093f5e3b938f8d)
   &nbsp;
   >It now specifies which frame of the combo's animation to draw. If a negative value is passed, the current frame is used, preserving the legacy behavior. 
   >
- improve how `DrawTile` wraps around [`7f701d718`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f701d718add53e9c9af92000c7c53eea13a0f02)
   &nbsp;
   >When drawing a >1 tall tileblock with `DrawTile`, it now wraps multiple rows at the edges similar to combos with Skip Y. 
   >
- use correct index for `npc->Shield[]` [`aaba8c914`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aaba8c914c40fc0a1b8f3ec2102285d01dafa6bd)
   &nbsp;
   >Ever since it was added, this field did not divide the index by 10000 so only really worked for index 0. 
   >
- bad bool checks for `Audio->PlaySoundEx()` and `Graphics->MonochromeHue()` [`751ab6923`](https://github.com/ZQuestClassic/ZQuestClassic/commit/751ab6923bc5b801cb9557e0b1a0f3cc69b34dd1)
   &nbsp;
   >The script engine was incorrectly dividing the bool parameter by 10000, which produces the wrong results when the compiler is configured to emit 1L (rather than 10000L) for the `true` keyword. 
   >
- itemdata `Counter` fields not allowing new counter values [`2da6aee65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2da6aee65f245500d47ccf9690c4a962cb30cc2c)
   &nbsp;
   >The set values were being capped at 32. 
   >

# Documentation

- specify the "instant" SCC warp effect first does blackout [`105ff9cfa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/105ff9cfa83107d882d87e93ebe804ac512b8942)

# Refactors

### Player

- speed up loading replays by 20x [`3e93387db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e93387db5b402824f7eddde07348d02647384cc)
   &nbsp;
   >Very large replays could take many seconds to load, which made long save files load slowly.  
   >
   >Also now logging the time taken to load replay files. 
   >

### Editor

- clean up undercombo dialog based on feedback [`906875ae8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/906875ae8826bd1af5e1e4a28668e834debd38de)
