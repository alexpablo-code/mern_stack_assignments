const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/allJokes', JokesController.allJokes)
    app.post('/api/jokes', JokesController.createJoke)
    app.get('/api/jokes/:_id', JokesController.oneJoke)
    app.put('/api/jokes/:_id', JokesController.updateJoke)
    app.delete('/api/jokes/:_id', JokesController.deleteJoke)
}