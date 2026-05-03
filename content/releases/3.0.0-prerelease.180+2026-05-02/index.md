---
title: 3.0 Prerelease 180 2026-05-02
description: 
date: 2026-05-03T06:49:36Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.180%2B2026-05-02/3.0.0-prerelease.180%2B2026-05-02-linux.tar.gz
    name: 3.0.0-prerelease.180+2026-05-02-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.180%2B2026-05-02/3.0.0-prerelease.180%2B2026-05-02-mac.dmg
    name: 3.0.0-prerelease.180+2026-05-02-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.180%2B2026-05-02/3.0.0-prerelease.180%2B2026-05-02-windows-x64.zip
    name: 3.0.0-prerelease.180+2026-05-02-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.180%2B2026-05-02/3.0.0-prerelease.180%2B2026-05-02-windows-x86.zip
    name: 3.0.0-prerelease.180+2026-05-02-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 316820865
tag_name: '3.0.0-prerelease.180+2026-05-02'
channel: '3'
tags:
  - releases
---


# Bug Fixes

- OGG SFX not properly cleaning up allocated stream when stopped [`f551b55bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f551b55bc2c1da9c281b07c4af665dde15015bc8)
   &nbsp;
   >This caused an OGG used for a Whistle sfx to softlock. 
   >

### Player

- Save options that continue/reload/exit failing to run generic scripts [`6ae1001c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ae1001c9be4269910b99308f080d62efe4b507f)
- Reset viewport mode in loadscr, not scrollscr [`87e1e7da4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87e1e7da451786aebcb26a77233fc3f77f0ce05d)

### Editor

- 'block' missing from 'Mirror (Custom)' attribute help [`84b6fa389`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84b6fa389098d15e21e015165fa33342fc2dc238)

### ZScript

- Set `Hero->SpawnScreen` to initial screen entered in region [`ae910a759`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae910a75965ad3c2c0ddf8edfe059a7b8a64859e)
- Support pausing in debugger during busy loop [`1663c510c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1663c510c6bda3108a2292c82ff18c7ccc6067a2)
- Ensure deterministic symbol lookup for function links [`3e0250222`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e02502224b65d84c70e27eba6bacd9595100f4a)
   &nbsp;
   >For documentation symbol links, the compiler now chooses consistently between multiple functions with the same name by prioritizing:  
   >
   >1. Functions defined in the same file as the comment.
   >2. Internal binding functions.
   >3. Stable function IDs as a final tie-breaker.
   >
- Avoid potential crash during gc if invalid object is found [`9d01141c9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d01141c9ac51b7252d9bb7af4f4797cecb887bb)
- Fix region coordinate and direction logic for WarpEx [`b5e4c45b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5e4c45b36fb8a59a44046d2053a55c66e6f5a2a)

# Documentation

- Prevent duplicate library documentation [`b43c2e8ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b43c2e8aec777c573b26bdb8446438d8d237d3ae)
   &nbsp;
   >Fixed a bug in the documentation generator where library files could be documented multiple times if their paths matched more than one library keyword (e.g. `std_zh/ghostBasedMovement.zh` matching both `std` and `ghost`).  
   >
   >Each file is now assigned to exactly one library based on the first match in the library list, ensuring stable Sphinx labels and correct internal links.  
   >
   >Also corrected a variable leak in `process_lib`. 
   >
- Document all infra stuff [`ce04ef64d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce04ef64d66e2739dad64e8a78e77b3755dbac42)

# Build

- Stop generating context_strings.cpp in build process [`5fc37ddbe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5fc37ddbeda5dc29f08afabed923c519089b0329)

# Refactors

### ZScript

- Increase ZASM hang threshold [`93e16b8d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93e16b8d3ddfa0cda0d971e68ec3c8ed452f573d)
   &nbsp;
   >Every set number of ZASM instructions, the scripting engine checks if the player hit F9 or F10 to allow them to quit during an infinite loop. The default was to check every 1000 instructions, but that is way too frequent. Now, the engine checks every 100k instructions. This reduces the amount of unnecessary overhead related to checking for key events. 
   >

# CI

- Fix missing timezone data on windows [`e6dcc1682`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e6dcc168225d88bee03c076b484f7353cbab2662)
- Fix replays tests w/o JIT never running [`3b127026b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b127026b4a1fbf74e3b9b18e2e7529a5c430321)
- Set --artifact-name in extract-package command [`bb73af3e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb73af3e5784bd05e9c72e58bd6c12180bd5b79d)

# Misc.

- Tweak date stuff in package.py [`b57a7a8f1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b57a7a8f1cf4f6dadeb42596753e7991aae2b1a0)
- Create infra/ folder, move api_server configs there [`b9567a4fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9567a4fe81aba8b5d2f6377d73b8566c031fefc)
- Fix minor issue with package script changelog path [`379959e81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/379959e81fefb27537ff52fc36ca986b8797848e)
- Automatically deploy docs [`e8e9702c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8e9702c77485fc696fec1caa0d8fd7c80acd543)
   &nbsp;
   >Also sets up for self-hosting docs.zquestclassic.com on DigitalOcean 
   >
- Revert recent change to get_doc_data [`c9429932d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9429932dd54bdd417688fd6924b33c52d4a6a2d)
- Prevent docs-www/update.sh failing on windows [`b92f87ece`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b92f87ece905507baadaf627ccbeb69e9cd8b5d8)
