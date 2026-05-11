---
title: 3.0 Prerelease 185 2026-05-10
description: 
date: 2026-05-11T06:21:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.185%2B2026-05-10/3.0.0-prerelease.185%2B2026-05-10-linux.tar.gz
    name: 3.0.0-prerelease.185+2026-05-10-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.185%2B2026-05-10/3.0.0-prerelease.185%2B2026-05-10-mac.dmg
    name: 3.0.0-prerelease.185+2026-05-10-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.185%2B2026-05-10/3.0.0-prerelease.185%2B2026-05-10-windows-x64.zip
    name: 3.0.0-prerelease.185+2026-05-10-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.185%2B2026-05-10/3.0.0-prerelease.185%2B2026-05-10-windows-x86.zip
    name: 3.0.0-prerelease.185+2026-05-10-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 320316164
tag_name: '3.0.0-prerelease.185+2026-05-10'
channel: '3'
tags:
  - releases
---


# Features

- 'Block (Same Layer)' / 'Block (Any Layer)' triggers [`27a04f104`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27a04f104612244438f8ffab3db7b8f37a46dc27)
   &nbsp;
   >These trigger when a pushblock is pushed onto the combo. 'Same Layer' version requires the block be on the same layer. These triggers both occur during the last moment BEFORE the block clicks into place (as a trigger on the same layer as the block would be deleted by the block clicking into place). 
   >
- Trigger conditions 'On Screen' / 'Off Screen' [`13eddda59`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13eddda59171ad3c87d1bb91a24dff69c3298db4)
   &nbsp;
   >Conditions built specifically for regions, for detecting if the combo is within the viewport boundaries or not.  
   >
   >Comes with a 'Viewport Range' setting, allowing you to expand (or contract) the rectangle of the viewport used for the condition; ex. with a '16' range, something is only 'Off Screen' if it is >= 16 pixels out from the edge. With '-16', it would be 'Off Screen' even while it is still within 16px of the screen's edge. 
   >
- 'Chance' trigger condition [`c832de843`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c832de843fdddc821a653f798b99b9bdf14fd3bb)
   &nbsp;
   >Set a combo to have an N in M chance of it's trigger actually happening. Useful to actually have randomness in trigger setups! 
   >
- Advanced SFX combo triggers [`00003c0c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00003c0c2b5fba251304c0006896cd4c77f02b16)
   &nbsp;
   >Allow manipulating the specific Pan, Frequency, and Volume of played sfx, as well as looping SFX, stopping SFX, and *not restarting* an sfx (so, play it if it isn't already playing / change the pan/freq/vol values of it without restarting it) 
   >
- Absolute Combo/CSet change triggers [`7ca5f2339`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ca5f23397714582dfef2e2399937f1c55c9c3fb)
   &nbsp;
   >Specify a specific combo or CSet, instead of only a relative change. 
   >
- `Swim->` / `Swim-> (Sensitive)` triggers [`203fd3c6a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/203fd3c6a32d3ee1acdf6dace704b706cb35e029)
   &nbsp;
   >Exactly identical to `Step->` / `Step-> (Sensitive)`, except only triggers if you are currently 'swimming'. 
   >
- 'Enemy Ambush' itemclass [`e0a43f2e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e0a43f2e360e9662e1ec20f9f0802bf283436e08)
   &nbsp;
   >When this item type either spawns, or is collected (based on a flag), it will spawn a specified number of enemies from a list (either randomly selected from the list, or exactly in order) 
   >

### ZScript

- `dmapdata->MapSubscreen` [`06edcf2ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06edcf2ee2ec222987c5ac79c7ef8143a4c6d380)
- `weapon->DisableTriggers`, `Hero->HammerPos` [`1899b81fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1899b81feae790ee674c1d48c645e02bf1d153f6)
   &nbsp;
   >Script ability to stop weapons from triggering triggers, and read the current state of the Hammer's swing. 
   >

# Bug Fixes

- Sfx pan only working to the right [`5196474d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5196474d7e33129e60a988050fc37aa9e718fb7c)

### Player

- Sideview drowning sprites being broken [`00a963d0e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00a963d0e99d018c55e8aad4f012217fd524adb0)

### Editor

- Autolayer dialog not properly setting current screen value [`492c2b289`](https://github.com/ZQuestClassic/ZQuestClassic/commit/492c2b2899dabb772ec0dfa37190eb5798993ad2)
- Typo in ffc editor 'Swap' flags' info [`98f2b5f5f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98f2b5f5f7422d908c9cab69e5c8f8e9d29948a0)

### ZScript

- Bad error message text when using the Game functions for swapping subscreens [`61bc822c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61bc822c807a07c0985a08cd27a4b32a029bfe6d)
- Properly assign comments on anonymous enums [`ed22cfa75`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed22cfa7535bcf9b05d7d97dc64819af02476a71)
- Ensure `@versionadded 3.0` is added via script [`db15c7fbb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db15c7fbb7f063dd650679418f54c0e06ea266e7)

# Refactors

- Clean up dummy item code [`68edac45e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68edac45e69f5881c9432d165f66b9d6e1b88700)
