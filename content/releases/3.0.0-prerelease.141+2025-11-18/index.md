---
title: 3.0 Prerelease 141 2025-11-18
description: 
date: 2025-11-18T22:57:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.141%2B2025-11-18/3.0.0-prerelease.141%2B2025-11-18-mac.dmg
    name: 3.0.0-prerelease.141+2025-11-18-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.141%2B2025-11-18/3.0.0-prerelease.141%2B2025-11-18-windows-x64.zip
    name: 3.0.0-prerelease.141+2025-11-18-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.141%2B2025-11-18/3.0.0-prerelease.141%2B2025-11-18-windows-x86.zip
    name: 3.0.0-prerelease.141+2025-11-18-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 263495645
tag_name: '3.0.0-prerelease.141+2025-11-18'
channel: '3'
tags:
  - releases
---




# Features

- add SCCs for bottles and changing the portrait [`722548155`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72254815516f19c5ba54eed138f9319e3de59c45)
   &nbsp;
   >- ChangeBottle
   >- GoIfBottle
   >- Portrait
   >
- 'Map Subscreens' [`753a530ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/753a530fff8ced0f096e771ed255ef6eb419a243)
   &nbsp;
   >If a Map Subscreen is assigned to a dmap, it will replace the map button map for that dmap. 
   >
- qr for map button closing the active subscreen [`2eb04c2ad`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2eb04c2ad8882a250c15b89d13e00965e0465a9f)
- per-subscreen-page configurable buttons to change pages [`2cee82f22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cee82f22befd64502aeccdd7fd40a4cbfb9273b)
   &nbsp;
   >Gives better control over how pages are cycled through. 
   >
- DMap 'Floor' value, floor conditional for subscreen widgets [`0c95310f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c95310f710347fe5e44b63da96126818f440974)
   &nbsp;
   >DMaps now have a 'Floor' value (0-255). Subscreen widgets can have a list of floors set as a conditional, only appearing if the current floor is on the list. 
   >
- Counter/ButtonCounter subscreen widgets can show max value / fraction of max [`67f34833f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67f34833f9c046a79637d00695a8b664286792d6)
- more subscreen widget conditionals [`530b991d5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/530b991d5d1a2c70f44e311f7630ecb98219f5cf)
- 'Visited' screen state no longer cares about dmap view map flag [`f4472416e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f4472416e1ece4a5e5c3f65a241dfae1c6cfbf80)
   &nbsp;
   >Compat rule for old behavior 
   >
- subscreen page transition mode for "current screen" [`ac05d4e28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac05d4e285dbe3930ad208bc4c076f9aca2370df)
   &nbsp;
   >Used on it's own, can create visual effects of transitioning to a copy of the current page. Used with 'Swap Map Subscreen', can go to whatever page the other subscreen type was previously on. 
   >

### Editor

- Subscreen wizard for 'Tile Map Grid' [`379598106`](https://github.com/ZQuestClassic/ZQuestClassic/commit/379598106e65b152b85a97a55285b2251bf0b7ad)
   &nbsp;
   >Places a set of Tile Block widgets, designed to help make custom Maps. The different Tile Blocks can have different conditionals, so that some appear when you have the dungeon map, and others appear only when you've visited the appropriate screens. 
   >

### ZScript Standard Library (std.zh)

- add a few functions [`95049068d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95049068db02f0f952b5977f346ee868ee5562a3)
   &nbsp;
   >GetLayerComboE, for green effect square checking DrainedCounter, for checking a counter's current value accounting for DCounter InputToDir/PressToDir, to get a direction based on held/pressed inputs DirToInput/DirToPress, to set inputs based on a direction 
   >

# Bug Fixes

- also fix ffc draws on layer -1 in editor [`b55c04588`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b55c04588af77fc743d754a250adbde566808866)
- missing 8 pixels in active subscreen [`0daddbc1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0daddbc1c4159379fbd187c02df9d628237c842b)
   &nbsp;
   >compat qr for old behavior 
   >

### Player

- stop accidentally setting color_map when skipping primitive drawing [`6f6bbaadc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f6bbaadc2ab090e50678a5185e57e9f60bb97a7)
- draw transparency correctly during death [`e3ca3d9c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3ca3d9c71431d40a2f1a53ef25cd9fce2a83c8e)
   &nbsp;
   >During the death animation, the first frame of the redshift did not correctly update the transparency table, so transparent colors appeared darker than they should. 
   >

### Editor

- quest report `Save` button not working [`d5a68c0bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5a68c0bdc92ce8efcc9ae2e9b00f5cc47b1a968)
- holding 'shift' after already starting to drag an ffc/warpsquare/etc not changing to more granular control [`50678480c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50678480ce7b8f2050d1da8310fbe4499233b545)
- enemy defense list missing 'Switch w/ Player' [`25e73ab2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25e73ab2d438ec7c34cb7ab0f4cad7be427b8462)
- new drawing order qr editor issues re: ffcs and background color [`f7198ce58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7198ce582623167af92e00193ee6b2c24a9a752)
   &nbsp;
   >Negative layer ffcs now draw correctly, and can be interacted with while editing layer 0. The background color will properly clear to color 0, rather than showing the UI color. 
   >

### ZScript

- fix bitmap->Spline default opacity [`e3ffdb67f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e3ffdb67f0510abf2af0fb44fd073127e6dd19d9)

# Tests

- update snapshots [`39bf8fde6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39bf8fde60d6d97617f36cb16437fa96a3906833)

# Misc.

- add gear + trash button icons [`4dec18dba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4dec18dbafd8344068580a5ef878cfd0232c89d7)
