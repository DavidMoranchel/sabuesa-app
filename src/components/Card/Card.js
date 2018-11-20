import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// styles
import './Card.css';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClickCard = this.handleClickCard.bind(this);
  }

  handleClickCard() {
    let post = `post/bs${this.props.id.slice(1)}`;
    this.props.history.push(post);
    console.log(post);
  }

  render() {
    let {title, img, des, author, type}  = this.props;
    let typeCard = type === "v" ? "Card-v" : "Card-h";
    return(
      <div
        className={`Card ${typeCard}`}
        onClick={ this.handleClickCard }
      >
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

export default withRouter(Card);
