---
title: 3.0 Prerelease 100 2025-04-18
description: 
date: 2025-04-18T00:47:10Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.100%2B2025-04-18/3.0.0-prerelease.100%2B2025-04-18-linux.tar.gz
    name: 3.0.0-prerelease.100+2025-04-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.100%2B2025-04-18/3.0.0-prerelease.100%2B2025-04-18-mac.dmg
    name: 3.0.0-prerelease.100+2025-04-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.100%2B2025-04-18/3.0.0-prerelease.100%2B2025-04-18-windows-x64.zip
    name: 3.0.0-prerelease.100+2025-04-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.100%2B2025-04-18/3.0.0-prerelease.100%2B2025-04-18-windows-x86.zip
    name: 3.0.0-prerelease.100+2025-04-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 213237238
tag_name: '3.0.0-prerelease.100+2025-04-18'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- hover boots duration being halved over pits [`58790db8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58790db8a68a30475c8718e37e353fdf25614fdf)
- further improve scrolling when playing field height changes [`bdf44c336`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bdf44c3367bce4431316d0e2834fac7d18837c18)

### Editor

- prevent crash when generic script data length is 1 [`87eef046f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87eef046f1297b69464b34afeb996977e9fffde0)
- Clicking snapshot option in menu capturing the menu itself [`de96f03fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de96f03feaf96a4cbe1409d740db31ac0e7ebec3)

### ZScript

- empty function optimization for constructors [`a09fe4247`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a09fe4247f2c434d614f4a12fea57e10b0d46051)
   &nbsp;
   >Classes with explicitly empty constructors were not allocating their arrays when constructed.  
   >
   >Regressed in 433581f 
   >
- `sprite->MoveFlags` using wrong sprite id, always failing [`02b20659f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02b20659f1874b9623b65517b0f3b970066195d4)
   &nbsp;
   >Regressed in 9304859 
   >

# Documentation

- update docs related to generic script events [`d517ebf64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d517ebf642f334dede8dc3d336fee8c0eb4be886)
- improve prefix used in doc/tooltip generation for enums [`a1c26a108`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a1c26a108eac84c4d7789d0ddf075d95ad28d98d)

# Refactors

- remove qst num field from header dialog [`93dea114e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93dea114e7ec65ace515b8e6b58f9d82bb91a365)

### ZScript

- preserve order of comment annotations; add ParsedComment class [`a8841b347`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a8841b347dea07ec1f758ba2ee5452b952a5e963)

# Misc.

- improve command parsing for archives/bisect scripts [`f8f6fda1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8f6fda1d2f18eaa6fcb7d3846a27340cb4cf83a)
- fix run_zc_command for scripts on non-windows [`2b3e7ba7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b3e7ba7ac5d78868dd354dbc71249e27fa62b1e)
