#!/bin/bash

if [ ! -d src ] ; then
  mkdir -p src/scss src/img src/tmpl src/js
  touch src/scss/common.scss
fi

if [ ! -d dist ] ; then
  mkdir -p dist/assets/css dist/assets/js dist/img
fi

if [ ! -d node_modules ] ; then
  npm install
fi
