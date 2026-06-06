---
title: 3.0 Prerelease 193 2026-06-06
description: 
date: 2026-06-06T01:07:54Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.193%2B2026-06-06/3.0.0-prerelease.193%2B2026-06-06-linux.tar.gz
    name: 3.0.0-prerelease.193+2026-06-06-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.193%2B2026-06-06/3.0.0-prerelease.193%2B2026-06-06-mac.dmg
    name: 3.0.0-prerelease.193+2026-06-06-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.193%2B2026-06-06/3.0.0-prerelease.193%2B2026-06-06-windows-x64.zip
    name: 3.0.0-prerelease.193+2026-06-06-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.193%2B2026-06-06/3.0.0-prerelease.193%2B2026-06-06-windows-x86.zip
    name: 3.0.0-prerelease.193+2026-06-06-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 335361288
tag_name: '3.0.0-prerelease.193+2026-06-06'
channel: '3'
tags:
  - releases
---


# Features

- 'Overhead' flag on all combos [`9c8ade84ac`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9c8ade84ac02c136222f627198e84ea5537b4fd1)
- Add viewport suspend/despawn sprite variables [`a25f1a55f1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a25f1a55f10efbe6b9988ea376b7e4de656db6db)
   &nbsp;
   >Sprites have a new `ViewportSuspendRange` variable controlling how far past the viewport edge they keep running scripts and movement before being suspended. Previously this was a hardcoded 48px (3-tile) buffer for eweapons and npcs, and 0 for everything else. Set it to 0 to disable suspending entirely (the sprite always stays active). Configurable on enemies, weapons, items and FFCs via the editor's new "Suspend Range" field, or on any sprite via script.  
   >
   >Sprites also have a new `ViewportDespawnRange` variable (default 0, disabled) that, when set, removes the sprite once it travels that many pixels past the viewport edge. Configurable in the editor's new "Despawn Range" field, and on any sprite via scripts. When left at 0, each sprite type's normal off-screen handling still applies (weapons clip at the screen edge, enemies are killed when out of bounds, items are removed once well outside the region). 
   >
- Trigger condition for exdoors [`616a0a2797`](https://github.com/ZQuestClassic/ZQuestClassic/commit/616a0a27975293de589494a665183de95cf2b538)

# Bug Fixes

- More bridge problems [`2fb6d62fd1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/2fb6d62fd1ed20bd4c1fa4d4a669d72311c7f265)
   &nbsp;
   >Finish making bridge coverage more consistent Cleanup "show solidity" not showing bridges / effect squares properly New QR for bridges working above layer 2 or not 
   >
- QR for chests/signs/lockblocks working above layer 2 [`a677f29140`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a677f2914018b6f8efcaba0c915b693d9f203d6a)
- Wrong offset being used for solid object pushing [`7275eb2f55`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7275eb2f5519ac3c5da46359131f196deaeb2704)
   &nbsp;
   >these offsets would commonly be the same value, so, unlikely this actually caused any issues yet. 
   >
- Buggy solid platform sideview ffc collision [`87a84351e3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/87a84351e386f6c4daab745e977f145170d01dc0)
   &nbsp;
   >when moving at angles, the collision for riding the platform was getting confused with the collision for solid objects pushing the player, knocking the player off the platform weirdly. 
   >

### Player

- Softlock with `No Scrolling Screen While Carrying` QR in nes dungeons [`195a72bf84`](https://github.com/ZQuestClassic/ZQuestClassic/commit/195a72bf84aadb3bad726b665183892fe106ae3d)
   &nbsp;
   >QR wasn't preventing the "suck" of bombed doors and walk-through walls from trying to scroll this resulted in softlocking the player because they were being permanently sucked into the scroll but the scroll was being prevented by the carried object. 
   >
- Improve sprite suspend check [`d80f0f8fe3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d80f0f8fe32d6a071e9ef4dd38a4583973555eb7)
- Standing state not checking properly for ffc platforms [`57efb0e5f4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/57efb0e5f46251f16a510c4436648cd7c6f59579)
   &nbsp;
   >this made it hard to jump when riding a downwards-moving ffc platform 
   >
- Knockback through sideview platforms [`a3fd427575`](https://github.com/ZQuestClassic/ZQuestClassic/commit/a3fd427575e032e31414d88aa9e4838a439d8257)
- Autowalk not working properly during scrolling screen load [`f83d95f0cc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f83d95f0cc0280aecd7b7172a99af544fa8a5789)
- Shooter/crumble combos ticking when screen is 'frozen' [`8f6c934bb3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8f6c934bb375bf884898e707a759e34a02973991)

### ZScript

- Elide arrays, deprecated vars in debugger tooltips [`d306072e6c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d306072e6c89d12e5887b4861cefb5d845300e05)
- Debugger shows tooltip for Screen [`81af62833d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/81af62833d753ab8b99a5c6a42ee828818be9082)

# Build

- Resolve -Wdeprecated-this-capture [`3b28e893bf`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3b28e893bff16fc1f56de835f8784a3baf2f0277)
   &nbsp;
   >Change implicit `[=]` this capture to explicit `[=, this]` in lambda captures across GUI dialog code, as required by C++20. 
   >
- Resolve -Wstring-plus-int in combo.cpp [`b3a78548c2`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3a78548c28fab8ccc40efc2e68b5cff094a7946)
   &nbsp;
   >Adding int16_t (trigdmlevel) to a string literal advances the pointer instead of appending the number. Replace with fmt::format. 
   >
- Resolve -Wpessimizing-move in list_data.cpp [`16481f7d1a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/16481f7d1ab2d537e4279687362e42225f3a6ff2)
   &nbsp;
   >Wrapping a temporary return value in std::move prevents copy elision (NRVO). Remove the redundant move so emplace_back can construct in place. 
   >
