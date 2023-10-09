---
title: 2.55 Alpha 119
description: The one with subscreen scripts and an autocombo drawing mode.
date: 2023-10-08T21:59:15Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-119/2.55-alpha-119-linux.tar.gz
    name: 2.55-alpha-119-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-119/2.55-alpha-119-mac.dmg
    name: 2.55-alpha-119-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-119/2.55-alpha-119-windows-x64.zip
    name: 2.55-alpha-119-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-119/2.55-alpha-119-windows-x86.zip
    name: 2.55-alpha-119-windows-x86.zip
    channel: windows-win32
prerelease: false
id: 124193007
tag_name: 2.55-alpha-119
tags:
  - releases
---


# Features

- subscreen scripts, ZScript subscreen access
   &nbsp;
   >Add 'Subscreen Scripts', which run while the engine active subscreen is open. Add ZScript types 'subscreendata', 'subscreenpage', 'subscreenwidget' 
   >
   >&nbsp;
   >Relevant changes:
   > - feat: subscreen scripts, ZScript subscreen access [`cb2d6b521`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb2d6b5217b4a9cab29612af5514032401bad031)
   > - feat: 'subscreendata' datatype implementation [`64026507c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/64026507c399a4735fc811f2eba017c78eb50ab3)
   > - feat: 'subscreenpage' datatype implementation [`0d049c655`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d049c6554e4f40ff88cd866b2e4580f45ddc302)
   > - feat: 'subscreenwidget' datatype implementation for shared vars [`5e8e6dcc8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e8e6dcc878d0512cbb7163aa867994ba796b4c3)
   > - feat: start 'subscreenwidget' datatype implementation for type vars [`57649a824`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57649a824287507ef1fa7cc400999d6895c1791f)
   > - feat: more 'subscreenwidget' datatype implementation for type vars [`9a8334236`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a833423609f7e7fcca0b2c7a36c95ca7f30ca41)
   > - feat: more 'subscreenwidget' datatype implementation for type vars [`5c0c1a9ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c0c1a9ef8c2f43bcb8813593f895fa5ba1e055b)
   > - feat: finish 'subscreenwidget' datatype implementation for type vars [`252033a21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/252033a215609e9901a814f12e35c09f53a45e15)
   > - fix(zc): fix a couple subscreen drawing issues [`e82b08532`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e82b08532124278bf3838ab1e935befd344d233b)
   > - refactor: start implementing subscreen scripts [`e19d0fda1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e19d0fda1e6189a864d215d63dbf1ee008e99f10)
- lightbeams now respect solid ffcs/pushblocks (compat QR'd) [`8555d9430`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8555d9430e6e1459d4eba6aa653bedd90510cfa2)
- 'Mirror (Custom)' combo type for customizable reflection [`5c06dfcf4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c06dfcf4ba8c103926aab614ad5ddf8f011c2d3)
- Spotlight combos work on ffcs, fixed lightbeam-ffc hitboxes [`fd039e808`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd039e80877a8e7216c5f1c5844ec8d3261d4cfa)
- Subscreen widgets now have unique labels, and display coordinates [`4553336cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4553336cddd55735ce4dbe493021e3f64a0f087e)
   &nbsp;
   >ZScript can get a subscreen by it's label. Display coordinates are the coordinates that make up the bounding box rectangle for a widget. 
   >
- change grid-snapping on FFCs, blue squares, item square, etc [`c4f28895e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4f28895ed6ea622f70af2b2be4b36ec92eacd0b)
   &nbsp;
   >Now, these all snap to the half-grid by default, but *do not* snap to the grid while 'Shift' is held. 
   >
