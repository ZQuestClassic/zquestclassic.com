---
title: Nightly 2024-01-17
description: 
date: 2024-01-17T06:57:47Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-17/nightly-2024-01-17-linux.tar.gz
    name: nightly-2024-01-17-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-17/nightly-2024-01-17-mac.dmg
    name: nightly-2024-01-17-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-17/nightly-2024-01-17-windows-x64.zip
    name: nightly-2024-01-17-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-17/nightly-2024-01-17-windows-x86.zip
    name: nightly-2024-01-17-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 137347325
tag_name: 'nightly-2024-01-17'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- support multiple palettes in map preview/image export [`f207fda3f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f207fda3f4deebcae4d523dd9765154cf315e0da)

# Bug Fixes

### Player

- still allow for game area to be stretched, ignoring aspect ratio [`381583118`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3815831183a0feec243b93dcb8fecbc38a96311e)
- ignore gamepad input when window is not active [`646ef8f08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/646ef8f087f4603b186b80af395d6c17235ca433)
- weird newer movement edge-case [`0dd159abb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0dd159abb4e21a442c0f3e17a8dee16ceaa0d21b)
- opening spacebar map triggering some secret effects on the current screen [`c1d9c1dca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c1d9c1dcac72b643655be9c6d3757419990c425e)
- lens unintentionally making enemies sometimes invisible [`1a9273955`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a92739550d354ba6d069c338fe4a464486c95cc)

### Editor

- handle quest path/title with spaces in package export [`432dfe42c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/432dfe42cb310c4698b959751a96186c089928b9)

### ZScript

- sanity check for bitmap->isValid() and bitmap->isAllocated() [`c07f28f80`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c07f28f8019a360962f41a71d0daef17f3e955f2)

