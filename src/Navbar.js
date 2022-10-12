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
					<button className="nav"><Link className="nav" to="text" offset={100} smooth={true} duration={500}>About</Link></button>
					
					<button className="nav"><Link className="nav" to="bottom" smooth={true} offset={60} duration={500}>Email</Link></button>
					<a href="https://www.github.com/graham1118" target="_blank">
						<button className="nav" type="button">Github</button>
					</a>
					<a href="https://drive.google.com/file/d/1kNzA45lL7RDXJxJ01a6S9G0On1l2p-9R/view?usp=sharing" target="_blank">
						<button className="nav" type="button">Resume</button>
					</a>
				</ul>
			</nav>
		)
	}
}	
