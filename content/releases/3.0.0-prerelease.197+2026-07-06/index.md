---
title: 3.0 Prerelease 197 2026-07-06
description: 
date: 2026-07-06T12:01:45Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.197%2B2026-07-06/3.0.0-prerelease.197%2B2026-07-06-linux.tar.gz
    name: 3.0.0-prerelease.197+2026-07-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.197%2B2026-07-06/3.0.0-prerelease.197%2B2026-07-06-mac.dmg
    name: 3.0.0-prerelease.197+2026-07-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.197%2B2026-07-06/3.0.0-prerelease.197%2B2026-07-06-windows-x64.zip
    name: 3.0.0-prerelease.197+2026-07-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.197%2B2026-07-06/3.0.0-prerelease.197%2B2026-07-06-windows-x86.zip
    name: 3.0.0-prerelease.197+2026-07-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 349915489
tag_name: '3.0.0-prerelease.197+2026-07-06'
channel: '3'
tags:
  - releases
---


# Features

### Player

- Show ZScript source location in -script-runtime-debug output [`a50b8f34a8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a50b8f34a86b9cfa0baf45b9120d3e450c5968ce)
   &nbsp;
   >Each -script-runtime-debug line now leads with the ZScript source location (file.zs:line) of the instruction, and jit_runtime_debug.py prints where the miscompiled instruction is. This points right at the source to investigate instead of only a raw ZASM pc. 
   >

### ZScript

- Measure time spent running scripts with -script-timings [`31bcc69f23`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31bcc69f23ac33984e6fa1a2d2a189e1d2579710)
   &nbsp;
   >Launch the player with the -script-timings switch to profile how much time a quest's scripts spend in the scripting engine. When the game ends, a report is printed with the total scripting time and call count, the highest-cost scripts, and the slowest script-frames (-script-timings-top configures how many; default 20).  
   >
   >Documented at https://docs.zquestclassic.com/zscript/lang/debugger#profiling 
   >

### Web

- Lower RUNGENFRZSCR (`genericdata->RunFrozen()`) as a JIT yield point [`7fad521393`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7fad521393a6b5fbf405d2d98b66e0ca823cde18)
   &nbsp;
   >The wasm JIT bailed to the interpreter on any script chunk containing RUNGENFRZSCR, because runGenericFrozenEngine runs a nested generic script that yields frames via ASYNCIFY (emscripten_sleep). Runtime-compiled JIT modules are not asyncify-instrumented, so that stack unwind can't pass through a JIT frame.  
   >
   >Lower it as a yield point instead (no asyncify needed): the JIT'd script stores the destination register, sets wait_index to resume after the call, and returns cleanly to the C++ driver (run_script). The driver - which IS asyncify-safe - runs the frozen script, writes the result to the register, and resumes. Signalled via JittedScriptInstance::frozen_dest_reg (a clean return always reports RUNSCRIPT_OK, so a return code can't carry it).  
   >
   >The jit_compile_script bail stays in place for now: enabling the JIT for real quests using generic-script content surfaced crashes that need separate fixes (the content hits more codegen paths than the playground tests exercise). A later commit turns the bail into a flag so tests can opt in, and another disables it by default once those bugs are fixed. 
   >
- Compile more ZASM commands in the JIT [`df217bf662`](https://github.com/ZQuestClassic/ZQuestClassic/commit/df217bf6624717f9ef4227cab664f10866af7c29)
   &nbsp;
   >The wasm JIT deferred several common commands (ABS, AND/OR, MIN/MAX, FLOOR/CEILING, LOADI/STOREI, SUBV2) to the interpreter, paying a script-to-engine boundary crossing for every batch containing them. Compile them to wasm inline instead, matching the command coverage the x64 JIT already has. This speeds up scripts on the web version by a couple percent. 
   >
- Inline the hottest engine registers in the JIT [`0edd9ce98c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0edd9ce98c6a3a727177017c5b2f01a0c04a7bf2)
   &nbsp;
   >The web JIT now reads and writes the most frequently used engine registers directly in compiled code instead of calling out to the engine each time. Quests using old-style array access run about 5% faster. 
   >
