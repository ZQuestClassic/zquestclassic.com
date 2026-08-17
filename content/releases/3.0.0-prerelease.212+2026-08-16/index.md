---
title: 3.0 Prerelease 212 2026-08-16
description: 
date: 2026-08-17T00:56:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.212%2B2026-08-16/3.0.0-prerelease.212%2B2026-08-16-linux.tar.gz
    name: 3.0.0-prerelease.212+2026-08-16-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.212%2B2026-08-16/3.0.0-prerelease.212%2B2026-08-16-mac-universal.dmg
    name: 3.0.0-prerelease.212+2026-08-16-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.212%2B2026-08-16/3.0.0-prerelease.212%2B2026-08-16-windows-x64.zip
    name: 3.0.0-prerelease.212+2026-08-16-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.212%2B2026-08-16/3.0.0-prerelease.212%2B2026-08-16-windows-x86.zip
    name: 3.0.0-prerelease.212+2026-08-16-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 371494310
tag_name: '3.0.0-prerelease.212+2026-08-16'
channel: '3'
tags:
  - releases
---

# Bug Fixes

### Editor

- Resolve qst-relative script include paths before ever reloading the qst [`5b2c376746`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b2c376746d1753f8e4e4fccb811649b8379255f)
   &nbsp;
   >The compiler resolves the implicit `<qst dir>/scripts` include path from the quest's recorded file location, which was only updated when loading a quest but not when saving one. So for a newly created quest (or after Save As to a new folder), compiling could not find scripts in the "scripts" folder next to the qst until the file was reloaded.  
   >
   >Bug introduced when implicit qst-relative include paths were added in 3.0.0-prerelease.163+2026-03-01 ([eeb9d19c20](https://github.com/ZQuestClassic/ZQuestClassic/commit/eeb9d19c20)). 
   >
- Don't try next recent quest when cancelling a password prompt [`877f744fd9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/877f744fd939a1d25c093d8a926e92d0d4d5235e) [Discord](https://discord.com/channels/876899628556091432/1538347161731993622)
   &nbsp;
   >At startup with "Open Last Quest" enabled, cancelling the password prompt for a passworded recent quest made the editor move on to the next quest in the recent list, prompting for each passworded quest in turn.  
   >
   >Now only a missing quest file advances the search: any other failure falls through to the new-quest dialog.  
   >
   >Regressed in 3.0.0-prerelease.207+2026-08-04 ([065e21f813](https://github.com/ZQuestClassic/ZQuestClassic/commit/065e21f813)). 
   >

### ZScript

- Don't print the log prefix mid-line for partial prints [`046e6d2a2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/046e6d2a2f6cdc04b4a858194f804707aa02caab)
   &nbsp;
   >Printing without a trailing newline (e.g. printf followed by more prints intended for the same line) inserted the trace prefix before every print, littering the line with stray ": " separators. The prefix is now only printed when starting a new line.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([9b2cfd68e4](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b2cfd68e4)). 
   >
- Avoid quadratic slowdown when freeing many script objects [`2da95666c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2da95666c12142995d6598510828ed4712bd5015)
   &nbsp;
   >A script that created a very large number of objects (such as tens of thousands of temporary strings in a single frame) would stall for up to a minute when those objects were freed: each object deletion linearly scanned the by-type id list, and each newly-retained object linearly scanned the autorelease pool. Both operations are O(1) now.  
   >
   >Regressed in 3.0.0-prerelease.45+2024-04-02 ([d4bc547f8e](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4bc547f8e)). 
   >
- Don't print a bare ': ' before traces with no context prefix [`ce08e9facd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce08e9facd19c0c67164f6576eed0246363670a7)
   &nbsp;
   >When neither the 'Print Script Metadata on Traces' quest rule nor dev logging was enabled, script trace output (Trace, printf) started every line with a dangling ': '. Now such lines print with no prefix at all, as they did before.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([9b2cfd68e4](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b2cfd68e4)). 
   >

# Documentation

- Add AI disclosure [`fa61adaed3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa61adaed30faf8c8468494db4747dd6f2e0a026)

# Chores

- Update replay_uploads_known_good_replays.json [`e24060aabe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e24060aabe46787d7eb68fef8500fa5b3d0dd197)

# Misc.

- Add 2.55.16 changelog [`214e708748`](https://github.com/ZQuestClassic/ZQuestClassic/commit/214e708748c3b6f8a29a4ea32de748458acdb69f)
- Tweak agent instructions for commit messages [`6863c73699`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6863c7369952b32bc49b4da4e5e9c7ec15ecd625)
