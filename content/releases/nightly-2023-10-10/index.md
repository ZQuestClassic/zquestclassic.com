---
title: Nightly 2023-10-10
description: 
date: 2023-10-10T01:27:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-10/nightly-2023-10-10-linux.tar.gz
    name: nightly-2023-10-10-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-10/nightly-2023-10-10-mac.dmg
    name: nightly-2023-10-10-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-10/nightly-2023-10-10-windows-x64.zip
    name: nightly-2023-10-10-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-10/nightly-2023-10-10-windows-x86.zip
    name: nightly-2023-10-10-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 124350926
tag_name: nightly-2023-10-10
tags:
  - releases
---



# Bug Fixes

- wavy/cancel compat not being set [`2f0fe8052`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f0fe8052982d59d042df0486f020ab4198af411)

### Player

- fixed passageway and item cellar fade-in when "New Dark Rooms" rule is on [`4748d9a89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4748d9a897ee2503d771c5b7565dd16a0caefb82)
- playtime not drawing unless scrolling [`ddd3f26a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ddd3f26a1f563f5217a64a234bc02608bb47e4e4)
   &nbsp;
   >I'm so mad at how dumb this was. Specifically, it doesn't draw if you have "subscreen over sprites" disabled unless you're scrolling. 
   >

# Build

### Web

- fix renamed script [`d79ef7d06`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d79ef7d067da9ad2f8df4cb8a22f708f8858fc1e)

# CI

- trigger web.zquestclassic.com deploy on release [`c17ef05ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c17ef05eaf52877e402f4296539500014dfdfc82)

# Misc.

- include oneliners in changelog script [`3bba771c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bba771c08aa90c5831ae52266256dcc4b4d9821)
- reserve dmap data in qst format for z3 regions [`69784d2fa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69784d2fae0b22a09de063475e3a829bd5c6176a)
- add README.txt to release package [`1b30ef164`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b30ef16489fd65bea0cbeb0db1cfcece759219e)

### Web

- make quest url a bit friendlier [`8aa27f494`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8aa27f494677896cca09d1435e42eb674a01cd26)
