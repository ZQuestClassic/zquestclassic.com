---
title: 3.0 Prerelease 219 2026-09-08
description: 
date: 2026-09-09T00:26:30Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.219%2B2026-09-08/3.0.0-prerelease.219%2B2026-09-08-linux.tar.gz
    name: 3.0.0-prerelease.219+2026-09-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.219%2B2026-09-08/3.0.0-prerelease.219%2B2026-09-08-mac-universal.dmg
    name: 3.0.0-prerelease.219+2026-09-08-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.219%2B2026-09-08/3.0.0-prerelease.219%2B2026-09-08-windows-x64.zip
    name: 3.0.0-prerelease.219+2026-09-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.219%2B2026-09-08/3.0.0-prerelease.219%2B2026-09-08-windows-x86.zip
    name: 3.0.0-prerelease.219+2026-09-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 385197992
tag_name: '3.0.0-prerelease.219+2026-09-08'
channel: '3'
tags:
  - releases
---

# Bug Fixes

### Player

- Hammers in 1.92/2.10 quests reach one tile further when facing up [`b9354acc0f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9354acc0f4bbcfda3b390f98ff5032fbf0f6eb0)
   &nbsp;
   >In 1.92 and 2.10, the combos affected by a hammer pound were found at fixed offsets from the player. Later versions derive them from the hammer sprite, which sits lower when facing up, and 2 pixels lower still in dungeons. When the player is standing halfway between two tiles vertically, such as after walking up against a solid combo, the old versions pound the tile beyond the adjacent one while newer versions do not reach as far.  
   >
   >End of Time DX (Level 6) and Link's Birthday Deluxe (Super Bomb Dungeon) both have post puzzles that require this extra reach.  
   >
   >A new compat rule controls this behavior: when enabled, the 2.10 pound positions are used when facing up. It is enabled for quests made before 2.11.  
   >
   >Regressed in 2.50.0. 
   >

### ZScript

- String switches under JIT never worked, crashed in web [`42e91a9572`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42e91a9572b36f68a91d0857c01ca5545c319961)
   &nbsp;
   >A `switch` on a string compares the key against each case with a string comparison. The native JITs left that comparison to the interpreter, so the branch that followed tested whatever the processor flags happened to hold, and every string switch fell through to its default case. The web JIT could not compile the branch at all and aborted while compiling the script. 
   >
- printf printed garbage decimal digits for -214748.3648 [`2efcdc78e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2efcdc78e389f0e86057e47784928ad854485219)
   &nbsp;
   >Formatting the most negative number with %d or %f produced non-digit characters after the decimal point on some platforms, since the fractional digits were taken from the absolute value of a number that has no positive counterpart.  
   >
   >Regressed in 2.55-alpha-112 ([626db20707](https://github.com/ZQuestClassic/ZQuestClassic/commit/626db20707)). 
   >
- Modulo by a power-of-two constant wrong for negative numbers under JIT [`d376c3caaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d376c3caaf7ff4cf58ae2d7b8fb0f24115454239)
   &nbsp;
   >`x % d` where d's raw value is a power of two (`-3L % 4L`, or `x % 6.5536`) returned a wrong, non-negative remainder for a negative x when the script was run under JIT. The interpreter gives -3 for `-3L % 4L`; the JIT incorrectly gave 1. 
   >
- Comparisons of a comparison could be folded wrong by ZASM optimizer [`7a5f568be7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a5f568be7a9ff7a2bbf3564746bd81b823a66a1)
   &nbsp;
   >Code like `if ((x < y) == true)` never ran its body, `<int>(x < y) != 2` behaved like `!(x < y)`, and `<int>(x != 0) == 1` was always false. The optimizer's comparison folding modelled a comparison result as 1/0, but a result is 10000/0 (and comparing a bool against `true` compares truthiness), so it folded these to the wrong constant or the wrong condition.  
   >
   >Bug introduced when comparison reduction was added to the optimizer in 3.0.0-prerelease.2+2024-07-24 ([419aac8040](https://github.com/ZQuestClassic/ZQuestClassic/commit/419aac8040)). 
   >

### Web

- Dividing a negative number by zero gave wrong result under JIT [`a25d053b5e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a25d053b5ea8398c6d86ec15acb53f15ab5c8f84)
   &nbsp;
   >Dividing by a runtime zero yields `sign(dividend) * 214748.3647` in the interpreter and the native JITs, so a negative dividend gives -214748.3647. The web JIT incorrectly produced the positive value. 
   >

# Tests

### ZScript

- Differential test of script arithmetic under the JIT [`f130faae9a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f130faae9ab77fa7fafc4f5348c9dd03f38d72cf)