- Run scripts of quests using generic frozen scripts on the JIT [`06d5f048bc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/06d5f048bcaf9f70a7224dc65247bb8e7ba0f1d2)
   &nbsp;
   >Quests that use generic frozen scripts (for example stellar_seas or terror_of_necromancy) previously ran every script on the interpreter in the web version, because compiling them used to crash or desync - both since fixed. They now get the JIT, making script-heavy quests much faster: stellar_seas_randomizer's script time drops 6.2x (32.7s -> 5.3s over a 10000-frame replay), total engine time 2.35x (45.1s -> 19.2s), for a one-time 1.7s precompile at quest load. 
   >
- Compile scripts in parallel at quest load [`9ae8b8ed98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ae8b8ed98a991d98a52bf18c081334962b42ff6)
   &nbsp;
   >When the JIT is enabled on the web version, precompiling a quest's scripts blocked the main thread once per module. Script code generation now runs on background threads and every generated module is handed to the browser in one batch, which compiles them concurrently. Precompile time drops 19% for stellar_seas (1773 -> 1434 ms) and 34% for yuurand_riviere (6536 -> 4283 ms). 
   >

# Bug Fixes

- Continue hearts being improperly bounded [`6c3d25daf3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6c3d25daf39ad87d49bdeea0f93aaa870b2006c2)
   &nbsp;
   >This lead to high continue heart values wrapping around to lower values. Regressed in `acb7c84`. 
   >

### Player

- No longer fails to start on Windows 7 [`c31d9c538d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c31d9c538d9d4c232c0993556f5f1b23d59e9df9)
   &nbsp;
   >The script debugger's DPI-scale query linked GetDpiForWindow / GetDpiForSystem directly - those only exist on Windows 10 1607+, so the Windows 7 loader refused to start the program ("procedure entry point could not be located"). They are now resolved from user32 at runtime, and where unavailable the debugger UI just uses 1x scale.  
   >
   >Regressed recently in aa96a54. 
   >
- Roc's 'Release Decay' of 0 doing nothing [`e2ed364d5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e2ed364d5a195ed10161e83041e2118714ee52c4)
   &nbsp;
   >It now properly kills your entire jump, as the help text stated it did. 
   >
- SCCs targetting other screens using the wrong map [`ce2b83382a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ce2b83382aed33089156018ebc5816e5dddd743e)

### ZScript

- `weapondata->InitD[]` being off by *10000 [`51f0830193`](https://github.com/ZQuestClassic/ZQuestClassic/commit/51f08301935e0dcbfd76090629d3633b8eed4feb)
- Stop JIT losing a register value across a script wait [`5faa7a7114`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5faa7a711444a9d3c633196da885439231e27056)
   &nbsp;
   >The JIT's D-register cache could save a stale register value when a script suspends (Waitframe/Waitdraw/etc.). At a suspend the whole register file is serialized and restored on resume, but the cache would sometimes skip writing back a register it considered dead in the current function's local control flow, leaving old data in memory that the resumed script then read. This produced wrong script state under the JIT that did not occur in the interpreter. 
   >
- Stop JIT dropping a register kept across a function call [`9cca64f266`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9cca64f2664602b5bc7f417d97c68180b74f2e0d)
   &nbsp;
   >A script that holds a value in a register across a function call - for example a loop or array index used again after a helper returns - could read a stale value under the JIT when the called function does not itself touch that register. The interpreter preserved it; the JIT did not, producing wrong script state (e.g. array writes all landing on the same index). 
   >
- Stop JIT stranding a register set inside a called function [`888356de08`](https://github.com/ZQuestClassic/ZQuestClassic/commit/888356de08590ba3d6826466d1647794c180dd17)
   &nbsp;
   >A value a called function leaves in a register - for example an object reference a property setter keeps after storing the property - could be read as a stale value under the JIT once the function returns. The interpreter preserved it; the JIT did not, so script state could differ under the JIT (e.g. a later use of that reference seeing the wrong object). 
   >

### Web

- Handle a comparison feeding multiple commands [`2e6d369c74`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2e6d369c748dd1d178c9103724bac4ee2fbc8378)
   &nbsp;
   >The WebAssembly JIT compiled a comparison together with only the single command that follows it. But the optimizer can emit one comparison whose result is consumed more than once - e.g. storing the boolean result and then branching on it from the same compare. Only the first consumer was compiled and the rest were dropped, so a conditional branch could be skipped entirely and the script would take the wrong path.  
   >
   >Snapshot the comparison operands and emit code for every consumer of the compare. Also make the "unhandled command" cases a hard error so a future codegen gap fails loudly instead of silently miscompiling. 
   >
- Include caller frames in script stack traces [`31de55434e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/31de55434e64a6b615b55c6b8b277f614bdab211)
   &nbsp;
   >A script error or Trace logged from inside a called function reported only the innermost frame under the WebAssembly JIT - the caller chain (e.g. the run() that made the call) was missing, unlike the interpreter and x64 JIT. The wasm JIT compiles calls inline and never populated the script call stack that create_stack_trace walks.  
   >
   >Maintain ri->retsp and ret_stack across compiled calls so traces show the full caller chain. The upkeep is gated on stack traces actually being possible, so non-tracing runs pay nothing per call. 
   >
