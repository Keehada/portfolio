import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import HomePage from './Components/HomePage.js';
import Projects from './Components/Projects.js';
import Jumbotron from './Components/Jumbotron.js';

function App() {
    return (
        <Router>
            <Header/>
            <Jumbotron/>
            <Route exact path='/' component={HomePage}/>
            <Route path='/Projects' component={Projects}/>
        </Router>
    ) 
}

ReactDOM.render(<App />, document.getElementById('root'));