---
title: 3.0 Prerelease 43 2024-02-26
description: 
date: 2024-02-24T01:23:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.43%2B2024-02-26/3.0.0-prerelease.43%2B2024-02-26-linux.tar.gz
    name: 3.0.0-prerelease.43+2024-02-26-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.43%2B2024-02-26/3.0.0-prerelease.43%2B2024-02-26-mac.dmg
    name: 3.0.0-prerelease.43+2024-02-26-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.43%2B2024-02-26/3.0.0-prerelease.43%2B2024-02-26-windows-x64.zip
    name: 3.0.0-prerelease.43+2024-02-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.43%2B2024-02-26/3.0.0-prerelease.43%2B2024-02-26-windows-x86.zip
    name: 3.0.0-prerelease.43+2024-02-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 143572965
tag_name: '3.0.0-prerelease.43+2024-02-26'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- generic script InitD[] not working at all [`5732b531b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5732b531beaf408306a336caa0bbda9940ffaaa1)
- increase sfx buffer to prevent "Out of buffers" log spam [`e7c214eb6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7c214eb62ddf11e61b4fe29a26fca1c23fa9811)

### Editor

- stop clearing screen when editing palette [`b26f3ab0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b26f3ab0b95856ea192cabcb47d92de62c60d1c3)
   &nbsp;
   >Since the render refactor, we haven't needed to clear the screen when changing palettes, since this dialog is rendered to a different bitmap than whats in the background. 
   >

# Tests

- update crucible_quest.zplay for 5732b53 [`798646bc4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/798646bc47ece1ca758233110c51b0450a779d32)

# CI

- fix type in download-artifact v4 action [`ec499225b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec499225b80237aeeaa055ab0043e5229577c69b)
- fix another typo in download-artifact v4 action [`e272d0914`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e272d0914fd05db5944f2477cff73d66c33f8804)

# Misc.

### Editor

- disable auto save for new, unsaved quest [`07fd3c524`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07fd3c524efbf858b5efe0d66a46808adb5fd84e)
