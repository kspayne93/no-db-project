import React, {Component} from 'react';
import './Watched.css';

class Watched extends Component {
   constructor(props) {
      super(props)
      this.state = {
         userInput: ''
      }

      this.handleChange = this.handleChange.bind(this);

   }

   handleChange(event) {
      if (event.keyCode === 13) {
         this.props.handleClick(this.state.userInput, true)
      }else {this.setState({ userInput: event.target.value })};
   };


   render(){
      let moviesToDisplay = this.props.watched.map(movie => {
         return (
            <div>
               <ol>
                  <li className='movie-list'>
                     {movie.title}
                     <button onClick={() => this.props.handleUnwatchedClick(movie.id, false)}>Unwatched</button>
                     <button onClick={() => this.props.handleDeleteClick(movie.title, movie.id)}>Delete</button>
                  </li>
               </ol>
            </div>
         )
      })
      return(
         <div className='box'>
            <h3>Movies Watched</h3>
            <div className='input-button'>
               <input
                  value={this.state.userInput}
                  onChange={this.handleChange}
                  onKeyDown={(event) => {
                     this.setState({
                        userInput: ''
                     })
                     this.handleChange(event)}
                  }
                  type="text"
                  placeholder='Movie title' />
               <button
               onClick={() => {
                  this.setState({
                     userInput: ''
                  })
                  this.props.handleClick(this.state.userInput, true)}
                  }>Add</button>
            </div>
            <h4>
               {moviesToDisplay}
            </h4>
         </div>
      
      
      )
   }
}

export default Watched;