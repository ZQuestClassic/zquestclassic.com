---
title: 3.0 Prerelease 157 2026-01-20
description: 
date: 2026-01-20T01:12:57Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.157%2B2026-01-20/3.0.0-prerelease.157%2B2026-01-20-linux.tar.gz
    name: 3.0.0-prerelease.157+2026-01-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.157%2B2026-01-20/3.0.0-prerelease.157%2B2026-01-20-mac.dmg
    name: 3.0.0-prerelease.157+2026-01-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.157%2B2026-01-20/3.0.0-prerelease.157%2B2026-01-20-windows-x64.zip
    name: 3.0.0-prerelease.157+2026-01-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.157%2B2026-01-20/3.0.0-prerelease.157%2B2026-01-20-windows-x86.zip
    name: 3.0.0-prerelease.157+2026-01-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 278170629
tag_name: '3.0.0-prerelease.157+2026-01-20'
channel: '3'
tags:
  - releases
---


# Features

- New music system [`25814a1e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/25814a1e7fc962755b0321f4061e2be406031899)
   &nbsp;
   >Combine enhanced music and MIDI into a single object, such that the enhanced music will be played if possible, falling back to the MIDI if the enhanced is blank or fails to load. Replaces enhanced music on DMaps, and MIDIs on DMaps, Screens, and SaveMenus. Adds Combo Trigger and SCC access to play music from these new objects, and similar access to change the MusicRefresh value (modifying when the engine will change the music back on you).  
   >
   >Overall, this should allow much better control of music, and much easier use of enhanced music. Common scripts like "Boss Music" can now be accomplished with a couple combos with the right triggers set up. 
   >
- remove combo 'attribytes' and 'attrishorts', expand 'attributes' [`88ca703ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88ca703ab061b564c996a26a4ac99e564b7fb858)
   &nbsp;
   >attribytes 0-7 are now attributes 8-15 attrishorts 0-7 are now attributes 16-23 attributes 0-3 are still 0-3, 4-7 are new. This will allow larger / negative / including-decimal-part values in some cases that would not allow them before. 
   >
- increase max MIDIs to 512 [`b48e524bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b48e524bfdfc8b42e7b2d72a0360b42630c258c3)
   &nbsp;
   >Also increased MIDI title max length 
   >

# Bug Fixes

### Player

- Combo triggers killing bombs explodes them instead of deleting them [`055eb40f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/055eb40f5ce92c4a7ff9f87fc270eabeaa4e7867)
- 'copycat' trigger sometimes triggering the same combo again instantly [`7845e3dc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7845e3dc991cdaa22dfc689090aa12b6fa3381b8)
- regions not respecting MusicRefresh values [`0098785f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0098785f2ea2d8117b6f2efad7a8e7fbc965d7c8)
- save combos using the wrong attribyte for magic restore percentage [`b206711b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b206711b434bad50d1d48555e1bfdaf03ddb88e4)
- liquid combo passive damage logic [`82d06203d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82d06203d9d5bd2414c4a051bf1d1194b4ff00dc)
   &nbsp;
   >If the required itemclass was set to 0, but the required level was set >0, would wrongly still require the item (when item class 0 should be `(None)` for this combo) Also, the hit sound was sometimes being ignored, and damage events were not being emitted. 
   >
- handle older replays in replay_get_zc_version_created [`39098a4a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/39098a4a1dca13bf5d7dd467d72016a50975c73d)
- add back-compat for 2.55.12 replay_compat_hookshot_snap_player_bug [`e54019658`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e540196585d72d534a4bb831fa456b03f342251e)

### Editor

- trigger summary not showing cset correctly [`7ded36054`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ded360545319730314d4d5becad3e961f38f1a6)

### ZScript

- print newline after TraceToBase [`d8c28ccbb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8c28ccbb07a6227d55f38596d8b77416972ba01)
   &nbsp;
   >Regressed recently in 14287ea262. 
   >
- prevent var declaration having wrong flags in ASTDataDecl [`8ec6c7c39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8ec6c7c39922b3f8f348d893b697783776ff9f4d)
- prevent potential crash from reading config in x64 jit [`7d747b096`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d747b096c439ca6655d8e19be7f209798a7e0c5)
- prevent premature "out of storage" of script objects [`3abcf78aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3abcf78aac236f42f765ac3a71c2925351958baa)
- only retain objects if untyped array is created as untyped [`33833d475`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33833d475610bd3472b7243f750813e765f7b1d9)

# Build

- fix local build on my mac [`ca33b9b4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca33b9b4b06d9f7bb5a94b3b8aa6d02e5c4a4a8c)

# Chores

- update replay_uploads_known_good_replays.json [`b7fa6c916`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b7fa6c9163d9bf56526099b5f9f07dbe8371636c)

# Refactors

- scrollpane whitespace changes [`a2373c9df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2373c9df58ab71b1bc680328438fb7796cb2a2a)

### Player

- move some replay compat checks to separate file [`3404f3f32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3404f3f32c8ffc58888a47941460a51b22f203ad)

### ZScript

- add TypeArgument for type ids [`53debde2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53debde2eeb59abd2ce647f231f95f46d8e79b35)
- remove internal varargs [`5706ae223`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5706ae2233ffcb214247ae81b2966aefd3cf7684)
   &nbsp;
   >Migrated internal bindings functions that use varargs to the newer language-defined varargs grammar. 
   >
- use std::list in optimize_code [`c5a13785b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5a13785bd4e71377c16fbc4d75d523a7871263a)
- speed up compiler Argument comparison [`040ae31b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/040ae31b8444161676fa90a3a35ee8210e36756b)
- use move semantics for Function give/takeCode [`fa55ad7c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa55ad7c409db0671609f2587d9ce16e3392d4f8)
- add addOpcode2PopArgs helper [`0f628c3a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f628c3a6c615dfa4a8eb7691573862e577e138f)
- use an inverted index for MergeLabels [`40e2579f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40e2579f70b382ea28183e234c7c6c2c09497b47)
   &nbsp;
   >This greatly speeds up the process of updating labels.  
   >
   >Also fix a potential memory / crash issue where a pointer to a deleted label might get written to. 
   >
- improve populating object freelist [`4e1399709`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e139970983cd2e2756bac088c9a49954049c489)
- remove unnecessary template type from internal functions [`d4424023f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4424023f5877eb4b5ba8db9f5841b90bfad419b)

# Misc.

- update `trigger_example.qst` [`73f5b12e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73f5b12e58e684cc1c066729639f981506524210)
   &nbsp;
   >Add 'colored keys' setup for dungeon puzzle Add 'appears/hides when near' setup, for hidden bridges and traps  
   >
   >thanks to Noire-chan for the dungeon area! 
   >
- add horizontal scrolling panes [`c9a009b60`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c9a009b60bfa74f003a1e979aad5891e67f0bc7a)
- add 2.55.12 changelog [`6020153e2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6020153e20556e077a62dfc3c0234d6defa7da2a)

### Editor

- improve combo editor [`c652f1dbf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c652f1dbf57ab874d097d4d2b90dd02e5a11232f)

### ZScript Standard Library (std.zh)

- add `std_time.zh` [`8d5bc6d1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d5bc6d1d15de654fa36bef4effe250c0080296e)
   &nbsp;
   >contains `Game->Time` related functions from the old `time.zh` 
   >

### ZScript

- Remove SRAM feature [`22a9c6734`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22a9c673414bd9c621c405c7a6f10cf2baabcac1)
   &nbsp;
   >SRAM continually has caused issues with new updates and has fallen severely behind. As it was originally implemented, it does not work well. 
   >
