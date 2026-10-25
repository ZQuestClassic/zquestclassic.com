---
title: 3.0 Prerelease 230 2026-10-18
description: 
date: 2026-10-18T20:41:53Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.230%2B2026-10-18/3.0.0-prerelease.230%2B2026-10-18-linux.tar.gz
    name: 3.0.0-prerelease.230+2026-10-18-linux.tar.gz
    platform: linux
    size: 36639292

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.230%2B2026-10-18/3.0.0-prerelease.230%2B2026-10-18-mac-universal.dmg
    name: 3.0.0-prerelease.230+2026-10-18-mac-universal.dmg
    platform: mac
    size: 52366578

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.230%2B2026-10-18/3.0.0-prerelease.230%2B2026-10-18-windows-x64.zip
    name: 3.0.0-prerelease.230+2026-10-18-windows-x64.zip
    platform: windows-x64
    size: 36474876

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.230%2B2026-10-18/3.0.0-prerelease.230%2B2026-10-18-windows-x86.zip
    name: 3.0.0-prerelease.230+2026-10-18-windows-x86.zip
    platform: windows-win32
    size: 34541384
prerelease: true
id: 416784657
tag_name: '3.0.0-prerelease.230+2026-10-18'
channel: '3'
tags:
  - releases
---

# Bug Fixes

### Player

- Prevent freeze when an FFC light beam loops back into a prism [`a960073728`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a960073728d78fb34cfb573c4ddb9aa8aab2814f)
   &nbsp;
   >A light beam from an FFC spotlight that came back around into a Magic Prism split again every time it passed through, freezing the game. This happened when the beam bounced off a light target (with the broken light beam hitbox compat rule on) or travelled around a loop of mirrors.  
   >
   >Bug introduced when spotlights were made to work on FFCs in 2.55-alpha-119 ([fd039e80](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd039e80)). 
   >
- Combo light beams skipped the region's bottom-right corner [`1de55b9c40`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1de55b9c4089d8b8e33fb0d6aca310f1d3347a93)
   &nbsp;
   >A light beam from a combo spotlight was not turned or split by a mirror or prism in the bottom-right combo position of the region (the corner of its bottom-right screen), a spotlight there gave off no beam, and no combo beam was ever drawn in that spot.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd70](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd70)). 
   >
