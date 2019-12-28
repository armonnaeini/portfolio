import React, { Component } from 'react';
import './OpenFrameworks.css';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import { Player, ControlBar, Shortcut} from 'video-react';
import Vimeo from '@u-wave/react-vimeo';
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";


class OpenFrameworks extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }
  render() {
    return(

      <div className = "giide-wrapper">


      <div className = "flex-container">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>

          <div className = "work-head-container-2">
            <h3 id = "work-header">Body</h3>
            <h4 id = "work-sub-header">Body is an interactive, motion tracking project I developed in openFrameworks, a C++ creative toolkit. The
              project utilizes an Xbox 360's Kinect V1 camera for
              depth-sensing information as well as the open sourced toolkit Computer Vision, and can be set up as an installation. Body tracks the subject's movements,
              and displays a silhoutte of the body on either a digital display or projection. As the subject
              moves around the project space, a trail of their silhoutte is left behind, all shown real time on the display.
              <br></br><br></br>
              Body was comissioned to be set up as an interactive installation for the University of Colorado Boulder's
              Open Access Week. The installation ran for three weeks in the Roser ATLAS Building during the month of October
              2019. Now, Body is currently running at <a href ="https://www.wonderwonder.us/boulder">Wonder Wonder</a>.
              <br></br><br></br>
              Body aims to explore the way humans choose to represent themselves in both digital and physical spaces, as the
              installation introduces a feedback-like relationship between the viewer and the technology. Viewers are encouraged to
              physically act out in weird, unorthodox manners in order to get a response back from the installation, which brings
              up a question of what/who is influencing the other.
              </h4>
          </div>

          <div className = "total-container">


              <div className = "new-test-2">
                <div className = "first-image">
                  <iframe src="https://player.vimeo.com/video/380535086" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
              </div>


              <div className = "new-test-2">
                <div className = "first-image">
                  <iframe src="https://player.vimeo.com/video/371189774" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
              </div>


              <div className = "new-test">
                <a href="assets/body_stills/still1.png" target="_blank">
                  <div className = "overlay-container hvr-grow">
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/body_stills/still1.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>


              <div className = "new-test">
                <a href="assets/body/body1.jpg" target="_blank">
                  <div className = "overlay-container hvr-grow">
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/body/body1.jpg"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "new-test">
                <a href="assets/body/body2.jpg" target="_blank">
                  <div className = "overlay-container hvr-grow">
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/body/body2.jpg"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "new-test">
                <a href="assets/body/body3.jpg" target="_blank">
                  <div className = "overlay-container hvr-grow">
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/body/body3.jpg"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>


          </div>
        </div>
      </div>








    );


  }
}
export default OpenFrameworks;
