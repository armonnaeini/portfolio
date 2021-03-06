import React, { Component } from 'react';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import { Player, ControlBar, Shortcut} from 'video-react';
import Vimeo from '@u-wave/react-vimeo';
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";



function Knotbots() {
  return (

    <div className = "giide-wrapper-2">
    <div className = "return-container">
      <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
    </div>
      <div className = "giide-inner-wrapper-2">

        <div className = "giide-header-container">
          <div className = "giide-left-side">
            <h1 id = "giide-header-h">Knotbots Website</h1>
            <p id = "giide-header-p">A website I both designed and developed, using HTML, CSS, and JS, for
            chidren's shoelace device, Knotbots.

            </p>
            <a href="https://armonnn.com/knotbots/">
              <div className = "button-giide">
                <p id = "button-giide-p">View Website</p>
              </div>
            </a>
          </div>

          <div className = "giide-right-side">
            <img src="assets/knotbots.png" alt ="dashboard" id="giide-dashboard"/>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Knotbots;
