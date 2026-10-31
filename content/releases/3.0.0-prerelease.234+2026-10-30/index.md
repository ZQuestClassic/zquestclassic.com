---
title: 3.0 Prerelease 234 2026-10-30
description: 
date: 2026-10-31T01:32:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.234%2B2026-10-30/3.0.0-prerelease.234%2B2026-10-30-linux-aarch64.tar.gz
    name: 3.0.0-prerelease.234+2026-10-30-linux-aarch64.tar.gz
    platform: linux-aarch64
    size: 33631947

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.234%2B2026-10-30/3.0.0-prerelease.234%2B2026-10-30-linux-x64.tar.gz
    name: 3.0.0-prerelease.234+2026-10-30-linux-x64.tar.gz
    platform: linux
    size: 34221202

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.234%2B2026-10-30/3.0.0-prerelease.234%2B2026-10-30-mac-universal.dmg
    name: 3.0.0-prerelease.234+2026-10-30-mac-universal.dmg
    platform: mac
    size: 40469814

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.234%2B2026-10-30/3.0.0-prerelease.234%2B2026-10-30-windows-arm64.zip
    name: 3.0.0-prerelease.234+2026-10-30-windows-arm64.zip
    platform: windows-arm64
    size: 36881751

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.234%2B2026-10-30/3.0.0-prerelease.234%2B2026-10-30-windows-x64.zip
    name: 3.0.0-prerelease.234+2026-10-30-windows-x64.zip
    platform: windows-x64
    size: 36302990

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.234%2B2026-10-30/3.0.0-prerelease.234%2B2026-10-30-windows-x86.zip
    name: 3.0.0-prerelease.234+2026-10-30-windows-x86.zip
    platform: windows-win32
    size: 34369660
prerelease: true
id: 429686046
tag_name: '3.0.0-prerelease.234+2026-10-30'
channel: '3'
tags:
  - releases
---

# Bug Fixes

### Player

- Free the game state with delete at exit, as it was made with new [`af2f011170`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af2f011170c24f550adae841f78ee8c63047bc46)
   &nbsp;
   >The player's game state was created with new and released with free at quit. Nothing visible came of it, but valgrind and AddressSanitizer both stop on the mismatch, and under ASan it aborted every replay run at exit. 
   >
- Strings with warp commands could corrupt memory [`3bbd623ac9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bbd623ac914d61e93c06a94599f86486b125ccb)
   &nbsp;
   >A string command can dismiss the message it belongs to (the warp command does, via the warp). The message code kept advancing the message after that, through an iterator the dismissal had already destroyed.  
   >
   >Stop advancing the message once a command has dismissed it. The end-of-string work that used to follow still runs, so the game sees the same thing it did before.  
   >
   >Bug introduced when the message string renderer was rewritten in 3.0.0-prerelease.104+2025-05-14 ([71b272aee9](https://github.com/ZQuestClassic/ZQuestClassic/commit/71b272aee9)). 
   >

### ZScript

- Asserting builds aborted compiling some scripts with the experimental optimizer [`106b327269`](https://github.com/ZQuestClassic/ZQuestClassic/commit/106b327269d53b4159539328183a244aa1462c72)
   &nbsp;
   >Rosemaster's scripts tripped an assertion in asmjit's register allocator under -optimize-ZASM-experimental, which only asserting builds (Debug, Asan) check. The emitted code was correct in Release: the register the allocator disagreed with itself about was dead.  
   >
   >Pulls the asmjit fork commit that fixes the allocator, with a regression test there.  
   >
   >Bug introduced when very large scripts were split into pieces in 3.0.0-prerelease.228+2026-10-11 ([e649140be6](https://github.com/ZQuestClassic/ZQuestClassic/commit/e649140be6)). 
   >

# Build

- [win] work on Windows 7 again [`9ba8c36251`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ba8c36251e95110174ff51da524af558c8a7215) [Discord](https://discord.com/channels/876899628556091432/1565790719019450560)
   &nbsp;
   >Since 3.0.0-prerelease.232, every program failed to start on Windows 7 with "The application was unable to start correctly (0xc0000005)". 
   >
- Only report to Sentry from official builds [`5ef2fff6de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ef2fff6dea9704659a5aa1d3cca00b411c0424d)
- Fix the Linux Asan link, and build Asan at -O1 with GCC and Clang [`609b7038f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/609b7038f340405c51ea907a32cdafcb6215df87)
   &nbsp;
   >The Asan build has not linked on Linux for a while: libgme is a shared library there and links with -Wl,-no-undefined, which rejects the sanitizer runtime symbols a sanitized shared library leaves for the executable to provide. Keep that flag for every other config.  
   >
   >Asan also inherited Debug's -O0. The sanitizer still finds nearly every error at -O1 (only bad reads whose value is never used get optimized away), and the replay suite runs several times faster, which is what makes running replays under ASan reasonable. Asserts stay on. MSVC's Asan config still builds from the Debug flags. 
   >

# CI

- Fail Windows packaging on imports Windows 7 doesn't have [`ce21e4bed6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce21e4bed6a9211532269ef809c206820d572367)
   &nbsp;
   >Windows 7 won't start an exe that imports a function it doesn't have, and nothing caught it when 3.0.0-prerelease.232 started importing WakeByAddressSingle (Windows 8+). 
   >
- Link Sentry in every CI build [`d18585200c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d18585200c6c58be61016f883cdd80d2ff871265)
- Always make a Sentry release when releasing [`0c0302d8c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c0302d8c1b2ab54cd0bc683884db113ced00778)
   &nbsp;
   >Removes the release workflow's `sentry` checkbox. Official builds always report crashes now, so a release without debug info uploaded would get unreadable crash reports. build.yml uploads debug info for every official build instead of taking a separate `sentry` input. 
   >
