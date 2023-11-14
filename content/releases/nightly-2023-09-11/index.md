---
title: Nightly 2023-09-11
description: 
date: 2023-09-11T05:44:06Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-11/nightly-2023-09-11-linux.tar.gz
    name: nightly-2023-09-11-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-11/nightly-2023-09-11-mac.dmg
    name: nightly-2023-09-11-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-11/nightly-2023-09-11-windows-x64.zip
    name: nightly-2023-09-11-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-11/nightly-2023-09-11-windows-x86.zip
    name: nightly-2023-09-11-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 120589157
tag_name: 'nightly-2023-09-11'
channel: '2.55'
tags:
  - releases
---



# Features

- lightbeams now respect solid ffcs/pushblocks (compat QR'd) [`8555d9430`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8555d9430e6e1459d4eba6aa653bedd90510cfa2)
- 'Mirror (Custom)' combo type for customizable reflection [`5c06dfcf4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c06dfcf4ba8c103926aab614ad5ddf8f011c2d3)

# Bug Fixes

### Player

- pushblock solidity inconsistency [`58ea254ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58ea254ad8826fcaf65864be2fd1a5d6158085ad)

### Editor

- 'esc' choosing 'yes' in 'Really want to quit?' popup [`f683887dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f683887ddcfc0df01fa0567c5bf7ff74716594d7)
- sanitize quest title for package name [`e64f888d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e64f888d24dcb9ae64da78f91b1c40991fed36e2)
- allow spaces in package name [`87519c7ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87519c7ea032787611b39a547f990bd4bad150c8)

### ZScript

- typechecking error related to arrays of class objects [`e981a6591`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e981a65911e1e1f23bfc0f57a5f2c687ba661aa2)

# Documentation

- move packaging_quests.md to packaged docs [`b5467ee10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5467ee10de05407c02af24c5cef6d02b43d1ac2)

# Refactors

### ZUpdater

- extract getting next release and installing to functions [`6346d4838`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6346d4838bbe790832b6b6abd0e154222c54b261)
- [win] use curl and json libs instead of python [`765ab0322`](https://github.com/ZQuestClassic/ZQuestClassic/commit/765ab032243e626f36d2cef6cb80ef2d23714361)
- use zupdater binary instead of python in launcher [`20528f43a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20528f43a9c85a2d20536b0b23e9ca63c40a95d4)
- [win] use native library for unzip [`bcf1582dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcf1582dc82fac01c7f99834bea13c6f4d0f5617)
   &nbsp;
   >zupdater is now Python-free for Windows. 
   >

# CI

- fetch full history when building to generate nightly changelog [`0389cd277`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0389cd277665d76e3c7e1773d28714e19f6c4f57)
- fetch full history when building web test [`22aee7c8f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22aee7c8fb442a9925155d31b7b96c3499bdb0cd)
- use correct variable for release tag in sentry debug upload [`cfdeef5b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cfdeef5b9270c2e8a7629b0752e4a10f5a1faee7)
- use Release instead of RelWithDebInfo for windows test, for caching [`000548dcf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/000548dcf6fde5724e5e85f92a73ab3f1117175f)

# Misc.

- package changelogs for recent alphas, and include nightly changes [`c67dc4d1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c67dc4d1a51401b5991b0ad72aa439a6399788b1)
- update GitHub org [`f5f1591cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f5f1591cfecfa1df879aaec30f64dfa1a7342a78)
- fix transparency on some cave tiles in the default quest [`2cbfecefa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cbfecefa9dd58f71ab04f4fd5dad887dfd00b16)
- improve parser timeout handling [`5ebd2423f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ebd2423fd886cbf94b071633a43032c5ce8d7c8)

