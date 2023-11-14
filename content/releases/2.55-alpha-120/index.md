---
title: 2.55 Alpha 120
description: The one with crumbling floors, moving platforms, and ExDoors.
date: 2023-11-11T19:08:58Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-120/2.55-alpha-120-linux.tar.gz
    name: 2.55-alpha-120-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-120/2.55-alpha-120-mac.dmg
    name: 2.55-alpha-120-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-120/2.55-alpha-120-windows-x64.zip
    name: 2.55-alpha-120-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-120/2.55-alpha-120-windows-x86.zip
    name: 2.55-alpha-120-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 129031802
tag_name: '2.55-alpha-120'
channel: '2.55'
tags:
  - releases
---


# Features

- Add 'Screen->Data[]', 'Screen->DataSize' script data array for every screen. [`b080de56c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b080de56c4bc835d35ce3dc70edf25400cabd06a)
   &nbsp;
   >This data array can be edited in the 'Screen Data' dialog, and all changes made by scripts are saved to the save file. 
   >
- `Init Data` dither pattern picker/previewer [`ef1e3e5f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef1e3e5f62a416ae96f325cb884652b1abba93ce)
- fade out the background behind dialog windows [`ba6344865`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba6344865b68153cf717990b17a83b957d21a5bc)
- 3 new dithering styles [`8b7aa8ed7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b7aa8ed7d012d5916159ea66f55037d60626690)
- customizable 'ShoveOffset', add zfix round-direction handling [`809119087`](https://github.com/ZQuestClassic/ZQuestClassic/commit/809119087b589e46efa144d357e7a68776544d09)
- FFC 'Platform' flag for moving platforms (to pull the player along with) [`3fb03f0b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fb03f0b0f4b3ac093c3d6e8075d4d0c29f65357)
- Crumbling Combos (crumbling floors) [`5ac8fd1ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ac8fd1ee4a5bccdd3fb9ac443adeb952df18633)
- Customizable sword tapping sounds (in Misc SFX and combo editor) [`b4eb8aa23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4eb8aa23b6de7183ed71500d721a17d8ea40179)
- customizable flicker speed and color for enemies and player in init data [`8a18af11e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a18af11e7c5573b19cb34df229dfd7aa363cd37)
- allow conveyors on all layers + ffcs (QR) [`4d9976b23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d9976b233a3e60c05974159a19712196399d476)
- Add itemsprite->NoSound [`65c4a5d61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65c4a5d61181a093576dde2199a2360dc48f1896)
   &nbsp;
   >Disables the pickup sound for an item if true. 
   >
- add itemsprite->NoHoldSound [`1bc071fcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bc071fcfb4b5e3daa641e31781c3fcd687b8b39)
- add configuration for snapshot image scale [`d4a3aa3b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4a3aa3b8bf49adfa91854fbfe49340b8bd00cb8)
- set default snapshot scale to 2x [`a57ecc4dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a57ecc4dd1b8f5e6691681e816762018614f7ed4)
- Allow weapons to change sprite when lit on fire [`b727121cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b727121cbd31ed251afb728706a86452210a1808)
- Add 'ExDoors', similar to 'ExStates', but directional. Carries over to adjacent screen.
   >&nbsp;
   >Relevant changes:
   > - feat(zscript): ZScript access for ExDoor related features [`a00570f67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a00570f6745985dd87b97dd1707aa15a0a32f195)
   > - fix: typo in previous commit [`b499e2c3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b499e2c3ea1c4e165f74acb5775ca33d32bc6ae2)

### Player

- added a setting to put a limit on 'uncapped' FPS so the game still runs at playable speeds [`5f9a3d367`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f9a3d3675b47c9b5308ab94149e8ad0d2f07123)

### Editor

- Pressing 'esc' while zoomed in on the minimap now unzooms (instead of trying to quit zq) [`918cdafca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/918cdafca1c7bbb7789842d52226a9e3a62f1b42)
- 'Insert SCC' button in the string editor now respects the caret position [`c706b3af3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c706b3af3c796832fd723a0e1d7f38822f8da0ed)
- made enemy editor InitD compatible with script metadata [`8c0e4b37b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c0e4b37b722614684aecc4f3b1e10d0cf1cd897)
- add zooming when grabbing from image [`26019c058`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26019c0587602953a7406ec1ef7fb15e70fb54f7)
- added angular tile block rotation option to the tile editor [`24e46ffb2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24e46ffb2fcebec087b8a35a40352893bc115013)
- added buttons to the dmap editor to preview enhanced music looping [`1822e0e47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1822e0e47a3404997efb8d23e9e011ff51c36e5c)
- view script slots dialog [`4cd827e73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4cd827e73f320c6618b443bdf03772ac8cccf5a9)
- Combo Pool Pages dialog [`25ae10290`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25ae10290ae582b12fb1c5ff5d6cf061fd5c7e00)
   &nbsp;
   >Dialog is modular, should make adding future pages dialogs much easier 
   >
- Auto Combo Pages dialog [`259419630`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2594196300d1352a496bad4a5a0e0c2b9a656667)
- allow customizing invalid checkerboard color [`26ea8b84c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26ea8b84ca5e0e441a26f163ea02e8ed83fc1359)
- Combo Alias Pages dialog [`6e0636de7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e0636de7cb61855405d1fa225f0cf3176c750dc)

### ZScript Standard Library (std.zh)

- `memcpy` version that only takes 2 args (auto-determines size) [`3bb11dda8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bb11dda8a310c47daa93362ab1d172afcbb577b)

