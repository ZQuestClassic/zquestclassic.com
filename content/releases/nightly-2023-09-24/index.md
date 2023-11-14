---
title: Nightly 2023-09-24
description: 
date: 2023-09-24T11:41:22Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-24/nightly-2023-09-24-linux.tar.gz
    name: nightly-2023-09-24-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-24/nightly-2023-09-24-mac.dmg
    name: nightly-2023-09-24-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-24/nightly-2023-09-24-windows-x64.zip
    name: nightly-2023-09-24-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-24/nightly-2023-09-24-windows-x86.zip
    name: nightly-2023-09-24-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 122347117
tag_name: 'nightly-2023-09-24'
channel: '2.55'
tags:
  - releases
---



# Features

- Subscreen widgets now have unique labels, and display coordinates [`4553336cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4553336cddd55735ce4dbe493021e3f64a0f087e)
   &nbsp;
   >ZScript can get a subscreen by it's label. Display coordinates are the coordinates that make up the bounding box rectangle for a widget. 
   >

### ZScript

- 'auto' variable declarations [`1b06c63ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b06c63ead75a827647d646e607f6dc4b1e76a39)

### Visual Studio Code Extension

- update keyword highlighting [`2dad50771`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2dad507715d8b847c3d5613197ec5ab0414e7694)

# Bug Fixes

### Player

- 'Magic Containers' cheat not updating max magic soon enough to refill [`7f9ee156d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f9ee156db35991b2742faab8fc75e41792b9632)

### Editor

- fix several issues with the 'default.qst' subscreens [`8e9d475bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e9d475bc68a12033f71443a8edbb90ea43e9f30)

# Refactors

- add TabBuilder gui class [`a9e768c99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9e768c99bf8a19d23e8a2fec060f862f4dc9646)

### Player

- remove module info/loading from menu [`6d27582d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d27582d07d418979c57bfeb4d091ad53cada1c9)

# CI

- trigger website delpoy on release [`d8cbf92e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8cbf92e1aa4b413f922dd5fcf84f5fa3781be88)

