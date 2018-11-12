import React, { Component } from 'react';
// components
import Card from '../../Card/Card';
// styles
import './RecentPost.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App-recent-post">
        <p className="rp-title"></p>
        <div className="rp-container">
          <div className="rp-column">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="rp-column">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="rp-column">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="rp-column">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
