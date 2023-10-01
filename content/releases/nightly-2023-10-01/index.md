---
title: Nightly 2023-10-01
description: 
date: 2023-10-01T21:03:07Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-01/nightly-2023-10-01-linux.tar.gz
    name: nightly-2023-10-01-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-01/nightly-2023-10-01-mac.dmg
    name: nightly-2023-10-01-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-01/nightly-2023-10-01-windows-x64.zip
    name: nightly-2023-10-01-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-01/nightly-2023-10-01-windows-x86.zip
    name: nightly-2023-10-01-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 123264872
tag_name: nightly-2023-10-01
tags:
  - releases
---



# Features

### Editor

- options to control the size and color of the dither when using "Highlight Current Layer" [`08be9cd24`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08be9cd24873142a024f897469af03ab714a352d)
- added cset to the autocombo preview, made autocombo engravings in the combo list draw over the selector [`466c7b5ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/466c7b5ba1ba9e9af514a504e54cd9706cba7c49)
- added a popup when using an invalid autocombo explaining why it's invalid [`da634dba1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da634dba1259865cb89a4af963e3b1918d9dcbb8)
- added a "Connect to Edge" flag to certain autocombos, changing how they interact with the edge of the screen [`7e0ddb89a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e0ddb89aeab882b9fbdb7b13786369a772d04ad)
- quick map view hotkey, 2x and 4x map scale [`98ad766b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98ad766b7b0d78fd0b90194588340748e7a8e35b)

# Bug Fixes

### Editor

- fixed layer 6 highlighting and overhead combo drawing [`b55a98696`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b55a98696482e0512916e0174e3dc754ad21c97b)
- fixed "view map" solidity drawing [`9de52adc0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9de52adc0e2861c60603b665b4adc526a856c1c5)
- correctly load parts of old qst when grabbing tiles [`f4ed68578`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f4ed68578a2fbc27bbda62730f5b0b735ea65634)
- sfx data corruption due to improper struct initialization [`be96107dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be96107dc0445a421dbc4faabfa4361c4e3e6318)

