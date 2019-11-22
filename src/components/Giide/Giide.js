import React, { Component } from 'react';
import './Giide.css';
import ImageFadeIn from 'react-image-fade-in'
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";
import Work from '../../components/Work';


import { withRouter } from 'react-router'

import ModalImage from "react-modal-image";
import '../../hover/hover.css';



class Giide extends Component {

  render() {

    return(

      <div className = "giide-wrapper">


      <div className = "flex-container">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>

          <div className = "work-head-container-2">
            <h3 id = "work-header">Giide</h3>
            <h4 id = "work-sub-header">A selection of my designs wand projects I worked on, during my time at Giide. All work was designed
            and prototyped in Sketch, InVision Studio, and Adobe XD, and was developed using ReactJS and React Native.</h4>
          </div>

          <div className = "total-container">
            <div className = "first-image">

              <a href="https://www.giides.com/" target="_blank">
                <div className = "overlay-container  hvr-grow" >

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/new-giide.png"} className = "image-ov" id = "work-image"/>
                  </div>

                  <div className="overlay">
                    <a  href="https://www.giides.com/" class="link-button" id = "link">
                      <h5 id = "overlay-header">Web UX Design & Development</h5>
                      <p id = "overlay-p">I designed various features, sections, and interactions of Giide's website and
                      then implemented those designs in ReactJS.</p>
                    </a>
                  </div>

                </div>
              </a>


              <div className = "new-test">
              <a href="assets/test-g.png" target="_blank">
                <div className = "overlay-container hvr-grow">

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/test-g.png"} className = "image-ov" id = "work-image"/>
                  </div>

                  <div className="overlay">
                    <a  href="assets/test-g.png" class="link-button" id = "link">
                      <h5 id = "overlay-header">Analytics Dashboard Design</h5>
                    </a>
                  </div>

                </div>
              </a>
              </div>


              <div className = "new-test">
              <a href="assets/hand-image.png" target="_blank">
                <div className = "overlay-container hvr-grow">

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/hand-image.png"} className = "image-ov" id = "work-image"/>
                  </div>

                  <div className="overlay">
                    <a  href="assets/hand-image.png" class="link-button" id = "link">
                      <h5 id = "overlay-header">Product Page Design</h5>
                    </a>
                  </div>

                </div>
              </a>
              </div>

              <div className = "new-test">
              <a href="assets/social.png" target="_blank">
                <div className = "overlay-container hvr-grow">

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/social.png"} className = "image-ov" id = "work-image"/>
                  </div>

                  <div className="overlay">
                    <a  href="assets/social.png" class="link-button" id = "link">
                      <h5 id = "overlay-header">Social Media Assets</h5>
                    </a>
                  </div>

                </div>
              </a>
              </div>

              <div className = "new-test">
              <a href="assets/screens.png" target="_blank">
                <div className = "overlay-container hvr-grow">

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/screens.png"} className = "image-ov" id = "work-image"/>
                  </div>

                  <div className="overlay">
                    <a  href="assets/screens.png" class="link-button" id = "link">
                      <h5 id = "overlay-header">App Store Product Screen Design</h5>
                    </a>
                  </div>

                </div>
              </a>
              </div>





              </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Giide;
