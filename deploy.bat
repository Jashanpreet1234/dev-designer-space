@echo off
echo 🚀 Starting Portfolio Deployment...

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v14 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js version check passed: 
node --version

:: Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

:: Copy environment file if it doesn't exist
if not exist .env (
    if exist .env.example (
        echo 📄 Creating .env file from .env.example...
        copy .env.example .env
    ) else (
        echo 📄 Creating default .env file...
        echo PORT=3000 > .env
        echo NODE_ENV=production >> .env
    )
)

:: Start the server
echo 🌟 Starting portfolio server...
if "%1"=="dev" (
    echo 🔧 Starting in development mode...
    npm run dev
) else (
    echo 🚀 Starting in production mode...
    npm start
)

pause 