- new DMap editor behavior where titles are no longer limited to 20 chars and intro strings use a string table dropdown [`6bd8a9acb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6bd8a9acbe6fc6ad8cb90379e8d0a2ce028bec23)

### Player

- add command "-create-save <qst>" [`cc459c65b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc459c65bb3368b2ab050ab7b856f5a07e164a69)
- remove encoding layer for save files [`a0c81ae88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0c81ae8882244c60c69263798e3af87e1718b53)
   &nbsp;
   >Just like the previous work to remove the encoding layer for qst files.  
   >
   >Previous save files can still be read, but when next saved will no longer be encoded.  
   >
   >Should be a tad faster to read and write, especially reading in bulk as the title screen no longer needs to read the entire file to decode, when it only needs the first part of the file.  
   >
   >Also changes save file writing to disk to instead write to a temporary and move to the destination when done. This may prevent a source of save file corruption. 
   >

### Editor

- 'Highlight Current Layer' option, when enabled dithers out non-active layers. [`69267fb51`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69267fb511478cd7af71fddea4799f759d29ca1c)
- "Open Tile Page" now saves which page was last opened [`f6f3090e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6f3090e1da752ec21c12c97b12fcfb0e8efe03d)
- options to control the size and color of the dither when using "Highlight Current Layer" [`08be9cd24`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08be9cd24873142a024f897469af03ab714a352d)
- added cset to the autocombo preview, made autocombo engravings in the combo list draw over the selector [`466c7b5ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/466c7b5ba1ba9e9af514a504e54cd9706cba7c49)
- added a popup when using an invalid autocombo explaining why it's invalid [`da634dba1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da634dba1259865cb89a4af963e3b1918d9dcbb8)
- added a "Connect to Edge" flag to certain autocombos, changing how they interact with the edge of the screen [`7e0ddb89a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e0ddb89aeab882b9fbdb7b13786369a772d04ad)
- quick map view hotkey, 2x and 4x map scale [`98ad766b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98ad766b7b0d78fd0b90194588340748e7a8e35b)
- double click in text procs selects all text [`d7f12e957`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7f12e95708d2cfc6d89e0db6a924d0a83013efd)
- option for tooltip highlight color (instead of pink hardcoded) [`0036f21c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0036f21c15a302a5aedcbb7a13d1202bc0f79c12)
- reworked double click in text procs to select by word [`a3bfa4a75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3bfa4a75dc4b6c00735f49a357dc6bb25f627fe)
- checkerboard background option for invalid data [`39549c142`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39549c142d41c20f213886bf7f9e1a4283f96ee4)
- changed the default size of some subscreen widgets to make them easier to grab in the editor [`fd74a7a18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd74a7a18459a88941b28fcaa81af0349d135123)
- dragged items in the subscreen editor can be snapped to the grid with ctrl [`03274b2d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03274b2d8a3a7aaf0745ce5e5289a5cb37aca9f4)
- 'File->Load Tileset' to start a new quest from a tileset [`211e53bff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/211e53bff2b03771624ed290616b38beeaeb2f5a)
- subscreen wizards for generating item grids and counter blocks [`365e95fd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/365e95fd2620e70dd4945899fe74a327179345ef)
- "connect to solids" flag for basic and relational autocombos [`a28a3efa7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a28a3efa72a38ae81daaf576da5981167a1a96ff)

### ZScript Standard Library (std.zh)

- add 'SF_LAST', convert SF_ constants to enum [`053b63911`](https://github.com/ZQuestClassic/ZQuestClassic/commit/053b639119b0269fe52aadd7773b6e295f4d7789)

### ZScript

- 'auto' variable declarations [`1b06c63ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b06c63ead75a827647d646e607f6dc4b1e76a39)
- 'sprintf' will resize the buffer if it is too small. [`bc9fc80f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc9fc80f8ea62c306ed8d359f6fd328668fca091)

### Visual Studio Code Extension

- update keyword highlighting [`2dad50771`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2dad507715d8b847c3d5613197ec5ab0414e7694)

### Web

- migrate to new database manifest and use CDN [`5c823a081`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c823a081bb9e917219da938b89172bc858f71a7)
   &nbsp;
   >* Quests and associated music are now hosted at data.zquestclassic.com,
   >  via DigitalOcean's CDN. This should make downloading faster.
   >* Add preloads for the manifest and the wasm
   >
   >
   >&nbsp;
   >
   >New format for quest manifest:  
   >
   >* Supports multiple releases of a quest (creating a new release each
   >  time the contents have changed). Currently always shows the latest,
   >  but when a save slot is first created it locks to that version.
   >  Later, will add a way to upgrade/alert user that there is a new
   >  version for an existing save
   >* Add an approval bit, so we can be granular about what quests are
   >  published and playable in the web version
   >
   >
   >&nbsp;
   >
   >Drive-by bug fixes:  
   >
   >* bug preventing saving files (see 2803f8 and 98f366)
   >* bug preventing editor from persisting qst file due to missing
   >  filesystem sync
   >* bug preventing copy/download browser local files from showing when
   >  user opts out of mounting a directory
   >* (for all platforms) bug that changes `.sav` files to use a relative
   >  path (to the configured quest directory) for the associated qst
   >  file, instead of an absolute path. Save files were portable before
   >  because of some non-trivial magic when resolving a qst path, but
   >  this makes it more explicitly portable
   >
- reduce amount of preloaded data [`24e1eee5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24e1eee5ce6638ae7be4cb05b7f0a65459b57566)
   &nbsp;
   >zc.data is 5 MB now, instead of 15+ 
   >

