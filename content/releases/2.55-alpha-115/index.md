---
title: 2.55 Alpha 115
description: 
date: 2023-07-10T03:58:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-115/2.55-alpha-115-linux.tar.gz
    name: 2.55-alpha-115-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-115/2.55-alpha-115-mac.dmg
    name: 2.55-alpha-115-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-115/2.55-alpha-115-windows-x64.zip
    name: 2.55-alpha-115-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-115/2.55-alpha-115-windows-x86.zip
    name: 2.55-alpha-115-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 111571834
tag_name: '2.55-alpha-115'
channel: '2.55'
tags:
  - releases
---

# Features

- `Pushed->` triggerflag, triggers when the combo clicks into place after a pushblock push. [`218b1d071`](https://github.com/ArmageddonGames/ZQuestClassic/commit/218b1d071d07ad9837635bebe4a9c97538d2b6df)
- customizable ripple/tallgrass sprites per-combo [`715893f35`](https://github.com/ArmageddonGames/ZQuestClassic/commit/715893f3588451acac0864b1ac63f761e6b40dd1)
- increase combo label limit from 11 to 255 [`edea0722a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/edea0722ad8b3d9599f7a5f53226112d1950ffa3)

### Editor

- 'Test Quest' hotkey (default 'Ctrl+T') [`79a292c4f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/79a292c4fb13abf092201613cd1c6545d130907b)
- Finish signpost combo wizard [`ccccaf6a7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ccccaf6a73a9e4be39f2f1cdeda6253dbb675840)
- AutoBrush now will revert to 1x1 after placing if ALT is held while selecting an area. [`43825d2b6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/43825d2b654697fc0e34e727d29a60ecc265aae2)
- Compiler settings now searchable in QR search dialog [`cedf82689`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cedf8268997d6939ce8a68bd630f25048aa6d995)
- Screen Palette menu now previews in the window behind it [`c98758a57`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c98758a574ae147973398a2d1c517a4d1df00ad3)
- -quick-assign CLI switch to compile + assign [`31efdf60c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/31efdf60ce5f9cdbc2c4e1a7deeade268cfff547)
   &nbsp;
   >Example usage:  
   >
   >  ./zquest.exe your_quest.qst -quick-assign 
   >
- tile editor 'Esc' deselects selections (if something selected) [`c9df55421`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c9df5542136b97edc3c6a13efe2ab97e27908050)
- Add 'General Tab' to advanced-paste combo dialog (and clean up the dialog) [`516526658`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51652665874e1f21321660b1593395d0ab2b1b85)

### ZScript

- Weapon death effects + liftability settings [`5b87f8712`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5b87f871270eb1a4e6c41e3a77e21333c1902d43)
- Hero->MoveAtAngle(), Hero->Move() [`424840536`](https://github.com/ArmageddonGames/ZQuestClassic/commit/424840536baadc6c0a5d6e7dcbecac1d88f46a15)
- generic event HERO_HIT can now understand FFC/combo position [`03706f16a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/03706f16ac2e00870eabf36a98381d4a40a8e5a1)
- Hero->ShieldJinx, new generic events (drown, fall, HeroHit applies to shallow liquid) [`59337477d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/59337477d8618edd1e3ff4ed9f04b7aff337c37c)
- -include switch to set include paths [`20480cb28`](https://github.com/ArmageddonGames/ZQuestClassic/commit/20480cb285965c74ebd72e0f17cd7dff934e8747)
- Graphics->ConvertRGBTo() and Graphics->ConvertRGBFrom() [`a37a156f2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a37a156f2d7e58033e01ecf215bc5bd9935f4bc5)

# Bug Fixes

- add some sanity checks to font initialization [`b659ab974`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b659ab974871a880eaa0f7ef962349922ac5c8bf)
- do not show hidden files in file selector [`cf932f82b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cf932f82b4c2026d95b28df7efe9124659d15390)
- memory corruption in quest load from bad palcycles [`72f741728`](https://github.com/ArmageddonGames/ZQuestClassic/commit/72f741728e63f79d5a5d089e4f6c8b8756277792)
- memory corruption in quest load from bad shop count [`7b43ff57e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7b43ff57e1d7820dc577f7bb919999dec50db53c)
- memory corruption in quest load from bad door combo count [`01f4a2cc8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/01f4a2cc8d91d4af370218dbef784b1a81e56b5c)
- memory corruption in quest load from bad item count [`dafd04b15`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dafd04b15951c29a781a24cd70942746245cffce)
- memory corruption in quest load from bad weapon count [`1fa149c51`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1fa149c51fd7750f4caf0e2c9ff685ad5aaf4ea7)
- memory corruption in quest load from bad warp count [`bf64cf4b5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf64cf4b597980b67bef5079d99ef6cb6b4b2478)
- memory corruption in quest load from bad string length [`8b9883ac4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8b9883ac4c6191d61f715605899fe7046982131f)
- memory corruption in quest load from bad misc info count [`de4595fbc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/de4595fbca92c9d96fcaa2b27e45a0cb7082b323)
- prevent over-allocation in quest load from bad map count [`a262c53f7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a262c53f7beb4900f8f3d3358b36364447691424)
- memory corruption in quest load from bad string copies [`bf5fa4c5d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf5fa4c5de4baf0a534c0377bb3780dd0b91fdf7)
- prevent over-allocation in quest load from bad script commands [`51dd859de`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51dd859de5c2826d4543340559336ea2ce7f40fb)
- memory corruption in quest load from bad zinfo weapon count [`70910a8e3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/70910a8e30a84240a99087d010a4f9c6bdaf9301)
- memory corruption in quest load from bad zinfo counter count [`40ace2986`](https://github.com/ArmageddonGames/ZQuestClassic/commit/40ace29868003a7e6537c39118f7477de5dcb278)
- memory corruption in quest load from bad zinfo mapflags count [`aee1105d1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aee1105d116c448fb1457c0b04932c29385af636)
- memory corruption in quest load from bad zinfo combotypes count [`46521737e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/46521737eecf2eeb3ed51738e8ae99127563bada)
- memory corruption in quest load from bad zinfo itemtypes count [`b1c8944db`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b1c8944dbe595c5da48e0b81f86644bd24a1f432)
- memory corruption in quest load from old pwd hash check [`941720a37`](https://github.com/ArmageddonGames/ZQuestClassic/commit/941720a37b52e44668b42c95de4bbdb82c129400)
- memory corruption in quest load from repeat section ids [`75057cf10`](https://github.com/ArmageddonGames/ZQuestClassic/commit/75057cf104d9984ee92b3129138f51f4388ae699)
- prevent over-allocation in quest load from bad script bindings [`3240f577b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3240f577bd553328476fb791b3b2c8101e5b76b4)
- memory corruption in quest load from bad subscreen strcpy [`f30cc94ff`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f30cc94ffe9889d88d19f279a4d6e97e4a95b63d)
- memory corruption in quest load from bad sfx length [`fe8a0e887`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fe8a0e8873e0baa15fb066cff8f6bae491b11177)
- memory corruption in quest load from bad warp count (old) [`da70b79fe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/da70b79fe71d1d3222a0d8d5e23991bd1f614b01)
- memory corruption in quest load from bad genscript count [`8bf716bdc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8bf716bdc6f789fec06cc03f48c014ccbe933632)
- memory corruption in quest load from bad dropset count [`8d5d7f8f9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8d5d7f8f99daa51da6baf21d069228b10ade15d3)
- use-after-free bug in widget label [`84539eff0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/84539eff0530a52638f58fdbdf4c295fa86aaa11)
- greatly reduce cpu usage when drawing dialogs [`5d166d15f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5d166d15f7d94c8bba4b28e3f8390b775d398284)
- set dirty flag for more dialogs needing redraw, missed some [`d5c5f0d41`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d5c5f0d419851a4388feca6dcebdb8328d88533c)
- properly handle mp3 unloading to avoid crash [`8a33b68b9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8a33b68b93b81bcfa69c0d4d09a92a2d5f6f5d71)
- set dirty flag for list search components [`50fae6629`](https://github.com/ArmageddonGames/ZQuestClassic/commit/50fae662906b32af00864c838341a05748c6d102)

### Player

- cleanup bush/flower/etc decoration sprite code [`3c8baa1e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3c8baa1e4b24abee47e6d019e9f5954c31344c90)
- items/weapons/players not rounding y coordinate when landing [`2ea7a5fe9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2ea7a5fe97ef171ba6aca45265db93f873db543e)
- 'Save Indicator' option now works to toggle the 'Saving...' text [`1a700f533`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1a700f5330beda598bcd63d3ef012c6753b7cbdc)
- mouse cursor not appearing in some popups [`19087bf7d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/19087bf7d8db98a7219888260aec591be4222b7b)
- prevent Hero->CanMove unwanted side effects [`b60185559`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b601855594c3bfcc898f9992cd96942ce80137a3)
- fix dropped input when script modifies input state [`a773ac9ba`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a773ac9baf5dcbb88f3fb737b27b0435bbcada47)
- Fix 4-way "Newer Player Movement" [`81710c1ee`](https://github.com/ArmageddonGames/ZQuestClassic/commit/81710c1eeedd751e9c2f0c0e24c10020109f4cb5)
- signpost prompts take priority over triggers tab prompts [`347bc58fb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/347bc58fb0cfe3ecc801313557ace28d8a0812d6)
- Newer Player Movement issues with fitting in half-tall gaps [`1210ef14a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1210ef14a756311e3c6f686be90e8d55cc0af8b9)
- waitdraw not working for ffcs over 32 [`ae823474a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ae823474a24261e92266df611c62a5f6007c33d3)
- do not stop at first ffc for lens trigger [`90eff0ba4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/90eff0ba41f336e6eb091199bc11f7d64866f4ff)
- npc scripts not running on screen load [`c8e2c861e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c8e2c861edc73de3ff851d3cbc9bc8d07037d007)
   &nbsp;
   >Fixed npc scripts not running on the first frame that a screen loads, resulting in a single frame of spawn poof before you can hide or change the tile of the enemy. 
   >
- enemies not running scripts on first frame with scriptloadenemies [`935757d42`](https://github.com/ArmageddonGames/ZQuestClassic/commit/935757d42efb0f999d7a5a1b0d2e893cac962614)
   &nbsp;
   >forgot to handle this when fixing last commit 
   >
- Fix writing to shopdata->Price[] [`7094e8d8c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7094e8d8c41917b1b9878035ac73ef11513ea21c)
- fixed new (non-classic) respawn points being unsafe in sideview [`c41729262`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c41729262c578300821dff1390d582a5acdd1fa4)
- off-by-one error with ffc link delay [`996dc964d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/996dc964dce997c6f65ab47a87f171d09263e157)
- Should fix all instances of things occurring on the wrong screen when scrolling [`bae07692c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bae07692c317193cc06b7c2ec9bbc27b1bb7ea7a)
- system reset when recording in test mode [`f35c89de7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f35c89de77c7ae590cef87099455b46fa817cda9)
- scrolling on to raft paths no longer forces you to raft (compat ruled) [`1412cab3e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1412cab3e5b383404ec1899726796c95a44cad29)
- mid-scroll is no longer a "safe respawn point" [`9d691ad0c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9d691ad0cb7495c6937deee15d5a77e4fee12f5f)
- LW_THROWN weapons not running weapon scripts [`45ada8199`](https://github.com/ArmageddonGames/ZQuestClassic/commit/45ada81998aa968a2fc02e5730368bde80b8cdd4)
- Throwing in sideview [`384513a3b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/384513a3b8d0a30b4ae551574955fd6a7cbaab9f)
- windows crash as writing .zplay.result.txt file when exe not approved [`0fe78dde3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0fe78dde324ee20b681fb4ba9e624602377e7fbd)
- Test Mode issues when quitting during opening wipe [`95e3288ec`](https://github.com/ArmageddonGames/ZQuestClassic/commit/95e3288ec29c716b8645a2e01da311a94fded6b5)
- ignore unintentional input on first frame of subscreen [`0573804d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0573804d3f48bebd98dddd5637d0ade22ec7c043)
- Torch combos now function on pushblocks [`0a56608dd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0a56608dd3ac98dfb32a867b8e4c7277064559c6)
- force system pal after matrix screensaver [`b40f8d5ce`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b40f8d5cea2f40e34426fc8a1967136018457a16)
- non-torch pushblocks no longer cast light [`c8d359531`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c8d359531ac539a69e1199bbe81364a60746788c)
- use-after-free bug when picking up triforce [`424279031`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4242790310e425ff04f82ee4bffa869a1bc16926)

### Editor

- combo pool paintbrush was broken [`50ac2928f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/50ac2928f2f18e7232f5e9ce39f7ec0f888dfb34)
- 'k' in assign slots dialog confirming [`0a63b6075`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0a63b607561af44a9c19331b5664f5db3964ef9a)
- minimap graphical oddities [`b91e5977b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b91e5977bb39299bc7d22d73101730b02e8b353c)
- map out of bounds crash report [`56921d432`](https://github.com/ArmageddonGames/ZQuestClassic/commit/56921d432f5373e8980d698f8c86fd3d0e6fb2a3)
- string list dropdowns were offset [`aaeaeccf0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aaeaeccf0c5be890b1bc99c7127d717b9a77706d)
- string list ordered wrongly in dropdowns [`bee021913`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bee021913b8f582ed5ee96b257f8c9824ddfb8b3)
- undo history for "Paste FFC as ..." [`023f81c00`](https://github.com/ArmageddonGames/ZQuestClassic/commit/023f81c003dc1433866e5d22c2bd9e122a9061c6)
- undo history for "Paste FFC Data" [`d77c8b93f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d77c8b93f0dc5de757ca1a5223a7b1bb91ede446)
- gui label text wrapping on strings without spaces [`a49fe973c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a49fe973cf931350d6acde4e91a880b6245bdece)
- background blank-out after adjusting tiles in string editor [`4f855abaf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4f855abaf72ef968ab30a29dab91a8e256100e9d)
- bad pointer alias crashing QR search dialog [`f63fbaa0a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f63fbaa0a1e69242bff17988498206e4add563ca)
- stop using corrupted file handle when saving .zcheat file [`2deb39605`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2deb39605a22d456bcfedf3bd5f73ccb7dddba1f)
- properly load qst when grabbing tiles [`acacb5a21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/acacb5a21955c963917fc0bbdaa7ecb66ab57799)
   &nbsp;
   >The loadquest function was erroring on the ffscript section, but only when "keep data" was disable for that section. The section loading code was improperly read the file, which resulted in the password hash not being set in the header, which resulted in an errant password check prompt. 
   >
- do not show guys in screen enemy selector [`28c47172e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/28c47172e8ba30dfed97afaf163c39c8e8669296)
   &nbsp;
   >The first twenty enemy ids are reserved for guys, and can produce unexpected behavior when used as screen enemies. If a screen is using one of these enemy ids, the name was showing as "(None)" in the screen enemy list. It will now show "Guy - Do Not Use!".  
   >
   >The enemy selector list also will no longer show any of these enemy ids. 
   >
- more fixes to load quest usage of keep data [`6cfcd45f8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6cfcd45f87515229c21af3ee6dcebd9e8b1da6b6)

### ZScript

- dmap scripts not updating [`217b877c3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/217b877c3ffdf681cfb807aee52946456b49ec0e)
- use sane qrs by default for parser CLI [`5ed5d3b9d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5ed5d3b9db2efd7c5eec62f3e13d02b74b5e4bb2)
- backwards byte order of the rgb type used by paldata [`79fa156a5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/79fa156a5902ecbef70bc46528ea55424e5b00eb)
- use correct engine data for player scripts [`9ff13b90d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9ff13b90d55c7c83f9f0bba9043aeee9aaa22745)
- setting input buttons to false correctly prevents button press [`656bb7628`](https://github.com/ArmageddonGames/ZQuestClassic/commit/656bb7628288673b0514d6ed6e691fc34826fd03)

### ZConsole

- [win] use async i/o, speeds up zscript debugger [`2bbc6e58b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2bbc6e58b6d1a44b971a687a3225662c6cd4c716)

# Documentation

- update weapon lifting docs [`a9410e821`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a9410e8210c63dd2a93d7c03c3a03d63a8fad4a5)
- add fuzzing.md [`ba7921e82`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ba7921e824441d8644ee126b2e7eeb9ab3653c8b)
- type help for Slope combo type [`80b4c5acd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/80b4c5acd2ded8f163bf47707b2a8229372e70b0)

### Editor

- Clean up tooltips for combos on the screen. [`175152592`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1751525922ab4c616d1b28ae44e4f4da4807dd58)

# Build

- set zquest as default startup target in VS [`19d7ea741`](https://github.com/ArmageddonGames/ZQuestClassic/commit/19d7ea741b213ad932e7beacdfab13ce3dc72e76)
- add Asan build type [`33ecea2aa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/33ecea2aaad56bc0387229152c33e388dcb0eebe)
- support Asan build type for zelda target [`dd924d048`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd924d04873c9bda7ed7c2be17dd7c506cd30114)

# Chores

- update versionsig [`81d7f6d21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/81d7f6d21c94a427e3b9ced5499062ca88d4828d)
- fix compile [`94ca60c61`](https://github.com/ArmageddonGames/ZQuestClassic/commit/94ca60c6125b42acc6a306cf5f976d943ac21842)
- fix non-windows compile (remove unreachable code lines) [`380118b8d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/380118b8d285a940edf7614ac9cd161383dc57d6)
- remove debug print [`605e0e1a6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/605e0e1a6f2ae39621aa384e7ec7c5c911cac559)
- fix type conversion error [`9b8b21708`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9b8b21708501220315f9c69785e957e38d3615c3)
- Replay version check for respawn point fix [`e92a15324`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e92a15324e57e65a7f4c733fd40fe15c499b63be)
- fix compile because I'm stupid [`3f430cc81`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3f430cc81abe49a75ea4207f9ebecc35d57b24e7)
- comment (and slightly optimize) 'user_object.cpp' [`9e5e60b0a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9e5e60b0ab0e0e21193a878fcbfbb9d2a6e3bd2c)
- update changelog for A115 [`812da2517`](https://github.com/ArmageddonGames/ZQuestClassic/commit/812da2517f688635a4f5c440e22d037504535c85)

### Player

- fix misaligned checkbox [`37e42bd83`](https://github.com/ArmageddonGames/ZQuestClassic/commit/37e42bd837d198ec0c671536ef012f6fe0887506)
- system palette code [`aa15531e5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aa15531e5138f813cbfef09052bd31c69f250772)

### Editor

- init data gui cleanup [`c6794c995`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c6794c99581fe3c535895cf5874e294afae3aaf0)
- update default quest file (fix dmap 0 flags) [`837c65979`](https://github.com/ArmageddonGames/ZQuestClassic/commit/837c65979aa9f23d801de8d1e7a2d35de8e46489)
- fix missed in previous commit [`10097db47`](https://github.com/ArmageddonGames/ZQuestClassic/commit/10097db47c47f03ee58eef43b8c7db8fe704c78e)

# Refactors

- remove classic_qst.dat, use default.qst [`e6e5c9906`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e6e5c99066a242f6ea4258a5a13167a546e85d7b)
   &nbsp;
   >~200KB smaller, and easier to change (no grabber.exe). 
   >
- rename solid_object hxsz, hysz to hit_width, hit_height [`0fccb318c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0fccb318c25c22d3cccb0e0d9b36dfe9e2d9a25e)

### Player

- remove indirection in calling scripts based on version [`a7bdf12cd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a7bdf12cd5f0c27e0795ed4cd98091d9af39d3b7)
   &nbsp;
   >This just makes the code harder to understand. And dereferencing a pointer for a function call is certainly slower than relying on cpu branch prediction to do its thing. 
   >
- add interface for combo cpos_infos [`cc2c6aa8a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cc2c6aa8a343467fd3c18fa993c4eac54fbd8ea1)
- tweak and document MAPCOMBO3 [`ead694178`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ead694178f7a9194af4f4a43543c9a9b52e0d6e3)
- replay_version_check [`f461b1071`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f461b1071a014bc74cf6d83dad150f41147e4a7e)

### Editor

- Level Palette shortcuts cleanup, add warning with dsa [`2df440583`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2df44058304ca172d120602236ad4df595c4b252)
- new clean compiler settings dialog + help text [`d9528ee4f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d9528ee4f7bb3a9df39c990b84d8c3da9118ca9e)

### ZScript

- common interface for script engine data [`afd10f7e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/afd10f7e4221d318e20f73be4a56bb48b77e9292)
- use ScriptEngineData for item scripts [`3d13a4422`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3d13a44227eff4449ddf0268ba093a7ed3e526e4)
- use enum for script type [`970aafd77`](https://github.com/ArmageddonGames/ZQuestClassic/commit/970aafd77643ef559ef81e99088d9733f28f25be)
- add interface to encode combopos ref [`91b4eac1d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/91b4eac1d2132aa0c4b0bbe3256c634d13bfe929)
- only allocate script data for combos that need it [`7f4ac3b75`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7f4ac3b751aee2d28b00c858f30ef57e359a9f3d)

# Tests

- update replays [`a383d5c57`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a383d5c5740411a5da26e9c4b7b52a6e86754ed6)
- add lifting.zplay, rocs_feather.zplay [`4c10d5b17`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4c10d5b170a989ccf4ea935c6cc23f7a44a7d7a7)
- increase replay timeout for web [`ced397fb1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ced397fb113694081e03b435cc059453e5276526)
- add zscript compiler expected zasm tests [`2afd78063`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2afd78063299b7029dc7a8a30758985d3a90e702)
- check if failing frame values exist in dict [`ba99a2dfd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ba99a2dfda43a18518d2858d12b56775fe05bd9c)
- use exists_ok when making updated dir [`95f161860`](https://github.com/ArmageddonGames/ZQuestClassic/commit/95f161860975c80b9b7b51516d484ed6f9d090bd)
- print failing frame during replay test [`67d34be84`](https://github.com/ArmageddonGames/ZQuestClassic/commit/67d34be8475e9502311f15f78b7c93606150727e)
- use exist_ok when making updated dir (typo...) [`d5580d54d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d5580d54df4388d553cad90e2f3c2fb45b97593a)
- refactor compare_replays.py to prepare for re-use [`9a81e9cf4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9a81e9cf487b051f09626bcf5501eb0dca94939c)
- refactor run_test_workflow.py to prepare for re-use [`b2e5fe5cc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b2e5fe5ccf8614e4d013c2049a083e267322b94b)
- automatically start webserver for compare report [`47bc28454`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47bc28454457d0841edfd7c33dd3d915950ee6c1)
- add prompts for creating a report on failure [`b79079271`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b790792718562552f2f4cd1175627fe9bd313e07)
   &nbsp;
   >When `run_replay_tests.py` fails, a prompt is now shown to generate a compare report either from already-created baseline snapshots, from GitHub Actions, or from running a release revision locally.  
   >
   >Much of the functionality needed for this was already present, this just ties everything together and makes it much simpler to generate a report. 
   >
- auto update new script test [`2af517bb1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2af517bb13e910871dc48542c5b8e5c886f8335f)
- restore scripts compiled by playground.qst [`1f78aefca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1f78aefcaded28885143260e919de848abf62423)
   &nbsp;
   >These were removed from the package in aa3d87, but we actually need some of them for playground.qst 
   >
- add playground_scrolling_script.zplay [`c34b92a76`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c34b92a76a9662eab922761ec3c542894a5f24b0)
- add dark.zplay [`aaf68685f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aaf68685f0c685faf26c412cf7fded06c2041397)
- support substring for run_replay_tests.py --filter [`298d40c55`](https://github.com/ArmageddonGames/ZQuestClassic/commit/298d40c552a892013fcf05c33da24af581ce8d9b)
- add test_zquest.py. tests compile, slot assign of playground.qst [`bd682985e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bd682985e2c041efa5254feb79bea7ebf43b2dcf)
- move ghost replay into playground.qst [`3294b1866`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3294b186678c5c92b5cacf3bf8a04ebf6acd73e1)
- rename lifting and rocs_feather replays [`8c5058b1c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c5058b1c01e2ceeae213a92d7ab8502b816ffc2)
- remove replay comment when jit fails to compile [`6289180bf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6289180bf8c1a0964903be738fa8821d6b55930d)
- fix web replay tests hanging [`93fc09090`](https://github.com/ArmageddonGames/ZQuestClassic/commit/93fc090903d590d41aeb25ec609d54a2333c76ae)
- add ganon.zplay [`fbab82705`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fbab82705adf7427681a3490a86ed4511195f347)

# CI

- clone before downloading release artifacts [`dd3bfcbb2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd3bfcbb244f8020e949e4e3414d348843223936)
   &nbsp;
   >Apparently the checkout action deletes the current directory first. Lame. 
   >
- skip solid.zplay until it is re-recorded [`38e4ec35e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/38e4ec35e4544088a522dc1a2ceceaec99150435)
- fix release tag for branches [`5f647e9dd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5f647e9dd3dff9dcd0f15cfc2d1475984fff389a)
- fix release tag for branches (really) [`465dd9c71`](https://github.com/ArmageddonGames/ZQuestClassic/commit/465dd9c71bdfffd2dd667ce6ddb5f307c79445d5)
- remove release cron [`cfcd1291e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cfcd1291e4151cf1de339fb5b4271b68fb6a911e)
- specify version of PyGithub [`aaf2edaaf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aaf2edaaf7387fcdc692c29c7ae27e7811de4208)

# Misc.

- add git hooks to validate commit messages [`a8f26b259`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a8f26b2595acf45620e6fb9d59634d05c56c1425)
- add scripts/generate_changelog.py [`3892158f1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3892158f10e551a6c5ac1c3e4bed3155ef0c947e)
- grab test builds from CI for bisect tool [`f2e437a9f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f2e437a9fe9921273a2190982d9e1cce7c3d88e6)
- print changelog on every step in bisect tool [`8bb31d154`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8bb31d154375f20e470f42e533de435e4ac037a0)
- allow advancing in bisect tool without closing program [`a6b9a8584`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a6b9a858408003edff49f1271218797ba31d6c73)
- cache if release has a valid package for windows in bisect tool [`f93e19187`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f93e191871d926dd27c447b0cd35928b49a62de8)
- fix git hook script when core.commentchar config not set [`d35712951`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d357129518160b98ac86efb79c16add627d69082)
- reverse commits in changelog for more natural ordering [`423f04791`](https://github.com/ArmageddonGames/ZQuestClassic/commit/423f04791ae396389b0acf44905b2abc7d07ad90)
- use separate folder for downloaded release builds [`f57703681`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f577036813c26beb372e245949f3397f09279d17)
- fix wrong scope suggestion [`9fb96dc55`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9fb96dc5516317b43dffdae8ed80e45835acb644)
- include commit body in changelog [`a29611391`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a29611391eb03579d628b23ecb6a25c3f9252bc2)
- ./zelda -load-and-quit `<qstpath>` [`9bf02571c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9bf02571c6c09c182561bd565fc13fe701d4ad04)
- automate fuzzing process [`fd3e64168`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fd3e6416836c86f2b034331f27d5a7b3e817b55c)
- remove unneeded init code for fuzzing quest loading [`d85c83770`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d85c83770563ba67e41144147eb92cf19094b882)
- update used QRs in quest database [`d4bb90020`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d4bb9002049a61c373a02fa0321063c0ff57157e)
- include deprecated_rules in qr analysis [`999523839`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9995238393b6a03628991e8441a872dd675d9756)

### Editor

- Change "Place + Edit FFC #" text to "Edit New FFC #" for clarity [`d21b3dfad`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d21b3dfad11899b94b2df8a3c35b01043c853157)
- do less setup for -copy-qst command [`4c4e37a6a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4c4e37a6a0c73c1033bba036f5fcd69b333413ed)
