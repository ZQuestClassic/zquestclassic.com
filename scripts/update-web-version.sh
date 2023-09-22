#!/bin/bash

set -ex

mkdir -p .tmp

curl -L https://api.github.com/repos/ArmageddonGames/ZQuestClassic/releases/latest > .tmp/latest.json
URL=$(jq -r '.assets[] | select(.name|endswith("web.zip")) | .browser_download_url' .tmp/latest.json)
wget $URL -O .tmp/web.zip
unzip .tmp/web.zip -d .tmp/web

rm -rf _site/{play,create,timidity}
rm .tmp/web/dist/index.html
mv .tmp/web/dist/* _site
sed -i 's@/zc/@/@g' _site/create/index.html || sed 's@/zc/@/@g' _site/create/index.html > out.html && mv out.html _site/create/index.html
sed -i 's@/zc/@/@g' _site/play/index.html || sed 's@/zc/@/@g' _site/play/index.html > out.html && mv out.html _site/play/index.html
npx --yes json -I -f _site/manifest.json -e "this.scope='https://zquestclassic.com'"
cp _headers _site

rm -rf .tmp/web.zip .tmp/web .tmp/latest.json
