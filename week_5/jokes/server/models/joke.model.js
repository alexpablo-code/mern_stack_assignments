const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type:String,
        required: [true, "Joke setup is required"]
    },
    punchLine: {
        type:String,
        required:[true, "Joke punchline is required"]
    },
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;