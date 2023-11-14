---
title: Nightly 2023-09-12
description: 
date: 2023-09-12T02:08:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-12/nightly-2023-09-12-linux.tar.gz
    name: nightly-2023-09-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-12/nightly-2023-09-12-mac.dmg
    name: nightly-2023-09-12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-12/nightly-2023-09-12-windows-x64.zip
    name: nightly-2023-09-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-12/nightly-2023-09-12-windows-x86.zip
    name: nightly-2023-09-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 120725763
tag_name: 'nightly-2023-09-12'
channel: '2.55'
tags:
  - releases
---



# Features

- Spotlight combos work on ffcs, fixed lightbeam-ffc hitboxes [`fd039e808`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd039e80877a8e7216c5f1c5844ec8d3261d4cfa)

### Player

- add command "-create-save <qst>" [`cc459c65b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc459c65bb3368b2ab050ab7b856f5a07e164a69)
- remove encoding layer for save files [`a0c81ae88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0c81ae8882244c60c69263798e3af87e1718b53)
   &nbsp;
   >Just like the previous work to remove the encoding layer for qst files.  
   >
   >Previous save files can still be read, but when next saved will no longer be encoded.  
   >
   >Should be a tad faster to read and write, especially reading in bulk as the title screen no longer needs to read the entire file to decode, when it only needs the first part of the file.  
   >
   >Also changes save file writing to disk to instead write to a temporary and move to the destination when done. This may prevent a source of save file corruption. 
   >

# Bug Fixes

### Web

- avoid double save when using the quick-load feature [`2e2fb45da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e2fb45da242647599c72b5c489d8ea9c723fe69)

# Build

- move allegro legacy to third_party [`7066aaec7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7066aaec7e0252489e0ac266488825cd27487117)
- move loadpng to third_party [`faf8af981`](https://github.com/ZQuestClassic/ZQuestClassic/commit/faf8af9810754f2ad8c68fcff6ffa4eaf563070c)
- delete include/loadpng/loadpng.h [`6a03d57cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a03d57cb4dc1fe85d222ef4ef1aabef8239be4c)
- move algif to third_party [`d3c85c763`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3c85c7635352475c4e8dd3bfb1e1c92e07c5900)
- move al5img to src [`7b8ebe4d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b8ebe4d3f7bfaa50f6bebfaf8f3896ec17ba388)
- move aldumb.patch to third_party [`f9d885dbd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9d885dbde22bb1244b3ba0f1500f13734762c66)

# Refactors

- extract legacy encoded reader for qst to try_open_maybe_legacy_encoded_file [`9b5c4579f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9b5c4579fc4a4b2f26380bd8fb143b3ca7f6c321)

# Tests

- update playground_cutscene_trigger.zplay [`9ef7f02fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ef7f02fb956b8b627812664c5ef822ec6ab7a6c)

# CI

- use sentry-cli 2.20.6 instead of latest, to fix debug info upload error [`3b862dda7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b862dda79a09ee92f3c5efac9d60c4d05569a00)

