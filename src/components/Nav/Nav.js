import React, { Component } from 'react';
import './Nav.css';
import { NavLink, Switch} from 'react-router-dom';
import About from '../../components/About';
import Home from '../../components/Home';
// import Contact from '../../components/Contact';
import Work from '../../components/Work';
import Modal from 'react-modal';
import './hamburgers.css';
import '../../hover/hover.css';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      active: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleClassOpenModal = this.toggleClassOpenModal.bind(this);
  }

  openModal() {
  }

  afterOpenModal() {
  }

  closeModal() {
   this.setState({modalIsOpen: false});
  }

  toggleClassOpenModal() {
    const currentState = this.state.active;
    // this.setState({ active: !currentState });
    console.log("toggled");
    this.setState({modalIsOpen: true});

  }


//first when browser gets small, hide navA
//second render hamburger
//third when hamburger is clicked, display navB
//use react-modal

  render() {

    return(

      <div className = "nav-wrapper">


      <button className= { this.state.active ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse" } type="button" onClick={this.toggleClassOpenModal} >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>


      <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
         contentLabel="Example Modal"
         className="Modal"
         overlayClassName="Overlay"
         disableAutoFocus={true}
         ariaHideApp={false}
       >


        <nav className = "small-nav">
          <ul className='menu-small'>
            <NavLink className = "aa" to='/' exact onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">HOME</span></NavLink>
            <NavLink className = "aa" to='/about' onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">ABOUT</span></NavLink>
            <NavLink className = "aa" to='/work' onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">WORK</span></NavLink>
            <NavLink className = "aa" to='/contact' onClick = {this.closeModal} activeStyle={{fontWeight: "900"}}><span id = "small-link">CONTACT</span></NavLink>
          </ul>
        </nav>

        <button className = "close-button" onClick = {this.closeModal}>close</button>
       </Modal>

      <nav className = "large-nav">

      <div className = "icon-container">
        <img src = "assets/o-min.png" className = "nav-icon" ref = "asdf"/>
      </div>
        <ul className='menu'>
          <li><NavLink to='/' exact className="hvr-underline-from-left" activeStyle={{fontWeight: "bold"}} >Home</NavLink></li>
          <li><NavLink to='/about' className="hvr-underline-from-left" activeStyle={{fontWeight: "bold"}} >About</NavLink></li>
          <li><NavLink to='/work' className="hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Work</NavLink></li>
          <li><NavLink to='/contact' className="hvr-underline-from-left" activeStyle={{fontWeight: "bold"}}>Contact</NavLink></li>
        </ul>
      </nav>


      </div>


    );


  }
}

export default Nav;