### ZScript

- script access for extended dmap titles and new dmap intro string IDs [`21c168a1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21c168a1b5d51fd671dec0c6a83662102fe58f46)
- GetTilePixel(), SetTilePixel(), and Is8BitTile[] [`b9b290a14`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9b290a144bf2d212eb3fa1ee0cde9182e742d60)
- 'Screen->GuyCount'/'mapdata->GuyCount' for read/write enemy respawns [`340d55b9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/340d55b9c112fc02b0b2acfbadd810863f0d5688)
- script access for player and enemy flicker and flash effects [`4a1bf1223`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a1bf1223ad3a58d1ed022873d7e1be6caae5e3a)

### ZUpdater

- add release channel to builds to specify where zupdater looks for updates [`bb9023ea8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb9023ea89f834e63e86c6cff5d65c99c8d9f388)
   &nbsp;
   >This adds a "channel" configuration to releases that limits what releases the updater will consider when looking for new versions. This allows us to configure a "2.55" release channel, and prevents the from updating into 3.0 releases while still allowing it to grab new releases from 2.55.  
   >
   >This is necessary long term as it allows 2.55 users getting easy bug fix updates without moving them to 3.0, which should only be done explicitly. 
   >

### Web

- include cambria tileset [`34580b86f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34580b86fc5aa19011f1fcafab8571ed8264d69b)

# Bug Fixes

- wavy/cancel compat not being set [`2f0fe8052`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f0fe8052982d59d042df0486f020ab4198af411)
- a couple small things related to script access of subscreens [`d120f2c3a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d120f2c3a2d4b8799b3521447565767a4be6a2b6)
- 'Newer Player Movement' corner-shove works better with off-grid solids [`1695530d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1695530d3e14d3a6939330b72cf46fcba5cf936a)
- Init Data dialog sometimes being too tall [`ed36204f0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed36204f0690583d18a84f7d398414a2bf77f77c)
- use cross platform clock for text edit proc [`e6bdfb99d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6bdfb99d1373b781c871f9893a97402e34ce610)
- issue more vsync in old gui proc as needed to catch up [`5add82df0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5add82df0307770a39fad1e1f6f516fabcd4db08)
- [mac] only check for `.app` to allow for app bundle to be renamed [`b393e5875`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b393e5875075bebce15d5405e8beb529a82d6fd0)
- set size when making dlg layer to avoid crash [`6d47e8136`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d47e8136264a4a216ebac0fcff6963a8211a4c7)
- minor dialog hiccups in some circumstances [`02764be1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02764be1b359583e5f12df7cdcbf71b2fb2268ab)
- crash on viewing 'Fairy' flag help texts [`62bfe66d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62bfe66d4bbc52e5077ddac5efdf2813dbd35c97)
- dialog windows in background popping out on tab-out [`e7dbfacdd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7dbfacdd7804c57bef648918fad228f646b32b7)
- tooltips staying open over dialog windows [`fadfa27d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fadfa27d2341916be0e9ae1c93fc1d20c2c5f45f)
- use steady_clock instead of system_lock to measure replay duration [`d3e8e7fcc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3e8e7fcc44b48ddeb1847407355aa4dbf26c389)
- [mac] handle CMD key press and allow CMD for all places CTRL is [`e45016fb2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e45016fb27319dc0f86dd0042471755c5285e0f3)
- a couple crashes/dialog oddities [`c577892d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c577892d9df760973d465a7e14d98b61c74e313b)
- add proper versioning for init data deltas [`fdd6da3c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fdd6da3c1f746cc3d4bd892219dbd0e056f2fa7d)
- Crumble type now uses 'Continuous' as a checkbox, fix wizard for Crumbling type [`020466990`](https://github.com/ZQuestClassic/ZQuestClassic/commit/020466990e25fa9133d530c413e1b5a66255b32a)
- various issues with the default display size for windowed mode [`20f6fa908`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20f6fa908d33611c8573a6c1b4bbe4e0808d083f)
   &nbsp;
   >Instead of using the monitor scale / DPI to multiply the size we set the window to, it now looks at the monitor resolution and uses the largest integer multiple of the base resolution (256x240 for zplayer, 456x342 for zeditor and zlauncher). This always takes into account the scaling of the OS (the monitor width/height changes when you modify that). If a window size is saved from a previous run, it will use that instead -- unless it won't fit, then it goes back to getting the largest resolution for the given monitor. More details:  
   >
   >- Completely change how the initial display is sized for windowed mode.
   >  Instead of using the monitor DPI to scale up a base resolution,
   >  default to as large a resolution as possible while maintaining an
   >  integer scale. This particular commit retains the previous behavior
   >  for Windows, but the next one will move Windows to the new behavior
   >  (separate commits just in case a revert is necessary)
   >- Set the desired window size for zeditor before creating the display,
   >  not after.
   >- Use the base resolution in zplayer for the allegro 5 screen bitmap,
   >  instead of 2x the base resolution. Should improve rendering time a bit
   >- More reliable behavior on mac. Previously would possibly cut off top
   >  part of screen and mess up mouse events if the initial display height
   >  was bigger than the available height
   >- Set default for fullscreen option on Mac back to off. On newer M2
   >  Macs fullscreen display creation is bugged. Fine for Windowed -> then
   >  Maximize, and fine for older Macs, but for now just set the default
   >  to windowed mode to be safe
   >
- simplify display size for windows too [`a049b6ce6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a049b6ce6b8b4097faf316fb6f0ba1dece79f650)
- set window title as early as possible to reduce flash of text [`d7312b9dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7312b9dc92ef0c5d58af77cc3728fa85c0a2b95)
- mark render item transform dirty when changing parent [`f59d8b314`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f59d8b314d8086055da5a737197ae29ec83911fe)
   &nbsp;
   >This bug resulted in the tooltip / highlighter being offset when the window size changes. 
   >
- bomb equippability not respecting cost counter customization [`c7ffbf652`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7ffbf652218a19fbcb485e59700d4b541f3a9b4)
- many issues with the 'Doors' dialog [`6e97f2aaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e97f2aafd15d463616c4adce22bfe483428391c)
   &nbsp;
   >Also adds new '(None)' door type. The player will not 'auto-walk' when entering from a '(None)' door, and no combos are placed when setting one in zq. 
   >
