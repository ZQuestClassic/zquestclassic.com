---
title: 3.0 Prerelease 196 2026-07-01
description: 
date: 2026-07-01T05:38:11Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.196%2B2026-07-01/3.0.0-prerelease.196%2B2026-07-01-linux.tar.gz
    name: 3.0.0-prerelease.196+2026-07-01-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.196%2B2026-07-01/3.0.0-prerelease.196%2B2026-07-01-mac.dmg
    name: 3.0.0-prerelease.196+2026-07-01-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.196%2B2026-07-01/3.0.0-prerelease.196%2B2026-07-01-windows-x64.zip
    name: 3.0.0-prerelease.196+2026-07-01-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.196%2B2026-07-01/3.0.0-prerelease.196%2B2026-07-01-windows-x86.zip
    name: 3.0.0-prerelease.196+2026-07-01-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 347297694
tag_name: '3.0.0-prerelease.196+2026-07-01'
channel: '3'
tags:
  - releases
---


# Features

- 'Large Combos' + large lifting [`d9c1387490`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9c138749014df4295361bad9b1ad471abb91a08)
   &nbsp;
   >New General tab combo editor flags allow 'Large Combos', combining combos on the same layer that connect via these directions for certain features. Lifting can make use of this feature, allowing lifting groups of combos as single large objects. 
   >
- 'Large Combo' copycat triggers [`96a121e6a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96a121e6a6116aa75adcfeaf645ad942b36a7f88)
   &nbsp;
   >Allows combo triggers to interact with all combos in the same 'Large Combo' grouping as the combo being triggered. This allows ex. bombing one corner of a large rock to crack the entire thing. 
   >
- Weapon flag for carrying across screens [`3065337e22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3065337e22abf4326a9b81aff03570a3501f30ba)
   &nbsp;
   >weapons with this flag can be carried by the player across screen boundaries, even when QRs are set preventing carrying across screens normally. 
   >
- String flag 'No Freeze', makes a string NOT freeze action [`0f28899d85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f28899d8509aa33abbd30bcd744f4f0c4442877)
- Byrna invincibility [`6f7f728c82`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f7f728c82a2f2564ca28c90e83b3a3ba41ba3fc)
- Both invincibility-granting magic items can now prevent knockback [`f0f80f2416`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f0f80f2416a9df16a1cfe7c4b48a4b2d7741f711)
   &nbsp;
   >If knockback is prevented, the player can ex. walk over spikes without being stopped / hit back. 
   >
- Handle armos/graves with 'Large Combos' flags [`fd10f657a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd10f657a59c283efbbb7e3fddb5e480b2d07bbd)

### Editor

- Subscreen 'hint' draws [`e9e00f57bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9e00f57bf32259a98dd32c90c972ead0c791871)
   &nbsp;
   >Some things that would normally be invisible will have a 'hint' draw to indicate where and what it is in the editor (ex. Button Items, Text with empty string, etc) 
   >
- Improve helptext for armos/grave combos [`3e4ef75a3b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e4ef75a3beb758b7a95acc820b477f599f3a63d)
- Combo trigger copy/paste uses system clipboard + json [`fcd5ac70ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fcd5ac70ced239f06475060f2fde64f947dd786c)

### ZScript

- JIT-compile shift and bitwise script commands [`2bbac4c1d1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bbac4c1d14fa3e845870fe075c99e1d9835f667)
   &nbsp;
   >The JIT now compiles the bit-shift, bitwise-NOT and bitwise-XOR operations natively instead of falling back to the interpreter for each one, speeding up scripts that do bit manipulation. 
   >
- Strength-reduce power-of-two multiplies in the optimizer [`5a1c0b6650`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a1c0b66509f117bb1c4cb8a40eaedd75fa6d2a0)
   &nbsp;
   >The optimizer now turns a multiply by a power of two into a left shift (reg * 2^k -> reg << k), which the JIT compiles to a single shift instead of a 64-bit multiply plus a fixed-point divide. 
   >
