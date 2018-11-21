import React, { Component } from 'react';
import { PostRef, SectionRef } from '../../fire';
// styles
import './Sections.css';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: [],
      posts: []
    }
  }

  componentDidMount() {
    let section = this.props.match.params.section;

    this.handlerSection = SectionRef.orderByChild('key').equalTo(section);
    this.handlerSection.on('value', snapshot => {
      let sectionArray = [];
      snapshot.forEach( snap => {
        let { name, key, img } = snap.val();
        sectionArray.push({ name, key, img, id: snap.key });
      });
      this.setState({ section: sectionArray });
    });

    this.handlerPosts = PostRef.orderByChild('section').equalTo(section);
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
    });
  }

  render() {
    console.log(this.state.posts);
    console.log(this.state.section);
    return(
      <h1>{ this.props.match.params.section }</h1>
    )
  }
}

export default Sections;
