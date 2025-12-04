---
title: 3.0 Prerelease 146 2025-12-04
description: 
date: 2025-12-04T09:38:27Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.146%2B2025-12-04/3.0.0-prerelease.146%2B2025-12-04-linux.tar.gz
    name: 3.0.0-prerelease.146+2025-12-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.146%2B2025-12-04/3.0.0-prerelease.146%2B2025-12-04-mac.dmg
    name: 3.0.0-prerelease.146+2025-12-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.146%2B2025-12-04/3.0.0-prerelease.146%2B2025-12-04-windows-x64.zip
    name: 3.0.0-prerelease.146+2025-12-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.146%2B2025-12-04/3.0.0-prerelease.146%2B2025-12-04-windows-x86.zip
    name: 3.0.0-prerelease.146+2025-12-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 267555115
tag_name: '3.0.0-prerelease.146+2025-12-04'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- qr 'Weapons Better Screen Edge Hitbox' [`f7aad5f50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7aad5f5018dea30d5c102c2a3042ebe3384da4b)
   &nbsp;
   >causes weapons to not die from reaching the edge of the screen until the weapon is actually off-screen. 
   >

# Bug Fixes

- save menus not stopping sfx before opening (ex. ocean sounds) [`44df61160`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44df6116058a4acfd3910e9bdcb208c618b1add0)
- ignore zqdialog in headless mode [`24481c1fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24481c1fe3a41591b62c1574d14b8cd3a67280b0)

### Player

- prevent wrong zscript runtime version sometimes being used [`a7f6418f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7f6418f9dbc968debe5980ef467f1a54b6b6010)
- prevent object getting deleted in constructor / methods [`66c15806d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66c15806d513fa4bf593c819e61063243bfe5fd7)

### Editor

- layer dialog not marking quest as "needing to be saved" [`842d2a0bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/842d2a0bcb0eafde8550c6a36ce658a53657043b)
- "Follow Warp" not respecting dmap xoffset [`209b27670`](https://github.com/ZQuestClassic/ZQuestClassic/commit/209b276703b4418fef1f33f2c01142e392497aeb)
- layer dialog not accepting 0x80 screens [`7a0a3a598`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a0a3a59823cb3753137e184e4a6c4e205f4b969)
- -smart-assign command works again [`1e16bf436`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e16bf436081676f8962c4d2de70abeaa732cff0)
   &nbsp;
   >Regressed recently in 197ad7 
   >
