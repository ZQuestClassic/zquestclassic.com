---
title: 3.0 Prerelease 218 2026-09-07
description: 
date: 2026-09-08T01:45:52Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.218%2B2026-09-07/3.0.0-prerelease.218%2B2026-09-07-linux.tar.gz
    name: 3.0.0-prerelease.218+2026-09-07-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.218%2B2026-09-07/3.0.0-prerelease.218%2B2026-09-07-mac-universal.dmg
    name: 3.0.0-prerelease.218+2026-09-07-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.218%2B2026-09-07/3.0.0-prerelease.218%2B2026-09-07-windows-x64.zip
    name: 3.0.0-prerelease.218+2026-09-07-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.218%2B2026-09-07/3.0.0-prerelease.218%2B2026-09-07-windows-x86.zip
    name: 3.0.0-prerelease.218+2026-09-07-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 384423421
tag_name: '3.0.0-prerelease.218+2026-09-07'
channel: '3'
tags:
  - releases
---

# Bug Fixes

- Palette cycles longer than 8 frames not continuing into the next level palette [`44a368a361`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44a368a361fda945c805d2522f98afaa0763860b) [Discord](https://discord.com/channels/876899628556091432/1400979610572820520)
   &nbsp;
   >A palette cycle can be up to 15 frames long, but a level palette only has 8 CSets dedicated to cycling. In 1.90 through 2.53, frames past the eighth read from the start of the next level palette, and some quests rely on that. The extra CSets added to level palettes in 2.55 landed in that spot, so those frames took their colors from the current level's replacement CSets for 1, 5, 7 and 8 instead.  
   >
   >Both the player and the editor's preview now skip past those CSets, matching the old behavior.  
   >
   >Regressed in 2.55-alpha-101 ([8b0613ff59](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b0613ff59)). 
   >
- Some NSF files using FDS expansion audio playing as silence [`4bc8870d30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4bc8870d300df47e0f189ff8385d91f829c11456)
   &nbsp;
   >NSFs using the Famicom Disk System expansion chip would play only some tracks, or nothing at all, because the FDS bankswitching scheme and its RAM area were not emulated. This bug has existed since NSF playback was added. 
   >

### Player

- Lens of truth blacking out the screen when magic runs out mid-use [`879c15b807`](https://github.com/ZQuestClassic/ZQuestClassic/commit/879c15b807f8064a34024b391b8c480fd6277b0d)
   &nbsp;
   >Once the lens's magic cost could no longer be paid, the lens overlay looked up the lens item with a magic check, found none, and drew its cut-out circle with a radius of 0 - blacking out the whole screen for the remaining frames of the effect. It now uses the lens that is actually active.  
   >
   >Bug has existed since the lens of truth's magic cost was added (2.50-era). 
   >
- Wrapping FFCs hitting changers across the whole screen [`6ace403f8e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6ace403f8eed508ac01975fed3e44723bb898230) [Discord](https://discord.com/channels/876899628556091432/1392570971805716592)
   &nbsp;
   >On the frame after an FFC wrapped around the screen, its changer check ran along the line from where it left the screen to where it re-entered, so it hit - and jumped to - the lowest-numbered changer anywhere along that line, usually the one it had just left. FFCs on such screens looped between the wrong changers in-game while the editor preview looked right. The check now starts from where the FFC re-entered the screen, in both the player and the editor preview.  
   >
   >Old quests keep the old behavior via the new compat rule "Wrapping FFCs check for changers across the whole screen".  
   >
   >Bug has existed since FFC wrap-around was added (2.50-era). 
   >
- Dummy items blocking pickup of a real item at the same spot [`915e870d28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/915e870d28b6ba0668389f4f28a55472f28d55d2)
   &nbsp;
   >Only one item is checked for pickup each frame. Dummy items (such as leftover items in a shop after buying one or the dust pile Ganon leaves behind) counted as that one item whenever it came earlier in the item list. But since a dummy item can never be picked up, a real item at the same spot could not be collected while the player was touching the dummy.  
   >
   >Dummy items are now skipped when choosing the item to check. 
   >
- Weapons that bypass 'block' defenses also bypassing enemy shields [`f4abc9b281`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f4abc9b281f48b702fcd5a968363ec3ee59b0bdd)
   &nbsp;
   >A weapon whose Unblockable flags bypass the 'block' defense types was also let straight through an enemy's shield flags, as if it had the 'shields' unblockable flag as well. The shield check now only looks at the shield flag.  
   >
   >Bug introduced when weapon->Unblockable was added in 2.55-alpha-97 ([fb5a1846262](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb5a1846262)). 
   >
- Slopes not working when a switch block combo changes into one [`91ed07de98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/91ed07de98a762d8e53b6f6280fa66a64b8168d9) [Discord](https://discord.com/channels/876899628556091432/1524503663186542864)
   &nbsp;
   >Switch and Switch Block combos changed their combo directly when their switch state toggled (or when a switch block was stood on or triggered), skipping the post-processing every other combo change gets. A slope that appeared this way did nothing until the screen was reloaded, and spinning tiles or statue shooters appearing this way would not wake up either.  
   >
   >Bug introduced when slopes were overhauled in 2.55-alpha-112 ([b5de618aa2](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5de618aa2)). 
   >
- Can't turn while charging the quake hammer in 2.50.0/2.50.1 quests [`73a90c0738`](https://github.com/ZQuestClassic/ZQuestClassic/commit/73a90c07382401103823ee9a9b7b8f6c8980b508)
   &nbsp;
   >2.50.2 stopped the player from changing direction while charging the
   >quake hammer, but quests made before then expected to be able to
   >(Panoply of Calatia's item text even says so).
   >
   >
   >&nbsp;
   >
   >Those quests get the old behavior back through the new compat rule 'Can Turn While Charging Quake Hammer'.  
   >
   >Regressed in 2.50.2. 
   >
- Solid FFCs on non-origin region screens shoving the hero on entry [`ebecd87f88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ebecd87f88c2779ac86df5989b42fb2a78aff239)
   &nbsp;
   >When a region loads, each FFC on a screen other than the origin has that screen's world offset added to its position, but the previous position used by solid collision kept the screen-local value. On the first frame the FFC looked like it had just moved by a whole screen, and anything in that sweep (the hero, enemies) was pushed along with it. Entering such a region could put the hero far from the warp square.  
   >
   >Bug introduced when regions were added in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- Ladder letting the player cross two liquid tiles in a row [`4985ce2fbf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4985ce2fbfb9145e18c9ff3c23ec5241e210dba9)
   &nbsp;
   >With 'Newer Player Movement', walking on a ladder towards a second water tile sometimes did not drown the player, who then walked across the whole thing. The player's water check only counted them as fully in water when their bottom edge was inside the tile, and with subpixel steps the frame where that is true after the ladder ends could be skipped entirely, depending on the player's subpixel position.  
   >
   >The bottom edge of the water check is now inset by one pixel, like its top edge already was (and like pitfalls have been since 2.55.11), so the check can no longer step over that spot. This applies to all quests, and shifts when swimming and drowning start by up to a pixel when entering or leaving water vertically.  
   >
   >Bug introduced when 'Newer Player Movement' was added in 2.55-alpha-51 ([91b931b86f](https://github.com/ZQuestClassic/ZQuestClassic/commit/91b931b86f)). 
   >

### Editor

- All enemies vulnerable to whistle when resaving pre-2.50 quests [`148d8e108d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/148d8e108d6a3e3005bbbfa1d3675e0a1f805036) [Discord](https://discord.com/channels/876899628556091432/1217745472530284605)
   &nbsp;
   >Quests from 1.90, 1.92 and 2.10 have no per-enemy data saved, so their enemies come entirely from the built-in defaults. That path skipped the rule that marks every enemy other than Digdoggers as ignoring the whistle in quests that predate the whistle defence. So every enemy in such a quest showed a 'Normal' whistle defence in the enemy editor and, once the quest was saved in a newer editor, would take whistle damage in-game if the whistle item was given damage.  
   >
   >Quests already saved in 2.50 were unaffected, since their enemies are read from the file and go through the version upgrade code.  
   >
   >Bug introduced when whistle defence was added in 2.55-alpha-1 ([5d32e96f6c](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d32e96f6c)). 
   >
- Palette editor showing the wrong colors while palette cycling is on [`e0330cc19e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e0330cc19e641917185c587a3eaec343cb4eae29) [Discord](https://discord.com/channels/876899628556091432/1495954886427148529)
   &nbsp;
   >With palette cycling enabled on the current screen, the editor kept cycling that screen's palette while a palette was being edited, writing the screen's colors over the ones on display whenever a cycle stepped - most visibly while holding the mouse on a color, or right after copying one. Palette cycling is now paused while the palette editor is open.  
   >
   >Bug has existed since palette cycling was added to the editor (2.50-era). 
   >

### ZScript

- `bitmap->Blit` crashing when the source rect goes out of bounds [`7a2d7c6273`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a2d7c62736b831ef124ba55a9498baae0fb5dc9)
   &nbsp;
   >A source rect that started above or to the left of the source bitmap read out of bounds and crashed the player (a rect past the right or bottom edge was already handled). A negative source width or height crashed as well. `bitmap->Blit` and `bitmap->BlitTo` now only read the in-bounds part of the source rect, keeping its position within the rect so the result is not shifted or stretched, and draw nothing for an empty rect.  
   >
   >Bug introduced when bitmap commands were added in 2.55 Alpha 1 ([d4ac10bda2](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4ac10bda2)). 
   >
- Generic scripts not seeing LA_SCROLLING at most timings while scrolling [`92bb7dc379`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92bb7dc37960d1e008e4e9b9cbf67f1fee51e2e6)
   &nbsp;
   >While the screen scrolls, generic scripts only saw `Hero->Action` set to `LA_SCROLLING` when run from the scrolling script timings (`Waitdraw` and the one before FFCs). At every other timing during the scroll the action was whatever the player was doing before the scroll began, so such scripts could not tell they were scrolling.  
   >
   >Every generic script timing run during a scroll now reports LA_SCROLLING.  
   >
   >Bug introduced when generic scripts got passive timings in 2.55-alpha-107 ([e83fde07aa](https://github.com/ZQuestClassic/ZQuestClassic/commit/e83fde07aa)). 
   >

# Documentation

### ZScript

- Add many things only in old docs; delete old docs [`f482178c8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f482178c8a6bff2edbc41644b674dcd8c6d5c6ae)
- Fix some errors in recent changes [`59328c0ac0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/59328c0ac0d21bf2b9e01bc4adc02d698ac868b8)
- Various edits to object_memory_management.rst [`a7025f172f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7025f172f48959bedf388bfd8f53191241da2bc)

# Chores

- Update replay_uploads_known_good_replays.json [`2514f52903`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2514f529038bf35fd18ee46b9c04c2c38688809f)

# Tests

- Update ZScript database, add import heuristics [`23c51da868`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23c51da868f194764ec3b2b876a81a60080d6505)
   &nbsp;
   >Handle renamed database folders (00414, 00341, 00531), and teach the test to pull in headers other scripts depend on: NPCAnim, PlayerAnim, MenuInputHandler, StringWrapping, TempLinkState, ScrollingDraws, and the original scripts behind the 00628 converted global script pack.  
   >
   >665/844 -> 691/839 passing. 
   >
- Harden ZScript database test [`5b09718920`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b097189207c22536cb2eef6280885ed31a5235e)
   &nbsp;
   >- Assert that ignored folders and heuristically-imported database paths
   >  exist, so a renamed database folder fails loudly instead of silently
   >  un-ignoring scripts or misattributing a missing include to the
   >  script.
   >- Decode compiler output as UTF-8 with replacement. ZScript echoes raw
   >  source bytes in error context and a few database scripts are not
   >  UTF-8, which would crash the whole test on a strict decode.
   >- Add each script's own folder to the include paths, since ZScript never
   >  resolves includes relative to the including file. Fixes 00170.
   >- Resolve root_dir (ZScript canonicalizes paths in its output), handle
   >  os.cpu_count() returning None, and drop dead code after the failure
   >  loop.
   >
   >
   >&nbsp;
   >
   >691/839 -> 692/839 passing. 
   >
- Don't block the replay compare report on fetching upstream tags [`50ee1f5cea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/50ee1f5cea0d4c8dbeb518a2e8608bb9e5f718f6)
   &nbsp;
   >The compare report prompt fetched upstream before listing baseline releases, which added a few seconds every time and hung when offline. Now the fetch is skipped if one happened within the last six hours, is capped with a timeout so being offline can't stall the prompt, and runs in a background thread while the user answers the earlier prompts. 
   >
