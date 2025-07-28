---
title: 3.0 Prerelease 122 2025-07-28
description: 
date: 2025-07-28T02:27:33Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.122%2B2025-07-28/3.0.0-prerelease.122%2B2025-07-28-linux.tar.gz
    name: 3.0.0-prerelease.122+2025-07-28-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.122%2B2025-07-28/3.0.0-prerelease.122%2B2025-07-28-mac.dmg
    name: 3.0.0-prerelease.122+2025-07-28-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.122%2B2025-07-28/3.0.0-prerelease.122%2B2025-07-28-windows-x64.zip
    name: 3.0.0-prerelease.122+2025-07-28-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.122%2B2025-07-28/3.0.0-prerelease.122%2B2025-07-28-windows-x86.zip
    name: 3.0.0-prerelease.122+2025-07-28-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 235538075
tag_name: '3.0.0-prerelease.122+2025-07-28'
channel: '3'
tags:
  - releases
---




# Features

### Player

- enable ZASM optimizer [`119445961`](https://github.com/ZQuestClassic/ZQuestClassic/commit/119445961b88bd542bacfea108e82a8aedde656b)
   &nbsp;
   >Script heavy quests are known to run 2x more efficiently with this enabled. 
   >

# Bug Fixes

### Player

- prevent crash in ffc changer prev/next swap [`91348e710`](https://github.com/ZQuestClassic/ZQuestClassic/commit/91348e7104f5a5c7af1e35c712441c14541b6311)
- prevent crash from div-by-0 with enemy misc [`668058fc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/668058fc116b15abded5aa35623dff9c11b0ea10)
   &nbsp;
   >Many configurable enemy misc values are used as the dividend in a modulus operation. If these values are set to 0, a crash can happen. The result now is to return 0 (same result as when configured with 1). 
   >
- ignore corrupted enemies in 1.90 or older quests [`dc69f7b14`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc69f7b14a05fe74eb565a5f511b4a9fe595da53)
   &nbsp;
   >Somehow, quests saved in old versions could sometimes set invalid screen enemies. Modern ZC has more enemies, so those bad quests were now loading scary new enemies like Ice Wizzrobes where before they might do nothing interesting.  
   >
   >Now, when loading 1.90 or older quests, any enemy ids that were not possible at the time are now ignored. 
   >
- stop drawing dive items in lens view after pickup [`94796c4eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94796c4eb8900065259b73a6d97617c2398ac9b4)
   &nbsp;
   >This bug only happened if the `Old Special Room Screenstate Detection` QR was on. 
   >
- use correct option for optimize_zasm [`400fbba4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/400fbba4f599647bb7887bcb50928a88b129e95c)
- update default for optimize_zasm in zc.cfg [`45b8f8a0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45b8f8a0b8e23738794a38cff4ad8bcd48cf5951)

### Editor

- clean up 'Button Counter' subscreen widget '?' buttons [`4f7adab43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f7adab43ade17b03986ef2a70b5f93d76f35e30)
- compiler settings dialog visually offset [`90b341141`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90b3411416fa2102eb24696faaca81cdb84475b0)
- quest rules dialog inconsistencies [`63db14d13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/63db14d13d21a87a1afb76557ce6387b77a31f33)
   &nbsp;
   >Editing qrs inside `?` buttons in the dialog should properly apply Applying a Ruleset/Rule Template/etc and then clicking Cancel will properly cancel those changes Editing QRs and then applying a Rule Template will no longer lose the edits made before applying the template 
   >

### ZScript

- prevent rare crash when jitted script ends [`ac29eec66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac29eec66f325da9068afb3546241e5d6c3a9ac1)
   &nbsp;
   >Recently regressed in 004f602. 
   >

# Chores

### Player

- remove some unused bounds check functions [`85c190adc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85c190adc21d436f443bd167a053a4a1ee0f70bb)

# Refactors

### Player

- make some ZASM optimize passes experimental [`91f970ebe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/91f970ebea61a3b857c519e25ca9081022b89e75)
   &nbsp;
   >The unreachable and spurious branche passes are now off by default, not because they don't work but because they take the longest amount of time for the smallest improvement. 
   >
- optimize functions in parallel for 3.0 quests [`29b824f26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29b824f26bac7facdcd2abf7710c817a27366162)
   &nbsp;
   >The ZASM optimizer typically run in parallel across all zasm scripts, but newer scripts only have a single zasm script. So for new quests, parallelize on the functions instead. 
   >

# Tests

- upgrade zscript database [`6ff12ea74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ff12ea745f3672c6216d422edb21f7d39ef02a0)
- upgrade zscript database [`edf32eef1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/edf32eef10c0cee30d8c204e41cb7b7ffaeb69b7)
