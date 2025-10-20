---
title: 2.55.11
description: 
date: 2025-10-17T03:36:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.11/2.55.11-linux.tar.gz
    name: 2.55.11-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.11/2.55.11-mac.dmg
    name: 2.55.11-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.11/2.55.11-windows-x64.zip
    name: 2.55.11-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.11/2.55.11-windows-x86.zip
    name: 2.55.11-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 255215949
tag_name: '2.55.11'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Player

- optimize ORR/ORV/ORR32/ORV32 in x64 jit [`a9299cf6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9299cf6d0c6caadeb3d40a105cd1761fc88d3e1)

### Editor

- add 'Script Bugfix' option (default on) to new file dialog [`689a1d79a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/689a1d79af9376f1d1a059e9483dfd89d5ba5b2a)

### ZScript

- support `Trace(string)` [`d0bc26ecb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0bc26ecb8fe7e471a17da437db1eca78e5d9cd9)
   &nbsp;
   >When a string is given to `Trace()`, it now smartly prints that string, same as `TraceS` would. 
   >
- log error when GetPixel input is out-of-bounds [`550a8e955`](https://github.com/ZQuestClassic/ZQuestClassic/commit/550a8e955ce06230ed773ea3e65c32a99ccf4ee4)

# Bug Fixes

- refuse large string allocation when loading qst [`5d691eb99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d691eb9993c48ea57d8ab72c4bfb0841af8c71c)
   &nbsp;
   >Corrupt or newer qst files should never crash (just show an error), but in some cases the loading code can try to allocate huge strings from bad data. Now, refuse to allocate large strings to avoid a potential crash. 
   >
