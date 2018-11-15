import React, { Component } from 'react';
// styles
import './Card.css';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {

  render() {
    let {title, img, des, author, type}  = this.props;
    let typeCard = type === "v" ? "Card-v" : "Card-h";
    return(
      <div className={`Card ${typeCard}`}>
        <div className="Card-container-img">
          <figure>
            <img className="Card-img" src={img} alt=""/>
          </figure>
        </div>
        <div className="Card-container-content">
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
