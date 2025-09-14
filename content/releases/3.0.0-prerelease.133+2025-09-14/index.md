---
title: 3.0 Prerelease 133 2025-09-14
description: 
date: 2025-09-14T17:46:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.133%2B2025-09-14/3.0.0-prerelease.133%2B2025-09-14-linux.tar.gz
    name: 3.0.0-prerelease.133+2025-09-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.133%2B2025-09-14/3.0.0-prerelease.133%2B2025-09-14-mac.dmg
    name: 3.0.0-prerelease.133+2025-09-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.133%2B2025-09-14/3.0.0-prerelease.133%2B2025-09-14-windows-x64.zip
    name: 3.0.0-prerelease.133+2025-09-14-windows-x64.zip
    platform: windows-x64
prerelease: true
id: 247111639
tag_name: '3.0.0-prerelease.133+2025-09-14'
channel: '3'
tags:
  - releases
---




# Features

### Player

- re-enable jit and zasm optimizer by default [`3cb8249b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3cb8249b13383bb55136d9e266f6076da6cd0902)

# Bug Fixes

### Player

- avoid bad inline function zasm optimization [`eac86cf4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eac86cf4bde64e211abce1c5bdac75b62f7e1d17)

### Editor

- properly set enemy move flags when saving old quests [`f172f20a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f172f20a713a43ceb9e2db339325e9a310d79993)
   &nbsp;
   >Quests older than 2.11 were accidentally clearing enemy move flags if saved in the editor, resulting in enemies not be able to traverse over water or pits. 
   >

### ZScript

- correctly draw to system bitmap render targets [`e90045dca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e90045dcacc0d41b37136ede15d3fd6cc1cc5d73)
   &nbsp;
   >Script draws to the `RT_BITMAP0`, `RT_BITMAP1`, etc. bitmaps were incorrectly being ignored.  
   >
   >This regressed in be20f34 (3.0.0-prerelease.45+2024-04-02). 
   >
- address parsing errors for some functions [`5a89f319d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a89f319d4f7d54b6306335f4dcca9d4c4b9bdfa)
   &nbsp;
   >Scripts that used some functions were not compiling due to parser issues in the compiler. These were affected, but are now fixed:  
   >
   >- `lweapon::MakeAngular(), `lweapon::MakeDirectional()` (and `eweapon`)
   >- `Audio->ContinueSound()`
   >
   >
   >&nbsp;
   >
   >Also added some code to prevent this from happening in the future. 
   >

# Refactors

### Player

- use monospace font for text overlay (fps, etc.) [`da3d695ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da3d695ee60a20faa4fd0f14d74fef586f6d4da9)

### ZScript

- rename REG to REG_UNIMPLEMENTED to make stand out more [`b31cf567b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b31cf567b3ca7fe4535ba364af6746c6042cd999)

# CI

- [win] update vcpkg to 2025.08.27 [`02fa7e849`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02fa7e84959e20c94157ebd78f2df8d6c719a41b)
