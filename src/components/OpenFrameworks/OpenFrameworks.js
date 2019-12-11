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
            <h4 id = "work-sub-header">Body is an interactive, motion tracking project I have been working on, for the past year.
              The project is developed in openFrameworks, a C++ creative toolkit, and utilizes an Xbox 360's Kinect V1 camera for
              depth-sensing information as well as the open sourced toolkit Computer Vision. The project tracks a viewer's movements,
              using the Kinect, and displays a silhoutte of the body on either a digital display or projection. As the subject
              moves around the project space, a trail of their silhoutte is left behind, all shown real time on the display.
              Body's display.
              <br></br><br></br>
              Body was comissioned to be set up as an interactive installation for the University of Colorado Boulder's
              Open Access Week. The installation ran for three weeks in the Roser ATLAS Building during the month of October
              2019.
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
                <iframe src="https://player.vimeo.com/video/378182568" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </div>
            </div>

              <div className = "new-test-2">
                <div className = "first-image">
                  <iframe src="https://player.vimeo.com/video/371207109" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
              </div>


              <div className = "new-test-2">
                <div className = "first-image">
                  <iframe src="https://player.vimeo.com/video/371189774" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
              </div>

              <div className = "new-test-2">
                <div className = "first-image">
                  <iframe src="https://player.vimeo.com/video/367651005" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
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
              <a href="assets/body_stills/still2.png" target="_blank">
                <div className = "overlay-container hvr-grow">

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/body_stills/still2.png"} className = "image-ov" id = "work-image"/>
                  </div>


                </div>
              </a>
              </div>

              <div className = "new-test">
              <a href="assets/body_stills/still3.png" target="_blank">
                <div className = "overlay-container hvr-grow">

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/body_stills/still3.png"} className = "image-ov" id = "work-image"/>
                  </div>


                </div>
              </a>
              </div>




          </div>
        </div>
        {
          /*
          <div className = "giide-wrapper">
            <div className = "total-container">



            <div className = "first-image">
            <h2 id = "image-title">Body</h2>

              <p id = "openP">Body is an interactive installation currently running (since October 17th),
              in the Roser ATLAS Building of the University of Colorado Boulder. The installation consists
              of a "digital mirror"(4K TV) and a depth sensing camera (Kinect V1). When users walk up to the mirror,
              the image of their body is augmented into an ambiguous, blob-like entity and when the viewer
              moves within the space of the installation, trails are left behind of their movements.
              <br></br><br></br>Body aims to explore the way humans choose to represent themselves in
              both digital and physical spaces, as the installation introduces a feedback-like relationship
              between the viewer and the technology. Viewers are encouraged to physically act out in weird,
              unorthodox manners in order to get a response back from the installation, which brings up a
              question of what/who is influencing the other.
              <br></br><br></br>The installation was designed and developed fully by myself, using openFrameworks,
              a C++ creative toolkit, as well as openCV and an Xbox 360 Kinect V1 Camera. Body has also been
              commissioned for the Open Access Week event, more info <a href = "https://www.colorado.edu/atlas/2019/10/15/tam-students-project-chosen-open-access-week-installation`">here</a> held at the University of Colorado Boulder, as well.
              You can view the code <a href = "https://github.com/armonnaeini/-body">here</a>.

            </p>
            </div>


            <div className = "first-image">
              <iframe src="https://player.vimeo.com/video/371207109" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>

            <div className = "first-image">
            <p id = "openP">Choreographed interpretation of Lorn's 'Acid Rain' using Body.</p>

              <iframe src="https://player.vimeo.com/video/371189774" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>

            <div className = "first-image">
            <p id = "openP">Some nice surrealism.</p>
              <iframe src="https://player.vimeo.com/video/367651005" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>



            <div className = "first-image">
              <p id = "openP">Stills taken from various interactees.</p>
              <ModalImage
                small={'assets/body_stills/still1.png'}
                className = "work-imagetest2"
                large={'assets/body_stills/still1.png'}
              />
              <ModalImage
                small={'assets/body_stills/still2.png'}
                className = "work-imagetest2"
                large={'assets/body_stills/still2.png'}
              />
              <ModalImage
                small={'assets/body_stills/still3.png'}
                className = "work-imagetest2"
                large={'assets/body_stills/still3.png'}
              />
            </div>















            </div>
          </div>

          */
        }
      </div>








    );


  }
}
export default OpenFrameworks;
