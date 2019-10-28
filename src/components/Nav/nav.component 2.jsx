import React from 'react';
import './nav.styles.css';
import logo from '../../images/logo-bookmark.svg';

function Nav() {
	return (
		<div className="navContainer">
			<div className="logo">
				<img src={logo} />
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
						<a href="#" />Login
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
