import React, { Component } from 'react';
import _postRef from '../../../fire';
// components
import Card from '../../Card/Card';
// styles
import './RecentPost.css';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class RecentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    let _posts = _postRef.orderByChild('dateNow');
    _posts.limitToLast(15).on('child_added', (snapshot) => {
      let postAdded = { content: snapshot.val() , key:snapshot.key };
      this.setState({
        posts: [postAdded].concat(this.state.posts)
      })
    })
  }

  render() {
    console.log(this.state.posts);
    return(
      <div className="App-recent-post">
        <p className="rp-title"></p>
        <div className="rp-container">
          <div className="rp-column">
            {
              this.state.posts.slice(0,3).map((p) => <Card key={p.key} title={p.content.title} img={p.content.urlImg} des={ p.content.description } author={ p.content.username }></Card> )
            }
          </div>
          <div className="rp-column">
            {
              this.state.posts.slice(4,7).map((p) => <Card key={p.key} title={p.content.title} img={p.content.urlImg} des={ p.content.description } author={ p.content.username }></Card> )
            }
          </div>
          <div className="rp-column">
            {
              this.state.posts.slice(8,11).map((p) => <Card key={p.key} title={p.content.title} img={p.content.urlImg} des={ p.content.description } author={ p.content.username }></Card> )
            }
          </div>

        </div>
      </div>
    );
  }
}

export default RecentPost;
