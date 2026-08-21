---
title: 3.0 Prerelease 213 2026-08-20
description: 
date: 2026-08-21T04:09:37Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.213%2B2026-08-20/3.0.0-prerelease.213%2B2026-08-20-linux.tar.gz
    name: 3.0.0-prerelease.213+2026-08-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.213%2B2026-08-20/3.0.0-prerelease.213%2B2026-08-20-mac-universal.dmg
    name: 3.0.0-prerelease.213+2026-08-20-mac-universal.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.213%2B2026-08-20/3.0.0-prerelease.213%2B2026-08-20-windows-x64.zip
    name: 3.0.0-prerelease.213+2026-08-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.213%2B2026-08-20/3.0.0-prerelease.213%2B2026-08-20-windows-x86.zip
    name: 3.0.0-prerelease.213+2026-08-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 374194847
tag_name: '3.0.0-prerelease.213+2026-08-20'
channel: '3'
tags:
  - releases
---

# Features

### Editor

- Quest browser startup dialog [`32b750fde5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32b750fde5a9bfdcaefa608cf9ea556aeb038188)
   &nbsp;
   >The editor now opens with a quest browser instead of immediately creating a new quest: a listing of known quests with each quest's icon, title, author, ZC version, and last-edited date. The listing includes recent quests, everything in the quests folder, and any files or folders added with the new Open Quest / Scan Folder buttons. Quests can be filtered and sorted (recently opened, last edited, ZC version), and new quests are created via the existing tileset wizard.  
   >
   >The footer shows the current version and when an update is available.  
   >
   >`File > Open` also opens the browser instead of a file picker.  
   >
   >Automatically opening the most recent quest at startup is now off by default; the new dialog has a checkbox for it. 
   >

### ZScript

- Make stack traces for script Trace/printf opt-in [`4f47be3fdc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f47be3fdc230ebf76e0ef0a3e79b151256a9c4a)
   &nbsp;
   >Plain Trace/printf output no longer includes a stack trace in allegro.log and the console by default - only script errors always print one. Stack traces for traces can be re-enabled with the new "Log Stack Trace on Trace/printf" toggle in the Debug menu (or the `[ZScript] log_stack_trace_on_trace` config option). 
   >

# Bug Fixes

### Player

