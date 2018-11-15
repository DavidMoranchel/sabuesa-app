import React, { Component } from 'react';
// components
import RecentPost from './RecentPost/RecentPost';
import MostViewedPosts from './MostViewedPosts/MostViewedPosts';
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
        <div className="Home-articles">
          <RecentPost></RecentPost>
          <MostViewedPosts></MostViewedPosts>
        </div>
        <div className="Home-aside">

        </div>
      </div>
    );
  }
}

export default Home;
