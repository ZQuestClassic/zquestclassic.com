---
title: 3.0 Prerelease 173 2026-04-19
description: 
date: 2026-04-19T22:12:41Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.173%2B2026-04-19/3.0.0-prerelease.173%2B2026-04-19-linux.tar.gz
    name: 3.0.0-prerelease.173+2026-04-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.173%2B2026-04-19/3.0.0-prerelease.173%2B2026-04-19-mac.dmg
    name: 3.0.0-prerelease.173+2026-04-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.173%2B2026-04-19/3.0.0-prerelease.173%2B2026-04-19-windows-x64.zip
    name: 3.0.0-prerelease.173+2026-04-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.173%2B2026-04-19/3.0.0-prerelease.173%2B2026-04-19-windows-x86.zip
    name: 3.0.0-prerelease.173+2026-04-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 310948904
tag_name: '3.0.0-prerelease.173+2026-04-19'
channel: '3'
tags:
  - releases
---


# Features

### Player

- Update replay versions on save load [`8dba8da5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8dba8da5b160b99ba890ef4308ec724465703020)
   &nbsp;
   >Previously, save files associated with replay file were permanently pinned to their initial replay version. This prevented older saves from benefiting from subsequent engine bug fixes. The replay version now dynamically updates when a save file is continued, seamlessly bringing new fixes to ongoing playthroughs without breaking existing replays. 
   >

# Bug Fixes

### Player

- Ignore initial Start press in custom save menu [`baadd4e3f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/baadd4e3ff970650b3cb9158528cbca5235e400c)
- 0-damage brang/hshot items not obeying script-changed damage values [`9eaa5f46c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9eaa5f46c370173ac1f64cdd29ad27039c06a39e)
   &nbsp;
   >If a script changed the damage of the weapon but not the item, enemies who don't have "Damaged by Power 0 Weapons" checked would take the ITEM's damage amount rather than the WEAPON's. This also affected generic scripts changing the damage in an enemy hit event. 
   >
- Stunned hero no longer stops dead in his tracks on ice [`f56444999`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f564449997ee3030af96116ba2129a73476e293a)
   &nbsp;
   >The ice momentum now continues while stunned (as though you were pressing no inputs) 
   >
- 'slashable' combos (tall grass, etc) wrongly 'cutting' via triggers tab [`6c94c88ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c94c88acd5aa0920fa60291a785fea06ee313a2)
   &nbsp;
   >Due to some old half-finished code, slashables were responding to all weapons set in their combo triggers tab, even with `->ComboType Effects` not checked. This behavior has been fixed, now requiring `->ComboType Effects` to trigger.  
   >
   >Old quests loaded will automatically update any affected combos to behave as they did previously. 
   >
- Hero sometimes drowning when drown QR is off [`fc19bb7b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc19bb7b6791cbd44ab1e2296a6be6c9cb0682a0)

### Editor

- Show correct combos from adjacent screens [`45ac1ee71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45ac1ee7199cd115762727b5f49e34d3c4cd30ec)
   &nbsp;
   >When the screen editor displays combos from adjacent screens, it was randomly showing the wrong combos.  
   >
   >Regressed in 2.55 alpha 109 (be515839b). 
   >
- Visual bug with Lister dialog preview size [`f31831354`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f318313547d88c43bf347afb31d39f6e4c76a709)
- Naming of tile variables in enemy lister info [`0eb511287`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0eb511287d5b75da7ffc0d87792182c5212c2b79)
- Set CSet to 2 when loading new quest [`e587bafe0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e587bafe066081dd3b59131d86c28c2b427031c3)
- Signpost combo wizard setting wrong attribute [`4f16783bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f16783bcfeb28044bfb256407243152e4e75b9e)
- Hero lifting sprite textfields being hard to edit [`7e40707ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e40707ed358b5cb68c855a0bad384f6bda290d9)
- MIDIs allocating bad buffers when copied [`da1b22abc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da1b22abc0ff51119074aa0e4d39d5a70c046c1e)
   &nbsp;
   >This caused the midi editor to play broken data and possibly crash when previewing midis 
   >

### ZScript

- Class destructors failing to run fully when calling user functions [`33c22418f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33c22418fc0e47054cfb8289f6126c8a523ff66f)
- Prevent crash when destructor references member variable [`14c0c9cb8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14c0c9cb80f3027b0048db0e2d55746580d66380)
   &nbsp;
   >If an object has a destructor that references a member variable, the engine will temporarily increase the reference count for it during the destructor (the this needed to access the member variable). When the destructor ends the object hits 0 references a second time, and thus causes  re-entrant calls to delete_script_object. This resulted in trying to delete the same object twice, which crashes. 
   >
- Various regressions related to sprite variables [`6dfeb5b28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6dfeb5b28b75be1b22011a812373780bf6dfe781)
   &nbsp;
   >Regressed in 930485928. 
   >
- Some included headers using bad DrawCombo frame parameter [`93f6ace5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93f6ace5a7ba90c9a7a984590fc8a2eba5711b18)
   &nbsp;
   >this fixes combo draws not animating properly in ghost, tango, and EmilyMisc.zh 
   >

# Refactors

- Minor improvements to code around includes [`ba3a5e382`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba3a5e3827f97586fc1d457eaa52723cc7f540e5)

### ZScript

- `repeat(N)` now acts like `loop(0=..N)` [`1ec6f924f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1ec6f924f2b24cb16a10856a1ccd48f863d57923)
- Change `Screen/`mapdata->Tile`/SideWarpType[]` to enum type [`8e6839aea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e6839aeab868ddb73f85c929367e2ad2dd42077)
   &nbsp;
   >This will require using the correct constants to assign to these, but also will make them return the correct type for use with ex. `WarpEx()` 
   >
