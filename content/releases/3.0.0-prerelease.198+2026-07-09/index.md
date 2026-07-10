---
title: 3.0 Prerelease 198 2026-07-09
description: 
date: 2026-07-10T04:34:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.198%2B2026-07-09/3.0.0-prerelease.198%2B2026-07-09-linux.tar.gz
    name: 3.0.0-prerelease.198+2026-07-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.198%2B2026-07-09/3.0.0-prerelease.198%2B2026-07-09-mac.dmg
    name: 3.0.0-prerelease.198+2026-07-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.198%2B2026-07-09/3.0.0-prerelease.198%2B2026-07-09-windows-x64.zip
    name: 3.0.0-prerelease.198+2026-07-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.198%2B2026-07-09/3.0.0-prerelease.198%2B2026-07-09-windows-x86.zip
    name: 3.0.0-prerelease.198+2026-07-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 351914658
tag_name: '3.0.0-prerelease.198+2026-07-09'
channel: '3'
tags:
  - releases
---


# Features

### ZScript

- Stack objects are now saved [`c46a8ed441`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c46a8ed4418a06612f94a9e27837fbe3b8092b01)
   &nbsp;
   >Stacks referenced from global variables (directly or transitively) are now persisted to the save file and restored on load, like arrays and class objects - including which of their elements are objects, so reference counts reconstruct correctly. Previously a stack global was NULL after loading a save. 
   >
- The stack class is now generic - `stack<T>` [`c2abe7fab2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2abe7fab21a4f98e2c0ee38e5db2b0280cd8519)
   &nbsp;
   >The stack class takes a type parameter: `stack<int>`, `stack<MyClass>`, `stack<int[]>`. Typed stacks type-check pushed values, and return typed values from PopBack/PeekFront/Get etc, so no casts are needed. The type parameter is implicitly `untyped` when omitted, so plain `stack` (and all existing scripts) behave exactly as before. 
   >

# Bug Fixes

### Player

- Don't crash when loading a replay after playing with script bitmaps [`80c7a66290`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80c7a66290001ae5d7dcf7f0817384c216c632be)
   &nbsp;
   >Loading a replay (via the Replay menu or -replay-batch) after a game that allocated script-drawn bitmaps had already run in the same process could crash on the loaded game's first frame. 
   >
- Reset subscreen state when starting a game [`78d0dc4fb8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78d0dc4fb8a9d0d6485fd420d449d543b36835a3)
   &nbsp;
   >Starting a new game while the previous one ended with the subscreen open could render the new game at the wrong screen height. 
   >
- Reset hero ladder-cover position when starting a game [`7b98be271a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b98be271a6175f5a2eceb7a1b6c7575ccc6f41c)
   &nbsp;
   >The hero's ladder-cover position could carry over from a previously-played game and nudge movement on the first frame of a new game. 
   >
- Clear leftover screen-scroll state when starting a game [`6f3ad96996`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f3ad96996c33ea586ac484df7cba5aad845c5d1)
   &nbsp;
   >An in-progress screen-scroll state could linger from a previously-played game into a newly started one. 
   >
- Reset sprite ID counter when starting a game [`53a5bb1aab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53a5bb1aab9890b875d1f4bcb056ee9d6df97590)
   &nbsp;
   >Sprite unique IDs weren't reset between games played in the same session, so a new game's sprites continued numbering from the previous game instead of starting fresh. 
   >
- Reset hero movement step when starting a quest [`169f1a062e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/169f1a062eb16bff901c749642b5c29d6670f5a1)
   &nbsp;
   >The hero's collision-adjusted movement step could carry over from a previously-played quest and shorten the first move of the next quest. 
   >
- Reset the hero's held item when starting a game [`17f32424d3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17f32424d3c426272645165138e5aa830cf84d96)
   &nbsp;
   >The item the hero was holding up could carry over from a previously-played game into a newly started one. 
   >
- Reset the hero's tile size when starting a game [`f0f0420a65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0f0420a6526166dcfce7c4f9325354082a5b400)
   &nbsp;
   >If a script resized the hero in a previously-played game, the leftover size could shift the camera at the start of the next game. 
   >
- Don't carry custom test-play init data into the next quest [`e383e46f36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e383e46f360b2f337f63645bae4dfad6724e223e)
   &nbsp;
   >When test-playing a quest with custom initialization data, those starting items and counters could incorrectly carry over to the next quest loaded in the same session, changing its starting inventory. 
   >
