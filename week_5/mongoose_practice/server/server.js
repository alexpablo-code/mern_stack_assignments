const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));
//this fucntion is adding middleware, tool to help us with getting POST requests

const AllMyMovieRoutes = require("./routes/movie.routes");
AllMyMovieRoutes(app);

app.listen(8000, () => console.log("The Server is all fired up on port 8000"));

