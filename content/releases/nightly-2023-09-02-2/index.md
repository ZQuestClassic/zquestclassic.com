---
title: Nightly 2023-09-02 (2)
description: 
date: 2023-09-02T19:35:22Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-02-2/nightly-2023-09-02-2-linux.tar.gz
    name: nightly-2023-09-02-2-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-02-2/nightly-2023-09-02-2-mac.dmg
    name: nightly-2023-09-02-2-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-02-2/nightly-2023-09-02-2-windows-x64.zip
    name: nightly-2023-09-02-2-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-02-2/nightly-2023-09-02-2-windows-x86.zip
    name: nightly-2023-09-02-2-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 119713756
tag_name: nightly-2023-09-02-2
tags:
  - releases
---



# Bug Fixes

### ZScript Standard Library (std.zh)

- CR_RUPEES definition was missing [`e3edf4430`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e3edf443082ec5ebf41112e6ddaf55100d99558b)

# Build

- fix windows compile due to msvc hang bug [`461de4df9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/461de4df919b8d17ec34e6d5991398db4fb1151f)

# Tests

- check for full game equality in save roundtrip [`5c07f9c3d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5c07f9c3d51caaaf5d7d65db8b5d5985c334515c)

# CI

- add test_zplayer.py [`ef94dec88`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef94dec88057fed7d3cd3341f6f3e213c888b945)

