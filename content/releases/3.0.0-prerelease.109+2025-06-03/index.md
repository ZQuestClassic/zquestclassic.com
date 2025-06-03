---
title: 3.0 Prerelease 109 2025-06-03
description: 
date: 2025-06-03T07:08:24Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.109%2B2025-06-03/3.0.0-prerelease.109%2B2025-06-03-linux.tar.gz
    name: 3.0.0-prerelease.109+2025-06-03-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.109%2B2025-06-03/3.0.0-prerelease.109%2B2025-06-03-mac.dmg
    name: 3.0.0-prerelease.109+2025-06-03-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.109%2B2025-06-03/3.0.0-prerelease.109%2B2025-06-03-windows-x64.zip
    name: 3.0.0-prerelease.109+2025-06-03-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.109%2B2025-06-03/3.0.0-prerelease.109%2B2025-06-03-windows-x86.zip
    name: 3.0.0-prerelease.109+2025-06-03-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 222664021
tag_name: '3.0.0-prerelease.109+2025-06-03'
channel: '3'
tags:
  - releases
---




# Features

- add 3 custom LItems [`5b8bc576a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b8bc576ad54f71b1b8f3a8f412058536226fd72)
- allow any item to grant LItems on pickup (for any level) [`2ee9dac5c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ee9dac5c7587939a81ee3b463c595ca90c6f248)
- 'Level Keys' can be for a specific level [`db256905e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db256905e5d4d80a6ec57d8b5522c1c7f67a4da9)

### ZScript

- `Screen->ComboData[]` to directly read the `combodata` pointers of the positions on the screen [`a69021df5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a69021df5db0f431fe31ccdc1e5bd46deb5d8cb3)

# Bug Fixes

- Init Data LItems tab crashing in zplayer / general formatting issues [`8c824c9a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c824c9a400595316af8d706638e688e8a84679d)

### ZScript

- proper object reference counting for scopes [`8b72dc542`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b72dc542ba499438be912531920f88d8168955a)
   &nbsp;
   >Breaking or returning within nested scopes was not correctly removing object references from outer scopes. This also resulted in treating non-object variables on the stack as objects.  
   >
   >For example, here the variable `a` was not releasing its reference after the `break` is hit:  
   >
   >```
   >while (object)
   >{
   >	auto a = object;
   >	if (a)
   >	{
   >		auto n = a;
   >		break;
   >	}
   >}
   >```
   >
   > Now all references within the scope being ended via `break` or `return` should be properly cleared. 
   >
