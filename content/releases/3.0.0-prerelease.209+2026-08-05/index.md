---
title: 3.0 Prerelease 209 2026-08-05
description: 
date: 2026-08-06T03:54:26Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.209%2B2026-08-05/3.0.0-prerelease.209%2B2026-08-05-linux.tar.gz
    name: 3.0.0-prerelease.209+2026-08-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.209%2B2026-08-05/3.0.0-prerelease.209%2B2026-08-05-mac.dmg
    name: 3.0.0-prerelease.209+2026-08-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.209%2B2026-08-05/3.0.0-prerelease.209%2B2026-08-05-windows-x64.zip
    name: 3.0.0-prerelease.209+2026-08-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.209%2B2026-08-05/3.0.0-prerelease.209%2B2026-08-05-windows-x86.zip
    name: 3.0.0-prerelease.209+2026-08-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 365982424
tag_name: '3.0.0-prerelease.209+2026-08-05'
channel: '3'
tags:
  - releases
---

# Features

- Find enhanced music inside a subfolder next to the quest [`140385e6d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/140385e6d7234bfad50da8bf467393c9578b3fef) [Discord](https://discord.com/channels/876899628556091432/1534711166469931180)
   &nbsp;
   >Music packs are usually distributed as a zip of loose files, and most archive tools extract those into a new folder named after the zip. ZC only looked next to the quest file or in a folder named "music", so that common layout silently played no music. The quest folder's immediate subfolders are now searched as a last resort (existing locations still take priority, and hidden folders are skipped).  
   >
   >Also, when a music file cannot be found, the log now lists every folder that was searched. 
   >

### ZScript

- Sprite-based special draw layers [`f874360bf8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f874360bf856899c5d0c3327cf09bfd1efbaba87)
   &nbsp;
   >`SPLAYER_SPRITE_TARGET_UNDER`, `SPLAYER_SPRITE_TARGET_OVER` allow drawing at a special draw timing under or over *any specific sprite*.  
   >
   >`Graphics->SpriteLayerTarget` controls the sprite used by these special layers. It defaults to NULL, 
   >

# Bug Fixes

- Prevent crash on Linux when opening the native file dialog [`362608918f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/362608918ff9807d87222e3564038089daf4d673)
   &nbsp;
   >The native file dialog (on by default) could crash the player and editor on some Linux distros - notably when creating a new save file, which immediately opens the quest select dialog. Two changes:  
   >
   >- File dialogs now go through xdg-desktop-portal instead of in-process
   >  GTK3, so the desktop environment provides the dialog out-of-process.
   >  This also behaves better on Wayland.
   >- Our shared libraries no longer re-export symbols from vendored static
   >  libraries (libpng, libjpeg, zlib, ogg/vorbis). System libraries
   >  loaded into the process later - like GTK and gdk-pixbuf - could bind
   >  their image/compression calls to our vendored copies instead of the
   >  system ones and crash.
   >
   >
   >&nbsp;
   >
   >Regressed in 3.0.0-prerelease.2+2024-07-24 ([e418d71242](https://github.com/ZQuestClassic/ZQuestClassic/commit/e418d71242)). 
   >

# Build

- Linux crash reports could not be matched to uploaded debug info [`137d3d3c66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/137d3d3c6675a0952075b6311e771e9c2c0cd4fe)

# Chores

- Log why enhanced music fails to load [`c7c09812b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7c09812b3afd7bba8b6a1ace3db813d2ef8a261) [Discord](https://discord.com/channels/876899628556091432/1534711166469931180)
