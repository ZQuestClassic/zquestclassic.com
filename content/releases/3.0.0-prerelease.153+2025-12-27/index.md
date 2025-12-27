---
title: 3.0 Prerelease 153 2025-12-27
description: 
date: 2025-12-27T11:36:09Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.153%2B2025-12-27/3.0.0-prerelease.153%2B2025-12-27-linux.tar.gz
    name: 3.0.0-prerelease.153+2025-12-27-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.153%2B2025-12-27/3.0.0-prerelease.153%2B2025-12-27-mac.dmg
    name: 3.0.0-prerelease.153+2025-12-27-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.153%2B2025-12-27/3.0.0-prerelease.153%2B2025-12-27-windows-x64.zip
    name: 3.0.0-prerelease.153+2025-12-27-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.153%2B2025-12-27/3.0.0-prerelease.153%2B2025-12-27-windows-x86.zip
    name: 3.0.0-prerelease.153+2025-12-27-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 272990225
tag_name: '3.0.0-prerelease.153+2025-12-27'
channel: '3'
tags:
  - releases
---


# Features

### Player

- update volume dialog [`45c0e7332`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45c0e733287c7fd5a5e7544d598024c79c481587)

# Bug Fixes

### Player

- use configured `Halt Duration`, `Acceleration Factor` for peahats [`aa36d6084`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa36d60846f59ff115d88358da6a240c8f523bae)
- control schemes not loading properly from config file [`2f83017a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f83017a834a4a276572cfdbf9185061a8cf6c70)

### Editor

- subscreen pages improperly using 256 as max widgets in some places [`34cb44457`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34cb4445760872198843f982bddbb7c767a28837)
   &nbsp;
   >Max widgets per page is now properly 8192 
   >
- total subscreens not properly bounded [`1e3d7979c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e3d7979c8cb9089f14e912bf91eefd0aa7a218a)
   &nbsp;
   >Previously you could create infinite subscreens, and this could potentially corrupt the quest file. Now, after creating your 255th subscreen (of a specific type), the `<New [type] Subscreen>` option no longer appears. 
   >
- Subscreen TileBlock Wizard not saving Width/Height values properly [`c8eeddfdf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c8eeddfdf496f7c2cded75f20155d9accaf08868)

# Refactors

- trim unused dialogs [`ae95e34ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae95e34ad62182324706e24e64ba815a00d4fee3)
- update old `getnumber` dialogs [`b418222d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b418222d8d63b23a6689114a26406b2bdc497b95)
- trim `jwin_auto_alert` dialog [`cddf9f9b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cddf9f9b15d09b0fbaedb4bae5e48703da9aee30)
- remove testing 'foo' dialog [`3b85effbf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b85effbf6f91fd7a5bfa2c95177692e0f614d78)
- change handling for AlertDialog / jwin_alert [`ab5c3b6bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab5c3b6bd416fe33dc2f22d2256e243d4aecfb6b)
   &nbsp;
   >Use 'alert_confirm' helper, no lambdas are required for creating AlertDialogs now jwin_alert replaced with modern displayinfo() and alert_confirm() appropriately 
   >

# Misc.

- update `quests/examples/trigger_example.qst` [`4a50b8a01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a50b8a0167d41f5425e6a8cf233d3a99b9cba4e)
   &nbsp;
   >Add 'Hamiltonian Paths' and 'Lights Out' puzzle examples 
   >

### Player

- update MIDI Info dialog [`1926d732e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1926d732e6d4c676c9b79176d595e8b3c8be5c18)
- update goto cheat dialog [`09d6d254f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09d6d254f5c584045a7b2e44e3ce07769e3d9ef2)
- update 'ZC > Quest Info' dialog [`e72ed380b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e72ed380b1e211ff6f6509d8b59b1cbfeb05709b)
- update 'Screen Saver' dialog, let screensaver take arbitrary seconds value [`46f6a1c47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46f6a1c476ef1e17a05ea7d53d873ebddf765ab0)
