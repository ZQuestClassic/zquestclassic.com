---
title: Security update - Please upgrade to 2.55.18 (or 3.0 prerelease 239)
description: 2.55.18 fixes security bugs in how quests, saves and music files are handled.
date: 2026-11-19T19:00:00-08:00
---

A recent audit of ZQuest Classic found a number of security bugs, and they are now fixed. In older versions, a specially crafted quest, save file or music file could harm your computer. The most serious:

- **Editor on Windows, 2.55.17 only (and 3.0 prereleases 217 to 236):** a link button in a help popup, using text supplied by the quest, could run any command when clicked. Players were not affected.
- **2.55 alphas through 2.55.17:** a quest script could delete files outside the quest's own folder.
- **All versions:** a number of memory-safety bugs in the script engine and file loaders that a skilled attacker could feasibly turn into running their own code.

**We know of no quest that uses any of these.** Every quest in our database (over 1,000, including all of PureZC) was scanned for known signs of these potential attacks, and none were found.

## What to do

- Update to **2.55.18**, or to **3.0 prerelease 239** if you use the prereleases.
- Use the software updater (in zlauncher) to keep up-to-date with the latest bug fixes (currently only supported on Windows).
- If you can't update yet, only open quests, saves and music from sources you trust. A quest is a program, so treat one from an unknown source like any other program you download.
- Versions 2.53 and earlier will not receive these fixes.

The web version runs inside the browser's sandbox and is not affected in the same way, though it has been updated too.

The full list of fixes is in the [2.55.18 changelog](https://zquestclassic.com/releases/2.55.18/).
