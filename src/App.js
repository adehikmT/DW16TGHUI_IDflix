import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Dashboard} />
      </Router>
    </>
  );
}

export default App;
