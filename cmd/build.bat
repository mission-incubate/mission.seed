call cd module/common && npm run build && yarn link
call cd ../..
call cd module/app-manager && npm run build && yarn link
call cd ../..

if %ERRORLEVEL% == 0 ( exit )