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



const FadeInDown = styled.div`animation: 10s ${keyframes `${fadeInDown}`}`;



class Home extends Component {

  render() {
    return(



      <div className = "wrapper">


                  <div className = "header-container">
                    <h1 className = "homeH1">Digital dreams.</h1>
                    <h2 className = "homeH2">I'm still sleeping.</h2>
                  </div>

        <ReactCSSTransitionGroup
          transitionName="example2"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className = "vidContainer">
            <video autoPlay="true" muted="true" loop="true" id = "home-video" playsInline>
              <source src={"assets/NEWVID.mp4"} type="video/mp4"></source>
            </video>
          </div>
        </ReactCSSTransitionGroup>



      </div>
    );


  }
}

export default Home;
