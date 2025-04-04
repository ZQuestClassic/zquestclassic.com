---
title: 3.0 Prerelease 97 2025-04-04
description: 
date: 2025-04-04T09:28:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.97%2B2025-04-04/3.0.0-prerelease.97%2B2025-04-04-linux.tar.gz
    name: 3.0.0-prerelease.97+2025-04-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.97%2B2025-04-04/3.0.0-prerelease.97%2B2025-04-04-mac.dmg
    name: 3.0.0-prerelease.97+2025-04-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.97%2B2025-04-04/3.0.0-prerelease.97%2B2025-04-04-windows-x64.zip
    name: 3.0.0-prerelease.97+2025-04-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.97%2B2025-04-04/3.0.0-prerelease.97%2B2025-04-04-windows-x86.zip
    name: 3.0.0-prerelease.97+2025-04-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 210324722
tag_name: '3.0.0-prerelease.97+2025-04-04'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- support passing string / boolean to `Trace` [`de08c1eb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de08c1eb39f9951c4d8dd3df232f83d14ec72eb8)

# Bug Fixes

- "Broken Hero Position Exposed To Scripts" compat QR not being set [`b663eddc7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b663eddc76cd57c556b5560c4ffd175608df1cf5)
   &nbsp;
   >This compat QR was correctly being set for quests made in 2.55 (prior to 2.55.9), but not for quests made in the 3.0 prerelease builds. 
   >

### Player

- bottom 8 pixels not showing in some cases [`766e23bf7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/766e23bf7a8c3168021ed17b5c0567fc59aef29c)
   &nbsp;
   >For the F6/Active Subscreen/Map/Death script engines, the bottom pixels were being cut off even when showing the bottom 8 pixels is enabled. Some scrolling/end game effects were also impacted. 
   >
- prevent crash when scrolling + aligning [`101f26a97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/101f26a97ee488b72d9e282e15c237ed76023a4e)
   &nbsp;
   >Sometimes, scrolling from a non-scrolling region to a scrolling region resulted in a crash due to a bug in determing which screens need to be drawn.  
   >
   >Regressed in 6cd7fb0 
   >
- Pound combos on layers changing the wrong layer's combo [`1782559d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1782559d7e3bd63725c069e1411f453ca75fac9f)
- various issues related to order of layer drawing in regions, script drawing [`93269963b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93269963b667dfd09381c9e9b0d37279dc348964)
- allow script/scc warping to any position in a region [`5e51cdf3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e51cdf3c84def384758bbdda1906f9b27ed127e)
- Region 'Physical' mapping option not working outside of regions [`1152e5548`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1152e5548ac155eba7ea08ff410d7b4e3b130319)

### ZScript

- internal bitmaps from `Game->LoadBitmapID()` now work with Blit [`778717677`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7787176771150d77dcc25ec1e973cb12ae66e17f)
- use correct DrawOrigin for bitmap draw functions, RT_SCREEN [`9c6cf984a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c6cf984a5162af5e57991a89bd6e5988c186341)

# Build

- [mac] retry create-dmg a few times in packaging script [`370c11fd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/370c11fd1321aca2a6ab4b709679380b5b19b3b5)
- update libpng to 1.6.47, zlib to 1.3.1 [`f1dd1b50c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1dd1b50c0ea3e3f837e1dbe048cdfba40dd5f77)
- restore zlib hack [`72af297f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72af297f61979c65681d210af5da9fd391f5dc2e)
- use old cmake configuration for zlib/png for local windows dev [`a912cedef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a912cedef71a95d0be6615264e42ed698d99d6c8)
- fix weird parsing issue for add_compile_options when adding MSVC /d1trimfile [`d2dfcb4f1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2dfcb4f1f10b2905355a03a02362cc79fdcbbc1)
- fix zlauncher compilation in debug mode [`e0474f83c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e0474f83c63426136b0e49a5833c1f762267fd33)

# CI

- [win] add --allow-downgrade to choco deps install [`cfb5fe6f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfb5fe6f2337afca1f5cfbec48285af1598474f4)
- pin cmake to 3.31.6 [`0aa8e097d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0aa8e097dabdb38e7c13fedb3f2a51e251d493a8)
- [win] update vcpkg to 2025.03.19 [`1a3d5f44f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a3d5f44f2657bcd35612fd213d0195371c2f2d1)

# Misc.

- set user agent for scraping script, use timeouts between each request [`128b36e89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/128b36e890815cfbe4231da8ebaa18cada04492d)
