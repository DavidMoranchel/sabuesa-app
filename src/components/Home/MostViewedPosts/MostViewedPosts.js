import React, { Component } from 'react';
import _postRef from '../../../fire';
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

  componentWillMount() {
    let _posts = _postRef.orderByChild('views/count');
    _posts.limitToLast(10).on('child_added', (snapshot) => {
      let postAdded = { content: snapshot.val() , key:snapshot.key };
      this.setState({
        posts: [postAdded].concat(this.state.posts)
      })
    })
  }


  render() {
    let posts = this.state.posts
    console.log(posts,'=> mvp posts');
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
          {
            posts.map(p => <Card key={ p.key } type="h" title={p.content.title} img={p.content.urlImg} des={ p.content.description } author={ p.content.username }></Card>)
          }
        </div>
      </div>

    );
  }
}

export default MostViewedPosts;
