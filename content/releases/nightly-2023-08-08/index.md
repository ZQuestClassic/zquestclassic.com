---
title: Nightly 2023-08-08
description: 
date: 2023-08-08T06:44:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-08/nightly-2023-08-08-linux.tar.gz
    name: nightly-2023-08-08-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-08/nightly-2023-08-08-mac.dmg
    name: nightly-2023-08-08-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-08/nightly-2023-08-08-windows-x64.zip
    name: nightly-2023-08-08-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-08/nightly-2023-08-08-windows-x86.zip
    name: nightly-2023-08-08-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 115566968
tag_name: nightly-2023-08-08
tags:
  - releases
---

# Features

- Add 75 new 'Custom Counters' (26-100) [`c30c57aa6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c30c57aa660646ecb522f61b09863bac0751fd99)

### Player

- support more than one qst file for -standalone mode [`7ebfcf8d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7ebfcf8d3e9b0b53c7b1bc73ad318af925941cd8)
   &nbsp;
   >Previously, standalone mode only worked for a single quest file at a time. For example, run `-standalone game.qst` once and `game.qst` becomes the only quest that will work with the save file generated. Now, each quest will use a save file derived from the name of the quest file.  
   >
   >You can also provide a specific path if you like. It will be resolved relative to the `saves/` folder (you can also use an absolute path). Example usage: `-standalone game.qst me.sav` 
   >

### ZScript

- special layer for non-overhead ffc draws [`d8d123b1a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d8d123b1a1088a50c0cbdaa2cf4f2b1142b73171)

### Visual Studio Code Extension

- add "Always Include" setting, default ["std.zh"] [`84cd984dd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/84cd984dd339df75775524c16dc8c00c17593786)
   &nbsp;
   >This takes an array of files to always '#include', so that you don't need to manually add the #include to every one of your files. 
   >
- better working 'alwaysInclude', clean error messages for other-file errors [`053e6bbc6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/053e6bbc69b68b8dd15761f5237ee7cdc822274a)
- better CONST_ASSERT handling, setting to ignore CONST_ASSERT errors [`db0bc504b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/db0bc504bc143caba37db7f26b5eb7dcc25e137b)
- use default options NO_ERROR_HALT, HEADER_GUARD for language server compiles [`a5a6483a5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a5a6483a53cb19575c947c81ffe73179503fdf4b)
- add includepaths option [`406f41d2b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/406f41d2b0675abfda76ce110f2f4ff8a1316bed)

# Bug Fixes

- cutscene combos being incompatible with replays [`b6e7680f8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6e7680f84ca8d8c359c6873ebb0bac9198c79d8)
- set exe path string to empty if fail to get exe path [`728d3ce03`](https://github.com/ArmageddonGames/ZQuestClassic/commit/728d3ce0340597bf149a7cc0627e20ffef351bcc)
- changer ffc interactions, ffc timer interactions [`9ad10b881`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9ad10b881eb2dec72eba74a9b13255765b21ea8b)
- use ut8 encoding for config and filenames [`134c2fd7a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/134c2fd7af4d70c857f8026cd942e84b7a8bb5cd)
   &nbsp;
   >Config values can now carry non-ascii values. This required also configuring allegro to treat file paths as UTF8.  
   >
   >Fonts have varying support for characters outside ASCII characters. Probably we currently have no fonts that adequately cover non-latin characters. While you may see gibberish in the file picker, files should still load just fine. 
   >

### Player

- do not update saves order.txt in standalone mode [`1ac8d0b5a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1ac8d0b5a3b3760cb37c0a50bb9e687a7ee979ac)

### Editor

- bad index for -quick-assign [`10b87bb3b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/10b87bb3b5072c35741758b0806ca974166fe881)

### ZScript

- support absolute path includes on non-windows too [`2b5690bcc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2b5690bcc3b79ec9cfffed23beb50bfda2ac0e7f)
- null check results before attempting to write zasm [`69d5f16e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/69d5f16e4dc9fc7551a73457231fecca30a1a97c)

### Visual Studio Code Extension

- some more CONST_ASSERT issues [`d5d3c1dd0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d5d3c1dd0bc135b460df095d348ab4ce82c1de7d)
- header_guard works properly for edited file, no longer causes dupe errors [`888a050e3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/888a050e3b8e1568359df4b421b50efe48f32a56)
- handle non-windows paths [`d3bfe96d0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d3bfe96d0fef10757aa7946a422b63b556c2e1c0)

# Documentation

- correct typo in comment for `jit_threads` option [`1e11cd6f5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1e11cd6f57fa95ddfb85c7fbbd9b31353579c80c)

# Chores

- clean up stdout garbage whitespace output [`5ce129bcd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5ce129bcd5602dca05b48db225be5d11dffebba7)

### ZScript

- Make all 'yyerror' error messages start with 'ERROR:' [`917169753`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9171697539017a33499ef63aa1e924aad88d7948)

# Tests

- add more visual indicators to playground_scrolling_script.zplay [`f6d318fe5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f6d318fe5a32b5dafd4190022f433025d56f136b)
- forgot to update zasm snapshot from f6d318 [`cfd6241df`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cfd6241df9c81f27db00d895799687c5b964bdbf)
- fix usage of -quick-assign in test_zquest.py [`ff333ee4a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ff333ee4a67a5453f261f8032bed0b0e15403525)
- add stdout to parser expectations to capture warnings/errors [`f78c85e65`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f78c85e6585ce048b88c831a050a31c6e0c44f5d)
- check if gfx segments exist in workflow get_args [`2da41aa14`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2da41aa1416298cd92337daf79e340af1f529369)
