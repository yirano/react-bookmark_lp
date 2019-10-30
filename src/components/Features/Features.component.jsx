import React from 'react';
import './Features.styles.css';
import SlideButtons from './features-components/SlideButtons.component';
import SlideContent from './features-components/SlideContent';
import firstTab from '../../images/illustration-features-tab-1.svg';
import secondTab from '../../images/illustration-features-tab-2.svg';
import thirdTab from '../../images/illustration-features-tab-3.svg';

class Features extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: [
				{
					id: 1,
					show: true,
					title: 'Simple Bookmarking',
					subtitle: 'Bookmark in one click',
					caption:
						'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
					src: firstTab
				},
				{
					id: 2,
					show: false,
					title: 'Speedy Searching',
					subtitle: 'Intelligent Search',
					caption:
						'Our Powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
					src: secondTab
				},
				{
					id: 3,
					show: false,
					title: 'Easy Sharing',
					subtitle: 'Share Your Bookmarks',
					caption:
						'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
					src: thirdTab
				}
			]
		};
	}

	displaySlides = (id) => {
		console.log(id);
		this.setState((prevState) => {
			prevState.slides.map((item) => {
				return (item.show = false);
			});

			return prevState.slides.map((item) => {
				return item.id === id ? (item.show = true) : false;
			});
		});
	};

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
				<div className="slide-link-wrapper">
					<SlideButtons item={this.state.slides} onClick={this.displaySlides} />
				</div>
				<SlideContent content={this.state.slides} />
			</div>
		);
	}
}

export default Features;
