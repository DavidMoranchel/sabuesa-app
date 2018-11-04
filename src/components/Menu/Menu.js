import React, { Component } from 'react';
//components
import MenuMobile from './MenuMobile/MenuMobile';
// styles
import './Menu.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  handleClickMenu() {
    this.setState({
      isMenuActive: !this.state.isMenuActive
    });
  }

  render() {
    let icon = this.state.isMenuActive ? "times" : "bars";
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
          <MenuMobile
            isActive={ this.state.isMenuActive }
          >
          </MenuMobile>
        </nav>
      </header>
    );
  }
}

export default Menu;
