#!/bin/bash

set -ex

mkdir -p .tmp/web

cp _headers _site

# curl -L https://api.github.com/repos/ZQuestClassic/ZQuestClassic/releases/latest > .tmp/latest.json
curl -L https://api.github.com/repos/ZQuestClassic/ZQuestClassic/releases/tags/nightly-2023-10-07 > .tmp/latest.json
VERSION=$(jq -r '.tag_name' .tmp/latest.json)

if [ ! -d .tmp/web/release-$VERSION ]; then
    URL=$(jq -r '.assets[] | select(.name|endswith("web.zip")) | .browser_download_url' .tmp/latest.json)
    wget $URL -O .tmp/web.zip
    unzip .tmp/web.zip -d .tmp/web

    rm .tmp/web/dist/index.html
    sed -i 's@/zc/@/@g' .tmp/web/dist/create/index.html || (sed 's@/zc/@/@g' .tmp/web/dist/create/index.html > out.html && mv out.html .tmp/web/dist/create/index.html)
    sed -i 's@/zc/@/@g' .tmp/web/dist/play/index.html || (sed 's@/zc/@/@g' .tmp/web/dist/play/index.html > out.html && mv out.html .tmp/web/dist/play/index.html)
    npx --yes json -I -f .tmp/web/dist/manifest.json -e "this.scope='https://zquestclassic.com'"
    mv .tmp/web/dist .tmp/web/release-$VERSION
fi

cp -r .tmp/web/release-$VERSION/* _site
rm -rf .tmp/web.zip .tmp/latest.json
