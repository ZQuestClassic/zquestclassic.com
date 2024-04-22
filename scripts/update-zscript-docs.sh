#!/bin/bash

set -ex

mkdir -p .tmp/zscript

# Netlify + python sucks.
if [[ "$NETLIFY" ]]; then
    exit 0;
fi

curl -L https://api.github.com/repos/ZQuestClassic/ZQuestClassic/commits?path=webdocs > .tmp/latest.json
SHA=$(jq -r '.[0].sha' .tmp/latest.json)

if [ ! -f .tmp/zscript/$SHA.html ]; then
    git clone --depth=1 https://github.com/ZQuestClassic/ZQuestClassic.git .tmp/ZQuestClassic || true
    cd .tmp/ZQuestClassic
    git pull

    if [[ "$NETLIFY" ]]; then
        brew install python3
        PYTHON=/home/linuxbrew/.linuxbrew/bin/python3
        $PYTHON -m venv .venv
        source .venv/bin/activate
        $(brew --prefix python)/libexec/bin/pip install pytz --break-system-packages
    else
        PYTHON=python
        $PYTHON -m pip install pytz
    fi

    $PYTHON webdocs/docjson_main.py --in webdocs/zsdocs_main.json --out ../../.tmp/zscript/$SHA.html -c
    cd ../..
fi

mkdir -p content/docs/zscript
cp .tmp/zscript/$SHA.html content/docs/zscript/index.html
