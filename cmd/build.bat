call cd module/common
call npm run build
call yarn link
call cd ../..
call cd module/app-manager
call npm run build
call yarn link
call cd ../..

if %ERRORLEVEL% == 0 ( exit )