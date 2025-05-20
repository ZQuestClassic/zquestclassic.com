---
title: 3.0 Prerelease 106 2025-05-20
description: 
date: 2025-05-20T06:57:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.106%2B2025-05-20/3.0.0-prerelease.106%2B2025-05-20-linux.tar.gz
    name: 3.0.0-prerelease.106+2025-05-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.106%2B2025-05-20/3.0.0-prerelease.106%2B2025-05-20-mac.dmg
    name: 3.0.0-prerelease.106+2025-05-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.106%2B2025-05-20/3.0.0-prerelease.106%2B2025-05-20-windows-x64.zip
    name: 3.0.0-prerelease.106+2025-05-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.106%2B2025-05-20/3.0.0-prerelease.106%2B2025-05-20-windows-x86.zip
    name: 3.0.0-prerelease.106+2025-05-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 219709378
tag_name: '3.0.0-prerelease.106+2025-05-20'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### ZScript

- always deallocate local arrays when script ends [`e49dd5f65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e49dd5f657f52ce57143b7df1da1773d60528408)
   &nbsp;
   >When the bugfix QR `Always Deallocate Array` is off, local arrays are sometimes not deallocated when FFC/item/global scripts end. This can quickly hit the limit for the number of arrays allowed, and results in bad things.  
   >
   >If a local array pointer is passed to another script without changing ownership, this QR being off prevents it from being deleted. Otherwise, as long as the calling script stays alive that array remains valid.  
   >
   >There is no known quest that relies on this behavior - so this QR now has no impact and local arrays owned by a script are always deallocated when it ends.  
   >
   >Currently, the appropriate way to keep a local array alive beyond the life of the script that created it is to call `OwnArray` in some other script.  
   >
   >https://discord.com/channels/876899628556091432/1373883674361335829 
   >

# Build

- integrate zscript playground into `web` build target/package [`32532d209`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32532d2099a6355b27d47f45072a4137e8233eaa)
   &nbsp;
   >This also fixes an issue caused by some recent-ish emscripten update that broke compiling scripts in the web editor. 
   >
- move fmt to third_party [`985d3d730`](https://github.com/ZQuestClassic/ZQuestClassic/commit/985d3d73037c42f750919d73aa19654f5aaa7244)

# Chores

- update replay_uploads_known_good_replays.json [`07151107a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07151107a683a4b0d23914d94c43ef8af5e38ebe)

# Refactors

### Player

- remove unused ZASMSTackTrace, DebugConsole [`c5c794ad9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5c794ad97e557dab953f00c6c7e3acae180e129)
