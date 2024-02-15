---
title: Nightly 2024-02-15
description: 
date: 2024-02-15T08:54:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-15/nightly-2024-02-15-linux.tar.gz
    name: nightly-2024-02-15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-15/nightly-2024-02-15-mac.dmg
    name: nightly-2024-02-15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-15/nightly-2024-02-15-windows-x64.zip
    name: nightly-2024-02-15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-02-15/nightly-2024-02-15-windows-x86.zip
    name: nightly-2024-02-15-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 142118277
tag_name: 'nightly-2024-02-15'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- export/import strings to .tsv text file [`1e1af9db1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e1af9db174083b3676390fc1d9284458e875aee)
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

- fix sideview sprites becoming unable to jump when on the ground [`673eb859d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/673eb859d95ad95eae660c2e27a0607fe18db156)
- compat rule for old sprite jump behavior [`2b7275305`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b727530530ea46e53a82a2d2da70b96eee20075)

# Tests

- use original qst for combo rotator replay [`3552ee8f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3552ee8f584762b37a0cda55844546e67dcd47bc)

