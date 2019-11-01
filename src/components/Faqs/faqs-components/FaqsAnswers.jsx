import React, { Component } from 'react';
import '../Faqs.styles.css';

export class FaqsAnswers extends Component {
	render() {
		return (
			<div className="answer toggleAnswers">
				{this.props.items.map(({ show, id, answer }) => {
					return show ? <p key={id}>{answer}</p> : null;
				})}
			</div>
		);
	}
}

export default FaqsAnswers;
