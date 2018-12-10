import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {};
   }

   render(){
      return(
         <div id="header">
            <h1>Movie Tracker</h1>
         </div>
      
      
      )
   }
}

export default Header;