---
title: 3.0 Prerelease 208 2026-08-04
description: 
date: 2026-08-05T04:24:51Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.208%2B2026-08-04/3.0.0-prerelease.208%2B2026-08-04-linux.tar.gz
    name: 3.0.0-prerelease.208+2026-08-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.208%2B2026-08-04/3.0.0-prerelease.208%2B2026-08-04-mac.dmg
    name: 3.0.0-prerelease.208+2026-08-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.208%2B2026-08-04/3.0.0-prerelease.208%2B2026-08-04-windows-x64.zip
    name: 3.0.0-prerelease.208+2026-08-04-windows-x64.zip
    platform: windows-x64
prerelease: true
id: 365309508
tag_name: '3.0.0-prerelease.208+2026-08-04'
channel: '3'
tags:
  - releases
---

# Features

### Player

- Add CRT display filters [`41ac56899d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41ac56899dff91349489ab9321b006ee09da0154)
   &nbsp;
   >Two optional display filters that recreate the look of a CRT screen, under `Settings > Options > CRT Filter`:  
   >
   >- Flat (crt-easymode): Lanczos sampling, brightness-adaptive scanlines,
   >  and an RGB aperture grille.
   >- Curved (crt-geom): barrel distortion, rounded corners, beam-profile
   >  scanlines, and a dot mask. Mouse input for gameplay is warped to
   >  match, so clicking on the curved image hits what it looks like it
   >  hits.
   >
   >
   >&nbsp;
   >
   >Both are ports of shaders distributed by the libretro project (GPL, like ZQuest Classic). The filter applies only to the game layer - menus, dialogs, and the pause-dimming overlay stay crisp and work as before. On the web version the game renders at full device resolution while a filter is active, so scanlines stay even instead of dissolving into moire.  
   >
   >Also, the text overlay (fps, game time, PAUSED) now scales with the game area, so it reads the same size at any window size. 
   >
- Give the title screen an animated sword intro [`ca9cc641aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca9cc641aa7838366ac8cb1bf09015a216132c17)
   &nbsp;
   >The logo crawls up over a blue background instead of black, without its sword; the sword then thrusts in from the left with a rising woosh and slots home through the letters with a white flash and sfx on impact. 
   >
- Apply the CRT filters to the cheat overlay layer [`0deed9225c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0deed9225c768f21c8d799293632f8fbf48b3e8f)
   &nbsp;
   >The cheat/debug overlays - walkability, effect flags, hitboxes, and the debugger's sprite highlight - now render through the active CRT filter instead of being drawn crisp and flat over it. The layer is also skipped entirely while empty, which is nearly always, removing a fullscreen blend per frame even with no filter. 
   >

# Bug Fixes

### Player

- Mask the title screen logo until it enters the game viewport [`2e74b33986`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e74b33986d07c8c6181214d0d3c0fcf946d7f6b)
   &nbsp;
   >Children of the game layer are drawn straight to the backbuffer when no CRT filter is active, with nothing clipping them to the layer's on-screen rect - so the logo crawl (which starts fully below the viewport) painted over the black letterbox border at the bottom, and the sword thrust over the left one. Add an opt-in clip_to_parent flag that confines such a child to its parent's rect, matching what the shader paths already do by construction. 
   >
- Move the title screen logo smoothly instead of in whole-pixel steps [`71984ca57f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71984ca57f3048ebf8711ede3c4d93bbd0a770fd)

### Editor

- Save menu editor crashing on editing some fields [`c4b2480c87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4b2480c87ffd241eeefce4504ea9858bfe81711)
- Combo/item editors not refreshing attribute metadata [`201a205a40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/201a205a40be12f2dc7cc4a16e5ab222e39674c6)
   &nbsp;
   >When closing the new `Script Setup` popup, the attributes were not refreshing their metadata, wrongly requiring closing and reopening the dialog to update the metadata. 
   >
- Error in 'Viewport Range' combo trigger help text [`de8c7079c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de8c7079c4d51ed8dae4e42c403e007a5f99925a)
   &nbsp;
   >It mentioned 'In View' and 'Out of View' flags, but these flags are actually named 'Req. On Screen' and 'Req. Off Screen'. 
   >
