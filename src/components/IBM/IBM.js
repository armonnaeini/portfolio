import React, { Component } from 'react';
import './IBM.css';
import ImageFadeIn from 'react-image-fade-in'





class IBM extends Component {
  render() {
    return(
      <div className = "outer-wrapper">
      <div className = "ibm-wrapper">

        <div className = "title-container">
          <h1 id = "ibm-h1">IBM Design Challenge</h1>
          <h2 id = "ibm-h2">Hertz Mobile App Redesign</h2>

          <div class="line"></div>
        </div>


        <div className = "problem">
          <div className = "problem-child">
            <h3 id = "ibm-h3">Problem</h3>
            <p id = "ibm-p">Design a better way for a mid-career professional who occasionally travels for work to find just the right
            vehicle when using the Hertz mobile app. The challenge must be completed in about 4 hours.</p>
          </div>
        </div>


        <div className = "user-type">
        <h3 id = "ibm-h3">Initial User Type </h3>
          <ul id = "ibm-ul">
            <li id = "ibm-li">Mid-career professional</li>
            <li id = "ibm-li">Values information and control</li>
            <li id = "ibm-li">Would like to browse and fully understand all options</li>
          </ul>
        </div>

        <div className = "persona">
          <h3 id = "ibm-h3">Persona</h3>
          <ImageFadeIn width={0} src={"assets/persona.png"} className = "image-ov" id = "work-image"/>
        </div>

        <div className = "research-1">
          <h3 id = "ibm-h3">Research 1 - Competition</h3>

          <h4 id = "enterprise-h">Enterprise</h4>
          <ImageFadeIn width={0} src={"assets/enter.png"} className = "image-ov g" id = "work-image"/>

          <h4 id = "enterprise-h">Alamo</h4>
          <ImageFadeIn width={0} src={"assets/alamo.png"} className = "image-ov" id = "work-image"/>
        </div>

        <div className = "research-1">
          <h3 id = "ibm-h3">Research 2 - Current Solution</h3>

          <h4 id = "enterprise-h">Hertz</h4>
          <ImageFadeIn width={0} src={"assets/hertz.png"} className = "image-ov" id = "work-image"/>
        </div>

        <div className = "research-1">
          <h3 id = "ibm-h3">Research 3 - Synthesis</h3>

          <p id = "ibm-p">To get a better understanding of what could be improved within the experience of the Hertz mobile app,
          a simple user-flow analysis was conducted on two of its main competitors, Alamo and Enterprise.<br></br><br></br>All three
          solutions share a similar user-flow, beginning with a list of categories regarding the type of vehicle that is available to rent.
          The main category buckets consist of the size, make or level of luxury regarding the vehicle, but in a generalized manner.
          For each car category, each application also features an additional information button, which provides specifics about the general
          car selection.<br></br><br></br>Each application features an ‘Extras’ page, within the flow, that allows the user to pay an
          additional amount of money for features to be added to the car and/or service. The ‘Extras’ page seems have the least impact
          and meaning within all three experiences.</p>

          <h4 id = "enterprise-h">Pain Points</h4>
          <p id = "ibm-p">The over-generalization of the car type can be seen as problematic, as the user has a chance of being unsatisfied
          either at time of car pickup, or at some point during their trip. As observed from the audits above, each experience does not fully
          specify the kind of vehicle the user is to expect, upon time of arrival. For example, Hertz states ‘Nissan Rogue or similar’.
          <br></br><br></br>Out of the three solutions, Alamo provides the least amount of additional information, which would in turn be the
          least viable for our persona. A combination of the additional information pages between Hertz and Enterprise would be optimal. The
          filter feature for all three applications is also too bare-boned; there are so few filter options, it seems excessive to dedicate
          an entire screen to a filter page. A button could just be incorporated within the list of rentable vehicles.<br></br><br></br>From
          observation, the user’s type of trip is not necessarily considered, which can lead to selecting the wrong car. The user’s needs and
          preferences are also not considered. </p>

          <h4 id = "enterprise-h">What is considered additional information?</h4>
          <ul id = "ibm-ul">
            <li id = "ibm-li">Drive</li>
            <li id = "ibm-li">Doors</li>
            <li id = "ibm-li">Price Breakdown</li>
            <li id = "ibm-li">Accessories/Features</li>
          </ul>
          <ul id = "ibm-ul">
            <li id = "ibm-li">Payment Plans</li>
            <li id = "ibm-li">Trunk Size</li>
            <li id = "ibm-li">Total Milage </li>
            <li id = "ibm-li">Suitcases</li>
          </ul>


        </div>

        <div className = "sketches">
        <h3 id = "ibm-h3">Ideation 1 - Sketches</h3>
        <ImageFadeIn width={0} src={"assets/sketch.png"} className = "image-ov" id = "work-image"/>
        </div>

        <div className = "sketches">
        <h3 id = "ibm-h3">Ideation 2 - Wireframes</h3>
        <ImageFadeIn width={0} src={"assets/wireframe.png"} className = "image-ov" id = "work-image"/>
        </div>

        <div className = "mockup">
        <h3 id = "ibm-h3">Mockup</h3>
        <ImageFadeIn width={0} src={"assets/mockup.png"} className = "image-ov" id = "work-image"/>
        </div>

        <div className = "proto-button">

        </div>

        <div className = "conclusion">
        <h3 id = "ibm-h3">Conclusion</h3>
        <p id = "ibm-p">The high-fidelity mockups bear a central focus on the user’s type of trip. The user is to specify the reasoning for
        renting a vehicle, rental duration, and rental location which would in turn generate a list of feasible cars, that would cater to
        the user’s specific needs. The feed holds two categories, ‘Recommended’ and ‘Everything’. The ‘Recommended’ tab is composed after the
        user fills in the short, splash screen questionnaire. If the user is unsatisfied with the recommended list, they can always switch over
        to the ‘Everything’ tab and view all available options.<br></br><br></br>Each vehicle listing will have a description of why it would
        be suitable for the rental purposes, depending on trip duration, purpose and location. For every vehicle, the user can also expand the
        detail section, and learn about all of the specifics of the car, which would be the same information that would be listed for a vehicle
        purchase.<br></br><br></br>Finally, an expanded filter list (inspired from competition) is implemented, which gives the user far more
        control over the feed of rentable vehicles.</p>
        </div>







      </div>
      </div>
    );


  }
}

export default IBM;