- Resolve -Wdangling-else in saves.cpp [`e4712cc2fc`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e4712cc2fcdf159e32c0d14ab1cd5f8369d050d6)
   &nbsp;
   >The else clause was syntactically bound to the inner if (C++ nearest-if rule) but the indentation implied it belonged to the outer if. Add braces to the outer if to make the intent unambiguous. 
   >
- Resolve -Wtautological-constant-out-of-range-compare in weapons.cpp [`8e901f31b5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/8e901f31b51f7c4b1b3c2e617fcc0af2a4d9dfd5)
   &nbsp;
   >ffc_id_t is uint16_t, so comparing it to -1 (an out-of-range value) always evaluates to true. Cast -1 to ffc_id_t so the comparison is against the actual sentinel value (0xFFFF) used when ignoreffc is reset. 
   >
- Resolve -Wtautological-overlap-compare in guys.cpp [`3248d639f5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/3248d639f5ffd54a08db25cf889862fbabdffa5c)
   &nbsp;
   >The condition (wpn < wScript1 && wpn > wScript10) is always false because wScript1 < wScript10 — no value can be simultaneously less than wScript1 and greater than wScript10. Change && to || to correctly exclude the script weapon range from the summoning check. 
   >
- Resolve -Wvexing-parse in zq_tiles.cpp [`0de5a63903`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0de5a639035e3dab88e046365bc5c8f72f151710)
   &nbsp;
   >Local function forward declarations inside a lambda body triggered the vexing-parse warning. onDrawingModeNormal is already declared in zquest.h (which is included). Move on_scroll_cpane there too, then remove both redundant local declarations. 
   >
