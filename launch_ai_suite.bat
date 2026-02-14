@echo off
title Gemini Agentic Suite - Master Launcher
echo ==========================================================
echo    JAI DEV DHARTHU BAKERY - GEMINI AI SUITE 2026
echo ==========================================================
echo.

:: Check for API key
if not exist "scripts\.env" (
    echo [ERROR] scripts\.env not found! 
    echo Please copy scripts\.env.example to scripts\.env and add your API key.
    pause
    exit /b
)

echo [1/3] Terminating existing AI services...
taskkill /F /IM python.exe /T >nul 2>&1
echo.

echo [2/3] Starting Gemini API Bridge (Flask Server)...
start /B python scripts/server.py
echo Server starting on http://localhost:5000...
timeout /t 3 >nul

echo [3/3] Launching AI Dashboard...
start "" "ai-dashboard.html"
echo.

echo ==========================================================
echo    SYSTEM READY!
echo ==========================================================
echo.
echo Dashboard is open. You can now use:
echo  - Thinking Mode (Bakery/Structural)
echo  - Custom AI Prompts
echo  - Computer Vision UI Audit
echo.
echo Would you like to start the Live Voice API CLI as well?
set /p voice="Enter 'y' for Voice CLI, or press any key to finish: "

if /i "%voice%"=="y" (
    echo.
    echo Launching Live Voice Session...
    python scripts/live_api_demo.py
)

pause
