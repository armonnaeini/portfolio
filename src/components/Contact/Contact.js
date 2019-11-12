import React, { Component } from 'react';
import logo from '../../logo.svg';
import "./Contact.css";


class Contact extends Component {
  render() {
    return(

      <div className = "contact-container">
        <h1 className = "contactH1">Contact me</h1>
        <video autoPlay="true" muted="true" loop="true" id = "contact-video" playsInline>
          <source src={"assets/plw2.mp4"} type="video/mp4"></source>
        </video>

        <div className = "list-container">
          <ul id = "new-ul">
            <a class = "contacta" href= "https://www.instagram.com/worldwide_armon/" className="hvr-underline-from-left" target="_blank" ><li id = "contactlist">instagram</li></a>
            <br></br> <a className="hvr-underline-from-left" href= "https://www.linkedin.com/in/armonnaeini/" className="hvr-underline-from-left" target="_blank"><li id = "contactlist">linkedin</li></a>
            <br></br> <a className="hvr-underline-from-left" href= "https://github.com/armonnaeini" target="_blank"><li id = "contactlist">github</li></a>
            <br></br> <a className="hvr-underline-from-left" href= "mailto: arna0935@colorado.edu"><li id = "contactlist">email</li></a>
            <br></br> <a className="hvr-underline-from-left" href= "assets/resume.pdf" target="_blank"><li id = "contactlist">resume</li></a>
          </ul>
        </div>
      </div>


    );


  }
}

export default Contact;
