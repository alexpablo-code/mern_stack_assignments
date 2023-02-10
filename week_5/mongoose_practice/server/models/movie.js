const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    //this meth{{od takes in a object as a parameter, THE STRUCTURE OF THIS OBJECT IS HOW EACH NEW DOCUMENT PUT INTO COLLECTION WILL BE FORMATED
    movieName: {
        type: String,
        required:[true, "Name of Movie required"],
        minlength:[3, "Movie name must be at least 3 characters long"]
    },
    // we can also write it -. name: string,
    movieYear: {
        type:Number,
        required:[true, "Movie Release year is required"],
        min:[1878, "Movies were not made yet before 1878"],
        max:[2025, "Are you from the future, no spoilers please"]
    },

    movieDescription: {
        type: String,
        required:[true, "Movie deswcription required"],
        minlength:[3, "Movie description must be at least 3 characters long"]
    },

}, {timestamps: true});
// HERE we are adding a second argument, this will automatically add timestamp properies to our document like created_at and updated_at

const Movie = mongoose.model('Movie', MovieSchema);
// this is creating a database collection?/ allow us to communicated with our database
// name of model is important, first string in paranthesis, it will look for that name in the database but pluralized, so here it will look for Movies collection

module.exports = Movie;

// we are creating a collection in this file or document?