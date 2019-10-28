import React from 'react';

class Download extends React.Component {
	render() {
		return (
			<div class="section-3">
				<h3>Download the extension</h3>

				<p class="caption">
					We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like
					us to prioritize.
				</p>

				<div class="card-wrapper">
					<div class="card">
						<h4>Add to Chrome</h4>
						<p class="card-caption">Minimum version 62</p>
						<button class="purple-bg">Add &amp; Install Extension</button>
					</div>

					<div class="card">
						<h4>Add to Firefox</h4>
						<p class="card-caption">Minimum version 55</p>
						<button class="purple-bg">Add &amp; Install Extension</button>
					</div>

					<div class="card">
						<h4>Add to Opera</h4>
						<div class="card-caption">Minimum version 46</div>
						<button class="purple-bg">Add &amp; Install Extension</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Download;
