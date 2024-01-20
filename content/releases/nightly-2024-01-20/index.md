---
title: Nightly 2024-01-20
description: 
date: 2024-01-20T21:18:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-20/nightly-2024-01-20-linux.tar.gz
    name: nightly-2024-01-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-20/nightly-2024-01-20-mac.dmg
    name: nightly-2024-01-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-20/nightly-2024-01-20-windows-x64.zip
    name: nightly-2024-01-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-20/nightly-2024-01-20-windows-x86.zip
    name: nightly-2024-01-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 137861600
tag_name: 'nightly-2024-01-20'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

- changer ffcs counting for trigger groups and similar effects (they shouldn't) [`e9d91d8fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9d91d8faeccdf5a729f702b8f6114150f8c755d)

### Player

- lens unintentionally making enemies sometimes invisible [`111569113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11156911331ecd5d8a4d5b26dcbb434b4be02da3)
- Divine Escape particles sometimes flying in wrong directions [`d2472cceb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2472ccebf9443c6524ce97f440e3c694c0f9e9d)

### ZScript

- stale data in destructors [`6251b0f23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6251b0f233c26ad0c25dd3d1b6c24c172ebe9ffa)
   &nbsp;
   >scripted objects weren't clearing data used by the destructor when being cleared, leading to future objects referencing the stale data if they didn't have a destructor of their own to overwrite it. 
   >
- generic script item collect event fix [`f53af5295`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f53af5295324ed701191d5cab4ca0728315bc7e0)
   &nbsp;
   >Item Collect event will no longer be fired for items such as timeout items when they are *not* actually able to be collected. Due to timing changes, the "Combine when collected twice" now also occurs BEFORE the event. 
   >

# Misc.

### Editor

- fix some text, add divine escape help text for warp types [`1b058a4b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b058a4b78b9c346a50b4852c6fbac5631035450)
- clean up 'Door Combo Set' dialog/hotkeys and document them [`a4503c640`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4503c640801eb062d490ca7cdef66fc66b311b5)

