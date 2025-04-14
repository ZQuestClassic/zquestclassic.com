---
title: 3.0 Prerelease 99 2025-04-14
description: 
date: 2025-04-14T02:33:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.99%2B2025-04-14/3.0.0-prerelease.99%2B2025-04-14-linux.tar.gz
    name: 3.0.0-prerelease.99+2025-04-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.99%2B2025-04-14/3.0.0-prerelease.99%2B2025-04-14-mac.dmg
    name: 3.0.0-prerelease.99+2025-04-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.99%2B2025-04-14/3.0.0-prerelease.99%2B2025-04-14-windows-x64.zip
    name: 3.0.0-prerelease.99+2025-04-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.99%2B2025-04-14/3.0.0-prerelease.99%2B2025-04-14-windows-x86.zip
    name: 3.0.0-prerelease.99+2025-04-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 212102527
tag_name: '3.0.0-prerelease.99+2025-04-14'
channel: '3'
tags:
  - releases
---




# Features

- Pushblocks can "fall" in sideview gravity [`89adebef3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89adebef37ed9ace9eeeb8a1137518de91de7865)
- Add 'Layer' property to FFCs (ignored for 'Overhead' ffcs) [`5e270db77`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e270db7757e549673bcca07fce4d87fdefb2c18)
- add "screen load" combo trigger (#1080) [`4e750bc07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e750bc071187c4c9049e5081774496fc5259096)

# Bug Fixes

### Player

- more scrolling region dark fixes [`2839ff62a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2839ff62a615eaede2fadbf21fd492cb2d1316ac)
- combo trigger conditionals for dark/not dark no longer inverted [`664bedf36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/664bedf36632237ec9fb886509c49de3ade0e88c)
- adjust ffc offset when warp scrolling [`b6bda1588`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6bda15884a11f264008734bf7f7e0dfc354b0bc)
- reset y-offset for decoration sprites after scrolling [`e1b9bcc4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1b9bcc4c3edbca929e84f76b0f7c582bbb32058)
- improve playing field adjustment when scrolling between regions [`2060f64b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2060f64b62ba1c150e8f7f69b18ed021532f08bf)
- Icy Floor collision in sideview [`cb07f7ca5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb07f7ca5d6c40b2551ea954018d61de1c7d95a9)
   &nbsp;
   >Was checking the combo behind, rather than the combo below as it should for sideview. 
   >
- qr for strings on layer 6 timing fix [`10f7e39e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10f7e39e9ecbb5cdefe1c51d25c17504694ae58d)
- Push (Right, Many) only pushing once [`a3cd7723b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3cd7723bf674b9770d54253d2282e697a7a9579)
- use proper start screen after reset for test mode + recording a replay [`3456dbdec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3456dbdecf27df143e62f65186fedc3373019a0a)
- correctly apply qr_LAYER6_STRINGS_OVER_SUBSCREEN compat [`3f76ec9ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f76ec9ce8bc21b9b3cfba858e65c19452e711f3)
- prevent crash on `Game->Reload()` or instant reload [`4272d5d1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4272d5d1f804f0c85a98501754c58e581ea2e046)
   &nbsp;
   >Regresseed in 2.55.7 
   >

### Editor

- ensure Sword defense shows in enemy editor [`d757a3275`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d757a32753927b2bc341bfafb468a5597f1630ef)
   &nbsp;
   >Regressed recently in aab5659 (enemy editor refactor) 
   >

### ZScript

- prevent crash on Reset when object owns array of objects [`1f80b8255`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f80b8255cf2c49759bc8a2fab1cad386b4e0f9e)

# Refactors

### Player

- prepare do_trigger_combo to work for non-active screens [`457dbbd74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/457dbbd743ff0478df370c8f46fabb598e99cf1c)

# CI

- disable database.yml cron [`28d494c41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28d494c41263101b598f1e5ae0e085b0595615ea)

# Fixup

- some ffc drawing stuff missed in previous commit [`f3da169ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3da169ea04090ed715b5596995c6b5ba35235e0)
