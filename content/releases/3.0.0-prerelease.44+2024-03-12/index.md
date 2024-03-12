---
title: 3.0 Prerelease 44 2024-03-12
description: 
date: 2024-03-12T05:28:01Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.44%2B2024-03-12/3.0.0-prerelease.44%2B2024-03-12-linux.tar.gz
    name: 3.0.0-prerelease.44+2024-03-12-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.44%2B2024-03-12/3.0.0-prerelease.44%2B2024-03-12-mac.dmg
    name: 3.0.0-prerelease.44+2024-03-12-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.44%2B2024-03-12/3.0.0-prerelease.44%2B2024-03-12-windows-x64.zip
    name: 3.0.0-prerelease.44+2024-03-12-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.44%2B2024-03-12/3.0.0-prerelease.44%2B2024-03-12-windows-x86.zip
    name: 3.0.0-prerelease.44+2024-03-12-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 145968620
tag_name: '3.0.0-prerelease.44+2024-03-12'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- 'atol' (string to long) [`475cac6ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/475cac6ce3c06f20051e092f8388e6cd0d6ce4cd)

# Bug Fixes

### Player

- improve replay stop process for update mode [`f21bed939`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f21bed9390294e5035cb3cc78d213b868acd436e)
- websockets reading wrong pointer [`f98c49c69`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f98c49c6966990aa76cb43a0f993634caa17fe19)
- check if save slot is valid before loading [`9651948a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9651948a2f059d2d23734fa263a5fa76519acbb1)
- fix crash in Options>Snapshot Format [`91f0fb028`](https://github.com/ZQuestClassic/ZQuestClassic/commit/91f0fb02844151c9f5daa2a00cc2796c3bfcdec6)

### Editor

- minor typo in Export DMaps title [`94b469569`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94b4695690e60071b9614d492c4d1e1df463ccd0)
- correctly handle variable length title in all dmap reading/writing [`3137e13f1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3137e13f1cda8f929337d2163915831434791d81)
   &nbsp;
   >6bd8a9a added support for variable length dmap titles, but only for the main dmap reading/writing code. This functionality is duplicated across dmap import/export and other places, but wasn't updated. 
   >

### ZScript

- parser bad optimization edge-case [`978ab1b63`](https://github.com/ZQuestClassic/ZQuestClassic/commit/978ab1b634fa6026f471c2afc60e31e3a09ed5a2)
- parser failing to properly initialize some variables [`b93b1e224`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b93b1e22495390c241d0993725878c45029d7a3e)
- crash in UserDataContainer, broken `websocket->Free()` [`32996be02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32996be02bd5d7eee2de4b86de266d00487b1692)
- websocket double-deleting their arrays, doing extra alloc/dealloc work [`83df3a67b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83df3a67bcf48288e64b429dcc2be5627301e01f)
- verify first index for screen_d [`bbeb76cd5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bbeb76cd50f05146bffd0bc36c18ba14f2e35960)
   &nbsp;
   >This fixes a crash in Titan's Gate. 
   >

### Visual Studio Code Extension

- character literals not highlighting properly [`5dc7bd7c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dc7bd7c0e5f4f64ff20030a51c448a410875be0)

### ZLauncher

- "Static for invalid data" option not working in zlauncher [`3c7fd0a15`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c7fd0a15beb27dced86f792c30ad28c6b236dc1)

# Tests

- add local web app for running replay tests [`bd16f16e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd16f16e03d4896cb9e1eb1ad9dc510e0e7f2e5b)
- move build archive operations to archive.py [`144ec7f33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/144ec7f33780493a7b374d8ae8c8da003be28725)
   &nbsp;
   >This greatly cleans up bisect_builds.py, which was doing a lot. Now a new tool `scripts/archive.py` is responsible for downloading any build - or building from source, as needed. 
   >
- avoid enumerating s3 bucket just to download single version [`e1b37622b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1b37622be7e2e820bb2945ccde8940a54c36aae)
- use new archive download for run_replay_tests.py [`f2eaaf7ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2eaaf7ec75f39900fba2ad237e1282bd7c2fbe7)
   &nbsp;
   >This removes the old download flow that required a github api key to get a baseline build for a compare report. 
   >
- move github related functions to github_helpers.py [`deb47752d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/deb47752d380df27479837201d55ed00cbde05ed)
- use requirements.txt for python deps [`61941b504`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61941b504c6f774f03cd5629eac60cf6054bcd8d)
- extract core replay runner to replays.py [`a2ab3ac30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a2ab3ac30a2f4a9ffb12e141ba58893f0b80fea4)
- format Python using Black [`c54f26195`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c54f2619599e9031e38f5b832f77a41fc7fa0ef0)
- sort Python imports using isort [`2cabfdb7c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cabfdb7c062cdf5c1febc70792422289f0db850)
- include palette in gfx frame hash [`6f33284ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f33284ea3c8809a71fd1d12c49d46b95175db72)
- fix hash for compare replay image dedupe [`4f739c9d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f739c9d7024da29977867f10a7ebf28192b01b8)
   &nbsp;
   >The previous hash did not take into account the image format's color palette, so hash collisions prevented some failing frames from showing. 
   >
- update expected zasm from recent changes [`ed025a972`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ed025a9724137ae268c3f82b2e631b4afd715d27)
- add the_deep.zplay [`9268cc100`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9268cc100509b8eda56eee57e65275800d985304)
- add enigma_of_basilischi_island_basilse.zplay [`ee3e6e7c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee3e6e7c3ec52a99ff8288c7766791638d3c412a)
- refactor how known replay failures are handled [`85f745323`](https://github.com/ZQuestClassic/ZQuestClassic/commit/85f745323ca507eb564380fe0b22cd44fce89d49)
- import Path directly [`2fd240321`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fd240321603fc7b4e4080d6c9b9209509b48ceb)
- remove solid.zplay [`2b3acd742`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b3acd7420bf6c2ffab9e2663f5303a24a053fbb)

# CI

- upload releases to s3 bucket [`99759bbdf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99759bbdf74e7d39f8267492fa09ac86aae3cb6c)
- set test results folder names for jit/non-jit replay runs [`bfd9daa06`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bfd9daa06a00e56f506e14ed67087d3ffc9f90c1)
