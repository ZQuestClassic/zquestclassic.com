// Grammar test for zscript.tmLanguage.json.
//
// Each tested line is preceded by a marker: `//! valid`, `//! invalid`, or
// `//! invalid-single` (flags as exactly ONE token, not a valid prefix plus
// stranded junk). Check with:
//
//     npm run check-zscript-grammar
//
// "invalid" is an expected result, not a failure -- the grammar deliberately
// flags things that aren't real annotations or options.

// ---------------------------------------------------------------------------
// Annotations: the alternation had no trailing boundary and listed shorter
// branches first, so a prefix could win and strand the rest of the name.
// ---------------------------------------------------------------------------

//! valid
@Author
//! valid
@InitScript
//! valid
@AlwaysRunEndpoint

// Export vs ExportRange -- the reported bug. `Export` came first, so
// @ExportRange matched `Export` and left `Range` as invalid.illegal.
//! valid
@Export
//! valid
@ExportRange
// Not a real annotation: must flag as ONE token, not `@Export` + `[Foo]`.
//! invalid-single
@ExportFoo

// Flag[0-9] vs Flag1[0-5] -- same class of bug, hit @Flag10 through @Flag15.
//! valid
@Flag0
//! valid
@Flag9
//! valid
@Flag10
//! valid
@Flag12
//! valid
@Flag15
// 16 is out of range: one invalid token, not `@Flag1` + `[6]`.
//! invalid-single
@Flag16
//! valid
@FlagHelp0
//! valid
@FlagHelp15

// The remaining annotation families, to catch collateral from the reordering.
//! valid
@Attribute0
//! valid
@Attribute9
//! valid
@AttributeHelp3
//! valid
@Attribyte0
//! valid
@Attribyte7
//! valid
@AttrishortHelp7
//! valid
@InitD0
//! valid
@InitD7
//! valid
@InitDHelp2
//! valid
@InitDType5

// Out-of-range and unknown names still flag.
//! invalid-single
@Attribyte8
//! invalid-single
@Bogus

// Known gap: @Bitflags is used in 3.0 prerelease 87 but is absent from the
// allowlist. Flip this to `valid` after adding it to the alternation.
//! invalid-single
@Bitflags

// ---------------------------------------------------------------------------
// Preprocessor: the unknown-option rule used a lookbehind to check it sat
// directly after `option`. It now matches keyword+argument as one rule, with
// known names ordered before unknown.
// ---------------------------------------------------------------------------

//! valid
#option SHORT_CIRCUIT on
//! valid
#option HEADER_GUARD off
//! valid
#option WARN_DEPRECATED warn
//! valid
#option ON_MISSING_RETURN error
//! valid
#option LEGACY_ARRAYS default
//! valid
#option TRUNCATE_DIVISION_BY_LITERAL_BUG inherit
// Shipped in 3.0 prerelease 205; was missing from the allowlist.
//! valid
#option DEFAULT_STATIC_SCRIPT_MEMBERS off

// An unknown option name must still be flagged -- this is what the lookbehind
// used to do, and the ordering has to preserve it.
//! invalid
#option NOT_A_REAL_OPTION on

// Other directives must NOT have their argument flagged: the replacement rules
// are anchored to the literal `option`, so nothing else is affected.
//! valid
#define SOME_MACRO 5
//! valid
#include "std.zh"
//! valid
#includepath "scripts/"
//! valid
#includeif SOME_MACRO "extra.zh"
//! valid
#ignore error
//! valid
#IGNORE WARNING

// ---------------------------------------------------------------------------
// Identifiers: meta.identifier swapped a lookbehind/lookahead pair for \b.
// These must tokenize as whole words -- no partial matches, nothing flagged.
// ---------------------------------------------------------------------------

//! valid
int plain = 1;
//! valid
int _leadingUnderscore = 2;
//! valid
int with_digits_123 = 3;
//! valid
int trailing_ = 4;
// Identifiers that merely CONTAIN keywords must not be split apart.
//! valid
int interior = 5;
//! valid
int iffy = 6;
//! valid
int static_thing = 7;
//! valid
int forloop = 8;
//! valid
int classy = 9;

// ---------------------------------------------------------------------------
// General coverage, to catch collateral damage from the three edits.
// ---------------------------------------------------------------------------

//! valid
const int HEX = 0xFF;
//! valid
const int BIN = 0b1010;
//! valid
const int OCT = 0o17;
//! valid
const int LONG = 42L;
//! valid
const int DECIMAL = 1.2345;
//! valid
char32 c = 'a';
//! valid
bool flags = true && false || !true;
//! valid
int shifted = (1 << 4) | (255 >> 2) & ~0;

/* Block comments should span lines
   without leaking into the next rule. */

//! valid
ffc script GrammarCoverage
{
	//! valid
	static int sharedCount;
	//! valid
	nonstatic int perInstanceFrames;

	//! valid
	void run()
	{
		//! valid
		this->Data = ++perInstanceFrames;
		//! valid
		Screen->DrawInteger(2, 4, 8, 0, -1, -1, sharedCount, 0, 128);
		//! valid
		Trace("a string with \"escapes\" and // not-a-comment");
		//! valid
		while (true) { Waitframe(); }
	}
}

// Deprecated and illegal constructs the grammar flags on purpose.
//! invalid
zstruct Deprecated;
//! invalid
int bad === 1;
