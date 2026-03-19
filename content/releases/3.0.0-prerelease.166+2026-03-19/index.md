---
title: 3.0 Prerelease 166 2026-03-19
description: 
date: 2026-03-19T18:53:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.166%2B2026-03-19/3.0.0-prerelease.166%2B2026-03-19-linux.tar.gz
    name: 3.0.0-prerelease.166+2026-03-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.166%2B2026-03-19/3.0.0-prerelease.166%2B2026-03-19-mac.dmg
    name: 3.0.0-prerelease.166+2026-03-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.166%2B2026-03-19/3.0.0-prerelease.166%2B2026-03-19-windows-x64.zip
    name: 3.0.0-prerelease.166+2026-03-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.166%2B2026-03-19/3.0.0-prerelease.166%2B2026-03-19-windows-x86.zip
    name: 3.0.0-prerelease.166+2026-03-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 299162645
tag_name: '3.0.0-prerelease.166+2026-03-19'
channel: '3'
tags:
  - releases
---


# Features

- expand max Sprite Data (256 -> 8192) [`786f85b17`](https://github.com/ZQuestClassic/ZQuestClassic/commit/786f85b17caa4bf0ed64af5159702962f5eeae67)
- add new SCC: SetCurrentScreenD [`5e8f9ad07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e8f9ad07f7a8abfe280a8520c91a4b46a26c586)

### Editor

- improve quest auto-backup and timed auto-saves [`a1002f417`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a1002f4173b36ecdf8cc0386ac14a8c13cc02444)
   &nbsp;
   >* Enable auto-backup by default.
   >* Save all backups and auto-saves to a `YourQuest.qst.backups/` folder.
   >* Include timestamps and ZC version numbers in backup filenames for
   >  easier identification and recovery.
   >* Implement read-only protection to prevent accidentally saving over
   >  files loaded from a backup folder.
   >

### ZScript

- Falsy-Coalescing (?:, ?:=) operator [`4d0ea0fd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d0ea0fd73e0b618198dc899577b73d4f654b4db)
   &nbsp;
   >`a ?: b` == `a ? a : b` `a ?:= b` == `unless (a) a = b;` 
   >
- Audio->GetMusicData("Music Name") [`49608e742`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49608e7420b7b0efd06dc04746014ed18b69e100)
- ffc->ScreenFFCIndex [`17708d545`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17708d545cccdee7831843d6b0deb8aa84bba6cc)

# Bug Fixes

- prevent grid widget from possibly hanging CPU [`6b301ea7c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b301ea7c02888625a1a13cfe09aae6c4dfe8e9f)

### Player

- resolve multiple out-of-bounds enemy ID accesses [`3c580ff15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c580ff152f6cd3ae26cbe478732954ff5492e99)
   &nbsp;
   >This fixes a few potential crashes, including when Digdogger spawns Lanmolas.  
   >
   >* Prevent unmasked segment IDs from indexing `guysbuf` in `fix_coords`
   >  by using the local `SIZEflags` member.
   >* Fix off-by-one bounds check in `addenemy_z`.
   >* Prevent negative replacement IDs from bypassing bounds checks in
   >  `defendNew`.
   >
- support lockblock, chest state carryover within region [`28bc23a5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28bc23a5bd50d54dda86e8fe4859676c66e8ea05)
- use correct screens for dark combos, scrolling warp [`5b810a785`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b810a78563a92eb11a696ba99648d427eaa9a1a)

### Editor

- handle activating preview mode while in flag mode [`787706a68`](https://github.com/ZQuestClassic/ZQuestClassic/commit/787706a68ed32a8af0e2517fbd4fed2c6abd307e)
   &nbsp;
   >This was broken when zoomed out. 
   >
- prevent black bg in Door dialog w/ High Quality Rendering on [`58f0d9d3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58f0d9d3e5dcdddb5e2c86e43ef063cfbad70511)
- prevent Problematic QRs button freezing CPU [`a8581b49e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a8581b49e53b6565d656091af036f2ce1f9fdb42)
- Under Combo dialog broken for layers [`3a56e7b46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a56e7b463ffc03aac85ebd153b227e661a6dd0d)
   &nbsp;
   >The 'map' being used for each layer was off-by-1, causing the dialog to edit the wrong screens when editing layers 
   >

### ZScript Standard Library (std.zh)

- rename misleading parameter for `NumNPCsOf` [`bde0eb9cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bde0eb9cf36d80ef7e564f56984e3a96effaee93)
   &nbsp;
   >`NumNPCsOf` requires the `NPC_` ID constants, but the function comment wrongly said it expects `NPCT_` type constants. 
   >

### ZScript

- bad weapon ID bounds check [`88b3affab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88b3affaba3f7cee22a76eba16919d2547ef5576)
- internal array references sometimes not working [`cc398f4f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc398f4f2c84da69090f4710c994472b81fcb96e)

# Documentation

### ZScript

- show namespace [`cfa0213d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfa0213d3cc0dfe30bc16cf162fab14c6a06f13a)

# Build

- enable unused parameters diagnostic as error [`7aeeb0e47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7aeeb0e47ae1696e5c92daf46cf4d4a7f7273f1f)

# Chores

- update replay_uploads_known_good_replays.json [`2d92c3ddf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d92c3ddf96bd8d29d90cc4fa24e316441afd4ea)
- cleanup bounded containers [`2d63b8b8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d63b8b8d2447d54a3dd96dd01f0c205e9573202)
- add .backups to gitignore [`b47bbca1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b47bbca1ced28320779fa0ae052bcc85d5f65274)

# Refactors

### Player

- speed up loading replays by 20x [`71cb846df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71cb846df27f8ba17f81c3e08076d2aa9ccb1727)
   &nbsp;
   >Very large replays could take many seconds to load, which made long save files load slowly.  
   >
   >Also now logging the time taken to load replay files. 
   >

### ZScript

- remove unused "ignore/catch" compiler directive [`fc12c1265`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc12c126519e29758920d8326feaaa0d6f4c5999)

### ZUpdater

- disable on mac, linux. remove python dependency [`6db84e95d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6db84e95dc700528761961bf424b2074b2c88120)

# Misc.

- update and simplify cherry-picked compat qrs [`f5732a05b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5732a05b3d05d2c94bf1bfaa87b1ec3e24339f6)
- fix cherry-picked compat qrs [`bfcb3aad4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bfcb3aad453b1732f8e62bbcc0df8769172770dd)
   &nbsp;
   >Previous commit was wrong. 
   >
