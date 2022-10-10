import React from 'react'



const STYLES = [
	'btn--primary'
	'btn--outline'
	]
const SIZES = [
	'btn--medium'
	'btn--large'
	]


export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

	return (
		<button className={`btn ${checkButtonStyle} $checkButtonSize`} onClick={onClick} type={type})>
			{children}
		</button>
	)
}

// const MenuItems = {
// 	{title: 'Home',
// 	 url}
// }

// class NavBar extends React.component {
// 	render() {
// 		return(
// 			<nav className="NavBarItems">
// 				<h1 className="navbar-logo">
// 					React
// 				</h1>
// 				<div className='menu-icon'>
// 				</div>
// 				<ul>
// 					<li><a href=""></a></li>
// 				</ul>
// 			</nav>)
// 	}
// }