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

      <div className = "giide-wrapper-2">
      <div className = "return-container">
        <NavLink to="Work" exact={true} className = "return-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>return</NavLink>
      </div>
        <div className = "giide-inner-wrapper-2">

          <div className = "giide-header-container">
            <div className = "giide-left-side">
              <h1 id = "giide-header-h">Giide</h1>
              <p id = "giide-header-p">A selection of my UX projects during my time at mobile app startup,
              Giide. My duties involved user experience design and development, for both web and mobile,
              graphic design for social media, as well as Alexa Skill prototyping & AR prototyping.
              </p>
            </div>

            <div className = "giide-right-side">
              <img src="assets/dashboard-min.png" alt ="dashboard" id="giide-dashboard"/>
              <div className = "giide-dashboard-blurb">Dashboard UX Design</div>
            </div>
          </div>



          <div class="container-giide">

            <div className = "giide-screen-blurb">
              <h2 id = "giide-screen-h">Giide Mobile Screen Design</h2>
            </div>

            <div class="content-a col-1-giide">
              <img src="assets/1-min.png" id = "test-img-giide"/>
            </div>

            <div class="content2-giide col-3-giide">
              <img src="assets/2-min.png" id = "test-img-giide"/>
            </div>

            <div class="content-a col-1-a-giide">
              <img src="assets/3-min.png" id = "test-img-giide"/>
            </div>

            <div class="content2-giide col-3-a-giide">
              <img src="assets/4-min.png" id = "test-img-giide"/>
            </div>

          </div>

          <div className = "giide-header-container-low">
            <div className = "giide-left-side">
              <h1 id = "giide-header-h-low">Website UX Design & Development</h1>
              <p id = "giide-header-p">I designed multiple sections and features for Giide's website and then
              took the designs and developed them using ReactJS.
              </p>

              <a href="https://giides.com">
                <div className = "button-giide">
                  <p id = "button-giide-p">View Website</p>
                </div>
              </a>
            </div>

            <div className = "giide-right-side">
              <img src="assets/giide-website-min.png" alt ="webzite" id="giide-website"/>
            </div>


          </div>

        </div>
      </div>

    );
  }
}

export default Giide;