- Replay uploading ran for users who never opted in [`8940060885`](https://github.com/ZQuestClassic/ZQuestClassic/commit/89400608858aef7f8794820f7d989a33a8496a58)
   &nbsp;
   >The weekly automatic replay upload had its consent check inverted: it ran for everyone who had NOT enabled the "Upload replays" option, and never for those who had. Any .zplay files in the replays folder were uploaded without consent (replay recording is also off by default, so most installs had nothing to upload), and enabling the option silently disabled uploading.  
   >
   >All replays uploaded to date have been deleted, since consent could not be established for them.  
   >
   >Bug introduced when opt-in replay uploading was added in 3.0.0-prerelease.2+2024-07-24 ([36f5d08109](https://github.com/ZQuestClassic/ZQuestClassic/commit/36f5d08109)). 
   >

### Editor

- Partial quest file reads corrupting the open quest's version info [`53f05170e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53f05170e8fa8d53fd86351eb0788e082b5e345b)
   &nbsp;
   >Grabbing tiles from another quest file (and similar partial reads, like loading a tileset in the new quest dialog) only restored part of the current quest's internal version info afterward, leaving values read from the other file in place for the rest of the session.  
   >
   >Most partially loaded sections happened to be in the restored part, but the rest could subtly misbehave - e.g. the compile dialog reporting the other file's ZScript version, and later partial reads taking wrong compatibility branches.  
   >
   >Regressed in 2.55.10 ([b8bc72ae9b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8bc72ae9b)). 
   >

### ZScript

- Stop JIT reading stale memory for ops that read and write the same register [`0b6229b8b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b6229b8b7a917379aeda964b059c54ce9852672)
   &nbsp;
   >The JIT could sometimes generate bad code for expression-indexed array reads like `pal[cond ? 0 : x]`.  
   >
   >The JIT's liveness analysis applied an instruction's register writes while still scanning its args, so an instruction whose first arg writes the same D register another arg reads (ex: `READPODARRAYR D2 D2`) never recorded the read. The JIT's register-cache dead-drop then believed the register dead at a branch merge, skipped flushing the dirty cached value, and the compiled read used a stale value from memory - producing wrong array indices. Whether the stale value happened to be correct depended on what ran earlier.  
   >
   >Scripts hit this by reading an array with an index expression that itself contains control flow, fed directly into the subscript - a ternary (`arr[cond ? a : b]`) or a short-circuit `&&` / `||` - since those compile to branches that leave the index in D2 and merge straight into `READPODARRAYR D2 D2`. Array writes were unaffected, as was assigning the branchy expression to a local before indexing with it.  
   >
   >Both native JIT backends were affected; the wasm backend does not use the register cache.  
   >
   >Regressed in 3.0.0-prerelease.135+2025-10-08 ([68087da593](https://github.com/ZQuestClassic/ZQuestClassic/commit/68087da593)). 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`b3abd2194a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3abd2194a78b14806c72f01b636a940b9f1711c)

# Refactors

### Editor

- One guard for reading data out of other quest files [`37a31e1cd4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37a31e1cd426c7d1584306af4eb7d8fec3cbeadd)
   &nbsp;
   >Extracts the save/restore dance that partial quest loads require into ScopedPartialQuestLoad (core/qst.h), used by both the tile grabber and the quest browser. The guard swaps the tile buffer to the caller's scratch, and snapshots/restores colordata, quest_format, and DMapEditorLastMaptileUsed; loadquest already restores rules/map_count for skip-flag loads.  
   >
   >Side effect: grabbing tiles from another quest file no longer resets the DMap editor's last-used map tile (the grabber never restored it), and no longer leaves the foreign file's colordata semantics at risk if future sections are unskipped - the abandoned "cache QRS" comment blocks in load_imagebuf are superseded and removed. 
   >

### ZScript

- JIT fast path for script instance variable registers [`6a87ead34d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a87ead34d0dfd0874dec7e4ac1515b5468f9d6e)
   &nbsp;
   >Accessing a script's instance variables is now as fast as accessing global variables under the JIT - previously it was ~7x slower, going through a generic helper call instead of a direct memory access. 
   >

# Misc.

- Fix linux test builds never being found by archives.py [`677558909d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/677558909d87e9355d5664717743fd870d6d30fd)
- Keep archives.py download progress off stdout [`45e1eb94bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45e1eb94bb2b4eed50f5dcaa1bf1beb50d64adf4)
- Raise a proper error when a release has no linux package [`b2f890f25c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b2f890f25c565f6fc871e8d2884eafb1befbea04)
- Extract .tgz downloads as tarballs in archives.py [`0861b57e94`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0861b57e94a6ee708625d5c6703917752bbd238d)
- Don't pick non-windows packages when a release has one asset [`dc03b3c351`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc03b3c351076f5e879fdd198f8e9062f330743d)
- Stop archives.py from permanently caching failed lookups [`61b37e4af5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61b37e4af5e03d4ff4876fd519c1985b8eb6eae1)
- Fix potential crash comparing against an unresolved tag [`8270b8a46c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8270b8a46cb133d9715cdad3b5234176a79ae8d2)
- Fix bucket key parsing to tolerate nested paths [`247ee525a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/247ee525a1a5945c7d3b0dc3f4010d9832384528)
- Don't use a mutable default argument in get_local_builds [`a63560a9a3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a63560a9a3804ff84d8811407747d104f319635b)
- Download to the revision's own directory in Revision.binaries [`88c374ecba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88c374ecbadba1007da7168618ccf702d9b13a7a)
- Don't treat a failed archive extraction as a completed download [`c6e8f5c59f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c6e8f5c59ff5b1feb7b31e8e0b13b2caacc53048)
- List all 2.55 alphas in archives.py, not just 3-digit ones [`b883625f8f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b883625f8f0715416d313ea8c5c13d43758e592e)
- Assorted small cleanups in archives.py [`c1aca39740`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c1aca39740eacd6bae8037b34eadd3af53688681)
- Check the s3 bucket before GitHub for old release packages [`2961411964`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2961411964cfea19ef619e0dbc4e57570c7f72ec)
- Don't cache mutable git facts across runs in git_helpers.py [`596300cbf3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/596300cbf38c1fe7767bf9d2bf0847c817a01f67)
- Fix confusing crash for unknown channels in bisect_builds.py [`b5c74042f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5c74042f47f93a3b47dae6afb94c5f65f20cefd)
- Validate bisect endpoints up front [`46ca6bd08e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/46ca6bd08ef9fa5fabf3aa2a06aa6aa768051c55)
- Don't reject builds missing binaries the command doesn't use [`99f2551553`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99f25515534db07cf8fa0202e16697370513a2ad)
- Add a --timeout for automated bisect steps [`b9ba9be827`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9ba9be827379aa9dc3c1e8d3248e396d681f838)
- Handle quit and unknown answers sanely during bisect validation [`3c9a1cf126`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c9a1cf126e045f750c1cbce21b414a315630a65)
- Remove leftover debug prints from bisect skip handling [`00eff92d95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00eff92d9518cd86b07994d177eca53ca3a02558)
- Assorted small cleanups in bisect_builds.py [`c0bc18173b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c0bc18173bf57a4371f6ffb02d70217a68c4f2fd)
- Api server rejects requests without a ZC-Version header [`8584159088`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8584159088155108d2b02535fb4dfb730b47396c)
   &nbsp;
   >Clients only started sending the header alongside the replay-upload consent fix, so this locks out old builds that still carry the inverted consent check.  
   >
   >Also rejects split-replay segment uploads (a "sav" meta field): their save snapshot never uploads with them, so they can never be replayed. 
   >
