---
title: 3.0 Prerelease 130 2025-08-23
description: 
date: 2025-08-23T02:08:15Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.130%2B2025-08-23/3.0.0-prerelease.130%2B2025-08-23-linux.tar.gz
    name: 3.0.0-prerelease.130+2025-08-23-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.130%2B2025-08-23/3.0.0-prerelease.130%2B2025-08-23-mac.dmg
    name: 3.0.0-prerelease.130+2025-08-23-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.130%2B2025-08-23/3.0.0-prerelease.130%2B2025-08-23-windows-x64.zip
    name: 3.0.0-prerelease.130+2025-08-23-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.130%2B2025-08-23/3.0.0-prerelease.130%2B2025-08-23-windows-x86.zip
    name: 3.0.0-prerelease.130+2025-08-23-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 241999345
tag_name: '3.0.0-prerelease.130+2025-08-23'
channel: '3'
tags:
  - releases
---




# Features

- Gravity Boots [`960e00c52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/960e00c524fc13dfd40b792e3a878671f16b5e52)
   &nbsp;
   >Coming in 3 varieties, these boots alter the Player's gravity and terminal velocity! 'Gravity Boots' just change them passively (can optionally be sideview-only) 'Gravity Up Boots' change it when holding 'Up' in sideview 'Gravity Down Boots' change it when holding 'Down' in sideview 
   >
- Roc's feather can subtract from player's jump after released [`1b758c9f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b758c9f76a780c1e6a70e000fdf4ea58dc6b6fc)
- improved player jump/fall animation qr [`ccc7c0e60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ccc7c0e60e1cd09f92863cd5c8eef85fa98f329a)
- per-item cooldowns [`00c21339e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00c21339e951286012f644b76f7b72e243b80ef4)
- Subscreen Widget - 'Gauge Piece: Item Cooldown' for visual display of cooldowns [`f6e1e5a29`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6e1e5a29ca16077dfd790bff0575c303248254c)
- 'Cooldown Ring' item type to modify all item cooldowns [`67dbdacc3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67dbdacc3b00dd751f0283e98c84196ea4d4f6b4)
- Subscreen Widget - 'Item Cooldown Text' for a simple text of the cooldown time [`31d477295`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31d477295064720229ac4f2501a8291c86b3d36f)

### ZScript

- Customizable per-sprite gravity strength and terminal velocity [`dab1c5d40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dab1c5d4068eb308dc4e2578bfa793c4292b9ac3)

# Bug Fixes

### Player

- move custom eweapon to lweapon sprite list when reflected [`ca576cdca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca576cdca702a235e4181a2517ffadcd26c70b71)
- suppress shooter combo if outside sprite viewport freeze [`53e1f36ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53e1f36ee23c2d8b34e33cee9e56d5b2e9a8ddd6)
- in scrolling regions, center map on hero [`74d67623c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74d67623c7596aee3283e8ba1b2116ed33d46c33)
- use correct panning for many sounds in scrolling regions [`ee37dfbee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee37dfbee4755be13eeb55eb0be15119cc54a4a1)
- draw minimap for regions correctly with dmap xoff [`75c45c19a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/75c45c19ac01d6dfed0049e4369b17388622ef1c)
- do not unselect A button when loading save [`9806fb8ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9806fb8abdb506ecb3e2e8222f5f169b98340bd0)
   &nbsp;
   >A bug in initializing the game resulted in the A button always being unequipped (unless it was forcibly set with a script). 
   >
- for jit PUSHARGSR, read value before modifying stack [`cac7d7ba8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cac7d7ba82f9d067ddf6df0c4f1e728a4a213d68)
   &nbsp;
   >The optimizer can possibly make PUSHARGSR push the stack pointer, so the order of this can be important. 
   >
- cane of byrna sparkles lingering after death if extra dying frame qr is on [`9a2f1a4b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a2f1a4b908b48046274fee9ab89a2943b0b0c31)
- re-init many global variable on load/continue [`8de3ba125`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8de3ba125176c30793bc67f15d752f402eb0fbfd)

### Editor

- allow item editor to enter larger numbers for the Power field [`ce230ca81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce230ca81bcc538896541bfddc1bb53540969ed1)

### ZScript

- wrong zasm vars for screen exstate carryover/reset related vars [`2a3d045b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a3d045b5a0de6bc39cddda48500db485694665e)

# Build

### Web

- upgrade emscripten to 4.0.13 [`422dd5a15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/422dd5a155285832e13a3fd725181f8ed24acc6a)

# Tests

- skip garbage_collection.zplay for web [`02c19dfce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02c19dfcea55b5e7fc8998af380e47c77087cbff)
