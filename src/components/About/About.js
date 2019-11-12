import React, { Component } from 'react';
import logo from '../../logo.svg';
import './About.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../hover/hover.css';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import posed, { PoseGroup } from 'react-pose';


import * as THREE from 'three';
var radius = 10, theta = 0;


class ThreeScene extends Component{

  componentDidMount(){

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.9, 100)
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#1F1E20')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    const geometry = new THREE.SphereGeometry(.3,100,100, 50)

    //shader
    var material = new THREE.ShaderMaterial({
      uniforms: {
        color1: {
          value: new THREE.Color(0x8a2dd7)
        },
        color2: {
          value: new THREE.Color( 0xf07121 )
        }
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1); //glPosition 
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(mix(color1, color2, vUv.x), 1); //this is the output
        }
      `,
      wireframe: false
    });

    for ( var i = 0; i < 2000; i ++ ) {
					var object = new THREE.Mesh( geometry,material )
					object.position.x = (Math.random())*250-100;
					object.position.y = (Math.random())*250-100;
					object.position.z = (Math.random())*250-100;
					object.rotation.x = Math.random() * 2 * Math.PI;
					object.rotation.y = Math.random() * 2 * Math.PI;
					object.rotation.z = Math.random() * 2 * Math.PI;
					object.scale.x = Math.random() + 30;
					object.scale.y = Math.random() + 40;
					object.scale.z = Math.random() + 12;
					this.scene.add( object );
				}

    var raycaster = new THREE.Raycaster();
    this.cube = new THREE.Mesh(geometry, material)

    this.start()
  }

  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }



  animate = (event) => {

    var time = Date.now() * 0.0006;
		this.camera.position.x = radius + Math.cos(time);
    this.camera.position.y = radius + Math.sin(time);


		this.camera.lookAt( this.scene.position );

    // this.cube.position.x += Math.random() * 2 - 1

     this.frameId = window.requestAnimationFrame(this.animate)
     this.renderScene()

  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render(){
    return(
      <div className = "three-container"
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}


class About extends Component {

  constructor() {
    super();
    this.state = {
      isHidden: true,
      isToggleOn: true
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(){
    this.setState({
          isHidden: !this.state.isHidden,
          isToggleOn: !this.state.isToggleOn
    })
  }

  render() {
    return(

      <div className = "about-wrapper">


          {this.state.isHidden && <Bio key = "test2"/>}
          {!this.state.isHidden && <Skill key = "test2"/>}




          <div className = "profile-img-container">
          <img id = "profile-img-2" src={"assets/profile.png"}/>

            <div className="middle">
              <h2 id = "bio-header-sub">Design*</h2>
              <p id = "bio-paragraph-2">Photoshop, Illustrator, Premiere, Lightroom, After Effects, Adobe XD, Sketch,
              InVision, Figma, Framer, Blender, AutoDesk</p>
              <h2 id = "bio-header-sub">Development/></h2>
              <p id = "bio-paragraph-2">HTML, CSS, JS, ReactJS, React Native, C++, openFrameworks, openGL/GLSL, WebGL, C#, Unity3D, Processing, NodeJS,
              AWS, Git, Python </p>
            </div>
            <ThreeScene/>
            <h2 id = "hover-header">mouse over for my skillset</h2>

          </div>

        {
          /*
          <div className = "image-container-2">
              <img id = "me-img-2" src={"assets/color_me.png"}/>
          </div>

          <div className = "right-side">

            <ReactCSSTransitionGroup
               transitionName="fade"
               transitionEnterTimeout={1000}
               transitionLeaveTimeout={1000}
            >
              {!this.state.isHidden && <Child />}
            </ReactCSSTransitionGroup>

            <ReactCSSTransitionGroup
               transitionName="fade"
               transitionEnterTimeout={1000}
               transitionLeaveTimeout={1000}
            >
              {this.state.isHidden && <Child2 />}
            </ReactCSSTransitionGroup>


          </div>
          */
        }

        {
          /*
            <div className = "button-container">
                <button className = "switch-button hvr-underline-from-left" onClick={this.toggleHidden.bind(this)}> {this.state.isToggleOn ? 'skill' : 'bio'}</button>
              </div>
          */
        }
        </div>

    );
  }
}


const Bio = () =>(

  <div className = "bio-container" key = "asdftest">
    <h1 id = "bio-header">
      A multimedia designer and developer.
    </h1>
    <p id = "bio-paragraph">
      Hi. My name is Armon Naeini, welcome to my digital dream/portfolio. I am a creative technologist
      based in Boulder, Colorado focusing on UX design and development for web, mobile and augmented/virtual
      reality technologies.
      <br></br><br></br>
      I live right in the sweet spot between art and technology, where I am able to produce solutions
      and experiences with the perspective of both an artist and engineer. From interactive installations
      to web applications, I live and die for creating digital content across a variety of media.
    </p>

  </div>


)

class Skill extends Component{

    render(){
      return(

        <div className = "bio-container">
        <h1 id = "bio-header">
          My skill set.
        </h1>
          <h2 id = "bio-header-sub">Design</h2>
          <p id = "bio-paragraph">Photoshop, Illustrator, Premiere, Lightroom, After Effects, Adobe XD, Sketch,
          InVision, Figma, Framer, Blender, AutoDesk</p>
          <h2 id = "bio-header-sub">Development</h2>
          <p id = "bio-paragraph">HTML, CSS, JS, ReactJS, React Native, C++, openFrameworks, openGL/GLSL, WebGL, C#, Unity3D, Processing, NodeJS, AWS, Git, Python </p>
        </div>


      )
    }
  }






export default About;
