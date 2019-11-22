import React, { Component } from 'react';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";

import '../../hover/hover.css';



class Consilio extends Component {
  render() {
    return(

      <div className = "giide-wrapper">


      <div className = "flex-container">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>

          <div className = "work-head-container-2">
            <h3 id = "work-header">Style Guide for Consilio</h3>
            <h4 id = "work-sub-header">I was part of the UX team for mobile/web aplication Consilio. Below is the style
            guide I designed for the application.</h4>
          </div>

          <div className = "total-container">
            <div className = "first-image">

              <a href="assets/guide.png" target="_blank">
                <div className = "overlay-container  hvr-grow" >

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/guide.png"} className = "image-ov" id = "work-image"/>
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

export default Consilio;
