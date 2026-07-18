---
title: 3.0 Prerelease 200 2026-07-18
description: 
date: 2026-07-18T17:54:45Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.200%2B2026-07-18/3.0.0-prerelease.200%2B2026-07-18-linux.tar.gz
    name: 3.0.0-prerelease.200+2026-07-18-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.200%2B2026-07-18/3.0.0-prerelease.200%2B2026-07-18-mac.dmg
    name: 3.0.0-prerelease.200+2026-07-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.200%2B2026-07-18/3.0.0-prerelease.200%2B2026-07-18-windows-x64.zip
    name: 3.0.0-prerelease.200+2026-07-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.200%2B2026-07-18/3.0.0-prerelease.200%2B2026-07-18-windows-x86.zip
    name: 3.0.0-prerelease.200+2026-07-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 356169290
tag_name: '3.0.0-prerelease.200+2026-07-18'
channel: '3'
tags:
  - releases
---

# Features

- Configure message more sprite per-string [`07298c33d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07298c33d3fccdef3e8f241f7b9124ab725b95f8)
   &nbsp;
   >each string can now have it's own 'more' sprite, and the 'more' sprite can be positioned relative to multiple points on the message box (ex. bottom-right) to allow better positioning options. 
   >
- Configure the delay before strings allow you to advance the text [`75e800e54a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75e800e54ab9279331d9bcb2ec43d18d53e78ffc)
   &nbsp;
   >Configured once for all strings, default 50 frames. 
   >
- Message Strings can now scroll when too large for the box [`17199000f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17199000f734c13124f1ca95ebd0398f1d2f563c)
   &nbsp;
   >Scroll Up and Scroll Down icons can be configured per-string, similar to the 'More' icon.  
   >
   >By default, scrolling is 'freeform'- the textbox scrolls as more text is added, and when the text pauses waiting for player input, the player can press up/down to scroll through the text.  
   >
   >'Messages Scroll In Segments' QR changes this to instead scroll in segments. This breaks single large strings up into message-box-height tall segments that the player has to press to advance past each of, and scrolling back up through the segments scrolls segment-by-segment in chunks. 
   >
- More sfx configuration for strings [`bd8f072734`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd8f0727340c7926478560f940b008836d27a3a5)
   &nbsp;
   >set sfx for menu choice changing, menu closing, and advancing to 'more' text. 
   >

### Editor

- Improve string preview; scrolling + portraits + positioning [`799705d09f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/799705d09fecd30acec1517fb054fe8a084438f6)
   &nbsp;
   >The string editor preview now previews the positioning and portrait of the string. Portrait change SCCs are not previewed. Scrolling strings can preview the scroll via scrollwheel and a new scrollbar. 
   >

### ZScript

- @ExportInitD0 - @ExportInitD7 [`e8f9357639`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8f935763943ab99ba263177449ede0c67135794)
   &nbsp;
   >Using multiple annotations for one thing is a bit bulky. With this new annotation, specify all the information about an InitD at once! ex. `@ExportInitD0("Speed", "Movement Speed in px/frame")` to specify a name + helptext. A 3rd parameter can be supplied to specify the field type. This combines `@InitD0()`, `@InitDHelp0()`, and `@InitDType0()` into a single annotation. 
   >

# Bug Fixes

- Add missing break in allegro_legacy mouse handler [`715a05eed9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/715a05eed989af1263a29f03995c2518bd7fd87f)
   &nbsp;
   >ALLEGRO_EVENT_MOUSE_ENTER_DISPLAY was missing a break, which set the wrong value for _mouse_on. But ZC doesn't rely on this so it didn't cause any actual issues. 
   >
- Crash on program exiting during a failed test [`ca34882612`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca348826128b53502360bddf3b52b573f3eaa703)

### Player

- Initialize new_sub_indexes to -1, not -2 [`1402fa2dc6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1402fa2dc63004551d2e091fa2e1f5d216e55a7c)
- Stop music restarting on warp to same-music screen [`7979afb603`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7979afb6039b6e484a2422be16f63afd2bb80aba)
   &nbsp;
   >Warps that cut music to silence before replaying it (Entrance/Exit and Cave warps) restarted the music even when the destination screen was set to the same song, causing an audible reset during cutscene-style screen-to-screen warps. These warps now keep the music playing when the destination screen uses the track that's already playing. 
   >
