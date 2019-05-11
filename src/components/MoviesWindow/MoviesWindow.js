import React, { Component } from 'react';
import './MoviesWindow.css';
import ToWatch from './MoviesToWatch/ToWatch';
import Watched from './WatchedMovies/Watched';
import axios from 'axios';

let img = "https://i.imgur.com/8VskHAz.jpg";
let img2 = "https://i.imgur.com/N017va3.gif"
let img3 = "https://i.imgur.com/1aIhv9U.gif"
let img4 = "https://i.imgur.com/18wuX8v.gif"
let img5 = "https://i.imgur.com/MMdy6ET.gif"
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