---
title: 3.0 Prerelease 220 2026-09-09
description: 
date: 2026-09-10T01:02:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.220%2B2026-09-09/3.0.0-prerelease.220%2B2026-09-09-linux.tar.gz
    name: 3.0.0-prerelease.220+2026-09-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.220%2B2026-09-09/3.0.0-prerelease.220%2B2026-09-09-mac-universal.dmg
    name: 3.0.0-prerelease.220+2026-09-09-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.220%2B2026-09-09/3.0.0-prerelease.220%2B2026-09-09-windows-x64.zip
    name: 3.0.0-prerelease.220+2026-09-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.220%2B2026-09-09/3.0.0-prerelease.220%2B2026-09-09-windows-x86.zip
    name: 3.0.0-prerelease.220+2026-09-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 385969754
tag_name: '3.0.0-prerelease.220+2026-09-09'
channel: '3'
tags:
  - releases
---

# Features

### Editor

- Tooltips for widgets of the declarative GUI [`6b117c6aea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b117c6aea1334f496854bd5ab18d1494566e8c1)
   &nbsp;
   >No widget sets one yet; the quest browser is the first user.  
   >
   >GUI widgets gain a `tooltip` builder prop (Widget::setTooltip). The shared proc wrapper installs it on MSG_GOTMOUSE and removes it on MSG_LOSTMOUSE/MSG_END, and also on MSG_CHAR/MSG_XCHAR so that typing dismisses it rather than leaving it over the field being edited, via gui_tooltip_show/hide, which the editor implements on top of the existing ttip_* system with one shared id; the player and launcher link no-op stubs like they do for clear_tooltip. The tooltip sits just above the widget (below it when there's no room) and skips the highlight box, since widgets already look hoverable. DialogRunner::findWidget maps a DIALOG back to its widget using the same marker walk as new_gui_event. 
   >
- Fuzzy matching in the quest browser's filter [`d33069f0a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d33069f0a26c193d9491354b2b38fb9466301212)
   &nbsp;
   >The filter used to require an exact substring. Now the typed letters only need to appear in order in the title, author, or filename, and the best matches sort first while a filter is active (the sort mode breaks ties). "lttz" finds link_to_the_zelda.qst. 
   >

# Bug Fixes

- Folder pickers had to be cancelled or confirmed twice [`1358e5cf7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1358e5cf7f91247bccc59c128beb3dc171191143)
   &nbsp;
   >With native file dialogs turned off, picking a folder (ex: the player's Quest File Directory setting, the launcher's save folder) showed the folder picker twice: Cancel reopened it, and a chosen folder had to be chosen again. The prompt called the picker a second time instead of checking the first call's result.  
   >
   >The file selector dialog was unaffected.  
   >
   >Regressed in 3.0.0-prerelease.2+2024-07-24 ([e418d71242](https://github.com/ZQuestClassic/ZQuestClassic/commit/e418d71242)). 
   >

### Editor

- Quest browser scans no longer corrupt the open quest's layers [`b14a687097`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b14a687097d1afcc6a4c1517b4155e802c633208)
   &nbsp;
   >Reopening the quest browser with a quest loaded could show "Invalid layers detected" after closing it, and swap the open quest's rules for another quest's: scanning a quest's metadata for the listing leaked that quest's map count and quest rules into the editor.  
   >
   >Bug introduced when the quest browser was added in 3.0.0-prerelease.213+2026-08-20 ([32b750fde5](https://github.com/ZQuestClassic/ZQuestClassic/commit/32b750fde5)). 
   >
- `Quest > Defaults` could not find any section [`a0525b9af5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0525b9af5afdd9a45aab0d209ea19b22f78656b)
   &nbsp;
   >Resetting tiles, combos, palettes, items, or weapons to the template's defaults failed with "Can't find section!". The rules section's header gained a field in front of its size, and the section finder still read the old layout, so it lost its place at the rules section and never reached anything after it.  
   >
   >Regressed in 2.55-alpha-114 ([9caad33632](https://github.com/ZQuestClassic/ZQuestClassic/commit/9caad33632)). 
   >
- Resetting to defaults leaked the template's quest rules [`d399c4dddb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d399c4dddb5826b7e3f3d8294ad5453cde84b074)
   &nbsp;
   >`Quest > Defaults` and importing a graphics pack read the template quest's header and left its quest rules, format version, and midi flags in place of the open quest's.  
   >
   >Bug present since at least 2.53 ([429df347a1](https://github.com/ZQuestClassic/ZQuestClassic/commit/429df347a1), the initial commit). 
   >

# Refactors

- Load legacy-encoded quests faster [`754ebd414d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/754ebd414d5565ca5fecb3367682fe34adb2cdfc)
   &nbsp;
   >Loading legacy quests is now 1.7x faster for small ones and up to 3.4x for 30 MB+ ones (2.5x for 2.10-era quests). Quests saved in recent versions are unaffected.  
   >
   >Quests saved before May 2023 (2.10-era quests) carry an extra encryption layer, and the only way through it was to decrypt the entire file into a temp file and read that back, before a single section could be read. These older files could use many slightly different encoding methods, and the quest loader tried each until one worked. If the first guess was wrong, the whole file was read and decrypted again with the next one.  
   >
   >Full loads now decode that layer into memory in one pass, verify the checksum before any section is parsed, and read the sections from memory; no temp file, and a wrong method is caught the same way but without a second read of the file. 
   >

### Editor

- Refine the UX of new quest browser [`0986cd15b1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0986cd15b122edf6d4f55e041ae2b5a5c04c2afe)
   &nbsp;
   >Various improvements to the new quest browser dialog:  
   >
   >- "Open Quest..." and "Load Quest" were synonyms, so users looking for a
   >  file picker could not tell which one to press. Now only one button
   >  is called Open: it opens the selected quest, is the dialog's default
   >  (Enter), sits at the bottom-right, and is disabled while nothing is
   >  selected.
   >- The file picker is "Browse for File...", grouped with New Quest on the
   >  left of the top row, which otherwise holds only the filter and sort
   >  controls.
   >- Scan Folder moves to the bottom-left of the Open row as a secondary
   >  action, since it manages the list rather than opening anything.
   >- The auto-open checkbox moves down into the footer, away from the Open
   >  button, so it no longer reads as a modifier of that click.
   >- The update notice leaves the footer's middle too: when a newer version
   >  is available, "Update available" appears to the right of the version
   >  link, with a tooltip naming the version, and opens its release page.
   >- Every control in the browser now has a hover tooltip explaining what
   >  it does, the list is a little wider, and the rows above and below it
   >  line up with its edges.
   >
   >
   >&nbsp;
   >
   >Additionally, the File menu gains "Open File...", which goes straight to the OS file picker without showing the browser. 
   >
