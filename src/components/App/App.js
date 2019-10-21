import React from 'react';
import './App.css';
import About from '../../components/About';
import Home from '../../components/Home';
import Contact from '../../components/Contact';
import Work from '../../components/Work';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink, Switch, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Button';
import Nav from '../../components/Nav';
import {Helmet} from "react-helmet";
import { HashRouter } from 'react-router-dom'





function App() {

  return (

      <div className="App">
        <Helmet>
           <title>{ "Armon's World" }</title>
         </Helmet>
        <Navigation />
        <RouteComponent />
      </div>

  );
}

const Navigation = () => (



  <div className = "navContainer">
      <Nav/>
  </div>

);

const RouteComponent = () => (
      <Switch>


          <Route  path ="/about" component = {About} />

          <Route exact path="/work" render={()=> {
            return <Work />
          }} />
          <Route exact path="/contact" render={()=> {
              return <Contact />
          }} />
          <Route exact path ="/" render={()=> {
              return <Home />
          }} />

      </Switch>
  );

export default App;
