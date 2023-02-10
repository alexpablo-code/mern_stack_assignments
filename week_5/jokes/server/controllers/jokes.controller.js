const Joke = require('../models/joke.model');

module.exports = {
    allJokes: (req,res) => {
        Joke.find()
            .then((allJokes) => {
                console.log(allJokes)
                res.json(allJokes)
            })
            .then((err) => {
                res.status(500).json({message:'Something went wrong', error:err})
            })
    },
    oneJoke: (req, res) => {
        Joke.findById({_id: req.params._id})
            .then((oneJoke) => {
                res.json(oneJoke)
            })
            .catch((err) => {
                res.status(500).json({message:'Something went wrong', error: err})
            })
    },
    createJoke: (req,res) => {
        Joke.create(req.body)
            .then((newJoke) => {
                res.json(newJoke)
            })
            .catch((err) => {
                res.status(500).json({message:'Something went wrong', error:err})
            })
    },
    updateJoke: (req,res) => {
        console.log(req.params.id)
        Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new:true, runValidators:true})
            .then((updatedJoke) => {
                res.json(updatedJoke)
            })
            .catch((err) => {
                res.status(500).json({message:'Something went wrong', error: err})
            })
    },
    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params._id})
            .then((result) => {
                res.json(result)
            })
            .then((err) => {
                res.status(500).json({message:'Something went wrong', error:err})
            })
    }

}