- Clear A-button item when starting a game with a charged sword [`2d67e151d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d67e151d9aa3e236cb31966f46c3506f68a7670)
   &nbsp;
   >Starting a new game while the sword was mid-charge could clear the A-button item selection, leaving it unequipped. 
   >
- Reset the skip-continue-screen flag when starting a game [`c855017dc5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c855017dc5f0cdb075998f5afb77cca2a21bb585)
   &nbsp;
   >A game started after another in the same session could wrongly skip its own continue/game-over screen if the previous game left the "skip continue" flag set. 
   >
- Reset more leftover hero state when starting a game [`93f207d50f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/93f207d50f2d140da5951292098a683ed21485ba)
   &nbsp;
   >Some leftover hero state from a previously-played game (hit direction, warp return coordinates, ladder-cover position) could carry over into the next game started in the same session. 
   >
- Keep cheat overlays visible while the debugger is paused [`77ae6b004a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/77ae6b004a422b62b0172065385b7931f3bba629)
   &nbsp;
   >The Show Hitboxes and Show Walkability cheat renderings disappeared whenever the script debugger paused the game, making frame-perfect bugs much harder to inspect. 
   >

### ZScript

- Clear script-applied palette tint when starting a game [`9f580c116b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f580c116b77987eb04f06806b73f9cfee1c4950)
   &nbsp;
   >If a previously-played game left a script-applied palette tint active, the next game could render with a wrong or black palette. 
   >
- Vargs functions wrongly pushing extra values [`36be5897a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/36be5897a91ea8307bb6ccf6aeac580c3173c6ae)
- Nested calls to vargs-using functions clashing varg params [`f51aadef23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f51aadef23198e5fa80c9588081fe4b6f4dc822d)
- Correctly refcount objects within varargs array [`31f5b4240a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31f5b4240aa672cf8e1bcbaf2a1086c94ead8c5b)
- Self-assigning a class member could delete the object [`afa9f3578c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/afa9f3578cd017b3cfa798c410c97d2adc6db95f)
   &nbsp;
   >If a class member variable held the only reference to an object, assigning that member to itself deleted the object: the old value's reference was released before the new value was retained. 
   >
- Popping the last reference to an object returned a deleted object [`a5fae9c1ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5fae9c1ea989deae683494af92bc16730b91d60)
   &nbsp;
   >If an object array held the only reference to an object, ArrayPopBack (and the other pop functions) deleted the object as part of removing it from the array, then returned a pointer to the now-deleted object.  
   >
   >Popping now transfers the array's reference to the autorelease pool, so the returned object stays valid until the caller retains it (or until the pool next drains). 
   >
- Inserting/removing untyped array elements corrupted object tracking [`2781fea615`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2781fea6150acd622406c72643569fdc33955955)
   &nbsp;
   >Untyped arrays track which positions hold objects. Pushing or popping at the front (or any interior index) shifted the elements without shifting that bookkeeping, so the GC could delete an object still stored in a live array, and later writes could release unrelated values as if they were objects.  
   >
   >Also, popping an object from an untyped array now transfers its reference to the autorelease pool, the same as typed object arrays. 
   >
- Shrinking an untyped array leaked references to its object elements [`71d47d4429`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71d47d442940f6ff085a95b7dcc50ac91259fd41)
   &nbsp;
   >Resizing an object array releases the references of elements dropped by a shrink, but untyped arrays holding objects were skipped: the objects leaked (stayed alive until an unrelated full GC ran), and the stale type bookkeeping survived to mislabel elements if the array grew again. 
   >
- Running the GC during a class destructor crashed the engine [`3f410ce245`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f410ce24503396e1007bedfb1209ff32059744a)
   &nbsp;
   >If a destructor triggered a GC run (directly via the test-only GC() function, or by allocating when an object type hit its limit), the GC considered the object being destructed unreachable and deleted it again, re-entering the destructor endlessly until the engine crashed from stack overflow. Objects referenced only by the destructor's local variables could also be wrongly collected. 
   >
- GC could delete live objects when destructors modify members [`1343f74c15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1343f74c157b3f0cc199872d4e5d1d600b04ebf3)
   &nbsp;
   >When the GC deleted an unreachable object, it first released the references that object retained, and only then ran its destructor. A destructor that cleared an object member (like `this->x = NULL;`) released the same reference a second time, which could delete an object still referenced by live variables. 
   >
- Objects pushed into untyped arrays are now reference counted [`0cd9ba7ce9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0cd9ba7ce938c4e2f7864f10bb66e4e1bcef299f)
   &nbsp;
   >ArrayPushBack/ArrayPushFront/ArrayPushAt did not retain objects pushed into an untyped array (or track that the element holds an object), unlike direct element assignment. The object could then be deleted while still stored in the array. 
   >
