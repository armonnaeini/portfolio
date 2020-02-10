import React, { Component } from 'react';
import './PutPhoneAway.css';
import ImageFadeIn from 'react-image-fade-in'
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter} from "react-router-dom";
import Work from '../../components/Work';


import { withRouter } from 'react-router'

import ModalImage from "react-modal-image";
import '../../hover/hover.css';



class PutPhoneAway extends Component {

  render() {

    return(

      <div className = "giide-wrapper-2">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>
        <div className = "giide-inner-wrapper-2">

          <div className = "giide-header-container asdfj">
            <div className = "giide-left-side">
              <h1 id = "giide-header-h">putphoneaway</h1>
              <p id = "giide-header-p">My most recent UX design/dev project. I designed and developed the web experience for
              sticker company 'putphoneaway'. The project was designed using Adobe XD and was built using
              Shopfiy's development environment ThemeKit as well as Shopify's templating language, Liquid. All
              development was done using HTML, CSS, and JavaScript.

              </p>
              <a href="https://putphoneaway.com">
                <div className = "button-giide">
                  <p id = "button-giide-p">View Website</p>
                </div>
              </a>
            </div>

            <div className = "giide-right-side">
              <img src="assets/putphoneaway-min.png" alt ="dashboard" id="giide-dashboard"/>
            </div>
          </div>



        </div>
      </div>

    );
  }
}

export default PutPhoneAway;
