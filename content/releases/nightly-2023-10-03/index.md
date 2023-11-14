---
title: Nightly 2023-10-03
description: 
date: 2023-10-03T06:29:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-03/nightly-2023-10-03-linux.tar.gz
    name: nightly-2023-10-03-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-03/nightly-2023-10-03-mac.dmg
    name: nightly-2023-10-03-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-03/nightly-2023-10-03-windows-x64.zip
    name: nightly-2023-10-03-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-03/nightly-2023-10-03-windows-x86.zip
    name: nightly-2023-10-03-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 123436825
tag_name: 'nightly-2023-10-03'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- double click in text procs selects all text [`d7f12e957`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7f12e95708d2cfc6d89e0db6a924d0a83013efd)
- option for tooltip highlight color (instead of pink hardcoded) [`0036f21c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0036f21c15a302a5aedcbb7a13d1202bc0f79c12)
- reworked double click in text procs to select by word [`a3bfa4a75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3bfa4a75dc4b6c00735f49a357dc6bb25f627fe)
- checkerboard background option for invalid data [`39549c142`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39549c142d41c20f213886bf7f9e1a4283f96ee4)

# Bug Fixes

### Player

- check if A wpn slot when doing bomb deselect [`9bc8776cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9bc8776cb53f6fadde62e92c4770f50697312fda)
   &nbsp;
   >This is a potential fix for a bug that prevents the sword/A slot from working after using the last bomb. The bug is very difficult to reproduce, so not certain to be the fix. 
   >

### Editor

- fixed copy/paste hotkey in the string editor and crash when editing absurdly long strings [`e0aa4ba60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e0aa4ba60ccd02717897a7b24488359c3fe48311)

# Tests

- re-enable part of updater test [`1e11349cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e11349cbee52bf8b7ee817d7fb763c1d925ca4a)

# CI

- pull git lfs objects for packaged resources [`4a5c80d12`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a5c80d128c7258d33546b5d654bf472e7aa34aa)

# Misc.

### Player

- create `quests` subdirectory for qst files [`e5c9c2b5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5c9c2b5a1bcfe28123b8d3301146be7497a590d)
- auto open file select dialog for new game [`57afca898`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57afca898c10b10d5d6e2bed318053013aafee69)

