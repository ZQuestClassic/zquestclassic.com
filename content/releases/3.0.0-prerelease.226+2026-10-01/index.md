---
title: 3.0 Prerelease 226 2026-10-01
description: 
date: 2026-10-02T02:35:32Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.226%2B2026-10-01/3.0.0-prerelease.226%2B2026-10-01-linux.tar.gz
    name: 3.0.0-prerelease.226+2026-10-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.226%2B2026-10-01/3.0.0-prerelease.226%2B2026-10-01-mac-universal.dmg
    name: 3.0.0-prerelease.226+2026-10-01-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.226%2B2026-10-01/3.0.0-prerelease.226%2B2026-10-01-windows-x64.zip
    name: 3.0.0-prerelease.226+2026-10-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.226%2B2026-10-01/3.0.0-prerelease.226%2B2026-10-01-windows-x86.zip
    name: 3.0.0-prerelease.226+2026-10-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 401620443
tag_name: '3.0.0-prerelease.226+2026-10-01'
channel: '3'
tags:
  - releases
---

# Features

### Editor

- Allow binding hotkeys to mouse buttons [`2b41d2f365`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b41d2f365babc1b57e488f0fb5799f8b07314cc) [Discord](https://discord.com/channels/876899628556091432/1552182585285812224)
   &nbsp;
   >Hotkeys can now be bound to the middle mouse button, the side buttons, or any other extra mouse buttons (optionally with modifier keys). The "Go Back" and "Go Forward" hotkeys are now bound to the mouse side buttons by default, and so can be rebound. 
   >

# Bug Fixes

- Prevent crash when closing the program [`eff1b1bde2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eff1b1bde2ece8f0b5fb77d7c9bb470796571abd)
   &nbsp;
   >Fixed a crash that could happen when closing the player, editor or launcher, most often on Windows.  
   >
   >Bug introduced when Allegro 5 replaced Allegro 4 in 2.55-alpha-108 ([a7fccd1f21](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7fccd1f21)). 
   >
- "Invalid window" errors when closing the web version [`df45fc285c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df45fc285c0d4951b7deaa3707c7e79bcec25b7c)
   &nbsp;
   >Regressed recently in [eff1b1bde2](https://github.com/ZQuestClassic/ZQuestClassic/commit/eff1b1bde2). 
   >

### Player

- Add 2.55.17 back-compat for script move pit state fix [`43764c7356`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43764c735668426a8f580002f16df675a523d1fe)
- Manhandla and Patra bodies drawn 1px off when moving diagonally [`ab58cf637d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab58cf637d6a40672f1ad5653ed446dc791d11dc) [Discord](https://discord.com/channels/876899628556091432/1525358901451690004)
   &nbsp;
   >When moving up-right or down-left, the body of a Manhandla or Patra was drawn one pixel to the right of its heads / orbiting parts.  
   >
   >Bug present since at least 2.50. 
   >

### Editor

- Prevent crash in quest browser when update check finishes [`8ef6a70714`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ef6a707145eb455331aa3ee101724eaf3bc470f)
   &nbsp;
   >Regressed in 3.0.0-prerelease.220+2026-09-09 ([0986cd15b1](https://github.com/ZQuestClassic/ZQuestClassic/commit/0986cd15b1)). 
   >
- Music editor leaks a file handle every time it opens [`16cb518d86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16cb518d862bb8c96ee76843495a5d2f6c30eb29) [Discord](https://discord.com/channels/876899628556091432/1408024771001585694)
   &nbsp;
   >Each time the music editor dialog opened, the enhanced music file was loaded eight times to decide which fields to disable, and none of those loads were ever freed. After enough opens the process could no longer open files at all: every music file then reported "failed to load", the enhanced music fields stayed disabled, and the editor had to be restarted.  
   >
   >The file is now loaded (and freed) once when the dialog opens (and again after "Load"), and the disable checks read the cached result.  
   >
   >Bug introduced when the loop preview buttons were added to the DMap editor in 2.55-alpha-120 ([1822e0e47a](https://github.com/ZQuestClassic/ZQuestClassic/commit/1822e0e47a)). 
   >
- Clicking to dismiss the hotkey cheat sheet leaked the click [`1d56a14146`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d56a1414648ce40ce7c3011b3271963d76c0649)
   &nbsp;
   >Dismissing the hotkey cheat sheet (Shift+?) with a mouse button closed it while the button was still held, so the editor then saw the press itself: a left click drew under the cursor, and a side button ran its Go Back / Go Forward hotkey.  
   >
   >Regressed in 3.0.0-prerelease.142+2025-11-20 ([522ec9aa99](https://github.com/ZQuestClassic/ZQuestClassic/commit/522ec9aa99)). 
   >

### ZScript

- Clear script render targets and `bitmap->Create()` bitmaps [`376764b97e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/376764b97ec0994fdc9f31d23795f7194a695833)
   &nbsp;
   >The bitmaps behind `Screen->SetRenderTarget`, and those made with `bitmap->Create()`, were not cleared on creation, meaning that it contained random pixel data.  
   >
   >One quest that this bug is visible in is Destiny of the Oracles. It draws its scripted active subscreen into a render target and copies 176 rows of it to the screen, but only ever draws the first 168. With "Hide bottom 8 pixels" off the 8 undrawn rows are visible and contain random colors.  
   >
   >Bug introduced when `Screen->SetRenderTarget` was added in 2.50. 
   >

# Chores

- Update cherrypicks-3.0.md [`40e3b44c66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40e3b44c661d3b666a2aa298e274aaeb761bbb32)
- Update replay_uploads_known_good_replays.json [`4ae8fc67b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4ae8fc67b41afc4e46b10caf663790cdab29acaa)

# Refactors

- One thread for all allegro-legacy timers [`665f7f15fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/665f7f15fce04104e2370c09d6fe6a5bf45218b6)
   &nbsp;
   >allegro_legacy's a5 timer driver ran a thread per install_int callback (fps counter, render timer, double-click check, music poll, MIDI player). Now every callback gets its own allegro 5 timer registered on one event queue, and a single thread dispatches each tick to the callback whose timer fired.  
   >
   >remove_int only stops that timer, so a callback removing itself (the MIDI player does, when a song loops) has nothing to join. That was the deadlock [8cee72e439](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cee72e439) worked around by keeping a thread per slot alive. Fewer threads matter most on the web build, where every pthread is a Web Worker spawned at page load.  
   >
   >Also fixes install_param_int reusing a slot with an unconverted speed, and the legacy retrace counter advancing once per timer thread instead of once per tick. 
   >

# Tests

- Speed up the replay compare report prompts [`2a41427bd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a41427bd1a254b4907ce34c438fab386bf4f377)
   &nbsp;
   >Picking a baseline build for a compare report stalled for several seconds between each menu. Listing the 2.55 releases spawned two git processes for every main-channel build in the archive bucket, on every run; commits the branch can't reach are now skipped with a single rev-list. The upstream tag fetch starts before the first prompt, and the default (most recent nightly) build downloads in the background while the build menu is open.  
   >
   >Archive extraction now goes into a scratch folder that is renamed into place only once complete, so an interrupted download is never mistaken for a finished one. 
   >
- Replay failure snapshots cropped the bottom 8 pixels of the screen [`185fe97fb2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/185fe97fb252f21d243a3f4cd21d13ab6c2f3f8a)
   &nbsp;
   >The history snapshots saved just before a gfx mismatch were sized when the replay started, before the quest's screen height was applied, so for quests that show the bottom 8 pixels they came out 224 rows tall while the mismatching frames were 232.  
   >
   >Resize them to the live screen before copying each frame. 
   >

# CI

- Pin the VS Code version used by the extension tests [`707dd8eb2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/707dd8eb2bc4bc570a9abddae22cd80b6d5751c3)
   &nbsp;
   >The extension test previously asked Microsoft's update server which release is "stable" before every run, and that lookup often timed out in CI.  
   >
   >Pin the version so no lookup happens, and cache the downloaded VS Code in CI keyed on the file that holds the pin, so a cache hit needs no network at all. 
   >
- Fetch bison for the Intel macOS build from the GNU mirror network [`a5231fcde2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5231fcde2545c9446d9c5a3048ed8b0f1e0abaa)
   &nbsp;
   >The Intel macOS build downloaded bison from ftp.gnu.org over plain http, and that server has timed out from CI runners (one job retried for 28 minutes before giving up). Download from ftpmirror.gnu.org over https, which redirects to a nearby mirror, and stop after three attempts.  
   >
   >Also move from bison 3.6 to 3.8.2, the version the Linux and arm64 macOS builds already use. Its gnulib no longer needs the pointer-type warning workaround. 
   >

# Misc.

- Add 2.55.17 changelog [`b39972d48e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b39972d48eef62cb66caad9663e9ec43232208b9)
