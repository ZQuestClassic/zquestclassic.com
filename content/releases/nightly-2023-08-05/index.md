---
title: Nightly 2023-08-05
description: 
date: 2023-08-05T08:54:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-05/nightly-2023-08-05-linux.tar.gz
    name: nightly-2023-08-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-05/nightly-2023-08-05-mac.dmg
    name: nightly-2023-08-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-05/nightly-2023-08-05-windows-x64.zip
    name: nightly-2023-08-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-05/nightly-2023-08-05-windows-x86.zip
    name: nightly-2023-08-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 115270139
tag_name: 'nightly-2023-08-05'
channel: '2.55'
tags:
  - releases
---

# Features

### Player

- split saves into individual files [`b6b151149`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6b151149c4e644ddf936751fc0bfc8861e0db9d)
   &nbsp;
   >Each save slot created is now stored in a separate file, kept in the `saves/` folder. This path is configurable with `[zeldadx] save_folder`.  
   >
   >An existing `zc.sav` file is split into individual files, and the original is moved to `saves/backup`.  
   >
   >The order of the save slots is maintained by `saves/order.txt`. You may freely rearrange the lines of this text file, though you must do so when the program is not open for it to have any effect.  
   >
   >Any save file that gets deleted will simply be moved to `saves/deleted`. If you ever want it truly gone, you can delete the folder yourself. If you want to restore it, just move it back to `saves/`.  
   >
   >Individual save files are only loaded into memory as needed, and only partially if only needed to display info on the title screen (like the name, icon, hearts, etc).  
   >
   >The `-standalone` switch still works the same, but the save file is at `saves/standalone.sav`. 
   >
- change save slot limit from 15 to ∞ [`1e0794e25`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1e0794e2589afb8ee495437595c5da99b20ee46d)
- copy save file to backup folder on every save [`bfa22af7b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bfa22af7bcb92ebc27bec1a8262d8ba2a1937831)

### ZScript Standard Library (std.zh)

- add 'GetLevelSwitchState()'/'SetLevelSwitchState()' helper functions [`f7228536a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f7228536ad55c2fb4bb20d00bba8b8c06d7e67c2)

# Bug Fixes

### Player

- fairy flags acting different placed vs inherent [`3f750666f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3f750666f408f4a9ba97cdfba2e49a251df0505e)
- allow canceling delete/copy save with ESC [`5d8e9b5c3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5d8e9b5c39e1a9081f801ee3132500dfe1779852)

# Refactors

- Screen Script dialog now new GUI, respects script metadata [`e48455725`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e48455725ba207d5d80a35053f320b9acbce314d)

### Player

- remove support of .dat# when loading save files [`985583d1e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/985583d1ee516d714b1fd5ca4541f47771851c7b)
- update icon only once when making new save [`3d1b13133`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3d1b13133b5458cd25953897ba7272baf50f1456)
- remove unnecessary sleep/flash of black on updating save icon [`855e0684d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/855e0684d6bf1a9096a84dea54258a78bc669946)

# Misc.

- add 'std_zh' scope to changelog generation [`d82a0d845`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d82a0d8458b3029283385db04f1d935fd0dbce48)
- make std_zh a scope, instead of a type [`efee4a34e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/efee4a34ec238f4e7c174cf1ea2232ada3577c39)
