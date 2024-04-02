---
title: 3.0 Prerelease 45 2024-04-02
description: 
date: 2024-04-02T01:56:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.45%2B2024-04-02/3.0.0-prerelease.45%2B2024-04-02-linux.tar.gz
    name: 3.0.0-prerelease.45+2024-04-02-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.45%2B2024-04-02/3.0.0-prerelease.45%2B2024-04-02-mac.dmg
    name: 3.0.0-prerelease.45+2024-04-02-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.45%2B2024-04-02/3.0.0-prerelease.45%2B2024-04-02-windows-x64.zip
    name: 3.0.0-prerelease.45+2024-04-02-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.45%2B2024-04-02/3.0.0-prerelease.45%2B2024-04-02-windows-x86.zip
    name: 3.0.0-prerelease.45+2024-04-02-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 149341700
tag_name: '3.0.0-prerelease.45+2024-04-02'
channel: '3'
tags:
  - releases
---




# Features

- option to disable transparent darkrooms stacking multiple transparent layers [`d9d3ac8e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9d3ac8e44e73d1d73e43a1bc5af5eeb7edc5952)

### ZScript

- add template types to some internal functions [`633d75471`](https://github.com/ZQuestClassic/ZQuestClassic/commit/633d75471847b93069021e0daa1797341865244e)
   &nbsp;
   >The following internal functions have switched from using `untyped` to template types:  
   >
   >```cpp
   >void ArrayPushBack(T[] arr, T val)
   >void ArrayPushFront(T[] arr, T val)
   >void ArrayPushAt(T[] arr, T val, int index)
   >T ArrayPopBack(T[] arr)
   >T ArrayPopFront(T[] arr)
   >T ArrayPopAt(T[] arr)
   >void ArrayCopy(T[] dest, T[] src)
   >int SizeOfArray(T[] arr)
   >void ResizeArray(T[] arr, int sz)
   >void OwnArray(T[] arr)
   >void DestroyArray(T[] arr)
   >
   >void printfa(str* format, T[] args)
   >void sprintfa(str* buf, str* format, T[] args)
   >
   >T Min(T arg1, T arg2, ...T rest)
   >T Max(T arg1, T arg2, ...T rest)
   >T Choose(T arg1, ...T rest)
   >```
   >
   > This means that the type `T` must match other occurrences of `T` throughout the entire signature, given the types of the parameters used by the callsite. For example, this code no longer compiles:  
   >
   >```cpp
   >printfa("hello %d", 1) // Second param is not an array
   >Object objects[] = {new Object()};
   >ArrayPushBack(objects, 1) // Second param is not an Object
   >int v = ArrayPopBack(objects) // Cannot convert Object to int
   >```
   >
   > Note: for now, `SizeOfArray` and `ResizeArray` still allow `char32` for their array parameters, since that is common for string operations and we don't have a formal string type yet. 
   >
- add garbage collector for automatic memory management [`d4bc547f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4bc547f8e7a28320a0ac6e2b58c1f40eb8f3f91)
   &nbsp;
   >Objects created by scripts are now automatically deleted when they are no longer reachable from any script.  
   >
   >This removes needing to manually delete objects you create (either with the `delete` operator or `Free()`), and mostly removes any reason to ever call `Own()`.  
   >
   >See the new "Object Memory Management" section in ZScript_Additions.txt for further details. 
   >

# Bug Fixes

### Player

- 'Spotlight' combos on changer/ethereal ffcs still shooting light [`99d4786b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99d4786b9214c227794a605cdc530cc3ff82f09a)
- fix buggy color flickering on big player sprites [`5a6bf306e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a6bf306e535bcbb257861c94054579c46909ac1)
- hardcode 120 for zscript alpha register [`d23a9bdd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d23a9bdd1d0469790e46f2eb11a2389e9a75e42c)
   &nbsp;
   >This fixes some quests that only look at the alpha version and, seeing it was now 0 presented an error message to the user. 
   >

### Editor

- 'View Map' favorite command skipping menu [`b9ea47f75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9ea47f752b9c70bdb6bb34f3af8173a690d6998)
- Crash in ZInfo menu if descriptions are long [`9546a257e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9546a257ee8941c4d313ad4de14c9a75d6b5d497)

### ZScript

- some array-related functions breaking for arrays >65535 in size [`f6ad9203a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6ad9203af8b02158205b6c039c5f5a3476e8b60)
- class variables not shadowing global vars properly [`46ed8bf58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46ed8bf58b9b0c464bbc387f52f990c7e5b897c9)
- bad optimization causing global vars to sometimes read incorrectly [`b000fc9e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b000fc9e2f02dded946b8fa1dd81477b4a8d0797)
- some wrong error messages related to mapdata FFC access [`bf68795d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf68795d98a228c1cdbe40bff0194350ce9ec931)
- websocket pool being destroyed on 'cont_game()' [`ae375c530`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae375c53032c4ce491c70330d44c83ee138e3f1e)
- socket arrays sometimes going invalid? [`12e3b9a92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/12e3b9a92a4983f051d85772a0ab2216aa667a4a)
   &nbsp;
   >Patched the issue here, not the cause. Not sure what caused it to sometimes go invalid, but a validity check seems sane. 
   >
- 'delete' within a destructor being buggy [`0bb0da1de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0bb0da1de912c8f3ee4660d21bd87980509711ca)
- disallow casting custom objects to unrelated types [`ed6faae63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed6faae633655315ffd2fa622685fbf64c56d624)
   &nbsp;
   >A bug in type conversion allowed this code to compile:  
   >
   >```cpp
   >Object obj = new Object();
   >int number = obj;
   >int numbers[] = {obj};
   >```
   >
   > The above code now produces a compiler error. 
   >
- derive language runtime version from compiled scripts [`a772dd873`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a772dd87340d29500910197c32b7da497b000c9a)
   &nbsp;
   >The script engine checks the version a script was compiled in to vary some behavior. Previously this version was set to the section version in the qst file format, but that is updated even if scripts were not re-compiled. Now we look directly at the script metadata to set this version. This avoids issues with saving a quest in a new version without a recompile. 
   >

### Web

- packaged quests not loading correctly [`49b71a2a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/49b71a2a1fe9e571ded039192cd28d77d68c1820)

# Build

- use better library for json [`a698632b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a698632b7a84b4edf7867afb4a6e2b04b10ddf73)

# Refactors

### ZScript

- standardize script object management [`be20f347b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be20f347b6e03ae630716d52d5db364a4efc36e2)
   &nbsp;
   >This keeps script-created objects in the same map, gives all objects a unique id, and implements allocation and retrieval for any object type using the same methods. This reduces some duplicated code, and should help with implementation of a potential garbage collector feature.  
   >
   >Bitmap objects are a bit special, and still need to be refactored. 
   >
- document, clean up, and sanity check websocket stuff [`ce2f07d9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce2f07d9c5a535ca67fc935c114494f0f4f3734d)
- document, clean up, and sanity check websocket stuff [`764e539e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/764e539e0fb340d2e231448ee74ae5f9b5c852d1)
- migrate user_bitmap to script object system [`68329daf9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68329daf9f0110e27717866bfe542350ca483c6d)
   &nbsp;
   >Incidently, this increases the maximum number of user bitmaps to 256. 
   >

# Tests

- add playground_bitmap_credits.zplay [`d6b398ad4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6b398ad43da7328384b54577d452095e1236a52)

# CI

- use macos-13 for newer clang
   >&nbsp;
   >Relevant changes:
   > - ci: update to macos-13 in other places too [`6bb570d37`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6bb570d3727453e47e0fcab7a3213f0d0778f6ae)
