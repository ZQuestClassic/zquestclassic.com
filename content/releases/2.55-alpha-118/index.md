---
title: 2.55 Alpha 118
description: The one with the bug fixes.
date: 2023-09-08T22:47:30Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-118/2.55-alpha-118-linux.tar.gz
    name: 2.55-alpha-118-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-118/2.55-alpha-118-mac.dmg
    name: 2.55-alpha-118-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-118/2.55-alpha-118-windows-x64.zip
    name: 2.55-alpha-118-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-118/2.55-alpha-118-windows-x86.zip
    name: 2.55-alpha-118-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 120498184
tag_name: '2.55-alpha-118'
channel: '2.55'
tags:
  - releases
---


# Bug Fixes

- typo with subscreen view setting [`2c638f17e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2c638f17e97968977e528cf529dbf39b8a269a8c)
- windows 7 crashes on compile zscript [`0101beff4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0101beff4b4bcd0bb71b06738063c7838c044429)
- 'View Unowned Items' subscreen bugs [`5e5ffa36e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e5ffa36e1b302f527246aef6fd251944491a1e8)
- subscreen buttonitem on active subscreen not scrolling properly [`5327d4c8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5327d4c8e6ce82e8cc61ba2d8afb3f895598217a)
- close about window on ESC/clicking X [`dac2fe022`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dac2fe022a96d6cdf2d8c59afe59eff26fa5d8e7)
- [mac] title bar showing on initial fullscreen launch [`507efb964`](https://github.com/ZQuestClassic/ZQuestClassic/commit/507efb96434d81046131cc96593f3a3b0ab475df)
   &nbsp;
   >The `osx_tell_dock_outside_bundle = false` feature I added to allegro recently is somewhat useful in development, but apparently problematic for normal use. 
   >

### Player

- handle error when sav file fails to load [`b6ca752fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6ca752fb4529e36b8cd22408b7728f922145bb9)
- unload other save games when selecting one [`5b2dba0e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b2dba0e10c5a74efc951ae7fb63abb5511f3846)
- save file corruption from overlooked fields [`2bb017871`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bb0178719430d31e3b1baa3b82fef376d247a34)
- Crash on zscript object destructor [`8f243d2d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f243d2d35a5c74f37376d0b5386cfd59427eece)
- Crash on dmap lacking subscreen [`a79f8dfc6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a79f8dfc683e9869ad321ea1037a7c8acbe53e52)
- read hp from save file for life meter on titlescreen [`14189f18e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14189f18e1a4f4dbd90f68a650c1be947eb7c48b)
- remove accidental dev mode, which always allows cheats [`7bc53d4b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7bc53d4b3a42e7c46e884a7cefa968cdf9d1b173)
- retain previous position when returning to title screen [`62d266e76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62d266e76db743e1f50fc568a62750b5d9c508c8)
- unreliable behavior of ESC in title screen [`b5e21a833`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5e21a8337a19bdb8ec0bd48b62c91062b12781d)
- sfx accidentally disabled in save select screen [`5fef0688a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5fef0688a59dcf3aa1ecaa8a48db61b2c7880a70)
- empty item slots filling wrongly [`59fc452e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/59fc452e3d98a2c24c64ea2b47bd0575efd59b81)
- weird subscreen item animation resetting [`683974182`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68397418283b63d4d161168efdc9d1921488c2d9)

### Editor

- mention change-combo shortcut in info text [`023352a5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/023352a5bf567503ae5e0d22e5e4731627096df1)
- room data gui text overlap [`42ed02f5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42ed02f5a5373505041ddda394acf8f3b083b8c0)

### ZScript Standard Library (std.zh)

- CR_RUPEES definition was missing [`e3edf4430`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3edf443082ec5ebf41112e6ddaf55100d99558b)

### ZScript

- set save name being truncated because not using new string [`5496e5ac4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5496e5ac46820e2f6fdbd7537dcfd3e5646db4fa)
- use safer vsnprintf to avoid crash via buffer overflow in logging [`b92439ed8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b92439ed8214a47434214047ace14751ef422e30)
- check_bunny accidentally always on for Game->CurrentItemID() [`3583e94ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3583e94ee6bfc5c0c60aab0b32bd24e1fd6303d4)

### Web

- set default saves folder to /local/saves [`01e692282`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01e6922822ce08f1aaf34c1233e5af4f6c79e53c)
- quick quest load was broken after save refactor [`2b5a12861`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b5a12861dd9a1379aa381557c0c36d4c84fa1f0)

# Build

- fix windows compile due to msvc hang bug [`461de4df9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/461de4df919b8d17ec34e6d5991398db4fb1151f)

# Chores

- remove outdated source file preamble comments [`3341301ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3341301ad1d3df25f93288882a75f23e48f32a47)

# Tests

- add -test-zc switch to test save file roundtrip [`2eccdedc2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2eccdedc2fb8dbe052d367edec4b1db3b578a751)
- mostly finish save roundtrip test [`f416ffa14`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f416ffa144f03d3f8d6c9ee5062d4e7506848ba1)
- check for full game equality in save roundtrip [`5c07f9c3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c07f9c3d51caaaf5d7d65db8b5d5985c334515c)
- fix zc saves test [`ef46dcc9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef46dcc9c7adcefc09ad4652f6c8067a934c1118)

# CI

- fix updater test cache [`7e3dd39f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e3dd39f5694ba64b43f2c573c390acd36a39629)
- add test_zplayer.py [`ef94dec88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef94dec88057fed7d3cd3341f6f3e213c888b945)

# Misc.

- support sentry unique user counting [`e9eb11357`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9eb11357d4e2c18772a0298474d6afe842ce1bb)
