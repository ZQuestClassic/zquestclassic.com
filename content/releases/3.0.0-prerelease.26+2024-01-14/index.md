---
title: 3.0 Prerelease 26 2024-01-14
description: 
date: 2024-01-14T06:28:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.26%2B2024-01-14/3.0.0-prerelease.26%2B2024-01-14-linux.tar.gz
    name: 3.0.0-prerelease.26+2024-01-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.26%2B2024-01-14/3.0.0-prerelease.26%2B2024-01-14-mac.dmg
    name: 3.0.0-prerelease.26+2024-01-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.26%2B2024-01-14/3.0.0-prerelease.26%2B2024-01-14-windows-x64.zip
    name: 3.0.0-prerelease.26+2024-01-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.26%2B2024-01-14/3.0.0-prerelease.26%2B2024-01-14-windows-x86.zip
    name: 3.0.0-prerelease.26+2024-01-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136970529
tag_name: '3.0.0-prerelease.26+2024-01-14'
channel: '3'
tags:
  - releases
---




# Features

### Player

- optimize zasm by inlining functions [`86edb55fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86edb55fbfb5d882215b28f9dfa53f26216f242e)

# Bug Fixes

### Player

- 'Custom Weapon' itemclasses rounding down step speed [`b8812a72c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8812a72c057f235669161b9792a5c44b9168569)
- re-optimize when jit reuses scripts from last load [`f55cf241f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f55cf241f42a32ee96437be006fcebfa4175052c)
- restore option to scale display to full window size [`61ff78f20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61ff78f2079da62d35487515610b9491cb82a8ae)
   &nbsp;
   >This broke when the display was fixed to only show at the correct aspect ratio. Default is still as before, but now the "Force Integer Values for Scale" option works again. 
   >

### ZScript

- exit with correct status for jit on QUIT [`3a48a0aea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a48a0aea4246ec283f130f4f8e7e117b00f80b5)

# Refactors

### Player

- split some zasm opts into separate script-level pass [`3f4f964dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f4f964dcdd559bf21e225e43853abff45dcaf21)
- assume modern function calls in zasm optimization passes [`e260ce752`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e260ce752e314bf83d8ea3ec6f4f03a152a08ac0)
- remove ZASM debugger from menu [`1da2d02a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1da2d02a3ec595a8adde56048d016d2b46139fb1)
   &nbsp;
   >You may still activate this with `[CONSOLE] print_ZASM = 1` in `zc.cfg`, but the option is no longer in the player menu. This will be removed entirely soon - it's so slow it can lock up a computer, and not useful enough to keep around.  
   >
   >We may introduce a proper debugger in the future for ZScript to serve the purpose the ZASM debugger tried to. 
   >
