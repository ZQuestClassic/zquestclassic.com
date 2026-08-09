---
title: 3.0 Prerelease 210 2026-08-08
description: 
date: 2026-08-09T02:11:03Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.210%2B2026-08-08/3.0.0-prerelease.210%2B2026-08-08-linux.tar.gz
    name: 3.0.0-prerelease.210+2026-08-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.210%2B2026-08-08/3.0.0-prerelease.210%2B2026-08-08-mac-universal.dmg
    name: 3.0.0-prerelease.210+2026-08-08-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.210%2B2026-08-08/3.0.0-prerelease.210%2B2026-08-08-windows-x64.zip
    name: 3.0.0-prerelease.210+2026-08-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.210%2B2026-08-08/3.0.0-prerelease.210%2B2026-08-08-windows-x86.zip
    name: 3.0.0-prerelease.210+2026-08-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 367363557
tag_name: '3.0.0-prerelease.210+2026-08-08'
channel: '3'
tags:
  - releases
---

# Features

- Publish a universal mac app supporting Apple Silicon and Intel [`fc1cb83cc2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc1cb83cc22a0a5375a793da75453f6be2005920)
   &nbsp;
   >The mac release is now a single universal dmg, named `{version}-mac-universal.dmg` instead of `{version}-mac.dmg` (which was Intel-only). Apple Silicon users no longer run under Rosetta, which also means ZScript runs on the native JIT backend instead of a translated x86 one. 
   >

# Bug Fixes

- String shadows cut off at the text box margins [`29bc4d8e58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29bc4d8e5878fd967496d6866cdf4c8991ba7efd) [Discord](https://discord.com/channels/876899628556091432/1389071935547117588)
   &nbsp;
   >Shadowed text draws its shadow 1px outside each glyph, but the string margin clipping copied exactly the text area, cutting shadows off of glyphs at the edges. The margin rect now has 1px of leeway, in both the player and the editor's string preview.  
   >
   >Regressed in 2.55-alpha-52 ([73acd7828f](https://github.com/ZQuestClassic/ZQuestClassic/commit/73acd7828f)). 
   >
- Mac releases support macOS 12 and up again [`c02bff4efb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c02bff4efb9a47e7e2eaaee37b51296a413b5baa)
   &nbsp;
   >Since the CI runners moved past macOS 12, the mac app has inherited the build machine's OS version as its minimum: recent releases refuse to launch on anything older than macOS 15. The deployment target is now pinned to macOS 12, matching the website's stated support.  
   >
   >Regressed in 3.0.0-prerelease.2+2024-07-24 ([fc4b2820a9](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc4b2820a9)). 
   >

### ZScript

- Script draws were discarded during the screen init of instant warps [`8f43027d42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f43027d421baab2a8e2a8586d6209ea61f3a184)
   &nbsp;
   >Scripts can run during the screen init frame of an 'Insta-Warp' or 'Insta-Warp with Blackout', but any draws they queued were silently discarded, since nothing executed them before the post-warp game loop restart cleared the drawing queue. This was especially harmful for draws to script bitmaps, as those have lasting consequences.  
   >
   >The other insta-warp types (Zap, Wave, Open) were unaffected, as their arrival animations execute queued script draws as a side effect - though 'Insta-Warp, Opening Wipe' was affected when the circle wipe is used. Scripted warps (Hero->WarpEx) with no warp effect had the same problem, and are fixed too.  
   >
   >This is longstanding behavior, not a recent regression. 
   >
- Script draws vanished for one frame when closing the active subscreen [`10cfaa66f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/10cfaa66f96fd3c5bf13f7910efaa89a1c8b1c5d)
   &nbsp;
   >The active subscreen blocks in the middle of a game frame, and its internal loops repeatedly clear the queue of pending script draws. When the subscreen closed, the interrupted frame resumed and rendered with an empty queue, so every script draw was missing from that one frame.  
   >
   >The interrupted frame's queued draws are now stashed while the subscreen is open and restored when it closes.  
   >
   >Regressed in 2.55-alpha-119 ([cb2d6b5217](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb2d6b5217)). 
   >

# Documentation

- Improve accuracy of z3 user guide and link API references [`e4c17baa9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4c17baa9c0dac0f199e700542efdfeaf2764163)
   &nbsp;
   >Corrects the claim that mapdata only ever refers to a single screen (the layer-only LoadTempScreen/LoadScrollingScreen overloads cover the whole region), removes a nonexistent LoadTempScreenForComboPos(layer) overload, notes the enemy viewport-pause range is configurable, names the Extended Viewport DMap flag, documents the Viewport->Mode options, fixes assorted typos and broken list markup, and adds ref links for the API symbols mentioned throughout. 
   >

# Build

- Strip unreferenced code and data from the binaries [`845afc1a47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/845afc1a47ff463c186cbe83922051eb8b69d235)
   &nbsp;
   >Every app links the same large engine libraries, and the linker kept whole object files whenever anything in them was used - the launcher carried most of the GUI framework without ever calling it. Binaries now shrink a good amount on every platform: roughly 10% for the player and editor, about half for the launcher, and over half for the Windows release builds, whose debug-info link had disabled dead-code removal entirely. 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`f26e04c6c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f26e04c6c7f763433c00205faf0eb0d77c990039)

# Refactors

- Prune dead render-tree code and fix latent hazards [`470d1806c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/470d1806c40139941a682d2ca4c7876430faf2fb)
   &nbsp;
   >- Delete CustomRTI, Matrix::Rotate, Matrix::to_allegro_transform, and
   >  zqdialog_tag; all unused.
   >- ~RenderTreeItem now detaches children before conditionally deleting
   >  them, and only deletes children that are themselves owned.
   >  Previously an owned parent deleted even non-owned (static) children
   >  - undefined behavior held at bay only by prescribed teardown order
   >  (see mapview_close) - and surviving children kept a dangling parent
   >  pointer.
   >- Reparenting via add_child/add_child_before/remove_child now marks the
   >  whole subtree's transforms dirty, not just the moved child - its
   >  descendants' matrices were computed under the old parent.
   >- get_active_dialog identifies the tint layer by pointer comparison
   >  instead of by its name string.
   >

# Tests

- Fix test_ci.py, broken by CI-only required args [`1f59e8ba1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f59e8ba1bc1fbf388641857a9739c60f02c63a2)
   &nbsp;
   >Since [0231327ab3](https://github.com/ZQuestClassic/ZQuestClassic/commit/0231327ab3), the replay-tests command required --runs-on and --run-id, which test_ci.py (a local-only test) does not pass. They are now optional: locally the --ci flag is simply omitted and results go to a "local" folder. CI workflows always pass both, so nothing changes there. 
   >
