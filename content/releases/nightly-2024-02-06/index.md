---
title: Nightly 2024-02-06
description: 
date: 2024-02-06T05:13:51Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-06/nightly-2024-02-06-linux.tar.gz
    name: nightly-2024-02-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-06/nightly-2024-02-06-mac.dmg
    name: nightly-2024-02-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-06/nightly-2024-02-06-windows-x64.zip
    name: nightly-2024-02-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-06/nightly-2024-02-06-windows-x86.zip
    name: nightly-2024-02-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 140032759
tag_name: 'nightly-2024-02-06'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- reset global variables on continue game for replays [`f3b34561f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3b34561f6088e1ae148a6bfb51b450bc31ffc2e)
- actually stop mp3/ogg [`994d743dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/994d743dcf85ab5725cc9a32d1ea913f7397830e)
   &nbsp;
   >Due to a bug ogg and mp3 formats were really just "paused" when told to stop, so setting the volume afterwards would result in resuming music that was meant to be over. 
   >
- ambient/background sfx volume not being set [`52594bfc7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/52594bfc7d839c0003a49adeb83b433374d6a0da)
   &nbsp;
   >The recent removal of "digi_volume" made all background sfx play at full volume. Fixed that.  
   >
   >Additionally, fixed a bug in the sound dialog that skipped the first sfx when adjusting currently playing sounds to the new volume. That first sfx is often a background sfx. 
   >

### Editor

- combo animations not resetting after using combo selector in dialogs [`99ab2ae95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99ab2ae959ffeb3a2c28340456166e17e8f845ad)

# Tests

- add dinus.zplay [`9807de3e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9807de3e75d4c606d8c5bc70738cefadd242f9db)
- add grassland_attack.zplay [`8970b2cbd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8970b2cbd74a90c989f8265ea1d280ff34121151)

