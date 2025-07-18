---
title: 2.55.10
description: 
date: 2025-07-18T03:31:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.10/2.55.10-linux.tar.gz
    name: 2.55.10-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.10/2.55.10-mac.dmg
    name: 2.55.10-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.10/2.55.10-windows-x64.zip
    name: 2.55.10-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.10/2.55.10-windows-x86.zip
    name: 2.55.10-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 233400362
tag_name: '2.55.10'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

### Editor

- CSet now listed in combo pool placement mode [`5f8e0243f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f8e0243f1416dbc205de6dacd1acd35e6e48d87)

### ZScript

- add `ReadBitflags` and `AdjustBitflags` helper functions [`5dd91fb81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dd91fb81148854ffd2f7ee808b3faee093c92b7)
- add `Flag[]` to `Screen` and `mapdata` [`55a92a079`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55a92a0798f68df2e51f13163b7d373037f2b1b9)
   &nbsp;
   >The new `Flag[]` variable is a boolean array of all the flags associated with a screen. This replaces `Flags[]` and `EFlags[]`, which are more complicated since they grouped bitflags by category and required bitwise operations to access individual flags.  
   >
   >```
   >// Old
   >bool v = Screen->Flags[SF_ROOMTYPE] & (1 << SFR_SIDEVIEW);
   >// New
   >bool v = Screen->Flag[SFL_SIDEVIEW];
   >```
   >
   > Because of their complexity, `Flags[]` and `EFlags[]` never supported writing to it. `Flag[]` makes that possible now.  
   >
   >Also removes `GetMapscreenFlag` and similar helper functions, as usage was low/non-existent and `Flag` totally replaces it. 
   >
- option to run weapon scripts an extra time during spawn [`05a8349f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05a8349f545ff6f1a83bf1fe71adec2e8231852e)
   &nbsp;
   >This is an optionally enabled scripting QR. It may fix some timing issues, such as a script wanting to make the weapon immune to pits being too late if the weapon spawned ON a pit. 
   >

# Bug Fixes

- dialog lists scrolling wrongly in some cases [`d0cdac0ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0cdac0ac495c3bcdb289fafb9d7d145ddb0f452)
- support test init data in replays [`cb7195d79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb7195d79c040ee996b45977f44c023b2137255c)

### Player

- bottom 8 pixels not showing in some cases [`72650d38a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72650d38a6fe1f909ece11a0547887ed8af3acb0)
   &nbsp;
   >For the F6/Active Subscreen/Map/Death script engines, the bottom pixels were being cut off even when showing the bottom 8 pixels is enabled. Some scrolling/end game effects were also impacted. 
   >
- qr for strings on layer 6 timing fix [`e5660e404`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5660e404b9705e9497fb63a234a3067b920ec6b)
- use proper start screen after reset for test mode + recording a replay [`b0e6404d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b0e6404d6d2f81b5c9b0d52c005e0ca9ef2dae4e)
- prevent crash on `Game->Reload()` on instant reload [`88bb05b98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88bb05b98438cc8556afe7b30e8c5165858664b3)
   &nbsp;
   >Regressed in 2.55.7 
   >
- hover boots duration being halved over pits [`b10316964`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1031696484c505126ec6603aeb6bbbf6927a31b)
- don't skip saving game in test mode [`67390cc25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67390cc254af4d820c0e8459869ce91bfaa06a75)
   &nbsp;
   >Methods of saving the game other than directly via them menu (such as autosave on screen entry, or via scripting) were not saving any data when in test mode. Now, continuing or otherwise reloading the current test mode session will persist those saves. 
   >
- don't stop recording in test mode on quit [`5ea6451c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ea6451c5394601b5e46826334a8dea1b514449b)
   &nbsp;
   >Only the "Continue" option correctly continued recording when ending the game in test mode, while the other options would end the recording and start a new one. Now, it continues as one recording.  
   >
   >"Game > Reset" still restarts the recording in test mode. 
   >
