---
title: Nightly 2024-01-14
description: 
date: 2024-01-14T06:48:07Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-14/nightly-2024-01-14-linux.tar.gz
    name: nightly-2024-01-14-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-14/nightly-2024-01-14-mac.dmg
    name: nightly-2024-01-14-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-14/nightly-2024-01-14-windows-x64.zip
    name: nightly-2024-01-14-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-14/nightly-2024-01-14-windows-x86.zip
    name: nightly-2024-01-14-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136971419
tag_name: 'nightly-2024-01-14'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

### Player

- 'Custom Weapon' itemclasses rounding down step speed [`8f4b63428`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f4b634284108df3d9b41c2500cebecdb6754578)
- restore option to scale display to full window size [`b618eb983`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b618eb983f02426f30ddecf8d2425087ada86807)
   &nbsp;
   >This broke when the display was fixed to only show at the correct aspect ratio. Default is still as before, but now the "Force Integer Values for Scale" option works again. 
   >

### Editor

- midi edit dialog not showing in new rendering system [`7ff03e46b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ff03e46bcb5202388da97092520edbc87624469)

### ZScript

- compiler crash related to invalid array indeces [`f3e3f7ecb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3e3f7ecbf8d0e1e998296a185fa2eca248dd454)

# Refactors

### Player

- remove ZASM debugger from menu [`377981e09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/377981e09d2d3b008369fb0bd3ef974fa36e9d64)
   &nbsp;
   >You may still activate this with `[CONSOLE] print_ZASM = 1` in `zc.cfg`, but the option is no longer in the player menu. This will be removed entirely soon - it's so slow it can lock up a computer, and not useful enough to keep around.  
   >
   >We may introduce a proper debugger in the future for ZScript to serve the purpose the ZASM debugger tried to. 
   >

# Tests

- add link_to_the_heavens.zplay [`b1309cc47`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b1309cc474cad2c492eb3c640f71fd3763f900cc)

