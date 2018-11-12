import React, { Component } from 'react';
// styles
import './Card.css';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {title, img, des, author}  = this.props;
    return(
      <div className="Card">
        <div className="Card-img">
          <figure>
            <img src={img} alt=""/>
          </figure>
        </div>
        <div className="Card-content">
          <p className="Card-title">{ title }</p>
          <p className="Card-description">{ des }</p>
          <p className="Card-author">
            by <span>{ author }</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
