---
title: 3.0 Prerelease 120 2025-07-19
description: 
date: 2025-07-17T22:45:14Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.120%2B2025-07-19/3.0.0-prerelease.120%2B2025-07-19-linux.tar.gz
    name: 3.0.0-prerelease.120+2025-07-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.120%2B2025-07-19/3.0.0-prerelease.120%2B2025-07-19-mac.dmg
    name: 3.0.0-prerelease.120+2025-07-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.120%2B2025-07-19/3.0.0-prerelease.120%2B2025-07-19-windows-x64.zip
    name: 3.0.0-prerelease.120+2025-07-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.120%2B2025-07-19/3.0.0-prerelease.120%2B2025-07-19-windows-x86.zip
    name: 3.0.0-prerelease.120+2025-07-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 233706339
tag_name: '3.0.0-prerelease.120+2025-07-19'
channel: '3'
tags:
  - releases
---




# Features

- standardized 'weapon data' settings for items/enemies/lifting [`b43e006d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b43e006d741700417b83876bce343ac28e6f69ff)
- "No Collision When Still" weapon flag [`edb610c73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/edb610c735a9f0662ef3f04d1d666b2d8fe7bbab)
   &nbsp;
   >Useful for weapons that lay on the ground and can be lifted/thrown 
   >
- qr to allow autorotated weapons to use right-facing sprite params [`d3859e27b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3859e27b9e035dd3c59a80b74069cbdc2f1476c)
- weapon pierce count [`9fbc37a01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fbc37a01c849c86f782d16c76116618db60d3f4)
- qr for "Weapons Cannot Stunlock Enemies (ignore)" [`3a70ecb2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a70ecb2afcbaa97e54782235ad213b620890ef8)
   &nbsp;
   >Like the existing no stunlock rule, stops stunned enemies from being hit. Unlike the existing rule, enemies IGNORE instead of BLOCK the weapon. The existing qr was renamed adding "(block)" to the end to differentiate. 
   >

### Player

- qrs related to lifted weapons / bomb booms and weapon scripts [`cbceeae86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbceeae86cb77655bf7d9dc249a023dae880305b)

# Bug Fixes

- EWeapon Rocks no longer hard-codedly die on solids [`20e5b2415`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20e5b2415ba90cb1f172e408d1703b8ffa1ee800)
   &nbsp;
   >Instead, they obey the weapon flag for breaking on solids, allowing rocks that either break or not. 
   >
- support test init data in replays [`a6a671cdf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6a671cdf22edf0523072276a102537ddb18f827)

### Player

- prevent rare crash related to creating hero weapons [`2a96e86bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a96e86bffcebba81f9133ebfb30f18eeb2bdb8f)
- liftable bomb's explosions no longer liftable [`22a840f5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22a840f5be92e264943c9b97d85ef7f097f2d128)
- thrown weapons not properly rotating [`3fea7a20e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3fea7a20edda2ee812beeb76f4a47d0404b520ff)
- weapons no longer "die/stop on solids" when already dead [`4bdcf9f1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4bdcf9f1f210dd7271390aac868ce6f473e8d0b4)
- prevent crash when accessing invalid enemy data [`d82e3b0dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d82e3b0dc1ae080a5e085e5896366365eb8ea119)

### Editor

- some editors having misaligned labels [`332fff941`](https://github.com/ZQuestClassic/ZQuestClassic/commit/332fff941a409370ceedd314c34c0a0fee017706)
- use correct qst path when setting map zoom level on load [`054b6fc3f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/054b6fc3f60ecce6c8fa39d8b32b94794908499a)
- prevent data loss when grabbing tiles from quest [`f2fe5846e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2fe5846eb63227be56a70ec5c6973535f6cfe19)
- update Cambria tileset [`86c79154d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86c79154df37ce80c82dd2941e8bdb9ba30749ae)
   &nbsp;
   >- Fix the item bundles unintentionally giving you rupees on pickup
   >- Fix Stone of Agony having no effect
   >- Fix Combo 3638 not being a torch combo
   >- Fix the Spooky House palette having palette cycling
   >- Fix various example screens using the wrong trees
   >- Fix auto combo #50 not working properly
   >- Add dense forest autocombos
   >- Change Cave (Walk Down) combos to Stair combos. Making the Cave
   >  (Walk Down) combo animation work properly would require making the
   >  transparency color black, which we don't feel is ideal for this
   >  tileset
   >

# Chores

- clean up 'alwaysOnRules()' [`77a3db7b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/77a3db7b4716ffb790926910b794aead97919d39)
- swap out memset/memcpy on itemdata/guydata [`0d4531570`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d4531570edb0bd6485b96c5b434f15f052a0b34)
