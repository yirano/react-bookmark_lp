import React from 'react';
import './Nav.styles.css';
import logo from '../../images/logo-bookmark.svg';

class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			displayMenu: false,
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
		window.addEventListener('load', () => {
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
		const hOne = document.getElementById('hOne');
		const hTwo = document.getElementById('hTwo');
		const hThree = document.getElementById('hThree');
		hOne.classList.toggle('hOneAnimate');
		hTwo.classList.toggle('hTwoAnimate');
		hThree.classList.toggle('hThreeAnimate');
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
					<div className="hOne" id="hOne" />
					<div className="hTwo" id="hTwo" />
					<div className="hThree" id="hThree" />
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
