---
title: Nightly 2023-11-04
description: 
date: 2023-11-04T02:40:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04/nightly-2023-11-04-linux.tar.gz
    name: nightly-2023-11-04-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04/nightly-2023-11-04-mac.dmg
    name: nightly-2023-11-04-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04/nightly-2023-11-04-windows-x64.zip
    name: nightly-2023-11-04-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-04/nightly-2023-11-04-windows-x86.zip
    name: nightly-2023-11-04-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 127972937
tag_name: nightly-2023-11-04
tags:
  - releases
---



# Features

- Add itemsprite->NoSound [`65c4a5d61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65c4a5d61181a093576dde2199a2360dc48f1896)
   &nbsp;
   >Disables the pickup sound for an item if true. 
   >

# Bug Fixes

- many issues with the 'Doors' dialog [`6e97f2aaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e97f2aafd15d463616c4adce22bfe483428391c)
   &nbsp;
   >Also adds new '(None)' door type. The player will not 'auto-walk' when entering from a '(None)' door, and no combos are placed when setting one in zq. 
   >

# Refactors

### Editor

- simplify tile copy during grabbing [`eb1a43609`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb1a4360995bd7f358786555f1556f2963f42f2c)

# CI

- fix archive step when there is nothing to archive [`3869a0869`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3869a08698262e68b06e0eedb929c390e765388c)

