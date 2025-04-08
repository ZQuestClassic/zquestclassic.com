---
title: 3.0 Prerelease 98 2025-04-08
description: 
date: 2025-04-08T05:52:38Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.98%2B2025-04-08/3.0.0-prerelease.98%2B2025-04-08-linux.tar.gz
    name: 3.0.0-prerelease.98+2025-04-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.98%2B2025-04-08/3.0.0-prerelease.98%2B2025-04-08-mac.dmg
    name: 3.0.0-prerelease.98+2025-04-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.98%2B2025-04-08/3.0.0-prerelease.98%2B2025-04-08-windows-x64.zip
    name: 3.0.0-prerelease.98+2025-04-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.98%2B2025-04-08/3.0.0-prerelease.98%2B2025-04-08-windows-x86.zip
    name: 3.0.0-prerelease.98+2025-04-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 210928973
tag_name: '3.0.0-prerelease.98+2025-04-08'
channel: '3'
tags:
  - releases
---




# Bug Fixes

- fire weapons not acting as 'weapons' to combos [`6a3806642`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a38066423a5a086649238c2e6eba5440e41cd6c)
   &nbsp;
   >regressed 6b5e98d (z3) 
   >

### Player

- correct sprites sometimes not clipping in loopy maze [`a7af6815b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a7af6815b1a6c3ada90cc0f5361584a3a13cbe47)
- correct handling of `Screen->Lit`, dark rooms in regions [`ff788d35f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff788d35f475a69a363e364db2cbf20ecd213ae9)
- fix ffc torches in scrolling regions [`e07d68e2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e07d68e2e74a249000e81ee6d62ebae9ccb75b8d)

### ZScript

- npc-specific MoveFlags no longer ignored [`052727e6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/052727e6fdc205a1ce1dd2f55a1157c7fbc3a620)
   &nbsp;
   >Regressed in 93048592 
   >
- free objects on stack when script is deallocated [`67e267edd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67e267eddfa2f1056db07fe0ba012cd62753a574)
   &nbsp;
   >Explicitly removing a script, or it aborting unexpectedly, was incorrectly retaining a reference to any object on the stack. 
   >

# Refactors

- deprecate the CV_ subversion fields [`689ef929b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/689ef929b84b2e9748e4ab129f19ada2258acbeb)
