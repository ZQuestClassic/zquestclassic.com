---
title: 3.0 Prerelease 113 2025-06-24
description: 
date: 2025-06-24T05:01:55Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.113%2B2025-06-24/3.0.0-prerelease.113%2B2025-06-24-linux.tar.gz
    name: 3.0.0-prerelease.113+2025-06-24-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.113%2B2025-06-24/3.0.0-prerelease.113%2B2025-06-24-mac.dmg
    name: 3.0.0-prerelease.113+2025-06-24-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.113%2B2025-06-24/3.0.0-prerelease.113%2B2025-06-24-windows-x64.zip
    name: 3.0.0-prerelease.113+2025-06-24-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.113%2B2025-06-24/3.0.0-prerelease.113%2B2025-06-24-windows-x86.zip
    name: 3.0.0-prerelease.113+2025-06-24-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 227273789
tag_name: '3.0.0-prerelease.113+2025-06-24'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- prevent rare crash related to loading fake weapon script [`fafa5cba9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fafa5cba970453584766fcf419ef03fdf7e87cd0)

### Player

- clamp pos lookup by coordinates to world bounds [`dff0310dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dff0310dc50cb3a2d1a6e40bd90ae57ced527d16)
   &nbsp;
   >This should fix some crashes caused by the engine looking up combo positions outside the world bounds. 
   >
- add compat QR for rope enemy speed [`b6cff703a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6cff703a24b0bb92a90ca881f1f3aa1d9507dc8)
   &nbsp;
   >2.55.6 added the ability to configure rope enemy speed using misc
   >attribute 10. However, this broke some earlier quests, so now there is
   >a compat rule to suppress this new configurable behavior.
   >

### Editor

- ffc layer setting drawing incorrectly in the editor [`e741ee303`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e741ee303248ef428a881d433730f1c6fad93d5f)

### ZScript

- potential crash when accessing `Game->Suspend[]` out-of-bounds [`29aeada32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29aeada32d2405786f72644fb1c62fddbbd19dd9)
- fix getter for `combodata::TriggerFlags[0]` [`720890b71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/720890b71861577f0ae1afdfd9a890987a395f52)
   &nbsp;
   >Regressed recently in 56e9081 
   >
- `combodata::GenFlags[]` setter no longer broken [`be584a6e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be584a6e1081af3b83e844ebf619d92df76eef48)

# Build

- upgrade sentry to 0.9.0 [`9a75c5452`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a75c5452b9837bf6ac84a0441728e9e513ff422)

# Refactors

### Player

- change some save file debug asserts to runtime checks [`0185e3263`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0185e326319fe3334074b729d160e1ea922f7ca9)

### Editor

- minor code cleanup for cleaning up preview mode [`f0b9bc4eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0b9bc4ebd10d47a2f387279e9d3479b028b250a)

### ZScript

- remove `Screen->NumFFCs[]` and `mapdata::NumFFCs[]` [`330f82289`](https://github.com/ZQuestClassic/ZQuestClassic/commit/330f822898818eb81e4c92c1b86bd93db911bba2)
- remove `combodata::Expansion` [`43ac024d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43ac024d55475f5717b8cc29454c4703a6d3f881)

# Misc.

- attach screenshot to crash reports [`b288d84af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b288d84af1267729d4a39dc7c0f5005b86b3bddb)
