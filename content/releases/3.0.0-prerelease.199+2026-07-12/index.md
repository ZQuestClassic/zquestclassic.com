---
title: 3.0 Prerelease 199 2026-07-12
description: 
date: 2026-07-13T01:31:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.199%2B2026-07-12/3.0.0-prerelease.199%2B2026-07-12-linux.tar.gz
    name: 3.0.0-prerelease.199+2026-07-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.199%2B2026-07-12/3.0.0-prerelease.199%2B2026-07-12-mac.dmg
    name: 3.0.0-prerelease.199+2026-07-12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.199%2B2026-07-12/3.0.0-prerelease.199%2B2026-07-12-windows-x64.zip
    name: 3.0.0-prerelease.199+2026-07-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.199%2B2026-07-12/3.0.0-prerelease.199%2B2026-07-12-windows-x86.zip
    name: 3.0.0-prerelease.199+2026-07-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 352982780
tag_name: '3.0.0-prerelease.199+2026-07-12'
channel: '3'
tags:
  - releases
---


# Features

- Allow decimal values for some SCC arguments [`06dbd7afa3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06dbd7afa32159495f8ad28ecc3068b1d2a0a789)
   &nbsp;
   >This allows the full range of values for `Screen->D[]` and `InitD[]` parameters.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1525520874072047667 
   >

# Bug Fixes

- Negating or abs-ing a zfix holding INT32_MIN was undefined behavior [`8008705978`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8008705978907dcfeb0fd7371127f4d0e06bc248)
   &nbsp;
   >zfix::operator-() negated the raw value directly, and doAbs() used abs(); both are signed overflow when the value is INT32_MIN. Use unsigned negation instead, which wraps INT32_MIN to itself by definition - the same result real hardware already produced, minus the UB that let gcc miscompile sign checks. 
   >

### Player

- Handle some out-of-bounds rpos calculations [`cf61fadb3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf61fadb3d2d2e2bcf97ddccd2bde239eff49cd9)
- Remove hero position modification in scrollscr quit [`aec7ee0da4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aec7ee0da43c4cf617ba57ca602afd44161cee98)
   &nbsp;
   >This was the cause of a divergence when playing back a zplay between replay mode and assert mode. It's purpose was just to prevent a single-frame change to a replay comment during the z3 refactor. Let's just remove it now. 
   >
- Strings parsing after being told to close [`e8c221c605`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8c221c605350ba94fdfcdae6c8c6553992253ad)
   &nbsp;
   >In some circumstances, string parsing would continue slightly after the end of the string (when using a Warp or End String SCC). This could cause stray SFX to play for text that was not displayed. 
   >

### Editor

- String index info typo [`70fdb5d15b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/70fdb5d15bcdc5815fbd6c663a29cc4d8f4fee7c)

### ZScript

- Corrupted message strings read via the legacy encoding [`423544c183`](https://github.com/ZQuestClassic/ZQuestClassic/commit/423544c183f40b812588b21f1e5d6b72c1a53fbd)
   &nbsp;
   >In quests using the compat rule for the old binary message encoding, Game->GetMessage and messagedata->Get returned corrupted text for any string containing a control code argument of 254 or more. 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`ac1a221929`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac1a221929c90f864cee6e0c048201da7caae211)

# Refactors

### Player

- Move message string related code into separate file [`76eb4e8dc5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76eb4e8dc51fa5146735544b57f6b9342ca62f6a)

# Tests

- Handle compare replay report with no graphical differences [`da86e3e3b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da86e3e3b41f44ecae6029253e5b14336066c6c5)
   &nbsp;
   >When a selected replay has no unexpected graphical frames, the compare report crashed on load with "Cannot set properties of undefined". Because the crash happened during init, the segment dropdown's change handler was never attached, so segment selection silently did nothing for every replay. Show an explanatory message instead, which also lets init finish and restores segment selection. 
   >
- De-duplicate identical replay tracks in compare report [`e73a320510`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e73a320510f00699286896a9f8ec8be988e1652f)
   &nbsp;
   >A platform that produced more than one results file (from sharding or a retry pass) showed each replay as two or more identical side-by-side tracks in the compare report. De-duplicate when merging results for the same platform. 
   >
- Flag allowlisted known failures in compare report [`f281168efc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f281168efc28b196721d0f93b54b8acc142333d9)
   &nbsp;
   >Replays that are allowlisted as known failures (e.g. platform-specific rendering differences) still pass CI but leave behind "unexpected" frame snapshots. In the compare report these looked like real regressions. Mark such runs with a "known failure (passed)" badge so they are not mistaken for genuine differences. 
   >
- Surface non-graphical failures in compare report [`25625d80f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25625d80f866f404e12164d7e1585414377962a8)
   &nbsp;
   >Replays that failed on something other than a graphics check (e.g. a non-graphical comment/step assertion, or a crash) produce no snapshots, so the compare report silently dropped them - the failure was invisible unless a baseline happened to capture frames. Keep these runs and show a note explaining that the difference is in the replay step log, not the rendered image. 
   >
- Show replay stderr in compare report [`83e1d4b9b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83e1d4b9b1cfcc9076542dca679073eec18b401f)
   &nbsp;
   >Display each run's stderr (e.g. the assertion message that explains a failure) below the tracks in the compare report. The text is loaded from each run's stderr.txt on disk when the report is generated, not stored in test_results.json. 
   >
- Include roundtrip files in compare report [`4fde7a4ae1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fde7a4ae13f9a1020322803adb8318f346f8644)
   &nbsp;
   >Link each failing replay's roundtrip (re-serialized) file from the compare report so serialization differences can be inspected. Roundtrip files are trimmed to keep all metadata fields, the first 100 steps, and the steps around each failure, so the report stays small enough to upload. 
   >
