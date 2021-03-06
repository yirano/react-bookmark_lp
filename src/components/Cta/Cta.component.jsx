import React from 'react';
import './Cta.styles.css';
import heroImage from '../../images/illustration-hero.svg';

export default function CallToAction() {
	return (
		<section className="section-1">
			<div className="leftContent">
				<div className="leftContentWrap">
					<h1>A Simple Bookmark Manager</h1>
					<p className="caption">
						A clean and simple interface to organize your favourite websites. Open a new browser tab and see
						your sites load instantly. Try it for free.
					</p>
					<div className="header-button-wrapper">
						<button className="purple-bg">Get it on Chrome</button>
						<button className="grey-bg">Get it on Firefox</button>
					</div>
				</div>
			</div>
			<div className="rightContent">
				<div className="purpleBox" />
				<img src={heroImage} alt="Illustration Hero" />
			</div>
		</section>
	);
}
