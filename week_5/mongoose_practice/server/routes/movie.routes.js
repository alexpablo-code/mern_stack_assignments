const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.get('/api/movies/:id', MovieController.findOneMovie);
    app.put('/api/movies/:id', MovieController.updateExistingMovie);
    app.post('/api/movies', MovieController.createNewMovie);
    app.delete('/api/movies/:id', MovieController.deleteExistingMovie);
    // The Order of the routes matter- MOVE SPECIFIC ROUTES TO THE TOP TO ENSURE THEY ARE FOLLOWED
}
