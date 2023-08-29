import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { Profiler } from 'react';

const root = ReactDOM.createRoot(document.getElementById('main-container'));

function callback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Log or analyze the timing and performance data here
  console.log(
    `Component ${id} rendered in phase ${phase}:`,
    `Actual duration: ${actualDuration.toFixed(2)}ms,`,
    `Base duration: ${baseDuration.toFixed(2)}ms`
  );
}

root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
