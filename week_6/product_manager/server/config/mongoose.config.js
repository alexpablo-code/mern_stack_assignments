const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Established a connection to the Database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err))

    