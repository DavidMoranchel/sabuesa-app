import React, { Component } from 'react';
//css
import './Search.css';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App-search">
        <form>
          <input type="text" placeholder="Buscar..."/>
          <button type="submit">
            <FontAwesomeIcon
              className="icon"
              icon="search"
              size="lg"
            />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
