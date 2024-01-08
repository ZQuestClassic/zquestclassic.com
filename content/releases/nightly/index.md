---
title: Nightly 2024-01-08
since_last_stable: true
date: 2024-01-08T02:37:33Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-08/nightly-2024-01-08-linux.tar.gz
    name: nightly-2024-01-08-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-08/nightly-2024-01-08-mac.dmg
    name: nightly-2024-01-08-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-08/nightly-2024-01-08-windows-x64.zip
    name: nightly-2024-01-08-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2024-01-08/nightly-2024-01-08-windows-x86.zip
    name: nightly-2024-01-08-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 136126613
tag_name: 'nightly-2024-01-08'
channel: '2.55'
tags:
  - releases
---





# Features

- Allow disabling resizability of windows (setting in launcher only) [`90085dd84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/90085dd848478dcd49ec8ee4cc0816fe8101de20)
- add 'Script1'-'Script10' shield blockflags, to block *specific* scripted weapons. [`de1cb2b66`](https://github.com/ZQuestClassic/ZQuestClassic/commit/de1cb2b66a8e6bebd8f086ed785b8f42bc09149f)
- add burn-based light radii for items, to change the glow radius when lit on fire. [`5f829d628`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5f829d6281dbc3fd3163a116e3a04e7c908a233a)
- LW_REFARROW, LW_REFFIRE, LW_REFFIRE2 (reflected arrows, fire, fire2) [`27c41e1f2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27c41e1f2a2b363de896de61e90efe49549d4d41)

### Player

- Custom mirrors can 'block' instead of reflect per-direction [`9ce509792`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ce50979253ca629da0bc5c32e3196fdc5d541b1)

### Editor

- Add warnings to combo editor (can detect problems and warn you about them) [`05188bddf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/05188bddfa86fdc1df919eec412f4066a54e4f6c)
- Merge 'Favorite Command' and 'Hotkey' systems [`cbb1ee991`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cbb1ee991411358e10ca564c2b7a5b1ee8ac4521)
   &nbsp;
   >Any 'Hotkey' can now be set to a favorite command, and all old favorite commands now have 'Hotkey's. Favorite command buttons will clear upon this update, as the configs have changed. 
   >
- Hotkey cheatsheet, open with Shift+? [`2f0f07d43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2f0f07d438ce505dc082c0519a2ac5402ae7f1bb)
- Item Wizard (Shields) [`bcf109db2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcf109db2779480d98a7c0fef8ebee1fc60e28e3)

### ZLauncher

- set save folder [`0269d0102`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0269d01022daac9d4a85ca09f2d75dea68924ec0)
- add options for window size, and cap max default window size [`47b273d89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/47b273d899b485b4da7aced613e09bf3ba15a7a1)
   &nbsp;
   >`[ZLAUNCH] window_width, window_height` in zcl.cfg  
   >
   >Cap max default size to 2x 
   >

# Bug Fixes