- JIT-compile array access and allocation [`bf15ec043a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf15ec043a89325530c3e73f3f7dd7a51440ebc6)
   &nbsp;
   >The JIT now natively compiles script array element reads/writes, array allocation, and bulk array initialization instead of falling back to the interpreter for each one, which avoids a register-cache flush at every array operation. Array-access-heavy scripts run measurably faster - stellar_seas_randomizer.zplay is ~5% faster. 
   >
- Collapse array constant-initialization in the optimizer [`e7726d749e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e7726d749e829405cf70e0f50289770c3232fc2a)
   &nbsp;
   >The ZASM optimizer now folds a run of per-element array writes into a single bulk array write. Older quests initialize arrays as a long sequence of individual element writes; this rewrites them to the compact form the modern compiler emits, cutting instruction count (e.g. -11% of all instructions in the stellar_seas randomizer) and avoiding per-element overhead in both the interpreter and the JIT.  
   >
   >This sped up stellar_seas_randomizer.zplay by ~11%. 
   >
- Allow changing `SpawnScreen` on most sprites [`9ffa09b9dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ffa09b9dd5a8a2a6e8fb408dcbd1e5d6dbd625e)
   &nbsp;
   >This is useful for itemsprite->PickupExState, `npc->DeathExstate`, etc. to allow scripts to set what screen the effect will run for, rather than it being tied to a specific screen based on the running script.  
   >
   >Cannot be changed for the Hero or ffcs; the Hero just returns `Game->CurScreen` for this, which can't be modified, and the value for ffcs is directly tied to the screen they belong to, so modifying them is still disallowed. 
   >
- weapon_data script access [`b9768d1a3e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b9768d1a3ec32d16d7bb4ae9188eaaac9d42a4ce)

# Bug Fixes

- Switchhook Block combo attributes overlapping [`d7d543ac0f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d7d543ac0f9936e341145bb3158a07f3565f315f)
   &nbsp;
   >The 'Item/Dropset' attribute was in the same spot as the 'Break SFX' attribute! The 'Item/Dropset' attribute has been moved to fix this. If you were using 'Item/Dropset' before, you'll want to update your Switchhook Block combos. 
   >
- [mac] size default window using the screen's usable area [`57349fe4da`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57349fe4da88a185a6f9463e341c6960b3cdb6db)
   &nbsp;
   >The default window size on macOS subtracted a hardcoded guess for the menu bar and ignored the dock, so the window could end up larger than the available space. It now uses the screen's actual usable area, which excludes both the menu bar and the dock, and reserves the window title bar at the correct size on high-DPI displays. 
   >

### Player

- Hammer triggering combos outside its hitbox [`676ea94bf4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/676ea94bf46632ad0d7aaef48d892bcdfa33aa48)
   &nbsp;
   >The hammer could trigger combos and secret flags above and behind the player, outside the area its hitbox was drawn. It was most obvious with the "don't trigger while the hammer is in the air" item flag enabled: on the first frame the hammer became active on the ground, it triggered combos where it had been a frame earlier, while still raised. 
   >
- Cleanup Cooldown behaviors for various itemclasses [`f1db31e134`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1db31e1342c4dcac0edfae3b92ca4bb7a3ce2b5)
   &nbsp;
   >- Cane of Byrna starts cooldown when the effect *stops*
   >- Remote Bombs start cooldown when *detonating*, not placing
   >- Melee Weapons handle cooldown properly
   >
- Check bridges for standing-on-z state [`3bf23e312b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bf23e312bdb35691a49d230bcb6e960c6f8faf6)
- Armos combos with custom enemies not clearing the combo [`fb7462bcd9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fb7462bcd93deea1aa601a7a0f8e472c4eaef5d1)
- 'large' armos not detecting proper positions to change statues of [`f3e92ba962`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3e92ba962f4e710b38fe233b82dc919bdc9d56e)
- Large armos bad tile offset [`7a4e628a1b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a4e628a1bc064c6b7673408c6d774b920c3adbb)
- Stop spinning tile from despawning in scrolling regions [`a3137d6ddd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3137d6ddd1a53075a96416d63d33edde4f87333)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1518689226164670655 
   >
