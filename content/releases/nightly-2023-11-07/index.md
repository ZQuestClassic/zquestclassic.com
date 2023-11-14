---
title: Nightly 2023-11-07
description: 
date: 2023-11-07T04:07:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-07/nightly-2023-11-07-linux.tar.gz
    name: nightly-2023-11-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-07/nightly-2023-11-07-mac.dmg
    name: nightly-2023-11-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-07/nightly-2023-11-07-windows-x64.zip
    name: nightly-2023-11-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-07/nightly-2023-11-07-windows-x86.zip
    name: nightly-2023-11-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 128253172
tag_name: 'nightly-2023-11-07'
channel: '2.55'
tags:
  - releases
---



# Features

- Allow weapons to change sprite when lit on fire [`b727121cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b727121cbd31ed251afb728706a86452210a1808)

### Editor

- added buttons to the dmap editor to preview enhanced music looping [`1822e0e47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1822e0e47a3404997efb8d23e9e011ff51c36e5c)

# Bug Fixes

### Player

- set game played to false to fix quest progression sword/health bug [`be675976b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be675976b7d00ae666b2c1b976ca533589226a35)

### ZScript

- fix SPRINTFA calling the wrong function [`c49ed2840`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c49ed2840d3cc54eed6da6ac2dde83e0e49142ab)

# Refactors

- Split graphical weapon init code, in prep for ignite sprites [`9ca67c7b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ca67c7b0ebfadb0324cfabc7f02005d8eb30651)
- make tooltips simpler to install, and map prev/next tooltip [`ca09be0e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca09be0e25754d40cf16985fe64443afaadebe7f)

### ZUpdater

- just query website for release channel info [`a724610af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a724610af9e59f81fd06b05cba8f7bbfdcd4326f)

# Tests

- for replay tests baseline prompt, only consider releases predating current commit [`d026d8834`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d026d8834c286039f021947336fbcc9c48edac88)

# Misc.

- allow '<:' in commit (similar to '!:'), to squash with prior commit in changelog [`6ea35b2c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ea35b2c7c3b9f610ea2b12dd50393fbdb8a34b5)

### ZLauncher

- add support zc button [`11ec92044`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11ec920449c8d0dd3736edd3c791704d34ca96ba)

