---
title: Nightly 2023-12-20
description: 
date: 2023-12-20T05:09:45Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-20/nightly-2023-12-20-linux.tar.gz
    name: nightly-2023-12-20-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-20/nightly-2023-12-20-mac.dmg
    name: nightly-2023-12-20-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-20/nightly-2023-12-20-windows-x64.zip
    name: nightly-2023-12-20-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-12-20/nightly-2023-12-20-windows-x86.zip
    name: nightly-2023-12-20-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 134570999
tag_name: 'nightly-2023-12-20'
channel: '2.55'
tags:
  - releases
---



# Bug Fixes

- deleting subscreens resulting in invalid/crashy data [`a29918a05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a29918a05398404aa3ae7ff00ffb8c701328d1b3)

### Player

- remove accidental double compilation for global scripts [`f30fd983f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f30fd983fa6abc90613e0d751c4b76e0a70ff3e5)
- draw to correct bitmap when showing button clear prompt [`6e204d4fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e204d4fc20fe854d6ef3abedb0675ade3da4898)

### ZScript

- handle rare COMPAREV2 for x64 jit [`0fc3edd39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fc3edd398d4c9a1bb501091d63291150ca20797)
- sprintf giving a wrong error message on %c [`180b66fc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/180b66fc90c4b1f98f264ae7f49018d5baebb31c)
- 'Screen->SetExDoor()'/'mapdata->SetExDoor()' not opening matching doors [`88f2ab405`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88f2ab4056605fe9b0a3933350fba3408c9c161d)
- grab correct value from stack for POPARGS JIT x64 [`504f87a71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/504f87a71d2a9b5ecbc7511a45a3ea0c57250e55)
   &nbsp;
   >This didn't seem to break anything, but it showed up as a difference when comparing registers from JIT w/ non-JIT. 
   >
- Hero->WarpEx not using dmap xoff when setting continue screen [`e21ba53d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e21ba53d04b291e2e63b5172766d34bdff1e4ab5)

# Documentation

- update zstrings.txt to mention the "Insert SCC" button [`bd084e245`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd084e24557dbb34fbb0fb473930fcac6608a8c7)

# Refactors

### Player

- move x64 backend jit code to separate file [`f3d40e0b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3d40e0b7ba899f79be44cdd99350b812c965fdb)

# Tests

- fail replay test if jit cannot compile a script [`9ca544889`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ca544889a07c0c484d3c523085ddc4afa975a17)
- fix local webserver when offline [`804520e40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/804520e4075138097733680671c0d49d8922787f)
- include js script in web replay test stdout/stderr [`3c162e5b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c162e5b2a92bb59e9977681b9837687618ae0a2)

