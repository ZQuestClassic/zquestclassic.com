---
title: 3.0 Prerelease 110 2025-06-14
description: 
date: 2025-06-11T19:37:27Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.110%2B2025-06-14/3.0.0-prerelease.110%2B2025-06-14-linux.tar.gz
    name: 3.0.0-prerelease.110+2025-06-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.110%2B2025-06-14/3.0.0-prerelease.110%2B2025-06-14-mac.dmg
    name: 3.0.0-prerelease.110+2025-06-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.110%2B2025-06-14/3.0.0-prerelease.110%2B2025-06-14-windows-x64.zip
    name: 3.0.0-prerelease.110+2025-06-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.110%2B2025-06-14/3.0.0-prerelease.110%2B2025-06-14-windows-x86.zip
    name: 3.0.0-prerelease.110+2025-06-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 225344183
tag_name: '3.0.0-prerelease.110+2025-06-14'
channel: '3'
tags:
  - releases
---




# Features

- multiple triggers per combo [`56e908128`](https://github.com/ZQuestClassic/ZQuestClassic/commit/56e9081285590f7494d1c37787b71ef515509dee)
   &nbsp;
   >- Each combo can have anywhere between 0-255 combo triggers. Only the
   >used triggers take up space (in memory or qst).
   >- The triggers are checked in order, so if the same combo has multiple
   >triggers with the same cause, they will run in the specified order.
   >- If in such a case, the combo is changed while there are still triggers
   >remaining, the extra triggers will NOT be executed- the execution halts
   >when the combo is altered.
   >- Editable string Label for each trigger, used in the display name in
   >the combo editor list
   >- Script access. The old access should all still work, accessing the
   >combo's *first trigger*. Access for new triggers uses the new
   >`combotrigger` datatype.
   >  - `Screen->TriggerCombo()` can specify trigger index
   >- the 'Only Gen Triggers' flag is now part of combos instead of
   >triggers, so has separate access (`combodata->OnlyGenTriggers`)
   >- `combodata->GetTrigger()` to get a specific trigger by it's label (where invalid names
   >safely return a null value)
   >
- Swords use second item editor sound for beam sound [`4c63cff50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c63cff50db63277bf45c7ead4f5767a7b759988)

# Bug Fixes

### Player

- some drawing commands ignore the `Toggle Transparency` combo animation flag [`b64679f4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b64679f4fcd6a225c7c603a3bcb893ec13c8d07b)
- clamp rpos bounds in for_every_visible_rpos_layer0 [`cdf949564`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cdf94956461f435a52dd4d752ec5e06940725035)
   &nbsp;
   >This fixes a crash when using lens in a scrolling region.  
   >
   >regressed 6b5e98d (z3) 
   >
- level/global triggers broken in recent multi-trigger change [`8ae76bf99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ae76bf99a3cdd236625d9930f0b8533871443b7)
- progressive item / item bundle related crashes [`a46983c4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a46983c4eedaa3204f0004af00a7bf8d8313a9d6)
- remove extraneous error log [`84e4821e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84e4821e3786ca3abc993314c9e70f842fb5b9a7)
- Screen ambient sound not stopping on screen scroll [`9ccbb44ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ccbb44ed01659c731d93433887d0515fc69a844)
- prevent softlock when enemy falls into pit after eating hero [`08d25c1de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08d25c1de47e02ed3851076544ea0f738581221a)

### Editor

- prevent crash in Combo Type Locations report [`5252872de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5252872de72c9df42f833365656648ed2720226a)
   &nbsp;
   >regressed in c1273e1 (probably) 
   >

### ZScript

- suspending ffc scripts no longer suspends screen scripts [`723d6e040`](https://github.com/ZQuestClassic/ZQuestClassic/commit/723d6e040d1c91ef74d6c11e7a8413cf21ca5c1e)
- use correct qr in compat rule from previous commit [`ea0bb3d7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea0bb3d7f6aa26fbc440c58fb47b592d4171ed09)

# Documentation

- remove ZScript_Docs.html [`33549f773`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33549f773c71a8562a5850447050c4d42c6c3f1f)
   &nbsp;
   >Now replaced by https://docs.zquestclassic.com/zscript/ 
   >

# Chores

- update replay_uploads_known_good_replays.json [`94665940c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94665940cebe37fc5bdafa69b01da3337c87ec0c)

# Refactors

### Editor

- Hero editor now uses zcgui [`9fa564302`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fa5643029637a066f430a14fdd27e2aa3c4a734)
- update door selector to zcgui [`35c95f6cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35c95f6cc8bdaf374cfef3bf06a4370e573a9cae)

# CI

- restrict who can publish releases [`d5139cbde`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5139cbdedd96cb58630788a6203a0d8513c0efb)
- generate correct filter args when making compare report [`783e310e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/783e310e9ad8fa137ee776f43f53a386416cd190)
   &nbsp;
   >If the folder structure changes between CI jobs, it was resulting in compare reports failing to generate.  
   >
   >Probably regressed in b6c9506 
   >
- set enableCrossOsArchive true for git checkout lfs cache [`1f910f09b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f910f09b9335361a02891fc0848a6b8c2f6d5a5)
- stop running ci for the same commit via push + PR [`f41d58374`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f41d58374851087680aeed9fa3c16154c6cc152b)

# Misc.

- add some changelog overrides [`17c873def`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17c873defd214ed3150d03a60e24415665e85378)
- strip GitHub PR number from changelog [`ab9ba8b5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab9ba8b5bdd75f94cb164910c091fa55862658a1)
