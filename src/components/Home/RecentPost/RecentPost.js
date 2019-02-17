import React, { Component } from 'react';
import { postsRef } from '../../../fire';
// components
import Card from '../../Card/Card';
// styles
import './RecentPost.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class RecentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let recentPost = postsRef.orderByChild('dateNow');
    this.handler = recentPost.limitToLast(10).on('value', snapshot => {
      let postArray = [];
      snapshot.forEach((snap) => {
        let { title, urlImg, description, username } = snap.val();
        postArray.push({
          title,
          urlImg,
          description,
          username,
          key: snap.key
        });
      });
      this.setState({ posts: postArray });
    })
  }

  componentWillUnmount() {
     postsRef.off('value', this.handler);
   }

  render() {
    let posts = this.state.posts.reverse();
    let firstColumn = posts.slice(0,5).map(p  => <Card key={p.key} id={ p.key } type="v" title={p.title} img={p.urlImg} des={ p.description } author={ p.username }></Card> )
    let secondColumn = posts.slice(5,10).map(p => <Card key={p.key} id={ p.key } type="v" title={p.title} img={p.urlImg} des={ p.description } author={ p.username }></Card> )
    return(
      <div className="Home-section">
        <p className="Home-title">
          <FontAwesomeIcon
            className="Home-title-logo"
            icon="paw"
            size="lg"
          />
        <span className="Home-title-text">Posts Recientes</span>
        </p>
        <div className="rp-container">
          <div className="rp-column">
            { firstColumn }
          </div>
          <div className="rp-column">
            { secondColumn }
          </div>

        </div>
      </div>
    );
  }
}

export default RecentPost;
