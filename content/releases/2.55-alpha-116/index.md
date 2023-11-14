---
title: 2.55 Alpha 116
description: The one with custom Guys, quest package exports, and a ZScript VS Code extension.
date: 2023-08-02T04:53:32Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-116/2.55-alpha-116-linux.tar.gz
    name: 2.55-alpha-116-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-116/2.55-alpha-116-mac.dmg
    name: 2.55-alpha-116-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-116/2.55-alpha-116-windows-x64.zip
    name: 2.55-alpha-116-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-116/2.55-alpha-116-windows-x86.zip
    name: 2.55-alpha-116-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 114758097
tag_name: '2.55-alpha-116'
channel: '2.55'
tags:
  - releases
---


# Features

- Torch combos support shapes, dirs, new Square shape. [`57f6cea0c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/57f6cea0c299127b95077c07067216e3b598032b)
   &nbsp;
   >Also refactor how shape drawing works to remove the need for duplicate ZQ versions. 
   >
- Add general SFX/Sprites to combos (no zscript access yet) [`4d55a2a74`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4d55a2a7497fe9e1e532b7bd83d7f922e92f7c7e)
- add solid damage combo QRs [`ab146e65f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ab146e65f5a83774061cb077cdb4b15cb89a9d4f)
   &nbsp;
   >also fixed "No Solid Damage Combos" QR and fixed more issues with Newer Hero Movement 
   >
- Customize 'Guy' per-room (compat ruled) [`00302d51e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/00302d51e3843eef79ea2bd5e4e5b5e32f5b5c0e)
- multiple new options related to subscreen item selection [`6ff6a775f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6ff6a775fa4d6d364d9ddbbd660c7ccc3e8d041e)
   &nbsp;
   >- Cursor can be allowed to select empty slots (Freeform Subscreen
   >Cursor)
   >- Can be set to require pressing B to equip (Always Press To Equip)
   >- Items have 'Non-equippable' flag, allowing them to be cursor-selected
   >without allowing them on buttons.
   >