# Bug Fixes

- active global script double-running due to warp script check [`28d9aaf3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28d9aaf3d31aa8ffd489a3a46da167c5ec79fb87)
- wrong 'maxdigits' on old subscreen counters [`8c4b2b9b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c4b2b9b74442f38feb5ea31d8a4081d40cfc288)
- fixed memory leak when changing enhanced music tracks [`c9bcdb22a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9bcdb22aafff7f9a7db8105c595e9db6d8febde)
- favorite combos corruption when loading 1.92 or older quests [`cca598afc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cca598afc9e6e90691c26646a5d9653de4c395c2)
- some small errors related to subscreens/subscreen scripting [`d2721853c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2721853c482d4ad05031bcf7e529187e71a313d)
- [linux] use /var/tmp instead of /tmp for save-then-move [`2803f8fcb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2803f8fcb4d4f375ff1f9ef328104119bdb16302)
   &nbsp;
   >/tmp is for files that are not expected to persist. When running under flatpak, a tmpfs is mounted to /tmp, so we cannot move files from that to a real physical drive. This resulted in saving failing.  
   >
   >/var/tmp is the better choice, since files there are expected to persist and so will always be a physical drive. 
   >
- [linux] for flatpak, create tmp file in app directory [`98f366eda`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98f366edacaa7c52a8e1fb9ef6810d87d70027c0)
- moveflags not set correctly for pre-2.50 enemies [`58d73e0cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58d73e0cfdb892482e2898fd509704c1d5f6f2a2)
- replays depending on wrong moveflags [`8c359cdb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c359cdb394d99e2b2bc587ead44aec4c039d0c4)
   &nbsp;
   >not sure of a better commit title 
   >
- handle empty init data delta, which is when no change is made [`ecb6e1bd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ecb6e1bd7fe937d664ac52e0d3af8eb9c5b89366)
- fix dmap title corruption [`189d34c1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/189d34c1d52dc90afb942797eb3d4d03bbe735d7)
- use correct subscreen font for PROP type [`2bd4f84be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bd4f84be75c808032ed3b5284148e990b5c13e4)

### Player

- pushblock solidity inconsistency [`58ea254ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58ea254ad8826fcaf65864be2fd1a5d6158085ad)
- oddities with pushblocks and pits/water [`54f0de9a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54f0de9a7bee2511809c67763fb586ad459fe6d8)
- sidewarps at edge of map not working with walk-through-walls cheat active [`b4cc7cbb6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4cc7cbb6a44718aa8e0d97b47a1ba8895863960)
- Screen 0x80+ 'safe return point' bugginess [`b53ee67ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b53ee67ef1f8b1625c19eebb7200f27e952e115a)
- 'Magic Containers' cheat not updating max magic soon enough to refill [`7f9ee156d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f9ee156db35991b2742faab8fc75e41792b9632)
- bugginess with push flags on 'Push (Generic)' combos [`f10def353`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f10def353eddbec47000fbf9cbd6e84263d58c97)
- Oddity with swords/spin attacks not properly hitting triggers [`ae7bf3e44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae7bf3e4442c506b7cf72ca4f8b1813d6dda07b1)
- remove accidental code that resulted in less precise sin even outside replays [`0545938cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0545938cf052c4630e6dea1e16e2a1d94020ca9d)
- incorrect value for cos(90) in replay mode [`2d46cdd1e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d46cdd1e7a1e9bc975784df7562343eb62683bc)
- fixed unresponsive input in SCC menus [`e394d09cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e394d09cd124fa0f8312895bedc5993533d2d38c)
- fixed line heights after drawing tiles to strings with SCCs [`f05923d8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f05923d8c61232073781d196fcad9f387f641ae6)
- check if A wpn slot when doing bomb deselect [`9bc8776cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9bc8776cb53f6fadde62e92c4770f50697312fda)
   &nbsp;
   >This is a potential fix for a bug that prevents the sword/A slot from working after using the last bomb. The bug is very difficult to reproduce, so not certain to be the fix. 
   >
