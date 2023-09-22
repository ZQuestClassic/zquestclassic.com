---
title: Nightly 2023-07-09 (2)
description: 
date: 2023-07-09T23:52:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09-2/nightly-2023-07-09-2-linux.tar.gz
    name: nightly-2023-07-09-2-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09-2/nightly-2023-07-09-2-mac.dmg
    name: nightly-2023-07-09-2-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09-2/nightly-2023-07-09-2-windows-x64.zip
    name: nightly-2023-07-09-2-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-07-09-2/nightly-2023-07-09-2-windows-x86.zip
    name: nightly-2023-07-09-2-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 111556070
tag_name: nightly-2023-07-09-2
tags:
  - releases
---

# Bug Fixes

### Player

- force system pal after matrix screensaver [`b40f8d5ce`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b40f8d5cea2f40e34426fc8a1967136018457a16)
- non-torch pushblocks no longer cast light [`c8d359531`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c8d359531ac539a69e1199bbe81364a60746788c)

### Editor

- stop using corrupted file handle when saving .zcheat file [`2deb39605`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2deb39605a22d456bcfedf3bd5f73ccb7dddba1f)
- properly load qst when grabbing tiles [`acacb5a21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/acacb5a21955c963917fc0bbdaa7ecb66ab57799)
```
  The loadquest function was erroring on the ffscript section, but only when "keep data" was disable
  for that section. The section loading code was improperly read the file, which resulted in the
  password hash not being set in the header, which resulted in an errant password check prompt.
```



**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/nightly-2023-07-09...nightly-2023-07-09-2
