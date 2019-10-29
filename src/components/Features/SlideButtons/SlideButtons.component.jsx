import React from 'react';

class SlideButtons extends React.Component {
	render() {
		return (
			<div>
				<button>{this.props.items[1].title}</button>
			</div>
		);
	}
}

export default SlideButtons;