- Stop triforce pickup softlocking with low MP/HP counter settings [`b5aabd34a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5aabd34a92b9e9a7e167189ede0824f618de421)
   &nbsp;
   >Picking up a triforce would freeze the game when MP per Block was set to 1-3 (or HP per Heart to 1). The refill animation never finished, so the pickup cutscene looped forever and quitting crashed. 
   >

### Editor

- Enemy editor bad tile/hit size maximums [`d2fb02b43d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d2fb02b43daad102c5e683a7a093f6850fb3d52a)
- Subscreen editor crashing when quest has 0 'Equipment Item's [`111e36efea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/111e36efeaf3cc4d9da1d41d97ce39c547e9e3ba)

### ZScript

- JIT reading a function argument from the wrong stack slot [`fa03288aff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fa03288affed30d124fe154c8833c919fb4c46fd)
   &nbsp;
   >A JIT-compiled script could read a function argument or local from the wrong stack location and get an incorrect value. In practice this showed up only when running with the ZASM optimizer disabled. 
   >
- Fix JIT-compiled script comparison using a stale result [`31b76b41f3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31b76b41f3b5cce61145f6ab5196098c1a2e86fb)
   &nbsp;
   >A comparison between a constant and a register could be evaluated incorrectly by the JIT when a value was waiting to be pushed onto the stack, which could send a script down the wrong branch. 
   >
- Prevent crash when taking the modulo of the minimum integer by -1 [`f4e0b0bd49`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f4e0b0bd49d278098f0b7656a8a1d858411725d4)
   &nbsp;
   >Computing the remainder of the smallest representable integer modulo -1 crashed the game, in both the interpreter and the JIT. The result is now 0, the same as any value modulo -1. 
   >
- Script-created enemies using wrong SpawnScreen [`a67adf1af7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a67adf1af7554e721c266275827ffee05c587f75)
- Correct script register deps and a crash reading an invalid sprite [`5c63e6ce52`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5c63e6ce522c9c876db7ca685962b01e7e619af6)
   &nbsp;
   >Reading a sprite's no-collision timer from an invalid sprite could crash. Several sprite and combo-trigger fields were also missing internal reference information, which could cause scripts to be optimized incorrectly. 
   >
- Free script-owned objects when a script's state is cleared [`7a11d0c790`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a11d0c790b77167087caa341863347a5743e934)
   &nbsp;
   >Resetting or clearing a script's engine data did not reliably release the script objects that the script had taken ownership of. Several script types that run in less common ways (like active subscreen scripts) could therefore leak these until the engine eventually ran out of slots.  
   >
   >Releasing owned objects is now an inseparable part of resetting or clearing a script's engine data, so it can no longer be skipped. 
   >
- For JIT, `Close()` not closing subscreen [`ab8ea41c54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab8ea41c54cb67746e546598fbb687ba74affa9f)
   &nbsp;
   >A subscreendata script that called Close() to close its own subscreen had no effect when scripts were JIT-compiled: the subscreen stayed open and the script kept running, diverging from the interpreter. 
   >
- Free objects owned by DMap and subscreen scripts [`b0addbe539`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b0addbe5395c29c16fb3f47802b2f75e624e2994)
   &nbsp;
   >Objects and arrays that a DMap, OnMap, or active/passive subscreen script took ownership of were not released when the script's state was cleared, leaking them until the engine ran out of object slots. 
   >
- Correct script error stack traces under the JIT [`22010b982c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22010b982c523f82eed11b57b509aae3de8e1f55)
   &nbsp;
   >When a script logged an error while reading or writing an engine variable, the JIT reported the wrong source location in the stack trace - often a different function or even file than where the error actually occurred. These errors now report the same location as the interpreter does. 
   >
- Open debugger on top when opened from menu [`ea8b82c166`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ea8b82c166c27b8ef01a0d739781071454aa1bda)
- Make script debugger window readable on high-DPI displays [`aa96a5496f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aa96a5496fbca51f1b074378c9a95ec0c384b01a)
   &nbsp;
   >The script debugger's UI rendered at a fixed 1x size, so on Retina and other high-DPI displays the text and widgets were tiny and hard to read. The window is now scaled to the display's DPI: fonts are crisp, widgets and panes are proportioned correctly, the window opens at a sensible size that fits fully on screen, and moving it to a monitor with a different DPI rescales the UI. 
   >
- Bad error message for invalid call to `Game->LoadComboData()` [`7a34f9c833`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7a34f9c833a9fa02eab66e45a13befbad8c87ee9)

### Web

- Prevent WASM JIT hanging on some older quests [`5f74b174a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f74b174a61d23f18a5d72091e32713097e16800)
   &nbsp;
   >Playing certain older (2.55-era) quests in the web version could freeze on startup if JIT is enabled. The WebAssembly script compiler entered an infinite loop while running the quest's global init script. 
   >

