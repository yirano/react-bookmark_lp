import React from 'react';

class SlideButtons extends React.Component {
	render() {
		return (
			<div>
				<button>{this.props.title}</button>
			</div>
		);
	}
}

export default SlideButtons;
