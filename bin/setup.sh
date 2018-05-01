#!/bin/bash

if [ ! -d src ] ; then
  mkdir -p src/scss src/img src/tmpl src/js
  curl https://raw.githubusercontent.com/h5bp/html5-boilerplate/master/dist/index.html > src/tmpl/index.html
fi

if [ ! -d node_modules ] ; then
  npm install
  npm i -D html2pug
  npx html2pug < src/tmpl/index.html > src/tmpl/index.pug && rm -rf src/tmpl/index.html
fi

if [ ! -f .gitignore ] ; then
  gibo -u
  gibo node >> .gitignore && echo "dist" >> .gitignore
fi
