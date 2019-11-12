import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink , Switch, BrowserRouter, withRouter} from "react-router-dom";
import { MemoryRouter } from 'react-router'

import Giide from '../../components/Giide';
import Websites from '../../components/Websites';
import OpenFrameworks from '../../components/OpenFrameworks';
import ARPoetry from '../../components/ARPoetry';
import DigitalArt from '../../components/DigitalArt';
import NounProject from '../../components/NounProject';

import './Work.css';
import '../../hover/hover.css';
import { HashRouter } from 'react-router-dom'




// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
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
  }
];



function Work() {
  return (



      <div className = "left-container">

          <div className = "work-head-container">
            <h3 id = "work-header">My favorite projects.</h3>
          </div>

          <MemoryRouter>
          {routes.map((route, index) => (
            <Switch key={index}>
              <Route key={index} path={route.path} component={route.main}
              />
            </Switch>
          ))}
              <div className = "route-box">
                <ul>

                <li>
                  <NavLink to="/OpenFrameworks" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Body</NavLink>
                </li>
                  <li>
                    <Link to="/Giide" exact className = "work-list hvr-underline-from-left"   activeStyle={{fontWeight: "bold"}}>Giide</Link>
                  </li>


                  <li>
                    <NavLink to="/Websites" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Web Design & Dev</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ARPoetry" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>ARPoetry</NavLink>
                  </li>
                  <li>
                    <NavLink to="/NounProject" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Noun Project Icon Design</NavLink>
                  </li>
                  <li>
                    <NavLink to="/DigitalArt" className = "work-list hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Digital Art</NavLink>
                  </li>
                </ul>
              </div>


          </MemoryRouter>

      </div>
  );
}


export default Work;
