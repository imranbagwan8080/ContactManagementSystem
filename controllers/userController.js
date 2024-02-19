const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc Register a user 
// @route POST/api/user/register
// @access public 
const registerUser = asyncHandler(async (req,res)=>{
    const {username , email, password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        new Error("All Feilds are manadatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User is alreaduy register");
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("hashedPassword : ",hashedPassword);

    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });

    console.log(`User is created ${user}`);

    if(user !=null){
        res.status(201).json({_id:user.id, email:user.email});
    }else{
        res.status(400);
        throw Error("User data is not valid");
    }
    
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