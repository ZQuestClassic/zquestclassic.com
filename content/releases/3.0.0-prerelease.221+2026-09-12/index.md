---
title: 3.0 Prerelease 221 2026-09-12
description: 
date: 2026-09-12T05:26:29Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.221%2B2026-09-12/3.0.0-prerelease.221%2B2026-09-12-linux.tar.gz
    name: 3.0.0-prerelease.221+2026-09-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.221%2B2026-09-12/3.0.0-prerelease.221%2B2026-09-12-windows-x64.zip
    name: 3.0.0-prerelease.221+2026-09-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.221%2B2026-09-12/3.0.0-prerelease.221%2B2026-09-12-windows-x86.zip
    name: 3.0.0-prerelease.221+2026-09-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 387499875
tag_name: '3.0.0-prerelease.221+2026-09-12'
channel: '3'
tags:
  - releases
---

# Features

### Player

- Use SDL for gamepads for better controller support [`62568e4f79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62568e4f792c2463a77bbc3c7995429b06238924)
   &nbsp;
   >Joystick input now goes through an SDL2-based joystick driver on Windows, macOS, and Linux (the web version already used SDL). Compared to the OS-native drivers this fixes several long-standing problems:  
   >
   >- On Linux, controllers silently stopped working whenever Steam was
   >  open: Steam Input takes an exclusive grab on the controller's evdev
   >  device. SDL reads controllers the same way Steam itself does and
   >  keeps working alongside it.
   >- On Windows, Xbox triggers didn't register when a pad was serviced by
   >  DirectInput, which merges both triggers onto one shared axis. SDL
   >  reads triggers independently on every backend.
   >- Xbox, PlayStation, Switch, 8BitDo, Stadia, and similar controllers
   >  are recognized with correct layouts, over USB or Bluetooth, and
   >  lesser-known controllers that went undetected or had buttons missing
   >  should now work.
   >
   >
   >&nbsp;
   >
   >The previous OS-native drivers remain available via the launcher (Player -> Joystick Driver) or by setting `driver = native` (or `directinput`/`xinput` on Windows) under `[joystick]` in zc.cfg. 
   >
- Recognize hundreds more controllers out of the box [`190c074376`](https://github.com/ZQuestClassic/ZQuestClassic/commit/190c074376f61246284e3879685ea73acb1824a8)
   &nbsp;
   >Ships gamecontrollerdb.txt and loads it at startup. Together with the database built into SDL, recognized controllers - Xbox, PlayStation, Switch, 8BitDo, Stadia, and hundreds more - just work when plugged in: every button, stick, dpad, and trigger is identified correctly, and works the same on every platform, over USB or Bluetooth. The controls dialog shows readable names ("Left Shoulder", "Dpad Up") instead of raw button numbers.  
   >
   >Unrecognized controllers still work like before: bind buttons manually, once.  
   >
   >You may update the gamecontrollerdb.txt file next to the program to teach ZC about brand-new controllers without waiting for a release. 
   >
- Per-controller control schemes with sensible gamepad defaults [`6afd40e7d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6afd40e7d800a91c9833bfd30b9a2edfbba6c313)
   &nbsp;
   >A recognized gamepad now gets its own control scheme, selected automatically and remembered per controller, so different controllers keep their own bindings. Priority is quest-specific, then per-controller, then global.  
   >
   >A controller seen for the first time gets a scheme named after it with gamepad defaults: dpad and left stick both move, A/B/X/Y go on the buttons with those labels (PlayStation pads use the SNES physical layout instead), L/R on the shoulders, triggers on Ex3/Ex4, Start opens the menu and Back the map.  
   >
   >The dpad is now bindable as four buttons, and directional buttons work even when analog movement is enabled. 
   >
- Simpler controller binding UI [`c2ab39b31c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2ab39b31c72543b2e4513857a333f9c3e3f5857)
   &nbsp;
   >In the control scheme binding dialog, the movement sticks are now picked from a dropdown listing the connected controller's actual sticks (Dpad, Left Stick, Right Stick, ...) instead of a press-to-bind flow. Without a connected controller the stick bindings are shown read-only, as before.  
   >
   >The Control Schemes dialog gains a "Connected Gamepads" section showing each controller and which scheme it is assigned to, with a dropdown to reassign or set back to '(Auto)'. Assignment changes apply immediately. 
   >

# Bug Fixes

### Player

- Prevent crash on exit or quest reload while scripts were still compiling [`cf15992fe0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf15992fe0fab025f8dca63570b5d262f0c52a09)
   &nbsp;
   >Regressed in 3.0.0-prerelease.132+2025-09-09 ([a3e48bba8d](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3e48bba8d)). 
   >

### Editor

- `@ExportEngineValue` values being off by *10000 [`21cd5d1d18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/21cd5d1d1805a8f8f4b2011fd5a41f9290450b6d)
   &nbsp;
   >Values are not automatically fixed in existing quests; re-editing the values will fix it for each value. 
   >

### Visual Studio Code Extension

- Stale compile results could overwrite newer ones after a config switch [`545eccd6cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/545eccd6cb92504232bd3c070a5e94d904050e6c)
   &nbsp;
   >A cancelled or restarted compile was never killed and still published its result when it finished, so a slow compile from the previously configured ZScript could clobber symbols, hovers and diagnostics from the newly configured one.  
   >
   >Regressed in 3.0.0-prerelease.163+2026-03-01 ([4683653438](https://github.com/ZQuestClassic/ZQuestClassic/commit/4683653438)). 
   >
- Language server could die on a startup error and never recover [`e3bc1976bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3bc1976bc6cc2188ff14d264526687d66766515)
   &nbsp;
   >An unhandled promise rejection during initialization killed the server process, and the client never restarts a server that dies before the handshake finishes, so every feature stayed silently dead for the rest of the session. This is what made the extension's CI test fail wholesale now and then. 
   >
