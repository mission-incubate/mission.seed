#!/bin/sh 
cd module/common
yarn link
cd ../..
cd module/app-manager
yarn link
cd ../..

yarn link mission.seed.common
yarn link mission.seed.app-manager