import React from 'react';
import './Nav.styles.css';
import logo from '../../images/logo-bookmark.svg';

class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			displayMenu: true,
			display: 'block'
		};
	}
	setStyle = () => {
		if (!this.state.displayMenu) {
			return {
				display: 'none'
			};
		} else {
			return {
				display: 'block'
			};
		}
	};

	componentDidMount() {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 1023) {
				this.setState((prevState) => {
					return (prevState.displayMenu = true);
				});
			} else {
				this.setState((prevState) => {
					return (prevState.displayMenu = false);
				});
			}
		});
	}

	toggleMenu = () => {
		this.setState((prevState) => {
			return (prevState.displayMenu = !prevState.displayMenu);
		});
	};
	render() {
		return (
			<div className="navContainer">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<button className="responsive-menu" onClick={this.toggleMenu}>
					<div className="hOne" />
					<div className="hTwo" />
					<div className="hThree" />
				</button>
				<nav style={this.setStyle()}>
					<ul>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
						<li>
							<a href="/">Contact</a>
						</li>
						<li>
							<a href="/">
								<button className="login">Login</button>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Nav;
