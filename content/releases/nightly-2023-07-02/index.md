---
title: Nightly 2023-07-02
description: 
date: 2023-07-02T06:37:19Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-02/nightly-2023-07-02-linux.tar.gz
    name: nightly-2023-07-02-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-02/nightly-2023-07-02-mac.dmg
    name: nightly-2023-07-02-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-02/nightly-2023-07-02-windows-x64.zip
    name: nightly-2023-07-02-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-02/nightly-2023-07-02-windows-x86.zip
    name: nightly-2023-07-02-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 110771274
tag_name: nightly-2023-07-02
tags:
  - releases
---

# Features

### Editor

- Compiler settings now searchable in QR search dialog [`cedf82689`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cedf8268997d6939ce8a68bd630f25048aa6d995)
- Screen Palette menu now previews in the window behind it [`c98758a57`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c98758a574ae147973398a2d1c517a4d1df00ad3)

### ZScript

- -include switch to set include paths [`20480cb28`](https://github.com/ArmageddonGames/ZQuestClassic/commit/20480cb285965c74ebd72e0f17cd7dff934e8747)

# Bug Fixes

- add some sanity checks to font initialization [`b659ab974`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b659ab974871a880eaa0f7ef962349922ac5c8bf)

### Player

- Should fix all instances of things occurring on the wrong screen when scrolling [`bae07692c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bae07692c317193cc06b7c2ec9bbc27b1bb7ea7a)
- system reset when recording in test mode [`f35c89de7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f35c89de77c7ae590cef87099455b46fa817cda9)
- scrolling on to raft paths no longer forces you to raft (compat ruled) [`1412cab3e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1412cab3e5b383404ec1899726796c95a44cad29)
- mid-scroll is no longer a "safe respawn point" [`9d691ad0c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9d691ad0cb7495c6937deee15d5a77e4fee12f5f)
- LW_THROWN weapons not running weapon scripts [`45ada8199`](https://github.com/ArmageddonGames/ZQuestClassic/commit/45ada81998aa968a2fc02e5730368bde80b8cdd4)
- Throwing in sideview [`384513a3b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/384513a3b8d0a30b4ae551574955fd6a7cbaab9f)

### Editor

- gui label text wrapping on strings without spaces [`a49fe973c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a49fe973cf931350d6acde4e91a880b6245bdece)

### ZScript

- use sane qrs by default for parser CLI [`5ed5d3b9d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5ed5d3b9db2efd7c5eec62f3e13d02b74b5e4bb2)

### ZConsole

- [win] use async i/o, speeds up zscript debugger [`2bbc6e58b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2bbc6e58b6d1a44b971a687a3225662c6cd4c716)

# Chores

- fix compile [`94ca60c61`](https://github.com/ArmageddonGames/ZQuestClassic/commit/94ca60c6125b42acc6a306cf5f976d943ac21842)
- fix non-windows compile (remove unreachable code lines) [`380118b8d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/380118b8d285a940edf7614ac9cd161383dc57d6)
- remove debug print [`605e0e1a6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/605e0e1a6f2ae39621aa384e7ec7c5c911cac559)
- fix type conversion error [`9b8b21708`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9b8b21708501220315f9c69785e957e38d3615c3)
- Replay version check for respawn point fix [`e92a15324`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e92a15324e57e65a7f4c733fd40fe15c499b63be)

### Editor

- fix missed in previous commit [`10097db47`](https://github.com/ArmageddonGames/ZQuestClassic/commit/10097db47c47f03ee58eef43b8c7db8fe704c78e)

# Refactors

### Player

- tweak and document MAPCOMBO3 [`ead694178`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ead694178f7a9194af4f4a43543c9a9b52e0d6e3)

### Editor

- Level Palette shortcuts cleanup, add warning with dsa [`2df440583`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2df44058304ca172d120602236ad4df595c4b252)
- new clean compiler settings dialog + help text [`d9528ee4f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d9528ee4f7bb3a9df39c990b84d8c3da9118ca9e)

### ZScript

- only allocate script data for combos that need it [`7f4ac3b75`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7f4ac3b751aee2d28b00c858f30ef57e359a9f3d)

# Tests

- check if failing frame values exist in dict [`ba99a2dfd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ba99a2dfda43a18518d2858d12b56775fe05bd9c)
- use exists_ok when making updated dir [`95f161860`](https://github.com/ArmageddonGames/ZQuestClassic/commit/95f161860975c80b9b7b51516d484ed6f9d090bd)
- print failing frame during replay test [`67d34be84`](https://github.com/ArmageddonGames/ZQuestClassic/commit/67d34be8475e9502311f15f78b7c93606150727e)
- use exist_ok when making updated dir (typo...) [`d5580d54d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d5580d54df4388d553cad90e2f3c2fb45b97593a)
- refactor compare_replays.py to prepare for re-use [`9a81e9cf4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9a81e9cf487b051f09626bcf5501eb0dca94939c)
- refactor run_test_workflow.py to prepare for re-use [`b2e5fe5cc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b2e5fe5ccf8614e4d013c2049a083e267322b94b)
- automatically start webserver for compare report [`47bc28454`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47bc28454457d0841edfd7c33dd3d915950ee6c1)
- add prompts for creating a report on failure [`b79079271`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b790792718562552f2f4cd1175627fe9bd313e07)
- auto update new script test [`2af517bb1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2af517bb13e910871dc48542c5b8e5c886f8335f)
- restore scripts compiled by playground.qst [`1f78aefca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1f78aefcaded28885143260e919de848abf62423)
- add playground_scrolling_script.zplay [`c34b92a76`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c34b92a76a9662eab922761ec3c542894a5f24b0)
- add dark.zplay [`aaf68685f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aaf68685f0c685faf26c412cf7fded06c2041397)

# CI

- remove release cron [`cfcd1291e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cfcd1291e4151cf1de339fb5b4271b68fb6a911e)
- specify version of PyGithub [`aaf2edaaf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aaf2edaaf7387fcdc692c29c7ae27e7811de4208)

# Misc.

- reverse commits in changelog for more natural ordering [`423f04791`](https://github.com/ArmageddonGames/ZQuestClassic/commit/423f04791ae396389b0acf44905b2abc7d07ad90)
- use separate folder for downloaded release builds [`f57703681`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f577036813c26beb372e245949f3397f09279d17)
- fix wrong scope suggestion [`9fb96dc55`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9fb96dc5516317b43dffdae8ed80e45835acb644)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-06-28...nightly-2023-07-02
