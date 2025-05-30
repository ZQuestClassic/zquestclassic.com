---
title: 3.0 Prerelease 108 2025-05-30
description: 
date: 2025-05-30T07:47:40Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.108%2B2025-05-30/3.0.0-prerelease.108%2B2025-05-30-linux.tar.gz
    name: 3.0.0-prerelease.108+2025-05-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.108%2B2025-05-30/3.0.0-prerelease.108%2B2025-05-30-mac.dmg
    name: 3.0.0-prerelease.108+2025-05-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.108%2B2025-05-30/3.0.0-prerelease.108%2B2025-05-30-windows-x64.zip
    name: 3.0.0-prerelease.108+2025-05-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.108%2B2025-05-30/3.0.0-prerelease.108%2B2025-05-30-windows-x86.zip
    name: 3.0.0-prerelease.108+2025-05-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 222024365
tag_name: '3.0.0-prerelease.108+2025-05-30'
channel: '3'
tags:
  - releases
---




# Features

- special subscreen counters for button item costs [`3b90a0330`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b90a033030834534821f05746b51b69935cef0a)
- New subscreen widget, 'Counter Percentage Bar' [`64bc639c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/64bc639c724448dc3e41967f197f84843d8ced27)
   &nbsp;
   >Draws a rectangle of two colors, based on the percentage of a specified counter. Useful for a life/magic meter that doesn't change size as the max changes, but instead gets denser. 
   >
- subscreen minimap compass can point to any LItem instead of just McGuffin [`963e0a4ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/963e0a4ba7d48ce085bf64bed6ded9f663af4ae2)
- subscreen widget conditionals [`474322fb1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/474322fb1720ef7f4001f434ac4e0795f40911e2)

### ZScript

- persist all reachable objects to save file [`8cc79d249`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8cc79d2490d05b29a60a01102889e684eef7a115)
   &nbsp;
   >`GlobalObject` is no longer necessary to persist a custom object to save files. It is now enough to assign it to a global variable or array - as long as it uses the custom object type (rather than `int` or `untyped`).  
   >
   >This includes all nested objects, and any object reachable from an object that was globalized via `GlobalObject`.  
   >
   >https://discord.com/channels/876899628556091432/1377446615178281190 
   >

# Bug Fixes

- dialog lists scrolling wrongly in some cases [`e7bab7770`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7bab777054f4e5cc89ced293416f921e4daa492)

### Player

- typo in event logging [`dc35acddd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc35acddd947376a09661120aca7328436f661c4)
- Subscreen 'Sys Colors' displaying entirely wrongly [`226cc65c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/226cc65c8ff6017608b55acea62afb212ffab9d4)
- Bottle flag 'Cure Shield Jinx' not working when used manually [`35095ceae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35095ceae9f2792274a0a2def614137d4b79b6fb)
- QR "Bottles can't be used with any maxed counter" being backwards [`06734f6a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06734f6a701085b84ef38b3435fc2398d0830669)
- store if object is global or not in save file [`e54a666ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e54a666bafd6a441fe1164dec72fb191a2a76953)
   &nbsp;
   >Continuation of 8cc79d2. 
   >

### Editor

- ffc editor +/- hotkeys using wrong cset start point, and not allowing cs12/13 [`2bdcdd2d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bdcdd2d7bbb1a4a8adac28d1208fba76c5f92ba)

### ZScript

- correct codegen for user varargs [`ba7f7cc98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba7f7cc9842c22b6d79ed9f4e61b502202675330)
   &nbsp;
   >Regressed in d2dd3ee (3.0.0-prerelease.92+2025-03-09) 
   >
- don't skip clearing current_zasm_register in get_register [`33a64b644`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33a64b64489831db6f1a64e9781867ed34922020)
   &nbsp;
   >The registers handled by `scripting_engine_get_register` skipped clearing this variable when done, which could possibly cause scripting_log_error_with_context to print the wrong context. 
   >
- scripted enemy spawns broken for scripted enemies [`ac69c0cda`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac69c0cda322528c37027201cede2865f03284c1)
   &nbsp;
   >`Screen->SpawnScreenEnemies()` would break the script engine if it spawns an enemy that has a script - it caused the calling script to forever call `Screen->SpawnScreenEnemies()` once a frame. Although spawning dozens of enemies a second is very funny, this has been fixed. 
   >

# Documentation

- clarify 'Screen->Data[]' ? button [`72ca90b5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72ca90b5b417c7420c1897ce6546dbffdb65150f)
- tweak last edit to object_memory_management.rst [`556c09dcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/556c09dcf206aea658cd94e583b71f3c99cb4ae5)
- grammar fix [`bb4db3034`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb4db30347bab331ebc8abe704d15100bc7c1510)

# CI

- skip test_never_ending_failing_replay for gcc [`e96816af3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e96816af379365e948204b583409c0c663931ab5)
- skip more replay unit tests suddenly failing for gcc [`32196b8f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32196b8f21d2f9150be8b384106cd9ec51fe5965)
