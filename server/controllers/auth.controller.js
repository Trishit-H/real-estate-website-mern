// Importing necessary modules
const bcrypt = require('bcrypt'); // For hashing passwords
const validator = require('validator'); // For validating input data like email

const User = require('../models/user.model.js'); // Importing the User model to interact with the database
const errorHandler = require('../utils/errorHandler.js'); // Custom error handler utility

// Controller function to handle user signup
const handleSignup = async (req, res, next) => {
    // Destructuring the required fields from the request body
    const { username, email, password } = req.body;

    try {
        // Check if all required fields are provided
        if (!username || !email || !password) {
            // If any field is missing, throw a 400 error using the custom error handler
            throw errorHandler(400, 'All fields are required');
        }

        // Check if the password is at least 6 characters long
        if (password.length < 6) {
            // If the password is too short, throw a 400 error
            throw errorHandler(400, 'Password must be 6 or more characters long');
        }

        // Validate the email format using the validator library
        if (!validator.isEmail(email)) {
            // If the email format is invalid, throw a 400 error
            throw errorHandler(400, 'Email is not valid!');
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database with the provided username, email, and hashed password
        const newUser = await User.create({ username, email, password: hashedPassword });

        // Send a success response with a 201 status code and the newly created user data
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // If any error occurs in the try block, pass it to the error-handling middleware
        next(error);
    }
};

// Exporting the handleSignup function to be used in routes
module.exports = {
    handleSignup
};
