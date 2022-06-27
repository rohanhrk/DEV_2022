import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import ContextParent from './ContextParent';
import UseEffect from './UseEffectMethods/UseEffect';
import MaterialUI from './MaterialUI';
import IntersectionObserver from './IntersectionObserver/IntersectionObserver';


ReactDOM.render(
  // <Login></Login>
  // <ContextParent></ContextParent>,
  // <App></App>
  <IntersectionObserver></IntersectionObserver>,
  // <MaterialUI></MaterialUI>,
  // <UseEffect></UseEffect>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
