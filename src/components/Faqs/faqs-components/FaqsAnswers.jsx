import React from 'react';
import '../Faqs.styles.css';

export default function FaqsAnswers(props) {
	return (
		<div className="answer toggleAnswers">
			{props.items.map(({ show, id, answer }) => {
				return show ? <p key={id}>{answer}</p> : null;
			})}
		</div>
	);
}