- prevent clock shifts from hanging the program [`b379a0ed9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b379a0ed9f22bc9dda28fc6597ce6e19abccad0c)
   &nbsp;
   >Allegro 5 doesn't use a monotonic clock that ignores suspended time, so day light saving shifts or even hibernating your computer can result in Allegro trying to do so much work to "catch up" that it hangs the program. See https://github.com/liballeg/allegro5/pull/1511 for more. 
   >
- shift key input no longer accidentally ignored [`c92f096a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c92f096a0adf4dc6ceee3350326968828825fc60)
- passive (non-button) items not respecting "Usable as a Bunny" flag [`84d7f07e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/84d7f07e89a1fac40400403fb35fc1d4a1483e79)
- ZScript metadata fields cutting off at semicolons in strings [`ab92b22e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ab92b22e7fb79ea16a4ef905eeebfe087edbada3)
- 'box_out' popups sometimes appearing squished in the upper-left [`ced3bfb71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ced3bfb71bae668a2fcf2c89fe9bcf9592407a8a)
- default bs patra has broken animation [`e846caa2f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e846caa2fd4fbe0db14b7a24facfc2884e056013)
- newer hero movement ladder polish [`172c7a5ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/172c7a5ef8223e28619e53c497ec4740fca3e74c)
- fairy npc not despawning when picked up [`45dfdd547`](https://github.com/ZQuestClassic/ZQuestClassic/commit/45dfdd547157374892066f154216af9eccb0a42f)
- being able to carry objects while swimming, when lift glove isn't swim-capable [`d06f44a33`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d06f44a3347bd3143003ad5248783c1712ea5157)
- 'Push (Generic)' combos not properly locking into place on block triggers [`80845040c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/80845040c6457c3e2c574e7b02be336a699ec4a7)
- deleting subscreens resulting in invalid/crashy data [`a29918a05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a29918a05398404aa3ae7ff00ffb8c701328d1b3)
- arrow key navigation in menus not resepecting hidden items [`883c2305c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/883c2305cf533c33b6c6cb4a4e14a69db224eec4)
- prevent 1.90 qst load compat from setting first dmap cont/compass to bad value [`f1e3c5bcd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f1e3c5bcdd5ad5296222d0804034f9d1a0f7388d)
- ZScript access to subscreen elements was missing a 'transparent' color option [`96c306004`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96c306004b4173f717923231146741db6b0f1a3d)
- zasm metadata not clearing properly when assigning slots [`33bb31162`](https://github.com/ZQuestClassic/ZQuestClassic/commit/33bb3116211fb34a5b82291594b8f4a5decac35d)
- implement set volume for GME music (spc,gbs,vgm,gym,nsf) [`76091a598`](https://github.com/ZQuestClassic/ZQuestClassic/commit/76091a5987d08ca64148e29d2b4c41d1e3b243d8)
- Enemy Flames not reflecting off of shields, even with reflect flag set [`2264bb083`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2264bb0834bf3b71b4d6d997500e0f1c10ee5045)
- issues with numbers between 0 and -1 [`1b44e3b2c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b44e3b2c81c46afe0b2331fea30de8fbd5d9272)
- swords not updating properly, sometimes [`915670436`](https://github.com/ZQuestClassic/ZQuestClassic/commit/915670436dd1134673b0554b117b75f57a61973a)
- old quest subscreen minimap titles overlapping [`dc548320e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc548320e7ac5143ba5726178aa4aba75c93f1d0)
- placing flags on layers not marking the layer screen as "valid" [`8c74b7296`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c74b72968670949fab9f0f6c5afbbe3bb4f89ce)
- ensure file is closed when qst fails to load [`c702f24fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c702f24fca10feb52420cc962f79d51e9c6e567f)

### Player

- Music not properly changing when using some warp types (ex. SCC warp) [`0aef5384b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0aef5384b0925a9aab759e013c2f03b90328b422)
- extra pushing allowed per screen [`8a798d0dd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8a798d0dda8d4d509e11bf5558151d7d592ac6f0)
- cheats menu being greyed out when it shouldn't be [`b24044c87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b24044c87c65c6ab3bfc17961aac4b8d7702e467)
- new respawn points not accounting for dmap offset [`d90410dcd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d90410dcd28e15dbf9c348a3aa40700809fc86a5)
- initialize fadevolume to avoid undefined behavior [`437c27b25`](https://github.com/ZQuestClassic/ZQuestClassic/commit/437c27b25c2812a9dc498db85afb867bf7321346)
   &nbsp;
   >This fixes a bug where music would randomly be silent or extremely loud.  
   >
   >Also, cap the volume used to play music to 255, to avoid ever playing it so loud again. 
   >
- set volume correctly when music changes with only fading in or out [`9274a675b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9274a675b6955a89c3a7053d0ec1172390e8b7c9)
   &nbsp;
   >For example, if the new music has a fade in frame duration of 0, and the old music has a fade out frame duration of >0, then the new music would incorrectly have its volume stuck at 0%. 
   >
- menu bar unaligned with dropdown due to menu using int scaling [`f8222be89`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f8222be894db93cd3b79e946f959039ff4e60df0)
- Swim speeds not being saved to save file [`2bbf51a02`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bbf51a02362e95a5eae7134fb4315b4a982551a)
- spotlights with color setting '0,0,0' or tile setting '0,0' now function [`8da01272a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8da01272a984af520ab49f9e5b105af03363d42b)
- Allow throwing lifted object without validating cost [`498f70f46`](https://github.com/ZQuestClassic/ZQuestClassic/commit/498f70f468ede4e3cc5ffddd94369bfac350aee4)
- thrown weapons now should hit enemies that they land on [`b11265992`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b112659922b3f05c0762cdd654137c4b16a9368c)
- all 'break on landing' weapons should hit enemies/the player that they land on [`fed7aab0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fed7aab0b975b764669ebcf680c0da7526990985)
- correctly make qstpath relative to quests dir in "custom_game" dialog [`019c880c6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/019c880c6169d5ad1486b442524d9d6990a80d81)
- use correct sav path for -standalone mode [`9346ac6a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9346ac6a84e178119b4e7b23014f8753cd6897ae)
- prevent bad module path being set after exiting [`3a4e16d4b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a4e16d4b71d498f819c824c20658696a1721b12)
- improve main menu responsiveness [`5dd96666e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5dd96666e1710d5ff82e170c6f5cb7cb15efdce6)
- system menu not closing on reset/quit/etc [`049532ccd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/049532ccd1dabbf09fd80dfc2beb1ade407a9569)
- fix 'warp' SCC sometimes not closing the string [`7601d2fb7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7601d2fb7279835ebdd8e2e6c9a112d7c07eecfa)
- use more performant throttleFPS instead of rest in system menu [`0de39b360`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0de39b360e58e30e603b5555d58641d4c8ca9690)
- remove accidental double compilation for global scripts [`f30fd983f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f30fd983fa6abc90613e0d751c4b76e0a70ff3e5)
- draw to correct bitmap when showing button clear prompt [`6e204d4fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6e204d4fc20fe854d6ef3abedb0675ade3da4898)
- minor replay determinism bug for subscr_item_clk (selector animation) [`825844706`](https://github.com/ZQuestClassic/ZQuestClassic/commit/825844706aace99d0c6348093383fbb5eb2502ab)
- only assign save path just before actually writing to disk [`603e96444`](https://github.com/ZQuestClassic/ZQuestClassic/commit/603e96444f66001a9162461ebfc2fb85814422af)
- call saves_do_first_time_stuff when changing slot qstpath [`db4cf98c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/db4cf98c2a906647e8dd77689d7dfb962b83919f)
- handle edge case when changing unplayed save file qst [`79564453f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79564453f0e72a1ec32193bc366c11641e7b8b16)
- prevent calling dmap script twice in scrolling dmap warp [`e8edc34e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8edc34e90b4ea9acce0c6c9f9409949ff88f8e8)
- set previously unset save_t write_to_disk in all places [`adca2b376`](https://github.com/ZQuestClassic/ZQuestClassic/commit/adca2b3761310cd75c1eb1a6a3c78af2c604a98d)
- not showing error dialogs in title screen, and unbreak -only switch [`c32a29d1d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c32a29d1d1418f7d7809ff97132329966bea9bb4)
- clear spin state during screen scroll [`7ca93107b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7ca93107b885c7ac5176378e0d15dd614e10f7e0)
   &nbsp;
   >This avoid a ghost sword visible during scrolling, and also prevents a nasty bug where the player's action state would be frozen until hit. 
   >
- prevent crash in save creation by resetting global vars [`2b3c4119d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b3c4119d85086e21cb321bed799a5ea167ebe15)
   &nbsp;
   >When a game is loaded, many global variables are initialized to a known state. These variables were not reset when the game ends and returns to the title screen. However, save creation happens to call code that checks the active subscreen pointer, which was invalidated. Accessing this could randomly crash or corrupt the program.  
   >
   >Now, these global variables are reset also just before loading the title screen. 
   >
- prevent failing to save after continue [`870510c96`](https://github.com/ZQuestClassic/ZQuestClassic/commit/870510c9691d653edd8a99649f3a737a1a25dcb8)
- lift glove 'disable item use' not stopping sword SFX from playing [`3e6fe6e05`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e6fe6e05254e5090a1802811c9abef3fae03dce)
- remember last save slot position when returning to save select screen [`a3bc81309`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3bc813096c18cb5ab5602ab9afb9c03db8d4011)
- [win32] invisible hero because of MSVC bug [`511934cea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/511934ceaf8c2692984c87443c037076be73cc69)
- remember cheat on continue game [`99675afa2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99675afa26921869cd2e019129d0064a3ca908b7)

### Editor

- prevent flickering for minimap tooltip [`69948f334`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69948f334fc2323f3408bf2b2dcc7fd0db1a6eeb)
- Tile editor checkboxes not clicking [`983a17add`](https://github.com/ZQuestClassic/ZQuestClassic/commit/983a17add27502b54fc7c52d6b7dd81243e94be8)
- disable unpack cache to fix tile rotate/flip [`fed7b7732`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fed7b7732749b2a27023739967de51304e7e5065)
- tile page rclick "insert", "delete" was swapped [`0b9bad2a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0b9bad2a61a88e2a4587405a094a7b2a7f85eb56)
- disabling tooltips works again [`409abe1ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/409abe1ff09ab57144418ceb0aee25528f7a645b)
- item editor candle text goof [`17852c009`](https://github.com/ZQuestClassic/ZQuestClassic/commit/17852c009230bd121b600878b9cf9a57a684dc0f)
- 'Go' in warp dialogs not rebuilding transparency table [`d41040b13`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d41040b13906890a61b2f005237870ce91e68d73)
- fixed warp ring dialog [`1f05880ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1f05880abf48386f40c956533d8481c32589b6ce)
- wrong button focused in zscript compile dialog [`41a07b400`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41a07b40041ab817de6eacae2ed55cce154a204b)
- tile editor bugginess [`87cd522a9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87cd522a98173c9f22b3b5e16c0e91735140e42d)
- Polish numpick dialog, fix new gui focusing [`f9852b3f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f9852b3f6e3155e1c86ee11a8d1c0db9fa5d773f)
- Crash on changing map count [`92c190255`](https://github.com/ZQuestClassic/ZQuestClassic/commit/92c1902557b27a6c320f3d59d345d16be8266a08)
- timeout of 0 for parser timeout now acts as "no timeout" [`975602f22`](https://github.com/ZQuestClassic/ZQuestClassic/commit/975602f22fc4ac453bd61cc8c1c959d37c54f405)
- 'File->Exit' not exiting [`5db531ab7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5db531ab7066f1fb03afbca13b553df7ca01f580)
- 'Scroll to Combo' on screen rclick being offset [`5497092dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5497092dc23cedf28e89470cd4620f023c9967a2)
- greyed out pasting in string list [`f2440669d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2440669d88570d5fa98308b68600b2fa4924284)
- create test init data relative to qst init, not base init [`fadfe7d74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fadfe7d74fbf9216cd8613bee693c6bd5f9d1179)
   &nbsp;
   >This was originally done this way to avoid changing test init data when the quest's actual init data changed, but that maybe is not as useful as the other approach.  
   >
   >Also very simply fixes the problem of screen data (and other init values) not being properly set. 
   >
- autocombo/combo pool/combo alias pages RClick menus being offset [`d3e276c4d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3e276c4de792eaa4b935782ec76cfe86db4232f)
- 'Open Tile Page' on combos not using the ORIGINAL tile of the combo [`7009db89b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7009db89b8984d0be0a3c1fc896aed1709349c2f)
- disable tooltips when hotkey cheatsheet is open [`bcae99ea1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcae99ea1d69f599b09b9b664ab73320908a3dec)
- clean up several issues with the warp dialogs [`378766362`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3787663628b1fe36682df755ac3765ca0822f247)
- options->fonts being broken/inconsistent, not saving changes [`cc2cb75cd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc2cb75cd04100a2d896e996dc3f54e4f0c9eabd)
- undefined memory write when applying modern quest ruleset [`2ed538d97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ed538d975d33a94fd91cdbf9d66ae28fa16ac73)
- lockblock/chest combo wizards not saving 'Use ExState' flag [`2a3eb96fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2a3eb96fd4d6d7793ac3e26b320fb3d89e87528e)
- some more issues with warp dialogs [`e9ab158ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9ab158aebe39c5fed17bd7350324cc6f3da47ed)
- warp dialogs not properly previewing negative xoffset dmap map-marked squares [`b593e46bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b593e46bf7ced06a94a0e1f8f08a1c2c1ae454e3)

### ZScript Standard Library (std.zh)

- DMFS_ constants being off-by-one [`7fc001530`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fc001530b1f39c823ec4bfd466a200ee5592028)

### ZScript

- 'subscreenwidget->PerContainer' not working [`9d7c222dc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d7c222dcd87c77d89bbcf71565b1b4bcda072a1)
- al_rest crashing when using debug feature [`6058be2ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6058be2ba7566ce9918314f64c5ee614428008b3)
- parser configs not working [`74a81247e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74a81247e06e0ac62260094d09cd36cdaed4ef2e)
- issues running destructors [`7d0dc5299`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7d0dc529926a64c13a020183361badd88d47edef)
- handle rare COMPAREV2 for x64 jit [`0fc3edd39`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fc3edd398d4c9a1bb501091d63291150ca20797)
- sprintf giving a wrong error message on %c [`180b66fc9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/180b66fc90c4b1f98f264ae7f49018d5baebb31c)
- 'Screen->SetExDoor()'/'mapdata->SetExDoor()' not opening matching doors [`88f2ab405`](https://github.com/ZQuestClassic/ZQuestClassic/commit/88f2ab4056605fe9b0a3933350fba3408c9c161d)
- grab correct value from stack for POPARGS JIT x64 [`504f87a71`](https://github.com/ZQuestClassic/ZQuestClassic/commit/504f87a71d2a9b5ecbc7511a45a3ea0c57250e55)
   &nbsp;
   >This didn't seem to break anything, but it showed up as a difference when comparing registers from JIT w/ non-JIT. 
   >
- Hero->WarpEx not using dmap xoff when setting continue screen [`e21ba53d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e21ba53d04b291e2e63b5172766d34bdff1e4ab5)
- global var initializers not erroring when non-constant [`e1b10e2a0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e1b10e2a090f0737b4ddf2145ec6dc413048bb51)
- escape character \" not working properly in string literals [`a08d4a149`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a08d4a149598fdec7a3bd734c092a9f5a32163d5)
- invalid character errors wrongly occurring for values 128-255 [`2cfe2e472`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cfe2e472bf3a292bca81cd8cd1e62e60232b7ab)
- subscreen widgets not allowing SUB_COLOR_TRANSPARENT to be used [`77346b0c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/77346b0c86b5b493cf46284d7fa4d6576af9fc4e)
- class function params with same-name as class member not shadowing properly [`5659c8ebd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5659c8ebd8668b9df137d80f2896e6a5e97218ce)
- class/object destructors stack being offset wrongly [`79079c766`](https://github.com/ZQuestClassic/ZQuestClassic/commit/79079c7667a5360eeb72f8f75997f2d76d81855c)

### Web

- use zc-data.nyc3.digitaloceanspaces.com for now [`af524e98f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af524e98ff4c5228c173a4887886af4588cb45ed)
- "Copy URL" in player now uses correct test params [`8b5eaf56d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8b5eaf56dcecb2fb867cf10cee61d26a72653f68)
- sync fs when writing save order txt file [`e006c07a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e006c07a7a42cd69940a582f26b0527532381948)
- quick save creation link working again [`9e4c8a90f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9e4c8a90f70944a8a85ef506de59c1189ec87bc0)
   &nbsp;
   >The `quest` gamedata field was inadvertently set to 0 because the save file was prematurely selected before being saved for the first time, which prevented anything in `saves_do_first_time_stuff` from sticking. 
   >

# Documentation

- add a couple missing subscreen widget script docs [`f55a272d0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f55a272d0fb630bd121f01a20d1c138526254306)
- document DrawTile '-777' rotation behavior [`8bfb995e0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8bfb995e0f7630cc2d56f66cecb581d38d4f2635)
- fix typo [`9dc086113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9dc086113ed1b005d004bd95be4c43be52ca2369)
- update zstrings.txt to mention the "Insert SCC" button [`bd084e245`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bd084e24557dbb34fbb0fb473930fcac6608a8c7)
- fix some issues with the webdocs [`569adf358`](https://github.com/ZQuestClassic/ZQuestClassic/commit/569adf358171e91ec0dbcd956541c00649a7e43b)

# Build

- fix missing libpng for web build [`a6c345e5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a6c345e5a359e90f8825067eba14a273f9dadda1)
- fix missing libogg for web build [`a5254efa0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a5254efa02e0533cd375b1bd8da60c41f3ce6af2)

# Refactors

- remove unused 'VSync' option (it didn't do anything) [`74bbc05b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74bbc05b773ac8504f3a03475f7652d5bc2aa409)
- key files [`d0864dc8d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d0864dc8da091de308b1bc921aafc96b51eeeb27)
   &nbsp;
   >Now work from the folder the quest is in OR the exe is in, and saves to the folder the quest is in. Also cleaned up the code for handling reading key files. 
   >
- remove unsupported color_depth option [`f827b35bb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f827b35bbf2f87febb529c32c64cd72ae6b74917)
- load text files more efficiently [`663e4dacf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/663e4dacf1e94fed56d4970930fff61ed274600f)
- don't tint behind dropdown lists (allow skipping dlgs tint) [`cb8f87135`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb8f8713578e893518222aba61bdbcac4bffa2bb)
- Menus (new sleeker look, much cleaner backend) [`df3b5ab5b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df3b5ab5b58145ea61314221a387ffe0351c0b65)

### Player

- remove unused volume code in read_saves [`244b8cad0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/244b8cad0dd3cf18c90395195e2cd57c549aad11)
- move x64 backend jit code to separate file [`f3d40e0b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3d40e0b7ba899f79be44cdd99350b812c965fdb)
- move global inits from init_game to new init_game_vars [`c4f5c11ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4f5c11aed38f8aeface2729c70391f083ee5299)
- make lamp_paid not static for replay determinism [`534d82e91`](https://github.com/ZQuestClassic/ZQuestClassic/commit/534d82e918e1b58184959a97f0bbd3891c1e40fb)

### Editor

- Clean up Tile/Side/Ring warp dialogs [`34b7addff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34b7addfffd6c7f1ee6b690884c19c46bb7b93cb)

### ZScript

- optimize script lookup by name [`9ee5c4ba8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ee5c4ba81693a93056738f03ea439b6973650f5)
- copy script entry to tempfile quicker [`267bd5af2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/267bd5af20658100278850b659b17d790a7bdfe1)
- manually parse config file, drop al_init [`28fe49bc6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/28fe49bc6fd1dc6387edb0c3f2b37a82f177d07a)

# Tests

- save replay result file when starting replay [`62165c822`](https://github.com/ZQuestClassic/ZQuestClassic/commit/62165c8227fecf41f0ab11a19201a63b5c95d7e9)
- suppress timeout check on frame 0 [`487351025`](https://github.com/ZQuestClassic/ZQuestClassic/commit/487351025193a27e4f66da887bc7b757be1d74cd)
- update 'triggers.zplay' [`218609b0b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/218609b0b21ee24574717ab24251edd32f0b97b6)
- add '--output' option for zscript tests [`ae45b645f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae45b645f2e669d109d798213e787fd3ddc8cabf)
- fix zscript subfolder tests not running (and update) [`0e35a067e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0e35a067ea5ddc9676831ef6edbbb4f266feffb3)
- update errors_2_expected.txt [`ce9e615a7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce9e615a7de834554e88611a5739f6af78af49d6)
- filter out expired test builds in bisect_builds.py [`2bdc2354a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2bdc2354aa2d2337f23e3c62157ab94c51e8bf6b)
- prevent infinite loop when zplayer exits before first frame [`a56646b40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a56646b408b6f1df31dd38723349fc21108c79ef)
- add nargads_trail_crystal_crusades.zplay [`08c75565d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/08c75565df7dd48e53592c8444781f59b75dbf25)
- fail replay test if jit cannot compile a script [`9ca544889`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ca544889a07c0c484d3c523085ddc4afa975a17)
- fix local webserver when offline [`804520e40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/804520e4075138097733680671c0d49d8922787f)
- include js script in web replay test stdout/stderr [`3c162e5b2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c162e5b2a92bb59e9977681b9837687618ae0a2)
- add umbral_cloud.zplay [`0a0826577`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0a0826577a155cedbeab0b10ef2eff22a9cf61fd)
- add pageerror listener in run_replay.js [`ee98991df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ee98991dfea7fe05adf26a5d005ec84ff0a20f6f)
- fail on abort in web replay tests [`3b0da67b4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b0da67b43f8e195fc99a3adc21a3651559b7af3)
- stop on fatal errors in run_web_version.js [`d69ad2aaa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d69ad2aaa9fc38fb7163722ead134293a2824bc2)
- set write_to_disk in saves_test [`297b5433e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/297b5433ee0179c49f8a33ca243db634dbf5093d)
- add "frames" and "length" meta fields to zplay [`35da8a5eb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/35da8a5ebb3f121c88dbae98b3431e64f259337c)
- use "latest" version for all playground.qst replays [`42b94c785`](https://github.com/ZQuestClassic/ZQuestClassic/commit/42b94c78549d55fb42bbe8114bbd55679ae00b7f)
   &nbsp;
   >These replays should be trivial to update as needed, and using no replay compat code makes them far more useful for verifying specific features. 
   >

# CI

- update vcpkg [`00f89c2c7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/00f89c2c7dbdfd2697a8c1db6cf7d4b65db693aa)
   &nbsp;
   >Apparently vcpkg has issues with retaining build assets long term. Being forced to update to latest as something we need expired.  
   >
   >https://github.com/microsoft/vcpkg/pull/30546#issuecomment-1819985146 
   >
- set correct test results folder for web replays for upload [`9413f492c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9413f492c1a2dbf7d8b9190e87481b0cbd1b3da1)
- use improved lfs cache [`69740f37c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/69740f37c00819aaac91e836cd8b0a19cf847e94)
- use RelWithDebInfo for win32 tests [`2eb360aa3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2eb360aa3639919ae4f03fd38864ff55cdb57810)

# Misc.

- Allow scrolling info popups [`6fb7e9304`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6fb7e93046e881319c5dbf5bd3f3bb9002b4d4b9)
- Remove '(Experimental)' label from FFC solidity [`5a4663794`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5a46637948043932272b824eeaee6ff169240e4f)
- add 'peekkey()' / 'upeekkey()' local allegro edits [`7022b0ee4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7022b0ee472fb7ed4eea63eca83221b088cff8f0)
- clean up menus, particularly the zc main menu [`5ae6e3d64`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5ae6e3d64e53f5ecaa33d4d6ada1d0452b7d0c8c)
- Remove whistle delay for new replays [`ac0017e2a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ac0017e2a8aab18950dcd2e13a913384dfaf9a31)
- update default fonts to be same between base_config and 'Default:' button [`e8b85365d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8b85365d3c9909f821248eeced719588ca2439c)
- help text to indicate use of A1/A2 values on ffc/item editors [`599d6f70c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/599d6f70c3a55ee06a175b574d7d9005776c123a)
- remove noisy allocation logs [`32bf8f42f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/32bf8f42f0ff41d0ae308a3eeb6eb33ae8c8f7b1)

### Player

- show current frame count when recording and system menu is active [`0f4e8a00c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0f4e8a00cbc989e0c6ec9e92a9c06756b10aa596)
- improve error message when qst title does not match save file [`069e15113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/069e15113fb08e457f56482e0d3f841f9cb5f946)
- support "latest" for version field in zplay [`5870d858b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5870d858b8f0a7ad71e09e74f4b7b8286bc7e989)

### Editor

- Add hotkey for rebinding hotkeys [`af954f385`](https://github.com/ZQuestClassic/ZQuestClassic/commit/af954f3851c9fb8d5a81386bc4a05956e32406f5)

### ZScript

- internal label errors now prevent compile [`1b0d63bfa`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1b0d63bfaba434f12f157611a4aa33c65e011073)
- add 'itemdata->LAttributes[]' to access attributes as a full 32-bit long value [`83f9d2d03`](https://github.com/ZQuestClassic/ZQuestClassic/commit/83f9d2d0388d11d9eafe0b41992cf22fa2c6f85b)



