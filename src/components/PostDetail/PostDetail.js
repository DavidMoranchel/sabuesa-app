import React, { Component } from 'react';
import { postsRef } from '../../fire';
import './PostDetail.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    let id = `-${this.props.match.params.id.slice(2)}`;
    this.handler = postsRef.child(id).once("value").then(snapshot => {
      this.setState({ post: snapshot.val() });
    });
  }

  render() {
    let { title, urlImg, dateNow, username, userImg, subtitle, content } = this.state.post;
    let formatDate;
    if (dateNow) {
      formatDate = new Date(dateNow).toLocaleDateString("es-ES", {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      });
    }
    return(
      <div className="Detail-section">
        <div className="Detail-article">
          <div className="Detail-header">
            <p className="Detail-info">
              <span className="info-date">
                <FontAwesomeIcon
                  className="icon-date"
                  icon="calendar"
                  size="lg"
                />
                { formatDate }
              </span>
              <span>
                <FontAwesomeIcon
                  className="icon-author"
                  icon="user"
                  size="lg"
                />
                { username }
              </span>
            </p>
            <br/>
            <figure>
              <img className="Detail-img" src={ urlImg } alt={ title }/>
            </figure>
          </div>
          <br/>
          <h1 className="Detail-title">{ title }</h1>
          <h3 className="Detail-subtitle">{ subtitle }</h3>
          <div
            className="Detail-content"
            dangerouslySetInnerHTML={{__html: content}}
          >
          </div>
          <div className="Detail-author">
            <figure>
              <img className="author-img" src={ userImg } alt={ username }/>
            </figure>
            <p className="author-name">{ username }</p>
          </div>
        </div>
        <div className="Detail-aside"></div>
      </div>
    );
  }
}

export default PostDetail;
