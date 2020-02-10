import React, { Component } from 'react';
import './iOS.css';
import ImageFadeIn from 'react-image-fade-in'
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";
import Work from '../../components/Work';
import ReactPlayer from 'react-player'

import { withRouter } from 'react-router'

import ModalImage from "react-modal-image";
import '../../hover/hover.css';



class iOS extends Component {

  render() {

    return(

      <div className = "body-wrapper">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>
        <div className = "body-inner-wrapper">


          <div className = "body-blurb-container-ios">
            <div className = "body-blurb-left">
              <h2 id = "body-title-ios">iOS AR</h2>
              <h3 id = "body-sub-title">ofxARKit + ARKit + GLSL</h3>
            </div>

            <div className = "body-blurb-right">
              <p id = "body-paragraph">Below showcases a few AR demonstrations developed for iOS. The first two
              videos utilize ofxARKit an addon for C++ based openFrameworks, which directly works with Apple's
              C# based ARKit. The first video demonstrates ARKit's face-tracking processor which is then styleized
              using a few shaders, done in GLSL. The second video shows ARKit's anchoring.
              <br></br><br></br>
              The next two videos utilize ofxCv, openFramework's wrapper for OpenCV, as well as ofMesh.
              </p>
            </div>
          </div>

          <div class="container-ios">


            <div class="content col-1">
              <img src="https://s5.gifyu.com/images/1_final.gif" id = "test-img-ios"/>
            </div>

            <div class="content2 col-3-ios">
              <img src="https://s5.gifyu.com/images/4_final.gif" id = "test-img-ios"/>
             </div>

            <div class="content col-1-a">
              <img src="https://s5.gifyu.com/images/3_final.gif" id = "test-img-ios"/>
            </div>

            <div class="content2 col-3-a-ios">
              <img src="https://s5.gifyu.com/images/2_final.gif" id = "test-img-ios"/>
             </div>

          </div>


        </div>
      </div>

    );
  }
}

export default iOS;
