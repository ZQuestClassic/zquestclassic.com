---
title: 3.0 Prerelease 91 2025-02-21
description: 
date: 2025-02-21T03:55:13Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.91%2B2025-02-21/3.0.0-prerelease.91%2B2025-02-21-linux.tar.gz
    name: 3.0.0-prerelease.91+2025-02-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.91%2B2025-02-21/3.0.0-prerelease.91%2B2025-02-21-mac.dmg
    name: 3.0.0-prerelease.91+2025-02-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.91%2B2025-02-21/3.0.0-prerelease.91%2B2025-02-21-windows-x64.zip
    name: 3.0.0-prerelease.91+2025-02-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.91%2B2025-02-21/3.0.0-prerelease.91%2B2025-02-21-windows-x86.zip
    name: 3.0.0-prerelease.91+2025-02-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 201587818
tag_name: '3.0.0-prerelease.91+2025-02-21'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- draw ffcs in correct layer order in scrolling regions [`eb1b19f10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb1b19f102130cfe337d80c602305cd1acdf4b31)
- prevent crash when loading some quests (recent regression) [`6b028a02d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b028a02dfc93f51083f9990f7d2406e39b664c9)

# Refactors

- clean up includes in sprite.cpp [`ee69af38d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee69af38dbdf34b3a769f4c7177d59d5ff6630bd)
- move Hero extern to header [`ef61b6136`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef61b61363277c488bbd02344499a8c77620bf4c)
- move particles extern to header [`92136e1c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92136e1c93b0b4c9fd42afda7bbfd0f4d627ed68)
