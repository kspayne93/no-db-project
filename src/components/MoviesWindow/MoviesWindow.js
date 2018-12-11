import React, { Component } from 'react';
import './MoviesWindow.css';
import ToWatch from './MoviesToWatch/ToWatch';
import Watched from './WatchedMovies/Watched';
import axios from 'axios';
import img from "/Users/kylepayne/devmtn/projects/no-db/src/components/MoviesWindow/nicky-c-danny-d.jpg";
import img2 from "/Users/kylepayne/devmtn/projects/no-db/src/components/MoviesWindow/carlton-dance.gif"
import img3 from "/Users/kylepayne/devmtn/projects/no-db/src/components/MoviesWindow/delete.gif"
import img4 from "/Users/kylepayne/devmtn/projects/no-db/src/components/MoviesWindow/michael-scott-surprised.gif"
import img5 from "/Users/kylepayne/devmtn/projects/no-db/src/components/MoviesWindow/seth.gif"
let imageToDisplay = img;

class MoviesWindow extends Component {
   constructor(props) {
      super(props)
      this.state = {
         movies: []        
      };
      
      this.handleClick = this.handleClick.bind(this);
      this.handleDeleteClick = this.handleDeleteClick.bind(this);
      this.handleWatchedClick = this.handleWatchedClick.bind(this);
      this.handleUnwatchedClick = this.handleUnwatchedClick.bind(this);
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
         this.setState({ movies: res.data, userInput: ''})
      })
      imageToDisplay = img2;
   };

   handleWatchedClick(id, watched) {
      axios.put(`/api/movies/${id}`, {
         id: id,
         watched: watched
      }).then(res => {
         this.setState({movies: res.data})
      })
      imageToDisplay = img4;
   }

   handleUnwatchedClick(id, watched) {
      axios.put(`/api/movies/${id}`, {
         id: id,
         watched: watched
      }).then(res => {
         this.setState({movies: res.data})
      })
      imageToDisplay = img5;
   }

   handleDeleteClick(title, id) {
      axios.delete(`/api/movies/${id}`, {
         title: title,
         id: id
      }).then(res => {
         this.setState({ movies: res.data })
      })
      imageToDisplay = img3;
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
         <div className='component-box'>
            <div className='component' id="left-box">
               <ToWatch
                  toWatch={unwatchedMovies}
                  handleClick={this.handleClick}
                  handleDeleteClick={this.handleDeleteClick}
                  handleWatchedClick={this.handleWatchedClick}
                  handleLike={this.handleLike}
                   />
            </div>
            <div className='image-box'>
               <img src={imageToDisplay} alt=""/>
            </div>
            <div className='component' id="right-box">
               <Watched 
                  watched={watchedMovies}
                  handleClick={this.handleClick}
                  handleDeleteClick={this.handleDeleteClick}
                  handleUnwatchedClick={this.handleUnwatchedClick}
                  handleLike={this.handleLike}
                />
            </div>
         </div>


      )
   }
}


export default MoviesWindow