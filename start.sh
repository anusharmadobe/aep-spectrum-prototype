#!/bin/bash

echo "🎉 Starting Birthday Celebration App! 🎉"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting server on http://localhost:3000"
echo "🎂 Open your browser and enjoy the birthday celebration!"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server
npm start
