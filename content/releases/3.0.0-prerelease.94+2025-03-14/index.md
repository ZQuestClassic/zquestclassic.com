---
title: 3.0 Prerelease 94 2025-03-14
description: 
date: 2025-03-14T02:26:18Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.94%2B2025-03-14/3.0.0-prerelease.94%2B2025-03-14-linux.tar.gz
    name: 3.0.0-prerelease.94+2025-03-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.94%2B2025-03-14/3.0.0-prerelease.94%2B2025-03-14-mac.dmg
    name: 3.0.0-prerelease.94+2025-03-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.94%2B2025-03-14/3.0.0-prerelease.94%2B2025-03-14-windows-x64.zip
    name: 3.0.0-prerelease.94+2025-03-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.94%2B2025-03-14/3.0.0-prerelease.94%2B2025-03-14-windows-x86.zip
    name: 3.0.0-prerelease.94+2025-03-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 205772298
tag_name: '3.0.0-prerelease.94+2025-03-14'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- make overlay subscreens 8 pixels taller when bottom 8 pixels are enabled [`15210289f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15210289ff3976f536df670786631afd465e4f1a)

### Player

- prevent crash by disallowing bottom 8px change during active subscreen [`869aa9a52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/869aa9a525482b2c92b179a9540a35709f25d5d9)
- show bottom pixels default option now works during quest init [`56d4dbe9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/56d4dbe9c6d2e8d5f7cb8e71fffb40e9697dadac)

### ZScript

- bad type checking for default parameters [`6176466b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6176466b18f3d0e5818432be66c4bc633209c475)
   &nbsp;
   >This regressed recently in d2dd3ee. 
   >
