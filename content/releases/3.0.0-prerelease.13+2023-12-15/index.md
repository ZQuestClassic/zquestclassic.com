---
title: 3.0 Prerelease 13 2023-12-15
description: 
date: 2023-12-15T02:00:28Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.13%2B2023-12-15/3.0.0-prerelease.13%2B2023-12-15-linux.tar.gz
    name: 3.0.0-prerelease.13+2023-12-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.13%2B2023-12-15/3.0.0-prerelease.13%2B2023-12-15-mac.dmg
    name: 3.0.0-prerelease.13+2023-12-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.13%2B2023-12-15/3.0.0-prerelease.13%2B2023-12-15-windows-x64.zip
    name: 3.0.0-prerelease.13+2023-12-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.13%2B2023-12-15/3.0.0-prerelease.13%2B2023-12-15-windows-x86.zip
    name: 3.0.0-prerelease.13+2023-12-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134037081
tag_name: '3.0.0-prerelease.13+2023-12-15'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- more value range types (.., =.., ..=, =..=) [`1e5be558a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e5be558ac1d419f3ecd86901cc71e35500198df)

# Bug Fixes

- being able to carry objects while swimming, when lift glove isn't swim-capable [`4f6e3a1a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f6e3a1a544f615ba440dcc222bc97277f891ab4)
- 'Push (Generic)' combos not properly locking into place on block triggers [`651ccef1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/651ccef1cea376fdc5406db5b7a9f6505c409c11)

### Player

- fix 'warp' SCC sometimes not closing the string [`546e73659`](https://github.com/ZQuestClassic/ZQuestClassic/commit/546e7365921458c2d2fe52f07fe676d7f4e5ddcc)
- prevent bad module path being set after exiting [`6b57af398`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b57af3986429f2e1e9fac87ad374075bca10b3f)
- use more performant throttleFPS instead of rest in system menu [`4c9ace43b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c9ace43bfefc45bde7c1a4758a71ad4c2d3643c)

### ZScript

- errors related to breaks in infinite loops [`ccf995957`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ccf9959570c054ff916ff6b15daf6ac44c18e913)

# Tests

- add nargads_trail_crystal_crusades.zplay [`3f6d2943a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f6d2943a8fb174cb59ae0373788dbc618196d7b)

# Misc.

- add min replay size threshold when splitting replays [`5cc021de4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5cc021de4b41e06c6d8b9e232e3ead46b6513538)
- add 'peekkey()' / 'upeekkey()' local allegro edits [`933422607`](https://github.com/ZQuestClassic/ZQuestClassic/commit/933422607893bb63717735d3e63496fc35854a03)
- clean up menus, particularly the zc main menu [`43a43345c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43a43345c62cb1d2316956c9d5db4e4307aa0510)

### ZScript

- treat empty functions like prototype functions [`433581fe7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/433581fe7360c39e051a3b39a4b32920bcb97bc3)
   &nbsp;
   >This can be a heavy optimization for empty constructors/destructors. 
   >
