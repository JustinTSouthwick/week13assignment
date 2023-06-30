import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './index.css';
import App from './App';
import Nav from './components/nav';
import LoginForm from './components/login-form';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(Nav, {}, null)
);

const login = ReactDOM.createRoot(document.getElementById('login'));
login.render(
  React.createElement(LoginForm, {}, null)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
