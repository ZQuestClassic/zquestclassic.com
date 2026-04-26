---
title: 3.0 Prerelease 176 2026-04-26
description: 
date: 2026-04-26T00:18:46Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.176%2B2026-04-26/3.0.0-prerelease.176%2B2026-04-26-mac.dmg
    name: 3.0.0-prerelease.176+2026-04-26-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.176%2B2026-04-26/3.0.0-prerelease.176%2B2026-04-26-windows-x64.zip
    name: 3.0.0-prerelease.176+2026-04-26-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.176%2B2026-04-26/3.0.0-prerelease.176%2B2026-04-26-windows-x86.zip
    name: 3.0.0-prerelease.176+2026-04-26-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 313673970
tag_name: '3.0.0-prerelease.176+2026-04-26'
channel: '3'
tags:
  - releases
---


# Features

- Dropdown lists open when clicked anywhere, instead of just the arrow [`3809fd350`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3809fd35044e608c8287f27458ff21f6b6e1e8bb)
- Dropdowns show more options at once [`ce12c14ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce12c14ffef3c95064f01ab2b01f480fa00ee97a)
- Clicking the thin border of rclick menus no longer closes them [`c3e81bc84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c3e81bc842ff12df972a963b8a50d1802f7f08d2)
   &nbsp;
   >This means opening an RClick menu and then instantly lclicking will no longer 'click off' of the menu, nor will it select an option. 
   >

# Bug Fixes

### Player

- Slopes from bordering screens sometimes not registering [`4a2fc64fe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4a2fc64fe96bdc7184470b92832c784325f193bf)
   &nbsp;
   >This only impacted scrolling regions. 
   >
- Correctly initialize FFC current screen [`2295448d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2295448d721d345928ff09659423deb460debf20)
   &nbsp;
   >While loading screens from the qst file, FFC's current screen was incorrectly being set to 0 due to a logic error. 
   >
- Update ffc current screen every frame [`b58e33b98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b58e33b980ecff3b7db085924347cb3d48544a68)
- Ensure ffc current screen is set on screen load [`2bfb43d68`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bfb43d6819940672ac7b6f32a5b88a0783ffa33)
- Walking enemy knockback wasn't working in scrolling regions [`7dff6d1e1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7dff6d1e1b09d2a82f8a59cd10162b0144617233)

### ZScript

- `combodata->Triggers[]` not working [`33488fc10`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33488fc10877b807cb8e438a351cce5b16d289ea)
- Add getters for ffc::LastChangerX and ffc::LastChangerY [`de854f2a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de854f2a5502d34bc76fd06faabb478e716463e0)

# Build

- Upgrade sentry to 0.13.8 [`e57dff45d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e57dff45d713b835c3f4fd16e231ce590380417b)
