---
title: Nightly 2023-10-11 (2)
description: 
date: 2023-10-11T10:15:01Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11-2/nightly-2023-10-11-2-linux.tar.gz
    name: nightly-2023-10-11-2-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11-2/nightly-2023-10-11-2-mac.dmg
    name: nightly-2023-10-11-2-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11-2/nightly-2023-10-11-2-windows-x64.zip
    name: nightly-2023-10-11-2-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-11-2/nightly-2023-10-11-2-windows-x86.zip
    name: nightly-2023-10-11-2-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 124583986
tag_name: 'nightly-2023-10-11-2'
channel: '2.55'
tags:
  - releases
---



# Misc.

- log time it took to load qst [`3ebdba27f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ebdba27fb80545025bfca95ad6cb6fac18aa9e6)

### Web

- use gzip instead of allegro PACKFILE compression [`dee67d885`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dee67d885eea7bf4a8bfada55076532b1fb04c5d)
   &nbsp;
   >gzip compresses better than allegro PACKFILEs:  
   >
   >And it's a bit faster to load a qst in the Web version when it doesn't have to decompress it. For Yuurand.qst, loading time (including downloading) from 17.4s to 14.5s 
   >

