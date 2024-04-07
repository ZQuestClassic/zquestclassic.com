---
title: 3.0 Prerelease 50 2024-04-07
description: 
date: 2024-04-07T04:46:22Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.50%2B2024-04-07/3.0.0-prerelease.50%2B2024-04-07-linux.tar.gz
    name: 3.0.0-prerelease.50+2024-04-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.50%2B2024-04-07/3.0.0-prerelease.50%2B2024-04-07-mac.dmg
    name: 3.0.0-prerelease.50+2024-04-07-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.50%2B2024-04-07/3.0.0-prerelease.50%2B2024-04-07-windows-x64.zip
    name: 3.0.0-prerelease.50+2024-04-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.50%2B2024-04-07/3.0.0-prerelease.50%2B2024-04-07-windows-x86.zip
    name: 3.0.0-prerelease.50+2024-04-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 150098104
tag_name: '3.0.0-prerelease.50+2024-04-07'
channel: '3'
tags:
  - releases
---




# Features

### Visual Studio Code Extension

- document symbol outline, hover tooltips and "Go to Definition" [`dbd473b97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dbd473b97a9796fc65248cd9b65c91ad359361ec)
   &nbsp;
   >This patch greatly enhances the capabilities of the language extension. New features are:  
   >
   >* A symbol outline of the current script, showing all variables,
   >  functions, classes, namespaces, etc.
   >* Tooltips on hover, shown if a variable/class/whatever was declared
   >  with a comment. This supports markdown
   >* "Go to Definition" to jump to where something is defined. You can
   >  right-click to see this option, or CTRL/CMD+click on something
   >

# Bug Fixes

- update 'default.qst' [`4e1bd29e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e1bd29e4c96ec108fb0518bc4d0d587823334a9)
   &nbsp;
   >Several default subscreen fixes (some by P-Tux7, some by myself) 
   >

### Editor

- crash on reducing map count [`e061ad48b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e061ad48b0d8d5db5d1eaef2d4c49cd56721c4ad)
- crash on moving combos in quests with many maps/screens [`80af019ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80af019ef4835ae40dce4db8f3f1ecebe89f1f14)
- Improve efficiency of combo moving + fix crash + fix 'undo' combo move [`4efe6b07d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4efe6b07dff7f9a504fd20f877bd92abf66ae758)
- Improve efficiency of tile moving + fix 'undo' tile move [`7b26369e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b26369e090ecb09a7beee13542a06d6a6f4f570)

### ZScript

- '@AlwaysRunEndpoint("off")' erroring despite being valid [`26c78ebec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26c78ebec25fcaab7db36521f0e4f3a894e9a8a0)
- exit process when preprocessor recursion limit is reached [`58aaefd3a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/58aaefd3a36e88c7725016ee7fa42e4830115cca)

### Visual Studio Code Extension

- 'AlwaysRunEndpoint' annotation missing syntax highlighting [`b5b8ef720`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5b8ef720c981532c5524f7827778d815b609f5c)
- 'loop' keyword missing highlighting, add range operators to operator list [`df11ee40f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df11ee40f1d4436587c0fdac3f5cf115a597b449)

# Misc.

### Visual Studio Code Extension

- publish 1.0.8 [`5526c1ddc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5526c1ddc2511e64f9e97452606af15fd1f80986)
