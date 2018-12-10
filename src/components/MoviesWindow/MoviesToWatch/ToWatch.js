import React, { Component } from 'react';
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
      if(event.keyCode === 13) {
         this.props.handleClick(this.state.userInput, false)
      }else {this.setState({ userInput: event.target.value })}
   };


   render() {
      let moviesToDisplay = this.props.toWatch.map(movie => {
         return (
            <div>
               <ol >
                  <li className='movie-list'>
                     {movie.title}
                     <button onClick={() => this.props.handleWatchedClick(movie.id, true)}>Watched</button>
                     <button onClick={() => this.props.handleDeleteClick(movie.title, movie.id)}>Delete</button>
                  </li>
               </ol>
            </div>
         )
      })


      return (
         <div className='box'>
            <h3>Movies To Watch</h3>
            <div className='input-button'>
               <input
                  value={this.state.userInput}
                  onChange={(event) =>  this.handleChange(event)}
                  onKeyDown={(event) => {
                     this.setState({
                        userInput: ''
                     })
                     this.handleChange(event)}
                  }   
                  type="text"
                  placeholder='Movie title'/>
               <button
               onClick={() => {
                  this.setState({
                     userInput: ''
                  })
                  this.props.handleClick(this.state.userInput, false)}
                  }>Add</button>
            </div>
            <h4>
               {moviesToDisplay}
            </h4>
         </div>


      )
   }
}

export default ToWatch;