---
title: Nightly 2023-07-10
description: 
date: 2023-07-10T01:24:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-10/nightly-2023-07-10-linux.tar.gz
    name: nightly-2023-07-10-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-10/nightly-2023-07-10-mac.dmg
    name: nightly-2023-07-10-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-10/nightly-2023-07-10-windows-x64.zip
    name: nightly-2023-07-10-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-10/nightly-2023-07-10-windows-x86.zip
    name: nightly-2023-07-10-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 111563367
tag_name: 'nightly-2023-07-10'
channel: '2.55'
tags:
  - releases
---

# Bug Fixes

### Player

- use-after-free bug when picking up triforce [`424279031`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4242790310e425ff04f82ee4bffa869a1bc16926)

### Editor

- do not show guys in screen enemy selector [`28c47172e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/28c47172e8ba30dfed97afaf163c39c8e8669296)
```
  The first twenty enemy ids are reserved for guys, and can produce unexpected behavior when used as
  screen enemies. If a screen is using one of these enemy ids, the name was showing as "(None)" in the
  screen enemy list. It will now show "Guy - Do Not Use!".  The enemy selector list also will no
  longer show any of these enemy ids.
```

# Tests

- add ganon.zplay [`fbab82705`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fbab82705adf7427681a3490a86ed4511195f347)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-09-2...nightly-2023-07-10
