---
title: Nightly 2023-07-29
description: 
date: 2023-07-29T12:37:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-29/nightly-2023-07-29-linux.tar.gz
    name: nightly-2023-07-29-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-29/nightly-2023-07-29-mac.dmg
    name: nightly-2023-07-29-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-29/nightly-2023-07-29-windows-x64.zip
    name: nightly-2023-07-29-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-29/nightly-2023-07-29-windows-x86.zip
    name: nightly-2023-07-29-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 114088508
tag_name: nightly-2023-07-29
tags:
  - releases
---

# Features

- add quest package export for standalone app [`669ed4833`](https://github.com/ArmageddonGames/ZQuestClassic/commit/669ed4833bb9b49a31328d6c90f8c2759f0b6327)
   &nbsp;
   >In the ZQuest `File -> Export` menu, there is a new option to package your
   >`.qst` file as a standalone application. This gives you the option to
   >distribute your quest in a way that allows people to play without
   >grabbing any other files, or needing to select a file when starting a
   >save slot.
   >For a qst `game.qst` with a title "My Game", it looks like this:
   >```
   >- My Game
   >	- My Game.exe
   >	- data/
   >		- zelda.exe
   >		- zc_args.txt
   >		- game.qst
   >		- ... all support files ...
   >```
   >This is located in the `packages` folder of the root installation folder.
   >Double clicking `My Game.exe` launches `./data/zelda.exe` with the CLI
   >switches listed in `zc_args.txt`. By default, the export tool provides
   >these switches: `-only game.qst -notitle`. You can set whatever else
   >you like. For example, if you want to skip the save file screen entirely,
   >you can use `-standalone` instead of `-only`.
   >Every time a package export is done in ZQuest, the folder is created
   >from scratch.
   >To include additional files, make a folder `./packages/My Game_extra`
   >and place whatever your quest needs (music, images, `zc_args.txt`,
   >`zc.cfg`, etc). The export tool will copy this folder into the package
   >folder at the end, which allows you to overwrite whatever you want.
   >Custom icons are also supported. See `docs/packaging_quests.md` for details.

# Bug Fixes

- properly set sentry breadcrumb category [`654dd9c24`](https://github.com/ArmageddonGames/ZQuestClassic/commit/654dd9c24facf3c734bcebf1834fbf0ee4f48c6b)

# Build

- upgrade to latest fmtlib, for compile time checks [`36a0f1932`](https://github.com/ArmageddonGames/ZQuestClassic/commit/36a0f1932639e3aad8e8f5b90386ba9e5eb0724b)

# Refactors

### Player

- delete unused enemy clone ctors [`dd6239cdb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd6239cdb86180d7a0b8daa240a9fa0b1e227103)

# Tests

- add playground_slopes.zplay [`503a5c97f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/503a5c97f875d34447a73fd61b93b80d52bb4e03)
- use debugger for replay tests by default only in ci [`4c0859a33`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4c0859a331326d6edd3b0382747223d560671f40)
- add playground_screen_script.zplay [`2dda68a5f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2dda68a5f328c4b846523e7a58443034c6f2e9f8)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-27...nightly-2023-07-29
