---
title: Nightly 2024-01-01
description: 
date: 2024-01-01T11:43:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-01/nightly-2024-01-01-linux.tar.gz
    name: nightly-2024-01-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-01/nightly-2024-01-01-mac.dmg
    name: nightly-2024-01-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-01/nightly-2024-01-01-windows-x64.zip
    name: nightly-2024-01-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-01/nightly-2024-01-01-windows-x86.zip
    name: nightly-2024-01-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 135466200
tag_name: 'nightly-2024-01-01'
channel: '2.55'
tags:
  - releases
---



# Features

- add 'Script1'-'Script10' shield blockflags, to block *specific* scripted weapons. [`de1cb2b66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de1cb2b66a8e6bebd8f086ed785b8f42bc09149f)
- add burn-based light radii for items, to change the glow radius when lit on fire. [`5f829d628`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f829d6281dbc3fd3163a116e3a04e7c908a233a)
- LW_REFARROW, LW_REFFIRE, LW_REFFIRE2 (reflected arrows, fire, fire2) [`27c41e1f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27c41e1f2a2b363de896de61e90efe49549d4d41)

### Player

- Custom mirrors can 'block' instead of reflect per-direction [`9ce509792`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ce50979253ca629da0bc5c32e3196fdc5d541b1)

### Editor

- Item Wizard (Shields) [`bcf109db2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcf109db2779480d98a7c0fef8ebee1fc60e28e3)

# Bug Fixes

- implement set volume for GME music (spc,gbs,vgm,gym,nsf) [`76091a598`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76091a5987d08ca64148e29d2b4c41d1e3b243d8)
- Enemy Flames not reflecting off of shields, even with reflect flag set [`2264bb083`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2264bb0834bf3b71b4d6d997500e0f1c10ee5045)
- issues with numbers between 0 and -1 [`1b44e3b2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b44e3b2c81c46afe0b2331fea30de8fbd5d9272)
- swords not updating properly, sometimes [`915670436`](https://github.com/ZQuestClassic/ZQuestClassic/commit/915670436dd1134673b0554b117b75f57a61973a)

### Player

- not showing error dialogs in title screen, and unbreak -only switch [`c32a29d1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c32a29d1d1418f7d7809ff97132329966bea9bb4)
- clear spin state during screen scroll [`7ca93107b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ca93107b885c7ac5176378e0d15dd614e10f7e0)
   &nbsp;
   >This avoid a ghost sword visible during scrolling, and also prevents a nasty bug where the player's action state would be frozen until hit. 
   >
- prevent crash in save creation by resetting global vars [`2b3c4119d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b3c4119d85086e21cb321bed799a5ea167ebe15)
   &nbsp;
   >When a game is loaded, many global variables are initialized to a known state. These variables were not reset when the game ends and returns to the title screen. However, save creation happens to call code that checks the active subscreen pointer, which was invalidated. Accessing this could randomly crash or corrupt the program.  
   >
   >Now, these global variables are reset also just before loading the title screen. 
   >
- prevent failing to save after continue [`870510c96`](https://github.com/ZQuestClassic/ZQuestClassic/commit/870510c9691d653edd8a99649f3a737a1a25dcb8)

### Editor

- undefined memory write when applying modern quest ruleset [`2ed538d97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ed538d975d33a94fd91cdbf9d66ae28fa16ac73)
- lockblock/chest combo wizards not saving 'Use ExState' flag [`2a3eb96fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a3eb96fd4d6d7793ac3e26b320fb3d89e87528e)
- some more issues with warp dialogs [`e9ab158ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9ab158aebe39c5fed17bd7350324cc6f3da47ed)

### ZScript Standard Library (std.zh)

- DMFS_ constants being off-by-one [`7fc001530`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fc001530b1f39c823ec4bfd466a200ee5592028)

# Misc.

### ZScript

- add 'itemdata->LAttributes[]' to access attributes as a full 32-bit long value [`83f9d2d03`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83f9d2d0388d11d9eafe0b41992cf22fa2c6f85b)

