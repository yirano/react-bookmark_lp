import React, { Component } from 'react';
import '../Faqs.styles.css';

export class FaqsQuestions extends Component {
	render() {
		const SVGarrow = (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
				<path id="arrow" fill="none" stroke="hsl(229, 31%, 21%)" strokeWidth="3" d="M1 1l8 8 8-8" />
			</svg>
		);
		const activeArrowStyle = {
			stroke: 'red'
		};
		const SVGarrowActive = (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
				<path id="arrow" fill="none" stroke="red" strokeWidth="3" d="M1 1l8 8 8-8" style={activeArrowStyle} />
			</svg>
		);
		const rotate = { transform: 'rotate(180deg)', marginTop: '-6px' };
		return (
			<div className="faqsContainer caption question">
				{this.props.items.map(({ question, id, answer, show }) => {
					return (
						<div key={id} className="faqsContent">
							<div className="question" onClick={() => this.props.onClick(id)}>
								<p>
									{question}
									{show ? <span style={rotate}>{SVGarrowActive}</span> : <span>{SVGarrow}</span>}
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