- ArrayCopy did not retain objects copied into untyped arrays [`b40027d4a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b40027d4a66db5fad1f4cb5772abd5e2a57fc13d)
   &nbsp;
   >ArrayCopy wrote elements without any type information, so copying an object (from a typed object array or another untyped array) into an untyped array did not retain it or mark the element as holding an object. The object could then be deleted while the copy still referenced it.  
   >
   >Each copied element now carries the source element's object type, the same as writing it directly. 
   >
- Objects stored in stacks are now reference counted [`0c71dc8f95`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c71dc8f9547cadfec05f4efeaf36f669c43fd37)
   &nbsp;
   >The stack type did not track objects at all: an object whose only reference lived in a stack was deleted while still on it, leaving a dangling pointer behind.  
   >
   >Push/Set now retain objects (and release replaced elements), popping transfers the stack's reference to the autorelease pool so the returned object stays valid, Clear releases object elements, and the GC treats stack contents as references. 
   >
- OwnArray did nothing for GC-managed arrays [`ddcfb7f890`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ddcfb7f890f95a6f5de3ed8ff51c1e2652a503d9)
   &nbsp;
   >Since arrays became garbage collected (3.0), OwnArray silently did nothing: the array pointer no longer matched any of the legacy address ranges the function checked. An array kept alive only by script ownership was deleted immediately. It now adds an owning reference, released when the owning script ends - consistent with every other Own() function. 
   >
- Continuing deleted objects held by surviving generic scripts [`4a07631373`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a076313734b304c058d304cf834de483166ee60)
   &nbsp;
   >Generic scripts survive F6->Continue with their execution state intact (unless configured otherwise), but the continue released every script stack's object references anyway. A surviving generic script resumed with local variables pointing at deleted objects. 
   >
- Harden the ZASM text parser against malformed input [`9a19395706`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a19395706e424e1a29f3e9de8c96b358dbb75a2)
   &nbsp;
   >Parsing ZASM text with fewer arguments than the command table expects (such as a dump written before a command gained a new argument) read past the end of the token list - undefined behavior. Unknown command names dereferenced null. Both now fail loudly instead. 
   >
- Add missing cases for script_object_type::weapondata [`bf1eec75f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf1eec75f5eb23b72859983a371dd1d1dd77cec4)

# Refactors

### ZScript

- Track autorelease-pool membership in constant time [`dbc6e2ce4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dbc6e2ce4d1a916584d8aaf16e6ac86f96ee1fec)
   &nbsp;
   >Opcode handlers check pool membership every time an object is pushed or popped, and each check scanned the pool vector - popping N objects in one script run cost O(N^2). Pool mutations now go through helpers that keep an O(1) membership index in sync.  
   >
   >The websocket destructor previously pushed its message array to the pool unconditionally; it now uses the transfer helper, since a duplicate pool entry would no longer drain twice. 
   >

# Tests

- Discard metadata-only replay churns [`43349f8a2d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43349f8a2d0edf8dbe03e6e39f78f6dd18637ff2)

### Player

- Add in-process batch replay infrastructure [`557fdc34cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/557fdc34cc338d9d1d4ccfdcd6eea3cc873f7c05)
   &nbsp;
   >Adds tooling to run many replays back-to-back in a single process and to pinpoint state that leaks between them, so cross-replay desyncs can be reproduced and guarded against. 
   >

### ZScript

- Cover script object restoration across save/reload [`1020fc610d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1020fc610de4b8358b19bf1d9d15d922b0770b5e)
   &nbsp;
   >Adds an auto test exercising Game->Save + Game->Reload: object identity and cycles, untyped-array object tracking, reconstructed reference counts, member arrays, nested arrays, global-flagged objects with zero references, and the zeroing of non-restorable object types (bitmap, randgen) in globals, members and untyped arrays. 
   >
- Cover destructors that mutate GC state mid-collection [`859d6f3487`](https://github.com/ZQuestClassic/ZQuestClassic/commit/859d6f3487ec70fe68cc2f4d34e96ffab9ab662b)
   &nbsp;
   >Covers two fixed bugs: a destructor that re-enters the stack being Cleared, and a destructor that deletes an object (freeing its id) and then allocates a new one while the GC is iterating its unreachable list. 
   >

# CI

- DCHECK on Linux only for testing, not release builds [`35c8c1e641`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35c8c1e6418545cf22dc6280d44523ab0b61681b)

# Misc.

- Ignore amend commits in git hook [`ed3bd17e02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed3bd17e02500eb8040931897afcb419f515cc54)
