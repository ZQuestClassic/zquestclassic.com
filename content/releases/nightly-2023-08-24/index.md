---
title: Nightly 2023-08-24
description: 
date: 2023-08-24T19:07:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-24/nightly-2023-08-24-linux.tar.gz
    name: nightly-2023-08-24-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-24/nightly-2023-08-24-mac.dmg
    name: nightly-2023-08-24-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-24/nightly-2023-08-24-windows-x64.zip
    name: nightly-2023-08-24-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-24/nightly-2023-08-24-windows-x86.zip
    name: nightly-2023-08-24-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 118625504
tag_name: 'nightly-2023-08-24'
channel: '2.55'
tags:
  - releases
---



# Features

- parser timeout is now configurable/disablable (instead of 30sec) [`f3cc92471`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f3cc9247199a6e84d869bcb69f9999f907bea5f6)

### Editor

- Smart Assign Slots in zscript compile [`3192de1e7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3192de1e735078ddb5a5fc4e6e1947211858ab37)

### ZScript

- Variadic Parameters (user functions) [`f8a424029`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f8a4240293772a78a8ff112146ce8d69370f2fc3)
- printfa/sprintfa to take an array of args like printf/sprintf [`eb8dfd978`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eb8dfd9780270276a0ef2d14d46b2babcb97e301)
- Allow declaring size 0 arrays [`ecf7793fe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ecf7793fe95ab784241321cfcf7d706f3fa3d9de)
- Game->CurrentItemID() to use the engine method of checking owned items. [`42129a5f5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/42129a5f547d3901c66d8bedde0284bd1e6f395d)

# Bug Fixes

- wrong spacing on one-line minimap title widget [`8eebcfaa2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8eebcfaa23844a7d59fe185d443e8672e7a8ce39)
- avoid heap overflow crash for draw_textbox scanned string [`06ab4d156`](https://github.com/ArmageddonGames/ZQuestClassic/commit/06ab4d1567e24a6d1f971e7d0198c37d77e173e2)

### Editor

- use correct int size when reading qst template size [`a9904e441`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a9904e441e4d1f80fb1b2b88d69f4cbf07bcb80a)

### ZScript

- shop data not handling info correctly [`71429e679`](https://github.com/ArmageddonGames/ZQuestClassic/commit/71429e679bea44c609e3c4b2af03338eccdea1fa)
- some parser pointer issues [`df423680b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/df423680b66f0dcc624a6a10a3b12eb5c97aad4b)
- broken typedefs from recent commits [`82b6e9db5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82b6e9db568667a0f23285dabef80012c5045f78)

# Build

- include missing import for stdint [`e65d7b8b2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e65d7b8b21f44842da5ae972bd949eecf60637dc)
- disable format-overflow gcc error [`af7ef5a90`](https://github.com/ArmageddonGames/ZQuestClassic/commit/af7ef5a90adce475361f5335e10e9801e1983ed8)
- disable compiler extensions [`1d7624410`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1d762441059f8a053466f5247c5c14fdc29dd939)
- use new msvc preprocessor only for our targets [`e3fd987ca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e3fd987cac34c5bacd811c26a8e9f945966cf0a6)
   &nbsp;
   >This would otherwise result in crashpad_handler failing to link `capture_context_win.asm.obj`, which is very strange. 
   >

