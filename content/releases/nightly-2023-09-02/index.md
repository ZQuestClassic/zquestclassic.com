---
title: Nightly 2023-09-02
description: 
date: 2023-09-02T08:24:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-02/nightly-2023-09-02-linux.tar.gz
    name: nightly-2023-09-02-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-02/nightly-2023-09-02-mac.dmg
    name: nightly-2023-09-02-mac.dmg
    channel: mac
prerelease: true
id: 119699875
tag_name: nightly-2023-09-02
tags:
  - releases
---



# Bug Fixes

- typo with subscreen view setting [`2c638f17e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2c638f17e97968977e528cf529dbf39b8a269a8c)

### Player

- handle error when sav file fails to load [`b6ca752fb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6ca752fb4529e36b8cd22408b7728f922145bb9)
- unload other save games when selecting one [`5b2dba0e1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5b2dba0e10c5a74efc951ae7fb63abb5511f3846)
- save file corruption from overlooked fields [`2bb017871`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2bb0178719430d31e3b1baa3b82fef376d247a34)

### Web

- set default saves folder to /local/saves [`01e692282`](https://github.com/ArmageddonGames/ZQuestClassic/commit/01e6922822ce08f1aaf34c1233e5af4f6c79e53c)
- quick quest load was broken after save refactor [`2b5a12861`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2b5a12861dd9a1379aa381557c0c36d4c84fa1f0)

# Chores

- remove outdated source file preamble comments [`3341301ad`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3341301ad1d3df25f93288882a75f23e48f32a47)

# Tests

- add -test-zc switch to test save file roundtrip [`2eccdedc2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2eccdedc2fb8dbe052d367edec4b1db3b578a751)
- mostly finish save roundtrip test [`f416ffa14`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f416ffa144f03d3f8d6c9ee5062d4e7506848ba1)

# CI

- fix updater test cache [`7e3dd39f5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7e3dd39f5694ba64b43f2c573c390acd36a39629)

# Misc.

- support sentry unique user counting [`e9eb11357`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e9eb11357d4e2c18772a0298474d6afe842ce1bb)
