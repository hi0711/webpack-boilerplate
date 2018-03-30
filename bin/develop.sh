#!/bin/bash
git checkout develop & sed -i '' '1s/production/development/' webpack.config.js
