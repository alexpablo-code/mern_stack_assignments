const Movie = require('../models/movie');

module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then((allTheMovies) => {
            res.json({movies: allTheMovies})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}

module.exports.findOneMovie = (req, res) => {
    Movie.findOne({_id: req.params.id})
        .then(oneMovie => {
            res.json({movie: oneMovie})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}  

module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
    .then(newlyCreatedMovie => {
        res.json({movie: newlyCreatedMovie})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error: err})
    });
}

module.exports.updateExistingMovie = (req, res) => {
    Movie.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedMovie => {
            res.json({movie: updatedMovie})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error:err})
        });
}

module.exports.deleteExistingMovie = (req, res) => {
    Movie.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error:err})
    });
}