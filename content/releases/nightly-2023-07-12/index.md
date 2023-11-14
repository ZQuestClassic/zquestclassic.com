---
title: Nightly 2023-07-12
description: 
date: 2023-07-12T01:00:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-12/nightly-2023-07-12-linux.tar.gz
    name: nightly-2023-07-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-12/nightly-2023-07-12-mac.dmg
    name: nightly-2023-07-12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-12/nightly-2023-07-12-windows-x64.zip
    name: nightly-2023-07-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-12/nightly-2023-07-12-windows-x86.zip
    name: nightly-2023-07-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 111882662
tag_name: 'nightly-2023-07-12'
channel: '2.55'
tags:
  - releases
---

# Features

- Torch combos support shapes, dirs, new Square shape. [`57f6cea0c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/57f6cea0c299127b95077c07067216e3b598032b)
```
  Also refactor how shape drawing works to remove the need for duplicate ZQ versions.
```

### Editor

- 'Quick Compile ZScript' favorite command [`8652f1c91`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8652f1c919bfd6531ce61c0d90af231cb4ef3d72)
- Option to auto-recompile when saving quest [`28db73dc7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/28db73dc78369758b72dabb86b30df6dfdc94628)

### ZScript

- Add script access to draw lights (circle, cone, or square) arbitrarily. [`bd032d78d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bd032d78d50ebf5093754fa63400fb60dff0828e)

# Bug Fixes

- memory leak when allegro does not find file [`4ab4a512f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4ab4a512f7761b0a0bec17b9eefe70b93d16c11e)

### Player

- 'npc->Remove()' no longer leaves behind enemy bg sfx [`691b022d8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/691b022d866672c10a9759328878cbd861a3e0c1)
- clear darkroom bitmaps to dark color during player death animation [`22e241747`](https://github.com/ArmageddonGames/ZQuestClassic/commit/22e241747ecf5f2eed852a4f082766394a965768)
- Lantern inconsistency during scrolling caused by previous commit [`00a536cc2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/00a536cc2f146d74dee63eb726f1c22eb2238a2d)

### ZScript

- global object arrays being wrongly cleared on F6->Continue [`f9383ff99`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f9383ff9985c822a40d0d5dcbce5f076a9f55955)

# Documentation

### ZScript

- docs for light-related new drawing functions, LIGHT_SQUARE constant [`173389422`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1733894222086edd7da56d2d1e6b9a52bcdd59ad)

# Build

- remove alogg, use a5 audio streams for ogg [`7beab3968`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7beab3968d85ca96775d8919618f6f7ad01794a6)
```
  Also refactors zcmusic to use `ALSTREAMFILE` for any a5 audio stream. Currently, mp3 and ogg use
  this.  Co-authored-by: Moosh64 <44924261+Moosh64@users.noreply.github.com>
```

# Chores

- add docs/constants for new square light shape [`ba9d67ed2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ba9d67ed2d2605823cf330a05ba7f9ebdd285fa6)

# Tests

- better error message when zelda binary not present [`0c8e2605f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0c8e2605f52d872201d23c94bb93d08cd7695cb0)
- return failing exit code if replay mode desyncs [`b9b09cd80`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b9b09cd80fbf605ad27abee586f1b81f7933faf6)
- remove timeout for Coverage and Asan builds [`908a011bc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/908a011bc299b17ad85abbb67133cc782eb60eef)
- use python server instead of node for local compare report [`18f8a08fa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/18f8a08fa7d611edf4eceecad7c132e9b78fc7ec)
- disable sound for replay tests [`a9d38c70d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a9d38c70daeffb9fe44ac7458922d8c99e2f1ef4)
- check exit code for replay tests [`1f31223cd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1f31223cd64698ad2d97de13613b08c1bfee3330)

# CI

- allow Asan config type for test workflow [`13ebdc854`](https://github.com/ArmageddonGames/ZQuestClassic/commit/13ebdc85462ba2ffe0f42b0653cfa742577457f5)

# Misc.

- add .mailmap file [`bf78bab6b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf78bab6bbed1b70fecfcabd77490bd967095979)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-10-2...nightly-2023-07-12
