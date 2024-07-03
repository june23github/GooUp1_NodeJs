#!/bin/bash

if [ ! -f .env.dev ]; then
    echo ".env.dev file not found!"
    exit 1
fi

cp .env.dev .env

echo ".env is created"
