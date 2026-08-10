---
title: 3.0 Prerelease 211 2026-08-09
description: 
date: 2026-08-10T06:31:19Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.211%2B2026-08-09/3.0.0-prerelease.211%2B2026-08-09-linux.tar.gz
    name: 3.0.0-prerelease.211+2026-08-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.211%2B2026-08-09/3.0.0-prerelease.211%2B2026-08-09-mac-universal.dmg
    name: 3.0.0-prerelease.211+2026-08-09-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.211%2B2026-08-09/3.0.0-prerelease.211%2B2026-08-09-windows-x64.zip
    name: 3.0.0-prerelease.211+2026-08-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.211%2B2026-08-09/3.0.0-prerelease.211%2B2026-08-09-windows-x86.zip
    name: 3.0.0-prerelease.211+2026-08-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 367749543
tag_name: '3.0.0-prerelease.211+2026-08-09'
channel: '3'
tags:
  - releases
---

# Features

### Player

- Add 'Trigger Proximity' option to the Show menu [`81f57d543b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81f57d543b08a33de11bef33460073c37694d473)
   &nbsp;
   >Draws the proximity requirement of every combo trigger in the current region as a circle (or square, for 'Square Area' triggers) around the combo, using the same center point the trigger check uses. Normal proximity requirements draw in cyan, inverted ones in orange. 
   >

# Bug Fixes

- Adjacent lines peeking into the text box in segmented string scrolling [`3e3d614c18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e3d614c18bf30706038b1a73b0f26483f08db02) [Discord](https://discord.com/channels/876899628556091432/1535900998990561350)
   &nbsp;
   >The string margin clipping was recently given 1px of leeway on each side so that text shadows aren't cut off at the box edges. But segmented scrolling packed each segment's lines directly against the next, so that leeway also revealed a sliver of neighboring text: the tops of the next segment's first line, and the bottoms of the previous segment's last line. Segments now have a small gap between them, so the extra leeway can only ever show the segment's own shadows. Fixed in both the player and the editor's string preview.  
   >
   >For non-segmented scrolling, an equivalent overlap between adjacent lines is inherent to a vertical spacing of 0, and can be resolved by giving the string 2 pixels of vspace.  
   >
   >Regressed recently in 3.0.0-prerelease.210+2026-08-08 ([29bc4d8e58](https://github.com/ZQuestClassic/ZQuestClassic/commit/29bc4d8e58)). 
   >

### Player

- Falling rocks and boulders only rained over the first screen of a region [`3175109396`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3175109396d13d4123ef8e17a030fbd723a66a7b) [Discord](https://discord.com/channels/876899628556091432/1504336249303990342)
   &nbsp;
   >When a falling rock or boulder finished a rain cycle, it respawned at a random x within 0-240 (the region's leftmost screen column) and at the very top of the region, so screens beyond the first never saw rocks again after the initial spawn.  
   >
   >Now rocks respawn within the horizontal span of the screen they spawned on, entering from just above the viewport, and recycle once they pass the bottom of the viewport. On non-scrolling screens this matches the old behavior exactly.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)) - z3. 
   >

### Editor

- Explain that trigger conditions also gate copycat-fired triggers [`abc9afec69`](https://github.com/ZQuestClassic/ZQuestClassic/commit/abc9afec6964bb69ec57852083d03f4f79b8358b)
   &nbsp;
   >The combo trigger editor's help text for Proximity, Copycat, and Large Combo Copycat now explains that conditions like the proximity requirement still apply when a trigger is fired via a copycat, and describes the two-trigger setup needed to trigger a whole large combo when the player is near any part of it. 
   >

### ZScript

- Log error when drawing to a layer timing that requires classic drawing order [`500982d4a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/500982d4a67e298b933296a62a258d9fc3777540) [Discord](https://discord.com/channels/876899628556091432/1449284207783317658)
   &nbsp;
   >The special draw layers for weapons, enemies, chainlinks, and itemsprites (SPLAYER_NPC_DRAW etc.) only ever render under the 'Classic Drawing Order' quest rule - with the newer drawing order their queued draws were silently dropped with no indication why. Scripts drawing to them now log an error pointing at the replacement (Graphics->SpriteLayerTarget with SPLAYER_SPRITE_TARGET_UNDER/OVER), rate limited to once per line of script code. 
   >

### Web

- Hot key cheatsheet background was transparent in the web version [`30159912e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/30159912e5680516fcf23b97384d98fd9cd1012d)
   &nbsp;
   >The background overlay, the panel behind the entries, and the first group's header bar were all missing, leaving the map visible through the cheatsheet.  
   >
   >Regressed in 3.0.0-prerelease.7+2023-12-10 ([a491736232](https://github.com/ZQuestClassic/ZQuestClassic/commit/a491736232)). 
   >

# Build

### Web

- Upgrade emscripten to 6.0.6 [`33fd59c1a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33fd59c1a967b1fd6c35cef441442f3d00b79122)
   &nbsp;
   >Notable changes since 4.0.13: LLVM 22 toolchain, musl 1.2.6, and the SDL2 port moved from 2.32.8 to 2.32.10. 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`5677085d2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5677085d2f87ef48e053cdd716e091e7bdd2547d)
- Translate 'Regressed in' references when cherry-picking to 2.55 [`cc11a10c23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc11a10c233cc48a51db7289508458ab7540e337)
   &nbsp;
   >The cherry-pick skill now instructs rewriting 'Regressed in' lines that cite a 3.0 version/commit to cite the 2.55 commit that introduced the regression and the first 2.55 release containing it. 
   >

# Refactors

### ZScript

- Flatten the ZASM variable table [`f5968601da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5968601da2b407215eeb19a0c4977c034e04abb)
   &nbsp;
   >The variable table's ranged entries (D, GD, SCR) required every lookup to check a maxcount field. Generate those entries at compile time with the index baked into the name, and index the whole table by register id in a compile-time array, like the command table already does. Lookups by id are now O(1) and return the entry directly instead of a (entry, offset) pair.  
   >
   >The compile-time index also rejects duplicate ids, which flushed out a few pre-existing duplicate rows and an accidental "NUM" entry that resolved to the D4 register (it took the value of an unrelated local macro).  
   >
   >Also sorts variable_list alphabetically and drops stale section comments. 
   >
- Binary search for ZASM command and variable names [`815e4261b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/815e4261b1e8585e4eb1dca4849e587a987bc490)
   &nbsp;
   >Looking up a command or variable by name scanned the whole table with string compares. Sort a pointer index by name once and binary search it instead. Assigning compiled scripts to slots re-parses the ZASM text and does one of these lookups per instruction and register argument; for playground.qst that stage drops from 41ms to 9ms. 
   >

# Tests

- Don't let web test harnesses touch the network [`1a0bdb1915`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a0bdb19157e735867bb404cc0b69bd99fc61573)
   &nbsp;
   >The web CI job failed once because a transient bad response for the analytics script tripped a COEP block (the test server sends Cross-Origin-Embedder-Policy: require-corp for SharedArrayBuffer, so any cross-origin no-cors response missing a CORP header is blocked), and the harnesses treat any ERR_BLOCKED_BY_RESPONSE console line as fatal.  
   >
   >Abort all non-localhost requests via puppeteer request interception in all three harnesses. The app already tolerates these failing: the quest manifest fetch has a catch that returns [], and analytics is fire-and-forget. 
   >
