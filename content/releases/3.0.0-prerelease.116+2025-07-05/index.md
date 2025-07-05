---
title: 3.0 Prerelease 116 2025-07-05
description: 
date: 2025-07-05T21:35:18Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.116%2B2025-07-05/3.0.0-prerelease.116%2B2025-07-05-linux.tar.gz
    name: 3.0.0-prerelease.116+2025-07-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.116%2B2025-07-05/3.0.0-prerelease.116%2B2025-07-05-mac.dmg
    name: 3.0.0-prerelease.116+2025-07-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.116%2B2025-07-05/3.0.0-prerelease.116%2B2025-07-05-windows-x64.zip
    name: 3.0.0-prerelease.116+2025-07-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.116%2B2025-07-05/3.0.0-prerelease.116%2B2025-07-05-windows-x86.zip
    name: 3.0.0-prerelease.116+2025-07-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 230230690
tag_name: '3.0.0-prerelease.116+2025-07-05'
channel: '3'
tags:
  - releases
---




# Features

- editable MoveFlags for items/lweapons in Item Editor [`7cefc064b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cefc064b9546287b606a2794fb9d56c7ed60dea)
- qr allows weapon scripts to run an extra time at the start of their spawn frame [`ee33a81b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee33a81b90dbf65f0b8d934c4ef047211dc47662)
   &nbsp;
   >This fixes some timing issues, such as a script wanting to make the weapon immune to pits being too late if the weapon spawned ON a pit. 
   >
- A bunch of new combo trigger stuff [`2f114cb23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f114cb239d107000d83842b671f3636474da660)
   &nbsp;
   >- longer timer triggers
   >- triggers can be conditional on LevelStates and GlobalStates in either
   >direction
   >- triggers can un-set an ExState or ExDoor
   >- triggers can use "special counters" (like the subscreen, most
   >importantly the "Any Keys")
   >- Triggers can play strings. Also they can do a different string (and
   >different button prompt) if their "conditions" currently fail.
   >- The "screen load" trigger is now recursive- so if a "screen load"
   >trigger changes the combo to another combo with a "screen load" trigger
   >that will trigger too.
   >- The ability to make the player jump. (Or well, to set the player's
   >Jump value, so it could work for like, a fan slowly blowing you into the
   >air, or to shove you down towards the ground with negatives)
   >- The conditional to only trigger if the player is "standing", or "not
   >standing" (works for sideview as well)
   >- The conditional to only trigger if the player's Z value is `>=` or `<`
   >a set value.
   >- GUI re-organization and cleanup for the trigger gui
   >

# Bug Fixes

### Player

- bottom 8 pixels not rendering cheat-layers (ex.solidity) [`12cf583c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12cf583c5d29e0f3f99c93e378eb65b28628f25b)

### ZScript

- set missing `* 10000` for some flag arrays [`90d1bf436`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90d1bf436fd8a80618221ecd407cd2e736d09194)
- log error when setting invalid value for array [`f974be092`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f974be092110b6b16e125abaecf7fe0dadf3eba6)
   &nbsp;
   >This was done in most cases prior to df3ce207, but I forgot to log an error after this refactor. 
   >
- use correct size for `Screen->D[]` [`7392ce6a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7392ce6a7f8b7ad31d323b42677836dfa9b23958)
- improve some error messages [`d45b69833`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d45b69833d06768b4522b468869d7c4532d2d2eb)
- clear screen/combo scripts in correct order in loadscr [`ff5c78362`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff5c783629f613e646b75424503d81bad10117ac)
- remove object references for params in class functions [`81b19d349`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81b19d3497a89c2583e09432945bfbbb5c88b797)
   &nbsp;
   >This is an edge case missed in 8b72dc5. 
   >
- log error when accessing invalid user object [`8c4b0b26a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c4b0b26a72a0e7986270b99871ec0558ce8328d)

# Documentation

- correctly link enums in comments [`52455b904`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52455b9043432c2a902b4abcd0631159b8e28eaa)
   &nbsp;
   >Likely regressed in f6efa88. 
   >
- fix `Class->Field` incorrectly resolving to `Class` [`495a3c3ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/495a3c3acdbbf6eb3530aea0753f752c92dea014)
- remove SYN typos [`1bee91620`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1bee916202a8c3b3f3784ddc7c9961ee10ea009e)
- use Trace instead of printf in MyFirstScript [`715a4fdce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/715a4fdceb16c54615796c5b10a32f138698f58d)

# Chores

- update replay_uploads_known_good_replays.json [`d02d69c2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d02d69c2f92af73757eb6653223a8778e83df6c5)

# Refactors

### ZScript

- add replay comments for errors if script_trace is on [`7642274e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7642274e6978385de7c9c35eb3fec4d026ae2f8f)
