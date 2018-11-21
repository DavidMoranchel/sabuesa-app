import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { SectionRef } from '../../fire';
// components
import Search from '../Search/Search'
// styles
import './Menu.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
      sections: []
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  componentDidMount() {
    this.handler = SectionRef.on('value', snapshot => {
      let sectionArray = [];
      snapshot.forEach((snap) => {
        let { img, key, name } = snap.val();
        sectionArray.push({ img, key, name, id: snap.key });
      });
      this.setState({ sections: sectionArray });
    });
  }

  handleClickMenu() {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  }

  render() {
    let sections = this.state.sections.sort().map(s => {
      return  (<li key={ s.id } className="Item-section">
                <NavLink to={`/section/${ s.key }`} exact onClick={ this.handleClickMenu }>
                  { s.name }
                </NavLink>
              </li>);
    });
    let icon = this.state.isMenuActive ? "times" : "bars";
    console.log(`=> ${sections}`);
    return (
      <header className="App-header">
        <nav>
          <div className="H-section">
            <FontAwesomeIcon
              className="icon"
              icon={icon}
              size="lg"
              onClick={ this.handleClickMenu }
            />
          </div>
          <div className="H-section"></div>
          <div className="H-section"></div>
          <div className={ `App-navbar
              ${ this.state.isMenuActive ?'m-on' : 'm-off'}
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
                <NavLink
                  to="/"
                  exact
                  onClick={ this.handleClickMenu }
                >
                  Home
                </NavLink>
              </li>
              { sections }
            </ul>
          </div>

        </nav>
      </header>
    );
  }
}

export default Menu;
