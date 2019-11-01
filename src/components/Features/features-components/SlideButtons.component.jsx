import React from 'react';
import '../Features.styles.css';

class SlideButtons extends React.Component {
	render() {
		return (
			<div className="slide-link-wrapper">
				{this.props.item.map(({ title, id, show }) => {
					return (
						<button
							key={id}
							onClick={() => {
								this.props.onClick(id);
							}}
							className={show === true ? 'currentSlide' : ''}
						>
							{title}
						</button>
					);
				})}
			</div>
		);
	}
}

export default SlideButtons;
