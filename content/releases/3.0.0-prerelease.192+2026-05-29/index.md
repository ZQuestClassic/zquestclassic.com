---
title: 3.0 Prerelease 192 2026-05-29
description: 
date: 2026-05-29T07:04:22Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.192%2B2026-05-29/3.0.0-prerelease.192%2B2026-05-29-linux.tar.gz
    name: 3.0.0-prerelease.192+2026-05-29-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.192%2B2026-05-29/3.0.0-prerelease.192%2B2026-05-29-mac.dmg
    name: 3.0.0-prerelease.192+2026-05-29-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.192%2B2026-05-29/3.0.0-prerelease.192%2B2026-05-29-windows-x64.zip
    name: 3.0.0-prerelease.192+2026-05-29-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.192%2B2026-05-29/3.0.0-prerelease.192%2B2026-05-29-windows-x86.zip
    name: 3.0.0-prerelease.192+2026-05-29-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 331384504
tag_name: '3.0.0-prerelease.192+2026-05-29'
channel: '3'
tags:
  - releases
---


# Features

- Add Camera cutscene effect to pan the camera [`3f488fd008`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f488fd0082166e7bf1c4fd74512dfb1296a34e5)
   &nbsp;
   >Adds a new "Camera" sub-effect to the Cutscene Effect combo type. When triggered via '->ComboType Effects', the camera smoothly pans to a target position, then fires 'ComboType Causes->' once it finishes.  
   >
   >Configurable options:  
   >
   >- Subtype: how the target position is interpreted
   >    - Relative to Combo: offset from the combo's center
   >    - Relative to Hero: offset from the Hero's position at trigger time
   >    - Relative to Viewport: offset from the current viewport center
   >    - Absolute: fixed coordinate in the region
   >    - Return To Hero: no position; immediately returns to the Hero
   >- X/Y Position: the target offset or coordinate (per Subtype)
   >- Speed (px/frame): how fast the camera travels
   >- Idle time: frames to pause at the target before finishing
   >- Interpolation curve (Linear, EaseIn/Out/InOut, Smoothstep,
   >  Smootherstep, EaseOutCubic, EaseOutBack)
   >- Freeze: halt the game while the camera moves
   >- Return to Hero: pan back to the Hero after reaching the target
   >- Causes Mode: when 'ComboType Causes->' fires relative to the effect
   >    - On Finish: after the entire effect ends
   >    - Before Return: after idle frames, before the return pan
   >    - Before Idle: after the pan arrives, before idle frames
   >
   >
   >&nbsp;
   >
   >'ComboType Causes->' is only fired if the combo hasn't changed since the effect started (guards against mid-effect edits). Camera movements can be chained by triggering another Camera combo from the causes trigger. Only has a visible effect inside scrolling regions large enough for the viewport to move.  
   >
   >If a script modifies the viewport target sprite, that sprite is used in place of the Hero for 'Relative to Hero' and 'Return to Hero'. 
   >

# Bug Fixes

- Improve lens hint graphics [`19d8265659`](https://github.com/ZQuestClassic/ZQuestClassic/commit/19d826565900a4eb1d4d844836c109a8e83d6c5c)
   &nbsp;
   >They were flickering weirdly, and animating wrongly when more than one of the same hint were visible. This also fixes an item animation issue in the editor, which uses the same drawing code. 
   >
- Lens 'Disable Secrets' flag also disabling hints [`2178424f6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2178424f6c2178411087dc0467cb0eb0f7fbd475)

### Player

- Lens hints showing during player death animation [`dbe28256af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dbe28256af5537f1e8699934ef1f0e695d9ec783)
- Pushblock lens hints not drawing over block sprite layer [`5dffacbc84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dffacbc84716239a62a95fa7e1e0418293a7eae)
- Lens secret combos being misaligned in regions [`f957bddb81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f957bddb81e7d20bc2f00cbe597eb88c9edb5177)
- `Whistle->Stair` lens hints being misaligned in regions [`f9f469a62e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9f469a62eea382a916b2f466c677a48c3652c5a)
- Fake "lens hint" weapons sometimes triggering secret flags [`a5b07145f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5b07145f56e1c1b1311516ee17ef784710c5b74)
- Non-triggering weapons still trigger secret flags [`a139c83ab0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a139c83ab090b55d4820c0ffaf87a7572bd82bde)
- Light beams not working properly during stepforward [`eeedc7ecd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eeedc7ecd11f2aca166a2507a1c4a25e7d349467)
- Absolute combo/cset triggers not working with exstates [`23e921e616`](https://github.com/ZQuestClassic/ZQuestClassic/commit/23e921e616701b5ed7de13fda57e9268921487a0)
- Draw wall masters over hero in new drawing mode [`ee8aae3c36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee8aae3c36d9479d939a7d3f2960668c7fd58e4d)
   &nbsp;
   >Regressed in 3ee61b00. 
   >

### Editor

- Sort dmaps numerically by default [`7a2a27c3c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a2a27c3c29afc201342d094cfb75048d29b7bdf)
- Preview mode combo cycling using bad colors for Ignore CSet [`95652b0030`](https://github.com/ZQuestClassic/ZQuestClassic/commit/95652b0030b1f4fedc762ee1f4d857a1ddabdbb1)

### ZScript

- `Game->CurrentItemID()` using a bad default value for bitflags [`677429d689`](https://github.com/ZQuestClassic/ZQuestClassic/commit/677429d689de75b66be2c926b45f115acab3c0f5)
- Handle boolean access correctly in zasm_array_get_all [`2fb4847f58`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fb4847f5899764ddf0645f4832bbf6884384e59)

# Build

- Ignore -Wignored-attributes from drawing.cpp [`682dc0732d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/682dc0732dafa75fd3e8fd11f332e05c2e48f613)
- Ignore or fix most -Wmissing-braces [`42a08b7e7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42a08b7e7f4e9f1b751d33a8583cea11e65000ae)
- Fix many -Wunused-function [`2936b874f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2936b874f3d1e62e0f2c19d08e8707f8d7cb5f08)
- Ignore -Wself-assign [`739c797a8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/739c797a8d2f2c09488f464f9d23c1af6981951e)
- Fix most -Wunused-private-field [`ecfa81fab3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ecfa81fab32b607a9423abdd637449d60bf4d6c0)
- Fix -Wreorder-ctor [`3dfaba656a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3dfaba656aed011f8c8ad4a2602d1883d5c1edd9)

# Refactors

- Replace unsafe sprintf with snprintf [`6a64ede16e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6a64ede16ea86b4ab5d4d1ab8cf0d9dda30e73eb)

# Tests

- Update replays re: lens fixes [`2dd7a88027`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2dd7a88027eb359964a8a2a7f88cddbfbc1fabeb)
- Add lens hint animation test [`67c9b314e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67c9b314e9ac408d9ba2ed11ac41a522b86ddc0c)
