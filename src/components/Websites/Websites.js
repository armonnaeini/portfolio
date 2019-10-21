import React, { Component } from 'react';
import './Websites.css';
import ImageFadeIn from 'react-image-fade-in'





class Websites extends Component {
  render() {
    return(

      <div className = "giide-wrapper">
      <div className = "total-container">

        <div className = "first-image">
          <div className = "overlay-container">
          <ImageFadeIn width={0}  src={"assets/knotbots.png"}  id = "work-image"/>

          <a href="http://armonnn.com/knotbots/" target="_blank">
            <div class="overlay">
              <a href="http://armonnn.com/knotbots/" target="_blank" class="link-button" id = "link">look!</a>
            </div>
            </a>
          </div>
          <h3 id = "image-title">Knotbots UX Design/Development</h3>
          <p id = "giide-p">Designed and developed product website for Knotbots. Sadly, it hasn't been pushed live, but you can view the to be deployed project by clicking above.</p>
      </div>

        <div className = "first-image">
          <div className = "overlay-container">
          <ImageFadeIn width={0} src={'assets/apexex.png'}  id = "work-image"/>
            <a href="https://www.apexex.com/" target="_blank">
            <div class="overlay">
              <a href="https://www.apexex.com/" target="_blank" class="link-button" id = "link">look!</a>
            </div>
            </a>
          </div>

          <h3 id = "image-title">ApexEx UX Design/Development</h3>
          <p id = "giide-p">Using Wix, I redesigned & redeveloped ApexEx's website.</p>
        </div>



      </div>
      </div>
    );


  }
}

export default Websites;
