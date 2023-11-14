---
title: Nightly 2023-08-26 (2)
description: 
date: 2023-08-26T06:16:51Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26-2/nightly-2023-08-26-2-linux.tar.gz
    name: nightly-2023-08-26-2-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26-2/nightly-2023-08-26-2-mac.dmg
    name: nightly-2023-08-26-2-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26-2/nightly-2023-08-26-2-windows-x64.zip
    name: nightly-2023-08-26-2-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26-2/nightly-2023-08-26-2-windows-x86.zip
    name: nightly-2023-08-26-2-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 118796340
tag_name: 'nightly-2023-08-26-2'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

- extraneous popup about string ordering error when loading older quests [`5fe750736`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5fe750736ef168d00b7e66a5bd2e88722e50a354)
- set window icon on Windows [`0f6990a10`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0f6990a106c5205239bd1dc9382b0fc821d1833b)

### Player

- zero gamepad axis state on init [`1f6ad1717`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1f6ad17173952a1646e02484af62381ff8dda392)

### Visual Studio Code Extension

- add missing std_constants typedef type highlightings [`f51f805c1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f51f805c1512bf1981e14a82ca067a0690b37c47)

# Build

- upgrade allegro fork for gamepad improvements [`396b99e65`](https://github.com/ArmageddonGames/ZQuestClassic/commit/396b99e6504f91b12b4c4ed2d9aef36eaac62846)
   &nbsp;
   >https://github.com/connorjclark/allegro5/compare/my-fork-4..my-fork-5 
   >
- fix windows build [`3d944ba65`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3d944ba6532d7fb96ed6eb6e78463c71add6775e)

