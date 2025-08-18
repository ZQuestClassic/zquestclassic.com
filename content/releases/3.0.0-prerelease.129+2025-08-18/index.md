---
title: 3.0 Prerelease 129 2025-08-18
description: 
date: 2025-08-18T07:37:58Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.129%2B2025-08-18/3.0.0-prerelease.129%2B2025-08-18-linux.tar.gz
    name: 3.0.0-prerelease.129+2025-08-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.129%2B2025-08-18/3.0.0-prerelease.129%2B2025-08-18-mac.dmg
    name: 3.0.0-prerelease.129+2025-08-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.129%2B2025-08-18/3.0.0-prerelease.129%2B2025-08-18-windows-x64.zip
    name: 3.0.0-prerelease.129+2025-08-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.129%2B2025-08-18/3.0.0-prerelease.129%2B2025-08-18-windows-x86.zip
    name: 3.0.0-prerelease.129+2025-08-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 240535856
tag_name: '3.0.0-prerelease.129+2025-08-18'
channel: '3'
tags:
  - releases
---




# Features

- 'Cutscene Effects' combo [`0b4b32dd4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b4b32dd4d2f7f18946e56809dc4cb7c0e5f980e)
   &nbsp;
   >A combo designed to interface with triggers to allow a variety of special effects useful for cutscenes. Ex. 'Player Walk' mode forces the player to walk directly to the specified point (ignoring collision). 
   >

# Bug Fixes

### Player

- falling/drowning issues [`c20ae1a3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c20ae1a3d876da7eaad1f6e01e5bb7cb06fcd2f7)
   &nbsp;
   >Enemies/items/weapons were not using correct hitbox for falling/drowning Enemies/items were immune to drowning in sideview 
   >

### Editor

- screen enemy list dialog constantly resetting focus [`236e4bc83`](https://github.com/ZQuestClassic/ZQuestClassic/commit/236e4bc8396602c1101a7cb5c0b0bc1262b0122f)

# Chores

- remove unused constants/strings re: combo types [`e43b5a48f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e43b5a48f07a1ed8f2289158abcbd6d86323895a)

# Refactors

- use less bool params for getInput [`360e3f40e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/360e3f40e6e8043b1fcd1725047eb3fd7158955c)

### Player

- rename itemdata::fam_type, weapon::type to level [`ef8bd3d8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef8bd3d8d683a277db29f9ba30c2777eafcf91ab)
- rename enemy::family, guydata::family to type [`1b32ff995`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b32ff99587e9827b12c7bf45c9e01ef7c05fa02)
- rename item::family, itemdata::family to type [`cc3eab912`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc3eab9126cc94c47a2dd2145ec6285b627f5d83)

### ZScript

- soft-deprecate some duplicate variables [`00f762a12`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00f762a12e64898e44c1240965d9fab2f4396c07)
   &nbsp;
   >Some variables access the same data. All but one of these are now soft-deprecated (compiler won't complain, but docs will suggest not using them).  
   >
   >- deprecate npc/npcdata/itemsprite/itemdata `Family` (prefer `Type`)
   >- deprecate lweapon/eweapon `ID` and `Family` (prefer `Type`)
   >
- rename some zasm vars [`34c2aee85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34c2aee8560f883cdac46858168e2b8421aeda18)

# Misc.

- use modern Python typing shorthand [`a91a3a2ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a91a3a2ad23787c84f426d94f92d6568fcf87119)
