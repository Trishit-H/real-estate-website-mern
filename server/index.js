require('dotenv').config();
const express = require('express');

// Import the connection function to connect to database
const connectDB = require('./db');
const authRouter = require('./routes/auth.route.js');

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware for server to acccept json response
app.use(express.json());

// Connect to database
connectDB();

// API end points
app.use('/api/auth', authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});