---
title: Nightly 2023-12-15 (3)
description: 
date: 2023-12-15T07:46:44Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-15-3/nightly-2023-12-15-3-linux.tar.gz
    name: nightly-2023-12-15-3-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-15-3/nightly-2023-12-15-3-mac.dmg
    name: nightly-2023-12-15-3-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-15-3/nightly-2023-12-15-3-windows-x64.zip
    name: nightly-2023-12-15-3-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-15-3/nightly-2023-12-15-3-windows-x86.zip
    name: nightly-2023-12-15-3-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134060118
tag_name: 'nightly-2023-12-15-3'
channel: '2.55'
tags:
  - releases
---



# Features

### Editor

- Merge 'Favorite Command' and 'Hotkey' systems [`cbb1ee991`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbb1ee991411358e10ca564c2b7a5b1ee8ac4521)
   &nbsp;
   >Any 'Hotkey' can now be set to a favorite command, and all old favorite commands now have 'Hotkey's. Favorite command buttons will clear upon this update, as the configs have changed. 
   >
- Hotkey cheatsheet, open with Shift+? [`2f0f07d43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f0f07d438ce505dc082c0519a2ac5402ae7f1bb)

# Bug Fixes

- being able to carry objects while swimming, when lift glove isn't swim-capable [`d06f44a33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d06f44a3347bd3143003ad5248783c1712ea5157)
- 'Push (Generic)' combos not properly locking into place on block triggers [`80845040c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80845040c6457c3e2c574e7b02be336a699ec4a7)

### Player

- improve main menu responsiveness [`5dd96666e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dd96666e1710d5ff82e170c6f5cb7cb15efdce6)
- system menu not closing on reset/quit/etc [`049532ccd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/049532ccd1dabbf09fd80dfc2beb1ade407a9569)
- fix 'warp' SCC sometimes not closing the string [`7601d2fb7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7601d2fb7279835ebdd8e2e6c9a112d7c07eecfa)
- use more performant throttleFPS instead of rest in system menu [`0de39b360`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0de39b360e58e30e603b5555d58641d4c8ca9690)

### Editor

- 'File->Exit' not exiting [`5db531ab7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5db531ab7066f1fb03afbca13b553df7ca01f580)
- 'Scroll to Combo' on screen rclick being offset [`5497092dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5497092dc23cedf28e89470cd4620f023c9967a2)
- greyed out pasting in string list [`f2440669d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2440669d88570d5fa98308b68600b2fa4924284)

# Refactors

- don't tint behind dropdown lists (allow skipping dlgs tint) [`cb8f87135`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb8f8713578e893518222aba61bdbcac4bffa2bb)
- Menus (new sleeker look, much cleaner backend) [`df3b5ab5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df3b5ab5b58145ea61314221a387ffe0351c0b65)

### Editor

- Clean up Tile/Side/Ring warp dialogs [`34b7addff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34b7addfffd6c7f1ee6b690884c19c46bb7b93cb)

# Misc.

- add 'peekkey()' / 'upeekkey()' local allegro edits [`7022b0ee4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7022b0ee472fb7ed4eea63eca83221b088cff8f0)
- clean up menus, particularly the zc main menu [`5ae6e3d64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ae6e3d64e53f5ecaa33d4d6ada1d0452b7d0c8c)
- Remove whistle delay for new replays [`ac0017e2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac0017e2a8aab18950dcd2e13a913384dfaf9a31)

### Player

- improve error message when qst title does not match save file [`069e15113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/069e15113fb08e457f56482e0d3f841f9cb5f946)

