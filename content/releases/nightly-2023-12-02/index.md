---
title: Nightly 2023-12-02
description: 
date: 2023-12-02T22:51:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-02/nightly-2023-12-02-linux.tar.gz
    name: nightly-2023-12-02-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-02/nightly-2023-12-02-mac.dmg
    name: nightly-2023-12-02-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-02/nightly-2023-12-02-windows-x64.zip
    name: nightly-2023-12-02-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-02/nightly-2023-12-02-windows-x86.zip
    name: nightly-2023-12-02-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 132394700
tag_name: 'nightly-2023-12-02'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- set volume correctly when music changes with only fading in or out [`9274a675b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9274a675b6955a89c3a7053d0ec1172390e8b7c9)
   &nbsp;
   >For example, if the new music has a fade in frame duration of 0, and the old music has a fade out frame duration of >0, then the new music would incorrectly have its volume stuck at 0%. 
   >
- menu bar unaligned with dropdown due to menu using int scaling [`f8222be89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8222be894db93cd3b79e946f959039ff4e60df0)
- Swim speeds not being saved to save file [`2bbf51a02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bbf51a02362e95a5eae7134fb4315b4a982551a)

### Editor

- Crash on changing map count [`92c190255`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92c1902557b27a6c320f3d59d345d16be8266a08)

### Web

- use zc-data.nyc3.digitaloceanspaces.com for now [`af524e98f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af524e98ff4c5228c173a4887886af4588cb45ed)
- "Copy URL" in player now uses correct test params [`8b5eaf56d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b5eaf56dcecb2fb867cf10cee61d26a72653f68)
- sync fs when writing save order txt file [`e006c07a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e006c07a7a42cd69940a582f26b0527532381948)
- quick save creation link working again [`9e4c8a90f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e4c8a90f70944a8a85ef506de59c1189ec87bc0)
   &nbsp;
   >The `quest` gamedata field was inadvertently set to 0 because the save file was prematurely selected before being saved for the first time, which prevented anything in `saves_do_first_time_stuff` from sticking. 
   >

# Documentation

- document DrawTile '-777' rotation behavior [`8bfb995e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8bfb995e0f7630cc2d56f66cecb581d38d4f2635)

# Refactors

### Player

- remove unused volume code in read_saves [`244b8cad0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/244b8cad0dd3cf18c90395195e2cd57c549aad11)

### ZScript

- optimize script lookup by name [`9ee5c4ba8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ee5c4ba81693a93056738f03ea439b6973650f5)

