#!/bin/bash

yarn migrate-mongo up
if [[ "$EXEC_MODE" == 'dev' ]]; then
    yarn start-dev
else
    yarn start-prod
fi
