---
title: 3.0 Prerelease 188 2026-05-17
description: 
date: 2026-05-18T02:23:15Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.188%2B2026-05-17/3.0.0-prerelease.188%2B2026-05-17-linux.tar.gz
    name: 3.0.0-prerelease.188+2026-05-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.188%2B2026-05-17/3.0.0-prerelease.188%2B2026-05-17-mac.dmg
    name: 3.0.0-prerelease.188+2026-05-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.188%2B2026-05-17/3.0.0-prerelease.188%2B2026-05-17-windows-x64.zip
    name: 3.0.0-prerelease.188+2026-05-17-windows-x64.zip
    platform: windows-x64
prerelease: true
id: 324023014
tag_name: '3.0.0-prerelease.188+2026-05-17'
channel: '3'
tags:
  - releases
---


# Features

- New QR Rerolled Drops Always Roll 'Nothing' [`77dd74570`](https://github.com/ZQuestClassic/ZQuestClassic/commit/77dd74570a25866358e275367b1ece03630253c1)
   &nbsp;
   >This works alongside the other smart drops qrs to help rebalance dropsets. If set, any drops that would be 'rerolled' always roll 'Nothing' instead, keeping the odds of each drop the same under all circumstances. This allows simply removing drops from the pool when they are unneeded, instead of requiring them to be rerolled into other drops. 
   >
- `Partial Consume` combo trigger for counters [`80d0b6022`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80d0b60228a626548a1508868ecad4116cd71104)
   &nbsp;
   >allows the `Consume Amount` to occur even if you don't have enough of it Useful with `...Is Percent` for ex. `Consume 100%` to empty a counter 
   >

### Player

- Minimap 'visited' rooms use visited state instead of charted [`e21f55a9f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e21f55a9fba2bb5203b6f3774a1e8dc822f2b200)
   &nbsp;
   >Minimaps will use the Visited screen state (saved per-screen) rather than the Charted state (saved per DMap) to determine if the room has been visited now. QR for the old behavior will be enabled for old quests. 
   >
- (QR) allow jumping while charging charge attacks [`855e635a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/855e635a2e324b04bcec9266d557995bf3ddae76)

# Bug Fixes

- AltGr key combinations [`8955bf8c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8955bf8c3e3fbb697ef3bc6ebd176e3c58a48b8b)
- Preserve scroll position in listers [`fe7537c84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe7537c8469ef1e9fed8abe9db1d159646edef5c)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1497521931979853854 
   >

### Player

- Prevent infinite loop in trig_trigger_groups [`9d742eafe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d742eafe281e4435f83cd86941e926e006c0594)
- Ffc solid pushing of the player stopping too soon [`f08695922`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f08695922852c6cd197524c7ac2918318e04b51d)
   &nbsp;
   >incorrect hitbox check was being used 
   >
- Landing/walking/standing combo effects not blocked by bridges [`8797a32f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8797a32f538e56a94d83b7cd2313fc5fe873f8e1)
   &nbsp;
   >this includes the general tab sfx/sprites, and the 'Land Here->' trigger. 
   >
- Various fixes for Bridge combos [`6c3056623`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c305662335b84bc5f82b27c00aea9cb1e59308e)
   &nbsp;
   >Bridges previously were not covering some things they should- this fixes many of them. Notably: Warp, Save, Step, Reset Room combos Win Game, Fairy Ring, Weapon-based placed/inherent flags Bridges above layer 2 for most things and possibly some more. Also made the code for handling bridge combos MUCH cleaner. 
   >
- Enemies that "ignore solidity" not working below them in sideview [`04fbcee20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/04fbcee20acdbf79a1d8a04ad49979c4e04e0e47)
   &nbsp;
   >The code for "is the enemy standing on a solid" was using entirely different code that didn't check this flag. Now it checks it, if "Use 'Scripted Movement' for engine movement" is also checked. 
   >
- Chests not checking all layers for Armos/`Chest->Item` [`f0db911da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0db911dac0affc4dd786f1842197c5277e6e254)
   &nbsp;
   >this caused chests placed on layers > 2 to open without giving you anything 
   >
- Subscreen condition issue related to current screen states [`c9bf2b436`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9bf2b436f2a1a768c2106481d2d42de4e0429c9)
   &nbsp;
   >if using -1 as the screen (indicating "current screen"), the wrong 'map' value was being used, checking one map lower. 
   >
- Quake hammer while jumping slamming into the air [`c4756842e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4756842e4e6a05e8582b526e9dd1515cf6ae437)
   &nbsp;
   >Now instead, the quake attack will not unleash until you land on the ground. 
   >
- Enemy weapons reflected on 4 way mirrors not hurting enemies [`a37ccdfd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a37ccdfd0c028af1d951e674b1322bd55a9cb519)

### Editor

- Use actual qst file code for export formats [`5b29f87b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b29f87b435f65eb0feb6aff19c19f47ab358e66)
   &nbsp;
   >The following export formats in the editor no longer use code separate from the main qst file code, which means these will no longer fall out of date as the qst format continues to evolve:  
   >
   >* .znpc
   >* .ztileset
   >* .zdoors
   >* .zcombo
   >
- Respect "New Darkness Trans Layer Stacking" QR in editor [`0947381b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0947381b59e891cbbc506f49ef902da4461f7c17)
- Tile editor rotations sometimes undone b/c of bad cache [`39d081158`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39d08115826eca44110447bb933d7d8e12c9d48f)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1497685063649726545 
   >

### ZScript

- Remove unimplemented `Audio->PauseCurMIDI()` and `ResumeCurMIDI()` [`2dfe60b70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2dfe60b70541860876ba7a3744db9326f3c4de9f)
- Show correct code location for script drawing errors [`7965b2e3b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7965b2e3b1341a4c194a069b9680d9311ccc392a)

# Build

- Check .git exists before installing hooks [`d070ac6fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d070ac6fa21fa3615d2be886272e94c2746efa9d)
- Skip .git requirement for generate_version_header.py [`3928b4cdb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3928b4cdb445b0952253f00caebef01b6a8926ef)

# Misc.

- Update discord python dep [`ec5e77dea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec5e77dea9a21307249ac8c53e3a320ad5c2f1cc)
- Remove debug info from changelog [`b62640612`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b626406121c358fc96119444073597b31f066a63)
- Add .cache to .gitignore [`cd2210350`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd22103503788fe2564852e40fa0ba10d667b7f0)