- Optimize light beams to be a loooooot faster [`258029d87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/258029d8754376cdcbbb58e5ba8439e7c24835bd)
- prevent crash when gamepad disconnects while configuring [`761ab2c57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/761ab2c570de153f205c04b16c0b02ac6f39dda7)
- handle trailing slash in quest_dir cfg option [`06cd618af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06cd618affc5e8c2a57eca65ba586e6eef4240d3)

### Editor

- 'esc' choosing 'yes' in 'Really want to quit?' popup [`f683887dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f683887ddcfc0df01fa0567c5bf7ff74716594d7)
- sanitize quest title for package name [`e64f888d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e64f888d24dcb9ae64da78f91b1c40991fed36e2)
- allow spaces in package name [`87519c7ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87519c7ea032787611b39a547f990bd4bad150c8)
- fixed crash in combo wizard for signposts [`dd826371d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd826371d1acee30cfa375bef538191e6894e85b)
- fixed bugged inner bottom corner in DoR autocombo [`22817644a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22817644a46049dbc3ded467b2ab6c59d3c69bba)
- right clicking autocombo combo panes no longer resets cset to 0 [`6300f4d89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6300f4d897ed4772bea50eb4832236f023ebdcdf)
- clearing an autocombo in the editor also clears args and flags [`b71f9a3dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b71f9a3dc14aa7e597b314e9152614478ce17105)
- combo aliases with layers now flag layer screens valid [`e09d0e3f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e09d0e3f927b2136bd0489c9203f9ad08dcdd565)
- fixed out of bounds array access with the drawing mode menu [`f8f4ea09b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8f4ea09bcbbc9296461b4297498db8efc59636f)
- hopefully fixed inconsistent DoR autocombo behavior [`ae6d73cd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae6d73cd271b6edb5e3562a9d889fbba5c9c606b)
- improved DoR autocombos connecting with the edge of the screen [`dea3b0e1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dea3b0e1aab214644b6a75c70d60b7f0962f37b7)
- filter invalid characters from test init data cfg header [`25f477fd8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25f477fd8b4a0b1e46261c9c097f595f01a1b8b7)
- made selecting a favorite combo update the drawing mode dropdown [`d5c1183c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5c1183c42f14d5e8e57797ca84822d307a9846d)
- reduced information on the autocombo preview in compact mode [`8eef7f843`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8eef7f8434ac69ac0dedd1d9ed65e97278e4c8c8)
- normalize path component for test init data cfg header [`eaa537d99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eaa537d99e7f53db33746df0aec23dddd1ebab71)
- fix several issues with the 'default.qst' subscreens [`8e9d475bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e9d475bc68a12033f71443a8edbb90ea43e9f30)
- fix autocombo height change not being treated as a list command [`de70ed253`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de70ed25367114cee8cc5ea58d68d7fd623414a4)
- made autocombos preview correctly with the combo brush [`88ef45f62`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88ef45f622b938137a6408b107ed042bd96f38ca)
- fixed combo pools being able to fill the same combo multiple times [`c0c0f6d2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0c0f6d2b55ef7a1e1b94a423f94f88c5eb93b88)
- layer visibility checkbox for layer 0 [`b51c89ce7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b51c89ce7242bd23a9dbd8976fbb4b897feae175)
- fixed layer 6 highlighting and overhead combo drawing [`b55a98696`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b55a98696482e0512916e0174e3dc754ad21c97b)
- fixed "view map" solidity drawing [`9de52adc0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9de52adc0e2861c60603b665b4adc526a856c1c5)
- correctly load parts of old qst when grabbing tiles [`f4ed68578`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f4ed68578a2fbc27bbda62730f5b0b735ea65634)
- sfx data corruption due to improper struct initialization [`be96107dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be96107dc0445a421dbc4faabfa4361c4e3e6318)
- fixed copy/paste hotkey in the string editor and crash when editing absurdly long strings [`e0aa4ba60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e0aa4ba60ccd02717897a7b24488359c3fe48311)
- liquid combo wizard mod sfx off by 10000 [`1c0399ff2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c0399ff2fe4f0b1be4f1b27be881785baf62792)
- moved some resizing functionality from the move arrows to resize arrows in the subscreen editor [`a72d22a04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a72d22a04581d89d95e21f4123f934953033560a)
- fixed subscreen wizard window titles not updating [`03e600092`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03e60009216e738d897d6a267ae70b229be20efa)
- fixed crashes when previewing layer solidity and incorrect layered solidity drawing [`e78b6ecbe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e78b6ecbebdf2d702fa25d5e824e5b05d33f8d6a)
- copy over assets folder in packager [`feab68e41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/feab68e4181b5fd08ef9f46e279600969af5ba87)

### ZScript

- typechecking error related to arrays of class objects [`e981a6591`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e981a65911e1e1f23bfc0f57a5f2c687ba661aa2)
- fixed paldata mix() not flagging changed colors as used [`7cb103ba6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cb103ba65d324a980315a94dd7de0e10ed6e857)
- fixed incorrect argument ordering in DrawTiles() and erroneous error logging in serveral drawing functions [`ff7752406`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff775240686b18ff645315aa1ce2d5e608c7d879)
- fixed incorrect max count for user objects [`d571f7688`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d571f7688e08553ca8b1cefea400521a2429f9f5)
- paldata objects not clearing properly on init [`13a78f04e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13a78f04ea86231ca372bef2b557c8dbafdbf3b5)
- generic script local arrays and '->Own()'ed objects bugging out on 'Continue' [`850fca401`](https://github.com/ZQuestClassic/ZQuestClassic/commit/850fca4013613ec0a76a03ef4bff0c5a1d914770)

### ZUpdater

- use headless mode when run from launcher [`1f91452cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f91452cdb50c353e42f50daadf6de6d9010955e)

