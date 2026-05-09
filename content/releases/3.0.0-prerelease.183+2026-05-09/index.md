---
title: 3.0 Prerelease 183 2026-05-09
description: 
date: 2026-05-09T07:04:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.183%2B2026-05-09/3.0.0-prerelease.183%2B2026-05-09-linux.tar.gz
    name: 3.0.0-prerelease.183+2026-05-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.183%2B2026-05-09/3.0.0-prerelease.183%2B2026-05-09-mac.dmg
    name: 3.0.0-prerelease.183+2026-05-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.183%2B2026-05-09/3.0.0-prerelease.183%2B2026-05-09-windows-x64.zip
    name: 3.0.0-prerelease.183+2026-05-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.183%2B2026-05-09/3.0.0-prerelease.183%2B2026-05-09-windows-x86.zip
    name: 3.0.0-prerelease.183+2026-05-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 319993150
tag_name: '3.0.0-prerelease.183+2026-05-09'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- Save/Load the entire state of Map Tile Grid subscreen wizard [`23acaab03`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23acaab033ca5be1af9058c5223a4578171c20f8)
   &nbsp;
   >Save to / Load from Clipboard buttons allow saving an entire Map Tile Grid wizard's state and reloading it at any later time. Keep these safe in text (or `.json`) files to store them long-term! 
   >

# Bug Fixes

### Player

- Issues with layer draw ordering [`ded0b5490`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ded0b54905d9d0a46e97511235ddb37a07b0bfff)
   &nbsp;
   >Split layer features from `Classic Draw Order` QR to a separate compat rule. Fixed negative layer and layer 7 effects of this not working properly during scrolling. 
   >
- Spacebar map bleeding over to other screens in some situations [`4aefececf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4aefececf95688b66f0d1142cc970b67abf7e7c9)
   &nbsp;
   >The new negative layer draws mean the bottom layer no longer draws color 0 opaquely, which was causing bleed-over from other screens due to temp bitmap not being cleared properly. 
   >
- Engine Map spoiling dark rooms [`306610790`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3066107905f47971e516b82d21c047eabd95a3bb)
   &nbsp;
   >Now properly draws new dark rooms, and blacks-out old dark rooms. 
   >
- BS Overworld map showing squares wrong for regions [`f70054485`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f700544851224e55dee1e2ca592f25417d9fc6fc)
- BS Overworld not respecting having the Map item or not [`0ef779588`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ef779588489dbd595b02f0d8991e6cf21751aab)
- Full Region Mapping not applying properly to starting screen [`cda084eab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cda084eabffe5b067a9e92c6854622529687424c)
- Allow "255"/"0xFF" as transparent for more subscreen colors [`c9cf78c66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9cf78c66fde5487df57a79d960e6fc6ea729738)
   &nbsp;
   >notably, setting the `BS Dark` color to 0xFF in misc colors will make it's minimap look more similar to Dungeon/Interior minimaps.  
   >
   >Some colors already handled this, but it was missing from places that could really use it. 
   >

### Editor

- Map Styles dialog not counting as a "change" that needs saving [`5abdbac9d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5abdbac9d734fea41b50df77a1894484c0ccda3b)
- Remove unused wand attributes/flags from item editor [`ab6431d38`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab6431d38374b35d96327e1d41a31b16615aaa01)

### ZScript

- Use proper gfx for script created sword beams [`8d04a515f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d04a515f0969d84030a8318adfa0cf6085037ff)
   &nbsp;
   >This regressed in 9ca67c7b0 (2.55-alpha-120). 
   >

# Documentation

### ZScript

- Better document that lifted weapons don't run scripts [`37f746b22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37f746b225dd81b364f062910f81b033715422e0)

# Refactors

### Player

- Optimize code for common dithering args [`e29f2f007`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e29f2f00753b6de73338dd7dfd6822dd7d605a12)
   &nbsp;
   >This speeds up dithering by a lot - between 3x and 25x depending on the platform. 
   >

### Editor

- Improve FFC hover tooltips [`cc693f8cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc693f8cfe30b606f277161ee0db743a41b7c806)

# Tests

- Move dither replay to misc/ [`f6a9701df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6a9701df9ab2cabec688441e806e8712602dbfc)