- add quest package export for standalone app [`669ed4833`](https://github.com/ArmageddonGames/ZQuestClassic/commit/669ed4833bb9b49a31328d6c90f8c2759f0b6327)
   &nbsp;
   >In the ZQuest `File -> Export` menu, there is a new option to package your `.qst` file as a standalone application. This gives you the option to distribute your quest in a way that allows people to play without grabbing any other files, or needing to select a file when starting a save slot.  
   >
   >For a qst `game.qst` with a title "My Game", it looks like this:  
   >
   >```
   >- My Game
   >	- My Game.exe
   >	- data/
   >		- zelda.exe
   >		- zc_args.txt
   >		- game.qst
   >		- ... all support files ...
   >```
   >
   > This is located in the `packages` folder of the root installation folder.  
   >
   >Double clicking `My Game.exe` launches `./data/zelda.exe` with the CLI switches listed in `zc_args.txt`. By default, the export tool provides these switches: `-only game.qst -notitle`. You can set whatever else you like. For example, if you want to skip the save file screen entirely, you can use `-standalone` instead of `-only`.  
   >
   >Every time a package export is done in ZQuest, the folder is created from scratch.  
   >
   >To include additional files, make a folder `./packages/My Game_extra` and place whatever your quest needs (music, images, `zc_args.txt`, `zc.cfg`, etc). The export tool will copy this folder into the package folder at the end, which allows you to overwrite whatever you want.  
   >
   >Custom icons are also supported. See `docs/packaging_quests.md` for details. 
   >
- add -window-title switch [`e9a7e4f6c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e9a7e4f6c05e21aa3af9aa74d9a6e18306d13506)

### Editor

- 'Quick Compile ZScript' favorite command [`8652f1c91`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8652f1c919bfd6531ce61c0d90af231cb4ef3d72)
- Option to auto-recompile when saving quest [`28db73dc7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/28db73dc78369758b72dabb86b30df6dfdc94628)
- save autolayer info to reapply to blue void screens as a default [`d955ace97`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d955ace97325238c9076d7525aa80fe9b63b5b01)

### ZScript

- Add script access to draw lights (circle, cone, or square) arbitrarily. [`bd032d78d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bd032d78d50ebf5093754fa63400fb60dff0828e)
- '@InitScript(int weight)' annotation allows multiple global init scripts (all merged into ~Init). [`dcaa46921`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dcaa46921153369b1dbd3e59a1bd27fcaef70c21)
- jit compile MULTV [`02cb588d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/02cb588d37c1a42189a2c4160fd7399147b005a1)
- JIT compile scripts with background threads [`e0a845b53`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e0a845b53192034c814c427100a0349ce9204fe4)
   &nbsp;
   >Control how many threads are used with `[ZSCRIPT] jit_threads`.  
   >
   >```ini
   ># Number of background threads for compiling scripts.
   ># -1 to set to number of available CPU threads
   ># -x to set to (number of available CPU threads) / x
   ># 0 to only compile on the main thread
   >jit_threads = -2
   >```
   >

### Visual Studio Code Extension

- create VS Code extension [`dabe7c091`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dabe7c091b89fa2e09217dfb63c652184b78f65e)
   &nbsp;
   >This adds support to VS Code for displaying error/warning messages, syntax highlighting, and code formatting. You can install it by searching for "zscript" in the extensions Marketplace. See the extension homepage for more:  
   >
   >https://marketplace.visualstudio.com/items?itemName=cjamcl.zquest-lsp 
   >
- update vscode extension keywords [`6ecf0775a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6ecf0775afeac108bb4f806b76f9c1835c0a98d1)

# Bug Fixes

- memory leak when allegro does not find file [`4ab4a512f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4ab4a512f7761b0a0bec17b9eefe70b93d16c11e)
- for linux, use posix_spawnp when launching processes [`d93e3c2eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d93e3c2ebe5daab8be0d9463ec9396607655193b)
- set dirty flag for vedit text field components [`e21e66f69`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e21e66f69264d9b14090acdeafe8cd03a09da754)
- bad ternary from solid damage commit [`c46056a29`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c46056a293baedd88962fcd586ee5a9dfa1f695c)
- ZQ doesn't lock up if parser crashes [windows only] [`51eaa167d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51eaa167d8d517b7d9cc6f4c32c9ee101c529b42)
- properly set sentry breadcrumb category [`654dd9c24`](https://github.com/ArmageddonGames/ZQuestClassic/commit/654dd9c24facf3c734bcebf1834fbf0ee4f48c6b)
- add win7 compat for GetOverlappedResults [`8a0699eb5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8a0699eb592376cd48cffa24037df790136074b9)

### Player

- reset button down state correctly [`bb1e906cd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bb1e906cdef59039e2a4bc503179ae6f8f0af11c)
- 'npc->Remove()' no longer leaves behind enemy bg sfx [`691b022d8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/691b022d866672c10a9759328878cbd861a3e0c1)
- clear darkroom bitmaps to dark color during player death animation [`22e241747`](https://github.com/ArmageddonGames/ZQuestClassic/commit/22e241747ecf5f2eed852a4f082766394a965768)
- Lantern inconsistency during scrolling caused by previous commit [`00a536cc2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/00a536cc2f146d74dee63eb726f1c22eb2238a2d)
- memory leak in read_one_subscreen [`17f5ecc64`](https://github.com/ArmageddonGames/ZQuestClassic/commit/17f5ecc64cec8d98ea7fb5e0d848221b576038ba)
- more reproducible fairy hearts, for replay in Debug mode [`901a3e05d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/901a3e05ded5e1e803ad35a3331e52f4e2b3c1a5)
- various newer hero movement [`9762141db`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9762141dbe1bd7461b5dee03a627f290c6ed322a)
- new respawn points with ladder [`5641cf8c1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5641cf8c1a9e76ed8fca68e7189f71c5efd20e1e)
- check for invalid screen index in subscreen map draw [`f327193e1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f327193e1c6574956ac1187cb3bc2bebdfcfbbb9)
- reduce some data races [`8c2dda32e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c2dda32ed50eadea95ed7465b18e17a6228dcf1)
- smart conveyors snapping you to the grid [`337727343`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3377273439dcb2fd2df2398c8ed85b7cb5ba6245)
- Crash related to reflected magic having invalid parent [`c3f9d7d48`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c3f9d7d4860e2793a6ef28f1b123bc695ea7ad44)
- specific NES door softlock [`26541dbc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/26541dbc367770c386b32e767e1c02f1fe3ab3b4)
   &nbsp;
   >softlock when moving through a bombable or walk-through door *in mid-air* with "No Scrolling Screen While In Air" enabled. (Now, with this rule on, you won't be able to go through the door until you land) 
   >
- input prompt not showing when configuring gamepad [`a226a2ee9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a226a2ee9bd7c16f24a5f6572a9cfc8b1ba2ab6a)
- prevent invalid memory access in triggerfire [`b3c209499`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b3c209499f8707b64323154a0b72d003b46ace9b)
- prevent invalid memory access in joytn [`1aa558687`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1aa558687075193ca92fbab3971ea6078a152e5d)

### Editor

- set list position for strings of older quests [`9cd257e09`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9cd257e096c679e259993b88c8bc1200044dab3c)
   &nbsp;
   >This resulted in the Strings GUI not correctly showing all the strings. 
   >
- use correct index when saving string editor "Next" [`52d8e4081`](https://github.com/ArmageddonGames/ZQuestClassic/commit/52d8e40813b5a7c2fb38de6de1999ce29711f804)
- some pasting/blue void screen related issues [`cf1dfbbc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cf1dfbbc3981304550a7ff84338117cad9a80cf6)
- blue void issues related to F4 (screen palette) dialog [`33ee353c3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/33ee353c36a1d9a5b8823b1163af7feb55e002a5)
- grabbing tiles from qst files [`3312ba667`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3312ba667d5f4c6e1d6181777800ffc41a3cc968)
   &nbsp;
   >Commit `142485` regressed this, by accidentally throwing out the next section id when skipping unwanted sections. 
   >

### ZScript

- global object arrays being wrongly cleared on F6->Continue [`f9383ff99`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f9383ff9985c822a40d0d5dcbce5f076a9f55955)
- fix for-each loops on non-const arrays. [`9c6e31bca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9c6e31bca7e4ee06478f9445be3e1bb717251431)
- free jit script handles on engine shutdown [`52db50c21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/52db50c2165cffae2eb781fd1ed9d3dc46b72a8d)
- Negative Array rule issues [`0da042ba3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0da042ba3b238bba1b468c753f24cce71cefc2a4)
   &nbsp;
   >Fixed negative array rule not being respected on first load of game (either via test quest or when loading from file select); also fixed negative array rule not being turned on via compat. 
   >
- compile crash [`3cadfecb3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3cadfecb3b9c7ab9a031980c49bc641be99570db)
- several class related bugs [`9024587f5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9024587f54a2543417522d471cb2ec00623fc432)
- QUOTEDSTRINGs not merging for all use cases (ex. annotations) [`c9caaafa5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c9caaafa5e3eb75a73070b8c3dcd2e7c075f831b)
- screen script run function arguments [`52b34fb60`](https://github.com/ArmageddonGames/ZQuestClassic/commit/52b34fb608d2e40646fbc64bf6629a2bf340aa2d)
- shutdown jit thread pool before resetting scripts [`bb213c146`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bb213c146a4040ee227358e0867060ee2f0ebd3f)
   &nbsp;
   >This prevents a segfault when a thread is compiling some old script after a new quest has loaded. 
   >
- Broken labels and stack size in global init scripts [`1a0707e41`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1a0707e415a4e37e682bc8e24f2caf8260b4a96d)
- more string literal related issues [`0b0fcee0f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0b0fcee0f7230ba16964ce01eec8d35154fac123)
   &nbsp;
   >also added macros to help fix more of these that might pop up 
   >
- prevent MODR divide-by-zero in jit [`6afb11354`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6afb113544101bbe62e1ed48f9f6ff9a38e42ee6)
- make div-by-zero an error instead of a warning, when divisor is literal 0 [`9e7563267`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9e756326754ac026db3ef2d26a2a65454945f701)
- script engine hanging on empty script [`9bf81e42c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9bf81e42c433d361af734d97eb5bf8e18b50d268)

### Visual Studio Code Extension

- support missing edge case for parsing error [`8b70ca3d0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8b70ca3d0e0c2127ae7e5895c9217c43e3319065)

# Documentation

### ZScript

- docs for light-related new drawing functions, LIGHT_SQUARE constant [`173389422`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1733894222086edd7da56d2d1e6b9a52bcdd59ad)

# Build

- remove alogg, use a5 audio streams for ogg [`7beab3968`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7beab3968d85ca96775d8919618f6f7ad01794a6)
   &nbsp;
   >Also refactors zcmusic to use `ALSTREAMFILE` for any a5 audio stream. Currently, mp3 and ogg use this.  
   >
   >Co-authored-by: Moosh64 <44924261+Moosh64@users.noreply.github.com> 
   >
- fix compiling zcbase for msvc debug [`84ef4d15e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/84ef4d15e2059f26ab93cd8f6b462d7304a9503f)
- upgrade to latest allegro [`845acc646`](https://github.com/ArmageddonGames/ZQuestClassic/commit/845acc646a489b2b6922a679f4fe9675384226fc)
   &nbsp;
   >https://github.com/liballeg/allegro5/compare/68946485f315c5a6df753250ec5979ab291c60a9...c2bf1e11bed0b63539267115baf190741e0a437a  
   >
   >https://github.com/connorjclark/allegro5/compare/my-fork-2..my-fork-3 
   >
- for linux, use libcurl with openssl instead of gnutls [`1227b954a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1227b954a7f1a65812b8f95ed6cf12cdb7887e90)
- disable WANT_OPUS when building allegro [`bff683d3c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bff683d3c2e9256a4ef4171fc6a1ca2f25fdf918)
- upgrade to latest fmtlib, for compile time checks [`36a0f1932`](https://github.com/ArmageddonGames/ZQuestClassic/commit/36a0f1932639e3aad8e8f5b90386ba9e5eb0724b)

# Chores

- bump version to alpha 116 [`c360cac20`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c360cac20be075d91200b0b85c8b62963fa3ca71)
- add docs/constants for new square light shape [`ba9d67ed2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ba9d67ed2d2605823cf330a05ba7f9ebdd285fa6)
- bump dmap section version to reserve for z3 [`05bb58363`](https://github.com/ArmageddonGames/ZQuestClassic/commit/05bb583631bf7bca0d27ec57f222e628e5b5272e)
- fix compile previous commit [`f5202713a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f5202713a876a2fa9c07ea66798dbcee271584b6)
- add include [`7dbcfc0fd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7dbcfc0fd647ab798fc4f4906db5bdb75b441217)
- try fix linux compile [`123e7a21c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/123e7a21cd4754a38aab83a0bc47c50a8d4af0ae)
- update instances of "Zelda Classic" to "ZQuest Classic" [`ca2dd6d8f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ca2dd6d8f8b3a8079c7f20cc61b0415a875a21d1)
- update *comment* instances of "Zelda Classic" to "ZQuest Classic" [`f3ae9af4b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f3ae9af4b92021cbfcf14ced7714968532b96b78)
- add commit to .git-blame-ignore-revs [`43ccd326e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/43ccd326ecf8d4f8d7f3fc6b0af077a7ab95b5cf)
- update changelog for A116 [`1869a68c7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1869a68c7f53059613fda0bc75dfe1e86e7721c9)

# Refactors

- un-inline zc_math functions [`eba451962`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eba45196202f4e80ee5f73c727060df120fc92cc)
   &nbsp;
   >This allows for us to always optimize these functions, even for Debug builds. Good for replay determinism. 
   >
- actually skip reading qst sections when requested [`142485948`](https://github.com/ArmageddonGames/ZQuestClassic/commit/142485948a4517f8b978f6839a245e2f1bb18538)
   &nbsp;
   >Only the tile importer for qst files uses the feature of skipping sections when loading a qst file. This would still read and process every section, it just wouldn't persist anything. So it wasn't really any quicker.  
   >
   >This paves the way for removing `keepdata` from all of our loading code. 
   >
- add 'qrs.h','qrs.cpp' and move 'box_' related functions [`b0a55a23e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b0a55a23e894b7a3ebe58a19a56c7424b6494cc3)
- optimize some more headers/zdefs stuff [`9b309630c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9b309630c64a6ea2709f74fbb402f11e902bfc53)
- move Hotkey struct to 'hotkey.h'/'hotkey.cpp' [`629fd8d9f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/629fd8d9fa7ccd1c6d16c56f7f234ce974e948bd)
- move dmap struct/flags to 'dmap.h', various constants to 'sizes.h' [`ab539b694`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ab539b69492a889cc4af02b71473e86a7bca07ad)
- move packfile-related functions to 'packfile.h' [`3387b9ea8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3387b9ea8daf5865d378a06b8c63889500d47d2f)
- move combo pool/alias data to 'cpool.h'/'cpool.cpp' [`65cd926a2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/65cd926a2db9441a40bcfcbd3e1204246788024e)
- move font enum to 'fonts.h' [`436d3f270`](https://github.com/ArmageddonGames/ZQuestClassic/commit/436d3f270f076cce443b9e995dcb3c9a66f8e2b9)
- move MsgStr stuff to 'msgstr.h'/'msgstr.cpp' [`4007bb471`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4007bb4714624d4a41706ed59dff5aadf0603658)
- move newcombo stuff to 'combo.h'/'combo.cpp' [`2c3fe05c7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2c3fe05c762983aa28f59406a4cdc1fa79d3be40)
- move combo 'advanced paste' to 'combo.cpp', use enum flags, rename 'sizes.h' to 'general.h' [`a4afbd4a3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a4afbd4a38de2b8cedf5e4603972a5846bf55cb1)
- move triggerflags to combo.h [`e37432d49`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e37432d498ced99747897a0ddb5a09ff64d299ce)
- move misc data stuff to 'misctypes.h'/'misctypes.cpp' [`abac74960`](https://github.com/ArmageddonGames/ZQuestClassic/commit/abac749605e7f9594106a4ba54841f78040fadc4)
- only use 'QMisc' as a single global 'miscQdata' for all programs [`03522af1b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/03522af1b076627126db92beb1ec418faeb9af3a)
- remove keepdata boolean from packfile reading [`ef3faef68`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef3faef68624584eab39574021b97ec16a925653)

### Player

- remove windows midi_patch; improve switch out/in [`dc48c2763`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dc48c276395fc554bb038a58c788483eb1659354)
   &nbsp;
   >This code was pausing/restarting MIDIs and resetting the volume in a convulted manner, likely to workaround some old bug with MIDIs seen on windows only. We've since upgraded to allegro 5, which gives a different backend for playing MIDIs, so this bug is likely ancient history now.  
   >
   >There was some issue with blurring window focus losing percussion, sometimes. Not sure if this change will have an impact, but let's see.  
   >
   >Replaced the midi_patch UI toggle with pause_in_background.  
   >
   >https://discord.com/channels/876899628556091432/1114306020848717904 
   >
- do not recreate script_data when resetting [`4bbe968da`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4bbe968daa285d0693b2501a15f62de3f1b307ec)
- delete unused enemy clone ctors [`dd6239cdb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd6239cdb86180d7a0b8daa240a9fa0b1e227103)

### ZScript

- optimize function code, add PEEK to allow combining POP/PUSH back-to-backs [`8402c406b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8402c406b1ec47d3981382f0575a1e43d8484324)
- optimize 'SETV reg,X - TRACER reg' to 'TRACEV X' [`41ca67ec7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/41ca67ec7a172bba2412f48e4a46ac7ceb4bdf22)

# Tests

- better error message when zelda binary not present [`0c8e2605f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0c8e2605f52d872201d23c94bb93d08cd7695cb0)
- return failing exit code if replay mode desyncs [`b9b09cd80`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b9b09cd80fbf605ad27abee586f1b81f7933faf6)
- remove timeout for Coverage and Asan builds [`908a011bc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/908a011bc299b17ad85abbb67133cc782eb60eef)
- use python server instead of node for local compare report [`18f8a08fa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/18f8a08fa7d611edf4eceecad7c132e9b78fc7ec)
- disable sound for replay tests [`a9d38c70d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a9d38c70daeffb9fe44ac7458922d8c99e2f1ef4)
- check exit code for replay tests [`1f31223cd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1f31223cd64698ad2d97de13613b08c1bfee3330)
- only check exit code for replay tests under Asan [`acd61977e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/acd61977e491af61610bbfeb0db83b30ca728312)
- add download_artifacts.py [`dca122f8e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dca122f8e86fee82d15dbd3755124ff251bba47c)
- add asserts for group_arg logic [`bdfbe948d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bdfbe948d3074e26bd9f06294ac3ec49b0316d45)
- condense --snapshot args generated for failing run [`b8048b986`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b8048b9862eae98c3204a1101a3274a551ef6f87)
- refactor compare report to use ReplayTestResults [`aa282f96e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aa282f96e05048711fa1ac5ff617e78b29d3d198)
- fix regression from refactor in aa282f [`3da06ae9a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3da06ae9a509b68db1090feb1062e77a16e9b2b8)
- fix silly lazy unit test [`0591e6a99`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0591e6a9996fdbf231c0d5f06a5724c17da03cb0)
- update test_replays with new unexpected gfx frames, changed in 7ed7b [`5e13ce424`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5e13ce4249596bfe74b2d8120b5277da1d5ed31a)
- fix argument passing to run_replay_tests.py [`e6ea4e1a9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e6ea4e1a92fce6cc70c2b3f291a75535ef0792e8)
- update expected zasm, changed by 8402c4 [`39f685f44`](https://github.com/ArmageddonGames/ZQuestClassic/commit/39f685f4456e6dca7e9c7cb921c03835e2604c35)
- add -headless switch for disabling display and sound [`4d17ccf7f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4d17ccf7f731ebcd654a805bd4c27f66dc909c1e)
- update expected zasm, changed by 52b34 [`62de6e7d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/62de6e7d32a40125f7023c0b72ef6db50fa13a43)
- print backtrace on crash [`92d6b3237`](https://github.com/ArmageddonGames/ZQuestClassic/commit/92d6b3237c6f628e0d04cab3a13efb6465f67cda)
   &nbsp;
   >Every Python test and invocation of our programs in CI is now called via `run_target.py`, which will attempt to print a backtrace if the program crashes. 
   >
- fix sharding for replays with sub-second durations [`e12e09605`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e12e0960529c8d77599c907b7437431177477766)
- add playground_slopes.zplay [`503a5c97f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/503a5c97f875d34447a73fd61b93b80d52bb4e03)
- use debugger for replay tests by default only in ci [`4c0859a33`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4c0859a331326d6edd3b0382747223d560671f40)
- add playground_screen_script.zplay [`2dda68a5f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2dda68a5f328c4b846523e7a58443034c6f2e9f8)
- add replays for step triggers, trigger groups, and cutscene triggers [`94c96655f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/94c96655f46651ab307cda4100c28c5996771c45)
- add --show flag for replays script, alias for --no-headless and --throttle_fps [`0cca40ff8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0cca40ff8d613da46f766efa729ce3f05a4856a6)
- update playground maths script to not divide by literal 0 [`69a9a16af`](https://github.com/ArmageddonGames/ZQuestClassic/commit/69a9a16af0a5599968f2b541c080180d55f85fa8)
- update run_target default build folder selection to work on windows [`82631d33c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82631d33c5a8c49e7de431382925a555bbef18a9)
- add playground_sideview_slopes.zplay [`f0a3b9644`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f0a3b9644e5bec739e19e2f5d29a222d59f1684d)

# CI

- allow Asan config type for test workflow [`13ebdc854`](https://github.com/ArmageddonGames/ZQuestClassic/commit/13ebdc85462ba2ffe0f42b0653cfa742577457f5)
- pass build type to replay tests script [`c59f68b10`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c59f68b108e3ef62e15fcccca79192d621574cda)
- when updating artifacts, only upload the updated/ folder [`bc1be95c6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bc1be95c699db807d725f914075783d7911048b6)
- do better job of reducing size of compare report [`7ed7b02d8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7ed7b02d86814e95ebd3702e7f3e9b584fd71ad3)
- enable jit_threads [`86d162ea5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/86d162ea5188886094afedd97090fddb3a02158e)
- limit yuurand.zplay for coverage because of rng desync [`8f12f54c4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8f12f54c4ce30c9c826f8da1e39e1043bc60459f)
- fix previous commit 8f12f54 [`54c1b9c2b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/54c1b9c2b73155823190d1385c102162ec558b45)
- select previous alpha when generating automated changelog [`e390bfdac`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e390bfdac8c97a82cbcd315d879386efc42ab313)
- remove github's version of generated changelogs [`10f1b630d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/10f1b630d13494cbcc64531fad58c351f8c976ab)

# Misc.

- fix bisect process spawn for non-windows [`58f518995`](https://github.com/ArmageddonGames/ZQuestClassic/commit/58f518995ba4d95abcc09c21c8f31c87d377a8ef)
- add .mailmap file [`bf78bab6b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf78bab6bbed1b70fecfcabd77490bd967095979)
- add changelog overrides [`3991c9e31`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3991c9e3151e7d2f9ced71f4aa561fa7f36693f9)
- set failing_frame in replays for rng desync, even in replay mode [`6bbe3a0e9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6bbe3a0e92edb16076b9987335fd7f4c61d3e45f)
- add new commit scope for the extension: vscode [`57d2c1930`](https://github.com/ArmageddonGames/ZQuestClassic/commit/57d2c19301c4b4e8d1639358715d920f5fd92cd9)
- improve changelog markdown [`2392d3e70`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2392d3e70415e98e6eed165c793735b1a81f0ea9)
- remove commit body after "end changelog" [`a30bbd8aa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a30bbd8aa6f5535d488aca5b9461956022cd7dad)
- add sentry tags for qst/screen [`14e9d8791`](https://github.com/ArmageddonGames/ZQuestClassic/commit/14e9d8791b1e4400f349aaa0d9c06add6b2c4a9b)
- add script to get all quests on purezc [`7755714fb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7755714fb1ac030edec6b824bc7710c200d3bdb7)
- add render_debug option for debugging render tree [`0456127c6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0456127c63361e2172f8f8d51a17f1bff8c1233e)
- improve newlines in changelog markdown generator [`0988d3efe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0988d3efe6f69352151af79fffca3b606c4918c8)
- show deprecation warning in 32bit windows build [`5000dcd90`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5000dcd9038a7eb785fc4b905cef55c7f5d0c3da)
- add -crash switch for crash reporting test [`743a300dd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/743a300dd10900d7611ef4bf4774f97ab24e34d2)

### ZScript

- add missing asm debug for first uncompiled command [`c19830c04`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c19830c04f8037c33fb3ca6c3d6aad58c57b0f7d)

### Visual Studio Code Extension

- publish 1.0.5 [`6092d4483`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6092d448398f0ba9cef5c787b3eebe6850e8a528)
