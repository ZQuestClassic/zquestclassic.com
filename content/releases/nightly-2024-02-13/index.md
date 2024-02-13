---
title: Nightly 2024-02-13
description: 
date: 2024-02-13T07:12:05Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-13/nightly-2024-02-13-linux.tar.gz
    name: nightly-2024-02-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-13/nightly-2024-02-13-mac.dmg
    name: nightly-2024-02-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-13/nightly-2024-02-13-windows-x64.zip
    name: nightly-2024-02-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-13/nightly-2024-02-13-windows-x86.zip
    name: nightly-2024-02-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 141754788
tag_name: 'nightly-2024-02-13'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- use correct graphic when holding up purchase from bottle shop [`03d123012`](https://github.com/ZQuestClassic/ZQuestClassic/commit/03d123012a6317123bfc2b48ff675140ef4bbf9f)

### Editor

- weapon type names drop down being empty [`53cdacc3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53cdacc3d0d0323c509d42c2b36a8bc8210bd156)
   &nbsp;
   >This broke from recent addition of reflected arrows/fire (e3b23aa) 
   >

# Tests

- update test_compile_and_quick_assign to compile replays/scripting quests [`1084e5c54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1084e5c54fc97736653e80c7731b2c1f6a8197cc)
   &nbsp;
   >This is the first of more planned script replay tests, which along with the playground.qst replays will be re-compiled with the latest zscript in CI and their replays re-verified. Should result in better test coverage for newer compiler features. 
   >
- add 100_rooms_of_wisdom.zplay [`a59b6141e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a59b6141e1922ca8b758b12c9f2cbe2860ec2df0)
- add dragon_ball_z.zplay [`27e215665`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27e215665f364ce1cdb83dac8e7033c70134ca8c)
- add new_beginnings.zplay [`27424bb8b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27424bb8b2ab77a399b3c45f9b1342f3d3a87114)
- add kriztles_3.zplay [`eb92a96b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb92a96b4331f6033e0e2c78a373642c7b9325a3)
- add final_fantasy.zplay [`2b5572cce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b5572cceaec76ecec2b72f6f30c4d751bf09a24)
- add zelda_3000.zplay [`145976d57`](https://github.com/ZQuestClassic/ZQuestClassic/commit/145976d5793f2c0356047ea53b36c0572c65a35e)

