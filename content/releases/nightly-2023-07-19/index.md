---
title: Nightly 2023-07-19
description: 
date: 2023-07-19T01:09:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-19/nightly-2023-07-19-linux.tar.gz
    name: nightly-2023-07-19-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-19/nightly-2023-07-19-mac.dmg
    name: nightly-2023-07-19-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-19/nightly-2023-07-19-windows-x64.zip
    name: nightly-2023-07-19-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-19/nightly-2023-07-19-windows-x86.zip
    name: nightly-2023-07-19-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 112749132
tag_name: nightly-2023-07-19
tags:
  - releases
---

# Bug Fixes

- for linux, use posix_spawnp when launching processes [`d93e3c2eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d93e3c2ebe5daab8be0d9463ec9396607655193b)

# Build

- for linux, use libcurl with openssl instead of gnutls [`1227b954a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1227b954a7f1a65812b8f95ed6cf12cdb7887e90)
- disable WANT_OPUS when building allegro [`bff683d3c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bff683d3c2e9256a4ef4171fc6a1ca2f25fdf918)

# Misc.

- improve changelog markdown [`2392d3e70`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2392d3e70415e98e6eed165c793735b1a81f0ea9)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-17...nightly-2023-07-19
