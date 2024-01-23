---
title: Nightly 2024-01-23
description: 
date: 2024-01-23T06:41:39Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-23/nightly-2024-01-23-linux.tar.gz
    name: nightly-2024-01-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-23/nightly-2024-01-23-mac.dmg
    name: nightly-2024-01-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-23/nightly-2024-01-23-windows-x64.zip
    name: nightly-2024-01-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-23/nightly-2024-01-23-windows-x86.zip
    name: nightly-2024-01-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 138105547
tag_name: 'nightly-2024-01-23'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- crash when running replay without any real saves [`f90cb0253`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f90cb02536c5dbd397dd97b8096f1181c0a8069f)
- remove unnecessary absolute path check for standalone mode saves [`ed4afb985`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed4afb985509d8811969009499798ecbc59da26c)
- show final game frame when opening/closing subscreen [`07dddb5e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07dddb5e9e5d766b0548a4880f48c71c9df583d5)
   &nbsp;
   >For older quests utilizing none of the QRs related to "cool scrolling", the subscreen open/close crawl would show a version of the game frame that was missing a few things, like enemy or player sprites.  
   >
   >This should allow us to simplify the rendering (no need to render most things twice to a secondary bitmap), and just looks better. 
   >
- do not stretch GUI [`fad67d962`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fad67d9622faee27c14d945b08c6c68232d58236)

### ZScript

- clear jit-compiled scripts as intended when loading new quest [`ddf96eddd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ddf96eddd335f42b607285ab18ea2c25ace7e7e4)
- fix crash when creating too many paldatas [`83a3bc867`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83a3bc8672c7149823f19b72f2227d854d4ddff3)

# Refactors

### Player

- remove extra draws to scrollbuf in draw_screen [`d57d0318b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d57d0318b99fd20837f468d83943b4f0e3388312)
- remove digi_music volume control [`e426c5d1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e426c5d1c7365d5ad99e555cfc3b682da36278ea)
   &nbsp;
   >`digi_music` is a global volume control for all allegro 4 music streams, which is only used for GME (so all those chiptune formats). But we already apply `emusic_volume` (enhanced music) to all non-MIDI music, so `digi_music` was at best redundant, and at worse a confusing knob that only modified some music formats.  
   >
   >It's been removed from the Sound dialog, and now defaults to 255 (100%). It can still be modified via scripts, though this should be changed to just set/read `emusic_volume` sometime in the near future.  
   >
   >BTW - ~6 months ago OGG was changed to use Allegro 5 instead of 4, which means at that point `digi_music` no longer had any effect on OGG volume. 
   >
- remove music buffer setting [`9a6ae020b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a6ae020bbca871feff11f2aa9c7f98f3049cdcb)
   &nbsp;
   >This only applied to it/xm/s3m/mod music. There's no need to expose this to users. Instead, always use 128KB as a buffer size. 
   >

# Misc.

- add qst.author sentry tag, so we can know who to reach out to for crashes in unpublished quests [`22a5c9c73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22a5c9c735102bc0f255617b2c11b7a5aa9ee67b)

