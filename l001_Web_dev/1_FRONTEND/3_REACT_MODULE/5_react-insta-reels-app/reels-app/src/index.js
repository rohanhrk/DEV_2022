import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import ContextParent from './ContextParent';
import Question1 from './TestOnReactHooksContext/Question1';
import Question2 from './TestOnReactHooksContext/Question2';
import Question3 from './TestOnReactHooksContext/Question3';
import Question4 from './TestOnReactHooksContext/Question4'
import Question5 from './TestOnReactHooksContext/Question5'
import Question6 from './TestOnReactHooksContext/Question6'
import Question7 from './TestOnReactHooksContext/Question7'

ReactDOM.render(
  // <Login></Login>
  // <ContextParent></ContextParent>,
  // <Question1></Question1>,
  // <Question2></Question2>,
  // <Question3></Question3>,
  // <Question4></Question4>,
  // <Quetion5></Quetion5>,
  // <Question6></Question6>,
  <Question7></Question7>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
