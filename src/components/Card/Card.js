import React, { Component } from 'react';
// styles
import './Card.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Card">
        <div className="Card-img">
          <figure>
            <img src="https://firebasestorage.googleapis.com/v0/b/bot-sabuesa.appspot.com/o/posts%2F37ba8025239809.563431f6de353.jpg?alt=media&token=02f9cc55-e8fa-43b0-b15d-a138fd8491a3" alt=""/>
          </figure>
        </div>
        <div className="Card-content">
          <p className="Card-title">El regreso del Diablo</p>
          <p className="Card-description">Después de un año de espera, la última entrega de Netflix asociada con Marvel, trae de vuelta al Diablo de Hell´s Kitchen; mejor conocido como Daredevil, en su tercera temporada.</p>
          <p className="Card-author">
            by <span>Test</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
