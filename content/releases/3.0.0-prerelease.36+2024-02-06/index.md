---
title: 3.0 Prerelease 36 2024-02-06
description: 
date: 2024-02-06T05:06:56Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.36%2B2024-02-06/3.0.0-prerelease.36%2B2024-02-06-linux.tar.gz
    name: 3.0.0-prerelease.36+2024-02-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.36%2B2024-02-06/3.0.0-prerelease.36%2B2024-02-06-mac.dmg
    name: 3.0.0-prerelease.36+2024-02-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.36%2B2024-02-06/3.0.0-prerelease.36%2B2024-02-06-windows-x64.zip
    name: 3.0.0-prerelease.36+2024-02-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.36%2B2024-02-06/3.0.0-prerelease.36%2B2024-02-06-windows-x86.zip
    name: 3.0.0-prerelease.36+2024-02-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 140028482
tag_name: '3.0.0-prerelease.36+2024-02-06'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- actually stop mp3/ogg, and explicitly stop title music [`c3f7ec46f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3f7ec46fd72b3cf3f712528cd2ec0df231cd25e)
   &nbsp;
   >The titlescreen music would restart in the file select screen if the Sound dialog was opened then closed. This was because the volume was set to 0 to fade out, but it was never actually stopped.  
   >
   >But also, due to a bug ogg and mp3 formats were really just "paused" when told to stop, so setting the volume afterwards would result in resuming music that was meant to be over. 
   >
- ambient/background sfx volume not being set [`556124969`](https://github.com/ZQuestClassic/ZQuestClassic/commit/556124969410738ac3f1190054f6bb4dc853017a)
   &nbsp;
   >The recent removal of "digi_volume" made all background sfx play at full volume. Fixed that.  
   >
   >Additionally, fixed a bug in the sound dialog what skipped the first sfx when adjusting currently playing sounds to the new volume. That first sfx is often a background sfx. 
   >

# CI

- get database update cron working again [`15b7ff4aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/15b7ff4aa5da3829107662191d7444126e4040e8)