- lifted weapon not disappearing on death [`e9fa6af37`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9fa6af375e561ffd74a3b34306405eb5a62ee2a)
- subscreen items no longer hidden after collecting triforce [`ec94d3636`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec94d363600b1648d1f68ec1247d0e765b5fc8e9)
   &nbsp;
   >If the "No Cutscene" flag is checked for the triforce item, collecting the triforce was incorrectly hiding subscreen items indefinitely. 
   >
- some drawing commands ignore the `Toggle Transparency` combo animation flag [`fa4a952ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa4a952ef61f4e9031c6685ed9d1c6338a133526)
- lifted combos follow hero dir properly [`591119306`](https://github.com/ZQuestClassic/ZQuestClassic/commit/591119306a8375237a21bf3dfe207443e1fa84a2)
- QR "Bottles can't be used with any maxed counter" being backwards [`8e06bddf0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e06bddf0f4b93eb7e6064ab27e862deb005e0eb)
- progressive item / item bundle related crashes [`44e943192`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44e943192940c47c916f830715d0521efd3699ac)
- prevent softlock when enemy falls into pit after eating hero [`437a350d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/437a350d4214f1d5c016673800a2db987675bc23)
- add compat QR for rope enemy speed [`9b7d12741`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b7d127411ce52e103a993f997f3a453982ef5d7)
   &nbsp;
   >2.55.6 added the ability to configure rope enemy speed using misc attribute 10. However, this broke some earlier quests, so now there is a compat rule to suppress this new configurable behavior. 
   >
- prevent crash when using Kill All cheat on Patra [`48ac235a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48ac235a1784bfc446caf78be0335a0097783815)
- bottom 8 pixels not rendering cheat-layers (ex.solidity) [`c371aa924`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c371aa924b0a55723bfd5c19bd6b2a40078d93c0)
- remove some noisy traces in hero logic [`35b580d50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35b580d50775f277b8c1c414d3d302cf48093712)
- use black for drawing empty space in active subscreen [`935d2301c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/935d2301cabe7bf65674cbe172d4131c44bd938e)
   &nbsp;
   >This is related to the bottom 8 pixels feature. 
   >
