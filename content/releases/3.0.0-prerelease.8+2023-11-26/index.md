---
title: 3.0 Prerelease 8 2023-11-26
description: 
date: 2023-11-26T07:30:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.8%2B2023-11-26/3.0.0-prerelease.8%2B2023-11-26-linux.tar.gz
    name: 3.0.0-prerelease.8+2023-11-26-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.8%2B2023-11-26/3.0.0-prerelease.8%2B2023-11-26-mac.dmg
    name: 3.0.0-prerelease.8+2023-11-26-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.8%2B2023-11-26/3.0.0-prerelease.8%2B2023-11-26-windows-x64.zip
    name: 3.0.0-prerelease.8+2023-11-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.8%2B2023-11-26/3.0.0-prerelease.8%2B2023-11-26-windows-x86.zip
    name: 3.0.0-prerelease.8+2023-11-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 131468432
tag_name: '3.0.0-prerelease.8+2023-11-26'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- Add warnings to combo editor (can detect problems and warn you about them) [`e201fcb8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e201fcb8af508235169568ec979bcecdb0033c15)

# Bug Fixes

- ZScript metadata fields cutting off at semicolons in strings [`0f37a4b8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f37a4b8afd3d1d0d2e50879f9c0a4e1d2fa29db)
- 'box_out' popups sometimes appearing squished in the upper-left [`8f3d6f8ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f3d6f8ec91b456d44b86e7e60ef2e7fd53e1154)

### Player

- cheats menu being greyed out when it shouldn't be [`b0db6567a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b0db6567a3357b845cf773f44141c317f78af2fb)
- improve main menu responsiveness [`7fb3e48ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fb3e48ff3c3f5383a2bb598c62a8b11e5221516)

### Editor

- 'File->Exit' not exiting [`ae2ee93e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae2ee93e5ce8b4511c16ea95a7a284064539e4f4)
- wrong button focused in zscript compile dialog [`861de33cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/861de33cd09c9a778ec8c8aabf9aeff3471ba705)
- tile editor bugginess [`98c6fd27c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98c6fd27cca9ef49f4d37b7460e13d3b33a526e2)
- Polish numpick dialog, fix new gui focusing [`d9ced4043`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9ced40435b09f46527bac5d7ca87b69077caaac)

# Refactors

- key files [`c6f1ea5f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6f1ea5f347253a0055b697f56a7fd8f1e67ff63)
   &nbsp;
   >Now work from the folder the quest is in OR the exe is in, and saves to the folder the quest is in. Also cleaned up the code for handling reading key files. 
   >

# Tests

- add '--output' option for zscript tests [`2574f1b9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2574f1b9eef2ac12a19f23d13505631fdcc49f12)
- fix zscript subfolder tests not running (and update) [`7ff5efcf2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ff5efcf220d0ff627b017149ec6ab0d5ca20117)
- update 'armos.zs' expected zasm [`8ccc152f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ccc152f662676d12e032375b831945c17bfcb60)
- update errors_2_expected.txt [`c2c5cc3e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2c5cc3e593e5765d65b01205da8ff58f8c3e062)

# Misc.

- Allow scrolling info popups [`7405aa0c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7405aa0c461ecca596b906950cdaed64f6ad0820)

### ZScript

- optimize '!' operator [`cb8cbe038`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb8cbe0388bd4b81c8a5855b9656c58636531b8d)
- more parser optimizations [`900178b73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/900178b73021f090ae7b79ecca1d177ba74025a2)
