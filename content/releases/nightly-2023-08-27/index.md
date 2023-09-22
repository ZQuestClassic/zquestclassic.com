---
title: Nightly 2023-08-27
description: 
date: 2023-08-27T22:46:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-27/nightly-2023-08-27-linux.tar.gz
    name: nightly-2023-08-27-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-27/nightly-2023-08-27-mac.dmg
    name: nightly-2023-08-27-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-27/nightly-2023-08-27-windows-x64.zip
    name: nightly-2023-08-27-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-27/nightly-2023-08-27-windows-x86.zip
    name: nightly-2023-08-27-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 118856336
tag_name: nightly-2023-08-27
tags:
  - releases
---



# Features

### Web

- support music crossfading, set position, set speed [`61104f63f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/61104f63fa1f33914eae12dfa2249305a971b075)
   &nbsp;
   >This drops the web-specific implementation of zcmusic via SDL_mixer. It was only done that way because we weren't building any sound libraries from source, so using emscripten's port system + SDL_mixer was a workaround. But SDL_mixer only supports a single music channel, so it cannot do crossfading, so it's time to drop it. 
   >

# Bug Fixes

- room dialog not refreshing on setting old-guy info [`72ec7e913`](https://github.com/ArmageddonGames/ZQuestClassic/commit/72ec7e913e976a54db4475d2967907ebac7bf4cf)
- fixed crash when loading enhanced music in nosound mode [`9f2a9f216`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9f2a9f216d1b258fad30b1af7b3fda55c778b423)
- write zeros instead of random memory for fixed sized string fields [`77153f3a0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/77153f3a0a001ab93623901250b9c2960dd5b555)
- virtual dtors for subscreen widget base classes to avoid memory leak [`bf60c8545`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf60c8545278cdd219c5cc0ea1bbaf2525ecabf5)
- use safer vsnprintf for zsys messages [`68d5b6432`](https://github.com/ArmageddonGames/ZQuestClassic/commit/68d5b6432b3bc7414070f8d9f1855aac37d6088d)

### Player

- handle failure to create save file error [`bab197b23`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bab197b231351bd0cdf91f89a0ceb130a8221718)

### Web

- prevent crash when freeing music [`2ff430699`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2ff4306995e107d289ef58365fe43e71e272bf65)
- add rests in some ui busy loops [`c4c44dda3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c4c44dda3dd7fdf48c3cf2e8f37c3aa82e0ce4f4)

# Build

- configure allegro audio to not build libdumb or libflac [`96ce589ad`](https://github.com/ArmageddonGames/ZQuestClassic/commit/96ce589ad430af511752b1fb186344b14d4a6d07)

# Chores

- fix last commit [`93953beea`](https://github.com/ArmageddonGames/ZQuestClassic/commit/93953beea071045757d2d7b69b053149b3e2fc21)

# Refactors

### Player

- do not poll music in timer [`c323dbe61`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c323dbe61ec9f4772f7061855fa7fdf7efa40c99)
   &nbsp;
   >We poll music often enough via `advanceframe` 
   >
- remove title screen [`e4640ab77`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e4640ab770d6aae79df2a2748646edd8d6fb63ac)
- remove aglogo [`47ad36443`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47ad36443df553411480e9874bec706fae72fdd1)

### Editor

- remove defunct -notitle switch from quest packager [`bcfd8bbf5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bcfd8bbf59023ddc0ca8db77b260dadd6e8504b3)

# Misc.

- wrap custom changelog sections in details elements [`948ea7238`](https://github.com/ArmageddonGames/ZQuestClassic/commit/948ea723820e3776bfc2cb716514b61cd390a40d)
- revert grabber.exe to 4.2.0 version, since current one stopped working [`aad1ce6e9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aad1ce6e93b83d4b74a4df9c9105a245a6e5afcc)
- add sentry breadcrumb for zsys error messages [`f6015eae0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f6015eae08da1eb9030000d64a89da80a21bcf3c)
- disable sentry session for all but zplayer and zquest [`39edc388b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/39edc388b8a05cd06bd48ceef4a5294c7e378bce)

### Player

- remove unused title/logo assets from classic_zelda.dat [`dcd117a1a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dcd117a1a9d4c9aefd653f5a56f090ad231d394e)

