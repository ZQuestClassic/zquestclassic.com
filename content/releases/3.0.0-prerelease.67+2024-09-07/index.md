---
title: 3.0 Prerelease 67 2024-09-07
description: 
date: 2024-09-07T03:50:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.67%2B2024-09-07/3.0.0-prerelease.67%2B2024-09-07-linux.tar.gz
    name: 3.0.0-prerelease.67+2024-09-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.67%2B2024-09-07/3.0.0-prerelease.67%2B2024-09-07-mac.dmg
    name: 3.0.0-prerelease.67+2024-09-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.67%2B2024-09-07/3.0.0-prerelease.67%2B2024-09-07-windows-x64.zip
    name: 3.0.0-prerelease.67+2024-09-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.67%2B2024-09-07/3.0.0-prerelease.67%2B2024-09-07-windows-x86.zip
    name: 3.0.0-prerelease.67+2024-09-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 173954843
tag_name: '3.0.0-prerelease.67+2024-09-07'
channel: '3'
tags:
  - releases
---




# Features

- fully configurable enemy weapons (#984) [`36f92c7bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f92c7bfc466e58587f67ebe5412855ae6cf113)
   &nbsp;
   >The enemy editor now allows you to configure additional things for the weapon that the enemy fires. These used to be hardcoded based on the weapon type, but now all these are configurable per-enemy:  
   >
   >* damage
   >* speed
   >* block flags (ignores player defense / shields / reflectable)
   >* movement flags (gravity / pitfalls / drownable)
   >* tile size and hit / draw offsets
   >* burning sprites and light radius
   >

# Bug Fixes

### Editor

- set the default values for patra's (2 and 3) inner eyes [`eafaec18f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eafaec18ffbed6e4ca55892647dd5f30e97cd8af)

### ZScript

- LoadDirectory always failing due to bad path validation [`d864cc0f0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d864cc0f0bd69a230ed710adade86973ab2c8dbb)

# Build

- [linux] do not disable allegro5 png, which broke the title screen logo [`c0553e6a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0553e6a9880b16f54231db6fa931dd5161a2cf5)
- upgrade to latest GME [`692ac1216`](https://github.com/ZQuestClassic/ZQuestClassic/commit/692ac1216cdbcae124570dce8874c111e4cde62a)
   &nbsp;
   >https://github.com/libgme/game-music-emu/compare/6b676192d98302e698ac78fe3c00833eae6a74e5...05a2aa29e8eae29316804fdd28ceaa96c74a1531 
   >

# Refactors

### ZScript

- improve validation of file paths [`0480ad034`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0480ad0349aa48750195fcf6d215bf15d6839821)
   &nbsp;
   >* `..` is now allowed in paths, as long as it doesn't reach above the
   >  quest's "Files" folder
   >* more specific error messages when path is invalid
   >* check for illegal filenames
   >* general clean up of path validation code
   >
