---
title: Nightly 2023-08-19
description: 
date: 2023-08-19T04:39:23Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-19/nightly-2023-08-19-linux.tar.gz
    name: nightly-2023-08-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-19/nightly-2023-08-19-mac.dmg
    name: nightly-2023-08-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-19/nightly-2023-08-19-windows-x64.zip
    name: nightly-2023-08-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-19/nightly-2023-08-19-windows-x86.zip
    name: nightly-2023-08-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 117850993
tag_name: 'nightly-2023-08-19'
channel: '2.55'
tags:
  - releases
---



# Features

- add software updater [`5b3162034`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5b3162034226d0a7d0e00679df0080eb0fd5d16e)
   &nbsp;
   >ZUpdater looks for the newest versions, and allows you to download and replace your current installation with it.  
   >
   >You can run `zupdater.exe` directly, or you can use the new "Update" tab in ZLauncher. ZLauncher also has an option to auto-focus the tab on startup if a new version is detected.  
   >
   >Note: this feature currently requires Python 3 to be installed.  
   >
   >Also: drive-by fixes for launching a process on unix, though the updater feature doesn't use this. 
   >

### Player

- record music and sfx position for scripts in replays [`7c1bd3b22`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7c1bd3b22d61b033397fc04514b3f14bc6a5bd2c)

# Tests

- disable sound for mac in CI [`9a68ee085`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9a68ee085b8a4d79328777fd1894c26ca073bfe4)
   &nbsp;
   >For some reason this started hanging the --no-headless tests, and crashing other tests on exit. 
   >
- skip sound driver in headless mode for zquest [`188452305`](https://github.com/ArmageddonGames/ZQuestClassic/commit/18845230507a25bfb68b86647e11e0ac5b4bf988)