# Build

- Fix mac release [`61c8fb7c88`](https://github.com/ZQuestClassic/ZQuestClassic/commit/61c8fb7c886f441d58578c4dfc664e7d0ea8faa9)

# Chores

- Update replay_uploads_known_good_replays.json [`2cc6dedce8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cc6dedce8955ec0896c626422f8a4081603d4bf)
- Slightly optimize string trigger code [`26e784816c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/26e784816cdd369fd7ffdd90899e2799b26604af)
- Remove accidental copy/paste [`d10dccc61b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d10dccc61bb01e62e3a0e68e496742d2120a650b)

# Refactors

- Cleanup remote bomb code [`02da4bc7a1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02da4bc7a108fa37c56cdaa375e696e68e347cb7)
- Reduce player item usage code duplication [`1b522760a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b522760a2593169bed6f2e550237bf5a2bcc07d)
- Guysbuf no longer uses malloc [`658f5af21c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/658f5af21c3e36ff081d593b2f4ee6c31b04c7d8)

### ZScript Standard Library (std.zh)

- Simplify VisibleOnDungeonMap [`24ccfdf5c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24ccfdf5c624f0edceb1803f90c520048aea569a)
- Collapse many per-type overloads to sprite [`1b6432a79e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b6432a79e901fdc24d9de94918f946a655d64ed)
   &nbsp;
   >ffc/lweapon/eweapon/npc/item all extend sprite, so a single sprite overload replaces the dozens of near-identical per-type overloads.  
   >
   >Collapsed functions:  
   >
   >* CenterX
   >* CenterY
   >* ProximityX
   >* ProximityY
   >* HitboxRight
   >* HitboxTop
   >* LinkFacing
   >* RightOf
   >

### ZScript

- Update @versionadded [`8903256105`](https://github.com/ZQuestClassic/ZQuestClassic/commit/890325610582ca0a8b6e31216a3a6afb48ca078a)
   &nbsp;
   >for GENEV_HEROHIT_INVINCIBLE, GENEV_HEROHIT_INVINCIBLE_KB 
   >
- Guard against self-deleting script commands the JIT ignores [`1f7b6208c0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f7b6208c00f67c31cfd6217a7bdf96219941521)
   &nbsp;
   >Route the self-deleting interpreter commands (lweapon/eweapon delete, subscreen close) through the shared early-return path and assert there that the command is registered in command_could_return_not_ok. The JIT uses that list to decide whether to check a command's return code, so an unregistered self-deleting command is silently ignored under the JIT and diverges from the interpreter. The assertion catches that in tests. 
   >
- Log error if script_object_ref_dec fails [`6168a69e9f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6168a69e9ff0967642e1cd35f834d8fd12aaecbf)

# Tests

- Add replay test for large combo features [`7dc75dc730`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7dc75dc7303cf2a5a4535ad7965236d6c8d15a72)
- Print number of frames and gameplay time when running replays [`67782360ec`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67782360ec762512ff10277fb3477732274bad9b)
- For .local, suggest the next release when replay fails [`882c906b17`](https://github.com/ZQuestClassic/ZQuestClassic/commit/882c906b17e35b4105188e6305ae2929aeba30e3)
- Fix replay runner live updates with multiple clients [`96f07217ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96f07217efc758c14f978b3d927bdb07b7c9c82a)
   &nbsp;
   >update_views looped over the requested views but parsed the wrong variable, reusing the last connected client's view instead of the one being iterated. With more than one browser tab open, results views could get data derived from an unrelated view (or no updates at all). 
   >
- Avoid replay runner server deadlock on subprocess output [`8768fa4c4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8768fa4c4c4b55a17d9d49208df1b4268875316f)
   &nbsp;
   >Subprocesses were created with piped stdout/stderr but awaited with wait(), reading the pipes only after exit. A child that fills the OS pipe buffer blocks on write while the server blocks on wait(), hanging the whole server. Drain the pipes with communicate() instead. 
   >
- Drop dead assignment when sorting replay runner results [`99eda87fca`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99eda87fca0595ff1cbac28aead5bfa194c3b1b1)
   &nbsp;
   >list.sort() sorts in place and returns None, so assigning its result clobbered a variable for no reason. Sort in place without the misleading assignment. 
   >
- Remove broken unused replay runner handler [`cd9cc40bbb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cd9cc40bbb0f0a0d1f6639e77e369646c70bd28d)
   &nbsp;
   >handle_test_results_list_req was never registered as a route and would have crashed if called: it invoked .append on a Path object and reused the same variable for both the directory and the result list. 
   >
- Check the right websocket state before sending [`f34b02f6a2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f34b02f6a2a9c65f14096afa61907a445d12068a)
   &nbsp;
   >update_view guarded on client.ws.status, which is not a meaningful open/closed indicator for a websocket response. Check not client.ws.closed instead so we skip clients that have disconnected. 
   >
- Avoid duplicate history entries in replay runner [`8677034b96`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8677034b96b4d842f1e7fed8abc10149df472c0a)
   &nbsp;
   >show() compared the full location.href (an absolute URL) against a path like "/new", so the equality guard never matched and every navigation pushed a redundant history entry. Compare location.pathname instead. 
   >
- Fix replay runner crash navigating back to initial page [`54457185df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54457185df513416e43758ffdfe9e3ec54573fb3)
   &nbsp;
   >The initial history entry has a null state, so the popstate handler threw when reading e.state.view. Fall back to location.pathname. 
   >
- Derive websocket scheme from page protocol [`99fbc67eb1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99fbc67eb1b57ffca7c4711afa8de12488c3187a)
   &nbsp;
   >The replay runner hardcoded the ws: scheme, which fails when the page is served over https. Use wss: in that case. 
   >
- Make the replay runner web app pretty [`55ceba7c0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/55ceba7c0d0237a6fb2ce4707a1abced6b582b84)
- Make the web replay harness resilient to console-flooding replays [`9e37037ff0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e37037ff01324c08ebc115afeb0ae391cbeafec)
- Assert ZASM registers for arrays declare rINDEX dep [`6d70bb2b61`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d70bb2b61c88ab191a9f4fe1d07494d93579dcf)
- Add replay test for subscreen script object cleanup [`3ef5f56103`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3ef5f56103186c033a113d2142a3bd27b1643753)
   &nbsp;
   >Validates that bitmaps an engine active subscreen script takes ownership of are released when the subscreen closes, by opening it repeatedly via a simulated Start press and asserting the bitmap pool is never exhausted. 
   >
- Print test results folder in run_replay_tests.py [`654296e5bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/654296e5bc9463fbe7982740fb1edcd26822d3ef)

### ZScript

- Run replays without the ZASM optimizer in CI [`11e96118e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/11e96118e7195e5eb6e83305df64c6a1676cdf64)
   &nbsp;
   >Some JIT bugs only surface when the ZASM optimizer isn't rewriting the bytecode first, because it can eliminate the very instructions that trigger them. Re-run some replays in CI with the optimizer disabled.  
   >
   >- run_replay_tests.py gains --optimize-ZASM/--no-optimize-ZASM, wired
   >  through replays.py to pass -no-optimize-ZASM to the player.
   >- ci.py / test.yml run the playground subset a second time with the
   >  optimizer off.
   >
- Add weapon_data script access coverage [`ca9c5add9b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca9c5add9b3e5ae07f7289b7b12ceec5b35bf456)
   &nbsp;
   >Adds a playground auto replay exercising the new weapondata script type: register round-trips, array members, CopyTo/ApplyTo, the buffer-backed itemdata and combodata sources, object identity and source deduplication, and lifetime invalidation when the source npc is removed or the screen changes. 
   >

# Misc.

- Update 'trigger_example.qst' [`ce7fa21378`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce7fa21378000253037e02f94cb06af18b2c0550)
   &nbsp;
   >include example large liftables, large armos, and boss music triggers 
   >

### ZScript

- Cleanup/clarify string related functions [`f26f5e5799`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f26f5e5799d894cf521c980faf0c6cb9063bfdc0)