- use simpler temp file creation for all platforms [`5018d9e54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5018d9e54f6da538dbb012bf4bfa22392fb885cc)
   &nbsp;
   >This should resolve problems with making save files observed on some Linux setups. 
   >
- ack halt/resume draw events from allegro [`438a18c1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/438a18c1a05c13598322f88878889b25b4affdd2)
   &nbsp;
   >Without this, the `[osx] allow_live_resize = false` configuration option results in the window freezing on resize. 
   >

### Player

- fixed passageway and item cellar fade-in when "New Dark Rooms" rule is on [`4748d9a89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4748d9a897ee2503d771c5b7565dd16a0caefb82)
- playtime not drawing unless scrolling [`ddd3f26a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ddd3f26a1f563f5217a64a234bc02608bb47e4e4)
   &nbsp;
   >I'm so mad at how dumb this was. Specifically, it doesn't draw if you have "subscreen over sprites" disabled unless you're scrolling. 
   >
- 1-pixel gap in 'show walkability' cheat draw [`ee0eda1e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee0eda1e23ec7602b3aeac081b0a8f9c1f3ed1c7)
- 'Newer Player Movement' corner-shove being far too lenient [`d0e2908b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0e2908b1ed1c954d6ac83d84a3f47fee0a8d513)
- fix manhandla step speed calculations [`60e9d9f41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60e9d9f4173dddcf177b5c7f766406e282aefed4)
- show previous changes in player data menu when used multiple times without unpausing [`325834d44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/325834d443c558389130742d84a3384a69402806)
- restore quest progression and skip names [`804484ddd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/804484dddfee5373a7ca07436da38aaf459bc58a)
- fix corner shove solidity [`7c5c7c992`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c5c7c992fa82b35b6c1f351d1c1ed7f2c171a8c)
- set size when making info layer to avoid crash [`5163053b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5163053b57caec8bdd57df2270086ac2a028af2e)
- titlescreen hp offset when hp_per_heart != 16 [`31f3840e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31f3840e4dd3b439d55161c2b764f05e0bed66ec)
- Lift 'Special Item' setting wrong state [`7215fd92d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7215fd92d4681574448b056ffc2541209c29dbdf)
- properly reset directory cache [`8cacad3d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cacad3d5c0534edbb3d56d949fdd5fc6f01ccb2)
- subscreens with item-overridden level items not properly displaying [`913003180`](https://github.com/ZQuestClassic/ZQuestClassic/commit/913003180aa69744e7372bd757b7ea167c87d7dc)
- snapshot entire player screen for gui snapshot, which was missing a5 layers [`8f416879e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f416879ed01c192ee29c483b17724c264d289c5)
- set game played to false to fix quest progression sword/health bug [`be675976b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be675976b7d00ae666b2c1b976ca533589226a35)
- fix conveyor stun and forced direction persisting past stepping off the conveyor [`87bba7462`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87bba74629f164c41b3fd515ac1c9d2e15f8434b)
- set dummy flag when drawing temporary item [`a4ed17065`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4ed17065d58bebe56886772445e7deb6f1bca46)
   &nbsp;
   >This fixes a known bug in older quests that plays sfx repeatedly when picking up a fairy. 
   >

### Editor

- fixed crash when opening preview mode [`23ad85cfb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23ad85cfb376c2d9e69911d30e437bfdf4eb5106)
- made autocombos respect moving, adding, and removing combos [`f8d89f5ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8d89f5ad91c7b10926217a92862627a5813123e)
- prevent crash when changing font [`640378df8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/640378df82c06c3aa786c5c5b8736200e8c53a0a)
- prevent data loss when grabbing tile from old quests [`f8fdd7bb7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8fdd7bb7489beaccd44ce6d62594a35fe7d02f9)
- qrs having wrong category name in search menu [`5391348e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5391348e4426a02de0ae684a79c14dc5d0356bac)
- import maps was unhelpfully clearing everything [`50c6377e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50c6377e1f9d757eceb5ba35260a94d591890409)
   &nbsp;
   >The map import tool was checking if the first screen's `valid` field was a special value denoting it was "cleared" by the user. It's unclear why `valid` holds this information, but presently it's not useful and breaks map imports randomly. 
   >
- use cross platform clock for timing to fix combo editor animation [`163f9a91f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/163f9a91f832446aeb179611374dd8e5d5df8e8f)
- use cross platform clock for zscript compile timing [`cde9a4688`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cde9a4688acfcd6c12fa6395c1f1a42fda02a171)
- format zc_args.txt correctly [`be4390661`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be4390661773b92e7eb32e35a4e6852a86ebbb5e)
- preserve screen bitmap [`3d674f868`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3d674f8688c9a3ae14017dfcadd9c355cc0a5cfd)
- prevent crash when rendering minimap during loading [`4c7dfe677`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c7dfe677c8c1c39a33c981d4adc4f6a6e8c013a)
- fix crash with passive and overlay subscreen settings [`1c9b81f57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c9b81f5721a3b9c298b0733e18b95bdff8bea36)
- 'Paste FFC' being slightly misaligned from the grid [`8664554e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8664554e2c645d89bcda872632a9568b2c9d8a6e)
- clear tooltip before entering square-placement mode [`972e6919a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/972e6919a7db0b3eab5c302090a406bb79caf254)
- test mode init data marking quest as "needs saving" extraneously [`243088418`](https://github.com/ZQuestClassic/ZQuestClassic/commit/243088418fa920f4b1837a30cd1f63fba668cceb)
- mark tooltip dirty if text changes [`164f77d33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/164f77d3328d780327a95ed4a71456e5e91fe3ec)
- Fix palette desyncs (permanently?) [`b5a7ee226`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5a7ee226884e8d98c88296bc2734bd6c945e956)
   &nbsp;
   >Should no longer need to ever manually 'rebuild transparency table'. As such, the default keybind for 'Reset Transparency' is now '(None)' instead of 'B' 
   >
