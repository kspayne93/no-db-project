import React, { Component } from 'react';
import ToWatch from './MoviesToWatch/ToWatch';
import Watched from './WatchedMovies/Watched';
import axios from 'axios';

class MoviesWindow extends Component {
   constructor(props) {
      super(props)
      this.state = {
         movies: [],
      };

      this.handleClick = this.handleClick.bind(this);
   }

   componentDidMount() {
      axios.get(`/api/movies`)
         .then(res => {
            this.setState({ movies: res.data })
         })
   }

   handleClick(title, watched) {
      axios.post(`/api/movies`, {
         title: title,
         watched: watched
      }).then(res => {
         this.setState({ movies: res.data })
      })
   };

   render() {


      let unwatchedMovies = this.state.movies.filter(movie => {
         if (movie.watched === false) {
            return true;
         } else {
            return false;
         }
      })
      let watchedMovies = this.state.movies.filter(movie => {
         if (movie.watched === true) {
            return true;
         } else {
            return false;
         }
      })
     
      return (
         <div key='movies-window'>
            <div>
               <ToWatch
                  toWatch={unwatchedMovies}
                  handleClick={this.handleClick}
                   />
            </div>
            <div>
               <Watched 
               watched={watchedMovies}
               handleClick={this.handleClick}
                />
            </div>

         </div>


      )
   }
}


export default MoviesWindow