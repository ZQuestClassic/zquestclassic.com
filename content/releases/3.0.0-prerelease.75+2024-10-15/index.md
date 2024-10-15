---
title: 3.0 Prerelease 75 2024-10-15
description: 
date: 2024-10-15T02:52:08Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.75%2B2024-10-15/3.0.0-prerelease.75%2B2024-10-15-linux.tar.gz
    name: 3.0.0-prerelease.75+2024-10-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.75%2B2024-10-15/3.0.0-prerelease.75%2B2024-10-15-mac.dmg
    name: 3.0.0-prerelease.75+2024-10-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.75%2B2024-10-15/3.0.0-prerelease.75%2B2024-10-15-windows-x64.zip
    name: 3.0.0-prerelease.75+2024-10-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.75%2B2024-10-15/3.0.0-prerelease.75%2B2024-10-15-windows-x86.zip
    name: 3.0.0-prerelease.75+2024-10-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 179927428
tag_name: '3.0.0-prerelease.75+2024-10-15'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- correctly handle changing unplayed save slot quest [`2a00a285e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a00a285e9d2e7790e2970f30b25d4c5dcf9ee13)

### Editor

- set track to 0 when updating dmap music [`53e128712`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53e1287129afad22139de0e9477049648fd81d5d)
   &nbsp;
   >This prevents a bug where an invalid track could be selected when changing the tracker music file in the dmap editor. 
   >

### ZScript

- fix broken array literals when declared as array pointers [`7f249ee2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f249ee2ec123fefdbc69b968d8f99fe71bf5c82)
   &nbsp;
   >In ZScript, there are array declarations and array pointers. Array pointers are used as array parameters, and declarations are (typically) used to declare arrays (either with an initializer list, or as an empty array).  
   >
   >Array declarations register their array to be deallocated at the end of the scope. Array pointers can take an array, and won't deallocate it when it goes out of scope. That's why pointers are used in parameters.  
   >
   >This syntax is easy to mix up, so one might declare an array using the pointer syntax. The compiler would not complain, but it would actually produce invalid code.  
   >
   >```
   >item items1[] = {item}; // array declaration syntax, worked
   >item[] items1 = {item}; // array pointer syntax, was broken
   >```
   >
   > This is a recent-ish regression in the 3.0 branch, and did not happpen in 2.55. This has now been resolved. 
   >
- show useful error message when single-quote char string is too long [`33a57e9d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33a57e9d38523de540651f9c9f43abd070601517)
- constants at script or namespace scope counting against the global variable limit [`468861e90`](https://github.com/ZQuestClassic/ZQuestClassic/commit/468861e90783141b8a10cf1112d9b2a45685ca69)
- don't mark global arrays as objects via MARK_TYPE_REG [`2ea0c00b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ea0c00b8d8289ff44e389fda2fe6d1cb5cfb52b)
   &nbsp;
   >This broke the garbage collection system, as arrays aren't really objects (yet).  
   >
   >Regressed in 7f249ee 
   >
- fix `combodata` Flag, NextData and NextCSet [`e64e98320`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e64e983202202f778949900796f7d3088c385aa5)
   &nbsp;
   >These were never correctly implemented. 
   >

# Documentation

### ZScript

- fix order of arguments in DrawString on webdocs [`7828d0e6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7828d0e6b714fcfccc3e9d4da482bd1d1f5df456)

# Tests

- retry failures in update_auto_script_tests.py, better failure print [`1c1e99ad1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c1e99ad14386aa1e03127ac76246e845e279dd6)
- add scc replay test [`cfe187b58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfe187b588c620dde150b8a881e6e36e2bf26873)
- fix replay failure summary not printing [`68d259dc8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68d259dc838375c9356cf6595ea1fad3c14e573a)
- also print stdout when command fails [`0e651863b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e651863b5c5afc6aa3de75e1d1a194900c07cb3)

# Misc.

- add whitespace change to .git-blame-ignore-revs [`f2e65524e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2e65524e8cf71e1e229ac751335e91d7ebf690f)
