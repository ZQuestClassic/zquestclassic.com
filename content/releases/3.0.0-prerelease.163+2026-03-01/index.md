---
title: 3.0 Prerelease 163 2026-03-01
description: 
date: 2026-02-28T23:31:23Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.163%2B2026-03-01/3.0.0-prerelease.163%2B2026-03-01-linux.tar.gz
    name: 3.0.0-prerelease.163+2026-03-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.163%2B2026-03-01/3.0.0-prerelease.163%2B2026-03-01-mac.dmg
    name: 3.0.0-prerelease.163+2026-03-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.163%2B2026-03-01/3.0.0-prerelease.163%2B2026-03-01-windows-x64.zip
    name: 3.0.0-prerelease.163+2026-03-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.163%2B2026-03-01/3.0.0-prerelease.163%2B2026-03-01-windows-x86.zip
    name: 3.0.0-prerelease.163+2026-03-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 291714010
tag_name: '3.0.0-prerelease.163+2026-03-01'
channel: '3'
tags:
  - releases
---


# Features

- enable native file dialog by default [`ea0d20f1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea0d20f1b3d80a9f5af005a3f19ff514be041687)

### Player

- add option to manually upload single replay file [`e96bb6d2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e96bb6d2b51bd1502571cd10c69ad66fa8a5caaf)
   &nbsp;
   >The `Replay > Upload single replay` menu option allows users to manually upload a single replay file. 
   >

### Editor

- implicitly add `<qst dir>/scripts` to include paths [`eeb9d19c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eeb9d19c20ae3e4acd1d335e84dd6852a8c3b5c0)
   &nbsp;
   >This introduces a new convention: place your scripts in a folder called `scripts` next to your `.qst` file, and you'll be able to compile your quest without ever modifying your include paths. 
   >

### Visual Studio Code Extension

- add contextual autocomplete and function signature help [`468365343`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46836534385a31dc1a1e2f0bbd211eb2e570ffa8)
   &nbsp;
   >When typing, VS Code will now suggest relevant variables or functions. This suggestions are contextual, such that typing `Screen->` will suggest only things on the `Screen` object.  
   >
   >If a function is selected, its parameters will be suggested as a snippet for easier completion.  
   >
   >Also new is 'function signature help', which allows pressing a keyboard shortcut (default is `ctrl/cmd + shift + space`) to display a tooltip that describes the parameters of the function under the text cursor. 
   >
- add document highlight [`867e93e3b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/867e93e3becfd3072896861959b470c2daf65606)
   &nbsp;
   >When selecting a variable or function name, all instances within the current document that refer to the same symbol will be highlighted. Before, it would highlight everything with the same name, even if it was an unrelated variable in a different function / scope. 
   >

# Bug Fixes

### Player

- control dialog crash [`af43997f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af43997f31e61fb3b55f69912dd55e6a378f36ab)
- always cancel charging when scrolling [`b19952433`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b19952433d4becbdd3a2e4e3564037f273289fea)
   &nbsp;
   >The QR "Scrolling Cancels Charge" was introduced ~3 years ago as a compat QR, but it was accidentally implemented backwards.  
   >
   >Instead, the QR check is removed so this charging bug is now fixed for all quests. This should be fine as it seems unlikely any quest relies on this bug. 
   >

### Editor

- handle dark rooms in high quality rendering [`12d4c60bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12d4c60bcf2ed36224b34219988e65898ac78929)
- 'Browse Notes' breaking gui on large notes [`c7aeff372`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c7aeff37225189976ac70ca550825240e3bd6ef7)
   &nbsp;
   >Now large notes will produce a scrollbar for the preview, rather than breaking the UI. 
   >

### ZScript

- some compile-time constants not being saved in debug data [`d34719474`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d34719474855e6929a9600e16ef7f7fe1f7e06d9)
- avoid undefined behavior when sorting debug symbols [`abb0cb277`](https://github.com/ZQuestClassic/ZQuestClassic/commit/abb0cb277c5734318c3aab8ebc821bbae65737cb)
- correctly compile empty constructors [`1d0d21b86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d0d21b862886c37fa237f1790650ba1ff5c6de4)
   &nbsp;
   >Regressed recently in a24d699b. 
   >
- broken array parameters for some bindings [`db5fc9c93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db5fc9c93962302a85151de71db6b65d33631779)
   &nbsp;
   >Regressed in 4b40449. 
   >

### Visual Studio Code Extension

- show error message when default include file does not exist [`d19b88585`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d19b8858576c4cfd0e6d2f4639f0779c0b849a2a)

# Documentation

- specify the "instant" SCC warp effect first does blackout [`daeb06947`](https://github.com/ZQuestClassic/ZQuestClassic/commit/daeb06947bb776c65d0755b52e28922ec7ad48ae)
- add "Using a tileset" tutorial [`3cdbbe32f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3cdbbe32f4afbcf330c7c23a26bb84152e28f871)

# Chores

- update resources/include/bindings/qrs.zh [`3e8b88a34`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e8b88a3459a410057af51cd05daa4c879b6c9a1)

# Refactors

### ZLauncher

- remove some unnecessary things done during startup [`a134881ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a134881ec2079f581e77acc939d065a3b14391f8)

# Tests

- include stack trace in update_auto_script_tests.py failure message [`34a1dfd93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34a1dfd93db14c613b695c9491ca9675c87b63ac)
- re-compile playground.qst [`c61d4bdd5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c61d4bdd505b8feb9aabb1040deea5da98785733)

# Misc.

- fix archive download [`21773b636`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21773b636c7fb76ed9d1ecd0e032d6d143ee692a)

### Visual Studio Code Extension

- publish 1.0.12 [`87e68c33c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87e68c33c1b34fe8970415c8be595edea9b78545)
