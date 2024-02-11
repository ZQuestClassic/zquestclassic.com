---
title: Nightly 2024-02-11
description: 
date: 2024-02-11T07:50:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-11/nightly-2024-02-11-linux.tar.gz
    name: nightly-2024-02-11-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-11/nightly-2024-02-11-mac.dmg
    name: nightly-2024-02-11-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-11/nightly-2024-02-11-windows-x64.zip
    name: nightly-2024-02-11-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-11/nightly-2024-02-11-windows-x86.zip
    name: nightly-2024-02-11-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 141526585
tag_name: 'nightly-2024-02-11'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- fix mirror shield not resetting the last used mirror combo position [`2c375403a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2c375403a92f3492288e7f30cbc57c2bd5d390ee)
- save select screen not showing new hp after save->reset [`8d15352e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d15352e58c164ff3f050e64e8fbc9bf43733ec9)
- load default quest for sfx when loading replay [`4bc56aef2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4bc56aef26c1aa3fa1c2ca3486acb00738d5cb3c)
   &nbsp;
   >Quests before custom sfx rely on the default quest providing sfx, but that wasn't being loaded when playing back a replay. So it would either use whatever the last quest loaded, or have nothing, which was the case for the replay test script. 
   >

# Tests

- make the editor File->New test do what it says it does [`f0b6972ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0b6972ea44477da773ddd4670876f5ae33ed7a5)
- add goriya_moblin_war.zplay [`bbce9f9fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbce9f9fbb438fd24e94815856172b49a92eb64c)

