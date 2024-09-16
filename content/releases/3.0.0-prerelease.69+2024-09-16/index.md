---
title: 3.0 Prerelease 69 2024-09-16
description: 
date: 2024-09-15T00:21:16Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.69%2B2024-09-16/3.0.0-prerelease.69%2B2024-09-16-linux.tar.gz
    name: 3.0.0-prerelease.69+2024-09-16-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.69%2B2024-09-16/3.0.0-prerelease.69%2B2024-09-16-mac.dmg
    name: 3.0.0-prerelease.69+2024-09-16-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.69%2B2024-09-16/3.0.0-prerelease.69%2B2024-09-16-windows-x64.zip
    name: 3.0.0-prerelease.69+2024-09-16-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.69%2B2024-09-16/3.0.0-prerelease.69%2B2024-09-16-windows-x86.zip
    name: 3.0.0-prerelease.69+2024-09-16-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 175169069
tag_name: '3.0.0-prerelease.69+2024-09-16'
channel: '3'
tags:
  - releases
---




# Features

- make the special sfx of enemy weapons configurable too (#991) [`9fd9f4a3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fd9f4a3df9ed042e5c91f789c527793b22bd043)
   &nbsp;
   >Some weapon types, like boomerangs and bombs, have a secondary sfx that was hardcoded. You can now configure them in the enemy editor. 
   >

### Editor

- add "Auto-Save" and "Auto-Restart" options to test dialog [`b60605f7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b60605f7ab9570e4afec1d9eca2ab1a9c6c1a113)
   &nbsp;
   >The test dialog no longer prompts you about unsaved changes. Instead, a new option in the dialog "Auto-Save" will save for you just before launching test mode. This defaults to on, but can be disabled.  
   >
   >Additionally, the existing "Auto-Restart" option was moved from the launcher to the test dialog, where it belongs. 
   >

# Bug Fixes

- prevent crash when deleting all text in some input fields [`d989ec304`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d989ec304d8fb60bd819ddf76599df18d1dec7a8)
- mapscr::numFFC() no longer returns 1 when there are 0 ffcs [`0b85ab7c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b85ab7c7757d9d08a3f5128705da195593a18f5)
- issue where double clicking could stop working in lists [`87928c09e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87928c09eab339ceb2e4504c47c90c3518b4a1e9)

### Player

- for old quests, darknut shields no longer incorrectly break when hit with hammer [`14ecb3168`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14ecb3168bf9bccc8166250d8b0fd688c69842c1)

# Refactors

- use vector for storing FFCs [`c1273e149`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c1273e1491df61889ce7dbb14c9604cae9a601aa)
   &nbsp;
   >Previously, every screen allocated memory to hold the maximum number of FFCs (2.55 alpha 112 bumped this from 32 to 128), which took ~43 KB per screen, even if no FFCs were used. Now screens only allocate as many FFCs as they need.  
   >
   >For a quest that uses no FFCs at all, this saves ~5 MB of memory per map. For Yuurand, total memory usage on startup went from 1.3 GB to 800 MB. 
   >

### Editor

- remove the `Misc[]` dialog as it was unused [`49c6f2e4f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49c6f2e4f9493ade07f78aa29586c1f6608f965e)
- upgrade screen enemy selector to new gui (#989) [`54498fae3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54498fae33160767f620db8afee625d7ad14906a)

### ZScript

- remove `Game->Misc,Misc2,Misc3,STD,Ghost,Tango` arrays [`5c64321ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c64321ee1907ebe401cff51b6e3bdbd1f17287e)
   &nbsp;
   >These have been removed from ZScript. Additionally their implementations are removed too, since no quests ever used them. 
   >
- remove unused ->ScriptEntry, ->ScriptOccupancy, ->ExitScript [`846cdd012`](https://github.com/ZQuestClassic/ZQuestClassic/commit/846cdd012cac469796413f5cd692b3d8fb47c4b0)
