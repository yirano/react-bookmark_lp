import React from 'react';
import '../Features.styles.css';

class SlideButtons extends React.Component {
	render() {
		return (
			<div>
				{this.props.item.map(({ title, id }) => {
					return (
						<button key={id} onClick={() => id}>
							{title}
						</button>
					);
				})}
			</div>
		);
	}
}

export default SlideButtons;
