---
title: 3.0 Prerelease 159 2026-01-30
description: 
date: 2026-01-30T03:04:26Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.159%2B2026-01-30/3.0.0-prerelease.159%2B2026-01-30-linux.tar.gz
    name: 3.0.0-prerelease.159+2026-01-30-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.159%2B2026-01-30/3.0.0-prerelease.159%2B2026-01-30-mac.dmg
    name: 3.0.0-prerelease.159+2026-01-30-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.159%2B2026-01-30/3.0.0-prerelease.159%2B2026-01-30-windows-x64.zip
    name: 3.0.0-prerelease.159+2026-01-30-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.159%2B2026-01-30/3.0.0-prerelease.159%2B2026-01-30-windows-x86.zip
    name: 3.0.0-prerelease.159+2026-01-30-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 281360316
tag_name: '3.0.0-prerelease.159+2026-01-30'
channel: '3'
tags:
  - releases
---


# Bug Fixes

### Player

- set current_screen when ffc is first created [`08410497a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08410497ad7f6187323374a0c9f4ca2eca00979d)
   &nbsp;
   >Until the first frame a FFC runs its animate function, new FFCs had an invalid value for their current screen, which could break some things. 
   >
- improved jump anim flickering for 1 frame at jump peak [`5830f2682`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5830f268233dcb8df8cb1cb7f464554fde670944)
- old scripts using `Game->SetComboInherentFlag()` not updating combo flag cache [`f22a2582e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f22a2582e1f5e64f8b11f32e394f6295b08053f6)
   &nbsp;
   >also fixed `SetComboSolid()` despite solidity not currently being cached 
   >

### ZScript

- use correct script_object_type for const types [`7147d5cc1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7147d5cc136a6db899107483fbea701a22916212)
