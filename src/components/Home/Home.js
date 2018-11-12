import React, { Component } from 'react';
// components
import RecentPost from './RecentPost/RecentPost';
// styles
import './Home.css';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div className="App-home">
        <RecentPost></RecentPost>
      </div>
    );
  }
}

export default Home;
