import React, { Component } from 'react';
import '../Faqs.styles.css';

export class FaqsQuestions extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="faqsContainer caption">
				{this.props.items.map(({ question, id, answer }) => {
					return (
						<div key={id} className="faqsContent">
							<div className="question">
								<p>{question}</p>
							</div>
							<div className="answer toggleAnswers">
								<p>{answer}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default FaqsQuestions;
