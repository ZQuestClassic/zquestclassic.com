---
title: 3.0 Prerelease 105 2025-05-19
description: 
date: 2025-05-19T03:57:28Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.105%2B2025-05-19/3.0.0-prerelease.105%2B2025-05-19-linux.tar.gz
    name: 3.0.0-prerelease.105+2025-05-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.105%2B2025-05-19/3.0.0-prerelease.105%2B2025-05-19-mac.dmg
    name: 3.0.0-prerelease.105+2025-05-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.105%2B2025-05-19/3.0.0-prerelease.105%2B2025-05-19-windows-x64.zip
    name: 3.0.0-prerelease.105+2025-05-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.105%2B2025-05-19/3.0.0-prerelease.105%2B2025-05-19-windows-x86.zip
    name: 3.0.0-prerelease.105+2025-05-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 219398849
tag_name: '3.0.0-prerelease.105+2025-05-19'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Editor

- [mac] prevent menu showing in ZQ snapshot [`a5a2181ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5a2181ace4854196e6a34b3fbb3866f82468e6d)
   &nbsp;
   >Contiuation of de96f03 
   >
- update Cambria tileset [`6406f4745`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6406f4745d9317efa80d8fafce24b3ba84c3cae1)
   &nbsp;
   >- Fix CSet errors in Door Combo Sets
   >- Fix accidentally uncombo'd tiles
   >- Fix locked door combos using the lock block combo type, which can
   >  conflict with engine locked doors
   >
- include licenses in package export [`c359902dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c359902dc9de356dc8a6472b06671f88fd1874c4)

### ZScript

- implement setter for `mapdata::Flag` [`c7f19b2dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7f19b2dc0d34b6c53a455c21ef8a74a8e6aead1)
   &nbsp;
   >Overlooked recently in 74e5a2e 
   >
- do correct thing for old npcdata::Flags/Flags2 [`92dd8a21c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92dd8a21cf5093d537464417bf93410537823da1)
- use correct id for `eweapon::TotalDYOffset` [`9fb331c9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fb331c9d9df255e162fae37798940ec57890b1f)
- move input-related enums from std to bindings [`874059b6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/874059b6bab269d8a4fed12f15e5f79abeb6c9c7)
- support hint (var, fun, enum) in comment symbol links [`f6efa8820`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6efa8820b0670803f02c3d1aa1857e30e364b97)
   &nbsp;
   >This makes it possible to distinguish symbols with the same name (ex: the `Input->Button[]` variable and the `Button` enum).  
   >
   >Also fix some symbols not resolving, like `eweapon::UseSprite`. 
   >

# Build

- update fmtlib to 11.2.0 [`d808c0b5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d808c0b5ef97a1c61b32f3843937c34cfc1e7688)

### Web

- upgrade emscripten to 4.0.8 [`10b4684be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10b4684be33702bcf6bf83181ea47a574833e189)

# Refactors

- exlcude some irrelevant qrs from 2.55 compat consideration [`08be487a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08be487a2ff47e2be5e0fef5882052e7d50498f7)

### ZScript

- use expected for parse_user_path [`c27d56c73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c27d56c73e6ddf4346e21f6f20b192cf0ebf6a38)
   &nbsp;
   >Also fix issue with path not resolving correctly for read/write bitmap draw commands. 
   >
- add bounds check for `Screen->SideWarpID`, `mapdata::SideWarpID` [`16b54f014`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16b54f0148c6b14e8c505c0d661ce95226cfacfc)

# Misc.

- add some 3.0-related changelog commit drops/rewords [`5ea052bb5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ea052bb5f7bc4e08792b28646d6b5f48f2dd42a)
- use database class in api_server [`4ee53ccff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ee53ccff8bdc70a451d455e9ddd544aefa9e896)
- add upload_loose_files.py script [`25eefd033`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25eefd033dbfea6d7ae272bfdb48b03e7786fb8c)
- fix api server crontab by specifying user [`929b98625`](https://github.com/ZQuestClassic/ZQuestClassic/commit/929b98625e3c28bec92d1a1abdd56357feab6803)
