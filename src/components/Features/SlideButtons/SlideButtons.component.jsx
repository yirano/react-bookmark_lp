import React from 'react';
import '../Features.styles.css';

class SlideButtons extends React.Component {
	render() {
		console.log(this.props.item);
		return (
			<div>
				{/* {this.props.item.map(({ id, title, subtitle, caption }) => (
					<button key={this.props.item.id}>{this.props.item.title}</button>
				))}

				<div>{this.props.item.subtitle}</div>
				<div>{this.props.item.caption}</div> */}
			</div>
		);
	}
}

export default SlideButtons;
