---
title: 3.0 Prerelease 149 2025-12-13
description: 
date: 2025-12-13T04:29:05Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.149%2B2025-12-13/3.0.0-prerelease.149%2B2025-12-13-linux.tar.gz
    name: 3.0.0-prerelease.149+2025-12-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.149%2B2025-12-13/3.0.0-prerelease.149%2B2025-12-13-mac.dmg
    name: 3.0.0-prerelease.149+2025-12-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.149%2B2025-12-13/3.0.0-prerelease.149%2B2025-12-13-windows-x64.zip
    name: 3.0.0-prerelease.149+2025-12-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.149%2B2025-12-13/3.0.0-prerelease.149%2B2025-12-13-windows-x86.zip
    name: 3.0.0-prerelease.149+2025-12-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 270070337
tag_name: '3.0.0-prerelease.149+2025-12-13'
channel: '3'
tags:
  - releases
---


# Bug Fixes

- prevent program sometimes not changing to correct folder at startup [`ab0dff784`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab0dff78482754cb0107269878331a00ac640996)
- build with pulseaudio support, fixes sound in many Linux distros [`81ace29ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81ace29ed6fea609833e26b68989568ae764b5c9)

### Editor

- map viewer error popups being invisible [`644ec1507`](https://github.com/ZQuestClassic/ZQuestClassic/commit/644ec15077f66dc9bcd910b09529ff785db2aab4)
   &nbsp;
   >Also adds some more detail to the errors Also allows closing the program while the map viewer is open 
   >

### ZScript

- DrawCombo's "frame" parameter being useless. [`deb71789b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/deb71789b822e4383ad2e6bde6beec732a4f279f)
   &nbsp;
   >It now specifies which frame of the combo's animation to draw. If negative, uses the current frame (as was previously always the case). 
   >
- DrawTile wraps around better [`0fe5e82d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fe5e82d9f358e25f098bdd828a59af96226aaa2)
   &nbsp;
   >When drawing a >1 tall tileblock with DrawTile, it will now wrap multiple rows at the edges similar to combos with Skip Y. 
   >

### Web

- fix app hanging when waiting for mouse release [`9b1fb8334`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b1fb83345f253315c5c0f52aeab332f2ec57b5a)
   &nbsp;
   >Regressed recently in da66fdf. 
   >

# Build

- add check that web build links libdumb [`379e170e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/379e170e582b5dc6f9bf517ea427752b41cac2fa)
- remove now unnecessary libjpeg from web build [`8eed69587`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8eed69587f279a5b53733625aed58741226dad80)
- vendor zlib [`04e27954d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/04e27954d82beef9a13ad362efc34260dd8bc22f)
- vendor libpng [`8ddff9fe2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ddff9fe228bd74889b58a988bf43eed2c4d89b0)
