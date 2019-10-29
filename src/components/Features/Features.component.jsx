import React from 'react';
import './Features.styles.css';
import SlideButtons from './SlideButtons/SlideButtons.component';

class Features extends React.Component {
	constructor() {
		super();
		this.state = {
			slides: [
				{
					id: 1,
					title: 'Simple Bookmarking',
					subtitle: 'Bookmark in one click',
					caption:
						'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
				},
				{
					id: 2,
					title: 'Speedy Searching',
					subtitle: 'Intelligent Search',
					caption:
						'Our Powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
				},
				{
					id: 3,
					title: 'Easy Sharing',
					subtitle: 'Share Your Bookmarks',
					caption:
						'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
				}
			]
		};
	}
	render() {
		return (
			<div className="section-2 section">
				<div className="sectionTwoHeader">
					<h3 className="sectionHeader">Features</h3>
					<p className="caption">
						Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks
						sync between your devices so you can access them on the go.
					</p>
				</div>

				<div className="slide-link-wrapper" />
			</div>
		);
	}
}

export default Features;
