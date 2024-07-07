---
title: 3.0 Prerelease 58 2024-07-07
description: 
date: 2024-07-07T04:40:44Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.58%2B2024-07-07/3.0.0-prerelease.58%2B2024-07-07-linux.tar.gz
    name: 3.0.0-prerelease.58+2024-07-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.58%2B2024-07-07/3.0.0-prerelease.58%2B2024-07-07-mac.dmg
    name: 3.0.0-prerelease.58+2024-07-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.58%2B2024-07-07/3.0.0-prerelease.58%2B2024-07-07-windows-x64.zip
    name: 3.0.0-prerelease.58+2024-07-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.58%2B2024-07-07/3.0.0-prerelease.58%2B2024-07-07-windows-x86.zip
    name: 3.0.0-prerelease.58+2024-07-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 164287765
tag_name: '3.0.0-prerelease.58+2024-07-07'
channel: '3'
tags:
  - releases
---




# Features

- add Shield Jinx trigger (#941) [`985904538`](https://github.com/ZQuestClassic/ZQuestClassic/commit/985904538f8feccbbf9ec8f92b7669061638d6e0)

### Player

- add opt-in automation for uploading replays [`36f5d0810`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d0810984635b7cb19c077b1d1654e07a2a01)
   &nbsp;
   >When enabled, once a week replays are uploaded to a server when the program exits. Only replays of known quests from the database are uploaded. There is also an option to manually trigger this process rather than enabling it automatically.  
   >
   >Please consider enabling this, as it greatly helps out with development by allowing us to prevent bugs. This is important for any new features we add, but extremely so for the upcoming Z3 scrolling overhaul.  
   >
   >See `docs/replays.md` for more information about the replay system. 
   >

# Bug Fixes

- avoid crash when loading midi using native file dialog [`a038d2250`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a038d22507a2f251d70d0cb191d2b2343cdb1b68)

### Player

- kill all sound effects for passageways, item cellars, and when stepping out of a warp (#942) [`9f699e76c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f699e76ccc07257d054604f6a331891cf22ea16)
- [windows] save path being cut off in log [`bbe76c4fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbe76c4fbe34feb413e9fd0d2e23f8353a38a976)
- resolve replay qst against quests dir, handle missing file better [`95dc9e97a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95dc9e97adf813e4ec5fe79bfd8dd3db582e80f5)
- prevent replay save from happening on title screen [`fde75056d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fde75056d818517c3c64c6bacdac50c4495d8ba9)

### Editor

- [windows] Load Tileset with native file dialog no longer busted [`408b83815`](https://github.com/ZQuestClassic/ZQuestClassic/commit/408b838159045d9551aca223e90195961b8fc43a)

### ZLauncher

- remove defunct "Allow Multiple Instances" option [`5e78d1603`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e78d16036b5e4bd74ec497d998b1e78250c7d23)

# Refactors

### Player

- remove epilipsey dialog on fresh install, add toggle in launcher [`e888bff41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e888bff41782e734ccdbd30949e81b9fa45f7a3f)
- remove prompt about recording when starting a new save file [`dc77b2020`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc77b20204c06431286cb2d3d608402b934cab71)

# Misc.

### Player

- add qst_title, qst_hash as replay meta fields [`2e0ed2b04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e0ed2b0407e9686d77823f9a52fcb29c07b49b3)
