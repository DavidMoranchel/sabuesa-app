import React, { Component } from 'react';
//components
import Search from '../Search/Search'
//css
import './MenuMobile.css';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuMobile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`
          App-navbar
          ${this.props.isActive ?
            'm-on' :
            'm-off'
          }
        `}
      >
        <Search></Search>
        <ul>
          <li className="Item-header">
            <FontAwesomeIcon
              className="icon"
              icon="bone"
              size="sm"
            />
            <p>
              Categorias
            </p>
          </li>
          <li className="Item-section">
            <a>
              Ejemplo
            </a>
          </li>
          <li className="Item-section">
            <a>
              Ejemplo
            </a>
          </li>
          <li className="Item-section">
            <a>
              Ejemplo
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuMobile;
