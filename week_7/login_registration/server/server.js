const express = require('express');
const app = express();
require('dotenv').config(); 

const cors = require('cors');
app.use(cors());

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

//we will add the require routes here later
require('./routes/user.routes')(app);


app.listen(8000, () => console.log("The server is all fired up on port 8000"));