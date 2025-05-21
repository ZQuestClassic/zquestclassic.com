---
title: 3.0 Prerelease 107 2025-05-21
description: 
date: 2025-05-21T23:09:55Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.107%2B2025-05-21/3.0.0-prerelease.107%2B2025-05-21-linux.tar.gz
    name: 3.0.0-prerelease.107+2025-05-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.107%2B2025-05-21/3.0.0-prerelease.107%2B2025-05-21-mac.dmg
    name: 3.0.0-prerelease.107+2025-05-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.107%2B2025-05-21/3.0.0-prerelease.107%2B2025-05-21-windows-x64.zip
    name: 3.0.0-prerelease.107+2025-05-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.107%2B2025-05-21/3.0.0-prerelease.107%2B2025-05-21-windows-x86.zip
    name: 3.0.0-prerelease.107+2025-05-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 220212142
tag_name: '3.0.0-prerelease.107+2025-05-21'
channel: '3'
tags:
  - releases
---




# Features

- Lifted combos specify glow shape / radius [`e74cc26d8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e74cc26d8abf026d424fa28826984f1a9d4c4348)

# Bug Fixes

### Player

- use black for drawing empty space in active subscreen [`529035f09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/529035f094818673bf5eddbceb1ff65e8878f9ff)
- check msg_it has value before using [`5d634e5b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d634e5b59c5b0bb7ffc74d31a3b6647451fd1e5)
- 'Show'/'Hide' for lens layers not working properly [`070891181`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0708911811018d000311b2e8cc03d464a5d256bb)
- lifted combos follow hero dir properly [`b6be7f0a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6be7f0a35b25a8aae4005d12cf42253fdccc67a)
- 'Game->ActiveSubscreenY' not updating during subscreen open animation [`95c517cd8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95c517cd8cf48f31ac98874568fa29bdf4f6c473)

### Editor

- New script slots not properly assigning [`c83387572`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c833875728ddaed1ac8b0e043bb6c03ae3206b38)
- add '?' buttons for 'Show/Hide' lens layer, to clarify possibly misleading labels [`0e5e749d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e5e749d17fd1f462e5337381523ca7f199e23ab)
- slash combo wizard not setting sfx properly [`5b795ffb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b795ffb32b67c396ebff18b6636ef81f2272af4)

### Web

- disable text selection in Safari [`dd4d5a5cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dd4d5a5cce6821dab7af2ce08455c5135045d808)

# CI

- stop using sudo for python tests on linux [`4c1db22d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c1db22d1f3cb238302806a8ab343c9eff01dcd2)
   &nbsp;
   >This was preventing the proper Python version from being used. 
   >
