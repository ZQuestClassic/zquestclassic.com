---
title: 3.0 Prerelease 84 2025-01-03
description: 
date: 2025-01-03T21:56:16Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.84%2B2025-01-03/3.0.0-prerelease.84%2B2025-01-03-linux.tar.gz
    name: 3.0.0-prerelease.84+2025-01-03-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.84%2B2025-01-03/3.0.0-prerelease.84%2B2025-01-03-mac.dmg
    name: 3.0.0-prerelease.84+2025-01-03-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.84%2B2025-01-03/3.0.0-prerelease.84%2B2025-01-03-windows-x64.zip
    name: 3.0.0-prerelease.84+2025-01-03-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.84%2B2025-01-03/3.0.0-prerelease.84%2B2025-01-03-windows-x86.zip
    name: 3.0.0-prerelease.84+2025-01-03-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 193131767
tag_name: '3.0.0-prerelease.84+2025-01-03'
channel: '3'
tags:
  - releases
---




# Features

- pushblocks can drown (on a QR) [`f3ffe8e74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3ffe8e7415e0a0eb848ae128f75ddbaf2c2780a)
- combo-specific falling/drowning sprites/sfx for pushblocks [`b8a2c17e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8a2c17e91cf9d97fe42c464eb899e0eeab30014)

### Editor

- add Cambria as tileset option [`bc449928e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc449928ea4ff78878fdf356e7f36f272ef1fd45)
- hotkey for 'Show FFCs' (no default keybind) [`5fd603fb2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5fd603fb20f30fc8ceebaeca5e59b7843cdfcde4)
- 'Drag Squares From Center' option, for FFCs/warp squares/etc [`4028184ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4028184ffd2dfdab5546f66d986a42c3d363e800)
- Tools->Fix Tools->Green Arrival Square Fix [`e07947d77`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e07947d77c7ace17715b53d42719778ef260b85a)
   &nbsp;
   >Allows you to clear out all the green arrival squares in your quest (and optionally turn them into blue squares) 
   >

# Bug Fixes

### Player

- incorrect dungeon check in map view [`53613f415`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53613f4152e1829b60a237c40562249d747cb46b)
   &nbsp;
   >This resulted in drawing doors incorrectly. 
   >
- bombed walls drawn incorrectly during scrolling [`1abade613`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1abade613065649c2aa04547800c49f420afbe2d)
- Custom Bush/Slash combo sprites not spawning centered on the combo [`28eb915f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28eb915f8a2ec085eb761c88a1198f0e571a2263)

### Editor

- aliases with layers set not placing correctly when zoomed out [`83d31d5a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83d31d5a54d6dd69ed0c772286e143188f468696)
- cambria.qst tileset not loading [`36d7e97b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36d7e97b5f60325a25d26bdbcac32342f99f8047)
   &nbsp;
   >Due to bad git lfs handling. 
   >
- clear scripts and header from tileset when using File>New [`27f0df541`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27f0df54111ba3b09763cafed5726ce47601bd2a)

### ZScript

- `Game->GameOverScreen[]`/`Gam->GameOverStrings[]` not compiling in 3.0 [`4f80edc07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f80edc073629fa60d7c557fb7f352bfd5e86ae3)
- properly allocate file list to prevent `FileSystem->LoadDirectory()` crash [`58abb5008`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58abb5008f1c0c3c7b7177818e9967afbd84ba99)

# Refactors

- AlertFuncDialog buttons [`9c6c26b5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c6c26b5af65b69cfb85417968fa88c7cece49c6)
   &nbsp;
   >Now uses chaining via `.add_buttons()` to supply button arguments. Overloaded variation allows giving an `int&` instead of a list of procs, automatically setting the reference to the index of the clicked button. 
   >

### Player

- replace cpos_info::flags with a couple booleans [`c0f471426`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0f4714267a66141259502448cd5213763d28e37)
   &nbsp;
   >This reduces both memory and cpu usage in a hot function, `update_cpos`. 
   >
- make `update_combo_cycling` faster [`6759a96ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6759a96babaf0e5c731c3dc1dc36f73adbd8651d)
   &nbsp;
   >By not doing fresh animations separately. 
   >

### Editor

- better error messages related to loading enhanced music files [`a20c384ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a20c384acc941d954fc5bb6486464a93c612e230)
- in Load Tileset wizard, enable all clear options by default [`0d40150ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d40150ba089b80d914b8b30d3e18887acaba719)
