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
            <div className="Font-sabuesa Detail-info">
              <p className="info-date">
                <FontAwesomeIcon
                  className="icon-date"
                  icon="calendar"
                  size="lg"
                />
                { formatDate }
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon-author"
                  icon="user"
                  size="lg"
                />
                { username }
              </p>
            </div>
            <figure>
              <img className="Detail-img" src={ urlImg } alt={ title }/>
            </figure>
          </div>
          <br/>
          <h1 className="Font-sabuesa Detail-title">{ title }</h1>
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
            <p className="Font-sabuesa author-name">{ username }</p>
          </div>
        </div>
        <div className="Detail-aside"></div>
      </div>
    );
  }
}

export default PostDetail;
