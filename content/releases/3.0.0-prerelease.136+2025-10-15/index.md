---
title: 3.0 Prerelease 136 2025-10-15
description: 
date: 2025-10-15T02:05:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.136%2B2025-10-15/3.0.0-prerelease.136%2B2025-10-15-linux.tar.gz
    name: 3.0.0-prerelease.136+2025-10-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.136%2B2025-10-15/3.0.0-prerelease.136%2B2025-10-15-mac.dmg
    name: 3.0.0-prerelease.136+2025-10-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.136%2B2025-10-15/3.0.0-prerelease.136%2B2025-10-15-windows-x64.zip
    name: 3.0.0-prerelease.136+2025-10-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.136%2B2025-10-15/3.0.0-prerelease.136%2B2025-10-15-windows-x86.zip
    name: 3.0.0-prerelease.136+2025-10-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 254561174
tag_name: '3.0.0-prerelease.136+2025-10-15'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- new boxes to enter timed warp time in minutes/seconds [`f8b829b1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8b829b1b0bd4c71be512d42bd5122bdccd443c6)

### ZScript

- log error when GetPixel input is out-of-bounds [`408947a3c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/408947a3c6b5f5b3635e886d43be9893c8fd817d)
- npc->Flags[] array to access more enemy flags [`1a38b0065`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a38b0065eff93ba1ae235f45a10513689941758)

# Bug Fixes

- prevent rare crash when destroying null midi [`ab9ad2fc8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab9ad2fc84b5ba56b2cac094ef962fba063057ad)

### Player

- prevent crash from snapshot on title screen [`f059a733b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f059a733b4d6f4df9edd928d172e06b2fc0a62cb)
- prevent trigger change effect resulting in invalid combo [`e7669e21c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7669e21c13eaac1b2a438de64ad06704a32dfab)
   &nbsp;
   >When the combo change for a trigger effect produces a combo with a bad ID (negative or larger than the max), the engine would crash. Now, the resulting combo is clamped to the valid range. 
   >
- subscreen widget item conditions not obeying bunny / dmap disables [`fbb96e5f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbb96e5f433030631448b8e3fd0b06317fcdbf1e)
- include portal refs in has_implemented_register_invalidations [`b7f6061cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7f6061cc3a7aed1aeb3081a2cb5d5db8ea9ad6f)
- don't always force background on passive subscreens [`89447e378`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89447e37841e4ba6d7871c97362270ba417f5b12)
   &nbsp;
   >When in a scrolling region but not using an extended height viewport, a solid background is drawn below the passive subscreen to hide the portion of the region underneath it. However, that background was also being drawn while opening the subscreen, which was unintended. 
   >
- prevent rendering passive subscreen twice in extended height mode [`4e0b8f101`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e0b8f1019253955c4d3a8f8073d918f96048d3c)
- allow background to be transparent in active subscreens [`254641437`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2546414377dbcfa429747ee1c8480041ad35abd8)
   &nbsp;
   >When the compat QR "Old Engine Subscreen Quirks" is off, a bug caused the background for active subscreens to never display the playing field even when the subscreen did not have a solid background. 
   >
- use correct bitmap for new drawing code ffcs [`014e585d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/014e585d022c6a1457b638c7a9edd4c86b4fa297)
   &nbsp;
   >Regressed recently in 3.0.0-prerelease.132+2025-09-09 (3ee61b00). 
   >

### Editor

- handle all filesystem errors when creating quest package [`e49d6a4d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e49d6a4d557043cbe8aeca56701f578c4f50f188)

### ZScript

- load initial screen before onSaveLoad global script [`cf7b17d3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf7b17d3ee599790db2d72c64c5d5c96a3637998)
   &nbsp;
   >When the "Use Old Global Init and SaveLoad Timing" compat QR is off, the onSaveLoad global script ran before the initial screen even loaded. That made accessing anything on `Screen` do the wrong thing.  
   >
   >Now, this global script can access the initially loaded screen. 
   >
- @deprecated comment tag properly works on non-internal functions [`00b73a3f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00b73a3f92f00e8a8defc715ff6ff4b19a1d029b)
   &nbsp;
   >Used to mark some old std_functions as deprecated 
   >

# Refactors

### Player

- skip zasm optimizer for scripts with 1 instruction [`d8486cd98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8486cd98a131be68e7bd77f643ecc391b55fea4)

### ZScript

- remove some unused constants [`81d7dc11d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81d7dc11d3030f7fac0176fe50c599430fadbcad)
- remove some unused bitmap stuff [`9155d047e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9155d047e4474c55f8566bc8d3c2fc3516f113ab)
- remove unimplemented Hero->SetItemA/B [`c2138aca9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2138aca9c75f7cca82f1196dc8cf2f0c7c874a9)
- remove unimplemented weapon pattern stuff [`84a996bc0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84a996bc07e9c06ccaec7f6be159baa14d35ed8e)

# Tests

- update z3.qst active subscreen to have transparent background [`585a940bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/585a940bc79b19085a817bbc030e05bf9bc5d6d2)
