import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MoviesWindow from './components/MoviesWindow/MoviesWindow';
import '/Users/kylepayne/devmtn/projects/no-db/src/sparkle.gif'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
      <div key="header">
        <div>
          < Header />
        </div>
        <div key="movies-window">
        < MoviesWindow />
        </div>
      </div>
    );
  }
}

export default App;

// Link for site map: https://www.gloomaps.com/CA6G2tRtJz