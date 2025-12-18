---
title: 3.0 Prerelease 151 2025-12-18
description: 
date: 2025-12-18T09:45:47Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.151%2B2025-12-18/3.0.0-prerelease.151%2B2025-12-18-linux.tar.gz
    name: 3.0.0-prerelease.151+2025-12-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.151%2B2025-12-18/3.0.0-prerelease.151%2B2025-12-18-mac.dmg
    name: 3.0.0-prerelease.151+2025-12-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.151%2B2025-12-18/3.0.0-prerelease.151%2B2025-12-18-windows-x64.zip
    name: 3.0.0-prerelease.151+2025-12-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.151%2B2025-12-18/3.0.0-prerelease.151%2B2025-12-18-windows-x86.zip
    name: 3.0.0-prerelease.151+2025-12-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 271387882
tag_name: '3.0.0-prerelease.151+2025-12-18'
channel: '3'
tags:
  - releases
---


# Features

### Web

- support loading quests from remote url [`d9d6a5ed4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9d6a5ed42f34e7c7e677b78581d6ce8d897dfb4)
   &nbsp;
   >See https://docs.zquestclassic.com/about/how-to-play#alternative-method-play-directly-in-the-browser 
   >

# Bug Fixes

- improve keyboard driver [`7fc36dad9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fc36dad9563386363aaadc49fe55ff073022b07)

### Player

- paldata colors reading as garbage values [`a57ef9c12`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a57ef9c12c03262ca37b6dbfcdc538b742bad404)
- cores of some enemy types not issuing generic script death events [`0ebc138a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ebc138a73becdc2770fb52b59881a806a54a418)
- bombs falling into pits not near them when exploding [`7db5d04d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7db5d04d09b439b09aced54a3ef5a888f618726b)
   &nbsp;
   >this was caused the the bomb having a large hit offset when exploding, and a check was bounding the coordinates back into the valid screen area, causing the bomb to fall into pits along the right edge of the screen. 
   >

### Web

- update urls in About panel [`3219b3052`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3219b3052050d02a8cd47dd4edfaddfd7cda769c)
- prevent hang when attached folder is deleted [`f155adeff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f155adeff9c72da916c47d0381777a126a962072)
- list default controls relevant to detected keyboard layout [`c48d4f2fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c48d4f2fe4332c02ad5adfc86398114b6e11b292)
- resolve issues with non-US standard keyboard layouts [`4bc18457b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4bc18457b2e12561625f427136ffcda01b7a01fe)

# Documentation

- mention loading functions at header of each class [`9d3693b6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d3693b6a562e8d3d2e730c4d250f76ef15fe703)
   &nbsp;
   >no notes were added mentioning class constructors, as they simply are in the constructors list already. 
   >

# Build

- fix ASAN under windows (bug in allegro) [`3087de2ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3087de2aebd6adabfbf441b67af3323c18d005c0)

# Chores

- update replay_uploads_known_good_replays.json [`97dc7f54e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97dc7f54e6cee27c312ed17450889c70920d683d)
