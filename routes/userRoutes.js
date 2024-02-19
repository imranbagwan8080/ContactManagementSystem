const express = require("express");

const router = express.Router();

router.post("/register",(req,res)=>{
    res.json({message:"inside register api"});
});

router.post("/login",(req,res)=>{
    res.json({message:"inside login api"});
});

router.get("/current",(req,res)=>{
    res.json({message:"inside current api"});
});


module.exports = router ;