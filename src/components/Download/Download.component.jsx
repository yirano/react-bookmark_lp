import React from 'react';
import './Download.styles.css';
import logoChrome from '../../images/logo-chrome.svg';
import logoFirefox from '../../images/logo-firefox.svg';
import logoOpera from '../../images/logo-opera.svg';

class Download extends React.Component {
	render() {
		return (
			<div className="section-3">
				<div className="sectionHeader">
					<h3>Download the extension</h3>

					<p className="caption">
						We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d
						like us to prioritize.
					</p>
				</div>

				<div className="card-wrapper">
					<div className="cardOne">
						<img src={logoChrome} alt="Chrome Logo" />
						<h4>Add to Chrome</h4>
						<p className="card-caption">Minimum version 62</p>
						<button className="purple-bg">Add &amp; Install Extension</button>
					</div>

					<div className="cardTwo">
						<img src={logoFirefox} alt="Firefox Logo" />

						<h4>Add to Firefox</h4>
						<p className="card-caption">Minimum version 55</p>
						<button className="purple-bg">Add &amp; Install Extension</button>
					</div>

					<div className="cardThree">
						<img src={logoOpera} alt="Opera Logo" />

						<h4>Add to Opera</h4>
						<div className="card-caption">Minimum version 46</div>
						<button className="purple-bg">Add &amp; Install Extension</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Download;
