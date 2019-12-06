import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter, withRouter} from "react-router-dom";
import { MemoryRouter } from 'react-router'

import Giide from '../../components/Giide';
import Websites from '../../components/Websites';
import OpenFrameworks from '../../components/OpenFrameworks';
import ARPoetry from '../../components/ARPoetry';
import DigitalArt from '../../components/DigitalArt';
import NounProject from '../../components/NounProject';
import Knotbots from '../../components/Knotbots';
import ApexEx from '../../components/Knotbots';
import IBM from '../../components/IBM';


import './Work.css';
import '../../hover/hover.css';
import { HashRouter } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});




// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/Body",
    component: OpenFrameworks
  },
  {
    path: "/IBM",
    component: IBM
  },
  {
    path: "/Giide",
    main: () => <Giide />,
    exact: true

  },
  {
    path: "/Websites",
    main: () => <Websites />
  },
  {
    path: "/OpenFrameworks",
    main: () => <OpenFrameworks />
  },
  {
    path: "/ARPoetry",
    main: () => <ARPoetry />
  },
  {
      path: "/DigitalArt",
      main: () => <DigitalArt />
  },
  {
      path: "/NounProject",
      main: () => <NounProject />
  },
  {
        path: "/iOS",
        main: () => <iOS />
    }
];



function Work() {
  return (



      <div className = "left-container">

          <div className = "work-head-container">
            <h3 id = "work-header">My favorite projects.</h3>
          </div>
          <div className = "route-box">
            <ul>
              <li>
                <NavLink to="iOS" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>iOS</NavLink>
              </li>
              <li>
                <NavLink to="Body" exact={true} className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Body</NavLink>
              </li>
              <li>
                <NavLink to="ibm" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>IBM</NavLink>
              </li>
              <li>
                <NavLink to="Giide" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Giide</NavLink>
              </li>

              <li>
                <NavLink to="Knotbots" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Knotbots</NavLink>
              </li>
              <li>
                <NavLink to="ApexEx" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>ApexEx</NavLink>
              </li>
              <li>
                <NavLink to="NounProject" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Noun Project Icon Design</NavLink>
              </li>
              <li>
                <NavLink to="Consilio" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Consilio</NavLink>
              </li>
              <li>
                <NavLink to="DigitalArt" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Art</NavLink>
              </li>

            </ul>
      </div>




      </div>
  );
}



export default Work;