### Web

- avoid double save when using the quick-load feature [`2e2fb45da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e2fb45da242647599c72b5c489d8ea9c723fe69)

# Documentation

- move packaging_quests.md to packaged docs [`b5467ee10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5467ee10de05407c02af24c5cef6d02b43d1ac2)

### ZScript

- made note of rotation arguments for PutPixels() [`f31a9e75f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f31a9e75fecbde970be1293d0ebc9d5f6e2a49c3)
- webdocs for paldata and correction for PutPixels() [`0a94ab06c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a94ab06cd06decdac25e9de70d77b78a7ff1411)

# Build

- move allegro legacy to third_party [`7066aaec7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7066aaec7e0252489e0ac266488825cd27487117)
- move loadpng to third_party [`faf8af981`](https://github.com/ZQuestClassic/ZQuestClassic/commit/faf8af9810754f2ad8c68fcff6ffa4eaf563070c)
- delete include/loadpng/loadpng.h [`6a03d57cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a03d57cb4dc1fe85d222ef4ef1aabef8239be4c)
- move algif to third_party [`d3c85c763`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3c85c7635352475c4e8dd3bfb1e1c92e07c5900)
- move al5img to src [`7b8ebe4d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b8ebe4d3f7bfaa50f6bebfaf8f3896ec17ba388)
- move aldumb.patch to third_party [`f9d885dbd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9d885dbde22bb1244b3ba0f1500f13734762c66)
- include licenses in package [`c7a2a13a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7a2a13a3e5e6d86fe1bb752a9cc3c29c29f372f)
- add include to fix missing atoi on VS2022 [`8ea837e46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ea837e46a447f4da064a60b3b7d7532b4678126)
- [mac] 'ZQuestClassic.app' -> 'ZQuest Classic.app' [`0c137af69`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c137af6958bc1a3a488af3d164bc68033044b45)

