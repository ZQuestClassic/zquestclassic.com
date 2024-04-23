---
title: 3.0 Prerelease 51 2024-04-14
description: 
date: 2024-04-14T12:10:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.51%2B2024-04-14/3.0.0-prerelease.51%2B2024-04-14-linux.tar.gz
    name: 3.0.0-prerelease.51+2024-04-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.51%2B2024-04-14/3.0.0-prerelease.51%2B2024-04-14-mac.dmg
    name: 3.0.0-prerelease.51+2024-04-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.51%2B2024-04-14/3.0.0-prerelease.51%2B2024-04-14-windows-x64.zip
    name: 3.0.0-prerelease.51+2024-04-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.51%2B2024-04-14/3.0.0-prerelease.51%2B2024-04-14-windows-x86.zip
    name: 3.0.0-prerelease.51+2024-04-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 151071380
tag_name: '3.0.0-prerelease.51+2024-04-14'
channel: '3'
tags:
  - releases
---




# Features

- 'Toggle Darkness' trigger flag (toggles current room being a dark room) [`ff6c8151e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff6c8151e9f96634bb483f69287f206c35978229)
- 'Req. Darkness' / 'Req. No Darkness' trigger flags; act as conditionals on a room being dark or not [`dae41c8c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dae41c8c720d4e61ef78577f5828a213f2946c90)
- Trigger flags relating to LItems (map,compass,etc) [`42b835781`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42b835781f8fa8ae1a86949ebd6bfcf4451f90ec)
- Trigger options relating to tinting the palette [`4917cea2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4917cea2d2c415692b66fd888a1cebca513ab268)
- Trigger options relating to changing palette and wavy/quake vfx [`9220affe4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9220affe4a769e738ed70e8668ad319f5b46f5a2)
- Trigger options relating to status effects and 'Push->' timing [`3ee3da857`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ee3da857388bfcad3fb65462f7eaf5cdae05484)

### Player

- 'Toggle Lights' cheat works on new dark rooms [`1f74bdc0a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f74bdc0a2c25e3972cb6e104914eaae85cfa5b4)

# Bug Fixes

- 'Screen->Lit' not compiling; now properly returns (and sets) screen's lit state [`8f50a32f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f50a32f5a85b3717494065106ff2e0a1c074e94)
- removed flag that was breaking mod playback [`5dd03e998`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dd03e9986bd84f53f955ed217826796b1ef7778)

### Editor

- warp dialog selector mishandling negative dmap offsets [`bc0c7ac8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc0c7ac8e105c4f16d02186b72e4aacc777af0fb)
- memory issue when moving/inserting tiles/combos [`3c72e3712`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c72e37128477a3cfae9e533f81c6966373ac2dc)

### ZScript Standard Library (std.zh)

- 'TRIGFLAG_' constants were off-by-one at a certain point in the list [`5e06d5629`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e06d56299e048c7b3aaa116f1a46bfc5b8c86be)

# Refactors

### Player

- reduce duplicated code for trigger conditionals
   >&nbsp;
   >Relevant changes:
   > - refactor(zc): reduce duplicated code for trigger results [`f20ddc1b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f20ddc1b4931f8a48f5779b1ba23e5e6bd5eec32)

### Editor

- re-organize the combo editor 'Triggers' tab [`53310a254`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53310a2541ee9ebd4c50d48c2de1b349659fc34a)

