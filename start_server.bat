@echo off
echo Check for Bun...
where bun >nul 2>nul
if %errorlevel%==0 (
    echo Bun found. Using Bun.
    bun install
    bun run dev
) else (
    echo Bun not found. Using NPM.
    call npm install
    call npm run dev -- --host 0.0.0.0 --port 5173
)