- 'Transform' defense into a Gleeok left the old enemy alive [`0ad03b10e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0ad03b10e734072eaaf59125e38225d928f16bb5)
   &nbsp;
   >An enemy whose 'Transform' defense turned it into a Gleeok spawned the Gleeok but was never removed itself, so both stayed on the screen. The leftover "Gleeok head count" and "Replacing a gleeok" debug messages logged as errors on this path are also gone.  
   >
   >Bug introduced when Transform was changed for boss enemies in 2.55-alpha-26 ([016904d7](https://github.com/ZQuestClassic/ZQuestClassic/commit/016904d7)). 
   >
- Step combos could not be triggered without a required item [`f2e8d07de5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f2e8d07de5b99cebb6856813f28da6be9c0fc1e9)
   &nbsp;
   >Triggering a 'Step->Next' combo through its combo triggers (such as '->ComboType Effects') failed unless the Hero owned item 0, when no required item was set.  
   >
   >Regressed in 3.0.0-prerelease.157+2026-01-20 ([88ca703a](https://github.com/ZQuestClassic/ZQuestClassic/commit/88ca703a)). 
   >

### ZScript

- Release for-each loop variables when leaving its else block [`a1993247ef`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a1993247ef1cd5f9c5df7fbbff47cc95d5fe117e)
   &nbsp;
   >A `return` or `break` inside the `else` block of a for-each loop skipped releasing the loop's variables, so the last element visited (and the array being iterated) were never freed, and the stale stack slots later caused "Invalid object pointer" errors.  
   >
   >Variables declared in the `else` block of a for-each loop, or of an `if` that declares an object (ex: `if (Foo f = ...)`), could also overwrite the loop's or the `if`'s variables before they were released, causing "Invalid object pointer" errors and leaking those objects.  
   >
   >Bug introduced when for-each loops and ifs began releasing their variables in 3.0.0-prerelease.167+2026-03-25 ([51fbc61856](https://github.com/ZQuestClassic/ZQuestClassic/commit/51fbc61856)). 
   >
- Object deleted when a constructor calls another constructor [`99a67cae17`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99a67cae17db0ab348517752675a6cc27d32f8a1)
   &nbsp;
   >When a class constructor called another constructor of the same class (ex: `Foo() { Foo(5); }`), the object was deleted before `new` returned it, leaving the variable holding an invalid object.  
   >
   >Regressed in 3.0.0-prerelease.146+2025-12-04 ([66c15806d5](https://github.com/ZQuestClassic/ZQuestClassic/commit/66c15806d5)). 
   >
- Passing a constant to a template function made its locals constant [`d9de00900e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9de00900e7a6fcd460557967bc59c4b06537b1f)
   &nbsp;
   >Passing a constant (ex: a `const int`, or a constant array to a `T[]` parameter) to a template function bound the template type to the constant type, so the function's own variables of that type could not be assigned - a compile error.  
   >
   >Bug introduced when template functions were added in 3.0.0-prerelease.53+2024-05-08 ([7908ad4b85](https://github.com/ZQuestClassic/ZQuestClassic/commit/7908ad4b85)). 
   >
- Template functions in a class could not use its members [`68538669ba`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68538669ba89468624dae10197bcab347e08c18c)
   &nbsp;
   >A class function with template parameters (ex: `void set<T>(T x)`) could not access the class's variables or `this`, failing to compile.  
   >
   >Bug introduced when template functions were added in 3.0.0-prerelease.53+2024-05-08 ([7908ad4b85](https://github.com/ZQuestClassic/ZQuestClassic/commit/7908ad4b85)). 
   >
- Allow default values for template-typed parameters [`e8553ac1d6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e8553ac1d6264fd980c14fb797934b987391ead2)
   &nbsp;
   >A template function parameter whose type is a template type could not have a default value (ex: `T add<T>(T x, T amount = 2)` failed with "Cannot cast from int to T"). The default value is now checked against the actual type at each call.  
   >
   >Bug introduced when template functions were added in 3.0.0-prerelease.53+2024-05-08 ([7908ad4b85](https://github.com/ZQuestClassic/ZQuestClassic/commit/7908ad4b85)). 
   >
- Compiler hang on a template function calling itself with a growing type [`9ecf84b903`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ecf84b903f43197c3527a7eeb4bf16c3abc1e19)
   &nbsp;
   >A template function calling itself with ever-growing types (ex: `void grow<T>(T x) { grow({x}); }`) made the compiler hang forever (or run out of memory), instantiating `T[]`, `T[][]`, ... It is now a compile error.  
   >
   >Bug introduced when template functions were added in 3.0.0-prerelease.53+2024-05-08 ([7908ad4b85](https://github.com/ZQuestClassic/ZQuestClassic/commit/7908ad4b85)). 
   >
- Variables of a typed stack could not be used [`924d9ec600`](https://github.com/ZQuestClassic/ZQuestClassic/commit/924d9ec6007211953a37beb382b0f7fefe892534)
   &nbsp;
   >Variables of a typed stack (ex: `Size` and `Full` of a `stack<int>`) failed to compile with "There is no variable Size for the pointer".  
   >
   >Bug introduced when stacks became generic in 3.0.0-prerelease.198+2026-07-09 ([c2abe7fab2](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2abe7fab2)). 
   >
- Template functions could not take typed stacks [`0fe18273ff`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0fe18273ff7238028799217a69e6fe7de043609f)
   &nbsp;
   >A template function with a parameter like `stack<T>` (ex: `T top<T>(stack<T> s)`) could never be called - every call failed with "Function has not been declared".  
   >
   >T is now inferred from the stack's type, and `const stack<T>`, `stack<T>` return types and arrays work too.  
   >
   >Bug introduced when stacks became generic in 3.0.0-prerelease.198+2026-07-09 ([c2abe7fab2](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2abe7fab2)). 
   >
- Template functions ignored the legacy arrays option [`3af7994ee0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3af7994ee01ccfff9d0eea9426e52fc9651aa376)
   &nbsp;
   >With the LEGACY_ARRAYS option on (or the default "warn"), plain functions accept old-style array arguments (ex: an `int` holding an array for an `int[]` parameter), but template functions rejected them with "Function has not been declared".  
   >
   >Bug introduced when the LEGACY_ARRAYS option was added in 3.0.0-prerelease.54+2024-05-26 ([caeb933574](https://github.com/ZQuestClassic/ZQuestClassic/commit/caeb933574)). 
   >
- Errors from template overloads a call didn't use [`c88bbdaa67`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c88bbdaa67798913eba467bd7f91f829eaa73ca5)
   &nbsp;
   >A template function overloaded with another function had its body compiled for every call that could have matched it, even calls that resolved to the other function or didn't fit the template at all. This reported errors from code that is never used. For example, this failed to compile:  
   >
   >```
   >int tmpl_overload(int x) { return 1; }
   >int tmpl_overload<T>(T x) { return x->value; }
   >
   >// Calls the plain overload, but the template was also compiled with
   >// T = int: "The left of the -> is not a pointer type".
   >tmpl_overload(5);
   >```
   >
   > Bug introduced when template functions were added in 3.0.0-prerelease.53+2024-05-08 ([7908ad4b85](https://github.com/ZQuestClassic/ZQuestClassic/commit/7908ad4b85)). 
   >
- Constructors calling another constructor ran without the JIT [`1a13645c5d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a13645c5d742274dfced093703e75ff0ef06157)
   &nbsp;
   >When a class constructor called another constructor of its class (ex: `Foo() { Foo(5); }`), that call ran in the interpreter instead of the JIT. It is now compiled like any other function call.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([b3f408e08b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3f408e08b)). 
   >
- Compiler could crash when compiling template functions [`4468b9571b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4468b9571bf3be8b903a7a051a6085b4b312c6c9)
   &nbsp;
   >While gathering the functions to generate code for, the compiler appended each template function's instantiations to the list it was iterating with a range-for loop. Growing the list can move it in memory, leaving the loop reading freed memory - undefined behavior that could crash the compiler or skip functions, depending on the list's capacity.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([b3f408e08b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3f408e08b)). 
   >
- Template functions were compiled less efficiently [`ad8c408b85`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ad8c408b85bf39c9360d72b03fcc3091ed9c3e4f)
   &nbsp;
   >A template function compiled to less efficient code than the same function written without a template: its unused local variables were kept, and after a call to a function that never returns it still had code to return.  
   >
   >Regressed in 3.0.0-prerelease.2+2024-07-24 ([7908ad4b85](https://github.com/ZQuestClassic/ZQuestClassic/commit/7908ad4b85)). 
   >
- Function wrongly reported as missing a return [`3e54764113`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3e5476411344a770489cb5aa44eb80de2eac164d)
   &nbsp;
   >A non-void function whose only path without a return calls a function that never returns (one that loops forever, for example) could be reported as missing a return, which with the default compile setting is an error. This happened when the function was analyzed before its callee was found to never return. With the missing return option set to warn, a function missing a return could also be warned about more than once.  
   >
   >Bug introduced when return analysis was added in 3.0.0-prerelease.2+2024-07-24 ([5cc8fb151d](https://github.com/ZQuestClassic/ZQuestClassic/commit/5cc8fb151d)). 
   >
- Hover highlight in the web playground was off by one [`6c25394ae0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c25394ae09d48dbd9dd17cf47a8a5e5771a264a)
   &nbsp;
   >Hovering an identifier placed the highlight one line up and one column left of the word, so the hovered word was never highlighted and the tooltip was anchored to the wrong line. 
   >
- Adding a tab with an existing file name crashed the web playground [`5019dc0068`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5019dc0068ae2501dd7cf355093074065bdfbdab)
   &nbsp;
   >The "+" button now switches to the existing tab instead of throwing when the entered name matches an open file. 
   >
- Closing a tab right after typing errored in the web playground [`87ed5bbc09`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87ed5bbc0908132fdbc5cddc0c59ea8f8918055e)
   &nbsp;
   >The debounced recompile ran against the disposed model. Compile failures are now also reported in the log instead of being silently dropped. 
   >
- ZASM pane could show the wrong file in the web playground [`d50597cb86`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d50597cb863b06a28344d6e7b72990c58631c340)
   &nbsp;
   >Switching tabs now updates the pane immediately, a compile that finishes after switching away no longer overwrites it, and closing the last tab clears it. 
   >
- Go to definition in another file left the cursor behind in the web playground [`9327a4cfb5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9327a4cfb574e7755bbeb5dfc1e9be9c44d4a5a3)
   &nbsp;
   >Jumping to a symbol defined in another tab now moves the cursor to the definition, like a same-file jump does. 
   >
- Manifest file urls resolved against the wrong base in the web playground [`ce23c2a3f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce23c2a3f82510953bf6cc8f781e3109597959f9)
   &nbsp;
   >Relative file urls in a `?url=` manifest were resolved relative to the playground page instead of the manifest. Failed fetches are now reported, and the Embed button is available for manifest-loaded content. 
   >
- Several gist sharing issues in the web playground [`d8aac67b2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8aac67b2b3306b1f0dc0a14f8387fa9a83a2482)
   &nbsp;
   >- Loading a gist with no owner (anonymous) crashed the page.
   >- A manifest entry whose file is missing from the gist crashed the page.
   >- Updating a gist never removed files that were closed in the editor.
   >- A revoked or expired GitHub token failed every share with "Bad
   >  credentials" with no way to sign in again; it now signs in again.
   >- Share failures (e.g. closing the sign-in popup) were silently dropped.
   >
- Closed files could still be included in the web playground [`f51037702c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f51037702c6810d9e7f0878390eb96fdef4a399c)
   &nbsp;
   >Closing a tab left its file behind for the compiler, so other files that included it kept compiling even though it would no longer be shared, and go to definition reopened it read-only. Closing a tab now removes the file and recompiles the open file. 
   >
- Adding a tab named after a header wiped it in the web playground [`1d01548ae3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1d01548ae371cf5795db41d3da7b6cc7b8df3c68)
   &nbsp;
   >Entering the name of a bundled header in the "+" prompt (ex: include/std.zh) replaced that header with an empty file, breaking every script that included it until the page was reloaded. The header now opens read-only, as it does from go to definition. 
   >
- New files in folders couldn't be included by name in the web playground [`24c14ab074`](https://github.com/ZQuestClassic/ZQuestClassic/commit/24c14ab0745d0a2ab8149fd95b018c7d19d44929)
   &nbsp;
   >Files loaded from a gist or manifest have their folders searched for includes, but a file added with the "+" button (ex: lib/util.zh) did not, so `#include "util.zh"` failed. Its folder is now searched too. 
   >
- Sharing could drop a file in the web playground [`2d1ff403af`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2d1ff403af5fd0d58fb95223773e9d5b70cc5d76)
   &nbsp;
   >Gist file names are flattened paths, so "a/b.zs" and "a_b.zs" (or a file named manifest.json) were uploaded under the same name and only one of them was kept. 
   >
- A missing manifest file broke the web playground [`6c1c4192c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c1c4192c3fa16fd8a04661923839c0bd24ab02c)
   &nbsp;
   >When loading a manifest with ?url=, a single file that failed to load replaced the whole page with an error. Like gist manifests, the file is now skipped with a warning. 
   >
- ZScript failed to link in Linux debug builds [`8c2db37ba2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8c2db37ba2dccfb3bee1b4b5e0b22b64271cd896)
   &nbsp;
   >Regressed in 3.0.0-prerelease.228+2026-10-11 ([433ebb351c](https://github.com/ZQuestClassic/ZQuestClassic/commit/433ebb351c)). 
   >
- Trigger group counts went wrong when scripts changed a placed combo's triggers [`86e3d2dad9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86e3d2dad9bd50a622217678de25c9992f65de1f)
   &nbsp;
   >Changing a placed combo's 'Contributes To TrigGroup' flag or its TrigGroup from a script didn't adjust the per-screen trigger group counts (Game->TrigGroups[]), and removing the combo afterwards subtracted using the new settings, so a count could end up negative. FFCs at the end of a screen's list also kept contributing after their Data was set to 0.  
   >
   >Bug introduced when trigger groups were added in 2.55-alpha-114 ([8841692c](https://github.com/ZQuestClassic/ZQuestClassic/commit/8841692c)). 
   >
- `combodata->Flags[]` changes didn't affect switch states [`cdbc7b56d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cdbc7b56d2e996a8f3ce2d224243345387694507)
   &nbsp;
   >Setting a switch or switch block's Flags[] from a script didn't update the engine's cached view of the combo, so turning on its 'Global State' flag had no effect on what the switch toggled.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd)). 
   >
- Stored combodata `TrigFlags[]` and `TrigButton[]` arrays used the wrong combo [`59420e432e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/59420e432edea330246e2bb283f3375dad6b26c3)
   &nbsp;
   >An array taken from a combodata and kept in a variable, like `bool[] f = a->TrigFlags;`, read and wrote whichever combo the script had most recently accessed through any combodata, instead of the combo it came from: after `int t = b->Type;`, `f[0] = true` changed b's trigger, not a's.  
   >
   >Regressed in 3.0.0-prerelease.118+2025-07-11 ([4b40449c](https://github.com/ZQuestClassic/ZQuestClassic/commit/4b40449c)). 
   >
- `mapdata->ComboT[]` changes were ignored by the engine [`0118780be5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0118780be55aeae78816c16d00a090f1807a6bf0)
   &nbsp;
   >Writing a combo's type through mapdata->ComboT[] updated the combo, but refreshed the engine's cached view of combo 1 instead of that combo, and of nothing at all for a screen that isn't currently loaded. The engine kept treating the combo as its old type, and ComboT[] even read back the old value.  
   >
   >Regressed in 3.0.0-prerelease.115+2025-06-30 ([df3ce207](https://github.com/ZQuestClassic/ZQuestClassic/commit/df3ce207)). 
   >
- `Screen->ComboI[]` and `mapdata->ComboI[]` changes were ignored by the engine [`b2208484d9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b2208484d9c38f2eb25812eaf91165962c81d292)
   &nbsp;
   >Writing a combo's inherent flag through these arrays updated the combo, but not the engine's cached view of it, so the flag had no effect in game and even read back as the old value.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd)). 
   >
- Clamp combo ids given as negative tiles to drawing functions [`e5d30f4509`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5d30f4509c97bb77537fbfed6ebe874a211f198)
   &nbsp;
   >The combo-as-tile forms of Quad, Triangle, Quad3D, Triangle3D and their bitmap variants clamped the id to 65535, but there are only 65280 combos, so ids past the end read outside the combo table. 
   >
- `combodata->OriginalTile` changes were partly ignored without 'New Combo Animation' [`29d7129ee7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/29d7129ee7f8fe11ae8f9adad17c280666702326)
   &nbsp;
   >With the 'New Combo Animation' quest rule off, writing OriginalTile from a script didn't update the engine's cached view of the combo, so draws that pick a specific frame (such as Screen->DrawCombo with a frame argument) kept using the old tiles.  
   >
   >Regressed in 3.0.0-prerelease.89+2025-02-18 ([6b5e98dd](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd)). 
   >
- Wrong values for NPCDT_SWITCH and some combo type constants [`df8defe367`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df8defe367bb93a363a4f2275b4673ab31f0a7fc)
   &nbsp;
   >NPCDT_SWITCH was 50 instead of 51, so using it as an enemy defense set an unimplemented defense rather than 'Switch w/ Player'. CT_CUSTOM_BLOCKER and CT_SHOOTER were each one too low (they were really the Button Prompt and Block Weapon (Custom) types), because Button Prompt was missing.  
   >
   >Also adds constants for the combo types that had none (CT_BUTTON_PROMPT through CT_CUTSCENE_EFFECT), and for the Split, Transform, explosion and Summon enemy defenses.  
   >
   >Bug introduced when the 'Switch w/ Player' defense was added in 2.55-alpha-100 ([ffe999c2](https://github.com/ZQuestClassic/ZQuestClassic/commit/ffe999c2)), and for the combo types when their constants were added in 2.55-alpha-108 ([9d7d25cedb](https://github.com/ZQuestClassic/ZQuestClassic/commit/9d7d25cedb)), after Button Prompts had already shifted the combo type list. 
   >
- `combodata->OriginalTile` could be set one past the last tile [`d5d9ab1fee`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d5d9ab1fee0ab5cf7b41cb19b0824f5dc96442b4)
   &nbsp;
   >Setting a combo's OriginalTile to the tile count or higher stored a tile just past the end of the tile sheet, so drawing that combo read outside the tiles.  
   >
   >Bug introduced when OriginalTile was bounded in 2.55-alpha-100 ([e895ad2d](https://github.com/ZQuestClassic/ZQuestClassic/commit/e895ad2d)). 
   >

### Web

- Prevent web crash in scripts where a constructor calls another constructor [`65d6a40bcb`](https://github.com/ZQuestClassic/ZQuestClassic/commit/65d6a40bcb830250ec69a044c653683754a4fd9d)
   &nbsp;
   >Scripts where a class constructor calls another constructor of its class (ex: `Foo() { Foo(5); }`) crashed when the JIT compiled them. Such scripts compiled by an older version now run without the JIT on the web version instead; recompiling them lets the JIT compile them.  
   >
   >Regressed in 3.0.0-prerelease.161+2026-02-16 ([b3f408e08b](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3f408e08b)). 
   >
- Log why the JIT failed to compile a script [`1dd1bddc1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1dd1bddc1f91e0527f2c88287a5d9b9468848b22)
   &nbsp;
   >An exception while JIT-compiling scripts on the web version killed its worker thread and was logged only as "Uncaught [object Object]". It is now logged as a compile failure, and the script runs without the JIT. 
   >

# Build

- Rebundle the web playground when any of its inputs change [`b6d0686e97`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6d0686e97851e1acfb6aada129e3a6f32ea852d)
   &nbsp;
   >The auth module, path shim, themes and grammar were missing from the bundle command's dependencies, so edits to them did not trigger a rebuild. 
   >
- Base no longer links the console logger [`7bf4d95b78`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7bf4d95b784fc1471affb2cdae7132964f656e41)
   &nbsp;
   >Nothing in base/ uses it, and since it links Allegro, every target linking base also got Allegro - against the project structure, where base has no Allegro dependency. zalleg/, which does use the logger, links it instead.  
   >
   >base_test_runner and the ZASM component were getting Allegro's headers through that link, so they now link it themselves (ZASM only because serialize.h includes core/zdefs.h, one of the layering exceptions).  
   >
   >On Windows, base/zapp.cpp included an Allegro header only to get chdir() (through direct.h), which it now includes directly, since base no longer gets Allegro's headers. 
   >

# Chores

- Check the module layering of #includes in CI and a pre-commit hook [`2563307484`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2563307484cdd16c84101dbd366a925e85f45598)
   &nbsp;
   >scripts/check_layering.py checks every #include in src/ against the module layering: apps don't include each other, shared code (core, dialog, top-level src/ files) doesn't include apps, and low-level modules (base, zalleg, GUI, ...) only include what's below them.  
   >
   >The violations that exist today are listed in the script as exceptions. A new violation fails the check, and so does an exception that no longer applies, so the list can only shrink. It runs early in the web CI job, and CMake installs it as a pre-commit hook alongside the commit message hooks. 
   >
- Allow zalleg/ to include zconsole/ [`b5fa36a09f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b5fa36a09f431dc14e644ac02e48a866a3050609)
   &nbsp;
   >zconsole/ now only depends on base/ and Allegro, the same as zalleg/, so the two sit side by side and zalleg/ can use it: zsys.cpp prints through the console logger. 
   >
- Update replay_uploads_known_good_replays.json [`873f62c5c8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/873f62c5c8565f20b6f7f058803d4718de7998e1)

# Refactors

- Include our own headers with quotes, not angle brackets [`378d689492`](https://github.com/ZQuestClassic/ZQuestClassic/commit/378d689492c36b982bebf25c2eb61bf17be2182f)
   &nbsp;
   >Quotes are the convention for project headers (and what most of the code already used); angle brackets are for system and third-party headers. The two exceptions are in ZC/scripting/types/, where a sibling user_object.h would shadow the top-level one. 
   >
- Remove unused includes that cross module boundaries [`a020660ad4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a020660ad46f08357b0a8ad37daf0cc4b2547364)
   &nbsp;
   >Many files included headers from modules they shouldn't depend on - a shared module reaching into an app (core, dialog or top-level files including ZC/ or ZQ/ headers), one app including another's, or a low-level module (zalleg, GUI, zconsole) including a higher one - while using nothing from them.  
   >
   >Found by blanking each such include and recompiling the file for every target that builds it: removed only where all compiles succeeded and produced byte-identical object files (macOS Release). Also syntax-checked the result under the web build's flags. 
   >
- Move the quest version table out of the script engine [`c5eec1f642`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c5eec1f6429d50cafcad4832ac63ec206c87e0c9)
   &nbsp;
   >The per-section version numbers read from the quest file (FFCore.quest_format and its vZelda/vCombos/... enum) are quest data, but lived on the player's script engine object. So most of core/'s quest loaders - and any shared code checking a quest's version - included ZC/ffscript.h, and with it most of the player.  
   >
   >They now live in core/quest_format.h as a plain global array. FFCore.getQuestHeaderInfo(x) only returned quest_format[x], so it's gone too. 16 core/qst_*.cpp files and zq_strings.cpp no longer include ZC/ffscript.h, using the core headers they had been getting through it instead (each verified to compile to an identical object file). 
   >
- Move ZASM comparison flags out of the compiler's headers [`02c6231662`](https://github.com/ZQuestClassic/ZQuestClassic/commit/02c623166201b2df78c8f721edcc76ff2119b43a)
   &nbsp;
   >The player, the editor and components/zasm included parser/parserDefs.h for the CMP_* flags of the ZASM compare commands. Those now live in components/zasm/cmp.h, and MAX_INCLUDE_PATH_CHARS (the other thing anything outside the compiler used) moved to core/zdefs.h. Nothing outside src/parser includes parserDefs.h any more. 
   >
- Stop base/ depending on core/ and the player [`c2828585f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c2828585f423e4f29b120396c8ad23b60de3beca)
   &nbsp;
   >- zfix_round called the player's replay_version_check() to keep old
   >  replays rounding to nearest. It now asks a hook that the player sets.
   >- PATH_SLASH (only used by base/util.cpp) moved from core/zdefs.h to
   >  base/util.h.
   >- clear_clip_rect() is an Allegro helper, so it moved to zalleg/.
   >- zprint2() is defined by every app; base/zapp.h now declares it, rather
   >  than base/ getting the declaration through core/zdefs.h.
   >
   >
   >&nbsp;
   >
   >base/ now only includes its own headers (besides its tests). 
   >
- Move zsyssimple.h into zalleg/ [`1a6a7b1746`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1a6a7b174614d21c3997f39168acfe3f2562797a)
   &nbsp;
   >It only declares Z_message(), which zalleg/zsys.cpp defines, and zalleg/ was the one low-level module including it from the top of src/. 
   >
- The level palette names are now defined once, in core/ [`91dbd9c84f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/91dbd9c84ff172f8eb3cd83fb5b0ef9b2ea70cce)
   &nbsp;
   >palnames is quest data, loaded by core/qst_csets.cpp, but the player and the editor each defined their own copy. It's now defined next to its loader and declared in core/qst.h, so zc_list_data.cpp no longer needs the player's ZC/zelda.h. 
   >
- Move app-specific dialogs into ZQ/dialog/ and ZC/dialog/ [`1616e5733b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1616e5733b2a3e78f599b81b7bf5066ad7c20a39)
   &nbsp;
   >Only 9 of the dialogs in dialog/ are built into more than one app. The editor-only ones (123 files) now live in ZQ/dialog/ and the player-only ones (16 files) in ZC/dialog/, so dialog/ is left with the shared ones.  
   >
   >A few editor dialogs stay for now because shared code includes them: common.h (used everywhere), quest_rules (included by info.cpp) and the dialogs it opens, and script_data_editor (included by init_data.cpp).  
   >
   >Removes 80 of the layering exceptions. 
   >
- Move the editor's widgets out of the shared GUI builder [`eb52730867`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eb52730867168deee1ea7b555f7d510c22cbc3f0)
   &nbsp;
   >GUI/builder.h added 16 editor-only widgets (tile/combo swatches, the DMap grids, the quest list view, ...) inside #ifdef IS_EDITOR, so the shared builder depended on the editor and compiled differently per app. Those now live in ZQ/gui/builder_zq.h, which builds on GUI/builder.h, and only the 28 editor files that use them include it.  
   >
   >script_data_editor (an editor-only dialog) also moves to ZQ/dialog/. Its one remaining shared user is the editor-only section of init_data.cpp, which keeps a layering exception.  
   >
   >Removes 16 of the layering exceptions. 
   >
- Save quest files about 3x faster [`c428283a20`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c428283a20c2f8f6c48e77683400893791a25134)
   &nbsp;
   >Saving a quest spent most of its time compressing the file. The compressor now finds repeated data with hash chains instead of the original binary-tree search, which produces the same file format (so every existing version still loads the result) within ~0.2% of the old size, at roughly a third of the time.  
   >
   >Saving 100 Rooms of Wisdom drops from 410 ms to 140 ms on a Mac M5 Pro. 
   >

### Player

- Remove unused weapon overloads of the slash/wand block checks [`8555f54256`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8555f54256529ec22ef13d27c9fd0bf249f15781)
   &nbsp;
   >HeroClass::check_slash_block(weapon*) and check_wand_block(weapon*) had no callers; weapons go through check_slash_block2/check_wand_block2. 
   >
- Move light beam tracing out of the Hero code and test it [`2ff20db438`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2ff20db43804ca3d8ce3a6e6c0236062641058b7)
   &nbsp;
   >The beam tracer now lives in lightbeam.cpp and only reads a lightbeam_world - the cell types, custom mirror directions, blocking light targets, the Hero's position, direction and shield, and the broken hitbox compat rule - which handleSpotlights builds from the region every frame. That lets it be tested without loading a quest.  
   >
   >Along the way:  
   >
   >- The combo and FFC tracers share one helper for how light targets and
   >  mirrors turn a beam.
   >- maps.cpp gains versions of COMBOPOS_REGION, COMBOPOS_REGION_INDEX and
   >  COMBOXY_REGION_INDEX that take a region_t. The current-region
   >  versions forward to them and compile to the same code as before.
   >- The world owns the beam grids, one per beam id, instead of
   >  handleSpotlights creating and freeing them every frame; they are
   >  kept until the next frame's reset.
   >- FFC beam grids are keyed by lightbeam_xy instead of a packed dword. It
   >  orders positions the same way, so beams still draw in the same
   >  order.
   >
   >
   >&nbsp;
   >
   >lightbeam_test.cpp (run by `zplayer -test-ZC`) draws each case as text and checks where the beams reach, once with combo spotlights and once with FFC spotlights, and that both light exactly the same spots. The one known difference is a custom mirror that stops the beam: a combo beam lights the mirror first, an FFC beam does not. The tracer counts its steps and stops past a limit only the tests set, so a beam that never stops fails a test instead of hanging it. 
   >
- trace FFC light beams on dense grids [`74db620459`](https://github.com/ZQuestClassic/ZQuestClassic/commit/74db620459da4f53c6387e893c0a6c933c74b36f)
   &nbsp;
   >FFC light beams kept the spots they passed through in a std::map keyed by position, looked up several times per step. An FFC beam moves in 16px steps and never leaves the offset from the combo grid it started on, so each offset now gets a dense array covering the region (plus the margin beams can leave it by), and the tracer looks each spot up once.  
   >
   >In a 16x8-screen region with an FFC spotlight on every screen, this cuts handleSpotlights from about 0.85 ms to 0.28 ms a frame (0.82 ms before the light beam refactor), and with two overlapping beams per screen from 2.1 ms to 0.4 ms. Beams draw in the same order as before, so the beam bitmap is identical. 
   >
- Remove the combo caches [`c4c95be46b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c4c95be46b458b7570101de5dd6947a173818b2e)
   &nbsp;
   >The combo caches (`combo_caches::*`, added with scrolling regions in [6b5e98dd](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b5e98dd)) kept small per-combo copies of combo data for hot per-frame loops. Every script setter that changed a cached field had to refresh them, but many were missed so this was a source of many subtle bugs.  
   >
   >Performance tests suggest that this is not worth keeping:  
   >
   >- measure_performance.py (JIT, 3 runs): engine time 28.24s -> 28.30s
   >  (+0.2%), every benchmark within run-to-run noise.
   >- -frame-timings over 31 real replays (z3, a terror_of_necromancy_demo6
   >  sample, yuurand, stellar_seas, hollow_forest, ...): -0.9% to +0.5%.
   >- Only a synthetic worst case - every map turned into one 16x8 region -
   >  was measurably slower: 348 -> 371 us/frame (+6.7%), nearly all from
   >  the can_cycle and gswitch caches. That's ~0.1% of a 60 fps frame.
   >
   >
   >&nbsp;
   >
   >Timed on an Apple M5 Pro; a CPU with smaller caches may see more.  
   >
   >Reads now go straight to combobuf, and the code is now simpler and less error prone. 
   >

### Editor

- The door editor no longer includes a player header [`8feaeead81`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8feaeead81ba2b91bdc61a60575be38aa3f80a1c)
   &nbsp;
   >It included ZC/zc_sys.h only for large_dialog(), which the editor's own ZQ/zq_custom.h declares. 
   >
- Hand compiled scripts to the editor faster [`30730f4c35`](https://github.com/ZQuestClassic/ZQuestClassic/commit/30730f4c355b04d8ff2a7ab2b14af4e77a7cdfcc)
   &nbsp;
   >The compiler's results were written and read back one byte at a time. Strings and the debug data block now move in single calls, saving about 65 ms per compile of 100 Rooms of Wisdom across ZScript and the editor. 
   >

### ZScript

- Share template type binding for regular and variadic arguments [`bdca9f84cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bdca9f84cc76d97a7f71dd97d589d43966cbe138)
   &nbsp;
   >Binding a template type to a regular parameter's argument and to the variadic arguments was the same code written twice; share it (bind_tmpl_arg). The variadic version also built the variadic parameter's full type, which was never read: the instantiation is resolved from the bound types alone. 
   >
- Derive a function's class context from its flags [`01bccd1510`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01bccd15105723f6a421c100760f006fe2621091)
   &nbsp;
   >Function analysis and code generation each worked out whether a function is a constructor, destructor or method from its flags, and analysis also set it by hand per group of class functions. Use one helper for both, and set it for every function analyzed rather than only template instantiations. 
   >
- Document what parsing_user_class means [`34d5431be5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/34d5431be56ad532785b878a269226d1c745a1e5)
- The compiler no longer includes an editor header [`5753bf1dbc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5753bf1dbcfb5c7053b52d91820d3ed00f84fe8d)
   &nbsp;
   >parser/Compiler.h included ZQ/ffasm.h, the editor's ZASM text parser, but only needed the ZASM types it gets from core/zdefs.h. 
   >
- [mac] don't start an app for every compile [`dbb01abd54`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dbb01abd548e661bf7983297689b83a33a3a9f47)
   &nbsp;
   >On macOS, the ZScript compiler went through Allegro's "magic main", which starts a full macOS application (menu bar and all) before doing anything. That was about half the time of a small compile: an empty script took 90ms, and now takes 40ms. 
   >
- Don't create a temporary file for every parsed file [`3031f086cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3031f086ccf35ff4674e607267efc7085e7bf4b9)
   &nbsp;
   >The compiler created and deleted a temporary file for each file it parsed, including every imported header, only to throw away its contents. Small compiles are now ~10% faster. 
   >
- Speed up the assembler's optimization passes [`98d4fbf65d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/98d4fbf65db5f13c96c4d5c2aedf7c247dd0a881)
   &nbsp;
   >The peephole passes checked every instruction against dozens of instruction types with dynamic_cast, which on libc++ compares mangled type names with strcmp for each failed probe. An exact-type check replaces it, cutting that stage from 45 ms to 6 ms on 100 Rooms of Wisdom with identical output. 
   >

### ZConsole

- The console logger no longer includes core/zdefs.h [`a0b87c10a6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0b87c10a6e37f2bdebe763daa02c0375f119616)
   &nbsp;
   >It only needed the integer typedefs from base/ints.h, and vbound() from base/general.h. 
   >

# Tests

- Only launch under lldb to get a backtrace for a crash [`07354e9cb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/07354e9cb34c335ee3dd03f40c06ca31844ff908)
   &nbsp;
   >On macOS, starting a process under lldb costs ~13 CPU-seconds while it loads symbols for every system library. On CI's 4-core mac runner that became ~30s per launch, so the mac "Replays 1/6" job spent most of its 60-115 minutes waiting on lldb, not running replays. lldb doesn't slow the replay itself; same fps either way.  
   >
   >When retries are enabled the replay harness now runs the first attempt directly and only uses the debugger for retries, so a crash that reproduces still gets a backtrace. run_target.run() (used by the unit tests) runs the target directly and only re-runs it under the debugger if it crashed. Running scripts/run_target.py by hand is unchanged. 
   >
- Run the ZScript database test's compiles from a worker pool [`317c87dad1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/317c87dad155abe97f6fd2215f91aa61562f740c)
   &nbsp;
   >The test handed out its ~900 compiles round-robin, so each new compile waited on one particular earlier one instead of on whichever finished first. A pool keeps every worker busy: 8.1-9.7s -> 6.7s locally. 
   >
- Replay test_save's resaved quests at the same time [`c97ac31d49`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c97ac31d49de6a16c75e530559c0c06d63f7e410)
   &nbsp;
   >test_save replayed its three resaved quests one after another, and those replays were most of its time. They now run at the same time: 25.7s -> 11.9s locally. 
   >

# CI

- Fetch history without old file contents, and 2.55 only where needed [`71dfefd120`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71dfefd1206523e424d26c2cae13b3bdd710f890)
   &nbsp;
   >Build jobs cloned the full history of every branch, because packaging generates a changelog from it. That took up to 7 minutes on mac. Now the checkout is shallow, and a follow-up fetch gets the history, tags and branches without old file contents (blobless): ~9s instead of ~2.5 min locally. It has to come after the LFS checkout, whose `git lfs prune` fails in a blobless clone. The web job gets the same treatment.  
   >
   >Every replay shard also fetched releases/2.55, but only the unit tests on shard 1 use it. 
   >
- Make the build caches big enough, and cacheable on win32 [`cb2c1797e9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cb2c1797e90db69c7a7f23c7ee1d8ce62a7e5b62)
   &nbsp;
   >The win32 RelWithDebInfo build never got a ccache hit: MSVC's default /Zi writes all debug info into one shared .pdb, which ccache can't cache, so it was a ~22 minute cold build every run. When ccache is the compiler launcher, Debug and RelWithDebInfo now use /Z7, which keeps the debug info in each .obj; the linker still writes the final .pdb. The official release builds also use ccache and build RelWithDebInfo, so they get /Z7 too: the machine code is identical, and the .pdb the linker writes has the same symbols for Sentry. The Release config has no debug info, so it is unchanged.  
   >
   >The other build caches were full at 400M (mac evicted entries 182 times in one build), which kept hit rates at 37-64%. Raise the cap to 800M. GitHub evicts the least recently used caches first, so the stale per-run copies make room before any cache that is still in use. 
   >
- Fix the web build cache, which never got a hit [`c8320d68bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c8320d68bd59eee97d279113ef4983ac06c1f205)
   &nbsp;
   >The web build's ccache hit 5 of 963 compiles on every run. setup-emsdk's cache restore always fails (it uses GitHub's retired cache service), so it installed emsdk into a new temp directory each run, and that path is part of every compile's include flags. Install emsdk at a fixed path instead, and check the compiler by emsdk version rather than by the fresh install's file timestamps. 
   >
- Cache the Windows vcpkg packages again [`48eccb1d2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/48eccb1d2ef840c5133a17fed651054d5ee83cc0)
   &nbsp;
   >Every Windows build compiled curl, OpenSSL and FreeType from source, about 7 minutes (5.7 of it OpenSSL). run-vcpkg points vcpkg at its GitHub Actions cache backend, which vcpkg has removed, so nothing was ever reused. Keep the built packages in a folder and cache that. 
   >
- Run the unit tests alongside the replay shards [`99a1c164b7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/99a1c164b79588beed3a932bbe23a47cd2e6a5cb)
   &nbsp;
   >The unit tests (10-12 minutes) ran in replay shard 1 after its replays, which made shard 1 two to three times longer than the other shards on every platform, and the last job to finish. They now have their own job, which starts with the replay shards. On Coverage runs it uploads its own coverage file, as the shards do. 
   >
- Give each platform as many replay shards as its load needs [`8f391b9db8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f391b9db8bd3ae8dae8e0bf7db23ad856870d9d)
   &nbsp;
   >Every platform used 6 replay shards, but their replay loads differ by about 100x: gcc's whole set takes under a minute, while win32's takes about an hour. Each shard spends 1-2 minutes on setup, so the light platforms mostly paid for setup, and mac's extra shards waited for one of its 5 concurrent runners. Shards are now per platform: gcc 1, mac 3, Linux clang and ARM 4, Windows x64 5, win32 6. 
   >
- Don't build the docs on CI's mac runners [`68b6e2d246`](https://github.com/ZQuestClassic/ZQuestClassic/commit/68b6e2d2467dba829eaaf02d3ee3514150f9bfc6)
   &nbsp;
   >The docs come out the same on every platform, and the other platforms build them. On mac, building and zipping them took over a minute of the unit tests, which are the last job to finish in CI. 
   >
- Pass extra arguments to the Windows replay tests again [`2b8a46a582`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2b8a46a5822d086dbf902fdadd2d6b3cf96293a6)
   &nbsp;
   >The replay steps read their extra arguments from an environment variable with bash syntax, but Windows steps run in PowerShell, which expanded it to nothing. So win32 replayed every quest in full instead of stopping each replay after about 60 seconds (--max_duration 60), nearly doubling its replay shards' time, and both Windows jobs ignored --prune_test_results.  
   >
   >Regressed in 3.0.0-prerelease.181+2026-05-06 ([6f5704a350](https://github.com/ZQuestClassic/ZQuestClassic/commit/6f5704a350)). 
   >
- Give win32 four replay shards instead of six [`b2aec114cf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b2aec114cf07b06bb3770e7c5a11132a7fecdc0a)
   &nbsp;
   >With --max_duration applied again, win32's replays take about 37 minutes in all instead of about 60. Four shards of roughly 11 minutes each still finish before win32's unit tests job (13 minutes), and save two Windows jobs per run. 
   >

# Misc.

- Generate the changelog with a few git calls instead of thousands [`628cb86a55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/628cb86a551da9d2b2a2d1a8a36aa06c55bca091)
   &nbsp;
   >The changelog generator ran one git process per commit for the commit bodies, and another per "drop" override to check its subject. CI packaging generates a changelog back to the last stable tag (~3700 commits, ~2900 drops), which took ~4.5 minutes of the mac build job. Both lookups are now a single git call each: 44s -> 0.3s locally. 
   >
