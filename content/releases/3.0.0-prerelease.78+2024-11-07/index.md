---
title: 3.0 Prerelease 78 2024-11-07
description: 
date: 2024-11-07T06:51:04Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.78%2B2024-11-07/3.0.0-prerelease.78%2B2024-11-07-linux.tar.gz
    name: 3.0.0-prerelease.78+2024-11-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.78%2B2024-11-07/3.0.0-prerelease.78%2B2024-11-07-mac.dmg
    name: 3.0.0-prerelease.78+2024-11-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.78%2B2024-11-07/3.0.0-prerelease.78%2B2024-11-07-windows-x64.zip
    name: 3.0.0-prerelease.78+2024-11-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.78%2B2024-11-07/3.0.0-prerelease.78%2B2024-11-07-windows-x86.zip
    name: 3.0.0-prerelease.78+2024-11-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 184089688
tag_name: '3.0.0-prerelease.78+2024-11-07'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- show source code context with error messages [`fb4dbc83f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb4dbc83fed5177b2d564436f072509d1e1062e5)

# Bug Fixes

- remove unneeded and invalid use of global in sprite ctor [`4ac63e145`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ac63e145e66a7cf019e364c464cdfadd3c9a2bd)

### Player

- ignore conveyors when rafting [`5167be598`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5167be598895f600b446c8cc35382b76da121873)

### Editor

- sfx/midi listers not updating names [`652e1ffdb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/652e1ffdbfdcee024b0510965e240c680efa3f0a)
   &nbsp;
   >Regressed recently in ccdde8 
   >
- sfx dialog width [`190f3b1a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/190f3b1a75ae29e014442c61beeb9e2f96de4509)
- add missing sideview ladder flags to top row of item cellar and passageway [`35505498d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35505498d5a8e2c2668eb7a1d21715ed9af3900a)
- set explicit width for combo lifting drop-down lists [`ec140e185`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec140e1855b0f9e49496d5f5fa07da8ca765a1bd)

### ZScript

- prevent crash from invalid iterator during script assembly [`cd6acf2e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd6acf2e683dfc558d7c6e05881d20df572a0470)
   &nbsp;
   >Regressed 6 months ago in 7908ad4 
   >
- prevent potential crash while compiling ternary expressions [`b81f3b708`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b81f3b708d07d2d387ad30f68ee2d2d0729359b8)
   &nbsp;
   >Regressed 2 years ago in dd975320. 
   >
- do not auto import bindings if viewing binding file [`a2d784c8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2d784c8c9d80f3f26132d9a6a8d5f2dfb63d6a5)
   &nbsp;
   >This was causing multiple-definition errors. 
   >
- typo in `Region->GetScreenForComboPos` [`93238598d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93238598d44f7797df26b8afc4bb2ca95effef58)
- `utol`, `ltou`, `convcase` work again [`e1c57a88b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1c57a88b4eb17ec4d2f31a8fa9d70dace409807)

# Documentation

- create https://docs.zquestclassic.com [`ce839d1e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce839d1e8d8c665df53dfa96ce1856758b0a9af1)
   &nbsp;
   >This is a new website for documentation. It's currently mostly just reference docs for ZScript, but soon it will also have tutorials and documentation for the editor. 
   >

# Refactors

### ZScript Standard Library (std.zh)

- remove DMFS_SIDEVIEW since it was never implemented [`c43bbc850`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c43bbc850497da818e8b3fd850b7d4a2e4d11f45)

### ZScript

- remove unused getters/setters from npcdata [`a7fbbb5cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7fbbb5cc26fa7a9f75ae87de696990036d4389c)
- simplify ltou, utol and convcase [`7aabd9078`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7aabd9078292894758a7ddbad582ff51d134271b)
   &nbsp;
   >These functions returned false if the string given is empty. That's not useful, so now they longer return anything. 
   >

### Visual Studio Code Extension

- improve symbol id generation used for metadata [`175bf4972`](https://github.com/ZQuestClassic/ZQuestClassic/commit/175bf4972070df3a1b84b2c307b1ff6f3d65bbca)

# Tests

- correctly emit error when compiling unsupported ZASM [`1914f486d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1914f486dd610209abadf4b4e40fba7e3ba6a7d1)
   &nbsp;
   >The `-quick-compile` and `-smart-compile` CLI switches were not correctly failing the program or printing an error message when encountering a bad ZASM command. 
   >
