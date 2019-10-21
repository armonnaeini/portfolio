import React, { Component } from 'react';
import './Giide.css';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import '../../hover/hover.css';



class Giide extends Component {
  render() {
    return(

      <div className = "giide-wrapper">

      <div className = "total-container">

        <div className = "first-image">
          <a href="https://www.giides.com/" target="_blank">
          <div className = "overlay-container">
            <ImageFadeIn width={0}  src={"assets/giide-home.png"}  id = "work-image"/>
            <div class="overlay">
              <a href="https://www.giides.com/" target="_blank" class="link-button" id = "link">look!</a>
            </div>


          </div>
            </a>
          <h3 id = "image-title">Giide Website UX Design/Development</h3>
          <p id = "giide-p">Redesigned multiple sections of Giide’s website as well as designing and implementing new UX features. All development for the site was done through ReactJS.</p>
        </div>


        <div className = "first-image">

          <ModalImage
            small={'assets/test-g.png'}
            id = "work-image2"
            large={'assets/test-g.png'}
            className = "hvr-float"
          />

          <h3 id = "image-title">Analytic Dashboard UX Design</h3>
          <p id = "giide-p">Designed UX/UI for Giide's analytic dashboard feature. </p>
        </div>

        <div className = "first-image">
          <ModalImage
            small={'assets/hand-image.png'}
            id = "work-image2"
            large={'assets/hand-image.png'}
            className = "hvr-float"
          />
          <h3 id = "image-title">About Page UX Design</h3>
          <p id = "giide-p">A redesign & revamp of the about section from Giide’s website. Sadly, I only got through about 50% of the implementation, before I had to return to school.</p>
        </div>

        <div className = "first-image">
        <ModalImage
          small={'assets/social.png'}
          id = "work-image2"
          large={'assets/social.png'}
          className = "hvr-float"
        />
          <h3 id = "image-title">Social Design</h3>
          <p id = "giide-p">Designed all assets for Giide's social media: Facebook, Instagram, LinkedIn, Twitter.</p>
        </div>

        <div className = "first-image">
        <ModalImage
          small={'assets/screens.png'}
          id = "work-image2"
          large={'assets/screens.png'}
          className = "hvr-float"
        />
          <h3 id = "image-title">App Store Screens</h3>
          <p id = "giide-p">Redesigned some existing screens to be ready and fit for the Google Play & App Store. Designs were done in Sketch.</p>
        </div>

        <div className = "testtest">

        </div>
      </div>
      </div>
    );


  }
}

export default Giide;
