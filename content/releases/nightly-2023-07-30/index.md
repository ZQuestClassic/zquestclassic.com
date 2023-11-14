---
title: Nightly 2023-07-30
description: 
date: 2023-07-30T04:07:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-30/nightly-2023-07-30-linux.tar.gz
    name: nightly-2023-07-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-30/nightly-2023-07-30-mac.dmg
    name: nightly-2023-07-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-30/nightly-2023-07-30-windows-x64.zip
    name: nightly-2023-07-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-30/nightly-2023-07-30-windows-x86.zip
    name: nightly-2023-07-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 114384980
tag_name: 'nightly-2023-07-30'
channel: '2.55'
tags:
  - releases
---

# Features

- add -window-title switch [`e9a7e4f6c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e9a7e4f6c05e21aa3af9aa74d9a6e18306d13506)

# Bug Fixes

### Player

- specific NES door softlock [`26541dbc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/26541dbc367770c386b32e767e1c02f1fe3ab3b4)
   &nbsp;
   >softlock when moving through a bombable or walk-through door *in mid-air* with "No Scrolling Screen While In Air" enabled.
   >(Now, with this rule on, you won't be able to go through the door until you land)

### Editor

- grabbing tiles from qst files [`3312ba667`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3312ba667d5f4c6e1d6181777800ffc41a3cc968)
   &nbsp;
   >Commit `142485` regressed this, by accidentally throwing out the next
   >section id when skipping unwanted sections.

### ZScript

- more string literal related issues [`0b0fcee0f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0b0fcee0f7230ba16964ce01eec8d35154fac123)
   &nbsp;
   >also added macros to help fix more of these that might pop up
- prevent MODR divide-by-zero in jit [`6afb11354`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6afb113544101bbe62e1ed48f9f6ff9a38e42ee6)
- make div-by-zero an error instead of a warning, when divisor is literal 0 [`9e7563267`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9e756326754ac026db3ef2d26a2a65454945f701)

# Chores

- update instances of "Zelda Classic" to "ZQuest Classic" [`ca2dd6d8f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ca2dd6d8f8b3a8079c7f20cc61b0415a875a21d1)
- update *comment* instances of "Zelda Classic" to "ZQuest Classic" [`f3ae9af4b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f3ae9af4b92021cbfcf14ced7714968532b96b78)
- add commit to .git-blame-ignore-revs [`43ccd326e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/43ccd326ecf8d4f8d7f3fc6b0af077a7ab95b5cf)

# Tests

- add replays for step triggers, trigger groups, and cutscene triggers [`94c96655f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/94c96655f46651ab307cda4100c28c5996771c45)
- add --show flag for replays script, alias for --no-headless and --throttle_fps [`0cca40ff8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0cca40ff8d613da46f766efa729ce3f05a4856a6)
- update playground maths script to not divide by literal 0 [`69a9a16af`](https://github.com/ArmageddonGames/ZQuestClassic/commit/69a9a16af0a5599968f2b541c080180d55f85fa8)
- update run_target default build folder selection to work on windows [`82631d33c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82631d33c5a8c49e7de431382925a555bbef18a9)

# Misc.

- add script to get all quests on purezc [`7755714fb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7755714fb1ac030edec6b824bc7710c200d3bdb7)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-29...nightly-2023-07-30