- do not freeze screen bitmap while in pal dialog [`95fac7ac8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95fac7ac8d3482dedc7eb76ae467ead1b04a0dac)
- Tall Grass combo wizard dropset not setting flags properly [`4732eb4b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4732eb4b026bb2c9cd4aa271c022a57aeee480ad)
- prevent bad overlay when no tile is copied [`5f76b78fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f76b78fec3e2cd3bf9ceef90d6b41f0d9e9c75b)
- more tile page problems from 4-bit: scaling, overlay [`1f65a0cca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f65a0ccad07213b5ef55f9efba489fa5eb95fae)
- snapshot entire editor screen to include a5 layers [`8cd737c5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cd737c5ac186e95d9e48b9bbcfcb449f572c9b6)
- dmap editor remembering wrong tab [`1a264a262`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a264a262f0e8f44a5b949493ab3357f4e7a9009)
- use consistent values for mouse coords when making tooltips [`c716f13c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c716f13c3dba4043668d7c9b8bd33130d47bb0ff)

### ZScript Standard Library (std.zh)

- update ffrules.zh to include all new quest rules [`cc67be852`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc67be852c537a6f0f1b290af848639f90d267d3)

### ZScript

- 'subdata->TransClock' was not returning -1 properly when not transitioning [`95edf1e5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95edf1e5ea9e9dc0d80ef7758a41d0933d87b215)
- fix slowdown caused by draw commands during frozen message strings [`48511cdd5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48511cdd549628e91243a6f8abc0649ff746c5fb)
- persist compiled jit functions when reloading the same quest [`2bd7e877d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bd7e877de75af389c51660973dfe51eb916d00c)
- `Game->CurrentItemID()` being completely broken [`9fc212abb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fc212abb925f3ed4246bd428207033177a706d6)
- mark destructors of base classes as virtual [`29c39e15a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29c39e15a04d2b37b63618e7cc4a64c1c681a425)
- do allegro 5 init before a4 init in parser [`58e391f63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58e391f639d450e596ea62e72f74c4637354d53d)
- fix SPRINTFA calling the wrong function [`c49ed2840`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c49ed2840d3cc54eed6da6ac2dde83e0e49142ab)

### Web