- Menu SCCs with nothing after them causing string to not disappear [`118e26fe6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/118e26fe6a4b83b47b2057494ed356b343fcf763)

### Editor

- Save item viewport suspend/despawn ranges [`2af23d413e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2af23d413e384ef1ee4e7caa0766c374e76a85d6)
   &nbsp;
   >An item's "Suspend" and "Despawn" viewport ranges were set in the editor and used in game, but were never written to the quest file, so they reset to 0 on every save. They are now persisted.  
   >
   >Bug introduced when the viewport suspend/despawn variables were added in 3.0.0-prerelease.193+2026-06-06 ([a25f1a55](https://github.com/ZQuestClassic/ZQuestClassic/commit/a25f1a55)). 
   >
- Show solid FFCs in the walk-flags view again [`25955649c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25955649c38884dcd935c5852634f982e90f66ab)
   &nbsp;
   >Fully-solid FFCs stopped drawing their solid indicator in the walk-flags overlay after combo-based FFC solidity was added; only combo-solid FFCs were shown. Both explicitly-solid and combo-solid FFCs are drawn again.  
   >
   >Regressed recently in 3.0.0-prerelease.194+2026-06-14 ([d460b968](https://github.com/ZQuestClassic/ZQuestClassic/commit/d460b968)). 
   >

### ZScript

- Prevent crash when a script draws a mini-tile out of range [`5e44121986`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e44121986be1f40945179b4a161c2e6ee63d529)
   &nbsp;
   >`Screen->DrawMiniTile` and `bitmap->DrawMiniTile` passed the script-supplied tile and corner straight to the quarter-tile draw helpers, which (unlike the full-tile helpers) did not range-check the index. A large or negative tile read past the end of the tile tables and could crash the player. The quarter-tile draw helpers now ignore out-of-range indices, matching the full-tile helpers.  
   >
   >Bug introduced when DrawMiniTile was added in 3.0.0-prerelease.189+2026-05-18 ([f3f39a23](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3f39a23)). 
   >
- Validate `sprite->SpawnScreen` to prevent crashes [`2560ca0dcb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2560ca0dcb7f73bdecb84bf02b0263ad3cb5b856)
   &nbsp;
   >Setting a sprite's `SpawnScreen` to a screen outside the current region stored an invalid screen index that many systems later dereference, causing out-of-bounds reads and crashes. `SpawnScreen` now rejects any screen that is not in the current region and logs a script error, leaving the sprite's spawn screen unchanged.  
   >
   >Bug introduced when a script-settable SpawnScreen was added in 3.0.0-prerelease.196+2026-07-01 ([9ffa09b9](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ffa09b9)). 
   >
- Correct negative indexing of 1-indexed internal arrays [`743c70d5b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/743c70d5b72ee6b86347e0dc313d9397bf2b9b18)
   &nbsp;
   >For a 1-indexed internal array (such as `Screen->LayerOpacity`), a negative index wrapped to the wrong element: -1 returned the second-to-last element instead of the last, and the first element was unreachable. The wrap now maps -1 to the last element and -size to the first.  
   >
   >Bug introduced when negative indices for internal arrays were added in 3.0.0-prerelease.134+2025-09-28 ([fae2ad2b](https://github.com/ZQuestClassic/ZQuestClassic/commit/fae2ad2b)). 
   >
- `Game->LoadMSubData` loaded active subscreen data [`5a1008fee5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a1008fee52c475d8886ccfef163747c098960f6)
   &nbsp;
   >`Game->LoadMSubData()` returned data from the active subscreen instead of the map subscreen, because the subscreen reference was tagged with the active type rather than the map type.  
   >
   >Broken when added in 3.0.0-prerelease.141+2025-11-18 ([753a530](https://github.com/ZQuestClassic/ZQuestClassic/commit/753a530)).  
   >
   >Discord: https://discord.com/channels/876899628556091432/1519100510710268064 
   >

# Documentation

- Update option docs [`f264900552`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2649005525d65b68cf83f21e3cd9eab768df462)

# Chores

- Update cherrypicks-3.0.md [`833c500d4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/833c500d4f6a2bddb4363fe7b2661db09fe99dd1)
- Improve parser scope getter function names [`6bbc69f5fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6bbc69f5fe3f116dfcf7e18e617c0088ff5281e7)
- Improve parser scope getter functions [`7734b7f1b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7734b7f1b40dc34ffd70f10472d1ec9a137919b5)
- Cleanup excess whitespace in types/messagedata.cpp [`7068a07fdc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7068a07fdc9a022f4e7ddabeca98bf3b9250baac)
- Remove many unused variables [`068dd8fc8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/068dd8fc8dc0c528f53d96f8bdce266dbbbe4037)
- Catch stale commit hashes in changelog override files [`1d2f9478f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d2f9478f4c6e0b7f5cf41310311a274d43a0c93)
   &nbsp;
   >The publish workflow failed because an override entry referenced a commit that was amended before being pushed; the old hash survives as a dangling object locally but does not exist in a fresh clone, so the changelog script only broke in CI.  
   >
   >Remove the stale entry (the landed commit is already hidden via "!"), and add a test asserting every override hash is reachable from a branch. generate_changelog.py also runs the test outside of CI, so stale entries surface during local dev instead of during publish. 
   >

# Refactors

- Share message string scroll math between player and editor [`0fcb2f31a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fcb2f31a07a0e69bf4b0b55f72f335fbc82b0ca)
   &nbsp;
   >The player and the string preview each had their own copy of the scrolling state machine (bounds, segment rounding, extent growth, smoothing), and the copies had already diverged once - every scroll bug fixed in this PR had to be fixed twice. Extract it into a shared MsgScrollState in core/, used by both.  
   >
   >No behavior change intended on either side, except the preview's foreground bitmap is now sized like the player's (top margin included). 
   >
- Share message string line-layout formulas with the preview [`0cad773b33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0cad773b3304ad0c7c9718f7fefcc3c4afa77c92)

# Tests

- Add auto tests for DrawMiniTile and SpawnScreen OOB fixes [`8a22042262`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a22042262d4dbcf0484c3896e72cd6a36cb65b0)
   &nbsp;
   >Regression tests that a script cannot crash the player by passing an out-of-range tile to `DrawMiniTile`, or an out-of-region screen to `sprite->SpawnScreen`. 
   >
- Add replay test for scrolling strings [`8cce523a25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cce523a25707c3be38afb4a9a67c40eb037a266)

### Player

- Honor per-replay frame limits when re-running a batch file [`6655a9c4ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6655a9c4ba86e4fef97cf33e53602dcee70c81f8)
   &nbsp;
   >A -replay-batch file's optional per-replay frame limits were silently dropped: the frame map was keyed by the raw path from the batch file, but load_replays resolves each replay's path to an absolute path, so the lookup never matched and every replay ran to completion instead of its limit. 
   >

# Misc.

- Improve git diff for qst, sav files [`b521948a4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b521948a4c4f6ce433327469da0a2541a2f63493)
- Link Discord and commit references in changelog output [`f27969d679`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f27969d679935ec83215b3a10d784d420023e0ca)
   &nbsp;
   >Improve the changelog markdown/plaintext formatter:  
   >
   >- Render "Discord:" commit tags as a [Discord](...) link after the
   >  commit SHA link, and stop showing the tag in the body. Also
   >  recognize the older "Context:"/"See:" forms (tag or trailing "See
   >  <url>." sentence) when they point at Discord.
   >- Turn bare git SHA references in commit bodies into links to the commit
   >  on GitHub.
   >
- Add download + full-changelog header to release notes [`f9b00d3120`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9b00d31208be30fd3eaae02e8d579ca804881db)
- Add script to sync GitHub release notes with the changelog [`10f7f44e89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10f7f44e895b6cd9670292833b39a509ec84598b)
   &nbsp;
   >scripts/sync_github_release_notes.py regenerates each release's notes via generate_changelog.py and diffs them against what's published on GitHub. By default it only reads and reports drift; --update_release_notes pushes the regenerated notes after showing a diff and confirming. --version_pattern limits which releases are checked. 
   >
- Add 2.55.15 changelog [`be6661ada7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be6661ada734b17b30e01effb756a1e1dd388155)
- Do some preparation for 3.0 changelog [`c4a1c30d41`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4a1c30d41de2292926d4541068cb304bd659b31)

### ZScript

- Error on using `static` on a `run` function [`11fcf2b6fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11fcf2b6fe233809b2daf148a31ed3ba90f63326)
