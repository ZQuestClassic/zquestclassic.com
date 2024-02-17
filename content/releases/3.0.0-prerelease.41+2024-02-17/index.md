---
title: 3.0 Prerelease 41 2024-02-17
description: 
date: 2024-02-17T06:08:22Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.41%2B2024-02-17/3.0.0-prerelease.41%2B2024-02-17-linux.tar.gz
    name: 3.0.0-prerelease.41+2024-02-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.41%2B2024-02-17/3.0.0-prerelease.41%2B2024-02-17-mac.dmg
    name: 3.0.0-prerelease.41+2024-02-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.41%2B2024-02-17/3.0.0-prerelease.41%2B2024-02-17-windows-x64.zip
    name: 3.0.0-prerelease.41+2024-02-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.41%2B2024-02-17/3.0.0-prerelease.41%2B2024-02-17-windows-x86.zip
    name: 3.0.0-prerelease.41+2024-02-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 142440723
tag_name: '3.0.0-prerelease.41+2024-02-17'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- fix some tiles in default.qst (File->New) [`9add7e25f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9add7e25ff3ff9a02ee9c4de905c2b7dc5046365)
   &nbsp;
   >- Fix wrong assignment of lava drown tiles
   >- Delete redundant diving tiles in Z3 player tile pages
   >

# Bug Fixes

### Player

- apply BS swim sprites compat rule to Zelda 3000 qst [`a4028258e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4028258e6b1a580e7f160e14433c53dcd615724)
   &nbsp;
   >This QR is applied to all 1.90 quests, but Zelda 3000 was saved in 1.92 and this visual bug was overlooked. 
   >
- consume button presses in subscreen menu [`be48e2fb0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be48e2fb05366c47dd977c3ccb2bbd3a5ee2eb2b)
   &nbsp;
   >The subscreen refactor ~6 months ago resulted in button presses not being eaten. One side effect of this was the item selection sfx playing for every frame the button was down, instead of the intended one time. 
   >

### Editor

- hide unimplemented enemies [`16abaf626`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16abaf62626165c6edd443294734dc0a91b0feb7)

### Web

- avoid performance hit by disabling info bitmap [`2a6812a96`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a6812a96ba439f61e05bcb34ef0302efbd664c7)

# Misc.

- remove tilesets/classic.qst [`d943f79a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d943f79a251a5cc3543d694bbb4b9dbdc99df802)
   &nbsp;
   >The default quest (File->New) makes this not necessary. 
   >
