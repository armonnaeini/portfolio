import React, { Component } from 'react';
import './NounProject.css';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";

import '../../hover/hover.css';



class NounProject extends Component {
  render() {
    return(

      <div className = "giide-wrapper">


      <div className = "flex-container">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>

          <div className = "work-head-container-2">
            <h3 id = "work-header">Icons for Noun Project</h3>
            <h4 id = "work-sub-header">Technology icon set I designed for Noun Project.</h4>
          </div>

          <div className = "total-container">
            <div className = "first-image">

              <a href="assets/sheet.png" target="_blank">
                <div className = "overlay-container  hvr-grow" >

                  <div className = "new">
                    <ImageFadeIn width={0} src={"assets/sheet.png"} className = "image-ov" id = "work-image"/>
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

export default NounProject;
