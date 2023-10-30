---
title: Nightly 2023-10-30
description: 
date: 2023-10-30T02:59:44Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-30/nightly-2023-10-30-linux.tar.gz
    name: nightly-2023-10-30-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-30/nightly-2023-10-30-mac.dmg
    name: nightly-2023-10-30-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-30/nightly-2023-10-30-windows-x64.zip
    name: nightly-2023-10-30-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-10-30/nightly-2023-10-30-windows-x86.zip
    name: nightly-2023-10-30-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 127118158
tag_name: nightly-2023-10-30
tags:
  - releases
---



# Bug Fixes

- various issues with the default display size for windowed mode [`20f6fa908`](https://github.com/ZQuestClassic/ZQuestClassic/commit/20f6fa908d33611c8573a6c1b4bbe4e0808d083f)
   &nbsp;
   >Instead of using the monitor scale / DPI to multiply the size we set the window to, it now looks at the monitor resolution and uses the largest integer multiple of the base resolution (256x240 for zplayer, 456x342 for zeditor and zlauncher). This always takes into account the scaling of the OS (the monitor width/height changes when you modify that). If a window size is saved from a previous run, it will use that instead -- unless it won't fit, then it goes back to getting the largest resolution for the given monitor. More details:  
   >
   >- Completely change how the initial display is sized for windowed mode.
   >  Instead of using the monitor DPI to scale up a base resolution,
   >  default to as large a resolution as possible while maintaining an
   >  integer scale. This particular commit retains the previous behavior
   >  for Windows, but the next one will move Windows to the new behavior
   >  (separate commits just in case a revert is necessary)
   >- Set the desired window size for zeditor before creating the display,
   >  not after.
   >- Use the base resolution in zplayer for the allegro 5 screen bitmap,
   >  instead of 2x the base resolution. Should improve rendering time a bit
   >- More reliable behavior on mac. Previously would possibly cut off top
   >  part of screen and mess up mouse events if the initial display height
   >  was bigger than the available height
   >- Set default for fullscreen option on Mac back to off. On newer M2
   >  Macs fullscreen display creation is bugged. Fine for Windowed -> then
   >  Maximize, and fine for older Macs, but for now just set the default
   >  to windowed mode to be safe
   >
- simplify display size for windows too [`a049b6ce6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a049b6ce6b8b4097faf316fb6f0ba1dece79f650)

