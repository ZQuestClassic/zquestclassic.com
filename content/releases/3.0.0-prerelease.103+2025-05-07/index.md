---
title: 3.0 Prerelease 103 2025-05-07
description: 
date: 2025-05-07T04:24:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.103%2B2025-05-07/3.0.0-prerelease.103%2B2025-05-07-linux.tar.gz
    name: 3.0.0-prerelease.103+2025-05-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.103%2B2025-05-07/3.0.0-prerelease.103%2B2025-05-07-mac.dmg
    name: 3.0.0-prerelease.103+2025-05-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.103%2B2025-05-07/3.0.0-prerelease.103%2B2025-05-07-windows-x64.zip
    name: 3.0.0-prerelease.103+2025-05-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.103%2B2025-05-07/3.0.0-prerelease.103%2B2025-05-07-windows-x86.zip
    name: 3.0.0-prerelease.103+2025-05-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 216948760
tag_name: '3.0.0-prerelease.103+2025-05-07'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- add `ReadBitflags` and `AdjustBitflags` helper functions [`908e9c6e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/908e9c6e0d39ce1060f7eece0963496db64c1200)
- add `Flag[]` to `Screen` and `mapdata` [`74e5a2e9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74e5a2e9ca8ba83860f0d15278eb278c2cf17261)
   &nbsp;
   >The new `Flag[]` variable is a boolean array of all the flags associated with a screen. This replaces `Flags[]` and `EFlags[]`, which are more complicated since they grouped bitflags by category and required bitwise operations to access individual flags.  
   >
   >```
   >// Old
   >bool v = Screen->Flags[SF_ROOMTYPE] & (1 << SFR_SIDEVIEW);
   >// New
   >bool v = Screen->Flag[SFL_SIDEVIEW];
   >```
   >
   > Because of their complexity, `Flags[]` and `EFlags[]` never supported writing to it. `Flag[]` makes that possible now.  
   >
   >Also removes `GetMapscreenFlag` and similar helper functions, as usage was low/non-existent and `Flag` totally replaces it. 
   >

# Bug Fixes

- use correct zscript runtime version after saving older quests [`c7fe1d99c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7fe1d99c489f6f09853734df86d7e4984523f7e)
   &nbsp;
   >https://discord.com/channels/876899628556091432/1368485306394738718 
   >

### Player

- don't skip saving game in test mode [`f54e8a9bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f54e8a9bd0385f7f4d722052318921a6072c3da4)
   &nbsp;
   >Methods of saving the game other than directly via them menu (such as autosave on screen entry, or via scripting) were not saving any data when in test mode. Now, continuing or otherwise reloading the current test mode session will persist those saves. 
   >
- don't stop recording in test mode on quit [`e13e29f8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e13e29f8eb28e6a62581136eb48368765f26e107)
   &nbsp;
   >Only the "Continue" option correctly continued recording when ending the game in test mode, while the other options would end the recording and start a new one. Now, it continues as one recording.  
   >
   >"Game > Reset" still restarts the recording in test mode. 
   >
- lifted weapon not disappearing on death [`d7869fc04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7869fc0452d70aff8c797ae96bad62bccb31d92)

### ZScript

- incorrect type being used when accessing some internal arrays [`29b4ea0c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29b4ea0c40991b91631310811621d544b09bedae)
   &nbsp;
   >Regressed in c6f3f00  
   >
   >https://discord.com/channels/876899628556091432/1295149938031722547 
   >
- `lweapon->isValid()` now accurate for lifted weapons [`62a494305`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62a494305b682a58c83104b47145245698f56d6f)

# Documentation

- add example for passing objects w/ InitD [`14d28d2db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14d28d2dbca50f67e6efad720d9486254328cd46)

# Refactors

- replace mapscr `enemyflags` with `flags11` [`4201573d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4201573d4f2fa2e4c0ef9e65e7d8f9bdcb228c6f)

# Misc.

- validate given range in bisect script [`849b393c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/849b393c5237015b55135733b378b087272ed2fa)
- add a couple commit rewords [`8ec4bfa9a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ec4bfa9ac969b11eb9b24bd0f8882d7be519a46)
