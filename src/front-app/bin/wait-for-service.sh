#!/bin/bash

wget https://raw.githubusercontent.com/eficode/wait-for/master/wait-for
chmod +x wait-for
./wait-for $@ -- ./bin/docker-entrypoint.sh