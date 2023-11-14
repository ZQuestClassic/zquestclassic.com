---
title: Nightly 2023-06-15
description: 
date: 2023-06-15T20:37:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-15/nightly-2023-06-15-linux.tar.gz
    name: nightly-2023-06-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-15/nightly-2023-06-15-mac.dmg
    name: nightly-2023-06-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-15/nightly-2023-06-15-windows-x64.zip
    name: nightly-2023-06-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-06-15/nightly-2023-06-15-windows-x86.zip
    name: nightly-2023-06-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 108802235
tag_name: 'nightly-2023-06-15'
channel: '2.55'
tags:
  - releases
---

# Features

- increase combo label limit from 11 to 255 [`edea0722a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/edea0722ad8b3d9599f7a5f53226112d1950ffa3)

### Editor

- AutoBrush now will revert to 1x1 after placing if ALT is held while selecting an area. [`43825d2b6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/43825d2b654697fc0e34e727d29a60ecc265aae2)

# Bug Fixes

### Player

- Fix 4-way "Newer Player Movement" [`81710c1ee`](https://github.com/ArmageddonGames/ZQuestClassic/commit/81710c1eeedd751e9c2f0c0e24c10020109f4cb5)
- fix dropped input when script modifies input state [`a773ac9ba`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a773ac9baf5dcbb88f3fb737b27b0435bbcada47)

### Editor

- string list ordered wrongly in dropdowns [`bee021913`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bee021913b8f582ed5ee96b257f8c9824ddfb8b3)

# Documentation

### Editor

- Clean up tooltips for combos on the screen. [`175152592`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1751525922ab4c616d1b28ae44e4f4da4807dd58)

# Refactors

- remove classic_qst.dat, use default.qst [`e6e5c9906`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e6e5c99066a242f6ea4258a5a13167a546e85d7b)

### Player

- remove indirection in calling scripts based on version [`a7bdf12cd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a7bdf12cd5f0c27e0795ed4cd98091d9af39d3b7)

# Tests

- increase replay timeout for web [`ced397fb1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ced397fb113694081e03b435cc059453e5276526)

# Misc.

- cache if release has a valid package for windows in bisect tool [`f93e19187`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f93e191871d926dd27c447b0cd35928b49a62de8)
- allow advancing in bisect tool without closing program [`a6b9a8584`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a6b9a858408003edff49f1271218797ba31d6c73)
- print changelog on every step in bisect tool [`8bb31d154`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8bb31d154375f20e470f42e533de435e4ac037a0)
- grab test builds from CI for bisect tool [`f2e437a9f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f2e437a9fe9921273a2190982d9e1cce7c3d88e6)



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-06-14...nightly-2023-06-15
