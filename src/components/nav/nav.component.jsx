import React from 'react';

function Nav() {
	return (
		<div className="navContainer">
			<div className="headerLogo">
				<img src="../../images/logo-bookmark.svg" />
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
