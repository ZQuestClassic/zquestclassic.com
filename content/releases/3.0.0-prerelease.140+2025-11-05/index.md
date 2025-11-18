---
title: 3.0 Prerelease 140 2025-11-05
description: 
date: 2025-11-05T05:38:12Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.140%2B2025-11-05/3.0.0-prerelease.140%2B2025-11-05-linux.tar.gz
    name: 3.0.0-prerelease.140+2025-11-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.140%2B2025-11-05/3.0.0-prerelease.140%2B2025-11-05-mac.dmg
    name: 3.0.0-prerelease.140+2025-11-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.140%2B2025-11-05/3.0.0-prerelease.140%2B2025-11-05-windows-x64.zip
    name: 3.0.0-prerelease.140+2025-11-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.140%2B2025-11-05/3.0.0-prerelease.140%2B2025-11-05-windows-x86.zip
    name: 3.0.0-prerelease.140+2025-11-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 259788019
tag_name: '3.0.0-prerelease.140+2025-11-05'
channel: '3'
tags:
  - releases
---




# Features

- add many new SCCs [`c4ff8de1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4ff8de1a0e9aa5f2c9aeb7ebfef556d8ffc20d2)
   &nbsp;
   >- CollectItem
   >- Delay
   >- ForceDelay
   >- KillHero
   >- Counter
   >- MaxCounter
   >- GoIfAnyScreenState
   >- GoIfGlobalState
   >- GoIfLevelItem
   >- GoIfLevelState
   >- GoIfScreenState
   >- GoIfSecrets
   >- GoIfScreenExState
   >- GoIfAnyScreenExState
   >- SetGlobalState
   >- SetLevelItem
   >- SetLevelState
   >- SetScreenExState
   >- SetAnyScreenExState
   >
   >
   >&nbsp;
   >
   >See https://docs.zquestclassic.com/tutorials/message_strings for details. 
   >

### Editor

- support updating existing SCCs in string editor [`ca3cd72fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca3cd72fa14d5436293e814dab489a640acacc4a)
- show warnings in string editor [`023f961c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/023f961c7565ada8a51a4fc4e3c0b75ab638d963)

### ZScript

- add `messagedata::Segments[]` [`036930bbc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/036930bbcae5b76fa738cffe70313d6c18c74a96)
   &nbsp;
   >This exposes to scripts the parsed message string, which includes commands and escaped characters. 
   >

# Bug Fixes

### Player

- switch triggering on layers [`8f2b741aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f2b741aa254d85847a840657dd768420551ee18)
   &nbsp;
   >This regressed in 6b5e98d (z3) 
   >
- SCC menus no longer sometimes break [`5cbdb4ce9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5cbdb4ce99c9dc8ad64f2eb037f354e027de430c)
   &nbsp;
   >Regressed in 3.0.0-prerelease.104+2025-05-14 (71b272) 
   >
- only force grab one held-up item at a time [`998655562`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9986555628663b15817df70091c74be25ebc7b87)
   &nbsp;
   >If the player collects multiple items at or around the same time, and those items run the "hold up" animation, only the first item would show the holding animation while the others would silently be collected.  
   >
   >Now, the items are collected and held up one at a time. Note that this only applies to "force grabbed" items (ex: settable in scripts via `itemsprite::ForceGrab`, or as the result of some triggers). 
   >
- use correct screen for GoIfScreenD SCC in regions [`ba61aca04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ba61aca049ddaa7a725c56e3290a6419547ce033)

# Refactors

- improve syntax and encoding of message strings [`8c038be72`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c038be72486e1ad91035f3e81ea21022b1a9bd4)
   &nbsp;
   >Message strings now use an improved syntax that is more readable, supports negative arguments, and is less error prone.  
   >
   >Previous:  
   >
   >> It's dangerous to go alone! \1\2\3Take this!  
   >
   >New:  
   >
   >> It's dangerous to go alone! \TextColor\2\3\ Take this!  
   >
   >Additionally, message strings no longer use a binary encoding to store SCCs, but instead now use plain ASCII. Scripts that require the old binary encoding should use the compat QR.  
   >
   >See https://docs.zquestclassic.com/tutorials/message_strings for more. 
   >

### ZScript

- use internal traceStr for TraceToBase [`14287ea26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14287ea262139ed24271f09a3e0b41273cb5eca6)

# Tests

- add auto_tango.zplay [`307a60cf2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/307a60cf2e23bafc7524cc383da7dab2b30a1c2a)

# Misc.

- Revert "fix(zc): only grab one held item at a time" [`90ec8028a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90ec8028a2988966cf10807df2e2e19810c954d6)
   &nbsp;
   >This reverts commit 636cd693ebcc1cbec50ced5af8ece8be31f04f64. 
   >
- fix changelog [`f9beec562`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9beec562df2fdbe13280ed70fa7814f235ac00b)
