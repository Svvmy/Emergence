import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './pages/Home';
import Page2 from './pages/page2';


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
ReactDOM.render( 
    <Router>
        <Route exact path="/">
            <App />
        </Route>
        <Route path="/page2">
            <Page2 />
        </Route>
    </Router>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

