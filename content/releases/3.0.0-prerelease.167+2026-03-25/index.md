---
title: 3.0 Prerelease 167 2026-03-25
description: 
date: 2026-03-25T06:49:36Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.167%2B2026-03-25/3.0.0-prerelease.167%2B2026-03-25-linux.tar.gz
    name: 3.0.0-prerelease.167+2026-03-25-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.167%2B2026-03-25/3.0.0-prerelease.167%2B2026-03-25-mac.dmg
    name: 3.0.0-prerelease.167+2026-03-25-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.167%2B2026-03-25/3.0.0-prerelease.167%2B2026-03-25-windows-x64.zip
    name: 3.0.0-prerelease.167+2026-03-25-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.167%2B2026-03-25/3.0.0-prerelease.167%2B2026-03-25-windows-x86.zip
    name: 3.0.0-prerelease.167+2026-03-25-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 301053307
tag_name: '3.0.0-prerelease.167+2026-03-25'
channel: '3'
tags:
  - releases
---


# Features

- Customizable player hitbox for item collection [`a4f619394`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4f619394dbf13fe5161b1003104818aa2330b2b)
   &nbsp;
   >Also includes fix for item hitboxes being weird in general, so now modifying the size of item hitboxes should work MUCH cleaner. 
   >

### Player

- Press B to backspace in name entry grid mode [`925b393b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/925b393b070d9948626f27b35d33aa24f7d82d5c)
- Improved grid name entry mode [`dcdbf7231`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dcdbf7231a9d493a87e2d9aba6757cc7d2a601af)
   &nbsp;
   >* Show on-screen controls for insert, backspace, confirm
   >* Press 'Tab' to use keyboard to type name
   >

### Editor

- Add 'Open Tile Page' to RClick menu of Combo Pages [`9c87349db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c87349db4c7e2b71618c7da4b5bac6ebc0705ee)
- Add 'Select' to combo page RClick menu [`3d76567f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3d76567f9688da7962eadba400108776654ae934)
   &nbsp;
   >On using "Select": - Your current Combo + CSet you are drawing with are changed to the rclicked combo - Your current Drawing Mode is changed to Normal - The active Combo Column will scroll to the selected combo - The combo page dialog closes itself (so you can go use the selected combo quickly) Useful to quickly start using a combo / section of combos via the pages interface. 
   >
- "DMap Levels" quest report, lists which dmaps are tied to each level [`e1431cdf8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1431cdf8b854114c68946385730e92a4b830aa3)

### ZScript

- `CheckItemDataScript()` added to script_runners.zh [`2ee172696`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ee1726963ec0832baf5fd1eb820028d89074372)
- Access to '*`weapon->PierceCount`' [`fb65452a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb65452a0b982a5587573f474f876bd820813d55)
- `subscreendata->Open()` / `subscreendata->Close()` [`c6bed9186`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6bed9186c9799528a69cd2b34d0395271a56b84)
   &nbsp;
   >Directly open an active subscreen, or via `this->Close()` on an active subscreen script, close one. Equally works on map subscreens. Opening is delayed until the next moment the player could normally open the subscreen themselves. 
   >

# Bug Fixes

- Subscreen selector fitting to item hitboxes is now togglable via QR [`e7746505b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7746505b377a4bbfdb5cbef8798e6029f1b2059)
   &nbsp;
   >Subscreen rule, not compat rule 
   >
- Prevent crash on close in sfx dtor [`93b805f4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93b805f4d6c6013b448dbdcc495f1455261c2a47)

### Player

- Minor index logic error related to subscreens [`f29661a1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f29661a1bcb59e2442b757238797186a2d3e9b28)
   &nbsp;
   >don't know if this even caused any noticable bugs, but it was wrong 
   >
- 'Show Hitbox' cheat hitboxes being slightly misaligned [`cb6a74092`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb6a74092ab2cdfefb6d1a695790ae2c5f615ec2)

### Editor

