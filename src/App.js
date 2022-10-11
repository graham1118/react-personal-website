import './App.css';
import Navbar from "./Navbar.js"
import {init} from 'ityped'
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class Hello extends React.Component {
  componentDidMount() {
    const myElement = document.querySelector(".ityped");
    init(myElement, {
      showCursor: false,
      typeSpeed: 150,
      backSpeed: 80,
      startDelay: 100,
      backDelay: 1000,
      strings: ["developer", "pianist", "engineer", "pilot", "entrepreneur"]
    });
  }
  render() {
    return <div className="ityped"></div>;
  }
}


class MyCarousel extends React.Component { 
    render() {
        const imgstyle = {height: "500px", width: "auto"};
        return (
            <Carousel stopOnHover={false} autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false} showIndicator={false} showThumbs={false} centerMode={true} centerSlidePercentage={100}>
                <div>
                    <img alt="piano" src={require("./piano.png")} style={imgstyle}/>
                </div>
                <div>
                    <img alt="plane" src={require("./plane.jpg")} style={imgstyle}/>
                </div>
                <div>
                    <img alt="switzerland" src={require("./switz.jpg")} style={imgstyle}/>
                </div>
            </Carousel>
        );
    }
};

export default function App() { //only expressions, functions, or classes are allowed with default
  return(
    <div className='App'>
      <div className="home">
        <div className="intro">
          <h1 className="Graham"> I'm Graham, the</h1>
        </div>
        <div className="intro"><Hello/></div>

        <div className="navbar">
          <h className="madeBy">Built in React by Graham Shunk</h>
          <Navbar />
        </div>
        
        <img className="rocket" alt="rocket at night" src={require("./rocket.png")}/>
        
        <h1 className="quote">
            A Capacity for Adaptation is the Greater part of Sanity
        </h1>
        <div className="black"></div>
      </div>
      <div className="gradient"></div>
      <div className="text">
        <p className="text1">The only reason I've managed to stay sane all these years is by adapting to whatever life throws at me.
        After transitioning through 7 schools as growing up, change became the only constant in my life, and looking back I value this. 
        It means that I am not only good at one thing - I've explored a wide range of experiences, leading me to learn what I do and don't love.
        I've worked as an independent developer, researcher, and ML consultant, but what matters is my ability to adapt 
        to whatever role I am placed in. Working as a programmer is the next experience I want to explore!</p>

        <h2 className="text2">I'm a jack of all trades yet a specialist. <i>Everything</i> I do is about space</h2>
        <div className="list-container">
          <div className="list-child">
            <div className="list-titles">
              <ul style={{listStyle: "none"}}>
                <li className="listyle1">Developer</li>
                <li className="listyle1">Engineer</li>
                <li className="listyle1">Consultant</li>
                <li className="listyle1">Pilot</li>
                <li className="listyle1">Pianist</li>
              </ul>
            </div>
          </div>
          <div className='icons'>
              <img className="icon" alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <img className="icon" alt="c" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
              <img className="icon" alt="cplus" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
              <img className="icon" alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img className="icon" alt="aws" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <img className="icon" alt="matlab" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" />
              <img className="icon" alt="aws" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
            </div>
          <div className="list-child">
            <div className="list-descriptions">
              <ul style={{listStyle: "none"}}>
                <li className="listyle2">As a natural problem solver and puzzler, I am passionate about coding. <br/>I just started working at a computational plasma physics lab at my <br/>university, expanding my programmatic repotoire.</li>
                <li className="listyle2">From Legos to high powered rocketry and everything in between, <br/>my 1st core passion is building. My end goal is to build technologies that <br/>help humans get to Mars, and I've a particular interest in propulsion.</li>
                <li className="listyle2">Understanding how businesses work gives me the know-how start my own. <br/>This summer, I learned the ropes at AI & Robotics Estonia, <br/>an ML consulting firm.</li>
                <li className="listyle2">Adventure and exploration is my 2nd core passion, and scraping the <br/>atmosphere is a good bit on the way to becoming an astronaut. <br/>I started flying with the Civil Air Patrol as an emergency rescue pilot in 2020.</li>
                <li className="listyle2">Someone's got to provide entertainment on Mars! I've been playing <br/>Chopin etudes and Rachmanninof convertos for 18 years, and although this <br/>may not seem to fit with the rest of my skills, piano is core to who I am.</li>
              </ul>
            </div>
          </div>
        </div>
        <MyCarousel/>
      </div>
      
      <div className="bottom">
        <center>
          <div className="contact" >
            <h1 className="contactText">Reach out!</h1>
            <h2 className="email">graham18@stanford.edu</h2>
            <h2 className="phone">(919) 667 3120</h2>
          </div>
        </center>
        <center>
          <div className="adblock">
            <h className="adTitle">Didn't think I could get an ad in here, did you?</h>
            <img className="ad" alt="advertisement" src={require("./Ad-shot.png")} onClick="changeImage()"/>
          </div>
        </center>  
      </div>
    </div>
    );
}