- remove unnecessary bitmap backup [`9c309afab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c309afab0d99f5e0fb0a8424f61bed71a1ae22b)
   &nbsp;
   >This pretty much doubles FPS across the board. huzzah 
   >
- support both landscape orientations [`8206a3008`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8206a3008920522043655bd75bff6c09b7524e0a)

# Documentation

- specify what OS versions we support [`080b61e10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/080b61e10fab35fd3710a626445864484f93e9f0)

# Build

- simplify packaging script [`ee5e02a1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee5e02a1ca26ecc16d59296d9f58ac0ec37786f8)
- use zlib as a shared library [`d388d1a6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d388d1a6cd100c3ea5c26ffb01abb8274d279e3f)
- upgrade sentry to 0.6.6 [`749746d6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/749746d6d8968cc4793580bc1e7f2d0f9f5f3321)
- move some src/*.cpp files to appropriate static lib [`e3038f133`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3038f133beb87e57b1444dfcc43be290b0295d8)
- remove unused font.cpp [`3bda28548`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bda28548cd78b430851fbbbe1ea1d395dabbc58)
- upgrade to latest asmjit [`2ede55147`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ede55147210f41882a5654dd3285eeb5eab733b)
- upgrade allegro [`d5de2ebbd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5de2ebbd1629c28051fe68df272a13b06f30488)
   &nbsp;
   >https://github.com/liballeg/allegro5/compare/652684327236dfd23dcf6bf433fa9975212106b5...11a6425cae646c592f3086cda5f8c339296135fb 
   >
- auto generate changelog for alpha release [`36085a914`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36085a914ed69070d92e7e4e647a7ae30533e71d)

### Web

