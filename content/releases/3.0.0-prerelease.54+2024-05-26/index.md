---
title: 3.0 Prerelease 54 2024-05-26
description: 
date: 2024-05-25T22:02:12Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.54%2B2024-05-26/3.0.0-prerelease.54%2B2024-05-26-linux.tar.gz
    name: 3.0.0-prerelease.54+2024-05-26-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.54%2B2024-05-26/3.0.0-prerelease.54%2B2024-05-26-mac.dmg
    name: 3.0.0-prerelease.54+2024-05-26-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.54%2B2024-05-26/3.0.0-prerelease.54%2B2024-05-26-windows-x64.zip
    name: 3.0.0-prerelease.54+2024-05-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.54%2B2024-05-26/3.0.0-prerelease.54%2B2024-05-26-windows-x86.zip
    name: 3.0.0-prerelease.54+2024-05-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 157489018
tag_name: '3.0.0-prerelease.54+2024-05-26'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- add LEGACY_ARRAYS option as more lenient approach to array syntax [`caeb93357`](https://github.com/ZQuestClassic/ZQuestClassic/commit/caeb933574310b469835795b945473f7395448ca)
   &nbsp;
   >This replaces the `OLD_ARRAY_TYPECASTING` option with `LEGACY_ARRAYS`. It can be set to `on`, `off`, or `warn`, and defaults to `warn`. This option supports usage of deprecated syntax for arrays. This will continue to work:  
   >
   >```
   >int arr = {1, 2};
   >Trace(arr[0]);
   >```
   >
   >* by default, this will warn that `int[] arr` is the preferred syntax
   >* legacy arrays syntax is currently not allowed for objects that must be
   >  free'd, such as custom classes or `bitmap` (but, for example,
   >  `lweapon` is fine)
   >
   >
   >&nbsp;
   >
   > Additionally but independent of this option, parameter types are cast to/from arrays when resolving a function call. There was an existing feature that selects the function that required the fewest type casts, and this taps into that. For example, this code works:  
   >
   >```
   >void fnArray(int[] arr) {}
   >void fnLegacyArray(int arr) {}
   >
   >...
   >
   >int legacy_arr = {1};
   >fnArray(arr); // arr is cast to int[]
   >int arr = {1};
   >fnLegacyArray(arr); // arr is cast to int
   >```
   >

# Bug Fixes

### Player

- reset playing_field_offset at beginning of scroll [`5a520f4d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a520f4d421c71e08e5b1dea02e8711027e36a19)
   &nbsp;
   >This prevents the draw offset from a quake from persisting during a scroll.  
   >
   >See https://discord.com/channels/876899628556091432/1238226802867048529 
   >

### Editor

- 3-stair warp dialog not properly listing catchall purpose [`6ab8d137e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ab8d137e9b7f08b64d19a5124756960699dc11a)

### ZScript Standard Library (std.zh)

- use template for `Cond` to support arrays [`af4293cd6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af4293cd6876feec503cfd5781735b43622db012)
   &nbsp;
   >Also deprecate and suggest using ternary expressions. 
   >

### ZScript

- dealloc owned objects for all combos in loadscr [`50a9996df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50a9996dfd68f325dbb390f07125243b4903d9d9)
   &nbsp;
   >For some reason, only the combo at position 0 had its owned objects deallocated when loading a new screen. Now they all do. 
   >
- 'OwnArray()' not working properly at all [`d706df903`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d706df90389211dd7ceae6ac0a59798339a96949)

# Refactors

### ZScript

- make all command strings match enum name [`08e0c08e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08e0c08e568ceda9d499733baa500afeb86018ae)
   &nbsp;
   >This normalizes all the string names for commands to be the same as the enum name used in code, and rewrites `get_script_command` to be an explicit mapping of this string representation and the enum value. These not matching was confusing, and was a potential source of future bugs. 
   >
- tweak `Region->` and screen script internals in preparation for z3 [`7b421826c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b421826ce46bb58b37b9f1f8b892621481f9ff1)
   &nbsp;
   >`Region->OriginScreen` is now of type `screendata`, and `Region->OriginScreenIndex` is added to return just the screen index.  
   >
   >Similar change made to `Region->GetScreenForComoboPos(int pos)`. 
   >
- remove unused features from ZScriptArray [`c09b58133`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c09b58133292e25b2670f8ee0b6c2717981299d7)
   &nbsp;
   >Various things are just a wrapper around what std::vector does, and we don't need dimensions, a template, or a custom iterator. 
   >
- remove duplicated function deallocateZScriptArray [`d061e3c55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d061e3c5525e26d6300707f4981e9105a2f1a0a2)

# Tests

- add newbie_boss.zplay and recompile test [`b1b4d8203`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1b4d8203b6e7e66990548bd4c5f4cdec06a54cd)
- add snapshot test for compiling the zscript database [`46e71c1d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46e71c1d8f50c1d5071bc7e47632ab1967dcd38e)
