---
title: 3.0 Prerelease 125 2025-08-12
description: 
date: 2025-08-12T05:29:32Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.125%2B2025-08-12/3.0.0-prerelease.125%2B2025-08-12-linux.tar.gz
    name: 3.0.0-prerelease.125+2025-08-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.125%2B2025-08-12/3.0.0-prerelease.125%2B2025-08-12-mac.dmg
    name: 3.0.0-prerelease.125+2025-08-12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.125%2B2025-08-12/3.0.0-prerelease.125%2B2025-08-12-windows-x64.zip
    name: 3.0.0-prerelease.125+2025-08-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.125%2B2025-08-12/3.0.0-prerelease.125%2B2025-08-12-windows-x86.zip
    name: 3.0.0-prerelease.125+2025-08-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 239265208
tag_name: '3.0.0-prerelease.125+2025-08-12'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- stop message string at expected place for "Wait for A" SCC [`8259ac6b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8259ac6b277031a0f6fc8715b16edb5b924f3008)
   &nbsp;
   >This regressed recently (probably 3.0.0-prerelease.104+2025-05-14). 
   >
- disable stack zasm optimize pass for now [`4917ec993`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4917ec9936fb99745ecebd3db83a04f5dbea2a41)
   &nbsp;
   >Found a case where this broke some code, so turning off for now. 
   >
- disable zasm optimizer by default for now [`c23c24a3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c23c24a3ecd78f2712b590b3de94401236789601)
   &nbsp;
   >Gotta work through a few bugs, gonna turn off entirely for now. 
   >
- correctly load saves for recently compiled quests [`b99333b01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b99333b014c9e31b22ee9f4913ad789362a5cf73)
   &nbsp;
   >Regressed recently in 4b40449 (3.0.0-prerelease.118+2025-07-11). 
   >

### ZScript

- produce correct codegen for objects with default constructors [`99a548a52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99a548a5248fa316803c81fc351adb7a2f55d894)
   &nbsp;
   >Creating an custom object inside another's constructor generate incorrect code when the second class has a default (or empty) constructor.  
   >
   >For example, this code would error and not set the `b` variable on `f`.  
   >
   >```
   >class foo
   >{
   >    bar b;
   >    foo()
   >    {
   >        b = new bar();
   >    }
   >}
   >
   >class bar
   >{
   >    bar()
   >    {
   >    }
   >}
   >
   >foo f = new foo();
   >```
   >

# Tests

- add auto_bug_nested_class_constructors.zplay [`1eec8111d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1eec8111d2d12cd5ee0c4051b7344a6ed1198d77)
- disable test_jit.py for now [`a783eb6a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a783eb6a8168d581cd62fe10bf52ba603328c473)
