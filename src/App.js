import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Jumbotron from './component/jumbotron'

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Dashboard} exact/>
        <Route path="/jum" component={Jumbotron} />
      </Router>
    </>
  );
}

export default App;
