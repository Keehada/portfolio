import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import NavLink from 'react-bootstrap/NavLink'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import HomePage from './Components/HomePage.js';

function App() {
    return (
        <Router>
            <Header/>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));