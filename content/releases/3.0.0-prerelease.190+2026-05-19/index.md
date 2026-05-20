---
title: 3.0 Prerelease 190 2026-05-19
description: 
date: 2026-05-20T03:46:42Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.190%2B2026-05-19/3.0.0-prerelease.190%2B2026-05-19-linux.tar.gz
    name: 3.0.0-prerelease.190+2026-05-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.190%2B2026-05-19/3.0.0-prerelease.190%2B2026-05-19-mac.dmg
    name: 3.0.0-prerelease.190+2026-05-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.190%2B2026-05-19/3.0.0-prerelease.190%2B2026-05-19-windows-x64.zip
    name: 3.0.0-prerelease.190+2026-05-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.190%2B2026-05-19/3.0.0-prerelease.190%2B2026-05-19-windows-x86.zip
    name: 3.0.0-prerelease.190+2026-05-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 325597798
tag_name: '3.0.0-prerelease.190+2026-05-19'
channel: '3'
tags:
  - releases
---


# Features

- Improved Minimap Widget features [`eccbe4e20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eccbe4e20637fe86ac08b2f9f6f41fb99c412058)
   &nbsp;
   >Can now specify the Room BG and Unvisited colors per-widget. (Leaving these colors as the `Default` color will use the misc colors as previously) Can now specify that room colors will draw even when a DMap-specific map tile is provided. Can also specify that the background will not draw at all (allowing drawing just the room colors, which can be used to place a transparent-bg minimap widget on top of some other graphic or something) 
   >

# Bug Fixes

### Player

- Regions spoiling non-marked minimap screens [`9f3c89f07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f3c89f07ab972480f33af2929f43afe88e2b786)
- Combo general loop sfx cutting out when looping [`152e59265`](https://github.com/ZQuestClassic/ZQuestClassic/commit/152e59265ac92c5d357e488f6e1771c693d53f41)

### ZScript

- Some type issues in debugger [`8c1da9f7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c1da9f7f408da90d9636b1ebbc22daf1e8cf81e)
   &nbsp;
   >Fixes two things:  
   >
   >- `1 + 1L` and `1 * 1L` correctly returned a long, but the other way
   >  around (`1L + 1` and `1L * 1`) did not.
   >- Engine objects other than bitmap inside typed arrays incorrectly
   >  showed as raw numbers.
   >
- Several debugger bugs [`9022424a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9022424a0b906a193e5162d6366576878c0b7f25)
   &nbsp;
   >- support accessing script-scoped and static class functions via `.`
   >- functions that were optimized away due to being just `return CONSTANT`
   >  are now callable in the debugger
   >- fix incorrect formatting for bitflags with unknown bits
   >
   >
   >&nbsp;
   >
   >Discord: https://discord.com/channels/876899628556091432/1484782230344564871 
   >

# Chores

- Don't open console in headless mode [`287395563`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2873955634a1f3aec9ae05b1ed936af0277a6233)

# Misc.

- Copy cpos_update optimization from combos to ffcs [`198f90880`](https://github.com/ZQuestClassic/ZQuestClassic/commit/198f9088038d7522d2b61fe2595d769b09f74d7c)
