const User = require('../models/user.model');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = {
    registerUser: async (req,res) => {
        try{
            //Check if the email that was entered in the req form is already in the DB
            const potentialUser = await User.findOne({email: req.body.email});
            if(potentialUser){
                res.status(400).json({message: 'That email already exists'})
            }
            else{
                //Create user
                const newUser = await User.create(req.body);

                //set up json web token -> this works like session
                //jwt.sign created the token, the first thing we pass is what we want to serialize (payload)
                //the second param is a secret key to serialize
                const userToken = jwt.sign({_id:newUser._id, email:newUser.email}, secret, {expiresIn:'2h'}) 
                console.log(userToken);


                res.cookie('userToken', userToken, {httpOnly:true, maxAge:2*60*60*1000}).status(201).json({message:'User logged in', user:newUser})
            }
        }
        catch(err){
            console.log(err);
            res.status(400).json({error: err});
        }
    },
    login:async (req,res) => {
        try{
            //Check if the email exists in db 
            const user = await User.findOne({email:req.body.email});
            if(user){
                //if the user exists, check if db password  == form password
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                if(passwordsMatch){
                    const userToken = jwt.sign({_id:user._id, email:user.email}, secret, {expiresIn:'2h'}) 
                    console.log(userToken);
    
    
                    res.cookie('userToken', userToken, {httpOnly:true, maxAge:2*60*60*1000}).status(201).json({message:'User logged in', user:user})
                }else{
                    res.status(400).json({message: 'Invalid Email/Password'});
                }
            }else{
                res.status(400).json({message: "Invalid Email/Password"})
            }
        }
        catch(err){
            res.status(400).json({error:err})
        }
    },
    logout: async (req,res) => {
        res.clearCookie('userToken').json({message:'User is logged out'})
        // res.sendStatus(200).json({message:'User is logged out'})
    }
}