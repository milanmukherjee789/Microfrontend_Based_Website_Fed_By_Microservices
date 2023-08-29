import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { Profiler } from 'react';

function callback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Log or analyze the timing and performance data here
  console.log(
    `Component ${id} rendered in phase ${phase}:`,
    `Actual duration: ${actualDuration.toFixed(2)}ms,`,
    `Base duration: ${baseDuration.toFixed(2)}ms`
  );
}
const root = ReactDOM.createRoot(document.getElementById('app5'));
root.render(
  <Profiler id="app" onRender={callback}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Profiler>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
