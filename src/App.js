import React from 'react';
import './App.css';
import './fonts/fonts.css';
import Nav from './components/nav/nav.component';
import CallToAction from './components/cta/cta.component';
import Features from './components/features/features.component';
import Download from './components/download/download.component';
import Faqs from './components/faqs/faqs.component';

class App extends React.Component {
	render() {
		return (
			<div>
				<Nav />
			</div>
		);
	}
}

export default App;
