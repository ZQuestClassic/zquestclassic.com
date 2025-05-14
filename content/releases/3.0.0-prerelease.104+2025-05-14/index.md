---
title: 3.0 Prerelease 104 2025-05-14
description: 
date: 2025-05-14T05:29:20Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.104%2B2025-05-14/3.0.0-prerelease.104%2B2025-05-14-linux.tar.gz
    name: 3.0.0-prerelease.104+2025-05-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.104%2B2025-05-14/3.0.0-prerelease.104%2B2025-05-14-mac.dmg
    name: 3.0.0-prerelease.104+2025-05-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.104%2B2025-05-14/3.0.0-prerelease.104%2B2025-05-14-windows-x64.zip
    name: 3.0.0-prerelease.104+2025-05-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.104%2B2025-05-14/3.0.0-prerelease.104%2B2025-05-14-windows-x86.zip
    name: 3.0.0-prerelease.104+2025-05-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 218471528
tag_name: '3.0.0-prerelease.104+2025-05-14'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- subscreen items no longer hidden after collecting triforce [`e4fd4d6a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4fd4d6a474a5fb3f56c0eadb9c18fc43e66782a)
   &nbsp;
   >If the "No Cutscene" flag is checked for the triforce item, collecting the triforce was incorrectly hiding subscreen items indefinitely. 
   >
- some jinx enemies from 2.55 doing nothing [`ee2a8186d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee2a8186d8ec6923f0b64df1d2b73ccd0eb000bb)
   &nbsp;
   >An off-by-one issue in the qst loading code made some jinx enemies do nothing.  
   >
   >Regressed in 97688da. 
   >

### Editor

- View Map cutting off screens in fullscreen mode [`122f3fca4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/122f3fca464e6d4e36b48b14fcd208da1a9f0fc8)
- changing resolution in View Map via space bar [`b9e612da1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9e612da15fdce40864740610f1565c85e7e35ee)
   &nbsp;
   >Changing resolution via Space resulted in a bug where the viewer would incorrectly use the wrong limit for the panning. 
   >
- add missing moveflags to enemy editor [`97e1435e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97e1435e81a9ef8ede7c614e876395a343fd9af9)

### ZScript

- use better location for for-each statement implicit vars [`9016ba44c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9016ba44cbe2afd343fc8c850bdbb906598b48b3)
   &nbsp;
   >These were failing an assert in MetadataVisitor that expects identifier locations to span a single line. 
   >
- add more values to sprite `MoveFlag` enum [`df609cbe6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df609cbe656fc28a7bfb2c81d5350e7221bf65fd)
- remove `Integer`, `Short`, `Byte`, etc. functions [`5ecc544b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ecc544b7897fc5b93bd67b08215393f87c10390)

# Documentation

- add cross-links between many EventData related sections of docs [`7eda974dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7eda974dc873291a4bb9eca355a7c597f33634e5)
- fix a couple broken links from prior docs commit [`e14b9a449`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e14b9a449fd2ab92464edcf6c670a68529a4793c)

# Refactors

- rewrite string message parsing and renderer [`71b272aee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71b272aee91b7e3c14e45efabc75e0796b38eb69)
   &nbsp;
   >* Completely rewrite the string message parser / renderer - this will
   >  make it possible to add more advanced SCC features in the future.
   >* Executing a SCC no longer takes a frame per command.
   >* Use the same code for parsing a message string in the player and in
   >  the editor - this fixes a handful of differences w/ word wrapping that
   >  the player handled poorly.
   >
   >
   >&nbsp;
   >
   >https://discord.com/channels/876899628556091432/1277878877057978460 
   >

### ZScript

- remove separate "script UID" for sprites [`02028b207`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02028b20772c4f1e93459bb69ac5bf573cb94a9a)
   &nbsp;
   >Every sprite object has an internal engine ID, but for some scripting features a separate "script UID" was used. Features such as `->HitBy`, `->ParentUID` used this - and `Screen->LoadNPCByUID` (etc.) existed to translate to the actual engine ID. These are relevant to `eweapon`, `lweapon` and `npc` sprites.  
   >
   >Now, all these features just use the engine ID, and "script UID" is no longer a separate thing. 
   >
- print context alongside script runtime errors [`b7829c0f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7829c0f8efabc0cfbca7a3218f26cd7dd27c490)
   &nbsp;
   >When a script does something that results in an error, a message is logged to the console that usually mentions the zscript source variable or function where the problem occurred. This was usually right, but sometimes would mention the wrong thing.  
   >
   >Some automation is added to more consistently print the correct variable or function name when encountering an error. In addition, potentially multiple bits of context may now print alongside error messages (one or all of: function, variable, or the name of a specific parameter). 
   >
