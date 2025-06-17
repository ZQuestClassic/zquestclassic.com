---
title: 3.0 Prerelease 112 2025-06-17
description: 
date: 2025-06-17T05:39:36Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.112%2B2025-06-17/3.0.0-prerelease.112%2B2025-06-17-linux.tar.gz
    name: 3.0.0-prerelease.112+2025-06-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.112%2B2025-06-17/3.0.0-prerelease.112%2B2025-06-17-mac.dmg
    name: 3.0.0-prerelease.112+2025-06-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.112%2B2025-06-17/3.0.0-prerelease.112%2B2025-06-17-windows-x64.zip
    name: 3.0.0-prerelease.112+2025-06-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.112%2B2025-06-17/3.0.0-prerelease.112%2B2025-06-17-windows-x86.zip
    name: 3.0.0-prerelease.112+2025-06-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 225771125
tag_name: '3.0.0-prerelease.112+2025-06-17'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- crash from executing some message strings [`cedbfc6b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cedbfc6b8c36503139f7133e55f1d835647072e1)
   &nbsp;
   >If the last command has an argument of value 32, the new string parser was messing up and causing a crash when executing the string.  
   >
   >Regressed recently in 71b272a. 
   >

### Player

- hide bottom 8 pixels for replays started in 2.55 [`eb8fc355b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb8fc355b746cdfdf7cba39b08c9bd9253af7946)
- don't consider "cleared" screens as invalid [`a185a13c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a185a13c2aabe437bac4482633e599ad0d73c7fe)
   &nbsp;
   >regressed 6b5e98d (z3) 
   >

### Editor

- dmap lister "map" number showing off-by-1 [`0a3c8975d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a3c8975dfbdb1c9be65d6b8d16b064be42b242b)

### ZScript

- `Game->LoadScrollingScreen` no longer busted for regions [`ea6218cdb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea6218cdb17488f23911975465d4cbec9f648028)

# Chores

- update replay_uploads_known_good_replays.json [`5ada20514`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ada205147807784a89ace123fc5d5cfb1bae3f5)
