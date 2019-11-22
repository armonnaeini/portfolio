import React, { Component } from 'react';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import { Player, ControlBar, Shortcut} from 'video-react';
import Vimeo from '@u-wave/react-vimeo';
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";



function ApexEx() {
  return (

    <div className = "giide-wrapper">


    <div className = "flex-container">
    <div className = "return-container">
      <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
    </div>

        <div className = "work-head-container-2">
          <h3 id = "work-header">ApexEx</h3>
          <h4 id = "work-sub-header">UX design and development work I did for ApexEx.</h4>
        </div>

        <div className = "total-container">
          <div className = "first-image">

            <a href="https://www.apexex.com/" target="_blank">
              <div className = "overlay-container  hvr-grow" >

                <div className = "new">
                  <ImageFadeIn width={0} src={"assets/apexex.png"} className = "image-ov" id = "work-image"/>
                </div>


              </div>
            </a>
            </div>

        </div>
      </div>
    </div>
  );
}

export default ApexEx;
