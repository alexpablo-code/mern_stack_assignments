const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    movieName: {
        type:String
    },
    movieYear: {
        type: Number
    }

});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;