---
title: 3.0 Prerelease 203 2026-07-22
description: 
date: 2026-07-23T05:38:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.203%2B2026-07-22/3.0.0-prerelease.203%2B2026-07-22-linux.tar.gz
    name: 3.0.0-prerelease.203+2026-07-22-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.203%2B2026-07-22/3.0.0-prerelease.203%2B2026-07-22-mac.dmg
    name: 3.0.0-prerelease.203+2026-07-22-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.203%2B2026-07-22/3.0.0-prerelease.203%2B2026-07-22-windows-x64.zip
    name: 3.0.0-prerelease.203+2026-07-22-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.203%2B2026-07-22/3.0.0-prerelease.203%2B2026-07-22-windows-x86.zip
    name: 3.0.0-prerelease.203+2026-07-22-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 358519285
tag_name: '3.0.0-prerelease.203+2026-07-22'
channel: '3'
tags:
  - releases
---

# Bug Fixes

- [win] ignore initial click when window is inactive [`9e5403c275`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e5403c275aa2cf7b6dc1b56acaa1e07647b5c14) [Discord](https://discord.com/channels/876899628556091432/1499572218256953424)

### Player

- Ganon room music not playing for quests made in 1.90 [`43cedf5ee6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43cedf5ee65eb3cd83552c7c3014fd4bc685ccd4) [Discord](https://discord.com/channels/876899628556091432/1529206920379105291)
   &nbsp;
   >The Ganon room plays the last MIDI in the quest's MIDI bank, but the number of MIDI slots grew from 32 to 252 in 1.92 build 178. The player always looked at the modern last slot, which doesn't exist in quests made before then, so their Ganon music never played. 
   >
- Passive subscreen missing when playing some old quests [`27620efc4e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27620efc4e572701c8254089d912aeccac8da82a)
   &nbsp;
   >Some old quests (pre-2.55 subscreen format) have dmaps whose subscreen index points past the end of the quest's subscreen list. The original engine silently fell back to displaying the last subscreen in the list, but since the new subscreen system such an index displayed nothing at all - leaving the passive subscreen area entirely empty. "Link's Grand Adventure 2" is the only quest known to be affected.  
   >
   >Now the old engine's index resolution is emulated when loading old quests, restoring the subscreens these quests always displayed.  
   >
   >Regressed in 2.55-alpha-117 ([7441956cdd](https://github.com/ZQuestClassic/ZQuestClassic/commit/7441956cdd)). 
   >

### Editor

- Prevent crash at startup when a recent quest path is inaccessible [`80af706d22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80af706d228fdbd95e0dac14a9997f3545a02e45)
   &nbsp;
   >Making a path relative for display (recent quest menu entries, per-quest config headers, etc.) threw an unhandled filesystem exception when the OS could not resolve the path - for example, a config file copied from another computer with quest paths in folders that don't exist or can't be accessed. In the editor this happened during startup, crashing before the window even appeared.  
   >
   >Such paths are now left unchanged instead of crashing.  
   >
   >Regressed in 2.55-alpha-108 ([f79e7bd348](https://github.com/ZQuestClassic/ZQuestClassic/commit/f79e7bd348)). 
   >
- Prevent crash pasting an item or sprite onto a new lister slot [`3018e2a6b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3018e2a6b6eb995cdd7a59289ac4845494f2981d)
   &nbsp;
   >Pasting onto the '<New>' row of the item or sprite select dialogs crashed the editor. Writing to the new slot grows the underlying list, which invalidated the reference to the copied entry mid-assignment, copying from freed memory.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([1f397dc208](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f397dc208)). 
   >
- Wrong npc IDs listed by tile move overwrite protection [`2032f995d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2032f995d3e4b59faad7447f16c07a3b5e5141f1)
   &nbsp;
   >When moving tiles onto tiles used by enemies, the overwrite protection warning listed each enemy by its position in the alphabetized enemy list instead of by its actual npc ID (the name shown next to it was correct).  
   >
   >Regressed in 3.0.0-prerelease.48+2024-04-05 ([5c29d6f4e6](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c29d6f4e6)). 
   >

# Documentation

### ZScript

- Correct sprite range for npc spawn/death/shadow sprites [`535db89cb9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/535db89cb969fb05f83c599f8e5a907f1e234819) [Discord](https://discord.com/channels/876899628556091432/1528755722081538170)
   &nbsp;
   >The docs for npc::SpawnSprite, npc::DeathSprite, and the matching npcdata vars still said 0-255, but the max Sprite Data was expanded to 8192 entries in 3.0. 
   >
