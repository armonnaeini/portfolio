import React, { Component } from 'react';
import './ARPoetry.css';
import ImageFadeIn from 'react-image-fade-in'
import ModalImage from "react-modal-image";
import { Player, ControlBar, Shortcut} from 'video-react';
import '../../hover/hover.css';




class ARPoetry extends Component {
  render() {
    return(

      <div className = "giide-wrapper">
        <div className = "total-container">

          <div className = "first-image">
            <ModalImage
              small={'assets/touchQR.png'}
              id = "work-image2"
              large={'assets/touchQR.png'}
            />
            <h3 id = "image-title">ARPoetry</h3>
            <p id = "giide-p">Using your phone camera, scan the QR code pictured inside the box, to the left. From there, click on the link, allow camera access, and point your phone camera at the entire black box and watch the magic happen.</p>
          </div>

          <div className = "first-image">
            <ModalImage
              small={'assets/okay.png'}
              id = "work-image2"
              large={'assets/okay.png'}
            />
            <h3 id = "image-title">Augmented Reality with Markers</h3>
            <p id = "giide-p">ARPoetry is an augmented reality application where users can explore various piece of a poem I constructed, in an augmented fashion. The project was set up as an installation in the main lobby of the ATLAS Institute of CU Boulder. I designed and created 8 markers, such as the one to the left, that are placed on a large wall. Viewers scan into my web application using a QR code, like the one in the previous page, and then point their phone camera at the said markers which will then display various 3D objects within their phone browser.</p>
          </div>

          <div className = "first-image">
            <ModalImage
              small={'assets/poster.png'}
              id = "work-image2"
              large={'assets/poster.png'}
            />
            <h3 id = "image-title">Instructions</h3>
            <p id = "giide-p">In order to actually have people interact with my installation, I created two infographics, which were placed on both ends of the installation. The QR code placed at the bottom will take the viewer to my web application.</p>
          </div>

          <div className = "first-image">
            <iframe src="https://player.vimeo.com/video/310238041" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <h3 id = "image-title">In Action</h3>
            <p id = "giide-p">First person POV of the interaction behind the installation.</p>
          </div>


        </div>
      </div>
    );
}}

export default ARPoetry;
