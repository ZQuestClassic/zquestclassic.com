---
title: 3.0 Prerelease 117 2025-07-07
description: 
date: 2025-07-07T04:14:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.117%2B2025-07-07/3.0.0-prerelease.117%2B2025-07-07-linux.tar.gz
    name: 3.0.0-prerelease.117+2025-07-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.117%2B2025-07-07/3.0.0-prerelease.117%2B2025-07-07-mac.dmg
    name: 3.0.0-prerelease.117+2025-07-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.117%2B2025-07-07/3.0.0-prerelease.117%2B2025-07-07-windows-x64.zip
    name: 3.0.0-prerelease.117+2025-07-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.117%2B2025-07-07/3.0.0-prerelease.117%2B2025-07-07-windows-x86.zip
    name: 3.0.0-prerelease.117+2025-07-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 230350951
tag_name: '3.0.0-prerelease.117+2025-07-07'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- use sprite location in check_conveyor fAIRCOMBOS check [`73289bf01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73289bf0152fd1b4542b145b3a10552283ad7172)
- remove some noisy traces in hero logic [`896d2b46d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/896d2b46d93119f8450ceebfb55b81e420044bf2)

### Editor

- some dropdowns in combo trigger editor sometimes being too big [`0127ae72c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0127ae72c6cf042debe0ac0eca0edcadb7d9baf6)
- prevent crash when formatting some message strings [`ec760e091`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec760e091a3b1a02fd19e39d62e0599152c3d324)
   &nbsp;
   >The code that generates the shortened text for each message string for the string editor selector used too small a buffer. Strings that were linked and had an id >= 1000 could potentially crash or corrupt the editor. 
   >

### ZScript

- ignore -1 object pointers in get_script_object_checked [`38593c1b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/38593c1b4474522e6b0846836a4111d10a61b270)
- handle object references for buggy old init timing [`b571257c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b571257c218e547897e51e5f1b5331acf3fdb0b5)
   &nbsp;
   >When the "Use Old Global Init and SaveLoad Timing" compat QR is on, if a script that runs before the global init script (such as a generic script) assigns a global object, the engine would get confused and crash.  
   >
   >This was because the global init script is what determines what global registers are object types, and assigning an object to a register before its been declared to be an object type fails an assertion. 
   >
- emit compile error if run function uses >8 parameters [`e303f9eae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e303f9eaefa47e4f515999acb9771d2236b3b342)
   &nbsp;
   >Scripts can only be configured with up to 8 values for parameters, but the run function allowed any number of parameters to be defined. This could result in subtly broken scripts.  
   >
   >Declaring more than 8 parameters for a run function is now an error. 
   >
- correctly update ffc solidity when changing flag [`d9ed447d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9ed447d57aea60d8914ec0ef695646df042a371)
   &nbsp;
   >Regressed recently in df3ce20. 
   >
- use correct id for `eweapon::TotalDYOffset` [`43e3b2c71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43e3b2c71c294f288dc9bd26c45bb0a06bef7f01)
   &nbsp;
   >Meant to fix in 9fb331c9d, but I made a mistake. 
   >

# Misc.

- open launcher by default for archives.py run command [`f89b6cb0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f89b6cb0da66ef0b41f0ead02afa9eb655607807)
   &nbsp;
   >This regressed at some point. 
   >
