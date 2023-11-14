---
title: Nightly 2023-07-05
description: 
date: 2023-07-05T00:29:54Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-05/nightly-2023-07-05-linux.tar.gz
    name: nightly-2023-07-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-05/nightly-2023-07-05-mac.dmg
    name: nightly-2023-07-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-05/nightly-2023-07-05-windows-x64.zip
    name: nightly-2023-07-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-05/nightly-2023-07-05-windows-x86.zip
    name: nightly-2023-07-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 111046269
tag_name: 'nightly-2023-07-05'
channel: '2.55'
tags:
  - releases
---

# Features

### Editor

- -quick-assign CLI switch to compile + assign [`31efdf60c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/31efdf60ce5f9cdbc2c4e1a7deeade268cfff547)
```
  Example usage:    ./zquest.exe your_quest.qst -quick-assign
```
- tile editor 'Esc' deselects selections (if something selected) [`c9df55421`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c9df5542136b97edc3c6a13efe2ab97e27908050)
- Add 'General Tab' to advanced-paste combo dialog (and clean up the dialog) [`516526658`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51652665874e1f21321660b1593395d0ab2b1b85)

# Bug Fixes

- Test Mode issues when quitting during opening wipe [`95e3288ec`](https://github.com/ArmageddonGames/ZQuestClassic/commit/95e3288ec29c716b8645a2e01da311a94fded6b5)
- do not show hidden files in file selector [`cf932f82b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cf932f82b4c2026d95b28df7efe9124659d15390)
- memory corruption in quest load from bad palcycles [`72f741728`](https://github.com/ArmageddonGames/ZQuestClassic/commit/72f741728e63f79d5a5d089e4f6c8b8756277792)
- memory corruption in quest load from bad shop count [`7b43ff57e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7b43ff57e1d7820dc577f7bb919999dec50db53c)
- memory corruption in quest load from bad door combo count [`01f4a2cc8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/01f4a2cc8d91d4af370218dbef784b1a81e56b5c)
- memory corruption in quest load from bad item count [`dafd04b15`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dafd04b15951c29a781a24cd70942746245cffce)
- memory corruption in quest load from bad weapon count [`1fa149c51`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1fa149c51fd7750f4caf0e2c9ff685ad5aaf4ea7)
- memory corruption in quest load from bad warp count [`bf64cf4b5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf64cf4b597980b67bef5079d99ef6cb6b4b2478)
- memory corruption in quest load from bad string length [`8b9883ac4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8b9883ac4c6191d61f715605899fe7046982131f)
- memory corruption in quest load from bad misc info count [`de4595fbc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/de4595fbca92c9d96fcaa2b27e45a0cb7082b323)
- prevent over-allocation in quest load from bad map count [`a262c53f7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a262c53f7beb4900f8f3d3358b36364447691424)
- memory corruption in quest load from bad string copies [`bf5fa4c5d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf5fa4c5de4baf0a534c0377bb3780dd0b91fdf7)
- prevent over-allocation in quest load from bad script commands [`51dd859de`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51dd859de5c2826d4543340559336ea2ce7f40fb)
- memory corruption in quest load from bad zinfo weapon count [`70910a8e3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/70910a8e30a84240a99087d010a4f9c6bdaf9301)
- memory corruption in quest load from bad zinfo counter count [`40ace2986`](https://github.com/ArmageddonGames/ZQuestClassic/commit/40ace29868003a7e6537c39118f7477de5dcb278)
- memory corruption in quest load from bad zinfo mapflags count [`aee1105d1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aee1105d116c448fb1457c0b04932c29385af636)
- memory corruption in quest load from bad zinfo combotypes count [`46521737e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/46521737eecf2eeb3ed51738e8ae99127563bada)
- memory corruption in quest load from bad zinfo itemtypes count [`b1c8944db`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b1c8944dbe595c5da48e0b81f86644bd24a1f432)
- memory corruption in quest load from old pwd hash check [`941720a37`](https://github.com/ArmageddonGames/ZQuestClassic/commit/941720a37b52e44668b42c95de4bbdb82c129400)
- memory corruption in quest load from repeat section ids [`75057cf10`](https://github.com/ArmageddonGames/ZQuestClassic/commit/75057cf104d9984ee92b3129138f51f4388ae699)

### Player

- windows crash as writing .zplay.result.txt file when exe not approved [`0fe78dde3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0fe78dde324ee20b681fb4ba9e624602377e7fbd)
- ignore unintentional input on first frame of subscreen [`0573804d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0573804d3f48bebd98dddd5637d0ade22ec7c043)
- Torch combos now function on pushblocks [`0a56608dd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0a56608dd3ac98dfb32a867b8e4c7277064559c6)

### Editor

- background blank-out after adjusting tiles in string editor [`4f855abaf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4f855abaf72ef968ab30a29dab91a8e256100e9d)

# Documentation

- add fuzzing.md [`ba7921e82`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ba7921e824441d8644ee126b2e7eeb9ab3653c8b)

# Chores

- fix compile because I'm stupid [`3f430cc81`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3f430cc81abe49a75ea4207f9ebecc35d57b24e7)
- comment (and slightly optimize) 'user_object.cpp' [`9e5e60b0a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9e5e60b0ab0e0e21193a878fcbfbb9d2a6e3bd2c)

# Refactors

### Player

- replay_version_check [`f461b1071`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f461b1071a014bc74cf6d83dad150f41147e4a7e)

# Tests

- support substring for run_replay_tests.py --filter [`298d40c55`](https://github.com/ArmageddonGames/ZQuestClassic/commit/298d40c552a892013fcf05c33da24af581ce8d9b)
- add test_zquest.py. tests compile, slot assign of playground.qst [`bd682985e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bd682985e2c041efa5254feb79bea7ebf43b2dcf)
- move ghost replay into playground.qst [`3294b1866`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3294b186678c5c92b5cacf3bf8a04ebf6acd73e1)
- rename lifting and rocs_feather replays [`8c5058b1c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c5058b1c01e2ceeae213a92d7ab8502b816ffc2)

# Misc.

- include commit body in changelog [`a29611391`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a29611391eb03579d628b23ecb6a25c3f9252bc2)
- ./zelda -load-and-quit <qstpath> [`9bf02571c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9bf02571c6c09c182561bd565fc13fe701d4ad04)

### Editor

- Change "Place + Edit FFC #" text to "Edit New FFC #" for clarity [`d21b3dfad`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d21b3dfad11899b94b2df8a3c35b01043c853157)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-02...nightly-2023-07-05
