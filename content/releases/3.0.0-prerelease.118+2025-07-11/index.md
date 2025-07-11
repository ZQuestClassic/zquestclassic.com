---
title: 3.0 Prerelease 118 2025-07-11
description: 
date: 2025-07-11T03:49:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.118%2B2025-07-11/3.0.0-prerelease.118%2B2025-07-11-linux.tar.gz
    name: 3.0.0-prerelease.118+2025-07-11-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.118%2B2025-07-11/3.0.0-prerelease.118%2B2025-07-11-windows-x64.zip
    name: 3.0.0-prerelease.118+2025-07-11-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.118%2B2025-07-11/3.0.0-prerelease.118%2B2025-07-11-windows-x86.zip
    name: 3.0.0-prerelease.118+2025-07-11-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 231684251
tag_name: '3.0.0-prerelease.118+2025-07-11'
channel: '3'
tags:
  - releases
---




# Features

- allow an 'active shield' to have a specified button that activates it [`726205f97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/726205f97f262c3832f5ca5b872252a518b18d08)
- set bottle contents in Init Data / Cheat Menu [`7bf318ba0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7bf318ba0f43d65eadbcd1f682542b4153e8b9ab)
- conveyor flag to affect airborne entities. [`11f8b8704`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11f8b8704a69f13a6f526716a8f23e52dde2da63)
   &nbsp;
   >Works exactly like the screen flag "Combos affect Midair Hero", but specified on the conveyor itself. 
   >
- "Only Visible In Editor" combo flag [`629ba7450`](https://github.com/ZQuestClassic/ZQuestClassic/commit/629ba745099f4ac221555b5eeffef5accd2d3c6a)
- Even more combo trigger features [`89c5876ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89c5876ef2854c163411318a7a33264904441473)
   &nbsp;
   >- hero facing direction conditional
   >- counter "percentage" / "gradual" flags
   >- copycat "no cause" flag
   >- "Land Here->"/"Land Anywhere->" causes
   >- Move (teleport) Player effects
   >- Player position / jump speed conditionals
   >- combo type specific causes (currently only pitfalls/liquid)
   >- "Load Level Palette" effect can now use "-2" to load the current screen's "Editor F4 Palette"
   >

### Editor

- 'Shift+Plus'/'Shift+Minus' in trigger editor now swap to next/prev trigger [`93519c5a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93519c5a6181236bbbd127830d3d886ffb23b5e4)

### ZScript

- automatic array/string management; improved internal arrays [`4b40449cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b40449cc86411fcb95624069762fd57ffbaa8d5)
   &nbsp;
   >- arrays (which includes strings) are automatically freed by garbage
   >  collector when no longer used (if appropriately typed as an array)
   >- removed constraints for local arrays (no more `Temporary literals
   >  cannot be stored!`). Can now return local arrays (and strings) from
   >  functions
   >- internal arrays (like `Screen->D[]`) can be used like any other array:
   >  assign to another variable, get the length with `SizeOfArray`, use w/
   >  `for` loops, etc.
   >- arrays assigned to a global variable or otherwise reachable from a
   >  saved object always persist to the save file
   >- references to internal arrays expire when their engine object is
   >  destroyed (ex, when a lweapon is destroyed, or when a new screen is
   >  loaded); they also don't persist to the sav file (will just load as
   >  `NULL`)
   >

# Bug Fixes

- rope speed QR being stuck always on [`7ca0c966e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ca0c966eb21ddcb3b0371e76325ac1fc9fc38aa)

### Player

- ExStates not properly triggering a limited set of effects in some cases [`6fcd02702`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fcd02702518f3eb02c5ace0971823884bef8174)
- exclude qsts with scripted subscreens from bottom 8 px [`debd4e1cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/debd4e1cf5bbca3d0c82b1c46ebf20dbdf872f8b)
   &nbsp;
   >2.55.8 and older quests with scripted subscreens will hide the bottom
   >8 pixels for the "Default (qst)" option.
   >
- bombs that are auto-lifted being immediately thrown [`72dd9c647`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72dd9c64772b3fe0eb1c864aab948b92cf782bcc)
   &nbsp;
   >This regressed in 2.55.8. 
   >
- stop softlocking when using hookshot into slope [`4482a64bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4482a64bc7af30d11d85a12fd4dfeeba0bba56ad)
- conveyors not properly forcing direction between movements [`c60b293c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c60b293c61e9b545449c7f79f55a4eca7d5fb38f)
- conveyor force dir / spin issue [`1e35f89a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e35f89a4f94ba76a20286d9ff0d1feca46a35bb)
- prevent scrolling over liquid/pits that should drown/fall you [`7f5820d59`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f5820d5916bcfb725d3c90e8995ea7c56f9062b)
- ExDoors being like, entirely broken [`d8dd0727d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8dd0727dcb3c1a2e690c710e3d42aed34a7af35)
- Some combo trigger fixes [`c4d9d48b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4d9d48b4098c15c8fb134c4881234fd8933d83a)
   &nbsp;
   >- 'when screen loads' trigger not timed properly (too early in some cases)
   >- proximity trigger not using proper position during screen load / scrolling
   >
- remove incorrect ASSERT for whistle item with no sound [`af1586ae0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af1586ae0987360a7cffe8897c47c8c6425411ae)

### Editor

- negative values starting with `0.` not working in some textfields [`253ec85eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/253ec85eb0309d4d93531eacafb39a2e133391c4)
- trigger 'cause'/'effect' warnings missing some triggers [`312792d55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/312792d556b75fb96c314a0f660de5bf5e20b578)
- sfx/midi listers resetting to top of list repeatedly [`99115c425`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99115c425f23fcf3a3c1eb02c2970e2f0c09c6d5)
- sfx dialog not updating name when changed via `Load`/`Default` buttons [`86b969c93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86b969c93fd6f6b1513d28f4bba83c3cfe28c57f)
- 'Force Walk' flag missing from conveyor combo wizard [`faafe4478`](https://github.com/ZQuestClassic/ZQuestClassic/commit/faafe4478b1ee18b647ecdae2c31ca4898e5ac8b)

# Chores

- add changelog overrides [`0b7eb2efa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b7eb2efa79c2e8f127864ecf78c3807beb1cd62)

# Refactors

### ZScript

- make a couple tweaks to the object autorelease pool [`fc955ec8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc955ec8e93b225e95b0591f28b611f128ce64d9)
   &nbsp;
   >- consider objects in pool to be "reachable" during garbage collection
   >- remove objects from pool when stored somewhere
   >

# Tests

- upgrade puppeteer to 24.12.0 [`417c92959`](https://github.com/ZQuestClassic/ZQuestClassic/commit/417c929596efc220cfe594e6432e9dfad8fdd481)

# Misc.

- add `quests/trigger_example.qst` [`2e886e3e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e886e3e1473be779843e5055d3a723c7d7ba88b)
