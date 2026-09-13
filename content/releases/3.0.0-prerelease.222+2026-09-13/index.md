---
title: 3.0 Prerelease 222 2026-09-13
description: 
date: 2026-09-13T20:43:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.222%2B2026-09-13/3.0.0-prerelease.222%2B2026-09-13-linux.tar.gz
    name: 3.0.0-prerelease.222+2026-09-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.222%2B2026-09-13/3.0.0-prerelease.222%2B2026-09-13-mac-universal.dmg
    name: 3.0.0-prerelease.222+2026-09-13-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.222%2B2026-09-13/3.0.0-prerelease.222%2B2026-09-13-windows-x64.zip
    name: 3.0.0-prerelease.222+2026-09-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.222%2B2026-09-13/3.0.0-prerelease.222%2B2026-09-13-windows-x86.zip
    name: 3.0.0-prerelease.222+2026-09-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 388045304
tag_name: '3.0.0-prerelease.222+2026-09-13'
channel: '3'
tags:
  - releases
---

# Bug Fixes

- Database script mishandled quest files with an uppercase extension [`dd57ab084d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd57ab084d8a6ed82c96e9077af57782d7575ac8)
   &nbsp;
   >Bucket keys ending in .QST.gz were not skipped like other gzipped quest files, so they were downloaded needlessly, and .QST resources were left out of the lookup of quest files by hash. 
   >
- Database script re-downloaded files it had just uploaded [`6e3208bcf3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e3208bcf36f9737a41ee9ecd42a6f083818aa74)
   &nbsp;
   >Freshly synced files have a newer timestamp in the bucket than the local copy they were uploaded from, so every download after a sync fetched them again. Compare size and checksum before re-downloading a file the bucket reports as newer. 
   >

### Player

- [linux] prevent crash on startup with a gamepad connected [`2311023ea7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2311023ea7ef0ac24236960c4382894d89f97b2e)
   &nbsp;
   >With the SDL gamepad backend, the joystick pump thread could deliver the device-added event for an already-connected pad before joystick installation had finished, and emitting it dereferenced a null event source.  
   >
   >Bug introduced when SDL gamepad support was added in 3.0.0-prerelease.221+2026-09-12 ([62568e4f79](https://github.com/ZQuestClassic/ZQuestClassic/commit/62568e4f79)). 
   >

### ZScript

- Combo script waitdraw breaking all waitframes [`7d3df3cd4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d3df3cd4ffbcbddf2cb82000bff92f4a01960ca)
   &nbsp;
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98d](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98d)). 
   >

# Documentation

- Vendor highlight.js instead of downloading it at build time [`7fa8934271`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fa893427196a9a06810a6734c9fd2e1ba348b88)
   &nbsp;
   >The docs build fetched highlight.js from unpkg whenever the local copy was missing, so a fresh CI checkout depended on the network and a DNS hiccup failed the docs test. Commit the file and drop the download.  
   >
   >Also update highlight.js from 11.11.1 to 11.12.0. 
   >
