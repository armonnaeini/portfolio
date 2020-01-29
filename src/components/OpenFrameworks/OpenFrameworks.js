import React, { Component } from 'react';
import './OpenFrameworks.css';
import ImageFadeIn from 'react-image-fade-in'
import ModalImage from "react-modal-image";
import ReactPlayer from 'react-player'
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

      <div className = "body-wrapper">

        <div className = "body-inner-wrapper">

          <div className = "body-video-container">
            <ReactPlayer
            id = "react-player"
              className='react-player'
              url='https://player.vimeo.com/video/380535086'
              playing
              controls="true"
              width="70%"
              height="70%"
            />
          </div>

          <div className = "body-blurb-container">
            <div className = "body-blurb-left">
              <h2 id = "body-title">Body</h2>
              <h3 id = "body-sub-title">\ ˈbä-dē  \</h3>
            </div>

            <div className = "body-blurb-right">
              <p id = "body-paragraph">Body is an interactive, motion tracking project I developed in openFrameworks,
              a C++ creative toolkit. The project utilizes an Xbox 360’s Kinect V1 camera for depth-sensing information
              as well as the open sourced toolkit Computer Vision, and can be set up as an installation. Body tracks the
              subject’s movements, and displays a silhouette of the body on either a digital display or projection. As
              the subject moves around the project space, a trail of their silhouette is left behind, all shown real
              time on the display.<br></br><br></br>Body was comissioned to be set up as an interactive installation
              for the University of Colorado Boulder’s Open Access Week. The installation ran for three weeks in the
              Roser ATLAS Building during the month of October 2019. Now, Body is currently running at Wonder Wonder.
              </p>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
export default OpenFrameworks;
