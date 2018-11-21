import React, { Component } from 'react';
import { PostRef } from '../../fire';
// styles
import './Sections.css';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    }
  }

  componentDidMount() {
    let section = this.props.match.params.section;
    console.log(section);
  }

  render() {
    return(
      <h1>{ this.props.match.params.section }</h1>
    )
  }
}

export default Sections;
