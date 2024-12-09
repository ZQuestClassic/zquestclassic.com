---
title: 3.0 Prerelease 80 2024-12-09
description: 
date: 2024-12-09T07:26:01Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.80%2B2024-12-09/3.0.0-prerelease.80%2B2024-12-09-linux.tar.gz
    name: 3.0.0-prerelease.80+2024-12-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.80%2B2024-12-09/3.0.0-prerelease.80%2B2024-12-09-mac.dmg
    name: 3.0.0-prerelease.80+2024-12-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.80%2B2024-12-09/3.0.0-prerelease.80%2B2024-12-09-windows-x64.zip
    name: 3.0.0-prerelease.80+2024-12-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.80%2B2024-12-09/3.0.0-prerelease.80%2B2024-12-09-windows-x86.zip
    name: 3.0.0-prerelease.80+2024-12-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 189665640
tag_name: '3.0.0-prerelease.80+2024-12-09'
channel: '3'
tags:
  - releases
---




# Features

- add enemy types to zinfo [`d2ed2627e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2ed2627e0205433686507050013a506bf3b92c1)
- lift glove flag to drop objects when hit [`73ceca28c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73ceca28c57b1ee000f3f4a89d09d904e90c3ae0)
- 'Cycle to Screen Undercombo' combo animation flag [`577e115bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/577e115bdd8423235b1c2f30d948a1bf88ac8446)
- add Misc SFX when the Hero lands on the ground [`57c43d98d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57c43d98d67d875752cefbdae0a6949e84637a39)

### Editor

- Check/Uncheck/Toggle All buttons for checklist dialogs (ex. adv paste) [`6d35395d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d35395d3b4c65376982ee15341144193b2c9920)
- add 'Alphabetized' checkbox to basic listers (item,enemy,sfx,midi,subscrwidget) [`0a10202e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a10202e225588745563a00554910ac178a8e316)
- clean up `Quest->Audio->MIDIs` lister [`c4a6d8b72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4a6d8b720e294688fa688828f276e2caf5c1584)
   &nbsp;
   >Empty MIDIs now show as `zzUntitled`, to help support alphabetized sorting. 
   >
- 'frozen indexes' for lister sorting functions, to pin entries like '(None)' [`be488e889`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be488e889b825ff4e394ec39868db5f4894694b0)
- save list 'Alphabetized' checkbox as a config [`e37661d2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e37661d2f988f7f9a4a57bcf8f08f2544a72f696)
- 'Whistle' item editor help text [`eee1fb4be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eee1fb4be3b06a290ab49eb3446a06c8e48a872e)
- add '(000)' after '(None)' in some lists, allowing typing '0' to skip to it. [`94fa4ce00`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94fa4ce00fca890d8391f3c39b2a4931ab28254c)
- (enemy editor) added descriptive labels and dropdowns to walker type attributes (#1041) [`e5cf4d4da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5cf4d4dab7aa57e7d0d91e7eecfa03ae604349d)

# Bug Fixes

- pushblocks ignoring the top half of combo solidity [`09f991298`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09f99129800e8502af535804e0845a2eb3786fb2)
- prevent crash caused by undefined behavior re: global dtors [`2d1f01071`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d1f0107146a3dcc07424922e0e34a89092dec9e)

### Player

- remove jittery 1px gap when pushing blocks right/down [`130b4b2b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/130b4b2b5d2d7c4932b92b9e7346e033b93e17d1)
- step triggers ignoring z-axis [`ab6734fc6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab6734fc649dfe355b45ebb6d50a35ea7c9a60f0)
- triggered autowarp combos now use sidewarps [`270c3cc36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/270c3cc36e16b99a2963ae8c05118c350a154e32)
   &nbsp;
   >autowarps triggered by combotriggers use sidewarps. instead of tilewarps screenflags that make autowarp and sidewarp direct work with triggers now (as they should) 
   >
- Push (Generic) 'Opposites Cancel' flag not working properly with 0-push directions [`fb9adec45`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb9adec45f93b239a0d909dd3c75ed1f24f3b65d)
- pushblocks with non-push flags placed on them were leaving trails of that flag [`fa2c33758`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa2c3375835654eb529c2103915b06f2e901035d)

### Editor

- typo in push flag help text [`723e2f1cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/723e2f1cc6512343bdb147df450700447ecce7f2)
- Screen Enemies Dialog not setting "Dirty" State for saving [`0903ecdc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0903ecdc18ec6b1a7542e287218988928b497839)
- ...only set/toggle flags that aren't disabled. Oops. [`7a68b4e1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a68b4e1b40c671b6b6d3078fc404846733a4fea)
- combo editor triggers -> Level Palette now has hex/decimal swapping button [`dc8d75038`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc8d75038c0d325d53b23f14b7fb9665f87fcbb1)
- `Mouse Scroll` setting not working on 4th combo column [`52b70261f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52b70261f51359612f3017ed5935882fa140ad48)
- show tile 0's actual graphic for gauge widget tile selectors [`12a85b792`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12a85b7921ec7980ab8e9167b07531054a8c706a)
- help text for icy floor `Max Speed` [`8b4c61980`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b4c619807e4a740adb469bd9eb60d0f45ee93ef)

### ZScript

- for-each loop compile issue when iterating over 'const' arrays [`a7945bb45`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7945bb4567efd1dc30f23a6135cfd1244834a28)

# Refactors

- removed unused data from zcmodule [`5b7a9c63f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b7a9c63f1816635ed05e4eec1d3742d9580e87b)
- clean up enemy editor/save/load code a bit (#1033) [`7e1a172c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e1a172c2a950cabda795416b44edde694871f0f)

### Editor

- remove classic_zquest.dat, load assets from new assets/editor folder [`5551216eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5551216eb25c1f1ec80bd59eed1bf217d6e9b507)
- deduplicate some on-hit code for the player [`7cd86df0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cd86df0de9976b57613cf3aecb0c5ed8afa79e5)

### ZScript

- remove unused zasm LOADMAPDATAR, LOADMAPDATAV [`dd91c58b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd91c58b222a46f7f6031a3d2d9320eff47fa68b)

# Tests

- reduce how often output of test_zscript.py changes [`61875fc2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61875fc2a46b171a2c0091ffcce1b0bd68b515f8)
   &nbsp;
   >Also fixes an issue where some metadata symbols generated for the vscode language extension were recreated for every use, rather than sharing a symbol as intended. (getUniqueCustomId was the issue). 
   >

# Misc.

- always run uncompressQstAndGzip in scripts/database/collect.ts [`18225d8c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18225d8c84acb6704ce84fd6cf4d2c7da3adf394)
