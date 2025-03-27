---
title: 3.0 Prerelease 96 2025-03-27
description: 
date: 2025-03-27T05:35:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.96%2B2025-03-27/3.0.0-prerelease.96%2B2025-03-27-linux.tar.gz
    name: 3.0.0-prerelease.96+2025-03-27-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.96%2B2025-03-27/3.0.0-prerelease.96%2B2025-03-27-mac.dmg
    name: 3.0.0-prerelease.96+2025-03-27-mac.dmg
    platform: mac
prerelease: true
id: 208746457
tag_name: '3.0.0-prerelease.96+2025-03-27'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- set msgscr after scc wrap (z3 regression) [`29b5788b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29b5788b07ede183bc18fbf3d50f8a423cf972d0)
- crash when light trigger present without light source (z3 regression) [`df410d70f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df410d70fae19da39246a0c40bc375f01258420a)

### ZScript

- FileExists and Remove not using resolved path [`dd0885ff1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd0885ff10e7f623be132a8eb70322541a2552ff)
   &nbsp;
   >This regressed 7 months prior in 0480ad0. 
   >

### Web

- ?open quick save creation was crashing [`f849d653e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f849d653e9814754d79f5ad9a4d4d338c65e6e1f)
- prevent infinite loop, add some debug logs [`2d627159c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d627159c2943add49227b9703acea16def99edc)

# Misc.

- rename "channel" to "release_platform" for internal scripts [`6ac9ac692`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ac9ac6921583a973e325c5880c6b2b801f33629)
- make scripts/archives.py less difficult to use [`5e53c135a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e53c135a73d0742ee3217d482e8d566d32fe22e)
   &nbsp;
   >By adding "channel" arg to separate "main" releases from "2.55" releases. Also fix various issues. 
   >
