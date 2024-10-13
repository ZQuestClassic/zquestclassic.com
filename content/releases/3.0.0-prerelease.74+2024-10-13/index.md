---
title: 3.0 Prerelease 74 2024-10-13
description: 
date: 2024-10-13T08:05:23Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.74%2B2024-10-13/3.0.0-prerelease.74%2B2024-10-13-linux.tar.gz
    name: 3.0.0-prerelease.74+2024-10-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.74%2B2024-10-13/3.0.0-prerelease.74%2B2024-10-13-windows-x64.zip
    name: 3.0.0-prerelease.74+2024-10-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.74%2B2024-10-13/3.0.0-prerelease.74%2B2024-10-13-windows-x86.zip
    name: 3.0.0-prerelease.74+2024-10-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 179678635
tag_name: '3.0.0-prerelease.74+2024-10-13'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Editor

- fix off-by-one error in alias drawing mode [`0135ce495`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0135ce49591e765054ec7ed5720409278da10610)
- fix pasting enemies from other screen in screen enemy dialog [`a4d920219`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4d9202197c1618bbc9f0a5714395545da943bea)
   &nbsp;
   >This regressed recently in 54498fa 
   >
- reset animation in item dialog on selection change [`60b705717`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60b7057175f1c1d1721cc2ea405c7eeae1d16b43)

### ZScript

- fix off-by-one error in shopdata [`85a0e1eea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85a0e1eea39e54c5dd81b152a7540da33fba2031)

# Build

- add WANT_ERROR_CHECKING cmake option, defaults to true [`7fa6cb4b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fa6cb4b8a1c4dd6f2f7d3e447e75b03783610c7)

# Tests

- fix zasm_optimize_test hitting crashy undefined behavior [`9b76859cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b76859cbc8182cd9fa8ede7a71e80491979b679)

# CI

- include dropped commits in changelog for nightly versions [`08f045493`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08f045493ec9ba56562ea2fb1aff2b2647813df0)
