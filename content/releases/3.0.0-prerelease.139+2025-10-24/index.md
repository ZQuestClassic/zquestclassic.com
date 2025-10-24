---
title: 3.0 Prerelease 139 2025-10-24
description: 
date: 2025-10-24T03:42:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.139%2B2025-10-24/3.0.0-prerelease.139%2B2025-10-24-linux.tar.gz
    name: 3.0.0-prerelease.139+2025-10-24-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.139%2B2025-10-24/3.0.0-prerelease.139%2B2025-10-24-mac.dmg
    name: 3.0.0-prerelease.139+2025-10-24-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.139%2B2025-10-24/3.0.0-prerelease.139%2B2025-10-24-windows-x64.zip
    name: 3.0.0-prerelease.139+2025-10-24-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.139%2B2025-10-24/3.0.0-prerelease.139%2B2025-10-24-windows-x86.zip
    name: 3.0.0-prerelease.139+2025-10-24-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 256894405
tag_name: '3.0.0-prerelease.139+2025-10-24'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- support secure websockets [`fc40b42df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fc40b42df22e6b36332861cc28062ea9997a6b71)

### Web

- support websockets [`aeb4f14fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aeb4f14feb21e0cb319e3bdbe8eb92edab5ee702)

# Bug Fixes

### Player

- don't run handle_termv for subscreen items [`9c1d3831f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c1d3831f54cefc88cff60df2ddea96970f5e186)
   &nbsp;
   >This function showed up a lot in crash reports. I don't think it's the root cause, but maybe this will help.  
   >
   >Crashes started in 3.0.0-prerelease.131+2025-08-31.  
   >
   >https://zeldaclassic.sentry.io/share/issue/faacda245cb24869ba968c5f1c09e850/ 
   >

### Editor

- String list '-->' not appearing when it should [`8e2f18926`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e2f18926124fa081732b677036463ca1b699f41)
   &nbsp;
   >Now it will appear when it is the 'Next String' of the thing *visibly above it in the list*, regardless of base index number. 
   >

### ZScript

- websocket Receive function was broken since gc arrays [`2184f1e0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2184f1e0bb5c5866595be2151e0fa093d9781646)
- websockets could error when game reloads because of gc array stuff [`75b58a296`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75b58a29657e607da00bff9aca128c007a81c8b3)
- implement websocket::URL [`68d35746a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68d35746a516f33017aae4989f5b3b197ec499d9)
- actually resize websocket message array [`a51ec074e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a51ec074e664846bbdad9b57d07c040a5be48ccd)
- printf / varargs no longer broken [`66db992ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/66db992eacd8dca99972b63ee4fd57cf6816c534)
   &nbsp;
   >Not sure when, but sometime in 3.0 this broke. Probably recently as we only just noticed it. 
   >

# Documentation

- improve docs for building third-party libraries on windows [`20a6678b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20a6678b7d231886eaf8ef787d6632d90ee9da1f)
- improve documentation for npc::Create [`1b460d5d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b460d5d94aa02cc74bce2461ac8e1c3a59b10e6)

### ZScript

- improve some subscreendata docs [`f09219c06`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f09219c06e76feb28d184deb9637e4c86fe46d28)

# Refactors

- removed more unused stuff [`56558a311`](https://github.com/ZQuestClassic/ZQuestClassic/commit/56558a31183b54ca6f5141d36bc751d1b7a75a91)

### Player

- remove has_implemented_register_invalidations [`8937f72c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8937f72c395cb06856839d8dafc1109fbf38ce73)
   &nbsp;
   >All registers should be handled now. 
   >

### ZScript Standard Library (std.zh)

- use sprite to reduce number of Collision functions [`d536511a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d536511a6bd078dfc7aa6dc9f63cb3713b318843)

### ZScript

- use @deprecated_getter for more things [`c2a70e4d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2a70e4d5c242ecc194dc3967869e20ead5ad422)
- move Own functions to base sprite class [`bfb37ca56`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bfb37ca568501cf9d2b8c83665b781206f7d9a0e)
- make Damage an alias of Power for weapon, itemdata [`dbc09c035`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dbc09c035303ca394bf58c47738477079d2d556f)
- cache getParsedComment, small compiler speedup [`1449343d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1449343d3bbabe10b10af0ccef3180f5d134c092)
- flip order of command/variable in scripting_log_error_with_context [`5ec0de53e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ec0de53e34998078265c01f5861813ee9b40c92)
   &nbsp;
   >It makes a bit more sense for the command to come before the variable. 
   >

# Misc.

- update zc version used in collect script [`3dfaa60f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3dfaa60f8e8e14eab32bc730fd7c39bae11e033d)
