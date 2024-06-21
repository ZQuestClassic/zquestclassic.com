---
title: 3.0 Prerelease 56 2024-06-21
description: 
date: 2024-06-21T00:45:25Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.56%2B2024-06-21/3.0.0-prerelease.56%2B2024-06-21-linux.tar.gz
    name: 3.0.0-prerelease.56+2024-06-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.56%2B2024-06-21/3.0.0-prerelease.56%2B2024-06-21-mac.dmg
    name: 3.0.0-prerelease.56+2024-06-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.56%2B2024-06-21/3.0.0-prerelease.56%2B2024-06-21-windows-x64.zip
    name: 3.0.0-prerelease.56+2024-06-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.56%2B2024-06-21/3.0.0-prerelease.56%2B2024-06-21-windows-x86.zip
    name: 3.0.0-prerelease.56+2024-06-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 161584231
tag_name: '3.0.0-prerelease.56+2024-06-21'
channel: '3'
tags:
  - releases
---




# Features

- add 'Note' item wizard, notes can play relative strings now [`e18d24342`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e18d24342a702a7e6351dc39352f9a1889d85c56)
- add enemy flag to control if affected by "Kill All Enemies" [`396c87a6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/396c87a6aff7bde45caff4e61516b7af63302d66)
- add option to use the native OS dialog to select/create files [`e418d7124`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e418d71242edfc5178ddb8b613985a2a57c9c084)
   &nbsp;
   >A new button allows using the OS dialog to select/create a file. This can be used directly by setting the `Native File Dialog` option in the launcher. 
   >

### Editor

- show CSet in combo pages [`c2029cafd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2029cafd762486d415112a35be324fe09d1f881)
- hex entry for string control code dialog [`57a0d35bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57a0d35bb8d0cc9fb78c601eb3a624b75d4412c6)

# Bug Fixes

- remove sfx limit (except for fuzz testing) [`0c1de2949`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c1de2949ad35a6c736318b2b080cdbac728e147)

### Editor

- death/spawn sprites not properly updating on tile move [`a164a6cdd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a164a6cddff62237652d9873d30cdf5fadb9176b)

# Build

### Web

- upgrade to emscripten 3.1.60 [`8bceba4de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8bceba4de10008a152296c846600388d7193d27b)

# Refactors

- use enums instead of defines for many flag values [`806180bea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/806180beab37a029652ebd1985a64f5b0ce98fa8)

### ZScript Standard Library (std.zh)

- delete unused and unwanted stuff [`48660bfcb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48660bfcbfad6ef6890913e9e565945e6deb3f4a)
   &nbsp;
   >These files have been deleted from the `std` library:  
   >
   >* std_zh/assert.zh
   >* std_zh/astar.zh
   >* std_zh/infostring.zh
   >* std_zh/math.zh
   >* std_zh/std_legacy.zh
   >* std_zh/std_meta.zh
   >* std_zh/std_update.zh
   >* std_zh/std_user_defs.zh
   >* std_zh/std_vars.zh
   >* std_zh/weapon.zh
   >
   >
   >&nbsp;
   >
   >These files either do not belong in a standard library (too specific), are not finished, or otherwise provide little to no value so are just a maintenance burden. 
   >

# Misc.

### ZLauncher

- remove tounge-in-cheek tooltip from Fullscreen checkbox [`40167c734`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40167c73431197b6a4143f9cac765d92baa5be48)
