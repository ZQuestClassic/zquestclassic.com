---
title: 3.0 Prerelease 177 2026-04-25
description: 
date: 2026-04-26T01:22:30Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.177%2B2026-04-25/3.0.0-prerelease.177%2B2026-04-25-linux.tar.gz
    name: 3.0.0-prerelease.177+2026-04-25-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.177%2B2026-04-25/3.0.0-prerelease.177%2B2026-04-25-mac.dmg
    name: 3.0.0-prerelease.177+2026-04-25-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.177%2B2026-04-25/3.0.0-prerelease.177%2B2026-04-25-windows-x64.zip
    name: 3.0.0-prerelease.177+2026-04-25-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.177%2B2026-04-25/3.0.0-prerelease.177%2B2026-04-25-windows-x86.zip
    name: 3.0.0-prerelease.177+2026-04-25-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 313689017
tag_name: '3.0.0-prerelease.177+2026-04-25'
channel: '3'
tags:
  - releases
---


# Build

- Fix Sentry compile on Ubuntu [`9975e204f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9975e204f81cdb150a3629419a23b18386fec6de)
- Fix "overriding /W0 with /W2" [`e85edba92`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e85edba92e1c39379f4f0b7bdd278f8d6850aed6)

# CI

- Create nightly release tag using PT timezone [`08add1491`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08add14914937d5243d950a3b1ce0cdd13d2505f)

# Misc.

- Revert "build: upgrade sentry to 0.13.8" [`81e2c74f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81e2c74f79c078cdbc5ce23c37f430fef903aeb2)
   &nbsp;
   >This reverts commit e57dff45d713b835c3f4fd16e231ce590380417b. 
   >
