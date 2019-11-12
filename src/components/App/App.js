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
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});





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

  <Route
     render={({ location }) => (

           <PoseGroup animateOnMount={true}>
             <RouteContainer key={location.pathname}>
               <Switch location={location}>
                 <Route exact path="/" component={Home} key="home" />
                 <Route path="/about" component={About} key="about" />
                 <Route path="/work" component={Work} key="work" />
                 <Route path="/contact" component={Contact} key="contact" />


               </Switch>
             </RouteContainer>
           </PoseGroup>
     )}
   />



  );

export default App;