- Don't trip the call limit when a script ends by return [`e817823a1f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e817823a1f245cdc9f659036d86d8237cec42858)
   &nbsp;
   >A script whose entry function `void run()` reaches its end without an explicit Game->Exit() ends by "returning" from run(). Under the WebAssembly JIT this could spuriously report "Function call limit reached! Too much recursion." and stop the script early.  
   >
   >Treat a return from the root call frame as the end of the script (the interpreter and x64 JIT do the same), rather than letting the internal call-depth counter underflow. 
   >
- Finish a non-yielding script that returns [`8699ead6e7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8699ead6e70ed939be3e9a85046160cb1ef218d1)
   &nbsp;
   >A script whose entry function never waits (no Waitframe) and falls off the end of run() was left marked as still-running under the WebAssembly JIT instead of finished. A frozen generic script run this way - e.g. via a message's RunFrozenGenericScript control code - was then re-run every frame until the game ended.  
   >
   >Report a completed synchronous entry function as finished, matching the x64 JIT and the yielding case. 
   >
- Report the recursing function at the call limit [`168dc8daa0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/168dc8daa086fa31b5cf951165359dfddf368643)
   &nbsp;
   >When a script hit the function-call limit through deep recursion, the WebAssembly JIT's error pointed at the call site, while the interpreter pointed at the entry of the function being called. The two now match. 
   >
