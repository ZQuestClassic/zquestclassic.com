---
title: Nightly 2023-10-07
description: 
date: 2023-10-07T00:02:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-07/nightly-2023-10-07-linux.tar.gz
    name: nightly-2023-10-07-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-07/nightly-2023-10-07-mac.dmg
    name: nightly-2023-10-07-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-07/nightly-2023-10-07-web.zip
    name: nightly-2023-10-07-web.zip
    channel: undefined

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-07/nightly-2023-10-07-windows-x64.zip
    name: nightly-2023-10-07-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-07/nightly-2023-10-07-windows-x86.zip
    name: nightly-2023-10-07-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 124122109
tag_name: nightly-2023-10-07
tags:
  - releases
---



# Features

- new DMap editor behavior where titles are no longer limited to 20 chars and intro strings use a string table dropdown [`6bd8a9acb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6bd8a9acbe6fc6ad8cb90379e8d0a2ce028bec23)

### Editor

- changed the default size of some subscreen widgets to make them easier to grab in the editor [`fd74a7a18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd74a7a18459a88941b28fcaa81af0349d135123)
- dragged items in the subscreen editor can be snapped to the grid with ctrl [`03274b2d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03274b2d8a3a7aaf0745ce5e5289a5cb37aca9f4)
- 'File->Load Tileset' to start a new quest from a tileset [`211e53bff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/211e53bff2b03771624ed290616b38beeaeb2f5a)
- subscreen wizards for generating item grids and counter blocks [`365e95fd2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/365e95fd2620e70dd4945899fe74a327179345ef)
- "connect to solids" flag for basic and relational autocombos [`a28a3efa7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a28a3efa72a38ae81daaf576da5981167a1a96ff)

### Web

- migrate to new database manifest and use CDN [`5c823a081`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c823a081bb9e917219da938b89172bc858f71a7)
   &nbsp;
   >* Quests and associated music are now hosted at data.zquestclassic.com,   via DigitalOcean's CDN. This should make downloading faster.
   >* Add preloads for the manifest and the wasm  
   >
   >
   >New format for quest manifest:  
   >
   >* Supports multiple releases of a quest (creating a new release each   time the contents have changed). Currently always shows the latest,   but when a save slot is first created it locks to that version.   Later, will add a way to upgrade/alert user that there is a new   version for an existing save
   >* Add an approval bit, so we can be granular about what quests are   published and playable in the web version  
   >
   >
   >Drive-by bug fixes:  
   >
   >* bug preventing saving files (see 2803f8 and 98f366)
   >* bug preventing editor from persisting qst file due to missing   filesystem sync
   >* bug preventing copy/download browser local files from showing when   user opts out of mounting a directory
   >* (for all platforms) bug that changes `.sav` files to use a relative   path (to the configured quest directory) for the associated qst   file, instead of an absolute path. Save files were portable before   because of some non-trivial magic when resolving a qst path, but   this makes it more explicitly portable 
   >
- reduce amount of preloaded data [`24e1eee5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24e1eee5ce6638ae7be4cb05b7f0a65459b57566)
   &nbsp;
   >zc.data is 5 MB now, instead of 15+ 
   >

# Bug Fixes

- fix dmap title corruption [`189d34c1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/189d34c1d52dc90afb942797eb3d4d03bbe735d7)

### Editor

- liquid combo wizard mod sfx off by 10000 [`1c0399ff2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c0399ff2fe4f0b1be4f1b27be881785baf62792)
- moved some resizing functionality from the move arrows to resize arrows in the subscreen editor [`a72d22a04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a72d22a04581d89d95e21f4123f934953033560a)
- fixed subscreen wizard window titles not updating [`03e600092`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03e60009216e738d897d6a267ae70b229be20efa)

# Build

### Web

- rename workbox-config.js to workbox-config.cjs [`3602a7233`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3602a7233f6e799b2aa985705aa3033acb70fbf0)
- update dependencies [`97203e923`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97203e92388a4b41dd0aca4af1466ba301f1cb5d)

# Tests

### Web

- run test_zeditor.py and test_zplayer.py [`bb237a671`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb237a6715b2f44cb44653bbc60ca03eeabe5efa)

