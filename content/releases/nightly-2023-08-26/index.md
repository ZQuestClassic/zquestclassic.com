---
title: Nightly 2023-08-26
description: 
date: 2023-08-26T01:45:45Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26/nightly-2023-08-26-linux.tar.gz
    name: nightly-2023-08-26-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26/nightly-2023-08-26-mac.dmg
    name: nightly-2023-08-26-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26/nightly-2023-08-26-windows-x64.zip
    name: nightly-2023-08-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-26/nightly-2023-08-26-windows-x86.zip
    name: nightly-2023-08-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 118785693
tag_name: 'nightly-2023-08-26'
channel: '2.55'
tags:
  - releases
---



# Features

- expand combo initd to [8] [`ef17c9542`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef17c954205c22bdec98fdad7ad7a710fe2cba56)

### Player

- configure primary and secondary gamepad stick in settings [`b5b94f9ce`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b5b94f9cee518c529035b6c5990a0ed4e4db741a)
- select one of multiple gamepads in settings [`2a1198ff1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a1198ff194fa5fbeae74b2a3cbf13c3b50b619d)

### ZLauncher

- re-open launcher after update [`ad58eb0ab`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ad58eb0ab7b2aec8689bfd29af3cd5f3bc52513f)

# Bug Fixes

- draw bow and arrow as button item correctly [`1d137103d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1d137103d04befa9e472ed8a9d47aead3ad39d86)

# Build

- upgrade to latest allegro [`d80750a93`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d80750a93c4f8cd482dff0b5075e2336b424dc05)
   &nbsp;
   >https://github.com/liballeg/allegro5/compare/c2bf1e11bed0b63539267115baf190741e0a437a...02382edf26ff0b0ca021dfd10c370c59d9006888  
   >
   >https://github.com/connorjclark/allegro5/compare/my-fork-3..my-fork-4 
   >

# Refactors

- remove build version [`5b7030789`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5b7030789a9ca0187322cfc0c7cd71b632d8a319)
- remove old project name "AEternal" [`3172d746a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3172d746a802be90da9706ccc66e791a4afb6025)

# Tests

- re-enable updater test [`e11f6058b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e11f6058b607fca5fcf6e951d3305537c95009fe)

