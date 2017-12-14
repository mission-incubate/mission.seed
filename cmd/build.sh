#!/bin/bash
cd module/common
npm run build
yarn link
cd ../..
cd module/app-manager
npm run build
yarn link
cd ../..