### Web

- upgrade to emscripten 3.1.45 [`b428714d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b428714d2062166400008d9296f16a1022403822)
- rename workbox-config.js to workbox-config.cjs [`3602a7233`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3602a7233f6e799b2aa985705aa3033acb70fbf0)
- update dependencies [`97203e923`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97203e92388a4b41dd0aca4af1466ba301f1cb5d)

# Chores

- update .mailmap [`8c87d92ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c87d92eca08945bf80560edf7cec2571bcaa22b)

# Refactors

- extract legacy encoded reader for qst to try_open_maybe_legacy_encoded_file [`9b5c4579f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b5c4579fc4a4b2f26380bd8fb143b3ca7f6c321)
- removed leftover references to favorite combo aliases [`8a122dd40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a122dd40e3d3bdd9db14149c98e9683687a599b)
- use transform matrices for render tree [`badeba084`](https://github.com/ZQuestClassic/ZQuestClassic/commit/badeba08499371d7fc58ca4b8638122bf2004bcb)
   &nbsp;
   >The previous adhoc system supported translation and scaling in a very broken way, making it impossible to construct a non-trivial render item hierarchy.  
   >
   >Now it uses proper transforms matrices. Implemented with dirty flags - each render item has a world matrix (and inverse, for mouse lookups) that only update when the underlying transformations change (or one of its parents) 
   >
- add TabBuilder gui class [`a9e768c99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9e768c99bf8a19d23e8a2fec060f862f4dc9646)
- gamedata and user_object stuff, script '->Own()' handling [`76a8c3d2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76a8c3d2f201e77c47acc547b9753364fb24de41)

### Player

- only check already loaded saves for 4th qst red easter egg [`8362c1e93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8362c1e93b8eac6bd526881623b2c9536be2abfb)
   &nbsp;
   >Otherwise, it takes noticeable time to load every save file when the file select screen loads. 
   >
- move some things from .zmod to be hardcoded [`103242d4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/103242d4d37c3c20398a787db58c36c152f09ed6)
- remove module info/loading from menu [`6d27582d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d27582d07d418979c57bfeb4d091ad53cada1c9)
- remove classic_zelda.dat [`e1d9bd937`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1d9bd93736397a274812c2e9fa390787bc403e6)

### ZUpdater

- extract getting next release and installing to functions [`6346d4838`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6346d4838bbe790832b6b6abd0e154222c54b261)
- [win] use curl and json libs instead of python [`765ab0322`](https://github.com/ZQuestClassic/ZQuestClassic/commit/765ab032243e626f36d2cef6cb80ef2d23714361)
- use zupdater binary instead of python in launcher [`20528f43a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20528f43a9c85a2d20536b0b23e9ca63c40a95d4)
- [win] use native library for unzip [`bcf1582dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcf1582dc82fac01c7f99834bea13c6f4d0f5617)
   &nbsp;
   >zupdater is now Python-free for Windows. 
   >

# Tests

- update playground_cutscene_trigger.zplay [`9ef7f02fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ef7f02fb956b8b627812664c5ef822ec6ab7a6c)
- upgrade puppeteer to 21.1.1 [`b8476fd2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8476fd2e7b8dac4b9958ee7793b925d71b237ec)
- re-enable part of updater test [`1e11349cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e11349cbee52bf8b7ee817d7fb763c1d925ca4a)

### Web

- run test_zeditor.py and test_zplayer.py [`bb237a671`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb237a6715b2f44cb44653bbc60ca03eeabe5efa)

# CI

- fetch full history when building to generate nightly changelog [`0389cd277`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0389cd277665d76e3c7e1773d28714e19f6c4f57)
- fetch full history when building web test [`22aee7c8f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22aee7c8fb442a9925155d31b7b96c3499bdb0cd)
- use correct variable for release tag in sentry debug upload [`cfdeef5b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfdeef5b9270c2e8a7629b0752e4a10f5a1faee7)
- use Release instead of RelWithDebInfo for windows test, for caching [`000548dcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/000548dcf6fde5724e5e85f92a73ab3f1117175f)
- use sentry-cli 2.20.6 instead of latest, to fix debug info upload error [`3b862dda7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b862dda79a09ee92f3c5efac9d60c4d05569a00)
- disable sound for linux replays [`0c6b1c77e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c6b1c77e000a835e1662ea9b0f173cf9a417597)
   &nbsp;
   >`install_sound` randomly starting failing in CI. 
   >
- create web.zip and upload to GitHub release [`ffb2f56cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffb2f56cf8581229c48922bb50279d107e1dcd93)
- set concurrency for release workflow [`335bc90c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/335bc90c1b51ef74fa725ad42d5b6cb1bbae4075)
- trigger website delpoy on release [`d8cbf92e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8cbf92e1aa4b413f922dd5fcf84f5fa3781be88)
- add --ignore-missing to sentry set-commits command [`fdf2059e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fdf2059e92bc47397bcd79cae7d895c9966e0957)
- pull git lfs objects for packaged resources [`4a5c80d12`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a5c80d128c7258d33546b5d654bf472e7aa34aa)
- create cron job to update database daily [`348cb03fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/348cb03fba8e72cef987eefa4a1d40ab50c49341)

# Misc.

- add script for expanding ZASM opcodes/registers en masse [`6f8ca315a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f8ca315aba8606467c100d9d7ffc1eab4a230b5)
- update zasm expansion script to handle name lists from file [`820a5978f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/820a5978f0e0d653f1a28600470502c1f6f63f21)
- package changelogs for recent alphas, and include nightly changes [`c67dc4d1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c67dc4d1a51401b5991b0ad72aa439a6399788b1)
- update GitHub org [`f5f1591cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5f1591cfecfa1df879aaec30f64dfa1a7342a78)
- fix transparency on some cave tiles in the default quest [`2cbfecefa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cbfecefa9dd58f71ab04f4fd5dad887dfd00b16)
- improve parser timeout handling [`5ebd2423f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ebd2423fd886cbf94b071633a43032c5ce8d7c8)
- update default.qst (add auto combos) [`ec1a38337`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec1a3833751004da1ee5a0a6de15da4623d1d3d6)
- log error when file move fails [`d52938c9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d52938c9d484c8c7121ab452e50daa5158711c36)
- add AUTHORS file [`008738d7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/008738d7a1c030da1cfae0a4b7b9d136253916e7)
- rename editor exectuable from zquest to zeditor [`b34503993`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b34503993b95e6afc07aa88313a50c0e4ed50cc7)
- support lists via * for changelog markdown parser [`e7e7a7aa9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7e7a7aa96ba592bbca9468bebde93a9a5d46f15)

### Player

- create `quests` subdirectory for qst files [`e5c9c2b5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5c9c2b5a1bcfe28123b8d3301146be7497a590d)
- auto open file select dialog for new game [`57afca898`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57afca898c10b10d5d6e2bed318053013aafee69)

### Editor

- increase size of 'Wizard' combo editor button [`51bc46e1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51bc46e1b6d4e78dd605013f06c989b3496ad250)

### Visual Studio Code Extension

- publish 1.0.7 [`e7f9e0ec5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7f9e0ec5b64b38dc421c4f97fee87e552102bc9)

### ZLauncher

- use new program names [`9f51c900a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f51c900a8255e450ba70e5e8aa6dbff93064697)

### Web

- rename from Zelda Classic to ZQuest Classic [`a37ec4ce8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a37ec4ce8b3a5b4960f343c7bc8a111e25f1c6f3)

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
