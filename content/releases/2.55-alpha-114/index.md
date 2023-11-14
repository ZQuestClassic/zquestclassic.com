---
title: 2.55 Alpha 114
description: 
date: 2023-06-11T04:09:47Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-114/2.55-alpha-114-linux.tar.gz
    name: 2.55-alpha-114-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-114/2.55-alpha-114-mac.dmg
    name: 2.55-alpha-114-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-114/2.55-alpha-114-windows-x64.zip
    name: 2.55-alpha-114-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-114/2.55-alpha-114-windows-x86.zip
    name: 2.55-alpha-114-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 108127454
tag_name: '2.55-alpha-114'
channel: '2.55'
tags:
  - releases
---

## Changes to packaged files

- [`3f2ce2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3f2ce267f86a60914e700ff87fb1206d0cd82ac9) Remove resources/docs/Zelda_Classic_and_ZQuest_2.53_API_Specification.pdf
- [`6b2343`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6b234315285ad1b5420b0f1d8e20f13e2fccf9fe) Remove resources/docs/zscript_manual.rtf
- [`c29e6f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c29e6f106c8892da42a24e89c3d42973d3ba1b05) Remove resources/ZCL-changelog.txt
- [`aa3d87`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aa3d87a1a1257a3e9c6489f5cf5b6b602a50570b) Remove resources/scripts
- [`b4c455`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b4c4558f5751dc8ffbaf8628fa1da8b28a2a7be9) Add '255example.qst'

## Features

### General