- Resolve -Wuninitialized in pattern_cakemtn.cpp [`cf40bae46d`](https://github.com/ZQuestClassic/ZQuestClassic/commit/cf40bae46dc512c79d453d73799d54e84456324b)
   &nbsp;
   >oldconn was declared without an initializer then used with |= in a loop, leaving it with an indeterminate value on first use. Initialize to 0. 
   >
- Resolve -Wswitch in debug_data.cpp [`0c63ed30c5`](https://github.com/ZQuestClassic/ZQuestClassic/commit/0c63ed30c5b71c2f20a3fdcabfb396249247a20a)
   &nbsp;
   >getTypeID's switch over DebugTypeTag did not handle the five non-primitive types (TYPE_CONST, TYPE_ARRAY, TYPE_CLASS, TYPE_ENUM, TYPE_BITFLAGS). All five correctly fall through to the types-table lookup below the switch; add a default: break to suppress the warning. 
   >
- Resolve -Wempty-body in zquest.cpp [`e5a6c5852f`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e5a6c5852fdf86d3a4406942afc631da0d138d3b)
   &nbsp;
   >A stray semicolon after the if condition made the if body empty, causing toggle_is_compact() to always execute instead of only when the button was clicked. Remove the semicolon. 
   >
- Resolve -Wunknown-pragmas in ffscript.ypp [`13de4204f8`](https://github.com/ZQuestClassic/ZQuestClassic/commit/13de4204f8eff640394991370b531cf2cd372e59)
   &nbsp;
   >#pragma warning(disable : 4065) is MSVC-specific and triggers an unknown-pragma warning under Clang. Guard it with #ifdef _MSC_VER. 
   >
- Resolve -Wdynamic-class-memaccess in combowizard.cpp [`18ee6b6d6e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/18ee6b6d6e32e16e89268aaf278b01dd8fca0909)
   &nbsp;
   >memset on a zfix[] array would overwrite the vtable pointer because zfix has virtual methods. Replace with a range loop that value-assigns zfix(0) to each element, which is safe and preserves object identity. 
   >
- Resolve -Wsometimes-uninitialized in text_field.cpp and zq_tiles.cpp [`4d6a92e789`](https://github.com/ZQuestClassic/ZQuestClassic/commit/4d6a92e78930fbb037f03b7b4fec65832bea6301)
   &nbsp;
   >text_field.cpp: proc was uninitialized when the swap-type switch hit its default branch; initialize to nullptr.  
   >
   >zq_tiles.cpp: num_bits was uninitialized when neither tf4Bit nor tf8Bit branch was taken (guarded by assert(false) in release builds); initialize to 0. 
   >
- Resolve -Wreorder-ctor in websocket_pool_native.cpp [`e803d72a56`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e803d72a56dda8a6de36fd07fda35a9fdb72573e)
   &nbsp;
   >Reorder the constructor initializer list to match the class member declaration order (m_status before m_hdl). 
   >
- Resolve -Wunused-private-field in ZScript.h [`b812a42c4c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b812a42c4cdfbb7db7d20a8db7832a447b6bae2d)
   &nbsp;
   >Script::program and UserClass::program are private reference fields that are set in constructors but never read afterwards. Remove both fields; suppress the unused-parameter warning for the now-unreferenced constructor argument with (void)program. 
   >
- Resolve -Wunused-const-variable in parser.cpp [`9fa3694c04`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9fa3694c0474bb0bf75b5a62c8d20663ebef9796)
   &nbsp;
   >WARN_COLOR, ERR_COLOR, and INFO_COLOR were defined as static const but never referenced. Remove them. 
   >
- Resolve -Wunqualified-std-cast-call in list_data.cpp [`e29d005294`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e29d0052943ed7b67a905c2ee0b204ba8b75ba9c)
   &nbsp;
   >std::move should be spelled qualified to make its provenance clear. Replace the unqualified move(str) with std::move(str) and remove std::move from the using declaration. 
   >
- Resolve -Wdeprecated-volatile in multiple files [`fd0cdd3e36`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fd0cdd3e362d7f9cbd76c7d1b83e24b5a42551db)
   &nbsp;
   >C++20 deprecates: incrementing volatile via ++ and using the result of an assignment to a volatile as a value. Replace: - volatile++ with volatile = volatile + 1 - return (volatile = expr) with separate assignment + return  
   >
   >Affected: zsys.cpp, zelda.cpp, zc_sys.cpp, zquest.cpp, launcher_dialog.cpp 
   >
- Resolve -Wunsequenced in quest_rules.cpp and subscr_props.cpp [`567ca4b1e4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/567ca4b1e4fcf91817d8fe5efb2111ff1c7de3c3)
   &nbsp;
   >Multiple uses of subtab_ind++ and g++ within the same function-call argument list have unsequenced evaluation order. Replace the runtime counters with literal indices so the expressions carry no side effects. 
   >
- Resolve -Woverloaded-virtual in BuildVisitors.h [`dc4709ac5a`](https://github.com/ZQuestClassic/ZQuestClassic/commit/dc4709ac5a734d6b2f66b7fb5dd5d13487026fe6)
   &nbsp;
   >BuildOpcodes::caseCustomDataTypeDef takes ASTDataTypeDef& while the base RecursiveVisitor::caseCustomDataTypeDef takes ASTCustomDataTypeDef&. LValBOHelper::caseDefault takes only void* while the base ASTVisitor takes AST& + void*. Both hide their base overloads without overriding them. Add using declarations to bring the base signatures into scope alongside the derived ones. 
   >
- Resolve -Wunused-but-set-variable across many files [`60d6d8631b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/60d6d8631bed1e6e685343f3048a1b25953ef364)
   &nbsp;
   >Remove variables that were assigned but never read: hasCombo0 (autocombo.cpp), val (button.cpp), lineno (EditboxModel.cpp), textheight (EditboxView.cpp), fg3/origcolor (jwin.cpp), dispid (items.cpp via ifdef), existingType (parser files), b/sub (ffscript.cpp), vert (guys.cpp), wx/wy/cs2/changecombo/foundlayer/ didsign/count/tempx/tempy/dontignore/platformfell (hero.cpp), cmb (maps.cpp), m (mapdata.cpp), _obj_ptr (npc.cpp), pg/widg (subscreenpage/widget.cpp), xmap_drawn/tiling_h (ZQ GUI), problem_found (questReport.cpp), passguard (zq_class.cpp), tile_x/tile_y/ did_wand_select (zq_tiles.cpp), cur_layer/iSrc/iDest/q/first_tile_id/ NextCombo/NextCSet/drawmap/drawscr/continuescreen (zquest.cpp). 
   >
- Resolve -Wdeprecated-declarations for std::tmpnam — replace with std::filesystem temp paths [`231dda502b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/231dda502b26c1b6a41b482f45cf9180c3e1ae6d)
   &nbsp;
   >Replace std::tmpnam (deprecated) in compilezscript.cpp and zsys.cpp with safe alternatives using std::filesystem::temp_directory_path(). Update temp_name() signature to accept a buffer size, and expand caller buffers from L_tmpnam (20) to 512 to accommodate full filesystem paths. 
   >
- Resolve -Wdeprecated-declarations for FuncSignatureT in jit_x64.cpp [`94c0852de0`](https://github.com/ZQuestClassic/ZQuestClassic/commit/94c0852de00d0c857e419a24e82f76223ee4717b)
   &nbsp;
   >Replace all 16 uses of the deprecated FuncSignatureT<> template with the new FuncSignature::build<>() API as indicated by the compiler warning. 
   >
- Resolve -Wunused-but-set-variable for wx/wy in hero.cpp [`b3f71c1e2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b3f71c1e2be234baff1a8db2fc1f03591f380f37)
   &nbsp;
   >Two duplicate code paths computed wx/wy from x/y and adjusted them based on dir, but never read the results. Remove the declarations and the dead switch statements. 
   >
- Resolve -Wunused-but-set-variable for temp_x/temp_y in zq_tiles.cpp [`ca0729aab6`](https://github.com/ZQuestClassic/ZQuestClassic/commit/ca0729aab6b70fa38a621c4d6fed84bc88c3bba3)
   &nbsp;
   >temp_x and temp_y were declared and assigned but never read. Remove both the declaration and the dead assignments. 
   >
- Resolve -Wdelete-non-abstract-non-virtual-dtor for user_input_command [`7b87d24ce3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/7b87d24ce336b2e37ede3c09a79b1b6b8425a3b7)
   &nbsp;
   >Deleting a derived class through a base pointer (shared_ptr<user_input_command>) requires a virtual destructor on the base. All derived command classes (list_command, set_combo_command, set_ffc_command, etc.) are stored and deleted through this base type. 
   >
- Resolve -Wdelete-non-abstract-non-virtual-dtor for io_manager and process_manager [`d877d52693`](https://github.com/ZQuestClassic/ZQuestClassic/commit/d877d5269360a6170f83c0b53e0baee70aa84914)
   &nbsp;
   >io_manager is a pure-virtual interface deleted through base pointers, so it needs a virtual destructor. process_manager derives from io_manager and overrides the destructor, so mark it virtual explicitly to be consistent. 
   >
- Add -Wno-nan-infinity-disabled for clang [`86e7110948`](https://github.com/ZQuestClassic/ZQuestClassic/commit/86e711094896c85ae4565e2e41fc9f071a021ebf)

# Chores

- Update .git-blame-ignore-revs [`e9d854620b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/e9d854620bb56416e695ffb27184a14c7d39ae31)
- Rename 'freeze_guys' to 'freeze_holdup' for clarity [`968fd54c2e`](https://github.com/ZQuestClassic/ZQuestClassic/commit/968fd54c2eee6a1fe2cdf88f3c2412cb9e010e84)

# Misc.

- Update rulesets [`f49d409e2b`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f49d409e2b8169cc23017afc59da21ce366d4fc5)
- Update trigger example with new doors [`fe7a63903c`](https://github.com/ZQuestClassic/ZQuestClassic/commit/fe7a63903c8a3f721532d859e25412276c590443)

### ZScript

- Add constants for more ffc flags [`bf188b3515`](https://github.com/ZQuestClassic/ZQuestClassic/commit/bf188b3515f17d5a03d0b45d7b57a19dd3dda3ad)
