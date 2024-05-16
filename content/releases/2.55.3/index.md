---
title: 2.55.3
description: 
date: 2024-05-16T05:57:31Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.3/2.55.3-linux.tar.gz
    name: 2.55.3-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.3/2.55.3-mac.dmg
    name: 2.55.3-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.3/2.55.3-windows-x64.zip
    name: 2.55.3-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.3/2.55.3-windows-x86.zip
    name: 2.55.3-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 156009891
tag_name: '2.55.3'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Bug Fixes

- correct the version string for 2.55.x releases [`387e6c05c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/387e6c05c1b0daf971404d075af2f4395d38492f)
- incorrect default right string margin [`ae1c890e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae1c890e790fbfa314839169a4be3601ac9de097)

### Player

- visual text bug in sound panel [`32a169b2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32a169b2f24c22739322015c11b81d31101f970d)
- active shields interacting with light beams while inactive [`7e52830f0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7e52830f02ad0ca5f6523245a3c1a734605ff11d)
- reset playing_field_offset at beginning of scroll [`5e1f431eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e1f431eb0d5277f0774a742756ba8080c7682d9)
   &nbsp;
   >This prevents the draw offset from a quake from persisting during a scroll.  
   >
   >See https://discord.com/channels/876899628556091432/1238226802867048529 
   >

### Editor

- "Used Tiles" completely failing to calculate [`4066823d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4066823d5e5737ad548316182c8f29c9ad00d7fd)

### ZScript

- TraceS parameter not compiling correctly [`2761eb50b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2761eb50b12b0fb0a7ba371da89afc8d2fe8547e)
- handle engine subscreen in ScriptTypeToString [`150aafa9f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/150aafa9f2a6a96ccbfe4c507935bccd272d3632)
- dealloc owned objects for all combos in loadscr [`e9438011a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9438011a2db78658add4e3dfa20029e23e4a667)
   &nbsp;
   >For some reason, only the combo at position 0 had its owned objects deallocated when loading a new screen. Now they all do. 
   >

# Documentation

### Editor

- touch up attack/whimsical ring help text ('damage' -> 'power') [`9879b835f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9879b835f7dac1300124d2967000677786b28b96)

# Refactors

### Player

- rename the "ZScript Debugger" to "ZC Console" [`719738e74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/719738e7407fb6bb97fca1f7e920bd3cfafc3f45)

### ZScript

- remove ZASM debugger [`b3b79f66e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3b79f66ed668f13cf8b7fc2174c12780ae242a1)
   &nbsp;
   >This was already made inaccessible from the GUI in 1da2d02, but now it is removed entirely. Work on a real debugger will begin soon. 
   >
- tweak `Region->` and screen script internals in preparation for z3 [`e02113363`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e02113363770e5f9fcae0618d430b9d51f294451)
   &nbsp;
   >`Region->OriginScreen` is now of type `screendata`, and `Region->OriginScreenIndex` is added to return just the screen index.  
   >
   >Similar change made to `Region->GetScreenForComoboPos(int pos)`. 
   >
- use faster register allocation in jit [`c6da3fe63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6da3fe63bdfdb2883f8bf69adc3c9820813b3a7)
   &nbsp;
   >asmjit's register allocation was using a bin-packing algorithm. This turns out to be very slow for the assembly that our jit compiler emits, since the vast majority of variables exist for only a single basic block. Instead of bin-packing, the much faster and simpler linear scan register allocation algorithm is now used.  
   >
   >For a very large 200k-instruction script, compilation went from 19.5s to 2.8s (a 85% decrease).  
   >
   >With this improvement, the 20k-instruction limit for jit has been removed. One example of the impact of this is that `yuurand.zplay`, which the jit compiler was previously mostly disabled for since most of its scripts are huge, now has all its scripts compiled. This increased the average FPS for `yuurand.zplay` from ~320 to ~2000, while still reducing the total time spent compiling.  
   >
   >Theoretically this change in register allocation may produce slower runtime code, but there was no drop in FPS realized in the `maths.zs` stress test. 
   >

# Tests

- add eiyuu.zplay [`b119635bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b119635bb88cbcf321bcc3a315e3e6309f18caba)
