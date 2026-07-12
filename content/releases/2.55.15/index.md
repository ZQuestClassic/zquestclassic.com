---
title: 2.55.15
description: 
date: 2026-07-12T19:36:35Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.15/2.55.15-linux.tar.gz
    name: 2.55.15-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.15/2.55.15-mac.dmg
    name: 2.55.15-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.15/2.55.15-windows-x64.zip
    name: 2.55.15-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55.15/2.55.15-windows-x86.zip
    name: 2.55.15-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 352836520
tag_name: '2.55.15'
channel: '2.55'
tags:
  - releases
---

[View a summary of what's new in 2.55](https://zquestclassic.com/docs/2.55/).
# Features

- Respawn Point Half-Gridlock [`a1d895ce79`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a1d895ce796ffcc7b1e9ecaa1688aac326c93097)
   &nbsp;
   >New QR allows the new respawn points to lock the respawn check to the nearest half-grid (8px) position. This places you slightly further from some unsafe obstacles, and helps in certain edge-cases. 
   >
- New QR Rerolled Drops Always Roll 'Nothing' [`4c4a24dd42`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4c4a24dd42363ec9eab8a0272674ebb71d18c201)
   &nbsp;
   >This works alongside the other smart drops qrs to help rebalance dropsets. If set, any drops that would be 'rerolled' always roll 'Nothing' instead, keeping the odds of each drop the same under all circumstances. This allows simply removing drops from the pool when they are unneeded, instead of requiring them to be rerolled into other drops. 
   >
- Both invincibility-granting magic items can now prevent knockback [`c1930dfd30`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c1930dfd307f8d2f9f1ce85354f79658f23baad9)
   &nbsp;
   >If knockback is prevented, the player can ex. walk over spikes without being stopped / hit back. 
   >

### Player

- Water/pitfall attributes for IFrames and Stun Frames [`35da0e1ed7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35da0e1ed722093cbdd3e6749d812562732fe0d6)
   &nbsp;
   >- Allows customizing InvFrames after falling / drowning
   >- Allows stunning the player (to prevent them from ex. walking directly
   >  back into the water/pitfall) after falling / drowning
   >
- Cane of Byrna "Invincible Hero" flag [`627087fdba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/627087fdba75d5e54728812b82e9f769a8a0d325)
   &nbsp;
   >Implement the Cane of Byrna's "Invincible Hero" flag, which was present in the item editor but had never actually done anything. When set, an active Byrna beam now protects the Hero from damage, the same way Nayru's Love (Divine Protection) does. 
   >

### Editor

- Improve some tile editor shortcuts [`54183281b9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/54183281b9084ff4195a3d9c4a18f9ea32aa6993)
   &nbsp;
   >- Ctrl+Arrows no longer prevent changing pages
   >- Holding Shift makes the Alt+Arrows shortcut move in increments of 8px
   >  instead of 1px
   >
- Improve tile editor quarter-tile draw modes [`0607bcd629`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0607bcd6293dcd33c8e3fc24f6d71483dbe1b4ee)
   &nbsp;
   >"Diag Flip" was implemented wrong, acting exactly the same as 180 rotation- it has been replaced with "+Diag Flip" and "-Diag Flip" which properly flip across the positive and negative diagonal lines respectively.  
   >
   >"Translate" has also been added, drawing at the same position in each of the 4 quarters of the tile, useful for minitile-drawing ex. for life meters. 
   >
- Show combo label on favorite combo tooltip [`4f0513ce28`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f0513ce28217bfecac0a7eedffc1fbaea726779)
- Item Wizard for Stomp Boots [`feeb4a9c24`](https://github.com/ZQuestClassic/ZQuestClassic/commit/feeb4a9c24edf4c934ded173936b0aafff0c73db)
- Subscreen 'hint' draws [`7d53a5989c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d53a5989cc5248276f646cc3c187eb03940f4ce)
   &nbsp;
   >Some things that would normally be invisible will have a 'hint' draw to indicate where and what it is in the editor (ex. Button Items, Text with empty string, etc). 
   >

# Bug Fixes

- AltGr key combinations [`6e83d3b488`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e83d3b488669a08bf0ab84671dd9b9ffbc5146b)
- Ditherblit ignoring clipping rectangles [`4518a325c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4518a325c8f3a74d5d83b22d5072e9140f4f0f8c)
- Add runtime SSE2/SSSE3 detection and fallbacks [`f317a33299`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f317a33299aa5c49e2ce0cbdebf33cafffcfddce)
   &nbsp;
   >2.55.12 added fast-path code for some tile draws, which required CPUs
   >made in at least 2007 or later. Older CPUs would crash when executing
   >these unknown instructions. Now, the tile drawing code checks if the CPU
   >supports these instructions, and if not uses the slower drawing code.
   >
- Preserve scroll position in new listers [`e352f8e7b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e352f8e7b5cb13d7fd5dc993be0221e3ecf08e27)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1497521931979853854 
   >
- Switchhook Block combo attributes overlapping [`0b38f9e5d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b38f9e5d40c607a77b6e3c88cafd30210b78183)
   &nbsp;
   >The 'Item/Dropset' attribute was in the same spot as the 'Break SFX' attribute! The 'Item/Dropset' attribute has been moved to fix this. If you were using 'Item/Dropset' before, you'll want to update your Switchhook Block combos. 
   >
- Continue hearts being improperly bounded [`e1c870c9ee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1c870c9eed7d5e78dbb9f07c9881394ced630e7)
   &nbsp;
   >This led to high continue heart values wrapping around to lower values.  
   >
   >Regressed in 2.55-alpha-120 (acb7c84). 
   >
- Prevent out-of-bounds write when loading a quest with an invalid combo count [`722bcf936c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/722bcf936c119e062b9a8e1841d0f51bb30cc5dd)
   &nbsp;
   >A crafted quest file could declare a combo count larger than the maximum number of combos, causing writes past the end of the combo buffer. 
   >
- Prevent out-of-bounds write when loading a quest with too many counters [`e5018aa903`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5018aa903bad8e3853c4701f9f3e28cb45effc3)
   &nbsp;
   >A crafted quest file could declare a counter count larger than the maximum, causing writes past the end of the counter arrays in the init data. 
   >
- Prevent out-of-bounds read from invalid DMap subscreen script index [`9285d6aa74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9285d6aa74166598671759dc5908200995b43d29)
   &nbsp;
   >A crafted quest file could set a DMap's active/passive subscreen script index beyond the script table, causing an out-of-bounds read and dereference of an invalid script pointer when the quest is loaded or run. 
   >
- Avoid out-of-bounds read on unterminated enemy name in quest file [`3bfac596af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3bfac596af296a8b321edb7ff3191593678f20eb)
   &nbsp;
   >A crafted quest file could supply a 64-byte enemy name with no terminator, causing a string length scan to read past the end of the buffer. 
   >
- Avoid out-of-bounds read from invalid FFC combo index during quest load [`c61ec35b6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c61ec35b6f6491d22037648f1b1bb3f47d472e57)
   &nbsp;
   >A crafted quest file could give a freeform combo a combo index past the end of the combo buffer, causing an out-of-bounds read while fixing up old quests. 
   >
- Avoid out-of-bounds read from legacy secret-combo template index [`067feacc4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/067feacc4bef7580537d84accc7a2ba19b88388b)
   &nbsp;
   >Loading a crafted old-format quest could use a secret-combo value as an index past the end of the template screen's combo arrays, reading out of bounds. 
   >
- Prevent out-of-bounds write from invalid combo pool/autocombo counts [`dca3afdf21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dca3afdf2137e4999c01e56a6a7fe61b6e900286)
   &nbsp;
   >A crafted quest file could declare more combo pools or autocombos than the engine supports, causing writes past the end of those fixed arrays. 
   >
- Prevent out-of-bounds write from invalid favorite combo data [`f115f177cb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f115f177cbfe25116d1098e098e19d1f37ec8baa)
   &nbsp;
   >A crafted quest file could declare too many favorite combos or an invalid per-row value, causing writes past the favorite-combo arrays (or a divide by zero from a zero per-row value). 
   >
- QR for chests/signs/lockblocks working above layer 2 [`d4d23e1264`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d4d23e126489781e7461bf6b09ebae945280d6f6)
- [mac] size default window using the screen's usable area [`4fa90869b0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4fa90869b0f093061c217b349a981229a0b89f9e)
   &nbsp;
   >The default window size on macOS subtracted a hardcoded guess for the menu bar and ignored the dock, so the window could end up larger than the available space. It now uses the screen's actual usable area, which excludes both the menu bar and the dock, and reserves the window title bar at the correct size on high-DPI displays. 
   >

### Player

- Sideview drowning softlocking the player forever sometimes [`a47f527d64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a47f527d642185f4cd01c8098088f68038af0e2e)
- `Hero->Immortal` not clearing on quest load [`be322f1002`](https://github.com/ZQuestClassic/ZQuestClassic/commit/be322f1002f9e5c9b44215d68d6bcf7927539596)
- Per-quest controls resetting wrongly on Continue [`e84449c199`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e84449c199aadef9932cb9f962b3a0eacf1f5c27)
- Pitfalls not resetting attack timer [`015b811e09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/015b811e0977f1685e22a22d411b309dce7c2510)
   &nbsp;
   >this allowed the player to be in the attacking animation instead of the falling animation in some situations. 
   >
- Ffc solid pushing of the player stopping too soon [`d9cb3d03a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9cb3d03a994d1ba4079992c4b2c69424e5976a0)
   &nbsp;
   >incorrect hitbox check was being used 
   >
- Lens hints showing during player death animation [`edc8e90f65`](https://github.com/ZQuestClassic/ZQuestClassic/commit/edc8e90f655ea8b38fbbdb9b749de0ab447aca64)
- Softlock with `No Scrolling Screen While Carrying` QR in NES dungeons [`d23376f639`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d23376f639f3666f529a1c80d178feaf5c2697b7)
   &nbsp;
   >This QR wasn't preventing the "suck" of bombed doors and walk-through walls from trying to scroll. This resulted in softlocking the player because they were being permanently sucked into the scroll, while the scroll was being prevented by the carried object. 
   >
- Standing state not checking properly for ffc platforms [`1677d574a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1677d574a5eb237e8af26506bb030f94ee39ee9d)
   &nbsp;
   >this made it hard to jump when riding a downwards-moving ffc platform 
   >
- Wrong offset being used for solid object pushing [`ac1e9ed137`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac1e9ed137e74e97af491dd1d7f2ce7d57a1fd60)
   &nbsp;
   >These offsets would commonly be the same value, so, unlikely this actually caused any issues yet. 
   >
- Fix ePatra firing too early when ENEMY_FLAG7 is set [`86ad21162c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86ad21162c81358c5a4c5c4e0adc57693d4d387d)
   &nbsp;
   >When the "don't fire while looping" flag was set, ePatra could still fire in certain attack modes (dmisc20==4 and default) regardless of whether it was mid-loop. Now all modes correctly wait until the loop finishes before allowing fire. 
   >
- New/Newer Hero Movement inconsistencies [`c4d457feaa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4d457feaa5b4a112617770ab9b5f77ecaaee781)
   &nbsp;
   >Some spots were only checking for New movement which should've checked for either, causing inconsistencies between enabling both and just enabling newer movement. 
   >
- Allow "255"/"0xFF" as transparent for more subscreen colors [`72b13e7a78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/72b13e7a7843a798cb9a1cc608675fc26ef5956e)
   &nbsp;
   >Setting the `BS Dark` color to 0xFF in misc colors makes its minimap look more similar to Dungeon/Interior minimaps.  
   >
   >Some colors already handled this, but it was missing from places that could really use it. 
   >
- Sideview drowning sprites being broken [`7c22a4bd51`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7c22a4bd517660ee9407479e6d83ca23171b9792)
- Sideview ground checks ignoring enemies' 'ignore solidity' flag [`82b6eb3d3b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82b6eb3d3b3574a619868ba485758f1bba50a1ae)
   &nbsp;
   >The code for "is the enemy standing on a solid" was using entirely different code that didn't check this flag. Now it checks it when "Use 'Scripted Movement' for engine movement" is enabled. 
   >
- Chests not checking all layers for Armos/`Chest->Item` [`4f1a6d2a66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f1a6d2a66c7acf0086158dfc5629b441ba1e15d)
   &nbsp;
   >this caused chests placed on layers > 2 to open without giving you anything 
   >
- Enemy bombs disappearing due to negative fuse timer [`d996f1b9ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d996f1b9ae13a8e334568397619910cf2f51d91f)
- Bombs not resetting Timeout when exploding [`b831914950`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b831914950e57a60ffd74aae3d6ed6c5b400f12c)
   &nbsp;
   >Timeout is meant to function as an alternate fuse for these, but if it explodes before the timeout runs out, the timeout was leaking over to the explosion and killing it mid-boom. 
   >
- Light beams not working properly during stepforward [`1413c8f520`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1413c8f5207d89e962443a8fd9e78998043c9963)
- Item sounds sometimes being wrongly killed [`8bb98f0594`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8bb98f05944c81faa3a030bd7046d783d2b15e09)
   &nbsp;
   >The hookshot resetting code was killing the sound of the currently in-use item, without regard for if that item was a hookshot or not. 
   >
- Pushblocks not properly counting towards trigger groups [`6677d9b6e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6677d9b6e8d8032fe90bcb093ac1341651b9bd69)
- BS Overworld not respecting having the Map item or not [`3cacbc2fd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3cacbc2fd128a31f9e10f6929b13c89c99a55dfd)
- Enemy bad hitboxes for standing on the ground in sideview [`8513081f8a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8513081f8abd18b16cc0f000d6d7c308a2964bbe)
   &nbsp;
   >Enemies with weird hitboxes may still have other problems, such as walking sideways through walls, because enemy movement code is super jank- though the `Use 'Scripted Movement' for engine movement` enemy movement flag seems to help with those issues. 
   >
- New respawn points not counting damage combos or slidey ice [`88e4644fe4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88e4644fe49cfe6ab7ad008dc19e4304636c847f)
- Solid moving objects interacting poorly with water/pits [`bf4281c74f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf4281c74f2ff180532bc63b042d01ec3a33a338)
   &nbsp;
   >they now can push the player into pits, and no longer push the player while the player is already falling/drowning 
   >
- Prevent infinite loop in trig_trigger_groups [`bc0054ef5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc0054ef5bcf069574053a662a8fd0fa9f385c79)
- Combo general loop sfx cutting out when looping [`ec0e1a1268`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ec0e1a12687c7c011d809067289b356f59e98fc2)
- Knockback through sideview platforms [`147c1b0413`](https://github.com/ZQuestClassic/ZQuestClassic/commit/147c1b0413b6b46b3081bcfc7b4879017cef0245)
- Buggy solid platform sideview ffc collision [`c51805f07a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c51805f07a1087b689d80039987a4d8084c4a660)
   &nbsp;
   >When moving at angles the collision for riding the platform was getting confused with the collision for solid objects pushing the player, knocking the player off the platform weirdly. 
   >
- Shooter/crumble combos ticking when screen is 'frozen' [`d6c4678934`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d6c46789343383c30df67f1b70fbe6ce5255f00d)
- Prevent rng desync when manually ending replay [`8f20d39267`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f20d392673386d52b460bcf0ba6c40d0abd092d)
   &nbsp;
   >When playing a replay file, selecting Quit in the menu caused an rng desync dialog to appear. Now, the program actually closes. 
   >
- Deterministic high-precision math for gameplay and replays [`c44d4ff325`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c44d4ff325d1f67cffce02241f1e1ecb545b2e3a)
   &nbsp;
   >While recording a replay, trig (Sin/Cos/Tan) switched to a low-precision lookup table, so simply having a replay enabled could change gameplay. Separately, ArcSin/ArcCos/ArcTan and Ln/Log10/Pow always used the system math library, whose results vary across platforms and compilers - a source of cross-platform replay desyncs. All of this math is now both high-precision and bit-identical on every platform and compiler: recording a replay never changes behavior, and replays cannot desync across machines due to math differences.  
   >
   >As an example of how the old trig error presented: in Stellar Seas, a boss laser derives its collision geometry from trig, and the recording- mode error (up to ~0.001) was amplified by the script into "phantom hitboxes" - hits landing tens of pixels away from the visible attack, only while a replay was recording.  
   >
   >Other user-facing effects:  
   >
   >- Pow(2, n) and Pow(10, n) are exact, and Log10 of a power of ten
   >  returns an exact integer, so digit-counting scripts behave reliably.
   >- Replays recorded before this version still play back with the old
   >  math, bit for bit.
   >
- Walking/standing combo effects not blocked by bridges [`c374637443`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c374637443eda8013d26192a476fa8569b4d0e38)
   &nbsp;
   >this includes the general tab sfx/sprites 
   >
- Stomp Boots block flags being backwards [`68ef97426d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68ef97426d0c9842a79e437bb8052ab8e79c6069)
   &nbsp;
   >Regressed in 2.55.0 (de1cb2b). 
   >
- Frozen scripts wrongly having draws stopped by running strings [`98b0be2340`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98b0be23403c3c70af2e1c79dce26963b67d6974)
- SCC setting screen state of non-current screen using wrong map [`94b4872336`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94b48723361acb16791da3f33445dcf60ffc0d9e)
- Bottom 8px bad collision using 4-way newer hero movement [`d9faad3742`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9faad3742cd72348de8addfbee59fb508c5cfa1)
- Stop triforce pickup softlocking with low MP/HP counter settings [`8d1181cdfc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d1181cdfc2f6d27c173cf2dbc7a0bfd9fc0e6a2)
   &nbsp;
   >Picking up a triforce would freeze the game when MP per Block was set to 1-3 (or HP per Heart to 1). The refill animation never finished, so the pickup cutscene looped forever and quitting crashed. 
   >
- 1-wide gaps being hard to fall through in sideview [`c542da8ebe`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c542da8ebe13cc4b1e4d239fdd7960de66997912)
- Handle replay load failures gracefully with a GUI error [`90ddfd3d7f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90ddfd3d7fbe472c1a733adb96c8efaf1b328deb)
   &nbsp;
   >Loading an invalid replay could crash the program. Now, an error dialog is displayed when a replay fails to load. 
   >
- Prevent previous qst misc data leaking to next [`527c9699cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/527c9699cc03220e4754aa52d2c7ca1c775e4417)
- Hammer triggering combos outside its hitbox [`67dc1df14c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67dc1df14c34a086c02d272709081902dde4b643)
   &nbsp;
   >The hammer could trigger combos and secret flags above and behind the player, outside the area its hitbox was drawn. It was most obvious with the "don't trigger while the hammer is in the air" item flag enabled: on the first frame the hammer became active on the ground, it triggered combos where it had been a frame earlier, while still raised. 
   >
- Armos combos with custom enemies not clearing the combo [`564fa7fb21`](https://github.com/ZQuestClassic/ZQuestClassic/commit/564fa7fb2164fb16b2e978394da1f0d70ee9f1f8)
- Large armos bad tile offset [`9f8a9714b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9f8a9714b5996783f6646d3f5903b01898bc6c47)
- Auto Sidewarp combos not using the assigned Warp SFX [`70ab4774ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/70ab4774ae03eb28a6f4426aa919f3a2ee6e5199)

### Editor

- Remove unused wand attributes/flags from item editor [`14ede02c46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/14ede02c4670836f66ead03e7ad9d3cdd00f7f1b)
- Tile editor rotations sometimes undone [`a1d15cc88b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a1d15cc88be7657df4e5550e00454c3f1a9d1994)
   &nbsp;
   >Caused by a bug in tile caching code.  
   >
   > Discord: https://discord.com/channels/876899628556091432/1497685063649726545 
   >
- Preview mode combo cycling using bad colors for Ignore CSet [`13636edb06`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13636edb06d0fd464c20f5643c50e60fc9de71d3)
- Water/shallow water combo wizard not setting levels properly [`fec4002703`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fec4002703c47ac5ab19ee4c4dbe8aae96cce791)
   &nbsp;
   >If you didn't edit the `Req Item Level`/`Flippers Level` fields, they would stay at value 0, despite showing as value 1 in the GUI. For req item level, this could completely disable the passive hp mod. 
   >
- Don't show confirmation on exit in new quest wizard [`29f7dfedc0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29f7dfedc02ade1bf55c09a8724c94bfd1e38d33)
- 'block' missing from 'Mirror (Custom)' attribute help [`bf5cfa1d1c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf5cfa1d1ceb4e6da3a3fd114e8af2e9375c4ca1)
- Typo in ffc editor 'Swap' flags' info [`4e705ed824`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4e705ed824a1bd9ac206e2ef7f45aa1403f979c7)
- Avoid potential crash when drawing doors [`1c850ea5d7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c850ea5d7c947fd9293abe768d0063600aa619d)
- Clean up the string editor / add infobuttons [`80aae94aaf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80aae94aaf40b98a8fc73765119d57605ee70cdd)
- Respect "New Darkness Trans Layer Stacking" QR in editor [`13f5c6b760`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13f5c6b7605357225c2ec6ba430cdf45dce561a3)
- Clean up 'Button Counter' subscreen widget '?' buttons [`fe9053d1e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe9053d1e4e6bdcda1a1e13afa7d7eaf135c61f4)

### ZScript Standard Library (std.zh)

- CenterY for an item returned an X-based coordinate [`162013f324`](https://github.com/ZQuestClassic/ZQuestClassic/commit/162013f324e193a1fae2ca2ccb739d82ec1b9369)
   &nbsp;
   >CenterY(item, false) used the item's X coordinate instead of its Y in the sprite-center branch, returning a wrong value. It now uses Y, matching the hitbox branch and every other CenterY overload. 
   >

### ZScript

- Show correct code location for script drawing errors [`6fdd14f83e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fdd14f83e21fc8ea187bae744e31aae83f85594)
- Prevent DMap and hero scripts running twice on init [`8285221f7e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8285221f7ecea84a097dc1f76db133b60cfef85a)
   &nbsp;
   >The first frame of these scripts were incorrectly running twice. The exact behavior depended on whether these QRs are enabled:  
   >
   >- "Scripts Draw During Warps"
   >- "Passive Subscreen Script runs during wipes/refills"
   >
   >
   >&nbsp;
   >
   >This bug only occurred if one of these QRs was enabled.  
   >
   >Discord: https://discord.com/channels/876899628556091432/1494501078564339911 
   >
- Prevent crash from out-of-bounds sprite script IDs [`9202045134`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9202045134c5f04a02f3356ec70a0a4abb287a8e)
- Use proper gfx for script created sword beams [`559bdddf2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/559bdddf2a93e9768a070cc77076c6bf61b939b5)
   &nbsp;
   >This regressed in 9ca67c7b0 (2.55-alpha-120). 
   >
- `Game->CurrentItemID()` using a bad default value for bitflags [`fca4d972d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fca4d972d0f7d25fcdfbbfa5516b65abb642e057)
- Strcmp-family functions now always return -1, 0, or 1 [`6d55503949`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6d55503949b1ddcbc4c180e646b7aec1b7af34ec)
   &nbsp;
   >strcmp(), stricmp(), strncmp(), and strnicmp() returned the raw C library comparison result, which is only guaranteed to be negative, zero, or positive - the exact value varies by platform and compiler. Scripts comparing the result against exactly -1 or 1 could behave differently across builds. These functions now always return -1, 0, or 1. 
   >
- Free script-owned objects when a script's state is cleared [`201ebe3426`](https://github.com/ZQuestClassic/ZQuestClassic/commit/201ebe34261f5c494d2f609dd9649e47d1ff6ac5)
   &nbsp;
   >Resetting or clearing a script's engine data did not reliably release the script objects that the script had taken ownership of. Several script types that run in less common ways (like active subscreen scripts) could therefore leak these until the engine eventually ran out of slots.  
   >
   >Releasing owned objects is now an inseparable part of resetting or clearing a script's engine data, so it can no longer be skipped. 
   >
- Prevent crash when taking the modulo of the minimum integer by -1 [`3f09fc4fa2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3f09fc4fa2e30a8e96e395331a7ab48cafae3cf0)
   &nbsp;
   >Computing the remainder of the smallest representable integer modulo -1 crashed the game, in both the interpreter and the JIT. The result is now 0, the same as any value modulo -1. 
   >
- Remove unimplemented `Audio->PauseCurMIDI()` and `ResumeCurMIDI()` [`ff942cc537`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ff942cc537e449b2feacbdb49cabd5dcfba1b48d)
- Free objects owned by DMap and subscreen scripts [`97ac507bf8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/97ac507bf8e05f7454e5b6141e2312cda93d53ff)
   &nbsp;
   >Objects and arrays that a DMap, OnMap, or active/passive subscreen script took ownership of were not released when the script's state was cleared, leaking them until the engine ran out of object slots. 
   >

### ZConsole

- [win] prevent debug console from freezing [`bd68efde70`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd68efde70dbb45c73b36b6a19ef49f33087f1f5)
   &nbsp;
   >The named-pipe connection was treated as a hard failure when it didn't complete instantly, popping a modal dialog that could hide behind the game window (appearing as a frozen black screen) and orphaning the helper console in an endless retry loop. Connect now waits with a bounded timeout so a slow-to-start console attaches normally, and any setup failure quietly disables the console instead of blocking the app.  
   >
   > Discord: https://discord.com/channels/876899628556091432/1466588316492234815 
   >

# Refactors

### Player

- Copy cpos_update optimization from combos to ffcs [`07f75a7887`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07f75a788749d33f6371c57a58c9bf1fe3b8c9b8)
- Greatly speed up refresh_rgb_tables using last key cache [`809dd2019b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/809dd2019b0489189a934aa6044ec0560cbc129c)
   &nbsp;
   >This greatly speeds up the program within fade effects. For terror_of_necromancy_demo6_32_of_54.zplay it reduced the total CPU time being spent in `refresh_rgb_tables` from 60% to 0.3%.  
   >
   > Discord: https://discord.com/channels/876899628556091432/1507587209308409996 
   >
- Optimize code for common dithering args [`af60e181aa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af60e181aadcf1652119f751be46fff4cac93a63)
   &nbsp;
   >This speeds up dithering by a lot - between 3x and 25x depending on the platform. 
   >
- [win] remove obsolete vsync workaround (use_dwm_flush) [`8d33ad6b05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8d33ad6b0543391517134fa17d751b318cca26ac)
   &nbsp;
   >Remove a Windows-only screen-tearing workaround from the Vista/Win7 era, along with its hidden use_dwm_flush config option, which is now ignored if set. It was off by default and is redundant now: the display backend owns frame presentation, and desktop composition is always on in modern Windows. 
   >
- Greatly speed up dithercircfill [`d50e8a9da3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d50e8a9da3f2848957621abd2193748811f0efd2)
   &nbsp;
   >Discord: https://discord.com/channels/876899628556091432/1498203179395842058 
   >

### Editor

- Improve FFC hover tooltips [`78d9fc3d32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78d9fc3d326f28248c53fc78700940d066a4ad0b)

# CI

- Upgrade actions due to node 20 deprecation [`d64d2270dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d64d2270dcfdfc061c8adacc2f0d5f672fa62d51)

# Misc.

- Update rulesets [`f6b7cbcd56`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f6b7cbcd569aab2b2b9ba83103a964e77f05dead)

### Editor

- Remove darkness dithered corner by default [`a8b25517b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a8b25517b2a2d55aa35d97c532a57768fde1bc52)
   &nbsp;
   >Etc->Options->Toggles->Show Darkness Corner Dither toggles this Darkness now shows a line in Screen Info, to less obtrusively indicate dark screens. 
   >
- Improve infotext for string editor 'Layer' [`bc2ef07408`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bc2ef074089d445a941a4d2e24cd42083b70a5a9)
