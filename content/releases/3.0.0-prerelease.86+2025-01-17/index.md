---
title: 3.0 Prerelease 86 2025-01-17
description: 
date: 2025-01-17T06:41:14Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.86%2B2025-01-17/3.0.0-prerelease.86%2B2025-01-17-linux.tar.gz
    name: 3.0.0-prerelease.86+2025-01-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.86%2B2025-01-17/3.0.0-prerelease.86%2B2025-01-17-mac.dmg
    name: 3.0.0-prerelease.86+2025-01-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.86%2B2025-01-17/3.0.0-prerelease.86%2B2025-01-17-windows-x64.zip
    name: 3.0.0-prerelease.86+2025-01-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.86%2B2025-01-17/3.0.0-prerelease.86%2B2025-01-17-windows-x86.zip
    name: 3.0.0-prerelease.86+2025-01-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 195274701
tag_name: '3.0.0-prerelease.86+2025-01-17'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- Allow '_' to be used as a spacer in numbers [`60d0a6102`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60d0a61021f853b9e7f400a99c2b33bc5ba09f6e)
   &nbsp;
   >Ex. 100_000 == 100000, 2_147_483_647L = 2147483647L, 0b10_10_10_10 == 0b10101010 
   >

# Bug Fixes

### Player

- off-by-one error in y-position world bounds for a few hero attacks
   >&nbsp;
   >Relevant changes:
   > - fix(zc): more off-by-one errors [`9eaa476af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9eaa476af3a431b57ad1ce4eb406ba0daed1ea25)
- layers not showing revealed secrets in map view [`2502d11cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2502d11cd1a5ba400baab46ffba49371bf2bab9d)
- F5 map snapshot works again [`f371af183`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f371af18396ab5bd6571b9b64dbef21376c648ef)
- check screen validity in map snapshot [`6059b48a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6059b48a61925c19ae1156021d8c1c6a17999121)
- [mac] restore ogg support, add test to ensure in future [`caa5da13c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/caa5da13cf0a7e1645ee55ae9fbf7cc59fc562e6)

### Editor

- 'BtnCounter' subscreen widget ui was crunched [`507260995`](https://github.com/ZQuestClassic/ZQuestClassic/commit/507260995101b623ec1622c75598a80113c0d5c6)

### ZScript

- keep modifications made during last frames before scrolling [`02ee3b39e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02ee3b39e29c21fbb5f0a55d3ec277849f2f89aa)
   &nbsp;
   >When scrolling between screens, scripts can run for a few frames just before scrolling begins, but modifications to the temporary screen were not persisting during the actual scroll. 
   >

# Tests

- add nargads_trail_crystal_crusades/ffc_carryover.zplay [`0a7bfc107`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a7bfc107747e4ef1077be86a10102178dc6b25b)
- in compare report, select show only unexpected frames by default [`d7243ded8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7243ded81a6b0f74265f9a304f40653ded439cd)

# CI

- correctly use triggering branch for compare discord thread name [`bb171fe16`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb171fe161b5defa12917ada013459e0ed808588)
- upgrade to python 3.12.8 [`12b1fa654`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12b1fa6541c20cea165e22259cb10d142721013d)

# Misc.

### Player

- log link to docs.zquestclassic.com [`71295130b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71295130bc0f98e02803342aed1fbe0781c7af7c)
