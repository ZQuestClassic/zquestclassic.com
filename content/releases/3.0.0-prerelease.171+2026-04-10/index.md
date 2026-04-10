---
title: 3.0 Prerelease 171 2026-04-10
description: 
date: 2026-04-10T02:11:57Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.171%2B2026-04-10/3.0.0-prerelease.171%2B2026-04-10-linux.tar.gz
    name: 3.0.0-prerelease.171+2026-04-10-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.171%2B2026-04-10/3.0.0-prerelease.171%2B2026-04-10-mac.dmg
    name: 3.0.0-prerelease.171+2026-04-10-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.171%2B2026-04-10/3.0.0-prerelease.171%2B2026-04-10-windows-x64.zip
    name: 3.0.0-prerelease.171+2026-04-10-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.171%2B2026-04-10/3.0.0-prerelease.171%2B2026-04-10-windows-x86.zip
    name: 3.0.0-prerelease.171+2026-04-10-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 307361211
tag_name: '3.0.0-prerelease.171+2026-04-10'
channel: '3'
tags:
  - releases
---


# Features

### Editor

- Open quests in database folder as read-only [`adbdeeabe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/adbdeeabe7597e1e000468562c9cce6062e769e9)

# Bug Fixes

### Player

- Graphical errors in older quests [`927154ee3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/927154ee3421b79c2b5dd5e76fc1ceaaf7ae4ed2)
   &nbsp;
   >Many older quests were incorrectly drawing the player, held items, or some enemies and weapons over the subscreen.  
   >
   >Regressed in 2.55 alpha 120 (93f25b690). 
   >
- Replays no longer desync on death custom save menu [`5de08c2fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5de08c2fc7763d414a1e9a409e72b30200812cb8)
- Prevent random noise sometimes drawn after custom save menu [`6f0dfa0a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f0dfa0a00694680eec8eb73474e6b96abbed27e)

### Editor

- Use shorter text for screen bookmark [`dcefa2023`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dcefa20238f70aca986bcc0404d49cbe426b1d5f)
   &nbsp;
   >Regressed recently in d653e72. 
   >

### ZScript

- `npcdata->InitD[]` / `WeaponInitD[]` being *10000 [`4541c666f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4541c666fa80b63fafe9c16a1f363d9054019216)

# Chores

- Update replay_uploads_known_good_replays.json [`bea6f9387`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bea6f93872a28a04f61b35d650e81169c099333c)

# Misc.

- Support uploading replays via scripts/upload_loose_files.py [`7aeea117d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7aeea117d9c556df2289d5f036589b6284ebce7c)
- Improve how replay_split.py works to cover more cases [`324cf80ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/324cf80edeeef6ef4a9e5b83416eb99c2d4e1fa3)
