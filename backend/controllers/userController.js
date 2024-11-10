import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createtoken.js";

// Constant for create new user
const createUser = asyncHandler(async(req,res) => {
    // Fetch data atribute from user request
    const { username, email, password } = req.body;

    // Meassage if no data
    if (!username || !email || !password) {
        throw new Error("Please fill all the inputs.");
    }

    // Search exists user with email
    const userExists = await User.findOne({ email });
    if (userExists) res.status(400).send("User already exists");

    // Salting the password to make secure
    const salt = await bcrypt.genSalt(10);
    const hashedpassowrd = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({ username, email, password: hashedpassowrd });

    try {
        // Save the request to database
        await newUser.save();
        // Create token based on user_id
        createToken();

        // Send respons 201 with data
        res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        });
    } catch(error) {
        // Catch error and show error messaege!
        res.status(400);
        throw new Error("Invalid user data!");
    }
});

// Constant login for user
const loginUser = asyncHandler(async(req,res) => {
    // Fetch data atribute from user request
    const { email, password } = req.body;

    // Show the data for debugging
    Console.log(email);
    Console.log(password);

    // Search user based on email in database
    const existingUser = await User.findOne({ email });

    // Check existing user and compare it
    if (existingUser) {
        const isPasswordValid = await bcrypt.compare(
            password, existingUser.password
        );

        // Check correct passowrd
        if (isPasswordValid) {
            // Create token for user authentication
            createToken(res, existingUser._id);
            // Send respond with status and user data
            res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email,
                isAdmin: existingUser.isAdmin
            });
            return; // End the execution if login successfully
        }
    }
});

// Constant for user logout 
const logoutCurrentUser = asyncHandler(async(req,res) => {
    // Deletes the "jwt" cookie by setting it to empty and setting the expiration time to 0 (expires immediately)
    res.cookie("jwt", "", {
        httpOnly: true,         // Indicates that the cookie can only be accessed by the server, not by client-side JavaScript
        expires: new Date(0)    // Set cookie so that expires
    });
    // Send respond with statu and message
    res.status(200).json({ message: "Logged out successfully" });
});

// Constant for get list all registered user by admin
const getAllUsers = asynchandler(async(req,res) => {
    // Fetch all user data from database
    const users = await User.find({});
    // Send respon data
    res.json(users);
});

// Constant for fecth the current user profile
const getCurrentUserProfile = asyncHandler(async(req,res) => {
    // Fetch user _id data from database
    const user = await User.findById(req.user._id);

    // Check if user exist
    if (user) {
        // Send respond data in json format
        res.json({
            _id: user._id,
            userame: user.username,
            email: user.email
        });
    } else {    // Send respond status and throw message error
        res.status(404);
        throw new Error("User not found.");
    }
});

// Update current user profile
const updateCurrentUserProfile = asyncHandler(async(req,res) => {
    // Fetch user _id from database
    const user = await User.findById(req,user._id);

    // Check user if exists
    if (user) {
        // Update old data with new data
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;

        // Check if password from request exists
        if (req.body.password) {
            // Create salt to hash password as much as 10 round
            const salt = await bcrypt.genSalt(10);
            // Hashing the password
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            // Save the hashing password to user password
            user.password = hashedPassword;
        }
        // Save the updated user to database
        const updateUser = await user.save();
    }
});

// Constant for deleted user by id
const deletedUserById = asyncHandler(async(req,res) => {
    // Fetch user id from database
    const user = await User.findById(req.params.id);

    // Check if user exists
    if (user) {
        // Check if user is admin
        if (user.isAdmin) {
            // Send respon with status and error message
            res.status(400);
            throw new Error("Cannot delete admin user!");
        }
        // Deleted user by id from database
        await User.deleteOne({ _id: user._id });
        // Send respond with message
        res.json({ message: "User has been removed!"});
    } else {
        // Send respon status and error message
        res.status(404);
        throw new Error("User not found.");
    }
});

// Constant for get user by id
const updateUserById = asynchandler(async(req,res) => {
    // Fetch user by id from database except password
    const user = await User.findById(req.params.id).select("-password");

    // Check user if exists
    if (user) {
        // Update database data with new data from request 
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.isAdmin = Boolean(req.body.isAdmin);
        // Save the newest data to database
        const updatedUser = await user.save();
        // Send respond with json format
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        });
    } else {
        // Send respond with status and message
        res.status(404);
        throw new Error("User not found.");
    }
});

export {
    createUser,
    loginUser,
    logoutCurrentUser,
    getAllUsers,
    getCurrentUserProfile,
    updateCurrentUserProfile,
    deletedUserById,
    getUserById,
    updateUserById
}