---
title: Nightly 2023-08-28
description: 
date: 2023-08-28T01:19:25Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28/nightly-2023-08-28-linux.tar.gz
    name: nightly-2023-08-28-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28/nightly-2023-08-28-mac.dmg
    name: nightly-2023-08-28-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28/nightly-2023-08-28-windows-x64.zip
    name: nightly-2023-08-28-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28/nightly-2023-08-28-windows-x86.zip
    name: nightly-2023-08-28-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 118867191
tag_name: 'nightly-2023-08-28'
channel: '2.55'
tags:
  - releases
---



# Features

### Player

- add option to auto-restart in test mode when qst is saved in zquest [`32d7f0497`](https://github.com/ArmageddonGames/ZQuestClassic/commit/32d7f049775a55de00da3f3286f8f18358826d1c)

# Bug Fixes

### Player

- put title.mid back in zelda.dat, since it is available to quests [`17e56f141`](https://github.com/ArmageddonGames/ZQuestClassic/commit/17e56f1410dc0bd04183ba13eda55e4892979b7f)
- defer making .sav file until after quest is selected [`b5e434db1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b5e434db1b4e5e09bd7af8b9cc626723b3076bd0)

### Editor

- write to temp file when saving qst and rename when done [`43c2754de`](https://github.com/ArmageddonGames/ZQuestClassic/commit/43c2754deb477667641f7b1ba788a892f975e797)
   &nbsp;
   >This avoids issues with zplayer being unable to load the file on Reset when in Test Mode, while zquest is writing to it. 
   >

# Refactors

- replace "string.h" with "cstring" [`931e59774`](https://github.com/ArmageddonGames/ZQuestClassic/commit/931e5977437280b112542ac9438ffe767920e60d)

### Player

- remove title option from menu [`d6878d6d2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d6878d6d2a7cffa96ba3090ac29c7b2f5bf758d7)
- disable credit menu [`d49a0cc00`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d49a0cc0039219815f4e96682efbd71d233c68aa)

