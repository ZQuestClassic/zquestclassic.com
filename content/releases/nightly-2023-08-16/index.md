---
title: Nightly 2023-08-16
description: 
date: 2023-08-16T02:15:35Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-16/nightly-2023-08-16-linux.tar.gz
    name: nightly-2023-08-16-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-16/nightly-2023-08-16-mac.dmg
    name: nightly-2023-08-16-mac.dmg
    platform: mac
prerelease: true
id: 117390600
tag_name: 'nightly-2023-08-16'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- add Shift+Minus/Plus for changing combo in combo editor [`f77eb091b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f77eb091ba6129886fdb86d7ce68617d4c5ea19c)
- configure multiple init datas for test mode [`44d7ecf90`](https://github.com/ArmageddonGames/ZQuestClassic/commit/44d7ecf90740c0ce31a51d88cc84daddb888b291)
   &nbsp;
   >Test Mode now allows you to customize test-only init data. You can make multiple init datas. They are saved to your `zquest.cfg`. A basic name is auto-assigned, but you can set your own name by modifying your config.  
   >
   >When you create a new test init data, your current quest's init data is used as the starting point. Later modifying the quest init data has no impact on your test init datas.  
   >
   >You can also directly modify the init data values in the config, though the format is not documented anywhere. 
   >

# Bug Fixes

- dmap music with crossfades was not setting loop points [`ad0adaf62`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ad0adaf62e9bd9a9caaccc8eaf66a7420c4c0faf)

### Player

- reset the map view cursor state in init_game [`9d07bd272`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9d07bd2722131b5f8b3bde7b87403209c78088b4)
   &nbsp;
   >For replay determinism. 
   >
- 'Load Quest' menu option was busted from recent refactors [`705aa3a4d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/705aa3a4dfb1fd5caa341e07fa3c9f147a4abdcc)

# Build

- add targets for common replay test invocations [`2a97f57d6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a97f57d68a4e1fda3248b442557405e84555e68)
- add stubs for sdl music to un-break web build [`68f407138`](https://github.com/ArmageddonGames/ZQuestClassic/commit/68f4071388754214d4fd7a62cfd27d80b0e639cd)

# Chores

- add more to recent music changelog [`de1ed3ec2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/de1ed3ec2013264dbd8467c18b097245eb9d7a0a)

# Refactors

### Player

- skip slow combo movement modification when nothing would change [`4693d82e8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4693d82e874e8cebcde8f58bff0bb80b4ec3cf3e)

# Tests

- support starting replay from a sav file [`0b8a1a41a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0b8a1a41a057c5c91a4cf582936329233810e75f)
- add script for splitting replays [`b771f0c16`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b771f0c165213176d61663862c5f6d5aee1ba2d2)
   &nbsp;
   >also support folders in the replay test directory 
   >
- split large replay files [`e79878288`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e7987828897558ce414252d779db1830d0413ca1)
- support headless flag for web replay tests [`4cee3d64f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4cee3d64f5e9799868053b366bea12823beae96a)

# CI

- handle "boolean" correctly [`226889535`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2268895359a690d59b1acc1bd39f8307d8762172)

