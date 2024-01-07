---
title: Nightly 2024-01-07
description: 
date: 2024-01-07T08:05:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-07/nightly-2024-01-07-linux.tar.gz
    name: nightly-2024-01-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-07/nightly-2024-01-07-mac.dmg
    name: nightly-2024-01-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-07/nightly-2024-01-07-windows-x64.zip
    name: nightly-2024-01-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-07/nightly-2024-01-07-windows-x86.zip
    name: nightly-2024-01-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136090797
tag_name: 'nightly-2024-01-07'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

- old quest subscreen minimap titles overlapping [`dc548320e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc548320e7ac5143ba5726178aa4aba75c93f1d0)
- placing flags on layers not marking the layer screen as "valid" [`8c74b7296`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c74b72968670949fab9f0f6c5afbbe3bb4f89ce)
- ensure file is closed when qst fails to load [`c702f24fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c702f24fca10feb52420cc962f79d51e9c6e567f)

### Player

- lift glove 'disable item use' not stopping sword SFX from playing [`3e6fe6e05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e6fe6e05254e5090a1802811c9abef3fae03dce)
- remember last save slot position when returning to save select screen [`a3bc81309`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3bc813096c18cb5ab5602ab9afb9c03db8d4011)
- [win32] invisible hero because of MSVC bug [`511934cea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/511934ceaf8c2692984c87443c037076be73cc69)

### Editor

- warp dialogs not properly previewing negative xoffset dmap map-marked squares [`b593e46bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b593e46bf7ced06a94a0e1f8f08a1c2c1ae454e3)

### ZScript

- invalid character errors wrongly occurring for values 128-255 [`2cfe2e472`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cfe2e472bf3a292bca81cd8cd1e62e60232b7ab)
- subscreen widgets not allowing SUB_COLOR_TRANSPARENT to be used [`77346b0c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/77346b0c86b5b493cf46284d7fa4d6576af9fc4e)
- class function params with same-name as class member not shadowing properly [`5659c8ebd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5659c8ebd8668b9df137d80f2896e6a5e97218ce)
- class/object destructors stack being offset wrongly [`79079c766`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79079c7667a5360eeb72f8f75997f2d76d81855c)

# Documentation

- fix some issues with the webdocs [`569adf358`](https://github.com/ZQuestClassic/ZQuestClassic/commit/569adf358171e91ec0dbcd956541c00649a7e43b)

# Misc.

- help text to indicate use of A1/A2 values on ffc/item editors [`599d6f70c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/599d6f70c3a55ee06a175b574d7d9005776c123a)
- remove noisy allocation logs [`32bf8f42f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32bf8f42f0ff41d0ae308a3eeb6eb33ae8c8f7b1)

### Editor

- Add hotkey for rebinding hotkeys [`af954f385`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af954f3851c9fb8d5a81386bc4a05956e32406f5)

