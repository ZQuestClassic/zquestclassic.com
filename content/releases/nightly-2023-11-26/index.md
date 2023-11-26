---
title: Nightly 2023-11-26
description: 
date: 2023-11-26T15:02:16Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-26/nightly-2023-11-26-linux.tar.gz
    name: nightly-2023-11-26-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-26/nightly-2023-11-26-mac.dmg
    name: nightly-2023-11-26-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-26/nightly-2023-11-26-windows-x64.zip
    name: nightly-2023-11-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-11-26/nightly-2023-11-26-windows-x86.zip
    name: nightly-2023-11-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 131470187
tag_name: 'nightly-2023-11-26'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

- 'box_out' popups sometimes appearing squished in the upper-left [`ced3bfb71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ced3bfb71bae668a2fcf2c89fe9bcf9592407a8a)

### Player

- cheats menu being greyed out when it shouldn't be [`b24044c87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b24044c87c65c6ab3bfc17961aac4b8d7702e467)

### Editor

- tile editor bugginess [`87cd522a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87cd522a98173c9f22b3b5e16c0e91735140e42d)
- Polish numpick dialog, fix new gui focusing [`f9852b3f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9852b3f6e3155e1c86ee11a8d1c0db9fa5d773f)

# Refactors

- key files [`d0864dc8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0864dc8da091de308b1bc921aafc96b51eeeb27)
   &nbsp;
   >Now work from the folder the quest is in OR the exe is in, and saves to the folder the quest is in. Also cleaned up the code for handling reading key files. 
   >

# Tests

- add '--output' option for zscript tests [`ae45b645f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae45b645f2e669d109d798213e787fd3ddc8cabf)
- fix zscript subfolder tests not running (and update) [`0e35a067e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e35a067ea5ddc9676831ef6edbbb4f266feffb3)
- update errors_2_expected.txt [`ce9e615a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce9e615a7de834554e88611a5739f6af78af49d6)