- Report the overflowing command at the stack limit [`a0d6992a0d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a0d6992a0d26fe7f46d6b28bcb2d5e4dac58265e)
   &nbsp;
   >When a script exceeded the value-stack limit, the WebAssembly JIT's "Stack overflow!" error pointed its innermost stack frame at a stale location instead of the command that overflowed, unlike the interpreter. 
   >
- Evaluate a pushed operand before decrementing sp [`d3fe23be98`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d3fe23be98b9c1518482440d8eb1fa8d289e7bb2)
   &nbsp;
   >A stack-dependent register (SCREENDATAEXDOOR / MAPDATAEXDOOR) read while compiling PUSHR was evaluated after the stack pointer had already been decremented, so it read from the wrong stack slot. Read the operand first (as the interpreter and x64 JIT do), then decrement. 
   >
- Stop a JIT crash when one script runs another mid-frame [`27096a5825`](https://github.com/ZQuestClassic/ZQuestClassic/commit/27096a5825fa1affd099ea102652c11ec61aa710)
   &nbsp;
   >On the web build, a script running on the JIT that runs a second script before it finishes (for example an FFC that runs an enemy's script that frame) could crash the game. Such nested scripts now run correctly. 
   >
- Stop a JIT crash when one script runs another mid-frame [`3a007147c4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3a007147c40d37bebfe4b06bfcfcca02247480a6)
   &nbsp;
   >On the web build, a script running on the JIT that runs a second script before it finishes (for example an FFC that runs an enemy's script that frame) could crash the game. Such nested scripts now run correctly. 
   >
- Don't emit the debug-only pc marker in the release JIT [`a006b3d496`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a006b3d4962eba1dfd5fb1818621623f0fb373bb)
   &nbsp;
   >The wasm JIT wrapped a per-command debug no-op (push the pc index, drop it) in #ifndef _NDEBUG, but _NDEBUG is not a real macro - it is never defined - so the marker was emitted in every build, release included. Use NDEBUG so release wasm skips it. 
   >
- Scripts started during another script no longer restart [`43d53f4e83`](https://github.com/ZQuestClassic/ZQuestClassic/commit/43d53f4e83641e81358130f96ff782620c402a56)
   &nbsp;
   >On the web version, with the JIT enabled, a script that began running while another script was already executing (for example an enemy script started by an FFC mid-frame) could restart from the beginning on a later frame, corrupting its state. In quests using generic frozen scripts this caused rng desyncs (terror_of_necromancy_demo6). 
   >
- Stop cheat overlays from crashing [`bb92a87397`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bb92a873970441b064023c28935ae7ba01509fe9)
   &nbsp;
   >On the web version, turning on the walkability/effect-flag overlays (the L4 cheat) or hitbox display crashed the game. 
   >
- Don't crash when loading a second quest in the same session [`431730fd3d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/431730fd3d07a6311296ef2f8b17ea4db7d381f7)
   &nbsp;
   >If JIT is enabled, releasing a quest's compiled scripts (loading another quest without reloading the page) called a browser-side cleanup hook that was never defined, throwing during quest load and leaking the compiled modules. 
   >

# Documentation

### ZScript

- Correct JIT default and per-backend details in jit.md [`8f76666005`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f7666600585dbc800365dac22ec5ab7c99cd0c2)
   &nbsp;
   >JIT is on by default (not off). Split the compilation-model description into x64 (per-function, hot, worker-pool) vs wasm (whole @single chunk, precompile-only); fix the stale pc_to_address reference to pc_to_resume_address; and note modern CALLFUNC/RETURNFUNC vs the legacy GOTO calling convention. 
   >
- Document how the wasm JIT backend works [`040b11dde8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/040b11dde859035c41cd95cbc0aafebdf21e6f83)
- Note the JIT register cache's measured benefit [`9a22d784a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9a22d784a5a4415c9618dc44f71a25de36612b23)
   &nbsp;
   >Summarize the -JIT-cache-registers perf comparison (precompile and script-execution wins, negligible on function-call-bound work) on jit_is_use_cached_regs_enabled, and note that disabling it doubles as a correctness oracle for register-cache miscompiles. 
   >

# Build

- Retrigger web data packaging when resources/ files change [`4f30975582`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f3097558207099d252f4bf7ef370b9814593ae4)
   &nbsp;
   >package_web_resources only depended on package.py, so edits to files under resources/ (e.g. base_config/zc.cfg) never retriggered packaging and the web build silently shipped stale zplayer.data/zeditor.data.  
   >
   >Glob the resources/ tree (CONFIGURE_DEPENDS) into the command's DEPENDS. qrs.zh is excluded: it is generated by gen_zscript_qr_enum, and depending on it would pull that zeditor-running generator into the packaging graph. 
   >

### Web

- Update puppeteer to 25.2.1 (Chrome 138 -> 150) [`3d87fa13fd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3d87fa13fddedc93dc8abd8d18eb4b1f944a5ae9)
   &nbsp;
   >The wasm JIT can crash the renderer on large quests: V8 138 runs its Zone allocator out of memory while TurboFan-tiering-up the big inlined "yielder" wasm function. Newer V8 (Chrome 150, bundled with puppeteer 25.2.1) handles it - replays that OOM 138 (e.g. yielders up to ~3MB) pass on 150. Bump the ci.yml puppeteer pin to match so CI web tests run on the newer Chrome. 
   >

# Chores

- Profile web replays with the V8 CPU profiler [`b156f97cf7`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b156f97cf76a7fa2cf4d235986cdfa9d2f5ddf19)
   &nbsp;
   >PROFILE=1 makes web/tests/run_replay.js record a V8 CPU profile of the replay (via a CDP Profiler session, started once gameplay begins) into <output>/profile.cpuprofile; scripts/analyze_cpuprofile.py summarizes self time by function and module. Script-module wasm frames are named thanks to the name-section fix.  
   >
   >A profile of a stellar_seas benchmark run immediately exposed that "JIT"-mode benchmarks of frozen-generic quests had been measuring the interpreter - run_script_int at 50.8% self time plus get/set_register at 11%, versus ~5% total script time with the JIT actually on - because the benchmark script was missing -no-JIT-wasm-bail-on-frozen-generic (fixed in the commit that introduced the flag).  
   >
   >Also measured while validating the methodology: -script-timings costs ~3% on a call-heavy replay, and sound on/off makes no measurable difference in headless web runs. 
   >
- Update replay_uploads_known_good_replays.json [`c8cf9d40e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c8cf9d40e8a65088833bd56705264a760b03b650)
- Handle some backported QR versioning [`871c03f1b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/871c03f1b599b04d7834b65b43f52d2435b8031f)

### Player

- Add -experimental-disable-script-error-logs flag [`2cbe66b581`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2cbe66b581a551d5576be66e4f66a48e4c586bbf)
   &nbsp;
   >For benchmarking. Skips script error logging (and its stack-trace creation) so scripts that error every frame - e.g. a divide-by-zero in a hot loop - do not dominate the measurement. Especially useful on the web build, where each console line is a slow devtools round-trip. 
   >

# Refactors

### Player

- [win] remove obsolete vsync workaround (use_dwm_flush) [`b718a4a3e5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b718a4a3e575415a15665ec9d10b96e1336e5039)
   &nbsp;
   >Remove a Windows-only screen-tearing workaround from the Vista/Win7 era, along with its hidden use_dwm_flush config option, which is now ignored if set. It was off by default and is redundant now: the display backend owns frame presentation, and desktop composition is always on in modern Windows. 
   >

### ZScript

- Rename script object base class to script_object_base [`4497b9e502`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4497b9e502aaa5f96e45bbe2a417a2e7ceb76265)
   &nbsp;
   >Rename the base struct for all reference-counted, GC-tracked script objects from user_abstract_obj to script_object_base.  
   >
   >The old name was inaccurate (it has no pure virtuals, so it is not a C++ abstract class) and clashed with the user_object subclass and the script_object_type::object tag. The new name aligns with the existing script_object_type / script_objects / *_script_object vocabulary. 
   >

### Web

- Build call graph in debug-data structured ZASM; classify RUNGENFRZSCR as a yield point [`6b90bc9520`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b90bc952096a7399da12d8122382dbca35aba4c)
   &nbsp;
   >zasm_construct_structured's debug-data path (modern, debug-data quests) never populated ZasmFunction::called_by_functions, unlike the legacy path. That graph is what zasm_find_yielding_functions walks to mark transitive yielders for the wasm JIT, so a function calling a yielding (wait/RUNGENFRZSCR) function went undetected. Build it here too.  
   >
   >Also treat RUNGENFRZSCR as a yield point (it suspends like a wait in the wasm backend): mark its function a yielder and end its CFG block so execution can resume after it. 
   >
- Call engine callbacks directly from JIT-compiled scripts [`13fbc0a7ea`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13fbc0a7eaeb984d761aa00d343d33d7fe542410)
   &nbsp;
   >Compiled scripts reached engine callbacks (register access, interpreted command batches, array reads/writes) through JS wrapper functions, paying a JS frame plus argument marshaling on the hottest script-to-engine path. Bind the script module's imports to the engine module's raw wasm exports instead, making these calls direct wasm-to-wasm. Scripting benchmarks run twice as fast: this halves total scripting-engine time across the benchmark set, with the heaviest quests improving the most. 
   >
- Compile real control flow for non-yielding functions [`82e4a07a8c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/82e4a07a8c885f704d11f75d8905e6ce9cc26444)
   &nbsp;
   >The wasm JIT lowered all control flow through a "loop-switch": one giant br_table dispatch that every branch re-enters by writing a global block id. A script loop paid a global write plus a multi-way dispatch every iteration, and the browser's optimizing tier couldn't recover the loop nest to optimize across it.  
   >
   >Non-yielding functions - where game-logic helper loops live - are now compiled to genuine structured control flow (block/loop/if) reconstructed from the CFG, so script loops become real wasm loops. Scripting benchmarks run ~4% faster on the web version. 
   >
- Compile the yielder's non-suspending loops as real loops [`6afa80a1d2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6afa80a1d20bfa6520888c31c6ab2e8a13e31250)
   &nbsp;
   >The previous change gave non-yielding functions real structured control flow, but scripts that wait are inlined into the "yielder", which stayed entirely on the slow loop-switch dispatch. Now a loop inside the yielder that never suspends (no waiting, no calls to waiting functions) is also compiled as a real wasm loop, nested inside the dispatch. This helps quests with compute loops inside scripts that also wait, ~2% across the benchmark set. 
   >
- Keep the script stack pointer in a register [`0db05a5de4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0db05a5de4375eddd2dd7eeb35671304c9db7116)
   &nbsp;
   >Compiled code accessed the script stack pointer through a wasm global on every stack operation - a memory access the browser's optimizing tier cannot register-allocate. The stack pointer now lives in a function-local (which the optimizer keeps in a machine register) while inside compiled code, touching the global only at function boundaries. Scripting benchmarks run ~4% faster on the web version. 
   >
- Keep hot engine pointers in machine registers [`b8b10c40ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b8b10c40ae6962c055a9bfa21dd4535437fa5b80)
   &nbsp;
   >Compiled script code re-read a few frequently used engine pointers from memory on every access; they are now loaded once per function so the browser can keep them in machine registers. Scripting benchmarks run ~2% faster on the web version, up to ~4% for script-heavy quests. 
   >
- Avoid std::function allocations in the wasm JIT codegen [`fbd38a0166`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fbd38a01667193e687e7462757c67275536dc183)
   &nbsp;
   >set_z_register took its emit callback as std::function, heap-allocating for nearly every compiled instruction's capturing lambda; it is now a template parameter (zero allocation, inlined).  
   >
   >In a native codegen profile (macOS), allocator traffic was ~35-40% of wasm-JIT compile time and these lambdas were a top source (std::__function::destroy_deallocate frames). On the web build itself the win is below run-to-run noise (stellar precompile 1702->1826 ms, yuurand 6566->6843 ms medians of 3, both within the +/-8% spread; single runs moved the other way) - emscripten's dlmalloc is much cheaper than the native allocator, so this mostly helps native JIT_BACKEND=wasm builds and future parallel compilation.  
   >
   >Emitted wasm is byte-identical (verified with -JIT-save-wasm dumps for playground + stellar_seas). 
   >
- Reserve wasm JIT code buffers and move instead of copy [`c1610cb275`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c1610cb27595685fc7ceae7d9bd38be67ebddf10)
   &nbsp;
   >WasmWriter::finish() returned the code vector by copy - for every compiled function, including multi-megabyte yielders - and nothing reserved, so buffers reallocated their way up. finish() now moves, the per-function buffers reserve ~24 bytes per ZASM instruction, and the module writer's code section reserves the summed function sizes.  
   >
   >On the web build the win is below run-to-run noise (stellar precompile 1702->1795 ms, yuurand 6566->6705 ms, medians; +/-5% spread) - the copies are linear memcpys of a few MB, milliseconds against a multi-second compile. The realloc/copy traffic was significant in native (macOS allocator) profiles, so this mainly helps native JIT_BACKEND=wasm builds. 
   >
- `O(1)` block-start checks in the wasm JIT compile loops [`e5435abbf1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5435abbf10416f85f3b747d822b4a47f467f1d0)
   &nbsp;
   >compile_function's per-instruction loop (and the uncompiled-batch scan and comparison-consumer walk) called ZasmCFG::contains_block_start - an out-of-line binary search - for every ZASM instruction. During block b's body current_block_index is b + 1, so the next block start is simply block_starts[current_block_index]; the loops now compare against that directly.  
   >
   >On the web build the win is below run-to-run noise (stellar precompile 1795->1798 ms, yuurand 6705->6729 ms, medians of 5). The calls were visible in native codegen profiles; kept for the native builds and because it also documents the current_block_index invariant.  
   >
   >Emitted wasm is byte-identical (verified with -JIT-save-wasm dumps). 
   >
- Inline command_is_wait [`78ee3e51ae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/78ee3e51ae41edb650e6182bab69b106f51b2e7a)
   &nbsp;
   >It is called for every ZASM instruction in several wasm-JIT compile passes (yielding-function detection, dispatch entries, region detection, the main compile loop), and the cross-TU call showed up in native codegen profiles. Now an inline switch in ffscript.h.  
   >
   >On the web build the change is below run-to-run noise (stellar precompile 1798->1773 ms, yuurand 6729->6536 ms, medians of 5). Cumulatively, all four codegen micro-optimizations land web precompile at parity with the pre-series baseline (stellar 1702->1773 ms, yuurand 6566->6536 ms) - the native-profile hotspots (allocator traffic, copy churn, call overhead) are largely absent under emscripten's dlmalloc/wasm calling conventions, so web compile time is dominated by the codegen's real work.  
   >
   >Emitted wasm is byte-identical (verified with -JIT-save-wasm dumps). 
   >
- Share the JIT suspend-point predicate [`515059273a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/515059273afdd7a18cfc50619ffc270cb75b81e3)
- Split the wasm structurer into analyze and emit steps [`37c987d7e8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37c987d7e877f25613158d9f30bef5531a7374ee)
- Dedupe the structured-codegen partition and cmp scans [`01cedec8ed`](https://github.com/ZQuestClassic/ZQuestClassic/commit/01cedec8ed371f141263ffa2662f9d53bf085ee7)

# Tests

- Run snapshot test subprocesses in parallel [`4f82a03b6f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f82a03b6f51c15e7ad78fc277b5f5cac394492a)
   &nbsp;
   >The optimize-ZASM, optimize-ZASM-unit, and ZScript-compiler snapshot tests invoked zplayer/zscript once per input in series, which was slow. Run those invocations concurrently via a thread pool while keeping the snapshot assertions serial and in their original order, so results are unchanged. On a 16-core machine this cuts update_snapshots.py from ~165s to ~76s. 
   >
- Make replay harness CLI robust to cwd and folder-only runs [`e842b7e02f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e842b7e02fbe1993f987afa7830eafc010ed566d)
   &nbsp;
   >Resolve replay paths to absolute when loading them, so a path validated from one working directory still opens from the zplayer subprocess (which runs with its cwd set to the build folder). Previously a relative replay path failed with "could not open replay file".  
   >
   >Also let --root_replays_folder run all replays under that folder when no positional replay arguments are given, instead of silently scanning the default tests/replays directory.  
   >
   >Adds load_replays coverage to tests/test_replay_harness.py. 
   >
- Fix scripts/jit_runtime_debug.py missing rng_desync field [`53399e6d31`](https://github.com/ZQuestClassic/ZQuestClassic/commit/53399e6d314995c9560e7c5cdef0abc6e61cd578)
- Guard against zero total frames in replay summary [`bcdba6aeb4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bcdba6aeb46be1f0cfd0187ccc7b70d6ed2766e7)
   &nbsp;
   >Avoids a ZeroDivisionError computing the frames-limited ratio when a run produces zero total frames (e.g. every replay filtered out). 
   >
- Don't let a hung web replay stall tooling forever [`0c26b7377d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c26b7377de4384654d2125881049046c5d4aaa6)
   &nbsp;
   >web/tests/run_replay.js exited immediately on a fatal console message while browser.close() was still in flight, orphaning Chrome; the orphan held the inherited stdout pipe open, so the parent harness blocked reading it indefinitely (observed stalling a jit_runtime_debug.py bisect for 9 hours). Now the exit waits for the browser to close (with a 5s fallback). jit_runtime_debug.py additionally kills and retries any replay run exceeding 20 minutes, cleaning up orphaned browsers and the webserver port between attempts. 
   >

### ZScript

- Guard against caching frame-changing vars across Waitframe [`5883508fa6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5883508fa66cc581be03533921ca61882be2a2c2)
   &nbsp;
   >Adds an auto replay test that reads Game->Time and Game->CurScreen before and after a Waitframe() and asserts the values change, guarding against the ZASM optimizer or JIT caching an engine variable across a frame boundary. 
   >
- Make jit_runtime_debug.py bisect-driven so it works on web [`1c349eeaae`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1c349eeaae90f92f3a8398cf8a326b51f51dc0f1)
   &nbsp;
   >jit_runtime_debug.py now isolates a JIT bug by binary-searching which run_script call first diverges from the interpreter (via the -JIT-run-lo/-JIT-run-hi split), then diffs per-instruction with only that one call jitted. The per-script divergence bisect has no per-command JIT->engine boundary, and limiting the per-instruction pass to a single call means only that call's commands cross the boundary - so, unlike the old full-JIT per-instruction scan, this is tractable on the web build. 
   >

### Web

- Add transitive-yield regression test [`5b111cbd6b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/5b111cbd6ba40cd5db7f01cb3c540028bfcf6ad1)
   &nbsp;
   >A generic script whose run() calls helpers that wait one or more frames, directly and indirectly, to exercise the wasm JIT's detection of transitively-yielding functions. 
   >
- Add DUMPIO/V8_FLAGS/crash logging to web replay harness [`e25d63173f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e25d63173fede98b9621f3f6f7c7f24a0246faea)
   &nbsp;
   >Adds opt-in diagnostics to the puppeteer replay runner for chasing renderer crashes: - DUMPIO=1 pipes Chrome stdout/stderr through (surfaces OOM/crash aborts   that never reach the page console) - V8_FLAGS=... forwards flags to V8 (e.g. --liftoff-only) - log [PAGECRASH] when the renderer process dies - log [RUNREPLAY-THREW] so a crash-induced page.evaluate rejection is not   swallowed silently 
   >
- Run generic frozen scripts on the JIT in replay tests [`71b91e2c32`](https://github.com/ZQuestClassic/ZQuestClassic/commit/71b91e2c32183b1ea39992dee61a9a3881af6267)
   &nbsp;
   >Normal play still bails generic frozen script content (RUNGENFRZSCR) to the interpreter on the wasm backend, since its codegen still has a known desync. But the replay tests should cover the real wasm codegen, not the interpreter, so they now opt out of that bail. 
   >
- Cover the JIT's structured control flow with hot loops [`993aa3e0ab`](https://github.com/ZQuestClassic/ZQuestClassic/commit/993aa3e0aba2b3e75e7863336926c810e8d53392)
   &nbsp;
   >Adds an auto script test pinning both wasm-JIT structuring mechanisms with checksums, running the same code before and after Waitframe resumes:  
   >
   >- Loops written inline in run(): run() waits, so its body is inlined
   >  into the yielder, and a non-suspending inline loop is exactly what
   >  detect_yielder_regions compiles as a real wasm loop nested inside
   >  the dispatch (-no-JIT-wasm-structured-yielder turns that off; with
   >  it on the playground yielder contains 51 real wasm loops, with it
   >  off just the dispatch loop). Covers loop-carried state, a nested
   >  loop, and a conditional break.
   >
   >
   >&nbsp;
   >
   >- Loops in helper functions: they never wait, so each compiles as its
   >  own structured non-yielding wasm function (-no-JIT-wasm-structured).
   >  Covers a nested loop, an early break, and an early return from
   >  inside a loop.
   >
   >
   >&nbsp;
   >
   >With -script-timings on the web build the replay runs ~72.0ms with the yielder structuring off vs ~67.5ms on (median of 3).  
   >
   >Also speeds up eligible-loop detection: the single-entry check now uses precomputed per-block predecessor bounds instead of rescanning every block's edges per candidate, and the comparison-leak pass walks the sorted region list with a cursor instead of scanning all regions per pc. Cuts the yielder-structuring overhead on the largest quest (yuurand) from ~170ms to ~100ms of one-time codegen (~4% of total precompile). 
   >

# CI

- Enable DCHECK on Linux builds [`2fdae3674d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fdae3674dd2c6c081159e063cc308c53f22a8d0)
- Cover wasm JIT frozen-generic scripts and mid-run adoption on web [`67be7ecd11`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67be7ecd1115c0415e90345638d0cda768c03f12)
   &nbsp;
   >Adds the two shortest replays that exercise them to the web CI replay run: terror_of_necromancy_demo6_05_of_54 (the mid-run adoption regression replay - it desynced before the fix, and triggers 4 adoptions) and stellar_seas_intro (compiles a large @single chunk that uses generic frozen scripts). 
   >

# Misc.

- Add engine performance measurement script [`e4ea3c449c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4ea3c449c1d581471c83f5c88605a582647b493)
   &nbsp;
   >scripts/measure_performance.py runs a representative set of replays (plus a synthetic maths benchmark) one at a time and compares engine modes: JIT, interpreter, and interpreter without the ZASM optimizer. Reports time to completion, JIT precompile time, and isolated scripting-engine time (the tightest JIT-vs-nojit metric), with per-run progress/ETA logging and a per-run CSV. Works against native and web builds (the latter driven through the puppeteer replay harness, with automatic retries for web flakes; aggregates only include benchmarks that completed in every mode).  
   >
   >Replay length is capped via --frame (default 50000) to keep long replays tractable. Also enables -frame-timings on the web build so frame-time percentiles are reported there too. 
   >
