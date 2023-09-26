---
title: Nightly 2023-09-26
description: 
date: 2023-09-26T00:56:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-26/nightly-2023-09-26-linux.tar.gz
    name: nightly-2023-09-26-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-26/nightly-2023-09-26-mac.dmg
    name: nightly-2023-09-26-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-26/nightly-2023-09-26-windows-x64.zip
    name: nightly-2023-09-26-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-09-26/nightly-2023-09-26-windows-x86.zip
    name: nightly-2023-09-26-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 122535330
tag_name: nightly-2023-09-26
tags:
  - releases
---



# Features

### ZScript

- 'sprintf' will resize the buffer if it is too small. [`bc9fc80f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc9fc80f8ea62c306ed8d359f6fd328668fca091)

# Bug Fixes

- [linux] use /var/tmp instead of /tmp for save-then-move [`2803f8fcb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2803f8fcb4d4f375ff1f9ef328104119bdb16302)
   &nbsp;
   >/tmp is for files that are not expected to persist. When running under flatpak, a tmpfs is mounted to /tmp, so we cannot move files from that to a real physical drive. This resulted in saving failing.  
   >
   >/var/tmp is the better choice, since files there are expected to persist and so will always be a physical drive. 
   >

### Player

- bugginess with push flags on 'Push (Generic)' combos [`f10def353`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f10def353eddbec47000fbf9cbd6e84263d58c97)

# Build

- add include to fix missing atoi on VS2022 [`8ea837e46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ea837e46a447f4da064a60b3b7d7532b4678126)
- [mac] 'ZQuestClassic.app' -> 'ZQuest Classic.app' [`0c137af69`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c137af6958bc1a3a488af3d164bc68033044b45)

# CI

- add --ignore-missing to sentry set-commits command [`fdf2059e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fdf2059e92bc47397bcd79cae7d895c9966e0957)

# Misc.

### Visual Studio Code Extension

- publish 1.0.7 [`e7f9e0ec5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7f9e0ec5b64b38dc421c4f97fee87e552102bc9)

