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
          <h2 id = "openHeader">::body</h2>
          <p id = "openP">::body is an interactive installation currently running (october 17-27th, 2019), in the Roser ATLAS Building of the University of Colorado Boulder.

        </p>
        </div>

        <div className = "first-image">
        <iframe src="https://player.vimeo.com/video/365377091" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

          <h2 id = "openHeader">::body</h2>
          <p id = "openP">My final iteration. Made with c++, openFrameworks, and a Kinect v1.</p>
        </div>

        <div className = "first-image">
          <iframe src="https://player.vimeo.com/video/362384829" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <h3 id = "image-title">Space & Time</h3>
          <p id = "giide-p">The most recent iteration of ::body. As seen in the video, the user is standing in front of the Kinect camera, which is programmed to only pick up their hands. Based on the movement and speed of the hands, the visualization of the user's hands and environment will fluctuate.</p>
        </div>

        <div className = "first-image">
          <iframe src="https://player.vimeo.com/video/358537670" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <h3 id = "image-title">Ghost</h3>
          <p id = "giide-p">A previous state of ::body. The video above shows me, dancing in front of a Kinect Camera. Using, openFrameworks, I then augment the contour of the body which ceates a ghost-like image of the user.</p>
        </div>

          <div className = "first-image">
          <iframe src="https://player.vimeo.com/video/354033633" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


            <h3 id = "image-title">Blobby</h3>
            <p id = "giide-p">The first iteration of ::body. Achieving the augmented effects, shown above, was an extreme accomplishment for myself, as I was able to take the data the human's body, coming from the Kinect, and then illustrate it using various methodoologies and functions provided by openFramework's vast set of tools.</p>
          </div>

          <div className = "first-image">
            <iframe src="https://player.vimeo.com/video/331350332" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <h3 id = "image-title">Perspective</h3>
            <p id = "giide-p">Using openFrameworks and the Xbox 360's Kinect camera, I generated a point-cloud mesh of my self. I then use an "easycam", one of openFrameworks' features, to play with the persepctive/POV of the application.</p>
          </div>

          <div className = "first-image">
            <iframe src="https://player.vimeo.com/video/359086911" className = "work-imaget" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <h3 id = "image-title">Point Cloud Spin</h3>
            <p id = "giide-p">I took an image of my face and generated a 3d, point cloud representation of myself, using OpenFrameworks</p>
          </div>


          <div className = "first-image">
            <ModalImage
              small={'assets/portrait.png'}
              id = "work-image2"
              large={'assets/portrait.png'}
            />
            <h3 id = "image-title">Point Cloud Portrait v2</h3>
            <p id = "giide-p">3 dimensional point cloud object generated from a 2 dimensional image of myself. Achieved using OpenFrameworks.</p>
          </div>



        </div>
      </div>
    );


  }
}

export default OpenFrameworks;
