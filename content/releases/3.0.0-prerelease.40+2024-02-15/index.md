---
title: 3.0 Prerelease 40 2024-02-15
description: 
date: 2024-02-15T08:05:38Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.40%2B2024-02-15/3.0.0-prerelease.40%2B2024-02-15-linux.tar.gz
    name: 3.0.0-prerelease.40+2024-02-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.40%2B2024-02-15/3.0.0-prerelease.40%2B2024-02-15-mac.dmg
    name: 3.0.0-prerelease.40+2024-02-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.40%2B2024-02-15/3.0.0-prerelease.40%2B2024-02-15-windows-x64.zip
    name: 3.0.0-prerelease.40+2024-02-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.40%2B2024-02-15/3.0.0-prerelease.40%2B2024-02-15-windows-x86.zip
    name: 3.0.0-prerelease.40+2024-02-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 142121761
tag_name: '3.0.0-prerelease.40+2024-02-15'
channel: '3'
tags:
  - releases
---




# Features

### Editor

- export/import strings to .tsv text file [`13e56e789`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13e56e789f80d33e566f799408cd71e00c12126c)
   &nbsp;
   >Allows for exporting strings to a spreadsheet, text editor, or other program for modification, then importing them back to ZC.  
   >
   >The first row of the `.tsv` (tab separated values) file are the column names, followed by an example row to designate where the first three lines begin and end for each string (but you can add more lines than that).  
   >
   >For best results in a spreadsheet, "Freeze" the first two rows and use a monospace font for the "message" column.  
   >
   >Example: https://docs.google.com/spreadsheets/d/197-NSvNQJ174Ri9GVlxYDX4oFp8w1SZbmOXuDohKZZk/edit?usp=sharing 
   >

# Bug Fixes

### ZScript

- fix sideview sprites becoming unable to jump when on the ground [`2a500a0d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a500a0d1cddf51226691e2ea62f55fdce197f4d)
- compat rule for old sprite jump behavior [`1d95049f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d95049f919992e5edadf43bd9282a8d0c165a37)

# Tests

- use original qst for combo rotator replay [`b093e59c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b093e59c685d2ee65bcacbd231eaf56875874ceb)
