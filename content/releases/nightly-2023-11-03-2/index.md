---
title: Nightly 2023-11-03 (2)
description: 
date: 2023-11-03T09:00:35Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03-2/nightly-2023-11-03-2-linux.tar.gz
    name: nightly-2023-11-03-2-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03-2/nightly-2023-11-03-2-mac.dmg
    name: nightly-2023-11-03-2-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03-2/nightly-2023-11-03-2-windows-x64.zip
    name: nightly-2023-11-03-2-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03-2/nightly-2023-11-03-2-windows-x86.zip
    name: nightly-2023-11-03-2-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 127843433
tag_name: nightly-2023-11-03-2
tags:
  - releases
---



# Refactors

- unpack 4-bit tiles when quest is loaded [`ff01c741b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff01c741b1c3d9b117fd8a5bd7bc47876de70a03)
   &nbsp;
   >This reduces CPU usage by ~3%.  
   >
   >Previously, 4-bit tiles were only unpacked just before being drawn. Unpacking means converting into a format ready for drawing, which is somewhat slow to do in functions as hot as tile drawing. Now, when a qst is loaded all 4-bit tiles are unpacked in memory. When saving a qst the reverse happens. This change has no impact on the qst file format. 
   >
- avoid copy when drawing tile without any transformation [`973303a3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/973303a3cdbab473cc6c4845239b13e762b9faaf)
   &nbsp;
   >This reduces CPU usage by ~7%. 
   >
- make get_qr faster by unpacking the bits ahead of time [`990eb380b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/990eb380b886322207215f7905785c82a0dd8438)
   &nbsp;
   >This reduces CPU usage by ~5.5%. 
   >

### Player

- remove accidental copy in run_gswitch_timers [`9646be4b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9646be4b193e7c0f35f1f8b57e666a91acf1a58f)

