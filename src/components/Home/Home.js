import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';
import { Player, ControlBar, Shortcut} from 'video-react';
import "../../../node_modules/video-react/styles/scss/video-react.scss";
// import video from '../../../public/assets/home-video.mp4';
import '../../hover/hover.css';
import styled, {keyframes} from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fadeInDown } from 'react-animations';
import posed, { PoseGroup } from 'react-pose';
import Tilt from 'react-tilt';




const FadeInDown = styled.div`animation: 10s ${keyframes `${fadeInDown}`}`;



class Home extends Component {

  render() {
    return(



      <div className = "wrapper">



      <div className = "header-container">
      <div className = "tilt-container">

      <Tilt className="Tilt"
        options= {{
          max : 25,
          reset: false}}
        style={{
          height: 250 }}
        >

        <div className="Tilt-inner">
          <div className = "title-container">
            <h1 className = "homeH1">I AM DREAMING IN A DIGITAL SPACE.</h1>
            <h2 className = "homeH2">Don't wake me up.</h2>
          </div>
        </div>

        <img src = "assets/banner.png" id = "home-img" alt = "asdf"/>

      </Tilt>
      </div>

      </div>



      </div>
    );


  }
}

export default Home;
