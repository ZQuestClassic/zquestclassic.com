---
title: 3.0 Prerelease 82 2024-12-21
description: 
date: 2024-12-18T19:51:57Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.82%2B2024-12-21/3.0.0-prerelease.82%2B2024-12-21-linux.tar.gz
    name: 3.0.0-prerelease.82+2024-12-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.82%2B2024-12-21/3.0.0-prerelease.82%2B2024-12-21-mac.dmg
    name: 3.0.0-prerelease.82+2024-12-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.82%2B2024-12-21/3.0.0-prerelease.82%2B2024-12-21-windows-x64.zip
    name: 3.0.0-prerelease.82+2024-12-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.82%2B2024-12-21/3.0.0-prerelease.82%2B2024-12-21-windows-x86.zip
    name: 3.0.0-prerelease.82+2024-12-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 191946422
tag_name: '3.0.0-prerelease.82+2024-12-21'
channel: '3'
tags:
  - releases
---




# Features

- per-combo player landing sfx [`29e5a0e08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29e5a0e08c0639d8b3e9020ce41836006804422b)
   &nbsp;
   >The MiscSFX landing SFX plays if none is set. 
   >
- trigger flag 'Only Grounded Weapons' [`724e957b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/724e957b356cc601a07e01155e6197b38d740744)
   &nbsp;
   >Makes weapons that are in the air NOT trigger the combo (until they land) 
   >

# Bug Fixes

- Lift gloves with specific settings not allowing throwing [`ad37f7ad8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ad37f7ad8a6e0a1452f8d96002faa495928dc26d)
   &nbsp;
   >Gloves with Button=0 and 'Disable Item Use' set were unable to throw objects once picked up. 
   >
- Fire level triggers not counting as 'weapon' triggers [`5f42bff76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f42bff76e21d68e0c2e7908f3d6755e632916cd)
   &nbsp;
   >They didn't count for effects such as 'Kill Triggering Weapon'- they do now. 
   >

### Player

- improve replay update mode by failing when expected screens aren't loaded [`0dc4fce9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0dc4fce9e39b0c3c6e29d6aef15495f5e94ddb57)
   &nbsp;
   >Previously when updating a replay, one would have to be careful that a behavior change didn't result in the replay not getting as far as it did originally. Now if a replay updates successfully, the only possible regressions will be graphical. 
   >
- Add limit to `genericdata->RunFrozen()` recursion to prevent crashing [`2bfd1431b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bfd1431bdc5e002d1d317853e65a103581d905e)
   &nbsp;
   >Running too many frozen scripts at once caused a stack overflow crash, now it causes a script error message. 
   >

### Editor

- add more ? buttons to combo editor about weapon triggers [`f156c4bd7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f156c4bd7b529c4dedc2c3a9d77a717d0df49b09)
   &nbsp;
   >Clarified how the fire triggers work Renamed 'Any Fire' to 'Normal Fire' to better reflect how it actually works 
   >
- some lists closing dialogs randomly when rclicked [`f2938dda4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2938dda4af99ee98494a1352687d10946783b98)
- square misalignment in zoomed-out expanded mode [`49fcf283f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49fcf283f445ed496257f04218e25a7c4c3198d8)
- next-screen-preview visual bugs re: zoom out [`c043aaae3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c043aaae32f611d5b74c05ebfcc9b2a1ca4beff5)
- enemy editor spawn/death sprites swapped [`ab5f76315`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab5f763155939f2025ca8980084bb86404c2dd09)
- changing some options in options dlg wasn't updating rclick menu [`778397def`](https://github.com/ZQuestClassic/ZQuestClassic/commit/778397def0e1cb03e4972160b61f90eae9a0245c)
- remove hidden combo selection mode toggled with spacebar (#1051) [`96bce3104`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96bce31045bb72f6c7dbc410d799739234188cf8)
   &nbsp;
   >Pressing space changed how combo selection worked in a way that often confused users. There was also no visible indication of this, so it was extra bad. This mode was perhaps useful for something in the combo selector dialog, but outside that it was seemingly not useful at all - and is now removed. 
   >
- combo alias cursor visual issues [`2d2c5de92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d2c5de928d38512a80bd8b079ff3de3983017a1)
   &nbsp;
   >Fixed graphical glitch when using a non-top-left origin Fixed alias mode being incompatible with the FloatBrush setting 
   >
- some minor issues with layers and zoom-out [`08cd75092`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08cd75092f4ff858469923fcbbad70c53303f058)
- Combo pools drawing with width/height when they shouldn't [`c7f23d39c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7f23d39ce95308312fd064e181ff6e8fdc0f796)
   &nbsp;
   >All combobrush previews show 1x1 regardless of size, clearly intentionally. 
   >
- add a minor sanity check to autocombo drawing [`09df539d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09df539d4d48a0e320db8bf7377dc1d6957cc955)

# Refactors

- checkboxes with right-side box now right-align within their width [`8b8d23ba0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b8d23ba03fd2f9b2afde78706b477ea2af8abf9)
- explicitly ignore dropdownlist rclick/dclick events [`58c028f4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58c028f4f74520e5ccabb705ccdb484b70caa6ef)

### Editor

- rename boomerang range attribute to duration (#1048) [`83aa5dd2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83aa5dd2cedcc7be64b2a66cf0ff78a49a1113a5)
- rename Fire Levels to Burning in combo triggers tab [`d454c4abe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d454c4abe0ed96b16badcb70d6178448f2bf41b3)
- combo editor ? buttons [`0af59699c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0af59699cde98b7d9811b2d1c514110d79a3a76d)
- init data ? button [`fc4409a58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc4409a588d1071b1d93989fd76c774f664f68ed)
- Enemy Editor (#1047) [`3468c5a24`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3468c5a24901379bdde37221bdbf848eb8391237)
   &nbsp;
   >Co-authored-by: Emily Venezia <emilygamergirl99@gmail.com> 
   >

# Tests

- add scripts/replay_uploads.py for downloading and running uploaded replays [`49b3d60e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49b3d60e078dd5f91a9f6aec1c35c3b4c92e7a6a)
- add Database class to nicely automate downloading the database for local use [`3af230f63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3af230f63f5c97384f6a9074561d0e0a288d1f8a)

# Fixup

- fix stupidity in previous commit [`506dffe42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/506dffe425313a5163ff211bc5630b374732da4e)
