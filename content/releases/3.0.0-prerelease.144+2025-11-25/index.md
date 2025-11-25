---
title: 3.0 Prerelease 144 2025-11-25
description: 
date: 2025-11-25T18:43:07Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.144%2B2025-11-25/3.0.0-prerelease.144%2B2025-11-25-linux.tar.gz
    name: 3.0.0-prerelease.144+2025-11-25-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.144%2B2025-11-25/3.0.0-prerelease.144%2B2025-11-25-mac.dmg
    name: 3.0.0-prerelease.144+2025-11-25-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.144%2B2025-11-25/3.0.0-prerelease.144%2B2025-11-25-windows-x64.zip
    name: 3.0.0-prerelease.144+2025-11-25-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.144%2B2025-11-25/3.0.0-prerelease.144%2B2025-11-25-windows-x86.zip
    name: 3.0.0-prerelease.144+2025-11-25-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 265247974
tag_name: '3.0.0-prerelease.144+2025-11-25'
channel: '3'
tags:
  - releases
---


# Features

- customizable save menus [`92641e623`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92641e62319aac56163a4ed0f3c1b6a8c5679e7b)
- trigger requirements for screen state/exstate (including other screens) [`ae5ef3317`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae5ef3317c1accdf80b86c41f5601123a6bbe022)

### Editor

- added 'Combo Pools' / 'Auto Combos' to 'Quest->Graphics' menu [`3181551a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3181551a2a35aa2ad08643752e1a1cbdcb6c6efc)
- ffc placement / rclick improvements [`21c410715`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21c410715ff6d9f0ba6666ae0095bf8d042fdea0)
- rclicking the map/screen shortcut bookmarks now clears them back to 1:00 [`fd1eb3468`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd1eb34689eb3930560f984f97f6c6416d1a1a2e)
- add 'Open Combo Page' to on-screen rclick menus [`f9ffce1e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9ffce1e1a825520eaa16f22d85f42eef45baaf6)
- upgrade 'Layers' dialog [`c0ab222c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0ab222c733ac05cb2285f052dbb214577674b60)
- upgrade "Freeform Combos" dialog [`7132bc16d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7132bc16de24d366f93bfb42f72aca9eb1f6bac5)
- upgrade Under Combo dialog [`02c727d15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02c727d155833ec92db824fc52c90986cf9b508f)

### ZScript

- update WarpEx to not use weird array parameter [`21390ba90`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21390ba907188f9ad8355d8fa060c2a63caa424b)

# Bug Fixes

- scrolling ui panes sometimes blanking out contents [`307f0a02d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/307f0a02d37de87976a3f74f9b27bdd0776826be)

### Player

- drowning despite walk-through-walls being enabled [`08a6a91a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08a6a91a3385e3f55c429bb623e752880edac441)
- active subscreen extra 8 pixels not drawing during page transitions [`e62ca0b5d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e62ca0b5db3dfa81ba3c8cb7e52bf2997f34ec77)

### Editor

- typo in epilepsy qr helptext [`8fdcbfe65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8fdcbfe65c1c911de2d445d13fb5d2dac8b37053)
- some bad hex format strings [`e9c970a92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9c970a929c92bd301037346efe64b5df427ca94)
- flickering in tile grab dialog [`b4cbbe59b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b4cbbe59bf2092a6a25ce2260b20e584743a62df)
- dmap import/export [`ac62fac65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac62fac65dac972a28c845284de0b0b8c63721e8)

# Chores

- remove some dead code [`de6bc0ca8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de6bc0ca8c16e5842332594ea3e4f458d8104f38)

# Refactors

- rename 'ssta' constants to 'ALIGN_' [`ca7a05419`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca7a054192fee859e718279fff41a386e49a4398)
- clean up undercombo dialog re: feedback [`d620bffe6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d620bffe6ece125dd605f55d7f082d4d02a15736)

### Editor

- redesign ffc editor [`fdd6917e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fdd6917e77fd4c8fce6fbd9440c2e7e0ec2aeb21)
