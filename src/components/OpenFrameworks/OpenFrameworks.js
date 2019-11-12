import React, { Component } from 'react';
import './OpenFrameworks.css';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import { Player, ControlBar, Shortcut} from 'video-react';
import Vimeo from '@u-wave/react-vimeo';

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
    );


  }
}
export default OpenFrameworks;
