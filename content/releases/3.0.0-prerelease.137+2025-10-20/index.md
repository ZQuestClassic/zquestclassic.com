---
title: 3.0 Prerelease 137 2025-10-20
description: 
date: 2025-10-20T02:34:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.137%2B2025-10-20/3.0.0-prerelease.137%2B2025-10-20-linux.tar.gz
    name: 3.0.0-prerelease.137+2025-10-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.137%2B2025-10-20/3.0.0-prerelease.137%2B2025-10-20-mac.dmg
    name: 3.0.0-prerelease.137+2025-10-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.137%2B2025-10-20/3.0.0-prerelease.137%2B2025-10-20-windows-x64.zip
    name: 3.0.0-prerelease.137+2025-10-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.137%2B2025-10-20/3.0.0-prerelease.137%2B2025-10-20-windows-x86.zip
    name: 3.0.0-prerelease.137+2025-10-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 255650407
tag_name: '3.0.0-prerelease.137+2025-10-20'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- lift glove action script clearing owned script objects after first frame [`94f6dd138`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94f6dd1380cf9d475a40913b96161d0901346f7a)
- Active shields and Passive Button Roc Items not running scripts [`761d86407`](https://github.com/ZQuestClassic/ZQuestClassic/commit/761d86407533716f3269530111aa835eea178019)
   &nbsp;
   >Active shields (either standard or set on a passive button), and Roc Items (set on a passive button) were not running their Action Script when used. 
   >
- hookshot wedging the player into walls sometimes. [`e9dfa8509`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9dfa8509220a44f7efdf70444f05f32dd3d9ad1)
   &nbsp;
   >This bug has apparently been present since 2.50.2, and already HAD a fix implemented, the fix was just very slightly broken. 
   >

### ZScript

- support changing BS-Zelda animation, many scrolling related QRs [`bf5ce3c98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf5ce3c9820874e058d309477b8cb298608b312e)
- prevent crash in `Game->GetItem()` [`3271a7f75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3271a7f75df4283f8de6d1ba3f123ab2346521c5)
- prevent crash when using empty string with some file functions [`05c8afe1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05c8afe1fb3f26529f1e096f96deecefaa560302)
- improve unsafe code in STARTDESTRUCTOR/ZCLASS_MARK_TYPE commands [`7ff9ca9c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ff9ca9c9621ba566062020ae358bb4d2763dd70)
- add back some accidentally removed commands/registers [`90aa2e38f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90aa2e38f376a559443f4107f9b156b16173102a)

# Chores

- update replay_uploads_known_good_replays.json [`379623a48`](https://github.com/ZQuestClassic/ZQuestClassic/commit/379623a481b4db63dd4daa48ff189b5960ae6957)
