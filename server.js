const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log('🎉 Birthday Celebration App is running! 🎉');
    console.log(`📍 Open your browser and go to: http://localhost:${PORT}`);
    console.log('🎂 Enjoy your birthday celebration!');
    console.log('Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Birthday app server shutting down...');
    process.exit(0);
});