- properly apply 'custom' counter max increases given by starting items [`038f51900`](https://github.com/ZQuestClassic/ZQuestClassic/commit/038f51900b5f7dce543677364c3ae93e2dfacd0f)

### Player

- prevent crash from div-by-0 with enemy misc [`069780a0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/069780a0bce456e4f39161d0b0349548630e9c4e)
   &nbsp;
   >Many configurable enemy misc values are used as the dividend in a modulus operation. If these values are set to 0, a crash can happen. The result now is to return 0 (same result as when configured with 1). 
   >
- ignore corrupted enemies in 1.90 or older quests [`9d7b69ed7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d7b69ed74de5ffb68297980937706ca2582ed80)
   &nbsp;
   >Somehow, quests saved in old versions could sometimes set invalid screen enemies. Modern ZC has more enemies, so those bad quests were now loading scary new enemies like Ice Wizzrobes where before they might do nothing interesting.  
   >
   >Now, when loading 1.90 or older quests, any enemy ids that were not possible at the time are now ignored. 
   >
- stop drawing dive items in lens view after pickup [`646b41a17`](https://github.com/ZQuestClassic/ZQuestClassic/commit/646b41a17635c3965ff8e9259976b9905cb930b4)
   &nbsp;
   >This bug only happened if the `Old Special Room Screenstate Detection` QR was on. 
   >
- pitfalls + Block Hole flag on same layer as block using wrong next combo [`d4107e31a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4107e31ac7f07891a9660dac4eada2fe05a1a24)
- handle when save no longer exists with "Reload Last Quest" on [`e549627f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e549627f62b62e9d344f4c182bee68921adfec3b)
   &nbsp;
   >Instead of closing the program when the last quest save file cannot be loaded, load the title screen instead.  
   >
   >Also, store the save path instead of the slot index, since the latter can change when manually adding or deleting save files. 
   >
- do not unselect A button when loading save [`8bd1cdc08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8bd1cdc08f81c3ce914297dfee07fca27e7db74b)
   &nbsp;
   >A bug in initializing the game resulted in the A button always being unequipped (unless it was forcibly set with a script). 
   >
- cane of byrna sparkles lingering after death if extra dying frame qr is on [`7e8cbefc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e8cbefc17d35810cef969138adf3dfcb28c2e5e)
- prevent possible crash in ZCSubscreen::get_item_pos [`527bd5610`](https://github.com/ZQuestClassic/ZQuestClassic/commit/527bd561091ac50fae5e4c0dac637cdea69ad02e)
- avoid "invalid save slot index" when creating new save [`e03204a7d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e03204a7df1394ed064ff5511a85cf3308430c3e)
   &nbsp;
   >Creating a new save slot could sometimes invalidate all existing save slots (until the program was restarted). 
   >
- tile width/height not working for custom/ice weapons [`6ae1a699c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ae1a699cd4f99ecd3526fd6bcfde6ec12050868)
- wrong combo ID used for some water behavior [`931b000b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/931b000b34f5c349b10d38028f6db88863b69717)
   &nbsp;
   >When the "New Water Collision" QR is off, the combo type instead of the combo ID was being used to control some behavior (such as the damage amount). 
   >
- pit/water corner cutting (newer movement only) [`142811513`](https://github.com/ZQuestClassic/ZQuestClassic/commit/142811513ed83cd0c7be54323ce17beed268db03)
- minimap title requiring map item didn't actually check for item [`3c8c6ba16`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c8c6ba1608468625d3087c71752e722d544cb05)
   &nbsp;
   >When "Invisible w/o Map item" was set, the map item wasn't always being checked. 
   >
- falling/drowning issues [`43db6651b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43db6651bd93724f51a4537b036e0ac713b0a4b3)
   &nbsp;
   >Enemies/items/weapons were not using correct hitbox for falling/drowning Enemies/items were immune to drowning in sideview 
   >
- move custom eweapon to lweapon sprite list when reflected [`3f1d2a126`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f1d2a1266bf78c2fc044d52b81665ae22fe7d01)
- walk-through-walls not being respected for pit/water scroll check [`4c6962b05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c6962b054a16202bddf41b302483a312e6aac82)
- prevent memory leak from replay steps [`9710ef344`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9710ef3441a49fa1d09ebabbc23f8ee6e73754d7)
- 'Move' missing from combo page rclick menu [`ea6d9b559`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea6d9b559e2a4fff5506fbe2184fad7e43843580)
- held-up items treated 'Only Held' pickup string flag as 'Always' [`127a1b893`](https://github.com/ZQuestClassic/ZQuestClassic/commit/127a1b8930f929c9b92726db022f3ad750a087bd)
- cutscene trigger combos that allow F6 softlocking on F6 [`bf6bd6286`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf6bd62862ae9be628030595f439499c61882b66)
- walking over pits in some cases (made pits more sensitive) [`ab1d9e238`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab1d9e2385872e4dac8337a03bc8577564bb1010)
- prevent trigger change effect resulting in invalid combo [`4ecebc11f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ecebc11f728a8190dfca5d159d350e1056b193e)
   &nbsp;
   >When the combo change for a trigger effect produces a combo with a bad ID (negative or larger than the max), the engine would crash. Now, the resulting combo is clamped to the valid range. 
   >
- allow background to be transparent in active subscreens [`a4646ab31`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4646ab31cb66054b614546418d5bc4fa5e31f6f)
   &nbsp;
   >When the compat QR "Old Engine Subscreen Quirks" is off, a bug caused the background for active subscreens to never display the playing field even when the subscreen did not have a solid background. 
   >

### Editor

- allow item editor to enter larger numbers for the Power field [`1e3536e64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e3536e64d9cb1f4d435f447d37cf07e75bbf6a5)
- subscreen editor color selectors not showing cset 12/13 properly [`39ed9f4fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39ed9f4fcb467da25a89fdfcdad781c73415ab3f)
- improve test mode screen matching [`d317fb5ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d317fb5ab15b545f1ae6d718b80d7086319f2956)
   &nbsp;
   >Take into account the dmap xoff value when selecting the default dmap to use for test mode. 
   >
- prevent test mode from using screens >= 0x80 [`42aef59c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42aef59c86e175fb8198216992299ea06bf17f75)
- use correct width for tile anim preview frames [`18944f470`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18944f470e8a85843647b34bee709a3ff24c8d2c)
- properly set enemy move flags when saving old quests [`f84d33e20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f84d33e206f6ee148e00834a97e8bbdd8df15df4)
   &nbsp;
   >Quests older than 2.11 were accidentally clearing enemy move flags if saved in the editor, resulting in enemies not be able to traverse over water or pits. 
   >
- handle all filesystem errors when creating quest package [`d6ed51fd3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6ed51fd37533cffdf9fc0777aa5426cd212f969)

### ZScript

- clear eweapon script when it ends [`62257c7c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62257c7c4d3d56272d8579377964ecf13f7aefda)
   &nbsp;
   >When a script ends, the scripting engine is supposed to clear the object's script so that it cannot run again. But a bug prevented that from happening for eweapons.  
   >
   >Normally that wouldn't matter, but if the weapon was reflected it would then try to run the eweapon script on the newly created lweapon.  
   >
   >And normally, _that_ would maybe mostly work, but another bug actually caused a crash to happen instead.  
   >
   >So now eweapons have their script cleared when it ends, and the crash is avoided. 
   >
- prevent crash when drawing to system bitmap render targets [`a9b8fc7bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9b8fc7bd1e44724b0cc2695f1d551232b629804)
   &nbsp;
   >Script draws to the `RT_BITMAP0`, `RT_BITMAP1`, etc. bitmaps could result in a crash.  
   >
   >This regressed in 2.55.9. 
   >
- correctly handle COMPAREV2 in x64 jit [`5e35070fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e35070fa927ccf07201890e40ffd2eb1645c6c4)
- use correct sprite for step in weapon MakeAngular [`8ea1dfde5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ea1dfde50faa2587a2ab9551e0706cdf4754566)
   &nbsp;
   >The wrong variable was being referenced to access the weapon's step value. Instead of using the weapon, it used whatever was last set to a global `sprite` variable in the scripting engine (which could possibly result in a crash). 
   >
- load initial screen before onSaveLoad global script [`eae75f591`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eae75f591060bde749f20aacc0a9acda698deb65)
   &nbsp;
   >When the "Use Old Global Init and SaveLoad Timing" compat QR is off, the onSaveLoad global script ran before the initial screen even loaded. That made accessing anything on `Screen` do the wrong thing.  
   >
   >Now, this global script can access the initially loaded screen. 
   >

# Refactors

- check each file section version for validity [`72a6141f0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72a6141f092ee58c42f59512c508561d5bbd541b)
- remove date check when loading qst [`bc7bce33e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc7bce33e58707c11cc7da67b4101321bf3a6cff)
   &nbsp;
   >The date check had some correctness issues and was kind of complicated, and the explict version checks are sufficient, so it's been removed. 
   >

### Player

- use monospace font for text overlay (fps, etc.) [`228d45dbf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/228d45dbf5ae2e89042350d33c3957c50a3afc38)

### Editor

- save test mode replays to "replays/test" folder [`1df88bf33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1df88bf334aec0528447fd453144a1cfcc6432ea)
   &nbsp;
   >Just to separate from replays for normal saves. 
   >

# Tests

- add stellar_seas_intro.zplay [`a63337a4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a63337a4d8d8f269d5fe66d3ad6fa97dabeb7542)

# CI

- [win] update vcpkg to 2025.08.27 [`486dfe7f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/486dfe7f4eda7763b6e41021d05554d072cc17d6)
