---
title: 3.0 Prerelease 170 2026-04-06
description: 
date: 2026-04-06T04:32:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.170%2B2026-04-06/3.0.0-prerelease.170%2B2026-04-06-linux.tar.gz
    name: 3.0.0-prerelease.170+2026-04-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.170%2B2026-04-06/3.0.0-prerelease.170%2B2026-04-06-mac.dmg
    name: 3.0.0-prerelease.170+2026-04-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.170%2B2026-04-06/3.0.0-prerelease.170%2B2026-04-06-windows-x64.zip
    name: 3.0.0-prerelease.170+2026-04-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.170%2B2026-04-06/3.0.0-prerelease.170%2B2026-04-06-windows-x86.zip
    name: 3.0.0-prerelease.170+2026-04-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 305556544
tag_name: '3.0.0-prerelease.170+2026-04-06'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- Show screen state carryovers in 'What Links Here' tool [`f3ddd68ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3ddd68ade18c71624a34ff2b2b7f16ac85f7bff)

# Bug Fixes

### Player

- Check water correctly when scrolling down [`a53a8827b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a53a8827b9be2af9d94fcf48998264b4dd5fbc2d)
   &nbsp;
   >Regressed recently in 7db5d04d0. 
   >
- Show cheat hitboxes for invisible enemies [`c3c6ac938`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3c6ac9384d835aa1e6fb7b68d94d3f3489a2f96)
- Replays no longer desync when using custom save menu [`790b0836f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/790b0836f8a299ca66dee581d5d5c1edf21208e2)

### Editor

- Delete invalid navigation/command history [`3bfeb0a4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bfeb0a4ad72ec8e8201a2e050f025d2aed5e1bf)
   &nbsp;
   >When reducing the map count, the navigation/command histories were retaining entries for old maps. If attempting to go back to them, the editor would crash.  
   >
   >Now, those entries are deleted when the map count reduces. 
   >
- Don't show compat QR confirmation when creating new quest [`79b59ca0f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79b59ca0f80d2aaf0bc74730f8c63ce15b57cb2d)
   &nbsp;
   >When creating a new quest from an older tileset, don't show a confusing confirmation dialog about disabling compat QRs. It won't hurt a new quest to disable these QRs, and this dialog is likely to confuse new users. 
   >

# Refactors

- [mac] unify F-keys for reset/quit [`17d76f12b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17d76f12b61e23e3e18a33b2bdcccbdc1820069d)
   &nbsp;
   >Previously on Mac, reset/quit were mapped to different keys than on other platforms because historically F9/10 were reserved by the OS. However, that is no longer the case on modern Macs.  
   >
   >These function keys on Mac now match other platforms:  
   >
   >* Reset is now F9 (was F7)
   >* Quit is now F10 (was F8)
   >* Screensaver and Palette Toggle have been moved back to F7 and F8,
   >  respectively
   >
- Remove last usages of SCREEN_W/H [`693573ae5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/693573ae54f3f2e620810650d86b4f9a21bd3cb9)
- Speed up subscreen draws by simplifying string operations [`ec323637f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec323637f7ba1cc5238f3ccf19934ca7acebaa8b)

### Editor

- Format map, screen locations more consistently [`d653e722b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d653e722b486265541bd61762fa7b194f2fdef14)
   &nbsp;
   >* Format map + screen pairs using a common format: decimal for map, hex
   >  with a `0x` prefix for screen, and spaces for legibility. Example:
   >  `19 : 0x5A`.
   >* Fix an issue in quest report tools that incorrectly used hex to format
   >  the map component.
   >
