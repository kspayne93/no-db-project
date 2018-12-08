import React, { Component } from 'react';
import axios from 'axios';
import './ToWatch.css'

class ToWatch extends Component {
   constructor(props) {
      super(props)

      this.state = {
         userInput: '',
      };

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ userInput: event.target.value })
   };


   render() {
      let moviesToDisplay = this.props.toWatch.map(movie => {
         return (
            <div>
               <ul >
                  <li className='movie-list'>
                     {movie.title}
                     <button>Edit</button>
                     <button>Delete</button>
                  </li>
               </ul>
            </div>
         )
      })

      return (
         <div>
            <h3>Movies To Watch</h3>
            <input
               onChange={this.handleChange}
               type="text"
               placeholder='Movie title' />
            <button
               onClick={() => this.props.handleClick(this.state.userInput, false)}>Add</button>
            <h4>
               {moviesToDisplay}
            </h4>
         </div>


      )
   }
}

export default ToWatch;