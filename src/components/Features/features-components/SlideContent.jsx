import React, { Component } from 'react';

export class SlideContent extends Component {
	render() {
		return (
			<div className="slideContainer">
				{this.props.content.map(({ subtitle, id, caption, src, show }) => {
					return (
						<div key={id} style={{ display: show ? 'inherit' : 'none' }}>
							<div className="slideImg">
								<img src={src} alt="features" />
							</div>
							<div className="slideWordWrap">
								<h3>{subtitle}</h3>
								<p>{caption}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default SlideContent;
