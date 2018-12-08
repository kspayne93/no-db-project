import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import MoviesWindow from './components/MoviesWindow/MoviesWindow';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }




  render() {

    return (
      <div>
        <div key='header'>
          <Header />
        </div>
        <MoviesWindow
          key='movies-window'
          moviesToWatch={this.state.moviesToWatch}
          moviesWatched={this.state.moviesWatched} />

      </div>
    );
  }
}

export default App;

// Link for site map: https://www.gloomaps.com/CA6G2tRtJz