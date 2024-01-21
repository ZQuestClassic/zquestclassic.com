---
title: 3.0 Prerelease 30 2024-01-21
description: 
date: 2024-01-21T08:09:14Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.30%2B2024-01-21/3.0.0-prerelease.30%2B2024-01-21-linux.tar.gz
    name: 3.0.0-prerelease.30+2024-01-21-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.30%2B2024-01-21/3.0.0-prerelease.30%2B2024-01-21-mac.dmg
    name: 3.0.0-prerelease.30+2024-01-21-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.30%2B2024-01-21/3.0.0-prerelease.30%2B2024-01-21-windows-x64.zip
    name: 3.0.0-prerelease.30+2024-01-21-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.30%2B2024-01-21/3.0.0-prerelease.30%2B2024-01-21-windows-x86.zip
    name: 3.0.0-prerelease.30+2024-01-21-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 137877356
tag_name: '3.0.0-prerelease.30+2024-01-21'
channel: '3'
tags:
  - releases
---




# Features

### Player

- optimize zasm by removing intermediate registers [`dddd96cf1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dddd96cf11647c5c31bfa6e6ba50a9624fbb8ed6)
   &nbsp;
   >- For example, `SETR D3 LINKX ; TRACER D3` becomes `TRACER LINKX`
   >- Also attempts to avoid pushing value to stack just to pop later,
   >  but only if the value of the register is unmodified in the original
   >  code between pushing and popping from the stack
   >- Only occurs if the register is read once. If read twice, the overhead
   >  of calling `get_register` is too great so it would be worse to call
   >  multiple times. Data registers are much faster to access.
   >

# Bug Fixes

### Player

- invalid optimization on broken SDDDD register [`d482c135b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d482c135b98ba01ed043d2109f1a2af9384d6bb7)
- disable propagate_values and dead_code passes for now [`cca0aaf0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cca0aaf0d657b2409a9183771f017254514ee2be)
   &nbsp;
   >These are likely to have a few edge cases remaining. 
   >
