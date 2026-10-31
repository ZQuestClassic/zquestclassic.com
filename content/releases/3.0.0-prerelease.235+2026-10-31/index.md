---
title: 3.0 Prerelease 235 2026-10-31
description: 
date: 2026-10-31T07:49:47Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.235%2B2026-10-31/3.0.0-prerelease.235%2B2026-10-31-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.235+2026-10-31-linux-aarch64.tar.gz
    platform: linux-aarch64
    size: 33642872

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.235%2B2026-10-31/3.0.0-prerelease.235%2B2026-10-31-linux-x64.tar.gz
    name: 3.0.0-prerelease.235+2026-10-31-linux-x64.tar.gz
    platform: linux
    size: 34234584

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.235%2B2026-10-31/3.0.0-prerelease.235%2B2026-10-31-mac-universal.dmg
    name: 3.0.0-prerelease.235+2026-10-31-mac-universal.dmg
    platform: mac
    size: 40490918

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.235%2B2026-10-31/3.0.0-prerelease.235%2B2026-10-31-windows-arm64.zip
    name: 3.0.0-prerelease.235+2026-10-31-windows-arm64.zip
    platform: windows-arm64
    size: 36886665

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.235%2B2026-10-31/3.0.0-prerelease.235%2B2026-10-31-windows-x64.zip
    name: 3.0.0-prerelease.235+2026-10-31-windows-x64.zip
    platform: windows-x64
    size: 36310625

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.235%2B2026-10-31/3.0.0-prerelease.235%2B2026-10-31-windows-x86.zip
    name: 3.0.0-prerelease.235+2026-10-31-windows-x86.zip
    platform: windows-win32
    size: 34376061
prerelease: true
id: 429821481
tag_name: '3.0.0-prerelease.235+2026-10-31'
channel: '3'
tags:
  - releases
---

# Features

- Halloween title screen [`759295bb94`](https://github.com/ZQuestClassic/ZQuestClassic/commit/759295bb944d913a78c4dc9939a4803fb47b33de)

# Bug Fixes

### Player

- Garbage pixels at the bottom of the screen while the subscreen scrolled [`1950099d5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1950099d5ae6b8682bbbf51483b08c8a583e303a)
   &nbsp;
   >When the subscreen was opened while the playing field was offset (such as during an earthquake), the bottom row(s) of the screen showed random pixels while the subscreen scrolled in or out.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
