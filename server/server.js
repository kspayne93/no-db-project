// this is the main server file

const express = require('express');
const moviesController = require('./controllers/moviesController.js')

const app = express();

app.use(express.json()); //Middleware, turning request from JSON back into the function so it can be parsed. Axios prefers to send data as JSON, but it needs to be converted back before it reaches the endpoint.


// Requests to movies
const moviesBaseURL = '/api/movies';
app.post(moviesBaseURL, moviesController.createMovie);
app.get(moviesBaseURL, moviesController.readMovie);
app.put(`/api/movies`, moviesController.updateMovie);
app.delete(`/api/movies/:id`, moviesController.deleteMovie);





const port = 4000;
app.listen(port, () => {
   console.log(`Server listening on port ${port}.`);
});