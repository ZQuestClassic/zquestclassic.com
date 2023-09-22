---
title: Nightly 2023-08-13
description: 
date: 2023-08-13T20:49:50Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-13/nightly-2023-08-13-linux.tar.gz
    name: nightly-2023-08-13-linux.tar.gz
    channel: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-13/nightly-2023-08-13-mac.dmg
    name: nightly-2023-08-13-mac.dmg
    channel: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-13/nightly-2023-08-13-windows-x64.zip
    name: nightly-2023-08-13-windows-x64.zip
    channel: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/nightly-2023-08-13/nightly-2023-08-13-windows-x86.zip
    name: nightly-2023-08-13-windows-x86.zip
    channel: windows-win32
prerelease: true
id: 117076989
tag_name: nightly-2023-08-13
tags:
  - releases
---

# Features

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
   > - feat: music looping and length functions for ogg and mp3 [`0d00efce4`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0d00efce47ba8c0010f59b3ddb186e0e5d8bf331)
   > - feat: add enhanced music loops for dmap music [`8c6f66142`](https://github.com/ArmageddonGames/ZQuestClassic/commit/8c6f66142b932ab9cbd0a3f41cb8fb54247e6e72)
   > - feat: add enhanced music loops for dmap music [`1bf93ebc3`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1bf93ebc31f9bee32b18d96913a6351b791c8531)
   > - feat: PlaySound with different volume, pan, and loop [`f7afa08a7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/f7afa08a78d582ce46e3fdbd9b31c875d5de2873)
   > - feat: added frequency param to PlaySound() [`51931b91f`](https://github.com/ArmageddonGames/ZQuestClassic/commit/51931b91f6fef440b7575f5513ff7f8e82c83d72)
   > - feat: added crossfading enhanced music [`d03c55c0d`](https://github.com/ArmageddonGames/ZQuestClassic/commit/d03c55c0dc6ce22087352026a3fecadef78a16af)
   > - feat: dmap editor crossfades [`5e34b007c`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5e34b007c57d58123fa209b55a730fe43b3f7beb)
   > - feat: zscript access for dmap crossfades [`435449e33`](https://github.com/ArmageddonGames/ZQuestClassic/commit/435449e335a7a5b939129da54990d5ed47c4009b)
   > - feat: MusicRefresh setting for ZScript [`5df225ec7`](https://github.com/ArmageddonGames/ZQuestClassic/commit/5df225ec79b99039e06a1e60b6aa69d8a959a826)
   > - feat(zscript): music seeking functions for ogg and mp3 [`463a6d1dc`](https://github.com/ArmageddonGames/ZQuestClassic/commit/463a6d1dca9cf4833d2eb124f9dcde4cd069497e)
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

# Chores

- modify changelog for recent music additions [`0c2a8aeb9`](https://github.com/ArmageddonGames/ZQuestClassic/commit/0c2a8aeb9e86d123ad893647b22d5f49bfd7a249)

# CI

- also show changelog relative to last alpha for nightlies [`1025e5c88`](https://github.com/ArmageddonGames/ZQuestClassic/commit/1025e5c881ed578edb14dc9b5ac454d40bb3ea3f)

# Misc.

- support squashing and rewriting commit body for changelogs [`7c6430abe`](https://github.com/ArmageddonGames/ZQuestClassic/commit/7c6430abe8d3e6b4484961ec74a8192c1833378b)
