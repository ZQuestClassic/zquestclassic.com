---
title: 3.0 Prerelease 25 2024-01-13
description: 
date: 2024-01-13T12:04:21Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.25%2B2024-01-13/3.0.0-prerelease.25%2B2024-01-13-linux.tar.gz
    name: 3.0.0-prerelease.25+2024-01-13-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.25%2B2024-01-13/3.0.0-prerelease.25%2B2024-01-13-mac.dmg
    name: 3.0.0-prerelease.25+2024-01-13-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.25%2B2024-01-13/3.0.0-prerelease.25%2B2024-01-13-windows-x64.zip
    name: 3.0.0-prerelease.25+2024-01-13-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.25%2B2024-01-13/3.0.0-prerelease.25%2B2024-01-13-windows-x86.zip
    name: 3.0.0-prerelease.25+2024-01-13-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136940308
tag_name: '3.0.0-prerelease.25+2024-01-13'
channel: '3'
tags:
  - releases
---




# Features

- Slidy Ice for the Player [`a923d5c42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a923d5c425337687e8e1cae3dfc8ea2ff1e59c74)

### Player

- remove dead ZASM [`0faa3c2b6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0faa3c2b6d1e1aa3aed7a9012edc7a2f5143d3fa)
   &nbsp;
   >ZASM ops that write to a register but never use the result are now removed. 
   >
- continue ZASM comparison reduction even on LOAD D2 [`e20f62d4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e20f62d4d4c819e8a40cc5685e771a18134bedf6)
   &nbsp;
   >At some point this was necessary, but not anymore. 
   >
- improve inference in optimizer simulator, and handle POP better [`0a7117ba2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a7117ba2601bc188f3f9034e567f65dcf726e85)
- improve ZASM comparison when subsequent block reuses D2 [`cac709f3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cac709f3d0bfd7bb730177f1494880361c41a1e9)
- optimize SETR PUSHR to just PUSHR [`442921171`](https://github.com/ZQuestClassic/ZQuestClassic/commit/44292117113df3d63048fb91495dd5999ded15cd)
- optimize zasm pass converting to new function calls [`d40c0d634`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d40c0d6344e265bbb1330fdfba470d1eb4b70584)
   &nbsp;
   >Replaces older GOTO/GOTOR and GOTO/RETURN with more succinct CALLFUNC/RETURNFUNC.  
   >
   >This saved ~2.5% of instructions in Yuurand, ~4% in Nargads Trail. 
   >

### Editor

- assign 'notes' per-screen (just for editor use)
   >&nbsp;
   >Relevant changes:
   > - feat(zq): 'Set Default' button to set default editbox colors [`e9e8b112d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9e8b112ded57cc4ab0f12b0c01d8c415711fe52)
   > - feat(zq): 'Goto' button in 'Browse Notes' to go to a notes' screen [`9bd560f93`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9bd560f9372e1ea3c3134fd2d41892e796902f84)

# Bug Fixes

### Editor

- midi edit dialog not showing in new rendering system [`5d58ab785`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5d58ab785a9de87f7cc448dfeda453bd9a1db102)
- solidity preview inaccuracies [`da627e7e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da627e7e9d4041a4718a08426d70adf597d5068d)
- 'Tools->Combo Flags' bugging out when clicked [`112b2928b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/112b2928b33db2a1d40c0902eebac0bd898fe334)
- crash related to 'Scroll to page' for aliases/pools/autocombos [`7d0fb2ac4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d0fb2ac402589fa396791317911a889034df0a7)

### ZScript

- compiler crash related to invalid array indeces [`a65faeff5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a65faeff57127e6fba872f39d10b724bbf6c953d)
- fix Audio->SetMusicLoop() truncating decimal values [`fd7497395`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd74973951d7c75d774c49e42a4f5e4d1c3c5f4c)

### Web

- improve sfx on title screen by yielding during quest load [`424f6200c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/424f6200c2075b093a7c1542ea6a4f0fb6b45999)
- handle reaching end of script in wasm jit [`eb3dc8a7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb3dc8a7a0d9e65bf9167ea15f10f3a71e0af496)
- handle CMP_BOOL in jit wasm [`35fc59b6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35fc59b6b3a8eb7e95fcebd1b1bb9792cf4890d8)
- skip titlescreen for quick open links [`840e2ef7b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/840e2ef7b2bdf992cccd6812266c744efaf1cb37)

# Tests

- add link_to_the_heavens.zplay [`dc4100fc4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc4100fc4f7fa09610dcbc0045e7424c63b7ece4)
