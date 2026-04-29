---
title: 3.0 Prerelease 178 2026-04-28
description: 
date: 2026-04-29T06:08:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.178%2B2026-04-28/3.0.0-prerelease.178%2B2026-04-28-linux.tar.gz
    name: 3.0.0-prerelease.178+2026-04-28-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.178%2B2026-04-28/3.0.0-prerelease.178%2B2026-04-28-mac.dmg
    name: 3.0.0-prerelease.178+2026-04-28-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.178%2B2026-04-28/3.0.0-prerelease.178%2B2026-04-28-windows-x64.zip
    name: 3.0.0-prerelease.178+2026-04-28-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.178%2B2026-04-28/3.0.0-prerelease.178%2B2026-04-28-windows-x86.zip
    name: 3.0.0-prerelease.178+2026-04-28-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 315048936
tag_name: '3.0.0-prerelease.178+2026-04-28'
channel: '3'
tags:
  - releases
---


# Features

- Spinning Tiles support '->ComboType Effects' and 'Only Gen Triggers' [`b42be7c9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b42be7c9e20af68b765bb7fa6850c043db09b1f6)
- Bouncing LWeapons [`8a0c9938f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a0c9938ff8433a82dd04cfda68e501f11804f22)
   &nbsp;
   >Set the bounce values in Weapon Data to allow a weapon to bounce when it lands on the ground. 
   >

# Bug Fixes

### Player

- Support regions for smarter screen scrolling [`1eafac2d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1eafac2d99ac08aa95d15d9a38739a64aa5d8e88)
- Apply "Broken 0-power BRang/HShot" QR for 2.55.14 [`b2b292f39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b2b292f39e3896249151ba8f52149b9858f3af56)
- Statue shooters / spintiles / etc not working properly with triggers [`4a03ce9b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a03ce9b260502370c0e9df8748085802122329c)
   &nbsp;
   >triggers changing combos wasn't calling `screen_combo_modify_preroutine()`/`postroutine()` 
   >
- Spinning Tiles not becoming the next combo [`df08eff63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df08eff634033e2aedf378ecc2e81de8e31c665f)
   &nbsp;
   >No idea when this initially "broke", or if it *ever worked at all*, but the help text says it is supposed to, so fixed it with a compat rule. 
   >
- Prevent soft-lock in whirlwind over water [`4a7e6da58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a7e6da5892e84023f406282ba88b9d0f1cc180b)
   &nbsp;
   >This regressed in 2.55.13 (b27da2ea2). 
   >
- Weapons not animating while lifted [`1ac7f07f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1ac7f07f66642a2f06c1deb1d862260ceea58ed4)
- Reset subscreen button clk on init/continue [`33e3bdf78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33e3bdf781b7022f7344bc822b06df3087c320b8)
- Sprite light radius ignoring hit offsets [`42fd29660`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42fd2966078c09ac4dc3b9b35dec56831c32a863)
- Statue shooters / spintiles / etc not working properly with exstate triggers [`1723d331d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1723d331d3fd0c67c2342c12e5ee788c973e8056)
- Apply some compat QRs properly for 2.55.14 [`4c38ab13d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c38ab13d9d61f54723d23d544a17cc7016bb396)
- Enemy dropsets not respecting new max items [`f69ba7c4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f69ba7c4bed691b06f63a65a546ffa824a49adf5)
- Auto Sidewarp combos not using the assigned Warp SFX [`aa672717d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa672717dc94577be87e060270e51a4e9b80ae7e)

### Editor

- Slope combo wizard using wrong attribute numbers [`aca28953a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aca28953aec00f0c06821638660b52f61975dbf6)
- Chest attribute help text listing wrong max item value [`887c0b8a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/887c0b8a008f216cc4cf795fdd2521b5db81797a)
- Grey out 'Default * Equipment' buttons for nonselectable subscreen widgets [`1da5e21b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1da5e21b1898dcea3c728df69c849bdbca9dcf7b)

### ZScript

- Off-by-one error in `mapdata::Data[]` [`2225ee3dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2225ee3dd1497da6454d23d582a19aa50bc24f66)
- `Hero->RespawnX`/`Y` bounding being too strict for regions [`0325b07b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0325b07b888dec06e07506af0adbb6a9fad9f70f)
   &nbsp;
   >When writing to these variables it bound to 240/160 X/Y. Now it *does not bound at all*, as it doesn't know the size of a possible region at the destination screen. 
   >
- Prevent crash on bad type cast [`1e5eb710f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e5eb710f1b9551da8e60b0f5c8fbb9724ed81cb)
- Remove unimplemented `itemdata::WeaponDrawZOffset` [`530c5f9aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/530c5f9aa8ee1987413d21b952c463f02930ba59)

# Chores

- Update replay_uploads_known_good_replays.json [`51d2b6759`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51d2b67596166244833344743f8ddbc14b7bbb0f)

# Refactors

### Editor

- Move 'Clear' buttons to be more intuitively positioned [`6eaf1682a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6eaf1682af9763a979c04692a78d8f02760c098e)
   &nbsp;
   >This affects the rclick menu of all InfoLister dialogs, and the button in the Door dialog 
   >

# Tests

- Ignore backups folder in test_optimize_zasm.py on windows [`ac7f0d70f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac7f0d70f72222c6314735f638de63dfc696e1e7)

# Misc.

- Fix split_replay.py, minor mistake from last change [`0959cc7ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0959cc7ec4286af5914432d169c6fbec0bf24ccd)
- Fix another mistake in split_replay.py [`fad222ee6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fad222ee66e74a458a3cf45c00fd83b05925359d)
