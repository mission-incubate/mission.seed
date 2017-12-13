#!/bin/bash
cd module/common
npm run build
cd ../..
cd module/app-manager
npm run build
cd ../..
