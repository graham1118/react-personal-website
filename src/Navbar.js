import React, {Component} from 'react';
//import {MenuItems} from "./MenuItems";
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";


/*<a className={item.cName} href={item.url}>
								{item.title}
								</a>*/

export default class Navbar extends Component {
	state = {clicked: false}
	handleClick = () => {
		this.setState({clicked: !this.state.clicked})
	}

	render() {
		return(
			<nav className="NavbarItems">
				<ul>
					<button className="nav"><Link className="nav" to="home" smooth={true} duration={500}>Home</Link></button>
					<button className="nav"><Link className="nav" to="text" offset={60} smooth={true} duration={500}>About Me</Link></button>
					
					<button className="nav"><Link className="nav" to="bottom" smooth={true} duration={500}>Contact</Link></button>
					<a href="https://www.github.com/graham1118">
						<button className="nav" type="button">Github</button>
					</a>
					<a href={require("./Graham_Shunk_Resume.pdf")}>
						<button className="nav" type="button">Resume</button>
					</a>
				</ul>
			</nav>
		)
	}
}	
