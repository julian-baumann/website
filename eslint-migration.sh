#!/bin/bash
pushd Implementation
    # Remove tsLint
    printf "\n\033[0;34mRemoving tsLint...\033[0m\n"
    npm uninstall tslint --save-dev

    # Install esLint and dependencies
    printf "\n\033[0;34mInstalling esLint and dependencies...\033[0m\n"
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint eslint-plugin-simple-import-sort

    # Replace ionic linter
    sed -i "s/\"lint\": \"ng lint\",/\"lint\": \"npx eslint -c .eslintrc.js --ext .ts .\",/g" package.json

    # Linter fix
    printf "\n\033[0;34mFixing linter issues...\033[0m\n"
    npx eslint -c .eslintrc.js --ext .ts . --fix
popd

printf "\n\033[0;34mDone\033[0m\n"

exit 1
