import React, { Component } from 'react';

export class SlideContent extends Component {
	render() {
		return (
			<div className="slideContainer">
				{this.props.content.map(({ subtitle, id, caption, src, show }) => {
					return (
						<div className="slideContent" key={id} style={{ display: show ? 'inherit' : 'none' }}>
							<div className="slideImg">
								<div className="purpleBox" />
								<img src={src} alt="features" />
							</div>
							<div className="slideWordWrap">
								<h3 className="sectionHeader">{subtitle}</h3>
								<p className="caption">{caption}</p>
								<button>More Info</button>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default SlideContent;
