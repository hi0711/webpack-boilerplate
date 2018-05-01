#!/bin/bash
git checkout develop & sed -i '' '1s/production/development/' webpack.config.js 
echo 'dist/*' >> .gitignore
git rm -r --cached dist
