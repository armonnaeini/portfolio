import React, { Component } from 'react';
import './DigitalArt.css';
import ImageFadeIn from 'react-image-fade-in'
import ModalImage from "react-modal-image";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter, withRouter} from "react-router-dom";








class DigitalArt extends Component {
  constructor() {
    super();
    this.state = {
      showList: true
    };
  }
  render() {
    return(

      <div className = "giide-wrapper">


      <div className = "flex-container">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>

      <div className = "new-header-c">
        <h3 id = "new-header">Typographic Design</h3>
        <h4 id = "new-sub-header">I'm also obsessed with typography.</h4>
      </div>


          <div className = "total-container">

          <div className = "first-image">
            <a href="assets/digital_art/bored.png" target="_blank">
              <div className = "overlay-container" >
                <div className = "new">
                  <ImageFadeIn width={0} src={"assets/digital_art/bored.png"} className = "image-ov" id = "work-image"/>
                </div>
                </div>
              </a>
            </div>
          <div className = "first-image">
            <a href="assets/asdf.png" target="_blank">
              <div className = "overlay-container   " >
                <div className = "new">
                  <ImageFadeIn width={0} src={"assets/asdf.png"} className = "image-ov" id = "work-image"/>
                </div>
                </div>
              </a>
            </div>

              <div className = "first-image">
                <a href="assets/digital_art/emo1.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/emo1.png"} className = "image-ov" id = "work-image"/>
                    </div>
                    </div>
                  </a>
                </div>


              <div className = "first-image">
                <a href="assets/digital_art/emo2.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/emo2.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/fedup1.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/fedup1.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/fedup2.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/fedup2.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/listen.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/listen.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/loser1.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/loser1.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/loser2.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/loser2.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/asdf.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/asdf.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/excuse_me.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/excuse_me.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/lyt1.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/lyt1.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/lyt2.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/lyt2.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>

              <div className = "first-image">
                <a href="assets/digital_art/monday.png" target="_blank">
                  <div className = "overlay-container   " >
                    <div className = "new">
                      <ImageFadeIn width={0} src={"assets/digital_art/monday.png"} className = "image-ov" id = "work-image"/>
                    </div>
                  </div>
                </a>
              </div>


          </div>
        </div>

      </div>





    );
}}

export default DigitalArt;
