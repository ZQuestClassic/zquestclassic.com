---
title: 3.0 Prerelease 31 2024-01-23
description: 
date: 2024-01-23T06:11:27Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.31%2B2024-01-23/3.0.0-prerelease.31%2B2024-01-23-linux.tar.gz
    name: 3.0.0-prerelease.31+2024-01-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.31%2B2024-01-23/3.0.0-prerelease.31%2B2024-01-23-mac.dmg
    name: 3.0.0-prerelease.31+2024-01-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.31%2B2024-01-23/3.0.0-prerelease.31%2B2024-01-23-windows-x64.zip
    name: 3.0.0-prerelease.31+2024-01-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.31%2B2024-01-23/3.0.0-prerelease.31%2B2024-01-23-windows-x86.zip
    name: 3.0.0-prerelease.31+2024-01-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 138096263
tag_name: '3.0.0-prerelease.31+2024-01-23'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- remove unnecessary absolute path check for standalone mode saves [`8f2e35bd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f2e35bd0e87abadda99ccacf2072c694b3b0574)
- show final game frame when opening/closing subscreen [`89a0cd84d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89a0cd84d5d628c1b143cde965108666862cd285)
   &nbsp;
   >For older quests utilizing none of the QRs related to "cool scrolling", the subscreen open/close crawl would show a version of the game frame that was missing a few things, like enemy or player sprites.  
   >
   >This should allow us to simplify the rendering (no need to render most things twice to a secondary bitmap), and just looks better. 
   >
- do not stretch GUI [`ad7995cf1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ad7995cf15251f80bf8fa4661efdda072c292919)
- set default volume to 100% instead of 25% [`297e7b933`](https://github.com/ZQuestClassic/ZQuestClassic/commit/297e7b9337b5d28cdad230648e2c0248e5b5d29c)

### ZScript

- fix crash when creating too many paldatas [`15355e46e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15355e46ef9997dae8412be4802953d2bd817720)

# Refactors

### Player

- move get_register_dependencies to zasm_table.cpp [`13b6a599c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13b6a599c6d6f0b50026eb463098879fd3afe69d)
- remove extra draws to scrollbuf in draw_screen [`2f47c11fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f47c11fca33f10d9442b6a537e608f1e80ee3a9)
- remove digi_music volume control [`88c037791`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88c03779157dc44794bb61947a8e7a88aa1aed56)
   &nbsp;
   >`digi_music` is a global volume control for all allegro 4 music streams, which is only used for GME (so all those chiptune formats). But we already apply `emusic_volume` (enhanced music) to all non-MIDI music, so `digi_music` was at best redundant, and at worse a confusing knob that only modified some music formats.  
   >
   >It's been removed from the Sound dialog, and now defaults to 255 (100%). It can still be modified via scripts, though this should be changed to just set/read `emusic_volume` sometime in the near future.  
   >
   >BTW - ~6 months ago OGG was changed to use Allegro 5 instead of 4, which means at that point `digi_music` no longer had any effect on OGG volume. 
   >
- remove music buffer setting [`572f44514`](https://github.com/ZQuestClassic/ZQuestClassic/commit/572f445148528947079d145ba281d856d759991d)
   &nbsp;
   >This only applied to it/xm/s3m/mod music. There's no need to expose this to users. Instead, always use 128KB as a buffer size. 
   >

# Tests

- add playground_exstate.zplay and playground_large_animations.zplay [`d61aeb1bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d61aeb1bc3532385578fc73cc58bdc0144693c39)

# Misc.

- add qst.author sentry tag, so we can know who to reach out to for crashes in unpublished quests [`48fbd2609`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48fbd26093b88308ec9fd7871f754fa4ef8d689b)
