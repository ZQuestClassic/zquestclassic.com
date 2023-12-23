---
title: Nightly 2023-12-23
description: 
date: 2023-12-23T05:18:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-23/nightly-2023-12-23-linux.tar.gz
    name: nightly-2023-12-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-23/nightly-2023-12-23-mac.dmg
    name: nightly-2023-12-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-23/nightly-2023-12-23-windows-x64.zip
    name: nightly-2023-12-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-23/nightly-2023-12-23-windows-x86.zip
    name: nightly-2023-12-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134966481
tag_name: 'nightly-2023-12-23'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

- arrow key navigation in menus not resepecting hidden items [`883c2305c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/883c2305cf533c33b6c6cb4a4e14a69db224eec4)
- prevent 1.90 qst load compat from setting first dmap cont/compass to bad value [`f1e3c5bcd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1e3c5bcdd5ad5296222d0804034f9d1a0f7388d)
- ZScript access to subscreen elements was missing a 'transparent' color option [`96c306004`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96c306004b4173f717923231146741db6b0f1a3d)
- zasm metadata not clearing properly when assigning slots [`33bb31162`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33bb3116211fb34a5b82291594b8f4a5decac35d)

### Player

- minor replay determinism bug for subscr_item_clk (selector animation) [`825844706`](https://github.com/ZQuestClassic/ZQuestClassic/commit/825844706aace99d0c6348093383fbb5eb2502ab)
- only assign save path just before actually writing to disk [`603e96444`](https://github.com/ZQuestClassic/ZQuestClassic/commit/603e96444f66001a9162461ebfc2fb85814422af)
- call saves_do_first_time_stuff when changing slot qstpath [`db4cf98c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db4cf98c2a906647e8dd77689d7dfb962b83919f)
- handle edge case when changing unplayed save file qst [`79564453f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79564453f0e72a1ec32193bc366c11641e7b8b16)
- prevent calling dmap script twice in scrolling dmap warp [`e8edc34e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8edc34e90b4ea9acce0c6c9f9409949ff88f8e8)
- set previously unset save_t write_to_disk in all places [`adca2b376`](https://github.com/ZQuestClassic/ZQuestClassic/commit/adca2b3761310cd75c1eb1a6a3c78af2c604a98d)

### Editor

- create test init data relative to qst init, not base init [`fadfe7d74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fadfe7d74fbf9216cd8613bee693c6bd5f9d1179)
   &nbsp;
   >This was originally done this way to avoid changing test init data when the quest's actual init data changed, but that maybe is not as useful as the other approach.  
   >
   >Also very simply fixes the problem of screen data (and other init values) not being properly set. 
   >
- autocombo/combo pool/combo alias pages RClick menus being offset [`d3e276c4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3e276c4de792eaa4b935782ec76cfe86db4232f)
- 'Open Tile Page' on combos not using the ORIGINAL tile of the combo [`7009db89b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7009db89b8984d0be0a3c1fc896aed1709349c2f)
- disable tooltips when hotkey cheatsheet is open [`bcae99ea1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcae99ea1d69f599b09b9b664ab73320908a3dec)
- clean up several issues with the warp dialogs [`378766362`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3787663628b1fe36682df755ac3765ca0822f247)
- options->fonts being broken/inconsistent, not saving changes [`cc2cb75cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc2cb75cd04100a2d896e996dc3f54e4f0c9eabd)

# Refactors

### Player

- move global inits from init_game to new init_game_vars [`c4f5c11ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4f5c11aed38f8aeface2729c70391f083ee5299)
- make lamp_paid not static for replay determinism [`534d82e91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/534d82e918e1b58184959a97f0bbd3891c1e40fb)

# Tests

- add umbral_cloud.zplay [`0a0826577`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a0826577a155cedbeab0b10ef2eff22a9cf61fd)
- add pageerror listener in run_replay.js [`ee98991df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee98991dfea7fe05adf26a5d005ec84ff0a20f6f)
- fail on abort in web replay tests [`3b0da67b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b0da67b43f8e195fc99a3adc21a3651559b7af3)
- stop on fatal errors in run_web_version.js [`d69ad2aaa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d69ad2aaa9fc38fb7163722ead134293a2824bc2)
- set write_to_disk in saves_test [`297b5433e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/297b5433ee0179c49f8a33ca243db634dbf5093d)
- add "frames" and "length" meta fields to zplay [`35da8a5eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35da8a5ebb3f121c88dbae98b3431e64f259337c)
- use "latest" version for all playground.qst replays [`42b94c785`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42b94c78549d55fb42bbe8114bbd55679ae00b7f)
   &nbsp;
   >These replays should be trivial to update as needed, and using no replay compat code makes them far more useful for verifying specific features. 
   >

# CI

- set correct test results folder for web replays for upload [`9413f492c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9413f492c1a2dbf7d8b9190e87481b0cbd1b3da1)

# Misc.

- update default fonts to be same between base_config and 'Default:' button [`e8b85365d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8b85365d3c9909f821248eeced719588ca2439c)

### Player

- support "latest" for version field in zplay [`5870d858b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5870d858b8f0a7ad71e09e74f4b7b8286bc7e989)

