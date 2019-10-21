import React, { Component } from 'react';
import './DigitalArt.css';
import ImageFadeIn from 'react-image-fade-in'
import ModalImage from "react-modal-image";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';









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
        <div className = "total-container">

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className = "first-image-animate">
            <h3 id = "image-title">Emotional</h3>
              <ModalImage
                small={"assets/digital_art/emo1.png"}
                className = "work-imagetest"
                large={"assets/digital_art/emo1.png"}
              />
              <div className = "spacer" />
              <ModalImage
                small={"assets/digital_art/emo1.png"}
                className = "work-imagetest"
                large={"assets/digital_art/emo2.png"}
              />
          </div>
        </ReactCSSTransitionGroup>






        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
        <div className = "first-image-animate">
          <h3 id = "image-title">Fed Up</h3>
            <ModalImage
              small={'assets/digital_art/fedup1.png'}
              className = "work-imagetest"
              large={'assets/digital_art/fedup1.png'}
            />
            <div className = "spacer" />
            <ModalImage
              small={'assets/digital_art/fedup2.png'}
              className = "work-imatetest"
              large={'assets/digital_art/fedup2.png'}
            />
        </div>
        </ReactCSSTransitionGroup>


        <div className = "first-image">
          <h3 id = "image-title2">Listen</h3>
            <ModalImage
              small={'assets/digital_art/listen.png'}
              className = "work-imagetest"
              large={'assets/digital_art/listen.png'}
            />
        </div>

        <div className = "first-image">
          <h3 id = "image-title2">Loser</h3>
            <ModalImage
              small={'assets/digital_art/loser1.png'}
              className = "work-imagetest"
              large={'assets/digital_art/loser1.png'}
            />
            <div className = "spacer" />
            <ModalImage
              small={'assets/digital_art/loser2.png'}
              className = "work-imagetest"
              large={'assets/digital_art/loser2.png'}
            />
        </div>

        <div className = "first-image">
          <h3 id = "image-title2">Excuse Me</h3>
            <ModalImage
              small={'assets/digital_art/excuse_me.png'}
              className = "work-imagetest"
              large={'assets/digital_art/excuse_me.png'}
            />
        </div>

        <div className = "first-image">
          <h3 id = "image-title2">Love Your Thyroid Branding</h3>
            <ModalImage
              small={'assets/digital_art/lyt1.png'}
              className = "work-imagetest"
              large={'assets/digital_art/lyt1.png'}
            />
            <div className = "spacer" />
            <ModalImage
              small={'assets/digital_art/lyt2.png'}
              className = "work-imagetest"
              large={'assets/digital_art/lyt2.png'}
            />
        </div>

        <div className = "first-image">
          <h3 id = "image-title2">Monday</h3>
            <ModalImage
              small={'assets/digital_art/monday.png'}
              className = "work-imagetest"
              large={'assets/digital_art/monday.png'}
            />
        </div>




        </div>
      </div>
    );
}}

export default DigitalArt;
