import React, { Component } from 'react';
import _postRef from '../../../fire';
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
      posts: [],
      firstPost: []
    }
  }

  componentWillMount() {
    let _posts = _postRef.orderByChild('dateNow');
    _posts.limitToLast(10).on('child_added', (snapshot) => {
      let postAdded = { content: snapshot.val() , key:snapshot.key };
      this.setState({
        posts: [postAdded].concat(this.state.posts)
      })
    })
  }

  render() {
    let posts = this.state.posts;
    console.log(posts,'=> rp posts');
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
            {
              posts.slice(0,5).map((p)  => <Card key={p.key} type="v" title={p.content.title} img={p.content.urlImg} des={ p.content.description } author={ p.content.username }></Card> )
            }
          </div>
          <div className="rp-column">
            {
              posts.slice(5,10).map((p) => <Card key={p.key} type="v" title={p.content.title} img={p.content.urlImg} des={ p.content.description } author={ p.content.username }></Card> )
            }
          </div>

        </div>
      </div>
    );
  }
}

export default RecentPost;
