@echo off
echo ==========================================
echo   Focus Business Channel - Setup Script
echo ==========================================
echo.

REM Add Node.js to PATH temporarily for this session
SET "PATH=%PATH%;C:\Program Files\nodejs"

echo Checking for Node.js...
node --version
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not found! Please install it first.
    pause
    exit /b
)

echo.
echo Installing dependencies (this may take a minute)...
echo command: npm install
call npm install

IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Installation failed. Please check the errors above.
    pause
    exit /b
)

echo.
echo [SUCCESS] Dependencies installed!
echo.
echo Starting the website...
call npm run dev
pause
