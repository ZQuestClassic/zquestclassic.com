---
title: 3.0 Prerelease 83 2024-12-29
description: 
date: 2024-12-29T03:37:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.83%2B2024-12-29/3.0.0-prerelease.83%2B2024-12-29-linux.tar.gz
    name: 3.0.0-prerelease.83+2024-12-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.83%2B2024-12-29/3.0.0-prerelease.83%2B2024-12-29-mac.dmg
    name: 3.0.0-prerelease.83+2024-12-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.83%2B2024-12-29/3.0.0-prerelease.83%2B2024-12-29-windows-x64.zip
    name: 3.0.0-prerelease.83+2024-12-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.83%2B2024-12-29/3.0.0-prerelease.83%2B2024-12-29-windows-x86.zip
    name: 3.0.0-prerelease.83+2024-12-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 192600304
tag_name: '3.0.0-prerelease.83+2024-12-29'
channel: '3'
tags:
  - releases
---




# Features

- subscreen counters can have separate color when "full" [`6c0d37c8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c0d37c8b31b75d416c2d6fb9d8d38de4e4f01f2)

### Editor

- upgrade sprite data list dialog [`383b5d34a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/383b5d34a6d33963e0a0caef3f6ff2c1c49d920b)
- Item animation previews now preview 'flash' [`54b132190`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54b132190168fc1a0e23b98114329527c0fa5419)

### ZScript

- `@Increment` annotation for enums [`43003ca8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43003ca8c01c0e24c5517beaf70fc7058d3d0ff9)
   &nbsp;
   >Allows manually setting a value for the enum to increment by for each value 
   >
- allow trailing commas in enum/array body declarations [`43e977bd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43e977bd04113da93dcec70a273c7ec7b63b1aa2)

# Bug Fixes

### Player

- show hero position in minimap for most special screens [`760a5613d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/760a5613db65cf3a4f5f219c7d18682fb401043e)
   &nbsp;
   >In the original Zelda, the dot in the minimap rendered even in special screens, except for dungeon passageways. ZC was never rendering for any special screens. Now, even item cellar / guy special rooms will render the dot on the screen the player came from. 
   >
- update dmap charted state more reliably [`120211bd9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/120211bd9cf1d64dee2bf0c90fcab30edecb3c2d)

### Editor

- typo in subscreen gauge piece 'Units per Frame' help text [`f01d3e28a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f01d3e28a69d716b501dccbc81e07274cfd11607)
- crash on importing combo aliases [`e98900c88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e98900c8821d18320607969ca539b574bda5c7ea)
- 'delay' animation preview was calculated wrong [`b9098a92f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9098a92fbab4c5e2f3361e26f98c961510e9118)
- initial selection being wrong when lister isn't alphabetized for item lister [`2b446c647`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b446c6470eb15466b5722b84b0f0170c403a9d2)
- item editor list showing flash cset as a high cset number in the info preview [`6a9398a43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a9398a439ef2a714e6e3457c01d2875652d76ba)
- item square preview not showing for item 0 [`36a2dd9c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36a2dd9c8540b4535039898b2e1ef36fec5e63a3)
- item 'flash' not previewing on main screen [`092acc7e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/092acc7e359c3bd8397bc4c18f931430dcaa80d2)
- remove extraneous `String, but guy is (none)` warning [`39850f675`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39850f675f033d5fe119f02078bba89be321e55f)
   &nbsp;
   >Due to various new features, this warning is no longer valid,	as there are reasons to have a string with no guy, ex. Signposts 
   >

### ZScript

- correct broken clipping of draw commands in some cases [`f8fed7be8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8fed7be80fcc3ff3105a4146ba893f3bc531baf)
   &nbsp;
   >Some draw commands clip their contents based on whether the render target is the screen or a custom bitmap. However, the way this was tracked was broken, and resulted in all draw commands in the same batch following a single custom bitmap draw command incorrectly using the clipping bounds meant for just custom bitmaps. 
   >
- memory issue with @Increment annotation [`0e33147ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e33147eae54aeb6e92a948e5151e01c1935ec8a)

# Refactors

### Player

- improve performance of sprite::getUID [`1f5b811ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f5b811aeaf72405fd30239cc54b552ce5629421)

### ZScript

- remove usage of `qr_BITMAPOFFSETFIX` in `do_primitives` [`27fb9a85b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27fb9a85b02b5fa67a1d03e445be0831d2a4b4e7)
   &nbsp;
   >This doesn't break any replays but their presumably was a reason for this to exist. The z3 refactor had to remove this to implement something sanely, so remove it as a separate commit. If we get a bug report about an old quest breaking because of this, we'll be able to more easily bisect.  
   >
   >added: https://github.com/ZQuestClassic/ZQuestClassic/commit/e6e5ec8d94114c2b67648f168b14f7c2b920ed1b turned to QR: https://github.com/ZQuestClassic/ZQuestClassic/commit/94ba25a207c7ff6d17f046ad8816cf58bf94aab3 recent discussion: https://discord.com/channels/876899628556091432/1120883971950125147/1319765136679895091 
   >
- rename `Game->LevelStates[]`/`Game->GlobalStates[]` [`ff5b40838`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff5b40838c0f2132d58bcc95e01feb0c02a773ec)
   &nbsp;
   >previous names `Game->LSwitches[]`/`Game->GSwitch[]` are deprecated 
   >
- add a few functions in preparation for z3 regions [`7d0e62e6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d0e62e6a15d45139561f72a9a95dcadff92a061)
   &nbsp;
   >Game:  
   >
   >- `mapdata LoadTempScreen(int layer, int screen)`
   >- `mapdata LoadTempScreenForComboPos(int layer, int pos)`
   >- `mapdata LoadScrollingScreen(int layer, int screen)`
   >
   >
   >&nbsp;
   >
   >Screen:  
   >
   >- `ffc LoadFFC(int screen, int index)`
   >- `void TriggerSecrets(int screen)`
   >
- make `ComboAt` internal as an optimization [`777571531`](https://github.com/ZQuestClassic/ZQuestClassic/commit/777571531c2f919aea3d6639c52a0132b8b4fcab)

# Tests

### ZScript

- add enum.zs to test enum increment [`1e92394b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e92394b3b5ac409cde8492aa4c3c0d2149d4bc1)

# Misc.

### ZScript

- reserve some zasm variables for z3 [`d91cb262c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d91cb262ce704cce4e74b91ef622ffa45120ee1c)
