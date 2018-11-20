import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// components
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';

// css
import './App.css';
//icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faBone, faTimes, faSearch, faPaw, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'

// add icons
library.add(faBars, faBone, faTimes, faSearch, faPaw, faCalendar, faUser);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <div className="App-content">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/post/:id' component={PostDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
