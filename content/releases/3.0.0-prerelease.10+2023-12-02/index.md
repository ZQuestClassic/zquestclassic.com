---
title: 3.0 Prerelease 10 2023-12-02
description: 
date: 2023-12-02T23:02:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.10%2B2023-12-02/3.0.0-prerelease.10%2B2023-12-02-linux.tar.gz
    name: 3.0.0-prerelease.10+2023-12-02-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.10%2B2023-12-02/3.0.0-prerelease.10%2B2023-12-02-mac.dmg
    name: 3.0.0-prerelease.10+2023-12-02-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.10%2B2023-12-02/3.0.0-prerelease.10%2B2023-12-02-windows-x64.zip
    name: 3.0.0-prerelease.10+2023-12-02-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.10%2B2023-12-02/3.0.0-prerelease.10%2B2023-12-02-windows-x86.zip
    name: 3.0.0-prerelease.10+2023-12-02-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 132395504
tag_name: '3.0.0-prerelease.10+2023-12-02'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- set volume correctly when music changes with only fading in or out [`b30434eb0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b30434eb0b524e60e2b3f071f8ae1a2eb9c6da5e)
   &nbsp;
   >For example, if the new music has a fade in frame duration of 0, and the old music has a fade out frame duration of >0, then the new music would incorrectly have its volume stuck at 0%. 
   >
- menu bar unaligned with dropdown due to menu using int scaling [`237ac670e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/237ac670e5ab7cc730154129bc24a0769a158647)
- Swim speeds not being saved to save file [`02beb5d87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02beb5d87ef1a12a163f40422106cf8e08d1ac8e)

### Editor

- 'Scroll to Combo' on screen rclick being offset [`9e831d7fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e831d7faf0fd87d4950fd961ed00009ef3481ea)
- greyed out pasting in string list [`887229b74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/887229b74dfbbd0d4a46774f2473183fea37fee4)
- Crash on changing map count [`b79531785`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7953178558447d5f96428d254c21e4a3cdc5583)

### Web

- use zc-data.nyc3.digitaloceanspaces.com for now [`78e7c8441`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78e7c84413133c3188eb22c648b0d3fdd0e4b3ff)
- "Copy URL" in player now uses correct test params [`6899e872a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6899e872a992eb56da2005b35e484b8b50740d25)
- sync fs when writing save order txt file [`b38097bd6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b38097bd64195a4648b66bfe7d7b514ab23f1f25)
- quick save creation link working again [`d030fe7c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d030fe7c580f2636693b4c1fc29665bac6ef8892)
   &nbsp;
   >The `quest` gamedata field was inadvertently set to 0 because the save file was prematurely selected before being saved for the first time, which prevented anything in `saves_do_first_time_stuff` from sticking. 
   >

# Documentation

- document DrawTile '-777' rotation behavior [`de7cccefe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de7cccefe6e7fd02dce80ef1808e78c367d81d3b)

# Refactors

### Player

- remove unused volume code in read_saves [`c4000cb70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4000cb704e95de0af3932e768c8d8e0edbecb71)

### ZScript

- optimize script lookup by name [`d13fb8b04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d13fb8b040410a532988438af67500cc09042eba)

# CI

- bump build cache so 2.55 branch doesn't conflict [`75da202d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75da202d66b1f3d3e1ad37ca44a6374756ad0a6e)