- bombs that are auto-lifted being immediately thrown [`236651e80`](https://github.com/ZQuestClassic/ZQuestClassic/commit/236651e802158b5f32777ce35a5bd391dbc59366)
   &nbsp;
   >This regressed in 2.55.8. 
   >
- stop softlocking when using hookshot into slope [`f328d8503`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f328d850357de20b0770c60b332fe0204cf7bebe)
- conveyors not properly forcing direction between movements [`29eca4d89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29eca4d893c222804afdaa5955c12726a61e4fec)
- conveyor force dir / spin issue [`f750764df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f750764dfed157fb317d69cbf8d81464bb80fd6c)
- prevent crash when using whistle item with no sound [`a89819220`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a89819220d42b8845bf6ce21755c1ff3aa022dcc)
- prevent scrolling over liquid/pits that should drown/fall you [`b27da2ea2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b27da2ea23e74a3baee35a756adbe9e93c7cb5c0)
- lift sound not played when re-lifting weapons [`22b43ef37`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22b43ef372cca6e77515e676b07ea9ece6f9977b)
- prevent rare crash related to creating hero weapons [`ac8c8472a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac8c8472aafae4205c5388f3558f311bd9bb81b4)
- liftable bomb's explosions no longer liftable [`03098c715`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03098c7150bf6f4f3ceb17708c2f85f24ef33549)
- thrown weapons not properly rotating [`5c086363e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c086363edb16fb784dab4f3d0280f76eb894cf0)
- weapons no longer "die/stop on solids" when already dead [`6f381af80`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f381af800f2995c2fd8477cd0da3cc5e0f5acd6)
- prevent crash when accessing invalid enemy data [`e4b16c858`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4b16c8582f4e736f717498831d4a5e60cc76180)

### Editor

- prevent crash when generic script data length is 1 [`5a586644a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a586644a11ee13b4d157f39b5afa85b937c7b32)
- Clicking snapshot option in menu capturing the menu itself [`0b8d4ddba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b8d4ddba72f9a4c60ac16be48a879cf41c98eab)
- Update cambria tileset [`96209feca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96209fecaf5bd1db2c0357ebb3b06c0dcd8376e8)
   &nbsp;
   >- Fix falling / drowning animation for enemies
   >- Bomb flower combos interact w/ weapon triggers
   >- Add shatter animations for pots when slashed
   >- Fix solidity for combos 3916 and 3917
   >- Make fairies catchable with the Bug Net
   >- Gave the Bug Net and use sound
   >- Fix CSet errors in Door Combo Sets
   >- Fix accidentally uncombo'd tiles
   >- Fix locked door combos using the lock block combo type, which can
   >  conflict with engine locked doors
   >
- `Step->Effects` combo wizard 'Damage' off by *10000 [`a3456838f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3456838f74b3e8ac928bf63837f6a37225eba3b)
- View Map cutting off screens in fullscreen mode [`132aaf8c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/132aaf8c64169d01d873a606d2fabdae55c516ad)
- changing resolution in View Map via space bar [`283159dca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/283159dca3b85b90b5f4a89d2779ef5ae9e96c72)
   &nbsp;
   >Changing resolution via Space resulted in a bug where the viewer would incorrectly use the wrong limit for the panning. 
   >
- item editor crash on long item name/display name [`44284e5c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44284e5c5f61881cd14d0fb8d2e5479d1889a4bf)
- include licenses in package export [`53f606ff0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53f606ff035bc9267b050dbd89ad9e42b92dd525)
- add '?' buttons for 'Show/Hide' lens layer, to clarify possibly misleading labels [`427cf991a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/427cf991a030f93c6d8a6cfbb0e34a2ab4ecd5c1)
- slash combo wizard not setting sfx properly [`67baaeb5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67baaeb5a8552ab53e401ddc4c65b7c21f2bddd5)
- Item wizard for various slash->item types not opening with proper values [`c00dee004`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c00dee004b47b3af4310047ab34be5caa254fb56)
- preserve items on save when using test init data [`027d7657e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/027d7657e1ecb0743fe13ae2dec5d8afb5b256ef)
- prevent crash when formatting some message strings [`062003121`](https://github.com/ZQuestClassic/ZQuestClassic/commit/062003121042c25a988da62cc07a372d78f82612)
   &nbsp;
   >The code that generates the shortened text for each message string for the string editor selector used too small a buffer. Strings that were linked and had an id >= 1000 could potentially crash or corrupt the editor. 
   >
- negative values starting with `0.` not working in some textfields [`6775af6e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6775af6e366b55a22925c9c17c9e1f010ca3504a)
- 'Force Walk' flag missing from conveyor combo wizard [`4a13f725d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a13f725d3914dd478d8765aa54d7602182f04c3)
- .tsv strings import no longer drops last string [`019e08715`](https://github.com/ZQuestClassic/ZQuestClassic/commit/019e08715f79f66aee221e127e09c93f2b8413e5)
- prevent rare crash when opening quest [`72f304d1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72f304d1a097114244163357bfaeaa864deb45ac)
- prevent data loss when grabbing tiles from quest [`b8bc72ae9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8bc72ae9b4f73e58e1d8fc8a844f058dec73b31)
- update Cambria tileset [`433ab115c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/433ab115c051680dc996c6ce93a0a8cc6bc6061f)
   &nbsp;
   >- Fix the item bundles unintentionally giving you rupees on pickup
   >- Fix Stone of Agony having no effect
   >- Fix Combo 3638 not being a torch combo
   >- Fix the Spooky House palette having palette cycling
   >- Fix various example screens using the wrong trees
   >- Fix auto combo #50 not working properly
   >- Add dense forest autocombos
   >- Change Cave (Walk Down) combos to Stair combos. Making the Cave
   >  (Walk Down) combo animation work properly would require making the
   >  transparency color black, which we don't feel is ideal for this
   >  tileset
   >

### ZScript Standard Library (std.zh)

- `AdjacentCombo` now returns -1 for invalid combo position [`8306eabed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8306eabed4b1a55d20a9b2e45ef42f68a3dd8b03)

### ZScript

- use correct DrawOrigin for bitmap draw functions, RT_SCREEN [`137773a33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/137773a33f9f948722eabf7399ce8ba409b1f006)
- `lweapon->isValid()` now accurate for lifted weapons [`6df1f9c5f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6df1f9c5ffae808efa2bcfb7ddcb53d9005bf8ba)
- `eweapon::Explode` works now [`a2da1c392`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2da1c392f5b9eb6268715b1634e3b17da925858)
   &nbsp;
   >This was incorrectly using the reference for lweapon, and likely could result in crashing. 
   >
- correct index for `npcdata::BFlags[]`, `npc::Behavior[]` [`66c49382e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66c49382e6f54d5014e11e3da9522568c4c0a766)
   &nbsp;
   >These arrays were incorrectly bounding the given index between 0 and 4, but these arrays have 16 values. That bounding is removed, and now an error is logged if accessing an out-of-bounds index. 
   >
- always deallocate local arrays when script ends [`f0e3cb03e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0e3cb03e2fb8fb7dc5b8fe8cae49a542bc46693)
   &nbsp;
   >When the bugfix QR `Always Deallocate Array` is off, local arrays are sometimes not deallocated when FFC/item/global scripts end. This can quickly hit the limit for the number of arrays allowed, and results in bad things.  
   >
   >If a local array pointer is passed to another script without changing ownership, this QR being off prevents it from being deleted. Otherwise, as long as the calling script stays alive that array remains valid.  
   >
   >There is no known quest that relies on this behavior - so this QR now has no impact and local arrays owned by a script are always deallocated when it ends.  
   >
   >Currently, the appropriate way to keep a local array alive beyond the life of the script that created it is to call `OwnArray` in some other script.  
   >
   >https://discord.com/channels/876899628556091432/1373883674361335829 
   >
- scripted enemy spawns broken for scripted enemies [`bf1b548af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf1b548afab62cc1b9703bdf33a0906a27888746)
   &nbsp;
   >`Screen->SpawnScreenEnemies()` would break the script engine if it spawns an enemy that has a script - it caused the calling script to forever call `Screen->SpawnScreenEnemies()` once a frame. Although spawning dozens of enemies a second is very funny, this has been fixed. 
   >
- potential crash when accessing `Game->Suspend[]` out-of-bounds [`2fa8a4e53`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fa8a4e538b339997dc2aa503a3f0b1d54956205)
- `combodata::GenFlags[]` setter no longer broken [`b2152d99b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b2152d99bedfe47f3be0ed28c399e2c610c528db)
- emit compile error if run function uses >8 parameters [`220729b58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/220729b588f66c79604dbcd0c362a2ef7be6c59c)
   &nbsp;
   >Scripts can only be configured with up to 8 values for parameters, but the run function allowed any number of parameters to be defined. This could result in subtly broken scripts.  
   >
   >Declaring more than 8 parameters for a run function is now an error. 
   >

# Build

- update libpng to 1.6.47, zlib to 1.3.1 [`d961df8af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d961df8af9916c609701dc78f6ad1b4d4e0f1a91)

# Refactors

- read weapon names from zinfo, not the deprecated module system [`082c08167`](https://github.com/ZQuestClassic/ZQuestClassic/commit/082c08167723f0eb39bd66619bc287d7365994de)

### ZScript

- remove `Integer`, `Short`, `Byte`, etc. functions [`c18170369`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c181703699f1e36478f7dc42eb0fadddc0786eb3)
- add bounds check for `Screen->SideWarpID`, `mapdata::SideWarpID` [`1a7331d9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a7331d9e2879cf41e72aaaa9b778a2e4bd8eed3)
- remove `Screen->NumFFCs[]` and `mapdata::NumFFCs[]` [`03c121b91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03c121b91f8a959a177619200397d67f877a5f92)
- remove `combodata::Expansion` [`3fe03f435`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fe03f43598db2ebb87f2dc6d1d0c45a8b3de3e0)

# Tests

- add pkmn.zplay for advanced SCC usage [`fb51d21a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb51d21a17ffba4f208ca80307366eb7e8f81c45)

# CI

- [win] update vcpkg to 2025.03.19 [`ebe75944a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ebe75944ab8111ebb39b813930062455f91d709f)

# Misc.

- attach screenshot to crash reports [`ea5c02673`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea5c02673c7fb0446fc68c8c4663f1fdd6c03f68)