- [`21447f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/21447f75171ceee9dd8b59171f533e947bd83724) [`addd8a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/addd8ac093d6f7bd74a88f0fe564756a9e7599c2) [`8ad107`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8ad107fbc70dfb118bdf40727b34b300da28202c) [`58d3d0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/58d3d007cd9aeb88d564c6f9f83bc6491c4b227b) Add ability for lifted combos to be bombs
- [`b08454`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b084548e61a3c970cd56b9adc16dc6e5fc321ec4) add 'Lift Flags' - allow disabling shield/items while lifting
- [`075935`](https://github.com/ArmageddonGames/ZQuestClassic/commit/07593504176138653bfe7170cdd5c7570ff9bff3) Add QRs for lifting+scrolling/warping behavior options
- [`ca30be`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ca30be23d18ec615e50d3845a5907f6117f8be5e) Preliminary: allow user created portals
- [`884169`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8841692cb68e62f33ea882cd9f2eacea931e6687) Add Trigger Groups (i.e. light all torches -> trigger secrets)
- [`1c6aad`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1c6aad587f3697bb35ed6d85eed25a2aa16f69de) Add weapon igniting
- [`f6245e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f6245edc9b99a1068afc9501012e34aa2fa97b75) [`eb40f0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eb40f0d50f786ef621c42288ef81d22045baa964) Item display names
- [`f460b4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f460b45ed9ab6f455915cab3f0dd6145105a8dfa) "Newer Player Movement" (#856)
- [`13a30d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/13a30d1144011a085ad2dac6c451f1122b43cd47) Add "Locked String" to lockblocks/chests, display a string when failed to open
- [`7d0f10`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7d0f100beaded34803a3b87c6265ada9cd08634a) Add SCC for run generic frozen script
- [`c249c9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c249c943317fb9376614fffd6baa9ee4c37c6d31) update std_functions: add LoadMapDataDM(int dmap, int scr)
- [`7b16cf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7b16cfda98016407a0abb470831024ae7af84970) Add more special draw layers
- [`82ba2f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82ba2f50ccf06d5837cca455d35a8f9315fc4096) Some work related to combos+weapons (Step->Effects,Shooters)
- [`ce3c0a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ce3c0a566b21fdb88f05f45e9beadcc22fc7851d) Add generic script frozen mode triggered by combo triggers
- [`012ec9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/012ec9d4e3e9e8f7e2ac8ceef6a77318515b4c73) Stop using encryption password for qst allegro packfile
- [`5304bd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5304bd161b260c7d6903f4eddfdc8cc9ab73475e) Remove encoding layer from qst files. This makes opening quests roughly 50% faster
- [`a79f3a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a79f3a0fad926f6e2c591226db42625058ea8bff) Support reading and saving as qsu (uncompressed file)
- [`f2e5f0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f2e5f0881478d04095c8dbdaa6769de9849195af) Update 'example fonts'
- [`64d42a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/64d42a1dd21410602f65d8dc034aa97842022e4b) Some reworking of bombs


### Player

- [`921302`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9213025e0f78bea2eefd7c06087604d8c3f2d998) Init Data / Cheats uses item Display Name


### Editor

- [`0668a5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0668a539182e3d06a2c28273a3b3e36e981909f2) Allow quick slot assign
- [`d5e0eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d5e0eb6a6b471eee3fffe088cd9230da781f2691) support undo/redo for ffcs
- [`24c2ad`](https://github.com/ArmageddonGames/ZQuestClassic/commit/24c2ad9ebacf547510c8290cc633b41021516d55) support undo/redo for single flag placement
- [`473b50`](https://github.com/ArmageddonGames/ZQuestClassic/commit/473b50da998b6ad03013c43a63a8cf32bd844408) [`83f286`](https://github.com/ArmageddonGames/ZQuestClassic/commit/83f286133b626b96a0241bcfae23b906768e7d55) [`625564`](https://github.com/ArmageddonGames/ZQuestClassic/commit/625564fa1af93bfe80a0505adb6e17d3d656f2c9) Add QR hint system to info boxes
- [`dcdee8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dcdee8e8a4c8a3e21b7e3986052955abba65bab5) Remove import/export options for ZQT and QSU files
- [`3c95bf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3c95bf6588ba751b4a2f5b12f1bc83696dfaca51) Add configurable cursor color for tile/combo pages
- [`5c9416`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5c9416040ec64f5b52ee8bbaa09b8dbc09f40ccf) Add symbols to font preview lipsum text
- [`afdc32`](https://github.com/ArmageddonGames/ZQuestClassic/commit/afdc32ff196829b71fefc131a323ca42266f72ce) New item selection list dialog
- [`8f6aff`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8f6aff0776d38dc016c8f391713bee94229e3ff4) Add lift glove help text
- [`ff66e1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ff66e16228c1b270e4bab140e0e99ac053e8cdd6) Add tile editor visual options
- [`9caad3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9caad3363241acd2189fbb9a98625b3a30bb901f) Add bomb flowers to default quest
- [`4dbba1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4dbba13a7be11befd1fbf203d87b77d92352b095) Add radial bomb flowers to default quest

### ZScript

- [`2a792b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a792b013d65c5d1f70e6c6c4f6b9bd43c802ab1) Add Hitby stuff to std_constants
- [`f098ea`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f098eac4ca301cb5009abcfa57533349137e8cdd) Add 'Hero->HammerState'
- [`debfac`](https://github.com/ArmageddonGames/ZQuestClassic/commit/debfac90f52d75b9ef10e517775e459d556e7b66) Add script access types `portal`/`savedportal`
- [`246f8b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/246f8bc84ddc15ecb879c1c764deebbbabe83d77) Add 'npc->CanPlace()' for checking teleportation movement.
- [`2baa25`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2baa25da15908fb9b057851b974f4c2a28ba6ca2) Add custom mouse script support
- [`05723f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/05723f64c579e37400b5db2af7f43ba5926e857f) Add 'Hero->MoveXY()'/'Hero->CanMoveXY()'
- [`530f7c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/530f7c6898660f0a528bf2294f043221481dec7d) Lifting script access work
- [`b22264`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b222647a8ead16b462f544e43ed2c4df43c3101c) jit: compile FLOOR and CEILING


### ZLauncher

- [`5b8a6b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5b8a6b6acd991fed04183df0eb36de8a1eab1baa) allow configuring gfx driver for player on windows


## Bug Fixes

### General

- [`50167b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/50167bbaeff04bbb70a9158224ff34b42098da27) Fix jwin_file_browse_ex not applying selected extension
- [`54bcde`](https://github.com/ArmageddonGames/ZQuestClassic/commit/54bcde0c3e36f07f09ce99d5cdb0870e7d1e45fc) Fix some gui color issues with certain "disabled" elements
- [`6dfbcf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6dfbcf3ff75f8a61ebc3a50ff28c4f9338c05592) Fix segfault in file select extension filter
- [`005870`](https://github.com/ArmageddonGames/ZQuestClassic/commit/005870d8b3183a9ce1907f82058dde0f2e52d8a6) Fix uncleared combo bitmap
- [`1ba148`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1ba148367b22487f84f0b7f4b53aaf3f622d6ba3) Revert non-windows ignoring 'ignore monitor scale' checkbox
- [`e51281`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e51281ccd7844660864711826a7fe7e696e99e25) Fix zfix dobound swapping values when it shouldn't.
- [`59c413`](https://github.com/ArmageddonGames/ZQuestClassic/commit/59c4136e638885820315f8107bde39fd049766dc) [`27b421`](https://github.com/ArmageddonGames/ZQuestClassic/commit/27b4215cb9a3b94994a9c6691db30ce29865dc7b) Fix tile preview in item lister
- [`5f053f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5f053fb97004d93d9fbf001b6fda49f45575b2c1) Fix vanishing text
- [`0b42b7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0b42b7fe711210b1f95728a17e68edd30b142b5a) Frame infobutton stuff
- [`278243`](https://github.com/ArmageddonGames/ZQuestClassic/commit/278243b2039677881a2b4f32f649c4b9eafba1b3) Attempt Fix gui lag issues
- [`db9c3d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/db9c3d9bf6def96c2b86dab648d3bfc9cf747de9) Fix allegro.log oddities / trace handling
- [`d49bb1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d49bb11a64ad61d63a5bf4e804dd20ab98b9c683) color a5 bitmaps on init to avoid random tint


### Player

- [`4670ce`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4670ce050883058229f575928ab1bc6aa964f853) copying save file should also copy replay
- [`e77af5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e77af5f15c45328fdcd16b7918097b551a09b409) some movement fixes and improvements
- [`a13395`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a133954bb386a1f176a97d2a17a4585d814a192a) Fix scroll frame timing issue
- [`be20d2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/be20d23e1d2f3412b4ae968f4d2826c10b3e0ba3) Never use linear scaling for game bitmap
- [`2ed468`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2ed4686150f48ba4543311e34b562be4cea47dd4) Fix edge case bug with scroll warps and dmap script waitdraw
- [`c5b367`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c5b367f599c3c129d037cbadcd5bfd09fbbf83dd) Fix lockblocks/chests double-playing locked strings
- [`2d5e12`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2d5e123c6e9ffea824162bd6f0202617cb744a30) Fix Opening file in append mode now creates missing directories
- [`dd0d45`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd0d4528c1ebaacf7fbd416aef86bfac1656c8fc) Fix Hero->ReleaseLiftWeapon not working
- [`19979b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/19979b63de96234ac52ba267cd61bb228ee55d71) Fix SV Ladder 'force face up' during scrolling
- [`72834b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/72834bee0f2b31d05388559e8d95ca771ba8d926) Fix facing direction affecting movement wrongly
- [`830a8a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/830a8a236881cf1e8564b0d2078c61b900b0e425) Add conveyor force-walking
- [`5dd40b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5dd40b3d217d7381fd819c349ef2b6a252992413) Fix candle/arrow 'max per screen'
- [`b966e1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b966e14c96f739f71d369fcbf384e25bca0696d2) 'Shutters->' fixes/tweaks
- [`40e795`](https://github.com/ArmageddonGames/ZQuestClassic/commit/40e79516494cde1f448de211e8b3160c81201e6b) Fix icy pushblock interactions with block holes.
- [`f79fd3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f79fd3854706880d109cbf4730fb1d0933b2dd65) Fix ANCIENT ZQ subscreen selector bug.
- [`8f17aa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8f17aaea332234fc6864c85da3baa4f8e07ba5bf) Fix bad coordinates with bush ffcs
- [`81398d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/81398d211e7079695f7ab70f841927ea890717f3) Fix oddities with loading save files of missing quests
- [`646eed`](https://github.com/ArmageddonGames/ZQuestClassic/commit/646eedbb007f39987e763bcfb31ad4fe8b38c1ec) Fix crash when missing save files
- [`f741b4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f741b406c5f01311574c3464b6e714942c55bfeb) Fix some CanMove stuff
- [`765eac`](https://github.com/ArmageddonGames/ZQuestClassic/commit/765eacf15f55a8138dba9a9a5a007142f8667287) Fix mirror portal in top left
- [`1a50e8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1a50e865fcde3b3ac96653cff411e3f2f2e91b40) Fix gleeok heads not drawing correctly on first frame
- [`cba517`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cba5171fd2e9e254670e90acecfd5b104d3b2cbe) Fix all remaining HitBy bugs (hopefully; TODO: add QR for ignoring nayru's love for HitBy)
- [`cb587f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cb587f59a32b0adbaa412ca8b00cdde70fdcc4ad) Fix crash with invalid ids with npcdata
- [`e75cc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e75cc32914de106f6e53f5c93b9dff366ad73e09) Cheat invincibility now protects from drown/pit damage
- [`2a4df0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a4df055982c7751ea6384cfc83f45b5e4bc724b) Enemy / solid object interaction fixes
- [`5ccdfd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5ccdfd52b68afc1a15033237a5997d344f69b679) Fix solid ffcs pushing on wraparound
- [`8c4f32`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c4f32809c825cd7a1731d2d98a2bdb4a2107083) Fix 'Enemies->Item' with enemy waves interaction
- [`9975b0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9975b04052dd62c70a921ccb7723cb58bf9cba1e) Fix warpEx scrollwarp visual bug with map
- [`eaf5fe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eaf5fefe41a91946dbbd4e1bcae3e704eb4d8f48) Add hardcode layer 'SPLAYER_PLAYER_DRAW' to draw to player sprite layer.
- [`c7aa72`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c7aa72ff5b5bf822ea6827a51a957780c1acdc52) Scripted enemy movement fixes
- [`03a8c9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/03a8c9489c6cd587dc86bf262a305729e1a94474) Fix solid ffc hang
- [`b305f2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b305f22975d24ccf97a8c5243539d0760a04d2cb) Fix bad HitBy melee interactions
- [`f42982`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f429822d48e43828e78410d25ab67e61965fe179) Fix enhanced music cutting out when tabbing back into the window
- [`ce390d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ce390de32eb38b61702648bd21d2b09a0d1526d3) Fix layered pound blocks being hit by midair hammer
- [`07f8fe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/07f8fe6801b769ac5c84401d07930ca2c3e57f8d) stop loading quest template to reset items
- [`3f8f62`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3f8f62c552f13b8b568d6ded864f63ba9a39d9fe) never init from a quest template
- [`2a5734`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a5734dc2817daca011dba63f700820c43f7fa3c) Fix triforce + item bundles
- [`6b6744`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6b674436894095c9cdb24118f03e3993d7317056) Fix melee weapons not respecting all of HitBy's properties (UID, etc)
- [`5e26e8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5e26e85558a87b0b35f7f2da9300acd8ab288ee5) Fix wrong item id check
- [`565c50`](https://github.com/ArmageddonGames/ZQuestClassic/commit/565c501289b963f61eacf768d2d7e88dcdd1958e) Fix dialog mouse offset at large resolutions?
- [`d8f658`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d8f6581caf566c9c9868e60609d3ca4ce5af9e08) Fix mouse not showing during some popups
- [`0de954`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0de954dc693c4f0a024d99e7d93bd14ea044f284) Fix zc mouse showing during gameplay, setup for fancy mouse stuff.
- [`f1f9c8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f1f9c81f439152b59a34d0dddbdc36f0e454f460) Fix onCredits messing up gui bitmap transparency
- [`ca7839`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ca7839248280924c11f573ef18e46b73ad302b99) avoid wasted computation in overpit
- [`92287c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/92287c8f32d9b12187255d7bd8a78461354ffaf7) [`717878`](https://github.com/ArmageddonGames/ZQuestClassic/commit/717878ef5857a5e2bfe9dfd9e81c3efe0dbd8d25) [`f8fa5f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f8fa5f5f842fd86282edc471fb7647c11eeae0b4) [`01fcce`](https://github.com/ArmageddonGames/ZQuestClassic/commit/01fcce4be0e3db973710369e7cc92c8a1316e6ef) improve eyeball combo during scrolling

### Editor


- [`84bf0e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/84bf0ec6d196fbf7328da7acebd4ae53e5f25ef1) Fix preview mode 'preview combo cycling'
- [`811622`](https://github.com/ArmageddonGames/ZQuestClassic/commit/81162266e46b83d03bca3657eb3f647876215093) Fix 'Show FFCs' not respecting preview mode
- [`35dd54`](https://github.com/ArmageddonGames/ZQuestClassic/commit/35dd54ec947ed024805907ee8cc2391134be197d) Fix decimals not being saved in zquest hopefully?
- [`ac4d20`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ac4d2009c14355ec0cb12ae09fc94000e257e4c9) Fix wrong QR description
- [`820b3f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/820b3f5e8ec014f2791958aa71d6efab0f3c5278) Optimize slot assign; no more temp files
- [`7523dc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7523dc2329d0cb10d15eae0a390fc6e3c76d87a3) Reduce 'do_slots' duplicate code
- [`2de58e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2de58ee47ac799d430fc5b481fafa5e361fba754) Clean up ZQ errors, add fonts.dat size error message
- [`ecb6b3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ecb6b362ec4a8f8a8e4e98c6083f7aa168659c01) Fix combowizard for shooter not saving direction
- [`ddc8e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ddc8e4f060a99d6226fcc7d25ff6cae58b43a294) Fix Screen palette can be changed on null screens
- [`71071d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/71071d715e06459201eb12587592e2e42783c753) Fix frame titles being visible in the wrong tabs
- [`a738e8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a738e83187ed6218669314d5497a9bf2d2d78f2b) Fix locked chest/lockblock combo wizard
- [`60761a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/60761a188d8747ebd8fa3cc8699802de49aa08e0) Fix favorite combo offset on quest save
- [`ef294b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef294ba2c09cb943b7fe8ddf4d13bae6ea8755e0) Item editor pickup tab revamp
- [`13bb56`](https://github.com/ArmageddonGames/ZQuestClassic/commit/13bb56c733348bd4847106768c1eac5ae4f71a96) Fix shallow water combo wizard
- [`77f342`](https://github.com/ArmageddonGames/ZQuestClassic/commit/77f342cf6bc87e3cb32e4fb34d936641a32463ae) Rework tile grab GUI: Fix 0xFF transparency issue, text cuttoff issue
- [`b31eac`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b31eac248602c6b41f87915e75ea2e62d01fa634) Fix brush width/height when changing combo in some ways
- [`c6f52b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c6f52b08eb3666a9be95e398de8670f9f8874dfa) Fix minimap right offset
- [`386d15`](https://github.com/ArmageddonGames/ZQuestClassic/commit/386d154c4255f54e324ad31379efca1b980b8ef1) Fix zq minimap offset
- [`e92322`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e92322a81ced5853e1b4c37115a1335432d05cc5) Fix grave/bsgrave combo wizard
- [`60efdd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/60efdd5a4d12459d83420efaefaa1e4d7b27e715) If DragAspect is on, force aspected xscale/yscale
- [`a92a19`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a92a19b1bad75f702aef7f56f5315ded33735f94) Fix placing ffcs not snapping to the half-grid
- [`24b134`](https://github.com/ArmageddonGames/ZQuestClassic/commit/24b1348d4843befc9f38003b3c73c6ea37470144) Fix favorite combo misalign / mappage bookmark overwrite when grabbing tiles
- [`42b98a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/42b98ace5a485ba8d4bfcea2f738f8eccd1b3ea1) Fix max brush size being ignored by autobrush
- [`89d870`](https://github.com/ArmageddonGames/ZQuestClassic/commit/89d870823e328ff7edaab08f0fa57fbeadfa2362) Fix combo editor CSet- and T shortcuts
- [`1d5a82`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1d5a82f2f8c82e02bdbd10e0e64e2fd52c7b62bd) Fix combo brush when selection crossed combo page boundary
- [`3f862a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3f862a3bec2ceebcc52e12364839b7b55d89e104) Fix tile grid state when undoing dungeon/relational drawing
- [`da42a8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/da42a878e6be74536c9ad4acdfafb690f25e8cc3) Fix eweapon dropdown error
- [`9e528c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9e528ca150951d2914d57accf746dec77d37aaf1) oxford commas
- [`c5f7f1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c5f7f12c06abebbbed087a5011c86f798448f888) Allow prompts to show from triggers tab even when 'Button: 0'



### ZScript

- [`fac141`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fac141771a66db3ed00577958a540cf08e69b9ea) Fix scripts with >8 params hanging on compile
- [`a743bc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a743bcf39dafeea9d7098819062d496ab46f54d6) Fix 'Hero->ReleaseLiftWeapon()' not compiling
- [`4671e5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4671e59966f8b14659fe38a5f877d23703eafde4) Fix MAPDATACOMBOTD setter referencing combo of the wrong screen
- [`bb5cef`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bb5cef8355bfa7eef80d5d87ddefd788761daef5) Fix string/array literal allocation error
- [`64acf7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/64acf754e091f8aa1072d91352769db3e7a9828f) Fix 'Game->DisabledItems[]' not updating item cache
- [`fd8738`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fd8738d9bc8e91aa7b873e2693229642a680c822) Fix bad 'dmapdata->' Get/Set functions
- [`1078cf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1078cf67d1cd794218b86f9b1b09e1d3337a352f) Fix enum assignment const checks
- [`87fb4c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/87fb4cad638ad96b5cb4302535283771a8e94913) Fix?: Script npc->MoveXY ignored solid FFCs
- [`7732f3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7732f32c51da7a14636f1ac853b47ee7fd13793f) Fix `this->` not writable in user constructor
- [`df8266`](https://github.com/ArmageddonGames/ZQuestClassic/commit/df8266573dde7a4e84e7233019d5b1ebe9d7d1a2) Fix string/array literal allocation error for real
- [`2d30a7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2d30a707979751c0710ca216c6efc00a23826247) update std.zh: Fix FireE/LWeapon functions
- [`0c246f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0c246f4b46b7a648ff10e50477e46b8184842cd9) jit: fail compilation if function return cannot be resolved
- [`fbce61`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fbce61f9b054832b46d53cb6bcf971ddc18c969a) jit: support class construction function calls
