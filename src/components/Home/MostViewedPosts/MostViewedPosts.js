import React, { Component } from 'react';
import PostRef from '../../../fire';
// components
import Card from '../../Card/Card';
// styles
import './MostViewedPosts.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MostViewedPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let mostViewedPosts = PostRef.orderByChild('views/count');
    this.handler = mostViewedPosts.limitToLast(10).on('value', snapshot => {
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
     PostRef.off('value', this.handler);
   }

  render() {
    let posts = this.state.posts.reverse().map(function(p) {
      return <Card key={ p.key } id={ p.key } type="h" title={p.title} img={p.urlImg} des={ p.description } author={ p.username }></Card>
    });
    return(
      <div className="Home-section">
        <p className="Home-title">
          <FontAwesomeIcon
            className="Home-title-logo mvp-logo"
            icon="paw"
            size="lg"
          />
        <span className="Home-title-text">Lo + perro</span>
        </p>
        <div className="mvp-container">
          { posts }
        </div>
      </div>

    );
  }
}

export default MostViewedPosts;
