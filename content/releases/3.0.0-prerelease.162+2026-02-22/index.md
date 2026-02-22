---
title: 3.0 Prerelease 162 2026-02-22
description: 
date: 2026-02-22T00:25:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.162%2B2026-02-22/3.0.0-prerelease.162%2B2026-02-22-linux.tar.gz
    name: 3.0.0-prerelease.162+2026-02-22-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.162%2B2026-02-22/3.0.0-prerelease.162%2B2026-02-22-mac.dmg
    name: 3.0.0-prerelease.162+2026-02-22-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.162%2B2026-02-22/3.0.0-prerelease.162%2B2026-02-22-windows-x64.zip
    name: 3.0.0-prerelease.162+2026-02-22-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.162%2B2026-02-22/3.0.0-prerelease.162%2B2026-02-22-windows-x86.zip
    name: 3.0.0-prerelease.162+2026-02-22-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 289071901
tag_name: '3.0.0-prerelease.162+2026-02-22'
channel: '3'
tags:
  - releases
---


# Bug Fixes

### Player

- perm bunny status trigger not working [`df23b9247`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df23b924741fd09b77a7657708655257e74bc9dc)
   &nbsp;
   >'-1' bunny timer is the dmap bunny value, so the dmap was curing it. 
   >
- reset cursor after canceling new file [`0e011269b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e011269b52e94e0c1b01145a9e24f8f11dd38a2)
   &nbsp;
   >The heart cursor was sometimes displaying at an invalid position. 
   >

### Editor

- correct combo flag placement when zoomed out [`09c841647`](https://github.com/ZQuestClassic/ZQuestClassic/commit/09c84164749a635818e7663d734b48bfdf61f0e6)
- do not clear selected screen when File>New is opened [`d51e1fe95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d51e1fe955eaa54c30bcfbe31f617bc1f90e2085)
   &nbsp;
   >This dialog can be cancelled, but when doing that the selected screen (including all bookmark screen buttons) were being incorrectly cleared. 
   >

### ZScript

- better suppression of errors in debugger [`0c2de12f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c2de12f56712e1adf27cb53ae6ddb62a2b0f3fd)
   &nbsp;
   >When the engine errors from a debugger action, the particular action determines if the error is useful to show.  
   >
   >For example, errors that happen when evaluating the variable under the mouse cursor, or from a watch expression, are likely transient and should be not logged. But errors from expressions evaluated in the console are likely to be of interest. 
   >
- correct SCROLL_NY for first frame [`5c74118a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c74118a07326b81d46ede4bf5e08ed845699dbf)
   &nbsp;
   >When the original and new viewports differ in height, the first frame of scrolling was reporting the wrong value for `SCROLL_NY`. 
   >
- DRAW_ORIGIN_REGION_SCROLLING_NEW outside scrolling [`1c6b72e8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c6b72e8cb42fa3fa58e88baaa55198b7373de5b)
   &nbsp;
   >Incorrect coordinates were being used for DRAW_ORIGIN_REGION_SCROLLING_NEW draws outside scrolling. 
   >
- major performance regression while tracing in old quests [`8a2c13927`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a2c139275072f91931827044cbdfb2f539bbf05)
   &nbsp;
   >This recently regressed from the debugger feature (9b2cfd68). 
   >

# Documentation

### ZScript

- add examples using `Screen->DrawOrigin` [`33effdbf0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33effdbf0d5b560b1758767ea27d246f6cdb4475)
- add existing websocket example to examples page [`dd3548fd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd3548fd0a286c4be6d6429b5cbff7d76e59f2d4)

# Chores

- update replay_uploads_known_good_replays.json [`eb2bbba86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb2bbba861021113b56d4a54092c4532608623b7)

# Refactors

- organize code into base, zalleg, core, components [`582c71965`](https://github.com/ZQuestClassic/ZQuestClassic/commit/582c719656dda7d06dac49552f87fb7b584eb3c6)

### Player

- clean up title cursor logic [`6eda1c5f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6eda1c5f6f96e6214ef2da0cdd5966c676fad55f)
