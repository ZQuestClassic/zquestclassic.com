---
title: Nightly 2023-09-06
description: 
date: 2023-09-06T22:07:29Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-06/nightly-2023-09-06-linux.tar.gz
    name: nightly-2023-09-06-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-06/nightly-2023-09-06-mac.dmg
    name: nightly-2023-09-06-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-06/nightly-2023-09-06-windows-x64.zip
    name: nightly-2023-09-06-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-06/nightly-2023-09-06-windows-x86.zip
    name: nightly-2023-09-06-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 120202051
tag_name: nightly-2023-09-06
tags:
  - releases
---



# Bug Fixes

- 'View Unowned Items' subscreen bugs [`5e5ffa36e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5e5ffa36e1b302f527246aef6fd251944491a1e8)
- subscreen buttonitem on active subscreen not scrolling properly [`5327d4c8e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5327d4c8e6ce82e8cc61ba2d8afb3f895598217a)

### Player

- remove accidental dev mode, which always allows cheats [`7bc53d4b3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7bc53d4b3a42e7c46e884a7cefa968cdf9d1b173)
- retain previous position when returning to title screen [`62d266e76`](https://github.com/ArmageddonGames/ZQuestClassic/commit/62d266e76db743e1f50fc568a62750b5d9c508c8)
- unreliable behavior of ESC in title screen [`b5e21a833`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b5e21a8337a19bdb8ec0bd48b62c91062b12781d)

### Editor

- mention change-combo shortcut in info text [`023352a5b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/023352a5bf567503ae5e0d22e5e4731627096df1)
- room data gui text overlap [`42ed02f5a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/42ed02f5a5373505041ddda394acf8f3b083b8c0)

### ZScript

- set save name being truncated because not using new string [`5496e5ac4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5496e5ac46820e2f6fdbd7537dcfd3e5646db4fa)
- use safer vsnprintf to avoid crash via buffer overflow in logging [`b92439ed8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b92439ed8214a47434214047ace14751ef422e30)
- check_bunny accidentally always on for Game->CurrentItemID() [`3583e94ee`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3583e94ee6bfc5c0c60aab0b32bd24e1fd6303d4)

# Tests

- fix zc saves test [`ef46dcc9c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef46dcc9c7adcefc09ad4652f6c8067a934c1118)

