---
title: 3.0 Prerelease 92 2025-03-09
description: 
date: 2025-03-09T05:12:10Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.92%2B2025-03-09/3.0.0-prerelease.92%2B2025-03-09-linux.tar.gz
    name: 3.0.0-prerelease.92+2025-03-09-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.92%2B2025-03-09/3.0.0-prerelease.92%2B2025-03-09-mac.dmg
    name: 3.0.0-prerelease.92+2025-03-09-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.92%2B2025-03-09/3.0.0-prerelease.92%2B2025-03-09-windows-x64.zip
    name: 3.0.0-prerelease.92+2025-03-09-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.92%2B2025-03-09/3.0.0-prerelease.92%2B2025-03-09-windows-x86.zip
    name: 3.0.0-prerelease.92+2025-03-09-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 204575730
tag_name: '3.0.0-prerelease.92+2025-03-09'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- add `itemdata::FlashCSet`, improve `itemdata::CSet` [`fa55a6f26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa55a6f2609b184951346c0e1bafb608bdbd116a)
   &nbsp;
   >`itemdata::CSet` contained both the normal and flash csets, and required bitwise operations to access. It also didn't allow for setting the flash cset. Now, `itemdata::CSet` is only for the normal cset, and the flash cset uses the new `itemdata::FlashCSet`. 
   >
- support expression in default parameters [`d2dd3eebf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2dd3eebf57ea30251fa3dd059baa8ed7dd5dbd3)
   &nbsp;
   >The default for optional parameters no longer need to be constant. For example, this is now valid:  
   >
   >```
   >void debug(int num, int x = Player->X, int y = Player->Y - 10) {
   >	// draw num at x, y ...
   >}
   >```
   >

# Bug Fixes

### Player

- inline function optimization handles LOAD correctly [`0c8cc8624`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c8cc86242f8d6dce7aef1bec240f39be6d9a918)
- prevent crash in walkable cheat from bad screen access (z3 regression) [`c45e7775c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c45e7775c1e10561b34bd0e022ec9d982a697c8c)
- prevent crash when closing title screen without loading quest (z3 regression) [`8dc032496`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8dc032496935cd71794b086db2823e0a7c3dc678)
- prevent crash when opening boss lock block (z3 regression) [`8d939805f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d939805f0dc386ca549af8b5add08138cbe3667)
- prevent crash when grabbing item during screen scroll (z3 regression) [`f7466e901`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7466e9013f47a9679068a7ea22a6771add339b8)

### ZScript Standard Library (std.zh)

- wrap angle in `AngleDir4` and `AngleDir8` [`a6b3ca795`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6b3ca795f06568ed6c81742b2a27697b16ebdec)

### ZScript

- use correct upper limit when setting itemdata Tile [`4346780f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4346780f3170c240e146461cd2aa43ae369e692d)
- use lexical scoping for namespace compiler options [`215607727`](https://github.com/ZQuestClassic/ZQuestClassic/commit/215607727e6f3a1a4c670a7f467447bb2f04ba2c)
   &nbsp;
   >Previously, namespaces would ignore options defined in the file scope. Also, options defined in one namespace block would be applied to every namespace block of the same name.  
   >
   >See https://discord.com/channels/876899628556091432/1243749050616905768. 
   >
- prevent crash when processing script node with no script object [`7552852a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7552852a9898bca1045d8a3fce398a4bcb2012cc)

# Documentation

- clarify swim speed in `Hero->Step` [`6d3869ea9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d3869ea908e4a8a2ac15444c463292cd4984250)
- correct the comment about swim speed [`04b40539a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/04b40539a541c2ae4cb371ac34ba482a0dea61f0)

# Build

- fix windows build re version macros in rc files [`d1d4fc3a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d1d4fc3a9befb21b0870b9c5a319d601100722c6)

# Refactors

- remove module system (zinfo has replaced it) [`3f0f24976`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f0f24976120b28e78689cf366b7d80791fda8e7)
- simplify metadata.h [`7f540a3cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7f540a3cc3dcf864e8dcfb84b8c53cb032eec69c)
- remove __isZQuest [`5d26b77d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d26b77d9012efec36be2a5d08b391e6639baeaa)
- reduce ffc allocation when reading mapscreen [`b022fa0d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b022fa0d91df99f4f8dd8ae08270bec34d25ba70)
   &nbsp;
   >See c1273e1 
   >

### Editor

- drop "Load Tileset" and consolidate loading tilesets via File>New [`1e329b4b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1e329b4b585ba0416f04e4dd3d6ead5b7a152b5f)

### ZScript

- remove WarpReturnC [`0f4e5290c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f4e5290cb4014fba535f1fecd1f71876834d54a)
- remove npc::LightRadius/Shape (on sprite now) [`052144f01`](https://github.com/ZQuestClassic/ZQuestClassic/commit/052144f0109d04c8ba1db1e7431e7f222769325c)
- deprecate `WrapAngle` (use `WrapRadians` instead) [`786f3b248`](https://github.com/ZQuestClassic/ZQuestClassic/commit/786f3b248d134fb0af07149b74d1581dd191b514)

# Tests

- add test case to errors_optional.zs [`6eb7bddbb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6eb7bddbb7b9f5b493696c0cabff914fc17e4591)

# Misc.

- strip "cherry picked from" from commit body (git cherry-pick -x) [`7bbff37f7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7bbff37f7c6fe5916ae4cd904b5bfac083b0629a)
- update cherrypicks-3.0.md [`b85a5c8cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b85a5c8ccee162494422c5a8bc55bd3e7b7b7692)
