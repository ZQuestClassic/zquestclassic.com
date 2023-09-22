#!/bin/bash

set -ex

mkdir -p .tmp/zscript

curl -L https://api.github.com/repos/ZQuestClassic/ZQuestClassic/commits?path=webdocs > .tmp/latest.json
SHA=$(jq -r '.[0].sha' .tmp/latest.json)

if [ ! -d .tmp/zscript/$SHA.html ]; then
    git clone --depth=1 https://github.com/ZQuestClassic/ZQuestClassic.git .tmp/ZQuestClassic || true
    cd .tmp/ZQuestClassic
    git pull

    if [[ "$NETLIFY" ]]; then
        brew install python3
        PYTHON=/home/linuxbrew/.linuxbrew/bin/python3
    else
        PYTHON=python
    fi

    $PYTHON -m pip install pytz
    mkdir -p ../../content/docs/zscript
    $PYTHON webdocs/docjson_main.py --in webdocs/zsdocs_main.json --out ../../.tmp/zscript/$SHA.html -c
    cd ../..
fi

mv .tmp/zscript/$SHA.html content/docs/zscript/index.html
