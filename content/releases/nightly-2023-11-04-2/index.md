---
title: Nightly 2023-11-04 (2)
description: 
date: 2023-11-04T06:16:00Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04-2/nightly-2023-11-04-2-linux.tar.gz
    name: nightly-2023-11-04-2-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04-2/nightly-2023-11-04-2-mac.dmg
    name: nightly-2023-11-04-2-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04-2/nightly-2023-11-04-2-windows-x64.zip
    name: nightly-2023-11-04-2-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04-2/nightly-2023-11-04-2-windows-x86.zip
    name: nightly-2023-11-04-2-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 127981092
tag_name: nightly-2023-11-04-2
tags:
  - releases
---



# Features

- add itemsprite->NoHoldSound [`1bc071fcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bc071fcfb4b5e3daa641e31781c3fcd687b8b39)

# Tests

- support baseline prompt when providing existing test results on disk [`492bc6b8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/492bc6b8ba078ffde8a73c773ab2fdacc24e193b)
- keep webserver alive for web replay tests. check for fatal errors [`1af5883f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1af5883f211ca924a458dbdbe22bc279f45ef9f2)
- make test replays lazy files instead of a single giant download [`f9fa641ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9fa641ef86884e106c98c4e869bd3c5d6126a2c)

# CI

- run fewer replay tests for web, for now [`ec906a94b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec906a94b1dd455ad10360c48fa003b1b3a60923)

