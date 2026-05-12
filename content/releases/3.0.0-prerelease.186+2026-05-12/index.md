---
title: 3.0 Prerelease 186 2026-05-12
description: 
date: 2026-05-12T08:59:19Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.186%2B2026-05-12/3.0.0-prerelease.186%2B2026-05-12-linux.tar.gz
    name: 3.0.0-prerelease.186+2026-05-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.186%2B2026-05-12/3.0.0-prerelease.186%2B2026-05-12-mac.dmg
    name: 3.0.0-prerelease.186+2026-05-12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.186%2B2026-05-12/3.0.0-prerelease.186%2B2026-05-12-windows-x64.zip
    name: 3.0.0-prerelease.186+2026-05-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.186%2B2026-05-12/3.0.0-prerelease.186%2B2026-05-12-windows-x86.zip
    name: 3.0.0-prerelease.186+2026-05-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 321513984
tag_name: '3.0.0-prerelease.186+2026-05-12'
channel: '3'
tags:
  - releases
---


# Features

- Enemy flag for disabling enemy contact damage [`fbeb93a5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbeb93a5ca0598af6098739efadb747ec433070c)

### ZScript

- `ffc->Trigger()` [`93d080739`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93d0807399121989698578927379d97e8361edff)
   &nbsp;
   >allows scripts to trigger FFC combo triggers similar to 'Screen->TriggerCombo()' 
   >

# Bug Fixes

- Add runtime SSE2/SSSE3 detection and fallbacks [`67489e7fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67489e7fa09f880d4a2278639d1f832a5b428ffc)
   &nbsp;
   >2.55.12 added fast-path code for some tile draws, which required CPUs
   >made in at least 2007 or later. Older CPUs would crash when executing
   >these unknown instructions. Now, the tile drawing code checks if the CPU
   >supports these instructions, and if not uses the slower drawing code.
   >

### Player

- Ensure save+cancel works in custom save menu [`7ce4c277b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ce4c277b7593a8904d1d69871b6f3c82a36fc01)
   &nbsp;
   >Regressed recently in 790b083. 
   >
- Sideview drowning softlocking the player forever sometimes [`379a0d4d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/379a0d4d2d7a7eaa42cef12d5053670b3e864b3d)
- Skip title screen when pressing modifier keys [`fe070efb4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe070efb4612c7c1eafc7f8521bb37f32651d61b)
- Remember select save file on quit [`314b8d410`](https://github.com/ZQuestClassic/ZQuestClassic/commit/314b8d41044e19e5d6785e1bb8fd6ee077d12cf2)
   &nbsp;
   >Regressed recently in 6eda1c5. 
   >
- `Hero->Immortal` not clearing on quest load [`2d66914a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d66914a7ca7a5047a243d2cbfc273ee220118b9)
- Per-quest controls resetting wrongly on Continue [`e5732d1b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5732d1b1c4eaf658d54249364753e34f76544a8)
- Enemy bad hitboxes for standing on the ground in sideview [`475426ce7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/475426ce79a269c4fb09101c2dd1f6e7e5d1f793)
   &nbsp;
   >Enemies with weird hitboxes may still have other problems, such as walking sideways through walls, because enemy movement code is super jank- though the `Use 'Scripted Movement' for engine movement` enemy movement flag seems to help with those issues. 
   >
- 'Save Point->Continue Here' not respecting regions or new save menus [`dc99fee50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc99fee5036cacb167e327a7d2c43942197ebf51)

# Chores

- Update replay_uploads_known_good_replays.json [`a4ddfee90`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4ddfee906632475a68ecfd16a0d42561284a72c)

# Misc.

- Support multiple ways to get 2.55 content in lint_zscript_versions.py [`2fb8d45cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fb8d45cb8256916f4fefaa986d367e53b367fd1)
