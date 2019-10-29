import React from 'react';
import '../Features.styles.css';
import { getBOMEncoding } from 'whatwg-encoding';

class SlideButtons extends React.Component {
	render() {
		return (
			<div>
				{this.props.item.map(({ title, id }) => {
					return <button key={id}>{title}</button>;
				})}
			</div>
		);
	}
}

export default SlideButtons;
