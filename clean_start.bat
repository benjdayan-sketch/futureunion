@echo off
echo Cleaning up...
if exist node_modules (
    rmdir /s /q node_modules
)
if exist package-lock.json (
    del package-lock.json
)
if exist bun.lockb (
    del bun.lockb
)

echo Installing dependencies...
call npm install

echo Starting server...
call npm run dev -- --host 0.0.0.0 --port 5173
