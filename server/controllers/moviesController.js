// this controls which funtions to run when requests are made to Movies To Watch

let movies = [];
let id = 1;

module.exports = {
   createMovie: (req, res) => {
      let newMovie = {
         id: id,
         title: req.body.title,
         watched: req.body.watched,
      }
      movies.push(newMovie);
      id++;
      res.status(200).send(movies)
   },
   readMovie: (req, res) => {
      res.status(200).send(movies)
   },
   updateMovie: (req, res) => {
      let updateID = req.body.id;
      let updateIndex = movies.findIndex(movie => movie.id == updateID);
      let movieToUpdate = movies[updateIndex];
      movies[updateIndex] = {
         id: movieToUpdate.id,
         title: movieToUpdate.title,
         watched: req.body.watched
      };
      res.status(200).send(movies);
   },
   deleteMovie: (req, res) => {
      let movieToDelete = req.params.id;
      let movieIndex = movies.findIndex(movie => movie.id == movieToDelete);
      movies.splice(movieIndex, 1);
      res.status(200).send(movies);
   },

}