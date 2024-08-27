---
title: 3.0 Prerelease 65 2024-08-27
description: 
date: 2024-08-27T06:05:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.65%2B2024-08-27/3.0.0-prerelease.65%2B2024-08-27-linux.tar.gz
    name: 3.0.0-prerelease.65+2024-08-27-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.65%2B2024-08-27/3.0.0-prerelease.65%2B2024-08-27-mac.dmg
    name: 3.0.0-prerelease.65+2024-08-27-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.65%2B2024-08-27/3.0.0-prerelease.65%2B2024-08-27-windows-x64.zip
    name: 3.0.0-prerelease.65+2024-08-27-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.65%2B2024-08-27/3.0.0-prerelease.65%2B2024-08-27-windows-x86.zip
    name: 3.0.0-prerelease.65+2024-08-27-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 172078899
tag_name: '3.0.0-prerelease.65+2024-08-27'
channel: '3'
tags:
  - releases
---




# Features

- use allegro 5 for DUMB tracker audio (mod, it, s3m, xm) [`d11af4e67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d11af4e6718abc331bf5eaa2d63fb1f8ad3ad931)
   &nbsp;
   >The listed tracker formats now support setting loop points in the DMap Music tab, including setting the speed / position in ZScript. Note, the only enhanced music formats that do not support these features now are: spc, gbs, vgm, gym, and nsf.  
   >
   >This also happens to fix an issue where tracks that have builtin loops were incorrectly playing silence before looping. 
   >

### Editor

- add help text to the FFC editor (#973) [`a4030cac3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4030cac36e993f151b16a4aa025571c5824d0ad)

# Bug Fixes

- improve key input latency by simplifying d_vsync_proc [`d97e0673d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d97e0673ddda00f39ab34bd00d56594e7afbc30e)
- call allegro_exit before exit to avoid rare hang seen on linux [`4eff6312a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4eff6312a3a3007f70450143e4c6e5306402bdf3)

### Player

- correctly restore sword/potion/triforce items with fairies in pre-2.55 quests [`cb0124c5d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb0124c5d0c8ffc9b9857609d6481191a2e33def)
- restore palette after wavy effect [`7ad5419bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ad5419bf927415e239e67f6a368c033ac316029)
   &nbsp;
   >The wavy effect was leaving the palette slightly off what it should have been, which was making the colors slightly saturated until the next time the palette changed. 
   >
- draw decorations correctly during scrolling [`ba60e60f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba60e60f22ec7fb45560758df2b920425fd0f037)
   &nbsp;
   >Some decorations (like combo sprites) are drawn without the correct offset during screen scrolling, and worse were not disappearing after the end of the scroll (not until its animation naturally finished). Now these decoration sprites are drawn correctly during scrolling, and get removed. 
   >
- do not ignore replay forever if save has not been played yet [`589dd548c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/589dd548cf29b5e9da79c8bd150b8932945cb05a)

### Editor

- prevent dmap editor crash when map is no longer valid [`fa665bd65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa665bd6597e6e68847c3e707670b0f7cf6c1645)
- prevent various quest report crashes [`199b3e4e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/199b3e4e11ae2e97dd1d8898a5c6c46672424ac6)

# Refactors

- reduce amount of copying in readmaps [`79b34ae78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79b34ae786853f7dc1f36bdf1482b1235fdbd87a)
   &nbsp;
   >This makes loading yuurand.qst 21% faster (2445ms -> 1927ms) 
   >

# Misc.

### Visual Studio Code Extension

- publish 1.0.11 [`23981d26c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23981d26c925e8ca6affd213e60fec46754a39c6)
