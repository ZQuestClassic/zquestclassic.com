---
title: Nightly 2023-08-28 (2)
description: 
date: 2023-08-28T07:40:35Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28-2/nightly-2023-08-28-2-linux.tar.gz
    name: nightly-2023-08-28-2-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28-2/nightly-2023-08-28-2-mac.dmg
    name: nightly-2023-08-28-2-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28-2/nightly-2023-08-28-2-windows-x64.zip
    name: nightly-2023-08-28-2-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-28-2/nightly-2023-08-28-2-windows-x86.zip
    name: nightly-2023-08-28-2-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 118899927
tag_name: 'nightly-2023-08-28-2'
channel: '2.55'
tags:
  - releases
---



# Features

- allow closing program with (most) dialogs open. (clean up gui functions too) [`be04a5ee5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/be04a5ee56e7562a0e62b292008979cf056b106b)

### ZScript

- ArrayPushAt/ArrayPopAt for arbitrary index push/pop [`f34605181`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f346051814573a261819597f5e2a4de312986d3b)

# Bug Fixes

- subscreen non-equippable item flag being broken [`df64d36eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/df64d36eb25442e3a92613ff494a8d2bee81b816)
- fixed missing zcmixer->newtrack pointer null [`44d7307eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/44d7307ebf8ef163bfe3e1e3fc5dba593739ec05)

### Player

- X/Alt+F4 not working while in game view [`13afd3bf6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/13afd3bf6f2da0bafd5e16ca9fe15e53a586973e)

### Web

- use half-frequency for sound, just like previous sdl impl [`c963a890f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c963a890f3f82e141ee613368c23664a206c45b7)
- update deploy script for new asset names [`b7234e534`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b7234e53450e506d22d48eebc4481823a31fe5ef)

# Documentation

- add Arithmetic Operators to webdocs [`e9976d8bf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e9976d8bf3c01ae678b6f52334e7c6e6c8203d2f)
- line-wrap singleline codes, strip single leading newline from code blocks [`89a17bcc9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/89a17bcc9f322e89eb0932e2394c56ebe0d20ce2)

# Refactors

- use calloc in reset_tile instead of manually zeroing [`b6752f122`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6752f122a49ba849e42e43a3f4cf541341c4240)

### ZScript

- better jit compilation for 32b div 10000 [`0a780d638`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0a780d638671e91372675c2161cc0fa0131545b8)

