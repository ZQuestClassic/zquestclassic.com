---
title: 3.0 Prerelease 169 2026-04-03
description: 
date: 2026-04-03T03:20:07Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.169%2B2026-04-03/3.0.0-prerelease.169%2B2026-04-03-linux.tar.gz
    name: 3.0.0-prerelease.169+2026-04-03-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.169%2B2026-04-03/3.0.0-prerelease.169%2B2026-04-03-mac.dmg
    name: 3.0.0-prerelease.169+2026-04-03-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.169%2B2026-04-03/3.0.0-prerelease.169%2B2026-04-03-windows-x64.zip
    name: 3.0.0-prerelease.169+2026-04-03-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.169%2B2026-04-03/3.0.0-prerelease.169%2B2026-04-03-windows-x86.zip
    name: 3.0.0-prerelease.169+2026-04-03-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 304945058
tag_name: '3.0.0-prerelease.169+2026-04-03'
channel: '3'
tags:
  - releases
---


# Bug Fixes

- Prevent crash when loading music with non-ascii filenames [`c6bf33d53`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6bf33d53031efdfd5de661931c772dafb603b6f)
- Correctly handle MIDI_SCREEN_INHERIT in find_or_make_midi_music [`da5a66ef9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da5a66ef9bc2981992195101a30133faf2ca775d)

### Player

- Melee weapon hitboxes lingering forever based on 'Live One Extra Frame' rule [`9c7185b09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c7185b098a46b485c7a95f87dd8f24b04d0f33c)

### Editor

- Prevent long label from visually breaking combo editor [`5a186fb2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a186fb2a991daac62ed8aad7db02ea832e3a197)

### ZScript Standard Library (std.zh)

- Set `MAX_DEFENSE` to correct value [`60645cedc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60645cedc1dcd521ff23930af306bfef352fda6c)
   &nbsp;
   >It should be 41, but it was 42. 
   >

### ZScript

- Prevent bad inline optimization, mostly for init scripts [`8129be49f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8129be49fa356c1fd0ce6b579b64369d5de89ef2)
- Disable ZASM optimizer inline function pass [`3ed26d3f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ed26d3f25bbcf95fd53176d193d4c2923c1101a)
- Prevent hang when rendering tooltip for large recursive object [`497d1de34`](https://github.com/ZQuestClassic/ZQuestClassic/commit/497d1de34e7818c0969e675df417fce429241770)

# Chores

- Update replay_uploads_known_good_replays.json [`323e01dba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/323e01dba0c5ec5de1c84dff097160b467f194a5)

# Refactors

- Load utf8 path in open_native_dialog_impl [`73b815842`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73b815842c97639d509a12f8e9df6b55b5f3dd83)

# Tests

- Add empty Init script to playground.qst [`05945f2df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05945f2df01fa83363b80ce78a30b0c17df5ae40)

# CI

- Upgrade crazy-max/ghaction-chocolatey action [`c2d9abba2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2d9abba292779e2d448119f7be96da08620fc2c)
