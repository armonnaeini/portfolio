import React, { Component } from 'react';
import logo from '../../logo.svg';
import './About.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../hover/hover.css';





class About extends Component {

  constructor() {
    super();
    this.state = {
      isHidden: true,
      isToggleOn: true
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(){
    this.setState({
          isHidden: !this.state.isHidden,
          isToggleOn: !this.state.isToggleOn
    })
  }



  render() {
    return(


      <div className = "about-wrapper">


          <div className = "image-container-2">
              <img id = "me-img-2" src={"assets/color_me.png"}/>
          </div>

          <div className = "right-side">

            <ReactCSSTransitionGroup
               transitionName="fade"
               transitionEnterTimeout={1000}
               transitionLeaveTimeout={1000}
            >
              {!this.state.isHidden && <Child />}
            </ReactCSSTransitionGroup>

            <ReactCSSTransitionGroup
               transitionName="fade"
               transitionEnterTimeout={1000}
               transitionLeaveTimeout={1000}
            >
              {this.state.isHidden && <Child2 />}
            </ReactCSSTransitionGroup>


          </div>
          <div className = "button-container">
            <button className = "switch-button hvr-underline-from-left" onClick={this.toggleHidden.bind(this)}> {this.state.isToggleOn ? 'view skillset' : 'view bio'}</button>
          </div>
      </div>
    );
  }
}

const Child = () =>(
  <div className = "right-side-skills">
    <h1 id = "about-h1">What can I do?</h1>

    <div className = "skills-container">
      <div className = "left-skill">
        <h2 id = "skill-h">Design </h2>
        <li id = "skilllist">Photoshop</li>
        <li id = "skilllist">Illustrator</li>
        <li id = "skilllist">Premiere</li>
        <li id = "skilllist">XD</li>
        <li id = "skilllist">After Effects</li>
        <li id = "skilllist">Sketch</li>
        <li id = "skilllist">Figma</li>
        <li id = "skilllist">Invision</li>
        <li id = "skilllist">Framer</li>
        <li id = "skilllist">Blender</li>
      </div>
    <div className = "right-skill">
      <h2 id = "skill-h">Develop</h2>
      <li id = "skilllist">HTML, CSS, JS</li>
      <li id = "skilllist">ReactJS, ReactNative</li>
      <li id = "skilllist">C++, OpenGL</li>
      <li id = "skilllist">OpenFrameworks</li>
      <li id = "skilllist">Processing, p5</li>
      <li id = "skilllist">Arduino</li>
      <li id = "skilllist">Unity</li>
      <li id = "skilllist">AWS, Lambda</li>
      <li id = "skilllist">NodeJS</li>
      <li id = "skilllist">Python</li>
    </div>
  </div>
  </div>
)

const Child2 = () =>(
  <div className = "about-header-container">
    <h1 id = "about-h1">Designer. Developer. Creator.</h1>
    <p id = "bio" class = "bio">Howdy, my name is Armon Naeini. I am a 22 year old creative technologist and multimedia designer, based in Boulder, Colorado. I live and die for creating things that other people can experience, enjoy and reflect on, hence why I have fallen in love with the world of creative technologies. My work is governed by an emphasis of both engineering and creativity, where I am able to design and develop a broad spectrum of products, respectively.<br /><br /> My areas of expertise fall under UX design and development for both conventional and unconventional interfaces, AR/VR development, as well as interactive installation design and development. If you are ever interested in working with me, please feel free to reach out, anytime; I am always eager for new projects and opportunities.
</p>
  </div>
)


export default About;
