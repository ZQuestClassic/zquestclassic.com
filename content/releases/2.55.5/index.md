---
title: 2.55.5
description: 
date: 2024-08-04T21:06:01Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.5/2.55.5-linux.tar.gz
    name: 2.55.5-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.5/2.55.5-mac.dmg
    name: 2.55.5-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.5/2.55.5-windows-x64.zip
    name: 2.55.5-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.5/2.55.5-windows-x86.zip
    name: 2.55.5-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 169008465
tag_name: '2.55.5'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Player

- add opt-in automation for uploading replays [`2cee0ae2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee0ae2a73c1208aa7f62a4c78394c3eb2c0f6b)
   &nbsp;
   >When enabled, once a week replays are uploaded to a server when the program exits. Only replays of known quests from the database are uploaded. There is also an option to manually trigger this process rather than enabling it automatically.  
   >
   >Please consider enabling this, as it greatly helps out with development by allowing us to prevent bugs. This is important for any new features we add, but extremely so for the upcoming Z3 scrolling overhaul.  
   >
   >See `docs/replays.md` for more information about the replay system. 
   >

# Bug Fixes

- avoid crash when loading midi using native file dialog [`509bbf169`](https://github.com/ZQuestClassic/ZQuestClassic/commit/509bbf169f1790219376721d360af624e5413f2a)
- capture allegro 5 systems logging in allegro.log [`a91036ff2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a91036ff277241c9bfed71394d5fd761ae7d922c)
- crash in native file picker from bad string [`2f194bff2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f194bff2039100d9660a45e3cac360b5706d8cb)
- sprite drawing not deleting all bitmaps it created [`98d5483a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98d5483a225842d12fd49757fa14f33283577866)
- crash when file prompt initial path has no slash [`b8b24753f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8b24753fad887617bb5241a4038b15b703c9989)

### Player

- kill all sound effects for passageways, item cellars, and when stepping out of a warp (#942) [`4f6c66419`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f6c664194b04c012cc7617838779ea68b8df25a)
- [windows] save path being cut off in log [`bea620a61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bea620a61d45d2b2ecd6abca2b41397f63c38653)
- resolve replay qst against quests dir, handle missing file better [`507ab28a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/507ab28a1926c5dffa662d65cf7b68288f2b8ef7)
- prevent replay save from happening on title screen [`728fb9c4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/728fb9c4aa21402ae44f49f3225f4284b204b100)
- also save replay when selecting Quit Without Saving [`5ee702ed0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ee702ed03fdc3239b492ca47cbf4b18538518a0)
- shadows for rocks and boulders not drawing [`23ead9542`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23ead954214aea94c9a8c822d909442e11286e01)
- side shield flags on npcs being flipped when facing left/right [`957326fb7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/957326fb7cfb16ae39009fc688b38eaad819b1b3)

### Editor

- [windows] Load Tileset with native file dialog no longer busted [`55d043f0f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55d043f0f7185eec59f527d697277b01ce7bfe19)
- wording consistency issue (`trigger` should refer to the `Triggers` tab) [`08f705958`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08f705958bc5a7324710fff2531c3eaf3b4a7e63)
- some number entries (using SWAP_ZSINT_NO_DEC) being broken. [`dd7ba17db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd7ba17db2e9d4242575a54a5552c37d6c1ceca7)
   &nbsp;
   >Notably fixes many spots in the "Insert SCC" dialog, and some in combo wizards. 
   >
- death/spawn sprites not properly updating on tile move [`b2ad04786`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b2ad04786f17db4965f55f74ab373b0c80e3acbb)
- mark ffc count dirty when using Paste Special > FFC [`fb8c31b60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb8c31b60a346011eb09a04a33d282c0f19e597f)
   &nbsp;
   >This was preventing FFCs from being retained on a screen when using the special FFC paste mode. 
   >
- restore proper animation speed for combos in screen view [`32edeb2f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32edeb2f5148ac64807de00da9b08a2fb236133e)

### ZLauncher

- remove defunct "Allow Multiple Instances" option [`e84d5e849`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e84d5e84980dd8a68725da30f9d4f261961c12d0)

# Build

- upgrade allegro [`e00aabb87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e00aabb87ad02977fadcafb0f6d326fb7cb13f2b)
   &nbsp;
   >https://github.com/liballeg/allegro5/compare/549f189df3408bba27524763289545f20771c3b0...c6b10fff225a0c94e2785e2e2d6d99a2f068ccf4 
   >
- enable type-limits diagnostic as error, fix many issues found [`b94cfebea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b94cfebea267a9000d2743b1183b570544f1165d)

# Refactors

### Player

- remove epilipsey dialog on fresh install, add toggle in launcher [`9b68154d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b68154d007b36d987c495158144ab972889c23e)
- remove prompt about recording when starting a new save file [`f0d809b6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0d809b6f5849196367c2784e60dcbba776776ee)

### Editor

- add sub-menu for changing tile color depth [`d94402f04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d94402f04027da2aa25fa5cedb2fa4b4f4fc2dab)

### ZScript

- remove unused greyscale and monochrome filters [`253b4246a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/253b4246af4c0289135621250e167b9fbf082ec7)
   &nbsp;
   >Removes these methods:  
   >
   >* `Graphics->Greyscale()`
   >* `Graphics->Monochrome()`
   >* `Game->GreyscaleOff()`
   >* `Game->GreyscaleOn()`
   >
   >
   >&nbsp;
   >
   >None of these are used in published quests, `Graphics->Tint()` and `Graphics->MonochromeHue()` can be used instead, and removing these simplifies some rendering logic. 
   >
- remove option to configure run function name [`561bb71a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/561bb71a63ab4101a8ffa5617f2bb5bc7755019b)

# Misc.

### Player

- add qst_title, qst_hash as replay meta fields [`dd5d65044`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd5d65044e7a9752d896d11fbee156884f123a73)
