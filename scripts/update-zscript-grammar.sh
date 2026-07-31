#!/bin/bash

# Refresh the vendored ZScript TextMate grammar used by Shiki to highlight code
# blocks in release notes. Vendored rather than fetched at build time so builds
# don't depend on the network.
#
# Upstream has a few bugs we patch on the way in. Each patch is idempotent and
# reports whether it was needed, so once a fix lands upstream this script says
# so and that patch can be deleted.

set -e

URL=https://raw.githubusercontent.com/ZQuestClassic/ZQuestClassic/refs/heads/main/vscode-extension/syntaxes/zscript.tmLanguage.json
OUT=syntaxes/zscript.tmLanguage.json

mkdir -p syntaxes
curl -sfL "$URL" -o "$OUT.tmp"

python3 - "$OUT.tmp" <<'PY'
import json, re, sys

path = sys.argv[1]
with open(path) as f:
    grammar = json.load(f)   # also rejects a truncated / non-JSON download

kw = grammar['repository']['keywords']['patterns']


def rule(patterns, name):
    found = [p for p in patterns if p.get('name') == name]
    if not found:
        sys.exit(f'error: no {name} rule -- upstream restructured, '
                 'review scripts/update-zscript-grammar.sh')
    return found[0]


# 1. Annotation alternation had no trailing boundary and listed shorter
#    branches first, so @ExportRange matched the `Export` branch and left
#    `Range` behind as invalid.illegal; likewise @Flag10-@Flag15.
r = rule(kw, 'constant.language.annotation.zscript')
m = r['match']
m = m.replace('Flag(Help)?[0-9]|Flag(Help)?1[0-5]', 'Flag(Help)?1[0-5]|Flag(Help)?[0-9]')
m = m.replace('Export|ExportRange', 'ExportRange|Export')
if not m.endswith(r'\b'):
    m += r'\b'
print('annotations: ' + ('already fixed' if m == r['match'] else 'ordered longest-first, added \\b'))
r['match'] = m

# 2. meta.identifier used a lookbehind/lookahead pair equivalent to \b -- \w is
#    [A-Za-z0-9_], the same class they tested.
r = rule(kw, 'meta.identifier.zscript')
want = r'\b([_a-zA-Z][_a-zA-Z0-9]*)\b'
print('meta.identifier: ' + ('already fixed' if r['match'] == want else 'lookarounds -> \\b'))
r['match'] = want

# 3. The unknown-#option rule used a lookbehind to check it sat right after
#    `option`. Matching keyword and argument as one rule, known names before
#    unknown, does the same job by ordering alone.
hash_pats = grammar['repository']['hash']['patterns']
known = rule(hash_pats, 'meta.preprocessor.option.zscript')
inner = re.fullmatch(r'\\b\((.*)\)\\b', known['match']).group(1)

# Option introduced in 3.0 prerelease 205, missing from upstream's list.
if 'DEFAULT_STATIC_SCRIPT_MEMBERS' in inner:
    print('option list: already has DEFAULT_STATIC_SCRIPT_MEMBERS')
else:
    inner += '|DEFAULT_STATIC_SCRIPT_MEMBERS'
    print('option list: added DEFAULT_STATIC_SCRIPT_MEMBERS')

KEYWORD = 'meta.preprocessor.keyword.zscript'
rebuilt = [
    {'match': r'\b(option)([ \t]+)(' + inner + r')\b',
     'captures': {'1': {'name': KEYWORD},
                  '3': {'name': 'meta.preprocessor.option.zscript'}}},
    {'match': r'\b(option)([ \t]+)([a-zA-Z0-9_]+)',
     'captures': {'1': {'name': KEYWORD},
                  '3': {'name': 'invalid.illegal'}}},
]
had_lookbehind = False
for p in hash_pats:
    if p.get('name') == 'meta.preprocessor.option.zscript':
        continue                                    # folded into the above
    if p.get('name') == 'invalid.illegal' and '(?<=' in p.get('match', ''):
        had_lookbehind = True
        continue                                    # no longer needed
    rebuilt.append(p)
grammar['repository']['hash']['patterns'] = rebuilt
print('#option: ' + ('lookbehind -> keyword+argument matched as a unit'
                     if had_lookbehind else 'already fixed'))

# 4. Preprocessor tokens were scoped under meta.*, which themes deliberately
#    don't color -- `meta.` is TextMate's structural namespace. That left every
#    #option / #define / #include line rendering as plain white. Conventional
#    scopes inherit the rules themes already ship.
RENAMES = {
    'meta.preprocessor.keyword.zscript': 'keyword.control.directive.zscript',
    'meta.preprocessor.option.zscript': 'support.constant.option.zscript',
    'meta.preprocessor.constant.zscript': 'constant.language.zscript',
}


def rename(node):
    if isinstance(node, list):
        for i in node:
            rename(i)
    elif isinstance(node, dict):
        if node.get('name') in RENAMES:
            node['name'] = RENAMES[node['name']]
        for v in node.values():
            rename(v)


before = json.dumps(grammar['repository'])
rename(grammar['repository'])
print('preprocessor scopes: ' +
      ('already fixed' if before == json.dumps(grammar['repository'])
       else 'meta.* -> conventional colorable scopes'))

#    The `#` is consumed by the block's `begin`, so it only carried the
#    enclosing meta.preprocessor scope and rendered uncolored -- splitting
#    `#option` into a plain `#` plus a pink `option`. Scoping it as part of the
#    directive keyword makes the two adjacent tokens share a style, which the
#    highlighter then emits as a single `#option` token.
hash_rule = grammar['repository']['hash']
if hash_rule.get('beginCaptures'):
    print('# prefix: already scoped')
else:
    hash_rule['beginCaptures'] = {
        '0': {'name': 'keyword.control.directive.zscript'}}
    print('# prefix: scoped with the directive keyword')

# 5. The remaining white text on preprocessor lines: the macro name after
#    #define, and the quoted path after #include.
hash_pats = grammar['repository']['hash']['patterns']
if not any('define' in p.get('match', '') and 'captures' in p for p in hash_pats):
    # Insert before the bare keyword rule so `define` isn't consumed alone.
    at = next(i for i, p in enumerate(hash_pats)
              if p.get('name') == 'keyword.control.directive.zscript')
    hash_pats.insert(at, {
        'match': r'\b(define)([ \t]+)([a-zA-Z_][a-zA-Z0-9_]*)',
        'captures': {'1': {'name': 'keyword.control.directive.zscript'},
                     '3': {'name': 'entity.name.function.preprocessor.zscript'}}})
    print('#define: macro name now scoped')
if not any(p.get('name') == 'string.quoted.double.zscript' for p in hash_pats):
    # Deliberately a `match`, not `include: #strings`. That rule is begin/end,
    # and an unterminated quote escapes this block's `end: \n` and swallows the
    # rest of the file. Forbidding newlines makes runaway impossible.
    hash_pats.append({'match': r'"[^"\n]*"',
                      'name': 'string.quoted.double.zscript'})
    print('#include: quoted path now scoped')

leftover = [m for m in re.findall(r'"match":\s*"([^"]*)"', json.dumps(grammar))
            if '(?<' in m]
if leftover:
    sys.exit(f'error: {len(leftover)} lookbehind(s) still present: {leftover}')

with open(path, 'w') as f:
    json.dump(grammar, f, indent=2)
    f.write('\n')
PY

mv "$OUT.tmp" "$OUT"
echo "updated $OUT ($(wc -c < "$OUT" | tr -d ' ') bytes)"
