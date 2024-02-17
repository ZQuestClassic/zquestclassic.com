---
title: Nightly 2024-02-17
description: 
date: 2024-02-17T06:40:56Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-17/nightly-2024-02-17-linux.tar.gz
    name: nightly-2024-02-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-17/nightly-2024-02-17-mac.dmg
    name: nightly-2024-02-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-17/nightly-2024-02-17-windows-x64.zip
    name: nightly-2024-02-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-17/nightly-2024-02-17-windows-x86.zip
    name: nightly-2024-02-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 142439831
tag_name: 'nightly-2024-02-17'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- fix some tiles in default.qst (File->New) [`e342a0335`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e342a0335cf7cdc8b4be95b9dd79c81c48665b65)
   &nbsp;
   >- Fix wrong assignment of lava drown tiles
   >- Delete redundant diving tiles in Z3 player tile pages
   >

# Bug Fixes

### Player

- apply BS swim sprites compat rule to Zelda 3000 qst [`5f7ab3c23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f7ab3c2353577bff0c22b60608e97f0b1631611)
   &nbsp;
   >This QR is applied to all 1.90 quests, but Zelda 3000 was saved in 1.92 and this visual bug was overlooked. 
   >
- consume button presses in subscreen menu [`23f44b9f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23f44b9f6cdc5bd0f951fae220c9523db0ab790f)
   &nbsp;
   >The subscreen refactor ~6 months ago resulted in button presses not being eaten. One side effect of this was the item selection sfx playing for every frame the button was down, instead of the intended one time. 
   >

### Editor

- hide unimplemented enemies [`875589f19`](https://github.com/ZQuestClassic/ZQuestClassic/commit/875589f19a24f9477627363c5418c8cd256e3d2c)

# Misc.

- remove tilesets/classic.qst [`21bf6b417`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21bf6b4177710113fd227b480be6afb3c31e5f2a)
   &nbsp;
   >The default quest (File->New) makes this not necessary. 
   >

