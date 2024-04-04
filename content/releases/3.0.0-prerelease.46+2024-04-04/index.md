---
title: 3.0 Prerelease 46 2024-04-04
description: 
date: 2024-04-03T21:15:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.46%2B2024-04-04/3.0.0-prerelease.46%2B2024-04-04-linux.tar.gz
    name: 3.0.0-prerelease.46+2024-04-04-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.46%2B2024-04-04/3.0.0-prerelease.46%2B2024-04-04-mac.dmg
    name: 3.0.0-prerelease.46+2024-04-04-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.46%2B2024-04-04/3.0.0-prerelease.46%2B2024-04-04-windows-x64.zip
    name: 3.0.0-prerelease.46+2024-04-04-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.46%2B2024-04-04/3.0.0-prerelease.46%2B2024-04-04-windows-x86.zip
    name: 3.0.0-prerelease.46+2024-04-04-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 149848274
tag_name: '3.0.0-prerelease.46+2024-04-04'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- ffc editor now previews large ffcs [`a3cf09ddc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3cf09ddccb8fe166276eeb43b87f5e0a6fb456c)

# Bug Fixes

- Improve dropdown numerical search [`c729bb682`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c729bb682f9962305202f50acec35a1fbb232332)
- reduce sfx buffer to decrease lag caused by e7c214e [`803871558`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80387155842e4481e188a7e5e17eb2a918c9f128)

### Player

- some variables being improperly reset on 'Continue' [`7cfededaa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cfededaaa893717d25821eb01f468de98fa4b94)

### Editor

- 'Notes' and 'Browse Notes' not having menu buttons [`5c338087d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c338087d82dde4f93a1a96658b63723a951fb0e)
- avoid overwriting screen bookmarks on quest load [`771f801de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/771f801dee2fdaa125865a832494839ae6ed8c3d)
- 'Gen Flags' being missing from combo advanced paste [`7a84cbf40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a84cbf40ab3010f8887686c779d419cb2449634)

### ZScript

- don't only show singular deprecation warnings [`88898e22f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88898e22f2ece242ad8ad31a88b88bfdc5960627)

# Refactors

### ZScript Standard Library (std.zh)

- remove instances of deprecated functions [`331bbd4e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/331bbd4e390aa2acc79db9b0fab82fa81df5f390)

### ZScript

- better 'read-only' compile warnings [`bffa9428d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bffa9428d31a233c61b407cf761213283310c525)
   &nbsp;
   >also makes aliases of getters/setters work 
   >

# Tests

- add tests for read-only vars and deprecation [`29094bbe5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29094bbe50708c314aa374e4f6012392e2c68478)
