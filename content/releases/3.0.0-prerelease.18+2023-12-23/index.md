---
title: 3.0 Prerelease 18 2023-12-23
description: 
date: 2023-12-23T04:13:49Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.18%2B2023-12-23/3.0.0-prerelease.18%2B2023-12-23-linux.tar.gz
    name: 3.0.0-prerelease.18+2023-12-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.18%2B2023-12-23/3.0.0-prerelease.18%2B2023-12-23-mac.dmg
    name: 3.0.0-prerelease.18+2023-12-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.18%2B2023-12-23/3.0.0-prerelease.18%2B2023-12-23-windows-x64.zip
    name: 3.0.0-prerelease.18+2023-12-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.18%2B2023-12-23/3.0.0-prerelease.18%2B2023-12-23-windows-x86.zip
    name: 3.0.0-prerelease.18+2023-12-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134965624
tag_name: '3.0.0-prerelease.18+2023-12-23'
channel: '3'
tags:
  - releases
---




# Features

- add burn-based light radii for items, to change the glow radius when lit on fire. [`6cc9ab347`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6cc9ab347a718ff846a9e839993d3dea3d103b72)
- SCC for 'Trigger Combo Copycat', allows triggering a triggers-tab copycat index [`bcf7b98ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcf7b98ceea4d6d6875be515dda04a14f111991a)

### Editor

- Advanced Paste for Item Editor [`138b58626`](https://github.com/ZQuestClassic/ZQuestClassic/commit/138b58626eecf08d54fb49a8631977cccc5c85ed)
- 'Warp Back' rclick option to reverse after following a warp [`8dd981f27`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8dd981f2726d3c6351cb93f4091e90932f5a5562)

### Web

- support new SETCMP, GOTOCMP, CALLFUNC, RETURNFUNC ops in wasm [`1c190a5a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c190a5a7b035da18be71d6d7dbab8b601263ece)

# Bug Fixes

- zasm metadata not clearing properly when assigning slots [`c090dee25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c090dee25d1fd331438d348a92d792bd988cb83b)

### Player

- only assign save path just before actually writing to disk [`17ba9ef42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17ba9ef42e22c875e7823d041609b07aad3e72bc)
- call saves_do_first_time_stuff when changing slot qstpath [`0b7036d74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b7036d74efe53867f77426766045a855d9ee029)
- handle edge case when changing unplayed save file qst [`3dfbf7b61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3dfbf7b61151a262f2ff94a8bb1fc24e40084995)
- prevent calling dmap script twice in scrolling dmap warp [`6fc179786`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fc179786fa1abee377ff4ef51f438697ea0f36b)
- set previously unset save_t write_to_disk in all places [`34d840c30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34d840c309ff59daf286b7d8c64ff4a18176bfe1)

### Editor

- 'Open Tile Page' on combos not using the ORIGINAL tile of the combo [`7e35354b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e35354b11b1b5f86fa03f48fed36085391afab3)
- missing rclick menu separators [`1b0b0341c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b0b0341c4c37e75d546e165f8679d7b7f84724e)
- disable tooltips when hotkey cheatsheet is open [`d3ccd1c68`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3ccd1c682f116a27dc2f83ce4c1d2866b031c76)
- clean up several issues with the warp dialogs [`4291118a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4291118a43c315929a7b1284a3f660dac4e531d0)
- options->fonts being broken/inconsistent, not saving changes [`adeeba4db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/adeeba4db829e909c796d193e6baee3b557839ec)

# Refactors

### Player

- move global inits from init_game to new init_game_vars [`7f180a32d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f180a32df5dd95ac51a7afddf1a0038f4685251)
- make lamp_paid not static for replay determinism [`90a876adf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90a876adff25167b410f775233fd3654c6fd8f25)

# Tests

- fail on abort in web replay tests [`2b643c358`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b643c358e929a0a1414371a9e7e0a37e75b75e1)
- stop on fatal errors in run_web_version.js [`bafc72eba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bafc72ebae8235c6e3d4ff6e9e7a1c0b85afc222)
- set write_to_disk in saves_test [`334174ce5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/334174ce5408ce67b9c26d8141160b4e336939ed)
- fix test_jit.py not looking in the right folder anymore [`44227cd6e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44227cd6e34ee5fb7576c9616c367cd02cb4fbff)
- add "frames" and "length" meta fields to zplay [`93e77ddf7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93e77ddf79e209fe0c2732c5d3ffade33e68c373)
- use "latest" version for all playground.qst replays [`3c80d2439`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c80d2439486a4a8b75bce53910c35990cdcca65)
   &nbsp;
   >These replays should be trivial to update as needed, and using no replay compat code makes them far more useful for verifying specific features. 
   >

# CI

- set correct test results folder for web replays for upload [`2ebfaeffc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ebfaeffcf7b3118ba7e2efa6c17d6d127ac49ea)

# Misc.

- update default fonts to be same between base_config and 'Default:' button [`070edf5c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/070edf5c72bb4d31c660e4b7bd8a02f46e4dd157)

### Player

- support "latest" for version field in zplay [`dcaf7f925`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dcaf7f925eae3739d3994f8b650229d37b522678)
