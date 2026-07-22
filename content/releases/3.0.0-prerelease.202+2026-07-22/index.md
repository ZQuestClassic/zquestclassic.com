---
title: 3.0 Prerelease 202 2026-07-22
description: 
date: 2026-07-22T03:36:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.202%2B2026-07-22/3.0.0-prerelease.202%2B2026-07-22-linux.tar.gz
    name: 3.0.0-prerelease.202+2026-07-22-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.202%2B2026-07-22/3.0.0-prerelease.202%2B2026-07-22-mac.dmg
    name: 3.0.0-prerelease.202+2026-07-22-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.202%2B2026-07-22/3.0.0-prerelease.202%2B2026-07-22-windows-x64.zip
    name: 3.0.0-prerelease.202+2026-07-22-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.202%2B2026-07-22/3.0.0-prerelease.202%2B2026-07-22-windows-x86.zip
    name: 3.0.0-prerelease.202+2026-07-22-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 357849184
tag_name: '3.0.0-prerelease.202+2026-07-22'
channel: '3'
tags:
  - releases
---

# Features

### ZScript

- Add `npc::Parent` [`e5fe1c96fb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5fe1c96fbb4115b911b50ac31051d48404a32fa) [Discord](https://discord.com/channels/876899628556091432/1370814968638738526)

# Bug Fixes

- Dropdown selection off-by-one with non-default dialog font sizes [`968c660718`](https://github.com/ZQuestClassic/ZQuestClassic/commit/968c6607187b269d9f84e54bf9b71436f2bbf38f)
   &nbsp;
   >Selecting the last item of a dropdown list could revert to the previous item, and clicking or using arrow keys on a closed dropdown could silently change the selection, when the dialog font was smaller or larger than the widget expects. Most visible in the player's Control Schemes dialog, where the last control scheme in the list could not be selected. 
   >
- Dropdown list popups not closing when clicking an item [`6c6064d126`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c6064d12689bd941d15831b1fb521fe3375f62f)
   &nbsp;
   >Since 2.55 Alpha 115, clicking an item in a dropdown list popup selected it but left the popup open - only a fast double click, or Enter, would commit the choice. Worse, clicking anywhere else afterwards (such as a dialog's OK button) dismissed the popup and silently reverted the selection. This made dropdown choices appear to not stick, ex: picking a scheme in the Control Schemes dialog and clicking OK could leave the old scheme active. 
   >
- Closed dropdowns drawing extra list rows with small dialog fonts [`aa8a1d62de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa8a1d62de38aee2fd57219ff477fded444dc8a6)
   &nbsp;
   >When the dialog font was small enough for two rows of text to fit in the widget, a closed dropdown drew the next list item below the selected one, as if the list were open. A closed dropdown now always draws only the selected item. 
   >
- MIDI songs sounding detuned or wrong after other songs played [`3f3c2f629a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f3c2f629a62d2f9f0f50829c67b7fa2bae95116)
   &nbsp;
   >MIDIs can reconfigure durable synth state - most notably pitch bend range, but also channel tuning, instrument banks, and effect levels. The MIDI player never reset this state when starting a new song (the "reset all controllers" message it sent is defined by the MIDI spec to not cover it), so one song's setup corrupted every song played after it until the program was restarted. Most audibly, pitch bends became wildly wrong - bending an octave instead of a whole step.  
   >
   >Also, seeking - used when a song has a custom start position, and every time a song loops back to its loop point - silently dropped all such controller messages in the skipped region, so affected songs sounded wrong even when played first. These are now restored after every seek. 
   >

### Player

- Fade-to-black closing wipes no longer flash the screen at the end [`32ede6302c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32ede6302c07f16704b3c6b34c9b46272015a85b)
   &nbsp;
   >The last frame of a fade-to-black closing wipe restored the palette, making the whole screen visible for a moment. Doing a closing wipe followed by an opening wipe (like `Screen->ClosingWipe(WIPE_FADEBLACK)` then `Screen->OpeningWipe(WIPE_FADEBLACK)`) now fades out, holds black, and fades back in as expected. 
   >
- Font scale option in ZPlayer Options dialog never saving [`0d12c59093`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0d12c590938008aa44fe9e6353e4b71dd11b15d9)
   &nbsp;
   >Setting a font's Scale in the ZPlayer Options dialog had no effect: it reverted to 1 on hitting OK. The font choice itself saved fine; only the scale was lost. Broken since the dialog was added in 2.55.0. 
   >

### ZScript

- Assignment operators no longer run LHS side-effects twice [`e87ce24c04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e87ce24c04749e1982ab330a35e15de2bc19e91b)
   &nbsp;
   >`arr[f()] += 5` and `getObj()->X += 5` called f()/getObj() twice: once to read the current value and once again to write the result. All compound assignment operators (`+=`, `-=`, ..., `?:=`) and `++`/`--` now evaluate the array pointer, object pointer, and index of the left-hand side exactly once. 
   >

# Tests

- Fix gfx hash mismatch after dismissing the replay-takeover alert [`69b591a95a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69b591a95afcfcb366cb976c000d0519d81bf153)
   &nbsp;
   >When replaying headful (--show) and pressing a key, dismissing the "take back control?" alert caused a spurious gfx failure: exit_sys_pal only schedules the palette swap for the next render, but the frame hash converts the 8-bit framebuf through the currently applied palette, so that frame hashed with the system palette instead of the game palette. Now the palette is applied immediately after the dialog closes.  
   >
   >Regressed in [bd2cf5c9be](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd2cf5c9be). 
   >
- Capture useful snapshots when a replay fails on a static screen [`7c5855b927`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c5855b92749a54ce85707aa286e2ebddea60b08)
   &nbsp;
   >When a replay's screen froze on a wrong-but-unchanging image (e.g. stuck on black while the baseline shows a cave), the gfx failure produced almost no artifacts: failure segments only opened when our own frame hash changed, and snapshots within a segment were only saved on our own hash changes - so a static screen saved zero "unexpected" snapshots and recorded no segments, leaving the compare report with a single unpaired frame and no baseline to compare against.  
   >
   >Now a gfx change on either side (ours or the one recorded in the replay) opens/closes failure segments, and snapshots also save on frames where the recorded baseline changed, plus always on a segment's first frame. The compare report then shows the wrong screen aligned frame-by-frame against the baseline. Identical frames dedupe by content hash in the report, so the extra snapshots are cheap. 
   >
