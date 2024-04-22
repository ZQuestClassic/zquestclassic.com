---
title: 3.0 Prerelease 52 2024-04-22
description: 
date: 2024-04-22T06:09:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.52%2B2024-04-22/3.0.0-prerelease.52%2B2024-04-22-linux.tar.gz
    name: 3.0.0-prerelease.52+2024-04-22-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.52%2B2024-04-22/3.0.0-prerelease.52%2B2024-04-22-mac.dmg
    name: 3.0.0-prerelease.52+2024-04-22-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.52%2B2024-04-22/3.0.0-prerelease.52%2B2024-04-22-windows-x64.zip
    name: 3.0.0-prerelease.52+2024-04-22-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.52%2B2024-04-22/3.0.0-prerelease.52%2B2024-04-22-windows-x86.zip
    name: 3.0.0-prerelease.52+2024-04-22-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 152140934
tag_name: '3.0.0-prerelease.52+2024-04-22'
channel: '3'
tags:
  - releases
---




# Features

### Visual Studio Code Extension

- support @link tags in hover tooltips [`1430272d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1430272d2596810ee907dd993682a48b9e45a17e)
   &nbsp;
   >Comments may contain inline links to other symbols with the `@link` tag:  
   >
   >```cpp
   >// Better than {@link counter2} ... {@link counter2|that counter is lame}
   >int counter1;
   >// This also works as shorthand for links: [counter1]
   >int counter2;
   >```
   >
   > When hovering the mouse over any usage of `counter1`, the tooltip will render these as clickable links that navigate you to the specified symbol. 
   >

# Bug Fixes

### ZScript

- handful of zasm commands using wrong name [`fd5901f67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd5901f6761b7029a62815751dda5d422e0f9288)
- Trace(string) using wrong register [`db2256d50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db2256d5083c1e9d999fcc3c723900e94222031f)
- wrong names for zasm npc InitD and item WeaponHitWidth [`00c1ec410`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00c1ec4109d698e8af5ce104bc214542f334cd6c)
- various symbols with broken compiler output [`672597c11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/672597c112c36c0bcfa218576c6813ccdbb80662)
   &nbsp;
   >* npc->Attack()
   >* npc->CanSlide()
   >* npc->ConstantWalk(int[])
   >* npc->ConstantWalk8(int[])
   >* npc->FloatingWalk(int[])
   >* npc->HaltingWalk(int[])
   >* npc->HaltingWalk8(int[])
   >* npc->isDead()
   >* npc->NewDir8(int[])
   >* npc->Remove()
   >* npc->Slide()
   >* npc->StopBGSFX()
   >* npc->VariableWalk(int[])
   >* npc->VariableWalk8(int[])
   >* Trace(char32[])
   >
- remove some unimplemented symbols and correct some types [`f6d59d044`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6d59d044746e30c85eb514014e5a7eb961395ce)

### Visual Studio Code Extension

- invalid uri on windows for links in hover tooltip [`179d55946`](https://github.com/ZQuestClassic/ZQuestClassic/commit/179d55946cf29d5917def708e35095be36922e3d)

# Refactors

### ZScript

- move zasm table and serialization to shared lib [`c483f611c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c483f611c802b1b01dac27f38736f4fec8879320)
- remove separate zasm defines for compiler [`bcd079539`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcd0795391031b1430ff34f2527fad1874da04fb)
- improve location of many error messages [`52949459f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52949459f63bafbcf0eaa85424d5d3a75cacc635)
- reduce the scripts included by default [`eed542419`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eed542419c36afd4b486d396634054af32b01cad)
   &nbsp;
   >This removes some scripts that aren't useful, or aren't a good fit for default inclusion.  
   >
   >* delete `gameover_menus.zh`
   >* delete `LISP.zh`
   >* delete `Music.zh`
   >* delete `sprites.zh`
   >* delete `styles.zh`
   >* delete `theRandomHeader_v2.zh`
   >* delete `ZVersion.zh`
   >* delete `tango/1.0` and `tango/1.2` (keeping just 1.3)
   >* move `sram.zh` to `deprecated/sram.zh`
   >* move `theRandomHeader_v3.zh` to `deprecated/theRandomHeader.zh`
   >* move `time.zh` to `deprecated/time.zh`
   >* move example scripts to `headers/examples`
   >* remove `std` including `EmilyMisc.zh` - include yourself as needed
   >
- deprecate many getters/setters, replace with variables [`46ca3bfa8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46ca3bfa86e32d8ba6ce93a55d03c16bf60392ea)
   &nbsp;
   >~40 built-in methods exist in this style:  
   >
   >```cpp
   >int Max(); // Returns the max.
   >void Max(int value); // Sets the max.
   >int GetCurDMapScreen();
   >```
   >
   > These have been deprecated and replaced with a variable, like so:  
   >
   >```
   >int Max; // The max number.
   >int CurDMapScreen;
   >```
   >
- move internal symbols to new binding .zh files [`011539980`](https://github.com/ZQuestClassic/ZQuestClassic/commit/011539980ba9bc8443f1f57c67c1880b1306d740)
   &nbsp;
   >Internal symbols were defined in `.cpp` files, but now they are defined in `.zs` files with a new `internal` keyword and `@zasm` doc comments. These files live in `bindings`, and are automatically included for every compilation.  
   >
   >This should simplify the process of adding new internal symbols. It also enables viewing documentation of any internal symbol in the VS Code extension (w/ a hover tooltip), and all the documentation we have for internal functions and variables has been inserted as comments in the binding files.  
   >
   >This also deprecates functions that create an object of internal types, like `Game->CreateBitmap(width, height)` - and replaces with normal constructors - `new bitmap(width, height)`. 
   >
- remove library symbol cpp files [`76a67b371`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76a67b3714c3dd208754a9f6c3a7c4e8c0bb4fa3)
- remove internal class type [`b76078275`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b760782751ad8b5749cad877e10c105ea9e52ac4)

# Misc.

### Visual Studio Code Extension

- publish 1.0.9 [`c58661f07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c58661f071c6b6e0f09ceb4dc13cc667371401f4)
