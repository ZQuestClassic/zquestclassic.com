---
title: 3.0 Prerelease 12 2023-12-13
description: 
date: 2023-12-13T18:32:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.12%2B2023-12-13/3.0.0-prerelease.12%2B2023-12-13-linux.tar.gz
    name: 3.0.0-prerelease.12+2023-12-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.12%2B2023-12-13/3.0.0-prerelease.12%2B2023-12-13-mac.dmg
    name: 3.0.0-prerelease.12+2023-12-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.12%2B2023-12-13/3.0.0-prerelease.12%2B2023-12-13-windows-x64.zip
    name: 3.0.0-prerelease.12+2023-12-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.12%2B2023-12-13/3.0.0-prerelease.12%2B2023-12-13-windows-x86.zip
    name: 3.0.0-prerelease.12+2023-12-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 133799754
tag_name: '3.0.0-prerelease.12+2023-12-13'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Editor

- timeout of 0 for parser timeout now acts as "no timeout" [`310c8a9d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/310c8a9d1f01b0ffeada7ea254b80d7486d263f9)

### ZScript Standard Library (std.zh)

- clean up some missing function returns [`ef5211325`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ef521132526aa4e87de2eed3ebf316d8959f7e60)

### ZScript

- al_rest crashing when using debug feature [`697aca5ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/697aca5ea4787bd42c014292a90d624ad719f6cc)
- parser configs not working [`d9de1de73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9de1de73a58e1ff026cfebd5c9f90defa47df0f)
- issues running destructors [`9e192b590`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e192b590201dca7e6564b4ebb6861f0e033faca)

# Documentation

### ZScript

- update webdocs [`a12dbe335`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a12dbe335c222b47601737b9e9b06051c35fa2f1)

# Refactors

### ZScript

- internal function aliases, internal constexpr functions [`17e03bc81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17e03bc81488acdbff2a37b23216fd257f306971)
- use alias name in comments, update expected zscript [`b0af4b4b8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b0af4b4b838ba5866ad02066bed56720dfec2530)
- reserve 'constexpr' token [`0cb3519ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0cb3519ea38f48e7c225d6f2bc9ce152df7a2ce9)
- clean up ScriptEngineData for all script types [`584bea132`](https://github.com/ZQuestClassic/ZQuestClassic/commit/584bea1321be7d230f6fe9a56457d5609271222f)
- clean up generic script indexing [`a27241f73`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a27241f734b5317f1d01470d44ade8484e9566c1)

# Misc.

- Remove whistle delay for new replays [`9bf0e2a7b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9bf0e2a7b595a5ad81cadb4ef8c1107dddb48496)
- minor replay/debug improvements [`4fe60ce1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fe60ce1f807ab885a90e15e58cd075bdc01d27d)

### ZScript

- Optimize multiple consecutive PUSH opcodes [`dc6d9e49e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc6d9e49ef48dd5a631f05e1e2d660f6e78b153a)
- Add ZASM comments to parser output [`407bcf258`](https://github.com/ZQuestClassic/ZQuestClassic/commit/407bcf258d36435b2d13f45faf190ab085f966f1)
- add more ZASM comments [`4b1dd0988`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b1dd09883123f7c225a30d132db52fff3d8ece2)
- CALLFUNC/RETURNFUNC for optimized function call/return [`5aa14b335`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5aa14b3355b3abe4c4e438806d23363112f28382)
- New 'ReturnVisitor' pass errors on functions missing 'return' statements [`5cc8fb151`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5cc8fb151db36e84542303463276b710b05b9c23)
- code reachability optimizations [`17ae5ad31`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17ae5ad31fc9d437ba74d8898944a8bf03d88d56)
- more small ZASM optimizations [`76f86d2a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76f86d2a7ed5636430ee62c75a69ced6ba05f599)
- add compile option for missing return error [`18275ed76`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18275ed7604edba2652c82ee347945177facca4c)
