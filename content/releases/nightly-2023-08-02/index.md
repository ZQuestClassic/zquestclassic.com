---
title: Nightly 2023-08-02
description: 
date: 2023-08-02T22:25:28Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-02/nightly-2023-08-02-linux.tar.gz
    name: nightly-2023-08-02-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-02/nightly-2023-08-02-mac.dmg
    name: nightly-2023-08-02-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-02/nightly-2023-08-02-windows-x64.zip
    name: nightly-2023-08-02-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-02/nightly-2023-08-02-windows-x86.zip
    name: nightly-2023-08-02-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 114890569
tag_name: nightly-2023-08-02
tags:
  - releases
---

# Bug Fixes

### Player

- fix bad rebase that messed up new save file header [`ceac21221`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ceac2122102a2ebab67c47d0121faf1cf8ae3f79)
- check save exists before attempting to use [`a56f5a84e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a56f5a84ef16c143eeb386ce9fbe4e4e03d68a3d)
- remove warning about standalone mode [`adf05b8cf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/adf05b8cff3bbed964c60f140f837d3978f8afd2)
- resize save vector before copying [`4f0cc4ea1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4f0cc4ea13bc660c0efbf74876411e1646774fed)
- fix bad rebase that messed up new save file header (for real) [`9be5aa75c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9be5aa75cec984306788619b51ea81d4b8bfca15)
- update current volume when changing enhanced music volume [`ee66e9201`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ee66e9201352f3a3e3699a5548f529a38b084300)

# Chores

- bump version to alpha 117 [`ed0d04620`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ed0d04620681186f99ceaeddbfb2fca4695777bc)

# Refactors

### Player

- split save code from title.cpp, remove .icn [`ab10ed1e5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ab10ed1e5b7f76f03438d5c3989e3521f7652c7a)
   &nbsp;
   >.icn files contained just the color data for each ring variant needed by the title screen. The idea was to avoid loading each quest just to show a single tile graphic. But, this same data is already in the gamedata save structure, so we don't need to maintained a separate file doing the same. The greatly simplifies much of the code dealing with displaying these icons. 
   >
- remove skipicon and print_metadata_for_each_save_slot config options [`7a45e5691`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7a45e5691b247536bc21177165d3c834b09c4295)
- move more save file handling behind saves.h interface [`5415c4554`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5415c4554a94f5a261cf6853f94fd68409266120)
- move save file name into saves.cpp, remove -savefile [`28c78ffc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/28c78ffc3699536c185b4d96d754ccff64f79ebf)
- store saves in a vector [`becc8102f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/becc8102f7e2d496e2dd5b0d2972fead2538924f)
