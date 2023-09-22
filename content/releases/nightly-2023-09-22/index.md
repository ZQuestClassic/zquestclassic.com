---
title: Nightly 2023-09-22
description: 
date: 2023-09-22T20:22:41Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-22/nightly-2023-09-22-linux.tar.gz
    name: nightly-2023-09-22-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-22/nightly-2023-09-22-mac.dmg
    name: nightly-2023-09-22-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-22/nightly-2023-09-22-windows-x64.zip
    name: nightly-2023-09-22-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-22/nightly-2023-09-22-windows-x86.zip
    name: nightly-2023-09-22-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 122290885
tag_name: nightly-2023-09-22
tags:
  - releases
---



# Bug Fixes

### Player

- Screen 0x80+ 'safe return point' bugginess [`b53ee67ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b53ee67ef1f8b1625c19eebb7200f27e952e115a)

### Editor

- fixed bugged inner bottom corner in DoR autocombo [`22817644a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22817644a46049dbc3ded467b2ab6c59d3c69bba)
- right clicking autocombo combo panes no longer resets cset to 0 [`6300f4d89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6300f4d897ed4772bea50eb4832236f023ebdcdf)
- clearing an autocombo in the editor also clears args and flags [`b71f9a3dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b71f9a3dc14aa7e597b314e9152614478ce17105)
- combo aliases with layers now flag layer screens valid [`e09d0e3f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e09d0e3f927b2136bd0489c9203f9ad08dcdd565)
- fixed out of bounds array access with the drawing mode menu [`f8f4ea09b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8f4ea09bcbbc9296461b4297498db8efc59636f)
- hopefully fixed inconsistent DoR autocombo behavior [`ae6d73cd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae6d73cd271b6edb5e3562a9d889fbba5c9c606b)
- improved DoR autocombos connecting with the edge of the screen [`dea3b0e1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dea3b0e1aab214644b6a75c70d60b7f0962f37b7)
- filter invalid characters from test init data cfg header [`25f477fd8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25f477fd8b4a0b1e46261c9c097f595f01a1b8b7)
- made selecting a favorite combo update the drawing mode dropdown [`d5c1183c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5c1183c42f14d5e8e57797ca84822d307a9846d)
- reduced information on the autocombo preview in compact mode [`8eef7f843`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8eef7f8434ac69ac0dedd1d9ed65e97278e4c8c8)
- normalize path component for test init data cfg header [`eaa537d99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eaa537d99e7f53db33746df0aec23dddd1ebab71)

### ZScript

- fixed incorrect argument ordering in DrawTiles() and erroneous error logging in serveral drawing functions [`ff7752406`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff775240686b18ff645315aa1ce2d5e608c7d879)
- fixed incorrect max count for user objects [`d571f7688`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d571f7688e08553ca8b1cefea400521a2429f9f5)

# Documentation

### ZScript

- made note of rotation arguments for PutPixels() [`f31a9e75f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f31a9e75fecbde970be1293d0ebc9d5f6e2a49c3)

# Refactors

- use transform matrices for render tree [`badeba084`](https://github.com/ZQuestClassic/ZQuestClassic/commit/badeba08499371d7fc58ca4b8638122bf2004bcb)
   &nbsp;
   >The previous adhoc system supported translation and scaling in a very broken way, making it impossible to construct a non-trivial render item hierarchy.  
   >
   >Now it uses proper transforms matrices. Implemented with dirty flags - each render item has a world matrix (and inverse, for mouse lookups) that only update when the underlying transformations change (or one of its parents) 
   >

### Player

- only check already loaded saves for 4th qst red easter egg [`8362c1e93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8362c1e93b8eac6bd526881623b2c9536be2abfb)
   &nbsp;
   >Otherwise, it takes noticeable time to load every save file when the file select screen loads. 
   >
- move some things from .zmod to be hardcoded [`103242d4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/103242d4d37c3c20398a787db58c36c152f09ed6)

# Misc.

- update default.qst (add auto combos) [`ec1a38337`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec1a3833751004da1ee5a0a6de15da4623d1d3d6)

