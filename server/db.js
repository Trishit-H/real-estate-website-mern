require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connection to mongodb successful')
    } catch (error) {
        console.log('Error connecting to mongodb:', error)
    }
};

module.exports = connectDB;