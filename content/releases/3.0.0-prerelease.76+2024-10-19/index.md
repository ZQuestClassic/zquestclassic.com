---
title: 3.0 Prerelease 76 2024-10-19
description: 
date: 2024-10-19T03:07:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.76%2B2024-10-19/3.0.0-prerelease.76%2B2024-10-19-linux.tar.gz
    name: 3.0.0-prerelease.76+2024-10-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.76%2B2024-10-19/3.0.0-prerelease.76%2B2024-10-19-mac.dmg
    name: 3.0.0-prerelease.76+2024-10-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.76%2B2024-10-19/3.0.0-prerelease.76%2B2024-10-19-windows-x64.zip
    name: 3.0.0-prerelease.76+2024-10-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.76%2B2024-10-19/3.0.0-prerelease.76%2B2024-10-19-windows-x86.zip
    name: 3.0.0-prerelease.76+2024-10-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 180791052
tag_name: '3.0.0-prerelease.76+2024-10-19'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- reset title colors when updating save quest path [`23a8925d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23a8925d03c513736c25c6daf98350283699f650)
- New mirrors hanging the game when using their 'Block' feature [`1faca62cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1faca62cb3c35ad59fcabb01e6ab22a9abcc590a)
- avoid crash on magic relections when sprite list is full [`885060d9c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/885060d9cac7882bff761896d153c94af93712d9)
- handle screen transitions on slopes in sideview mode [`a4fc92549`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4fc9254918445dbd5ab29c65dede3133f3230b6)
   &nbsp;
   >Slopes bugged out big time when moving between screens in sideview mode, shooting players across the screen. That is now fixed, but one should avoid starting upwards-stairs on the edge of a screen, as the player still does not traverse up it when entering from the other side. 
   >

### Editor

- fix Preview mode not working when opened from top menu [`bb09d4f42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb09d4f42e067a0271526c50da8cc8a67854762c)
- prevent crash when saving test init data [`cdaa882fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cdaa882fcf84e233249055cbfecda8aa4fc8811c)

### ZScript

- remove bogus error log when using `ArrayCopy` [`1d41b9a36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d41b9a36537fa41d955ff691c13db5e2b5404bf)

# Refactors

### ZScript

- always show script context when logging errors [`a0ae674a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0ae674a256889a8d2bc507fce16858b77fb1338)
   &nbsp;
   >Previously the "Print Script Metadata on Traces" QR had to be enabled to show what script caused an error. However, this context is always useful for debugging and so should always be displayed. 
   >

# Misc.

- add 2.55.6 changelog [`7923c79b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7923c79b241f5f4e2a85fb6f862f157e4c2517ef)
