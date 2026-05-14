---
title: 3.0 Prerelease 187 2026-05-14
description: 
date: 2026-05-14T11:26:28Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.187%2B2026-05-14/3.0.0-prerelease.187%2B2026-05-14-linux.tar.gz
    name: 3.0.0-prerelease.187+2026-05-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.187%2B2026-05-14/3.0.0-prerelease.187%2B2026-05-14-mac.dmg
    name: 3.0.0-prerelease.187+2026-05-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.187%2B2026-05-14/3.0.0-prerelease.187%2B2026-05-14-windows-x64.zip
    name: 3.0.0-prerelease.187+2026-05-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.187%2B2026-05-14/3.0.0-prerelease.187%2B2026-05-14-windows-x86.zip
    name: 3.0.0-prerelease.187+2026-05-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 322528591
tag_name: '3.0.0-prerelease.187+2026-05-14'
channel: '3'
tags:
  - releases
---


# Features

- Better Unsafe Ground flagging [`bdf81beff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bdf81beffbbcc51e072eaa8236979be62abe9ccc)
   &nbsp;
   >"Unsafe Ground" is renamed "Unsafe Ground (Sens)", as it is very sensitive  
   >
   >New flag "Unsafe Ground" is added, which is much less sensitive. 
   >
- Respawn Point Half-Gridlock [`f857f3c7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f857f3c7f9afc91d422c855c41fae90da6c40b05)
   &nbsp;
   >New QR allows the new respawn points to lock the respawn check to the nearest half-grid (8px) position. This places you slightly further from some unsafe obstacles, and helps in certain edge-cases. 
   >
- Forced Hazard Respawn Points (triggers + scripts) [`6f2adb1fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f2adb1fab1418531972cf8686259e92d0e42b11)
   &nbsp;
   >'Respawn Here' trigger sets the Hazard Respawn to the combo's position, and prevents it from being updated to safe ground automatically. 'Reset Respawn' trigger allows safe ground to automatically update it again. 'Hero->ForcedHazardRespawn' allows scripts to read/write the forced state. 
   >
- 'Screen Unload->' trigger [`5aa4b4721`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5aa4b4721f941f52d485d0123b6136e9c1805526)
   &nbsp;
   >Triggers when the screen unloads; after warp effects for warps, but before scrolling for scrolls. 
   >
- Improved proximity triggers [`3c2ad1e13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c2ad1e13f443d00097d0ee3d80cddfb16d4bc0d)
   &nbsp;
   >"Use S. Hitbox" option makes combo proximity use the center of the player's 'solidity hitbox' instead of their 'damage hitbox'. This centers it better on the player's feet for things like floor switches.  
   >
   >"Square Area" option makes the proximity be a square instead of a circle (checking each axis separately, rather than using a diagonal distance check) 
   >

### Player

- Water/pitfall attributes for IFrames and Stun Frames [`f9709e869`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9709e869baaa482f5fa2ac01e68da1d14f9b925)
   &nbsp;
   >Allows customizing InvFrames after falling / drowning Allows stunning the player (to prevent them from ex. walking directly back into the water/pitfall) after falling / drowning 
   >

# Bug Fixes

- (maybe) support empty drop down lists [`9e5d9a08e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e5d9a08ef0d2391f7e121397e9db7736f054bb5)

### Player

- Use correct coordinates for effect warps in scrolling regions [`95590b52c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95590b52ca02dbea539aa783f10a5e01200552c4)
- New respawn points not counting damage combos or slidey ice [`2db5d9158`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2db5d9158ade88517587879694d2b02a3a1a04dd)
- 'Physical' region mapping issue on first screen [`8ec5ce162`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ec5ce1624df5d5244126c251d6352b842f8e0c2)
- Crumble combos in scrolling regions [`c35097fe2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c35097fe2f62dc1d79e9bd3ee8e215b5be92d938)
- Prevent crash in handleSpotlights when region size changes [`dede94522`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dede94522140becfe8458aca06452cf0eb0d48fe)
- Portals/magic mirrors in scrolling regions [`89d16bfc5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89d16bfc5a600e5b06ed382dde7dde27a13446e5)
- Do not show blank Quest Midi Info dialog [`395927a18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/395927a18bc8cb415ecdb85f69ed891a4b723a74)
- Pitfalls not resetting attack timer [`a151361fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a151361fb14425aeb9c9609e16defff968f4b427)
   &nbsp;
   >this allowed the player to be in the attacking animation instead of the falling animation in some situations. 
   >
- Solid moving objects interacting poorly with water/pits [`ac50ce6a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac50ce6a54a57d2b3559633eb9ef337ef4197f0e)
   &nbsp;
   >they now can push the player into pits, and no longer push the player while the player is already falling/drowning 
   >

### Editor

- Avoid potential crash when drawing doors [`da16b97cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da16b97cc91209b2ca43d9e7ea4835acf3389fe6)

### ZScript

- Prevent crash on invalid read for SpawnScreen, CurrentScreen [`1b7892655`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b7892655de2822e1f54985c2d7751690156d607)
   &nbsp;
   >Accessing these variables on invalid sprite pointers resulted in a crash. 
   >
- Handle some missing register dependencies [`45f642c7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45f642c7a1699ac168e538814f66037006163be6)
- Issues with SCRIPTRAMD/GLOBALRAMD [`cae33a881`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cae33a881441edfb9b74c71093409c6ba6e32589)

# Chores

- Update replay_uploads_known_good_replays.json [`8352d382c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8352d382ce112ab00dc35224722ca3c8b89c0c5f)

# CI

- Cache archive downloads for every os [`5106b4178`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5106b4178e7672acce5f14d222e0152230d1da33)

# Misc.

- Sort stuff in ZASM/table.cpp, just for simpler diff later [`47fa1eeaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47fa1eeafd415d3285c2ff79a6b054be812a9d9c)
- Add 2.55.14 changelog [`c30b7362c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c30b7362ce10ca576215659277edbef164b3a31d)
