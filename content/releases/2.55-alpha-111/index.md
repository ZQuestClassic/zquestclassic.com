---
title: 2.55 Alpha 111
description: 
date: 2022-10-23T09:17:14Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-111/2.55-alpha-111-mac.dmg
    name: 2.55-alpha-111-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-111/2.55-alpha-111-windows-x64.zip
    name: 2.55-alpha-111-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-111/2.55-alpha-111-windows-x86.zip
    name: 2.55-alpha-111-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 80725268
tag_name: '2.55-alpha-111'
channel: '2.55'
tags:
  - releases
---

**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/2.55-alpha-110...2.55-alpha-111

- Fixed a serious bug released in Alpha 110 where item positions would get reset for cave warps. If you saved in that version, you'll need to re-set those item positions. Always remember to backup quests when upgrading versions!
- For the longest time, input would be unpredictably ignored or delayed a few frames for button press checks. No more! If you have super sensitive timing, you may notice the game has become more responsive to your button mashing.
- More, see the changelog!

<details>
  <summary>Detailed Changelog</summary>

```
// Alpha 111

Fix shadows not drawing on enemies that do not 'Obey Gravity'.
	( EmilyV, 23rd Oct, 2022 )

Add 'GetEquipmentX()'/'GetEquipmentY()' to std_functions.zh
Update 'UsingItem()' in 'std_functions.zh' to check x/y buttons
	( EmilyV, 22nd Oct, 2022 )

Change the 'Global State' flag on switches/switch blocks
	to 'Flags[10]' instead of 'Flags[9]', because
	it was overlapping with another flag...
	(this might break quests that were using this, sorry!)
	( EmilyV, 19th Oct, 2022 )

Fix scroll warp color change timing bug
	( EmilyV, 19th Oct, 2022 )

Fix duplicate cursor displaying
	( connorjclark, 19th Oct, 2022 )

Fix some buttons not working properly
Fix lifting an item with a lift glove allowing you to swim
Fix: Now when drowning / falling in a pit with a combo lifted,
	you will drop the combo.
	( EmilyV, 18th Oct, 2022 )

Fix item position not saving properly on screen 0x80+
	( EmilyV, 17th Oct, 2022 )

Allegro mouse fixes
	( connorjclark, 16th Oct, 2022 )

Fix negative item pickup amounts
Fix the mouse clipping through some dialog text
	( EmilyV, 15th Oct, 2022 )

replay fixes
	( connorjclark, 14th-22nd Oct, 2022 )

Fix '^' characters in control settings dialog
	( EmilyV, 14th Oct, 2022 )

Add 'Unsafe Ground' flag, for new pit/drowning respawn
	to mark positions as 'not safe to respawn on'.
	( EmilyV, 13th Oct, 2022 )

```
</details>
