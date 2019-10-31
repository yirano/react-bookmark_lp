import React, { Component } from 'react';
import './Footer.css';
import logo from '../../images/logo-bookmark-footer.svg';
import twitter from '../../images/icon-twitter.svg';
import facebook from '../../images/icon-facebook.svg';

export class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="footerTop">
					<p className="footerCaption">35,000+ already joined</p>

					<h2 className="footerHeading">Stay up-to-date with what we’re doing</h2>

					<div>
						<form>
							<label htmlFor="email" />
							<input type="email" placeholder="Enter your email address" />
							<button className="contactUs">Contact Us</button>
						</form>
					</div>
				</div>

				<div className="footerBottom">
					<div className="footerLinks">
						<ul className="links">
							<li>
								<a href="/">
									<img src={logo} alt="Bookmark Logo" />
								</a>
							</li>
							<li>
								<a href="/">Features</a>
							</li>
							<li>
								<a href="/">Pricing</a>
							</li>
							<li>
								<a href="/">Contact</a>
							</li>
						</ul>
					</div>
					<div className="footerSocialLinks">
						<ul className="socialLinks">
							<li>
								<a href="/">
									<img src={facebook} alt="facebook icon" />
								</a>
							</li>
							<li>
								<a href="/">
									<img src={twitter} alt="twitter icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
