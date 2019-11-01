import React from 'react';
import FaqsQuestions from './faqs-components/FaqsQuestions';

class Faqs extends React.Component {
	constructor() {
		super();
		this.state = {
			faqs: [
				{
					id: 1,
					question: 'What is Bookmark?',
					answer:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justoeget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis.',
					show: false
				},
				{
					id: 2,
					question: 'How can I request a new browser?',
					answer:
						'Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa,ultricies non ligula.Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.',
					show: false
				},
				{
					id: 3,
					question: 'Is there a mobile app?',
					answer:
						'Sed consectetur quam id neque fermentum accumsan.Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.Cras in ligula quis est pharetra mattis sit amet pharetra purus.Sed sollicitudin ex et ultricies bibendum. ',
					show: false
				},
				{
					id: 4,
					question: 'What about other Chromium browsers?',
					answer:
						'Integer condimentum ipsum id imperdiet finibus.Vivamus in placerat mi, at euismod dui.Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
					show: false
				}
			]
		};
	}

	toggleBody = (id) => {
		this.setState((prevState) => {
			return this.state.faqs.map((item) => {
				return item.id === id ? (item.show = !item.show) : (item.show = false);
			});
		});
	};
	render() {
		return (
			<div className="section-4 section">
				<div className="sectionHeader">
					<h3>Frequently Asked Questions</h3>
					<p className="caption">
						Here are some of our FAQs. If you have any other questions you’d like answered please feel free
						to email us.
					</p>
				</div>
				<FaqsQuestions key={this.state.faqs.id} items={this.state.faqs} onClick={this.toggleBody} />
			</div>
		);
	}
}

export default Faqs;
