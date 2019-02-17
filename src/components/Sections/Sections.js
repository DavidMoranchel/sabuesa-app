import React, { Component } from 'react';
import { sectionsRef, postsRef } from '../../fire';
// styles
import './Sections.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSection: '',
      keySection: '',
      imgSection: '',
      posts: []
    }
  }

  componentWillMount() {
    let section = this.props.match.params.section;
    this.getSection(section);
    this.getPosts(section);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nameSection: '',
      keySection: '',
      imgSection: '',
      posts: []
    })
    if (nextProps.match.params.section !== this.props.match.params.section) {
      let section = nextProps.match.params.section;
      this.getSection(section);
      this.getPosts(section);
    }
  }

  getSection(section) {
    this.handlerSection = sectionsRef.orderByChild('key').equalTo(section);
    this.handlerSection.on('value', snapshot => {
      let infoSection = Object.values(snapshot.val())[0];
      let { key, name, img } = infoSection
      this.setState({
        nameSection: name,
        keySection: key,
        imgSection: img
      });
      console.log('=> section update');
    });
  }

  getPosts(section) {
    this.handlerPosts = postsRef.orderByChild('section').equalTo(section);
    this.handlerPosts.on('value', snapshot => {
      let postArray = [];
      snapshot.forEach( snap => {
        let { title, urlImg, description, username } = snap.val();
        postArray.push({
          title,
          urlImg,
          description,
          username,
          key: snap.key
        });
      });
      this.setState({ posts: postArray });
      console.log('=> posts update');
    });
  }

  render() {
    let { posts, nameSection, imgSection } = this.state;

    return(
      <div>
        <p className="Cont-title">
          <FontAwesomeIcon
            className="Cont-title-logo"
            icon="hand-point-right"
            size="lg"
          />
          <span className="Font-sabuesa Font-title">{ nameSection }</span>
        </p>
      </div>
    )
  }
}

export default Sections;
