import React from 'react';
import '../Features.styles.css';

export default function SlideButtons(props) {
	return (
		<div className="slide-link-wrapper">
			{props.item.map(({ title, id, show }) => {
				return (
					<button
						key={id}
						onClick={() => {
							props.onClick(id);
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
