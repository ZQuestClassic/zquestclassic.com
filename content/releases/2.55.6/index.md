---
title: 2.55.6
description: 
date: 2024-09-09T01:57:54Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.6/2.55.6-linux.tar.gz
    name: 2.55.6-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.6/2.55.6-mac.dmg
    name: 2.55.6-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.6/2.55.6-windows-x64.zip
    name: 2.55.6-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.6/2.55.6-windows-x86.zip
    name: 2.55.6-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 174041482
tag_name: '2.55.6'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

- configurable charge step for enemy rope walk style (#953) [`f01c2d522`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f01c2d522e727570d7c088cb945115619aa581c4)
   &nbsp;
   >If "Walk Attr." (aka misc attribute 10) is >0, enemies with the "Rope" walk style will use that custom value for the charging step. 
   >
- use allegro 5 for DUMB tracker audio (mod, it, s3m, xm) [`c8c5d3569`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c8c5d35697bc42c95bccf29bd898d03ffe57d920)
   &nbsp;
   >The listed tracker formats now support setting loop points in the DMap Music tab, including setting the speed / position in ZScript. Note, the only enhanced music formats that do not support these features now are: spc, gbs, vgm, gym, and nsf.  
   >
   >This also happens to fix an issue where tracks that have builtin loops were incorrectly playing silence before looping. 
   >
- support delete keyboard shortcuts for most text controls [`e6a3ff822`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6a3ff8228d170f733ea632d953762dfa7aa0521)
   &nbsp;
   >* Ctrl+Backspace (Mac: Opt+Backspace) - deletes from cursor to next word
   >  boundrary
   >* Alt+Backspace (Mac: Cmd+Backspace) - deletes from cursor to beginning
   >  of the line
   >

# Bug Fixes

- improve key input latency by simplifying d_vsync_proc [`cbf5f0eb6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbf5f0eb6eb64055ad9adea78c7b9347ebb7d80a)
- call allegro_exit before exit to avoid rare hang seen on linux [`d9b0b8d67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9b0b8d670f7580bcb1aa0eafeb272e2d4d1f0df)
- generate correct version string for 1.92 quests [`24de952ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24de952eea874022df423dc06745ef1dfe10d1c5)
- ctrl+a,c,v work again in text fields [`4280a7ef5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4280a7ef597b948e3e7918233d2ff082b7c11fd6)
- use correct conversion from 6-bit to 8-bit colors [`db551f976`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db551f9765376ada4dedfb47925a94f775fdc073)
   &nbsp;
   >Multiple places converted 6-bit colors to 8-bit by just multiplying by 4, which is wrong (ex: 63 * 4 = 252, but 255 is expected). Now we use a lookup table. This fixes:  
   >
   >* The hex color shown in palette and tile editors
   >* various components drawn in the editor (like the minimap)
   >* exporting jpg images
   >
- prevent crash when deleting all text in some input fields [`b492be6b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b492be6b32949e3e319b2d371493938a4a949629)

### Player

- Damage combos with Custom Damage not working on FFCs [`cdf6736b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cdf6736b539bbb3a5757de083a542a2e50d4580a)
- correctly restore sword/potion/triforce items with fairies in pre-2.55 quests [`0a5af9c70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a5af9c70fd82d85e34518556cdc8c780e0d6082)
- restore palette after wavy effect [`4c9bb4688`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c9bb46888ec9b7729aac89731bdef46baae6f95)
   &nbsp;
   >The wavy effect was leaving the palette slightly off what it should have been, which was making the colors slightly saturated until the next time the palette changed. 
   >
- do not ignore replay forever if save has not been played yet [`5315b9e8f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5315b9e8f3c78e70a813caae04aae1c75709bf26)
- draw decorations correctly during scrolling [`98ca34d88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98ca34d881cd4efda7a692283a432076421a32f5)
   &nbsp;
   >Some decorations (like combo sprites) are drawn without the correct offset during screen scrolling, and worse were not disappearing after the end of the scroll (not until its animation naturally finished). Now these decoration sprites are drawn correctly during scrolling, and get removed. 
   >
- lockblocks on layer 0 no longer ignored in cave dmaps if locked door present [`bacf7e3d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bacf7e3d96c5f0d47f005250819a7e45f31adf68)
   &nbsp;
   >Context: https://discord.com/channels/876899628556091432/1278165595321405554 
   >
- pause music when opening player data with cheat shortcut [`bf75a402a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf75a402aa1bf7579a14a5a7cbc44e13c76c13a7)
- avoid crash in Go To cheat by checking destination is valid [`03db97be2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03db97be2109dd03d9e6d28ba75f5f17940c7977)
   &nbsp;
   >This cheat dialog expects you to input the screen number before any DMap xoff is applied, which can result in directing the game to load an invalid screen and crash. Now the screen is validated, and the xoff is displayed next to each DMap in the dropdown. 
   >
- fire trail weapons glow in dark rooms, just like flames [`8b4b84d2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b4b84d2c3e8bb1b47acf00677a35db78b50520e)

### Editor

- prevent dmap editor crash when map is no longer valid [`3fdf19026`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fdf19026c83f1893574e0b9712f87048718173a)
- prevent various quest report crashes [`0be115688`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0be115688e03402b952e2007ba4e04bacd057847)
- set the default values for patra's (2 and 3) inner eyes [`5cba3160c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5cba3160c3874cfcd7a0570bda91cf482dfa652d)
- reduce latency on combo page paste [`35c4e18bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35c4e18bb0b0d42a85cfdd10962d513702d7884f)

### ZScript

- scripts no longer use wrong context after many sprites created [`1fe2717be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1fe2717bed05dfcf1af2f80c6eae5c696a6fad3c)
   &nbsp;
   >After 65536 sprites have been created without closing the player, the ID of subsequent sprites was too high for how the internal script engine stored the state for each script. This resulted in randomly using some other script's state, causing general mayhem. 
   >
- LoadDirectory always failing due to bad path validation [`6cad0f194`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6cad0f194a6d5b70e567dae76d6455c042fde064)

# Build

- upgrade to latest GME [`9cbfda0c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9cbfda0c3b27d843b79d0bc399aea90925085734)
   &nbsp;
   >https://github.com/libgme/game-music-emu/compare/6b676192d98302e698ac78fe3c00833eae6a74e5...05a2aa29e8eae29316804fdd28ceaa96c74a1531 
   >

# Refactors

- reduce amount of copying in readmaps [`f64f9497e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f64f9497ebc2d1cf3d34d2025369b350fd2ce7ff)
   &nbsp;
   >This makes loading yuurand.qst 21% faster (2445ms -> 1927ms) 
   >
