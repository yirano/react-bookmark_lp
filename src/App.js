import React from 'react';
import './App.css';
import './fonts/fonts.css';
import Nav from './components/Nav/Nav.component';
import CallToAction from './components/Cta/Cta.component';
import Features from './components/Features/Features.component';
import Download from './components/Download/Download.component';
import Faqs from './components/Faqs/Faqs.component';
import Footer from './components/Footer/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<main>
					<Nav />
					<CallToAction />
					<Features />
					<Download />
					<Faqs />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
