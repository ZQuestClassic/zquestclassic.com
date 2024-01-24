---
title: 3.0 Prerelease 32 2024-01-24
description: 
date: 2024-01-24T04:40:02Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.32%2B2024-01-24/3.0.0-prerelease.32%2B2024-01-24-linux.tar.gz
    name: 3.0.0-prerelease.32+2024-01-24-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.32%2B2024-01-24/3.0.0-prerelease.32%2B2024-01-24-mac.dmg
    name: 3.0.0-prerelease.32+2024-01-24-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.32%2B2024-01-24/3.0.0-prerelease.32%2B2024-01-24-windows-x64.zip
    name: 3.0.0-prerelease.32+2024-01-24-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.32%2B2024-01-24/3.0.0-prerelease.32%2B2024-01-24-windows-x86.zip
    name: 3.0.0-prerelease.32+2024-01-24-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 138267355
tag_name: '3.0.0-prerelease.32+2024-01-24'
channel: '3'
tags:
  - releases
---




# Bug Fixes

### Player

- skip title screen if specific save slot is given [`94f39f26e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94f39f26e2246469b9549cc751f056f681335706)

### ZScript

- fix paldata->CopyCSet() referencing the wrong pointer [`a5e5dcca8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5e5dcca8ab997efa26d25ed24d5cdf73e008393)

# Build

- upgrade to latest asmjit [`462fa8b5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/462fa8b5b54d297b23984d9701164069d6388425)
   &nbsp;
   >Resolves MSVC release mode bug: https://github.com/asmjit/asmjit/issues/427 
   >

# Refactors

### Player

- add get_command_implicit_dependencies in zasm_table.cpp [`9e4a41e07`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e4a41e07f460efeef982d65e428242b326086fc)
- add get_register_ref_dependency in zasm_table.cpp [`ced4dbad8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ced4dbad8443b3979d244366bd7e0583e8f0d5c3)
   &nbsp;
   >Also run `propagate_values` after the comparison opt passes, as it was accidentally skipping some optimizations due to the comparisons passes assuming D2 is being compared. 
   >
- simplify zasm simulation and always simulate stack [`37d86217d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37d86217dbef594f36dd9b37c370446cc197efb6)
- optimize zasm scripts in parallel [`9ae7f4e86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ae7f4e86076c1b188ce901eb1ebf8dc44924079)
- improve handling of bugged SDDDD by fixing it, instead of deopting [`df037da33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df037da33f1372fd5bcd67446a30de2133e2cb48)
