---
title: 3.0 Prerelease 119 2025-07-14
description: 
date: 2025-07-14T06:53:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.119%2B2025-07-14/3.0.0-prerelease.119%2B2025-07-14-linux.tar.gz
    name: 3.0.0-prerelease.119+2025-07-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.119%2B2025-07-14/3.0.0-prerelease.119%2B2025-07-14-mac.dmg
    name: 3.0.0-prerelease.119+2025-07-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.119%2B2025-07-14/3.0.0-prerelease.119%2B2025-07-14-windows-x64.zip
    name: 3.0.0-prerelease.119+2025-07-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.119%2B2025-07-14/3.0.0-prerelease.119%2B2025-07-14-windows-x86.zip
    name: 3.0.0-prerelease.119+2025-07-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 232138361
tag_name: '3.0.0-prerelease.119+2025-07-14'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- prevent multiple potential crashes from bad string formatting [`b809aa2aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b809aa2aa2603babb8dccebdbac3507546d0c41c)

### Player

- split enemies spawning no longer broken in regions [`dc7031557`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc70315578a6b8fe626bcb72e17adf8d1d73c314)
- lift sound not played when re-lifting weapons [`f4a5408c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f4a5408c324357b846db976aef269d6d6d696172)
- prevent overflow when checking distance for triggers [`3be4a4a2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3be4a4a2d12719b352b8c056a7bb1434fce7dfd3)
   &nbsp;
   >The distance checking function only worked correctly for points close enough to be in the same screen, but within regions it was overflowing and returing wrong results. 
   >
- prevent performance regression related to multiple combo triggers [`cbd73ce9f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbd73ce9f27c2611c018a25959811b319b680dc1)
- prevent crash when triggering blocks [`dde993dbc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dde993dbce3e1dbe48dc4f9a687bbb18c604a218)
   &nbsp;
   >regressed 6b5e98d (z3) 
   >

### Editor

- .tsv strings import no longer drops last string [`a4e7b48b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a4e7b48b8896391c5ced088d29f50744e2447e8a)
- prevent rare crash when opening quest [`7abe6d21a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7abe6d21ac890deaf63bd4e4711b3c4974c84a4a)

# Refactors

- move example quests to `quests/examples` folder [`b1d11a158`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1d11a15860586dc8d3af2362930a9269a8c0ec4)

# Tests

- add triggers2.zplay [`ddebf1671`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ddebf167123ec04f9cc1488865f4e554b9c5d760)
