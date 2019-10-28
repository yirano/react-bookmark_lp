import React from 'react';

class CallToAction extends React.Component {
	render() {
		return (
			<div class="section-1">
				<h1>A Simple Bookmark Manager</h1>

				<p class="caption">
					A clean and simple interface to organize your favourite websites. Open a new browser tab and see
					your sites load instantly. Try it for free.
				</p>

				<div class="header-button-wrapper">
					<button class="purple-bg">Get it on Chrome</button>
					<button class="grey-bg">Get it on Firefox</button>
				</div>
			</div>
		);
	}
}

export default CallToAction;
