const User = require('../models/user.model');


module.exports = {
    registerUser: async (req,res) => {
        try{
            //Check if the email that was entered in the req form is already in the DB
            const potentialUser = await User.findOne({email: req.body.email})
            if(potentialUser){
                req.status(400).json({message: 'That email already exists'})
            }
            else{
                //Create user
                const newUser = await User.create(req.body);

                //set up json web token -> this works like session

                res.status(201).json({message:'User logged in', user:newUser})
            }
        }
        catch(err){
            console.log(err);
            res.status(400).json({error: err});
        }
    }
}