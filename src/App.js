import React, { Component } from 'react';
// components
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
// css
import './App.css';
//icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faBone, faTimes, faSearch, faPaw } from '@fortawesome/free-solid-svg-icons'

// add icons
library.add(faBars, faBone, faTimes, faSearch, faPaw);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <div className="App-content">
          <Home></Home>
        </div>
      </div>
    );
  }
}

export default App;
