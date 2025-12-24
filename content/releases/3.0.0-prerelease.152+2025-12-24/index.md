---
title: 3.0 Prerelease 152 2025-12-24
description: 
date: 2025-12-24T06:30:55Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.152%2B2025-12-24/3.0.0-prerelease.152%2B2025-12-24-linux.tar.gz
    name: 3.0.0-prerelease.152+2025-12-24-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.152%2B2025-12-24/3.0.0-prerelease.152%2B2025-12-24-mac.dmg
    name: 3.0.0-prerelease.152+2025-12-24-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.152%2B2025-12-24/3.0.0-prerelease.152%2B2025-12-24-windows-x64.zip
    name: 3.0.0-prerelease.152+2025-12-24-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.152%2B2025-12-24/3.0.0-prerelease.152%2B2025-12-24-windows-x86.zip
    name: 3.0.0-prerelease.152+2025-12-24-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 272641688
tag_name: '3.0.0-prerelease.152+2025-12-24'
channel: '3'
tags:
  - releases
---


# Features

- add dialog for inputing text [`1f927eee9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f927eee9346a62482769c071b29b04c98521211)

### Player

- multiple control schemes [`157e0bbff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/157e0bbff4be3085c1920312c3c39e0288fc6805)
   &nbsp;
   >You can now configure different schemes for keyboard/gamepad controls, and configure quests to use a specific scheme.  
   >
   >The dialog for binding controls has also been improved. 
   >

# Bug Fixes

- the counter percentage bar widget was drawing completely wrong rectangles [`caa206e9b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/caa206e9b8a2a9024d54dac0a20e6c5e10549d21)
- allegro5 render layers having uninitialized transforms [`389db9bab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/389db9babddf911b6166746f1bca2d894e6bdd13)

### Player

- properly account for player's position in trigger conditions when scrolling. [`aad55aa67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aad55aa674665d2190282f347623a33890c01632)
   &nbsp;
   >Should fix "On Screen Load" triggers reading the wrong position for proximity and X/Y coordinate conditionals, especially in regions. The position of the player AFTER scrolling will be used for the conditionals. 
   >
- player being able to be hit by certain damage sources while falling down a pitfall [`f5d68bffe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5d68bffe21546380c74259344a19951f02830d8)
- Whistle defense not respecting 'Ignore' behavior [`34b374fe4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34b374fe49c86e3a8ee25b99f22fecaa2a2c6c7f)
- generic scripts wrongly stopping on F6->Continue [`ba4c6cdaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba4c6cdaff2c21ee938691684e6ee6a500bb67ea)
- getting stuck on solid FFCs w/ new movement disabled [`0d65146a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d65146a87204469f214a919644e92366a0e0d1f)
- add base_scr field to rpos_handle_t [`f3682f7d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3682f7d11c6fe6a1ba38c2aa675af897610616e)
   &nbsp;
   >This enables getting the 0th-layer screen for all rpos_handles, even if it is not for the active region. 
   >
- triggers / shooters / etc not functioning on certain layers [`9451de106`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9451de10678fd980fde1009b4f56a49a5d8c917f)
   &nbsp;
   >layers that were not set up in zq, but interacted with via scripts, were being ignored when updating timers / shooters. 
   >
- 'Menu' gamepad button not activating the menu [`e9b624e4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9b624e4a05343b279b9923bbea171ad8666d8c5)

### Editor

- some textfields being hard to type in due to default digit count [`965be1beb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/965be1beb592ebd66402286bd400d3d2ae88c705)
   &nbsp;
   >some textfields would limit the characters based on the max value; but these would require you to backspace out a "0" before allowing you to type the full value, which is clunky. Now these fields will have an additional character space to account for a leading 0. 
   >
- combo trigger summary formatting errors [`1ae5ef4a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1ae5ef4a9bc73c2076872c02ba3197378b88c309)
- tile editor rclick options not marking qst changed [`f3d600868`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3d6008687966088f951ca2805d8b17abd24b8d2)

### ZScript

- printf/sprintf '%f' improperly ending in `.` instead of `.0` for integers [`046b4dd8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/046b4dd8e6904b1253bf2b8fede4113ccce1a5c4)

# Chores

- cleanup a lot of input code [`e3e4eb1db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3e4eb1db3fcc5769eb52e7e7efd0092612e226f)

# Tests

- include channel in the updated replay names for replay_uploads.py [`d862f3166`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d862f31669e7db96331de1216f1d3024b6c85488)

# Misc.

- add allegro 5 config handler [`29bce6e28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29bce6e28fb9ade52e51cd6e03dc679e40470f27)
