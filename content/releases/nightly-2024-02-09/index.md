---
title: Nightly 2024-02-09
description: 
date: 2024-02-09T08:03:38Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-09/nightly-2024-02-09-linux.tar.gz
    name: nightly-2024-02-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-09/nightly-2024-02-09-mac.dmg
    name: nightly-2024-02-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-09/nightly-2024-02-09-windows-x64.zip
    name: nightly-2024-02-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-09/nightly-2024-02-09-windows-x86.zip
    name: nightly-2024-02-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 140754110
tag_name: 'nightly-2024-02-09'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- various slope improvements, like fixing ffc slopes [`f80e024ca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f80e024ca35a39b2b9a4bae45ffc940d2ac37ff2)

# Build

- add default file for compiler "signature" [`26e8cd4db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26e8cd4db8760c4b8d4638e16c6b511b90156546)
   &nbsp;
   >This is to make the build _just work_ in a clean checkout until I get around to removing this pointless thing altogether. 
   >

