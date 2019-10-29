import React, { Component } from 'react';

export class SlideContent extends Component {
	render() {
		return (
			<div>
				{this.props.content.map(({ subtitle, id, display, caption, src }) => {
					return (
						<div key={id} style={{ display }}>
							<h3>{subtitle}</h3>
							<p>{caption}</p>
							<img src={src} alt="features" />
						</div>
					);
				})}
			</div>
		);
	}
}

export default SlideContent;