- Minor visual error on undercombo dialog [`cc4edaa40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc4edaa409a2f8308bd7257fd1e1bbf8f374af22)

### ZScript

- Bad bool checks for `Audio->PlaySoundEx()` and `Graphics->MonochromeHue()` [`6e0a660b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e0a660b90cc2d0518a6743e8c412cee5488d9d4)
   &nbsp;
   >The script engine was incorrectly dividing the bool parameter by 10000, which produces the wrong results when the compiler is configured to emit 1L (rather than 10000L) for the `true` keyword. 
   >
- Debugger infinite loop when printing invalid arrays [`346051d4a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/346051d4aa279390b3391605182ad9964880a308)
- Parameter types of some functions were `int` instead of `char32[]` [`011e09931`](https://github.com/ZQuestClassic/ZQuestClassic/commit/011e09931be4fb2bf2fa014ef4ebf6c5b38a775d)
- itemdata Counter fields not allowing new counter values [`e000276db`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e000276dbfb43a94dd9244aecded50ca698e23d8)
   &nbsp;
   >set values were being capped at 32 
   >
- Remove object references after for/if-else scopes [`51fbc6185`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51fbc618562dd363b5934d2959912f842b74b687)
- Prevent unused variables from breaking everything [`ee6d0299a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee6d0299a4ffa4b6f5bb9da916a7032211150c23)
   &nbsp;
   >An attempted optimization to reduce stack size was accidentally breaking variables defined in scopes prior to the unused variable. Instead, we no longer try to remove the "hole" caused by an unused variable, which we weren't handling correctly and is complicated to do right. 
   >
- `subscreenpage->SwapWidgets` confusing error message [`d12c12c5f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d12c12c5fc18fe4e372685da5c3e8891eb754a0c)

### Visual Studio Code Extension

- Canonicalize script paths [`ffac73c62`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffac73c62e7aad18a6816187100d39e024a77ba5)
   &nbsp;
   >Confusing duplication errors were possible when the same file is included using slightly different include paths differing only in casing (ex: "MyScripts/" and "myscripts/"). The compiler saw these as different files and so screamed at you about duplicate stuff.  
   >
   >This only happened if the default include paths extension setting is set set with folder that doesn't actually match the true casing on the disk. 
   >

### Web

- Prevent backspace randomly inserting characters [`0cb58f500`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0cb58f500b077631e12484d7599703001c5b7d16)

# Documentation

### ZScript

- Correct docs for `bitmap->Dither` / ReplaceColors [`7a403b52f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a403b52fc6e41ba57549fc39f4d936f51ee6e10)

# Chores

- Add Deathrider to AUTHORS [`8bb2e6f01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8bb2e6f01628c46df6ea34cfc3d926d9ff8ae76c)

# Refactors

- Split up qst.cpp [`0ac69128a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ac69128a09e13734f503ffe1e06baf869b2c442)

### Web

- Set default name entry mode to grid [`6adaa946c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6adaa946c8d899b7a33b57d9fd9ca26a615b258d)
- Do not pre-fill save name for web quick open [`0ca4358ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ca4358ab3efae2b2dc760a169c550bf7def2e38)

# Tests

- Update snapshots [`7f5658e90`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f5658e9022fbe11002faa16a419ac217bbb9acd)

# Misc.

- Add 2.55.13 changelog [`ef2abd86f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef2abd86f707c06625cbfab3c8c6b0ce13fd987c)
- Normalize changelog text: backticks, casing for special terms, etc [`ce6f4f716`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce6f4f716ce7e386689090b11ce52aac07ac162d)
   &nbsp;
   >Also also short SHA in the override file, which the script will replace will the long SHA. 
   >
- Capitalize changelog [`a95e0db9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a95e0db9c43b7d6090f90203e5fd51da7631a19b)
- Do some preparation for 3.0 changelog [`4503e03b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4503e03b876c1c2952c9f2ef6695bd079287a4aa)
