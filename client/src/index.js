import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthContextProvider from './providers/AuthContextProvider';
import Authservice from './service/auth';
import PlanService from './service/plan';

const authservice = new Authservice();
const planservice = new PlanService();
ReactDOM.render(
  <React.StrictMode>
  <AuthContextProvider authservice={authservice}>
    <App planservice={planservice}/> 
  </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
