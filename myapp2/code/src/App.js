import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import Panel from './components/Panel/Panel';
import App1Container from './components/App1/App1Container';
import App4Container from './components/App4/App4Container';
import App5Container from './components/App5/App2Container';
import App3Container from './components/App2/App3Container';
import './App.css';
import  { Profiler } from 'react';




function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<LoginPage />} />

        {/* Route for the main App component */}
        <Route path="/app/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}



function AppContent() {
  const location = useLocation();
  const { username } = location.state || {};
  return (
    <>
    
    <Panel id="first_panel" username = {username} header = "report form">
      <div id="app1">
        <App1Container username = {username} url = 'http://localhost:3001/static/js/bundle.js' />
      </div>
    </Panel>
    
    <Panel id="second_panel" username = {username} header = "submitted form">
      <div id="app3">
        <App3Container />
      </div>
    </Panel>
    <Panel id="third_panel" header = "student details">
      <div id="app4">
        <App4Container username = {username} url = 'http://localhost:3004/static/js/bundle.js'/>
      </div>
    </Panel>
    <Panel id="fourth_panel" header = "Student Disseration">
      <div id="app5">
        <App5Container username = {username} url = 'http://localhost:3005/static/js/bundle.js' />
      </div>
    </Panel>
    
    </>
  );
}

export default App;