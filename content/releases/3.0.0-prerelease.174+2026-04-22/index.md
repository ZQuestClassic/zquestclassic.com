---
title: 3.0 Prerelease 174 2026-04-22
description: 
date: 2026-04-22T02:57:55Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.174%2B2026-04-22/3.0.0-prerelease.174%2B2026-04-22-linux.tar.gz
    name: 3.0.0-prerelease.174+2026-04-22-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.174%2B2026-04-22/3.0.0-prerelease.174%2B2026-04-22-mac.dmg
    name: 3.0.0-prerelease.174+2026-04-22-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.174%2B2026-04-22/3.0.0-prerelease.174%2B2026-04-22-windows-x64.zip
    name: 3.0.0-prerelease.174+2026-04-22-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.174%2B2026-04-22/3.0.0-prerelease.174%2B2026-04-22-windows-x86.zip
    name: 3.0.0-prerelease.174+2026-04-22-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 312091075
tag_name: '3.0.0-prerelease.174+2026-04-22'
channel: '3'
tags:
  - releases
---


# Bug Fixes

- Prevent rare crash when loading sfx name [`a99bd3dcc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a99bd3dcc0561b62e657bcea4df547c2da096562)
   &nbsp;
   >Regressed recently in 58486c3f4. 
   >
- Compat issues with quests before 2.53 related to owning mcguffin items [`a2ea6e441`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2ea6e441afef19ca02eec12145b0a26816c2d08)

### Player

- Melee weapons not working on ice [`40ee58d05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40ee58d051ec73ab8240ec73d39b64ddcdf14afe)
   &nbsp;
   >Regressed in recent commit fixing 'stun' on ice. The fix for 'stun' on ice ALSO fixed melee weapons *pausing you* on ice. A non-compat QR was added to restore the pausing on ice behavior, incase anyone DOES specifically want it. 
   >
- Newer Hero Movement buggy collision re: damage combos along the top of the screen [`4a1cacf4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a1cacf4a3627981699bef21f704eebd98af5220)
   &nbsp;
   >Hitting the corner of any solid horizontally was wrongly checking the TOP of the screen for damage combos. 
   >
- Initialize more global state on load [`48df2ca40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48df2ca4099b88d6a9f81a68abafb0e9f583a20d)

### Editor

- Use proper offset for dark room preview, high quality rendering [`bc17a4aa0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc17a4aa0f90c72f15f03f646b34bb3effdbcdb1)
- Prevent zoomed-out map view from showing out-of-bounds [`e660a63e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e660a63e5401fe801432df9751049469155f8647)

### ZScript Standard Library (std.zh)

- Change FixCoords to work in regions [`bce55e94c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bce55e94c2d0b06d7fc57a271f3adf4ae6d7761d)

### ZScript

- Add newlines missing in some error messages [`dc8ee68c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc8ee68c9ce55e27bd348d0c3873d389b41038fa)
- Add missing setter for NOACTIVESUBSC [`398f56df3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/398f56df34c9ca6b89942a8ec55fdc38496b7566)
   &nbsp;
   >Regressed in 09b087293. 
   >
- Prevent crash in own_script_object when sprite can't be found [`28a451716`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28a45171687249bb4dac1cbbc73e641949f7fbd7)
- Modifying the frequency of sfx via script [`2835d6be5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2835d6be5a2922a80585650a839e390bb5d4c598)
   &nbsp;
   >Was broken for .wav, and unimplemented for .ogg- now works for both. 
   >

# Tests

- Prevent rare crash in run_replay_tests.py [`0a2581ed9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a2581ed9543bfce445217861a2ec657559791a5)
