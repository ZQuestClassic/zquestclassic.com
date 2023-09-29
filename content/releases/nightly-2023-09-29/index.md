---
title: Nightly 2023-09-29
description: 
date: 2023-09-29T06:20:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-29/nightly-2023-09-29-linux.tar.gz
    name: nightly-2023-09-29-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-29/nightly-2023-09-29-mac.dmg
    name: nightly-2023-09-29-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-29/nightly-2023-09-29-windows-x64.zip
    name: nightly-2023-09-29-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-29/nightly-2023-09-29-windows-x86.zip
    name: nightly-2023-09-29-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 123073033
tag_name: nightly-2023-09-29
tags:
  - releases
---



# Features

- change grid-snapping on FFCs, blue squares, item square, etc [`c4f28895e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4f28895ed6ea622f70af2b2be4b36ec92eacd0b)
   &nbsp;
   >Now, these all snap to the half-grid by default, but *do not* snap to the grid while 'Shift' is held. 
   >

### Editor

- 'Highlight Current Layer' option, when enabled dithers out non-active layers. [`69267fb51`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69267fb511478cd7af71fddea4799f759d29ca1c)

# Bug Fixes

- moveflags not set correctly for pre-2.50 enemies [`58d73e0cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58d73e0cfdb892482e2898fd509704c1d5f6f2a2)
- replays depending on wrong moveflags [`8c359cdb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c359cdb394d99e2b2bc587ead44aec4c039d0c4)
   &nbsp;
   >not sure of a better commit title 
   >
- handle empty init data delta, which is when no change is made [`ecb6e1bd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ecb6e1bd7fe937d664ac52e0d3af8eb9c5b89366)

### Player

- Oddity with swords/spin attacks not properly hitting triggers [`ae7bf3e44`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae7bf3e4442c506b7cf72ca4f8b1813d6dda07b1)
- remove accidental code that resulted in less precise sin even outside replays [`0545938cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0545938cf052c4630e6dea1e16e2a1d94020ca9d)
- incorrect value for cos(90) in replay mode [`2d46cdd1e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d46cdd1e7a1e9bc975784df7562343eb62683bc)

### Editor

- fix autocombo height change not being treated as a list command [`de70ed253`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de70ed25367114cee8cc5ea58d68d7fd623414a4)

### ZScript

- paldata objects not clearing properly on init [`13a78f04e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13a78f04ea86231ca372bef2b557c8dbafdbf3b5)
- generic script local arrays and '->Own()'ed objects bugging out on 'Continue' [`850fca401`](https://github.com/ZQuestClassic/ZQuestClassic/commit/850fca4013613ec0a76a03ef4bff0c5a1d914770)

# Chores

- update .mailmap [`8c87d92ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c87d92eca08945bf80560edf7cec2571bcaa22b)

# Refactors

- gamedata and user_object stuff, script '->Own()' handling [`76a8c3d2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76a8c3d2f201e77c47acc547b9753364fb24de41)

### Player

- remove classic_zelda.dat [`e1d9bd937`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1d9bd93736397a274812c2e9fa390787bc403e6)

# Misc.

- add AUTHORS file [`008738d7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/008738d7a1c030da1cfae0a4b7b9d136253916e7)
- rename editor exectuable from zquest to zeditor [`b34503993`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b34503993b95e6afc07aa88313a50c0e4ed50cc7)

### ZLauncher

- use new program names [`9f51c900a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f51c900a8255e450ba70e5e8aa6dbff93064697)

### Web

- rename from Zelda Classic to ZQuest Classic [`a37ec4ce8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a37ec4ce8b3a5b4960f343c7bc8a111e25f1c6f3)

