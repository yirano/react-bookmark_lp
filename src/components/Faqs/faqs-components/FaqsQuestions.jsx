import React, { Component } from 'react';
import '../Faqs.styles.css';

export class FaqsQuestions extends Component {
	render() {
		return (
			<div className="faqsContainer caption question">
				{this.props.items.map(({ question, id, answer, show }) => {
					return (
						<div key={id} className="faqsContent">
							<div className="question" onClick={() => this.props.onClick(id)}>
								<p>{question}</p>
							</div>
							<div className="answer toggleAnswers">{show ? <p>{answer}</p> : ''}</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default FaqsQuestions;
