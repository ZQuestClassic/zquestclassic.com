---
title: 3.0 Prerelease 134 2025-09-28
description: 
date: 2025-09-27T23:05:34Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.134%2B2025-09-28/3.0.0-prerelease.134%2B2025-09-28-linux.tar.gz
    name: 3.0.0-prerelease.134+2025-09-28-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.134%2B2025-09-28/3.0.0-prerelease.134%2B2025-09-28-mac.dmg
    name: 3.0.0-prerelease.134+2025-09-28-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.134%2B2025-09-28/3.0.0-prerelease.134%2B2025-09-28-windows-x64.zip
    name: 3.0.0-prerelease.134+2025-09-28-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.134%2B2025-09-28/3.0.0-prerelease.134%2B2025-09-28-windows-x86.zip
    name: 3.0.0-prerelease.134+2025-09-28-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 250554786
tag_name: '3.0.0-prerelease.134+2025-09-28'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- support negative indices for internal arrays [`fae2ad2be`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fae2ad2be6f787305125cb902cebcecb20a62bca)
   &nbsp;
   >Some internal arrays would bound the index to force it to be valid, while others would instead error and give a default value. Now, indices are never bound, and instead if the index is negative it will "wrap around" to the end of the array, just like all other arrays do.  
   >
   >Previous behavior is available behind a compat QR. 
   >

# Bug Fixes

### Player

- poor scrolling in extended height regions and very fast scrolling [`e1cd4c2d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1cd4c2d688fa2fbb2e57b143d47236528293ab2)
- add missing register dependencies for many arrays [`4287b3f26`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4287b3f26e52cca207a8a213ba569d8b5a489279)
   &nbsp;
   >Many arrays were not configured that they rely on the D0 register, which could make the zasm optimizer break scripts. 
   >

### Editor

- Map Settings dialog `?` button closing dialog [`c87564605`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c87564605500e03efa6be11aae70e5e809bdb8ff)

### ZScript

- correctly return default value for out-of-bounds index [`5e67ffdc5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5e67ffdc522e3006ae8496c5a8a2e92800ffad8d)
   &nbsp;
   >Some internal arrays were not returning the default value when the index is out-of-bounds. 
   >

# Documentation

- default draw origin comment was backwards [`273372cb1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/273372cb1ea2d501496a12636a8ad999b39815ad)

# Build

- prevent custom cmake commands from re-running [`253a034a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/253a034a5697147f22cde7430e74020558569d87)

# Chores

- update replay_uploads_known_good_replays.json [`837cc2987`](https://github.com/ZQuestClassic/ZQuestClassic/commit/837cc29874c50817b3499993bb0ddff061d4fef9)

# Refactors

- check each file section version for validity [`fa68a9f0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa68a9f0bea86b4a8bf2fa95a9aa9275edd14bdf)
- remove date check when loading qst [`51d701517`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51d7015179987367576a8e83f4b3721a94a68efa)
   &nbsp;
   >The date check had some correctness issues and was kind of complicated, and the explict version checks are sufficient, so it's been removed. 
   >

### Player

- remove now unusued just_initialized logic from jit compile [`6a69ee56b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a69ee56bb655e77dc0c888fb5c94b7a41fd5996)
- move liveness analysis to zasm_utils.cpp [`7cae4c315`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7cae4c315ba02da1029f5c9bd03b2cda67e04618)

### Editor

- save test mode replays to "replays/test" folder [`b8d605b50`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8d605b508d668e53a6b9c213eab211906e0abe1)
   &nbsp;
   >Just to separate from replays for normal saves. 
   >

### ZScript

- always return 0 for out-of-bounds access for internal arrays [`e323678cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e323678cb3843f184d6a46e760959f5c7336ebab)
   &nbsp;
   >Some internal arrays would return non-zero values if the index used was invalid. Now, all return zero.  
   >
   >Previous behavior is available behind a compat QR. 
   >

# CI

- update softprops/action-gh-release action [`a90814423`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a908144232c3c68768f921eb9e0a741709e39c1b)
- update mathieu-bour/setup-sentry-cli action [`40ae1928f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/40ae1928face7169bcfc7628ddd79e64e7c0b7e9)
