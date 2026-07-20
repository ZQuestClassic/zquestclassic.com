---
title: 3.0 Prerelease 201 2026-07-19
description: 
date: 2026-07-20T06:16:00Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.201%2B2026-07-19/3.0.0-prerelease.201%2B2026-07-19-linux.tar.gz
    name: 3.0.0-prerelease.201+2026-07-19-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.201%2B2026-07-19/3.0.0-prerelease.201%2B2026-07-19-mac.dmg
    name: 3.0.0-prerelease.201+2026-07-19-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.201%2B2026-07-19/3.0.0-prerelease.201%2B2026-07-19-windows-x64.zip
    name: 3.0.0-prerelease.201+2026-07-19-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.201%2B2026-07-19/3.0.0-prerelease.201%2B2026-07-19-windows-x86.zip
    name: 3.0.0-prerelease.201+2026-07-19-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 356562719
tag_name: '3.0.0-prerelease.201+2026-07-19'
channel: '3'
tags:
  - releases
---

# Features

### ZScript

- Native AArch64 JIT backend [`489060ad94`](https://github.com/ZQuestClassic/ZQuestClassic/commit/489060ad941f494e6d8a49c7bcb4d7512c3332cb)
   &nbsp;
   >Scripts now compile to native code on arm64 (e.g. Apple Silicon macs) instead of always running in the interpreter, matching the speedup the x64 JIT already provides on x86-64. 
   >

# Bug Fixes

- Rare crash when loading quests that define few dmaps [`77c7b2a957`](https://github.com/ZQuestClassic/ZQuestClassic/commit/77c7b2a95731a768c152834cba7641df91b90f1d)
   &nbsp;
   >Loading a quest could intermittently crash (or misapply a compat rule) because dmaps beyond those defined by the quest file were never initialized. 
   >
- Build failure on platforms where char is unsigned [`c61879e1e6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c61879e1e6f030008958362192552133935f6f4a)
   &nbsp;
   >Plain char is unsigned on some targets (notably Linux AArch64), unlike x86 and Apple arm64 where it is signed. Struct fields and tables that store -1 sentinels in plain char failed to compile there with narrowing errors, and comparisons against those sentinels would have silently never matched at runtime. Use explicit int8_t for them. 
   >
- Format-truncation build error under gcc on AArch64 [`260bb2a035`](https://github.com/ZQuestClassic/ZQuestClassic/commit/260bb2a035090722aaa25a425c22083acbd4b6f5)
   &nbsp;
   >gcc cannot prove the palette name table is NUL-terminated, so it assumes %s may copy the entire 2D array into the small buffer. Bound the copy with a precision matching the entry size. 
   >
- Sentinel comparisons silently broken on platforms where char is unsigned [`cc7d27df18`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cc7d27df1874412f351f287d14499939cb1e0245)
   &nbsp;
   >More of the class fixed earlier: plain char fields and parameters that hold -1 sentinels compare as always-true/false where char is unsigned (Linux AArch64). These compile fine, so they were invisible to the narrowing sweep - but they break shop pricing, bottle counters, dungeon minimap offsets, and combo ex-triggers at runtime on such platforms. 
   >
- Headless runs could crash driving keyboard LEDs [`37c8fd7403`](https://github.com/ZQuestClassic/ZQuestClassic/commit/37c8fd7403d1eb5c06533a9230ad906879fcd8bd)
   &nbsp;
   >Installing or removing the keyboard updates the physical keyboard LEDs, which goes through X11 on Linux and crashes when there is no usable display. Skip LED updates when running headless. 
   >

### Player

- Keep View Map and dark room lights identical across cpu architectures [`3d2e713161`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3d2e713161e8565cd7091574ae5575a601eeb329)
   &nbsp;
   >The View Map's zoomed drawing and the radius of dark room light circles could differ by one pixel between x86 and arm64 builds, causing replays recorded on one architecture to fail their graphics checks on the other. 
   >
- Keep the death red tint identical across cpu architectures [`87f280c078`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87f280c078cd3be4c4d327a7850baa7eb74a0204)
   &nbsp;
   >The luminance math in red_shift() could produce a slightly different tint on arm64 than on x86, causing replays recorded on one architecture to fail their graphics checks on the other during the death animation. 
   >
- Keep Patra ring positions identical across cpu architectures [`d9985bc6c3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d9985bc6c3ac69d05ca500c3c86fb90055c70970)
   &nbsp;
   >Patra children could be positioned a pixel off on arm64 compared to x86, desyncing replays recorded on the other architecture. 
   >
- Shutdown crash when exiting with JIT worker threads alive [`67c4b01f6d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/67c4b01f6d130197eb14ee21db0f85190a67d803)
   &nbsp;
   >The ZASM pipeline worker pool was held in a static unique_ptr, so any exit path that skipped zasm_pipeline_shutdown joined the worker threads during static destruction - racing threads that touch already-destroyed statics. Seen as zplayer -test-ZC segfaulting at exit on Linux AArch64 after all tests passed.  
   >
   >The -test-ZC path now shuts the pipeline down explicitly, and the pool is intentionally leaked if shutdown is skipped (threads die with the process). 
   >

### ZScript

- Script debugger never opened in builds without a JIT backend [`f13fcf07df`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f13fcf07df4e5d9431a115af2f592c9dfbf1fee1)
   &nbsp;
   >The JIT setting defaults to on, but in builds with no JIT backend (such as arm64 macs) there is nothing to enable. The engine still reported the JIT as enabled, which blocked the ZASM debugger (it only opens when the JIT is off) and did pointless JIT setup work. 
   >
- Let the AArch64 JIT compile huge scripts that branch far [`22f44f5e7a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/22f44f5e7a08a8886ad1fc3e273424e2eb1eba80)
   &nbsp;
   >Very large script functions (tens of thousands of instructions, seen in quests like Yuurand) previously always ran in the interpreter on arm64. Most now compile, making such quests noticeably faster - Yuurand's benchmark replay improves ~13% in wall time on top of the earlier register-gate fix, with script execution now 3.7x faster than the interpreter (was 2.9x). 
   >
- Compile even the very largest scripts in the AArch64 JIT [`f3df09a194`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f3df09a1946d578ec2e00a657e0cdac1decb9aad)
   &nbsp;
   >The handful of giant script functions that still fell back to the interpreter on arm64 (e.g. several bosses in Yuurand with functions up to ~100k instructions) now compile. 
   >
- Stop the x64 JIT mutating cached registers in place [`aff1b6d2bd`](https://github.com/ZQuestClassic/ZQuestClassic/commit/aff1b6d2bdedd837c3dead78068e1ce4ce7abfc2)
   &nbsp;
   >Two helpers in the x64 backend mutate their operand register in place, which corrupts the D-register cache when the operand is a cached register that isn't written back to the same D register:  
   >
   >- div_10000: ANDR/ORR/XORR and the LSHIFTR/RSHIFTR(32) shift counts call
   >  it on the second operand and never write that register back, leaving
   >  its cached value divided by 10000 (the 32-bit sequence also trashed
   >  the operand mid-computation, using it as sign scratch).
   >- cast_bool: CMP_BOOL comparisons (COMPAREV/COMPAREV2/COMPARER followed
   >  by GOTOCMP/SETCMP) cast their operand register(s) to 0/1 in place.
   >
   >
   >&nbsp;
   >
   >Both now write a fresh register, mirroring the AArch64 backend, and compute_stack_offset/READPODARRAYR lose their now-redundant defensive copies.  
   >
   >This is latent, not observed: the ZASM compiler's stack-machine codegen reloads locals per use and no optimizer pass performs redundant-load elimination, so nothing currently re-reads a corrupted second operand before it is overwritten. Any future pass that reuses a D register across these ops would have triggered the bug. 
   >
- Unbreak the JIT runtime-debug tool [`b6ed750666`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b6ed7506663f1a54adaae22d39c7ed44980fe535)
   &nbsp;
   >scripts/jit_runtime_debug.py carried a stale copy of the replay test result dataclasses and crashed parsing any test_results.json with the newer stderr field, before it could report anything. Import the real dataclasses from tests/replays.py instead (resolving the TODO to do exactly that). 
   >
- Stack overflow in jitted scripts could crash instead of safely exiting [`6b69ccfc17`](https://github.com/ZQuestClassic/ZQuestClassic/commit/6b69ccfc171fb9920a6a6bd1ecc1ac9a974812b9)
   &nbsp;
   >The JIT's per-run stack bounds check counted a run's leading PUSHARGS command as one slot instead of its full count - the common shape once the ZASM optimizer combines pushes - so a script within a few dozen slots of the stack limit could write out of bounds instead of exiting with the stack-overflow error. Also, the error logged when compiled code detects an overflow no longer carries a stale command context (e.g. "Waitframe() | Stack overflow!"). 
   >
- `DMap->Offset` returned wrong values on platforms where char is unsigned [`ae79189a9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ae79189a9eb88368b7b9087f9d8a9959ebf769e8)
   &nbsp;
   >Reading DMap->Offset cast the (already signed) xoff field back through plain char, so negative offsets came out as large positive values where char is unsigned (Linux AArch64). Quests with scripted map widgets laid out dungeon map rooms wrong there. 
   >

# Documentation

### ZScript

- Bring docs/jit.md up to date [`b07212bdfc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b07212bdfcb3ed4ed824dbe43851be226143ebee)
   &nbsp;
   >The doc predated the AArch64 backend: note the three backends and their new home under src/zc/scripting/jit/, the shared runtime/codegen layers, the D-register cache, a64 resume dispatch and its emit-error discard / register gate / far branches, and the asmjit fork patch.  
   >
   >Also correct the stale check_sp comment in jit_a64.cpp: its mid-function cc.ret() miscompile was an artifact of the same two since-removed conditions as the annotated-resume one (pinned physical callee-saved registers, and the asmjit fork reserving x3/x13-x15 on AArch64 before the patch scoped that to x64) and no longer reproduces. Verified: the known-good upload corpus (233 replays) and the full replay suite pass with a mid-function ret emitted there, with every function still compiling (no emit errors or capacity discards). The single L_End epilog stays regardless: it centralizes the set_ctx_sp write-back, avoids expanding a full epilog at every overflow check, and A/B benchmarking (measure_performance.py, 3-run medians) measured mid-function rets no faster - slightly worse on script-heavy replays (total script time +1.2%, yuurand_riviere +4.1%). 
   >

# Build

- Support AArch64 targets, including native arm64 macs [`a720c27f87`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a720c27f87f679693979a1e2bba6895256004cff)
   &nbsp;
   >Native arm64 mac builds previously failed to compile. The fast tile blitters now have NEON implementations (matching the SSE versions pixel for pixel) on all AArch64 platforms, including Windows on ARM. 
   >
- Pin asmjit fork commit instead of patching at configure time [`ceb4424a43`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ceb4424a431fddb026545543ecf485b03b601858)
   &nbsp;
   >The changes from third_party/asmjit.patch now live in the fork as proper commits (plus two cherry-picked upstream fixes: RW information of pre/post indexing on AArch64, and JitAllocator::reset when empty), so the configure-time patch step is gone. 
   >

# Chores

- Update replay_uploads_known_good_replays.json [`da9730d5a5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/da9730d5a5b1f96444ce253d5bf5b03c76444fe9)

# Refactors

### ZScript

- AArch64 JIT instruction-selection cleanups [`0dfdc1106c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0dfdc1106ccdcbcca5c9cd907f53f1b947f04f7a)
   &nbsp;
   >Three idiomatic AArch64 improvements, none of which changed measured wall time on Apple silicon (its wide out-of-order core absorbs the removed instructions), but all strictly reduce emitted code:  
   >
   >- Keep the constant 10000 in one function-wide register (vTenK,
   >  initialized in the entry block, read-only after) instead of
   >  materializing it at every fixed-point multiply/divide/compare site.
   >  AArch64 has no ALU or mul immediates that fit 10000, so each site
   >  previously cost a movz and a fresh virtual register.
   >- FLOOR/CEILING: fcvtms/fcvtps convert to integer rounding toward
   >  -inf/+inf in one instruction, replacing frintm/frintp + fcvtzs.
   >  Result is identical: the truncating conversion after frintm/frintp
   >  was exact because the value was already integral.
   >- do_stack_push_many (PUSHARGS with 8+ slots): store two words per
   >  iteration with a post-indexed stp instead of one str per iteration
   >  through an indexed operand. Playground scripts exercise counts up
   >  to 19.
   >
- Cache script registers in the AArch64 JIT [`cf0cf694ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf0cf694acfb26f49e56b7e181b3faae6b5137e5)
   &nbsp;
   >Port the x64 backend's D-register cache: D0-D7 live in host registers between flush points instead of being loaded and stored from memory at every access. Scripts run a few percent faster on arm64 and scripts compile ~18% faster (less code is generated). 
   >
- Select AArch64 far branches by distance to target [`242d4da46e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/242d4da46e5554a1e59fc4b8ef000276f6123882)
- Share the JIT D-register cache between x64 and a64 [`021d11851b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/021d11851beecc8c0a4a2e7e06ac1f56410259b3)
   &nbsp;
   >Move the D-register cache - the entries, dirty tracking, flushes, dependent-register flushes, and the liveness dead-drop policy into a new jit_native_shared.h, templated on a small per-backend adapter that provides the primitive emissions. This logic has a history of subtle bugs and previously existed as two verbatim copies that had to be kept in sync by hand. 
   >
- Share the JIT emit loop between x64 and a64 [`96117eb7d4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96117eb7d455e257f6310cc42eb5e1c7c67b94f6)
   &nbsp;
   >Move the per-command emission loop - block tracking, the cache flush policy invocation, label binding order, dispatch to the compare/wait/ uncompiled/compiled paths (with uncompiled commands batched into single interpreter calls), and debug annotations - into jit_native_shared.h. The loop's ordering is load-bearing (labels must bind after the flush policy so every jump lands on a consistent cache state) and existed as two hand-synced copies.  
   >
   >Each backend supplies a LoopOps hook struct that binds the loop to its existing compile functions; x64's loop_extras hook keeps its backend-specific bits (the stack-cache flush before compares and the JIT_DEBUG_CRASH aid). 
   >
- Share the JIT compiled-command list between x64 and a64 [`3c019274f9`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3c019274f9527ab296683a3b96774d624342101b)
   &nbsp;
   >The two backends carried nearly identical ~90-entry lists of which ZASM commands they compile. The list is now shared (jit_command_is_compiled_shared); each backend keeps only its genuine difference - FLOOR/CEILING, which x64 gates on SSE4.1 and a64 compiles unconditionally. 
   >
- Share the JIT compile-driver helpers between x64 and a64 [`a3c016836d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3c016836da88acc88d83e25a48ab0865eb931fe)
   &nbsp;
   >Move the remaining architecture-neutral pieces of the backends' compile functions into the shared codegen header: the function size count and too-big cap, control-flow label creation, the PUSH/POP run scan used to bounds-check the stack pointer once per run, resume-address extraction from the finalized code, and the per-function debug dump. The backends now contain only code generation: prologue/epilogue, resume dispatch, the command bodies, and their emission helpers.  
   >
   >Also rename the header (jit_native_shared.h -> jit_codegen_shared.h) and cross-reference it with jit_shared.h, stating the boundary: jit_shared.{h,cpp} is the runtime layer (plain types the whole engine sees via jit.h, plus the driver), jit_codegen_shared.h is the compile-time codegen policy that only the two backend translation units instantiate. 
   >
- Move the JIT sources under src/zc/scripting/jit/ [`c470646fd0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/c470646fd0f928fc377704dd225f1efb8dcab519)
   &nbsp;
   >Pure file move (all JIT*.{h,cpp} plus the shared codegen header) with include and build-list updates; wasm_compiler/wasm_structurer stay put as general wasm infrastructure. Verified: both native backends build, the replay quick set and the known-good replay upload corpus pass. 
   >

# Tests

- Increase fps column width in replay progress output [`91002cf6c1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/91002cf6c17cabc2730caad992e0645c07d04aa0)

### Visual Studio Code Extension

- Skip historical-build tests on hosts that cannot run them [`257d366736`](https://github.com/ZQuestClassic/ZQuestClassic/commit/257d3667362e55e63364a95c28b9cae2489dd0ff)
   &nbsp;
   >The 2.55 and 3-no-json extension tests download historical release builds, which are x64-only. Linux arm hosts cannot run them (macs use Rosetta), so skip those tests there instead of failing. 
   >
- Document symbols test asserted stale compiler output [`909d1dbc19`](https://github.com/ZQuestClassic/ZQuestClassic/commit/909d1dbc1995135814f1728d864ceccb5c2b1b2d)
   &nbsp;
   >VSCode serves document symbols from a cache keyed by the document version, and switching zscript.installationFolder does not bump it. The "latest" outline test therefore measured whichever compiler ran the previous query, and the snapshot enshrined old-compiler output. Bump the document with a real edit before querying, and regenerate the snapshot from the actual latest compiler (named enums and constructors are now emitted as symbols).  
   >
   >Also stop retrying snapshot tests: a failed attempt advances the snapshot counter, so retries could only fail with a missing-snapshot error instead of a useful diff. 
   >

# CI

- Fix Sentry debug-symbol upload failing on macOS [`d8972a470d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8972a470d52de27e119a2819b7b2dc4ee61c079)
   &nbsp;
   >Scope the sentry-cli upload-dif scan to build/<config> instead of the whole build tree. The full-tree scan walked the macOS CPack packaging staging and aborted with "Permission denied (os error 13)" on the macos-15-intel runner. Narrowing to the compiled binaries and dSYMs also skips build/_deps and build/CMakeFiles, so the upload is faster. 
   >
- Stop killing slow Coverage replay batches in the unit test step [`8aee6dd9f6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8aee6dd9f65c12c4f7bb1480af847221b4f8465b)
   &nbsp;
   >The unit test step ran the batch replay tests without knowing the build config, so the replay runner used Release-speed duration estimates and kept its watchdog enabled (it is meant to be off for Coverage builds, which are unpredictably slow). Batches containing stellar_seas_intro exceeded the computed limit and were killed mid-run, failing the Code Coverage job.  
   >
   >Now the unit test step exports the config in the environment and the replay runner picks it up as the default build type. 
   >
- Run Linux unit tests under xvfb [`d8e3a44b9e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d8e3a44b9ef74a7c3e7d54b44dfaf4a3b54fd860)
   &nbsp;
   >The runner images differ in X display setup (the arm image surfaced this); give test binaries a real display like the web job does. 
   >
- Fix clang installs on Linux arm64 runners [`1697464faf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/1697464faf3345284945da450d29c33fc70e7d3e)
   &nbsp;
   >install-llvm-action@v1 only knows x86-64 Linux assets, so on arm64 runners it installed an x86-64 clang that fails with Exec format error. Fetch the matching aarch64 release tarball directly (same pinned version, 17.0.2). 
   >
- Test AArch64 Linux [`4f987b0047`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4f987b0047ab7e91a83afcdfbf65647774aeee3b)
