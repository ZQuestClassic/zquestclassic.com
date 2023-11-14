---
title: Nightly 2023-11-03
description: 
date: 2023-11-03T02:11:04Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03/nightly-2023-11-03-linux.tar.gz
    name: nightly-2023-11-03-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03/nightly-2023-11-03-mac.dmg
    name: nightly-2023-11-03-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03/nightly-2023-11-03-windows-x64.zip
    name: nightly-2023-11-03-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-03/nightly-2023-11-03-windows-x86.zip
    name: nightly-2023-11-03-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 127790423
tag_name: 'nightly-2023-11-03'
channel: '2.55'
tags:
  - releases
---



# Features

- customizable flicker speed and color for enemies and player in init data [`8a18af11e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a18af11e7c5573b19cb34df229dfd7aa363cd37)
- allow conveyors on all layers + ffcs (QR) [`4d9976b23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d9976b233a3e60c05974159a19712196399d476)

# Bug Fixes

- bomb equippability not respecting cost counter customization [`c7ffbf652`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7ffbf652218a19fbcb485e59700d4b541f3a9b4)

### Player

- subscreens with item-overridden level items not properly displaying [`913003180`](https://github.com/ZQuestClassic/ZQuestClassic/commit/913003180aa69744e7372bd757b7ea167c87d7dc)

### Editor

- Fix palette desyncs (permanently?) [`b5a7ee226`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5a7ee226884e8d98c88296bc2734bd6c945e956)
   &nbsp;
   >Should no longer need to ever manually 'rebuild transparency table'. As such, the default keybind for 'Reset Transparency' is now '(None)' instead of 'B' 
   >
- do not freeze screen bitmap while in pal dialog [`95fac7ac8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95fac7ac8d3482dedc7eb76ae467ead1b04a0dac)
- Tall Grass combo wizard dropset not setting flags properly [`4732eb4b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4732eb4b026bb2c9cd4aa271c022a57aeee480ad)

# Refactors

- remember previous screen clip for scrolling pane [`7a8021809`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a802180910d99ec2a83aa31a46bd609aa25d574)
- avoid copying combo everywhere [`0ecfa71f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ecfa71f6e20422b609b4bd1d67a4e99f8f04d03)
- limit default window size to 3x the base resolution, and add a buffer so to always be less than the monitor size [`2f6cf5a72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f6cf5a725fd2dae0be09525ba28c9eb5ded4366)

### Player

- do less work in run_gswitch_timers [`78af21af8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78af21af80f6ff8bfb44e35e0da82580b7da276e)
- avoid costly script object dealloc when destroying dummy item [`c22e9d68f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c22e9d68f333b2d283624af9120e891a0655ef1a)
- use more accurate but slower tile drawing when drawing on edge of bitmap [`c1601e941`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c1601e9418879f4722b21f8bd6a9204750b7cd2d)
- respect bitmap clip in tile drawing functions, remove usage of temp_buf in screen draw [`a42586c11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a42586c11202bdc15a5b9e3511e06ac00c47301b)
- totally remove temp_buf in screen draw, and masked_blit [`93f25b690`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93f25b690bbd3df08e61780daa2e32c5506e042a)
   &nbsp;
   >This refactor reduces CPU usage by roughly 6%.  
   >
   >This results in some unavoidable minor graphical changes for quests with the QR "Subscreen Appears Above Sprites" disabled. Specifically, sprites (such as jumping enemies, weapons, etc) continue to draw over the subscreen background as before, but now also draw over the individual subscreen UI elements. In most cases this looks better, and better follows what the QR text says will happen.  
   >
   >https://hoten.cc/tmp/compare-report-screen-draw-refactor/ 
   >
- cache result of item_tile_mod, which saves 17% of CPU time [`b3c942902`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3c9429021e97e625b5df9096b35e6e0883d40a6)

# Tests

- recover from failure when downloading a release [`6545e847d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6545e847d0958f7294a5522200470b4d667dfa01)
- add --concurrency flag to run_replay_tests.py, and set to 1 in headful mode [`df4644a4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df4644a4e2ef7aae2281a588fcd922491994b831)
- set retries flag when getting baseline replays locally [`27f017136`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27f01713638659994f9fa07349e96158d1f9fee5)
- remove diff from replay test run result [`8ef2c1575`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef2c1575dec77aa089576f30b4e57136ed59c85)

# CI

- add failing test results to tar for faster upload [`78cf78184`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78cf781840646f17c10180f8a3bbcb515894905f)
- reduce amount of data uploaded when replays fail [`f589ada7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f589ada7e7e99ad127a68334dd8af3916f97afc8)

