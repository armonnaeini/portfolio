import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';
import { Player, ControlBar, Shortcut} from 'video-react';
import "../../../node_modules/video-react/styles/scss/video-react.scss";
// import video from '../../../public/assets/home-video.mp4';
import '../../hover/hover.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';






class Home extends Component {
  _isMounted = false;
  constructor() {
   super();
   this.state = {
     width:  500,
     height: 200
   }
 }




  render() {
    return(
      <div className = "wrapper">

      <ReactCSSTransitionGroup




      >

      <div className = "main-container">
        <div className = "header-container">
          <h1 className = "homeH1">A digital dream.</h1>
          <h2 className = "homeH2">Have you ever had one of those before?</h2>
        </div>

        <div className = "video-container">

          <video autoPlay="true" muted="true" loop="true" id = "home-video" playsInline>
            <source src={"assets/NEWVID.mp4"} type="video/mp4"></source>
          </video>



        </div>

        </div>

        </ReactCSSTransitionGroup>
      </div>
    );


  }
}

export default Home;
