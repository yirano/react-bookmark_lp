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
								<p>
									{question}
									<span id="arrowContainer">
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
											<path
												id="arrow"
												fill="none"
												stroke="hsl(229, 31%, 21%)"
												strokeWidth="3"
												d="M1 1l8 8 8-8"
											/>
										</svg>
									</span>
								</p>
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
