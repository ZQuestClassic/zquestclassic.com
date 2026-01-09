---
title: 3.0 Prerelease 156 2026-01-09
description: 
date: 2026-01-07T21:21:33Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.156%2B2026-01-09/3.0.0-prerelease.156%2B2026-01-09-linux.tar.gz
    name: 3.0.0-prerelease.156+2026-01-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.156%2B2026-01-09/3.0.0-prerelease.156%2B2026-01-09-mac.dmg
    name: 3.0.0-prerelease.156+2026-01-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.156%2B2026-01-09/3.0.0-prerelease.156%2B2026-01-09-windows-x64.zip
    name: 3.0.0-prerelease.156+2026-01-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.156%2B2026-01-09/3.0.0-prerelease.156%2B2026-01-09-windows-x86.zip
    name: 3.0.0-prerelease.156+2026-01-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 275373667
tag_name: '3.0.0-prerelease.156+2026-01-09'
channel: '3'
tags:
  - releases
---


# Features

### Player

- "Temp Ignore Solids" weapon flag [`cd73a1607`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd73a160707c7c441e8045b11ce5f698b6c88ff3)
   &nbsp;
   >Causes a weapon to ignore solids for the 'Break on Solid' / 'Stop on Solid' flags. Un-sets itself as soon as the weapon is NOT touching a solid. Using this flag on a solid shooter combo will prevent the shooter itself from killing it's shots. 
   >

# Bug Fixes

### Player

- f3/f4 softlocking (unpausing was busted) [`8b2b2b868`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b2b2b8687b4591644062206a3590c1473736a7b)
- `Disabled In Sideview Water` not working on some item types [`958e86016`](https://github.com/ZQuestClassic/ZQuestClassic/commit/958e860169d711b92ca248e59ee44567efaac2dd)
- walking on top of infinitely-tall 'walk on top' blocks [`a5ef579f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5ef579f6b6ce2b4fdf45bff37d640b06def7f6b)
- 'Break On Solid/Landing' and 'Timeout' explode bombs instead of deleting them [`3d72aeb3b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3d72aeb3b4143d50ded3224aeb2dc9c308620da6)

# Documentation

- document values for `Game->GlobalStates[]` [`0e40c8fc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e40c8fc18bbe27e2a4dcd62184a089da3bee658)
