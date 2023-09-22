---
title: 2.55 Alpha 108
description: 
date: 2022-07-25T05:46:59Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-108/2.55-alpha-108-mac.dmg
    name: 2.55-alpha-108-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-108/2.55-alpha-108-windows-x64.zip
    name: 2.55-alpha-108-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-108/2.55-alpha-108-windows-x86.zip
    name: 2.55-alpha-108-windows-x86.zip
    channel: windows-win32
prerelease: false
id: 72722310
tag_name: 2.55-alpha-108
tags:
  - releases
---

**Full Changelog**: https://github.com/ArmageddonGames/ZQuestClassic/compare/2.55-alpha-107...2.55-alpha-108

## Highlights

* Official Mac and 64-bit builds
* Allegro 5 update - potentially better driver and midi/music support
* Windows can now be resized
* Combo Trigger major upgrades
* Show a "apply all compat quest rules" in ZQuest if applicable. 99% of the time, you should turn all of these off!
* Various performance improvements
* Fix Manhandla crash when killing multiple heads at once
* Added 32 extra states per-screen, useable by chests and lock blocks

## New ZScript features

Optional parameters
```
////////////////////////////////
//  Function Optional Params  //
////////////////////////////////

You may now have optional parameters in functions.
	[example--
	void foo(int x = 25)
	{
		Trace(x*2);
	}
	foo(); //Traces '50'
	foo(10); //Traces '20'
	--end example]

Optional parameters cannot have any non-optional parameters listed after them.
The default value for an optional parameter must be compile-time constant.
``` 

__________

```
Detailed log:
Fix decorations -2 yoffset (compat qr)
Add 'ExtraStates' to screens, usable by chests/lockblocks to have >1 per screen
Add custom item contents for chests
Add 'Bugfix' popup when loading a quest with compat rules checked
	( EmilyV, 24th July, 2022 )

Fix rounding issues
Fix scripted internal ghost-based movement functions
Fix manhandla crash
	( EmilyV, 22th July, 2022 )

More combo trigger stuff
	( EmilyV, 21st July, 2022 )

Stop 'Palette' dialog from popping up when 'Alt+F4' is used
Undercombo dialog now edits undercombo for the current layer
Fix pushblock layer behavior
Add 'itemsprite->ForceGrab' to allow scripts (and chest combos)
	to force an item to be picked up by the player.
Combo trigger SFX
	( EmilyV, 20th July, 2022 )

Fix 'Return To File Select On Death/F6' qr
More combo trigger stuff
	( EmilyV, 19th July, 2022 )

More Combo Trigger stuff
	( EmilyV, 18th July, 2022 )

Fix small mode dialog cutoff
	( EmilyV, 17th July, 2022 )

Add 'stack' type to ZScript
Fix std_zh angle issues
Begin work on new combo TriggerFlags stuff
QR for fast counter drain
Fix item scripts behaving wrongly when the 'run for multiple frames' rule is off
	( EmilyV, 16th July, 2022 )

Add 'No Damage Protection' boots flag
Fix subscreens using the wrong item IDs when multiple items of the same 'Level' are owned
	( EmilyV, 13th July, 2022 )

Add automatic crash reporting
	( connorjclark, 11th July, 2022 )

Fix warps not properly deallocating owned script objects for dmap scripts
	( EmilyV, 11th July, 2022 )

Fix subscreen editor default value of magic gauge pieces 'Show:'
	( EmilyV, 10th July, 2022 )

Keyboard sticking fixes
Exporting image palette fixes
Fix scrollpane crashes
FPS optimizations
	( connorjclark, 9th July, 2022 )

Fix FFC editor changing combo placement cset
	( EmilyV, 8th July, 2022 )

Image loading fixes
Window Resizing improvements
	( connorjclark, 8th July, 2022 )

Add '-unlinked' mode for zscript parser
	( EmilyV, 4th July, 2022 )

Rename 'OceanSFX' to 'Ambient SFX' (ZScript)
	( EmilyV, 3rd July, 2022 )

Mac (OSX) fixes
	( connorjclark, 2nd July, 2022 )

Update 'std_zh'; add 'ghostBasedMovement.zh'
	( EmilyV, 30th June, 2022 )

More Allegro5 fixes
	( connorjclark, 26th June, 2022 )

Add '*weapon->Flags[]', including [WFLAG_PICKUP_ITEMS], a flag which allows weapons
	to automatically collect items they touch, similar to how engine melee weapons do so.
Hopefully fix 'lweapon->Weapon' not working properly at all.
	( EmilyV, 26th June, 2022 )

Fix alt key shortcuts not working properly
	( connorjclark, 25th June, 2022 )

--June 25th nightly

Fix zscript compiler console closing even when warnings were thrown.
	( EmilyV, 25th June, 2022 )

Optimize ZScript internally (various small optimizations)
Fix editing the ZScript buffer causing a hardlock
Fix spawned sprite object (ex. bushes/generic combos) repeating the first
	frame at the end for one frame
	( EmilyV, 24th June, 2022 )

--June 23rd nightly

Upgrade to Allegro 5 (major backend change)
	( connorjclark, 23rd June, 2022 )

Add 'messagedata->Length', to read the length of a message string
Update std_functions 'GetMessage()':
	If the passed array is too small, it will be resized to be large enough
	Now works with strings <140 chars
	( EmilyV, 23rd June, 2022 )

Removed debug messages
	( EmilyV, 20th June, 2022 )

Fixed Hover Boots
	( Deedee, 19th June, 2022 )

Add 'optional parameters' to ZScript
	see ZScript_Additions.txt for details
	( EmilyV, 12th June, 2022 )

Fix subscreen bugs
Fix sideview swimming bugs
	( Deedee, 11th June, 2022)

```
