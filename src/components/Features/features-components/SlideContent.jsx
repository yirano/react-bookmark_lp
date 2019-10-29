import React, { Component } from 'react';

export class SlideContent extends Component {
	render() {
		return (
			<div>
				{this.props.content.map(({ subtitle, id, display }) => {
					return (
						<div key={id} style={{ display }}>
							<h3>{subtitle}</h3>
						</div>
					);
				})}
			</div>
		);
	}
}

export default SlideContent;