- fix renamed script [`d79ef7d06`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d79ef7d067da9ad2f8df4cb8a22f708f8858fc1e)
- remove post-processing by python script [`f8b2af856`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8b2af856c163b85cae415e98efbc2b549e9e25d)
- include function names in release build, separate dwarf for debug build [`fb44b2a78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb44b2a789f787ccbe0dfe5373cd0cea8564c1da)
- integrate web build into cmake [`7dbb75dee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7dbb75dee0b2581491c1f26f01274251f1edc894)
- fix missing zscript compiler caused by 7dbb75d [`bbdb9be63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbdb9be6329f3948a63f63f0932f4ecccc91b9cc)

# Chores

- fix many many typos of `it's` -> `its` [`a7e3cf4ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7e3cf4ec85f16ba02866d17c85082204711092a)
- remove outdated or unnecessary docs and ZScript headers [`81b871ade`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81b871ade273adf860e4ff46b339fb8dde5c83da)

# Refactors

- memcpy the buffer in PACKFILE fread [`8f547f8f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f547f8f5e1f4e92e37cee1116daeea7ab102e06)
   &nbsp;
   >This saves ~500ms on my Mac when loading Yuurand.qst 
   >
- speed up copy_tile / tilesize [`01e13ec0a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01e13ec0a382b03cc9d0b87ca3fe83c2ec2247c9)
- use safe cstr reading functions [`b1a7b8d43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1a7b8d438c805c18d133172bba09ae5970c8aa2)
- add `bounded_vec` container type [`9edaa62a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9edaa62a23b931111280cade794003fa6b2cd21b)
- render a4->a5 bitmaps in first pass [`8ef8665a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef8665a790f262187da6e7be59c1cdece3abfa3)
- reorder field initializer list to fix compiler warnings [`8d64f8374`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d64f837479b3665916aeccf9f3d2057b84a10eb)
- simplify render tree drawing [`b52d7eaea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b52d7eaea3e605aaf1bbcf1230e9d484489ac548)
   &nbsp;
   >This adds `prepare` and `render` functions to the RenderTreeItem class. Also makes them virtual so that new classes can be made to represent a render item. The minimap drawing code was moved to this.  
   >
   >Consolidates the logic for when a render item is dirty, and moves allegro 4 bitmap handling into a new derived class. 
   >
- use a single bitmap for dialog tint [`8a8ef4667`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a8ef46679deb0e472894a4f31f3a59cc6257712)
- add bitmap_flags to rti [`6af0dcc23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6af0dcc23f77422fe16faa7a9441384fc69ebe90)
- Init Data / Gamedata [`acb7c8481`](https://github.com/ZQuestClassic/ZQuestClassic/commit/acb7c848170c77210c385586d38bd2b0d2e8fd0b)
   &nbsp;
   >Change how Init Data is stored and saved to the quest file (and rearrange the dialog slightly)     - Allow setting mcguffin level state for all levels in init data/cheats instead of just levels 1-8     - Init data health can be in HP instead of just in Hearts     - Can set init values for script counters 26-100 (was missing before)  - Change how data is stored and saved to the save file 
   >
- cache zasm script size [`be7c81d3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be7c81d3c5e909ed6d205b1468cec16fe7fa9b53)
- move zcsound source files to src/sound [`09dfea4eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09dfea4ebcbffcb6137df331ad6ec2756cda3f17)
- remove zcmusicd.cpp [`15628e6f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15628e6f3a3f80d6c8fd356588815a8af0a80b79)
- move ffc set data / changer out of ffc.cpp and to src/zc [`3a6d2d394`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a6d2d394c2bbb37a9755b05d5cca87c0b587ff5)
   &nbsp;
   >This is the first step to moving `ffc.cpp` to zcbase. 
   >
- cleanup combo position handling, optimize spotlight code [`44cb8bb72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44cb8bb727a27738ba2964e1403b5f056a2611cb)
- cache config read for use_linear_bitmaps [`4c922be5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c922be5e5e0aca7a8b1a078d1ee470c541f8c55)
- remember previous screen clip for scrolling pane [`7a8021809`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a802180910d99ec2a83aa31a46bd609aa25d574)
- avoid copying combo everywhere [`0ecfa71f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecfa71f6e20422b609b4bd1d67a4e99f8f04d03)
- limit default window size to 3x the base resolution, and add a buffer so to always be less than the monitor size [`2f6cf5a72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f6cf5a725fd2dae0be09525ba28c9eb5ded4366)
- unpack 4-bit tiles when quest is loaded [`ff01c741b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff01c741b1c3d9b117fd8a5bd7bc47876de70a03)
   &nbsp;
   >This reduces CPU usage by ~3%.  
   >
   >Previously, 4-bit tiles were only unpacked just before being drawn. Unpacking means converting into a format ready for drawing, which is somewhat slow to do in functions as hot as tile drawing. Now, when a qst is loaded all 4-bit tiles are unpacked in memory. When saving a qst the reverse happens. This change has no impact on the qst file format. 
   >
- avoid copy when drawing tile without any transformation [`973303a3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/973303a3cdbab473cc6c4845239b13e762b9faaf)
   &nbsp;
   >This reduces CPU usage by ~7%. 
   >
- make get_qr faster by unpacking the bits ahead of time [`990eb380b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/990eb380b886322207215f7905785c82a0dd8438)
   &nbsp;
   >This reduces CPU usage by ~5.5%. 
   >
- Split graphical weapon init code, in prep for ignite sprites [`9ca67c7b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ca67c7b0ebfadb0324cfabc7f02005d8eb30651)
- make tooltips simpler to install, and map prev/next tooltip [`ca09be0e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca09be0e25754d40cf16985fe64443afaadebe7f)
- remove unused single_instance [`618d9986f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/618d9986f846c1f56b5b1f8a907ea931d7e624e8)
- minor combo alias optimizations/cleanup [`8d1d73e44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d1d73e44809941a5e7e7ecb943d845fb1ae87a5)

### Player

- do far less work in platform_fallthrough [`8861f51f1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8861f51f1e60ab5f7d929d37a7ae6f96c8989589)
- do less work in run_gswitch_timers [`78af21af8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78af21af80f6ff8bfb44e35e0da82580b7da276e)
- avoid costly script object dealloc when destroying dummy item [`c22e9d68f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c22e9d68f333b2d283624af9120e891a0655ef1a)
- use more accurate but slower tile drawing when drawing on edge of bitmap [`c1601e941`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c1601e9418879f4722b21f8bd6a9204750b7cd2d)
- respect bitmap clip in tile drawing functions, remove usage of temp_buf in screen draw [`a42586c11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a42586c11202bdc15a5b9e3511e06ac00c47301b)
- totally remove temp_buf in screen draw, and masked_blit [`93f25b690`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93f25b690bbd3df08e61780daa2e32c5506e042a)
   &nbsp;
   >This refactor reduces CPU usage by roughly 6%.  
   >
   >This results in some unavoidable minor graphical changes for quests with the QR "Subscreen Appears Above Sprites" disabled. Specifically, sprites (such as jumping enemies, weapons, etc) continue to draw over the subscreen background as before, but now also draw over the individual subscreen UI elements. In most cases this looks better, and better follows what the QR text says will happen.  
   >
   >https://hoten.cc/tmp/compare-report-screen-draw-refactor/ 
   >
- cache result of item_tile_mod, which saves 17% of CPU time [`b3c942902`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3c9429021e97e625b5df9096b35e6e0883d40a6)
- remove accidental copy in run_gswitch_timers [`9646be4b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9646be4b193e7c0f35f1f8b57e666a91acf1a58f)
- show dialog when saving fails [`2a571d392`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a571d3925a8809c4dc061d8ff3a6212ecd1fcf8)

### Editor

- only draw tooltip bitmap when in use [`ef146dede`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef146dede0b1606f2aedacb0df7b3fc172a92900)
- remove rests and use smarter fps throttle [`3ca0a1208`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ca0a1208ee62b7a59097c4f3e7416994d44181b)
   &nbsp;
   >Use the same smart FPS throttle that the player uses in the editor too.  
   >
   >This doubled the FPS in the Web version. 
   >
- draw minimap to smaller bitmap [`df2602f85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df2602f852f7eb2821b70522f2061b98f1b94175)
   &nbsp;
   >Also add a callback to RenderTreeItem, which allows the main drawing code to directly render the minimap as needed. 
   >
- only rerender minimap when dirty [`66d882141`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66d882141a102b4f08ff862643fa587e0c14e3b4)
- draw tooltips to smaller bitmap [`50f1344a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50f1344a37281dde5b17977b0047b1dced7b53f9)
- move minimap drawing to render_minimap.cpp [`042728610`](https://github.com/ZQuestClassic/ZQuestClassic/commit/042728610ff3b4820e3c474c43b08fbe634b85bc)
- remove dialogs for deprecated modules and quest templates [`0ebbc8450`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ebbc8450d5ba317a76d5b2cc45adeba94b774de)
- move tooltip rendering to render_tooltip.cpp [`911019c55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/911019c55b30410561d05f8c4fa9f7790e2fb863)
- bah humbug! [`21ecb9203`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21ecb9203ba16363a1b0cc7e355ed8d6967d582c)
- remove pointless time code [`d0549a3ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0549a3edc4f9b352e8c3af2ef702837fd39e545)
- simplify tile copy during grabbing [`eb1a43609`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb1a4360995bd7f358786555f1556f2963f42f2c)

### ZScript

- replace script debug_id with composite id (type, index) [`8e6c48a21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e6c48a219bef66e78b36d588ba4e8e86530f849)
   &nbsp;
   >The previous hack of using a global variable incremented in the constructor had strange behavior, and would result in different ids given when reloading a quest. 
   >
- use .contains instead of .find in jit.cpp [`02dbb040c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02dbb040cb15ea2a8dd59429dfc4481614ee8c88)

### ZLauncher

- group current version info in updater tab [`986b27145`](https://github.com/ZQuestClassic/ZQuestClassic/commit/986b27145cc487b5c8349aa8b30011d3de32a641)
- open new website for release note buttons [`1c8149e0f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c8149e0fa82ff9962130988ac785af39fd96201)
- remove changing zmod in launcher [`85ea325db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85ea325db4f51b58365fca0910b4923206c9a6cd)

### ZUpdater

- just query website for release channel info [`a724610af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a724610af9e59f81fd06b05cba8f7bbfdcd4326f)

### Web

- prevent script trace unless debugger is enabled [`cf3ce065b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf3ce065ba2cce71d7465e8842e9cc991c4f4948)
- stop excluding some slow-to-build dialogs in debug builds [`452efb90a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/452efb90a38bbd9249bc0e1ca1466ae2d1f72404)

# Tests

- re-enable classic_1st.qst resave test [`9065169e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9065169e6370a2e76f234fdc91ba7113ae2e40a9)
- expand resave test to include ss_jenny.qst [`a92664884`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a926648840305e2551f80b350e036b12539ab3f4)
- run replay tests concurrently [`762ac2db5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/762ac2db55d21e30cd315b69b14d2faefd1ee0c1)
- add playground_ffc_changers.zplay [`c5f02cfb1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5f02cfb1d620c5f26f766c48bee742e09c25ebb)
- pass correct value for frame arg, which was breaking --update [`2cf6ae4c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cf6ae4c698d4baf5ef63d96f350d2792b2a87b6)
- recover from failure when downloading a release [`6545e847d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6545e847d0958f7294a5522200470b4d667dfa01)
- add --concurrency flag to run_replay_tests.py, and set to 1 in headful mode [`df4644a4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df4644a4e2ef7aae2281a588fcd922491994b831)
- set retries flag when getting baseline replays locally [`27f017136`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27f01713638659994f9fa07349e96158d1f9fee5)
- remove diff from replay test run result [`8ef2c1575`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef2c1575dec77aa089576f30b4e57136ed59c85)
- support baseline prompt when providing existing test results on disk [`492bc6b8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/492bc6b8ba078ffde8a73c773ab2fdacc24e193b)
- keep webserver alive for web replay tests. check for fatal errors [`1af5883f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1af5883f211ca924a458dbdbe22bc279f45ef9f2)
- make test replays lazy files instead of a single giant download [`f9fa641ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9fa641ef86884e106c98c4e869bd3c5d6126a2c)
- clear test result folders in python tests [`d0147e77e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0147e77efd1334e5731f7f87db3c346fa3265eb)
- for replay tests baseline prompt, only consider releases predating current commit [`d026d8834`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d026d8834c286039f021947336fbcc9c48edac88)

### Editor

- add test_package_export [`53d06c6f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53d06c6f2a83d4b42971e93e68f99d945eb52572)

# CI

- trigger web.zquestclassic.com deploy on release [`c17ef05ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c17ef05eaf52877e402f4296539500014dfdfc82)
- use clang 17.0.2 for linux [`1d3ebb548`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d3ebb5487a866f1cb4595b712a2271f649f7cbf)
- add failing test results to tar for faster upload [`78cf78184`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78cf781840646f17c10180f8a3bbcb515894905f)
- reduce amount of data uploaded when replays fail [`f589ada7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f589ada7e7e99ad127a68334dd8af3916f97afc8)
- fix archive step when there is nothing to archive [`3869a0869`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3869a08698262e68b06e0eedb929c390e765388c)
- run fewer replay tests for web, for now [`ec906a94b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec906a94b1dd455ad10360c48fa003b1b3a60923)
- specify bash shell to fix windows failing test results upload [`ced10c828`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ced10c82829cf5b5d9de46e9ab6d15f99594e6ec)
- only consider ancestors when searching for baseline commit [`69c4cf890`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69c4cf8906c615974a566708abeea93580734fd1)
   &nbsp;
   >Previously it would only look at the main branch, but that does not support long-living branches nor multiple release branches. 
   >
- fetch all git history for compare job [`c5f2a5b1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5f2a5b1a5a79295764a3753cf78870c7195bbeb)
- explictly ask for python tests in ci.yml, which stopped running b/c of f589ada [`36666a369`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36666a3698f3cf892c189f4616016fa0a322082f)
- use all cores for replay tests on windows [`3e2554782`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e2554782adb5803c85fd6d9617685d8becc43d2)
- fix archive test results on windows [`33be44347`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33be443471da563a27d68c3877ae956e0584f84f)

# Misc.

- include oneliners in changelog script [`3bba771c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bba771c08aa90c5831ae52266256dcc4b4d9821)
- reserve dmap data in qst format for z3 regions [`69784d2fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69784d2fae0b22a09de063475e3a829bd5c6176a)
- add README.txt to release package [`1b30ef164`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b30ef16489fd65bea0cbeb0db1cfcece759219e)
- log time it took to load qst [`3ebdba27f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ebdba27fb80545025bfca95ad6cb6fac18aa9e6)
- collect quest ratings [`e3ef8f63a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3ef8f63a6c6cfdf02982c09ed2f518ab32090c9)
- change log of website to new domain [`9d8e9239a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d8e9239a85d3a46c8c4d812f0c9ca92ed65410a)
- remove ag.cfg [`f0f80f38d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0f80f38dfe3bc52a2d3cb7c9363a2cbf968e43c)
- add/clarify some info text [`716ec391f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/716ec391fa657fa6c5363a4d48dbc485c318b8c0)
- clean up box_out popup [`06bea6850`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06bea6850cc510d362404fcabb4ccae8b44f67c0)
- update 'default.qst' [`4b54dd752`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b54dd7525e93a4c7338122048d980299b638083)
- update references to old program names [`9a3e56796`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a3e56796f87a1fa853bf4b228c0383c90d0f95c)
- allow '<:' in commit (similar to '!:'), to squash with prior commit in changelog [`6ea35b2c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ea35b2c7c3b9f610ea2b12dd50393fbdb8a34b5)

### Player

- set cont. heart beep default to off [`9919433e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9919433e698af51d4507966ad12132a7debf608f)
- change ending credits from Zelda Classic to ZQuest Classic [`31c7829ca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31c7829ca47057316b5b9b0a8e5e8f9c81db1970)
- use more user friendly strings for creating save file / continue screen [`f2084a1a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2084a1a08e117ba6872889b3928df5d9d0465c1)

### Editor

- add `-uncompress-qst` CLI command [`696657428`](https://github.com/ZQuestClassic/ZQuestClassic/commit/696657428488dd3497836f527a6ce0b6255ab1db)
- make checkerboard bg in the tile editor align with the tile grid [`2b681111a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b681111a9b5d6dad3539df9bb03372ca19efcda)
- remove minimum for tooltip timer [`c6c3f3203`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6c3f32038ec79512c42613354a826929756672d)
- remove annoying beta warning [`622e6daa5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/622e6daa533da20fb8998c82712d58309d2119a2)

### ZScript

- Add compile error when trying to store temporary literals [`e6296db90`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6296db908961986f863450f99d3071a49e2fa3e)
- never compile scripts larger than 20,000 ZASM instructions [`5986e6021`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5986e602176ae9be6ba8d1272b42b6c8fae8bf6d)
- print jit_log stuff to allegro log instead of stdout [`3e720b62d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e720b62d3f51d8e6297de37563a9875927ed815)
- highly priortize only frame-1 global scripts for JIT compiler [`e8f60b40e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8f60b40e37fd33e314681e973f99888207e117c)

### ZLauncher

- add support zc button [`11ec92044`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11ec920449c8d0dd3736edd3c791704d34ca96ba)

### Web

- make quest url a bit friendlier [`8aa27f494`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8aa27f494677896cca09d1435e42eb674a01cd26)
- use gzip instead of allegro PACKFILE compression [`dee67d885`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dee67d885eea7bf4a8bfada55076532b1fb04c5d)
   &nbsp;
   >gzip compresses better than allegro PACKFILEs:  
   >
   >And it's a bit faster to load a qst in the Web version when it doesn't have to decompress it. For Yuurand.qst, loading time (including downloading) from 17.4s to 14.5s 
   >
- better indicate download progress for compressed assets [`3fb07895d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fb07895d98b8ef34e9c5d2817ccbd0d07c17a7b)
- support default open URL for tilesets [`b1e6584dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1e6584ddf2b8ea7a46c913e9d2dd919de142ada)
