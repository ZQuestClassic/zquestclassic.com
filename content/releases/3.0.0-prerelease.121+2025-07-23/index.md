---
title: 3.0 Prerelease 121 2025-07-23
description: 
date: 2025-07-23T06:30:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.121%2B2025-07-23/3.0.0-prerelease.121%2B2025-07-23-linux.tar.gz
    name: 3.0.0-prerelease.121+2025-07-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.121%2B2025-07-23/3.0.0-prerelease.121%2B2025-07-23-mac.dmg
    name: 3.0.0-prerelease.121+2025-07-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.121%2B2025-07-23/3.0.0-prerelease.121%2B2025-07-23-windows-x64.zip
    name: 3.0.0-prerelease.121+2025-07-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.121%2B2025-07-23/3.0.0-prerelease.121%2B2025-07-23-windows-x86.zip
    name: 3.0.0-prerelease.121+2025-07-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 234451726
tag_name: '3.0.0-prerelease.121+2025-07-23'
channel: '3'
tags:
  - releases
---




# Features

### Player

- support -jit-precompile in -load-and-quit [`d7d373d92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7d373d9205168bfd87c852021e0ae24b02df514)

# Bug Fixes

- use glob in git’s tag matching, suppress Python SyntaxWarning [`43bf2f829`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43bf2f8292360c1916772c62ef930120fc8534d6)

### Editor

- combo advanced paste checkboxes being wrong [`a0c16885d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0c16885db3521d8be92e08a0dea532d89912302)

### ZScript

- add missing include [`f530b1184`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f530b1184333f4c97e1bcfa426234759b9793f38)
- for jit, prevent running script from changing itself [`e17575e4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e17575e4a2158eea2309b9603c0e2b6ed81643ee)
   &nbsp;
   >It's forbidden for a script to directly change its own `Script` variable, but when jit is enabled that check was missing and the result was a crash. 
   >
- correct bounds for 1-indexed arrays (like `Screen->LayerScreen[]`) [`fde17f265`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fde17f26532db9dcb9a0cee27a68533ce1afebae)
   &nbsp;
   >These arrays were incorrectly returning garbage for index 0, and returning a default value for the last index.  
   >
   >Regressed recently in df3ce20. 
   >

# Chores

- add 2.55.10 changelog [`ab62458e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab62458e24bbc374c4c6a271728cb82012a5869f)
- update cherrypicks-3.0.md [`aa16bb068`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa16bb068645d438dd4e9fb6c9f7ab2fdcd09f1b)
- update replay_uploads_known_good_replays.json [`fa1e20b95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa1e20b9539560081c65c3ab0af62461bbd3a465)

# Refactors

### ZScript

- simplify ownership of jit script handles [`e44642dc3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e44642dc3630afe26d1f7a516eefbdebd738c612)
- call clear_ref in script_exit_cleanup [`004f602b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/004f602b674a19965b1f1ddee083a78de01beb8d)

# Misc.

- remove Signed-off-by lines from changelog [`fe4dfa479`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe4dfa4796754f874df2937711d7248a7e8093f5)
