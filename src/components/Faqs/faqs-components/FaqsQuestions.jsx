import React, { Component } from 'react';
import '../Faqs.styles.css';

export class FaqsQuestions extends Component {
	constructor() {
		super();
		this.state = {
			show: true
		};
	}
	toggleBody = () => {
		console.log('clicked');
	};
	render() {
		console.log(this.props);
		return (
			<div className="faqsContainer caption">
				{this.props.items.map(({ question, id, answer }) => {
					return (
						<div key={id} className="faqsContent">
							<div className="question" onClick={this.toggleBody}>
								<p>{question}</p>
							</div>
							<div className="answer toggleAnswers hide">
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
