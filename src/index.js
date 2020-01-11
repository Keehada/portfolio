import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './Components/HomePage.js';
import Projects from './Components/Projects.js';
import Jumbotron from './Components/Jumbotron.js';
import 'shards-ui/dist/css/shards.min.css';
import Resume from './Components/Resume.js';

function App() {
	return (
		<div className="body">
			<Router>
				<Header />
				<Jumbotron />
				<Route exact path="/" component={HomePage} />
				<Route path="/Projects" component={Projects} />
				<Route path="/Resume" component={Resume} />
			</Router>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
