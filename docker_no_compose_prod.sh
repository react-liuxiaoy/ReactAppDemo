#!/usr/bin/env bash
# Dockerfile-prod
docker build -f Dockerfile-prod -t sample-app-prod .
docker run -it -p 80:80 --rm sample-app-prod
