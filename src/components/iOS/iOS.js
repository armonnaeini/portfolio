import React, { Component } from 'react';
import './iOS.css';
import ImageFadeIn from 'react-image-fade-in'
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";
import Work from '../../components/Work';

import { withRouter } from 'react-router'

import ModalImage from "react-modal-image";
import '../../hover/hover.css';



class iOS extends Component {

  render() {

    return(

      <div className = "giide-wrapper">
      <div className = "flex-container">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>

          <div className = "work-head-container-2">
            <h3 id = "work-header">iOS AR Development</h3>
            <h4 id = "work-sub-header">Recently, I've been working with openFrameworks' iOS development port,
            which has involved exploring Apple's ARKit as well as openCV's translation to iOS. All demonstrations
            are done in C++ & GLSL.</h4>
          </div>

          <div className = "total-container">



          <h4 id = "work-sub-header-2">ofxARKit + GLSL</h4>
          <video autoPlay="true" muted="true" loop="true" id = "home-video-2" playsInline>
             <source src={"assets/shader_ar.mp4"} type="video/mp4"></source>
           </video>

          <h4 id = "work-sub-header-2">OpenCV + iOS + ofMesh + vectors!</h4>
          <video autoPlay="true" muted="true" loop="true" id = "home-video-2" playsInline>
             <source src={"assets/mobile.mp4"} type="video/mp4"></source>
           </video>

           <h4 id = "work-sub-header-2">ARKit face tracking w/ shaders.</h4>
          <video autoPlay="true" muted="true" loop="true" id = "home-video-2" playsInline>
             <source src={"assets/face.mov"} type="video/mp4"></source>
           </video>
          <h4 id = "work-sub-header-2">OpenCV on iOS.</h4>
          <video autoPlay="true" muted="true" loop="true" id = "home-video-2" playsInline>
             <source src={"assets/video1.mp4"} type="video/mp4"></source>
           </video>

            <h4 id = "work-sub-header-2">AR anchoring with my lovely self.</h4>
            <video autoPlay="true" muted="true" loop="true" id = "home-video-2" playsInline>
               <source src={"assets/video3.mp4"} type="video/mp4"></source>
             </video>

             <h4 id = "work-sub-header-2">ofxARKit face recognition.</h4>
             <video autoPlay="true" muted="true" loop="true" id = "home-video-2" playsInline>
                <source src={"assets/video4.mp4"} type="video/mp4"></source>
              </video>






          </div>
        </div>
      </div>

    );
  }
}

export default iOS;
