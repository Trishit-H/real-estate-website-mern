require('dotenv').config();
const express = require('express');

// Import the connection function to connect to database
const connectDB = require('./db');

const app = express();

const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});