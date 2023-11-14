---
title: 2.55 Alpha 117
description: The one with the subscreen rewrite, software updater, music mixing, and individual save files.
date: 2023-08-30T07:39:43Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-117/2.55-alpha-117-linux.tar.gz
    name: 2.55-alpha-117-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-117/2.55-alpha-117-mac.dmg
    name: 2.55-alpha-117-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-117/2.55-alpha-117-windows-x64.zip
    name: 2.55-alpha-117-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/2.55-alpha-117/2.55-alpha-117-windows-x86.zip
    name: 2.55-alpha-117-windows-x86.zip
    platform: windows-win32
prerelease: false
id: 119194353
tag_name: '2.55-alpha-117'
channel: '2.55'
tags:
  - releases
---


# Features

- Add 75 new 'Custom Counters' (26-100) [`c30c57aa6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c30c57aa660646ecb522f61b09863bac0751fd99)
- Music and sound stuff galore!
   &nbsp;
   >- Enhanced music using MP3 and OGG can now be given loop points and crossfade timings in the DMap editor. The music will then loop at those points and fade in and out with those timings.
   >- Scripts have new ways to interact with enhanced music: GetMusicPos(), SetMusicPos(), SetMusicSpeed(), GetMusicLength(), and SetMusicLoop()
   >- Scripts can also play music with crossfades using CrossfadeEnhancedMusic().
   >- Scripts can play sounds with different, volume, pan, frequency, and looping with PlaySoundEx().
   >
   >
   >```c
   >// Turns a SFX into an instrument by playing it back at different frequencies
   >ffc script Piano
   >{
   >    void run()
   >    {
   >        // Frequency values and keys for different notes
   >        int hz[] =   {16350L, 17320L, 18350L, 19450L, 20600L, 21830L, 23120L, 24500L, 25960L, 27500L, 29140L, 30870L, 32700L};
   >        int keys[] = {KEY_Z,  KEY_S,  KEY_X,  KEY_D,  KEY_C,  KEY_V,  KEY_G,  KEY_B,  KEY_H,  KEY_N,  KEY_J,  KEY_M,  KEY_COMMA};
   >        int sz = SizeOfArray(hz);
   >        int sfx = Rand(60); // Pick a random SFX
   >        while(true)
   >        {
   >            for(int i=0; i<sz; ++i)
   >            {
   >                if(Input->KeyPress[keys[i]])
   >                {
   >                    int j = (hz[i]/hz[0]) * 22050L; // Multiply by the sample rate of most default SFX
   >                    Audio->PlaySoundEx(sfx, 100, 0, j);
   >                }
   >            }
   >
   >            Waitframe();
   >        }
   >    }
   >}
   >```
   >
   >- Scripts can also adjust sounds mid playback with AdjustSound() and track their completion with GetSoundCompletion().
   >
   >
   >```c
   >ffc script AdjustSound
   >{
   >    void run()
   >    {
   >        // Play the sound panned to the left at half volume
   >        Audio->PlaySoundEx(SFX_SECRET, 50, -128, -1, false);
   >        // Run until the sound has stopped playing
   >        while(Audio->GetSoundCompletion(SFX_SECRET)!=-1)
   >        {
   >            int pct = Audio->GetSoundCompletion(SFX_SECRET) / 100;
   >            // Pan the sound to the right while increasing in volume
   >            Audio->AdjustSound(SFX_SECRET, Lerp(50, 100, pct), Lerp(-128, 127, pct), -1, false);
   >            Waitframe();
   >        }
   >    }
   >}
   >```
   >
   >- Scripts can set MusicRefresh to prevent music from resetting when changing screens
   >```c
   >Audio->PlayEnhancedMusic("ExampleSong.ogg", 0);
   >Audio->MusicRefresh = MR_DMAP; // Music will refresh on changing DMap
   >Audio->MusicRefreshFlags[MRF_REVERT] = true; // Music refresh with revert to default behavior afterwards
   >```
   >
   >
   >   
   >
   >- AdjustMusicVolume() and AdjustSFXVolume() have been reworked to be a multiplier capped at the user's volume settings, rather than overwriting those settings.
   >
   >&nbsp;
   >Relevant changes:
   > - feat: Music and sound stuff galore! [`463a6d1dc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/463a6d1dca9cf4833d2eb124f9dcde4cd069497e)
   > - feat: music looping and length functions for ogg and mpick p3 [`0d00efce4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0d00efce47ba8c0010f59b3ddb186e0e5d8bf331)
   > - feat: add enhanced music loops for dmap music [`8c6f66142`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c6f66142b932ab9cbd0a3f41cb8fb54247e6e72)
   > - feat: add enhanced music loops for dmap music [`1bf93ebc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1bf93ebc31f9bee32b18d96913a6351b791c8531)
   > - feat: PlaySound with different volume, pan, and loop [`f7afa08a7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f7afa08a78d582ce46e3fdbd9b31c875d5de2873)
   > - feat: added frequency param to PlaySound() [`51931b91f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51931b91f6fef440b7575f5513ff7f8e82c83d72)
   > - feat: added crossfading enhanced music [`d03c55c0d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d03c55c0dc6ce22087352026a3fecadef78a16af)
   > - feat: dmap editor crossfades [`5e34b007c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5e34b007c57d58123fa209b55a730fe43b3f7beb)
   > - feat: zscript access for dmap crossfades [`435449e33`](https://github.com/ArmageddonGames/ZQuestClassic/commit/435449e335a7a5b939129da54990d5ed47c4009b)
   > - feat: MusicRefresh setting for ZScript [`5df225ec7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5df225ec79b99039e06a1e60b6aa69d8a959a826)
   > - feat(zscript): dmapdata music loop point access [`fc8fa9918`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fc8fa991836b97634cb6c9e5237aac9ccd318bf4)
   > - feat(zscript): GetSoundCompletion() [`a2df0883a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a2df0883a0334829b68c370c30a8c1d8007ba341)
   > - feat(zscript): Split MusicRefresh into MusicRefresh and MusicRefreshFlags[] [`679b79c50`](https://github.com/ArmageddonGames/ZQuestClassic/commit/679b79c5060e05d3ca51e2c30afa36e0d30f2c30)
   > - fix: changed how crossfades interact with F1/F4 [`9274b2990`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9274b2990bacfc9c6d5480b0393e4ed3f8b1fff2)
   > - fix: fademiddleframes in CrossfadeEnhancedMusic() [`2fb00213c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2fb00213c27463d897e41f895a28755f630126ef)
   > - fix(zq): missing mirrorDMap and loop points from dmap import and export [`b694fba13`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b694fba13719becd2818ea21b1ef1086fff402d2)
   > - fix(zscript): CrossfadeEnhancedMusic() now keeps playing old music on failure and returns a proper result [`57c6aa58b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/57c6aa58b06ce0b4ee2ac66999e2ca5ec406c4ed)
   > - fix(zscript): rename expanded Audio->PlaySound() function to PlaySoundEx() [`e96efb263`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e96efb2632ce05277113bbd58dc72a66eb08218c)
   > - fix(zscript): GetSoundCompletion() crash when the sound is not allocated [`edf58c67d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/edf58c67d8d83f2578ab69d5803f7ea718c01fc3)
   > - docs(zscript): docs for Crossfades and MusicRefresh [`589df961c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/589df961c64046314201424bdbac033ef3f4a560)
   > - docs(zscript): webdocs for new Audio features [`93ec63eea`](https://github.com/ArmageddonGames/ZQuestClassic/commit/93ec63eea56a734d9213a4a2e241d121bba5d833)
   > - chore: attempt to fix ubuntu compile [`0f17db7cc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0f17db7cc4b7eb6428f7a1a23a53566b37cb6bc4)
   > - chore: Merge branch 'main' into music-backup [`8c3412b96`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c3412b96f9ac5a7f9756a611bc0244e0ac51252)
   > - chore: merge main into music branch [`11d792fb4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/11d792fb45aa4ab2c0dd5fb0a5c7bf07295ab13f)
- qr for mirror/prism combos working on all layers [`5eb173a5d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5eb173a5d33f9709dae8f1f5d20e4a437ba84b73)
- 'Dive->','Dive-> (Sensitive)' trigger flags [`ceef20ab1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ceef20ab19a84ac76ee1fd6efb6642a445365e45)
- Lens can show/hide multiple different layers per screen, can include layer 0 [`1e603b650`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1e603b6500c6d3a7b6544c72031d918c11c00eeb)
- Can now disable pushblock draw layer [QR `Pushable Block Sprite Layer`] [`dd365e844`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dd365e844116873b0d6bf73ba93dee803c308bfe)
- add software updater
   &nbsp;
   >ZUpdater looks for the newest versions, and allows you to download and replace your current installation with it.  
   >
   >You can run `zupdater.exe` directly, or you can use the new "Update" tab in ZLauncher. ZLauncher also has an option to auto-focus the tab on startup if a new version is detected.  
   >
   >Note: this feature currently requires Python 3 to be installed.  
   >
   >Also: drive-by fixes for launching a process on unix, though the updater feature doesn't use this. 
   >
   >&nbsp;
   >Relevant changes:
   > - feat: add software updater [`5b3162034`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5b3162034226d0a7d0e00679df0080eb0fd5d16e)
   > - feat(launcher): re-open launcher after update [`ad58eb0ab`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ad58eb0ab7b2aec8689bfd29af3cd5f3bc52513f)
   > - test: re-enable updater test [`e11f6058b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e11f6058b607fca5fcf6e951d3305537c95009fe)
- Add 'Game->OverrideItems[]' to allow forcing an item id to be "highest level owned" of its' class. [`bc232375d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bc232375d93e89e271d1df48b40e93d24f88d502)
- One-line minimap titles, 'Preview DMap' for subscreen editor [`f02222644`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f02222644b4de870ad6a925d307e38eda818f2ba)
- allow copying subscreen pages (including across subscreens, and quests) [`501cb73da`](https://github.com/ArmageddonGames/ZQuestClassic/commit/501cb73daf2ef2ebc34e6cd3d8907871e588efb2)
- setting for subscreen widgets to hide during message strings [`bc1773d55`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bc1773d55ab49cb315d69327a573edf48a5060f8)
- parser timeout is now configurable/disablable (instead of 30sec) [`f3cc92471`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f3cc9247199a6e84d869bcb69f9999f907bea5f6)
- expand combo initd to [8] [`ef17c9542`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef17c954205c22bdec98fdad7ad7a710fe2cba56)
- walk-through nes doors now set door states when used [`ab3ffc86f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ab3ffc86f09bbb05618dec9367fd1702172cb221)
- allow closing program with (most) dialogs open. (clean up gui functions too) [`be04a5ee5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/be04a5ee56e7562a0e62b292008979cf056b106b)
- add 'Button Counter' subscreen widget type [`09a871e0c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/09a871e0cde21dab8e59eb235ee961f514882cfc)
- 'No Unequip' flag for subscreen itemslot widgets [`95781cec3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/95781cec3d557711c85d91cfc5f383a2d943c021)
- new subscreen selector options (per-widget and subscreen-wide) [`cfb498ffe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cfb498ffe970f6def6db0ec16d4388b15bd06606)

### Player

- split saves into individual files [`b6b151149`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6b151149c4e644ddf936751fc0bfc8861e0db9d)
   &nbsp;
   >Each save slot created is now stored in a separate file, kept in the `saves/` folder. This path is configurable with `[zeldadx] save_folder`.  
   >
   >An existing `zc.sav` file is split into individual files, and the original is moved to `saves/backup`.  
   >
   >The order of the save slots is maintained by `saves/order.txt`. You may freely rearrange the lines of this text file, though you must do so when the program is not open for it to have any effect.  
   >
   >Any save file that gets deleted will simply be moved to `saves/deleted`. If you ever want it truly gone, you can delete the folder yourself. If you want to restore it, just move it back to `saves/`.  
   >
   >Individual save files are only loaded into memory as needed, and only partially if only needed to display info on the title screen (like the name, icon, hearts, etc).  
   >
   >The `-standalone` switch still works the same, but the save file is at `saves/standalone.sav`. 
   >
- change save slot limit from 15 to ∞ [`1e0794e25`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1e0794e2589afb8ee495437595c5da99b20ee46d)
- copy save file to backup folder on every save [`bfa22af7b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bfa22af7bcb92ebc27bec1a8262d8ba2a1937831)
- support more than one qst file for -standalone mode [`7ebfcf8d3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7ebfcf8d3e9b0b53c7b1bc73ad318af925941cd8)
   &nbsp;
   >Previously, standalone mode only worked for a single quest file at a time. For example, run `-standalone game.qst` once and `game.qst` becomes the only quest that will work with the save file generated. Now, each quest will use a save file derived from the name of the quest file.  
   >
   >You can also provide a specific path if you like. It will be resolved relative to the `save/` folder (you can also use an absolute path). Example usage: `-standalone game.qst me.sav` 
   >
- record music and sfx position for scripts in replays [`7c1bd3b22`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7c1bd3b22d61b033397fc04514b3f14bc6a5bd2c)
- configure primary and secondary gamepad stick in settings [`b5b94f9ce`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b5b94f9cee518c529035b6c5990a0ed4e4db741a)
- select one of multiple gamepads in settings [`2a1198ff1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a1198ff194fa5fbeae74b2a3cbf13c3b50b619d)
- add option to auto-restart in test mode when qst is saved in zquest [`32d7f0497`](https://github.com/ArmageddonGames/ZQuestClassic/commit/32d7f049775a55de00da3f3286f8f18358826d1c)

### Editor

- Remember 'View Layer 2/3 as BG' setting [`e04aeaf47`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e04aeaf4791af30e923a1595c58ec7ead241cd88)
- add Shift+Minus/Plus for changing combo in combo editor [`f77eb091b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f77eb091ba6129886fdb86d7ce68617d4c5ea19c)
- configure multiple init datas for test mode [`44d7ecf90`](https://github.com/ArmageddonGames/ZQuestClassic/commit/44d7ecf90740c0ce31a51d88cc84daddb888b291)
   &nbsp;
   >Test Mode now allows you to customize test-only init data. You can make multiple init datas. They are saved to your `zquest.cfg`. A basic name is auto-assigned, but you can set your own name by modifying your config.  
   >
   >When you create a new test init data, your current quest's init data is used as the starting point. Later modifying the quest init data has no impact on your test init datas.  
   >
   >You can also directly modify the init data values in the config, though the format is not documented anywhere. 
   >
- save test init data per-quest [`c7a9d6a2c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c7a9d6a2cf8acbdd8172997053b035c3d65b0521)
- made side warps for new screens default to Scrolling warps [`1c6a806b8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1c6a806b8d5c60a68728b082b95d98e504f94054)
- side warp triggers cycle backwards with right click [`c20f03d46`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c20f03d46a33215555225210c3a1bd2e79727640)
- "Set All" buttons for screen state carryovers [`1d0abd731`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1d0abd731392cd4f2162db88861076a0cf082162)
- Smart Assign Slots in zscript compile [`3192de1e7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3192de1e735078ddb5a5fc4e6e1947211858ab37)
- ctrl+clicking a tile selector goes to previously selected tile [`f88ac07da`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f88ac07da56e154bcb7f7862a6a2b44b12ce5983)

### ZScript Standard Library (std.zh)

- add 'GetLevelSwitchState()'/'SetLevelSwitchState()' helper functions [`f7228536a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f7228536ad55c2fb4bb20d00bba8b8c06d7e67c2)
- item_tile/item_cset animation helpers in EmilyMisc.zh [`e04a6f984`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e04a6f984aadc897b4541db8803be0ec1cb69dc6)

### ZScript

- special layer for non-overhead ffc draws [`d8d123b1a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d8d123b1a1088a50c0cbdaa2cf4f2b1142b73171)
- Add special layer timings related to lens of truth [`4799cb023`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4799cb023fc1012b6b69f59c2f8c5dc2652b809e)
- Add 'Game->TrigGroups[]' read-only array [`a6f5459d8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a6f5459d8fce02205f9eb6f5c9328de92bdc845e)
- Variadic Parameters (user functions) [`f8a424029`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f8a4240293772a78a8ff112146ce8d69370f2fc3)
- printfa/sprintfa to take an array of args like printf/sprintf [`eb8dfd978`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eb8dfd9780270276a0ef2d14d46b2babcb97e301)
- Allow declaring size 0 arrays [`ecf7793fe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ecf7793fe95ab784241321cfcf7d706f3fa3d9de)
- Game->CurrentItemID() to use the engine method of checking owned items. [`42129a5f5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/42129a5f547d3901c66d8bedde0284bd1e6f395d)
- Array Push/Pop functions [`85e1777a3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/85e1777a33df60fc6c7b6c7e7d5e04ee03b9e9d8)
- ArrayPushAt/ArrayPopAt for arbitrary index push/pop [`f34605181`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f346051814573a261819597f5e2a4de312986d3b)

### Visual Studio Code Extension

- add "Always Include" setting, default ["std.zh"] [`84cd984dd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/84cd984dd339df75775524c16dc8c00c17593786)
   &nbsp;
   >This takes an array of files to always '#include', so that you don't need to manually add the #include to every one of your files. 
   >
- better working 'alwaysInclude', clean error messages for other-file errors [`053e6bbc6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/053e6bbc69b68b8dd15761f5237ee7cdc822274a)
- better CONST_ASSERT handling, setting to ignore CONST_ASSERT errors [`db0bc504b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/db0bc504bc143caba37db7f26b5eb7dcc25e137b)
- use default options NO_ERROR_HALT, HEADER_GUARD for language server compiles [`a5a6483a5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a5a6483a53cb19575c947c81ffe73179503fdf4b)
- add includepaths option [`406f41d2b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/406f41d2b0675abfda76ce110f2f4ff8a1316bed)

### ZLauncher

- add button to view current release notes [`76ad2c2a0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/76ad2c2a024bad8a46245b9aa1e076b2851c9b75)

### Web

- support music crossfading, set position, set speed [`61104f63f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/61104f63fa1f33914eae12dfa2249305a971b075)
   &nbsp;
   >This drops the web-specific implementation of zcmusic via SDL_mixer. It was only done that way because we weren't building any sound libraries from source, so using emscripten's port system + SDL_mixer was a workaround. But SDL_mixer only supports a single music channel, so it cannot do crossfading, so it's time to drop it. 
   >

# Bug Fixes

- cutscene combos being incompatible with replays [`b6e7680f8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6e7680f84ca8d8c359c6873ebb0bac9198c79d8)
- set exe path string to empty if fail to get exe path [`728d3ce03`](https://github.com/ArmageddonGames/ZQuestClassic/commit/728d3ce0340597bf149a7cc0627e20ffef351bcc)
- changer ffc interactions, ffc timer interactions [`9ad10b881`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9ad10b881eb2dec72eba74a9b13255765b21ea8b)
- use ut8 encoding for config and filenames [`134c2fd7a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/134c2fd7af4d70c857f8026cd942e84b7a8bb5cd)
   &nbsp;
   >Config values can now carry non-ascii values. This required also configuring allegro to treat file paths as UTF8.  
   >
   >Fonts have varying support for characters outside ASCII characters. Probably we currently have no fonts that adequately cover non-latin characters. While you may see gibberish in the file picker, files should still load just fine. 
   >
- pushable blocks not respecting lens layer hiding/revealing [`c4f332289`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c4f332289166ce3aed100063a930cdc5c5c05ec9)
- support leading dot in file selector filter [`9ffaa4cec`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9ffaa4cecf07fec79b1b5a5a2c6a16b019b89350)
   &nbsp;
   >This recently broke loading zplay files because the constant for the extension changed from `zplay` to `.zplay`, and the old file selector expect no leading dot, unlike every other file path API known to man. 
   >
- dmap music with crossfades was not setting loop points [`ad0adaf62`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ad0adaf62e9bd9a9caaccc8eaf66a7420c4c0faf)
- Allow exiting zc when test mode gets stuck in error [`f18c48097`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f18c480973f580ae1cd942880690105a020d467c)
- some bad dialog 'default's resulting in windows closing [`2a4fd7097`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a4fd709738096dc9af121271d50a05f007f76b7)
- event crash due to bad weapon access [`82b9954f3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82b9954f334727344db5a38f5d6aff2669a756a3)
- checkbox odd alignment issues [`0a39e13ea`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0a39e13ea40d9b1a1df3864e5238e517c152315f)
- test quest dlg wrong button focus [`eae4f8082`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eae4f8082ed54dae9eaf9079e705760be9c2a372)
- add some missing properties to init data delta [`8b849890a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8b849890acf15e369d2f2956b93dd8abc83aad0a)
   &nbsp;
   >Not all properties were being covered here, which affected init data cheat and test init data feature. 
   >
- typo in transition editor title [`f24f49eb6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f24f49eb60b400b69be61d4a5bfb6363c1145179)
- wrong spacing on one-line minimap title widget [`8eebcfaa2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8eebcfaa23844a7d59fe185d443e8672e7a8ce39)
- avoid heap overflow crash for draw_textbox scanned string [`06ab4d156`](https://github.com/ArmageddonGames/ZQuestClassic/commit/06ab4d1567e24a6d1f971e7d0198c37d77e173e2)
- draw bow and arrow as button item correctly [`1d137103d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1d137103d04befa9e472ed8a9d47aead3ad39d86)
- extraneous popup about string ordering error when loading older quests [`5fe750736`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5fe750736ef168d00b7e66a5bd2e88722e50a354)
- set window icon on Windows [`0f6990a10`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0f6990a106c5205239bd1dc9382b0fc821d1833b)
- room dialog not refreshing on setting old-guy info [`72ec7e913`](https://github.com/ArmageddonGames/ZQuestClassic/commit/72ec7e913e976a54db4475d2967907ebac7bf4cf)
- fixed crash when loading enhanced music in nosound mode [`9f2a9f216`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9f2a9f216d1b258fad30b1af7b3fda55c778b423)
- write zeros instead of random memory for fixed sized string fields [`77153f3a0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/77153f3a0a001ab93623901250b9c2960dd5b555)
- virtual dtors for subscreen widget base classes to avoid memory leak [`bf60c8545`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bf60c8545278cdd219c5cc0ea1bbaf2525ecabf5)
- use safer vsnprintf for zsys messages [`68d5b6432`](https://github.com/ArmageddonGames/ZQuestClassic/commit/68d5b6432b3bc7414070f8d9f1855aac37d6088d)
- subscreen non-equippable item flag being broken [`df64d36eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/df64d36eb25442e3a92613ff494a8d2bee81b816)
- fixed missing zcmixer->newtrack pointer null [`44d7307eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/44d7307ebf8ef163bfe3e1e3fc5dba593739ec05)
- minor subscreen related fixes/tweaks [`d1b4e3db8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d1b4e3db88aee713c8babb2bea0290ffbaf02114)
- subscreen issues related to item overrides / bow&arrow [`7ab011b0c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7ab011b0c065363928f9a4a7e5ede53c4d6106f6)
- item quickswap issues [`b99b3d303`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b99b3d3035003959ee3c2c9b7cb5044eaf05e8e7)
- subscreen related crashes [`ef1484be8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ef1484be8191ebe658fa2cf994be02eb5cbaa1a8)
- item override arrows not displaying properly [`d0f3445b1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d0f3445b14c4acf3041cf0b9a2adcd6c61d4c406)
- item bug introduced by recent commit [`e042ecfba`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e042ecfbab8572d7de355d29c1844ec8b6186775)
- 'Background Color' element drawing in wrong area [`61aeb4026`](https://github.com/ArmageddonGames/ZQuestClassic/commit/61aeb4026213f52f69edfd0cfabd4ae8b450bd86)

### Player

- fix bad rebase that messed up new save file header [`ceac21221`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ceac2122102a2ebab67c47d0121faf1cf8ae3f79)
- check save exists before attempting to use [`a56f5a84e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a56f5a84ef16c143eeb386ce9fbe4e4e03d68a3d)
- remove warning about standalone mode [`adf05b8cf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/adf05b8cff3bbed964c60f140f837d3978f8afd2)
- resize save vector before copying [`4f0cc4ea1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4f0cc4ea13bc660c0efbf74876411e1646774fed)
- fix bad rebase that messed up new save file header (for real) [`9be5aa75c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9be5aa75cec984306788619b51ea81d4b8bfca15)
- update current volume when changing enhanced music volume [`ee66e9201`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ee66e9201352f3a3e3699a5548f529a38b084300)
- fairy flags acting different placed vs inherent [`3f750666f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3f750666f408f4a9ba97cdfba2e49a251df0505e)
- allow canceling delete/copy save with ESC [`5d8e9b5c3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5d8e9b5c39e1a9081f801ee3132500dfe1779852)
- do not update saves order.txt in standalone mode [`1ac8d0b5a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1ac8d0b5a3b3760cb37c0a50bb9e687a7ee979ac)
- set ascii mode for ending graphics [`8e31cfecd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8e31cfecd07943b320c232509d3732d636848e6a)
- Conveyor oddities related to `Force Dir` flag [`db349d14f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/db349d14fa628b4b093d6f94d9608d10b13c0844)
- Triggers tab state issues [`d1cbad2f8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d1cbad2f8d5ba03dcd344e3c10499e428be1548c)
   &nbsp;
   >- "->LevelState" not setting the state properly
   >- "->LevelState" and "->GlobalState" not working on ffcs
   >
- reset the map view cursor state in init_game [`9d07bd272`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9d07bd2722131b5f8b3bde7b87403209c78088b4)
   &nbsp;
   >For replay determinism. 
   >
- 'Load Quest' menu option was busted from recent refactors [`705aa3a4d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/705aa3a4dfb1fd5caa341e07fa3c9f147a4abdcc)
- enhanced music not cutting to midi (none) when there's no crossfade [`ec0cc63eb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ec0cc63eb1a82f9355b9688aa9020c7b78eb2832)
- zero gamepad axis state on init [`1f6ad1717`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1f6ad17173952a1646e02484af62381ff8dda392)
- crop snapshot for screens with NOSUBSCR [`6bef101a2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6bef101a2ec82be5e6830c4cc134eebbfc1ac765)
- handle failure to create save file error [`bab197b23`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bab197b231351bd0cdf91f89a0ceb130a8221718)
- defer making .sav file until after quest is selected [`b5e434db1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b5e434db1b4e5e09bd7af8b9cc626723b3076bd0)
- X/Alt+F4 not working while in game view [`13afd3bf6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/13afd3bf6f2da0bafd5e16ca9fe15e53a586973e)

### Editor

- bad index for -quick-assign [`10b87bb3b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/10b87bb3b5072c35741758b0806ca974166fe881)
- support headless switch with quick assign [`a6e4fb664`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a6e4fb6649ef2345c88945aa73f155d34dff59a5)
- dmap midi dropdown [`01a98d5be`](https://github.com/ArmageddonGames/ZQuestClassic/commit/01a98d5beb8b5355741ae6bc0fa7dbf6d973b3de)
- better error handling for test init data [`55bca7f0e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/55bca7f0e50d3966219c8877923f781226e7eb80)
- use gui list data getter for init data dmap [`4ed590861`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4ed59086152c6967712281ee81ec813c2d2c4e56)
- use correct int size when reading qst template size [`a9904e441`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a9904e441e4d1f80fb1b2b88d69f4cbf07bcb80a)
- door dialog now updates visually on dropdown modify [`42cca51e1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/42cca51e1c663c204d8094c9e7e9e5a008bc85d4)
- write to temp file when saving qst and rename when done [`43c2754de`](https://github.com/ArmageddonGames/ZQuestClassic/commit/43c2754deb477667641f7b1ba788a892f975e797)
   &nbsp;
   >This avoids issues with zplayer being unable to load the file on Reset when in Test Mode, while zquest is writing to it. 
   >
- misaligned subcreen editor 'View' menu checkmarks [`70483b21e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/70483b21ee2a4ea8519f8d9879ef205946d21728)

### ZScript

- support absolute path includes on non-windows too [`2b5690bcc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2b5690bcc3b79ec9cfffed23beb50bfda2ac0e7f)
- null check results before attempting to write zasm [`69d5f16e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/69d5f16e4dc9fc7551a73457231fecca30a1a97c)
- missed deallocation when directly returning string literals [`39278f501`](https://github.com/ArmageddonGames/ZQuestClassic/commit/39278f5011b2195b28f260de9408b31933605777)
- shop data not handling info correctly [`71429e679`](https://github.com/ArmageddonGames/ZQuestClassic/commit/71429e679bea44c609e3c4b2af03338eccdea1fa)
- some parser pointer issues [`df423680b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/df423680b66f0dcc624a6a10a3b12eb5c97aad4b)
- broken typedefs from recent commits [`82b6e9db5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82b6e9db568667a0f23285dabef80012c5045f78)
- handle variadic class functions [`66cebd181`](https://github.com/ArmageddonGames/ZQuestClassic/commit/66cebd1813048dbad64f130d24ff3232985e2faa)

### Visual Studio Code Extension

- some more CONST_ASSERT issues [`d5d3c1dd0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d5d3c1dd0bc135b460df095d348ab4ce82c1de7d)
- header_guard works properly for edited file, no longer causes dupe errors [`888a050e3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/888a050e3b8e1568359df4b421b50efe48f32a56)
- handle non-windows paths [`d3bfe96d0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d3bfe96d0fef10757aa7946a422b63b556c2e1c0)
- add missing std_constants typedef type highlightings [`f51f805c1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f51f805c1512bf1981e14a82ca067a0690b37c47)
- operator highlighting typo [`c00fca3f0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c00fca3f09e3f364536b5574f9505a126819a248)

### Web

- prevent crash when freeing music [`2ff430699`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2ff4306995e107d289ef58365fe43e71e272bf65)
- add rests in some ui busy loops [`c4c44dda3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c4c44dda3dd7fdf48c3cf2e8f37c3aa82e0ce4f4)
- use half-frequency for sound, just like previous sdl impl [`c963a890f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c963a890f3f82e141ee613368c23664a206c45b7)
- update deploy script for new asset names [`b7234e534`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b7234e53450e506d22d48eebc4481823a31fe5ef)

# Documentation

- correct typo in comment for `jit_threads` option [`1e11cd6f5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1e11cd6f57fa95ddfb85c7fbbd9b31353579c80c)
- specify that linux builds should use clang [`e742d5a4d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e742d5a4d656432dec48545b97dfd2dc12f695ce)
- changelog overrides for subscreen rework [`237156aa8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/237156aa818dfd0a1b69d33d3ec45ef69a3f5c22)
- add Arithmetic Operators to webdocs [`e9976d8bf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e9976d8bf3c01ae678b6f52334e7c6e6c8203d2f)
- line-wrap singleline codes, strip single leading newline from code blocks [`89a17bcc9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/89a17bcc9f322e89eb0932e2394c56ebe0d20ce2)
- minor typo fix in webdocs [`9867c8406`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9867c8406bb071e8d3e4b86f3306855d9f399c78)

# Build

- add targets for common replay test invocations [`2a97f57d6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a97f57d68a4e1fda3248b442557405e84555e68)
- add stubs for sdl music to un-break web build [`68f407138`](https://github.com/ArmageddonGames/ZQuestClassic/commit/68f4071388754214d4fd7a62cfd27d80b0e639cd)
- fix mac app bundle signing [`add74135e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/add74135e1948273068bd4c71b1932f9a76d5a58)
- fix compile by using portable optional varargs [`2b75b232d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2b75b232d40d33dd30cee60bbd92ef1287d4349a)
- enable c++ 20 preprocessor for msvc [`8ef1fbd15`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8ef1fbd15a57859a438f4bca1149e9fcb39dad38)
- support single config builds [`b8d0299e1`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b8d0299e105b5a425ce5682c60e74499a6750e40)
- include missing import for stdint [`e65d7b8b2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e65d7b8b21f44842da5ae972bd949eecf60637dc)
- disable format-overflow gcc error [`af7ef5a90`](https://github.com/ArmageddonGames/ZQuestClassic/commit/af7ef5a90adce475361f5335e10e9801e1983ed8)
- disable compiler extensions [`1d7624410`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1d762441059f8a053466f5247c5c14fdc29dd939)
- use new msvc preprocessor only for our targets [`e3fd987ca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e3fd987cac34c5bacd811c26a8e9f945966cf0a6)
   &nbsp;
   >This would otherwise result in crashpad_handler failing to link `capture_context_win.asm.obj`, which is very strange. 
   >
- upgrade to latest allegro [`d80750a93`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d80750a93c4f8cd482dff0b5075e2336b424dc05)
   &nbsp;
   >https://github.com/liballeg/allegro5/compare/c2bf1e11bed0b63539267115baf190741e0a437a...02382edf26ff0b0ca021dfd10c370c59d9006888  
   >
   >https://github.com/connorjclark/allegro5/compare/my-fork-3..my-fork-4 
   >
- upgrade allegro fork for gamepad improvements [`396b99e65`](https://github.com/ArmageddonGames/ZQuestClassic/commit/396b99e6504f91b12b4c4ed2d9aef36eaac62846)
   &nbsp;
   >https://github.com/connorjclark/allegro5/compare/my-fork-4..my-fork-5 
   >
- configure allegro audio to not build libdumb or libflac [`96ce589ad`](https://github.com/ArmageddonGames/ZQuestClassic/commit/96ce589ad430af511752b1fb186344b14d4a6d07)

# Chores

- bump version to alpha 117 [`ed0d04620`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ed0d04620681186f99ceaeddbfb2fca4695777bc)
- clean up stdout garbage whitespace output [`5ce129bcd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5ce129bcd5602dca05b48db225be5d11dffebba7)
- modify changelog for recent music additions [`0c2a8aeb9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0c2a8aeb9e86d123ad893647b22d5f49bfd7a249)
- add more to recent music changelog [`de1ed3ec2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/de1ed3ec2013264dbd8467c18b097245eb9d7a0a)
- add sanity check to previous commit [`de0aac542`](https://github.com/ArmageddonGames/ZQuestClassic/commit/de0aac542b0b500744064b1a871b2a428f70b34a)
- add some changelog overrides [`8cae16f27`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8cae16f2730fa12792f85caf21d7e66bd4919a52)

### ZScript

- Make all 'yyerror' error messages start with 'ERROR:' [`917169753`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9171697539017a33499ef63aa1e924aad88d7948)

# Refactors

- Screen Script dialog now new GUI, respects script metadata [`e48455725`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e48455725ba207d5d80a35053f320b9acbce314d)
- New "Screen Data" dialog [`d1449c0a0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d1449c0a01ea35c521eeec2aca96d7f84a8b22c8)
- update dmap editor to new GUI [`833660a15`](https://github.com/ArmageddonGames/ZQuestClassic/commit/833660a155ad58d85e7a5ca8e82659d265b7c1ef)
- Fix hardcoded icons, no longer using custom codepoint strings. [`2193c4671`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2193c46710aac512f6abccb65984bbbeeb206c1a)
- Merge New Subscreens (#879) [`7441956cd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7441956cdd021b5b7f9c88e73925ef0d70c60616)
- remove build version [`5b7030789`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5b7030789a9ca0187322cfc0c7cd71b632d8a319)
- remove old project name "AEternal" [`3172d746a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3172d746a802be90da9706ccc66e791a4afb6025)
- replace "string.h" with "cstring" [`931e59774`](https://github.com/ArmageddonGames/ZQuestClassic/commit/931e5977437280b112542ac9438ffe767920e60d)
- use calloc in reset_tile instead of manually zeroing [`b6752f122`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6752f122a49ba849e42e43a3f4cf541341c4240)

### Player

- split save code from title.cpp, remove .icn [`ab10ed1e5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ab10ed1e5b7f76f03438d5c3989e3521f7652c7a)
   &nbsp;
   >.icn files contained just the color data for each ring variant needed by the title screen. The idea was to avoid loading each quest just to show a single tile graphic. But, this same data is already in the gamedata save structure, so we don't need to maintained a separate file doing the same. The greatly simplifies much of the code dealing with displaying these icons. 
   >
- remove skipicon and print_metadata_for_each_save_slot config options [`7a45e5691`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7a45e5691b247536bc21177165d3c834b09c4295)
- move more save file handling behind saves.h interface [`5415c4554`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5415c4554a94f5a261cf6853f94fd68409266120)
- move save file name into saves.cpp, remove -savefile [`28c78ffc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/28c78ffc3699536c185b4d96d754ccff64f79ebf)
- store saves in a vector [`becc8102f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/becc8102f7e2d496e2dd5b0d2972fead2538924f)
- remove support of .dat# when loading save files [`985583d1e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/985583d1ee516d714b1fd5ca4541f47771851c7b)
- update icon only once when making new save [`3d1b13133`](https://github.com/ArmageddonGames/ZQuestClassic/commit/3d1b13133b5458cd25953897ba7272baf50f1456)
- remove unnecessary sleep/flash of black on updating save icon [`855e0684d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/855e0684d6bf1a9096a84dea54258a78bc669946)
- skip slow combo movement modification when nothing would change [`4693d82e8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4693d82e874e8cebcde8f58bff0bb80b4ec3cf3e)
- do not poll music in timer [`c323dbe61`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c323dbe61ec9f4772f7061855fa7fdf7efa40c99)
   &nbsp;
   >We poll music often enough via `advanceframe` 
   >
- remove title screen
   >&nbsp;
   >Relevant changes:
   > - fix(zc): put title.mid back in zelda.dat, since it is available to quests [`17e56f141`](https://github.com/ArmageddonGames/ZQuestClassic/commit/17e56f1410dc0bd04183ba13eda55e4892979b7f)
   > - refactor(zc): remove title screen [`e4640ab77`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e4640ab770d6aae79df2a2748646edd8d6fb63ac)
   > - refactor(zc): remove title option from menu [`d6878d6d2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d6878d6d2a7cffa96ba3090ac29c7b2f5bf758d7)
   > - refactor(zq): remove defunct -notitle switch from quest packager [`bcfd8bbf5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bcfd8bbf59023ddc0ca8db77b260dadd6e8504b3)
   > - refactor(launcher): remove title option [`2571479f4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2571479f44d6a99c06e097e7c6a34378d4e14e28)
   > - misc(zc): remove unused title/logo assets from classic_zelda.dat [`dcd117a1a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dcd117a1a9d4c9aefd653f5a56f090ad231d394e)
- remove aglogo [`47ad36443`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47ad36443df553411480e9874bec706fae72fdd1)
- disable credit menu [`d49a0cc00`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d49a0cc0039219815f4e96682efbd71d233c68aa)

### ZScript

- better jit compilation for 32b div 10000 [`0a780d638`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0a780d638671e91372675c2161cc0fa0131545b8)

# Tests

- add more visual indicators to playground_scrolling_script.zplay [`f6d318fe5`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f6d318fe5a32b5dafd4190022f433025d56f136b)
- forgot to update zasm snapshot from f6d318 [`cfd6241df`](https://github.com/ArmageddonGames/ZQuestClassic/commit/cfd6241df9c81f27db00d895799687c5b964bdbf)
- fix usage of -quick-assign in test_zquest.py [`ff333ee4a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ff333ee4a67a5453f261f8032bed0b0e15403525)
- add stdout to parser expectations to capture warnings/errors [`f78c85e65`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f78c85e6585ce048b88c831a050a31c6e0c44f5d)
- check if gfx segments exist in workflow get_args [`2da41aa14`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2da41aa1416298cd92337daf79e340af1f529369)
- support starting replay from a sav file [`0b8a1a41a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0b8a1a41a057c5c91a4cf582936329233810e75f)
- add script for splitting replays [`b771f0c16`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b771f0c165213176d61663862c5f6d5aee1ba2d2)
   &nbsp;
   >also support folders in the replay test directory 
   >
- split large replay files [`e79878288`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e7987828897558ce414252d779db1830d0413ca1)
- support headless flag for web replay tests [`4cee3d64f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4cee3d64f5e9799868053b366bea12823beae96a)
- disable sound for mac in CI [`9a68ee085`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9a68ee085b8a4d79328777fd1894c26ca073bfe4)
   &nbsp;
   >For some reason this started hanging the --no-headless tests, and crashing other tests on exit. 
   >
- skip sound driver in headless mode for zquest [`188452305`](https://github.com/ArmageddonGames/ZQuestClassic/commit/18845230507a25bfb68b86647e11e0ac5b4bf988)
- check allegro log exists before printing on timeout [`16ec4b55c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/16ec4b55cda60c996b2c03f687334b79f93a1609)
- track save files with git lfs [`a53b46886`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a53b46886aa74869595c8b594f9de6b9ea2f8ce5)
- add (crude) RNG debugging option [`97acebb06`](https://github.com/ArmageddonGames/ZQuestClassic/commit/97acebb06ecba31da71011c991f4f13b8dadef85)
- run_replay_tests now forwards more args when collecting local baseline results [`a3513f63d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a3513f63d27a17c3c54aeebbed646506a325ca86)
- move zquest save classic_1st.qst test to python
   >&nbsp;
   >Relevant changes:
   > - test: move zquest save classic_1st.qst test to python [`7c8a5625c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7c8a5625c582a12b7d779cf6173f670543d25214)
   > - test: move zquest save classic_1st.qst test to python [`593beae65`](https://github.com/ArmageddonGames/ZQuestClassic/commit/593beae6594ff734d535b3664dd867b06bbb6305)
- make copy of playground.qst for quick assign test [`d200356d7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d200356d7a3ffc500be556f1919a71fb0450bfe2)
- move recording test to python [`770a6fe39`](https://github.com/ArmageddonGames/ZQuestClassic/commit/770a6fe39da7a37de303def9e96856adf330fac5)
- move File->New test to python [`4440846b2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/4440846b2a76ef4962d44875ba07c8844b4c6408)
- disable save test [`931b20261`](https://github.com/ArmageddonGames/ZQuestClassic/commit/931b2026122bbb03df2c5e0b61cfc99f1dfdf34b)
- do not retry replay if zplayer exits before starting [`7ae23cdbd`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7ae23cdbd61186d2d17cbaa627036933f69605bb)
   &nbsp;
   >This was hiding crashes that only sometimes happen on startup, and never showing a backtrace. 
   >

# CI

- do not show info dialogs in ci [`8e46bff09`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8e46bff091d035b46245a715f64e59caac678558)
- quit earlier in zquest [`e57e45e8e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e57e45e8e916d04e3d958de8e9b840a0d9acac05)
- skip crashy test on linux [`8d2731cbf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8d2731cbf5b4e9946f05c006fec6564471afba07)
- also show changelog relative to last alpha for nightlies [`1025e5c88`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1025e5c881ed578edb14dc9b5ac454d40bb3ea3f)
- handle "boolean" correctly [`226889535`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2268895359a690d59b1acc1bd39f8307d8762172)
- upgrade to python 3.11.4 [`ed8113dfa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ed8113dfad52d6ef55f81211ab73eef81ae5114a)
- run python unittest module instead of calling each test file individually [`bee03b3bf`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bee03b3bf8b3f50c2b99b8a72132bf0b279a41a3)

# Misc.

- add 'std_zh' scope to changelog generation [`d82a0d845`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d82a0d8458b3029283385db04f1d935fd0dbce48)
- make std_zh a scope, instead of a type [`efee4a34e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/efee4a34ec238f4e7c174cf1ea2232ada3577c39)
- support squashing and rewriting commit body for changelogs [`7c6430abe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7c6430abe8d3e6b4484961ec74a8192c1833378b)
- add -version, -channel, and -repo switches [`ee809f874`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ee809f874da67faa75418e288a134fb8d94b144f)
- use new name in readme [`6acc68050`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6acc6805013140342962734c54a60b7e73001daa)
- rename mac app bundle to ZQuestClassic [`6a790894b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/6a790894b64e2898ab3229f5edd8c27c5bd845f9)
- rename player executable from zelda to zplayer [`b6224d565`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b6224d565bb802de84900a66a9bc0fe3722320b1)
- add '-no_console' switch to prevent debug console opening [`020fb0382`](https://github.com/ArmageddonGames/ZQuestClassic/commit/020fb0382a1db473d5022ab21a31d6f350cb6204)
- Merge branch 'main' into newsubscr2 [`7aac40d6b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7aac40d6bfa06159fdb3713e70bd7a9ebf99fc95)
- support dropping commits in changelog [`1078cec21`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1078cec21f1f734d2cec0dbc497f58e2f3d87822)
- allow for squash commit subjects to be changed too [`23529bfc7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/23529bfc7a21b3084a9bc404d3f70cd1eac42c3e)
- support changelog 'section' overrides for large custom markdown sections [`975c9a1b3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/975c9a1b36ecd79f6d656b733d3b5db80eda6aef)
- wrap changelog-since-alpha in a details element [`65d682663`](https://github.com/ArmageddonGames/ZQuestClassic/commit/65d682663ab7171f2b403712e64f9564a81d2df7)
- wrap custom changelog sections in details elements [`948ea7238`](https://github.com/ArmageddonGames/ZQuestClassic/commit/948ea723820e3776bfc2cb716514b61cd390a40d)
- revert grabber.exe to 4.2.0 version, since current one stopped working [`aad1ce6e9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aad1ce6e93b83d4b74a4df9c9105a245a6e5afcc)
- add sentry breadcrumb for zsys error messages [`f6015eae0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f6015eae08da1eb9030000d64a89da80a21bcf3c)
- disable sentry session for all but zplayer and zquest [`39edc388b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/39edc388b8a05cd06bd48ceef4a5294c7e378bce)
- add 'templates' folder of subscreen templates [`eadd4a4b8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/eadd4a4b88eef0f427298bf97bf29812448ef2a4)
- update default quest, default new subscreens + new gauge layout [`7dfe531d2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7dfe531d2a2709708244e9e33c9ca358fea270bf)
- allow dropping commit from changelog with '!' before ':' [`55435340e`](https://github.com/ArmageddonGames/ZQuestClassic/commit/55435340e0f9ecb25360c09e348484d93d616053)

### Visual Studio Code Extension

- publish 1.0.6 [`9c70b4882`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9c70b4882f846fbbc10cbfe6367c051f1c3c5768)

# Sectioned Changes
<details>
<summary>Full Subscreen Rewrite</summary>

# Full Subscreen Rewrite
The entire code behind how the subscreen functions has been entirely reworked to be less janky and more manageable. This makes editing the subscreen further a LOT easier of a task for us, and makes everything just a lot nicer in general.

## General mechanics tweaks
Several mechanics have been generally tweaked, including basic things like how the selector behaves and how items are equipped. These changes are mostly spread across a variety of quest rules, but for easy swapping, there are now "New Subscreen" and "Old Subscreen" Rule Templates available [see Quest->Options->Pick Rule Templates]. These change almost every new rule related to the subscreen - the only important one that they leave alone is `Old Gauge Tile Layout`, which changes the tile layout used by Gauge Piece widgets.

These new QRs, as well as many existing QRs that relate to the subscreen, have been moved to the new "Subscreen" tab. These are searchable as usual via the QR Search feature.

TL;DR New QRs, check the new Rule Templates or the Subscreen tab.

## Button Equipment Stuff
* QR 'No Button Verification'- if enabled, the engine will no longer auto-equip things to buttons for you.
* Also allows UNEQUIPPING items (try to equip it to the slot it's already equipped to)
* Problem: With this enabled, even if you start with items, now the engine won't equip any of them for you!
* Solution: Now you can set "Default Equipment" for each button slot! Just check the box in the ItemSlot widget, for the Active Subscreen that is set on the Starting DMap, and these items will begin pre-equipped to the buttons you set them to.

## Brand New Features
### Overlay Subscreens
These subscreens draw over the screen at all times, both during play and the active subscreen.
As usual, widgets can have the 'Display' settings on widgets to change their visibility while the active subscreen is up, down, and scrolling.
This can be used for various things, such as:
* Displaying your current keys over the corner of the game screen, either using a 'Counter' for a number of keys or a 'Gauge Piece: Counter' to actually physically display each key.
* Displaying button items or other similar widgets transparently over the game screen, similar to LTTP

### Active Subscreen: Pages
You can now add multiple PAGES to Active Subscreens! You can either set buttons (like L and R) to cycle pages, or trigger page transitions by pressing a button on an appropriately configured widget. Changing between pages will use one of currently 3 animation styles:
* Instant (It just jumps right to the other page)
* Slide (Both pages slide in the same direction, the current page going offscreen as the new page comes onscreen)
  * Direction and Speed (in px/frame, with 4 decimal places) are configurable for this transition type.
* Pixellate (Seemingly-but-not-actually random pixels from across the screen change bit by bit from the old page to the new page)
  * Duration is configurable for this type, in frames, as well as the "Invert", "XOffset", and "YOffset" parameters. These parameters only change the pattern of pixellation by altering the formula used to create the pixellation pattern.

By default, the Selector is not drawn during transitions- but this can be toggled as a checkbox on each transition.

### Select Any Widget
Instead of only being able to move the cursor to "Current Item" objects (now renamed to "Item Slot"), the cursor can now be set to move to ANY widget you want it to! This has some nice interactions with other new features....

### New Selector Features
The selected widget can now be set to:
* Have overridden selection text, which will be displayed in the "Selected Text" widget (formerly "Selected Item Name")
* Start a page transition animation on button press
* Run a generic frozen script on button press

Yes, you heard right, there is now SOME level of scripting on the engine subscreen, even if not much.

### Gauge Piece Rework
Life and Magic gauge pieces received a MASSIVE overhaul, and the "Gauge Piece: Counter" has been added to allow gauges for ANY counter! All of these behave identically to each other, except for these differences:
* Magic gauge still has the "Show Drain" property, which is used to make a gauge piece display conditionally based on your magic drain rate (ex. show the half magic symbol when you have half magic)
* Counter gauge lets you configure which counter to use, and how many per container to use for that gauge.
Aside from these differences, they ALL can:
* Specify a Gauge Wid/Hei, making a single widget draw _**more than one gauge piece**_, instead drawing an entire GRID of gauge pieces for you!
  * Specify an XOffset/YOffset to be applied to each row/column to create an offset-grid
  * Specify an HSpace/VSpace to space out the grid
  * Flags to specify which direction the grid "moves" in (Right to Left? Top to Bottom? Move in columns first, then rows? Snake back and forth?)
* Hide the gauge (Or only show the gauge) when you have the Infinite Item for this gauge (works the same way as counter infinite items)
* Specify a "Units per Frame" to reduce tile page usage. For instance, if "Units per Frame" is "2", then it uses half as many tiles for the gauge, as it uses the same tile for "1" as it would for "0", and the same for "2" as it would for "3", etc.
* Specify frames/speed/delay for an animated gauge
* Specify an animation CONDITION, wherein the gauge will only animate if it is above or below a certain value (either as a hard value, or as a percentage of being full). Additionally, you can specify it so that it skips the first frame of the animation when the condition is true.
  * A good example of how you can use this, is to have your life gauge only animate when your health is critically low, and use the skip first frame feature. This way, normally, your life gauge uses a single still tile- but when you reach critical life, it starts using the second tile in the animation instead (as well as any more if you supply more of an animation). This would allow for, say, cracked heart containers, blood dripping from heart containers, etc, as low-health visual effects.
* Specify "Full Tile" mode, which causes the gauge to use full tiles instead of mini-tiles, becoming twice as wide and twice as tall in the process.

### Counter Addition
Counters can now have a "Max Digits" specified, and if the counter has too large a value to fit in that many digits, it will instead display that many digits as all 9s.

## GUI Work
#### The Subscreen Lister
The dialog where you select which subscreen to edit is now upgraded to the new dialog system. This dialog now shows you _**3 separate lists**_ for the 3 different types of subscreen!

### The Subscreen Editor
* Now somewhat auto-resizes itself situationally. This means it will be smaller for passive subscreens, larger for overlay subscreens, and will adjust to font changes.
* Now has text displaying information about the currently copied widget
* When editing an Active Subscreen, a whole new set of buttons for adding/removing/changing Pages is present.
* R-Click menu has been entirely revamped, with many new options added.
* R-Click menu now also exists if r-clicking in a spot that has no widget, which previously would give no r-click menu at all.
* Slight tweaks to the existing menus
* New Menu: Options.
  * Options->Mouse Settings allows you to change how the mouse behaves in the subscreen editor. You can choose between "Classic" (for the old behavior), or "Modern" (the new default, reworked behavior). Notably, in the Modern behavior, you are able to click-and-drag widgets around the subscreen editor.
  * Subscreen Settings dialog, allows you to specify settings specific to the subscreen. Currently only has settings for Active Subscreens, where some settings related to swapping pages are housed.
* Several new "View" menu options, such as previewing what it would look like if every counter were full, or if every max counter was 65535, or if you had the "Infinite Item" for every counter, etc. Also includes an option to toggle "Show Unowned Items". If off, the editor display will show only the items as you have in Init Data.

### The Widget Properties Dialog
Slight spacing tweaks, every widget now has an additional tab for selection-related settings. More widgets will use tabs for formatting now, giving the dialog a bit more breathing room overall.

   >&nbsp;
   >Relevant changes:
   > - refactor: Rewrite the entire engine subscreen backend (WIP) [`872925132`](https://github.com/ArmageddonGames/ZQuestClassic/commit/872925132a58f1e893481e9ed747a4a5f99fe374)
   > - feat: some subscreen GUI work, new buttons for page editing [`7e155ec83`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7e155ec83d6652f1e21c4da0a7853f4adcd2591e)
   > - feat: major subscreen editor gui additions [`f8a673431`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f8a67343127ee9f5e799eeaccefce10835890baf)
   > - feat: More subscreen work, generic scripts on buttonpress and custom selectiontext [`ac5f25f18`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ac5f25f186294d2cc8059ce80b2cd51549f7c7f3)
   > - feat: ton more subscreen work [`e935320e4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e935320e4f2ecbfba267438aa19b1b75376a7f70)
   > - feat: new life gauge settings [`99462bf6b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/99462bf6b013c453280f9c1e932197a2711d80f7)
   > - feat: new subscreen features relating to counters, gauge pieces, and the 'View' menu [`7d54ca59b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7d54ca59b3e777de1f3681dd5b341a4cfb07ba43)
   > - feat: subscreen settings dialog, buttons to change pages [`9b60dc98b`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9b60dc98bcc4adc1b25db2764dc6a0373e8fe560)
   > - feat: allow selectable subscreen widgets to go to another page on btnpress [`82aee4b29`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82aee4b293d4905368b0fc83bef12fc6955070c7)
   > - feat: subscreen page transition animations [`d8b22db8a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d8b22db8a7a991f04936e245ba89cb0ca7bd8325)
   > - feat: Add 'Overlay Subscreens' [`82a7b0000`](https://github.com/ArmageddonGames/ZQuestClassic/commit/82a7b0000f2646ae11c4b21b850c95b3a1df8df0)
   > - feat: Overlay Subscreen settable in dmap editor [`e7b77dab0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e7b77dab05934ab86058e5df36f4b02234d47718)
   > - feat: Copy/Paste/Save/Load rclick menu for subscreens [`c3a23dbdb`](https://github.com/ArmageddonGames/ZQuestClassic/commit/c3a23dbdbda1d9b5790a05eb952f1c0009894259)
   > - fix: subscreen rng offset [`dfbcaa3ff`](https://github.com/ArmageddonGames/ZQuestClassic/commit/dfbcaa3fffedcc16bd6cf0b41d68f7d81f7b195f)
   > - fix: null dereference [`f9d950fe6`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f9d950fe6140742e30555b9cd5792e3d5bb0d870)
   > - fix: cursor selector offset [`536748569`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5367485691d2ea2ea4d57fa4063acfd04079da28)
   > - fix: subscreen save/load errors [`e806cae7f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e806cae7f5ddf030af0642da983357f81a8cefcd)
   > - fix: some oddities with item slots [`47e634138`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47e6341380dfe9b799ff726f2090cd0144492fb5)
   > - fix: more oddities with item slots [`064395320`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0643953209cff830019cd5d31d1a9b68dd216701)
   > - fix: magic meter x offset [`06e578791`](https://github.com/ArmageddonGames/ZQuestClassic/commit/06e57879125f68944e04e4ce85bdbed1493fdb29)
   > - fix: itemcache/override related fixes [`9ca4eb0ec`](https://github.com/ArmageddonGames/ZQuestClassic/commit/9ca4eb0ec52051f943a73093b4460a364e7115b9)
   > - fix: button item misalignment [`bc9f8abf7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/bc9f8abf7e93455a8746fef4ccbae0464da50a26)
   > - fix: some more subscreen related replay errors [`b25433e8f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/b25433e8f952380be74b3732ec14e39dd9366e8a)
   > - fix: subscreen related button item stuff [`ad997e2b9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/ad997e2b9d2ab8253cb38e01d3569a3807402a77)
   > - fix: more subscreen related replay errors [`f13ef43ca`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f13ef43cad26faf26220f9bd16e68f8cef1dc983)
   > - fix: compat qr item 0 being visible on buttons [`47c7a6d3a`](https://github.com/ArmageddonGames/ZQuestClassic/commit/47c7a6d3a4634b94033b28a9d2f37c81c11661a5)
   > - fix: typo in previous commit [`7a8ae5e27`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7a8ae5e27ecc80faafd3ea8b42c687b749576691)
   > - fix: more subscreen fixes [`e646db354`](https://github.com/ArmageddonGames/ZQuestClassic/commit/e646db35475f60d03d7166023e33339afb35b766)
   > - fix: itemcache bullshit errors [`23d96075f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/23d96075f80c1e8160fa09dbfdef857d92b4abde)
   > - fix: selector stuff [`0ea092e6d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0ea092e6dd39ca416bbb91685a613bb14f374958)
   > - fix: some item animation offsets [`aee731bd8`](https://github.com/ArmageddonGames/ZQuestClassic/commit/aee731bd8b1197474821211fed7a0a5b3e9856e3)
   > - fix: selector offset errors [`20f343644`](https://github.com/ArmageddonGames/ZQuestClassic/commit/20f343644494c8e90d2777edfdc440efef7b880e)
   > - fix: minor counter fixes [`2db1741ed`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2db1741ed3a2a15b15913fabd8fc2fa34ba3bfa3)
   > - chore: clean up some subscreen item animation code/replay errors [`97be172fa`](https://github.com/ArmageddonGames/ZQuestClassic/commit/97be172fa33162acb2f6c12b18d781a65961ca0a)
   > - refactor: convert subscreen widgets to new constant system [`2a7bc9778`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2a7bc9778892e137e94f3fa0aee0c4ba71fb471f)
   > - refactor: more subscreen replay/type fixes [`fd5a735b0`](https://github.com/ArmageddonGames/ZQuestClassic/commit/fd5a735b03f968df55e530fa7c5fd04c9e68a4c4)
   > - refactor: work on subscreen cursor selection [`1283ce09d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1283ce09d936a82f3ffa5c4cf4d36d8531e7c4c3)
   > - refactor: split subscrwidget flags into two vars, trim gridflags [`a3db000a2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/a3db000a236ea5bf19c40ed9e864885b500d9658)
   > - refactor: improve subscr_props dialog arrangements [`2162adf82`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2162adf82d2dbc951232f9b704ad127b87b5e2ed)
   > - test: update 'nes-remastered.zplay', item flash animation offset [`93c563aa2`](https://github.com/ArmageddonGames/ZQuestClassic/commit/93c563aa2e6e7f91627aae4fa3e75fdfc9a1fde2)
   > - test: Update/Rerecord 3 playground replays to fix quick-assign tests [`2c8906b5d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/2c8906b5d7d63af792f505ba31fd1a808f063ac7)
</details>
