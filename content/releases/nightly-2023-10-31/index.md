---
title: Nightly 2023-10-31
description: 
date: 2023-10-31T06:15:41Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-31/nightly-2023-10-31-linux.tar.gz
    name: nightly-2023-10-31-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-31/nightly-2023-10-31-mac.dmg
    name: nightly-2023-10-31-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-31/nightly-2023-10-31-windows-x64.zip
    name: nightly-2023-10-31-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-31/nightly-2023-10-31-windows-x86.zip
    name: nightly-2023-10-31-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 127307826
tag_name: nightly-2023-10-31
tags:
  - releases
---



# Features

- Customizable sword tapping sounds (in Misc SFX and combo editor) [`b4eb8aa23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4eb8aa23b6de7183ed71500d721a17d8ea40179)

### ZScript

- 'Screen->GuyCount'/'mapdata->GuyCount' for read/write enemy respawns [`340d55b9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/340d55b9c112fc02b0b2acfbadd810863f0d5688)

# Bug Fixes

- set window title as early as possible to reduce flash of text [`d7312b9dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7312b9dc92ef0c5d58af77cc3728fa85c0a2b95)
- mark render item transform dirty when changing parent [`f59d8b314`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f59d8b314d8086055da5a737197ae29ec83911fe)
   &nbsp;
   >This bug resulted in the tooltip / highlighter being offset when the window size changes. 
   >

### Player

- titlescreen hp offset when hp_per_heart != 16 [`31f3840e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31f3840e4dd3b439d55161c2b764f05e0bed66ec)
- Lift 'Special Item' setting wrong state [`7215fd92d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7215fd92d4681574448b056ffc2541209c29dbdf)
- properly reset directory cache [`8cacad3d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cacad3d5c0534edbb3d56d949fdd5fc6f01ccb2)

### Editor

- mark tooltip dirty if text changes [`164f77d33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/164f77d3328d780327a95ed4a71456e5e91fe3ec)

### ZScript

- `Game->CurrentItemID()` being completely broken [`9fc212abb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fc212abb925f3ed4246bd428207033177a706d6)
- mark destructors of base classes as virtual [`29c39e15a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29c39e15a04d2b37b63618e7cc4a64c1c681a425)
- do allegro 5 init before a4 init in parser [`58e391f63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58e391f639d450e596ea62e72f74c4637354d53d)

# Build

- upgrade allegro [`d5de2ebbd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5de2ebbd1629c28051fe68df272a13b06f30488)
   &nbsp;
   >https://github.com/liballeg/allegro5/compare/652684327236dfd23dcf6bf433fa9975212106b5...11a6425cae646c592f3086cda5f8c339296135fb 
   >

# Refactors

- cleanup combo position handling, optimize spotlight code [`44cb8bb72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44cb8bb727a27738ba2964e1403b5f056a2611cb)
- cache config read for use_linear_bitmaps [`4c922be5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c922be5e5e0aca7a8b1a078d1ee470c541f8c55)

### Editor

- bah humbug! [`21ecb9203`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21ecb9203ba16363a1b0cc7e355ed8d6967d582c)
- remove pointless time code [`d0549a3ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0549a3edc4f9b352e8c3af2ef702837fd39e545)

# Tests

- add playground_ffc_changers.zplay [`c5f02cfb1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5f02cfb1d620c5f26f766c48bee742e09c25ebb)
- pass correct value for frame arg, which was breaking --update [`2cf6ae4c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cf6ae4c698d4baf5ef63d96f350d2792b2a87b6)

# Misc.

- update references to old program names [`9a3e56796`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a3e56796f87a1fa853bf4b228c0383c90d0f95c)

