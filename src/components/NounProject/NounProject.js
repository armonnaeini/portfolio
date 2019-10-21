import React, { Component } from 'react';
import './NounProject.css';
import ImageFadeIn from 'react-image-fade-in'

import ModalImage from "react-modal-image";
import '../../hover/hover.css';



class NounProject extends Component {
  render() {
    return(

      <div className = "giide-wrapper">

      <div className = "total-container">

      <div className = "first-image">
        <h2 id = "openHeader">I made icons for Noun Project.</h2>
        <p id = "openP">Take a peek at my set of technology icons I designed and released to Noun Project. All icons are free to use, just don't forget to attribute me!</p>
      </div>


        <div className = "first-image">
          <ModalImage
            small={'assets/sheet.png'}
            id = "work-image2"
            large={'assets/sheet.png'}
            className = "hvr-float"
          />
        </div>


      </div>
      </div>
    );


  }
}

export default NounProject;
