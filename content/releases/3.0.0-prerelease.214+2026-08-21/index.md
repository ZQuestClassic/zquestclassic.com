---
title: 3.0 Prerelease 214 2026-08-21
description: 
date: 2026-08-22T04:03:57Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.214%2B2026-08-21/3.0.0-prerelease.214%2B2026-08-21-linux.tar.gz
    name: 3.0.0-prerelease.214+2026-08-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.214%2B2026-08-21/3.0.0-prerelease.214%2B2026-08-21-mac-universal.dmg
    name: 3.0.0-prerelease.214+2026-08-21-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.214%2B2026-08-21/3.0.0-prerelease.214%2B2026-08-21-windows-x64.zip
    name: 3.0.0-prerelease.214+2026-08-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.214%2B2026-08-21/3.0.0-prerelease.214%2B2026-08-21-windows-x86.zip
    name: 3.0.0-prerelease.214+2026-08-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 374813702
tag_name: '3.0.0-prerelease.214+2026-08-21'
channel: '3'
tags:
  - releases
---

# Features

### Editor

- Convert newlines to `\Newline\` when pasting into string editor [`c97712f911`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c97712f9119f9eda03c0c2ea2fac6ce4bcf33f0a) [Discord](https://discord.com/channels/876899628556091432/1540226526082105414)
   &nbsp;
   >Pasting multi-line text into the string editor used to insert raw newline characters, which display as `^` in the text field. Now newlines become `\Newline\` commands and carriage returns are stripped. 
   >

# Bug Fixes

### Player

- WallMasters emerging from the wrong wall position in regions [`6f3128d650`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f3128d650652d046d9ef36bc81b9c9d6f45a43b)
   &nbsp;
   >When the hero walked along the bottom or right wall of a scrolling region, a WallMaster would emerge at the bottom/right edge of the region's first screen instead of the wall the hero is touching.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Patra bosses teleporting to the first screen of a region [`6908849498`](https://github.com/ZQuestClassic/ZQuestClassic/commit/690884949835084b03d57195aed6db7d5aa8024a)
   &nbsp;
   >Patra and BS Patra enemies placed on any screen of a scrolling region other than the top-left one would relocate to the top-left screen when spawning. They now center on the screen they were placed on, like the other bosses.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Phasing Wizzrobes unable to jump outside a region's first screen [`d422c28272`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d422c28272fe4c10c5c23705add3b5fc1aeafc43)
   &nbsp;
   >The teleport-jump of phasing (blue) Wizzrobes rejected any destination outside the bounds of a single screen, so in a scrolling region they could only jump within the top-left screen's area.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Classic trap movement broken outside a region's first screen [`5d75f7d869`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d75f7d869f984e9cc2c066af401702818931d5c)
   &nbsp;
   >Traps (when not using the 'Mean Traps' rules) decide which directions they may move in, and where to stop, based on their position within their screen. In a scrolling region these checks compared against the top-left screen, so traps placed on any other screen could only move up or left and would retreat to the wrong resting lines. Constant horizontal/vertical traps also chose their initial direction wrong.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Dodongos picking the wrong initial direction in regions [`cac63d8c2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cac63d8c2b2e2f8771a03350eaaeeec63e6c635e)
   &nbsp;
   >Dodongos spawned on any screen of a scrolling region other than the top-left one always flipped their initial down/right direction, as the "too close to the screen edge" spawn check compared against the wrong screen.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Swimming hero could walk onto land beyond a region's first screen [`00a7992b87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00a7992b8730834bfa04843a3604589a420bd58b)
   &nbsp;
   >While swimming past the first screen of a scrolling region, the check that prevents leaving deep water without hopping onto land was skipped, letting the hero step straight out of the water anywhere.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- New-movement enemies clipped to a region's first screen in dungeons [`abd00a97b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/abd00a97b184e73fb93c6e5674d624693062cc4a)
   &nbsp;
   >Enemies using the newer movement engine (and Moldorms) applied the dungeon-wall and bottom-right clipping rules against the bounds of a single screen. In a scrolling region dungeon, fliers and wizzrobes were treated as blocked everywhere below or right of the top-left screen's play area.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Moldorms constantly changing direction in scrolling regions [`66e9f7a4fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66e9f7a4fc721d4575ff50a97685e0d4bd03e8ab)
   &nbsp;
   >The check that keeps Moldorms from pacing the bottom row of the screen compared against single-screen bounds, so in a scrolling region it considered a Moldorm "stuck" nearly everywhere and forced a new direction every 45 frames.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Combo triggers reading strings from a region's top-left screen [`874220d8e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/874220d8e2a5413f89d6d5cf032ada43044052d1)
   &nbsp;
   >When a combo trigger on a screen other than the top-left screen of a scrolling region showed a string via a special value - the screen's string, the screen's catchall, or a Screen->D[] register - it resolved against the top-left screen instead of the screen the combo is on. This affected signposts and the trigger string/fail-string options.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Hero misplaced when a portal warp bounces back in a region [`ba58a17e05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba58a17e05a05573bfd7d1d1d76616e33e4d8790)
   &nbsp;
   >When entering a portal below the first screen row of a scrolling region and the destination was invalid (mirror bonk), the hero was restored to the wrong vertical position - up to a full screen off.  
   >
   >Regressed in 3.0.0-prerelease.187+2026-05-14 ([89d16bfc5a](https://github.com/ZQuestClassic/ZQuestClassic/commit/89d16bfc5a)). 
   >
- Locked door detection using the wrong screen in regions [`b6a0656841`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6a0656841b2da5cc3db3c6f80edaaf3b3e90bd1)
   &nbsp;
   >The check for whether a position is part of a locked/boss-locked NES door (used to let lock blocks on layers coexist with door combos in dungeons) always looked at the top-left screen of a scrolling region and interpreted the position relative to it.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Region edge detection wrapping around the map edge [`64377a78cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/64377a78cf4e5c741ac7fbba4b0fc4b7e4ef41bc)
   &nbsp;
   >Checking whether moving right at the map's rightmost column leaves the region could wrap around to the first screen of the next map row, so a full-width region reported "not an edge" there. Also avoids passing out-of-range coordinates for the bottom map row.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Warp arrival ignoring the arrival screen's settings in regions [`bcc274b0f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcc274b0f6e868d573bb4827db9845558b7232e6)
   &nbsp;
   >After warping into a scrolling region, the 'Auto-Save' and 'Continue Here' screen flags and the arrival-point check for continue-screen logic were read from the region's top-left screen instead of the screen the hero arrived on.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Enemy spawn ignored an out-of-bounds guard in scrolling regions [`0fe7b9fdef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fe7b9fdefa5097c3ab2aa8c890bf35ebb50f19c)
   &nbsp;
   >The safety check that rejects invalid enemy list entries when picking spawn positions was skipped inside scrolling regions, allowing an out-of-bounds enemy id from corrupt quest data to be read.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Item fairies spawned with the wrong screen in regions [`c81f504b97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c81f504b97731df1fccc97bd2d07802406673714)
   &nbsp;
   >Fairies spawned from items on a screen other than the top-left screen of a scrolling region were associated with the top-left screen.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Sides enemy patterns interfering with each other in regions [`26a1c80ba2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26a1c80ba20d628c8348f05454e75d8a2147c8f9)
   &nbsp;
   >The gradual enemy loading for the "Sides" and "Sides (Random)" spawn patterns kept its progress in shared variables. When a scrolling region had more than one screen using these patterns, the screens corrupted each other's loading: the spawn timer ran too fast, enemy counts crossed between screens, and a screen could be marked as fully loaded while its enemies never spawned.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Cellar enemies beyond the fourth spawning at garbage positions [`ee3422d94f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee3422d94f54327de6e90993c894470be73803ff)
   &nbsp;
   >When a DMap uses 'Use Enemy List for Cellar Enemies', item cellar and passageway screens can spawn up to 10 enemies, but only 4 spawn positions exist - enemies 5 through 10 read positions from out-of- bounds memory. They now cycle through the same 4 columns.  
   >
   >Bug introduced when custom cellar enemies were added in 2.55-alpha-83 ([a7a416007e](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7a416007e)). 
   >

# Documentation

- Add wieldable bow and arrow tutorial, by Jared [`c094ee6fa9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c094ee6fa99dbd5aa8d86416dbe318a64e6a851b)

# Chores

### Player

- Document why timed warps use a region's origin screen [`2ca92d29da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ca92d29da7a6307e54aa9305811f32735c41e18)
   &nbsp;
   >Timed warps intentionally read only the origin (top-left) screen of a scrolling region, per design discussion when regions were developed. 
   >

# CI

- Authenticate the release s3 upload script with GitHub [`a09915dbb9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a09915dbb9500d56bc6a4070640876dd9e8bfc34)
   &nbsp;
   >The upload step listed releases anonymously, hitting GitHub's per-IP rate limit on shared runners. PyGithub does not read a token from the environment on its own, so pass the workflow token explicitly. 
   >

# Misc.

- Only check ZC-Version header on upload route [`524dab61b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/524dab61b82ae900be7838967b896aac8fa52937)
