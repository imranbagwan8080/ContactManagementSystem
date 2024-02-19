const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Register a user 
// @route POST/api/user/register
// @access public 
const registerUser = asyncHandler(async (req,res)=>{
    res.json({message:"inside register api"});
});

// @desc Login a user 
// @route POST/api/user/login
// @access public 
const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"inside Login api"});
});

// @desc Current  user get
// @route GET/api/user/current
// @access private 
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"inside register api"});
});


module.exports = {registerUser,
                  loginUser, 
                  currentUser};