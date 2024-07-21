---
title: 3.0 Prerelease 59 2024-07-21
description: 
date: 2024-07-21T18:42:19Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.59%2B2024-07-21/3.0.0-prerelease.59%2B2024-07-21-linux.tar.gz
    name: 3.0.0-prerelease.59+2024-07-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.59%2B2024-07-21/3.0.0-prerelease.59%2B2024-07-21-mac.dmg
    name: 3.0.0-prerelease.59+2024-07-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.59%2B2024-07-21/3.0.0-prerelease.59%2B2024-07-21-windows-x64.zip
    name: 3.0.0-prerelease.59+2024-07-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.59%2B2024-07-21/3.0.0-prerelease.59%2B2024-07-21-windows-x86.zip
    name: 3.0.0-prerelease.59+2024-07-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 166418943
tag_name: '3.0.0-prerelease.59+2024-07-21'
channel: '3'
tags:
  - releases
---




# Features

- expand palette from 6-bit to 8-bit color [`4fccd7565`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fccd7565841bf6bda9e18e2b92ac4a5c41db45a)
   &nbsp;
   >The RGB channels for colors have been increased to full RGB color range of 0-255, rather than 0-63. This increases the number of possible colors that palettes can use by 64x.  
   >
   >This also impacts how colors are declared in ZScript, such as for `Graphics->Tint`, `Graphics->MonochromeHue` and `combodata::TrigTintR/G/B`. A script compat QR is added for existing quests that use 6-bit colors.  
   >
   >A minor side effect of this change that applies for all quests is that palette effects, such as the fade in/out screen transitions and the death animation, are now smoother as there are more possible colors to animate through. 
   >

### ZScript

- 'TileBlit' and 'ComboBlit', for drawing parts of tiles/combos [`c874bc20e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c874bc20edfb4ab32a80e3800472664e55d3abc0)

# Bug Fixes

### Player

- also save replay when selecting Quit Without Saving [`7efaac166`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7efaac166aeadda65ad70c9ff2d50c3336b9d39c)

### Editor

- wording consistency issue (`trigger` should refer to the `Triggers` tab) [`4468501f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4468501f9b93e224d7b8b18cf91bb59ee89603a1)

# Refactors

### Editor

- add sub-menu for changing tile color depth [`a9cda26e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a9cda26e694fe9c8fd0a3d5e8b2ee42471e309a9)

### ZScript

- remove unused greyscale and monochrome filters [`b4bd8ad99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4bd8ad99d947a228e7b219b53e5d061c0b7a158)
   &nbsp;
   >Removes these methods:  
   >
   >* `Graphics->Greyscale()`
   >* `Graphics->Monochrome()`
   >* `Game->GreyscaleOff()`
   >* `Game->GreyscaleOn()`
   >
   >
   >&nbsp;
   >
   >None of these are used in published quests, `Graphics->Tint()` and `Graphics->MonochromeHue()` can be used instead, and removing these simplifies some rendering logic. 
   >

# Tests

- use truecolor bitmap for gfx frame hash [`bd2cf5c9b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd2cf5c9beb586065fdfd519507b012ececc7159)
