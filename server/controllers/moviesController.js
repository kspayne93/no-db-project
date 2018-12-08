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
      console.log(newMovie)
      movies.push(newMovie);
      id++;
      res.status(200).send(movies)
   },
   readMovie: (req, res) => {
      res.status(200).send(movies)
   },
   updateMovie: (req, res) => {

   },
   deleteMovie: (req, res) => {

   },

}